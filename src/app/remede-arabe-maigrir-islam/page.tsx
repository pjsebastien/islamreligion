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
    "Remède arabe pour maigrir : méthodes saines selon l'islam et la médecine prophétique",
  description:
    "Découvrez les remèdes arabes pour maigrir en islam : jeûne, nigelle, miel, talbina, huile d'olive, activité physique et invocations prophétiques pour une perte de poids saine et durable.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-maigrir-islam",
  },
};

const tocItems = [
  { id: "alimentation-islam", label: "L'alimentation en islam : modération et hadith du tiers" },
  { id: "jeune-perte-poids", label: "Le jeûne (sawm) et la perte de poids" },
  { id: "aliments-prophetiques", label: "Aliments prophétiques pour maigrir" },
  { id: "nigelle-metabolisme", label: "La nigelle et le métabolisme" },
  { id: "activite-physique", label: "L'activité physique en islam" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Le jeûne intermittent est-il une pratique islamique ?",
    answer:
      "Le jeûne du lundi et du jeudi, recommandé par le Prophète Muhammad (paix et bénédictions sur lui), correspond effectivement à une forme de jeûne intermittent. Cette Sunna ancestrale implique de s'abstenir de nourriture du lever au coucher du soleil, ce qui permet au corps de puiser dans ses réserves et de favoriser une perte de poids progressive. La science moderne confirme les bienfaits de ce rythme alimentaire sur le métabolisme et la régulation hormonale.",
  },
  {
    question: "Comment utiliser la nigelle pour maigrir selon la Sunna ?",
    answer:
      "La nigelle (habba sawda) peut être consommée sous forme de graines broyées (une demi-cuillère à café par jour), d'huile (une cuillère à café à jeun le matin), ou en infusion. Le Prophète (paix et bénédictions sur lui) a dit qu'elle est un remède contre toute maladie sauf la mort. Pour la perte de poids, elle aide à réguler l'appétit, stimuler le métabolisme et améliorer la digestion. Il convient de ne pas dépasser les doses recommandées.",
  },
  {
    question: "Les dattes font-elles grossir ou maigrir ?",
    answer:
      "Les dattes, consommées avec modération (3 à 5 par jour), agissent comme un coupe-faim naturel grâce à leur richesse en fibres et en sucres naturels à libération lente. Le Prophète (paix et bénédictions sur lui) rompait son jeûne avec des dattes. Elles rassasient rapidement et évitent les fringales. En revanche, une consommation excessive peut apporter un surplus calorique. La clé réside dans la modération, principe fondamental en islam.",
  },
  {
    question: "Le miel remplace-t-il vraiment le sucre pour perdre du poids ?",
    answer:
      "Le miel possède un pouvoir sucrant supérieur au sucre blanc, ce qui permet d'en utiliser moins pour le même goût sucré. Le Coran mentionne que le miel contient une guérison pour les gens (sourate An-Nahl, verset 69). Son index glycémique est plus bas que celui du sucre raffiné, il apporte des antioxydants et des enzymes bénéfiques. Dilué dans de l'eau tiède le matin, il soutient le métabolisme sans provoquer de pic glycémique brutal.",
  },
  {
    question: "Quelle activité physique le Prophète recommandait-il ?",
    answer:
      "Le Prophète Muhammad (paix et bénédictions sur lui) a encouragé la natation, le tir à l'arc et l'équitation. Il pratiquait lui-même la marche quotidienne, parfois sur de longues distances. La prière elle-même, avec ses mouvements de prosternation et de redressement répétés cinq fois par jour, constitue une activité physique régulière. L'islam valorise tout effort physique qui préserve la santé du corps, considéré comme un dépôt confié par Allah.",
  },
  {
    question: "Existe-t-il des invocations pour aider a maigrir ?",
    answer:
      "Il n'existe pas d'invocation spécifiquement destinée à la perte de poids. En revanche, les invocations pour la patience (sabr), la discipline et la santé du corps sont encouragées. Le Prophète (paix et bénédictions sur lui) invoquait Allah pour la bonne santé et demandait protection contre la maladie. Associer ses efforts alimentaires à une intention sincère (niyya) et à des invocations renforce la motivation spirituelle et la persévérance.",
  },
  {
    question: "La talbina aide-t-elle a perdre du poids ?",
    answer:
      "La talbina, bouillie à base de farine d'orge et de miel, est un aliment prophétique reconnu pour ses bienfaits. Riche en fibres solubles (bêta-glucanes), elle procure une sensation de satiété durable, ralentit l'absorption des sucres et favorise un transit sain. Aïcha (qu'Allah soit satisfait d'elle) rapporte que le Prophète (paix et bénédictions sur lui) la recommandait pour le bien-être. Intégrée au petit-déjeuner, elle contribue à une alimentation équilibrée.",
  },
  {
    question: "Quand faut-il consulter un médecin pour perdre du poids ?",
    answer:
      "Il est recommandé de consulter un médecin ou un nutritionniste avant d'entamer toute démarche de perte de poids significative, surtout en présence de maladies chroniques (diabète, problèmes thyroïdiens, hypertension). L'islam encourage le recours à la médecine : le Prophète (paix et bénédictions sur lui) a dit de se soigner, car Allah n'a pas créé de maladie sans créer son remède. Un suivi médical garantit une démarche adaptée et sans risque pour la santé.",
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
          "Remède arabe pour maigrir : méthodes saines selon l'islam et la médecine prophétique",
        description:
          "Découvrez les remèdes arabes pour maigrir en islam : jeûne, nigelle, miel, talbina, huile d'olive, activité physique et invocations prophétiques pour une perte de poids saine.",
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
            name: "Remèdes arabes",
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
          title="Remède arabe pour maigrir : méthodes saines selon l'islam"
          subtitle="Jeûne prophétique, nigelle, miel, talbina et activité physique : retrouvez un poids équilibré grâce à la sagesse islamique et aux remèdes naturels de la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-maigrir-methodes-saines-selon-lislam-et-la-tradition-1.jpg"
          imageAlt="Remèdes arabes pour maigrir selon l'islam, aliments prophétiques et méthodes saines de perte de poids"
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
                  Rem&egrave;des arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Maigrir</span>
              </nav>

              {/* MedicalDisclaimer debut */}
              <MedicalDisclaimer />

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r&eacute;sum&eacute;
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La tradition islamique offre une approche compl&egrave;te et
                  bienveillante de la perte de poids. Du c&eacute;l&egrave;bre hadith du tiers
                  de l&apos;estomac au je&ucirc;ne du lundi et du jeudi, en passant
                  par la nigelle, le miel, la talbina et l&apos;huile
                  d&apos;olive, les rem&egrave;des proph&eacute;tiques s&apos;associent &agrave; une
                  hygi&egrave;ne de vie &eacute;quilibr&eacute;e. L&apos;islam invite &agrave; prendre soin
                  de son corps comme d&apos;un d&eacute;p&ocirc;t confi&eacute; par Allah, en
                  privil&eacute;giant la mod&eacute;ration, l&apos;activit&eacute; physique et la
                  patience.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'alimentation en islam */}
              {/* ============================================ */}
              <section id="alimentation-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;alimentation en islam : mod&eacute;ration, &eacute;quilibre et hadith
                  du tiers de l&apos;estomac
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La relation du musulman &agrave; la nourriture est, avant tout, une
                  question de conscience et de gratitude envers Allah. Bien avant
                  les r&eacute;gimes modernes, l&apos;islam a pos&eacute; les fondements
                  d&apos;une alimentation &eacute;quilibr&eacute;e, centr&eacute;e sur la mod&eacute;ration
                  et le respect du corps.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te Muhammad (paix et b&eacute;n&eacute;dictions sur lui) a enseign&eacute;
                  un principe qui r&eacute;sonne encore aujourd&apos;hui avec les
                  recommandations des nutritionnistes contemporains. Dans un
                  hadith rapport&eacute; par at-Tirmidhi et Ibn Majah, il a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Le fils d&apos;Adam ne remplit pas de r&eacute;cipient pire
                  que son estomac. Quelques bouch&eacute;es suffisent &agrave; l&apos;&ecirc;tre
                  humain pour se maintenir. S&apos;il doit absolument manger
                  davantage, qu&apos;il r&eacute;serve un tiers pour sa nourriture, un
                  tiers pour sa boisson et un tiers pour son souffle. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapport&eacute; par at-Tirmidhi, n&deg;2380 ; Ibn Majah, n&deg;3349)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith pose trois principes fondamentaux : ne jamais se
                  remplir compl&egrave;tement l&apos;estomac, partager l&apos;espace
                  entre nourriture solide, liquide et air, et faire de la
                  mod&eacute;ration un mode de vie permanent plut&ocirc;t qu&apos;un r&eacute;gime
                  temporaire. La science moderne confirme que manger &agrave; 70 % de
                  sa capacit&eacute; stomacale favorise une meilleure digestion, limite
                  la prise de poids et r&eacute;duit les risques cardiovasculaires.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le gaspillage alimentaire (israf) : un interdit qui prot&egrave;ge la
                  sant&eacute;
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran rappelle &agrave; plusieurs reprises l&apos;interdiction du
                  gaspillage :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Mangez et buvez, mais ne commettez pas d&apos;exc&egrave;s,
                  car Allah n&apos;aime pas ceux qui commettent des exc&egrave;s. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Sourate Al-A&apos;raf, 7:31)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;israf (exc&egrave;s, gaspillage) ne concerne pas seulement la
                  nourriture jet&eacute;e, mais aussi la surconsommation. Le musulman
                  est invit&eacute; &agrave; manger ce dont il a r&eacute;ellement besoin, &agrave;
                  remercier Allah pour chaque repas et &agrave; partager le surplus avec
                  ceux qui en ont besoin. Pour aller plus loin, d&eacute;couvrez{" "}
                  <Link
                    href="/halal-haram-criteres"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les principes du halal et du haram en mati&egrave;re alimentaire
                  </Link>
                  , qui encadrent cette discipline. Cette approche contribue
                  directement au maintien d&apos;un poids sain.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Manger assis et lentement</strong> : le Proph&egrave;te
                      (paix et b&eacute;n&eacute;dictions sur lui) prenait ses repas assis,
                      dans le calme, ce qui favorise la sati&eacute;t&eacute; et une digestion
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
                      <strong>&Eacute;viter le grignotage excessif</strong> : la
                      tradition proph&eacute;tique enseigne &agrave; structurer les repas et &agrave;
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
                          Principe proph&eacute;tique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          B&eacute;n&eacute;fice sur le poids
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          &Eacute;quivalent en nutrition moderne
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          R&egrave;gle du tiers de l&apos;estomac
                        </td>
                        <td className="py-3 pr-4">
                          R&eacute;duction naturelle des portions
                        </td>
                        <td className="py-3">
                          Restriction calorique mod&eacute;r&eacute;e (20-30 %)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Manger lentement et en conscience
                        </td>
                        <td className="py-3 pr-4">
                          Sati&eacute;t&eacute; atteinte avec moins de nourriture
                        </td>
                        <td className="py-3">
                          Alimentation en pleine conscience (mindful eating)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Interdiction de l&apos;israf (exc&egrave;s)
                        </td>
                        <td className="py-3 pr-4">
                          Pr&eacute;vention de la suralimentation
                        </td>
                        <td className="py-3">
                          Contr&ocirc;le des portions et anti-gaspillage
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rompre le je&ucirc;ne avec des dattes et de l&apos;eau
                        </td>
                        <td className="py-3 pr-4">
                          Stabilise la glyc&eacute;mie, &eacute;vite les fringales
                        </td>
                        <td className="py-3">
                          Collation &agrave; index glyc&eacute;mique mod&eacute;r&eacute;
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Boire de l&apos;eau en trois gorg&eacute;es
                        </td>
                        <td className="py-3 pr-4">
                          Hydratation optimale, sati&eacute;t&eacute; accrue
                        </td>
                        <td className="py-3">
                          Hydratation fractionn&eacute;e tout au long de la journ&eacute;e
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le sommeil et son impact sur le poids selon la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui) dormait t&ocirc;t apr&egrave;s
                  la pri&egrave;re d&apos;al-Isha et se levait pour la pri&egrave;re de nuit
                  (qiyam al-layl) puis pour celle de l&apos;aube (Fajr). Ce
                  rythme de sommeil correspond &agrave; ce que la chronobiologie
                  moderne recommande : un coucher pr&eacute;coce, un sommeil de qualit&eacute;
                  et un r&eacute;veil matinal. Les &eacute;tudes montrent qu&apos;un manque de
                  sommeil augmente la production de ghr&eacute;line (hormone de la
                  faim) et diminue la leptine (hormone de la sati&eacute;t&eacute;), ce qui
                  favorise la prise de poids. De m&ecirc;me,{" "}
                  <Link
                    href="/remede-angoisse-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le stress, facteur de prise de poids
                  </Link>
                  , doit &ecirc;tre pris en charge pour &eacute;viter les comportements
                  alimentaires compulsifs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La Sunna de dormir sur le c&ocirc;t&eacute; droit, apr&egrave;s avoir fait ses
                  ablutions et r&eacute;cit&eacute; les invocations du coucher, favorise un
                  sommeil plus r&eacute;parateur. &Eacute;viter les &eacute;crans tard le soir et
                  privil&eacute;gier la lecture du Coran ou le dhikr avant de dormir
                  contribue &agrave; un endormissement paisible et &agrave; une meilleure
                  r&eacute;gulation hormonale, deux facteurs d&eacute;terminants dans la
                  gestion du poids.
                </p>
              </section>

              <ArticleCTA
                variant="page-mere"
                title="Retrouvez tous les remèdes de la médecine prophétique"
                href="/remede-arabe"
                linkText="Voir la page remèdes arabes"
              />

              {/* ============================================ */}
              {/* SECTION 2 : Le jeune */}
              {/* ============================================ */}
              <section id="jeune-perte-poids" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le je&ucirc;ne (sawm) et la perte de poids : une pratique
                  proph&eacute;tique aux bienfaits confirm&eacute;s
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien avant que le je&ucirc;ne intermittent ne devienne une tendance
                  mondiale, l&apos;islam avait d&eacute;j&agrave; institu&eacute; le je&ucirc;ne comme un
                  pilier de la pratique religieuse. Au-del&agrave; de sa dimension
                  spirituelle, le sawm pr&eacute;sente des avantages remarquables pour
                  la gestion du poids et la sant&eacute; globale.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le je&ucirc;ne du Ramadan et la r&eacute;gulation du m&eacute;tabolisme
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pendant le mois de Ramadan, le musulman s&apos;abstient de
                  manger et de boire du lever au coucher du soleil. Ce rythme
                  impose au corps une p&eacute;riode de repos digestif prolong&eacute;e qui
                  active l&apos;autophagie (processus naturel de nettoyage
                  cellulaire), stimule la combustion des graisses et am&eacute;liore la
                  sensibilit&eacute; &agrave; l&apos;insuline. Les recherches en nutrition
                  montrent que cette alternance entre p&eacute;riodes de je&ucirc;ne et
                  p&eacute;riodes d&apos;alimentation favorise une perte de masse
                  grasse sans d&eacute;t&eacute;rioration de la masse musculaire, &agrave; condition
                  de maintenir une alimentation &eacute;quilibr&eacute;e lors de la rupture.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La cl&eacute; r&eacute;side dans la qualit&eacute; des repas du suhur (repas avant
                  l&apos;aube) et de l&apos;iftar (rupture). Le Proph&egrave;te (paix
                  et b&eacute;n&eacute;dictions sur lui) rompait le je&ucirc;ne avec des dattes et
                  de l&apos;eau, puis accomplissait la pri&egrave;re du Maghrib avant
                  de prendre un repas l&eacute;ger. Cette m&eacute;thode &eacute;vite la
                  suralimentation compensatoire qui annule les bienfaits du
                  je&ucirc;ne.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le je&ucirc;ne surr&eacute;rogatoire du lundi et du jeudi
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  En dehors du Ramadan, le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur
                  lui) je&ucirc;nait r&eacute;guli&egrave;rement le lundi et le jeudi. Abou Houreira
                  (qu&apos;Allah soit satisfait de lui) rapporte que le
                  Messager d&apos;Allah a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Les actes sont pr&eacute;sent&eacute;s le lundi et le jeudi, et
                  j&apos;aime que mes actes soient pr&eacute;sent&eacute;s alors que je
                  je&ucirc;ne. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapport&eacute; par at-Tirmidhi, n&deg;747)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce je&ucirc;ne bi-hebdomadaire correspond &agrave; ce que les
                  chercheurs appellent le je&ucirc;ne intermittent &laquo; 5:2 &raquo;
                  (cinq jours d&apos;alimentation normale et deux jours de
                  restriction). Les &eacute;tudes publi&eacute;es dans des revues
                  scientifiques de r&eacute;f&eacute;rence montrent que cette pratique r&eacute;duit
                  la masse grasse, am&eacute;liore les marqueurs inflammatoires et
                  renforce la sant&eacute; cardiovasculaire.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les trois jours blancs (ayyam al-bid)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui) recommandait
                  &eacute;galement de je&ucirc;ner les trois jours blancs de chaque mois
                  lunaire (13e, 14e et 15e jour). Abdallah ibn Amr (qu&apos;Allah
                  soit satisfait de lui) rapporte cette recommandation
                  proph&eacute;tique. Ce rythme offre au corps une pause digestive
                  r&eacute;guli&egrave;re qui soutient le processus de d&eacute;toxification
                  naturelle et aide &agrave; maintenir un poids stable sur le long
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
                        M&egrave;re de famille, en surpoids depuis plusieurs ann&eacute;es
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; J&apos;ai commenc&eacute; &agrave; je&ucirc;ner le lundi et le jeudi
                    comme le faisait le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui).
                    Au bout de trois mois, j&apos;ai perdu 6 kilos sans
                    frustration. Ce qui a chang&eacute;, c&apos;est surtout mon rapport
                    &agrave; la nourriture : je mange moins, mais mieux, et je ressens
                    une vraie s&eacute;r&eacute;nit&eacute; int&eacute;rieure. &raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le je&ucirc;ne n&apos;est pas seulement un outil de perte de poids :
                  c&apos;est une discipline qui renforce la volont&eacute;, purifie le
                  corps et rapproche le croyant de son Cr&eacute;ateur. Pour en tirer
                  les meilleurs bienfaits, il convient de l&apos;accompagner
                  d&apos;une alimentation saine et de ne jamais
                  le pratiquer en cas de contre-indication m&eacute;dicale.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Aliments prophetiques */}
              {/* ============================================ */}
              <section id="aliments-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Aliments proph&eacute;tiques favorisant la perte de poids
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La m&eacute;decine proph&eacute;tique (Tibb an-Nabawi) recommande plusieurs
                  aliments dont les bienfaits sur la sant&eacute; et le contr&ocirc;le du
                  poids sont aujourd&apos;hui confirm&eacute;s par la recherche
                  scientifique. Ces aliments, mentionn&eacute;s dans le Coran et la
                  Sunna, offrent une approche naturelle et bienveillante de la
                  perte de poids.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les dattes : un coupe-faim naturel b&eacute;ni par la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les dattes occupent une place privil&eacute;gi&eacute;e dans
                  l&apos;alimentation proph&eacute;tique. Le Proph&egrave;te (paix et
                  b&eacute;n&eacute;dictions sur lui) rompait syst&eacute;matiquement son je&ucirc;ne avec
                  des dattes fra&icirc;ches ou s&egrave;ches, accompagn&eacute;es d&apos;eau. Sa&apos;ad
                  ibn Abi Waqqas (qu&apos;Allah soit satisfait de lui)
                  rapporte que le Proph&egrave;te a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Celui qui d&eacute;jeune le matin avec sept dattes
                  &apos;ajwa ne sera pas atteint ce jour-l&agrave; par un poison ni
                  par la sorcellerie. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapport&eacute; par al-Bukhari, n&deg;5445 ; Muslim, n&deg;2047)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sur le plan nutritionnel, les dattes sont riches en fibres, en
                  potassium, en magn&eacute;sium et en sucres naturels &agrave; lib&eacute;ration
                  progressive. Consomm&eacute;es en petite quantit&eacute; (3 &agrave; 5 par jour),
                  elles rassasient rapidement et coupent les envies de sucre
                  raffin&eacute;. Elles constituent ainsi un substitut naturel aux
                  sucreries industrielles, tout en apportant une &eacute;nergie
                  durable.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le miel : remplacement sain du sucre raffin&eacute;
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran accorde au miel une place d&apos;honneur parmi les
                  bienfaits de la cr&eacute;ation :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; De leur ventre sort une boisson aux couleurs vari&eacute;es,
                  dans laquelle il y a une gu&eacute;rison pour les gens. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Sourate An-Nahl, 16:69)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le miel poss&egrave;de un pouvoir sucrant sup&eacute;rieur au sucre blanc,
                  ce qui permet d&apos;en utiliser moins pour obtenir le m&ecirc;me
                  r&eacute;sultat gustatif. Son index glyc&eacute;mique, bien que variable
                  selon les vari&eacute;t&eacute;s, reste inf&eacute;rieur &agrave; celui du sucre raffin&eacute;.
                  Riche en antioxydants, en enzymes et en compos&eacute;s
                  antibact&eacute;riens, il soutient le m&eacute;tabolisme sans provoquer les
                  pics d&apos;insuline associ&eacute;s aux sucres rapides. Une
                  cuill&egrave;re de miel dilu&eacute; dans de l&apos;eau ti&egrave;de le matin est
                  une Sunna qui contribue &agrave; une hydratation optimale et &agrave; une
                  mise en route douce du syst&egrave;me digestif.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;huile d&apos;olive : l&apos;arbre b&eacute;ni du Coran
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui) a recommand&eacute; de
                  consommer l&apos;huile d&apos;olive et de s&apos;en enduire le
                  corps, en disant : &laquo; Mangez de l&apos;huile d&apos;olive
                  et enduisez-vous-en, car elle provient d&apos;un arbre b&eacute;ni
                  &raquo; (rapport&eacute; par at-Tirmidhi). Le Coran mentionne
                  l&apos;olivier comme un arbre b&eacute;ni dans la sourate An-Nur
                  (24:35).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;huile d&apos;olive extra-vierge est riche en acide
                  ol&eacute;ique (un acide gras mono-insatur&eacute; qui favorise la sati&eacute;t&eacute;),
                  en polyph&eacute;nols et en vitamine E. Des recherches montrent que
                  sa consommation r&eacute;guli&egrave;re r&eacute;duit l&apos;inflammation
                  chronique, am&eacute;liore la sensibilit&eacute; &agrave; l&apos;insuline et aide &agrave;
                  pr&eacute;venir le stockage excessif des graisses abdominales. Utilis&eacute;e
                  en assaisonnement ou &agrave; jeun (une cuill&egrave;re &agrave; soupe le matin),
                  elle s&apos;int&egrave;gre ais&eacute;ment dans un programme de perte de
                  poids.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La talbina : la bouillie d&apos;orge proph&eacute;tique
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  A&iuml;cha (qu&apos;Allah soit satisfait d&apos;elle) rapporte que
                  le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui) recommandait la
                  talbina pour les personnes en souffrance. Il a dit :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; La talbina apaise le c&oelig;ur du malade et dissipe une
                  partie de la tristesse. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapport&eacute; par al-Bukhari, n&deg;5689 ; Muslim, n&deg;2216)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  La talbina est une bouillie pr&eacute;par&eacute;e &agrave; partir de farine
                  d&apos;orge cuite dans de l&apos;eau ou du lait, sucr&eacute;e avec
                  du miel. L&apos;orge est riche en b&ecirc;ta-glucanes, des fibres
                  solubles qui procurent une sensation de sati&eacute;t&eacute; durable,
                  ralentissent l&apos;absorption des glucides, aident &agrave;{" "}
                  <Link
                    href="/remede-arabe-constipation"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    am&eacute;liorer son transit intestinal
                  </Link>{" "}
                  et contribuent &agrave; r&eacute;guler le cholest&eacute;rol. Int&eacute;gr&eacute;e au petit-d&eacute;jeuner ou en
                  collation, la talbina permet de r&eacute;duire les quantit&eacute;s
                  consomm&eacute;es au repas suivant et constitue un v&eacute;ritable alli&eacute;
                  minceur dans la tradition proph&eacute;tique.
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
                        Diab&eacute;tique de type 2, souhaite perdre du poids
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; Mon endocrinologue m&apos;a encourag&eacute; &agrave; remplacer le
                    sucre blanc par du miel en petite quantit&eacute; et &agrave; int&eacute;grer la
                    talbina dans mon alimentation. Apr&egrave;s six mois, mes
                    glyc&eacute;mies se sont stabilis&eacute;es et j&apos;ai perdu 8 kilos.
                    J&apos;ai red&eacute;couvert la m&eacute;decine proph&eacute;tique gr&acirc;ce &agrave; mon
                    m&eacute;decin, et c&apos;est devenu un acte d&apos;adoration
                    quotidien. &raquo;
                  </p>
                </div>

                {/* Tableau aliments prophetiques */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aliment proph&eacute;tique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Propri&eacute;t&eacute;s minceur
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
                          3 &agrave; 5 par jour, rupture du je&ucirc;ne
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
                          Remplace le sucre, antioxydant, m&eacute;tabolisme
                        </td>
                        <td className="py-3 pr-4">
                          1 cuill&egrave;re dans eau ti&egrave;de le matin
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
                          Sati&eacute;t&eacute;, anti-inflammatoire, acides gras sains
                        </td>
                        <td className="py-3 pr-4">
                          Assaisonnement ou 1 cuill&egrave;re &agrave; jeun
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
                          Sati&eacute;t&eacute; durable, b&ecirc;ta-glucanes, r&eacute;gulation glyc&eacute;mique
                        </td>
                        <td className="py-3 pr-4">
                          Au petit-d&eacute;jeuner ou en collation
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
                          R&eacute;gulation de la glyc&eacute;mie, digestion
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
                title="La nigelle, le miel et les remèdes prophétiques pour la santé"
                href="/remede-arabe"
                description="Retrouvez l'ensemble des remèdes de la médecine prophétique et leurs applications santé."
              />

              {/* ============================================ */}
              {/* SECTION 4 : La nigelle et le metabolisme */}
              {/* ============================================ */}
              <section id="nigelle-metabolisme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La nigelle (habba sawda) et le m&eacute;tabolisme : un rem&egrave;de
                  proph&eacute;tique pour maigrir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les rem&egrave;des proph&eacute;tiques, la graine de nigelle occupe
                  une place &agrave; part. Le Proph&egrave;te Muhammad (paix et b&eacute;n&eacute;dictions
                  sur lui) a d&eacute;clar&eacute; :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; Prenez cette graine noire (habba sawda), car elle
                  contient un rem&egrave;de contre toute maladie, sauf la mort
                  (sam). &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapport&eacute; par al-Bukhari, n&deg;5688 ; Muslim, n&deg;2215)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  La recherche scientifique contemporaine a identifi&eacute; dans la
                  nigelle (Nigella sativa) un compos&eacute; actif principal, la
                  thymoquinone, responsable de la plupart de ses effets
                  th&eacute;rapeutiques. Plusieurs &eacute;tudes cliniques ont d&eacute;montr&eacute; son
                  action b&eacute;n&eacute;fique sur la perte de poids :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>R&eacute;gulation de l&apos;app&eacute;tit</strong> : la
                      thymoquinone agit sur les hormones de la sati&eacute;t&eacute; et r&eacute;duit
                      les envies de grignotage entre les repas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Stimulation du m&eacute;tabolisme</strong> : elle
                      augmente la thermogen&egrave;se (production de chaleur par le
                      corps), ce qui acc&eacute;l&egrave;re la combustion des calories au
                      repos.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Am&eacute;lioration de la sensibilit&eacute; &agrave;
                      l&apos;insuline</strong> : la nigelle aide &agrave; mieux
                      r&eacute;guler la glyc&eacute;mie, r&eacute;duisant ainsi le stockage des
                      graisses li&eacute; aux pics d&apos;insuline.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>R&eacute;duction de l&apos;inflammation</strong> :
                      l&apos;inflammation chronique est un facteur aggravant de
                      l&apos;ob&eacute;sit&eacute;. Les propri&eacute;t&eacute;s anti-inflammatoires de la
                      nigelle contribuent &agrave; briser ce cercle.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Comment consommer la nigelle pour la perte de poids
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La nigelle peut &ecirc;tre consomm&eacute;e sous plusieurs formes, chacune
                  adapt&eacute;e aux pr&eacute;f&eacute;rences et aux habitudes de chacun :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Huile de nigelle &agrave; jeun</strong> : une cuill&egrave;re &agrave;
                      caf&eacute; le matin, 30 minutes avant le petit-d&eacute;jeuner, avec
                      un peu de miel pour att&eacute;nuer le go&ucirc;t prononc&eacute;.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Graines broy&eacute;es</strong> : une demi-cuill&egrave;re &agrave;
                      caf&eacute; saupoudr&eacute;e sur les salades, dans un yaourt nature ou
                      m&eacute;lang&eacute;e &agrave; du miel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Infusion de nigelle</strong> : faire infuser une
                      cuill&egrave;re &agrave; caf&eacute; de graines dans de l&apos;eau chaude
                      pendant 10 minutes, filtrer et boire apr&egrave;s les repas.
                    </span>
                  </li>
                </ul>

                <Image
                  src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-maigrir-methodes-saines-selon-lislam-et-la-tradition-2.jpg"
                  alt="Nigelle, miel et aliments prophétiques pour la perte de poids en islam"
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
                  rem&egrave;des les plus r&eacute;pandus dans la tradition proph&eacute;tique.
                  Ensemble, ils combinent les propri&eacute;t&eacute;s coupe-faim et
                  m&eacute;taboliques de la nigelle avec les vertus &eacute;nergisantes et
                  antibact&eacute;riennes du miel. La pr&eacute;paration classique consiste &agrave;
                  m&eacute;langer une cuill&egrave;re &agrave; caf&eacute; de graines de nigelle broy&eacute;es
                  dans une cuill&egrave;re &agrave; soupe de miel pur, et &agrave; consommer ce
                  m&eacute;lange le matin &agrave; jeun. Cette Sunna soutient la perte de
                  poids tout en renfor&ccedil;ant l&apos;immunit&eacute; et la vitalit&eacute;
                  g&eacute;n&eacute;rale.
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
                        &Eacute;tudiante, prise de poids li&eacute;e au stress des examens
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; Ma grand-m&egrave;re m&apos;a toujours r&eacute;p&eacute;t&eacute; que la
                    nigelle est la graine de toutes les gu&eacute;risons. J&apos;ai
                    commenc&eacute; &agrave; prendre une cuill&egrave;re d&apos;huile de nigelle
                    chaque matin avec un peu de miel. Apr&egrave;s deux mois,
                    j&apos;ai senti un changement net : moins de fringales
                    entre les cours, plus d&apos;&eacute;nergie et 4 kilos en
                    moins. &raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il convient toutefois de rappeler que la nigelle ne constitue
                  pas un rem&egrave;de miracle &agrave; elle seule. Son efficacit&eacute;
                  s&apos;exprime pleinement lorsqu&apos;elle est int&eacute;gr&eacute;e dans
                  une d&eacute;marche globale associant alimentation &eacute;quilibr&eacute;e,
                  activit&eacute; physique et discipline spirituelle. Les personnes
                  sous traitement m&eacute;dical doivent consulter leur m&eacute;decin avant
                  d&apos;ajouter la nigelle &agrave; leur routine, car elle peut
                  interagir avec certains m&eacute;dicaments (anticoagulants,
                  antidiab&eacute;tiques).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Activite physique */}
              {/* ============================================ */}
              <section id="activite-physique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;activit&eacute; physique en islam : marche, natation et
                  discipline du corps
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se limite pas &agrave; des prescriptions
                  alimentaires. Le corps est consid&eacute;r&eacute; comme un d&eacute;p&ocirc;t
                  (amana) confi&eacute; par Allah, et le musulman a la
                  responsabilit&eacute; de le maintenir en bonne sant&eacute;. Le Proph&egrave;te
                  (paix et b&eacute;n&eacute;dictions sur lui) &eacute;tait lui-m&ecirc;me un homme actif
                  qui marchait fr&eacute;quemment, participait aux travaux physiques et
                  encourageait les activit&eacute;s sportives.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les activit&eacute;s recommand&eacute;es par le Proph&egrave;te
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Omar ibn al-Khattab (qu&apos;Allah soit satisfait de lui)
                  rapporte que le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui) a
                  encourag&eacute; l&apos;enseignement de trois disciplines &agrave; ses
                  enfants :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La natation</strong> : activit&eacute; compl&egrave;te qui fait
                      travailler l&apos;ensemble des muscles, am&eacute;liore
                      l&apos;endurance cardiovasculaire et br&ucirc;le un nombre
                      significatif de calories sans impacter les articulations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le tir &agrave; l&apos;arc</strong> : exercice de
                      concentration et de ma&icirc;trise du corps qui renforce la
                      posture, les muscles du dos et la discipline personnelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;&eacute;quitation</strong> : activit&eacute;
                      physique exigeante qui sollicite les muscles profonds du
                      tronc, am&eacute;liore l&apos;&eacute;quilibre et la coordination.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La marche quotidienne : une Sunna accessible &agrave; tous
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui) se rendait
                  r&eacute;guli&egrave;rement &agrave; la mosqu&eacute;e &agrave; pied. Il encourageait &agrave;
                  multiplier les pas vers les lieux de pri&egrave;re, rappelant que
                  chaque pas efface un p&eacute;ch&eacute; et &eacute;l&egrave;ve d&apos;un degr&eacute; aupr&egrave;s
                  d&apos;Allah. La marche est l&apos;activit&eacute; physique la plus
                  simple et la plus accessible : 30 &agrave; 45 minutes de marche
                  quotidienne suffisent &agrave; maintenir le m&eacute;tabolisme actif,
                  &agrave; br&ucirc;ler les graisses et &agrave; am&eacute;liorer l&apos;humeur gr&acirc;ce
                  &agrave; la lib&eacute;ration d&apos;endorphines.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour les personnes en surpoids, la marche repr&eacute;sente un point
                  de d&eacute;part id&eacute;al. Elle peut &ecirc;tre pratiqu&eacute;e apr&egrave;s les pri&egrave;res,
                  lors des courses quotidiennes ou sous forme de promenade
                  familiale le week-end. Les fumeurs qui souhaitent perdre
                  du poids gagneront aussi &agrave;{" "}
                  <Link
                    href="/remede-arabe-arreter-fumer"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    arr&ecirc;ter de fumer pour retrouver la forme
                  </Link>
                  , car le tabac freine le m&eacute;tabolisme et r&eacute;duit la capacit&eacute;
                  &agrave; l&apos;effort. L&apos;intention (niyya) de prendre
                  soin du corps offert par Allah transforme cet exercice en acte
                  d&apos;adoration.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La pri&egrave;re : une activit&eacute; physique m&eacute;connue
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les cinq pri&egrave;res quotidiennes impliquent des mouvements
                  r&eacute;p&eacute;t&eacute;s de flexion, de prosternation et de redressement qui
                  sollicitent les articulations, les muscles du dos, des jambes
                  et du tronc. V&eacute;ritable discipline corporelle et spirituelle,{" "}
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    la pri&egrave;re, activit&eacute; physique quotidienne
                  </Link>
                  , engage le corps entier dans un effort r&eacute;gulier et mesur&eacute;. Un musulman qui accomplit ses cinq pri&egrave;res
                  quotidiennes effectue au minimum 34 prosternations par jour.
                  Des chercheurs ont estim&eacute; que cette activit&eacute; contribue &agrave;
                  maintenir la souplesse articulaire, &agrave; stimuler la circulation
                  sanguine et &agrave; br&ucirc;ler un nombre mod&eacute;r&eacute; de calories.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les pri&egrave;res surr&eacute;rogatoires (rawatib, tahajjud, duha)
                  augmentent encore cette activit&eacute; physique. Le qiyam al-layl
                  (pri&egrave;re nocturne), avec ses longues stations debout et ses
                  prosternations r&eacute;p&eacute;t&eacute;es, constitue un v&eacute;ritable exercice qui
                  allie effort physique et &eacute;l&eacute;vation spirituelle.
                </p>

                <Image
                  src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-arabe-pour-maigrir-methodes-saines-selon-lislam-et-la-tradition-3.jpg"
                  alt="Activité physique et mode de vie sain en islam pour la perte de poids"
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
                  physique en islam. Le croyant est invit&eacute; &agrave; formuler une
                  intention sinc&egrave;re (niyya) avant d&apos;entamer une d&eacute;marche de
                  perte de poids, et &agrave; accompagner ses efforts de du&apos;as
                  (invocations) pour la patience (sabr) et la pers&eacute;v&eacute;rance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te (paix et b&eacute;n&eacute;dictions sur lui) invoquait
                  r&eacute;guli&egrave;rement Allah pour la sant&eacute; et la protection contre la
                  maladie :
                </p>

                <blockquote className="my-6 border-l-4 border-secondary bg-accent px-6 py-4 italic text-foreground">
                  &laquo; &Ocirc; Allah, je Te demande la sant&eacute;, la chastet&eacute;, la
                  fiabilit&eacute;, un bon caract&egrave;re et l&apos;acceptation du
                  destin. &raquo;
                  <br />
                  <span className="mt-2 block text-sm not-italic text-foreground-secondary">
                    (Rapport&eacute; par Muslim, &agrave; partir du hadith d&apos;Ibn Omar)
                  </span>
                </blockquote>

                <p className="mt-4 leading-relaxed text-foreground">
                  D&apos;autres invocations peuvent accompagner la d&eacute;marche :
                  demander &agrave; Allah de faciliter la patience face aux tentations
                  alimentaires, de b&eacute;nir la nourriture consomm&eacute;e, de gu&eacute;rir les
                  d&eacute;s&eacute;quilibres du corps et de donner la force de pers&eacute;v&eacute;rer.
                  Associer chaque effort &agrave; une intention pure transforme la perte
                  de poids en un acte de d&eacute;votion et renforce la motivation sur
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
                        Cadre s&eacute;dentaire, besoin de reprendre une activit&eacute;
                        physique
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    &laquo; J&apos;ai commenc&eacute; par marcher 30 minutes chaque
                    jour apr&egrave;s la pri&egrave;re du Fajr. Au d&eacute;but, c&apos;&eacute;tait
                    difficile, mais l&apos;intention de prendre soin du corps
                    qu&apos;Allah m&apos;a confi&eacute; m&apos;a motiv&eacute;. En six
                    mois, j&apos;ai int&eacute;gr&eacute; la natation deux fois par semaine et
                    j&apos;ai perdu 10 kilos. Je me sens mieux dans mon corps et
                    dans ma pri&egrave;re. &raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Quand consulter un professionnel de sant&eacute;
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam encourage le recours &agrave; la m&eacute;decine. Le Proph&egrave;te
                  (paix et b&eacute;n&eacute;dictions sur lui) a dit :
                  &laquo; Soignez-vous, car Allah n&apos;a pas cr&eacute;&eacute; de maladie
                  sans cr&eacute;er son rem&egrave;de, sauf la vieillesse &raquo; (rapport&eacute;
                  par Abu Dawud). Il est recommand&eacute; de consulter un m&eacute;decin
                  ou un nutritionniste dans les situations suivantes :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Surpoids important</strong> (IMC sup&eacute;rieur &agrave; 30) :
                      un suivi m&eacute;dical permet d&apos;adapter la d&eacute;marche et
                      d&apos;&eacute;carter d&apos;&eacute;ventuelles causes hormonales ou
                      m&eacute;taboliques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maladies chroniques</strong> (diab&egrave;te,
                      hypertension, probl&egrave;mes thyro&iuml;diens) : le je&ucirc;ne et
                      certains rem&egrave;des proph&eacute;tiques peuvent n&eacute;cessiter des
                      ajustements m&eacute;dicaux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Grossesse et allaitement</strong> : les besoins
                      nutritionnels sp&eacute;cifiques de cette p&eacute;riode requi&egrave;rent un
                      avis m&eacute;dical avant toute modification alimentaire.
                      Consultez notre guide sur{" "}
                      <Link
                        href="/remede-arabe-grossesse"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        l&apos;alimentation pendant la grossesse
                      </Link>{" "}
                      pour des conseils adapt&eacute;s.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Interactions m&eacute;dicamenteuses</strong> : la nigelle,
                      par exemple, peut interagir avec les anticoagulants et les
                      antidiab&eacute;tiques. Un avis m&eacute;dical est indispensable.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La m&eacute;decine proph&eacute;tique et la m&eacute;decine moderne ne
                  s&apos;opposent pas. Elles se compl&egrave;tent dans une d&eacute;marche de
                  soin holistique qui respecte &agrave; la fois la science et la foi.
                  Le musulman qui souhaite perdre du poids a tout int&eacute;r&ecirc;t &agrave;
                  combiner les enseignements proph&eacute;tiques avec un suivi m&eacute;dical
                  adapt&eacute;, pour une perte de poids saine, progressive et
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
                  Rem&egrave;des arabes et m&eacute;decine proph&eacute;tique : articles du m&ecirc;me silo
                </h2>
                <p className="mb-8 text-foreground-secondary">
                  Poursuivez votre lecture avec les autres articles sur les
                  rem&egrave;des de la m&eacute;decine proph&eacute;tique et de la tradition arabe.
                </p>
                <nav aria-label="Articles du silo remèdes arabes">
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
                            Rem&egrave;des arabes et m&eacute;decine proph&eacute;tique
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
                            Nigelle, miel et rem&egrave;des proph&eacute;tiques
                          </p>
                          <p className="mt-0.5 text-sm text-foreground-secondary">
                            Tous les bienfaits de la m&eacute;decine du Proph&egrave;te
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
