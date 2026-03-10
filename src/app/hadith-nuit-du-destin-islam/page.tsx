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
    "Hadiths sur la nuit du destin (Laylat al-Qadr) : les enseignements prophétiques",
  description:
    "Découvrez les hadiths authentiques sur Laylat al-Qadr : une nuit meilleure que mille mois, quand la chercher, la doua d&apos;Aisha, les signes de cette nuit bénie et les actes recommandés.",
  openGraph: {
    title:
      "Hadiths sur la nuit du destin (Laylat al-Qadr) : les enseignements prophétiques",
    description:
      "Les hadiths authentiques sur Laylat al-Qadr : mérites, signes, invocations et actes recommandés pendant les dix dernières nuits du Ramadan.",
    url: "https://www.islamreligion.fr/hadith-nuit-du-destin-islam",
    images: [
      {
        url: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-nuit-du-destin-islam",
  },
};

const tocItems = [
  { id: "merites-laylat-al-qadr", label: "Mérites de Laylat al-Qadr" },
  { id: "quand-chercher", label: "Quand chercher la nuit du destin" },
  { id: "signes-nuit-destin", label: "Les signes de Laylat al-Qadr" },
  { id: "doua-invocations", label: "La doua et les invocations" },
  { id: "itikaf-retraite", label: "L&apos;itikaf et la retraite spirituelle" },
  { id: "actes-recommandes", label: "Les actes recommandés" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quand a lieu la nuit du destin (Laylat al-Qadr) ?",
    answer:
      "Selon les hadiths authentiques, Laylat al-Qadr se situe dans les dix dernières nuits du mois de Ramadan, et plus particulièrement lors des nuits impaires (21e, 23e, 25e, 27e et 29e nuit). Le Prophète \u2018alayhi salatu wa salam a dit : \u00ab Cherchez-la dans les nuits impaires des dix dernières nuits du Ramadan \u00bb (Bukhari 2017). Beaucoup de savants penchent pour la 27e nuit, mais elle peut varier d\u2019une année à l\u2019autre.",
  },
  {
    question:
      "Quelle est la meilleure doua à réciter pendant Laylat al-Qadr ?",
    answer:
      "Aisha a demandé au Prophète \u2018alayhi salatu wa salam quelle invocation faire si elle savait quelle nuit était Laylat al-Qadr. Il lui a répondu : \u00ab Dis : Allahumma innaka \u2018afuwwun tuhibbu al-\u2018afwa fa\u2019fu \u2018anni (Ô Allah, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi) \u00bb (Tirmidhi 3513). Cette doua concise résume l\u2019essence de cette nuit : la recherche du pardon divin.",
  },
  {
    question:
      "Laylat al-Qadr est-elle meilleure que mille mois ?",
    answer:
      "Oui, Allah affirme dans le Coran (sourate Al-Qadr, 97:3) que \u00ab la nuit du destin est meilleure que mille mois \u00bb. Le Prophète \u2018alayhi salatu wa salam a confirmé ce mérite dans plusieurs hadiths, notamment celui rapporté par Abu Hurayra : \u00ab Quiconque prie durant Laylat al-Qadr avec foi et espérance de la récompense, ses péchés antérieurs lui seront pardonnés \u00bb (Bukhari 1901).",
  },
  {
    question:
      "Quels sont les signes de Laylat al-Qadr selon les hadiths ?",
    answer:
      "Les hadiths mentionnent plusieurs signes de Laylat al-Qadr : le soleil se lève le lendemain matin sans rayons apparents (Muslim 762), la nuit est paisible, ni trop chaude ni trop froide, et il y a une sensation de sérénité. Ubayy ibn Ka\u2019b décrivait le soleil du matin suivant comme \u00ab blanc, sans rayons \u00bb. Cependant, les savants précisent que ces signes ne sont connus qu\u2019après la nuit, et qu\u2019il faut donc veiller toutes les nuits impaires.",
  },
  {
    question:
      "Que signifie l&apos;itikaf et quel est son lien avec Laylat al-Qadr ?",
    answer:
      "L\u2019itikaf est une retraite spirituelle dans la mosquée, pratiquée durant les dix dernières nuits du Ramadan. Le Prophète \u2018alayhi salatu wa salam l\u2019a pratiqué chaque année pour chercher Laylat al-Qadr (Bukhari 2026). Le mutakif (celui qui fait l\u2019itikaf) se consacre entièrement à l\u2019adoration : prière, lecture du Coran, dhikr et invocations, en s\u2019isolant des distractions du monde.",
  },
  {
    question:
      "Peut-on accomplir Laylat al-Qadr sans aller à la mosquée ?",
    answer:
      "Oui, on peut adorer Allah durant Laylat al-Qadr chez soi. L\u2019itikaf à la mosquée est une sunna fortement recommandée, mais n\u2019est pas une condition pour bénéficier des mérites de cette nuit. Il est possible de prier, lire le Coran et faire des invocations depuis chez soi, notamment pour les femmes ou les personnes ne pouvant se rendre à la mosquée.",
  },
  {
    question:
      "Le Coran a-t-il été révélé en entier durant Laylat al-Qadr ?",
    answer:
      "Selon l\u2019avis majoritaire des savants, le Coran a été descendu en une seule fois du Lawh al-Mahfuz (la Tablette préservée) vers le ciel le plus bas lors de Laylat al-Qadr, puis il a été révélé progressivement au Prophète \u2018alayhi salatu wa salam sur une période de 23 ans. Allah dit : \u00ab Nous l\u2019avons fait descendre durant la nuit du destin \u00bb (Coran, 97:1).",
  },
  {
    question:
      "Pourquoi le Prophète ne nous a-t-il pas indiqué la date exacte de Laylat al-Qadr ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam était sorti pour informer les compagnons de la date exacte, mais deux hommes se disputaient, et cette connaissance lui a été retirée (Bukhari 2023). Les savants y voient une sagesse divine : en cachant la date exacte, Allah pousse les croyants à redoubler d\u2019efforts durant toutes les nuits impaires, multipliant ainsi leurs actes d\u2019adoration.",
  },
];

export default function HadithNuitDuDestinIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-nuit-du-destin-islam/#article",
        headline:
          "Hadiths sur la nuit du destin (Laylat al-Qadr) : les enseignements prophétiques",
        description:
          "Découvrez les hadiths authentiques sur Laylat al-Qadr : mérites, signes, invocations et actes recommandés pendant les dix dernières nuits du Ramadan.",
        image: "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg",
        datePublished: "2026-04-21",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-nuit-du-destin-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-nuit-du-destin-islam/#breadcrumb",
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
            name: "Hadiths sur la nuit du destin",
            item: "https://www.islamreligion.fr/hadith-nuit-du-destin-islam",
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
          title="Hadiths sur la nuit du destin (Laylat al-Qadr)"
          subtitle="Les enseignements prophétiques sur la nuit la plus bénie de l&apos;année : ses mérites, ses signes, les invocations recommandées et les actes d&apos;adoration à accomplir durant les dix dernières nuits du Ramadan."
          imageSrc="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
          imageAlt="Hadiths sur la nuit du destin Laylat al-Qadr en islam"
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
                  Hadiths sur la nuit du destin
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
                    Laylat al-Qadr est meilleure que mille mois : une seule nuit d&apos;adoration équivaut à plus de 83 ans de récompenses.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète ﷺ a enseigné de la chercher dans les nuits impaires des dix dernières nuits du Ramadan (21e, 23e, 25e, 27e, 29e).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La doua enseignée par le Prophète ﷺ à Aisha est l&apos;invocation par excellence de cette nuit : &laquo;&nbsp;Allahumma innaka &apos;afuwwun tuhibbu al-&apos;afwa fa&apos;fu &apos;anni&nbsp;&raquo;.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    L&apos;itikaf (retraite spirituelle) durant les dix dernières nuits est une sunna que le Prophète ﷺ n&apos;a jamais délaissée.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Mérites              */}
              {/* ============================== */}
              <section id="merites-laylat-al-qadr" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites de Laylat al-Qadr selon les hadiths
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Laylat al-Qadr (la nuit du destin) est la nuit la plus importante du calendrier islamique. C&apos;est durant cette nuit bénie que le Coran a été révélé, et Allah lui a consacré une sourate entière (sourate Al-Qadr). Les hadiths du Prophète ﷺ détaillent les immenses récompenses réservées à ceux qui la veillent avec foi et sincérité.
                </p>

                <HadithCard
                  arabic="إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ"
                  text="Nous l&apos;avons certes fait descendre durant la nuit du destin. Et qui te dira ce qu&apos;est la nuit du destin ? La nuit du destin est meilleure que mille mois. Durant celle-ci descendent les anges ainsi que l&apos;Esprit, par permission de leur Seigneur, pour tout ordre. Elle est paix et salut jusqu&apos;à l&apos;apparition de l&apos;aube."
                  source="Coran, sourate Al-Qadr (97:1-5)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette sourate pose les fondements coraniques de Laylat al-Qadr : la révélation du Coran, un mérite supérieur à mille mois d&apos;adoration, la descente des anges et de Jibril, et une atmosphère de paix jusqu&apos;à l&apos;aube. Les hadiths du Prophète ﷺ viennent préciser ces mérites et enseigner comment tirer le meilleur de cette nuit exceptionnelle.
                </p>

                <HadithBlock
                  number={1}
                  title="Le pardon des péchés pour celui qui veille Laylat al-Qadr"
                  narrator="Abu Hurayra"
                  arabic="مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  translation="Quiconque prie durant la nuit du destin avec foi et en espérant la récompense d&apos;Allah, ses péchés antérieurs lui seront pardonnés."
                  source="Sahih Al-Bukhari, n°1901 — Sahih Muslim, n°760"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus célèbres sur Laylat al-Qadr. Deux conditions sont requises pour obtenir ce pardon : la foi (iman), c&apos;est-à-dire croire en la promesse d&apos;Allah, et l&apos;ihtisab, c&apos;est-à-dire rechercher la récompense auprès d&apos;Allah seul, sans ostentation. Les savants précisent que &laquo;&nbsp;ses péchés antérieurs&nbsp;&raquo; désigne les péchés mineurs (sagha&apos;ir). Les péchés majeurs nécessitent un repentir sincère (tawba) spécifique."
                />

                <HadithBlock
                  number={2}
                  title="Laylat al-Qadr et le Ramadan"
                  narrator="Abu Hurayra"
                  arabic="مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ، وَمَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  translation="Quiconque jeûne le Ramadan avec foi et en espérant la récompense d&apos;Allah, ses péchés antérieurs lui seront pardonnés. Et quiconque prie durant le Ramadan avec foi et en espérant la récompense d&apos;Allah, ses péchés antérieurs lui seront pardonnés."
                  source="Sahih Al-Bukhari, n°1901 — Sahih Muslim, n°759"
                  grade="sahih"
                  explanation="Ce hadith montre que Laylat al-Qadr s&apos;inscrit dans le cadre plus large du Ramadan. Le jeûne et la prière nocturne du Ramadan sont deux voies de pardon, et Laylat al-Qadr en est le sommet. Le croyant qui jeûne le jour et veille les nuits du Ramadan, et particulièrement les dix dernières nuits, cumule les causes de pardon et de miséricorde."
                />

                <HadithBlock
                  number={3}
                  title="Un mois dans lequel se trouve une nuit meilleure que mille mois"
                  narrator="Anas ibn Malik"
                  arabic="إِنَّ هَذَا الشَّهْرَ قَدْ حَضَرَكُمْ وَفِيهِ لَيْلَةٌ خَيْرٌ مِنْ أَلْفِ شَهْرٍ، مَنْ حُرِمَهَا فَقَدْ حُرِمَ الْخَيْرَ كُلَّهُ، وَلَا يُحْرَمُ خَيْرَهَا إِلَّا مَحْرُومٌ"
                  translation="Voici que ce mois est arrivé à vous, et il contient une nuit meilleure que mille mois. Celui qui en est privé est privé de tout bien, et seul un véritable privé en est privé."
                  source="Sunan Ibn Majah, n°1644"
                  grade="hasan"
                  explanation="Le Prophète ﷺ attire ici l&apos;attention sur l&apos;immensité de la perte pour celui qui laisse passer Laylat al-Qadr sans en profiter. L&apos;expression &laquo;&nbsp;seul un véritable privé en est privé&nbsp;&raquo; est un avertissement solennel : négliger cette nuit, c&apos;est se priver d&apos;un bien inestimable. Ce hadith incite le croyant à redoubler d&apos;efforts durant les dix dernières nuits pour ne pas manquer cette occasion unique."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Quand la chercher     */}
              {/* ============================== */}
              <section id="quand-chercher" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand chercher Laylat al-Qadr selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a donné des indications précises sur la période où se situe Laylat al-Qadr. Bien que la date exacte n&apos;ait pas été fixée de manière définitive, les hadiths orientent unanimement vers les nuits impaires des dix dernières nuits du Ramadan. Cette incertitude est une sagesse divine qui pousse les croyants à multiplier les efforts d&apos;adoration.
                </p>

                <HadithBlock
                  number={4}
                  title="Cherchez-la dans les nuits impaires des dix dernières nuits"
                  narrator="Aisha"
                  arabic="تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْوِتْرِ مِنَ الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ"
                  translation="Cherchez la nuit du destin dans les nuits impaires des dix dernières nuits du Ramadan."
                  source="Sahih Al-Bukhari, n°2017"
                  grade="sahih"
                  explanation="Ce hadith est la directive prophétique la plus claire sur la recherche de Laylat al-Qadr. Les nuits impaires concernées sont la 21e, la 23e, la 25e, la 27e et la 29e nuit du Ramadan. L&apos;imam An-Nawawi explique que ces nuits sont comptées à partir du début du Ramadan. Les savants recommandent de veiller l&apos;ensemble de ces nuits pour maximiser les chances de la rencontrer."
                />

                <HadithBlock
                  number={5}
                  title="La connaissance de la date exacte a été retirée"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="خَرَجْتُ لِأُخْبِرَكُمْ بِلَيْلَةِ الْقَدْرِ، فَتَلَاحَى فُلَانٌ وَفُلَانٌ فَرُفِعَتْ، وَعَسَى أَنْ يَكُونَ خَيْرًا لَكُمْ، فَالْتَمِسُوهَا فِي التَّاسِعَةِ وَالسَّابِعَةِ وَالْخَامِسَةِ"
                  translation="J&apos;étais sorti pour vous informer de la nuit du destin, mais untel et untel se sont disputés, et elle m&apos;a été retirée (de la mémoire). Il se peut que cela soit un bien pour vous. Cherchez-la dans la neuvième, la septième et la cinquième (des dix dernières nuits)."
                  source="Sahih Al-Bukhari, n°2023"
                  grade="sahih"
                  explanation="Ce hadith révèle une sagesse remarquable. Le Prophète ﷺ connaissait la date exacte de Laylat al-Qadr, mais elle lui a été retirée à cause d&apos;une dispute entre deux compagnons. Le Prophète ﷺ y voit un bien : l&apos;incertitude pousse les croyants à veiller plusieurs nuits plutôt qu&apos;une seule, multipliant ainsi leurs actes d&apos;adoration. La &laquo;&nbsp;neuvième, la septième et la cinquième&nbsp;&raquo; désignent les 21e, 23e et 25e nuits selon le décompte à rebours."
                />

                <HadithBlock
                  number={6}
                  title="Le Prophète ﷺ intensifiait ses efforts les dix dernières nuits"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا دَخَلَ الْعَشْرُ أَحْيَا اللَّيْلَ وَأَيْقَظَ أَهْلَهُ وَجَدَّ وَشَدَّ الْمِئْزَرَ"
                  translation="Lorsque les dix dernières nuits (du Ramadan) arrivaient, le Messager d&apos;Allah ﷺ veillait toute la nuit, réveillait sa famille, redoublait d&apos;efforts et serrait son izar (ceinture)."
                  source="Sahih Al-Bukhari, n°2024 — Sahih Muslim, n°1174"
                  grade="sahih"
                  explanation="Ce hadith d&apos;Aisha décrit le comportement du Prophète ﷺ durant les dix dernières nuits. &laquo;&nbsp;Il veillait toute la nuit&nbsp;&raquo; signifie qu&apos;il passait la nuit entière en adoration. &laquo;&nbsp;Il réveillait sa famille&nbsp;&raquo; montre qu&apos;il encourageait ses proches à en profiter. &laquo;&nbsp;Il serrait son izar&nbsp;&raquo; est une expression arabe signifiant qu&apos;il s&apos;éloignait de ses épouses pour se consacrer exclusivement à l&apos;adoration. Ce hadith établit le modèle à suivre : les dix dernières nuits ne sont pas des nuits ordinaires."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh du jeûne, les mérites du Ramadan et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Signes               */}
              {/* ============================== */}
              <section id="signes-nuit-destin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes de Laylat al-Qadr dans les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ et ses compagnons ont décrit certains signes qui accompagnent ou suivent Laylat al-Qadr. Ces signes permettent de confirmer a posteriori quelle nuit était la nuit du destin, bien qu&apos;ils ne soient pas une condition pour bénéficier de ses récompenses.
                </p>

                <HadithBlock
                  number={7}
                  title="Le soleil se lève sans rayons le lendemain matin"
                  narrator="Ubayy ibn Ka&apos;b"
                  arabic="وَإِنَّ أَمَارَتَهَا أَنْ تَطْلُعَ الشَّمْسُ فِي صَبِيحَةِ يَوْمِهَا بَيْضَاءَ لَا شُعَاعَ لَهَا"
                  translation="Et son signe est que le soleil se lève le matin suivant, blanc, sans rayons."
                  source="Sahih Muslim, n°762"
                  grade="sahih"
                  explanation="Ubayy ibn Ka&apos;b, l&apos;un des compagnons les plus savants en matière de Coran, rapporte ce signe distinctif de Laylat al-Qadr. Le soleil se lève le matin suivant cette nuit avec un aspect particulier : il apparaît blanc, sans ses rayons habituels. Les savants expliquent que cela est dû au grand nombre d&apos;anges qui remontent vers le ciel après avoir été présents sur terre durant cette nuit bénie, formant un voile devant le soleil."
                />

                <HadithBlock
                  number={8}
                  title="Une nuit paisible, ni chaude ni froide"
                  narrator="Ibn &apos;Abbas"
                  arabic="لَيْلَةُ الْقَدْرِ لَيْلَةٌ سَمْحَةٌ طَلْقَةٌ لَا حَارَّةٌ وَلَا بَارِدَةٌ، تُصْبِحُ الشَّمْسُ صَبِيحَتَهَا ضَعِيفَةً حَمْرَاءَ"
                  translation="La nuit du destin est une nuit douce et agréable, ni chaude ni froide. Le soleil se lève le matin suivant, faible et rougeâtre."
                  source="Sunan Ibn Khuzayma, n°2192"
                  grade="sahih"
                  explanation="Ce hadith d&apos;Ibn &apos;Abbas apporte des précisions supplémentaires sur l&apos;atmosphère de Laylat al-Qadr. La nuit est décrite comme paisible et tempérée, comme si la nature elle-même se conformait à la paix mentionnée dans la sourate Al-Qadr : &laquo;&nbsp;elle est paix et salut jusqu&apos;à l&apos;apparition de l&apos;aube&nbsp;&raquo;. Ce signe naturel rappelle que Laylat al-Qadr n&apos;est pas seulement un événement spirituel, mais un événement cosmique."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Doua et invocations   */}
              {/* ============================== */}
              <section id="doua-invocations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Laylat al-Qadr : l&apos;invocation d&apos;Aisha
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi toutes les invocations possibles durant Laylat al-Qadr, le Prophète ﷺ a enseigné à Aisha une doua spécifique qui résume l&apos;essence même de cette nuit : la recherche du pardon divin. Cette invocation est devenue l&apos;une des plus récitées par les musulmans du monde entier durant les dix dernières nuits du Ramadan.
                </p>

                <HadithBlock
                  number={9}
                  title="Ô Allah, Tu es Celui qui pardonne, pardonne-moi"
                  narrator="Aisha"
                  arabic="قُلْتُ يَا رَسُولَ اللَّهِ أَرَأَيْتَ إِنْ عَلِمْتُ أَيُّ لَيْلَةٍ لَيْلَةُ الْقَدْرِ مَا أَقُولُ فِيهَا؟ قَالَ: قُولِي اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي"
                  translation="J&apos;ai dit : Ô Messager d&apos;Allah, si je savais quelle nuit est la nuit du destin, que devrais-je dire ? Il a répondu : Dis : Ô Allah, Tu es Celui qui pardonne (Al-&apos;Afuww), Tu aimes le pardon, alors pardonne-moi."
                  source="Jami&apos; at-Tirmidhi, n°3513 — Sunan Ibn Majah, n°3850"
                  grade="sahih"
                  explanation="Cette doua est remarquable par sa concision et sa profondeur. Le Prophète ﷺ a choisi, parmi toutes les invocations possibles, celle qui demande le &apos;afw (le pardon qui efface complètement le péché). Al-&apos;Afuww est un Nom d&apos;Allah qui signifie Celui qui efface les péchés comme s&apos;ils n&apos;avaient jamais existé, au-delà du simple pardon (maghfira). En ajoutant &laquo;&nbsp;Tu aimes le pardon&nbsp;&raquo;, l&apos;invocation rappelle que le pardon est un attribut qu&apos;Allah aime manifester. Cette doua enseigne au croyant que la plus grande demande qu&apos;il puisse formuler est celle du pardon total."
                />

                <HadithBlock
                  number={10}
                  title="Le Prophète ﷺ multipliait les invocations durant les dernières nuits"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَجْتَهِدُ فِي الْعَشْرِ الْأَوَاخِرِ مَا لَا يَجْتَهِدُ فِي غَيْرِهِ"
                  translation="Le Messager d&apos;Allah ﷺ fournissait des efforts durant les dix dernières nuits comme il ne le faisait en aucune autre période."
                  source="Sahih Muslim, n°1175"
                  grade="sahih"
                  explanation="Ce hadith souligne l&apos;intensité de l&apos;adoration du Prophète ﷺ durant les dix dernières nuits du Ramadan. S&apos;il fournissait déjà de grands efforts durant tout le Ramadan, ces nuits représentaient un niveau supérieur. Les savants y voient la preuve que le croyant doit organiser son emploi du temps pour libérer ces nuits : prendre des congés si possible, réduire les activités sociales et se consacrer à la prière, au Coran et aux invocations."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Itikaf               */}
              {/* ============================== */}
              <section id="itikaf-retraite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;itikaf : la retraite spirituelle pour chercher Laylat al-Qadr
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;itikaf est une retraite spirituelle dans la mosquée, pratiquée durant les dix dernières nuits du Ramadan. Le Prophète ﷺ l&apos;a accompli chaque année de sa vie à Médine, et il constitue le cadre idéal pour chercher Laylat al-Qadr en se coupant des distractions mondaines.
                </p>

                <HadithBlock
                  number={11}
                  title="Le Prophète ﷺ faisait l&apos;itikaf chaque année"
                  narrator="Abu Hurayra"
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَعْتَكِفُ فِي كُلِّ رَمَضَانٍ عَشَرَةَ أَيَّامٍ، فَلَمَّا كَانَ الْعَامُ الَّذِي قُبِضَ فِيهِ اعْتَكَفَ عِشْرِينَ يَوْمًا"
                  translation="Le Prophète ﷺ faisait l&apos;itikaf dix jours chaque Ramadan. L&apos;année où il décéda, il fit l&apos;itikaf vingt jours."
                  source="Sahih Al-Bukhari, n°2044"
                  grade="sahih"
                  explanation="Ce hadith montre la constance du Prophète ﷺ dans la pratique de l&apos;itikaf. Les dix jours mentionnés correspondent aux dix dernières nuits du Ramadan. Le fait qu&apos;il ait doublé la durée lors de sa dernière année a été interprété par les savants comme un signe qu&apos;il pressentait la proximité de sa mort et voulait multiplier ses actes d&apos;adoration. L&apos;itikaf permet au croyant de vivre une immersion totale dans l&apos;adoration, loin des préoccupations quotidiennes."
                />

                <HadithBlock
                  number={12}
                  title="L&apos;itikaf pour chercher Laylat al-Qadr"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَعْتَكِفُ الْعَشْرَ الْأَوَاخِرَ مِنْ رَمَضَانَ حَتَّى تَوَفَّاهُ اللَّهُ، ثُمَّ اعْتَكَفَ أَزْوَاجُهُ مِنْ بَعْدِهِ"
                  translation="Le Messager d&apos;Allah ﷺ faisait l&apos;itikaf les dix dernières nuits du Ramadan jusqu&apos;à sa mort. Puis ses épouses firent l&apos;itikaf après lui."
                  source="Sahih Al-Bukhari, n°2026 — Sahih Muslim, n°1172"
                  grade="sahih"
                  explanation="Ce hadith confirme que l&apos;itikaf est une sunna régulière (mu&apos;akkada), non un acte occasionnel. Le fait que les épouses du Prophète ﷺ aient poursuivi cette pratique après sa mort montre que l&apos;itikaf n&apos;est pas réservé aux hommes. Les savants des quatre écoles s&apos;accordent sur la légitimité de l&apos;itikaf féminin, à condition que la mosquée dispose d&apos;un espace approprié. L&apos;objectif premier de l&apos;itikaf reste la recherche de Laylat al-Qadr."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Actes recommandés     */}
              {/* ============================== */}
              <section id="actes-recommandes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les actes recommandés durant Laylat al-Qadr
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné par ses paroles et ses actes comment tirer le maximum de bénéfice de cette nuit bénie. Les hadiths suivants montrent l&apos;importance de la prière nocturne et de la lecture du Coran, deux piliers de l&apos;adoration durant Laylat al-Qadr.
                </p>

                <HadithBlock
                  number={13}
                  title="La descente du Coran durant Laylat al-Qadr"
                  narrator="Ibn &apos;Abbas"
                  arabic="أُنْزِلَ الْقُرْآنُ جُمْلَةً وَاحِدَةً إِلَى سَمَاءِ الدُّنْيَا فِي لَيْلَةِ الْقَدْرِ، ثُمَّ نَزَلَ بَعْدَ ذَلِكَ فِي عِشْرِينَ سَنَةً"
                  translation="Le Coran a été descendu en une seule fois vers le ciel le plus bas durant la nuit du destin, puis il a été révélé (progressivement) sur une période de vingt ans."
                  source="Musannaf Ibn Abi Shayba — Mustadrak Al-Hakim, n°2917"
                  grade="sahih"
                  explanation="Ce récit d&apos;Ibn &apos;Abbas éclaire le lien entre Laylat al-Qadr et le Coran. Le Coran a d&apos;abord été transféré dans son intégralité du Lawh al-Mahfuz (la Tablette préservée) vers le Bayt al-&apos;Izza dans le ciel le plus bas, puis Jibril l&apos;a transmis progressivement au Prophète ﷺ selon les événements et les circonstances. Cela explique pourquoi la lecture du Coran est particulièrement recommandée durant cette nuit : c&apos;est la nuit de sa descente, et le croyant célèbre ce don divin en le récitant."
                />

                <HadithBlock
                  number={14}
                  title="Les anges descendent en grand nombre"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ الْمَلَائِكَةَ تِلْكَ اللَّيْلَةَ فِي الْأَرْضِ أَكْثَرُ مِنْ عَدَدِ الْحَصَى"
                  translation="Les anges cette nuit-là sur terre sont plus nombreux que les cailloux."
                  source="Musnad Ahmad, n°10734"
                  grade="hasan"
                  explanation="Ce hadith illustre l&apos;ampleur de la descente angélique durant Laylat al-Qadr. Le Coran mentionne que &laquo;&nbsp;les anges et l&apos;Esprit descendent&nbsp;&raquo; (97:4), et ce hadith précise que leur nombre dépasse celui des cailloux sur terre. Les savants expliquent que ces anges descendent porteurs de miséricorde, de bénédiction et de paix. Ils répondent &laquo;&nbsp;amine&nbsp;&raquo; aux invocations des croyants et enveloppent les assemblées de dhikr de leur présence. Cette nuit est donc un moment unique où le ciel et la terre se rapprochent."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Leçons pratiques      */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et leçons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le croyant qui souhaite tirer le meilleur de Laylat al-Qadr :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Veiller toutes les nuits impaires des dix dernières nuits
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Ne vous limitez pas à la 27e nuit. Le Prophète ﷺ a ordonné de chercher Laylat al-Qadr dans toutes les nuits impaires pour ne pas la manquer. Organisez votre emploi du temps en conséquence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Réciter la doua d&apos;Aisha abondamment
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        &laquo;&nbsp;Allahumma innaka &apos;afuwwun tuhibbu al-&apos;afwa fa&apos;fu &apos;anni&nbsp;&raquo;. Cette invocation concise est la plus recommandée pour cette nuit. Répétez-la avec humilité et présence du coeur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier la prière nocturne et la lecture du Coran
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le qiyam al-layl (prière nocturne) et la récitation du Coran sont les actes les plus méritoires de cette nuit. Le Coran a été révélé durant Laylat al-Qadr, et sa récitation est un hommage à ce don divin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Pratiquer l&apos;itikaf si possible
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La retraite spirituelle dans la mosquée durant les dix dernières nuits est la sunna par excellence pour chercher Laylat al-Qadr. Si l&apos;itikaf complet n&apos;est pas possible, consacrez au moins les nuits impaires à l&apos;adoration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prier avec foi et espérance de la récompense
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les deux conditions du pardon sont la foi (iman) et l&apos;ihtisab (espérer la récompense d&apos;Allah). L&apos;adoration durant cette nuit doit être sincère, sans ostentation ni habitude mécanique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Impliquer toute la famille dans l&apos;adoration
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ réveillait sa famille durant les dix dernières nuits. Encouragez vos proches à veiller, même partiellement, pour que chacun bénéficie des mérites de cette nuit exceptionnelle.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur Laylat al-Qadr dans leur langue originale et approfondissez votre connaissance du Coran et de la Sunna."
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
                  title="Hadiths sur le Ramadan : jeûne, prière et récompenses"
                  description="Les enseignements prophétiques sur les mérites du jeûne, les règles du Ramadan et les actes recommandés."
                  href="/hadith-ramadan-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le Coran : mérites et vertus de la récitation"
                  description="Découvrez les hadiths authentiques sur la lecture, la mémorisation et la mise en pratique du Coran."
                  href="/hadith-coran-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la prière en islam : les enseignements prophétiques"
                  description="Les hadiths sur l&apos;importance de la salat, les prières surérogatoires et la prière nocturne."
                  href="/hadith-priere-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
