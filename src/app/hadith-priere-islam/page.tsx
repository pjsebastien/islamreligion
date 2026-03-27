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
    "Hadiths sur la prière en islam : enseignements prophétiques sur la salat",
  description:
    "Découvrez les hadiths authentiques sur la prière (salat) en islam : importance de la prière, les cinq prières obligatoires, les prières surérogatoires, la prière en congrégation. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur la prière en islam : enseignements prophétiques sur la salat",
    description:
      "Les hadiths authentiques sur la prière en islam : pilier fondamental, mérites des cinq prières, nawafil, prière en congrégation et enseignements pratiques selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-priere-islam",
    images: [
      {
        url: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-priere-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique de la prière" },
  { id: "importance-priere", label: "L\u2019importance de la prière" },
  { id: "cinq-prieres", label: "Les cinq prières obligatoires" },
  { id: "prieres-suregatoires", label: "Les prières surérogatoires" },
  { id: "priere-congregation", label: "La prière en congrégation" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur la prière en islam ?",
    answer:
      "Les hadiths les plus importants sur la prière incluent celui rapporté par Ibn \u2019Umar sur les cinq piliers de l\u2019islam (Bukhari 8), celui de Jabir sur la prière comme distinction entre le croyant et le mécréant (Muslim 82), et celui d\u2019Abu Hurayra sur la prière en congrégation qui surpasse la prière individuelle de vingt-sept degrés (Bukhari 645). Ces hadiths couvrent les fondements de la salat : son statut, ses mérites et ses modalités.",
  },
  {
    question:
      "Pourquoi la prière est-elle considérée comme le deuxième pilier de l\u2019islam ?",
    answer:
      "La prière est le deuxième pilier de l\u2019islam après l\u2019attestation de foi (shahada) car elle constitue le lien direct et quotidien entre le serviteur et son Seigneur. Le Prophète \u2018alayhi salatu wa salam a enseigné qu\u2019elle sera le premier acte sur lequel le serviteur sera interrogé le Jour du Jugement (Tirmidhi 413). Son abandon est considéré par de nombreux savants comme une sortie de l\u2019islam.",
  },
  {
    question: "Combien de prières obligatoires y a-t-il en islam ?",
    answer:
      "Il y a cinq prières obligatoires (fard) en islam : le Fajr (aube, 2 unités), le Dhuhr (midi, 4 unités), le \u2019Asr (après-midi, 4 unités), le Maghrib (coucher du soleil, 3 unités) et le \u2019Isha (nuit, 4 unités). Le Prophète a comparé ces cinq prières à une rivière devant la porte de chacun dans laquelle on se baignerait cinq fois par jour, effaçant ainsi les péchés (Bukhari 528).",
  },
  {
    question: "Quel est le mérite de la prière en congrégation (jama\u2019a) ?",
    answer:
      "Le Prophète a enseigné que la prière en congrégation surpasse la prière individuelle de vingt-sept degrés (Bukhari 645). Il a également dit que si les gens connaissaient les mérites de l\u2019appel à la prière et du premier rang, ils tireraient au sort pour y accéder (Bukhari 615). La prière en groupe renforce le lien communautaire et augmente la récompense.",
  },
  {
    question: "Quelles sont les prières surérogatoires (nawafil) les plus méritoires ?",
    answer:
      "Les prières surérogatoires les plus méritoires sont les rawatib (prières accompagnant les prières obligatoires), dont douze unités quotidiennes permettent d\u2019obtenir une maison au Paradis (Tirmidhi 414). Le tahajjud (prière de nuit) est considéré comme la meilleure prière après les prières obligatoires (Muslim 1163). La prière du Duha (matinée) est également recommandée.",
  },
  {
    question: "Que se passe-t-il si un musulman abandonne la prière ?",
    answer:
      "Le Prophète a dit que l\u2019engagement qui distingue le musulman du mécréant est la prière, et que celui qui l\u2019abandonne a mécru (Muslim 82, Tirmidhi 2621). Les savants divergent sur la portée de ce hadith : certains, comme l\u2019imam Ahmad, considèrent que l\u2019abandon total de la prière constitue une mécréance majeure, tandis que d\u2019autres, comme la majorité des hanafites, le considèrent comme un péché majeur sans sortie de l\u2019islam.",
  },
  {
    question: "Comment le Prophète accomplissait-il ses prières quotidiennes ?",
    answer:
      "Le Prophète accomplissait ses prières avec sérénité et concentration (khushu\u2019). Il prenait le temps de chaque position : la station debout, l\u2019inclinaison, la prosternation. Il a ordonné à celui qui priait mal de recommencer sa prière en prenant le temps de chaque position (Bukhari 757). Il a aussi enseigné que la prosternation est le moment où le serviteur est le plus proche de son Seigneur (Muslim 482).",
  },
];

export default function HadithPriereIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-priere-islam/#article",
        headline:
          "Hadiths sur la prière en islam : enseignements prophétiques sur la salat",
        description:
          "Découvrez les hadiths authentiques sur la prière (salat) en islam : importance, cinq prières obligatoires, nawafil, prière en congrégation.",
        image: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-priere-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-priere-islam/#breadcrumb",
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
            name: "Hadiths sur la prière",
            item: "https://www.islamreligion.fr/hadith-priere-islam",
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
          title="Hadiths sur la prière en islam"
          subtitle="Les enseignements prophétiques sur la salat : pilier fondamental de l&apos;islam, mérites des cinq prières, prières surérogatoires et prière en congrégation selon la Sunna authentique."
          imageSrc="/images/prosternation-sujud-priere-islam-mosquee.jpg"
          imageAlt="Hadiths sur la prière en islam, prosternation et sujud dans une mosquée"
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
                  Hadiths sur la prière
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
                    La prière (salat) est le deuxième pilier de l&apos;islam et le premier acte sur lequel le serviteur sera interrogé le Jour du Jugement.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Prophète a comparé les cinq prières quotidiennes à une rivière qui efface les péchés cinq fois par jour.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La prière en congrégation surpasse la prière individuelle de vingt-sept degrés selon les hadiths authentiques.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les prières surérogatoires (nawafil) complètent les prières obligatoires et rapprochent le serviteur de son Seigneur.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique de la prière en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur la prière, il est essentiel de rappeler que la salat est d&apos;abord une prescription coranique. Allah a ordonné la prière à de nombreuses reprises dans le Coran, la liant tantôt à la réussite, tantôt à la sérénité, tantôt à la protection contre les turpitudes. C&apos;est sur cette base coranique que le Prophète ﷺ a enseigné les modalités pratiques et les mérites de chaque prière.
                </p>

                <HadithCard
                  arabic="إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ وَلَذِكْرُ اللَّهِ أَكْبَرُ"
                  text="En vérité, la prière préserve de la turpitude et du blâmable. Et le rappel d&apos;Allah est certes ce qu&apos;il y a de plus grand."
                  source="Coran, sourate Al-Ankabut (29:45)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset fondateur révèle la double fonction de la prière : elle est à la fois un bouclier contre les mauvais comportements et un moyen de se rappeler d&apos;Allah. Les savants expliquent que la prière accomplie avec concentration (<em>khushu&apos;</em>) transforme progressivement le comportement du prieur, l&apos;éloignant naturellement des péchés. Le rappel d&apos;Allah (<em>dhikr</em>) mentionné à la fin du verset indique que la salat est la forme la plus élevée de dhikr.
                </p>

                <HadithCard
                  arabic="حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَىٰ وَقُومُوا لِلَّهِ قَانِتِينَ"
                  text="Soyez assidus aux prières et à la prière médiane, et tenez-vous debout devant Allah avec humilité."
                  source="Coran, sourate Al-Baqara (2:238)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;injonction coranique de &laquo;&nbsp;préserver&nbsp;&raquo; les prières implique de les accomplir dans leurs horaires, avec leurs conditions et leurs piliers. La mention de la &laquo;&nbsp;prière médiane&nbsp;&raquo; (<em>as-salat al-wusta</em>) fait l&apos;objet de divergences parmi les savants, mais la majorité penche pour la prière du &apos;Asr. Le terme &laquo;&nbsp;qanitin&nbsp;&raquo; (avec humilité) rappelle que la prière n&apos;est pas un simple exercice physique, mais un acte de soumission intérieure à Allah.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Importance de la priere      */}
              {/* ====================================== */}
              <section id="importance-priere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance de la prière selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La prière occupe une place centrale dans la vie du musulman. Le Prophète ﷺ a souligné à maintes reprises que la salat est le pilier de la religion, le premier acte jugé et la distinction entre le croyant et le mécréant. Les hadiths suivants établissent le statut fondamental de la prière en islam.
                </p>

                <HadithBlock
                  number={1}
                  title="La prière, pilier de l&apos;islam"
                  narrator="Ibn &apos;Umar"
                  arabic="بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ"
                  translation="L&apos;islam est bâti sur cinq (piliers) : l&apos;attestation qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah et que Muhammad est le Messager d&apos;Allah, l&apos;accomplissement de la prière, l&apos;acquittement de la zakat, le pèlerinage et le jeûne du mois de Ramadan."
                  source="Sahih Al-Bukhari, n°8 — Sahih Muslim, n°16"
                  grade="sahih"
                  explanation="Ce hadith fondateur place la prière comme le deuxième pilier de l&apos;islam, immédiatement après l&apos;attestation de foi. Le terme &laquo; iqam as-salat &raquo; (l&apos;accomplissement de la prière) implique non seulement de prier, mais de la faire correctement, dans ses horaires et avec ses conditions. Les savants soulignent que la prière est le seul pilier qui se répète quotidiennement, ce qui témoigne de son importance capitale dans la vie du croyant."
                />

                <HadithBlock
                  number={2}
                  title="La prière, premier acte jugé le Jour du Jugement"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ، فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ، وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ"
                  translation="La première chose sur laquelle le serviteur sera jugé le Jour du Jugement est sa prière. Si elle est bonne, il aura réussi et sera sauvé. Si elle est déficiente, il aura échoué et sera perdant."
                  source="Jami&apos; at-Tirmidhi, n°413"
                  grade="sahih"
                  explanation="Ce hadith révèle que la prière sera le premier sujet d&apos;interrogation devant Allah. Le Prophète ﷺ utilise les termes &laquo; aflaha &raquo; (réussi) et &laquo; anjaha &raquo; (sauvé) pour décrire celui dont la prière est bonne, tandis que celui dont la prière est déficiente est décrit comme &laquo; khaba &raquo; (échoué) et &laquo; khasira &raquo; (perdant). Les savants expliquent que si la prière est déficiente, Allah ordonne de vérifier si le serviteur a des prières surérogatoires pour compléter les manques."
                />

                <HadithBlock
                  number={3}
                  title="L&apos;abandon de la prière, frontière entre la foi et la mécréance"
                  narrator="Jabir ibn &apos;Abdullah"
                  arabic="بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلَاةِ"
                  translation="Entre l&apos;homme et le polythéisme et la mécréance se trouve l&apos;abandon de la prière."
                  source="Sahih Muslim, n°82"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus sévères concernant la prière. Le Prophète ﷺ établit que la prière est la frontière entre l&apos;islam et la mécréance. Les savants ont longuement débattu de la portée de ce hadith. L&apos;imam Ahmad ibn Hanbal considère que l&apos;abandon total de la prière constitue une mécréance majeure qui fait sortir de l&apos;islam. Les autres imams, dont Abu Hanifa, Malik et Ash-Shafi&apos;i, considèrent qu&apos;il s&apos;agit d&apos;un péché majeur sans sortie de l&apos;islam, sauf si l&apos;abandon s&apos;accompagne d&apos;un reniement de son obligation."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths forment un ensemble cohérent sur le statut de la prière en islam. Elle est un pilier fondamental, le premier acte jugé et la frontière entre la foi et la mécréance. Pour approfondir la biographie du Prophète ﷺ et ses enseignements, consultez notre article sur les{" "}
                  <Link href="/hadith-prophete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths du Prophète Muhammad ﷺ
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Les cinq prieres             */}
              {/* ====================================== */}
              <section id="cinq-prieres" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les cinq prières obligatoires et leurs mérites
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les cinq prières quotidiennes constituent l&apos;ossature de la journée du musulman. Le Prophète ﷺ a enseigné leurs horaires, leurs modalités et leurs mérites spécifiques. Les hadiths suivants montrent comment ces cinq prières purifient le croyant et effacent ses péchés tout au long de la journée.
                </p>

                <HadithBlock
                  number={4}
                  title="Les cinq prières effacent les péchés"
                  narrator="Abu Hurayra"
                  arabic="أَرَأَيْتُمْ لَوْ أَنَّ نَهْرًا بِبَابِ أَحَدِكُمْ يَغْتَسِلُ مِنْهُ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ هَلْ يَبْقَى مِنْ دَرَنِهِ شَيْءٌ؟ قَالُوا: لَا يَبْقَى مِنْ دَرَنِهِ شَيْءٌ. قَالَ: فَذَلِكَ مَثَلُ الصَّلَوَاتِ الْخَمْسِ يَمْحُو اللَّهُ بِهِنَّ الْخَطَايَا"
                  translation="Que pensez-vous s&apos;il y avait une rivière devant la porte de l&apos;un d&apos;entre vous et qu&apos;il s&apos;y baignait cinq fois par jour, resterait-il de sa saleté quelque chose ? Ils dirent : Il ne resterait rien de sa saleté. Il dit : Telle est la parabole des cinq prières : Allah efface par elles les péchés."
                  source="Sahih Al-Bukhari, n°528 — Sahih Muslim, n°667"
                  grade="sahih"
                  explanation="Ce hadith utilise une image saisissante pour faire comprendre le pouvoir purificateur de la prière. La rivière devant la porte symbolise l&apos;accessibilité et la régularité de la purification. Comme l&apos;eau nettoie le corps, la prière nettoie l&apos;âme de ses péchés mineurs. Les savants précisent que les péchés effacés sont les péchés mineurs (<em>sagha&apos;ir</em>), tandis que les péchés majeurs (<em>kaba&apos;ir</em>) nécessitent un repentir sincère (tawba)."
                />

                <HadithBlock
                  number={5}
                  title="Le mérite de la prière du Fajr et du &apos;Isha"
                  narrator="&apos;Uthman ibn &apos;Affan"
                  arabic="مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ فَكَأَنَّمَا قَامَ نِصْفَ اللَّيْلِ، وَمَنْ صَلَّى الصُّبْحَ فِي جَمَاعَةٍ فَكَأَنَّمَا صَلَّى اللَّيْلَ كُلَّهُ"
                  translation="Celui qui accomplit la prière du &apos;Isha en congrégation, c&apos;est comme s&apos;il avait prié la moitié de la nuit. Et celui qui accomplit la prière du Fajr (Subh) en congrégation, c&apos;est comme s&apos;il avait prié la nuit entière."
                  source="Sahih Muslim, n°656"
                  grade="sahih"
                  explanation="Ce hadith met en lumière le mérite exceptionnel de deux prières souvent négligées : le &apos;Isha et le Fajr. Ces deux prières sont les plus difficiles pour les hypocrites selon un autre hadith. Le Prophète ﷺ enseigne ici que leur accomplissement en congrégation équivaut à une nuit entière de prière. Les savants en déduisent que la difficulté d&apos;un acte d&apos;adoration augmente sa récompense, car le Fajr et le &apos;Isha demandent un effort particulier (se lever tôt, rester éveillé tard)."
                />

                <HadithBlock
                  number={6}
                  title="La prière du &apos;Asr et son importance"
                  narrator="Abu al-Mahdi Buraydah"
                  arabic="مَنْ تَرَكَ صَلَاةَ الْعَصْرِ فَقَدْ حَبِطَ عَمَلُهُ"
                  translation="Celui qui délaisse la prière du &apos;Asr, ses oeuvres seront vaines."
                  source="Sahih Al-Bukhari, n°553"
                  grade="sahih"
                  explanation="Ce hadith montre la gravité de négliger la prière du &apos;Asr en particulier. Le terme &laquo; habita &raquo; (être rendu vain) est très fort dans le vocabulaire coranique et prophétique, habituellement réservé à l&apos;apostasie ou aux péchés majeurs. Les savants expliquent que le &apos;Asr coïncide avec un moment d&apos;activité intense où l&apos;on est facilement distrait par les affaires de ce monde. C&apos;est pourquoi le Prophète ﷺ a mis en garde spécifiquement contre son abandon. Ce hadith est rapproché du verset coranique sur la &laquo; prière médiane &raquo; (sourate Al-Baqara, 2:238)."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la prière, ses conditions, ses piliers et ses mérites avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ====================================== */}
              {/* SECTION : Prieres suregatoires         */}
              {/* ====================================== */}
              <section id="prieres-suregatoires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les prières surérogatoires (nawafil) dans la Sunna
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà des cinq prières obligatoires, le Prophète ﷺ accomplissait régulièrement des prières surérogatoires (<em>nawafil</em>). Ces prières complètent les éventuels manques des prières obligatoires et rapprochent le serviteur d&apos;Allah. Parmi elles, les rawatib (prières régulières), le tahajjud (prière de nuit) et le Duha (prière de la matinée) occupent une place privilégiée.
                </p>

                <HadithBlock
                  number={7}
                  title="Douze unités de prières surérogatoires pour une maison au Paradis"
                  narrator="Umm Habiba"
                  arabic="مَا مِنْ عَبْدٍ مُسْلِمٍ يُصَلِّي لِلَّهِ كُلَّ يَوْمٍ ثِنْتَيْ عَشْرَةَ رَكْعَةً تَطَوُّعًا غَيْرَ فَرِيضَةٍ إِلَّا بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ"
                  translation="Tout serviteur musulman qui prie pour Allah chaque jour douze unités de prière surérogatoire en dehors des prières obligatoires, Allah lui bâtira une maison au Paradis."
                  source="Sahih Muslim, n°728"
                  grade="sahih"
                  explanation="Ce hadith mentionne les douze unités de rawatib : deux avant le Fajr, quatre avant le Dhuhr et deux après, deux après le Maghrib et deux après le &apos;Isha. Ces prières forment un complément quotidien aux prières obligatoires. La récompense — une maison au Paradis — montre l&apos;immense valeur que ces prières ont auprès d&apos;Allah. Les savants soulignent que la constance (<em>mudawama</em>) est la clé : il vaut mieux accomplir peu mais régulièrement que beaucoup de manière sporadique."
                />

                <HadithBlock
                  number={8}
                  title="Le mérite de la prière de nuit (tahajjud)"
                  narrator="Abu Hurayra"
                  arabic="أَفْضَلُ الصَّلَاةِ بَعْدَ الْفَرِيضَةِ صَلَاةُ اللَّيْلِ"
                  translation="La meilleure prière après la prière obligatoire est la prière de la nuit."
                  source="Sahih Muslim, n°1163"
                  grade="sahih"
                  explanation="Le tahajjud est la prière accomplie dans le dernier tiers de la nuit, après avoir dormi. Le Prophète ﷺ la plaçait au sommet des prières surérogatoires car elle demande un effort considérable : quitter son lit dans l&apos;obscurité pour se tenir devant Allah. Ce moment est décrit dans d&apos;autres hadiths comme celui où Allah descend au ciel le plus bas pour répondre aux invocations de Ses serviteurs. Les savants recommandent de commencer progressivement, même par deux unités de prière."
                />

                <HadithBlock
                  number={9}
                  title="La prière du Duha, aumône pour chaque articulation"
                  narrator="Abu Dharr"
                  arabic="يُصْبِحُ عَلَى كُلِّ سُلَامَى مِنْ أَحَدِكُمْ صَدَقَةٌ، فَكُلُّ تَسْبِيحَةٍ صَدَقَةٌ، وَكُلُّ تَحْمِيدَةٍ صَدَقَةٌ، وَكُلُّ تَهْلِيلَةٍ صَدَقَةٌ، وَكُلُّ تَكْبِيرَةٍ صَدَقَةٌ، وَأَمْرٌ بِالْمَعْرُوفِ صَدَقَةٌ، وَنَهْيٌ عَنِ الْمُنْكَرِ صَدَقَةٌ، وَيُجْزِئُ مِنْ ذَلِكَ رَكْعَتَانِ يَرْكَعُهُمَا مِنَ الضُّحَى"
                  translation="Chaque matin, une aumône est due pour chaque articulation de l&apos;un d&apos;entre vous. Chaque glorification (subhan Allah) est une aumône, chaque louange (al-hamdulillah) est une aumône, chaque proclamation d&apos;unicité (la ilaha illa Allah) est une aumône, chaque proclamation de grandeur (Allahu akbar) est une aumône, ordonner le bien est une aumône, interdire le mal est une aumône. Et deux unités de prière du Duha suffisent pour tout cela."
                  source="Sahih Muslim, n°720"
                  grade="sahih"
                  explanation="Ce hadith enseigne que le corps humain compte 360 articulations et que chacune d&apos;elles nécessite une aumône de gratitude chaque matin. Le Prophète ﷺ montre ensuite que deux unités de prière du Duha (accomplies entre le lever du soleil et le zénith) suffisent à acquitter cette dette de reconnaissance envers Allah. C&apos;est un hadith qui simplifie la pratique tout en en montrant l&apos;immense portée. Les savants recommandent d&apos;accomplir le Duha entre deux et huit unités de prière."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Les prières surérogatoires sont un trésor souvent sous-estimé. Elles complètent les prières obligatoires, rapprochent le serviteur d&apos;Allah et constituent une réserve de bonnes actions pour le Jour du Jugement. Pour en savoir plus sur la purification qui précède la prière, consultez notre article sur les{" "}
                  <Link href="/hadith-ablutions-purete-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur les ablutions et la pureté en islam
                  </Link>.
                </p>
              </section>

              {/* ====================================== */}
              {/* SECTION : Priere en congregation       */}
              {/* ====================================== */}
              <section id="priere-congregation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La prière en congrégation (salat al-jama&apos;a)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La prière en congrégation est l&apos;un des rites les plus caractéristiques de l&apos;islam. Le Prophète ﷺ y accordait une importance capitale, au point d&apos;envisager de punir ceux qui s&apos;en absentaient sans excuse. Les hadiths suivants montrent les mérites immenses de la prière collective et son rôle dans la cohésion de la communauté musulmane.
                </p>

                <HadithBlock
                  number={10}
                  title="La prière en congrégation surpasse la prière individuelle"
                  narrator="Ibn &apos;Umar"
                  arabic="صَلَاةُ الْجَمَاعَةِ تَفْضُلُ صَلَاةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً"
                  translation="La prière en congrégation surpasse la prière individuelle de vingt-sept degrés."
                  source="Sahih Al-Bukhari, n°645 — Sahih Muslim, n°650"
                  grade="sahih"
                  explanation="Ce hadith établit clairement la supériorité de la prière collective. Le chiffre &laquo; vingt-sept degrés &raquo; n&apos;est pas symbolique mais indique une multiplication réelle de la récompense. Dans une autre version (Bukhari 619), le chiffre mentionné est vingt-cinq. Les savants réconcilient ces deux versions en disant que les mérites varient selon le degré de khushu&apos;, la distance parcourue pour se rendre à la mosquée et d&apos;autres facteurs. L&apos;imam An-Nawawi considère que les vingt-sept degrés représentent le maximum."
                />

                <HadithBlock
                  number={11}
                  title="Le mérite de marcher vers la mosquée"
                  narrator="Abu Hurayra"
                  arabic="مَنْ تَطَهَّرَ فِي بَيْتِهِ ثُمَّ مَشَى إِلَى بَيْتٍ مِنْ بُيُوتِ اللَّهِ لِيَقْضِيَ فَرِيضَةً مِنْ فَرَائِضِ اللَّهِ كَانَتْ خَطْوَتَاهُ إِحْدَاهُمَا تَحُطُّ خَطِيئَةً وَالْأُخْرَى تَرْفَعُ دَرَجَةً"
                  translation="Celui qui fait ses ablutions chez lui puis se rend à l&apos;une des maisons d&apos;Allah pour accomplir une obligation divine, chacun de ses pas efface un péché et l&apos;autre élève d&apos;un degré."
                  source="Sahih Muslim, n°666"
                  grade="sahih"
                  explanation="Ce hadith transforme le simple acte de marcher vers la mosquée en une source de récompense double : l&apos;effacement des péchés et l&apos;élévation en degrés auprès d&apos;Allah. Chaque pas compte, ce qui signifie que plus la mosquée est éloignée, plus la récompense est grande. Les savants y voient un encouragement à ne pas choisir systématiquement la mosquée la plus proche et à multiplier les pas vers les lieux de prière. Ce hadith complète celui sur les vingt-sept degrés en montrant que la récompense commence avant même la prière."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La prière en congrégation n&apos;est pas seulement un acte d&apos;adoration individuel multiplié : c&apos;est un acte communautaire qui renforce les liens entre musulmans, enseigne la discipline et l&apos;égalité devant Allah. Le riche et le pauvre, le savant et l&apos;ignorant prient épaule contre épaule, alignés dans les mêmes rangs. Pour découvrir les mérites spécifiques du vendredi, consultez notre article sur les{" "}
                  <Link href="/hadith-vendredi-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le vendredi en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur la prière et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur la prière. Leurs explications éclairent la portée juridique et spirituelle de ces enseignements prophétiques, et permettent de saisir la profondeur de la salat au-delà de ses gestes extérieurs.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La prière est le pilier de la religion. Celui qui l&apos;établit a établi la religion, et celui qui la détruit a détruit la religion. Elle est le lien entre le serviteur et son Seigneur : tant qu&apos;il est en prière, il est en audience privée avec Allah.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — &apos;Umar ibn al-Khattab, rapporté dans les Athar
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le hadith sur la rivière qui efface les saletés montre que la prière purifie les péchés mineurs commis entre deux prières, à condition d&apos;éviter les péchés majeurs. C&apos;est une miséricorde d&apos;Allah qui a fait de la prière un renouvellement quotidien du repentir.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La prière est la nourriture de l&apos;âme comme la nourriture est celle du corps. Si le corps est privé de nourriture, il s&apos;affaiblit et meurt. De même, l&apos;âme privée de prière s&apos;éteint et se corrompt. C&apos;est pourquoi le Prophète a dit que la fraîcheur de ses yeux était dans la prière.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>As-Salat wa hukm tarikuha</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que la prière en islam dépasse largement le cadre d&apos;un simple rituel. Elle est une nourriture spirituelle, une purification continue et un lien vivant avec Allah. Les quatre écoles de jurisprudence (<em>madhahib</em>) s&apos;appuient sur ces hadiths pour déterminer les conditions, les piliers et les obligations de la salat, formant ainsi un corpus juridique complet connu sous le nom de <em>fiqh as-salat</em>.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour la pratique quotidienne de la prière :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais négliger la prière obligatoire
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La prière est le deuxième pilier de l&apos;islam et le premier acte jugé. Son abandon est décrit comme la frontière entre la foi et la mécréance. Le musulman doit placer la salat au sommet de ses priorités quotidiennes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Prier dans les horaires prescrits
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque prière a un temps défini et le Prophète ﷺ a mis en garde contre le retardement de la prière. La prière du &apos;Asr, en particulier, ne doit jamais être négligée sous prétexte d&apos;être occupé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Privilégier la prière en congrégation
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La prière en groupe multiplie la récompense de vingt-sept degrés. Chaque pas vers la mosquée efface un péché et élève d&apos;un degré. Le musulman doit s&apos;efforcer de prier en congrégation autant que possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Compléter par les prières surérogatoires
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les douze unités de rawatib quotidiennes permettent d&apos;obtenir une maison au Paradis. Le tahajjud est la meilleure prière après les obligatoires. Ces nawafil comblent les manques des prières obligatoires le Jour du Jugement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Cultiver la concentration (khushu&apos;) dans la prière
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La prière n&apos;est pas un simple exercice physique. Le Coran et la Sunna insistent sur l&apos;humilité et la présence du coeur. Le prieur doit se rappeler qu&apos;il est en audience privée avec Allah et méditer les versets qu&apos;il récite.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Voir la prière comme une purification continue
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les cinq prières sont comme une rivière qui efface les péchés cinq fois par jour. Cette vision transforme la prière d&apos;une obligation en une opportunité de renouvellement spirituel et de rapprochement avec Allah.
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
                  description="Comprenez les hadiths sur la prière dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Les hadiths du Prophète Muhammad ﷺ : fondements et collections"
                  description="Découvrez l&apos;histoire des grandes collections de hadiths et les critères d&apos;authenticité."
                  href="/hadith-prophete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur les ablutions et la pureté en islam"
                  description="Les enseignements prophétiques sur le wudu, la purification et les conditions de la prière."
                  href="/hadith-ablutions-purete-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le vendredi en islam"
                  description="Les mérites du vendredi, la prière du Jumu&apos;a et les enseignements prophétiques sur ce jour béni."
                  href="/hadith-vendredi-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
