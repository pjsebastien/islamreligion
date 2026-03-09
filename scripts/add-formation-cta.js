const fs = require("fs");
const path = require("path");

const appDir = path.join(__dirname, "..", "src", "app");

// Exclusions (already have multiple CTAs or not articles)
const excludeDirs = [
  "formation-arabe-en-ligne",
  "apprendre-larabe",
  "apprendre-le-coran",
  "api",
];

// Get contextual copy based on slug
function getCopy(slug) {
  if (slug.startsWith("rever-") || slug.startsWith("reve-") || slug.includes("reves-")) {
    return {
      title: "Comprenez vos rêves en lisant le Coran en arabe",
      description:
        "Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones.",
    };
  }
  if (slug.startsWith("remede-")) {
    return {
      title: "Lisez les sources originales de la médecine prophétique",
      description:
        "Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones.",
    };
  }
  return {
    title: "Envie d'approfondir votre compréhension ?",
    description:
      "Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones.",
  };
}

let modified = 0;
let skipped = 0;

const dirs = fs.readdirSync(appDir, { withFileTypes: true });

for (const dir of dirs) {
  if (!dir.isDirectory()) continue;
  if (excludeDirs.includes(dir.name)) continue;

  const pagePath = path.join(appDir, dir.name, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, "utf-8");

  // Skip if no AffiliateForm
  if (!content.includes("AffiliateForm")) {
    continue;
  }

  // Skip if already has formation CTA
  if (content.includes('variant="formation"')) {
    skipped++;
    continue;
  }

  const slug = dir.name;
  const copy = getCopy(slug);

  // Find the 2nd occurrence of "              </section>" (14 spaces)
  const sectionClose = "              </section>";
  let idx = content.indexOf(sectionClose);
  if (idx === -1) continue;
  idx = content.indexOf(sectionClose, idx + sectionClose.length);
  if (idx === -1) {
    // Only 1 section? Place after the first one
    idx = content.indexOf(sectionClose);
  }

  // Insert after the closing tag
  const insertPos = idx + sectionClose.length;

  const ctaBlock = `

              <ArticleCTA
                variant="formation"
                title="${copy.title}"
                description="${copy.description}"
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />`;

  content = content.slice(0, insertPos) + ctaBlock + content.slice(insertPos);

  // Add ArticleCTA import if not present
  if (!content.includes("ArticleCTA")) {
    // Insert after the last existing import
    const importRegex = /^import .+ from ".+";$/gm;
    let lastImportMatch;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      lastImportMatch = match;
    }
    if (lastImportMatch) {
      const importInsertPos = lastImportMatch.index + lastImportMatch[0].length;
      content =
        content.slice(0, importInsertPos) +
        '\nimport ArticleCTA from "@/components/ArticleCTA";' +
        content.slice(importInsertPos);
    }
  }

  fs.writeFileSync(pagePath, content, "utf-8");
  modified++;
  console.log(`✓ ${slug}`);
}

console.log(`\nDone: ${modified} modified, ${skipped} skipped (already had formation CTA)`);
