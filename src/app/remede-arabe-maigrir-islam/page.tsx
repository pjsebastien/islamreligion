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
    "Remede arabe pour maigrir : methodes saines selon l'islam et la medecine prophetique",
  description:
    "Decouvrez les remedes arabes pour maigrir en islam : jeune, nigelle, miel, talbina, huile d'olive, activite physique et invocations prophetiques pour une perte de poids saine et durable.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-maigrir-islam",
  },
};

const tocItems = [
  { id: "alimentation-islam", label: "L'alimentation en islam : moderation et hadith du tiers" },
  { id: "jeune-perte-poids", label: "Le jeune (sawm) et la perte de poids" },
  { id: "aliments-prophetiques", label: "Aliments prophetiques pour maigrir" },
  { id: "nigelle-metabolisme", label: "La nigelle et le metabolisme" },
  { id: "activite-physique", label: "L'activite physique en islam" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Le jeune intermittent est-il une pratique islamique ?",
    answer:
      "Le jeune du lundi et du jeudi, recommande par le Prophete Muhammad (paix et benedictions sur lui), correspond effectivement a une forme de jeune intermittent. Cette Sunna ancestrale implique de s'abstenir de nourriture du lever au coucher du soleil, ce qui permet au corps de puiser dans ses reserves et de favoriser une perte de poids progressive. La science moderne confirme les bienfaits de ce rythme alimentaire sur le metabolisme et la regulation hormonale.",
  },
  {
    question: "Comment utiliser la nigelle pour maigrir selon la Sunna ?",
    answer:
      "La nigelle (habba sawda) peut etre consommee sous forme de graines broyees (une demi-cuillere a cafe par jour), d'huile (une cuillere a cafe a jeun le matin), ou en infusion. Le Prophete (paix et benedictions sur lui) a dit qu'elle est un remede contre toute maladie sauf la mort. Pour la perte de poids, elle aide a reguler l'appetit, stimuler le metabolisme et ameliorer la digestion. Il convient de ne pas depasser les doses recommandees.",
  },
  {
    question: "Les dattes font-elles grossir ou maigrir ?",
    answer:
      "Les dattes, consommees avec moderation (3 a 5 par jour), agissent comme un coupe-faim naturel grace a leur richesse en fibres et en sucres naturels a liberation lente. Le Prophete (paix et benedictions sur lui) rompait son jeune avec des dattes. Elles rassasient rapidement et evitent les fringales. En revanche, une consommation excessive peut apporter un surplus calorique. La cle reside dans la moderation, principe fondamental en islam.",
  },
  {
    question: "Le miel remplace-t-il vraiment le sucre pour perdre du poids ?",
    answer:
      "Le miel possede un pouvoir sucrant superieur au sucre blanc, ce qui permet d'en utiliser moins pour le meme gout sucre. Le Coran mentionne que le miel contient une guerison pour les gens (sourate An-Nahl, verset 69). Son index glycemique est plus bas que celui du sucre raffine, il apporte des antioxydants et des enzymes benefiques. Dilue dans de l'eau tiede le matin, il soutient le metabolisme sans provoquer de pic glycemique brutal.",
  },
  {
    question: "Quelle activite physique le Prophete recommandait-il ?",
    answer:
      "Le Prophete Muhammad (paix et benedictions sur lui) a encourage la natation, le tir a l'arc et l'equitation. Il pratiquait lui-meme la marche quotidienne, parfois sur de longues distances. La priere elle-meme, avec ses mouvements de prosternation et de redressement repetes cinq fois par jour, constitue une activite physique reguliere. L'islam valorise tout effort physique qui preserve la sante du corps, considere comme un depot confie par Allah.",
  },
  {
    question: "Existe-t-il des invocations pour aider a maigrir ?",
    answer:
      "Il n'existe pas d'invocation specifiquement destinee a la perte de poids. En revanche, les invocations pour la patience (sabr), la discipline et la sante du corps sont encouragees. Le Prophete (paix et benedictions sur lui) invoquait Allah pour la bonne sante et demandait protection contre la maladie. Associer ses efforts alimentaires a une intention sincere (niyya) et a des invocations renforce la motivation spirituelle et la perseverance.",
  },
  {
    question: "La talbina aide-t-elle a perdre du poids ?",
    answer:
      "La talbina, bouillie a base de farine d'orge et de miel, est un aliment prophetique reconnu pour ses bienfaits. Riche en fibres solubles (beta-glucanes), elle procure une sensation de satiete durable, ralentit l'absorption des sucres et favorise un transit sain. Aicha (qu'Allah soit satisfait d'elle) rapporte que le Prophete (paix et benedictions sur lui) la recommandait pour le bien-etre. Integree au petit-dejeuner, elle contribue a une alimentation equilibree.",
  },
  {
    question: "Quand faut-il consulter un medecin pour perdre du poids ?",
    answer:
      "Il est recommande de consulter un medecin ou un nutritionniste avant d'entamer toute demarche de perte de poids significative, surtout en presence de maladies chroniques (diabete, problemes thyroidiens, hypertension). L'islam encourage le recours a la medecine : le Prophete (paix et benedictions sur lui) a dit de se soigner, car Allah n'a pas cree de maladie sans creer son remede. Un suivi medical garantit une demarche adaptee et sans risque pour la sante.",
  },
];

export default function RemedArabeMaigrirIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-maigrir-islam/#article",
        headline:
          "Remede arabe pour maigrir : methodes saines selon l'islam et la medecine prophetique",
        description:
          "Decouvrez les remedes arabes pour maigrir en islam : jeune, nigelle, miel, talbina, huile d'olive, activite physique et invocations prophetiques pour une perte de poids saine.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-maigrir-methodes-saines-selon-lislam-et-la-tradition-1.jpg",
        datePublished: "2025-08-29",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-arabe-maigrir-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-maigrir-islam/#breadcrumb",
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
            name: "Remedes arabes",
            item: "https://www.islamreligion.fr/remede-arabe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Maigrir",
            item: "https://www.islamreligion.fr/remede-arabe-maigrir-islam",
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
          title="Remede arabe pour maigrir : methodes saines selon l'islam"
          subtitle="Jeune prophetique, nigelle, miel, talbina et activite physique : retrouvez un poids equilibre grace a la sagesse islamique et aux remedes naturels de la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-maigrir-methodes-saines-selon-lislam-et-la-tradition-1.jpg"
          imageAlt="Remedes arabes pour maigrir selon l'islam, aliments prophetiques et methodes saines de perte de poids"
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
                  Remedes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Maigrir</span>
              </nav>

              {/* MedicalDisclaimer debut */}
              <MedicalDisclaimer />

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La tradition islamique offre une approche complete et
                  bienveillante de la perte de poids. Du celebre hadith du tiers
                  de l&apos;estomac au jeune du lundi et du jeudi, en passant
                  par la nigelle, le miel, la talbina et l&apos;huile
                  d&apos;olive, les remedes prophetiques s&apos;associent a une
                  hygiene de vie equilibree. L&apos;islam invite a prendre soin
                  de son corps comme d&apos;un depot confie par Allah, en
                  privilegiant la moderation, l&apos;activite physique et la
                  patience.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'alimentation en islam */}
              {/* ============================================ */}
              <section id="alimentation-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;alimentation en islam : moderation, equilibre et hadith
                  du tiers de l&apos;estomac
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La relation du musulman a la nourriture est, avant tout, une
                  question de conscience et de gratitude envers Allah. Bien avant
                  les regimes modernes, l&apos;islam a pose les fondements
                  d&apos;une alimentation equilibree, centree sur la moderation
                  et le respect du corps.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete Muhammad (paix et benedictions sur lui) a enseigne
                  un principe qui resonne encore aujourd&apos;hui avec les
                  recommandations des nutritionnistes contemporains. Dans un
                  hadith rapporte par at-Tirmidhi et Ibn Majah, il a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Le fils d&apos;Adam ne remplit pas de recipient pire
                  que son estomac. Quelques bouchees suffisent a l&apos;etre
                  humain pour se maintenir. S&apos;il doit absolument manger
                  davantage, qu&apos;il reserve un tiers pour sa nourriture, un
                  tiers pour sa boisson et un tiers pour son souffle. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapporte par at-Tirmidhi, n&deg;2380 ; Ibn Majah, n&deg;3349)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith pose trois principes fondamentaux : ne jamais se
                  remplir completement l&apos;estomac, partager l&apos;espace
                  entre nourriture solide, liquide et air, et faire de la
                  moderation un mode de vie permanent plutot qu&apos;un regime
                  temporaire. La science moderne confirme que manger a 70 % de
                  sa capacite stomacale favorise une meilleure digestion, limite
                  la prise de poids et reduit les risques cardiovasculaires.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le gaspillage alimentaire (israf) : un interdit qui protege la
                  sante
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran rappelle a plusieurs reprises l&apos;interdiction du
                  gaspillage :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Mangez et buvez, mais ne commettez pas d&apos;exces,
                  car Allah n&apos;aime pas ceux qui commettent des exces. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Sourate Al-A&apos;raf, 7:31)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;israf (exces, gaspillage) ne concerne pas seulement la
                  nourriture jetee, mais aussi la surconsommation. Le musulman
                  est invite a manger ce dont il a reellement besoin, a
                  remercier Allah pour chaque repas et a partager le surplus avec
                  ceux qui en ont besoin. Pour aller plus loin, decouvrez{" "}
                  <Link
                    href="/halal-haram-criteres"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les principes du halal et du haram en matiere alimentaire
                  </Link>
                  , qui encadrent cette discipline. Cette approche contribue
                  directement au maintien d&apos;un poids sain.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Manger assis et lentement</strong> : le Prophete
                      (paix et benedictions sur lui) prenait ses repas assis,
                      dans le calme, ce qui favorise la satiete et une digestion
                      optimale.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par le nom d&apos;Allah</strong> : dire
                      &laquo; Bismillah &raquo; avant le repas ancre la pleine
                      conscience et ralentit la prise alimentaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Manger avec la main droite</strong> et ne pas
                      critiquer la nourriture : des Sunna qui cultivent la
                      gratitude et le respect envers les bienfaits d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Eviter le grignotage excessif</strong> : la
                      tradition prophetique enseigne a structurer les repas et a
                      ne pas manger par ennui ou par habitude.
                    </span>
                  </li>
                </ul>

                {/* Tableau comparatif principes alimentaires */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Principe prophetique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Benefice sur le poids
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Equivalent en nutrition moderne
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Regle du tiers de l&apos;estomac
                        </td>
                        <td className="py-3 pr-4">
                          Reduction naturelle des portions
                        </td>
                        <td className="py-3">
                          Restriction calorique moderee (20-30 %)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Manger lentement et en conscience
                        </td>
                        <td className="py-3 pr-4">
                          Satiete atteinte avec moins de nourriture
                        </td>
                        <td className="py-3">
                          Alimentation en pleine conscience (mindful eating)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Interdiction de l&apos;israf (exces)
                        </td>
                        <td className="py-3 pr-4">
                          Prevention de la suralimentation
                        </td>
                        <td className="py-3">
                          Controle des portions et anti-gaspillage
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rompre le jeune avec des dattes et de l&apos;eau
                        </td>
                        <td className="py-3 pr-4">
                          Stabilise la glycemie, evite les fringales
                        </td>
                        <td className="py-3">
                          Collation a index glycemique modere
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Boire de l&apos;eau en trois gorgees
                        </td>
                        <td className="py-3 pr-4">
                          Hydratation optimale, satiete accrue
                        </td>
                        <td className="py-3">
                          Hydratation fractionnee tout au long de la journee
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le sommeil et son impact sur le poids selon la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et benedictions sur lui) dormait tot apres
                  la priere d&apos;al-Isha et se levait pour la priere de nuit
                  (qiyam al-layl) puis pour celle de l&apos;aube (Fajr). Ce
                  rythme de sommeil correspond a ce que la chronobiologie
                  moderne recommande : un coucher precoce, un sommeil de qualite
                  et un reveil matinal. Les etudes montrent qu&apos;un manque de
                  sommeil augmente la production de ghreline (hormone de la
                  faim) et diminue la leptine (hormone de la satiete), ce qui
                  favorise la prise de poids. De meme,{" "}
                  <Link
                    href="/remede-angoisse-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le stress, facteur de prise de poids
                  </Link>
                  , doit etre pris en charge pour eviter les comportements
                  alimentaires compulsifs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La Sunna de dormir sur le cote droit, apres avoir fait ses
                  ablutions et recite les invocations du coucher, favorise un
                  sommeil plus reparateur. Eviter les ecrans tard le soir et
                  privilegier la lecture du Coran ou le dhikr avant de dormir
                  contribue a un endormissement paisible et a une meilleure
                  regulation hormonale, deux facteurs determinants dans la
                  gestion du poids.
                </p>
              </section>

              <ArticleCTA
                variant="page-mere"
                title="Retrouvez tous les remedes de la medecine prophetique"
                href="/remede-arabe"
                linkText="Voir la page remedes arabes"
              />

              {/* ============================================ */}
              {/* SECTION 2 : Le jeune */}
              {/* ============================================ */}
              <section id="jeune-perte-poids" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeune (sawm) et la perte de poids : une pratique
                  prophetique aux bienfaits confirmes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien avant que le jeune intermittent ne devienne une tendance
                  mondiale, l&apos;islam avait deja institue le jeune comme un
                  pilier de la pratique religieuse. Au-dela de sa dimension
                  spirituelle, le sawm presente des avantages remarquables pour
                  la gestion du poids et la sante globale.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le jeune du Ramadan et la regulation du metabolisme
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pendant le mois de Ramadan, le musulman s&apos;abstient de
                  manger et de boire du lever au coucher du soleil. Ce rythme
                  impose au corps une periode de repos digestif prolongee qui
                  active l&apos;autophagie (processus naturel de nettoyage
                  cellulaire), stimule la combustion des graisses et ameliore la
                  sensibilite a l&apos;insuline. Les recherches en nutrition
                  montrent que cette alternance entre periodes de jeune et
                  periodes d&apos;alimentation favorise une perte de masse
                  grasse sans deterioration de la masse musculaire, a condition
                  de maintenir une alimentation equilibree lors de la rupture.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La cle reside dans la qualite des repas du suhur (repas avant
                  l&apos;aube) et de l&apos;iftar (rupture). Le Prophete (paix
                  et benedictions sur lui) rompait le jeune avec des dattes et
                  de l&apos;eau, puis accomplissait la priere du Maghrib avant
                  de prendre un repas leger. Cette methode evite la
                  suralimentation compensatoire qui annule les bienfaits du
                  jeune.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le jeune surrerogatoire du lundi et du jeudi
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En dehors du Ramadan, le Prophete (paix et benedictions sur
                  lui) jeunait regulierement le lundi et le jeudi. Abou Houreira
                  (qu&apos;Allah soit satisfait de lui) rapporte que le
                  Messager d&apos;Allah a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Les actes sont presentes le lundi et le jeudi, et
                  j&apos;aime que mes actes soient presentes alors que je
                  jeune. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapporte par at-Tirmidhi, n&deg;747)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce jeune bi-hebdomadaire correspond a ce que les
                  chercheurs appellent le jeune intermittent &laquo; 5:2 &raquo;
                  (cinq jours d&apos;alimentation normale et deux jours de
                  restriction). Les etudes publiees dans des revues
                  scientifiques de reference montrent que cette pratique reduit
                  la masse grasse, ameliore les marqueurs inflammatoires et
                  renforce la sante cardiovasculaire.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les trois jours blancs (ayyam al-bid)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et benedictions sur lui) recommandait
                  egalement de jeuner les trois jours blancs de chaque mois
                  lunaire (13e, 14e et 15e jour). Abdallah ibn Amr (qu&apos;Allah
                  soit satisfait de lui) rapporte cette recommandation
                  prophetique. Ce rythme offre au corps une pause digestive
                  reguliere qui soutient le processus de detoxification
                  naturelle et aide a maintenir un poids stable sur le long
                  terme.
                </p>

                {/* Profil 1 : Fatima */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <svg
                        className="h-5 w-5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Fatima, 34 ans, Lyon
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        Mere de famille, en surpoids depuis plusieurs annees
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; J&apos;ai commence a jeuner le lundi et le jeudi
                    comme le faisait le Prophete (paix et benedictions sur lui).
                    Au bout de trois mois, j&apos;ai perdu 6 kilos sans
                    frustration. Ce qui a change, c&apos;est surtout mon rapport
                    a la nourriture : je mange moins, mais mieux, et je ressens
                    une vraie serenite interieure. &raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le jeune n&apos;est pas seulement un outil de perte de poids :
                  c&apos;est une discipline qui renforce la volonte, purifie le
                  corps et rapproche le croyant de son Createur. Pour en tirer
                  les meilleurs bienfaits, il convient de l&apos;accompagner
                  d&apos;une alimentation saine et de ne jamais
                  le pratiquer en cas de contre-indication medicale.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Aliments prophetiques */}
              {/* ============================================ */}
              <section id="aliments-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Aliments prophetiques favorisant la perte de poids
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La medecine prophetique (Tibb an-Nabawi) recommande plusieurs
                  aliments dont les bienfaits sur la sante et le controle du
                  poids sont aujourd&apos;hui confirmes par la recherche
                  scientifique. Ces aliments, mentionnes dans le Coran et la
                  Sunna, offrent une approche naturelle et bienveillante de la
                  perte de poids.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les dattes : un coupe-faim naturel beni par la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les dattes occupent une place privilegiee dans
                  l&apos;alimentation prophetique. Le Prophete (paix et
                  benedictions sur lui) rompait systematiquement son jeune avec
                  des dattes fraiches ou seches, accompagnees d&apos;eau. Sa'ad
                  ibn Abi Waqqas (qu&apos;Allah soit satisfait de lui)
                  rapporte que le Prophete a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Celui qui dejeune le matin avec sept dattes
                  &apos;ajwa ne sera pas atteint ce jour-la par un poison ni
                  par la sorcellerie. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapporte par al-Bukhari, n&deg;5445 ; Muslim, n&deg;2047)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sur le plan nutritionnel, les dattes sont riches en fibres, en
                  potassium, en magnesium et en sucres naturels a liberation
                  progressive. Consommees en petite quantite (3 a 5 par jour),
                  elles rassasient rapidement et coupent les envies de sucre
                  raffine. Elles constituent ainsi un substitut naturel aux
                  sucreries industrielles, tout en apportant une energie
                  durable.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le miel : remplacement sain du sucre raffine
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran accorde au miel une place d&apos;honneur parmi les
                  bienfaits de la creation :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; De leur ventre sort une boisson aux couleurs variees,
                  dans laquelle il y a une guerison pour les gens. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Sourate An-Nahl, 16:69)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le miel possede un pouvoir sucrant superieur au sucre blanc,
                  ce qui permet d&apos;en utiliser moins pour obtenir le meme
                  resultat gustatif. Son index glycemique, bien que variable
                  selon les varietes, reste inferieur a celui du sucre raffine.
                  Riche en antioxydants, en enzymes et en composes
                  antibacteriens, il soutient le metabolisme sans provoquer les
                  pics d&apos;insuline associes aux sucres rapides. Une
                  cuillere de miel dilue dans de l&apos;eau tiede le matin est
                  une Sunna qui contribue a une hydratation optimale et a une
                  mise en route douce du systeme digestif.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;huile d&apos;olive : l&apos;arbre beni du Coran
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et benedictions sur lui) a recommande de
                  consommer l&apos;huile d&apos;olive et de s&apos;en enduire le
                  corps, en disant : &laquo; Mangez de l&apos;huile d&apos;olive
                  et enduisez-vous-en, car elle provient d&apos;un arbre beni
                  &raquo; (rapporte par at-Tirmidhi). Le Coran mentionne
                  l&apos;olivier comme un arbre beni dans la sourate An-Nur
                  (24:35).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;huile d&apos;olive extra-vierge est riche en acide
                  oleique (un acide gras mono-insature qui favorise la satiete),
                  en polyphenols et en vitamine E. Des recherches montrent que
                  sa consommation reguliere reduit l&apos;inflammation
                  chronique, ameliore la sensibilite a l&apos;insuline et aide a
                  prevenir le stockage excessif des graisses abdominales. Utilisee
                  en assaisonnement ou a jeun (une cuillere a soupe le matin),
                  elle s&apos;integre aisement dans un programme de perte de
                  poids.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La talbina : la bouillie d&apos;orge prophetique
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Aicha (qu&apos;Allah soit satisfait d&apos;elle) rapporte que
                  le Prophete (paix et benedictions sur lui) recommandait la
                  talbina pour les personnes en souffrance. Il a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; La talbina apaise le coeur du malade et dissipe une
                  partie de la tristesse. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapporte par al-Bukhari, n&deg;5689 ; Muslim, n&deg;2216)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  La talbina est une bouillie preparee a partir de farine
                  d&apos;orge cuite dans de l&apos;eau ou du lait, sucree avec
                  du miel. L&apos;orge est riche en beta-glucanes, des fibres
                  solubles qui procurent une sensation de satiete durable,
                  ralentissent l&apos;absorption des glucides, aident a{" "}
                  <Link
                    href="/remede-arabe-constipation"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    ameliorer son transit intestinal
                  </Link>{" "}
                  et contribuent a reguler le cholesterol. Integree au petit-dejeuner ou en
                  collation, la talbina permet de reduire les quantites
                  consommees au repas suivant et constitue un veritable allie
                  minceur dans la tradition prophetique.
                </p>

                {/* Profil 2 : Ahmed */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <svg
                        className="h-5 w-5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ahmed, 42 ans, Marseille
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        Diabetique de type 2, souhaite perdre du poids
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; Mon endocrinologue m&apos;a encourage a remplacer le
                    sucre blanc par du miel en petite quantite et a integrer la
                    talbina dans mon alimentation. Apres six mois, mes
                    glycemies se sont stabilisees et j&apos;ai perdu 8 kilos.
                    J&apos;ai redecouvert la medecine prophetique grace a mon
                    medecin, et c&apos;est devenu un acte d&apos;adoration
                    quotidien. &raquo;
                  </p>
                </div>

                {/* Tableau aliments prophetiques */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aliment prophetique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Proprietes minceur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Mode de consommation
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source islamique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dattes (&apos;ajwa, medjool)
                        </td>
                        <td className="py-3 pr-4">
                          Coupe-faim naturel, fibres, sucres lents
                        </td>
                        <td className="py-3 pr-4">
                          3 a 5 par jour, rupture du jeune
                        </td>
                        <td className="py-3">
                          Al-Bukhari, Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel pur
                        </td>
                        <td className="py-3 pr-4">
                          Remplace le sucre, antioxydant, metabolisme
                        </td>
                        <td className="py-3 pr-4">
                          1 cuillere dans eau tiede le matin
                        </td>
                        <td className="py-3">
                          Sourate An-Nahl, 16:69
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile d&apos;olive extra-vierge
                        </td>
                        <td className="py-3 pr-4">
                          Satiete, anti-inflammatoire, acides gras sains
                        </td>
                        <td className="py-3 pr-4">
                          Assaisonnement ou 1 cuillere a jeun
                        </td>
                        <td className="py-3">
                          At-Tirmidhi ; Sourate An-Nur, 24:35
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Talbina (orge + miel)
                        </td>
                        <td className="py-3 pr-4">
                          Satiete durable, beta-glucanes, regulation glycemique
                        </td>
                        <td className="py-3 pr-4">
                          Au petit-dejeuner ou en collation
                        </td>
                        <td className="py-3">
                          Al-Bukhari, Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vinaigre (khall)
                        </td>
                        <td className="py-3 pr-4">
                          Regulation de la glycemie, digestion
                        </td>
                        <td className="py-3 pr-4">
                          En assaisonnement des salades
                        </td>
                        <td className="py-3">
                          Muslim, n&deg;2052
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Costus indien (al-qist)
                        </td>
                        <td className="py-3 pr-4">
                          Anti-inflammatoire, soutien digestif
                        </td>
                        <td className="py-3 pr-4">
                          En poudre dans une boisson chaude
                        </td>
                        <td className="py-3">
                          Al-Bukhari, n&deg;5692
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <ArticleCTA
                variant="lire-aussi"
                title="La nigelle, le miel et les remedes prophetiques pour la sante"
                href="/remede-arabe"
                description="Retrouvez l'ensemble des remedes de la medecine prophetique et leurs applications sante."
              />

              {/* ============================================ */}
              {/* SECTION 4 : La nigelle et le metabolisme */}
              {/* ============================================ */}
              <section id="nigelle-metabolisme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La nigelle (habba sawda) et le metabolisme : un remede
                  prophetique pour maigrir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les remedes prophetiques, la graine de nigelle occupe
                  une place a part. Le Prophete Muhammad (paix et benedictions
                  sur lui) a declare :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Prenez cette graine noire (habba sawda), car elle
                  contient un remede contre toute maladie, sauf la mort
                  (sam). &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapporte par al-Bukhari, n&deg;5688 ; Muslim, n&deg;2215)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  La recherche scientifique contemporaine a identifie dans la
                  nigelle (Nigella sativa) un compose actif principal, la
                  thymoquinone, responsable de la plupart de ses effets
                  therapeutiques. Plusieurs etudes cliniques ont demontre son
                  action benefique sur la perte de poids :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Regulation de l&apos;appetit</strong> : la
                      thymoquinone agit sur les hormones de la satiete et reduit
                      les envies de grignotage entre les repas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Stimulation du metabolisme</strong> : elle
                      augmente la thermogenese (production de chaleur par le
                      corps), ce qui accelere la combustion des calories au
                      repos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Amelioration de la sensibilite a
                      l&apos;insuline</strong> : la nigelle aide a mieux
                      reguler la glycemie, reduisant ainsi le stockage des
                      graisses lie aux pics d&apos;insuline.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Reduction de l&apos;inflammation</strong> :
                      l&apos;inflammation chronique est un facteur aggravant de
                      l&apos;obesite. Les proprietes anti-inflammatoires de la
                      nigelle contribuent a briser ce cercle.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Comment consommer la nigelle pour la perte de poids
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La nigelle peut etre consommee sous plusieurs formes, chacune
                  adaptee aux preferences et aux habitudes de chacun :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Huile de nigelle a jeun</strong> : une cuillere a
                      cafe le matin, 30 minutes avant le petit-dejeuner, avec
                      un peu de miel pour attenuer le gout prononce.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Graines broyees</strong> : une demi-cuillere a
                      cafe saupoudree sur les salades, dans un yaourt nature ou
                      melangee a du miel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Infusion de nigelle</strong> : faire infuser une
                      cuillere a cafe de graines dans de l&apos;eau chaude
                      pendant 10 minutes, filtrer et boire apres les repas.
                    </span>
                  </li>
                </ul>

                <Image
                  src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-maigrir-methodes-saines-selon-lislam-et-la-tradition-2.jpg"
                  alt="Nigelle, miel et aliments prophetiques pour la perte de poids en islam"
                  width={1200}
                  height={720}
                  className="mt-8 w-full rounded-xl"
                  loading="lazy"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le duo miel et nigelle : une synergie reconnue
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;association du miel et de la nigelle est l&apos;un des
                  remedes les plus repandus dans la tradition prophetique.
                  Ensemble, ils combinent les proprietes coupe-faim et
                  metaboliques de la nigelle avec les vertus energisantes et
                  antibacteriennes du miel. La preparation classique consiste a
                  melanger une cuillere a cafe de graines de nigelle broyees
                  dans une cuillere a soupe de miel pur, et a consommer ce
                  melange le matin a jeun. Cette Sunna soutient la perte de
                  poids tout en renforçant l&apos;immunite et la vitalite
                  generale.
                </p>

                {/* Profil 3 : Khadija */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <svg
                        className="h-5 w-5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Khadija, 28 ans, Bruxelles
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        Etudiante, prise de poids liee au stress des examens
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; Ma grand-mere m&apos;a toujours repete que la
                    nigelle est la graine de toutes les guerisons. J&apos;ai
                    commence a prendre une cuillere d&apos;huile de nigelle
                    chaque matin avec un peu de miel. Apres deux mois,
                    j&apos;ai senti un changement net : moins de fringales
                    entre les cours, plus d&apos;energie et 4 kilos en
                    moins. &raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il convient toutefois de rappeler que la nigelle ne constitue
                  pas un remede miracle a elle seule. Son efficacite
                  s&apos;exprime pleinement lorsqu&apos;elle est integree dans
                  une demarche globale associant alimentation equilibree,
                  activite physique et discipline spirituelle. Les personnes
                  sous traitement medical doivent consulter leur medecin avant
                  d&apos;ajouter la nigelle a leur routine, car elle peut
                  interagir avec certains medicaments (anticoagulants,
                  antidiabetiques).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Activite physique */}
              {/* ============================================ */}
              <section id="activite-physique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;activite physique en islam : marche, natation et
                  discipline du corps
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se limite pas a des prescriptions
                  alimentaires. Le corps est considere comme un depot
                  (amana) confie par Allah, et le musulman a la
                  responsabilite de le maintenir en bonne sante. Le Prophete
                  (paix et benedictions sur lui) etait lui-meme un homme actif
                  qui marchait frequemment, participait aux travaux physiques et
                  encourageait les activites sportives.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les activites recommandees par le Prophete
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Omar ibn al-Khattab (qu&apos;Allah soit satisfait de lui)
                  rapporte que le Prophete (paix et benedictions sur lui) a
                  encourage l&apos;enseignement de trois disciplines a ses
                  enfants :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La natation</strong> : activite complete qui fait
                      travailler l&apos;ensemble des muscles, ameliore
                      l&apos;endurance cardiovasculaire et brule un nombre
                      significatif de calories sans impacter les articulations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le tir a l&apos;arc</strong> : exercice de
                      concentration et de maitrise du corps qui renforce la
                      posture, les muscles du dos et la discipline personnelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;equitation</strong> : activite
                      physique exigeante qui sollicite les muscles profonds du
                      tronc, ameliore l&apos;equilibre et la coordination.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La marche quotidienne : une Sunna accessible a tous
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et benedictions sur lui) se rendait
                  regulierement a la mosquee a pied. Il encourageait a
                  multiplier les pas vers les lieux de priere, rappelant que
                  chaque pas efface un peche et eleve d&apos;un degre aupres
                  d&apos;Allah. La marche est l&apos;activite physique la plus
                  simple et la plus accessible : 30 a 45 minutes de marche
                  quotidienne suffisent a maintenir le metabolisme actif,
                  a bruler les graisses et a ameliorer l&apos;humeur grace
                  a la liberation d&apos;endorphines.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour les personnes en surpoids, la marche represente un point
                  de depart ideal. Elle peut etre pratiquee apres les prieres,
                  lors des courses quotidiennes ou sous forme de promenade
                  familiale le week-end. Les fumeurs qui souhaitent perdre
                  du poids gagneront aussi a{" "}
                  <Link
                    href="/remede-arabe-arreter-fumer"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    arreter de fumer pour retrouver la forme
                  </Link>
                  , car le tabac freine le metabolisme et reduit la capacite
                  a l&apos;effort. L&apos;intention (niyya) de prendre
                  soin du corps offert par Allah transforme cet exercice en acte
                  d&apos;adoration.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La priere : une activite physique meconnue
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les cinq prieres quotidiennes impliquent des mouvements
                  repetes de flexion, de prosternation et de redressement qui
                  sollicitent les articulations, les muscles du dos, des jambes
                  et du tronc. Veritable discipline corporelle et spirituelle,{" "}
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    la priere, activite physique quotidienne
                  </Link>
                  , engage le corps entier dans un effort regulier et mesure. Un musulman qui accomplit ses cinq prieres
                  quotidiennes effectue au minimum 34 prosternations par jour.
                  Des chercheurs ont estime que cette activite contribue a
                  maintenir la souplesse articulaire, a stimuler la circulation
                  sanguine et a bruler un nombre modere de calories.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les prieres surrerogatoires (rawatib, tahajjud, duha)
                  augmentent encore cette activite physique. Le qiyam al-layl
                  (priere nocturne), avec ses longues stations debout et ses
                  prosternations repetees, constitue un veritable exercice qui
                  allie effort physique et elevation spirituelle.
                </p>

                <Image
                  src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-maigrir-methodes-saines-selon-lislam-et-la-tradition-3.jpg"
                  alt="Activite physique et mode de vie sain en islam pour la perte de poids"
                  width={1200}
                  height={720}
                  className="mt-8 w-full rounded-xl"
                  loading="lazy"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Invocations pour la discipline et la patience dans la perte de
                  poids
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La dimension spirituelle est indissociable de tout effort
                  physique en islam. Le croyant est invite a formuler une
                  intention sincere (niyya) avant d&apos;entamer une demarche de
                  perte de poids, et a accompagner ses efforts de du&apos;as
                  (invocations) pour la patience (sabr) et la perseverance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et benedictions sur lui) invoquait
                  regulierement Allah pour la sante et la protection contre la
                  maladie :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; O Allah, je Te demande la sante, la chastete, la
                  fiabilite, un bon caractere et l&apos;acceptation du
                  destin. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapporte par Muslim, a partir du hadith d&apos;Ibn Omar)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  D&apos;autres invocations peuvent accompagner la demarche :
                  demander a Allah de faciliter la patience face aux tentations
                  alimentaires, de benir la nourriture consommee, de guerir les
                  desequilibres du corps et de donner la force de perseverer.
                  Associer chaque effort a une intention pure transforme la perte
                  de poids en un acte de devotion et renforce la motivation sur
                  le long terme.
                </p>

                {/* Profil 4 : Youssef */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                      <svg
                        className="h-5 w-5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Youssef, 51 ans, Paris
                      </p>
                      <p className="text-sm text-foreground-secondary">
                        Cadre sedentaire, besoin de reprendre une activite
                        physique
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; J&apos;ai commence par marcher 30 minutes chaque
                    jour apres la priere du Fajr. Au debut, c&apos;etait
                    difficile, mais l&apos;intention de prendre soin du corps
                    qu&apos;Allah m&apos;a confie m&apos;a motive. En six
                    mois, j&apos;ai integre la natation deux fois par semaine et
                    j&apos;ai perdu 10 kilos. Je me sens mieux dans mon corps et
                    dans ma priere. &raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Quand consulter un professionnel de sante
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam encourage le recours a la medecine. Le Prophete
                  (paix et benedictions sur lui) a dit :
                  &laquo; Soignez-vous, car Allah n&apos;a pas cree de maladie
                  sans creer son remede, sauf la vieillesse &raquo; (rapporte
                  par Abu Dawud). Il est recommande de consulter un medecin
                  ou un nutritionniste dans les situations suivantes :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Surpoids important</strong> (IMC superieur a 30) :
                      un suivi medical permet d&apos;adapter la demarche et
                      d&apos;ecarter d&apos;eventuelles causes hormonales ou
                      metaboliques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maladies chroniques</strong> (diabete,
                      hypertension, problemes thyroidiens) : le jeune et
                      certains remedes prophetiques peuvent necessiter des
                      ajustements medicaux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Grossesse et allaitement</strong> : les besoins
                      nutritionnels specifiques de cette periode requierent un
                      avis medical avant toute modification alimentaire.
                      Consultez notre guide sur{" "}
                      <Link
                        href="/remede-arabe-grossesse"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        l&apos;alimentation pendant la grossesse
                      </Link>{" "}
                      pour des conseils adaptes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Interactions medicamenteuses</strong> : la nigelle,
                      par exemple, peut interagir avec les anticoagulants et les
                      antidiabetiques. Un avis medical est indispensable.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La medecine prophetique et la medecine moderne ne
                  s&apos;opposent pas. Elles se completent dans une demarche de
                  soin holistique qui respecte a la fois la science et la foi.
                  Le musulman qui souhaite perdre du poids a tout interet a
                  combiner les enseignements prophetiques avec un suivi medical
                  adapte, pour une perte de poids saine, progressive et
                  durable.
                </p>
              </section>

              {/* MedicalDisclaimer avant FAQ */}
              <div className="mt-16">
                <MedicalDisclaimer />
              </div>

              {/* ============================================ */}
              {/* SECTION FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} />

              {/* ============================================ */}
              {/* Navigation silo bas de page */}
              {/* ============================================ */}
              <section className="mt-16 border-t border-border pt-12">
                <h2 className="mb-6 text-xl font-bold text-primary">
                  Remedes arabes et medecine prophetique : articles du meme silo
                </h2>
                <p className="mb-8 text-foreground-secondary">
                  Poursuivez votre lecture avec les autres articles sur les
                  remedes de la medecine prophetique et de la tradition arabe.
                </p>
                <nav aria-label="Articles du silo remedes arabes">
                  <ul className="grid gap-4 sm:grid-cols-2">
                    <li>
                      <Link
                        href="/remede-arabe"
                        className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-colors hover:border-secondary/40 hover:bg-accent"
                      >
                        <svg
                          className="h-5 w-5 shrink-0 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-foreground">
                            Remedes arabes et medecine prophetique
                          </p>
                          <p className="mt-0.5 text-sm text-foreground-secondary">
                            Page principale du silo
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/remede-arabe"
                        className="flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-colors hover:border-secondary/40 hover:bg-accent"
                      >
                        <svg
                          className="h-5 w-5 shrink-0 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                          />
                        </svg>
                        <div>
                          <p className="font-semibold text-foreground">
                            Nigelle, miel et remedes prophetiques
                          </p>
                          <p className="mt-0.5 text-sm text-foreground-secondary">
                            Tous les bienfaits de la medecine du Prophete
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
