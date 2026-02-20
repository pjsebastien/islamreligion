import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title:
    "Remède pour les yeux en islam : soins oculaires selon la sunna et la tradition prophétique",
  description:
    "Découvrez les remèdes prophétiques pour les yeux en islam : kohl ithmid, miel, nigelle, eau de zamzam, invocations de protection de la vue et conseils pratiques issus de la sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-yeux-islam-soins",
  },
};

const tocItems = [
  { id: "kohl-ithmid", label: "Le kohl ithmid : remède prophétique pour les yeux" },
  { id: "miel-nigelle", label: "Miel et nigelle : protéger la vue naturellement" },
  { id: "zamzam-invocations", label: "Eau de zamzam et invocations pour la vue" },
  { id: "hijama-remedes", label: "Hijama, qist et autres soins de la sunna" },
  { id: "science-moderne", label: "Remèdes prophétiques et médecine moderne" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Le kohl ithmid est-il vraiment recommandé par le Prophète ﷺ pour les yeux ?",
    answer:
      "Oui, plusieurs hadiths authentiques rapportent que le Prophète Muhammad ﷺ utilisait le kohl à base d\u2019ithmid (antimoine naturel) et en recommandait l\u2019usage. Selon un hadith rapporté par At-Tirmidhi et Ibn Majah, il a dit : « Parmi les meilleures choses avec lesquelles vous pouvez vous mettre du kohl, il y a l\u2019ithmid, car il renforce la vue et fait pousser les cils. » Il l\u2019appliquait le soir, en nombre impair, trois fois dans chaque œil selon certaines narrations.",
  },
  {
    question:
      "Comment utiliser le miel pour les problèmes oculaires en islam ?",
    answer:
      "Le miel est mentionné dans le Coran (sourate An-Nahl, verset 69) comme un remède pour les gens. Dans la tradition prophétique, il est utilisé pour apaiser les irritations oculaires légères. La méthode la plus courante consiste à diluer une petite quantité de miel pur dans de l\u2019eau tiède et à utiliser cette solution pour nettoyer délicatement le contour des yeux. Il ne faut jamais appliquer de miel pur directement dans l\u2019œil sans avis médical préalable.",
  },
  {
    question:
      "La nigelle (habba sawda) peut-elle améliorer la vue ?",
    answer:
      "Le Prophète ﷺ a dit, selon un hadith rapporté par Al-Bukhari : « La graine noire est un remède contre toute maladie, sauf la mort. » La nigelle contient de la thymoquinone, un composé aux propriétés anti-inflammatoires et antioxydantes qui pourrait protéger les tissus oculaires. Son utilisation se fait principalement par voie orale (graines ou huile) pour bénéficier de ses bienfaits sur la santé générale et la vision. L\u2019huile de nigelle peut aussi être massée délicatement autour du contour des yeux.",
  },
  {
    question:
      "L\u2019eau de zamzam a-t-elle des bienfaits pour les yeux ?",
    answer:
      "L\u2019eau de zamzam occupe une place sacrée en islam. Le Prophète ﷺ a dit : « L\u2019eau de zamzam est pour ce pour quoi elle est bue » (rapporté par Ibn Majah). De nombreux croyants l\u2019utilisent en formulant une intention de guérison pour leurs yeux, en la buvant ou en la passant délicatement sur les paupières. Elle est considérée comme une eau bénie dont les bienfaits sont liés à la foi et à l\u2019intention sincère de celui qui la consomme.",
  },
  {
    question:
      "Quelles invocations (dou\u2019as) réciter pour protéger sa vue ?",
    answer:
      "Plusieurs invocations sont recommandées pour la protection de la vue. On peut réciter la sourate Al-Fatiha, Ayat Al-Kursi (verset 255 de la sourate Al-Baqara), et les trois dernières sourates du Coran (Al-Ikhlas, Al-Falaq, An-Nas). Une dou\u2019a spécifique est : « Allahumma \u2019afini fi badani, Allahumma \u2019afini fi sam\u2019i, Allahumma \u2019afini fi basari » (Ô Allah, accorde-moi la santé dans mon corps, dans mon ouïe et dans ma vue). Cette invocation est rapportée par Abu Dawud.",
  },
  {
    question:
      "La hijama (ventouses) peut-elle soulager les problèmes de vue ?",
    answer:
      "La hijama est une pratique de médecine prophétique qui consiste à appliquer des ventouses sur des points précis du corps. Lorsqu\u2019elle est pratiquée sur la nuque (al-akhda\u2019ayn) ou les tempes, elle peut améliorer la circulation sanguine vers la tête et les yeux, soulageant ainsi certaines tensions et fatigues oculaires. Le Prophète ﷺ a pratiqué la hijama à plusieurs reprises. Il est toutefois recommandé de faire appel à un praticien qualifié et de ne jamais remplacer un suivi ophtalmologique par cette seule pratique.",
  },
  {
    question:
      "Les remèdes prophétiques pour les yeux remplacent-ils la médecine moderne ?",
    answer:
      "Non, les remèdes prophétiques ne remplacent pas la médecine moderne. Ils constituent un complément spirituel et naturel qui peut accompagner un traitement médical conventionnel. L\u2019islam encourage la recherche de la guérison par tous les moyens licites. Le Prophète ﷺ a dit : « Serviteurs d\u2019Allah, soignez-vous, car Allah n\u2019a créé aucune maladie sans créer son remède » (rapporté par Abu Dawud). En cas de problème oculaire, la consultation d\u2019un ophtalmologue reste la priorité absolue.",
  },
  {
    question:
      "Comment intégrer les soins oculaires de la sunna dans sa routine quotidienne ?",
    answer:
      "Pour intégrer les soins oculaires prophétiques au quotidien, commencez par appliquer le kohl ithmid avant le coucher (trois fois dans chaque œil). Prenez une cuillère de miel pur le matin et consommez régulièrement de la nigelle (en graines ou en huile). Récitez les invocations de protection après chaque prière. Accordez du repos à vos yeux en faisant des pauses régulières devant les écrans, et privilégiez la lumière naturelle. Ces gestes simples allient tradition prophétique et bon sens pour la santé visuelle.",
  },
];

export default function RemedeYeuxIslamSoins() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-yeux-islam-soins/#article",
        headline:
          "Remède pour les yeux en islam : soins oculaires selon la sunna et la tradition prophétique",
        description:
          "Découvrez les remèdes prophétiques pour les yeux en islam : kohl ithmid, miel, nigelle, eau de zamzam, invocations de protection de la vue et conseils pratiques issus de la sunna.",
        image:
          "/images/remede-yeux-islam-soins.jpg",
        datePublished: "2025-09-03",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-yeux-islam-soins/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-yeux-islam-soins/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.islamreligion.fr",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Remèdes arabes",
            item: "https://www.islamreligion.fr/remede-arabe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Soins des yeux",
            item: "https://www.islamreligion.fr/remede-yeux-islam-soins",
          },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero
          title="Remède pour les yeux en islam : soins oculaires selon la sunna"
          subtitle="Kohl ithmid, miel, nigelle, eau de zamzam et invocations prophétiques pour préserver et protéger la vue au quotidien."
          imageSrc="/images/remede-yeux-islam-soins.jpg"
          imageAlt="Remèdes prophétiques pour les yeux en islam, soins oculaires naturels selon la sunna"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article className="max-w-3xl">
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>

              {/* Fil d'Ariane */}
              <nav
                className="mb-8 text-sm text-foreground-secondary"
                aria-label="Fil d'Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/remede-arabe" className="hover:text-primary">
                  Remèdes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Soins des yeux</span>
              </nav>

              {/* Avertissement médical */}
              <MedicalDisclaimer />

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La tradition islamique accorde une attention toute
                  particulière à la préservation de la vue. Du kohl ithmid
                  recommandé par le Prophète Muhammad ﷺ aux vertus du miel, de
                  la nigelle et de l&apos;eau de zamzam, les soins oculaires
                  prophétiques conjuguent sagesse spirituelle et bienfaits
                  naturels. Ces remèdes, toujours pratiqués avec l&apos;intention
                  pieuse et en complément d&apos;un suivi médical, offrent une
                  approche holistique du soin des yeux.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le kohl ithmid */}
              {/* ============================================ */}
              <section id="kohl-ithmid" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le kohl ithmid : le remède prophétique par excellence pour les
                  yeux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les soins oculaires les plus célèbres de la tradition
                  islamique, le kohl à base d&apos;ithmid (antimoine naturel)
                  occupe une place de choix. Le Prophète Muhammad ﷺ en
                  recommandait l&apos;usage régulier et l&apos;appliquait
                  lui-même, comme le rapportent de nombreux hadiths authentiques.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  At-Tirmidhi et Ibn Majah rapportent que le Prophète ﷺ a dit :
                  « Utilisez l&apos;ithmid, car il éclaircit la vue et fait
                  pousser les cils. » Ibn Al-Qayyim, dans son ouvrage
                  &quot;Zad al-Ma&apos;ad&quot;, précise que le kohl ithmid
                  possède des propriétés qui purifient l&apos;œil des impuretés,
                  consolident la netteté du regard et offrent une protection
                  contre les infections. Ce minéral précieux, tiré des pierres
                  d&apos;antimoine que l&apos;on trouve au Hijaz et en Iran,
                  traverse les siècles et reste un pilier de la médecine
                  prophétique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Comment appliquer le kohl selon la sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;application du kohl ithmid suit un protocole précis
                  hérité de la tradition prophétique. Le Prophète ﷺ
                  l&apos;appliquait le soir, avant le coucher, en nombre impair.
                  Certaines narrations mentionnent trois applications dans
                  l&apos;œil droit et deux dans l&apos;œil gauche, ou trois dans
                  chaque œil. Le mouvement doux de l&apos;applicateur (mirwad)
                  sur la ligne interne des paupières permet de déposer
                  délicatement la poudre et de bénéficier de ses bienfaits
                  protecteurs.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Renforcement de la vue</strong> : les propriétés
                      minérales de l&apos;ithmid contribuent à la netteté
                      visuelle et à la protection de la cornée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Croissance des cils</strong> : l&apos;antimoine
                      naturel stimule les follicules pileux des cils, les
                      rendant plus épais et plus résistants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection antibactérienne</strong> : le kohl
                      ithmid possède des propriétés antimicrobiennes qui aident
                      à prévenir les conjonctivites et autres infections.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Soulagement de la sécheresse</strong> : appliqué
                      régulièrement, il hydrate la muqueuse oculaire et apaise
                      les irritations causées par la poussière ou le vent.
                    </span>
                  </li>
                </ul>

                {/* Tableau kohl */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Caractéristique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Kohl ithmid (sunna)
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Kohls commerciaux classiques
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Origine
                        </td>
                        <td className="py-3 pr-4">
                          Minéral naturel (antimoine du Hijaz ou d&apos;Iran)
                        </td>
                        <td className="py-3">
                          Charbons, pigments synthétiques, plomb parfois
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vertus principales
                        </td>
                        <td className="py-3 pr-4">
                          Renforce la vue, antibactérien, pousse des cils
                        </td>
                        <td className="py-3">
                          Principalement esthétique
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Application
                        </td>
                        <td className="py-3 pr-4">
                          Paupières intérieures, nombre impair, le soir
                        </td>
                        <td className="py-3">
                          Ligne extérieure, sans protocole particulier
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dimension spirituelle
                        </td>
                        <td className="py-3 pr-4">
                          Sunna du Prophète ﷺ, intention de soin et
                          d&apos;adoration
                        </td>
                        <td className="py-3">
                          Aucune dimension religieuse
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Précautions
                        </td>
                        <td className="py-3 pr-4">
                          Choisir un ithmid pur, certifié sans plomb
                        </td>
                        <td className="py-3">
                          Vérifier la composition, risque de métaux lourds
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La double dimension du kohl ithmid, à la fois esthétique et
                  médicale, en fait un symbole vivant de la sunna. Les femmes
                  l&apos;adoptent pour sublimer leur regard, tandis que les
                  hommes y trouvent un soin protecteur contre la sécheresse, les
                  poussières et la lumière intense. Chez certains savants, le
                  simple geste d&apos;appliquer le kohl avec l&apos;intention de
                  suivre la sunna transforme ce rituel en acte d&apos;adoration.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Remede-pour-les-yeux-islam-soins-oculaires-selon-la-sunna-et-tradition-1.jpg"
                    alt="Le kohl ithmid, remède prophétique pour les yeux en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="page-mere"
                title="Retrouvez tous les remèdes de la médecine prophétique"
                href="/remede-arabe"
                linkText="Voir la page Remèdes arabes"
              />

              {/* ============================================ */}
              {/* SECTION 2 : Miel et nigelle */}
              {/* ============================================ */}
              <section id="miel-nigelle" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Miel pur et nigelle : deux piliers naturels pour protéger la
                  vue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La médecine prophétique a consacré une place d&apos;honneur au
                  miel et à la nigelle (habba sawda) dans le soin du corps, et
                  les yeux ne font pas exception. Ces deux remèdes naturels se
                  distinguent par leur ancrage à la fois coranique et
                  scientifique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le miel : nectar divin aux vertus oculaires
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne le miel comme un remède pour les gens dans
                  la sourate An-Nahl (verset 69) : « De leurs entrailles sort
                  une liqueur aux couleurs variées, dans laquelle il y a une
                  guérison pour les gens. » Le Prophète ﷺ consommait
                  régulièrement du miel et le recommandait pour de nombreux
                  maux. Pour les soins oculaires, le miel pur est
                  traditionnellement utilisé en dilution légère pour apaiser les
                  irritations, réduire la sécheresse et favoriser la
                  régénération des muqueuses oculaires.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La méthode la plus courante consiste à diluer une petite
                  quantité de miel brut dans de l&apos;eau tiède stérile, puis à
                  appliquer cette solution en compresse douce sur les paupières
                  fermées. Certaines familles musulmanes perpétuent cette
                  pratique depuis des générations, témoignant de ses effets
                  apaisants sur les rougeurs et les fatigues oculaires. Il est
                  toutefois primordial de ne jamais appliquer de miel pur
                  directement dans l&apos;œil sans avoir consulté un
                  professionnel de santé au préalable.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La nigelle (habba sawda) : le remède universel au service de
                  la vue
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ a affirmé, dans un hadith rapporté par
                  Al-Bukhari : « La graine noire est un remède contre toute
                  maladie, sauf la mort. » La nigelle, ou Nigella sativa de son
                  nom botanique, contient de la thymoquinone, un composé
                  bioactif reconnu pour ses propriétés anti-inflammatoires,
                  antioxydantes et antimicrobiennes. Ces qualités en font un
                  allié précieux pour la protection et le renforcement de la
                  vision.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;huile de nigelle peut être massée délicatement autour
                  du contour des yeux (sans jamais la mettre directement dans
                  l&apos;œil) pour favoriser une hydratation douce et protéger
                  la peau fine de cette zone. En consommation interne, les
                  graines de nigelle ou l&apos;huile pressée à froid contribuent
                  à la vitalité générale de l&apos;organisme, ce qui bénéficie
                  indirectement à la santé visuelle. De nombreuses personnes
                  associent le miel et la nigelle dans une préparation
                  quotidienne matinale, perpétuant ainsi la sunna prophétique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Diluer le miel pur</strong> dans de l&apos;eau
                      tiède stérile pour un nettoyage doux du contour des yeux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Masser le contour de l&apos;œil</strong> avec de
                      l&apos;huile de nigelle pressée à froid pour une
                      hydratation naturelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consommer une cuillère</strong> de miel mélangé à
                      des graines de nigelle chaque matin, à jeun, pour
                      fortifier l&apos;organisme.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais appliquer</strong> directement dans
                      l&apos;œil sans avis médical, que ce soit le miel ou
                      l&apos;huile de nigelle.
                    </span>
                  </li>
                </ul>

                {/* Tableau miel / nigelle */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Remède
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bienfaits pour les yeux
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Mode d&apos;utilisation
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source islamique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel pur
                        </td>
                        <td className="py-3 pr-4">
                          Apaise irritations, réduit sécheresse, favorise la
                          régénération
                        </td>
                        <td className="py-3 pr-4">
                          Dilué dans de l&apos;eau tiède, en compresse
                        </td>
                        <td className="py-3">
                          Coran, An-Nahl : 69
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nigelle (graines)
                        </td>
                        <td className="py-3 pr-4">
                          Renforce la résistance visuelle, antioxydant puissant
                        </td>
                        <td className="py-3 pr-4">
                          Consommation orale quotidienne
                        </td>
                        <td className="py-3">
                          Hadith, Al-Bukhari
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile de nigelle
                        </td>
                        <td className="py-3 pr-4">
                          Hydrate le contour de l&apos;œil, anti-inflammatoire
                        </td>
                        <td className="py-3 pr-4">
                          Massage doux contour des yeux
                        </td>
                        <td className="py-3">
                          Hadith, Al-Bukhari
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel + nigelle
                        </td>
                        <td className="py-3 pr-4">
                          Synergie protectrice et fortifiante
                        </td>
                        <td className="py-3 pr-4">
                          1 cuillère miel + graines, chaque matin
                        </td>
                        <td className="py-3">
                          Tradition prophétique combinée
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;alliance du miel et de la nigelle représente une
                  approche holistique typique de la médecine prophétique, où
                  chaque remède renforce l&apos;autre. Le croyant qui pratique
                  ces soins avec l&apos;intention de suivre la sunna et de
                  préserver le bienfait de la vue transforme un geste quotidien
                  en acte d&apos;adoration, unissant soin du corps et soin de
                  l&apos;âme.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Remede-pour-les-yeux-islam-soins-oculaires-selon-la-sunna-et-tradition-2.jpg"
                    alt="Miel pur et nigelle, remèdes naturels pour les yeux selon la sunna islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Eau de zamzam et invocations */}
              {/* ============================================ */}
              <section id="zamzam-invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Eau de zamzam et invocations pour la protection de la vue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;eau de zamzam et les invocations coraniques occupent
                  une place unique dans la tradition islamique de soin des yeux.
                  Elles relèvent d&apos;une dimension spirituelle profonde, où
                  la guérison passe par la confiance totale en Allah et
                  l&apos;intention sincère du croyant.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;eau de zamzam : une eau bénie pour les yeux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Jaillissant depuis des millénaires au cœur de la Mosquée
                  sacrée de La Mecque, l&apos;eau de zamzam est considérée comme
                  l&apos;eau la plus bénie au monde pour les musulmans. Le
                  Prophète ﷺ a dit : « L&apos;eau de zamzam est pour ce pour
                  quoi elle est bue » (rapporté par Ibn Majah). Cette parole
                  prophétique encourage les croyants à formuler une intention
                  précise de guérison lorsqu&apos;ils consomment cette eau.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour les soins oculaires, la tradition rapporte que certains
                  compagnons du Prophète ﷺ utilisaient l&apos;eau de zamzam
                  pour laver délicatement leurs paupières, en formulant une
                  dou&apos;a de guérison et de protection de la vue. L&apos;eau
                  de zamzam est riche en minéraux (calcium, magnésium,
                  fluorure), ce qui lui confère des propriétés
                  rafraîchissantes. Sa consommation régulière, accompagnée
                  d&apos;une intention pieuse, est perçue comme un moyen de
                  renforcer la santé globale, y compris la santé des yeux.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les invocations de protection de la vue
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam accorde une importance considérable aux
                  invocations (dou&apos;as) comme moyen de préservation de la
                  santé. Plusieurs dou&apos;as authentiques sont spécifiquement
                  liées à la protection de la vue et de l&apos;ouïe. Abu Dawud
                  rapporte que le Prophète ﷺ récitait chaque matin :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-center text-lg font-semibold text-primary" dir="rtl">
                    اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي
                    سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي
                  </p>
                  <p className="mt-3 text-center text-sm italic text-foreground-secondary">
                    « Allahumma &apos;afini fi badani, Allahumma &apos;afini fi
                    sam&apos;i, Allahumma &apos;afini fi basari »
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    (Ô Allah, accorde-moi la santé dans mon corps, dans mon
                    ouïe et dans ma vue)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les sourates protectrices sont également recommandées pour
                  la protection globale, y compris celle de la vue. La
                  récitation quotidienne d&apos;Ayat Al-Kursi (verset 255,
                  sourate Al-Baqara), de la sourate Al-Fatiha et des trois
                  dernières sourates du Coran (Al-Ikhlas, Al-Falaq, An-Nas)
                  constitue un bouclier spirituel que le Prophète ﷺ lui-même
                  pratiquait chaque soir.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Boire l&apos;eau de zamzam</strong> en formulant
                      une intention de guérison pour ses yeux et en récitant
                      &quot;Bismillah&quot;.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Passer délicatement</strong> l&apos;eau de zamzam
                      sur les paupières fermées en invoquant la protection
                      divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter la dou&apos;a</strong> de protection de la
                      vue trois fois chaque matin, conformément à la sunna.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lire les sourates protectrices</strong> (Al-Falaq,
                      An-Nas, Al-Ikhlas) en soufflant dans ses mains, puis les
                      passer sur ses yeux et son visage avant de dormir.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La combinaison de l&apos;eau de zamzam et des invocations
                  prophétiques offre au croyant une approche spirituelle
                  puissante du soin des yeux. L&apos;intention (niyyah) joue un
                  rôle fondamental dans cette démarche : c&apos;est par la
                  sincérité du cœur et la confiance en la miséricorde d&apos;Allah
                  que ces remèdes atteignent leur pleine dimension.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="La protection spirituelle en islam face à la sorcellerie"
                  description="Découvrez les invocations, la Ruqyah et les moyens de protection recommandés par la sunna."
                  href="/sorcellerie-islam-protection"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Hijama et autres remèdes */}
              {/* ============================================ */}
              <section id="hijama-remedes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hijama, costus indien et jujubier : les soins complémentaires
                  de la sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà du kohl, du miel et de la nigelle, la tradition
                  prophétique propose d&apos;autres remèdes pour accompagner la
                  santé des yeux. La hijama (ventouses), le costus indien (qist
                  al-hindi) et le jujubier (sidr) complètent cette pharmacopée
                  naturelle avec des bienfaits spécifiques.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La hijama : soulager les tensions oculaires par les ventouses
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La hijama (saignée par ventouses) est l&apos;une des
                  pratiques médicales les plus recommandées par le Prophète ﷺ.
                  Selon un hadith rapporté par Al-Bukhari, il a dit : « Le
                  meilleur des remèdes que vous utilisez est la hijama. » Lorsqu&apos;elle
                  est pratiquée sur des zones spécifiques comme la nuque
                  (al-akhda&apos;ayn), les tempes ou le sommet du crâne, la
                  hijama favorise la circulation sanguine vers la tête et les
                  yeux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette amélioration de la circulation peut contribuer à
                  soulager les migraines ophtalmiques, réduire la fatigue
                  oculaire chronique et atténuer les tensions accumulées dans la
                  zone péri-oculaire. Les praticiens formés à cette technique
                  ciblent les points méridiens liés à la vision pour un effet
                  optimal. Il reste indispensable de consulter un praticien
                  qualifié et de toujours maintenir un suivi ophtalmologique
                  parallèle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le costus indien (qist al-hindi) : un anti-inflammatoire
                  naturel
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ a recommandé le costus indien dans plusieurs
                  hadiths. Muslim rapporte qu&apos;il a dit : « Le meilleur
                  remède que vous utilisiez est la hijama et le costus marin. »
                  Le qist al-hindi, sous forme de poudre ou d&apos;huile,
                  possède des propriétés anti-inflammatoires et antimicrobiennes
                  reconnues. Pour les soins oculaires, il s&apos;utilise
                  principalement en application légère sur les paupières
                  externes (jamais directement dans l&apos;œil) pour apaiser les
                  démangeaisons et les rougeurs.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le jujubier (sidr) : un lavage naturel et doux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les feuilles de jujubier (sidr) sont mentionnées dans la sunna
                  pour leurs vertus purificatrices. Utilisées en infusion
                  légère, elles servent traditionnellement au lavage doux des
                  paupières et du contour de l&apos;œil. Les compresses à base
                  de sidr contribuent à la réduction des rougeurs et à la
                  prévention des conjonctivites. Le jujubier est également
                  mentionné dans le Coran (sourate An-Najm, verset 16) dans la
                  description du Jardin, ce qui lui confère une dimension
                  symbolique forte dans la tradition musulmane.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Hijama</strong> : relâche les tensions,
                      améliore la circulation vers les yeux, soulage les
                      migraines ophtalmiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Costus indien</strong> : calme les
                      démangeaisons, atténue les inflammations péri-oculaires,
                      propriétés antimicrobiennes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Jujubier (sidr)</strong> : lavage naturel des
                      paupières, réduction des rougeurs, prévention des
                      infections oculaires.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Remede-pour-les-yeux-islam-soins-oculaires-selon-la-sunna-et-tradition-3.jpg"
                    alt="Hijama, costus indien et jujubier pour les soins oculaires prophétiques en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Science moderne */}
              {/* ============================================ */}
              <section id="science-moderne" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remèdes prophétiques et médecine moderne : une
                  complémentarité au service de la vue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La pertinence des remèdes traditionnels islamiques suscite un
                  intérêt grandissant dans la communauté scientifique. Plusieurs
                  études ont mis en lumière des propriétés qui confirment la
                  sagesse des enseignements prophétiques en matière de soins
                  oculaires.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Des recherches publiées dans des revues d&apos;ophtalmologie
                  ont démontré que la thymoquinone, principe actif de la
                  nigelle, possède des propriétés neuroprotectrices qui
                  pourraient protéger le nerf optique contre certaines
                  dégénérescences. Le miel, quant à lui, est de plus en plus
                  intégré dans des protocoles de soins ophtalmiques pour ses
                  capacités à favoriser la cicatrisation des lésions
                  superficielles de la cornée et à réduire les inflammations
                  oculaires légères.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Ce que la science confirme
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le miel</strong> : des études en ophtalmologie
                      montrent que certains miels médicaux (comme le miel de
                      Manuka) possèdent des propriétés antibactériennes et
                      cicatrisantes pour les tissus oculaires superficiels.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La nigelle</strong> : la thymoquinone montre des
                      effets protecteurs contre le stress oxydatif, l&apos;un
                      des facteurs de dégénérescence visuelle liée à
                      l&apos;âge.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le kohl ithmid</strong> : l&apos;antimoine
                      naturel, utilisé correctement et certifié sans plomb, a
                      montré des propriétés antimicrobiennes dans des études
                      microbiologiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La hijama</strong> : des recherches sur la thérapie
                      par ventouses rapportent une amélioration de la
                      microcirculation sanguine, ce qui peut bénéficier à la
                      vascularisation oculaire.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Précautions et équilibre entre tradition et médecine
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est fondamental de rappeler que les remèdes prophétiques ne
                  remplacent jamais un diagnostic médical ni un traitement
                  prescrit par un ophtalmologue. Le Prophète ﷺ lui-même a
                  encouragé le recours à la médecine en disant : « Serviteurs
                  d&apos;Allah, soignez-vous, car Allah n&apos;a créé aucune
                  maladie sans créer son remède » (rapporté par Abu Dawud). La
                  démarche islamique de soin repose sur un équilibre entre la
                  confiance en Allah (tawakkul), les moyens naturels (asbab) et
                  le recours aux compétences médicales modernes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les praticiens musulmans insistent sur l&apos;importance de
                  choisir des produits certifiés et purs, de respecter les doses
                  et les modes d&apos;application, et de consulter un
                  professionnel de santé avant toute nouvelle pratique. Le soin
                  des yeux selon la sunna s&apos;inscrit dans une vision
                  globale de la santé, où le corps, l&apos;âme et l&apos;esprit
                  sont pris en charge ensemble.
                </p>

                {/* Profils lecteurs */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Selon votre situation
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les remèdes prophétiques pour les yeux s&apos;adaptent à
                  chaque profil. Voici des recommandations ciblées selon votre
                  situation personnelle.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour les personnes travaillant sur écran
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La fatigue oculaire numérique touche de nombreux
                      travailleurs. Appliquez le kohl ithmid le soir pour
                      apaiser vos yeux, massez délicatement le contour des yeux
                      avec de l&apos;huile de nigelle et suivez la règle du
                      20-20-20 : toutes les 20 minutes, regardez à 20 pieds (6
                      mètres) pendant 20 secondes. Les dou&apos;as de
                      protection de la vue sont à réciter chaque matin.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour les personnes âgées
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Avec l&apos;âge, la vue se fragilise. La consommation
                      régulière de nigelle et de miel contribue à la protection
                      contre le stress oxydatif responsable de la
                      dégénérescence visuelle. L&apos;eau de zamzam, bue avec
                      l&apos;intention de préserver sa vue, et la récitation
                      quotidienne des invocations prophétiques renforcent la
                      dimension spirituelle du soin. Un suivi ophtalmologique
                      régulier reste la priorité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour les parents et les enfants
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Transmettre les soins prophétiques aux enfants est un acte
                      d&apos;éducation et de piété. Initiez-les au kohl ithmid
                      en douceur, enseignez-leur les invocations de protection
                      de la vue et limitez leur exposition aux écrans.
                      L&apos;alimentation riche en miel et nigelle contribue à
                      leur croissance en bonne santé visuelle. Chaque geste
                      devient une occasion d&apos;apprentissage de la sunna.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour les étudiants en sciences islamiques
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La lecture prolongée du Coran et des textes de science
                      islamique sollicite fortement la vue. Alternez les
                      sessions de lecture avec des pauses visuelles, appliquez
                      le kohl selon la sunna et nourrissez vos yeux avec le miel
                      et la nigelle. Les invocations prophétiques pour la
                      protection de la vue et de la mémoire accompagnent votre
                      parcours de savoir.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Routine quotidienne de soins oculaires selon la sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour tirer le meilleur parti des remèdes prophétiques, il est
                  recommandé d&apos;adopter une routine régulière qui intègre
                  les différents soins dans la journée. Voici un programme
                  type, adapté aux rythmes de la prière et de la vie
                  quotidienne.
                </p>

                {/* Tableau routine */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Moment de la journée
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Soin recommandé
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Dimension spirituelle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Au réveil (Fajr)
                        </td>
                        <td className="py-3 pr-4">
                          Cuillère de miel + nigelle, eau de zamzam
                        </td>
                        <td className="py-3">
                          Réciter la dou&apos;a de protection de la vue
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Après Dhuhr
                        </td>
                        <td className="py-3 pr-4">
                          Pause visuelle, massage contour yeux à l&apos;huile de
                          nigelle
                        </td>
                        <td className="py-3">
                          Invocation de gratitude pour le bienfait de la vue
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Après &apos;Asr
                        </td>
                        <td className="py-3 pr-4">
                          Compresse de miel dilué sur les paupières (si besoin)
                        </td>
                        <td className="py-3">
                          Adhkar de l&apos;après-midi
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Avant le coucher (&apos;Isha)
                        </td>
                        <td className="py-3 pr-4">
                          Application du kohl ithmid (3 fois par œil)
                        </td>
                        <td className="py-3">
                          Sourates protectrices, souffler dans les mains
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hebdomadaire
                        </td>
                        <td className="py-3 pr-4">
                          Hijama (si pratiquée), lavage au sidr
                        </td>
                        <td className="py-3">
                          Intention de soin et de tawakkul
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette routine n&apos;a pas vocation à être rigide. Chacun
                  l&apos;adapte selon ses besoins, ses possibilités et les
                  conseils de son médecin. L&apos;objectif est d&apos;ancrer
                  les soins oculaires prophétiques dans le quotidien avec
                  constance et intention sincère, en faisant de chaque geste
                  un rappel de la miséricorde d&apos;Allah et de la sagesse du
                  Prophète ﷺ.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le repos des yeux est lui aussi fortement encouragé. Le
                  Prophète ﷺ dormait en milieu de journée (sieste, qaylulah),
                  une habitude qui permet aux yeux de récupérer de la fatigue
                  accumulée. Réduire le temps passé devant les écrans, favoriser
                  la lumière naturelle, et se protéger du soleil avec des
                  lunettes adaptées lors des sorties sont autant de gestes de
                  bon sens qui prolongent la sunna dans la vie moderne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La dimension communautaire est aussi importante. Partager ces
                  connaissances en famille, transmettre les invocations aux
                  enfants et échanger sur les bienfaits des remèdes
                  prophétiques au sein de la communauté participent à la
                  préservation d&apos;un savoir précieux et d&apos;une
                  spiritualité vivante. Les cercles de science islamique et les
                  rassemblements communautaires sont des lieux propices à
                  l&apos;échange de ces pratiques bénéfiques.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Apprendre le Coran : méthodes et conseils pratiques"
                  description="Découvrez comment mémoriser et comprendre le Livre sacré avec des techniques adaptées."
                  href="/apprendre-le-coran"
                />
              </section>

              {/* Avertissement médical avant la FAQ */}
              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne - silo remede-arabe */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Remèdes et médecine prophétique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les remèdes arabes
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection contre la sorcellerie
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes arabes et médecine prophétique
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
