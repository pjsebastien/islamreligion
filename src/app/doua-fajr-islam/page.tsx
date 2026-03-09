import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua du Fajr en islam : invocations du réveil et de la prière de l'aube",
  description:
    "Découvrez les douas du fajr en islam : invocation au réveil (al-hamdulillahi alladhi ahyana), doua avant et après la prière de l'aube, adhkar du matin, doua entre adhan et iqamah. Textes en arabe, phonétique et traduction.",
  openGraph: {
    title:
      "Doua du Fajr en islam : invocations du réveil et de la prière de l'aube",
    description:
      "Les invocations authentiques liées à la prière du fajr : doua au réveil, avant et après salat al-fajr, adhkar du matin et mérites de la prière en groupe.",
    url: "https://www.islamreligion.fr/doua-fajr-islam",
    images: [
      {
        url: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-fajr-islam",
  },
};

const tocItems = [
  { id: "importance-fajr", label: "L'importance de la prière du fajr" },
  { id: "doua-reveil", label: "Doua au réveil avant le fajr" },
  { id: "doua-avant-fajr", label: "Doua avant la prière du fajr" },
  { id: "doua-entre-adhan-iqamah", label: "Doua entre adhan et iqamah" },
  { id: "adhkar-apres-fajr", label: "Adhkar et douas après le fajr" },
  { id: "merites-fajr-congregation", label: "Mérites du fajr en congrégation" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua à dire au réveil avant le fajr ?",
    answer:
      "La doua à dire au réveil est : « Al-hamdulillahi alladhi ahyana ba&apos;da ma amatana wa ilayhi an-nushur » (Louange à Allah qui nous a redonné la vie après nous avoir fait mourir, et c&apos;est vers Lui la résurrection). Cette invocation est rapportée par al-Bukhari (6324). Elle rappelle au croyant que chaque réveil est un bienfait d&apos;Allah et une nouvelle occasion de L&apos;adorer.",
  },
  {
    question: "Quelle doua réciter après la prière du fajr ?",
    answer:
      "Après la prière du fajr, le Prophète (paix et salut sur lui) récitait les adhkar habituels de fin de prière (astaghfirullah 3 fois, Allahumma anta as-salam...), puis il restait assis pour les adhkar du matin jusqu&apos;au lever du soleil. Parmi les invocations recommandées : la récitation d&apos;Ayat al-Kursi, le tasbih (SubhanAllah 33 fois, Alhamdulillah 33 fois, Allahu Akbar 34 fois) et les sourates al-Falaq et an-Nas.",
  },
  {
    question: "Est-il recommandé de faire doua entre l'adhan et l'iqamah du fajr ?",
    answer:
      "Oui, le moment entre l&apos;adhan et l&apos;iqamah est un temps d&apos;exaucement pour toutes les prières, y compris le fajr. Le Prophète (paix et salut sur lui) a dit : « L&apos;invocation faite entre l&apos;adhan et l&apos;iqamah n&apos;est pas rejetée » (rapporté par Abu Dawud 521 et at-Tirmidhi 212). C&apos;est un moment privilégié que le croyant doit saisir pour invoquer Allah.",
  },
  {
    question: "Peut-on réciter les adhkar du matin après la prière du fajr ?",
    answer:
      "Oui, c&apos;est même la pratique recommandée. Le Prophète (paix et salut sur lui) restait assis après la prière du fajr dans son lieu de prière pour évoquer Allah jusqu&apos;au lever du soleil. Les adhkar du matin se récitent idéalement après salat al-fajr et avant le lever du soleil, car c&apos;est le moment le plus béni de la journée.",
  },
  {
    question: "Quel est le mérite de prier le fajr en congrégation ?",
    answer:
      "Le Prophète (paix et salut sur lui) a dit : « Celui qui prie le fajr en congrégation est sous la protection d&apos;Allah » (rapporté par Muslim 657). Il a également dit que celui qui prie le fajr et le &apos;isha en groupe, c&apos;est comme s&apos;il avait prié la nuit entière (Muslim 656). Le fajr en congrégation est l&apos;un des actes les plus méritoires en islam.",
  },
  {
    question: "Quelle est la différence entre fajr et sobh ?",
    answer:
      "Les termes fajr et sobh désignent la même prière obligatoire de l&apos;aube. « Fajr » signifie l&apos;aube (le moment où la lumière apparaît à l&apos;horizon) et « sobh » signifie le matin. Les deux termes sont utilisés de manière interchangeable par les savants. La prière se compose de deux unités (raka&apos;at) précédées de deux raka&apos;at surérogatoires (sunna ratiba).",
  },
  {
    question: "Que dire en se réveillant la nuit avant le fajr ?",
    answer:
      "Si le croyant se réveille durant la nuit, le Prophète (paix et salut sur lui) a enseigné de dire : « La ilaha illAllahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir. Alhamdulillah, wa SubhanAllah, wa la ilaha illAllah, wa Allahu akbar, wa la hawla wa la quwwata illa billah ». Puis s&apos;il invoque Allah, sa doua est exaucée (al-Bukhari 1154).",
  },
];

export default function DouaFajrIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-fajr-islam/#article",
        headline:
          "Doua du Fajr en islam : invocations du réveil et de la prière de l'aube",
        description:
          "Découvrez les douas du fajr en islam : invocation au réveil, doua avant et après la prière de l'aube, adhkar du matin et mérites de la prière en congrégation.",
        image: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        datePublished: "2026-04-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-fajr-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-fajr-islam/#breadcrumb",
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
            name: "Doua de la prière du fajr",
            item: "https://www.islamreligion.fr/doua-fajr-islam",
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
          title="Doua du Fajr en islam : invocations du réveil et de la prière de l'aube"
          subtitle="Les invocations authentiques liées à la prière du fajr, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/prosternation-sujud-priere-islam-mosquee.jpg"
          imageAlt="Prosternation sujud durant la prière du fajr dans une mosquée en islam"
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
                <span className="text-foreground">Doua de la prière du fajr</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La prière du fajr occupe une place exceptionnelle en islam.
                  Elle est la première adoration de la journée, accomplie à
                  l&apos;aube alors que la plupart des gens dorment encore. Le
                  Prophète (paix et salut sur lui) a enseigné de nombreuses
                  invocations à réciter au réveil, avant et après cette prière
                  bénie. Ces douas protègent le croyant, attirent la
                  miséricorde divine et placent toute la journée sous la
                  bénédiction d&apos;Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance du fajr */}
              {/* ============================================ */}
              <section id="importance-fajr" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance de la prière du fajr en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La prière du fajr (salat al-fajr) est l&apos;une des cinq
                  prières obligatoires en islam. Elle se distingue par son
                  horaire particulier, à l&apos;aube, lorsque la première
                  lueur apparaît à l&apos;horizon. Ce moment béni est
                  mentionné dans le Coran comme un instant où les anges sont
                  témoins de la prière du croyant : &laquo;&nbsp;Accomplis
                  la prière au déclin du soleil jusqu&apos;à l&apos;obscurité
                  de la nuit, et la récitation de l&apos;aube, car la
                  récitation de l&apos;aube a des témoins&nbsp;&raquo;
                  (Coran, 17:78).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Se lever pour le fajr demande un effort considérable, et
                  c&apos;est précisément cet effort qui en fait l&apos;un des
                  actes les plus méritoires. Le Prophète (paix et salut sur
                  lui) a souligné que cette prière constitue un critère de
                  distinction entre le croyant sincère et l&apos;hypocrite.
                  Celui qui accomplit le fajr démontre sa soumission à Allah
                  et sa détermination à placer l&apos;adoration au-dessus du
                  confort. Les <Link href="/doua-matin-adhkar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">adhkar du matin</Link> récités
                  après cette prière renforcent la protection spirituelle
                  tout au long de la journée.
                </p>

                <HadithCard
                  arabic="من صلى الصبح فهو في ذمة الله"
                  text="Celui qui prie la prière du sobh (fajr) est sous la protection d'Allah."
                  source="Rapporté par Muslim (657)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une portée immense : le croyant qui
                  accomplit la prière du fajr bénéficie de la protection
                  divine (dhimma) pour toute la journée. Cette protection
                  englobe sa personne, sa famille, ses biens et toutes ses
                  affaires. C&apos;est pourquoi les savants insistent sur
                  l&apos;importance de ne jamais délaisser cette prière et
                  de s&apos;y préparer la veille en se couchant tôt et en
                  formulant l&apos;intention de se lever pour adorer Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La prière la plus difficile pour les hypocrites :</strong>{" "}
                      le Prophète (paix et salut sur lui) a dit que les prières
                      les plus lourdes pour les hypocrites sont le &apos;isha et
                      le fajr (al-Bukhari 657, Muslim 651).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Meilleure que le monde entier :</strong>{" "}
                      le Prophète (paix et salut sur lui) a dit : &laquo;&nbsp;Les
                      deux raka&apos;at (surérogatoires) du fajr sont meilleures
                      que le monde et tout ce qu&apos;il contient&nbsp;&raquo;
                      (Muslim 725).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lumière au Jour du Jugement :</strong>{" "}
                      le Prophète (paix et salut sur lui) a annoncé la bonne
                      nouvelle d&apos;une lumière complète au Jour de la
                      Résurrection pour ceux qui marchent vers les mosquées
                      dans l&apos;obscurité (Abu Dawud 561).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de prière d'une mosquée avec lumière du soleil à l'aube symbolisant la prière du fajr"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua au réveil */}
              {/* ============================================ */}
              <section id="doua-reveil" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua au réveil avant le fajr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le premier acte spirituel du musulman, avant même de se
                  lever de son lit, est de remercier Allah de lui avoir
                  redonné la vie. Le sommeil est comparé à une petite mort
                  dans la tradition islamique, et chaque réveil est un
                  bienfait divin qui mérite gratitude et reconnaissance. Le
                  Prophète (paix et salut sur lui) a enseigné plusieurs
                  invocations à prononcer dès l&apos;ouverture des yeux.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Al-hamdulillahi alladhi ahyana
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la doua principale que le Prophète (paix et
                  salut sur lui) récitait en se réveillant. Elle exprime la
                  reconnaissance envers Allah pour le bienfait du réveil et
                  rappelle au croyant que la résurrection finale est une
                  réalité vers laquelle chacun se dirige.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdulillahi alladhi ahyana ba&apos;da ma amatana wa ilayhi an-nushur
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui nous a redonné la vie après nous avoir fait mourir, et c&apos;est vers Lui la résurrection&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6324)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua en se réveillant la nuit
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Si le croyant se réveille durant la nuit, avant l&apos;heure
                  du fajr, le Prophète (paix et salut sur lui) a enseigné une
                  invocation dont il a garanti l&apos;exaucement. Ce moment
                  de réveil nocturne est un don d&apos;Allah et une occasion
                  précieuse d&apos;invoquer.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lahu, lahul-mulku wa lahul-hamdu wa huwa &apos;ala kulli shay&apos;in qadir. SubhanAllah, wal-hamdulillah, wa la ilaha illAllah, wa Allahu akbar, wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah, Seul, sans associé. A Lui la royauté, à Lui la louange, et Il est capable de toute chose. Gloire à Allah, louange à Allah, il n&apos;y a de divinité qu&apos;Allah, Allah est le plus grand, et il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1154)
                  </p>
                </div>

                <HadithCard
                  arabic="من تعارّ من الليل فقال: لا إله إلا الله وحده لا شريك له... ثم قال: اللهم اغفر لي، أو دعا، استُجيب له"
                  text="Celui qui se réveille la nuit et dit : 'La ilaha illAllahu wahdahu...' puis dit : 'Seigneur, pardonne-moi', ou formule une invocation, celle-ci sera exaucée."
                  source="Rapporté par al-Bukhari (1154)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle un secret extraordinaire : le simple fait
                  de se réveiller durant la nuit et de prononcer cette
                  invocation ouvre la porte de l&apos;exaucement. Le croyant
                  qui saisit ce moment peut ensuite demander à Allah tout
                  ce qu&apos;il souhaite avec la certitude d&apos;être
                  entendu. C&apos;est pourquoi les savants recommandent de
                  profiter de tout réveil nocturne, même involontaire, pour
                  invoquer Allah avant de se rendormir ou de se préparer
                  pour le fajr.
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
              {/* SECTION 3 : Doua avant le fajr */}
              {/* ============================================ */}
              <section id="doua-avant-fajr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas à réciter avant la prière du fajr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant d&apos;accomplir la prière du fajr, le croyant passe
                  par plusieurs étapes spirituelles : les ablutions (wudu),
                  la réponse à l&apos;adhan et les deux raka&apos;at
                  surérogatoires (sunna ratiba). Chacune de ces étapes est
                  accompagnée d&apos;invocations spécifiques que le Prophète
                  (paix et salut sur lui) pratiquait assidûment. Pour
                  découvrir la <Link href="/doua-apres-adhan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua complète après l&apos;adhan</Link>,
                  consultez notre article dédié.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua après les ablutions
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après avoir accompli le wudu pour le fajr, le Prophète
                  (paix et salut sur lui) a enseigné une invocation qui
                  ouvre les huit portes du Paradis au croyant. Se purifier
                  à l&apos;aube, dans le froid et l&apos;obscurité, est un
                  acte d&apos;une grande valeur auprès d&apos;Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ash-hadu an la ilaha illAllahu wahdahu la sharika lahu, wa ash-hadu anna Muhammadan &apos;abduhu wa rasuluh. Allahumma ij&apos;alni minat-tawwabina waj&apos;alni minal-mutatah-hirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;J&apos;atteste qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah, Seul sans associé, et j&apos;atteste que Muhammad est Son serviteur et Son messager. Seigneur, fais de moi un de ceux qui se repentent et un de ceux qui se purifient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (234) et at-Tirmidhi (55)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua d&apos;entrée à la mosquée
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le croyant qui se rend à la mosquée pour la prière du fajr
                  en congrégation récite une invocation spécifique en
                  franchissant la porte, entrant du pied droit. Cette doua
                  demande à Allah d&apos;ouvrir les portes de Sa miséricorde
                  au serviteur qui vient L&apos;adorer dans Sa maison.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma iftah li abwaba rahmatik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ouvre-moi les portes de Ta miséricorde&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (713)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua entre adhan et iqamah */}
              {/* ============================================ */}
              <section id="doua-entre-adhan-iqamah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua entre l&apos;adhan et l&apos;iqamah du fajr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le moment qui sépare l&apos;appel à la prière (adhan) de
                  l&apos;annonce du début de la prière (iqamah) est
                  considéré comme l&apos;un des instants les plus propices
                  à l&apos;exaucement des invocations. Pour le fajr, ce
                  moment est particulièrement béni car il se situe en fin de
                  nuit, un temps où Allah descend au ciel le plus proche
                  pour répondre aux demandes de Ses serviteurs.
                </p>

                <HadithCard
                  arabic="الدعاء لا يرد بين الأذان والإقامة"
                  text="L'invocation faite entre l'adhan et l'iqamah n'est pas rejetée."
                  source="Rapporté par Abu Dawud (521), at-Tirmidhi (212)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est une garantie prophétique qui encourage le
                  croyant à profiter de chaque instant entre l&apos;adhan du
                  fajr et l&apos;iqamah pour adresser ses demandes les plus
                  importantes à Allah. Qu&apos;il s&apos;agisse de demandes
                  liées à ce monde ou à l&apos;au-delà, le croyant doit
                  saisir cette opportunité avec conviction et humilité.
                  Les compagnons du Prophète connaissaient bien la valeur
                  de ce moment et ne le laissaient jamais passer sans
                  invoquer Allah avec ferveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de combiner plusieurs facteurs
                  d&apos;exaucement durant ce moment : faire face à la
                  qibla, lever les mains, commencer par louer Allah et
                  envoyer la prière sur le Prophète (paix et salut sur lui),
                  formuler ses demandes avec précision et sincérité, puis
                  conclure à nouveau par la prière sur le Prophète. Pour
                  approfondir les invocations liées à l&apos;adhan,
                  consultez notre guide sur la{" "}
                  <Link href="/doua-apres-adhan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua après l&apos;adhan</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en invocation doua entre l'adhan et l'iqamah de la prière du fajr"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Adhkar après le fajr */}
              {/* ============================================ */}
              <section id="adhkar-apres-fajr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Adhkar et douas après la prière du fajr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Après avoir accompli la prière du fajr, le Prophète (paix
                  et salut sur lui) restait assis dans son lieu de prière
                  pour évoquer Allah jusqu&apos;au lever du soleil. Ce
                  moment est d&apos;une richesse spirituelle immense : il
                  combine les adhkar de fin de prière et les{" "}
                  <Link href="/doua-matin-adhkar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">adhkar du matin</Link>.
                  Le croyant qui adopte cette pratique place sa journée
                  entière sous la protection et la bénédiction d&apos;Allah.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Istighfar (demande de pardon) trois fois
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Immédiatement après le salam, le Prophète (paix et salut
                        sur lui) disait &laquo;&nbsp;Astaghfirullah&nbsp;&raquo;
                        trois fois, puis récitait : &laquo;&nbsp;Allahumma anta
                        as-salam wa minka as-salam, tabarakta ya dhal-jalali
                        wal-ikram&nbsp;&raquo; (Seigneur, Tu es la Paix, et de
                        Toi vient la paix. Béni sois-Tu, Seigneur de majesté et
                        de générosité). Rapporté par Muslim (591).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ayat al-Kursi (le Verset du Trône)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Celui qui récite Ayat al-Kursi après chaque
                        prière obligatoire, rien ne l&apos;empêchera
                        d&apos;entrer au Paradis, si ce n&apos;est la
                        mort&nbsp;&raquo; (rapporté par an-Nasa&apos;i dans
                        as-Sunan al-Kubra). Cette récitation après le fajr est
                        particulièrement recommandée.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tasbih : SubhanAllah, Alhamdulillah, Allahu Akbar
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dire SubhanAllah 33 fois, Alhamdulillah 33 fois et
                        Allahu Akbar 34 fois après chaque prière est une sunna
                        confirmée. Le Prophète (paix et salut sur lui) a dit
                        que celui qui fait cela après chaque prière verra ses
                        péchés pardonnés, même s&apos;ils sont aussi nombreux
                        que l&apos;écume de la mer (Muslim 597).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les sourates al-Ikhlas, al-Falaq et an-Nas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) recommandait de
                        réciter ces trois sourates trois fois chacune après la
                        prière du fajr et celle du maghrib, en raison de leur
                        puissance protectrice. Elles constituent un bouclier
                        contre le mal, la sorcellerie et le mauvais oeil
                        (Abu Dawud 5082, at-Tirmidhi 3575).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour découvrir l&apos;ensemble des invocations à réciter
                  après les cinq prières obligatoires, consultez notre
                  article dédié aux{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas après la prière</Link>.
                  Ces adhkar constituent la base de la protection
                  quotidienne du musulman et ne doivent jamais être
                  négligés, en particulier après le fajr.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Mérites du fajr en congrégation */}
              {/* ============================================ */}
              <section id="merites-fajr-congregation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites de prier le fajr en congrégation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La prière du fajr en congrégation à la mosquée est
                  l&apos;un des actes les plus méritoires en islam. Le
                  Prophète (paix et salut sur lui) a multiplié les
                  encouragements et les promesses pour ceux qui font
                  l&apos;effort de se rendre à la mosquée à l&apos;aube,
                  dans l&apos;obscurité, pour prier ensemble. Cette
                  pratique est un signe de foi sincère et de dévotion
                  authentique.
                </p>

                <HadithCard
                  arabic="من صلى العشاء في جماعة فكأنما قام نصف الليل ومن صلى الصبح في جماعة فكأنما صلى الليل كله"
                  text="Celui qui prie le 'isha en congrégation, c'est comme s'il avait prié la moitié de la nuit. Et celui qui prie le fajr en congrégation, c'est comme s'il avait prié la nuit entière."
                  source="Rapporté par Muslim (656)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre l&apos;immensité de la récompense :
                  celui qui accomplit le fajr en congrégation obtient la
                  récompense d&apos;une nuit entière de prière (qiyam
                  al-layl). Cette multiplication des récompenses est une
                  miséricorde d&apos;Allah envers Ses serviteurs qui font
                  l&apos;effort de quitter le confort de leur lit pour
                  L&apos;adorer.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Protection divine toute la journée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a averti de ne pas
                      nuire à celui qui prie le fajr, car il est sous la
                      protection (dhimma) d&apos;Allah. Quiconque porte
                      atteinte à cette personne, Allah le poursuivra jusqu&apos;à
                      ce qu&apos;Il le jette en Enfer (Muslim 657).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;annonce du Paradis
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Celui qui prie les deux fraîcheurs (al-bardayn :
                      fajr et &apos;asr) entrera au Paradis&nbsp;&raquo;
                      (al-Bukhari 574, Muslim 635). Cette promesse concerne
                      celui qui persévère dans ces deux prières.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Voir Allah au Jour Dernier
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit en regardant
                      la lune une nuit de pleine lune : &laquo;&nbsp;Vous
                      verrez votre Seigneur comme vous voyez cette lune. Si
                      vous pouvez ne pas manquer la prière avant le lever et
                      le coucher du soleil, faites-le&nbsp;&raquo;, c&apos;est-à-dire
                      le fajr et le &apos;asr (al-Bukhari 554).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Lumière au Jour de la Résurrection
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a annoncé la bonne
                      nouvelle d&apos;une lumière complète au Jour de la
                      Résurrection pour ceux qui marchent vers les mosquées
                      dans l&apos;obscurité pour le fajr et le &apos;isha
                      (Abu Dawud 561, at-Tirmidhi 223).
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour faciliter le réveil pour le fajr, les savants
                  recommandent plusieurs moyens pratiques : se coucher tôt
                  après le &apos;isha, formuler l&apos;intention sincère de
                  se lever, utiliser un réveil, demander à un proche de
                  vous réveiller, et surtout invoquer Allah avant de dormir
                  pour qu&apos;Il vous aide à vous lever. La{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                  est un outil puissant pour obtenir l&apos;aide d&apos;Allah
                  dans tous les aspects de la vie, y compris dans la
                  régularité des prières.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua après la prière en islam"
                  description="Découvrez toutes les invocations authentiques à réciter après chaque prière obligatoire, avec textes en arabe, phonétique et traduction."
                  href="/doua-apres-priere-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations du fajr"
                description="Maîtrisez la langue du Coran pour réciter les douas du réveil et de la prière avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur les invocations en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-matin-adhkar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Adhkar du matin
                  </Link>
                  <Link
                    href="/doua-apres-priere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua après la prière
                  </Link>
                  <Link
                    href="/doua-apres-adhan-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua après l&apos;adhan
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Comprendre l&apos;islam
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
