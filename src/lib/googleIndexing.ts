import crypto from "crypto";
import { publishSchedule } from "@/data/publishSchedule";

const INDEXING_API_URL =
  "https://indexing.googleapis.com/v3/urlNotifications:publish";
const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/indexing https://www.googleapis.com/auth/webmasters.readonly";
const BASE_URL = "https://www.islamreligion.fr";

function base64url(data: Buffer | string): string {
  const b64 =
    typeof data === "string"
      ? Buffer.from(data).toString("base64")
      : data.toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function getAccessToken(): Promise<string> {
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
  category: string;
  notifyTime: string | null;
  error: string | null;
}

// Pages statiques (hors publishSchedule)
const STATIC_PAGES: { slug: string; category: string }[] = [
  { slug: "", category: "principal" },
  { slug: "apprendre-larabe", category: "principal" },
  { slug: "apprendre-le-coran", category: "principal" },
  { slug: "formation-arabe-en-ligne", category: "principal" },
  { slug: "doua-islam", category: "principal" },
  { slug: "reves-islam", category: "principal" },
  { slug: "remede-arabe", category: "principal" },
  { slug: "a-propos", category: "principal" },
  { slug: "mentions-legales", category: "principal" },
  { slug: "reve-poisson-islam-richesse", category: "reves" },
  { slug: "signification-reve-tuer-islam", category: "reves" },
  { slug: "pleurer-reve-islam-compassion", category: "reves" },
  { slug: "reve-arachnide-islam", category: "reves" },
  { slug: "reve-cheval-islam-bienfaits", category: "reves" },
  { slug: "reve-erotique-islam-purification", category: "reves" },
  { slug: "reves-ex-islam", category: "reves" },
  { slug: "mariage-islam-presages-significations", category: "autres" },
  { slug: "sorcellerie-islam-protection", category: "autres" },
  { slug: "symbolisme-fourmis-islam", category: "autres" },
  { slug: "cafard-islam-signification", category: "autres" },
  { slug: "temoins-crime-islam-protection", category: "autres" },
  { slug: "prier-islam-excellence-spirituelle", category: "autres" },
  { slug: "fin-monde-islam-preparation", category: "autres" },
  { slug: "priere-voyageur-islam", category: "autres" },
  { slug: "peches-sexualite-islam", category: "autres" },
  { slug: "abandon-priere-islam-consequences", category: "autres" },
  { slug: "signes-fin-monde-islam", category: "autres" },
  { slug: "dajjal-signes-islam", category: "autres" },
  { slug: "retour-jesus-islam", category: "autres" },
  { slug: "gog-magog-liberation-fin-des-temps", category: "autres" },
  { slug: "signes-mineurs-actuels", category: "autres" },
  { slug: "halal-haram-criteres", category: "autres" },
  { slug: "jurisprudence-islamique-coran-sunna-ijma", category: "autres" },
  { slug: "istikhara-priere-consultation", category: "autres" },
  { slug: "invocations-reussite-facilite", category: "autres" },
  { slug: "mariage-islamique-contrat", category: "autres" },
  { slug: "divorce-islam-talaq-khula", category: "autres" },
  { slug: "droits-femme-divorce-islamique", category: "autres" },
  { slug: "maternite-islam-responsabilite", category: "autres" },
  { slug: "conditions-maghfira-pardon", category: "autres" },
  { slug: "repentir-sincere-islam-tawba", category: "autres" },
  { slug: "apprendre-science-religieuse-islam", category: "autres" },
  { slug: "remede-yeux-islam-soins", category: "remedes" },
  { slug: "remede-arabe-endometriose", category: "remedes" },
  { slug: "alopecie-remede-islam", category: "remedes" },
  { slug: "remede-arabe-acouphene", category: "remedes" },
  { slug: "psoriasis-remede-arabe", category: "remedes" },
  { slug: "remede-arabe-arreter-fumer", category: "remedes" },
  { slug: "remede-arabe-constipation", category: "remedes" },
  { slug: "remede-arabe-hemorroides", category: "remedes" },
  { slug: "remede-arabe-toux-soins-naturels", category: "remedes" },
  { slug: "remede-angoisse-islam", category: "remedes" },
  { slug: "remede-arabe-grossesse", category: "remedes" },
  { slug: "remede-arabe-maigrir-islam", category: "remedes" },
];

export async function getAllIndexingStatuses(): Promise<UrlIndexingStatus[]> {
  const token = await getAccessToken();
  const { isPublished } = await import("@/data/publishSchedule");

  // Combiner pages statiques + articles du publishSchedule publies
  const allPages: { slug: string; category: string }[] = [
    ...STATIC_PAGES,
    ...publishSchedule
      .filter((a) => isPublished(a.publishDate))
      .map((a) => ({ slug: a.slug, category: a.category })),
  ];

  // Dedupliquer par slug
  const seen = new Set<string>();
  const uniquePages = allPages.filter((p) => {
    if (seen.has(p.slug)) return false;
    seen.add(p.slug);
    return true;
  });

  const results = await Promise.allSettled(
    uniquePages.map(async (page) => {
      const url = page.slug ? `${BASE_URL}/${page.slug}` : BASE_URL;
      const res = await fetch(
        `https://indexing.googleapis.com/v3/urlNotifications/metadata?url=${encodeURIComponent(url)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!res.ok) {
        return {
          url,
          slug: page.slug || "/",
          category: page.category,
          notifyTime: null,
          error: res.status === 404 ? "Jamais soumis" : `Erreur ${res.status}`,
        };
      }

      const data = await res.json();
      return {
        url,
        slug: page.slug || "/",
        category: page.category,
        notifyTime: data.latestUpdate?.notifyTime ?? null,
        error: null,
      };
    })
  );

  return results.map((r, i) => {
    if (r.status === "fulfilled") return r.value;
    const page = uniquePages[i];
    return {
      url: page.slug ? `${BASE_URL}/${page.slug}` : BASE_URL,
      slug: page.slug || "/",
      category: page.category,
      notifyTime: null,
      error: r.reason?.message ?? String(r.reason),
    };
  });
}
