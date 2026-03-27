import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Les grands livres et recueils de hadiths en islam : guide complet",
  description:
    "Découvrez les grands recueils de hadiths en islam : Sahih Al-Bukhari, Sahih Muslim, les Kutub as-Sitta, le Muwatta de Malik et le Musnad Ahmad. Histoire, méthodologie et hadiths représentatifs de chaque collection.",
  openGraph: {
    title:
      "Les grands livres et recueils de hadiths en islam : guide complet",
    description:
      "Guide complet des grandes collections de hadiths : les six recueils canoniques (Kutub as-Sitta), le Muwatta de Malik, le Musnad Ahmad et les critères de classification des hadiths.",
    url: "https://www.islamreligion.fr/hadith-livres-recueils-islam",
    images: [
      {
        url: "/images/musulman-tenant-coran-chapelet-islam-foi.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-livres-recueils-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique : préserver le savoir" },
  { id: "kutub-as-sitta", label: "Les six recueils canoniques (Kutub as-Sitta)" },
  { id: "autres-recueils", label: "Autres recueils importants" },
  { id: "tableau-comparatif", label: "Tableau comparatif des collections" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les six recueils canoniques de hadiths (Kutub as-Sitta) ?",
    answer:
      "Les six recueils canoniques sont : Sahih Al-Bukhari de l\u2019imam Al-Bukhari, Sahih Muslim de l\u2019imam Muslim, Sunan Abu Dawud de l\u2019imam Abu Dawud, Jami\u2019 at-Tirmidhi de l\u2019imam At-Tirmidhi, Sunan an-Nasa\u2019i de l\u2019imam An-Nasa\u2019i, et Sunan Ibn Majah de l\u2019imam Ibn Majah. Ces six ouvrages constituent la référence principale en matière de hadiths pour la majorité des savants sunnites.",
  },
  {
    question:
      "Quelle est la différence entre le Sahih Al-Bukhari et le Sahih Muslim ?",
    answer:
      "Le Sahih Al-Bukhari est considéré comme le livre le plus authentique après le Coran, avec environ 7 275 hadiths (dont des répétitions). Le Sahih Muslim contient environ 7 563 hadiths et est réputé pour sa meilleure organisation thématique. Al-Bukhari applique des critères de chaîne de transmission plus stricts, tandis que Muslim excelle dans le regroupement des variantes d\u2019un même hadith.",
  },
  {
    question:
      "Le Muwatta de l\u2019imam Malik fait-il partie des six recueils canoniques ?",
    answer:
      "Non, le Muwatta de l\u2019imam Malik ne fait pas partie des Kutub as-Sitta, bien qu\u2019il soit antérieur à tous ces recueils et jouisse d\u2019une immense autorité. Certains savants, dont Ibn Hajar, le placent même au-dessus de certains recueils canoniques en termes de fiabilité. Le Muwatta est un ouvrage mixte mêlant hadiths, avis des Compagnons et pratique des gens de Médine.",
  },
  {
    question:
      "Qu\u2019est-ce que le Musnad de l\u2019imam Ahmad ?",
    answer:
      "Le Musnad de l\u2019imam Ahmad ibn Hanbal est l\u2019une des plus grandes collections de hadiths, contenant environ 27 647 hadiths classés par Compagnon rapporteur. Contrairement aux recueils thématiques, le Musnad regroupe tous les hadiths transmis par un même Compagnon. Il contient des hadiths sahih, hasan et daif, et constitue une source incontournable pour les chercheurs en sciences du hadith.",
  },
  {
    question:
      "Comment les savants classent-ils l\u2019authenticité des hadiths ?",
    answer:
      "Les savants classent les hadiths principalement en trois catégories : sahih (authentique), hasan (bon) et daif (faible). Cette classification repose sur l\u2019analyse de la chaîne de transmission (isnad) et du contenu (matn). Les critères incluent la continuité de la chaîne, la probité et la précision des rapporteurs, l\u2019absence de contradiction avec des hadiths plus fiables et l\u2019absence de défaut caché.",
  },
  {
    question:
      "Pourquoi existe-t-il plusieurs recueils de hadiths et non un seul ?",
    answer:
      "Chaque compilateur avait une méthodologie et un objectif différents. Al-Bukhari visait uniquement les hadiths les plus authentiques, Abu Dawud se concentrait sur les hadiths juridiques, At-Tirmidhi mentionnait les avis des différentes écoles. Cette diversité permet aux savants de croiser les sources et d\u2019avoir une vision plus complète de la Sunna prophétique.",
  },
  {
    question:
      "Un hadith absent des six recueils canoniques peut-il être authentique ?",
    answer:
      "Oui, un hadith peut être authentique même s\u2019il ne figure pas dans les Kutub as-Sitta. De nombreux hadiths sahih se trouvent dans le Musnad Ahmad, le Muwatta de Malik, le Sahih d\u2019Ibn Hibban, le Mustadrak d\u2019Al-Hakim ou d\u2019autres recueils. Les savants du hadith ne se limitent pas aux six recueils canoniques dans leur recherche et leur vérification.",
  },
];

export default function HadithLivresRecueilsIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-livres-recueils-islam/#article",
        headline:
          "Les grands livres et recueils de hadiths en islam : guide complet",
        description:
          "Découvrez les grands recueils de hadiths en islam : Sahih Al-Bukhari, Sahih Muslim, les Kutub as-Sitta, le Muwatta de Malik et le Musnad Ahmad.",
        image: "/images/musulman-tenant-coran-chapelet-islam-foi.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-livres-recueils-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-livres-recueils-islam/#breadcrumb",
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
            name: "Livres et recueils de hadiths",
            item: "https://www.islamreligion.fr/hadith-livres-recueils-islam",
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
          title="Les grands livres et recueils de hadiths en islam"
          subtitle="Guide complet des collections canoniques de hadiths : Sahih Al-Bukhari, Sahih Muslim, les Kutub as-Sitta, le Muwatta de Malik, le Musnad Ahmad et les critères de classification des traditions prophétiques."
          imageSrc="/images/musulman-tenant-coran-chapelet-islam-foi.jpg"
          imageAlt="Les grands livres et recueils de hadiths en islam"
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
                  Livres et recueils de hadiths
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
                    Les six recueils canoniques (Kutub as-Sitta) constituent la référence principale en matière de hadiths pour les savants sunnites.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Sahih Al-Bukhari est considéré comme le livre le plus authentique après le Coran, suivi du Sahih Muslim.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Chaque compilateur avait une méthodologie propre : critères d&apos;authenticité, classement thématique ou par rapporteur, objectif juridique ou encyclopédique.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    D&apos;autres recueils majeurs comme le Muwatta de Malik et le Musnad Ahmad complètent les Kutub as-Sitta et sont indispensables aux sciences du hadith.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : la préservation du savoir en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La compilation des hadiths s&apos;inscrit dans une injonction coranique fondamentale : la préservation et la transmission du savoir religieux. Allah a garanti la préservation de Son message, et les savants du hadith ont consacré leur vie à protéger la Sunna prophétique avec une rigueur scientifique sans précédent dans l&apos;histoire. Plusieurs versets coraniques posent les fondements de cette mission de préservation.
                </p>

                <HadithCard
                  arabic="إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ"
                  text="En vérité, c&apos;est Nous qui avons fait descendre le Rappel (le Coran), et c&apos;est Nous qui en sommes les gardiens."
                  source="Coran, sourate Al-Hijr (15:9)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que la préservation du &laquo;&nbsp;Rappel&nbsp;&raquo; englobe non seulement le texte coranique, mais aussi la Sunna qui l&apos;explique et le détaille. C&apos;est dans cet esprit que des générations de muhaddithun (savants du hadith) ont développé des méthodes rigoureuses de vérification, de classification et de compilation des paroles du Prophète ﷺ. Ces efforts ont abouti à la constitution de recueils monumentaux qui restent, quatorze siècles plus tard, les références incontournables de la civilisation islamique.
                </p>

                <HadithCard
                  arabic="وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا"
                  text="Prenez ce que le Messager vous donne, et abstenez-vous de ce qu&apos;il vous interdit."
                  source="Coran, sourate Al-Hashr (59:7)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit l&apos;autorité de la Sunna comme source de législation à côté du Coran. Pour &laquo;&nbsp;prendre ce que le Messager donne&nbsp;&raquo;, il fallait d&apos;abord le consigner fidèlement. C&apos;est cette nécessité qui a motivé les grands compilateurs à parcourir le monde musulman, de Boukhara à l&apos;Égypte, du Yémen à Bagdad, pour collecter, vérifier et classer les hadiths dans des ouvrages méthodiques et accessibles.
                </p>
              </section>

              {/* ============================================= */}
              {/* SECTION : Les six recueils canoniques          */}
              {/* ============================================= */}
              <section id="kutub-as-sitta" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les six recueils canoniques (Kutub as-Sitta)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les Kutub as-Sitta désignent les six recueils de hadiths les plus importants de la tradition sunnite. Compilés entre le IIIe et le IVe siècle de l&apos;Hégire, ils représentent le fruit d&apos;un immense travail de vérification des chaînes de transmission (<em>isnad</em>) et des contenus (<em>matn</em>). Chaque recueil porte l&apos;empreinte de son auteur et de sa méthodologie propre.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  1. Sahih Al-Bukhari — L&apos;imam Al-Bukhari (194-256 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Muhammad ibn Isma&apos;il al-Bukhari, originaire de Boukhara (actuel Ouzbékistan), a consacré seize années à la compilation de son Sahih. Il a sélectionné environ 7 275 hadiths (avec répétitions) sur un corpus de 600 000 hadiths qu&apos;il avait mémorisés. Son critère principal : chaque rapporteur devait avoir rencontré directement celui dont il transmet le hadith, garantissant une chaîne ininterrompue et vérifiée.
                </p>

                <HadithBlock
                  number={1}
                  title="Les actions ne valent que par les intentions"
                  narrator="&apos;Umar ibn Al-Khattab"
                  arabic="إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ"
                  translation="Les actions ne valent que par les intentions, et chaque homme n&apos;aura que ce qu&apos;il a eu l&apos;intention de faire. Celui dont l&apos;émigration est pour Allah et Son Messager, son émigration est pour Allah et Son Messager. Et celui dont l&apos;émigration est pour un bien de ce monde ou pour épouser une femme, son émigration est pour ce vers quoi il a émigré."
                  source="Sahih Al-Bukhari, n°1"
                  grade="sahih"
                  explanation="Ce hadith est le tout premier du Sahih Al-Bukhari. L&apos;imam Al-Bukhari l&apos;a choisi comme ouverture pour rappeler que toute œuvre, y compris la compilation des hadiths elle-même, doit être accomplie avec une intention sincère envers Allah. Ce hadith est considéré par les savants comme un pilier de l&apos;islam, car il conditionne la validité de toute action à la pureté de l&apos;intention. Il illustre parfaitement la rigueur et la profondeur du Sahih Al-Bukhari."
                />

                <h3 className="mt-10 text-xl font-semibold text-foreground">
                  2. Sahih Muslim — L&apos;imam Muslim (204-261 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Muslim ibn al-Hajjaj, originaire de Nishapur (actuel Iran), a compilé son Sahih en sélectionnant environ 7 563 hadiths (avec répétitions) parmi 300 000. Sa méthodologie se distingue par le regroupement des différentes versions d&apos;un même hadith en un seul endroit, facilitant ainsi l&apos;étude comparative des chaînes de transmission. Son ouvrage est réputé pour sa clarté d&apos;organisation.
                </p>

                <HadithBlock
                  number={2}
                  title="L&apos;islam est bâti sur cinq piliers"
                  narrator="Ibn &apos;Umar"
                  arabic="بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَالْحَجِّ وَصَوْمِ رَمَضَانَ"
                  translation="L&apos;islam est bâti sur cinq piliers : le témoignage qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que Muhammad est Son Messager, l&apos;accomplissement de la prière, l&apos;acquittement de la zakat, le pèlerinage et le jeûne du mois de Ramadan."
                  source="Sahih Muslim, n°16"
                  grade="sahih"
                  explanation="Ce hadith fondamental résume les cinq piliers de l&apos;islam. L&apos;imam Muslim l&apos;a placé dans le Livre de la foi, au début de son recueil. La version de Muslim se distingue par l&apos;inversion entre le Hajj et le jeûne par rapport à d&apos;autres versions, ce qui illustre la méthode de Muslim de rassembler les variantes pour permettre une étude approfondie des textes prophétiques."
                />

                <h3 className="mt-10 text-xl font-semibold text-foreground">
                  3. Sunan Abu Dawud — L&apos;imam Abu Dawud (202-275 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Sulayman ibn al-Ash&apos;ath Abu Dawud, originaire du Sijistan (actuel Afghanistan), a compilé environ 5 274 hadiths à vocation principalement juridique. Son recueil couvre l&apos;ensemble des chapitres du fiqh et constitue une référence majeure pour les juristes. Abu Dawud précisait lui-même le degré de chaque hadith lorsque celui-ci présentait une faiblesse.
                </p>

                <HadithBlock
                  number={3}
                  title="La pudeur fait partie de la foi"
                  narrator="Abu Hurayra"
                  arabic="الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ"
                  translation="La foi comporte soixante-dix et quelques branches, et la pudeur est une branche de la foi."
                  source="Sunan Abu Dawud, n°4676"
                  grade="sahih"
                  explanation="Ce hadith illustre la richesse du Sunan d&apos;Abu Dawud, qui ne se limite pas aux règles juridiques mais englobe aussi les vertus morales. Abu Dawud l&apos;a classé dans le chapitre de la Sunna, montrant que la pudeur n&apos;est pas une simple qualité sociale mais une composante intégrale de la foi musulmane. Ce hadith est également rapporté par Al-Bukhari et Muslim avec des variantes."
                />

                <h3 className="mt-10 text-xl font-semibold text-foreground">
                  4. Jami&apos; at-Tirmidhi — L&apos;imam At-Tirmidhi (209-279 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Muhammad ibn &apos;Isa at-Tirmidhi, élève d&apos;Al-Bukhari, a compilé environ 3 956 hadiths. La particularité de son Jami&apos; est de mentionner, après chaque hadith, son degré d&apos;authenticité (sahih, hasan, daif) ainsi que les avis des différentes écoles juridiques. Cette approche en fait un ouvrage à la fois de hadith et de fiqh comparé.
                </p>

                <HadithBlock
                  number={4}
                  title="La quête du savoir est une obligation"
                  narrator="Anas ibn Malik"
                  arabic="طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ"
                  translation="La quête du savoir est une obligation pour tout musulman."
                  source="Jami&apos; at-Tirmidhi, n°2646"
                  grade="hasan"
                  explanation="Ce hadith, rapporté par At-Tirmidhi, est devenu l&apos;un des plus célèbres de la tradition islamique. Il a motivé des générations de savants à voyager à travers le monde musulman pour collecter et vérifier les hadiths. At-Tirmidhi l&apos;a classé parmi les hadiths hasan, illustrant sa rigueur méthodologique : il ne se contente pas de rapporter, il évalue chaque tradition."
                />

                <h3 className="mt-10 text-xl font-semibold text-foreground">
                  5. Sunan an-Nasa&apos;i — L&apos;imam An-Nasa&apos;i (215-303 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Ahmad ibn Shu&apos;ayb an-Nasa&apos;i, originaire du Khorasan (actuel Turkménistan), a d&apos;abord compilé un grand recueil (<em>As-Sunan al-Kubra</em>) avant d&apos;en extraire une version plus concise (<em>As-Sunan as-Sughra</em>, aussi appelée <em>Al-Mujtaba</em>). Ses critères d&apos;authenticité sont considérés par certains savants comme les plus rigoureux après ceux d&apos;Al-Bukhari et Muslim.
                </p>

                <HadithBlock
                  number={5}
                  title="Cinq choses font partie de la fitra"
                  narrator="Abu Hurayra"
                  arabic="خَمْسٌ مِنَ الْفِطْرَةِ الْخِتَانُ وَالاِسْتِحْدَادُ وَنَتْفُ الإِبْطِ وَتَقْلِيمُ الأَظْفَارِ وَقَصُّ الشَّارِبِ"
                  translation="Cinq choses font partie de la fitra (la nature saine) : la circoncision, le rasage du pubis, l&apos;épilation des aisselles, la taille des ongles et le raccourcissement de la moustache."
                  source="Sunan an-Nasa&apos;i, n°10"
                  grade="sahih"
                  explanation="Ce hadith sur la fitra (disposition naturelle) illustre le caractère pratique et juridique du Sunan d&apos;An-Nasa&apos;i. L&apos;imam An-Nasa&apos;i l&apos;a placé dans le chapitre de la purification, reflétant son souci d&apos;organiser les hadiths selon les chapitres du fiqh. La rigueur d&apos;An-Nasa&apos;i dans la sélection de ce hadith confirme la fiabilité de son recueil."
                />

                <h3 className="mt-10 text-xl font-semibold text-foreground">
                  6. Sunan Ibn Majah — L&apos;imam Ibn Majah (209-273 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Muhammad ibn Yazid ibn Majah, originaire de Qazwin (actuel Iran), a compilé environ 4 341 hadiths. Son Sunan contient des hadiths que l&apos;on ne retrouve pas dans les cinq autres recueils canoniques, ce qui lui confère une valeur complémentaire. Cependant, certains savants lui reprochent d&apos;avoir inclus des hadiths faibles, voire quelques hadiths rejetés.
                </p>

                <HadithBlock
                  number={6}
                  title="Celui qui prend un chemin pour acquérir le savoir"
                  narrator="Abu Hurayra"
                  arabic="مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ"
                  translation="Celui qui prend un chemin pour y acquérir un savoir, Allah lui facilite un chemin vers le Paradis."
                  source="Sunan Ibn Majah, n°225"
                  grade="sahih"
                  explanation="Ce hadith, également rapporté par Muslim, illustre la place du savoir dans la tradition prophétique. Ibn Majah l&apos;a inclus dans le chapitre consacré au mérite du savoir et des savants, soulignant que la quête de la connaissance religieuse est un acte d&apos;adoration qui mène au Paradis. Ce hadith a inspiré les grands compilateurs eux-mêmes dans leurs voyages à travers le monde musulman."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences du hadith"
                description="Étudiez la méthodologie des muhaddithun, les sciences du hadith (mustalah al-hadith) et la critique des chaînes de transmission avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Autres recueils      */}
              {/* ============================== */}
              <section id="autres-recueils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Autres recueils importants de hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà des Kutub as-Sitta, d&apos;autres recueils jouissent d&apos;une autorité considérable dans les sciences islamiques. Le Muwatta de l&apos;imam Malik, le Musnad de l&apos;imam Ahmad et le Sunan ad-Darimi occupent une place de premier plan parmi ces ouvrages complémentaires.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Le Muwatta de l&apos;imam Malik (93-179 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Muwatta est le plus ancien recueil de hadiths parvenu jusqu&apos;à nous dans son intégralité. L&apos;imam Malik ibn Anas, fondateur de l&apos;école malikite, l&apos;a composé à Médine sur une période de quarante ans. Il contient environ 1 720 narrations, mêlant hadiths prophétiques, avis des Compagnons (<em>athar</em>) et pratiques des gens de Médine (<em>&apos;amal ahl al-Madina</em>). L&apos;imam Ash-Shafi&apos;i a dit à son sujet : &laquo;&nbsp;Il n&apos;y a pas sur terre, après le Livre d&apos;Allah, de livre plus authentique que le Muwatta de Malik.&nbsp;&raquo;
                </p>

                <HadithBlock
                  number={7}
                  title="Je vous ai laissé deux choses"
                  narrator="Malik ibn Anas (mursal)"
                  arabic="تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ"
                  translation="Je vous ai laissé deux choses : tant que vous vous y accrocherez, vous ne vous égarerez jamais : le Livre d&apos;Allah et la Sunna de Son Prophète."
                  source="Muwatta Malik, n°1874"
                  grade="hasan"
                  explanation="Ce hadith, rapporté dans le Muwatta sous forme mursal (sans mention du Compagnon rapporteur), est renforcé par d&apos;autres chaînes de transmission. Il résume la raison d&apos;être de tous les recueils de hadiths : préserver la Sunna pour que les musulmans puissent s&apos;y accrocher à côté du Coran. L&apos;imam Malik l&apos;a inclus dans son Muwatta comme un rappel fondamental de l&apos;importance de la tradition prophétique."
                />

                <h3 className="mt-10 text-xl font-semibold text-foreground">
                  Le Musnad de l&apos;imam Ahmad (164-241 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Musnad de l&apos;imam Ahmad ibn Hanbal est l&apos;une des collections les plus vastes, contenant environ 27 647 hadiths. Contrairement aux recueils thématiques, le Musnad classe les hadiths par Compagnon rapporteur. L&apos;imam Ahmad avait pour objectif de rassembler tout ce qui est utilisable comme preuve en matière de jurisprudence, incluant des hadiths sahih, hasan et quelques hadiths daif.
                </p>

                <HadithBlock
                  number={8}
                  title="Transmettez de ma part, ne serait-ce qu&apos;un verset"
                  narrator="&apos;Abd Allah ibn &apos;Amr"
                  arabic="بَلِّغُوا عَنِّي وَلَوْ آيَةً وَحَدِّثُوا عَنْ بَنِي إِسْرَائِيلَ وَلاَ حَرَجَ وَمَنْ كَذَبَ عَلَىَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ"
                  translation="Transmettez de ma part, ne serait-ce qu&apos;un verset. Rapportez des récits des fils d&apos;Israël, il n&apos;y a pas de mal. Et celui qui ment délibérément à mon sujet, qu&apos;il prépare sa place en Enfer."
                  source="Musnad Ahmad, n°6486"
                  grade="sahih"
                  explanation="Ce hadith, également rapporté par Al-Bukhari, résume les deux faces de la transmission du savoir : l&apos;obligation de transmettre et l&apos;interdiction absolue de mentir sur le Prophète ﷺ. C&apos;est cette double injonction qui a motivé les muhaddithun à développer la science du jarh wa ta&apos;dil (critique des rapporteurs) et à établir des critères rigoureux d&apos;authenticité."
                />

                <h3 className="mt-10 text-xl font-semibold text-foreground">
                  Le Sunan ad-Darimi — L&apos;imam Ad-Darimi (181-255 H)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  &apos;Abd Allah ibn &apos;Abd ar-Rahman ad-Darimi, originaire de Samarcande, a compilé un recueil d&apos;environ 3 503 hadiths. Bien qu&apos;il ne fasse pas partie des Kutub as-Sitta, son Sunan est considéré par de nombreux savants comme supérieur au Sunan d&apos;Ibn Majah en termes de fiabilité. Certains muhaddithin, dont Ibn Hajar, auraient préféré l&apos;inclure à la place d&apos;Ibn Majah dans les six recueils canoniques.
                </p>

                <HadithBlock
                  number={9}
                  title="Le mérite du savant sur le dévot"
                  narrator="Abu Ad-Darda&apos;"
                  arabic="فَضْلُ الْعَالِمِ عَلَى الْعَابِدِ كَفَضْلِ الْقَمَرِ عَلَى سَائِرِ الْكَوَاكِبِ إِنَّ الْعُلَمَاءَ وَرَثَةُ الأَنْبِيَاءِ إِنَّ الأَنْبِيَاءَ لَمْ يُوَرِّثُوا دِينَارًا وَلاَ دِرْهَمًا إِنَّمَا وَرَّثُوا الْعِلْمَ فَمَنْ أَخَذَ بِهِ أَخَذَ بِحَظٍّ وَافِرٍ"
                  translation="Le mérite du savant sur le dévot est semblable au mérite de la lune sur le reste des astres. Les savants sont les héritiers des prophètes. Les prophètes n&apos;ont laissé en héritage ni dinar ni dirham, ils n&apos;ont laissé que le savoir. Celui qui le prend a pris une part abondante."
                  source="Sunan ad-Darimi, n°349"
                  grade="sahih"
                  explanation="Ce hadith, rapporté également par Abu Dawud et At-Tirmidhi, place les savants au sommet de la hiérarchie spirituelle en tant qu&apos;héritiers des prophètes. Il justifie l&apos;immense effort de compilation des hadiths : préserver le savoir prophétique, c&apos;est perpétuer l&apos;héritage des prophètes. Ad-Darimi l&apos;a placé en ouverture de son recueil pour souligner la noblesse de la science du hadith."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Tableau comparatif   */}
              {/* ============================== */}
              <section id="tableau-comparatif" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tableau comparatif des grandes collections de hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le tableau suivant offre une vue synthétique des principaux recueils de hadiths, leurs auteurs, le nombre approximatif de hadiths et la spécificité de chaque collection.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse rounded-xl border border-border text-sm">
                    <thead>
                      <tr className="bg-accent">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Collection
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Auteur
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Nb de hadiths
                        </th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-primary">
                          Spécificité
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Sahih Al-Bukhari
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Al-Bukhari (m. 256 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~7 275
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Critères les plus stricts, livre le plus authentique après le Coran
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Sahih Muslim
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Muslim (m. 261 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~7 563
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Meilleure organisation, regroupement des variantes
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Sunan Abu Dawud
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Abu Dawud (m. 275 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~5 274
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Orientation juridique, hadiths du fiqh
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Jami&apos; at-Tirmidhi
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          At-Tirmidhi (m. 279 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~3 956
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Grading systématique, fiqh comparé
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Sunan an-Nasa&apos;i
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          An-Nasa&apos;i (m. 303 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~5 758
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Critères très rigoureux, analyse fine des chaînes
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Sunan Ibn Majah
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Ibn Majah (m. 273 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~4 341
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Hadiths exclusifs absents des cinq autres recueils
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Muwatta Malik
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Malik ibn Anas (m. 179 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~1 720
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Plus ancien recueil, mêle hadiths et pratique médinoise
                        </td>
                      </tr>
                      <tr className="bg-accent/50">
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Musnad Ahmad
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Ahmad ibn Hanbal (m. 241 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~27 647
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Classement par Compagnon, collection encyclopédique
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border px-4 py-3 font-medium text-foreground">
                          Sunan ad-Darimi
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Ad-Darimi (m. 255 H)
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          ~3 503
                        </td>
                        <td className="border border-border px-4 py-3 text-foreground-secondary">
                          Grande fiabilité, alternative à Ibn Majah selon certains savants
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur les recueils de hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les recueils de hadiths et leur méthodologie. Leurs témoignages permettent de mesurer l&apos;importance de ces collections dans l&apos;histoire intellectuelle de l&apos;islam.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Je n&apos;ai écrit dans ce livre que ce qui est authentique. J&apos;ai laissé de côté beaucoup de hadiths authentiques par souci de concision. Et je n&apos;ai placé aucun hadith dans ce livre sans avoir d&apos;abord accompli deux unités de prière pour demander guidance à Allah (istikhara).&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Al-Bukhari, à propos de son Sahih
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Il n&apos;y a pas sous la voûte céleste de livre plus authentique, après le Livre d&apos;Allah, que le livre de Muslim ibn al-Hajjaj.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Abu &apos;Ali an-Naysaburi
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Si quelqu&apos;un veut juger dans un litige, qu&apos;il utilise mon livre (Sunan). Si le hadith est authentique, je le mentionne. S&apos;il comporte une faiblesse, je l&apos;indique. Et ce sur quoi je ne dis rien, c&apos;est qu&apos;il est convenable (salih).&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Abu Dawud, à propos de ses Sunan
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le Muwatta de l&apos;imam Malik est le premier ouvrage composé dans le hadith selon les chapitres du fiqh. Il est devenu un modèle pour tous ceux qui sont venus après lui, y compris Al-Bukhari et Muslim.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Hajar al-Asqalani, <em>Fath al-Bari</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces témoignages révèlent la conscience que les compilateurs avaient de la gravité de leur mission. Chacun d&apos;eux a développé une méthodologie propre, adaptée à son objectif : Al-Bukhari recherchait la plus haute authenticité, Muslim l&apos;organisation optimale, Abu Dawud la pertinence juridique, et At-Tirmidhi la synthèse entre hadith et fiqh. C&apos;est cette diversité qui fait la richesse du patrimoine islamique en matière de hadith.
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
                  L&apos;étude des grands recueils de hadiths et de leur histoire nous enseigne des leçons fondamentales pour le musulman d&apos;aujourd&apos;hui :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La rigueur dans la transmission du savoir
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les muhaddithun ont développé une méthodologie critique sans précédent pour vérifier l&apos;authenticité de chaque hadith. Cette rigueur nous rappelle l&apos;importance de vérifier nos sources avant de transmettre un enseignement religieux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La quête du savoir est un acte d&apos;adoration
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les grands compilateurs ont parcouru des milliers de kilomètres, consacré des décennies de leur vie et enduré des épreuves considérables pour préserver la Sunna. Leur exemple nous encourage à valoriser l&apos;apprentissage religieux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La complémentarité des approches
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque recueil a sa spécificité et sa valeur. Il ne faut pas se limiter à un seul ouvrage, mais croiser les sources pour avoir une vision complète de la Sunna prophétique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        L&apos;importance de la chaîne de transmission
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        L&apos;isnad est une spécificité de la civilisation islamique. Vérifier d&apos;où vient une information religieuse, qui l&apos;a transmise et avec quelle fiabilité reste un principe essentiel pour tout musulman soucieux de sa pratique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        La sincérité de l&apos;intention
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Al-Bukhari priait deux unités de prière avant d&apos;inscrire chaque hadith dans son recueil. Ce souci de la pureté de l&apos;intention rappelle que toute activité liée au savoir religieux doit être accomplie pour Allah seul.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Revenir aux sources primaires
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les recueils de hadiths sont accessibles en arabe et en traduction. Plutôt que de se fier à des citations hors contexte sur les réseaux sociaux, le musulman doit s&apos;efforcer de revenir aux ouvrages originaux et aux commentaires des savants reconnus.
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
                  description="Comprenez les hadiths dans leur langue originale et accédez directement aux grands recueils de la tradition prophétique."
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
                  title="Sahih Al-Bukhari : le recueil le plus authentique"
                  description="Découvrez l&apos;histoire, la méthodologie et les hadiths les plus célèbres du Sahih Al-Bukhari."
                  href="/hadith-bukhari-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Sahih Muslim : le recueil de l&apos;imam Muslim"
                  description="Explorez les hadiths authentiques du Sahih Muslim et la méthodologie rigoureuse de l&apos;imam Muslim ibn al-Hajjaj."
                  href="/hadith-authentique-muslim-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Qu&apos;est-ce qu&apos;un hadith ? Définition et sciences du hadith"
                  description="Comprenez les fondements des sciences du hadith : isnad, matn, classification et terminologie."
                  href="/hadith-definition-sciences-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
