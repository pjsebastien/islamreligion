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
    "Remède arabe contre la toux : miel, nigelle, costus marin et soins naturels prophétiques",
  description:
    "Découvrez les remèdes arabes et prophétiques contre la toux : miel coranique, nigelle (habba sawda), costus marin, talbina, huile d'olive et invocations de guérison issues du Coran et de la Sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-toux-soins-naturels",
  },
};

const tocItems = [
  {
    id: "types-de-toux",
    label: "Comprendre les types de toux et leurs causes",
  },
  {
    id: "miel-remede-coranique",
    label: "Le miel : remède coranique contre la toux",
  },
  {
    id: "costus-nigelle-plantes",
    label: "Costus marin, nigelle et plantes prophétiques",
  },
  {
    id: "talbina-infusions",
    label: "Talbina, infusions et préparations apaisantes",
  },
  {
    id: "invocations-guerison",
    label: "Invocations de guérison et dimension spirituelle",
  },
  {
    id: "faq",
    label: "Questions fréquentes",
  },
];

const faqItems = [
  {
    question:
      "Le miel peut-il vraiment soulager la toux selon la médecine prophétique ?",
    answer:
      "Oui. Le Coran mentionne le miel comme contenant une guérison pour les gens (sourate An-Nahl, verset 69). Le Prophète Muhammad (paix et salut sur lui) le recommandait régulièrement. Des études modernes ont confirmé que le miel possède des propriétés antibactériennes, anti-inflammatoires et apaisantes pour les muqueuses irritées. Une cuillère de miel pur avant le coucher a montré une efficacité comparable à certains sirops antitussifs chez les enfants de plus d'un an.",
  },
  {
    question:
      "Qu'est-ce que le costus marin et comment l'utiliser contre la toux ?",
    answer:
      "Le costus marin (al-qist al-hindi) est une plante recommandée par le Prophète (paix et salut sur lui) dans un hadith rapporté par al-Bukhari pour les inflammations de la gorge et la pleurésie. Il se consomme en poudre mélangée à du miel, en infusion ou en fumigation douce. Son principe actif, la costunolide, possède des propriétés anti-inflammatoires et antimicrobiennes. Il est conseillé de commencer par de petites doses pour tester la tolérance.",
  },
  {
    question:
      "La nigelle (habba sawda) est-elle efficace contre la toux grasse ?",
    answer:
      "La nigelle contient de la thymoquinone, un composé aux propriétés bronchodilatatrices, anti-inflammatoires et expectorantes. Elle peut aider à fluidifier les sécrétions bronchiques et faciliter leur expulsion. On peut la consommer en graines broyées mélangées à du miel, en huile (quelques gouttes dans une boisson chaude) ou en inhalation. Le Prophète (paix et salut sur lui) a dit qu'elle est un remède contre toute maladie, sauf la mort (al-Bukhari et Muslim).",
  },
  {
    question:
      "L'huile d'olive en gargarisme soulage-t-elle les irritations de la gorge ?",
    answer:
      "L'huile d'olive extra-vierge possède des propriétés émollientes et anti-inflammatoires grâce à l'oléocanthal. En gargarisme ou en ingestion d'une cuillère à café, elle forme un film protecteur sur les muqueuses irritées de la gorge. Le Prophète (paix et salut sur lui) a recommandé de consommer l'huile d'olive et de s'en enduire, car elle provient d'un arbre béni (rapporté par at-Tirmidhi).",
  },
  {
    question: "Qu'est-ce que la talbina et comment aide-t-elle contre la toux ?",
    answer:
      "La talbina est une bouillie à base de farine d'orge et de miel, recommandée par le Prophète (paix et salut sur lui) pour le malade. Elle réconforte le cœur du malade et emporte une partie de son chagrin (al-Bukhari). Sa texture douce et tiède apaise la gorge, tandis que les bêta-glucanes de l'orge soutiennent le système immunitaire. C'est un remède idéal pour accompagner une toux avec fatigue générale.",
  },
  {
    question: "Peut-on donner du miel aux nourrissons pour calmer la toux ?",
    answer:
      "Non, le miel est formellement contre-indiqué avant l'âge d'un an en raison du risque de botulisme infantile. Pour les enfants de plus d'un an, une demi-cuillère de miel pur (de préférence de jujubier ou de thym) peut être donnée avant le coucher. Pour les nourrissons, consultez un pédiatre. La médecine prophétique encourage le soin, mais toujours avec discernement et adaptation à chaque situation.",
  },
  {
    question:
      "Quand faut-il consulter un médecin pour une toux persistante ?",
    answer:
      "Il est recommandé de consulter un médecin si la toux persiste plus de trois semaines, si elle s'accompagne de fièvre élevée, de difficultés respiratoires, de crachats sanglants, d'une perte de poids inexpliquée ou d'une douleur thoracique. La médecine prophétique est un complément, pas un substitut. Le Prophète (paix et salut sur lui) a dit : Soignez-vous, car Dieu n'a pas créé de maladie sans avoir créé son remède (Abu Dawud).",
  },
  {
    question:
      "Quelles invocations réciter quand on souffre de toux ou de maladie ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné plusieurs invocations pour le malade. La plus connue est : Ôte le mal, Seigneur des hommes, et guéris. Tu es Celui qui guérit, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie (al-Bukhari et Muslim). On peut aussi réciter la sourate Al-Fatiha, Ayat al-Kursi et les trois dernières sourates du Coran en soufflant dans ses mains et en les passant sur le corps.",
  },
];

export default function RemedeArabeToux() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-toux-soins-naturels/#article",
        headline:
          "Remède arabe contre la toux : miel, nigelle, costus marin et soins naturels prophétiques",
        description:
          "Découvrez les remèdes arabes et prophétiques contre la toux : miel coranique, nigelle, costus marin, talbina, huile d'olive et invocations de guérison.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/remede-arabe-toux-soins-naturels-miel-nigelle.jpg",
        datePublished: "2025-09-20",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-arabe-toux-soins-naturels/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-toux-soins-naturels/#breadcrumb",
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
            name: "Toux",
            item: "https://www.islamreligion.fr/remede-arabe-toux-soins-naturels",
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
          title="Remède arabe contre la toux : soins naturels issus de la médecine prophétique"
          subtitle="Miel coranique, nigelle, costus marin, talbina et invocations de guérison pour apaiser la toux naturellement."
          imageSrc="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
          imageAlt="Remèdes naturels arabes contre la toux : miel, nigelle et plantes prophétiques"
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
                <span className="text-foreground">Toux</span>
              </nav>

              {/* MedicalDisclaimer au début */}
              <MedicalDisclaimer />

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En bref
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La toux, qu&apos;elle soit sèche, grasse ou persistante, peut
                  trouver un soulagement par les{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    remèdes arabes et prophétiques
                  </Link>
                  . Le miel, la nigelle, le costus marin, l&apos;huile
                  d&apos;olive et la talbina sont autant de soins naturels
                  mentionnés dans le Coran et la Sunna. Ces remèdes agissent en
                  complément de la médecine moderne, jamais en remplacement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Types de toux */}
              {/* ============================================ */}
              <section id="types-de-toux" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre les types de toux et leurs causes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;appliquer un remède, il est important de
                  comprendre la nature de la toux. La médecine prophétique
                  (<em>at-tibb an-nabawi</em>) encourage le discernement dans le
                  soin : chaque type de toux appelle une approche adaptée. Le
                  corps est un dépôt (<em>amana</em>) confié par Dieu, et le
                  croyant est invité à en prendre soin avec sagesse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La toux est un réflexe de défense de l&apos;organisme destiné
                  à dégager les voies respiratoires. Elle peut être provoquée
                  par une infection virale, une allergie, une irritation
                  chimique, un reflux gastro-&oelig;sophagien ou encore par des
                  conditions climatiques (air sec, froid). Selon sa durée et sa
                  nature, on distingue plusieurs formes.
                </p>

                {/* Tableau types de toux */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de toux
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Caractéristiques
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Causes fréquentes
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Remèdes prophétiques adaptés
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toux sèche (irritative)
                        </td>
                        <td className="py-3 pr-4">
                          Sans mucus, irritante, souvent nocturne
                        </td>
                        <td className="py-3 pr-4">
                          Virus, allergie, air sec, reflux
                        </td>
                        <td className="py-3">
                          Miel pur, huile d&apos;olive en gargarisme, talbina
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toux grasse (productive)
                        </td>
                        <td className="py-3 pr-4">
                          Avec expectorations, sensation d&apos;encombrement
                        </td>
                        <td className="py-3 pr-4">
                          Bronchite, sinusite, rhume
                        </td>
                        <td className="py-3">
                          Nigelle, thym en infusion, miel + gingembre
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toux chronique
                        </td>
                        <td className="py-3 pr-4">
                          Persistante au-delà de 3 semaines
                        </td>
                        <td className="py-3 pr-4">
                          Asthme, RGO, tabac, pathologie pulmonaire
                        </td>
                        <td className="py-3">
                          Costus marin, nigelle, consultation médicale
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Toux du fumeur
                        </td>
                        <td className="py-3 pr-4">
                          Matinale, productive, récurrente
                        </td>
                        <td className="py-3 pr-4">
                          Irritation chronique par le tabac
                        </td>
                        <td className="py-3">
                          Arrêt du tabac, nigelle, miel, talbina
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La tradition prophétique ne distingue pas les types de toux de
                  manière clinique, mais elle offre des remèdes aux propriétés
                  complémentaires : apaisants pour les muqueuses (miel, talbina),
                  expectorants (nigelle, thym), anti-inflammatoires (costus
                  marin, huile d&apos;olive) et fortifiants (talbina, dattes).
                  L&apos;approche consiste à combiner le remède physique et la
                  dimension spirituelle, car la guérison vient de Dieu seul.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn al-Qayyim al-Jawziyya, dans son ouvrage{" "}
                  <em>Zad al-Ma&apos;ad</em>, souligne que le Prophète (paix et
                  salut sur lui) traitait la maladie par trois voies : les
                  remèdes naturels, les invocations et la combinaison des deux.
                  Cette vision holistique s&apos;applique particulièrement bien
                  aux affections respiratoires, où le repos, les soins locaux et
                  la sérénité du c&oelig;ur contribuent ensemble au rétablissement.
                  Pour la toux du fumeur, le premier pas reste de{" "}
                  <Link
                    href="/remede-arabe-arreter-fumer"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    arrêter le tabac pour éliminer la toux chronique
                  </Link>
                  .
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg"
                    alt="Remèdes naturels prophétiques contre la toux, dattes et miel"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le miel */}
              {/* ============================================ */}
              <section id="miel-remede-coranique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le miel : remède coranique par excellence contre la toux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi tous les remèdes mentionnés dans les textes sacrés, le
                  miel occupe une place unique : c&apos;est le seul aliment
                  explicitement qualifié de &laquo;&nbsp;guérison&nbsp;&raquo;
                  dans le{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>
                  . Pour la toux en particulier, le miel offre un triple
                  bienfait : il apaise l&apos;irritation des muqueuses, combat
                  les agents pathogènes et soutient les défenses naturelles.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent px-6 py-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ
                    فِيهِ شِفَاءٌ لِّلنَّاسِ
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    variées, dans laquelle il y a une guérison pour les
                    gens.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate An-Nahl (Les Abeilles), verset 69.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) consommait
                  régulièrement du miel et le recommandait pour les troubles
                  digestifs et respiratoires. Découvrez aussi{" "}
                  <Link
                    href="/remede-arabe-constipation"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le miel et ses bienfaits digestifs
                  </Link>
                  . Un hadith rapporté par al-Bukhari
                  et Muslim relate qu&apos;un homme vint consulter le Prophète
                  (paix et salut sur lui) au sujet de son frère souffrant de
                  troubles abdominaux, et qu&apos;il lui prescrivit du miel à
                  plusieurs reprises jusqu&apos;à la guérison, en déclarant :
                  &laquo;&nbsp;Dieu a dit vrai et le ventre de ton frère a
                  menti.&nbsp;&raquo;
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Propriétés du miel contre la toux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La recherche scientifique moderne a confirmé de nombreuses
                  propriétés du miel qui expliquent son efficacité contre la
                  toux. Les enzymes naturelles du miel, combinées à sa teneur en
                  peroxyde d&apos;hydrogène et en flavonoïdes, lui confèrent un
                  pouvoir thérapeutique reconnu.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Action émolliente</strong> : le miel forme un film
                      protecteur sur les muqueuses irritées de la gorge,
                      réduisant la sensation de picotement et l&apos;envie de
                      tousser.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet antibactérien</strong> : sa forte
                      concentration en sucres, son pH acide et la présence de
                      methylglyoxal (dans le miel de manuka notamment) inhibent
                      la croissance de nombreuses bactéries.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Propriété antioxydante</strong> : les polyphénols
                      et flavonoïdes du miel contribuent à réduire
                      l&apos;inflammation des voies respiratoires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet apaisant nocturne</strong> : une cuillère de
                      miel avant le coucher favorise un sommeil plus paisible en
                      calmant les quintes de toux nocturnes.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Comment utiliser le miel contre la toux
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Miel pur au coucher
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Une cuillère à soupe de miel pur (jujubier, thym ou
                      manuka) 30 minutes avant le coucher. Laisser fondre
                      lentement dans la bouche pour un contact prolongé avec la
                      gorge.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Miel + eau tiède + citron
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Diluer une cuillère de miel dans un verre d&apos;eau
                      tiède (jamais bouillante) avec un filet de citron.
                      L&apos;eau tiède active les enzymes du miel, et le citron
                      apporte de la vitamine C.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Miel + nigelle
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Mélanger une cuillère de miel avec une demi-cuillère de
                      graines de nigelle broyées. Ce mélange combine les
                      propriétés émollientes du miel et les vertus
                      bronchodilatatrices de la nigelle.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Miel + gingembre frais
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Râper un morceau de gingembre frais, le mélanger à du
                      miel et laisser infuser. Le gingembre possède des
                      propriétés anti-inflammatoires et aide à dégager les voies
                      respiratoires.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Variétés de miel recommandées pour la toux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Tous les miels ne se valent pas. Le choix de la variété
                  influence l&apos;efficacité du remède. Voici les variétés les
                  plus prisées dans la tradition arabe et reconnues pour leurs
                  propriétés respiratoires :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Miel de jujubier (<em>sidr</em>)</strong> :
                      considéré comme le plus noble dans la tradition arabe,
                      récolté au Yémen et dans la péninsule arabique. Riche en
                      composés antibactériens.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Miel de thym</strong> : reconnu pour ses
                      propriétés antiseptiques puissantes, particulièrement
                      adapté aux infections respiratoires et à la toux
                      productive.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Miel d&apos;eucalyptus</strong> : ses propriétés
                      expectorantes et décongestionnantes en font un allié pour
                      les toux grasses et l&apos;encombrement bronchique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Miel de manuka</strong> : riche en
                      methylglyoxal (MGO), il possède l&apos;un des plus forts
                      pouvoirs antibactériens parmi les miels.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-amber-800">
                        Rappel important
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        Le miel ne doit jamais être donné aux enfants de moins
                        d&apos;un an (risque de botulisme infantile). Pour les
                        personnes diabétiques, la consommation de miel doit
                        être surveillée en raison de son impact sur la glycémie.
                        Privilégiez toujours un miel pur, non chauffé et
                        certifié.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Tous les remèdes prophétiques en un seul endroit"
                  href="/remede-arabe"
                  linkText="Voir tous les remèdes arabes"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Costus marin, nigelle, plantes */}
              {/* ============================================ */}
              <section
                id="costus-nigelle-plantes"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Costus marin, nigelle et plantes prophétiques contre la toux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà du miel, la tradition prophétique mentionne plusieurs
                  plantes aux vertus respiratoires remarquables. Le costus marin,
                  la nigelle et l&apos;huile d&apos;olive constituent un trio
                  complémentaire pour les affections des voies respiratoires.
                </p>

                {/* Costus marin */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le costus marin (<em>al-qist al-hindi</em>)
                  </h3>

                  <div className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                    <p
                      className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                      dir="rtl"
                    >
                      عَلَيْكُمْ بِهَذَا الْعُودِ الْهِنْدِيِّ فَإِنَّ فِيهِ
                      سَبْعَةَ أَشْفِيَةٍ مِنْهَا ذَاتُ الْجَنْبِ
                    </p>
                    <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                      &laquo;&nbsp;Utilisez ce bois indien (costus), car il
                      contient sept remèdes, dont celui contre la
                      pleurésie.&nbsp;&raquo;
                    </p>
                    <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                      Hadith rapporté par al-Bukhari et Muslim
                    </cite>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    Le costus marin (<em>Saussurea costus</em>) est l&apos;un
                    des remèdes prophétiques les plus spécifiquement liés aux
                    affections respiratoires. Le hadith mentionne la pleurésie
                    (<em>dhat al-janb</em>), une inflammation de la plèvre
                    souvent accompagnée de toux forte et douloureuse. La
                    costunolide et le dehydrocostus lactone, ses composés
                    actifs, possèdent des propriétés anti-inflammatoires et
                    antimicrobiennes confirmées par la recherche.
                  </p>

                  <h4 className="mt-6 font-semibold text-primary">
                    Modes d&apos;utilisation du costus marin pour la toux
                  </h4>

                  <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>En poudre avec du miel</strong> : mélanger une
                        demi-cuillère à café de poudre de costus marin dans une
                        cuillère de miel. Prendre une fois par jour, de
                        préférence le matin à jeun.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>En fumigation douce</strong> : brûler un petit
                        morceau de bois de costus et inhaler la fumée
                        légèrement. Cette méthode traditionnelle peut aider à
                        dégager les voies nasales et bronchiques.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>En infusion</strong> : faire infuser de la
                        poudre de costus dans de l&apos;eau chaude pendant 10
                        minutes, filtrer et boire tiède. On peut ajouter du miel
                        pour adoucir le goût.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>En huile nasale</strong> : quelques gouttes
                        d&apos;huile de costus dans les narines pour les toux
                        liées à une sinusite ou un écoulement post-nasal.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Nigelle */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La nigelle (<em>habba sawda</em>) et les voies respiratoires
                  </h3>

                  <div className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                    <p
                      className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                      dir="rtl"
                    >
                      عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ
                      فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ
                    </p>
                    <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                      &laquo;&nbsp;Utilisez cette graine noire, car elle
                      contient un remède contre toute maladie, sauf la
                      mort.&nbsp;&raquo;
                    </p>
                    <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                      Hadith rapporté par al-Bukhari et Muslim
                    </cite>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La graine de nigelle (<em>Nigella sativa</em>) possède des
                    propriétés particulièrement intéressantes pour les affections
                    respiratoires. La thymoquinone, son principal composé actif,
                    a démontré des effets bronchodilatateurs,
                    anti-inflammatoires, antihistaminiques et
                    immunomodulateurs. Ces propriétés en font un remède
                    polyvalent qui agit à plusieurs niveaux sur la toux.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>Toux sèche</strong> : l&apos;huile de nigelle
                        (une cuillère à café dans une boisson chaude) calme
                        l&apos;irritation et réduit la fréquence des quintes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>Toux grasse</strong> : les graines broyées
                        mélangées à du miel favorisent l&apos;expectoration et
                        le nettoyage des bronches.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>Toux allergique</strong> : les propriétés
                        antihistaminiques de la thymoquinone peuvent atténuer la
                        réactivité bronchique liée aux allergènes.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>En inhalation</strong> : ajouter quelques gouttes
                        d&apos;huile de nigelle dans un bol d&apos;eau chaude
                        et inhaler la vapeur. Cette méthode aide à décongestionner
                        les voies nasales et à calmer la toux.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Huile d'olive */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile d&apos;olive en gargarisme et en soin
                  </h3>

                  <div className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                    <p
                      className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                      dir="rtl"
                    >
                      كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ
                      شَجَرَةٍ مُبَارَكَةٍ
                    </p>
                    <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                      &laquo;&nbsp;Mangez de l&apos;huile d&apos;olive et
                      enduisez-vous-en, car elle provient d&apos;un arbre
                      béni.&nbsp;&raquo;
                    </p>
                    <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                      Hadith rapporté par at-Tirmidhi et Ibn Majah
                    </cite>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    L&apos;huile d&apos;olive extra-vierge contient de
                    l&apos;oléocanthal, un composé aux propriétés
                    anti-inflammatoires comparables à celles de
                    l&apos;ibuprofène. En gargarisme ou en ingestion, elle forme
                    un film protecteur sur les muqueuses enflammées de la gorge,
                    apportant un soulagement rapide de l&apos;irritation.
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>Gargarisme</strong> : une cuillère à soupe
                        d&apos;huile d&apos;olive extra-vierge en gargarisme
                        pendant 30 secondes, puis avaler. Répéter 2 à 3 fois
                        par jour.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>Application thoracique</strong> : masser
                        doucement la poitrine et le dos avec de l&apos;huile
                        d&apos;olive tiède pour apaiser la toux et faciliter la
                        respiration.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary/60" />
                      <span>
                        <strong>Miel + huile d&apos;olive</strong> : mélanger
                        une cuillère de chaque pour combiner l&apos;action
                        émolliente de l&apos;huile et les vertus
                        antibactériennes du miel.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
                    alt="Coran et chapelet, remèdes prophétiques pour la santé"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Remède arabe contre la constipation : séné, miel et soins naturels prophétiques"
                  description="Découvrez les remèdes prophétiques pour la constipation, un autre domaine de la médecine naturelle arabe."
                  href="/remede-arabe-constipation"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Talbina, infusions et préparations */}
              {/* ============================================ */}
              <section
                id="talbina-infusions"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Talbina, infusions et préparations apaisantes pour la toux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Certains remèdes prophétiques ne sont pas des médicaments au
                  sens strict, mais des aliments thérapeutiques dont la
                  préparation et la consommation participent à la guérison.
                  La talbina, les infusions de thym et de gingembre, et les
                  préparations à base de dattes offrent un réconfort physique
                  et moral au malade.
                </p>

                {/* Talbina */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La talbina : bouillie d&apos;orge apaisante
                  </h3>

                  <div className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                    <p
                      className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl"
                      dir="rtl"
                    >
                      التَّلْبِينَةُ مُجِمَّةٌ لِفُؤَادِ الْمَرِيضِ
                      تَذْهَبُ بِبَعْضِ الْحُزْنِ
                    </p>
                    <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                      &laquo;&nbsp;La talbina réconforte le c&oelig;ur du malade et
                      emporte une partie de son chagrin.&nbsp;&raquo;
                    </p>
                    <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                      Hadith rapporté par al-Bukhari
                    </cite>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La talbina est une bouillie préparée à base de farine
                    d&apos;orge, d&apos;eau (ou de lait) et de miel.
                    &apos;Aisha (qu&apos;Allah soit satisfait d&apos;elle)
                    recommandait de la préparer pour le malade. Sa texture
                    onctueuse et tiède apaise la gorge irritée, tandis que les
                    bêta-glucanes de l&apos;orge soutiennent les défenses
                    immunitaires et améliorent la digestion.
                  </p>

                  <h4 className="mt-6 font-semibold text-primary">
                    Recette de la talbina traditionnelle
                  </h4>

                  <ol className="mt-3 space-y-2 text-sm text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                        1
                      </span>
                      <span>
                        Mélanger 2 cuillères à soupe de farine d&apos;orge dans
                        250 ml d&apos;eau froide.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                        2
                      </span>
                      <span>
                        Porter à ébullition douce en remuant constamment
                        pendant 5 à 7 minutes jusqu&apos;à épaississement.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                        3
                      </span>
                      <span>
                        Laisser tiédir, puis ajouter une cuillère de miel et
                        éventuellement une pincée de cannelle.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                        4
                      </span>
                      <span>
                        Consommer tiède, de préférence le soir ou lorsque la
                        toux s&apos;intensifie.
                      </span>
                    </li>
                  </ol>
                </div>

                {/* Infusions */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Infusions traditionnelles contre la toux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les infusions chaudes sont utilisées depuis des siècles dans
                  le monde arabe pour apaiser les maux respiratoires.
                  L&apos;hydratation tiède contribue à fluidifier les
                  sécrétions, à apaiser l&apos;irritation et à favoriser le
                  repos. Voici les infusions les plus recommandées.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Infusion de thym (<em>za&apos;atar</em>)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Le thym contient du thymol, un antiseptique naturel qui
                      calme les spasmes bronchiques. Faire infuser une cuillère
                      de thym séché dans 200 ml d&apos;eau bouillante pendant 10
                      minutes, filtrer et ajouter du miel. 2 à 3 tasses par
                      jour.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Infusion de gingembre
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Couper 3 rondelles de gingembre frais, les laisser infuser
                      dans de l&apos;eau chaude pendant 10 minutes avec du miel.
                      Le gingérol possède des propriétés anti-inflammatoires et
                      aide à dégager les voies respiratoires obstruées.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Infusion de réglisse
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Utilisée depuis longtemps dans la tradition arabe pour ses
                      vertus expectorantes et adoucissantes. Faire infuser un
                      bâton de réglisse dans de l&apos;eau chaude. Attention :
                      déconseillée en cas d&apos;hypertension.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Infusion de camomille
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      La camomille possède des propriétés relaxantes et
                      anti-inflammatoires. Son infusion, sucrée au miel, est
                      particulièrement apaisante pour la toux sèche nocturne et
                      favorise un sommeil réparateur.
                    </p>
                  </div>
                </div>

                {/* Tableau comparatif des remèdes */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Tableau comparatif des remèdes prophétiques contre la toux
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Remède
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Source prophétique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action principale
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de toux ciblé
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Mode d&apos;emploi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel
                        </td>
                        <td className="py-3 pr-4">
                          Coran (An-Nahl, 69)
                        </td>
                        <td className="py-3 pr-4">
                          &Eacute;mollient, antibactérien
                        </td>
                        <td className="py-3 pr-4">Sèche et grasse</td>
                        <td className="py-3">
                          1 c. à soupe pure ou en boisson
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nigelle
                        </td>
                        <td className="py-3 pr-4">
                          Hadith (al-Bukhari, Muslim)
                        </td>
                        <td className="py-3 pr-4">
                          Bronchodilatateur, anti-inflammatoire
                        </td>
                        <td className="py-3 pr-4">
                          Grasse et allergique
                        </td>
                        <td className="py-3">
                          Graines broyées + miel ou huile
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Costus marin
                        </td>
                        <td className="py-3 pr-4">
                          Hadith (al-Bukhari, Muslim)
                        </td>
                        <td className="py-3 pr-4">
                          Anti-inflammatoire, antimicrobien
                        </td>
                        <td className="py-3 pr-4">
                          Chronique, pleurésie
                        </td>
                        <td className="py-3">
                          Poudre + miel ou fumigation
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="py-3 pr-4">
                          Hadith (at-Tirmidhi)
                        </td>
                        <td className="py-3 pr-4">
                          &Eacute;mollient, anti-inflammatoire
                        </td>
                        <td className="py-3 pr-4">Sèche (irritation)</td>
                        <td className="py-3">Gargarisme ou ingestion</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Talbina
                        </td>
                        <td className="py-3 pr-4">
                          Hadith (al-Bukhari)
                        </td>
                        <td className="py-3 pr-4">
                          Apaisant, immunostimulant
                        </td>
                        <td className="py-3 pr-4">Toux avec fatigue</td>
                        <td className="py-3">Bouillie tiède le soir</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Thym
                        </td>
                        <td className="py-3 pr-4">
                          Tradition arabe
                        </td>
                        <td className="py-3 pr-4">
                          Antiseptique, antispasmodique
                        </td>
                        <td className="py-3 pr-4">Sèche et grasse</td>
                        <td className="py-3">Infusion 2-3 fois/jour</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La combinaison de plusieurs de ces remèdes peut s&apos;avérer
                  bénéfique. Par exemple, une infusion de thym sucrée au miel
                  et accompagnée de quelques gouttes d&apos;huile de nigelle
                  agit simultanément comme antiseptique, expectorant et
                  émollient. L&apos;important est de rester attentif aux
                  réactions de son corps et de respecter des dosages
                  raisonnables.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Invocations et dimension spirituelle */}
              {/* ============================================ */}
              <section
                id="invocations-guerison"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations de guérison et dimension spirituelle
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En{" "}
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>
                  , la guérison ne se limite pas à la prise d&apos;un remède
                  physique. La dimension spirituelle est indissociable du
                  processus de rétablissement. Le{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  est lui-même décrit comme une guérison et une miséricorde pour
                  les croyants (sourate Al-Isra, verset 82). Le Prophète
                  Muhammad (paix et salut sur lui) combinait toujours le soin
                  physique et l&apos;invocation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Invocations prophétiques pour le malade
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné plusieurs
                  invocations à réciter pour soi-même ou pour un proche malade.
                  Ces paroles sont une demande de guérison adressée à Dieu, le
                  seul Guérisseur (<em>ash-Shafi</em>).
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ
                      الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا
                      يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;&Ocirc;te le mal, Seigneur des hommes, et guéris.
                      Tu es Celui qui guérit, il n&apos;y a de guérison que Ta
                      guérison, une guérison qui ne laisse aucune
                      maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari et Muslim. Le Prophète (paix et
                      salut sur lui) récitait cette invocation en posant sa main
                      sur la personne malade.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ
                      مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللَّهُ
                      يَشْفِيكَ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Au nom de Dieu, je te fais la roqya contre
                      tout ce qui te nuit, contre le mal de toute âme ou &oelig;il
                      envieux. Que Dieu te guérisse.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Muslim.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ
                      فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ
                      الْعَلِيمُ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Au nom de Dieu, dont le nom protège de tout
                      mal sur terre et dans le ciel. Il est l&apos;Audient, le
                      Savant.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Abu Dawud et at-Tirmidhi. A réciter 3 fois le
                      matin et 3 fois le soir.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Versets coraniques à réciter en cas de maladie
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  {" "}
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    La récitation du Coran comme soin
                  </Link>{" "}
                  sur le malade fait partie de la roqya
                  légitime (<em>ar-ruqya ash-shar&apos;iyya</em>). Parmi les
                  passages les plus récités :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Al-Fatiha</strong> : appelée
                      &laquo;&nbsp;la Mère du Livre&nbsp;&raquo;, elle est une
                      guérison complète selon les savants. Le Prophète (paix et
                      salut sur lui) a validé son utilisation comme roqya.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ayat al-Kursi</strong> (Al-Baqara, 255) : verset
                      de protection par excellence, à réciter matin et soir et
                      avant le coucher.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Les trois dernières sourates (Al-Ikhlas, Al-Falaq,
                        An-Nas)
                      </strong>{" "}
                      : le Prophète (paix et salut sur lui) les récitait chaque
                      soir, soufflait dans ses mains et les passait sur son
                      corps.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Sourate Ash-Shu&apos;ara, verset 80
                      </strong>{" "}
                      : &laquo;&nbsp;Et quand je suis malade, c&apos;est Lui qui
                      me guérit&nbsp;&raquo;. Parole du prophète Ibrahim
                      (paix sur lui) rapportée dans le Coran.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Combiner remède physique et invocation : une approche
                  complète
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn al-Qayyim enseigne que le meilleur soin réunit le remède
                  physique adapté, l&apos;invocation sincère et la confiance
                  totale en Dieu (<em>tawakkul</em>). Préparer une talbina
                  sucrée au miel tout en récitant les versets de guérison,
                  ou prendre du miel et de la nigelle en commençant par
                  &laquo;&nbsp;Bismillah&nbsp;&raquo;, fait partie de cette
                  démarche intégrée. On peut aussi{" "}
                  <Link
                    href="/remede-angoisse-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    calmer le stress qui aggrave les symptômes
                  </Link>{" "}
                  grâce aux pratiques spirituelles de l&apos;islam.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le croyant n&apos;est pas invité à choisir entre la médecine
                  et la prière : les deux se complètent. Le Prophète (paix et
                  salut sur lui) a dit :
                  &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu
                  n&apos;a pas créé de maladie sans avoir créé son
                  remède&nbsp;&raquo; (Abu Dawud). Cette parole est à la fois
                  un encouragement à se soigner et un rappel que la guérison
                  est entre les mains de Dieu.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Quand consulter un médecin
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les remèdes prophétiques sont un complément précieux, mais
                  certaines situations exigent une consultation médicale rapide.
                  La médecine prophétique n&apos;a jamais prétendu remplacer le
                  savoir médical : le Prophète (paix et salut sur lui) lui-même
                  consultait des médecins et encourageait ses compagnons à le
                  faire.
                </p>

                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-red-800">
                        Consultez un médecin si :
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-red-700">
                        <li>
                          La toux persiste plus de 3 semaines sans amélioration
                        </li>
                        <li>
                          Elle s&apos;accompagne de fièvre élevée ou
                          persistante
                        </li>
                        <li>
                          Vous observez des crachats sanglants ou de couleur
                          anormale
                        </li>
                        <li>
                          Vous ressentez des difficultés respiratoires ou un
                          essoufflement
                        </li>
                        <li>
                          Une douleur thoracique accompagne la toux
                        </li>
                        <li>
                          Vous constatez une perte de poids inexpliquée
                        </li>
                        <li>
                          La toux touche un nourrisson de moins de 3 mois
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière et invocation de guérison en islam"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                {/* Profils */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Adapter les remèdes selon le profil de la personne
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un même remède ne convient pas de la même manière à tout le
                  monde. La médecine prophétique, comme la médecine moderne,
                  encourage l&apos;adaptation du soin à la personne. Voici des
                  recommandations selon les profils les plus courants.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour un enfant (plus d&apos;un an)
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Privilégier le miel pur (une demi-cuillère avant le
                      coucher), la talbina et les infusions douces de camomille.
                      &Eacute;viter le costus marin et la nigelle en grande quantité.
                      Toujours consulter un pédiatre si la toux s&apos;aggrave
                      ou s&apos;accompagne de fièvre.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Découvrez{" "}
                      <Link
                        href="/remede-arabe-grossesse"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        les remèdes sûrs pendant la grossesse
                      </Link>
                      . Le miel et la talbina sont sûrs et recommandés. Le thym
                      en infusion légère et l&apos;huile d&apos;olive sont
                      également adaptés. &Eacute;viter la nigelle en forte dose et le
                      costus marin sans avis médical. Les invocations de
                      guérison sont à multiplier pour la protection du bébé.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne âgée
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La talbina est particulièrement adaptée : douce, nutritive
                      et facile à avaler. Le miel dilué dans de l&apos;eau
                      tiède et les infusions de thym sont recommandés. Vérifier
                      les interactions possibles avec les traitements en cours
                      (la nigelle peut interagir avec les anticoagulants).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour un adulte en bonne santé
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Tous les remèdes prophétiques peuvent être utilisés :
                      miel, nigelle, costus marin, huile d&apos;olive, talbina
                      et infusions. L&apos;approche combinée (miel + nigelle le
                      matin, infusion de thym dans la journée, talbina le soir)
                      offre un soutien complet pendant la durée de la toux.
                    </p>
                  </div>
                </div>
              </section>

              {/* MedicalDisclaimer avant FAQ */}
              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation silo remede-arabe */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Autres remèdes arabes et prophétiques
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les remèdes arabes
                  </Link>
                  <Link
                    href="/remede-arabe-constipation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède arabe constipation
                  </Link>
                  <Link
                    href="/remede-arabe-acouphene"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède arabe acouphène
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La langue arabe
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
