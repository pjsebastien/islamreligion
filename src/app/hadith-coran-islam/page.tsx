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
    "Hadiths sur le Coran en islam : mérites, lecture et mémorisation",
  description:
    "Découvrez les hadiths authentiques sur le Coran en islam : mérites de la lecture, récompenses de la mémorisation, intercession le Jour du Jugement, étiquettes de la récitation. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le Coran en islam : mérites, lecture et mémorisation",
    description:
      "Les hadiths authentiques sur le Coran : mérites de la lecture, mémorisation (hifdh), intercession et étiquettes de la récitation selon la Sunna du Prophète Muhammad.",
    url: "https://www.islamreligion.fr/hadith-coran-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-coran-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique" },
  { id: "merites-lecture", label: "Mérites de la lecture du Coran" },
  { id: "memorisation", label: "La mémorisation du Coran (hafidh)" },
  { id: "intercession", label: "Le Coran comme intercesseur" },
  { id: "etiquettes-recitation", label: "Étiquettes de la récitation" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Enseignements et leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les mérites de la lecture du Coran selon les hadiths ?",
    answer:
      "Les hadiths enseignent que chaque lettre du Coran lue rapporte dix bonnes actions (Tirmidhi 2910), que le lecteur assidu sera avec les anges nobles et obéissants (Bukhari 4937), et que la sourate Al-Baqara et Al Imran intercéderont pour celui qui les récitait (Muslim 804). La lecture du Coran est l\u2019une des meilleures adorations qu\u2019un musulman puisse accomplir.",
  },
  {
    question:
      "Quelle est la récompense de la mémorisation du Coran en islam ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que le hafidh (mémorisateur du Coran) sera couronné d\u2019une couronne de dignité le Jour du Jugement et que ses parents recevront un vêtement de lumière (Tirmidhi 2915). Il a également dit que celui qui excelle dans la récitation du Coran sera avec les anges scribes, nobles et obéissants (Bukhari 4937).",
  },
  {
    question:
      "Le Coran intercédera-t-il pour les musulmans le Jour du Jugement ?",
    answer:
      "Oui, le Prophète a affirmé que le Coran viendra le Jour de la Résurrection comme intercesseur pour ceux qui le récitaient (Muslim 804). Il a également dit que le jeûne et le Coran intercéderont pour le serviteur : le jeûne dira qu\u2019il l\u2019a empêché de manger et de boire, et le Coran dira qu\u2019il l\u2019a empêché de dormir la nuit (Ahmad 6626).",
  },
  {
    question:
      "Comment réciter le Coran correctement selon la Sunna ?",
    answer:
      "Le Prophète a recommandé d\u2019embellir sa voix lors de la récitation du Coran (Abu Dawud 1468), de le réciter avec méditation (tartil) comme l\u2019ordonne le Coran lui-même, et de ne pas le réciter en moins de trois jours (Abu Dawud 1390). La récitation doit être accompagnée de la purification rituelle, de l\u2019orientation vers la qibla si possible, et du recueillement du c\u0153ur.",
  },
  {
    question:
      "Quel est le statut de celui qui lit difficilement le Coran ?",
    answer:
      "Le Prophète a enseigné que celui qui lit le Coran en trébuchant et en éprouvant de la difficulté aura une double récompense (Bukhari 4937, Muslim 798) : une récompense pour la lecture et une pour l\u2019effort fourni. Cela montre que la difficulté n\u2019est pas un obstacle mais une source de mérite supplémentaire.",
  },
  {
    question:
      "Quelle sourate du Coran est la plus méritoire selon les hadiths ?",
    answer:
      "Parmi les sourates les plus méritoires, le Prophète a cité sourate Al-Baqara dont il a dit qu\u2019elle chassait les démons de la maison (Muslim 780), sourate Al-Kahf dont la lecture le vendredi illumine d\u2019une lumière entre deux vendredis (Nasa\u2019i, Al-Kubra 10786), et sourate Al-Mulk dont il a dit qu\u2019elle protégeait du châtiment de la tombe (Tirmidhi 2890).",
  },
  {
    question:
      "Les savants recommandent-ils un programme quotidien de lecture du Coran ?",
    answer:
      "Oui, les savants recommandent de diviser le Coran en portions quotidiennes (hizb ou juz\u2019). Le Prophète a dit à Abdullah ibn Amr de lire le Coran en un mois, puis en sept jours au minimum (Abu Dawud 1390). L\u2019imam An-Nawawi conseillait de ne jamais laisser passer un jour sans lire ne serait-ce qu\u2019une partie du Coran, en privilégiant la régularité sur la quantité.",
  },
];

export default function HadithCoranIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-coran-islam/#article",
        headline:
          "Hadiths sur le Coran en islam : mérites, lecture et mémorisation",
        description:
          "Découvrez les hadiths authentiques sur le Coran en islam : mérites de la lecture, récompenses de la mémorisation, intercession et étiquettes de la récitation.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-coran-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-coran-islam/#breadcrumb",
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
            name: "Hadiths sur le Coran",
            item: "https://www.islamreligion.fr/hadith-coran-islam",
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
          title="Hadiths sur le Coran en islam"
          subtitle="Les enseignements prophétiques sur les mérites de la lecture du Coran, la récompense de sa mémorisation, son intercession le Jour du Jugement et les étiquettes de la récitation selon la Sunna authentique."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Hadiths sur le Coran en islam, mérites de la lecture et de la mémorisation"
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
                  Hadiths sur le Coran
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
                    Chaque lettre du Coran lue rapporte au minimum dix bonnes actions, et la récompense est multipliée selon la sincérité du lecteur.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le hafidh (mémorisateur du Coran) sera couronné d&apos;une couronne de dignité le Jour du Jugement et intercédera pour ses parents.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Coran viendra comme intercesseur le Jour de la Résurrection pour ceux qui le récitaient régulièrement dans leur vie.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La récitation du Coran doit s&apos;accompagner de méditation, d&apos;une belle voix et du respect des règles de tajwid pour en tirer pleinement profit.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique : ce que le Coran dit de lui-même
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths du Prophète ﷺ sur le Coran, il est essentiel de comprendre comment le Coran se présente lui-même. Le Livre d&apos;Allah se décrit comme une guidance (<em>huda</em>), une lumière (<em>nur</em>), un discernement (<em>furqan</em>) et une guérison (<em>shifa</em>) pour les croyants. Ces qualificatifs coraniques posent le cadre dans lequel s&apos;inscrivent ensuite les enseignements prophétiques sur ses mérites et sa lecture.
                </p>

                <HadithCard
                  arabic="إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ وَيُبَشِّرُ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا كَبِيرًا"
                  text="Certes, ce Coran guide vers ce qui est le plus droit et annonce aux croyants qui font les bonnes oeuvres qu&apos;ils auront une grande récompense."
                  source="Coran, sourate Al-Isra (17:9)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit la fonction première du Coran : guider vers la voie la plus droite. Il ne s&apos;agit pas d&apos;un livre de lecture passive mais d&apos;un guide actif qui oriente les actes du croyant. Les savants soulignent que le terme &laquo;&nbsp;aqwam&nbsp;&raquo; (le plus droit) est au superlatif, indiquant que le Coran surpasse toute autre source de guidance.
                </p>

                <HadithCard
                  arabic="وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ وَلَا يَزِيدُ الظَّالِمِينَ إِلَّا خَسَارًا"
                  text="Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants. Cependant, cela ne fait qu&apos;accroître la perte des injustes."
                  source="Coran, sourate Al-Isra (17:82)"
                />

                <HadithCard
                  arabic="كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ"
                  text="Voici un Livre béni que Nous avons fait descendre vers toi, afin qu&apos;ils méditent sur ses versets et que les doués d&apos;intelligence réfléchissent."
                  source="Coran, sourate Sad (38:29)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce dernier verset est fondamental car il lie la bénédiction du Coran à sa méditation (<em>tadabbur</em>). Le Coran n&apos;est pas un simple texte à réciter mécaniquement : sa lecture doit être accompagnée de réflexion et de compréhension. C&apos;est dans ce cadre que le Prophète ﷺ a développé ses enseignements sur les mérites, les règles et les récompenses liés au Coran.
                </p>
              </section>

              {/* ========================================= */}
              {/* SECTION : Mérites de la lecture du Coran  */}
              {/* ========================================= */}
              <section id="merites-lecture" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Mérites de la lecture du Coran selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a abondamment encouragé la lecture du Coran et a détaillé les immenses récompenses qui y sont attachées. Ces hadiths montrent que la récitation du Coran est l&apos;une des adorations les plus nobles et les plus récompensées en islam. Que le lecteur soit fluide ou qu&apos;il trébuche sur les mots, la récompense est garantie par la miséricorde divine.
                </p>

                <HadithBlock
                  number={1}
                  title="Chaque lettre du Coran vaut dix récompenses"
                  narrator="Abdullah ibn Mas&apos;ud"
                  arabic="مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا لَا أَقُولُ الم حَرْفٌ وَلَكِنْ أَلِفٌ حَرْفٌ وَلَامٌ حَرْفٌ وَمِيمٌ حَرْفٌ"
                  translation="Celui qui lit une lettre du Livre d&apos;Allah obtient une bonne action, et la bonne action est récompensée au décuple. Je ne dis pas que Alif-Lam-Mim est une lettre, mais Alif est une lettre, Lam est une lettre et Mim est une lettre."
                  source="Jami&apos; at-Tirmidhi, n°2910"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus puissants encouragements à la lecture du Coran. Le Prophète ﷺ précise que chaque lettre — et non chaque mot ou verset — vaut au minimum dix bonnes actions. En prenant l&apos;exemple de &laquo;&nbsp;Alif-Lam-Mim&nbsp;&raquo;, il montre que trois lettres qui semblent ne former qu&apos;un seul élément comptent en réalité pour trente bonnes actions. Cette arithmétique divine rend la lecture du Coran extraordinairement rentable en termes de récompense spirituelle, même pour quelques minutes de lecture quotidienne."
                />

                <HadithBlock
                  number={2}
                  title="Le lecteur assidu du Coran avec les anges"
                  narrator="Aisha"
                  arabic="الْمَاهِرُ بِالْقُرْآنِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ وَالَّذِي يَقْرَأُ الْقُرْآنَ وَيَتَتَعْتَعُ فِيهِ وَهُوَ عَلَيْهِ شَاقٌّ لَهُ أَجْرَانِ"
                  translation="Celui qui excelle dans la récitation du Coran sera avec les anges scribes, nobles et obéissants. Et celui qui le récite en trébuchant et en éprouvant de la difficulté aura une double récompense."
                  source="Sahih Al-Bukhari, n°4937 — Sahih Muslim, n°798"
                  grade="sahih"
                  explanation="Ce hadith offre un double encouragement. Pour le lecteur fluide et maîtrisant le tajwid, la récompense est d&apos;être élevé au rang des anges scribes (as-safara al-kiram al-barara), ceux-là mêmes qui transmettent la Révélation. Pour celui qui lit difficilement, la récompense est doublée : une pour la lecture elle-même et une pour l&apos;effort et la persévérance. Les savants y voient une preuve qu&apos;aucun musulman n&apos;est dispensé de lire le Coran sous prétexte qu&apos;il ne maîtrise pas la langue arabe ou le tajwid."
                />

                <HadithBlock
                  number={3}
                  title="La supériorité de celui qui lit le Coran"
                  narrator="Abu Musa al-Ash&apos;ari"
                  arabic="مَثَلُ الْمُؤْمِنِ الَّذِي يَقْرَأُ الْقُرْآنَ مَثَلُ الْأُتْرُجَّةِ رِيحُهَا طَيِّبٌ وَطَعْمُهَا طَيِّبٌ وَمَثَلُ الْمُؤْمِنِ الَّذِي لَا يَقْرَأُ الْقُرْآنَ مَثَلُ التَّمْرَةِ لَا رِيحَ لَهَا وَطَعْمُهَا حُلْوٌ"
                  translation="L&apos;exemple du croyant qui lit le Coran est celui du cédrat : son parfum est agréable et son goût est agréable. Et l&apos;exemple du croyant qui ne lit pas le Coran est celui de la datte : elle n&apos;a pas de parfum mais son goût est sucré."
                  source="Sahih Al-Bukhari, n°5020 — Sahih Muslim, n°797"
                  grade="sahih"
                  explanation="Ce hadith utilise une métaphore sensorielle remarquable. Le cédrat (<em>utrudjja</em>) réunit le parfum et la saveur, comme le croyant lecteur du Coran réunit la foi intérieure et l&apos;influence extérieure. La datte, quant à elle, est sucrée mais sans parfum : le croyant sans Coran possède la foi mais manque du rayonnement que procure la Parole divine. Le Prophète ﷺ enseigne ainsi que le Coran ajoute une dimension supplémentaire à la foi : celle du rayonnement spirituel et de l&apos;influence positive sur l&apos;entourage."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths montrent que la lecture du Coran est récompensée à tous les niveaux : par la multiplication des bonnes actions pour chaque lettre, par l&apos;élévation spirituelle du lecteur, et par le rayonnement intérieur et extérieur qu&apos;elle procure. Pour découvrir d&apos;autres enseignements prophétiques, consultez notre{" "}
                  <Link href="/hadith-du-jour" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    sélection quotidienne de hadiths
                  </Link>.
                </p>
              </section>

              {/* ======================================== */}
              {/* SECTION : La mémorisation du Coran      */}
              {/* ======================================== */}
              <section id="memorisation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La mémorisation du Coran (hafidh) selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La mémorisation du Coran (<em>hifdh</em>) occupe une place éminente en islam. Depuis les premiers compagnons, des générations de musulmans ont porté le Coran dans leurs poitrines, perpétuant une chaîne ininterrompue de transmission orale. Le Prophète ﷺ a décrit les récompenses exceptionnelles réservées au hafidh et à sa famille, faisant de la mémorisation l&apos;un des actes d&apos;adoration les plus méritoires.
                </p>

                <HadithBlock
                  number={4}
                  title="La couronne de dignité pour le hafidh et ses parents"
                  narrator="Abu Hurayra"
                  arabic="يَجِيءُ الْقُرْآنُ يَوْمَ الْقِيَامَةِ فَيَقُولُ يَا رَبِّ حَلِّهِ فَيُلْبَسُ تَاجَ الْكَرَامَةِ ثُمَّ يَقُولُ يَا رَبِّ زِدْهُ فَيُلْبَسُ حُلَّةَ الْكَرَامَةِ ثُمَّ يَقُولُ يَا رَبِّ ارْضَ عَنْهُ فَيَرْضَى عَنْهُ فَيُقَالُ لَهُ اقْرَأْ وَارْقَ وَيُزَادُ بِكُلِّ آيَةٍ حَسَنَةً"
                  translation="Le Coran viendra le Jour du Jugement et dira : &laquo;&nbsp;Seigneur, pare-le !&nbsp;&raquo; On lui mettra alors la couronne de la dignité. Puis il dira : &laquo;&nbsp;Seigneur, ajoute-lui !&nbsp;&raquo; On lui mettra le vêtement de la dignité. Puis il dira : &laquo;&nbsp;Seigneur, sois satisfait de lui !&nbsp;&raquo; Et Allah sera satisfait de lui. On lui dira : &laquo;&nbsp;Lis et monte !&nbsp;&raquo; Et on lui ajoutera une bonne action pour chaque verset."
                  source="Jami&apos; at-Tirmidhi, n°2915"
                  grade="hasan"
                  explanation="Ce hadith décrit une scène grandiose du Jour du Jugement. Le Coran est personnifié et intercède activement pour celui qui l&apos;a mémorisé. La couronne de la dignité (<em>taj al-karama</em>) et le vêtement de la dignité (<em>hullat al-karama</em>) symbolisent l&apos;honneur suprême accordé au hafidh. L&apos;expression &laquo;&nbsp;lis et monte&nbsp;&raquo; (<em>iqra&apos; wa-rqa</em>) indique que chaque verset mémorisé élève le hafidh d&apos;un degré au Paradis. Les savants en déduisent que le rang du hafidh au Paradis est proportionnel au nombre de versets qu&apos;il a appris et pratiqués."
                />

                <HadithBlock
                  number={5}
                  title="Lis et monte dans les degrés du Paradis"
                  narrator="Abdullah ibn &apos;Amr"
                  arabic="يُقَالُ لِصَاحِبِ الْقُرْآنِ اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا فَإِنَّ مَنْزِلَتَكَ عِنْدَ آخِرِ آيَةٍ تَقْرَأُ بِهَا"
                  translation="Il sera dit au compagnon du Coran : &laquo;&nbsp;Lis et monte, et récite comme tu récitais dans la vie d&apos;ici-bas, car ta demeure sera au niveau du dernier verset que tu réciteras.&nbsp;&raquo;"
                  source="Sunan Abu Dawud, n°1464 — Jami&apos; at-Tirmidhi, n°2914"
                  grade="sahih"
                  explanation="Ce hadith complète le précédent en précisant le mécanisme de l&apos;élévation. L&apos;expression &laquo;&nbsp;sahib al-Quran&nbsp;&raquo; (compagnon du Coran) désigne celui qui l&apos;a mémorisé et qui en faisait un compagnon de vie. La mention &laquo;&nbsp;récite comme tu récitais dans la vie d&apos;ici-bas&nbsp;&raquo; lie la récompense à la pratique effective : ce n&apos;est pas la simple mémorisation qui compte, mais la récitation régulière et soignée (<em>tartil</em>). L&apos;imam Ibn al-Qayyim commente que les degrés du Paradis correspondent aux versets du Coran, et que le hafidh monte d&apos;un degré à chaque verset récité."
                />

                <HadithBlock
                  number={6}
                  title="Les parents du hafidh revêtus de lumière"
                  narrator="Mu&apos;adh al-Juhani"
                  arabic="مَنْ قَرَأَ الْقُرْآنَ وَعَمِلَ بِمَا فِيهِ أُلْبِسَ وَالِدَاهُ تَاجًا يَوْمَ الْقِيَامَةِ ضَوْءُهُ أَحْسَنُ مِنْ ضَوْءِ الشَّمْسِ فِي بُيُوتِ الدُّنْيَا"
                  translation="Celui qui lit le Coran et met en pratique ce qu&apos;il contient, ses parents seront revêtus le Jour du Jugement d&apos;une couronne dont la lumière sera plus belle que la lumière du soleil dans les demeures de ce bas monde."
                  source="Sunan Abu Dawud, n°1453"
                  grade="hasan"
                  explanation="Ce hadith ajoute une dimension familiale à la récompense du Coran. Non seulement le hafidh est récompensé, mais ses parents bénéficient également de son effort. La couronne de lumière plus éclatante que le soleil illustre l&apos;immensité de cette récompense. Les savants notent la condition &laquo;&nbsp;et met en pratique ce qu&apos;il contient&nbsp;&raquo; : la mémorisation seule ne suffit pas, elle doit être accompagnée de la mise en application des enseignements coraniques. Ce hadith motive les parents à encourager leurs enfants dans la mémorisation du Coran."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le tajwid, la mémorisation du Coran et les sciences islamiques avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ====================================== */}
              {/* SECTION : Le Coran comme intercesseur  */}
              {/* ====================================== */}
              <section id="intercession" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Coran comme intercesseur le Jour du Jugement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les aspects les plus impressionnants des hadiths sur le Coran se trouve le concept de <em>shafa&apos;a</em> (intercession). Le Prophète ﷺ a enseigné que le Coran se présentera le Jour de la Résurrection comme un intercesseur pour ceux qui le récitaient dans leur vie terrestre. Cette intercession est un privilège immense réservé à ceux qui ont entretenu un lien vivant avec le Livre d&apos;Allah.
                </p>

                <HadithBlock
                  number={7}
                  title="Lisez le Coran car il viendra comme intercesseur"
                  narrator="Abu Umama al-Bahili"
                  arabic="اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ اقْرَءُوا الزَّهْرَاوَيْنِ الْبَقَرَةَ وَسُورَةَ آلِ عِمْرَانَ فَإِنَّهُمَا تَأْتِيَانِ يَوْمَ الْقِيَامَةِ كَأَنَّهُمَا غَمَامَتَانِ أَوْ كَأَنَّهُمَا غَيَايَتَانِ أَوْ كَأَنَّهُمَا فِرْقَانِ مِنْ طَيْرٍ صَوَافَّ تُحَاجَّانِ عَنْ أَصْحَابِهِمَا"
                  translation="Lisez le Coran, car il viendra le Jour de la Résurrection comme intercesseur pour ceux qui le récitaient. Lisez les deux lumineuses : Al-Baqara et Al Imran, car elles viendront le Jour de la Résurrection comme deux nuages, ou comme deux ombres, ou comme deux volées d&apos;oiseaux en rang, plaidant pour ceux qui les récitaient."
                  source="Sahih Muslim, n°804"
                  grade="sahih"
                  explanation="Ce hadith contient deux enseignements majeurs. D&apos;abord, le Coran dans sa globalité sera un intercesseur (shafi&apos;) pour ses compagnons. Ensuite, le Prophète ﷺ distingue particulièrement les sourates Al-Baqara et Al Imran, qu&apos;il appelle &laquo;&nbsp;az-zahrawain&nbsp;&raquo; (les deux lumineuses), en raison de leur longueur, de leur richesse en préceptes et de leur lumière spirituelle. L&apos;image des nuages, des ombres et des oiseaux en rang illustre leur fonction protectrice : elles protégeront et défendront leurs lecteurs assidus lors du Jugement."
                />

                <HadithBlock
                  number={8}
                  title="Le jeûne et le Coran intercéderont pour le serviteur"
                  narrator="Abdullah ibn &apos;Amr"
                  arabic="الصِّيَامُ وَالْقُرْآنُ يَشْفَعَانِ لِلْعَبْدِ يَوْمَ الْقِيَامَةِ يَقُولُ الصِّيَامُ أَيْ رَبِّ مَنَعْتُهُ الطَّعَامَ وَالشَّهَوَاتِ بِالنَّهَارِ فَشَفِّعْنِي فِيهِ وَيَقُولُ الْقُرْآنُ مَنَعْتُهُ النَّوْمَ بِاللَّيْلِ فَشَفِّعْنِي فِيهِ قَالَ فَيُشَفَّعَانِ"
                  translation="Le jeûne et le Coran intercéderont pour le serviteur le Jour de la Résurrection. Le jeûne dira : &laquo;&nbsp;Seigneur, je l&apos;ai empêché de manger et de satisfaire ses désirs pendant le jour, accepte donc mon intercession en sa faveur.&nbsp;&raquo; Et le Coran dira : &laquo;&nbsp;Je l&apos;ai empêché de dormir la nuit, accepte donc mon intercession en sa faveur.&nbsp;&raquo; Et leur intercession sera acceptée."
                  source="Musnad Ahmad, n°6626"
                  grade="sahih"
                  explanation="Ce hadith associe deux grandes adorations : le jeûne et la lecture nocturne du Coran. Chacune sera personnifiée et plaidera la cause du serviteur devant Allah. Le jeûne témoigne des sacrifices diurnes (privation de nourriture et de désirs), tandis que le Coran témoigne des veillées nocturnes consacrées à sa récitation. Les savants rattachent ce hadith au mois de Ramadan en particulier, période où les deux adorations se combinent naturellement, mais il s&apos;applique à toute l&apos;année. L&apos;acceptation de cette double intercession est une promesse divine."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;intercession du Coran est un concept unique en islam qui souligne l&apos;importance de maintenir un lien quotidien avec le Livre d&apos;Allah. Ce n&apos;est pas un objet décoratif à poser sur une étagère, mais un compagnon de vie qui se souviendra de ses fidèles lecteurs le Jour où toute intercession comptera. Pour approfondir le lien entre le Coran et le Ramadan, consultez notre article sur les{" "}
                  <Link href="/hadith-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le Ramadan en islam
                  </Link>.
                </p>
              </section>

              {/* ======================================== */}
              {/* SECTION : Étiquettes de la récitation   */}
              {/* ======================================== */}
              <section id="etiquettes-recitation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Étiquettes de la récitation du Coran
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La lecture du Coran n&apos;est pas un acte anodin : elle requiert un ensemble d&apos;adab (étiquettes) que le Prophète ﷺ a enseignés à ses compagnons. Embellir sa voix, méditer les versets, pleurer par crainte d&apos;Allah et ne pas précipiter la récitation font partie de ces règles qui transforment la lecture en une véritable expérience spirituelle.
                </p>

                <HadithBlock
                  number={9}
                  title="Embellissez le Coran par vos voix"
                  narrator="Abu Hurayra"
                  arabic="زَيِّنُوا الْقُرْآنَ بِأَصْوَاتِكُمْ"
                  translation="Embellissez le Coran par vos voix."
                  source="Sunan Abu Dawud, n°1468 — Sunan An-Nasa&apos;i, n°1015"
                  grade="sahih"
                  explanation="Ce hadith concis mais riche ordonne d&apos;embellir la récitation du Coran. L&apos;imam Ash-Shafi&apos;i et d&apos;autres savants ont compris qu&apos;il s&apos;agit de moduler sa voix avec douceur et mélodie, sans pour autant tomber dans le chant musical qui dénaturerait le texte sacré. Le tajwid (science des règles de récitation) est l&apos;application concrète de ce hadith : il enseigne les prolongations, les pauses et les intonations qui embellissent la lecture. Le Prophète ﷺ lui-même avait une voix d&apos;une grande beauté lors de sa récitation, comme en témoignent de nombreux compagnons."
                />

                <HadithBlock
                  number={10}
                  title="Ne lisez pas le Coran en moins de trois jours"
                  narrator="Abdullah ibn &apos;Amr"
                  arabic="لَا يَفْقَهُ مَنْ قَرَأَ الْقُرْآنَ فِي أَقَلَّ مِنْ ثَلَاثٍ"
                  translation="Ne comprend pas (le Coran) celui qui le récite en moins de trois jours."
                  source="Sunan Abu Dawud, n°1390 — Jami&apos; at-Tirmidhi, n°2949"
                  grade="sahih"
                  explanation="Ce hadith fixe une limite minimale pour la lecture complète du Coran. Le Prophète ﷺ a dit à Abdullah ibn &apos;Amr, qui voulait lire le Coran chaque nuit, de le lire en un mois, puis a accepté progressivement sept jours et finalement trois jours comme minimum absolu. La raison invoquée est la compréhension (<em>fiqh</em>) : lire trop vite empêche la méditation et transforme la récitation en exercice mécanique. Les savants en déduisent que la qualité de la lecture prime sur la quantité, et que le tadabbur (méditation) est un objectif fondamental de la récitation."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces deux hadiths sur les étiquettes de la récitation rappellent que le Coran mérite d&apos;être lu avec soin, beauté et réflexion. Le musulman ne doit ni négliger la qualité de sa voix, ni précipiter sa lecture au détriment de la compréhension. C&apos;est un équilibre entre l&apos;effort physique de la récitation et l&apos;effort intellectuel de la méditation que le Prophète ﷺ a enseigné.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le Coran et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont consacré des ouvrages entiers aux mérites du Coran et aux règles de sa récitation. Leurs commentaires éclairent la portée des hadiths et guident le musulman dans sa relation quotidienne avec le Livre d&apos;Allah.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le compagnon du Coran (sahib al-Quran) n&apos;est pas seulement celui qui l&apos;a mémorisé, mais celui qui le récite régulièrement, médite ses sens et met en pratique ses enseignements. La mémorisation sans pratique est un arbre sans fruit, et la récitation sans méditation est une parole sans âme.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>At-Tibyan fi Adab Hamalat al-Quran</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les degrés du Paradis sont au nombre des versets du Coran. Il sera dit au lecteur du Coran le Jour du Jugement : lis et monte, et ta demeure sera au dernier verset que tu réciteras. Celui qui a mémorisé tout le Coran atteindra le sommet du Paradis, et celui qui en a mémorisé une partie sera à un rang proportionnel.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn al-Qayyim, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;La meilleure des adorations après les obligations est la lecture du Coran. Rien ne purifie le coeur davantage que sa récitation avec méditation. Le Coran rassemble tous les remèdes du coeur : il chasse le doute par la certitude, l&apos;insouciance par le rappel, et le désir mondain par l&apos;amour de l&apos;au-delà.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Taymiyya, <em>Majmu&apos; al-Fatawa</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces paroles des savants convergent vers une même vérité : le Coran n&apos;est pas un simple texte à réciter, mais un compagnon de vie qui transforme celui qui s&apos;y attache. La mémorisation, la récitation et la méditation forment un triptyque indissociable que les hadiths du Prophète ﷺ ont établi et que les savants ont préservé à travers les siècles.
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
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour le musulman qui souhaite renforcer sa relation avec le Coran :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Lire le Coran quotidiennement, même peu
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Chaque lettre vaut dix bonnes actions au minimum. Même quelques versets par jour constituent un trésor de récompenses. La régularité est plus aimée d&apos;Allah que l&apos;intensité ponctuelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne pas se décourager face à la difficulté de lecture
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Celui qui trébuche sur le Coran reçoit une double récompense. La difficulté n&apos;est pas un obstacle mais une source de mérite supplémentaire auprès d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Mémoriser le Coran progressivement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le hafidh sera élevé dans les degrés du Paradis et ses parents seront revêtus de lumière. Commencez par les courtes sourates, puis progressez vers les plus longues avec constance et révision régulière.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Méditer les versets plutôt que lire mécaniquement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le tadabbur (méditation) est l&apos;objectif même de la révélation du Coran. Lisez avec compréhension, arrêtez-vous sur les versets qui vous touchent et réfléchissez à leur application dans votre vie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Embellir sa récitation et apprendre le tajwid
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a ordonné d&apos;embellir le Coran par nos voix. Apprendre les bases du tajwid est une obligation pour tout musulman et transforme la récitation en une expérience spirituelle profonde.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Mettre en pratique les enseignements du Coran
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La récompense complète est promise à celui qui &laquo;&nbsp;lit le Coran et met en pratique ce qu&apos;il contient&nbsp;&raquo;. La lecture sans application est comme un arbre sans fruit : elle a une valeur, mais reste incomplète.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le Coran dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur le Ramadan : jeûne, prière et récompenses"
                  description="Les enseignements prophétiques sur le mois béni du Ramadan, le jeûne et les prières nocturnes."
                  href="/hadith-ramadan-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur la Nuit du Destin (Laylat al-Qadr)"
                  description="Les hadiths authentiques sur la nuit la plus bénie de l&apos;année, sa recherche et ses mérites."
                  href="/hadith-nuit-du-destin-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
