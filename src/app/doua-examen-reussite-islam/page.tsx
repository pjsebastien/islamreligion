import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title:
    "Doua pour les examens en islam : invocations pour la réussite et la mémoire",
  description:
    "Découvrez les douas authentiques pour les examens en islam : invocations pour la réussite, la mémoire, la compréhension et contre le stress. Textes en arabe, phonétique et traduction française.",
  openGraph: {
    title:
      "Doua pour les examens en islam : invocations pour la réussite et la mémoire",
    description:
      "Découvrez les douas authentiques pour les examens en islam : invocations pour la réussite, la mémoire, la compréhension et contre le stress.",
    url: "https://www.islamreligion.fr/doua-examen-reussite-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-examen-reussite-islam",
  },
};

const tocItems = [
  { id: "islam-savoir", label: "L'islam et la quête du savoir" },
  { id: "doua-moussa", label: "Doua de Moussa (Rabbi ishrah li sadri)" },
  { id: "doua-memoire", label: "Doua pour la mémoire et la compréhension" },
  { id: "doua-avant-examen", label: "Doua avant l'examen" },
  { id: "doua-stress", label: "Doua contre le stress et l'angoisse" },
  { id: "doua-oubli", label: "Invocations contre l'oubli" },
  { id: "conseils-pratiques", label: "Conseils pratiques : révisions et tawakkul" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour réussir un examen en islam ?",
    answer:
      "La doua de Moussa (paix sur lui) est l\u2019une des plus recommandées : « Rabbi ishrah li sadri, wa yassir li amri, wahlul \u2018uqdatan min lisani, yafqahu qawli » (Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche, dénoue le nœud de ma langue afin qu\u2019ils comprennent mes paroles). Cette invocation est tirée du Coran (Sourate Ta-Ha, 20:25-28) et couvre la sérénité, la facilité et la clarté d\u2019expression.",
  },
  {
    question: "Peut-on faire une doua en français avant un examen ?",
    answer:
      "Oui, la doua peut être formulée dans n\u2019importe quelle langue. Allah comprend toutes les langues et l\u2019essentiel est la sincérité du cœur. Toutefois, les savants recommandent d\u2019apprendre les invocations prophétiques en arabe car elles ont été choisies avec des mots précis par le Prophète ﷺ ou révélées dans le Coran.",
  },
  {
    question:
      "Quand faut-il faire la doua pour les examens ?",
    answer:
      "Les moments les plus propices sont : le dernier tiers de la nuit, après les prières obligatoires, entre l\u2019adhan et l\u2019iqama, et pendant la prosternation (sujud). Vous pouvez également faire la doua juste avant d\u2019entrer dans la salle d\u2019examen et au moment de recevoir la copie.",
  },
  {
    question:
      "Existe-t-il une doua spécifique pour la mémoire en islam ?",
    answer:
      "Le Coran mentionne l\u2019invocation « Rabbi zidni \u2018ilman » (Seigneur, augmente-moi en science - Sourate Ta-Ha 20:114). Les savants recommandent aussi de réciter régulièrement le Coran et de faire des adhkar pour renforcer la mémoire. La nourriture licite et l\u2019abandon des péchés sont également considérés comme des moyens de préserver la mémoire.",
  },
  {
    question: "La doua remplace-t-elle les révisions ?",
    answer:
      "Non, absolument pas. L\u2019islam enseigne l\u2019équilibre entre l\u2019effort personnel et la confiance en Allah (tawakkul). Le Prophète ﷺ a dit : « Attache ta chamelle, puis place ta confiance en Allah » (at-Tirmidhi). La doua accompagne les révisions, elle ne les remplace pas.",
  },
  {
    question:
      "Que faire si on a un trou de mémoire pendant l\u2019examen ?",
    answer:
      "En cas de trou de mémoire, il est recommandé de dire « La hawla wa la quwwata illa billah » (Il n\u2019y a de force ni de puissance qu\u2019en Allah) et de demander l\u2019aide d\u2019Allah avec sincérité. Prenez une profonde respiration, invoquez Allah discrètement et passez à une autre question avant de revenir à celle qui pose problème.",
  },
  {
    question: "Peut-on faire la prière de consultation (istikhara) pour un examen ?",
    answer:
      "La prière d\u2019istikhara concerne les choix et les décisions, pas les examens en eux-mêmes. Cependant, si vous hésitez entre deux filières ou deux orientations d\u2019études, l\u2019istikhara est tout à fait appropriée. Pour un examen, les douas pour la réussite et la facilité sont plus adaptées.",
  },
  {
    question: "Comment gérer le stress des examens selon l\u2019islam ?",
    answer:
      "L\u2019islam offre plusieurs remèdes contre le stress : la confiance en Allah (tawakkul), les invocations contre l\u2019angoisse enseignées par le Prophète ﷺ, le dhikr régulier, la prière de la nuit (qiyam al-layl), et la certitude que tout résultat est un décret divin. Le Prophète ﷺ cherchait refuge auprès d\u2019Allah contre l\u2019angoisse et la tristesse.",
  },
];

export default function DouaExamenReussiteIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-examen-reussite-islam/#article",
        headline:
          "Doua pour les examens en islam : invocations pour la réussite et la mémoire",
        description:
          "Découvrez les douas authentiques pour les examens en islam : invocations pour la réussite, la mémoire, la compréhension et contre le stress.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2026-03-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-examen-reussite-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-examen-reussite-islam/#breadcrumb",
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
            name: "Doua en islam",
            item: "https://www.islamreligion.fr/doua-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Doua pour les examens",
            item: "https://www.islamreligion.fr/doua-examen-reussite-islam",
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
          title="Doua pour les examens en islam : invocations pour la réussite et la mémoire"
          subtitle="Les invocations authentiques du Coran et de la Sunna pour aborder les examens avec sérénité, renforcer la mémoire et obtenir la facilité d&apos;Allah."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Coran ouvert avec calligraphie dorée et lumière, symbolisant la quête du savoir en islam"
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
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua pour les examens</span>
              </nav>

              {/* ============================================ */}
              {/* INTRODUCTION */}
              {/* ============================================ */}
              <p className="text-lg leading-relaxed text-foreground">
                Les <strong>examens</strong> représentent une épreuve majeure
                dans la vie de tout étudiant musulman. Entre la pression des
                résultats, la peur de l&apos;échec et le stress des révisions,
                il est naturel de se tourner vers Allah pour demander Son aide
                et Sa facilité. L&apos;islam accorde une place considérable à
                la <strong>quête du savoir</strong> et offre de nombreuses{" "}
                <strong>invocations (douas)</strong> pour accompagner
                l&apos;étudiant dans cette démarche.
              </p>

              <p className="mt-4 leading-relaxed text-foreground">
                Cette page rassemble les{" "}
                <strong>douas authentiques pour les examens</strong> tirées du
                Coran et de la Sunna : invocations pour la réussite, la
                mémoire, la compréhension, contre le stress et l&apos;oubli.
                Chaque doua est présentée en arabe, avec sa phonétique et sa
                traduction française, accompagnée de ses sources.
              </p>

              {/* ============================================ */}
              {/* SECTION 1 : L'islam et la quête du savoir */}
              {/* ============================================ */}
              <section id="islam-savoir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;islam et la quête du savoir
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam est une religion qui place le{" "}
                  <strong>savoir</strong> au sommet de ses valeurs. La toute
                  première révélation du Coran au Prophète Muhammad ﷺ fut
                  l&apos;injonction de lire :
                  &laquo;&nbsp;Lis, au nom de ton Seigneur qui a
                  créé&nbsp;&raquo; (Sourate Al-&apos;Alaq, 96:1). Cette
                  première parole divine fixe la direction : le musulman est
                  appelé à apprendre, à réfléchir et à chercher la
                  connaissance tout au long de sa vie.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ
                    الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ
                    ۝ الَّذِي عَلَّمَ بِالْقَلَمِ ۝ عَلَّمَ الْإِنسَانَ مَا
                    لَمْ يَعْلَمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Iqra&apos; bismi Rabbika
                    alladhi khalaq. Khalaqal-insana min &apos;alaq. Iqra&apos;
                    wa Rabbukal-Akram. Alladhi &apos;allama bil-qalam.
                    &apos;Allamal-insana ma lam ya&apos;lam.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Lis, au nom de ton Seigneur qui a créé.
                    Il a créé l&apos;homme d&apos;une adhérence. Lis ! Ton
                    Seigneur est le Très Noble, qui a enseigné par la plume,
                    a enseigné à l&apos;homme ce qu&apos;il ne savait
                    pas.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Al-&apos;Alaq (96:1-5)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a également insisté sur le mérite de celui
                  qui emprunte un chemin pour acquérir la science. Ce hadith
                  est une source d&apos;encouragement immense pour tout
                  étudiant qui prépare ses examens :
                </p>

                <HadithCard
                  arabic="مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ"
                  text="Quiconque emprunte un chemin à la recherche de la science, Allah lui facilite par cela un chemin vers le Paradis."
                  source="Rapporté par Muslim (2699)"
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ainsi, les révisions, les cours et les examens ne sont pas
                  de simples obligations scolaires pour le musulman : ce sont
                  des actes qui, accomplis avec la bonne intention, deviennent
                  une <strong>adoration</strong>. Chaque heure passée à
                  étudier avec l&apos;intention de servir Allah et d&apos;être
                  utile à la communauté est récompensée. C&apos;est dans cet
                  esprit que l&apos;étudiant musulman aborde ses examens : avec
                  effort, invocation et confiance en Allah.
                </p>

                <Image
                  src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                  alt="Mains ouvertes en invocation avec rayons dorés, symbolisant la doua pour la réussite aux examens"
                  width={800}
                  height={450}
                  className="mt-8 rounded-xl"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de Moussa */}
              {/* ============================================ */}
              <section id="doua-moussa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de Moussa : Rabbi ishrah li sadri wa yassir li amri
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;une des invocations les plus connues et les plus
                  recommandées pour les examens est la <strong>doua de
                  Moussa</strong> (Moïse, paix sur lui). Lorsqu&apos;Allah
                  lui ordonna d&apos;aller affronter Pharaon, Moussa fit
                  cette invocation sublime pour demander le courage, la
                  facilité et l&apos;éloquence. Cette doua est parfaitement
                  adaptée à la situation de l&apos;examen : on demande
                  l&apos;ouverture du cœur (la sérénité), la facilité dans
                  la tâche et la clarté dans l&apos;expression.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي ۝
                    وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي ۝ يَفْقَهُوا قَوْلِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ishrah li sadri, wa
                    yassir li amri, wahlul &apos;uqdatan min lisani, yafqahu
                    qawli.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ouvre-moi ma poitrine, facilite-moi
                    ma tâche, et dénoue le nœud de ma langue, afin
                    qu&apos;ils comprennent mes paroles.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Ta-Ha (20:25-28)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation couvre trois dimensions essentielles pour
                  l&apos;étudiant :
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      num: "1",
                      title: "L'ouverture de la poitrine (ishrah li sadri)",
                      desc: "Demander la sérénité intérieure, la tranquillité du cœur. Un cœur apaisé est un cœur qui réfléchit mieux et qui ne panique pas face aux questions difficiles.",
                    },
                    {
                      num: "2",
                      title: "La facilité dans la tâche (yassir li amri)",
                      desc: "Demander à Allah de rendre les choses faciles. Les examens peuvent sembler insurmontables, mais avec l'aide d'Allah, chaque difficulté devient surmontable.",
                    },
                    {
                      num: "3",
                      title: "La clarté d'expression (uhlul 'uqdatan min lisani)",
                      desc: "Pouvoir exprimer clairement ses connaissances, que ce soit à l'écrit ou à l'oral. Combien d'étudiants connaissent la réponse mais n'arrivent pas à la formuler ?",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-sm"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-semibold text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-foreground-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette doua régulièrement
                  pendant la période de révision, avant chaque session
                  d&apos;étude et bien sûr avant l&apos;examen lui-même. Sa
                  récitation apporte calme et confiance, car elle rappelle que
                  c&apos;est Allah qui accorde la facilité et la réussite.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua pour la mémoire */}
              {/* ============================================ */}
              <section id="doua-memoire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la mémoire et la compréhension
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La <strong>mémoire</strong> et la{" "}
                  <strong>compréhension</strong> sont deux facultés
                  essentielles pour réussir un examen. Le Coran contient une
                  invocation directe pour demander à Allah l&apos;augmentation
                  de la science :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    رَّبِّ زِدْنِي عِلْمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi zidni &apos;ilman.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, augmente-moi en
                    science.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Ta-Ha (20:114)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation, bien que courte, est d&apos;une profondeur
                  immense. Allah Lui-même a ordonné à Son Prophète ﷺ de la
                  prononcer. Si le Prophète ﷺ, qui était déjà le plus savant
                  des hommes, était invité à demander plus de science, alors
                  combien plus l&apos;étudiant ordinaire en a-t-il besoin !
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont également rapporté d&apos;autres invocations
                  bénéfiques pour la mémoire et la compréhension. Parmi
                  elles, la doua suivante pour demander une science utile :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي
                    مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma infa&apos;ni bima
                    &apos;allamtani, wa &apos;allimni ma yanfa&apos;uni, wa
                    zidni &apos;ilman.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, fais-moi profiter de ce que Tu
                    m&apos;as enseigné, enseigne-moi ce qui m&apos;est utile
                    et augmente-moi en science.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3599) et Ibn Majah
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ faisait également cette invocation pour
                  demander une science bénéfique, une subsistance bénie et
                  des œuvres acceptées :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا
                    طَيِّبًا وَعَمَلًا مُتَقَبَّلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka
                    &apos;ilman nafi&apos;an, wa rizqan tayyiban, wa
                    &apos;amalan mutaqabbalan.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je Te demande une science
                    bénéfique, une subsistance pure et des œuvres
                    acceptées.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (925)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam Ash-Shafi&apos;i rapporte qu&apos;il s&apos;est
                  plaint à son maître Waki&apos; de sa mauvaise mémoire, et
                  celui-ci lui a conseillé d&apos;abandonner les péchés, car
                  la science est une lumière d&apos;Allah qui n&apos;est pas
                  accordée au désobéissant. Cela rappelle que la mémoire en
                  islam n&apos;est pas seulement une question de technique
                  cognitive, mais aussi de <strong>purification
                  spirituelle</strong>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua avant l'examen */}
              {/* ============================================ */}
              <section id="doua-avant-examen" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua avant l&apos;examen : tawakkul et remise à Allah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le moment qui précède l&apos;examen est souvent le plus
                  stressant. C&apos;est précisément à ce moment que le
                  musulman doit se tourner vers Allah avec{" "}
                  <strong>tawakkul</strong> (confiance en Allah). Voici les
                  invocations recommandées avant d&apos;entrer dans la salle
                  d&apos;examen :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ
                    وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah, tawakkaltu
                    &apos;ala Allah, wa la hawla wa la quwwata illa billah.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, je place ma confiance en
                    Allah. Il n&apos;y a de force ni de puissance qu&apos;en
                    Allah.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5095) et at-Tirmidhi (3426)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ enseignait cette invocation à prononcer en
                  sortant de chez soi. Elle est parfaitement adaptée au
                  moment où l&apos;on se rend à un examen : on remet son
                  affaire à Allah et on reconnaît que seul Lui détient la
                  force et la puissance. Le hadith précise que lorsque le
                  musulman dit ces mots, il lui est dit :
                  &laquo;&nbsp;Tu as été guidé, protégé et
                  préservé&nbsp;&raquo;.
                </p>

                <HadithCard
                  arabic="إِذَا خَرَجَ الرَّجُلُ مِنْ بَيْتِهِ فَقَالَ بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ يُقَالُ لَهُ كُفِيتَ وَوُقِيتَ وَهُدِيتَ"
                  text="Lorsqu'un homme sort de chez lui et dit : Au nom d'Allah, je place ma confiance en Allah, il n'y a de force ni de puissance qu'en Allah, il lui est dit : Tu as été protégé, préservé et guidé."
                  source="Rapporté par Abu Dawud (5095)"
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Une autre invocation puissante avant l&apos;examen est celle
                  de la remise totale à Allah. Elle exprime la dépendance
                  complète envers le Créateur, tout en ayant fourni les
                  efforts nécessaires :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا
                    وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma
                    ja&apos;altahu sahlan, wa Anta taj&apos;alul-hazna idha
                    shi&apos;ta sahlan.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, rien n&apos;est facile sauf ce que
                    Tu as rendu facile, et Tu rends la difficulté facile si
                    Tu le veux.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est particulièrement adaptée aux examens car elle
                  reconnaît que seul Allah peut rendre facile ce qui semble
                  difficile. Que ce soit un examen de mathématiques, de
                  médecine ou de droit, la difficulté n&apos;est rien face à
                  la facilité qu&apos;Allah peut accorder à Son serviteur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua contre le stress */}
              {/* ============================================ */}
              <section id="doua-stress" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua contre le stress et l&apos;angoisse avant les examens
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le <strong>stress</strong> et l&apos;
                  <strong>angoisse</strong> sont des compagnons fréquents de
                  la période d&apos;examens. Le Prophète ﷺ lui-même
                  cherchait refuge auprès d&apos;Allah contre ces états. Il
                  enseignait à ses compagnons des invocations spécifiques pour
                  dissiper l&apos;inquiétude et retrouver la paix
                  intérieure.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ
                    وَالْحَزَنِ وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ
                    وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ وَأَعُوذُ
                    بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni
                    a&apos;udhu bika minal-hammi wal-hazan, wa
                    a&apos;udhu bika minal-&apos;ajzi wal-kasal, wa
                    a&apos;udhu bika minal-jubni wal-bukhl, wa
                    a&apos;udhu bika min ghalabatid-dayni wa qahrir-rijal.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je cherche refuge auprès de Toi
                    contre le souci et la tristesse, contre l&apos;incapacité
                    et la paresse, contre la lâcheté et l&apos;avarice, et
                    contre le poids de la dette et la domination des
                    hommes.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6369)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est l&apos;une des plus complètes du
                  Prophète ﷺ. Elle couvre le souci (<em>hamm</em>, ce qui
                  concerne l&apos;avenir), la tristesse (<em>hazan</em>, ce
                  qui concerne le passé), l&apos;incapacité
                  (<em>&apos;ajz</em>), la paresse (<em>kasal</em>), la
                  lâcheté (<em>jubn</em>) et l&apos;avarice
                  (<em>bukhl</em>). Pendant la période des examens,
                  l&apos;étudiant peut souffrir de chacun de ces maux :
                  l&apos;inquiétude pour les résultats futurs, le regret de
                  ne pas avoir assez révisé, l&apos;impression de ne pas
                  pouvoir y arriver, la tentation de la procrastination.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ a aussi enseigné une invocation puissante
                  pour celui qui est accablé par l&apos;angoisse :
                </p>

                <HadithCard
                  arabic="لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ"
                  text="Il n'y a de divinité qu'Allah, l'Immense, le Clément. Il n'y a de divinité qu'Allah, le Seigneur du Trône immense. Il n'y a de divinité qu'Allah, le Seigneur des cieux, le Seigneur de la terre et le Seigneur du Trône noble."
                  source="Rapporté par al-Bukhari (6346) et Muslim (2730)"
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rappel de la grandeur d&apos;Allah et de Sa souveraineté
                  sur les cieux et la terre remet en perspective les
                  difficultés de l&apos;examen. Celui qui a créé l&apos;univers
                  est capable de faciliter un examen à Son serviteur. Cette
                  certitude apporte un apaisement profond.
                </p>

                <Image
                  src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                  alt="Prosternation (sujud) dans une mosquée, moment privilégié pour la doua et la demande de facilité"
                  width={800}
                  height={450}
                  className="mt-8 rounded-xl"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Invocations contre l'oubli */}
              {/* ============================================ */}
              <section id="doua-oubli" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les invocations de protection contre l&apos;oubli
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;<strong>oubli</strong> est l&apos;ennemi redouté de
                  tout étudiant. Après des heures de révision, la crainte de
                  tout oublier le jour J est légitime. L&apos;islam offre des
                  moyens spirituels pour combattre l&apos;oubli, en
                  complément des techniques de mémorisation classiques.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ enseignait à chercher refuge auprès
                  d&apos;Allah contre une science qui ne profite pas. On peut
                  comprendre que la science qui ne profite pas inclut celle
                  que l&apos;on oublie au moment où l&apos;on en a besoin :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا
                    يَنْفَعُ وَمِنْ قَلْبٍ لَا يَخْشَعُ وَمِنْ نَفْسٍ لَا
                    تَشْبَعُ وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu
                    bika min &apos;ilmin la yanfa&apos;, wa min qalbin la
                    yakhsha&apos;, wa min nafsin la tashba&apos;, wa min
                    da&apos;watin la yustajab laha.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je cherche refuge auprès de Toi
                    contre une science qui ne profite pas, un cœur qui ne
                    craint pas, une âme qui n&apos;est jamais rassasiée et
                    une invocation qui n&apos;est pas exaucée.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2722)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants recommandent également plusieurs pratiques pour
                  renforcer la mémoire et lutter contre l&apos;oubli :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "La récitation régulière du Coran",
                      desc: "Le Prophète ﷺ a dit que le Coran s'échappe du cœur plus vite qu'un chameau de son attache. La révision régulière du Coran renforce la mémoire globale.",
                    },
                    {
                      title: "L'abandon des péchés",
                      desc: "L'imam Ash-Shafi'i disait : « La science est une lumière, et la lumière d'Allah n'est pas accordée au désobéissant. » Les péchés affaiblissent la mémoire.",
                    },
                    {
                      title: "Le dhikr après les prières",
                      desc: "Les adhkar réguliers après chaque prière nourrissent le cœur et l'esprit. Un esprit connecté à Allah est un esprit plus clair et plus vif.",
                    },
                    {
                      title: "La nourriture saine et licite",
                      desc: "Le miel, la graine de nigelle, les dattes et l'eau de Zamzam sont recommandés dans la Sunna. Une alimentation saine soutient les fonctions cognitives.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-foreground-secondary">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques : révisions, tawakkul et doua
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam enseigne un <strong>équilibre</strong> entre
                  l&apos;effort personnel et la confiance en Allah. Le
                  tawakkul ne signifie pas l&apos;inaction : il signifie
                  fournir tous les efforts possibles puis s&apos;en remettre
                  à Allah pour le résultat. Voici les conseils pratiques pour
                  aborder les examens en tant que musulman :
                </p>

                <HadithCard
                  arabic="اعْقِلْهَا وَتَوَكَّلْ"
                  text="Attache-la (ta chamelle) et place ta confiance en Allah."
                  source="Rapporté par at-Tirmidhi (2517)"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Avant l&apos;examen
                </h3>

                <div className="mt-4 space-y-3">
                  {[
                    "Préparez un planning de révision réaliste et commencez tôt. Ne remettez pas au lendemain ce que vous pouvez faire aujourd'hui.",
                    "Récitez « Rabbi zidni 'ilman » au début de chaque session de révision pour demander l'augmentation de la science.",
                    "Faites les adhkar du matin et du soir chaque jour pour bénéficier de la protection et de la baraka d'Allah.",
                    "Priez les cinq prières à l'heure et ajoutez des prières surérogatoires (nawafil), notamment la prière de la nuit (qiyam al-layl).",
                    "Mangez sainement, dormez suffisamment et évitez les écrans tardifs. Le corps a des droits sur vous.",
                    "Faites la doua de Moussa (Rabbi ishrah li sadri) régulièrement pendant la période de révision.",
                  ].map((tip, i) => (
                    <div
                      key={i}
                      className="flex gap-3 rounded-lg border border-border bg-white p-4"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Pendant l&apos;examen
                </h3>

                <div className="mt-4 space-y-3">
                  {[
                    "Dites « Bismillah » en recevant votre copie. Commencez chaque chose au nom d'Allah.",
                    "Si vous bloquez sur une question, dites « La hawla wa la quwwata illa billah » et passez à la suivante. Revenez-y plus tard avec l'esprit frais.",
                    "Restez calme et confiant. Vous avez fait vos révisions et vos douas : le résultat est entre les mains d'Allah.",
                    "Gérez votre temps efficacement. Lisez toutes les questions avant de commencer et commencez par celles que vous maîtrisez.",
                  ].map((tip, i) => (
                    <div
                      key={i}
                      className="flex gap-3 rounded-lg border border-border bg-white p-4"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Après l&apos;examen
                </h3>

                <div className="mt-4 space-y-3">
                  {[
                    "Dites « Alhamdulillah » (louange à Allah) quel que soit votre ressenti. Remerciez Allah de vous avoir permis de passer cet examen.",
                    "Ne vous torturez pas en comparant vos réponses avec celles des autres. Ce qui est fait est fait, et le résultat appartient à Allah.",
                    "Acceptez le résultat avec sérénité. La réussite et l'échec font partie du qadr (décret divin). L'échec peut cacher un bien que vous ne voyez pas encore.",
                    "Continuez vos invocations pour les résultats. Demandez à Allah le meilleur pour votre avenir, quelle que soit l'issue.",
                  ].map((tip, i) => (
                    <div
                      key={i}
                      className="flex gap-3 rounded-lg border border-border bg-white p-4"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-xs font-bold text-secondary">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-foreground">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le verset suivant du Coran résume parfaitement cet état
                  d&apos;esprit :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ
                    يُسْرًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Fa inna ma&apos;al-&apos;usri
                    yusran. Inna ma&apos;al-&apos;usri yusran.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Car certes, avec la difficulté il y a une
                    facilité. Oui, avec la difficulté il y a une
                    facilité.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Ash-Sharh (94:5-6)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset est répété deux fois pour insister : chaque
                  difficulté est nécessairement accompagnée d&apos;une
                  facilité. Les savants en ont déduit que la facilité
                  l&apos;emporte toujours sur la difficulté, car la
                  difficulté est mentionnée avec l&apos;article défini
                  (la même difficulté) tandis que la facilité est mentionnée
                  de manière indéfinie (une nouvelle facilité à chaque fois).
                </p>
              </section>

              {/* ============================================ */}
              {/* CTA + FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Comprenez vos invocations en arabe"
                description="La plupart des douas viennent du Coran et de la Sunna. Apprendre l'arabe vous permet de les comprendre en profondeur, sans dépendre des traductions. Choisissez votre formation pour commencer."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Toutes les douas en islam
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                  <Link
                    href="/remede-angoisse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède contre l&apos;angoisse
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
