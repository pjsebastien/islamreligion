import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver de fourmis islam : symbolisme du travail et bénédictions divines",
  description:
    "Dans la tradition islamique, rêver de fourmis invite à explorer des enseignements profonds liés au travail, à la persévérance et aux multiples bénédictions divines.",
  alternates: {
    canonical: "https://www.islamreligion.fr/symbolisme-fourmis-islam",
  },
};

const tocItems = [
  { id: "tradition", label: "Tradition coranique et persévérance" },
  { id: "benedictions", label: "Bénédictions divines" },
  { id: "communaute", label: "Organisation et solidarité" },
  { id: "couleurs", label: "Couleurs et contextes" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de fourmis en islam ?",
    answer:
      "En islam, rêver de fourmis symbolise le travail assidu, la patience et la persévérance. La Sourate An-Naml mentionne les fourmis en soulignant leur rôle dans la communauté et l'organisation sociale. Ce rêve invite à valoriser l'effort constant et la solidarité.",
  },
  {
    question: "Rêver de fourmis dans la maison en islam : quelle signification ?",
    answer:
      "Des fourmis entrant dans la maison avec de la nourriture symbolisent l'accroissement de bienfaits et la stabilité familiale. En revanche, des fourmis quittant la maison chargées de nourriture peuvent annoncer une perte de bénédictions et invitent à renforcer la gratitude.",
  },
  {
    question: "Rêver de fourmis noires en islam : est-ce positif ?",
    answer:
      "Les fourmis noires dans un rêve islamique renvoient à la pureté, la discrétion et l'élévation morale. Selon Ibn Sirin, elles symbolisent la purification des péchés et la discrétion dans ses actions. C'est un signe encourageant à poursuivre ses efforts en silence.",
  },
  {
    question: "Rêver de fourmis rouges en islam : quelle interprétation ?",
    answer:
      "Les fourmis rouges symbolisent parfois la jalousie, des ennemis faibles mais persistants, ou une invitation à se méfier des disputes futiles au sein de la communauté. Ce rêve invite à se détourner des conflits et à renforcer la solidarité.",
  },
  {
    question: "Que signifie rêver de tuer des fourmis en islam ?",
    answer:
      "Tuer des fourmis en rêve n'est généralement pas interprété positivement. L'islam valorise ces créatures pour leur travail et leur organisation. Ce rêve peut signifier la négligence envers les bienfaits ou l'ingratitude envers les petites bénédictions d'Allah.",
  },
  {
    question: "Rêver de fourmis sur le corps en islam : que signifie-t-il ?",
    answer:
      "Des fourmis marchant sur le corps en rêve peuvent symboliser la purification des péchés ou la nécessité d'un nettoyage spirituel. Si les fourmis sont sur le lit, cela peut annoncer une descendance abondante ou un prochain mariage pour les célibataires.",
  },
  {
    question: "Quelle est la place des fourmis dans le Coran ?",
    answer:
      "Le Coran consacre aux fourmis la sourate An-Naml (sourate 27), soulignant leur capacité à communiquer, à s'organiser et à travailler pour l'intérêt collectif. Cette mention place les fourmis au rang de modèles à observer pour leur organisation admirable et leur sens du devoir.",
  },
  {
    question: "Rêver de beaucoup de fourmis en islam : bonne ou mauvaise chose ?",
    answer:
      "Une présence abondante de fourmis dans un rêve indique la multitude de moyens de subsistance et de bénédictions offertes au foyer ou à la communauté. C'est généralement un signe positif, invitant à ne jamais minimiser les fruits du travail régulier.",
  },
];

export default function SymbolismeFourmis() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.islamreligion.fr/symbolisme-fourmis-islam/#article",
        headline: "Rêver de fourmis islam : symbolisme du travail et bénédictions divines",
        description: "Signification du rêve de fourmis en islam : travail, persévérance et bénédictions divines selon la tradition.",
        image: "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-fourmis-islam-symbolisme-du-travail-et-benedictions-divines.jpg",
        datePublished: "2025-09-08",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: { "@id": "https://www.islamreligion.fr/symbolisme-fourmis-islam/#webpage" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/symbolisme-fourmis-islam/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.islamreligion.fr" },
          { "@type": "ListItem", position: 2, name: "Rêves en islam", item: "https://www.islamreligion.fr/reves-islam" },
          { "@type": "ListItem", position: 3, name: "Fourmis en islam", item: "https://www.islamreligion.fr/symbolisme-fourmis-islam" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero
          title="Rêver de fourmis islam : symbolisme du travail et bénédictions divines"
          subtitle="Signification du rêve de fourmis selon la tradition islamique, la sourate An-Naml et les textes sacrés."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-fourmis-islam-symbolisme-du-travail-et-benedictions-divines.jpg"
          imageAlt="Rêver de fourmis en islam, symbolisme du travail et bénédictions divines"
          compact
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block"><TableOfContents items={tocItems} /></aside>
            <article className="max-w-3xl">
              <div className="lg:hidden"><TableOfContents items={tocItems} /></div>
              <nav className="mb-8 text-sm text-foreground-secondary" aria-label="Fil d'Ariane">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <Link href="/reves-islam" className="hover:text-primary">Rêves en islam</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Fourmis en islam</span>
              </nav>

              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">En résumé</p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Dans la tradition islamique, rêver de fourmis invite à explorer des enseignements profonds liés au travail, à la persévérance et aux multiples bénédictions divines. La Sourate An-Naml leur consacre une attention singulière, soulignant leur capacité à communiquer, à s&apos;organiser et à travailler pour l&apos;intérêt collectif.
                </p>
              </div>

              {/* SECTION 1 */}
              <section id="tradition" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">Le rêve de fourmis entre tradition coranique et leçon de persévérance</h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Rêver de fourmis, selon la spiritualité musulmane, va bien au-delà d&apos;une simple scène nocturne. Le Coran consacre à ces petites créatures une attention singulière dans la sourate An-Naml, soulignant leur capacité à communiquer, à s&apos;organiser et à travailler pour l&apos;intérêt collectif. Cette mention n&apos;est pas anodine : elle place les fourmis au rang de modèles à observer.
                </p>
                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque le croyant voit des fourmis en rêve, cela traduit souvent une période marquée par l&apos;effort et l&apos;ardeur au travail. La tradition rapporte aussi que la présence abondante de fourmis dans un rêve indique la multitude de moyens de subsistance et de bénédictions offertes au foyer ou à la communauté. Les savants, tels qu&apos;Ibn Sirin, relient la vision des fourmis transportant de la nourriture à l&apos;annonce d&apos;un accroissement des richesses dans la maison.
                </p>
                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span>Patience dans l&apos;attente de la prospérité matérielle ou spirituelle.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span>Persévérance face aux difficultés du quotidien.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span>Capacité à rester uni, même lors des moments de crise.</span></li>
                </ul>
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead><tr className="border-b-2 border-primary/10"><th className="py-3 pr-4 font-semibold text-primary">Symbolisme</th><th className="py-3 pr-4 font-semibold text-primary">Signification spirituelle</th><th className="py-3 font-semibold text-primary">Effet sur la vie quotidienne</th></tr></thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Travail acharné</td><td className="py-3 pr-4">Efforts soutenus, persévérance</td><td className="py-3">Succès et bénédictions matérielles</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Organisation</td><td className="py-3 pr-4">Harmonie communautaire</td><td className="py-3">Solidarité et entraide</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Patience</td><td className="py-3 pr-4">Attente confiante</td><td className="py-3">Surmonter les épreuves</td></tr>
                      <tr><td className="py-3 pr-4 font-medium text-foreground">Gratitude</td><td className="py-3 pr-4">Reconnaissance envers Allah</td><td className="py-3">Multiplication des bienfaits</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-fourmis-islam-symbolisme-du-travail-et-benedictions-divines-1.jpg" alt="Symbolisme des fourmis en islam, travail et persévérance" width={1200} height={720} className="w-full object-cover" />
                </div>
              </section>

              {/* SECTION 2 */}
              <section id="benedictions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">Le message de bénédictions divines dans les rêves de fourmis</h2>
                <p className="mt-6 leading-relaxed text-foreground">
                  Dans la vision islamique du monde, la fourmi est le repère d&apos;une société harmonieuse et ordonnée, reflet de la bénédiction divine lorsque le rêveur se montre reconnaissant. Voir une fourmi entrer chez soi en rêve est généralement interprété comme une invitation à l&apos;action collective, à la solidarité et à la reconnaissance envers Allah pour les biens offerts.
                </p>
                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span><strong>Fourmis entrant avec de la nourriture :</strong> accroissement de bienfaits et succès.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span><strong>Fourmis sortant chargées :</strong> alerte sur la préservation des bénédictions.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span><strong>Essaim en mouvement :</strong> appel à la vigilance et à la gestion équilibrée des dons reçus.</span></li>
                </ul>
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead><tr className="border-b-2 border-primary/10"><th className="py-3 pr-4 font-semibold text-primary">Situation du rêve</th><th className="py-3 font-semibold text-primary">Signification spirituelle</th></tr></thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Fourmis apportant de la nourriture</td><td className="py-3">Stabilité, abondance, équilibre familial</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Fourmis quittant la maison</td><td className="py-3">Pertes, nécessité de veiller à la gratitude</td></tr>
                      <tr><td className="py-3 pr-4 font-medium text-foreground">Fourmis sur le lit</td><td className="py-3">Bénédiction dans la descendance</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-fourmis-islam-symbolisme-du-travail-et-benedictions-divines-2.jpg" alt="Bénédictions divines dans les rêves de fourmis en islam" width={1200} height={720} className="w-full object-cover" />
                </div>
                <ArticleCTA variant="page-mere" title="Pour comprendre les fondements de l'interprétation des rêves" href="/reves-islam" linkText="Voir les 3 types de rêves en islam" />
              </section>

              {/* SECTION 3 */}
              <section id="communaute" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">Organisation, communauté et modèle de solidarité chez les fourmis</h2>
                <p className="mt-6 leading-relaxed text-foreground">
                  Un autre enseignement central issu de la symbolique des fourmis dans l&apos;islam concerne leur rare capacité d&apos;organisation communautaire. Ces insectes ne vivent pas isolés, mais incarnent l&apos;union, la coopération et la force du collectif. Chez les fourmis, chaque individu occupe une place précise, œuvre pour la collectivité et contribue à la prospérité du groupe.
                </p>
                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span>Répartition des tâches pour maximiser l&apos;efficacité collective.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span>Partage des responsabilités selon les capacités de chacun.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span>Mise en avant des forces de chaque individu pour la prospérité du groupe.</span></li>
                </ul>
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead><tr className="border-b-2 border-primary/10"><th className="py-3 pr-4 font-semibold text-primary">Rôle chez les fourmis</th><th className="py-3 font-semibold text-primary">Enseignement pour la communauté musulmane</th></tr></thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Ouvrières</td><td className="py-3">Travail, service altruiste</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Soldats</td><td className="py-3">Protection, soutien des plus vulnérables</td></tr>
                      <tr><td className="py-3 pr-4 font-medium text-foreground">Reine</td><td className="py-3">Leadership humble, guidance spirituelle</td></tr>
                    </tbody>
                  </table>
                </div>
                <ArticleCTA variant="lire-aussi" title="Rêver de souris en islam : signification et interprétation" description="Découvrez ce que symbolise la souris dans un rêve selon Ibn Sirin." href="/rever-souris-islam" />
              </section>

              {/* SECTION 4 */}
              <section id="couleurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">Couleurs, comportements et contextes : interprétations variées</h2>
                <p className="mt-6 leading-relaxed text-foreground">
                  Les significations oniriques changent sensiblement selon la couleur, le lieu ou l&apos;attitude des fourmis aperçues en rêve. Selon Ibn Sirin, voir des fourmis noires marcher sur le corps renvoie à la purification des péchés et à la discrétion dans ses actions. Les fourmis rouges symbolisent parfois la jalousie, des ennemis faibles mais persistants.
                </p>
                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span><strong>Fourmis sur le lit :</strong> annonce d&apos;une descendance abondante ou d&apos;un prochain mariage pour les célibataires.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span><strong>Fourmis quittant la maison avec de la nourriture :</strong> risque de perte de bienfaits et nécessité d&apos;introspection.</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" /><span><strong>Piqûre ou attaque de fourmis :</strong> avertissement sur la présence d&apos;hypocrites ou de conflits cachés.</span></li>
                </ul>
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead><tr className="border-b-2 border-primary/10"><th className="py-3 pr-4 font-semibold text-primary">Type de fourmis</th><th className="py-3 pr-4 font-semibold text-primary">Interprétation onirique</th><th className="py-3 font-semibold text-primary">Conseil spirituel</th></tr></thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Noires</td><td className="py-3 pr-4">Pureté, discrétion, élévation morale</td><td className="py-3">Poursuivre ses efforts en silence</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Rouges</td><td className="py-3 pr-4">Conflits, rivalités, jalousie</td><td className="py-3">Se détourner des disputes, renforcer la solidarité</td></tr>
                      <tr><td className="py-3 pr-4 font-medium text-foreground">Blanches</td><td className="py-3 pr-4">Présence de l&apos;envie, innocence</td><td className="py-3">Redoubler de prudence et prier pour la protection</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-fourmis-islam-symbolisme-du-travail-et-benedictions-divines-3.jpg" alt="Interprétations variées du rêve de fourmis selon les couleurs en islam" width={1200} height={720} className="w-full object-cover" />
                </div>
              </section>

              {/* SECTION 5 : Profils */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">Signification selon la situation du rêveur</h2>
                <p className="mt-6 leading-relaxed text-foreground">Un même rêve de fourmis ne porte pas la même signification selon la personne qui le fait.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour une femme célibataire</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Des fourmis sur le lit peuvent annoncer un mariage prochain. Des fourmis organisées symbolisent la patience nécessaire avant de trouver le bon partenaire.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour une femme mariée</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Les fourmis entrant dans la maison avec de la nourriture annoncent la stabilité et l&apos;abondance au foyer. Des fourmis qui partent invitent à renforcer la communication conjugale.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour une femme enceinte</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Ce rêve est souvent positif, annonçant une descendance abondante et bénie. Les fourmis symbolisent la vitalité et la force de la future mère.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour un homme</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Les fourmis représentent la réussite par le travail acharné. Un essaim de fourmis organisées annonce une période de prospérité professionnelle et de reconnaissance.</p>
                  </div>
                </div>
              </section>

              <FaqSection items={faqItems} id="faq" />

              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Interprétations de rêves similaires</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/reves-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Tous les rêves en islam</Link>
                  <Link href="/rever-souris-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Rêver de souris en islam</Link>
                  <Link href="/rever-rat-islam-purification" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Rêver de rat en islam</Link>
                  <Link href="/reve-arachnide-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Rêver d&apos;araignée en islam</Link>
                </div>
              </section>
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Comprendre l&apos;islam</Link>
                  <Link href="/remede-arabe" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Remèdes et médecine prophétique</Link>
                  <Link href="/apprendre-le-coran" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Apprendre le Coran</Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
