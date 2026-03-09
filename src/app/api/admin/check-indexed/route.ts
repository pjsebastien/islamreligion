import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/googleIndexing";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL manquante" }, { status: 400 });
    }

    const token = await getAccessToken();

    const res = await fetch(
      "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          inspectionUrl: url,
          siteUrl: "https://www.islamreligion.fr/",
        }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: `Erreur ${res.status}: ${text}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    const verdict = data.inspectionResult?.indexStatusResult?.verdict;
    const coverageState = data.inspectionResult?.indexStatusResult?.coverageState;
    const lastCrawlTime = data.inspectionResult?.indexStatusResult?.lastCrawlTime;

    return NextResponse.json({
      indexed: verdict === "PASS",
      verdict,
      coverageState,
      lastCrawlTime,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
