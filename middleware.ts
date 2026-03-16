import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { publishSchedule, isPublished } from "@/data/publishSchedule";

export function middleware(request: NextRequest) {
  const slug = request.nextUrl.pathname.slice(1); // retire le / initial

  // Vérifie uniquement les slugs présents dans le planning de publication
  const article = publishSchedule.find((a) => a.slug === slug);

  if (article && !isPublished(article.publishDate)) {
    // Réécrire vers la page 404 pour les articles non encore publiés
    const url = request.nextUrl.clone();
    url.pathname = "/not-found";
    return NextResponse.rewrite(url, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Exclure les routes système, API, assets et fichiers statiques
    "/((?!api|_next|images|favicon|robots|sitemap|admin).*)",
  ],
};
