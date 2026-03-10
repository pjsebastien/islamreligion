import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur la circoncision en islam : guide complet des enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur la circoncision en islam : fitra, sunna d&apos;Ibrahim, avis des savants, bienfaits et pratique. Texte arabe, traduction et explication détaillée.",
  openGraph: {
    title:
      "Hadiths sur la circoncision en islam : guide complet des enseignements prophétiques",
    description:
      "Les hadiths authentiques sur la circoncision en islam : fitra, sunna d&apos;Ibrahim, consensus des savants et enseignements prophétiques sur cette pratique.",
    url: "https://www.islamreligion.fr/hadith-circoncision-islam",
    images: [
      {
        url: "/images/famille-musulmane-lecture-coran-islam-education.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-circoncision-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la fitra" },
  { id: "fitra-cinq-actes", label: "Les cinq actes de la fitra" },
  { id: "sunna-ibrahim", label: "La circoncision, sunna d&apos;Ibrahim" },
  { id: "avis-savants", label: "Avis des savants : wajib ou sunna ?" },
  { id: "age-pratique", label: "L&apos;âge et la pratique de la circoncision" },
  { id: "bienfaits", label: "Bienfaits et sagesses de la circoncision" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "La circoncision est-elle obligatoire en islam ?",
    answer:
      "Les savants divergent sur le statut juridique de la circoncision. L\u2019imam Ash-Shafi\u2019i et l\u2019imam Ahmad ibn Hanbal la considèrent comme obligatoire (wajib), tandis que l\u2019imam Abu Hanifa et l\u2019imam Malik la considèrent comme une sunna fortement recommandée (sunna mu\u2019akkada). Tous s\u2019accordent cependant sur le fait qu\u2019elle fait partie de la fitra et que son abandon est blâmable.",
  },
  {
    question:
      "Quel est le hadith principal sur la circoncision en islam ?",
    answer:
      "Le hadith le plus cité est celui rapporté par Abu Hurayra dans Sahih Al-Bukhari (n\u00b06298) et Sahih Muslim (n\u00b0257) : \u00ab Cinq choses font partie de la fitra : la circoncision, le rasage du pubis, l\u2019épilation des aisselles, la taille des ongles et la taille de la moustache. \u00bb Ce hadith place la circoncision en tête des actes de la fitra.",
  },
  {
    question:
      "À quel âge doit-on circoncire un enfant en islam ?",
    answer:
      "Il n\u2019y a pas d\u2019âge fixé de manière absolue dans les hadiths. Cependant, le Prophète Ibrahim a été circoncis à l\u2019âge de quatre-vingts ans selon un hadith de Bukhari. Pour les enfants, les savants recommandent généralement de le faire au septième jour de la naissance ou avant la puberté. L\u2019imam An-Nawawi mentionne que le septième jour est préférable.",
  },
  {
    question:
      "Quelle est la différence entre khitan et fitra ?",
    answer:
      "Le khitan désigne spécifiquement la circoncision, tandis que la fitra est un concept plus large englobant l\u2019ensemble des pratiques naturelles de propreté et d\u2019hygiène prescrites par l\u2019islam. La circoncision fait partie de la fitra, au même titre que la taille des ongles, le rasage du pubis et l\u2019épilation des aisselles. La fitra est la nature saine sur laquelle Allah a créé l\u2019être humain.",
  },
  {
    question:
      "Le Prophète Muhammad a-t-il parlé des bienfaits de la circoncision ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a présenté la circoncision comme un acte de fitra et une sunna d\u2019Ibrahim. Les savants musulmans ont déduit de ces hadiths des bienfaits liés à la propreté rituelle, à l\u2019hygiène corporelle et au suivi de la voie des prophètes. La médecine moderne a confirmé plusieurs bienfaits sanitaires, ce qui renforce la sagesse de cette prescription prophétique.",
  },
  {
    question:
      "La circoncision existait-elle avant l&apos;islam ?",
    answer:
      "Oui, la circoncision remonte au prophète Ibrahim (\u2018alayhi salam), qui a été le premier à la pratiquer selon les hadiths authentiques. Elle était pratiquée par les peuples sémitiques et faisait partie de la tradition abrahamique bien avant la révélation du Coran. L\u2019islam l\u2019a confirmée et intégrée dans les pratiques de la fitra.",
  },
  {
    question:
      "Un homme non circoncis peut-il se convertir à l&apos;islam ?",
    answer:
      "Oui, absolument. La chahada (attestation de foi) est la seule condition pour entrer en islam. La circoncision n\u2019est pas une condition de validité de la conversion. Cependant, les savants recommandent au converti de se faire circoncire après sa conversion, sauf si cela présente un danger médical. L\u2019imam Ahmad a dit que l\u2019islam est plus facile que cela, et que la santé du converti prime.",
  },
  {
    question:
      "Quels savants ont commenté les hadiths sur la circoncision ?",
    answer:
      "Les principaux commentateurs incluent l\u2019imam An-Nawawi dans son Sharh Sahih Muslim, Ibn Hajar al-Asqalani dans Fath al-Bari, Ibn Qudama dans Al-Mughni et Ibn al-Qayyim dans Tuhfat al-Mawdud. Chacun a détaillé les avis juridiques des quatre écoles sur le statut obligatoire ou recommandé de la circoncision, ainsi que ses conditions et son moment approprié.",
  },
];

export default function HadithCirconcisionIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-circoncision-islam/#article",
        headline:
          "Hadiths sur la circoncision en islam : guide complet des enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur la circoncision en islam : fitra, sunna d&apos;Ibrahim, avis des savants et enseignements prophétiques.",
        image: "/images/famille-musulmane-lecture-coran-islam-education.jpg",
        datePublished: "2026-05-03",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-circoncision-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-circoncision-islam/#breadcrumb",
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
            name: "Hadiths sur la circoncision",
            item: "https://www.islamreligion.fr/hadith-circoncision-islam",
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
          title="Hadiths sur la circoncision en islam"
          subtitle="Les enseignements prophétiques sur la circoncision (khitan) : fitra, sunna d&apos;Ibrahim, avis des savants et sagesses de cette pratique selon la Sunna authentique."
          imageSrc="/images/famille-musulmane-lecture-coran-islam-education.jpg"
          imageAlt="Hadiths sur la circoncision en islam, enseignements prophétiques sur la fitra"
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
                  Hadiths sur la circoncision
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
                    La circoncision (khitan) fait partie de la fitra, la nature saine sur laquelle Allah a créé l&apos;être humain, et elle est citée en premier parmi les cinq actes de la fitra.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Elle est la sunna du prophète Ibrahim (&apos;alayhi salam), que tous les prophètes après lui ont suivie et que l&apos;islam a confirmée.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les savants divergent entre obligation (wajib) selon les shafi&apos;ites et hanbalites, et sunna fortement recommandée selon les hanafites et malikites.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La médecine moderne a confirmé les bienfaits sanitaires de la circoncision, rejoignant la sagesse de la prescription prophétique.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la fitra et de la voie d&apos;Ibrahim
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur la circoncision, il est essentiel de comprendre le cadre coranique dans lequel cette pratique s&apos;inscrit. Le Coran mentionne la fitra comme la nature originelle de l&apos;être humain et ordonne de suivre la voie du prophète Ibrahim (&apos;alayhi salam), qui est le père de la circoncision dans la tradition abrahamique.
                </p>

                <HadithCard
                  arabic="فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا لَا تَبْدِيلَ لِخَلْقِ اللَّهِ ذَٰلِكَ الدِّينُ الْقَيِّمُ"
                  text="Dirige ton visage vers la religion en pur monothéiste. Telle est la fitra d&apos;Allah selon laquelle Il a créé les gens. Pas de changement dans la création d&apos;Allah. Voilà la religion droite."
                  source="Coran, sourate Ar-Rum (30:30)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondamental établit le concept de fitra : la nature originelle et saine sur laquelle Allah a créé l&apos;humanité. Les savants expliquent que la circoncision fait partie de cette fitra, car elle correspond à un retour vers cette nature pure. Le Prophète ﷺ a précisé dans ses hadiths quels actes concrets composent cette fitra.
                </p>

                <HadithCard
                  arabic="ثُمَّ أَوْحَيْنَا إِلَيْكَ أَنِ اتَّبِعْ مِلَّةَ إِبْرَاهِيمَ حَنِيفًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ"
                  text="Puis Nous t&apos;avons révélé : suis la religion d&apos;Ibrahim, le pur monothéiste. Et il n&apos;était pas du nombre des associateurs."
                  source="Coran, sourate An-Nahl (16:123)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah ordonne au Prophète Muhammad ﷺ de suivre la voie d&apos;Ibrahim dans sa totalité. Les savants du tafsir expliquent que la <em>milla</em> d&apos;Ibrahim englobe l&apos;ensemble de ses pratiques, y compris la circoncision, qui est l&apos;une des épreuves par lesquelles Allah l&apos;a mis à l&apos;épreuve. C&apos;est sur cette base coranique que les hadiths détaillent la pratique du khitan.
                </p>

                <HadithCard
                  arabic="وَإِذِ ابْتَلَىٰ إِبْرَاهِيمَ رَبُّهُ بِكَلِمَاتٍ فَأَتَمَّهُنَّ"
                  text="Et lorsque Ibrahim fut éprouvé par son Seigneur par des paroles (des commandements), il les accomplit."
                  source="Coran, sourate Al-Baqara (2:124)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon Ibn &apos;Abbas et plusieurs exégètes, ces &laquo;&nbsp;paroles&nbsp;&raquo; (kalimaat) par lesquelles Ibrahim fut éprouvé incluent les pratiques de la fitra, dont la circoncision. Ibrahim les a toutes accomplies avec excellence, ce qui lui a valu le titre de &laquo;&nbsp;khalil Allah&nbsp;&raquo; (l&apos;ami intime d&apos;Allah). Les hadiths viennent préciser le détail de ces pratiques.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Les cinq actes       */}
              {/* ============================== */}
              <section id="fitra-cinq-actes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les cinq actes de la fitra selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a défini avec précision les actes qui composent la fitra. Ces pratiques sont des marqueurs de l&apos;identité naturelle du musulman et de son attachement à la voie prophétique. La circoncision y occupe la première place, ce qui souligne son importance particulière.
                </p>

                <HadithBlock
                  number={1}
                  title="Les cinq actes de la fitra"
                  narrator="Abu Hurayra"
                  arabic="الْفِطْرَةُ خَمْسٌ: الْخِتَانُ، وَالِاسْتِحْدَادُ، وَنَتْفُ الْإِبِطِ، وَتَقْلِيمُ الْأَظْفَارِ، وَقَصُّ الشَّارِبِ"
                  translation="Cinq choses font partie de la fitra : la circoncision, le rasage du pubis, l&apos;épilation des aisselles, la taille des ongles et la taille de la moustache."
                  source="Sahih Al-Bukhari, n°6298 — Sahih Muslim, n°257"
                  grade="sahih"
                  explanation="Ce hadith est la référence principale sur les actes de la fitra. La circoncision (al-khitan) est mentionnée en premier, ce que les savants interprètent comme un signe de sa prééminence parmi ces cinq pratiques. Le terme fitra désigne ici la nature originelle et saine, les pratiques qui correspondent à la pureté innée de l&apos;être humain. L&apos;imam An-Nawawi précise que citer la circoncision en tête indique qu&apos;elle est la plus importante de ces cinq pratiques."
                />

                <HadithBlock
                  number={2}
                  title="Dix actes font partie de la fitra"
                  narrator="Aisha"
                  arabic="عَشْرٌ مِنَ الْفِطْرَةِ: قَصُّ الشَّارِبِ، وَإِعْفَاءُ اللِّحْيَةِ، وَالسِّوَاكُ، وَاسْتِنْشَاقُ الْمَاءِ، وَقَصُّ الْأَظْفَارِ، وَغَسْلُ الْبَرَاجِمِ، وَنَتْفُ الْإِبِطِ، وَحَلْقُ الْعَانَةِ، وَانْتِقَاصُ الْمَاءِ"
                  translation="Dix actes font partie de la fitra : tailler la moustache, laisser pousser la barbe, le siwak, l&apos;aspiration de l&apos;eau par le nez, la taille des ongles, le lavage des articulations des doigts, l&apos;épilation des aisselles, le rasage du pubis et l&apos;istinja (nettoyage à l&apos;eau après les besoins)."
                  source="Sahih Muslim, n°261"
                  grade="sahih"
                  explanation="Ce hadith élargit la liste des actes de la fitra à dix pratiques. Bien que la circoncision n&apos;y soit pas explicitement nommée, les savants comme l&apos;imam An-Nawawi expliquent que Mus&apos;ab ibn Shayba, le rapporteur, a dit &laquo;&nbsp;j&apos;ai oublié la dixième, sauf si c&apos;est le rinçage de la bouche&nbsp;&raquo;. Certains savants considèrent que la circoncision est cette dixième pratique oubliée. Ce hadith montre que la fitra englobe un ensemble cohérent de pratiques d&apos;hygiène et de purification."
                />

                <HadithBlock
                  number={3}
                  title="Ibrahim a été le premier à se circoncire"
                  narrator="Abu Hurayra"
                  arabic="اخْتَتَنَ إِبْرَاهِيمُ عَلَيْهِ السَّلَامُ وَهُوَ ابْنُ ثَمَانِينَ سَنَةً بِالْقَدُومِ"
                  translation="Ibrahim (&apos;alayhi salam) s&apos;est circoncis à l&apos;âge de quatre-vingts ans avec la qadum (hache)."
                  source="Sahih Al-Bukhari, n°3356 — Sahih Muslim, n°2370"
                  grade="sahih"
                  explanation="Ce hadith rapporte un fait historique majeur : Ibrahim fut le premier prophète à pratiquer la circoncision, et il le fit à un âge avancé. Le terme &laquo;&nbsp;qadum&nbsp;&raquo; fait référence à un instrument tranchant (hache ou herminette). Son obéissance à cet âge illustre sa soumission totale à Allah. Les savants y voient la preuve que la circoncision est obligatoire quel que soit l&apos;âge, car Ibrahim ne l&apos;a pas reportée malgré la difficulté. Ce hadith est l&apos;un des arguments centraux des savants qui considèrent le khitan comme wajib."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths établissent le fondement de la circoncision dans la fitra et la tradition prophétique. Pour approfondir les pratiques liées à l&apos;apparence et à l&apos;hygiène en islam, consultez notre article sur les{" "}
                  <Link href="/hadith-barbe-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la barbe en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Sunna d&apos;Ibrahim */}
              {/* ============================== */}
              <section id="sunna-ibrahim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La circoncision, sunna du prophète Ibrahim
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La circoncision est indissociable du prophète Ibrahim (&apos;alayhi salam). Le Prophète Muhammad ﷺ a rappelé à plusieurs reprises ce lien, inscrivant la pratique du khitan dans la continuité de la tradition abrahamique. Suivre Ibrahim dans cette pratique, c&apos;est suivre la voie de tous les prophètes.
                </p>

                <HadithBlock
                  number={4}
                  title="Tout enfant naît sur la fitra"
                  narrator="Abu Hurayra"
                  arabic="مَا مِنْ مَوْلُودٍ إِلَّا يُولَدُ عَلَى الْفِطْرَةِ، فَأَبَوَاهُ يُهَوِّدَانِهِ أَوْ يُنَصِّرَانِهِ أَوْ يُمَجِّسَانِهِ"
                  translation="Tout enfant naît sur la fitra. Ce sont ses parents qui en font un juif, un chrétien ou un zoroastrien."
                  source="Sahih Al-Bukhari, n°1358 — Sahih Muslim, n°2658"
                  grade="sahih"
                  explanation="Ce hadith célèbre établit que la fitra est l&apos;état naturel de tout être humain à la naissance. Les savants expliquent que la circoncision, en tant qu&apos;acte de la fitra, est un retour à cette nature originelle. L&apos;enfant naît avec une prédisposition à la pureté et au monothéisme. Pratiquer la circoncision, c&apos;est concrétiser cette fitra dans le corps, tout comme la chahada la concrétise dans le c&oelig;ur. Ibn al-Qayyim développe longuement ce lien entre fitra spirituelle et fitra corporelle dans son Tuhfat al-Mawdud."
                />

                <HadithBlock
                  number={5}
                  title="Ibrahim, ami intime d&apos;Allah, s&apos;est circoncis"
                  narrator="Abu Hurayra"
                  arabic="أَوَّلُ مَنِ اخْتَتَنَ إِبْرَاهِيمُ"
                  translation="Le premier à s&apos;être circoncis est Ibrahim."
                  source="Sahih Al-Bukhari, n°6298"
                  grade="sahih"
                  explanation="Ce hadith, concis mais fondamental, attribue l&apos;origine de la circoncision au prophète Ibrahim. L&apos;imam Ibn Hajar al-Asqalani explique dans le Fath al-Bari que cette attribution confère à la circoncision un statut éminent : elle n&apos;est pas une simple coutume, mais un acte initié par le khalil Allah (l&apos;ami intime d&apos;Allah). Tous les prophètes après Ibrahim ont maintenu cette pratique, et l&apos;islam l&apos;a confirmée comme partie intégrante de la fitra."
                />

                <HadithBlock
                  number={6}
                  title="La parole d&apos;Allah à Ibrahim"
                  narrator="Ibn &apos;Abbas"
                  arabic="وَإِذِ ابْتَلَى إِبْرَاهِيمَ رَبُّهُ بِكَلِمَاتٍ فَأَتَمَّهُنَّ قَالَ: ابْتَلَاهُ اللَّهُ بِالطَّهَارَةِ: خَمْسٌ فِي الرَّأْسِ وَخَمْسٌ فِي الْجَسَدِ، فِي الرَّأْسِ: قَصُّ الشَّارِبِ وَالْمَضْمَضَةُ وَالِاسْتِنْشَاقُ وَالسِّوَاكُ وَفَرْقُ الشَّعْرِ، وَفِي الْجَسَدِ: تَقْلِيمُ الْأَظْفَارِ وَحَلْقُ الْعَانَةِ وَالْخِتَانُ وَنَتْفُ الْإِبِطِ وَغَسْلُ أَثَرِ الْغَائِطِ وَالْبَوْلِ بِالْمَاءِ"
                  translation="Concernant le verset &laquo;&nbsp;lorsque Ibrahim fut éprouvé par son Seigneur par des paroles&nbsp;&raquo;, Ibn &apos;Abbas a dit : Allah l&apos;a éprouvé par la purification : cinq dans la tête et cinq dans le corps. Dans la tête : tailler la moustache, rincer la bouche, aspirer l&apos;eau par le nez, le siwak et séparer les cheveux. Dans le corps : tailler les ongles, raser le pubis, la circoncision, épiler les aisselles et laver les traces des besoins avec l&apos;eau."
                  source="Rapporté par Al-Bayhaqi dans As-Sunan Al-Kubra"
                  grade="hasan"
                  explanation="Cette exégèse d&apos;Ibn &apos;Abbas précise que les &laquo;&nbsp;paroles&nbsp;&raquo; par lesquelles Allah a éprouvé Ibrahim sont les actes de purification, dont la circoncision. Ce récit lie directement le verset coranique aux pratiques de la fitra. Les savants du tafsir, dont At-Tabari et Al-Qurtubi, citent cette interprétation comme l&apos;une des plus solides. Elle montre que la circoncision est un commandement divin transmis à Ibrahim, puis confirmé par tous les prophètes."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le lien entre Ibrahim et la circoncision est un pilier de la jurisprudence islamique sur ce sujet. Il inscrit le khitan dans une chaîne prophétique ininterrompue, d&apos;Ibrahim à Muhammad ﷺ. Pour en savoir plus sur les pratiques prophétiques liées au corps, consultez notre article sur les{" "}
                  <Link href="/hadith-tattoo-apparence-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le tatouage et l&apos;apparence en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la purification, les actes de la fitra et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Avis des savants     */}
              {/* ============================== */}
              <section id="avis-savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Avis des savants : la circoncision est-elle obligatoire ou recommandée ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question du statut juridique de la circoncision a fait l&apos;objet de débats approfondis entre les savants des quatre écoles de jurisprudence. Deux positions principales se dégagent, chacune s&apos;appuyant sur les mêmes hadiths mais avec des interprétations différentes.
                </p>

                <HadithBlock
                  number={7}
                  title="La circoncision est sunna pour les hommes"
                  narrator="Usaym ibn Kulayb, d&apos;après son père, d&apos;après son grand-père"
                  arabic="الْخِتَانُ سُنَّةٌ لِلرِّجَالِ مَكْرُمَةٌ لِلنِّسَاءِ"
                  translation="La circoncision est une sunna pour les hommes et un honneur pour les femmes."
                  source="Musnad Ahmad, n°20719"
                  grade="hasan"
                  explanation="Ce hadith est au c&oelig;ur du débat juridique. Le terme &laquo;&nbsp;sunna&nbsp;&raquo; est interprété différemment selon les écoles. Les hanafites et les malikites le comprennent comme &laquo;&nbsp;fortement recommandé&nbsp;&raquo;, tandis que les shafi&apos;ites et les hanbalites considèrent que &laquo;&nbsp;sunna&nbsp;&raquo; peut signifier ici &laquo;&nbsp;voie établie&nbsp;&raquo; (comme la sunna d&apos;Ibrahim), ce qui n&apos;exclut pas l&apos;obligation. L&apos;imam Ash-Shafi&apos;i s&apos;appuie sur d&apos;autres arguments, notamment le hadith d&apos;Ibrahim, pour conclure à l&apos;obligation."
                />

                <HadithBlock
                  number={8}
                  title="Ordonne-lui de couper les cheveux de la mécréance et de se circoncire"
                  narrator="Uthayma"
                  arabic="أَلْقِ عَنْكَ شَعْرَ الْكُفْرِ وَاخْتَتِنْ"
                  translation="Débarrasse-toi des cheveux de la mécréance et circoncis-toi."
                  source="Sunan Abu Dawud, n°356"
                  grade="hasan"
                  explanation="Ce hadith rapporte que le Prophète ﷺ a ordonné à un homme qui venait d&apos;embrasser l&apos;islam de se circoncire. L&apos;emploi de l&apos;impératif (&laquo;&nbsp;circoncis-toi&nbsp;&raquo;) est l&apos;un des arguments les plus forts des savants qui considèrent la circoncision comme obligatoire. L&apos;imam Ibn al-Qayyim le cite comme preuve dans son Tuhfat al-Mawdud. Les hanafites répondent que l&apos;impératif peut être compris comme une recommandation forte et non comme une obligation stricte."
                />

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La circoncision est obligatoire (wajib) pour les hommes. C&apos;est l&apos;un des rites de l&apos;islam et des signes distinctifs des musulmans. Celui qui l&apos;abandonne sans excuse valable commet un péché.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Ash-Shafi&apos;i, <em>Al-Umm</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La circoncision est une sunna mu&apos;akkada (fortement recommandée). C&apos;est un signe de l&apos;islam et une pratique d&apos;Ibrahim. L&apos;abandonner volontairement est blâmable, mais ne constitue pas un péché majeur.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Abu Hanifa, rapporté dans <em>Al-Hidaya</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La circoncision est un rite parmi les rites de la religion. Si les habitants d&apos;une ville l&apos;abandonnaient collectivement, l&apos;imam aurait le droit de les y contraindre, car elle fait partie des symboles de l&apos;islam qui ne doivent pas disparaître.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Malik, rapporté par Ibn Qudama dans <em>Al-Mughni</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Malgré la divergence sur le statut juridique précis, les quatre écoles s&apos;accordent sur un point fondamental : la circoncision est une pratique islamique fortement valorisée, liée à la fitra et à la voie d&apos;Ibrahim. Aucun savant n&apos;a jamais dit qu&apos;elle était sans importance ou facultative au sens courant du terme.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Âge et pratique      */}
              {/* ============================== */}
              <section id="age-pratique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;âge et la pratique de la circoncision en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths ne fixent pas un âge précis pour la circoncision. Cependant, plusieurs récits prophétiques et avis de savants permettent de définir les moments recommandés pour cette pratique.
                </p>

                <HadithBlock
                  number={9}
                  title="Le Prophète ﷺ a fait le sacrifice pour Al-Hasan et Al-Husayn"
                  narrator="Jabir ibn &apos;Abdillah"
                  arabic="عَقَّ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَنِ الْحَسَنِ وَالْحُسَيْنِ وَخَتَنَهُمَا لِسَبْعَةِ أَيَّامٍ"
                  translation="Le Messager d&apos;Allah ﷺ a fait le sacrifice de la &apos;aqiqa pour Al-Hasan et Al-Husayn et les a circoncis au septième jour."
                  source="Rapporté par Al-Bayhaqi dans As-Sunan Al-Kubra, n°19816"
                  grade="hasan"
                  explanation="Ce hadith indique que le Prophète ﷺ a circoncis ses petits-fils Al-Hasan et Al-Husayn au septième jour après leur naissance, en même temps que la &apos;aqiqa. L&apos;imam An-Nawawi mentionne que le septième jour est le moment préférable pour la circoncision. Toutefois, ce n&apos;est pas une obligation stricte : les savants autorisent la circoncision à tout âge avant la puberté. L&apos;important est qu&apos;elle soit accomplie avant que l&apos;enfant ne devienne pubère et responsable de ses obligations religieuses."
                />

                <HadithBlock
                  number={10}
                  title="Ibrahim s&apos;est circoncis à quatre-vingts ans"
                  narrator="Abu Hurayra"
                  arabic="اخْتَتَنَ إِبْرَاهِيمُ خَلِيلُ الرَّحْمَنِ بَعْدَ مَا أَتَتْ عَلَيْهِ ثَمَانُونَ سَنَةً وَاخْتَتَنَ بِالْقَدُومِ"
                  translation="Ibrahim, l&apos;ami intime du Tout-Miséricordieux, s&apos;est circoncis après avoir atteint quatre-vingts ans, et il s&apos;est circoncis avec la qadum."
                  source="Sahih Al-Bukhari, n°6298 — Sahih Muslim, n°2370"
                  grade="sahih"
                  explanation="Ce hadith est la preuve que la circoncision n&apos;a pas de limite d&apos;âge maximale. Ibrahim l&apos;a pratiquée à quatre-vingts ans, sans hésitation et sans délai, dès que le commandement lui est parvenu. Les savants en déduisent que le converti adulte doit également se faire circoncire, sauf si un danger médical l&apos;en empêche. L&apos;obéissance d&apos;Ibrahim à cet âge avancé est un modèle de soumission à Allah et une réfutation de tout argument invoquant la difficulté pour s&apos;abstenir."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants résument les moments de la circoncision en trois catégories : le septième jour (moment préférable selon certains), l&apos;enfance (moment le plus courant et le plus facile pour l&apos;enfant), et avant la puberté (moment limite pour accomplir cette pratique). Pour les convertis, elle est recommandée dès que possible après la conversion, en tenant compte de l&apos;état de santé.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Bienfaits            */}
              {/* ============================== */}
              <section id="bienfaits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Bienfaits et sagesses de la circoncision
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La circoncision en islam n&apos;est pas un acte rituel dépourvu de sagesse. Les hadiths et les commentaires des savants révèlent des bienfaits multiples, tant spirituels que physiques. La médecine moderne a d&apos;ailleurs confirmé plusieurs de ces bienfaits.
                </p>

                <HadithBlock
                  number={11}
                  title="La purification est la moitié de la foi"
                  narrator="Abu Malik Al-Ash&apos;ari"
                  arabic="الطُّهُورُ شَطْرُ الْإِيمَانِ"
                  translation="La purification est la moitié de la foi."
                  source="Sahih Muslim, n°223"
                  grade="sahih"
                  explanation="Ce hadith place la purification (at-tuhur) à un niveau considérable : la moitié de la foi. Les savants incluent la circoncision parmi les actes de purification, car elle facilite la propreté rituelle et l&apos;hygiène corporelle. Ibn al-Qayyim explique dans Tuhfat al-Mawdud que la circoncision est un acte de purification du corps qui complète la purification spirituelle de la foi. Elle permet une meilleure ablution et éloigne les impuretés. C&apos;est pourquoi les savants la lient directement au chapitre de la tahara (purification)."
                />

                <HadithBlock
                  number={12}
                  title="Allah aime ceux qui se purifient"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ اللَّهَ طَيِّبٌ يُحِبُّ الطَّيِّبَ، نَظِيفٌ يُحِبُّ النَّظَافَةَ"
                  translation="Allah est bon (pur) et aime la bonté (la pureté). Il est propre et aime la propreté."
                  source="Jami&apos; at-Tirmidhi, n°2799"
                  grade="hasan"
                  explanation="Ce hadith établit un principe général : Allah aime la pureté et la propreté sous toutes leurs formes. La circoncision s&apos;inscrit pleinement dans ce cadre, car elle favorise l&apos;hygiène corporelle et facilite la purification rituelle. Les savants expliquent que chaque acte de la fitra est une manifestation de ce principe divin. Le musulman qui pratique la circoncision agit par amour pour Allah et recherche Sa satisfaction à travers la pureté de son corps."
                />

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La circoncision comporte des bienfaits immenses : la purification du corps, l&apos;embellissement de l&apos;apparence, le suivi de la voie d&apos;Ibrahim et la distinction des musulmans parmi les nations. Elle facilite la propreté rituelle et éloigne les impuretés qui s&apos;accumulent sous le prépuce.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Tuhfat al-Mawdud</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Sur le plan médical, les études contemporaines ont démontré que la circoncision réduit le risque d&apos;infections urinaires, de certaines maladies sexuellement transmissibles et de problèmes dermatologiques locaux. L&apos;Organisation mondiale de la Santé reconnaît la circoncision comme un facteur de protection sanitaire. Ces découvertes modernes confirment la sagesse contenue dans les enseignements prophétiques vieux de quatorze siècles. Pour en savoir plus sur les prescriptions prophétiques en matière de santé, consultez notre article sur les{" "}
                  <Link href="/hadith-medecine-prophetique-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la médecine prophétique
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes sur la circoncision en islam :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La circoncision est un acte de fitra, pas une simple coutume
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Elle fait partie de la nature originelle sur laquelle Allah a créé l&apos;être humain. La pratiquer, c&apos;est revenir à cette nature saine et suivre la voie de tous les prophètes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Suivre Ibrahim, c&apos;est suivre l&apos;exemple de la soumission à Allah
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Ibrahim s&apos;est circoncis à quatre-vingts ans sans hésiter. Son obéissance est un modèle pour tout musulman, rappelant que les commandements d&apos;Allah ne se négocient pas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La divergence des savants est une miséricorde
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Que la circoncision soit wajib ou sunna mu&apos;akkada, les quatre écoles s&apos;accordent sur son importance. Cette divergence méthodologique n&apos;affaiblit pas la pratique, elle témoigne de la richesse du fiqh islamique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La purification du corps est liée à la purification de la foi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les hadiths sur la tahara montrent que l&apos;islam ne sépare pas le corps de l&apos;esprit. La circoncision purifie le corps et facilite les ablutions, renforçant ainsi la pratique spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Circoncire l&apos;enfant tôt est recommandé
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le septième jour est le moment préférable selon certains savants. L&apos;enfance est dans tous les cas le moment le plus facile et le moins douloureux pour accomplir cette pratique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La science moderne confirme la sagesse prophétique
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les bienfaits sanitaires de la circoncision, reconnus par la médecine contemporaine, sont une preuve supplémentaire de la véracité des enseignements du Prophète ﷺ.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur la circoncision dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la barbe en islam"
                  description="Découvrez les hadiths authentiques sur la barbe, son statut juridique et les avis des savants des quatre écoles."
                  href="/hadith-barbe-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le tatouage et l&apos;apparence en islam"
                  description="Les enseignements prophétiques sur le tatouage, les modifications corporelles et l&apos;apparence selon la Sunna."
                  href="/hadith-tattoo-apparence-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la médecine prophétique en islam"
                  description="Les prescriptions du Prophète ﷺ en matière de santé, d&apos;hygiène et de remèdes naturels selon les hadiths authentiques."
                  href="/hadith-medecine-prophetique-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
