import crypto from "crypto";
import { publishSchedule } from "@/data/publishSchedule";

const INDEXING_API_URL =
  "https://indexing.googleapis.com/v3/urlNotifications:publish";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/indexing";
const BASE_URL = "https://www.islamreligion.fr";

function base64url(data: Buffer | string): string {
  const b64 =
    typeof data === "string"
      ? Buffer.from(data).toString("base64")
      : data.toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !privateKey) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    })
  );

  const signature = crypto
    .createSign("RSA-SHA256")
    .update(`${header}.${claims}`)
    .sign(privateKey);

  const jwt = `${header}.${claims}.${base64url(signature)}`;

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed (${res.status}): ${text}`);
  }

  const json = await res.json();
  return json.access_token;
}

export function getTodaysNewArticles(): string[] {
  const today = new Date().toISOString().slice(0, 10);
  return publishSchedule
    .filter((a) => a.publishDate === today)
    .map((a) => `${BASE_URL}/${a.slug}`);
}

export async function submitUrlsToGoogle(
  urls: string[]
): Promise<{ submitted: number; errors: string[] }> {
  if (urls.length === 0) return { submitted: 0, errors: [] };

  const token = await getAccessToken();
  const errors: string[] = [];
  let submitted = 0;

  const results = await Promise.allSettled(
    urls.map(async (url) => {
      const res = await fetch(INDEXING_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ url, type: "URL_UPDATED" }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`${url} → ${res.status}: ${text}`);
      }
      return url;
    })
  );

  for (const r of results) {
    if (r.status === "fulfilled") {
      submitted++;
    } else {
      errors.push(r.reason?.message ?? String(r.reason));
    }
  }

  return { submitted, errors };
}

export interface UrlIndexingStatus {
  url: string;
  slug: string;
  publishDate: string;
  notifyTime: string | null;
  error: string | null;
}

export async function getAllIndexingStatuses(): Promise<UrlIndexingStatus[]> {
  const token = await getAccessToken();
  const { isPublished } = await import("@/data/publishSchedule");

  const published = publishSchedule.filter((a) => isPublished(a.publishDate));

  const results = await Promise.allSettled(
    published.map(async (article) => {
      const url = `${BASE_URL}/${article.slug}`;
      const res = await fetch(
        `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!res.ok) {
        return {
          url,
          slug: article.slug,
          publishDate: article.publishDate,
          notifyTime: null,
          error: res.status === 404 ? "Jamais soumis" : `Erreur ${res.status}`,
        };
      }

      const data = await res.json();
      return {
        url,
        slug: article.slug,
        publishDate: article.publishDate,
        notifyTime: data.latestUpdate?.notifyTime ?? null,
        error: null,
      };
    })
  );

  return results.map((r, i) => {
    if (r.status === "fulfilled") return r.value;
    return {
      url: `${BASE_URL}/${published[i].slug}`,
      slug: published[i].slug,
      publishDate: published[i].publishDate,
      notifyTime: null,
      error: r.reason?.message ?? String(r.reason),
    };
  });
}
