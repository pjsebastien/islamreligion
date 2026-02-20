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
    "Remede angoisse islam : douas, dhikr et soins prophetiques pour retrouver la serenite",
  description:
    "Decouvrez les remedes islamiques contre l'angoisse : douas prophetiques, dhikr apaisant, priere de nuit, talbina, nigelle et conseils pour allier spiritualite et sante mentale.",
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
    label: "Douas prophetiques contre l'angoisse et le chagrin",
  },
  {
    id: "dhikr-priere",
    label: "Le dhikr et la priere de nuit : apaisement du coeur",
  },
  {
    id: "remedes-naturels",
    label: "Remedes prophetiques naturels : talbina, miel et nigelle",
  },
  {
    id: "sante-mentale",
    label: "Sante mentale et accompagnement professionnel",
  },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Quelle doua reciter contre l'angoisse en islam ?",
    answer:
      "Parmi les douas les plus recommandees figure l'invocation prophetique : Allahumma inni a'udhu bika min al-hamm wal-hazan, wa a'udhu bika min al-'ajzi wal-kasal, wa a'udhu bika min al-jubni wal-bukhl, wa a'udhu bika min ghalabat id-dayni wa qahri ar-rijal. Cette invocation, rapportee par al-Bukhari, protege contre le souci, le chagrin, l'incapacite, la paresse, la lachete, l'avarice, le poids des dettes et la domination des hommes.",
  },
  {
    question:
      "Le dhikr peut-il vraiment aider a reduire l'anxiete et le stress ?",
    answer:
      "Oui. Le Coran affirme dans la sourate Ar-Ra'd (13:28) que c'est par le rappel d'Allah que les coeurs s'apaisent. Le dhikr (rappel d'Allah) agit comme une forme de meditation spirituelle qui recentre l'esprit, apaise les pensees intrusives et renforce le sentiment de confiance en la protection divine. Plusieurs etudes en psychologie clinique confirment que les pratiques meditatives liees a la foi reduisent les symptomes anxieux.",
  },
  {
    question: "La talbina aide-t-elle contre l'angoisse ?",
    answer:
      "La talbina (bouillie d'orge) est mentionnee dans un hadith rapporte par al-Bukhari ou Aisha (qu'Allah soit satisfait d'elle) rapporte que le Prophete (paix et salut sur lui) disait qu'elle reconforte le coeur du malade et emporte une partie de son chagrin. L'orge est riche en tryptophane, un precurseur de la serotonine, ce qui pourrait expliquer ses bienfaits sur l'humeur.",
  },
  {
    question:
      "Est-il permis de consulter un psychologue ou un psychiatre en islam ?",
    answer:
      "Oui, tout a fait. L'islam encourage le recours a la medecine et aux specialistes. Le Prophete (paix et salut sur lui) a dit : Soignez-vous, serviteurs de Dieu, car Dieu n'a pas cree de maladie sans avoir cree son remede (rapporte par Abu Dawud). La sante mentale fait partie de la sante globale que le musulman doit preserver. Consulter un psychologue ou un psychiatre est un acte de sagesse, pas de faiblesse.",
  },
  {
    question: "La priere de nuit (tahajjud) aide-t-elle contre l'angoisse ?",
    answer:
      "La priere de nuit est fortement recommandee pour apaiser le coeur et renforcer le lien avec Allah. Le dernier tiers de la nuit est un moment ou Allah descend au ciel le plus bas et repond aux invocations de Ses serviteurs (rapporte par al-Bukhari et Muslim). Se lever pour prier dans le calme de la nuit offre un espace de recueillement profond et de liberation emotionnelle.",
  },
  {
    question:
      "Quels versets coraniques reciter pour calmer une crise d'angoisse ?",
    answer:
      "Plusieurs versets sont particulierement recommandes : Ayat al-Kursi (al-Baqara, 255), les trois dernieres sourates (Al-Ikhlas, Al-Falaq, An-Nas), les derniers versets de la sourate al-Baqara, ainsi que le verset Hasbunallahu wa ni'mal-wakil (sourate Al Imran, 3:173). Le simple fait de reciter le Coran avec reflexion apaise le coeur et eloigne les pensees anxieuses.",
  },
  {
    question:
      "L'alimentation Sunna a-t-elle un effet sur l'anxiete et le stress ?",
    answer:
      "Oui. Les aliments recommandes dans la Sunna, comme le miel, les dattes, la nigelle, l'huile d'olive et la talbina, sont riches en nutriments benefiques pour le systeme nerveux. Le miel contient des antioxydants et des oligoelements qui soutiennent le fonctionnement cerebral. Les dattes apportent du magnesium et du potassium, deux mineraux impliques dans la regulation du stress.",
  },
  {
    question:
      "Comment aider un proche musulman qui souffre d'angoisse ou de depression ?",
    answer:
      "Ecoutez-le sans le juger, montrez-lui votre compassion et accompagnez-le vers une aide professionnelle si necessaire. Ne minimisez jamais sa souffrance et ne lui dites pas simplement de prier davantage. L'islam valorise le soutien fraternel : le Prophete (paix et salut sur lui) a dit que celui qui soulage un croyant d'une peine, Allah le soulagera d'une peine du Jour de la Resurrection (rapporte par Muslim). Proposez de l'accompagner chez un specialiste et priez pour lui.",
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
          "Remede angoisse islam : douas, dhikr et soins prophetiques pour retrouver la serenite",
        description:
          "Decouvrez les remedes islamiques contre l'angoisse : douas prophetiques, dhikr apaisant, priere de nuit, talbina, nigelle et conseils pour allier spiritualite et sante mentale.",
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
            name: "Remedes arabes",
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
          title="Remede contre l&apos;angoisse en islam : douas, dhikr et soins prophetiques"
          subtitle="Invocations authentiques, rappel d&apos;Allah, remedes naturels et conseils bienveillants pour apaiser le coeur et l&apos;esprit."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-contre-langoisse-en-islam-invocations-et-conseils-spirituels-apaisants-1.jpg"
          imageAlt="Remede contre l'angoisse en islam, invocations et conseils spirituels apaisants"
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
                  Remedes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Angoisse en islam</span>
              </nav>

              {/* MedicalDisclaimer au debut */}
              <MedicalDisclaimer />

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;angoisse et l&apos;anxiete ne sont pas des signes de
                  faiblesse de foi. L&apos;islam reconnait la souffrance
                  psychique, offre des invocations prophetiques apaisantes, des
                  remedes naturels comme la talbina ou la nigelle, et encourage
                  le recours aux professionnels de sante mentale. Ce contenu
                  vous accompagne vers un apaisement qui allie spiritualite,
                  hygiene de vie et soutien humain.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Comprendre l'angoisse en islam */}
              {/* ============================================ */}
              <section id="comprendre-angoisse" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre l&apos;angoisse et l&apos;anxiete selon la vision
                  islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;angoisse, le souci (<em>al-hamm</em>) et le chagrin (
                  <em>al-hazan</em>) sont des realites humaines que l&apos;
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>{" "}
                  n&apos;a jamais niees ni stigmatisees. Bien au contraire, la
                  tradition prophetique aborde ces emotions avec une profonde
                  bienveillance, les reconnaissant comme des epreuves que
                  traverse tout etre humain, y compris les prophetes eux-memes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete Yacoub (Jacob, paix sur lui) a pleure son fils
                  Youssouf au point d&apos;en perdre la vue (sourate Yusuf,
                  12:84). Le Prophete Muhammad (paix et salut sur lui)
                  a connu ce que les savants appellent &laquo;&nbsp;l&apos;annee
                  de la tristesse&nbsp;&raquo; (<em>am al-huzn</em>) apres la
                  perte de son epouse Khadija et de son oncle Abu Talib. Ces
                  recits montrent que l&apos;angoisse n&apos;est ni une honte ni
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
                  : &laquo;&nbsp;Certes, avec la difficulte il y a une
                  facilite. Certes, avec la difficulte il y a une
                  facilite&nbsp;&raquo; (sourate Ash-Sharh, 94:5-6). La
                  repetition de ce verset souligne avec insistance que toute
                  epreuve porte en elle le germe de son soulagement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;epreuve comme purification et elevation
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophete (paix et salut sur lui) a dit :
                  &laquo;&nbsp;Rien de ce qui touche le musulman, fatigue,
                  maladie, souci, tristesse, mal ou angoisse, meme une epine
                  qui le pique, sans qu&apos;Allah ne lui efface par cela des
                  peches&nbsp;&raquo; (rapporte par al-Bukhari et Muslim). Ce
                  hadith offre une perspective transformatrice : la souffrance
                  psychique, lorsqu&apos;elle est vecue avec patience
                  (<em>sabr</em>), purifie l&apos;ame et rapproche du Createur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cela ne signifie aucunement qu&apos;il faille endurer
                  l&apos;angoisse sans agir. Au contraire, l&apos;islam incite a
                  prendre les moyens necessaires pour se soigner, qu&apos;ils
                  soient spirituels, naturels ou medicaux. L&apos;attitude du
                  croyant consiste a combiner la confiance en Allah (
                  <em>tawakkul</em>) avec les demarches concretes : invoquer,
                  se soigner, et consulter un specialiste si l&apos;etat
                  persiste.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;angoisse n&apos;est pas un chatiment</strong>{" "}
                      : c&apos;est une epreuve, parfois une purification, et
                      toujours une occasion de se rapprocher d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les prophetes ont souffert</strong> : la tristesse
                      de Yacoub, l&apos;angoisse de Younes dans le ventre de la
                      baleine, le chagrin de Muhammad (paix et salut sur lui)
                      prouvent que la souffrance n&apos;exclut pas la proximite
                      divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;action est encouragee</strong> : prier,
                      invoquer, se soigner, consulter un medecin, chercher le
                      soutien de la communaute.
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
                          Remede recommande
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Souci du quotidien (<em>al-hamm</em>)
                        </td>
                        <td className="py-3 pr-4">
                          Preoccupation liee a l&apos;avenir, naturelle et humaine
                        </td>
                        <td className="py-3">
                          Doua prophetique + tawakkul
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chagrin profond (<em>al-hazan</em>)
                        </td>
                        <td className="py-3 pr-4">
                          Tristesse liee a une perte, reconnue et respectee
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
                          Questionnement sur le sens de la vie, oriente vers la foi
                        </td>
                        <td className="py-3">
                          Lecture du Coran + reflexion spirituelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Crise de panique
                        </td>
                        <td className="py-3 pr-4">
                          Etat physique et psychique a prendre au serieux
                        </td>
                        <td className="py-3">
                          Consultation medicale + doua + dhikr
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Depression prolongee
                        </td>
                        <td className="py-3 pr-4">
                          Maladie a traiter, pas une faiblesse de foi
                        </td>
                        <td className="py-3">
                          Psychiatre + remedes prophetiques + priere
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
              {/* SECTION 2 : Douas prophetiques */}
              {/* ============================================ */}
              <section id="douas-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas prophetiques contre l&apos;angoisse, le souci et le
                  chagrin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophete Muhammad (paix et salut sur lui) a
                  enseigne a sa communaute des invocations specifiques pour faire
                  face au souci, a la tristesse et a l&apos;oppression. Ces douas
                  sont un veritable refuge pour le coeur en detresse. Elles
                  combinent la demande de protection, l&apos;affirmation de la
                  confiance en Allah et la soumission a Sa sagesse.
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
                    &laquo;&nbsp;O Allah, je cherche refuge aupres de Toi contre
                    le souci et le chagrin, contre l&apos;incapacite et la
                    paresse, contre la lachete et l&apos;avarice, et contre le
                    poids des dettes et la domination des hommes.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par al-Bukhari (hadith n&deg; 6369). Le Prophete
                    (paix et salut sur lui) recitait cette invocation
                    quotidiennement.
                  </p>
                </div>

                {/* Doua 2 : invocation de Younes */}
                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Invocation de Younes (Jonas) dans les tenebres
                  </p>
                  <p
                    className="mt-3 text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ
                    الظَّالِمِينَ
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a pas de divinite a part Toi,
                    gloire a Toi, j&apos;etais certes parmi les
                    injustes.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Sourate Al-Anbiya (21:87). Le Prophete (paix et salut sur
                    lui) a dit : &laquo;&nbsp;L&apos;invocation de Dhoun-Noun
                    (Younes), qu&apos;il prononca dans le ventre de la
                    baleine : tout musulman qui invoque Allah par cette formule
                    pour une chose quelconque, Allah lui
                    repondra&nbsp;&raquo; (rapporte par at-Tirmidhi, qualifie de
                    sahih).
                  </p>
                </div>

                {/* Doua 3 : la grande invocation */}
                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    La grande invocation contre la detresse
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
                    &laquo;&nbsp;O Allah, je suis Ton serviteur, fils de Ton
                    serviteur, fils de Ta servante. Mon toupet est dans Ta main.
                    Ton jugement s&apos;accomplit sur moi. Ton decret a mon
                    egard est juste. Je Te demande par chaque nom qui
                    T&apos;appartient, par lequel Tu T&apos;es nomme
                    Toi-meme, que Tu l&apos;as revele dans Ton Livre, que Tu
                    l&apos;as enseigne a l&apos;une de Tes creatures, ou que Tu
                    l&apos;as garde dans la science de l&apos;invisible aupres
                    de Toi, de faire du Coran le printemps de mon coeur, la
                    lumiere de ma poitrine, la dissipation de ma tristesse et la
                    fin de mon angoisse.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Ahmad (hadith n&deg; 3712), qualifie de sahih
                    par al-Albani. Le Prophete (paix et salut sur lui) a dit que
                    quiconque prononce cette invocation, Allah remplacera sa
                    tristesse par la joie.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois invocations forment un arsenal spirituel complet
                  contre les differentes formes d&apos;angoisse. La premiere
                  protege contre les soucis quotidiens, la deuxieme est un appel
                  au secours dans les moments de detresse aigus, et la troisieme
                  est une supplication profonde qui fait du Coran le remede du
                  coeur. Les savants recommandent de les apprendre par coeur et
                  de les reciter regulierement, en arabe si possible, avec
                  comprehension et conviction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Conseils pratiques pour la recitation des douas
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Choisir un moment calme</strong> : apres la priere
                      du Fajr, avant de dormir, ou dans le dernier tiers de la
                      nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Comprendre le sens</strong> : la doua recitee avec
                      comprehension a un impact bien plus profond sur le coeur
                      que la simple repetition mecanique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Etre en etat d&apos;ablution</strong> : bien que
                      la doua soit valide sans ablution, etre purifie renforce
                      le recueillement et la concentration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Perseverer</strong> : la reponse d&apos;Allah peut
                      prendre differentes formes. Le Prophete (paix et salut sur
                      lui) a enseigne que toute invocation est exaucee, soit par
                      l&apos;obtention de ce qui est demande, soit par
                      l&apos;eloignement d&apos;un mal, soit par une recompense
                      dans l&apos;au-dela (rapporte par Ahmad).
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Invocations authentiques pour la reussite et la facilite en islam"
                  description="Decouvrez les douas prophetiques pour demander la facilite, la reussite et la benediction d'Allah dans vos projets."
                  href="/invocations-reussite-facilite"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Dhikr et priere de nuit */}
              {/* ============================================ */}
              <section id="dhikr-priere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le dhikr et la priere de nuit (tahajjud) : apaisement du coeur
                  et de l&apos;esprit
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si les douas sont des appels ponctuels vers Allah, le dhikr
                  (rappel d&apos;Allah) est une pratique continue qui immerge le
                  coeur dans la conscience du divin. Le Coran en fait la source
                  meme de la serenite :
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
                    coeurs s&apos;apaisent.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Sourate Ar-Ra&apos;d (13:28). Ce verset est souvent cite
                    comme la base coranique de l&apos;apaisement par le dhikr.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le dhikr ne se limite pas a la repetition de formules : il
                  s&apos;agit d&apos;un etat du coeur, d&apos;une presence
                  constante a Allah dans chaque instant. Neanmoins, certaines
                  formules sont particulierement recommandees pour apaiser
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
                          Moment recommande
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
                          Apres chaque priere (33 fois chacun)
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
                          A tout moment de detresse
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
                          Face a la peur et l&apos;incertitude
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
                          Purification du coeur et renouveau spirituel
                        </td>
                        <td className="py-3 pr-4">
                          Matin et soir, apres les prieres
                        </td>
                        <td className="py-3">
                          Abu Dawud
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Salat ala an-Nabi (priere sur le Prophete)
                        </td>
                        <td className="py-3 pr-4">
                          Benediction et apaisement de l&apos;ame
                        </td>
                        <td className="py-3 pr-4">
                          Tout au long de la journee
                        </td>
                        <td className="py-3">
                          At-Tirmidhi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  La priere de nuit (tahajjud) : un refuge dans le silence
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les actes les plus puissants contre l&apos;angoisse, la
                  priere de nuit occupe une place particuliere. Elle se pratique
                  dans le dernier tiers de la nuit, un moment ou le calme
                  exterieur rejoint le calme interieur, et ou Allah repond a Ses
                  serviteurs avec une proximite incomparable.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-foreground italic">
                    &laquo;&nbsp;Notre Seigneur descend chaque nuit au ciel le
                    plus bas lorsqu&apos;il reste le dernier tiers de la nuit
                    et dit : Qui M&apos;invoque pour que Je lui reponde ? Qui Me
                    demande pour que Je lui donne ? Qui implore Mon pardon pour
                    que Je lui pardonne ?&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par al-Bukhari et Muslim.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah Lui-meme decrit les effets de la priere de nuit :
                  &laquo;&nbsp;Leve-toi la nuit pour prier, sauf une petite
                  partie, la moitie ou un peu moins, ou un peu plus. Et recite
                  le Coran avec soin&nbsp;&raquo; (sourate Al-Muzzammil,
                  73:2-4). La priere de nuit n&apos;est pas obligatoire, mais
                  elle est fortement encouragee, surtout en periode de detresse
                  emotionnelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Integrer le dhikr et le tahajjud dans son quotidien
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les adhkar du matin et du soir</strong> : ces
                      invocations, compilees dans des recueils comme{" "}
                      <em>Hisn al-Muslim</em> (la Citadelle du musulman),
                      constituent un bouclier quotidien qui renforce la serenite
                      et eloigne les waswas (murmures negatifs).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par deux rak&apos;at</strong> : si le
                      tahajjud semble difficile au debut, commencer par deux
                      unites de priere courtes suffit. L&apos;important est la
                      regularite, meme si la quantite est modeste.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ecouter le Coran</strong> : pour ceux qui ne
                      savent pas encore lire l&apos;
                      <Link
                        href="/apprendre-larabe"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        arabe
                      </Link>
                      , ecouter une recitation apaisante (sourates Ar-Rahman,
                      Ya-Sin, Al-Mulk) peut produire un effet calmant comparable
                      a la recitation personnelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tenir un journal de gratitude</strong> : noter
                      chaque soir trois bienfaits recus renforce la conscience
                      du <em>ni&apos;ma</em> (bienfait divin) et attenue les
                      pensees anxieuses.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Remede-contre-langoisse-en-islam-invocations-et-conseils-spirituels-apaisants-1.jpg"
                    alt="Le dhikr et la priere de nuit comme remede contre l'angoisse en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous les remedes prophetiques et la medecine arabe"
                  href="/remede-arabe"
                  linkText="Decouvrir les remedes arabes"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Remedes naturels prophetiques */}
              {/* ============================================ */}
              <section id="remedes-naturels" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remedes prophetiques naturels contre l&apos;angoisse :
                  talbina, miel, nigelle et hygiene de vie Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-dela de la dimension spirituelle, la tradition prophetique
                  propose des remedes naturels qui nourrissent le corps et
                  soutiennent l&apos;equilibre emotionnel. Ces remedes ne
                  remplacent pas un traitement medical, mais ils completent
                  l&apos;approche holistique de la sante en islam, ou le corps
                  et l&apos;ame sont indissociables.
                </p>

                {/* Talbina */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La talbina : reconfort du coeur en deuil et en detresse
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
                      &laquo;&nbsp;La talbina reconforte le coeur du malade et
                      emporte une partie de son chagrin.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm text-foreground-secondary">
                      Rapporte par al-Bukhari (hadith n&deg; 5689).
                    </p>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    La talbina est une bouillie preparee a base de farine
                    d&apos;orge, melangee a du lait et sucree au miel. Le
                    Prophete (paix et salut sur lui) la recommandait
                    specifiquement pour les personnes en deuil ou malades.
                    L&apos;orge est riche en tryptophane, un acide amine
                    precurseur de la serotonine (hormone du bien-etre), ainsi
                    qu&apos;en magnesium et en vitamines du groupe B, tous
                    impliques dans la regulation de l&apos;humeur et du systeme
                    nerveux.
                  </p>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Preparation :</strong> melanger 2 cuilleres a soupe
                    de farine d&apos;orge dans un verre de lait, chauffer a feu
                    doux en remuant jusqu&apos;a obtenir une consistance
                    onctueuse, puis sucrer avec du miel pur. A consommer de
                    preference le matin ou le soir.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : guerison et douceur pour le corps et l&apos;ame
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Coran mentionne le miel comme porteur de guerison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs
                    variees, dans laquelle il y a une guerison pour les
                    gens&nbsp;&raquo; (sourate An-Nahl, verset 69). Le miel
                    contient des antioxydants, des oligoelements et des enzymes
                    qui soutiennent les fonctions cerebrales et nerveuses. Sa
                    consommation reguliere, associee a la nigelle ou a la
                    talbina, renforce l&apos;effet apaisant.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommande :</strong> une cuillere a soupe de
                    miel pur a jeun, diluee dans de l&apos;eau tiede.
                    Privilegier un miel non chauffe, de preference du miel de
                    jujubier (<em>sidr</em>) ou de thym.
                  </p>
                </div>

                {/* Nigelle */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    La graine de nigelle (<em>habba sawda</em>) : un soutien
                    pour le systeme nerveux
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Prophete (paix et salut sur lui) a dit :
                    &laquo;&nbsp;Utilisez cette graine noire, car elle contient
                    un remede contre toute maladie, sauf la mort&nbsp;&raquo;
                    (rapporte par al-Bukhari et Muslim). La thymoquinone, son
                    principal compose actif, possede des proprietes
                    anti-inflammatoires, antioxydantes et neuroprotectrices. Des
                    etudes recentes suggerent un effet benefique sur l&apos;anxiete
                    et la depression en agissant sur les recepteurs
                    GABAergiques et serotoninergiques.
                  </p>
                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommande :</strong> une cuillere a cafe
                    d&apos;huile de nigelle pressee a froid, melangee a du miel,
                    a prendre a jeun chaque matin.
                  </p>
                </div>

                {/* Hygiene de vie Sunna */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Alimentation et hygiene de vie selon la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition prophetique propose un mode de vie equilibre qui
                  favorise la sante mentale. Voici les habitudes recommandees
                  qui contribuent a reduire l&apos;angoisse :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      Moderation alimentaire
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophete (paix et salut sur lui) a enseigne :
                      &laquo;&nbsp;Le fils d&apos;Adam n&apos;a jamais rempli de
                      recipient pire que son estomac. Il lui suffit de quelques
                      bouchees pour se maintenir. S&apos;il doit absolument
                      manger plus, qu&apos;il reserve un tiers pour la
                      nourriture, un tiers pour la boisson et un tiers pour le
                      souffle&nbsp;&raquo; (rapporte par at-Tirmidhi).
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      Les dattes : energie et apaisement
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Riches en magnesium, potassium et sucres naturels, les
                      dattes apportent une energie rapide et saine. Le
                      magnesium, en particulier, joue un role dans la relaxation
                      musculaire et nerveuse. Le Prophete (paix et salut sur
                      lui) consommait sept dattes ajwa chaque matin.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      L&apos;huile d&apos;olive : nourriture du cerveau
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Mentionnee comme &laquo;&nbsp;arbre beni&nbsp;&raquo; dans
                      le Coran (sourate An-Nur, 24:35), l&apos;huile
                      d&apos;olive extra-vierge est riche en polyphenols et en
                      acides gras mono-insatures qui protegent le cerveau et
                      favorisent la production de neurotransmetteurs apaisants.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      L&apos;activite physique et la nature
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La marche est la forme d&apos;exercice la plus pratiquee
                      par le Prophete (paix et salut sur lui). Le contact avec
                      la nature et l&apos;activite physique reguliere liberent
                      des endorphines, reduisent le cortisol (hormone du stress)
                      et ameliorent la qualite du sommeil.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;approche prophetique de l&apos;alimentation repose sur
                  la moderation, la diversite et la gratitude. Manger en pleine
                  conscience, commencer par le nom d&apos;Allah
                  (&laquo;&nbsp;Bismillah&nbsp;&raquo;) et terminer par la
                  louange (&laquo;&nbsp;Al-hamdulillah&nbsp;&raquo;) transforme
                  chaque repas en un acte de devotion qui recentre l&apos;esprit
                  et apaise le coeur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Sante mentale et accompagnement */}
              {/* ============================================ */}
              <section id="sante-mentale" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sante mentale, soutien communautaire et accompagnement
                  professionnel en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des aspects les plus importants de l&apos;approche
                  islamique de l&apos;angoisse est le refus de toute
                  stigmatisation de la souffrance psychique. Le Prophete (paix et
                  salut sur lui) a enseigne le respect et la compassion envers
                  les malades, sans distinction entre maux physiques et
                  psychiques. La sante mentale fait partie de la sante globale
                  que le musulman est appele a preserver.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Quand consulter un professionnel de sante mentale
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les remedes spirituels et naturels sont precieux, mais ils ne
                  suffisent pas toujours. Si l&apos;angoisse persiste, si elle
                  empeche de mener une vie normale (travail, relations,
                  sommeil), ou si elle s&apos;accompagne de pensees sombres, la
                  consultation d&apos;un psychologue ou d&apos;un psychiatre
                  est non seulement permise mais vivement encouragee.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Anxiete persistante depuis plus de deux semaines
                      </strong>{" "}
                      : un professionnel peut aider a identifier les causes
                      profondes et proposer des strategies adaptees.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Crises de panique repetees</strong> : ces episodes
                      necessitent souvent un accompagnement specialise pour
                      apprendre a les gerer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Troubles du sommeil lies a l&apos;anxiete</strong>{" "}
                      : l&apos;insomnie chronique aggrave l&apos;angoisse dans
                      un cercle vicieux qu&apos;un specialiste peut aider a
                      briser.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Impact sur la vie quotidienne</strong> : quand
                      l&apos;angoisse empeche de travailler, d&apos;etudier ou
                      d&apos;entretenir des relations, l&apos;aide
                      professionnelle devient une priorite.
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
                        pas un signe de faiblesse de foi. Le Prophete (paix et
                        salut sur lui) a dit :
                        &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu
                        n&apos;a pas cree de maladie sans avoir cree son
                        remede&nbsp;&raquo; (rapporte par Abu Dawud). Se soigner
                        fait partie de la confiance en Allah, car on utilise les
                        moyens qu&apos;Il a mis a notre disposition.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Le soutien communautaire et fraternel
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam met l&apos;accent sur la solidarite et le
                  soutien mutuel au sein de la communaute. Le Prophete (paix et
                  salut sur lui) a dit : &laquo;&nbsp;Les croyants sont les uns
                  pour les autres comme un edifice dont les parties se
                  soutiennent mutuellement&nbsp;&raquo; (rapporte par al-Bukhari
                  et Muslim). Face a l&apos;angoisse, cet enseignement prend une
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
                        Parler de sa souffrance a un proche de confiance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Participer aux prieres en congregation pour briser
                        l&apos;isolement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Rejoindre des cercles de savoir ou de dhikr
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Accepter l&apos;aide proposee sans culpabilite
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
                        Ecouter sans juger, sans minimiser la souffrance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/50" />
                        Ne pas dire &laquo;&nbsp;tu n&apos;as qu&apos;a prier
                        plus&nbsp;&raquo; comme unique reponse
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
                  Allier approche spirituelle et approche medicale : le
                  modele prophetique
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam ne pose aucune opposition entre la spiritualite
                  et la{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    medecine
                  </Link>
                  . Le Prophete (paix et salut sur lui) lui-meme consultait des
                  medecins et recommandait de se soigner. L&apos;approche la
                  plus sage consiste a combiner :
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
                        Douas, dhikr, priere de nuit, lecture du Coran, adhkar
                        du matin et du soir. Ces pratiques recentrent le coeur,
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
                        moderation alimentaire, activite physique et sommeil de
                        qualite. Ces habitudes soutiennent le systeme nerveux et
                        favorisent l&apos;equilibre emotionnel.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le pilier medical
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Consultation psychologique, psychiatrique si
                        necessaire, therapies cognitivo-comportementales (TCC),
                        traitement medicamenteux prescrit par un specialiste.
                        L&apos;aide professionnelle est un moyen que Dieu a mis
                        a notre disposition.
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
                        Soutien de la famille, des amis, de la communaute.
                        Participer aux activites collectives, briser
                        l&apos;isolement, entretenir des liens fraternels
                        sinceres et constructifs.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette approche en quatre piliers reflete la vision holistique
                  de l&apos;islam, ou le corps, l&apos;ame, l&apos;esprit et
                  les relations sociales forment un tout indissociable. Negliger
                  l&apos;un de ces piliers fragilise l&apos;ensemble. Prendre
                  soin de sa sante mentale est un acte de foi autant que de
                  sagesse.
                </p>

                {/* Profils */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Selon la situation de la personne
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;angoisse se manifeste differemment selon les
                  circonstances de chacun. Voici des conseils adaptes a
                  differentes situations.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour un etudiant en periode d&apos;examens
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;anxiete liee aux examens est tres repandue. En plus
                      de la revision, reciter la doua de Moussa (&laquo;&nbsp;
                      Rabbi ishrah li sadri&nbsp;&raquo;, Coran 20:25) avant
                      chaque session d&apos;etude, dormir suffisamment, et
                      consommer des dattes et du miel pour l&apos;energie
                      peuvent transformer l&apos;experience.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte ou en post-partum
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les changements hormonaux peuvent amplifier l&apos;anxiete.
                      Le soutien familial, la talbina pour le reconfort, les
                      adhkar quotidiens et, si necessaire, un suivi
                      psychologique specialise en perinatalite sont autant de
                      moyens bienveillants pour traverser cette periode.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne en deuil
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;islam reconnait la legitimite du chagrin. Le
                      Prophete (paix et salut sur lui) a pleure a la mort de son
                      fils Ibrahim. La talbina est specifiquement recommandee
                      pour les endeuilles. La patience, le rappel de la
                      recompense divine et le soutien des proches aident a
                      traverser cette epreuve.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne agee ou malade chronique
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;angoisse liee a la maladie ou au vieillissement
                      est une epreuve que l&apos;islam accueille avec
                      compassion. Le dhikr constant, la compagnie bienveillante,
                      les visites fraternelles et le rappel que chaque
                      souffrance est une purification apportent du reconfort
                      spirituel et humain.
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

              {/* Navigation interne silo remede-arabe */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Remedes et medecine prophetique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les remedes arabes
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la reussite
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie et protection
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le meme sujet
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
                    Remedes et medecine prophetique
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
