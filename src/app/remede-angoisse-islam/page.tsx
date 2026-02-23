import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Remède angoisse islam : douas, dhikr et soins prophétiques pour retrouver la sérénité",
  description:
    "Découvrez les remèdes islamiques contre l'angoisse : douas prophétiques, dhikr apaisant, prière de nuit, talbina, nigelle et conseils pour allier spiritualité et santé mentale.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-angoisse-islam",
  },
};

const tocItems = [
  {
    id: "comprendre-angoisse",
    label: "Comprendre l'angoisse selon la vision islamique",
  },
  {
    id: "douas-prophetiques",
    label: "Douas prophétiques contre l'angoisse et le chagrin",
  },
  {
    id: "dhikr-priere",
    label: "Le dhikr et la prière de nuit : apaisement du cœur",
  },
  {
    id: "remedes-naturels",
    label: "Remèdes prophétiques naturels : talbina, miel et nigelle",
  },
  {
    id: "sante-mentale",
    label: "Santé mentale et accompagnement professionnel",
  },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter contre l'angoisse en islam ?",
    answer:
      "Parmi les douas les plus recommandées figure l'invocation prophétique : Allahumma inni a'udhu bika min al-hamm wal-hazan, wa a'udhu bika min al-'ajzi wal-kasal, wa a'udhu bika min al-jubni wal-bukhl, wa a'udhu bika min ghalabat id-dayni wa qahri ar-rijal. Cette invocation, rapportée par al-Bukhari, protège contre le souci, le chagrin, l'incapacité, la paresse, la lâcheté, l'avarice, le poids des dettes et la domination des hommes.",
  },
  {
    question:
      "Le dhikr peut-il vraiment aider à réduire l'anxiété et le stress ?",
    answer:
      "Oui. Le Coran affirme dans la sourate Ar-Ra'd (13:28) que c'est par le rappel d'Allah que les cœurs s'apaisent. Le dhikr (rappel d'Allah) agit comme une forme de méditation spirituelle qui recentre l'esprit, apaise les pensées intrusives et renforce le sentiment de confiance en la protection divine. Plusieurs études en psychologie clinique confirment que les pratiques méditatives liées à la foi réduisent les symptômes anxieux.",
  },
  {
    question: "La talbina aide-t-elle contre l'angoisse ?",
    answer:
      "La talbina (bouillie d'orge) est mentionnée dans un hadith rapporté par al-Bukhari où Aisha (qu'Allah soit satisfait d'elle) rapporte que le Prophète (paix et salut sur lui) disait qu'elle réconforte le cœur du malade et emporte une partie de son chagrin. L'orge est riche en tryptophane, un précurseur de la sérotonine, ce qui pourrait expliquer ses bienfaits sur l'humeur.",
  },
  {
    question:
      "Est-il permis de consulter un psychologue ou un psychiatre en islam ?",
    answer:
      "Oui, tout à fait. L'islam encourage le recours à la médecine et aux spécialistes. Le Prophète (paix et salut sur lui) a dit : Soignez-vous, serviteurs de Dieu, car Dieu n'a pas créé de maladie sans avoir créé son remède (rapporté par Abu Dawud). La santé mentale fait partie de la santé globale que le musulman doit préserver. Consulter un psychologue ou un psychiatre est un acte de sagesse, pas de faiblesse.",
  },
  {
    question: "La prière de nuit (tahajjud) aide-t-elle contre l'angoisse ?",
    answer:
      "La prière de nuit est fortement recommandée pour apaiser le cœur et renforcer le lien avec Allah. Le dernier tiers de la nuit est un moment où Allah descend au ciel le plus bas et répond aux invocations de Ses serviteurs (rapporté par al-Bukhari et Muslim). Se lever pour prier dans le calme de la nuit offre un espace de recueillement profond et de libération émotionnelle.",
  },
  {
    question:
      "Quels versets coraniques réciter pour calmer une crise d'angoisse ?",
    answer:
      "Plusieurs versets sont particulièrement recommandés : Ayat al-Kursi (al-Baqara, 255), les trois dernières sourates (Al-Ikhlas, Al-Falaq, An-Nas), les derniers versets de la sourate al-Baqara, ainsi que le verset Hasbunallahu wa ni'mal-wakil (sourate Al Imran, 3:173). Le simple fait de réciter le Coran avec réflexion apaise le cœur et éloigne les pensées anxieuses.",
  },
  {
    question:
      "L'alimentation Sunna a-t-elle un effet sur l'anxiété et le stress ?",
    answer:
      "Oui. Les aliments recommandés dans la Sunna, comme le miel, les dattes, la nigelle, l'huile d'olive et la talbina, sont riches en nutriments bénéfiques pour le système nerveux. Le miel contient des antioxydants et des oligoéléments qui soutiennent le fonctionnement cérébral. Les dattes apportent du magnésium et du potassium, deux minéraux impliqués dans la régulation du stress.",
  },
  {
    question:
      "Comment aider un proche musulman qui souffre d'angoisse ou de dépression ?",
    answer:
      "Écoutez-le sans le juger, montrez-lui votre compassion et accompagnez-le vers une aide professionnelle si nécessaire. Ne minimisez jamais sa souffrance et ne lui dites pas simplement de prier davantage. L'islam valorise le soutien fraternel : le Prophète (paix et salut sur lui) a dit que celui qui soulage un croyant d'une peine, Allah le soulagera d'une peine du Jour de la Résurrection (rapporté par Muslim). Proposez de l'accompagner chez un spécialiste et priez pour lui.",
  },
];

export default function RemedeAngoisseIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-angoisse-islam/#article",
        headline:
          "Remède angoisse islam : douas, dhikr et soins prophétiques pour retrouver la sérénité",
        description:
          "Découvrez les remèdes islamiques contre l'angoisse : douas prophétiques, dhikr apaisant, prière de nuit, talbina, nigelle et conseils pour allier spiritualité et santé mentale.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-contre-langoisse-en-islam-invocations-et-conseils-spirituels-apaisants-1.jpg",
        datePublished: "2025-08-31",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-angoisse-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-angoisse-islam/#breadcrumb",
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
            name: "Angoisse en islam",
            item: "https://www.islamreligion.fr/remede-angoisse-islam",
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
        {/* ============================================ */}
        {/* HERO COMPACT */}
        {/* ============================================ */}
        <Hero
          title="Rem&egrave;de contre l&apos;angoisse en islam : douas, dhikr et soins proph&eacute;tiques"
          subtitle="Invocations authentiques, rappel d&apos;Allah, rem&egrave;des naturels et conseils bienveillants pour apaiser le c&oelig;ur et l&apos;esprit."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-contre-langoisse-en-islam-invocations-et-conseils-spirituels-apaisants-1.jpg"
          imageAlt="Remède contre l'angoisse en islam, invocations et conseils spirituels apaisants"
          compact
        />

        {/* ============================================ */}
        {/* SIDEBAR TOC + ARTICLE */}
        {/* ============================================ */}
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
                <span className="text-foreground">Angoisse en islam</span>
              </nav>

              {/* MedicalDisclaimer au début */}
              <MedicalDisclaimer />

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r&eacute;sum&eacute;
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;angoisse et l&apos;anxi&eacute;t&eacute; ne sont pas des signes de
                  faiblesse de foi. L&apos;islam reconna&icirc;t la souffrance
                  psychique, offre des invocations proph&eacute;tiques apaisantes, des
                  rem&egrave;des naturels comme la talbina ou la nigelle, et encourage
                  le recours aux professionnels de sant&eacute; mentale. Ce contenu
                  vous accompagne vers un apaisement qui allie spiritualit&eacute;,
                  hygi&egrave;ne de vie et soutien humain.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Comprendre l'angoisse en islam */}
              {/* ============================================ */}
              <section id="comprendre-angoisse" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre l&apos;angoisse et l&apos;anxi&eacute;t&eacute; selon la vision
                  islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;angoisse, le souci (<em>al-hamm</em>) et le chagrin (
                  <em>al-hazan</em>) sont des r&eacute;alit&eacute;s humaines que l&apos;
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>{" "}
                  n&apos;a jamais ni&eacute;es ni stigmatis&eacute;es. Bien au contraire, la
                  tradition proph&eacute;tique aborde ces &eacute;motions avec une profonde
                  bienveillance, les reconnaissant comme des &eacute;preuves que
                  traverse tout &ecirc;tre humain, y compris les proph&egrave;tes eux-m&ecirc;mes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te Yacoub (Jacob, paix sur lui) a pleur&eacute; son fils
                  Youssouf au point d&apos;en perdre la vue (sourate Yusuf,
                  12:84). Le Proph&egrave;te Muhammad (paix et salut sur lui)
                  a connu ce que les savants appellent &laquo;&nbsp;l&apos;ann&eacute;e
                  de la tristesse&nbsp;&raquo; (<em>am al-huzn</em>) apr&egrave;s la
                  perte de son &eacute;pouse Khadija et de son oncle Abu Talib. Ces
                  r&eacute;cits montrent que l&apos;angoisse n&apos;est ni une honte ni
                  un manque de foi, mais une part de la condition humaine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  : &laquo;&nbsp;Certes, avec la difficult&eacute; il y a une
                  facilit&eacute;. Certes, avec la difficult&eacute; il y a une
                  facilit&eacute;&nbsp;&raquo; (sourate Ash-Sharh, 94:5-6). La
                  r&eacute;p&eacute;tition de ce verset souligne avec insistance que toute
                  &eacute;preuve porte en elle le germe de son soulagement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;&eacute;preuve comme purification et &eacute;l&eacute;vation
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph&egrave;te (paix et salut sur lui) a dit :
                  &laquo;&nbsp;Rien de ce qui touche le musulman, fatigue,
                  maladie, souci, tristesse, mal ou angoisse, m&ecirc;me une &eacute;pine
                  qui le pique, sans qu&apos;Allah ne lui efface par cela des
                  p&eacute;ch&eacute;s&nbsp;&raquo; (rapport&eacute; par al-Bukhari et Muslim). Ce
                  hadith offre une perspective transformatrice : la souffrance
                  psychique, lorsqu&apos;elle est v&eacute;cue avec patience
                  (<em>sabr</em>), purifie l&apos;&acirc;me et rapproche du Cr&eacute;ateur.
                  Dans cette perspective,{" "}
                  <Link
                    href="/repentir-sincere-islam-tawba"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le repentir comme source de paix int&eacute;rieure
                  </Link>{" "}
                  constitue &eacute;galement un moyen puissant de retrouver la
                  s&eacute;r&eacute;nit&eacute; face aux &eacute;preuves.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cela ne signifie aucunement qu&apos;il faille endurer
                  l&apos;angoisse sans agir. Au contraire, l&apos;islam incite &agrave;
                  prendre les moyens n&eacute;cessaires pour se soigner, qu&apos;ils
                  soient spirituels, naturels ou m&eacute;dicaux. L&apos;attitude du
                  croyant consiste &agrave; combiner la confiance en Allah (
                  <em>tawakkul</em>) avec les d&eacute;marches concr&egrave;tes : invoquer,
                  se soigner, et consulter un sp&eacute;cialiste si l&apos;&eacute;tat
                  persiste. Il est aussi essentiel de comprendre{" "}

                  <Link
                    href="/conditions-maghfira-pardon"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les conditions du pardon divin
                  </Link>
                  , car la qu&ecirc;te du pardon apaise profond&eacute;ment le c&oelig;ur du
                  croyant.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;angoisse n&apos;est pas un ch&acirc;timent</strong>{" "}
                      : c&apos;est une &eacute;preuve, parfois une purification, et
                      toujours une occasion de se rapprocher d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les proph&egrave;tes ont souffert</strong> : la tristesse
                      de Yacoub, l&apos;angoisse de Younes dans le ventre de la
                      baleine, le chagrin de Muhammad (paix et salut sur lui)
                      prouvent que la souffrance n&apos;exclut pas la proximit&eacute;
                      divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;action est encourag&eacute;e</strong> : prier,
                      invoquer, se soigner, consulter un m&eacute;decin, chercher le
                      soutien de la communaut&eacute;.
                    </span>
                  </li>
                </ul>

                {/* Tableau : types d'angoisse et perspective islamique */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type d&apos;angoisse
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Perspective islamique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Rem&egrave;de recommand&eacute;
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Souci du quotidien (<em>al-hamm</em>)
                        </td>
                        <td className="py-3 pr-4">
                          Pr&eacute;occupation li&eacute;e &agrave; l&apos;avenir, naturelle et humaine
                        </td>
                        <td className="py-3">
                          Doua proph&eacute;tique + tawakkul
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chagrin profond (<em>al-hazan</em>)
                        </td>
                        <td className="py-3 pr-4">
                          Tristesse li&eacute;e &agrave; une perte, reconnue et respect&eacute;e
                        </td>
                        <td className="py-3">
                          Talbina + soutien communautaire
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Angoisse existentielle
                        </td>
                        <td className="py-3 pr-4">
                          Questionnement sur le sens de la vie, orient&eacute; vers la foi
                        </td>
                        <td className="py-3">
                          Lecture du Coran + r&eacute;flexion spirituelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Crise de panique
                        </td>
                        <td className="py-3 pr-4">
                          &Eacute;tat physique et psychique &agrave; prendre au s&eacute;rieux
                        </td>
                        <td className="py-3">
                          Consultation m&eacute;dicale + doua + dhikr
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          D&eacute;pression prolong&eacute;e
                        </td>
                        <td className="py-3 pr-4">
                          Maladie &agrave; traiter, pas une faiblesse de foi
                        </td>
                        <td className="py-3">
                          Psychiatre + rem&egrave;des proph&eacute;tiques + pri&egrave;re
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-contre-langoisse-en-islam-invocations-et-conseils-spirituels-apaisants-1.jpg"
                    alt="Invocations et conseils spirituels apaisants contre l'angoisse en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas prophétiques */}
              {/* ============================================ */}
              <section id="douas-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas proph&eacute;tiques contre l&apos;angoisse, le souci et le
                  chagrin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Proph&egrave;te Muhammad (paix et salut sur lui) a
                  enseign&eacute; &agrave; sa communaut&eacute; des invocations sp&eacute;cifiques pour faire
                  face au souci, &agrave; la tristesse et &agrave; l&apos;oppression. Ces douas
                  sont un v&eacute;ritable refuge pour le c&oelig;ur en d&eacute;tresse. Elles
                  combinent la demande de protection, l&apos;affirmation de la
                  confiance en Allah et la soumission &agrave; Sa sagesse.
                </p>

                {/* Doua 1 : hamm wal-hazan */}
                <div className="mt-8 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Doua contre le souci et le chagrin
                  </p>
                  <p
                    className="mt-3 text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ
                    وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ وَأَعُوذُ بِكَ
                    مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوذُ بِكَ مِنْ غَلَبَةِ
                    الدَّيْنِ وَقَهْرِ الرِّجَالِ
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;&Ocirc; Allah, je cherche refuge aupr&egrave;s de Toi contre
                    le souci et le chagrin, contre l&apos;incapacit&eacute; et la
                    paresse, contre la l&acirc;chet&eacute; et l&apos;avarice, et contre le
                    poids des dettes et la domination des hommes.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapport&eacute; par al-Bukhari (hadith n&deg; 6369). Le Proph&egrave;te
                    (paix et salut sur lui) r&eacute;citait cette invocation
                    quotidiennement.
                  </p>
                </div>

                {/* Doua 2 : invocation de Younes */}
                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Invocation de Younes (Jonas) dans les t&eacute;n&egrave;bres
                  </p>
                  <p
                    className="mt-3 text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ
                    الظَّالِمِينَ
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a pas de divinit&eacute; &agrave; part Toi,
                    gloire &agrave; Toi, j&apos;&eacute;tais certes parmi les
                    injustes.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Sourate Al-Anbiya (21:87). Le Proph&egrave;te (paix et salut sur
                    lui) a dit : &laquo;&nbsp;L&apos;invocation de Dhoun-Noun
                    (Younes), qu&apos;il pronon&ccedil;a dans le ventre de la
                    baleine : tout musulman qui invoque Allah par cette formule
                    pour une chose quelconque, Allah lui
                    r&eacute;pondra&nbsp;&raquo; (rapport&eacute; par at-Tirmidhi, qualifi&eacute; de
                    sahih).
                  </p>
                </div>

                {/* Doua 3 : la grande invocation */}
                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    La grande invocation contre la d&eacute;tresse
                  </p>
                  <p
                    className="mt-3 text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ
                    نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ
                    قَضَاؤُكَ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ
                    نَفْسَكَ أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ أَوْ عَلَّمْتَهُ
                    أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ
                    الْغَيْبِ عِنْدَكَ أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي
                    وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;&Ocirc; Allah, je suis Ton serviteur, fils de Ton
                    serviteur, fils de Ta servante. Mon toupet est dans Ta main.
                    Ton jugement s&apos;accomplit sur moi. Ton d&eacute;cret &agrave; mon
                    &eacute;gard est juste. Je Te demande par chaque nom qui
                    T&apos;appartient, par lequel Tu T&apos;es nomm&eacute;
                    Toi-m&ecirc;me, que Tu l&apos;as r&eacute;v&eacute;l&eacute; dans Ton Livre, que Tu
                    l&apos;as enseign&eacute; &agrave; l&apos;une de Tes cr&eacute;atures, ou que Tu
                    l&apos;as gard&eacute; dans la science de l&apos;invisible aupr&egrave;s
                    de Toi, de faire du Coran le printemps de mon c&oelig;ur, la
                    lumi&egrave;re de ma poitrine, la dissipation de ma tristesse et la
                    fin de mon angoisse.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapport&eacute; par Ahmad (hadith n&deg; 3712), qualifi&eacute; de sahih
                    par al-Albani. Le Proph&egrave;te (paix et salut sur lui) a dit que
                    quiconque prononce cette invocation, Allah remplacera sa
                    tristesse par la joie.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois invocations forment un arsenal spirituel complet
                  contre les diff&eacute;rentes formes d&apos;angoisse. La premi&egrave;re
                  prot&egrave;ge contre les soucis quotidiens, la deuxi&egrave;me est un appel
                  au secours dans les moments de d&eacute;tresse aigus, et la troisi&egrave;me
                  est une supplication profonde qui fait du Coran le rem&egrave;de du
                  c&oelig;ur. Les savants recommandent de les apprendre par c&oelig;ur et
                  de les r&eacute;citer r&eacute;guli&egrave;rement, en arabe si possible, avec
                  compr&eacute;hension et conviction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Conseils pratiques pour la r&eacute;citation des douas
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Choisir un moment calme</strong> : apr&egrave;s la pri&egrave;re
                      du Fajr, avant de dormir, ou dans le dernier tiers de la
                      nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Comprendre le sens</strong> : la doua r&eacute;cit&eacute;e avec
                      compr&eacute;hension a un impact bien plus profond sur le c&oelig;ur
                      que la simple r&eacute;p&eacute;tition m&eacute;canique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&Ecirc;tre en &eacute;tat d&apos;ablution</strong> : bien que
                      la doua soit valide sans ablution, &ecirc;tre purifi&eacute; renforce
                      le recueillement et la concentration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pers&eacute;v&eacute;rer</strong> : la r&eacute;ponse d&apos;Allah peut
                      prendre diff&eacute;rentes formes. Le Proph&egrave;te (paix et salut sur
                      lui) a enseign&eacute; que toute invocation est exauc&eacute;e, soit par
                      l&apos;obtention de ce qui est demand&eacute;, soit par
                      l&apos;&eacute;loignement d&apos;un mal, soit par une r&eacute;compense
                      dans l&apos;au-del&agrave; (rapport&eacute; par Ahmad).
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Invocations authentiques pour la r&eacute;ussite et la facilit&eacute; en islam"
                  description="D&eacute;couvrez les douas proph&eacute;tiques pour demander la facilit&eacute;, la r&eacute;ussite et la b&eacute;n&eacute;diction d'Allah dans vos projets."
                  href="/invocations-reussite-facilite"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Dhikr et prière de nuit */}
              {/* ============================================ */}
              <section id="dhikr-priere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le dhikr et la pri&egrave;re de nuit (tahajjud) : apaisement du c&oelig;ur
                  et de l&apos;esprit
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si les douas sont des appels ponctuels vers Allah, le dhikr
                  (rappel d&apos;Allah) est une pratique continue qui immerge le
                  c&oelig;ur dans la conscience du divin. Le Coran en fait la source
                  m&ecirc;me de la s&eacute;r&eacute;nit&eacute; :
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;C&apos;est par le rappel d&apos;Allah que les
                    c&oelig;urs s&apos;apaisent.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Sourate Ar-Ra&apos;d (13:28). Ce verset est souvent cit&eacute;
                    comme la base coranique de l&apos;apaisement par le dhikr.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le dhikr ne se limite pas &agrave; la r&eacute;p&eacute;tition de formules : il
                  s&apos;agit d&apos;un &eacute;tat du c&oelig;ur, d&apos;une pr&eacute;sence
                  constante &agrave; Allah dans chaque instant. N&eacute;anmoins, certaines
                  formules sont particuli&egrave;rement recommand&eacute;es pour apaiser
                  l&apos;angoisse :
                </p>

                {/* Tableau dhikr */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Formule de dhikr
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Moment recommand&eacute;
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          SubhanAllah, Al-hamdulillah, Allahu Akbar
                        </td>
                        <td className="py-3 pr-4">
                          Glorification, louange et grandeur d&apos;Allah
                        </td>
                        <td className="py-3 pr-4">
                          Apr&egrave;s chaque pri&egrave;re (33 fois chacun)
                        </td>
                        <td className="py-3">
                          Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          La hawla wa la quwwata illa billah
                        </td>
                        <td className="py-3 pr-4">
                          Il n&apos;y a de force et de puissance qu&apos;en
                          Allah
                        </td>
                        <td className="py-3 pr-4">
                          &Agrave; tout moment de d&eacute;tresse
                        </td>
                        <td className="py-3">
                          Al-Bukhari, Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hasbunallahu wa ni&apos;mal-wakil
                        </td>
                        <td className="py-3 pr-4">
                          Allah nous suffit, quel excellent protecteur
                        </td>
                        <td className="py-3 pr-4">
                          Face &agrave; la peur et l&apos;incertitude
                        </td>
                        <td className="py-3">
                          Al-Bukhari
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Astaghfirullah (demande de pardon)
                        </td>
                        <td className="py-3 pr-4">
                          Purification du c&oelig;ur et renouveau spirituel
                        </td>
                        <td className="py-3 pr-4">
                          Matin et soir, apr&egrave;s les pri&egrave;res
                        </td>
                        <td className="py-3">
                          Abu Dawud
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Salat ala an-Nabi (pri&egrave;re sur le Proph&egrave;te)
                        </td>
                        <td className="py-3 pr-4">
                          B&eacute;n&eacute;diction et apaisement de l&apos;&acirc;me
                        </td>
                        <td className="py-3 pr-4">
                          Tout au long de la journ&eacute;e
                        </td>
                        <td className="py-3">
                          At-Tirmidhi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  La pri&egrave;re de nuit (tahajjud) : un refuge dans le silence
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les actes les plus puissants contre l&apos;angoisse, la
                  pri&egrave;re de nuit occupe une place particuli&egrave;re. Elle se pratique
                  dans le dernier tiers de la nuit, un moment o&ugrave; le calme
                  ext&eacute;rieur rejoint le calme int&eacute;rieur, et o&ugrave; Allah r&eacute;pond &agrave; Ses
                  serviteurs avec une proximit&eacute; incomparable.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur descend chaque nuit au ciel le
                    plus bas lorsqu&apos;il reste le dernier tiers de la nuit
                    et dit : Qui M&apos;invoque pour que Je lui r&eacute;ponde ? Qui Me
                    demande pour que Je lui donne ? Qui implore Mon pardon pour
                    que Je lui pardonne ?&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                      Rapport&eacute; par al-Bukhari et Muslim.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah Lui-m&ecirc;me d&eacute;crit les effets de la pri&egrave;re de nuit :
                  &laquo;&nbsp;L&egrave;ve-toi la nuit pour prier, sauf une petite
                  partie, la moiti&eacute; ou un peu moins, ou un peu plus. Et r&eacute;cite
                  le Coran avec soin&nbsp;&raquo; (sourate Al-Muzzammil,
                  73:2-4). La pri&egrave;re de nuit n&apos;est pas obligatoire, mais
                  elle est fortement encourag&eacute;e, surtout en p&eacute;riode de d&eacute;tresse
                  &eacute;motionnelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Int&eacute;grer le dhikr et le tahajjud dans son quotidien
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les adhkar du matin et du soir</strong> : ces
                      invocations, compil&eacute;es dans des recueils comme{" "}
                      <em>Hisn al-Muslim</em> (la Citadelle du musulman),
                      constituent un bouclier quotidien qui renforce la s&eacute;r&eacute;nit&eacute;
                      et &eacute;loigne les waswas (murmures n&eacute;gatifs).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par deux rak&apos;at</strong> : si le
                      tahajjud semble difficile au d&eacute;but, commencer par deux
                      unit&eacute;s de pri&egrave;re courtes suffit. L&apos;important est la
                      r&eacute;gularit&eacute;, m&ecirc;me si la quantit&eacute; est modeste.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&Eacute;couter le Coran</strong> : pour ceux qui ne
                      savent pas encore lire l&apos;
                      <Link
                        href="/apprendre-larabe"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        arabe
                      </Link>
                      , &eacute;couter une r&eacute;citation apaisante (sourates Ar-Rahman,
                      Ya-Sin, Al-Mulk) peut produire un effet calmant comparable
                      &agrave; la r&eacute;citation personnelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tenir un journal de gratitude</strong> : noter
                      chaque soir trois bienfaits re&ccedil;us renforce la conscience
                      du <em>ni&apos;ma</em> (bienfait divin) et attenue les
                      pens&eacute;es anxieuses.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-contre-langoisse-en-islam-invocations-et-conseils-spirituels-apaisants-1.jpg"
                    alt="Le dhikr et la prière de nuit comme remède contre l'angoisse en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous les rem&egrave;des proph&eacute;tiques et la m&eacute;decine arabe"
                  href="/remede-arabe"
                  linkText="D&eacute;couvrir les rem&egrave;des arabes"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Remèdes naturels prophétiques */}
              {/* ============================================ */}
              <section id="remedes-naturels" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rem&egrave;des proph&eacute;tiques naturels contre l&apos;angoisse :
                  talbina, miel, nigelle et hygi&egrave;ne de vie Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-del&agrave; de la dimension spirituelle, la tradition proph&eacute;tique
                  propose des rem&egrave;des naturels qui nourrissent le corps et
                  soutiennent l&apos;&eacute;quilibre &eacute;motionnel. Ces rem&egrave;des ne
                  remplacent pas un traitement m&eacute;dical, mais ils compl&egrave;tent
                  l&apos;approche holistique de la sant&eacute; en islam, o&ugrave; le corps
                  et l&apos;&acirc;me sont indissociables.
                </p>

                {/* Talbina */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La talbina : r&eacute;confort du c&oelig;ur en deuil et en d&eacute;tresse
                  </h3>

                  <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      التَّلْبِينَةُ مَجَمَّةٌ لِفُؤَادِ الْمَرِيضِ تَذْهَبُ
                      بِبَعْضِ الْحُزْنِ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;La talbina r&eacute;conforte le c&oelig;ur du malade et
                      emporte une partie de son chagrin.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm text-foreground-secondary">
                      Rapport&eacute; par al-Bukhari (hadith n&deg; 5689).
                    </p>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La talbina est une bouillie pr&eacute;par&eacute;e &agrave; base de farine
                    d&apos;orge, m&eacute;lang&eacute;e &agrave; du lait et sucr&eacute;e au miel. Le
                    Proph&egrave;te (paix et salut sur lui) la recommandait
                    sp&eacute;cifiquement pour les personnes en deuil ou malades.
                    L&apos;orge est riche en tryptophane, un acide amin&eacute;
                    pr&eacute;curseur de la s&eacute;rotonine (hormone du bien-&ecirc;tre), ainsi
                    qu&apos;en magn&eacute;sium et en vitamines du groupe B, tous
                    impliqu&eacute;s dans la r&eacute;gulation de l&apos;humeur et du syst&egrave;me
                    nerveux.
                  </p>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Pr&eacute;paration :</strong> m&eacute;langer 2 cuill&egrave;res &agrave; soupe
                    de farine d&apos;orge dans un verre de lait, chauffer &agrave; feu
                    doux en remuant jusqu&apos;&agrave; obtenir une consistance
                    onctueuse, puis sucrer avec du miel pur. &Agrave; consommer de
                    pr&eacute;f&eacute;rence le matin ou le soir.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : gu&eacute;rison et douceur pour le corps et l&apos;&acirc;me
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Coran mentionne le miel comme porteur de gu&eacute;rison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    vari&eacute;es, dans laquelle il y a une gu&eacute;rison pour les
                    gens&nbsp;&raquo; (sourate An-Nahl, verset 69). Le miel
                    contient des antioxydants, des oligo&eacute;l&eacute;ments et des enzymes
                    qui soutiennent les fonctions c&eacute;r&eacute;brales et nerveuses. Sa
                    consommation r&eacute;guli&egrave;re, associ&eacute;e &agrave; la nigelle ou &agrave; la
                    talbina, renforce l&apos;effet apaisant.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommand&eacute; :</strong> une cuill&egrave;re &agrave; soupe de
                    miel pur &agrave; jeun, dilu&eacute;e dans de l&apos;eau ti&egrave;de.
                    Privil&eacute;gier un miel non chauff&eacute;, de pr&eacute;f&eacute;rence du miel de
                    jujubier (<em>sidr</em>) ou de thym.
                  </p>
                </div>

                {/* Nigelle */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La graine de nigelle (<em>habba sawda</em>) : un soutien
                    pour le syst&egrave;me nerveux
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Proph&egrave;te (paix et salut sur lui) a dit :
                    &laquo;&nbsp;Utilisez cette graine noire, car elle contient
                    un rem&egrave;de contre toute maladie, sauf la mort&nbsp;&raquo;
                    (rapport&eacute; par al-Bukhari et Muslim). La thymoquinone, son
                    principal compos&eacute; actif, poss&egrave;de des propri&eacute;t&eacute;s
                    anti-inflammatoires, antioxydantes et neuroprotectrices. Des
                    &eacute;tudes r&eacute;centes sugg&egrave;rent un effet b&eacute;n&eacute;fique sur l&apos;anxi&eacute;t&eacute;
                    et la d&eacute;pression en agissant sur les r&eacute;cepteurs
                    GABAergiques et s&eacute;rotoninergiques.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommand&eacute; :</strong> une cuill&egrave;re &agrave; caf&eacute;
                    d&apos;huile de nigelle press&eacute;e &agrave; froid, m&eacute;lang&eacute;e &agrave; du miel,
                    &agrave; prendre &agrave; jeun chaque matin.
                  </p>
                </div>

                {/* Hygiene de vie Sunna */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Alimentation et hygi&egrave;ne de vie selon la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition proph&eacute;tique propose un mode de vie &eacute;quilibr&eacute; qui
                  favorise la sant&eacute; mentale. Voici les habitudes recommand&eacute;es
                  qui contribuent &agrave; r&eacute;duire l&apos;angoisse :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      Mod&eacute;ration alimentaire
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph&egrave;te (paix et salut sur lui) a enseign&eacute; :
                      &laquo;&nbsp;Le fils d&apos;Adam n&apos;a jamais rempli de
                      r&eacute;cipient pire que son estomac. Il lui suffit de quelques
                      bouchees pour se maintenir. S&apos;il doit absolument
                      manger plus, qu&apos;il reserve un tiers pour la
                      nourriture, un tiers pour la boisson et un tiers pour le
                      souffle&nbsp;&raquo; (rapport&eacute; par at-Tirmidhi).
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      Les dattes : &eacute;nergie et apaisement
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Riches en magn&eacute;sium, potassium et sucres naturels, les
                      dattes apportent une &eacute;nergie rapide et saine. Le
                      magn&eacute;sium, en particulier, joue un r&ocirc;le dans la relaxation
                      musculaire et nerveuse. Le Proph&egrave;te (paix et salut sur
                      lui) consommait sept dattes ajwa chaque matin.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      L&apos;huile d&apos;olive : nourriture du cerveau
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Mentionn&eacute;e comme &laquo;&nbsp;arbre b&eacute;ni&nbsp;&raquo; dans
                      le Coran (sourate An-Nur, 24:35), l&apos;huile
                      d&apos;olive extra-vierge est riche en polyph&eacute;nols et en
                      acides gras mono-insatur&eacute;s qui prot&egrave;gent le cerveau et
                      favorisent la production de neurotransmetteurs apaisants.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      L&apos;activit&eacute; physique et la nature
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La marche est la forme d&apos;exercice la plus pratiqu&eacute;e
                      par le Proph&egrave;te (paix et salut sur lui). Le contact avec
                      la nature et l&apos;activit&eacute; physique r&eacute;guli&egrave;re lib&egrave;rent
                      des endorphines, r&eacute;duisent le cortisol (hormone du stress)
                      et am&eacute;liorent la qualit&eacute; du sommeil.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;approche proph&eacute;tique de l&apos;alimentation repose sur
                  la mod&eacute;ration, la diversit&eacute; et la gratitude. Manger en pleine
                  conscience, commencer par le nom d&apos;Allah
                  (&laquo;&nbsp;Bismillah&nbsp;&raquo;) et terminer par la
                  louange (&laquo;&nbsp;Al-hamdulillah&nbsp;&raquo;) transforme
                  chaque repas en un acte de d&eacute;votion qui recentre l&apos;esprit
                  et apaise le c&oelig;ur. Pour aller plus loin, d&eacute;couvrez comment{" "}
                  <Link
                    href="/remede-arabe-maigrir-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    retrouver un &eacute;quilibre alimentaire
                  </Link>{" "}
                  gr&acirc;ce aux principes de la m&eacute;decine proph&eacute;tique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;angoisse prolong&eacute;e peut &eacute;galement se manifester par
                  des sympt&ocirc;mes physiques. Le stress chronique est un facteur
                  reconnu dans l&apos;aggravation de{" "}
                  <Link
                    href="/psoriasis-remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les maladies de peau li&eacute;es au stress
                  </Link>{" "}
                  et peut contribuer &agrave;{" "}
                  <Link
                    href="/alopecie-remede-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    la chute de cheveux d&apos;origine nerveuse
                  </Link>
                  . Prendre en charge l&apos;angoisse, c&apos;est aussi prot&eacute;ger
                  le corps contre ces cons&eacute;quences physiques.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Santé mentale et accompagnement */}
              {/* ============================================ */}
              <section id="sante-mentale" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sant&eacute; mentale, soutien communautaire et accompagnement
                  professionnel en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des aspects les plus importants de l&apos;approche
                  islamique de l&apos;angoisse est le refus de toute
                  stigmatisation de la souffrance psychique. Le Proph&egrave;te (paix et
                  salut sur lui) a enseign&eacute; le respect et la compassion envers
                  les malades, sans distinction entre maux physiques et
                  psychiques. La sant&eacute; mentale fait partie de la sant&eacute; globale
                  que le musulman est appel&eacute; &agrave; pr&eacute;server.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Quand consulter un professionnel de sant&eacute; mentale
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les rem&egrave;des spirituels et naturels sont pr&eacute;cieux, mais ils ne
                  suffisent pas toujours. Si l&apos;angoisse persiste, si elle
                  emp&ecirc;che de mener une vie normale (travail, relations,
                  sommeil), ou si elle s&apos;accompagne de pens&eacute;es sombres, la
                  consultation d&apos;un psychologue ou d&apos;un psychiatre
                  est non seulement permise mais vivement encourag&eacute;e.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Anxi&eacute;t&eacute; persistante depuis plus de deux semaines
                      </strong>{" "}
                      : un professionnel peut aider &agrave; identifier les causes
                      profondes et proposer des strat&eacute;gies adapt&eacute;es.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Crises de panique r&eacute;p&eacute;t&eacute;es</strong> : ces &eacute;pisodes
                      n&eacute;cessitent souvent un accompagnement sp&eacute;cialis&eacute; pour
                      apprendre &agrave; les g&eacute;rer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Troubles du sommeil li&eacute;s &agrave; l&apos;anxi&eacute;t&eacute;</strong>{" "}
                      : l&apos;insomnie chronique aggrave l&apos;angoisse dans
                      un cercle vicieux qu&apos;un sp&eacute;cialiste peut aider &agrave;
                      briser. Le stress chronique peut aussi provoquer{" "}
                      <Link
                        href="/remede-arabe-acouphene"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        les acouph&egrave;nes, souvent aggrav&eacute;s par le stress
                      </Link>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Impact sur la vie quotidienne</strong> : quand
                      l&apos;angoisse emp&ecirc;che de travailler, d&apos;&eacute;tudier ou
                      d&apos;entretenir des relations, l&apos;aide
                      professionnelle devient une priorit&eacute;.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 rounded-xl border border-green-200 bg-green-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-green-800">
                        Rappel bienveillant
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-green-700">
                        Consulter un psychologue ou un psychiatre n&apos;est
                        pas un signe de faiblesse de foi. Le Proph&egrave;te (paix et
                        salut sur lui) a dit :
                        &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu
                        n&apos;a pas cr&eacute;&eacute; de maladie sans avoir cr&eacute;&eacute; son
                        rem&egrave;de&nbsp;&raquo; (rapport&eacute; par Abu Dawud). Se soigner
                        fait partie de la confiance en Allah, car on utilise les
                        moyens qu&apos;Il a mis &agrave; notre disposition.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Le soutien communautaire et fraternel
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam met l&apos;accent sur la solidarit&eacute; et le
                  soutien mutuel au sein de la communaut&eacute;. Le Proph&egrave;te (paix et
                  salut sur lui) a dit : &laquo;&nbsp;Les croyants sont les uns
                  pour les autres comme un &eacute;difice dont les parties se
                  soutiennent mutuellement&nbsp;&raquo; (rapport&eacute; par al-Bukhari
                  et Muslim). Face &agrave; l&apos;angoisse, cet enseignement prend une
                  dimension concrète :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour la personne en souffrance
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Parler de sa souffrance &agrave; un proche de confiance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Participer aux pri&egrave;res en congr&eacute;gation pour briser
                        l&apos;isolement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Rejoindre des cercles de savoir ou de dhikr
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Accepter l&apos;aide propos&eacute;e sans culpabilit&eacute;
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour l&apos;entourage bienveillant
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        &Eacute;couter sans juger, sans minimiser la souffrance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Ne pas dire &laquo;&nbsp;tu n&apos;as qu&apos;a prier
                        plus&nbsp;&raquo; comme unique r&eacute;ponse
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Proposer d&apos;accompagner vers un professionnel
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Prier pour la personne et lui rendre visite
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Allier approche spirituelle et approche m&eacute;dicale : le
                  mod&egrave;le proph&eacute;tique
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam ne pose aucune opposition entre la spiritualit&eacute;
                  et la{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    m&eacute;decine
                  </Link>
                  . Le Proph&egrave;te (paix et salut sur lui) lui-m&ecirc;me consultait des
                  m&eacute;decins et recommandait de se soigner. L&apos;approche la
                  plus sage consiste &agrave; combiner :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le pilier spirituel
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Douas, dhikr, pri&egrave;re de nuit, lecture du Coran, adhkar
                        du matin et du soir. Ces pratiques recentrent le c&oelig;ur,
                        renforcent la confiance en Allah et apportent un
                        apaisement profond.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le pilier naturel
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Talbina, miel, nigelle, dattes, huile d&apos;olive,
                        mod&eacute;ration alimentaire, activit&eacute; physique et sommeil de
                        qualit&eacute;. Ces habitudes soutiennent le syst&egrave;me nerveux et
                        favorisent l&apos;&eacute;quilibre &eacute;motionnel.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le pilier m&eacute;dical
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Consultation psychologique, psychiatrique si
                        n&eacute;cessaire, th&eacute;rapies cognitivo-comportementales (TCC),
                        traitement m&eacute;dicamenteux prescrit par un sp&eacute;cialiste.
                        L&apos;aide professionnelle est un moyen que Dieu a mis
                        &agrave; notre disposition.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le pilier social
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Soutien de la famille, des amis, de la communaut&eacute;.
                        Participer aux activit&eacute;s collectives, briser
                        l&apos;isolement, entretenir des liens fraternels
                        sinc&egrave;res et constructifs.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette approche en quatre piliers refl&egrave;te la vision holistique
                  de l&apos;islam, o&ugrave; le corps, l&apos;&acirc;me, l&apos;esprit et
                  les relations sociales forment un tout indissociable. N&eacute;gliger
                  l&apos;un de ces piliers fragilise l&apos;ensemble. Prendre
                  soin de sa sant&eacute; mentale est un acte de foi autant que de
                  sagesse.
                </p>

                {/* Profils */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Selon la situation de la personne
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;angoisse se manifeste diff&eacute;remment selon les
                  circonstances de chacun. Voici des conseils adapt&eacute;s &agrave;
                  diff&eacute;rentes situations.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour un &eacute;tudiant en p&eacute;riode d&apos;examens
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;anxi&eacute;t&eacute; li&eacute;e aux examens est tr&egrave;s r&eacute;pandue. En plus
                      de la r&eacute;vision, r&eacute;citer la doua de Moussa (&laquo;&nbsp;
                      Rabbi ishrah li sadri&nbsp;&raquo;, Coran 20:25) avant
                      chaque session d&apos;&eacute;tude, dormir suffisamment, et
                      consommer des dattes et du miel pour l&apos;&eacute;nergie
                      peuvent transformer l&apos;exp&eacute;rience.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte ou en post-partum
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les changements hormonaux peuvent amplifier l&apos;anxi&eacute;t&eacute;.
                      Le soutien familial, la talbina pour le r&eacute;confort, les
                      adhkar quotidiens et, si n&eacute;cessaire, un suivi
                      psychologique sp&eacute;cialis&eacute; en p&eacute;rinatalit&eacute; sont autant de
                      moyens bienveillants pour traverser cette p&eacute;riode.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne en deuil
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;islam reconna&icirc;t la l&eacute;gitimit&eacute; du chagrin. Le
                      Proph&egrave;te (paix et salut sur lui) a pleur&eacute; &agrave; la mort de son
                      fils Ibrahim. La talbina est sp&eacute;cifiquement recommand&eacute;e
                      pour les endeuill&eacute;s. La patience, le rappel de la
                      r&eacute;compense divine et le soutien des proches aident &agrave;
                      traverser cette &eacute;preuve.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne &acirc;g&eacute;e ou malade chronique
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;angoisse li&eacute;e &agrave; la maladie ou au vieillissement
                      est une &eacute;preuve que l&apos;islam accueille avec
                      compassion. Le dhikr constant, la compagnie bienveillante,
                      les visites fraternelles et le rappel que chaque
                      souffrance est une purification apportent du r&eacute;confort
                      spirituel et humain.
                    </p>
                  </div>
                </div>
              </section>

              {/* MedicalDisclaimer avant FAQ */}
              <MedicalDisclaimer />

              <AffiliateForm
                title="Maîtrisez les invocations de guérison prophétiques"
                description="Les remèdes arabes s'accompagnent de douas et d'invocations en arabe. Apprenez à les réciter correctement grâce à une formation adaptée."
                preselect="arabe"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne silo remede-arabe */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Rem&egrave;des et m&eacute;decine proph&eacute;tique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rem&egrave;des arabes
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la r&eacute;ussite
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie et protection
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le m&ecirc;me sujet
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
                    Rem&egrave;des et m&eacute;decine proph&eacute;tique
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
