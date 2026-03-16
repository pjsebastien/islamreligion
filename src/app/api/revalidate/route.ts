import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getTodaysNewArticles, submitUrlsToGoogle } from "@/lib/googleIndexing";

export async function GET() {
  revalidatePath("/");
  revalidatePath("/reves-islam");
  revalidatePath("/doua-islam");
  revalidatePath("/hadith-du-jour");
  revalidatePath("/quizz-islam-enfant");
  revalidatePath("/sitemap.xml");

  // Google Indexing API : uniquement en production (Vercel)
  let indexing = { submitted: 0, errors: [] as string[] };
  if (process.env.VERCEL === "1") {
    try {
      const newUrls = getTodaysNewArticles();
      if (newUrls.length > 0) {
        const allUrls = [
          ...newUrls,
          "https://www.islamreligion.fr",
          "https://www.islamreligion.fr/doua-islam",
          "https://www.islamreligion.fr/reves-islam",
        ];
        indexing = await submitUrlsToGoogle(allUrls);
      }
    } catch (error) {
      console.error("Google Indexing API error:", error);
      indexing.errors.push(String(error));
    }
  }

  return NextResponse.json({
    revalidated: true,
    date: new Date().toISOString(),
    indexing,
  });
}
