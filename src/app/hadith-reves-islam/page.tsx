import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur les rêves en islam : guide complet des enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur les rêves en islam : les trois types de rêves, le bon rêve comme partie de la prophétie, l&apos;attitude face aux cauchemars et l&apos;interprétation selon la Sunna.",
  openGraph: {
    title:
      "Hadiths sur les rêves en islam : guide complet des enseignements prophétiques",
    description:
      "Les hadiths authentiques sur les rêves en islam : rêve véridique, cauchemar, interprétation et attitude du croyant selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-reves-islam",
    images: [
      {
        url: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-reves-islam",
  },
};

const tocItems = [
  { id: "trois-types-reves", label: "Les trois types de rêves" },
  { id: "reve-veridique", label: "Le rêve véridique et la prophétie" },
  { id: "attitude-bon-reve", label: "Attitude face au bon rêve" },
  { id: "attitude-mauvais-reve", label: "Attitude face au mauvais rêve" },
  { id: "reves-prophete", label: "Les rêves du Prophète ﷺ" },
  { id: "interpretation", label: "L&apos;interprétation des rêves" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les trois types de rêves en islam selon les hadiths ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que les rêves sont de trois types : le rêve véridique (ru\u2019ya saliha) qui vient d\u2019Allah, le rêve qui vient de l\u2019âme (hadith an-nafs) issu des préoccupations quotidiennes, et le cauchemar (hulm) insufflé par Shaytan pour attrister le croyant (Sahih Muslim, n°2263). Seul le premier type mérite d\u2019être partagé et interprété.",
  },
  {
    question:
      "Que faire quand on fait un bon rêve en islam ?",
    answer:
      "Selon les hadiths, lorsqu\u2019on fait un bon rêve, il convient de louer Allah, de ne le raconter qu\u2019à une personne que l\u2019on aime et en qui on a confiance, et de s\u2019en réjouir car c\u2019est une bonne nouvelle (bushra) de la part d\u2019Allah. Le Prophète ﷺ a dit : \u00ab Si l\u2019un de vous voit ce qu\u2019il aime, qu\u2019il ne le raconte qu\u2019à celui qu\u2019il aime \u00bb (Sahih Muslim, n°2261).",
  },
  {
    question:
      "Que faire quand on fait un cauchemar en islam ?",
    answer:
      "Le Prophète ﷺ a enseigné plusieurs gestes à accomplir après un cauchemar : chercher refuge auprès d\u2019Allah contre le mal de Shaytan, cracher légèrement trois fois à sa gauche, changer de côté, et ne raconter le rêve à personne. Celui qui fait cela ne sera pas affecté par ce rêve (Sahih Muslim, n°2262). Il est aussi recommandé de se lever pour prier si le cauchemar persiste.",
  },
  {
    question:
      "Le bon rêve est-il une partie de la prophétie ?",
    answer:
      "Oui, le Prophète ﷺ a dit : \u00ab Le bon rêve du musulman est une des quarante-six parties de la prophétie \u00bb (Sahih Al-Bukhari, n°6989). Les savants expliquent que cela signifie que le rêve véridique est un vestige de la révélation prophétique après la fin de la prophétie, non que le rêveur acquiert un statut de prophète.",
  },
  {
    question:
      "Peut-on interpréter ses propres rêves en islam ?",
    answer:
      "Il est préférable de confier l\u2019interprétation des rêves à une personne savante et de confiance. Abu Bakr as-Siddiq interprétait les rêves en présence du Prophète ﷺ, qui validait ou corrigeait ses interprétations. Les savants déconseillent de partager ses rêves avec n\u2019importe qui, car le rêve peut se réaliser selon l\u2019interprétation donnée (Sunan Abu Dawud, n°5020).",
  },
  {
    question:
      "Y a-t-il un lien entre l&apos;istikharah et les rêves en islam ?",
    answer:
      "La prière de l\u2019istikharah est une consultation d\u2019Allah avant une décision importante. Contrairement à une idée répandue, la réponse à l\u2019istikharah ne passe pas nécessairement par un rêve. Les savants expliquent que la réponse se manifeste par une facilitation ou un blocage des événements. Un rêve peut accompagner l\u2019istikharah, mais ce n\u2019est pas une condition.",
  },
  {
    question:
      "Pourquoi ne faut-il pas raconter un mauvais rêve ?",
    answer:
      "Le Prophète ﷺ a interdit de raconter les mauvais rêves car ils viennent de Shaytan. Les partager peut provoquer de l\u2019inquiétude chez le rêveur et son entourage, et le rêve peut se réaliser selon l\u2019interprétation qui en est faite. Le silence est donc une protection. Le Prophète ﷺ a dit : \u00ab Le rêve est suspendu à la patte d\u2019un oiseau tant qu\u2019il n\u2019est pas interprété ; dès qu\u2019il est interprété, il se réalise \u00bb (Sunan Abu Dawud, n°5020).",
  },
  {
    question:
      "Les rêves des pieux sont-ils plus véridiques que ceux des autres ?",
    answer:
      "Oui, le Prophète ﷺ a enseigné que les rêves les plus véridiques sont ceux des personnes les plus véridiques dans leur parole. Plus le croyant est sincère et pieux, plus ses rêves sont susceptibles d\u2019être véridiques (Sahih Muslim, n°2263). Cela ne signifie pas que toute personne pieuse fait uniquement des rêves véridiques, mais que la probabilité est plus élevée.",
  },
];

export default function HadithRevesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-reves-islam/#article",
        headline:
          "Hadiths sur les rêves en islam : guide complet des enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur les rêves en islam : les trois types de rêves, le bon rêve comme partie de la prophétie, l\u2019attitude face aux cauchemars et l\u2019interprétation selon la Sunna.",
        image: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg",
        datePublished: "2026-05-11",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-reves-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-reves-islam/#breadcrumb",
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
            name: "Hadith du jour",
            item: "https://www.islamreligion.fr/hadith-du-jour",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hadiths sur les rêves",
            item: "https://www.islamreligion.fr/hadith-reves-islam",
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
          title="Hadiths sur les rêves en islam"
          subtitle="Les enseignements prophétiques sur les trois types de rêves, le rêve véridique, l&apos;attitude face aux cauchemars et l&apos;interprétation des songes selon la Sunna authentique."
          imageSrc="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
          imageAlt="Hadiths sur les rêves en islam, enseignements prophétiques"
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

              <nav
                className="mb-8 text-sm text-foreground-secondary"
                aria-label="Fil d'Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/hadith-du-jour" className="hover:text-primary">
                  Hadith du jour
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Hadiths sur les rêves
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  À retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les rêves en islam sont de trois types : le rêve véridique venant d&apos;Allah, le rêve issu de l&apos;âme et le cauchemar insufflé par Shaytan.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le bon rêve est une des quarante-six parties de la prophétie et ne doit être partagé qu&apos;avec une personne de confiance.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Face à un cauchemar, le Prophète ﷺ a enseigné de cracher légèrement à gauche, de chercher refuge auprès d&apos;Allah et de ne pas raconter le rêve.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les rêves les plus véridiques sont ceux des personnes les plus sincères dans leur parole et leur pratique religieuse.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Les trois types      */}
              {/* ============================== */}
              <section id="trois-types-reves" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les trois types de rêves en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète ﷺ a établi une classification claire des rêves en trois catégories distinctes. Cette classification est fondamentale pour le croyant, car elle détermine l&apos;attitude à adopter face à chaque type de songe. Les hadiths suivants posent les bases de la compréhension islamique des rêves.
                </p>

                <HadithBlock
                  number={1}
                  title="Les rêves sont de trois sortes"
                  narrator="Abu Hurayra"
                  arabic="الرُّؤْيَا ثَلَاثٌ: فَرُؤْيَا الصَّالِحَةُ بُشْرَى مِنَ اللَّهِ، وَرُؤْيَا تَحْزِينٌ مِنَ الشَّيْطَانِ، وَرُؤْيَا مِمَّا يُحَدِّثُ الْمَرْءُ نَفْسَهُ"
                  translation="Les rêves sont de trois sortes : le rêve pieux qui est une bonne nouvelle de la part d&apos;Allah, le rêve qui attriste et qui vient de Shaytan, et le rêve qui provient de ce que la personne se dit à elle-même."
                  source="Sahih Muslim, n°2263"
                  grade="sahih"
                  explanation="Ce hadith est le fondement de la classification islamique des rêves. Le premier type, la ru&apos;ya saliha, est un don divin : une vision véridique porteuse de sens. Le deuxième type vient de Shaytan et vise à troubler, effrayer ou attrister le croyant. Le troisième type, hadith an-nafs, provient des préoccupations, désirs ou pensées du dormeur. Les savants insistent sur l&apos;importance de distinguer ces trois catégories avant toute tentative d&apos;interprétation."
                />

                <HadithBlock
                  number={2}
                  title="Le rêve véridique appartient aux plus véridiques"
                  narrator="Abu Hurayra"
                  arabic="أَصْدَقُكُمْ رُؤْيَا أَصْدَقُكُمْ حَدِيثًا"
                  translation="Ceux d&apos;entre vous qui ont les rêves les plus véridiques sont ceux qui sont les plus véridiques dans leur parole."
                  source="Sahih Muslim, n°2263"
                  grade="sahih"
                  explanation="Ce hadith établit un lien direct entre la véracité du croyant dans sa vie éveillée et l&apos;authenticité de ses rêves. Plus une personne est sincère, honnête et pieuse, plus ses rêves sont susceptibles d&apos;être des visions véridiques. L&apos;imam An-Nawawi explique que la sincérité purifie le cœur et le rend plus réceptif aux inspirations divines, y compris durant le sommeil."
                />

                <HadithBlock
                  number={3}
                  title="Le rêve du croyant est une partie de la prophétie"
                  narrator="Abu Hurayra"
                  arabic="الرُّؤْيَا الصَّالِحَةُ جُزْءٌ مِنْ سِتَّةٍ وَأَرْبَعِينَ جُزْءًا مِنَ النُّبُوَّةِ"
                  translation="Le bon rêve est une des quarante-six parties de la prophétie."
                  source="Sahih Al-Bukhari, n°6989 — Sahih Muslim, n°2263"
                  grade="sahih"
                  explanation="Ce hadith élève le statut du rêve véridique en le rattachant à la prophétie. Les savants ont longuement discuté du nombre quarante-six. Ibn Hajar al-Asqalani rapporte que la période de révélation du Prophète ﷺ dura vingt-trois ans, et que les six premiers mois furent marqués par des rêves véridiques avant la révélation du Coran. Six mois rapportés à vingt-trois ans donnent un rapport de un sur quarante-six. Cela ne signifie pas que le rêveur devient prophète, mais que le rêve véridique est un vestige de la lumière prophétique après la fin de la prophétie."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Rêve véridique       */}
              {/* ============================== */}
              <section id="reve-veridique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le rêve véridique et son lien avec la prophétie
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rêve véridique (<em>ru&apos;ya saliha</em>) occupe une place particulière dans la tradition islamique. Le Prophète ﷺ lui-même a commencé à recevoir la révélation par des rêves véridiques, et il a enseigné que cette forme de communication divine subsisterait après la fin de la prophétie. Les hadiths suivants éclairent cette dimension spirituelle.
                </p>

                <HadithBlock
                  number={4}
                  title="Il ne restera que les bonnes nouvelles"
                  narrator="Abu Hurayra"
                  arabic="لَمْ يَبْقَ مِنَ النُّبُوَّةِ إِلَّا الْمُبَشِّرَاتُ، قَالُوا: وَمَا الْمُبَشِّرَاتُ؟ قَالَ: الرُّؤْيَا الصَّالِحَةُ"
                  translation="Il ne reste de la prophétie que les bonnes nouvelles (al-mubashshirat). Ils demandèrent : que sont les bonnes nouvelles ? Il répondit : le bon rêve."
                  source="Sahih Al-Bukhari, n°6990"
                  grade="sahih"
                  explanation="Ce hadith est essentiel pour comprendre la place du rêve après la fin de la prophétie. Le Prophète ﷺ affirme que le seul vestige de la prophétie qui subsistera après lui est le rêve véridique, qu&apos;il nomme al-mubashshirat (les annonciatrices de bonnes nouvelles). Les savants expliquent que cela signifie que le croyant peut recevoir des inspirations divines par le rêve, sans que cela constitue une révélation au sens propre. C&apos;est une forme de guidage personnel, non une source de législation."
                />

                <HadithBlock
                  number={5}
                  title="Le début de la révélation par le rêve"
                  narrator="Aisha"
                  arabic="أَوَّلُ مَا بُدِئَ بِهِ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ مِنَ الْوَحْيِ الرُّؤْيَا الصَّادِقَةُ، فَكَانَ لَا يَرَى رُؤْيَا إِلَّا جَاءَتْ مِثْلَ فَلَقِ الصُّبْحِ"
                  translation="La première forme de révélation qui fut donnée au Messager d&apos;Allah ﷺ fut le rêve véridique. Il ne voyait aucun rêve sans qu&apos;il ne se réalise comme la clarté de l&apos;aube."
                  source="Sahih Al-Bukhari, n°3 — Sahih Muslim, n°160"
                  grade="sahih"
                  explanation="Ce hadith, rapporté par Aisha, décrit la phase initiale de la révélation. Avant la descente du Coran par l&apos;ange Jibril dans la grotte de Hira, le Prophète ﷺ recevait des rêves véridiques qui se réalisaient avec une clarté absolue, comparée à la lumière de l&apos;aube. Cette phase dura environ six mois. Ce hadith montre que le rêve véridique était le premier canal de communication entre Allah et Son Prophète, ce qui explique le statut élevé accordé aux rêves dans la tradition islamique."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez les hadiths, la aqida et la spiritualité islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Attitude bon rêve    */}
              {/* ============================== */}
              <section id="attitude-bon-reve" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Attitude face au bon rêve selon la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné des comportements précis à adopter lorsque le croyant fait un bon rêve. Ces recommandations protègent la valeur spirituelle du rêve et évitent qu&apos;il ne soit altéré par une interprétation inadéquate ou par l&apos;envie d&apos;autrui.
                </p>

                <HadithBlock
                  number={6}
                  title="Ne raconter le bon rêve qu&apos;à celui qu&apos;on aime"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="إِذَا رَأَى أَحَدُكُمُ الرُّؤْيَا يُحِبُّهَا فَإِنَّمَا هِيَ مِنَ اللَّهِ فَلْيَحْمَدِ اللَّهَ عَلَيْهَا وَلْيُحَدِّثْ بِهَا، وَإِذَا رَأَى غَيْرَ ذَلِكَ مِمَّا يَكْرَهُ فَإِنَّمَا هِيَ مِنَ الشَّيْطَانِ فَلْيَسْتَعِذْ مِنْ شَرِّهَا وَلَا يَذْكُرْهَا لِأَحَدٍ فَإِنَّهَا لَا تَضُرُّهُ"
                  translation="Si l&apos;un de vous voit un rêve qu&apos;il aime, c&apos;est de la part d&apos;Allah ; qu&apos;il en loue Allah et qu&apos;il le raconte. Et s&apos;il voit autre chose qu&apos;il déteste, c&apos;est de la part de Shaytan ; qu&apos;il cherche refuge contre son mal et ne le mentionne à personne, car il ne lui nuira pas."
                  source="Sahih Al-Bukhari, n°6985"
                  grade="sahih"
                  explanation="Ce hadith résume l&apos;attitude complète du croyant face aux deux types de rêves significatifs. Pour le bon rêve : louer Allah et le partager avec discernement. Pour le mauvais rêve : se réfugier auprès d&apos;Allah et garder le silence. La promesse finale — &laquo; il ne lui nuira pas &raquo; — est une garantie prophétique que le cauchemar n&apos;a aucun pouvoir sur celui qui suit cette sunna. Les savants soulignent que le partage du bon rêve doit se faire uniquement avec une personne bienveillante et savante."
                />

                <HadithBlock
                  number={7}
                  title="Le rêve est suspendu tant qu&apos;il n&apos;est pas interprété"
                  narrator="Abu Razin al-&apos;Uqayli"
                  arabic="الرُّؤْيَا عَلَى رِجْلِ طَائِرٍ مَا لَمْ تُعَبَّرْ فَإِذَا عُبِّرَتْ وَقَعَتْ"
                  translation="Le rêve est suspendu à la patte d&apos;un oiseau tant qu&apos;il n&apos;est pas interprété ; dès qu&apos;il est interprété, il se réalise."
                  source="Sunan Abu Dawud, n°5020"
                  grade="hasan"
                  explanation="Ce hadith utilise une métaphore saisissante : le rêve est comme un oiseau prêt à s&apos;envoler dans une direction ou une autre selon l&apos;interprétation qui lui est donnée. Cela explique pourquoi le Prophète ﷺ a recommandé de ne raconter son rêve qu&apos;à une personne savante et bienveillante. Une interprétation erronée ou malveillante pourrait orienter la réalisation du rêve dans un sens défavorable. Les savants en déduisent que le choix de l&apos;interprète est aussi important que le rêve lui-même."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Attitude mauvais rêve */}
              {/* ============================== */}
              <section id="attitude-mauvais-reve" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Attitude face au mauvais rêve et au cauchemar
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a donné des instructions précises pour protéger le croyant contre les effets néfastes des cauchemars. Ces gestes sont à la fois des actes d&apos;adoration et des moyens de protection spirituelle contre les ruses de Shaytan.
                </p>

                <HadithBlock
                  number={8}
                  title="Cracher à gauche et chercher refuge auprès d&apos;Allah"
                  narrator="Jabir ibn &apos;Abd Allah"
                  arabic="إِذَا رَأَى أَحَدُكُمُ الرُّؤْيَا يَكْرَهُهَا فَلْيَبْصُقْ عَنْ يَسَارِهِ ثَلَاثًا وَلْيَسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ ثَلَاثًا وَلْيَتَحَوَّلْ عَنْ جَنْبِهِ الَّذِي كَانَ عَلَيْهِ"
                  translation="Si l&apos;un de vous voit un rêve qu&apos;il déteste, qu&apos;il crache légèrement trois fois à sa gauche, qu&apos;il cherche refuge auprès d&apos;Allah contre Shaytan trois fois, et qu&apos;il change de côté."
                  source="Sahih Muslim, n°2262"
                  grade="sahih"
                  explanation="Ce hadith détaille les trois gestes à accomplir après un cauchemar. Le crachat léger (nafth) à gauche symbolise le rejet du mal. La demande de protection auprès d&apos;Allah est le recours du croyant contre toute nuisance de Shaytan. Le changement de côté marque une rupture physique avec l&apos;état dans lequel le cauchemar est survenu. Ces gestes sont simples, accessibles à tous et doivent être enseignés aux enfants dès leur jeune âge."
                />

                <HadithBlock
                  number={9}
                  title="Celui qui voit en rêve ce qu&apos;il déteste"
                  narrator="Abu Qatada"
                  arabic="الرُّؤْيَا الصَّالِحَةُ مِنَ اللَّهِ وَالْحُلْمُ مِنَ الشَّيْطَانِ، فَإِذَا حَلَمَ أَحَدُكُمْ حُلْمًا يَخَافُهُ فَلْيَبْصُقْ عَنْ يَسَارِهِ وَلْيَتَعَوَّذْ بِاللَّهِ مِنْ شَرِّهَا فَإِنَّهَا لَا تَضُرُّهُ"
                  translation="Le bon rêve vient d&apos;Allah et le mauvais rêve (hulm) vient de Shaytan. Si l&apos;un de vous fait un rêve qui lui fait peur, qu&apos;il crache à sa gauche et qu&apos;il cherche refuge auprès d&apos;Allah contre son mal, car il ne lui nuira pas."
                  source="Sahih Al-Bukhari, n°3292 — Sahih Muslim, n°2261"
                  grade="sahih"
                  explanation="Ce hadith confirme la distinction terminologique entre ru&apos;ya (vision divine) et hulm (cauchemar satanique). La garantie prophétique — &laquo; il ne lui nuira pas &raquo; — est répétée dans plusieurs hadiths, ce qui souligne son importance. Le croyant qui applique cette sunna est protégé. Les savants précisent que cette protection est conditionnée par la foi et la confiance en la parole du Prophète ﷺ. L&apos;angoisse persistante après un cauchemar est souvent le signe que la personne n&apos;a pas appliqué ces gestes prophétiques."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Rêves du Prophète    */}
              {/* ============================== */}
              <section id="reves-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les rêves du Prophète ﷺ et l&apos;exemple des Compagnons
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ voyait des rêves véridiques et les partageait parfois avec ses Compagnons. Il les interrogeait également sur leurs rêves après la prière du Fajr. Ces échanges montrent que le rêve véridique était une réalité vivante dans la communauté prophétique.
                </p>

                <HadithBlock
                  number={10}
                  title="Le Prophète ﷺ interrogeait ses Compagnons sur leurs rêves"
                  narrator="Samurah ibn Jundub"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا صَلَّى الصُّبْحَ أَقْبَلَ عَلَيْهِمْ بِوَجْهِهِ فَقَالَ: هَلْ رَأَى أَحَدٌ مِنْكُمُ الْبَارِحَةَ رُؤْيَا"
                  translation="Le Prophète ﷺ, après avoir accompli la prière du Fajr, se tournait vers ses Compagnons et demandait : l&apos;un de vous a-t-il vu un rêve cette nuit ?"
                  source="Sahih Al-Bukhari, n°7047"
                  grade="sahih"
                  explanation="Ce hadith révèle une pratique régulière du Prophète ﷺ : après la prière de l&apos;aube, il interrogeait ses Compagnons sur leurs rêves de la nuit. Cela montre l&apos;importance que le Prophète ﷺ accordait aux rêves véridiques comme source d&apos;information et de guidance pour la communauté. Les savants y voient aussi une preuve que le moment le plus propice pour partager un rêve est le matin, et que l&apos;interprétation doit être confiée à une personne savante."
                />

                <HadithBlock
                  number={11}
                  title="L&apos;interprétation d&apos;Abu Bakr en présence du Prophète ﷺ"
                  narrator="Ibn &apos;Abbas"
                  arabic="جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: إِنِّي رَأَيْتُ اللَّيْلَةَ فِي الْمَنَامِ ظُلَّةً تَنْطِفُ السَّمْنَ وَالْعَسَلَ... فَقَالَ أَبُو بَكْرٍ: دَعْنِي أَعْبُرْهَا، فَقَالَ: اعْبُرْهَا، فَعَبَرَهَا أَبُو بَكْرٍ، فَقَالَ النَّبِيُّ: أَصَبْتَ بَعْضًا وَأَخْطَأْتَ بَعْضًا"
                  translation="Un homme vint au Prophète ﷺ et dit : j&apos;ai vu cette nuit en rêve un nuage d&apos;où coulaient du beurre et du miel... Abu Bakr dit : laisse-moi l&apos;interpréter. Le Prophète dit : interprète-le. Abu Bakr l&apos;interpréta, puis le Prophète dit : tu as eu juste sur certains points et tu t&apos;es trompé sur d&apos;autres."
                  source="Sahih Al-Bukhari, n°7046 — Sahih Muslim, n°2269"
                  grade="sahih"
                  explanation="Ce hadith montre qu&apos;Abu Bakr as-Siddiq était reconnu pour sa capacité à interpréter les rêves, au point de demander au Prophète ﷺ la permission de le faire. La réponse du Prophète — &laquo; tu as eu juste sur certains points et tu t&apos;es trompé sur d&apos;autres &raquo; — enseigne que l&apos;interprétation des rêves est un savoir imparfait, même chez les meilleurs Compagnons. Seuls les prophètes reçoivent l&apos;interprétation infaillible. Cela invite à l&apos;humilité dans ce domaine."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Interprétation       */}
              {/* ============================== */}
              <section id="interpretation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interprétation des rêves et la prudence du croyant
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation des rêves (<em>ta&apos;bir ar-ru&apos;ya</em>) est une science reconnue en islam, mais elle exige prudence et compétence. Le Prophète ﷺ a posé des principes clairs pour encadrer cette pratique et protéger les croyants contre les interprétations fantaisistes ou nuisibles.
                </p>

                <HadithBlock
                  number={12}
                  title="Ne raconter son rêve qu&apos;à un savant ou un conseiller sincère"
                  narrator="Abu Hurayra"
                  arabic="لَا تَقُصُّ الرُّؤْيَا إِلَّا عَلَى عَالِمٍ أَوْ نَاصِحٍ"
                  translation="Ne raconte ton rêve qu&apos;à un savant ou à un conseiller sincère."
                  source="Jami&apos; at-Tirmidhi, n°2280"
                  grade="hasan"
                  explanation="Ce hadith restreint le cercle des personnes à qui l&apos;on peut confier ses rêves. Le savant (&apos;alim) possède la connaissance des symboles et des principes d&apos;interprétation. Le conseiller sincère (nasih) est celui qui veut le bien du rêveur et ne sera pas tenté par la jalousie ou la malveillance. Les savants en déduisent que raconter ses rêves à n&apos;importe qui — y compris sur les réseaux sociaux — est contraire à la Sunna et peut avoir des conséquences néfastes, conformément au hadith sur le rêve suspendu à la patte de l&apos;oiseau."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;exemple du prophète Yusuf &apos;alayhi salam est souvent cité dans le Coran au sujet de l&apos;interprétation des rêves. Son père Ya&apos;qub lui dit de ne pas raconter son rêve à ses frères, de peur que la jalousie ne les pousse à lui nuire. Ce principe coranique confirme les hadiths sur la prudence dans le partage des rêves. Pour approfondir la question de la protection spirituelle, consultez notre article sur les{" "}
                  <Link href="/hadith-sorcellerie-mauvais-oeil-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la sorcellerie et le mauvais œil
                  </Link>.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;L&apos;interprétation des rêves est une science véritable, accordée par Allah à qui Il veut parmi Ses serviteurs. Elle repose sur le Coran, la Sunna et la langue arabe. L&apos;interprète doit être pieux, savant et bienveillant envers celui qui lui confie son rêve.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qutayba, <em>Ta&apos;bir ar-Ru&apos;ya</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le rêve véridique est une miséricorde d&apos;Allah envers Ses serviteurs. Il ne faut ni le négliger ni en faire une obsession. Le croyant doit se réjouir du bon rêve, se protéger du mauvais et ne pas bâtir sa vie sur des rêves, car la guidance principale demeure le Coran et la Sunna.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Quant à la prière de l&apos;istikharah, sa réponse ne dépend pas d&apos;un rêve. Celui qui fait l&apos;istikharah doit ensuite agir selon ce qui lui est facilité. S&apos;il voit un rêve, tant mieux, mais s&apos;il n&apos;en voit pas, qu&apos;il observe les signes concrets dans sa vie.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Cheikh Ibn Baz, <em>Fatawa Nur &apos;ala ad-Darb</em>
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes sur l&apos;attitude du musulman face aux rêves :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Distinguer les trois types de rêves
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Tout rêve n&apos;est pas un signe divin. Le croyant doit apprendre à différencier le rêve véridique, le rêve issu de l&apos;âme et le cauchemar satanique avant d&apos;accorder une importance à un songe.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Louer Allah pour le bon rêve
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le bon rêve est une bonne nouvelle d&apos;Allah. Le croyant doit en remercier Allah et ne le partager qu&apos;avec une personne de confiance, savante et bienveillante.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Appliquer la sunna face au cauchemar
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Cracher légèrement à gauche trois fois, chercher refuge auprès d&apos;Allah contre Shaytan, changer de côté et ne raconter le rêve à personne. Ces gestes garantissent la protection prophétique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Cultiver la véracité pour avoir des rêves véridiques
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le lien entre la sincérité du croyant et la véracité de ses rêves est établi par le Prophète ﷺ. Plus on est honnête dans sa parole et sa pratique, plus on est susceptible de recevoir des visions véridiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas bâtir sa vie sur les rêves
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les rêves ne sont pas une source de législation. La guidance du croyant repose sur le Coran et la Sunna. Le rêve peut être une bonne nouvelle ou un avertissement, mais les décisions de vie doivent s&apos;appuyer sur les sources authentiques de l&apos;islam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Choisir avec soin l&apos;interprète de ses rêves
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le rêve est suspendu tant qu&apos;il n&apos;est pas interprété. Confier son rêve à un savant pieux et sincère est une sunna. Éviter de partager ses rêves sur les réseaux sociaux ou avec des personnes non qualifiées.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <SocialBanner />

              <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur les rêves dans leur langue originale et approfondissez votre connaissance de la Sunna."
                  preselect="arabe"
                />
              </div>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <div className="mt-12 space-y-4">
                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous nos hadiths par thème"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les rêves en islam : signification et interprétation"
                  description="Tout savoir sur la place des rêves dans la spiritualité islamique, du Coran à la tradition prophétique."
                  href="/reves-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la sorcellerie et le mauvais œil en islam"
                  description="Les enseignements prophétiques sur la protection contre la sorcellerie, le mauvais œil et les djinns."
                  href="/hadith-sorcellerie-mauvais-oeil-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
