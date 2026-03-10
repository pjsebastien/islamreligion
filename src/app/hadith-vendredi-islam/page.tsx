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
    "Hadiths sur le vendredi en islam : mérites, prière et sunnas",
  description:
    "Découvrez les hadiths authentiques sur le vendredi en islam : mérites du jour de jumu&apos;a, prière du vendredi, heure exaucée, ghusl, sourate Al-Kahf et salawat. Texte arabe, traduction et explication.",
  openGraph: {
    title:
      "Hadiths sur le vendredi en islam : mérites, prière et sunnas",
    description:
      "Les hadiths authentiques sur le vendredi en islam : mérites de ce jour béni, prière du vendredi, sunnas recommandées et enseignements prophétiques.",
    url: "https://www.islamreligion.fr/hadith-vendredi-islam",
    images: [
      {
        url: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-vendredi-islam",
  },
};

const tocItems = [
  { id: "contexte-coranique", label: "Contexte coranique du vendredi" },
  { id: "meilleur-jour", label: "Le meilleur jour de la semaine" },
  { id: "priere-vendredi", label: "La prière du vendredi (salat al-jumu&apos;a)" },
  { id: "sunnas-vendredi", label: "Les sunnas du vendredi" },
  { id: "savants", label: "Ce que disent les savants" },
  { id: "lecons", label: "Leçons pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Pourquoi le vendredi est-il le jour le plus important en islam ?",
    answer:
      "Le Prophète \u2018alayhi salatu wa salam a enseigné que le vendredi est le meilleur jour sur lequel le soleil se lève (Muslim 854). C\u2019est le jour où Adam a été créé, où il est entré au Paradis, où il en est sorti et où l\u2019Heure sera établie. Il contient également une heure exaucée durant laquelle toute invocation est acceptée par Allah.",
  },
  {
    question:
      "La prière du vendredi (salat al-jumu\u2019a) est-elle obligatoire ?",
    answer:
      "Oui, la prière du vendredi est une obligation individuelle (fard \u2018ayn) pour tout homme musulman pubère, libre et résident. Le Coran ordonne explicitement de se rendre à la prière du vendredi dans la sourate Al-Jumu\u2019a (62:9). Le Prophète a averti que celui qui délaisse trois vendredis consécutifs par négligence verra son c\u0153ur scellé (Abu Dawud 1052).",
  },
  {
    question:
      "Quelles sont les sunnas à accomplir le vendredi ?",
    answer:
      "Les principales sunnas du vendredi incluent : le ghusl (bain rituel), le parfum et les beaux vêtements (Bukhari 877), la lecture de la sourate Al-Kahf (Hakim 2/399), l\u2019abondance de salawat (prières sur le Prophète) (Abu Dawud 1047), se rendre tôt à la mosquée, et rechercher l\u2019heure exaucée, notamment à la dernière heure avant le maghrib.",
  },
  {
    question:
      "Quelle est l\u2019heure exaucée du vendredi ?",
    answer:
      "Le Prophète a mentionné qu\u2019il y a une heure le vendredi durant laquelle toute invocation du musulman est exaucée par Allah (Bukhari 935). Les savants divergent sur le moment exact. Les avis les plus forts situent cette heure entre l\u2019assise de l\u2019imam sur le minbar et la fin de la prière, ou bien à la dernière heure avant le maghrib, comme l\u2019a privilégié l\u2019imam Ahmad.",
  },
  {
    question:
      "Faut-il lire la sourate Al-Kahf en entier le vendredi ?",
    answer:
      "Les hadiths encouragent la lecture de la sourate Al-Kahf le vendredi ou la nuit du vendredi. Une lumière est accordée au lecteur entre les deux vendredis. Certains savants considèrent que la lecture des dix premiers ou dix derniers versets offre une protection contre le Dajjal (Muslim 809). Toutefois, la lecture intégrale de la sourate est préférable selon la majorité des savants.",
  },
  {
    question:
      "Pourquoi multiplier les salawat le vendredi ?",
    answer:
      "Le Prophète a spécifiquement ordonné de multiplier les prières sur lui le vendredi et la nuit du vendredi (Abu Dawud 1047), car les salawat lui sont présentées ce jour-là. Les salawat le vendredi sont donc une sunna appuyée, distincte de la recommandation générale de prier sur le Prophète en tout temps. Elles rapprochent le croyant du Prophète et lui valent la prière d\u2019Allah en retour.",
  },
];

export default function HadithVendrediIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-vendredi-islam/#article",
        headline:
          "Hadiths sur le vendredi en islam : mérites, prière et sunnas",
        description:
          "Découvrez les hadiths authentiques sur le vendredi en islam : mérites du jour de jumu&apos;a, prière du vendredi, heure exaucée, ghusl, sourate Al-Kahf et salawat.",
        image: "/images/mosquee-prophete-medine-islam-dome-vert.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-vendredi-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-vendredi-islam/#breadcrumb",
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
            name: "Vendredi en islam",
            item: "https://www.islamreligion.fr/hadith-vendredi-islam",
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
          title="Hadiths sur le vendredi en islam"
          subtitle="Les enseignements prophétiques sur les mérites du vendredi, la prière de jumu&apos;a, l&apos;heure exaucée et les sunnas de ce jour béni selon la Sunna authentique."
          imageSrc="/images/mosquee-prophete-medine-islam-dome-vert.jpg"
          imageAlt="Hadiths sur le vendredi en islam, mosquée du Prophète à Médine"
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
                  Vendredi en islam
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
                    Le vendredi est le meilleur jour sur lequel le soleil se lève : c&apos;est le jour de la création d&apos;Adam et celui où l&apos;Heure sera établie.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    La prière du vendredi (salat al-jumu&apos;a) est une obligation individuelle pour tout homme musulman pubère et résident.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le vendredi contient une heure exaucée durant laquelle toute invocation sincère est acceptée par Allah.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les sunnas du vendredi incluent le ghusl, la lecture de sourate Al-Kahf et l&apos;abondance de salawat sur le Prophète ﷺ.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Contexte coranique   */}
              {/* ============================== */}
              <section id="contexte-coranique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Contexte coranique du vendredi en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;aborder les hadiths sur le vendredi, il convient de rappeler que ce jour béni est mentionné directement dans le Coran. Allah a consacré une sourate entière — <em>sourate Al-Jumu&apos;a</em> (Le Vendredi) — à ce jour et à la prière qui lui est associée. Les versets suivants posent le fondement coranique sur lequel s&apos;appuient ensuite les hadiths du Prophète ﷺ.
                </p>

                <HadithCard
                  arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ ۚ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ"
                  text="Ô vous qui avez cru ! Quand on appelle à la prière du vendredi, accourez à l&apos;invocation d&apos;Allah et laissez tout négoce. Cela est bien meilleur pour vous, si vous saviez !"
                  source="Coran, sourate Al-Jumu&apos;a (62:9)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset établit l&apos;obligation de la prière du vendredi de manière explicite. L&apos;injonction &laquo; accourez à l&apos;invocation d&apos;Allah &raquo; (<em>fas&apos;aw ila dhikri-Llah</em>) indique l&apos;urgence et l&apos;importance de cette prière. L&apos;ordre de &laquo; laisser tout négoce &raquo; montre que les activités commerciales, aussi lucratives soient-elles, doivent être interrompues pour la prière de jumu&apos;a. Les savants y voient la preuve que la prière du vendredi est une obligation individuelle (<em>fard &apos;ayn</em>), plus forte encore que la prière en groupe des cinq prières quotidiennes.
                </p>

                <HadithCard
                  arabic="فَإِذَا قُضِيَتِ الصَّلَاةُ فَانتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِن فَضْلِ اللَّهِ وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ"
                  text="Puis quand la prière est accomplie, dispersez-vous sur la terre et recherchez la grâce d&apos;Allah, et invoquez Allah abondamment afin que vous réussissiez."
                  source="Coran, sourate Al-Jumu&apos;a (62:10)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset complète le précédent en montrant l&apos;équilibre islamique entre adoration et vie active. Après la prière, le musulman est invité à reprendre ses activités, mais en gardant le dhikr d&apos;Allah comme fil conducteur de sa journée. La mention de &laquo; la grâce d&apos;Allah &raquo; (<em>fadl Allah</em>) rappelle que le travail et le commerce sont eux aussi des formes d&apos;adoration lorsqu&apos;ils sont accomplis avec une intention sincère et dans le respect des règles islamiques.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Le meilleur jour     */}
              {/* ============================== */}
              <section id="meilleur-jour" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le vendredi : meilleur jour de la semaine
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a clairement désigné le vendredi comme le jour le plus noble de la semaine. Les hadiths suivants détaillent les raisons de cette prééminence et les événements majeurs qui y sont associés. Le vendredi est un jour où convergent la création, la miséricorde divine et l&apos;eschatologie.
                </p>

                <HadithBlock
                  number={1}
                  title="Le meilleur jour sur lequel le soleil se lève"
                  narrator="Abu Hurayra"
                  arabic="خَيْرُ يَوْمٍ طَلَعَتْ عَلَيْهِ الشَّمْسُ يَوْمُ الْجُمُعَةِ، فِيهِ خُلِقَ آدَمُ، وَفِيهِ أُدْخِلَ الْجَنَّةَ، وَفِيهِ أُخْرِجَ مِنْهَا، وَلَا تَقُومُ السَّاعَةُ إِلَّا فِي يَوْمِ الْجُمُعَةِ"
                  translation="Le meilleur jour sur lequel le soleil se lève est le vendredi. C&apos;est en ce jour qu&apos;Adam a été créé, c&apos;est en ce jour qu&apos;il a été introduit au Paradis, et c&apos;est en ce jour qu&apos;il en a été sorti. Et l&apos;Heure ne sera établie qu&apos;un jour de vendredi."
                  source="Sahih Muslim, n°854"
                  grade="sahih"
                  explanation="Ce hadith fondateur établit la supériorité du vendredi sur tous les autres jours. La mention de la création d&apos;Adam lie ce jour au commencement de l&apos;humanité. Son entrée au Paradis rappelle la faveur divine originelle, et sa sortie évoque l&apos;épreuve terrestre. La mention de l&apos;Heure finale confère au vendredi une dimension eschatologique : c&apos;est le jour du début et de la fin. Les savants soulignent que cette concentration d&apos;événements majeurs fait du vendredi un jour de réflexion sur l&apos;origine, le destin et la finalité de l&apos;homme."
                />

                <HadithBlock
                  number={2}
                  title="L&apos;heure exaucée du vendredi"
                  narrator="Abu Hurayra"
                  arabic="إِنَّ فِي الْجُمُعَةِ لَسَاعَةً لَا يُوَافِقُهَا عَبْدٌ مُسْلِمٌ وَهُوَ قَائِمٌ يُصَلِّي يَسْأَلُ اللَّهَ شَيْئًا إِلَّا أَعْطَاهُ إِيَّاهُ"
                  translation="Il y a certes dans le vendredi une heure durant laquelle aucun serviteur musulman, debout en prière, ne demande quelque chose à Allah sans qu&apos;Il ne le lui accorde."
                  source="Sahih Al-Bukhari, n°935 — Sahih Muslim, n°852"
                  grade="sahih"
                  explanation="Ce hadith est l&apos;un des plus connus sur le vendredi. Il motive les musulmans à multiplier les invocations en ce jour béni. Les savants ont divergé sur le moment exact de cette heure exaucée. L&apos;imam An-Nawawi rapporte plus de quarante avis à ce sujet. Les deux positions les plus fortes sont : entre l&apos;assise de l&apos;imam sur le minbar et la fin de la prière (avis de Muslim), ou à la dernière heure avant le maghrib (avis privilégié par l&apos;imam Ahmad et soutenu par le hadith d&apos;Abdullah ibn Salam rapporté par Abu Dawud). Le Prophète ﷺ a indiqué que cette heure est brève, encourageant le musulman à persévérer dans l&apos;invocation."
                />

                <HadithBlock
                  number={3}
                  title="Les anges inscrivent les premiers arrivés"
                  narrator="Abu Hurayra"
                  arabic="إِذَا كَانَ يَوْمُ الْجُمُعَةِ وَقَفَتِ الْمَلَائِكَةُ عَلَى بَابِ الْمَسْجِدِ يَكْتُبُونَ الْأَوَّلَ فَالْأَوَّلَ، وَمَثَلُ الْمُهَجِّرِ كَمَثَلِ الَّذِي يُهْدِي بَدَنَةً، ثُمَّ كَالَّذِي يُهْدِي بَقَرَةً، ثُمَّ كَبْشًا، ثُمَّ دَجَاجَةً، ثُمَّ بَيْضَةً، فَإِذَا خَرَجَ الْإِمَامُ طَوَوْا صُحُفَهُمْ وَيَسْتَمِعُونَ الذِّكْرَ"
                  translation="Le jour du vendredi, les anges se tiennent aux portes de la mosquée et inscrivent les premiers arrivés. Celui qui vient le premier est comme celui qui offre un chameau en sacrifice, puis le suivant comme celui qui offre une vache, puis un mouton, puis une poule, puis un oeuf. Et lorsque l&apos;imam sort (pour le prêche), ils roulent leurs feuillets et écoutent le rappel."
                  source="Sahih Al-Bukhari, n°929 — Sahih Muslim, n°850"
                  grade="sahih"
                  explanation="Ce hadith utilise une gradation descendante pour encourager l&apos;arrivée précoce à la mosquée le vendredi. La récompense diminue à mesure que l&apos;heure du prêche approche. La comparaison avec le sacrifice illustre la valeur spirituelle de chaque moment passé à attendre la prière dans le dhikr et la lecture du Coran. Lorsque l&apos;imam monte en chaire, les anges cessent d&apos;inscrire et écoutent le prêche, soulignant l&apos;importance capitale de la khutba. Ce hadith motive les musulmans à arriver tôt et à consacrer ce temps à l&apos;adoration."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois hadiths établissent la grandeur du vendredi dans la hiérarchie des jours. Le vendredi est un jour de création, de miséricorde et de récompense multipliée. Pour approfondir la dimension spirituelle de la prière, consultez notre article sur les{" "}
                  <Link href="/hadith-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur la prière en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Prière du vendredi   */}
              {/* ============================== */}
              <section id="priere-vendredi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La prière du vendredi (salat al-jumu&apos;a)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La prière du vendredi est le pilier central de ce jour béni. Elle remplace la prière de dhuhr et se distingue par le prêche (<em>khutba</em>) qui la précède. Le Prophète ﷺ a détaillé ses mérites, ses conditions et les conséquences de sa négligence dans de nombreux hadiths.
                </p>

                <HadithBlock
                  number={4}
                  title="Le pardon des péchés entre deux vendredis"
                  narrator="Abu Hurayra"
                  arabic="الصَّلَوَاتُ الْخَمْسُ وَالْجُمُعَةُ إِلَى الْجُمُعَةِ وَرَمَضَانُ إِلَى رَمَضَانَ مُكَفِّرَاتٌ مَا بَيْنَهُنَّ إِذَا اجْتُنِبَتِ الْكَبَائِرُ"
                  translation="Les cinq prières, le vendredi jusqu&apos;au vendredi et le Ramadan jusqu&apos;au Ramadan sont des expiations pour les péchés commis entre eux, à condition d&apos;éviter les grands péchés."
                  source="Sahih Muslim, n°233"
                  grade="sahih"
                  explanation="Ce hadith place la prière du vendredi aux côtés des cinq prières quotidiennes et du Ramadan comme moyen d&apos;expiation des péchés mineurs. La condition &laquo; à condition d&apos;éviter les grands péchés &raquo; est essentielle : l&apos;expiation concerne les fautes vénielles du quotidien. Les grands péchés nécessitent un repentir spécifique (tawba). Les savants soulignent que ce hadith montre la miséricorde d&apos;Allah qui a institué des rendez-vous réguliers de purification : quotidiens (les cinq prières), hebdomadaires (le vendredi) et annuels (le Ramadan)."
                />

                <HadithBlock
                  number={5}
                  title="Celui qui délaisse trois vendredis"
                  narrator="Abu al-Ja&apos;d ad-Damri"
                  arabic="مَنْ تَرَكَ ثَلَاثَ جُمَعٍ تَهَاوُنًا بِهَا طَبَعَ اللَّهُ عَلَى قَلْبِهِ"
                  translation="Celui qui délaisse trois vendredis par négligence, Allah scellera son coeur."
                  source="Sunan Abu Dawud, n°1052 — Sunan an-Nasa&apos;i, n°1369"
                  grade="sahih"
                  explanation="Cet avertissement sévère du Prophète ﷺ souligne le caractère obligatoire de la prière du vendredi. &laquo; Sceller le coeur &raquo; signifie que le coeur est recouvert d&apos;un voile qui l&apos;éloigne de la guidance divine. La condition &laquo; par négligence &raquo; (<em>tahawunan</em>) distingue celui qui délaisse la prière par paresse ou insouciance de celui qui a une excuse légitime (maladie, voyage, etc.). Les savants des quatre écoles s&apos;accordent sur le caractère obligatoire de la prière du vendredi pour l&apos;homme musulman résident, et ce hadith en constitue l&apos;une des preuves majeures."
                />

                <HadithBlock
                  number={6}
                  title="Le bain, le parfum et l&apos;écoute attentive de la khutba"
                  narrator="Abu Hurayra"
                  arabic="مَنِ اغْتَسَلَ يَوْمَ الْجُمُعَةِ غُسْلَ الْجَنَابَةِ ثُمَّ رَاحَ فَكَأَنَّمَا قَرَّبَ بَدَنَةً، وَمَنْ رَاحَ فِي السَّاعَةِ الثَّانِيَةِ فَكَأَنَّمَا قَرَّبَ بَقَرَةً، وَمَنْ رَاحَ فِي السَّاعَةِ الثَّالِثَةِ فَكَأَنَّمَا قَرَّبَ كَبْشًا أَقْرَنَ، وَمَنْ رَاحَ فِي السَّاعَةِ الرَّابِعَةِ فَكَأَنَّمَا قَرَّبَ دَجَاجَةً، وَمَنْ رَاحَ فِي السَّاعَةِ الْخَامِسَةِ فَكَأَنَّمَا قَرَّبَ بَيْضَةً"
                  translation="Celui qui fait le bain rituel le vendredi comme le bain de janaba puis part (à la mosquée) à la première heure, c&apos;est comme s&apos;il avait offert un chameau en sacrifice. Celui qui part à la deuxième heure, c&apos;est comme s&apos;il avait offert une vache. Celui qui part à la troisième heure, c&apos;est comme s&apos;il avait offert un bélier cornu. Celui qui part à la quatrième heure, c&apos;est comme s&apos;il avait offert une poule. Et celui qui part à la cinquième heure, c&apos;est comme s&apos;il avait offert un oeuf."
                  source="Sahih Al-Bukhari, n°881 — Sahih Muslim, n°850"
                  grade="sahih"
                  explanation="Ce hadith combine deux sunnas du vendredi : le ghusl et l&apos;arrivée précoce à la mosquée. La gradation des récompenses selon l&apos;heure d&apos;arrivée constitue un puissant encouragement à consacrer une partie significative du vendredi à l&apos;adoration. L&apos;expression &laquo; comme le bain de janaba &raquo; indique que le ghusl du vendredi doit être complet, couvrant l&apos;ensemble du corps. Les savants y voient également un encouragement à se parfumer et à porter de beaux vêtements, conformément à d&apos;autres hadiths sur les convenances du vendredi."
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="Étudiez le fiqh de la prière, les mérites du vendredi et la jurisprudence islamique avec des professeurs qualifiés."
                href="/apprendre-science-religieuse-islam"
                linkText="Découvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Sunnas du vendredi   */}
              {/* ============================== */}
              <section id="sunnas-vendredi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sunnas du vendredi : ghusl, sourate Al-Kahf et salawat
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de la prière obligatoire, le Prophète ﷺ a enseigné plusieurs pratiques recommandées qui font du vendredi une journée complète d&apos;adoration. Le ghusl, la lecture de la sourate Al-Kahf et l&apos;abondance de salawat transforment ce jour en une véritable station spirituelle hebdomadaire.
                </p>

                <HadithBlock
                  number={7}
                  title="Le ghusl du vendredi est un devoir pour tout pubère"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="غُسْلُ يَوْمِ الْجُمُعَةِ وَاجِبٌ عَلَى كُلِّ مُحْتَلِمٍ، وَأَنْ يَسْتَنَّ، وَأَنْ يَمَسَّ طِيبًا إِنْ وَجَدَ"
                  translation="Le bain du vendredi est un devoir pour tout pubère, ainsi que le siwak et le fait de se parfumer s&apos;il en trouve."
                  source="Sahih Al-Bukhari, n°880 — Sahih Muslim, n°846"
                  grade="sahih"
                  explanation="Ce hadith mentionne trois sunnas liées à la préparation pour la prière du vendredi : le ghusl (bain complet), le siwak (bâtonnet de nettoyage des dents) et le parfum. Le mot &laquo; wajib &raquo; (devoir/obligatoire) a suscité un débat parmi les savants. La majorité (Malik, Ash-Shafi&apos;i, Abu Hanifa) considèrent qu&apos;il désigne ici une recommandation forte (<em>sunna mu&apos;akkada</em>), au vu d&apos;autres hadiths qui nuancent l&apos;obligation. L&apos;imam Ahmad a toutefois maintenu le caractère obligatoire. Dans tous les cas, le ghusl du vendredi est une pratique unanimement valorisée."
                />

                <HadithBlock
                  number={8}
                  title="La lecture de sourate Al-Kahf le vendredi"
                  narrator="Abu Sa&apos;id al-Khudri"
                  arabic="مَنْ قَرَأَ سُورَةَ الْكَهْفِ يَوْمَ الْجُمُعَةِ أَضَاءَ لَهُ مِنَ النُّورِ مَا بَيْنَ الْجُمُعَتَيْنِ"
                  translation="Celui qui lit la sourate Al-Kahf le vendredi, une lumière l&apos;éclairera entre les deux vendredis."
                  source="Al-Hakim, n°2/399 — Al-Bayhaqi, n°3/249"
                  grade="sahih"
                  explanation="Ce hadith promet une lumière spirituelle à celui qui récite la sourate Al-Kahf le vendredi. Cette lumière, selon les commentateurs, représente la guidance, la protection et la clarté intérieure accordées au lecteur durant toute la semaine. La sourate Al-Kahf aborde quatre épreuves majeures : celle de la foi (les gens de la caverne), celle de la richesse (le propriétaire des deux jardins), celle de la connaissance (Moïse et Al-Khadir) et celle du pouvoir (Dhul-Qarnayn). Sa lecture hebdomadaire rappelle au musulman les pièges de ce bas monde et les moyens d&apos;y faire face."
                />

                <HadithBlock
                  number={9}
                  title="Multipliez les salawat sur moi le vendredi"
                  narrator="Aws ibn Aws"
                  arabic="إِنَّ مِنْ أَفْضَلِ أَيَّامِكُمْ يَوْمَ الْجُمُعَةِ، فِيهِ خُلِقَ آدَمُ، وَفِيهِ قُبِضَ، وَفِيهِ النَّفْخَةُ، وَفِيهِ الصَّعْقَةُ، فَأَكْثِرُوا عَلَيَّ مِنَ الصَّلَاةِ فِيهِ، فَإِنَّ صَلَاتَكُمْ مَعْرُوضَةٌ عَلَيَّ"
                  translation="Parmi vos meilleurs jours, il y a le vendredi : c&apos;est en ce jour qu&apos;Adam a été créé, c&apos;est en ce jour qu&apos;il a été rappelé, c&apos;est en ce jour qu&apos;aura lieu le souffle (dans la Trompe), et c&apos;est en ce jour qu&apos;aura lieu le foudroiement. Multipliez donc les prières sur moi en ce jour, car vos prières me sont présentées."
                  source="Sunan Abu Dawud, n°1047 — Sunan an-Nasa&apos;i, n°1374"
                  grade="sahih"
                  explanation="Ce hadith relie les mérites du vendredi à la pratique de la salawat (prière sur le Prophète ﷺ). La raison invoquée est que les salawat sont &laquo; présentées &raquo; au Prophète ﷺ ce jour-là, ce qui confère à cette pratique une proximité particulière avec le Messager d&apos;Allah. Les savants recommandent de multiplier la formule &laquo; Allahumma salli &apos;ala Muhammad &raquo; le vendredi et la nuit qui le précède. Ce hadith mentionne également des événements eschatologiques (le souffle dans la Trompe, le foudroiement) qui renforcent la dimension solennelle du vendredi."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces sunnas du vendredi forment un programme spirituel complet : purification du corps (ghusl), nourriture de l&apos;âme (sourate Al-Kahf) et lien avec le Prophète ﷺ (salawat). Chacune de ces pratiques est attestée par des hadiths authentiques et constitue une habitude que tout musulman peut intégrer dans son rythme hebdomadaire. Pour découvrir d&apos;autres enseignements sur la relation avec le Coran, consultez notre article sur les{" "}
                  <Link href="/hadith-coran-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le Coran en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Paroles des savants  */}
              {/* ============================== */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les savants sur le vendredi et ses hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les grands savants de l&apos;islam ont abondamment commenté les hadiths sur le vendredi. Leurs explications éclairent la portée juridique et spirituelle de ce jour béni.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le vendredi est le seigneur des jours (<em>sayyid al-ayyam</em>). Il est plus grandiose auprès d&apos;Allah que le jour de al-Adha et le jour de al-Fitr. Il comporte cinq particularités : Allah y a créé Adam, y a fait descendre Adam sur terre, y a fait mourir Adam, il contient une heure durant laquelle Allah accorde tout ce qui Lui est demandé, et c&apos;est en ce jour que l&apos;Heure sera établie.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Ibn Qayyim al-Jawziyya, <em>Zad al-Ma&apos;ad</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Les savants ont dénombré plus de quarante avis concernant l&apos;heure exaucée du vendredi. Les deux avis les plus solides sont : qu&apos;elle se situe entre l&apos;assise de l&apos;imam et la fin de la prière, ou bien à la dernière heure après la prière du &apos;asr. Et ce dernier avis est le plus probable.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam An-Nawawi, <em>Sharh Sahih Muslim</em>
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-accent p-5">
                    <p className="text-base italic leading-relaxed text-foreground">
                      &laquo;&nbsp;Le ghusl du vendredi est très fortement recommandé pour tout musulman, et je ne dispense personne de le faire, homme ou femme. Quant à l&apos;avis de son obligation stricte, il est soutenu par un groupe de savants et la question reste un sujet de divergence légitime.&nbsp;&raquo;
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      — Imam Malik, <em>Al-Muwatta</em>
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces commentaires montrent que les hadiths sur le vendredi ne sont pas de simples recommandations morales : ils constituent le fondement d&apos;un corpus juridique détaillé sur lequel les quatre écoles de jurisprudence ont bâti les règles de la prière du vendredi, du ghusl et des pratiques recommandées. Chaque hadith cité dans cet article est utilisé par les fuqaha pour déduire des règles pratiques applicables à tous les musulmans.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons pratiques pour le musulman
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths présentés dans cet article permet de dégager des leçons concrètes pour vivre pleinement le vendredi en tant que jour béni :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais négliger la prière du vendredi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La prière du vendredi est une obligation individuelle. Trois vendredis manqués par négligence entraînent un voile sur le coeur. Le musulman doit organiser son emploi du temps pour préserver ce rendez-vous hebdomadaire avec Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Se préparer physiquement et spirituellement
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le ghusl, le siwak, le parfum et les beaux vêtements ne sont pas de simples convenances : ils expriment le respect dû à ce jour sacré et à l&apos;assemblée des musulmans.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Arriver tôt à la mosquée
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La récompense est proportionnelle à l&apos;heure d&apos;arrivée. Celui qui arrive à la première heure obtient la récompense d&apos;un chameau sacrifié. Ce temps d&apos;attente est idéal pour le dhikr, la lecture du Coran et l&apos;invocation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Lire la sourate Al-Kahf chaque vendredi
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Cette lecture procure une lumière spirituelle entre les deux vendredis et constitue une protection contre les épreuves. Elle peut être lue le matin avant la prière ou à tout moment de la journée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Multiplier les salawat sur le Prophète ﷺ
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Les prières sur le Prophète ﷺ sont présentées à lui le vendredi. Cette pratique renforce le lien avec le Messager d&apos;Allah et vaut au croyant la prière d&apos;Allah en retour.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Rechercher l&apos;heure exaucée
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le vendredi contient une heure durant laquelle toute invocation est acceptée. Le musulman doit multiplier les douas en ce jour, particulièrement entre le prêche et la fin de la prière, et à la dernière heure avant le maghrib.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur le vendredi dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
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
                  title="Hadiths sur la prière en islam : les enseignements prophétiques"
                  description="Les hadiths authentiques sur la prière, ses mérites et ses conditions selon la Sunna."
                  href="/hadith-priere-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le Coran en islam : mérites de la récitation"
                  description="Les enseignements du Prophète ﷺ sur la lecture, la mémorisation et la méditation du Coran."
                  href="/hadith-coran-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
