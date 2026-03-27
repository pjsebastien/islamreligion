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

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua contre la douleur en islam : invocations authentiques pour soulager le mal",
  description:
    "Découvrez les douas contre la douleur en islam : invocations prophétiques en arabe avec phonétique et traduction, hadith de Uthman ibn Abi al-As, roqya pour soulager la douleur physique et conseils pratiques.",
  openGraph: {
    title:
      "Doua contre la douleur en islam : invocations authentiques pour soulager le mal",
    description:
      "Les invocations authentiques contre la douleur en islam : textes en arabe, phonétique, traduction et hadiths. Soulagez vos douleurs par la permission d&apos;Allah.",
    url: "https://www.islamreligion.fr/doua-douleur-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-douleur-islam",
  },
};

const tocItems = [
  { id: "douleur-epreuve", label: "La douleur comme épreuve en islam" },
  { id: "doua-main-douleur", label: "Doua en posant la main sur la douleur" },
  { id: "doua-roqya-guerison", label: "Doua de roqya pour la guérison" },
  { id: "douas-coraniques-douleur", label: "Versets coraniques contre la douleur" },
  { id: "moments-propices", label: "Moments propices et conseils pratiques" },
  { id: "patience-recompense", label: "La patience face à la douleur et sa récompense" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua contre la douleur en islam ?",
    answer:
      "La doua principale contre la douleur consiste à poser la main sur l&apos;endroit douloureux, dire « Bismillah » trois fois, puis réciter sept fois : « A&apos;udhu billahi wa qudratihi min sharri ma ajidu wa uhadhiru » (Je cherche refuge auprès d&apos;Allah et de Sa puissance contre le mal que je ressens et que je redoute). Ce hadith est rapporté par Muslim (2202) d&apos;après Uthman ibn Abi al-As.",
  },
  {
    question: "Combien de fois faut-il réciter la doua contre la douleur ?",
    answer:
      "Selon le hadith authentique rapporté par Muslim, il faut dire « Bismillah » (Au nom d&apos;Allah) trois fois, puis réciter l&apos;invocation « A&apos;udhu billahi wa qudratihi min sharri ma ajidu wa uhadhiru » sept fois. Cette séquence peut être répétée chaque fois que la douleur se manifeste, sans limite de nombre.",
  },
  {
    question: "Peut-on réciter la doua contre la douleur en français ?",
    answer:
      "Oui, il est permis d&apos;invoquer Allah dans toute langue, y compris le français. Cependant, les savants recommandent d&apos;apprendre les formules prophétiques en arabe pour bénéficier de leur puissance spirituelle originale. Pour les supplications personnelles, le français est parfaitement valide. L&apos;essentiel est la sincérité du coeur et la confiance en Allah.",
  },
  {
    question: "La doua contre la douleur remplace-t-elle les médicaments ?",
    answer:
      "Non, la doua ne remplace pas les soins médicaux. En islam, le recours à la médecine est recommandé et même obligatoire dans certains cas. Le Prophète (paix et salut sur lui) a dit : « Serviteurs d&apos;Allah, soignez-vous, car Allah n&apos;a pas créé de maladie sans lui avoir créé un remède » (Abu Dawud). La doua et le traitement médical sont complémentaires.",
  },
  {
    question: "Qu'est-ce que la roqya contre la douleur ?",
    answer:
      "La roqya (رقية) est une guérison par les invocations coraniques et prophétiques. Contre la douleur, elle consiste à réciter des versets du Coran (al-Fatiha, les sourates protectrices) et des invocations du Prophète (paix et salut sur lui) sur la zone douloureuse. La roqya légitime (shar&apos;iyya) se limite aux paroles d&apos;Allah et du Prophète, sans talismans ni pratiques innovées.",
  },
  {
    question: "Faut-il poser la main sur l'endroit de la douleur pendant la doua ?",
    answer:
      "Oui, c&apos;est la sunna du Prophète (paix et salut sur lui). D&apos;après le hadith de Uthman ibn Abi al-As (Muslim 2202), le Prophète lui a dit de poser sa main sur l&apos;endroit douloureux de son corps, puis de dire « Bismillah » trois fois et l&apos;invocation sept fois. Ce geste fait partie intégrante de la doua contre la douleur.",
  },
  {
    question: "Quelle sourate lire pour soulager la douleur ?",
    answer:
      "Plusieurs sourates sont recommandées : sourate al-Fatiha (considérée comme une roqya complète selon le hadith de Abu Sa&apos;id al-Khudri dans al-Bukhari), les trois dernières sourates du Coran (al-Ikhlas, al-Falaq, an-Nas), et le verset du Trône (Ayat al-Kursi). Le Prophète (paix et salut sur lui) soufflait dans ses mains après avoir récité les sourates protectrices et les passait sur son corps.",
  },
  {
    question: "La douleur est-elle une expiation des péchés en islam ?",
    answer:
      "Oui, selon plusieurs hadiths authentiques, toute douleur ou épreuve qui touche le musulman efface une partie de ses péchés. Le Prophète (paix et salut sur lui) a dit : « Tout ce qui touche le musulman comme fatigue, maladie, souci, tristesse, gêne ou chagrin, même une épine qui le pique, Allah lui efface par cela une partie de ses péchés » (al-Bukhari 5641, Muslim 2573).",
  },
];

export default function DouaDouleurIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-douleur-islam/#article",
        headline:
          "Doua contre la douleur en islam : invocations authentiques pour soulager le mal",
        description:
          "Découvrez les douas contre la douleur en islam : invocations prophétiques en arabe, hadiths authentiques, roqya et conseils pratiques pour soulager la douleur.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-03-18",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-douleur-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-douleur-islam/#breadcrumb",
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
            name: "Doua contre la douleur",
            item: "https://www.islamreligion.fr/doua-douleur-islam",
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
          title="Doua contre la douleur en islam : invocations authentiques pour soulager le mal"
          subtitle="Les invocations prophétiques pour apaiser la douleur physique, tirées de la Sunna authentique. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Mains en prière doua islam invocation contre la douleur avec lumière apaisante"
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
                <span className="text-foreground">Doua contre la douleur</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La doua contre la douleur est une sunna prophétique
                  authentique : le Prophète (paix et salut sur lui) a enseigné à
                  ses compagnons de poser la main sur l&apos;endroit douloureux,
                  de dire &laquo;&nbsp;Bismillah&nbsp;&raquo; trois fois, puis
                  de réciter sept fois une invocation de refuge auprès d&apos;Allah.
                  Cette pratique, combinée à la roqya coranique et aux soins
                  médicaux, constitue l&apos;approche islamique complète pour
                  faire face à la douleur physique avec patience et confiance en
                  Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La douleur comme épreuve */}
              {/* ============================================ */}
              <section id="douleur-epreuve" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La douleur comme épreuve et purification en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la <strong>douleur physique</strong> n&apos;est
                  jamais considérée comme un châtiment gratuit ou une punition
                  sans sens. Elle fait partie des épreuves (ibtila) par
                  lesquelles Allah teste la foi de Ses serviteurs et purifie
                  leurs péchés. Le croyant qui supporte la douleur avec patience
                  et qui se tourne vers Allah par l&apos;invocation (doua)
                  transforme cette souffrance en source de récompense et de
                  rapprochement divin.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran affirme cette réalité de manière claire :
                  &laquo;&nbsp;Très certainement, Nous vous éprouverons par un
                  peu de peur, de faim et de diminution de biens, de personnes
                  et de fruits. Et fais la bonne annonce aux
                  endurants&nbsp;&raquo; (Coran, 2:155). La douleur, quelle que
                  soit sa forme, est donc un passage que le musulman traverse
                  armé de sa foi, de ses invocations et de sa confiance absolue
                  en la sagesse divine.
                </p>

                <HadithCard
                  arabic="ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن ولا أذى ولا غم حتى الشوكة يشاكها إلا كفر الله بها من خطاياه"
                  text="Tout ce qui touche le musulman comme fatigue, maladie, souci, tristesse, gêne ou chagrin, même une épine qui le pique, Allah lui efface par cela une partie de ses péchés."
                  source="Rapporté par al-Bukhari (5641) et Muslim (2573)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental établit un principe essentiel : chaque
                  douleur, aussi minime soit-elle, devient une{" "}
                  <strong>expiation des péchés</strong> (kaffara) pour le
                  croyant. L&apos;épine qui pique le doigt, le mal de tête
                  passager, la douleur chronique qui perdure : tout cela
                  contribue à purifier le musulman de ses manquements. Cette
                  vision transforme radicalement le rapport du croyant à la
                  souffrance. Au lieu de se lamenter, il sait que chaque instant
                  de douleur supporté avec patience est une occasion de se
                  rapprocher d&apos;Allah et d&apos;alléger le poids de ses
                  péchés au Jour du Jugement.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La douleur efface les péchés :</strong> chaque
                      souffrance endurée avec patience purifie le croyant devant
                      Allah, selon de nombreux hadiths authentiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;invocation est un remède :</strong> le
                      Prophète (paix et salut sur lui) a enseigné des
                      invocations spécifiques pour soulager la douleur par la
                      permission d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se soigner est une obligation :</strong> le
                      recours aux soins médicaux est encouragé et parfois
                      obligatoire en islam. La doua et la médecine sont
                      complémentaires, jamais opposées.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains jointes en prière pour invoquer Allah contre la douleur en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua en posant la main */}
              {/* ============================================ */}
              <section id="doua-main-douleur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en posant la main sur la douleur : le hadith de Uthman ibn Abi al-As
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;invocation la plus connue et la plus authentique contre
                  la <strong>douleur physique</strong> en islam est celle que le
                  Prophète (paix et salut sur lui) a enseignée au compagnon
                  Uthman ibn Abi al-As ath-Thaqafi. Ce dernier se plaignait
                  d&apos;une douleur persistante dans son corps depuis sa
                  conversion à l&apos;islam. Le Prophète lui a alors prescrit un
                  remède spirituel précis et structuré.
                </p>

                <HadithCard
                  arabic="ضع يدك على الذي تألم من جسدك وقل بسم الله ثلاثا وقل سبع مرات أعوذ بالله وقدرته من شر ما أجد وأحاذر"
                  text="Pose ta main sur l'endroit douloureux de ton corps et dis 'Bismillah' (Au nom d'Allah) trois fois, puis dis sept fois : 'A'udhu billahi wa qudratihi min sharri ma ajidu wa uhadhiru' (Je cherche refuge auprès d'Allah et de Sa puissance contre le mal que je ressens et que je redoute)."
                  source="Rapporté par Muslim (2202)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une importance capitale pour tout
                  musulman confronté à la douleur. Il prescrit un protocole
                  clair en trois étapes. Premièrement, poser la main droite
                  directement sur l&apos;endroit douloureux du corps. Ce geste
                  n&apos;est pas symbolique : il fait partie intégrante de la
                  sunna et établit un lien physique entre l&apos;invocation et
                  la zone affectée. Deuxièmement, prononcer{" "}
                  <strong>&laquo;&nbsp;Bismillah&nbsp;&raquo;</strong> (بِسْمِ
                  اللهِ) trois fois, en invoquant le nom d&apos;Allah comme
                  protection et bénédiction. Troisièmement, réciter
                  l&apos;invocation de refuge sept fois.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Texte complet de la doua contre la douleur
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    بِسْمِ اللهِ (ثَلَاثًا)
                  </p>
                  <p className="mt-2 text-sm font-medium text-secondary">
                    Phonétique : Bismillah (3 fois)
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Traduction : Au nom d&apos;Allah (3 fois)
                  </p>

                  <hr className="my-4 border-secondary/10" />

                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    أَعُوذُ بِاللهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ (سَبْعَ مَرَّاتٍ)
                  </p>
                  <p className="mt-2 text-sm font-medium text-secondary">
                    Phonétique : A&apos;udhu billahi wa qudratihi min sharri ma ajidu wa uhadhiru (7 fois)
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Traduction : Je cherche refuge auprès d&apos;Allah et de Sa
                    puissance contre le mal que je ressens et que je redoute (7 fois)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le compagnon Uthman ibn Abi al-As rapporte qu&apos;après avoir
                  appliqué cette invocation, sa douleur a cessé par la
                  permission d&apos;Allah. Il a ensuite transmis cette sunna à
                  sa famille et à son entourage. Les savants soulignent que cette
                  doua peut être utilisée pour tout type de douleur physique :
                  mal de tête, douleurs articulaires, maux de dos, douleurs
                  abdominales ou toute autre souffrance corporelle. Sa
                  régularité et la sincérité de celui qui la récite sont des
                  facteurs déterminants dans son efficacité par la volonté
                  d&apos;Allah.
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
              {/* SECTION 3 : Roqya pour la guérison */}
              {/* ============================================ */}
              <section id="doua-roqya-guerison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La roqya prophétique pour soulager la douleur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>roqya shar&apos;iyya</strong> (رقية شرعية) est la
                  guérison par les paroles d&apos;Allah et les invocations du
                  Prophète (paix et salut sur lui). Elle constitue un remède
                  spirituel complémentaire à la doua contre la douleur. Le
                  Prophète lui-même pratiquait la roqya sur ses compagnons et
                  sur sa propre personne, notamment lorsqu&apos;il était malade.
                </p>

                <HadithCard
                  arabic="اللهم رب الناس أذهب البأس اشفه وأنت الشافي لا شفاء إلا شفاؤك شفاء لا يغادر سقما"
                  text="Ô Allah, Seigneur des hommes, fais disparaître le mal, guéris-le. Tu es le Guérisseur, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie."
                  source="Rapporté par al-Bukhari (5675) et Muslim (2191)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est l&apos;une des plus puissantes de la
                  roqya prophétique. Aisha (qu&apos;Allah l&apos;agrée) rapporte
                  que le Prophète (paix et salut sur lui) la récitait en passant
                  sa main sur la zone douloureuse de la personne malade. Les
                  savants expliquent que cette doua reconnaît qu&apos;Allah est
                  le seul véritable guérisseur (ash-Shafi) et que toute
                  guérison, qu&apos;elle vienne de la médecine ou de
                  l&apos;invocation, provient ultimement de Lui.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La roqya par sourate al-Fatiha
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Sourate al-Fatiha occupe une place unique dans la roqya
                  islamique. Le Prophète (paix et salut sur lui) l&apos;a
                  qualifiée de &laquo;&nbsp;plus grande sourate du
                  Coran&nbsp;&raquo; et elle a été utilisée comme roqya par les
                  compagnons eux-mêmes. Abu Sa&apos;id al-Khudri rapporte
                  qu&apos;un compagnon a récité al-Fatiha sur une personne
                  piquée par un scorpion, et celle-ci a été guérie par la
                  permission d&apos;Allah (al-Bukhari 5736). La méthode consiste
                  à réciter al-Fatiha avec concentration, puis à souffler
                  légèrement sur la zone douloureuse ou dans les mains avant de
                  les passer sur le corps.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua de Jibril pour la guérison
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    بِسْمِ اللهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اللهُ يَشْفِيكَ بِسْمِ اللهِ أَرْقِيكَ
                  </p>
                  <p className="mt-2 text-sm font-medium text-secondary">
                    Phonétique : Bismillahi arqika min kulli shay&apos;in yu&apos;dhika min sharri kulli nafsin aw &apos;ayni hasidin Allahu yashfika bismillahi arqika
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Traduction : Au nom d&apos;Allah, je te fais la roqya contre
                    toute chose qui te nuit, contre le mal de toute âme ou oeil
                    envieux. Qu&apos;Allah te guérisse, au nom d&apos;Allah je
                    te fais la roqya.
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Source : Rapporté par Muslim (2186)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation, enseignée par l&apos;ange Jibril (Gabriel)
                  au Prophète (paix et salut sur lui), couvre un spectre large
                  de maux : douleurs physiques, atteintes du mauvais oeil
                  (&apos;ayn) et effets des envieux. Les savants la
                  recommandent en complément de la doua spécifique de Uthman ibn
                  Abi al-As pour une protection et une guérison plus complètes
                  par la permission d&apos;Allah.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Versets coraniques */}
              {/* ============================================ */}
              <section id="douas-coraniques-douleur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Versets coraniques pour soulager la douleur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran lui-même est décrit comme une{" "}
                  <strong>guérison</strong> (shifa) pour les croyants. Allah dit :
                  &laquo;&nbsp;Nous faisons descendre du Coran ce qui est une
                  guérison et une miséricorde pour les
                  croyants&nbsp;&raquo; (Coran, 17:82). Plusieurs versets sont
                  particulièrement recommandés par les savants pour soulager la
                  douleur physique et spirituelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Ayat al-Kursi (le verset du Trône)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ
                  </p>
                  <p className="mt-2 text-sm font-medium text-secondary">
                    Phonétique : Allahu la ilaha illa huwa al-Hayyu al-Qayyum, la ta&apos;khudhuhu sinatun wa la nawm...
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Traduction : Allah, il n&apos;y a de divinité que Lui, le
                    Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni
                    sommeil ne Le saisissent... (Coran, 2:255)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ayat al-Kursi est le plus grand verset du Coran selon le
                  Prophète (paix et salut sur lui). Sa récitation apporte une
                  protection divine puissante. Les savants recommandent de le
                  réciter sur la zone douloureuse en soufflant légèrement après
                  la récitation. Ce verset rappelle la toute-puissance
                  d&apos;Allah et Sa souveraineté absolue sur toute chose, y
                  compris la maladie et la douleur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les sourates protectrices (al-Mu&apos;awwidhat)
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait chaque soir les
                  trois dernières sourates du Coran (al-Ikhlas, al-Falaq et
                  an-Nas), soufflait dans ses mains et les passait sur son corps.
                  Lorsqu&apos;il tomba malade lors de sa dernière maladie,
                  Aisha (qu&apos;Allah l&apos;agrée) faisait ce geste pour lui
                  en récitant ces sourates (al-Bukhari 5016). Cette pratique
                  prophétique est particulièrement recommandée pour celui qui
                  souffre de douleurs, car elle combine la puissance des paroles
                  divines avec le geste physique de passer les mains sur le
                  corps.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Musulman en prière récitant des invocations coraniques pour soulager la douleur"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;invocation du Prophète Ayyub (Job)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ
                  </p>
                  <p className="mt-2 text-sm font-medium text-secondary">
                    Phonétique : Anni massaniya ad-durru wa anta arham ar-rahimin
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Traduction : Le mal m&apos;a touché et Tu es le plus
                    Miséricordieux des miséricordieux. (Coran, 21:83)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation du Prophète Ayyub (paix sur lui) est un
                  modèle parfait pour celui qui souffre. Ayyub a été éprouvé par
                  une maladie longue et douloureuse qui a atteint tout son
                  corps. Au lieu de se plaindre, il a adressé cette doua
                  concise et humble à Allah. Le Coran rapporte
                  qu&apos;Allah lui a répondu immédiatement :
                  &laquo;&nbsp;Nous l&apos;exauçâmes, enlevâmes le mal
                  qu&apos;il avait et lui rendîmes les siens&nbsp;&raquo;
                  (Coran, 21:84). Cette doua enseigne au croyant souffrant
                  l&apos;art de se tourner vers Allah avec humilité, sans
                  désespoir ni protestation.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Moments propices */}
              {/* ============================================ */}
              <section id="moments-propices" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Moments propices et conseils pratiques pour la doua contre la douleur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien que la doua contre la douleur puisse être récitée à tout
                  moment, certains instants et certaines pratiques augmentent les
                  chances d&apos;exaucement. Le Prophète (paix et salut sur lui)
                  a guidé sa communauté vers ces moments bénis et ces bonnes
                  pratiques qui accompagnent l&apos;invocation.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Dès l&apos;apparition de la douleur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La sunna du Prophète enseigne de réciter la doua
                        immédiatement lorsque la douleur se manifeste. Uthman ibn
                        Abi al-As a reçu cette invocation précisément parce
                        qu&apos;il se plaignait d&apos;une douleur persistante.
                        Ne pas attendre que la douleur s&apos;intensifie : poser
                        la main et réciter dès les premiers signes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le dernier tiers de la nuit
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné
                        qu&apos;Allah descend au ciel le plus bas durant le
                        dernier tiers de la nuit et dit : &laquo;&nbsp;Qui
                        M&apos;invoque pour que Je l&apos;exauce ? Qui Me
                        demande pour que Je lui donne ?&nbsp;&raquo; (al-Bukhari,
                        Muslim). Ce moment est idéal pour demander la guérison.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        En état de purification (wudu)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Bien que la doua contre la douleur puisse être récitée
                        en tout état, les savants recommandent d&apos;être en
                        état de purification rituelle lorsque c&apos;est
                        possible. Le wudu purifie le corps et l&apos;esprit,
                        créant un état propice à la connexion spirituelle avec
                        Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Combiner doua et traitement médical
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Serviteurs d&apos;Allah, soignez-vous, car
                        Allah n&apos;a pas créé de maladie sans lui avoir créé
                        un remède&nbsp;&raquo; (Abu Dawud 3855). La doua ne
                        remplace pas la médecine : les deux sont des moyens
                        qu&apos;Allah a mis à disposition de l&apos;homme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La persévérance dans l&apos;invocation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ne pas abandonner la doua si la douleur persiste. Le
                        Prophète (paix et salut sur lui) a averti contre le
                        découragement en disant : &laquo;&nbsp;La doua de
                        l&apos;un de vous est exaucée tant qu&apos;il ne se
                        montre pas impatient&nbsp;&raquo; (al-Bukhari 6340,
                        Muslim 2735). La régularité et la constance sont des
                        clés de l&apos;exaucement.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="عجبا لأمر المؤمن إن أمره كله خير وليس ذاك لأحد إلا للمؤمن إن أصابته سراء شكر فكان خيرا له وإن أصابته ضراء صبر فكان خيرا له"
                  text="L'affaire du croyant est étonnante : tout ce qui lui arrive est un bien, et cela n'est accordé qu'au croyant. Si un bonheur le touche, il remercie Allah et c'est un bien pour lui. Et si un malheur le touche, il patiente et c'est un bien pour lui."
                  source="Rapporté par Muslim (2999)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Patience et récompense */}
              {/* ============================================ */}
              <section id="patience-recompense" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La patience face à la douleur et sa récompense auprès d&apos;Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la patience (<strong>sabr</strong>) face à la
                  douleur n&apos;est pas une résignation passive. C&apos;est un
                  acte d&apos;adoration actif qui consiste à accepter le décret
                  d&apos;Allah, à continuer d&apos;invoquer pour la guérison, à
                  se soigner par les moyens disponibles et à maintenir une
                  attitude positive malgré la souffrance. Cette patience est
                  l&apos;une des vertus les plus récompensées en islam.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran promet aux patients une récompense sans limite :
                  &laquo;&nbsp;Les endurants auront leur pleine récompense sans
                  aucun compte&nbsp;&raquo; (Coran, 39:10). Les savants
                  expliquent que cette absence de compte signifie que la
                  récompense de la patience est si immense qu&apos;elle ne peut
                  être quantifiée. C&apos;est le seul acte d&apos;adoration pour
                  lequel Allah a promis une récompense illimitée.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;expiation des péchés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Toute douleur, aussi légère soit-elle, efface une partie
                      des péchés du croyant. Le hadith de l&apos;épine
                      (al-Bukhari 5641) montre que même la plus petite
                      souffrance est prise en compte par Allah. Le croyant
                      malade peut ainsi sortir de son épreuve purifié comme
                      l&apos;or est purifié par le feu.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;élévation en degrés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné que la
                      douleur peut élever le rang du croyant au Paradis. Certains
                      degrés ne peuvent être atteints que par l&apos;épreuve et
                      la patience. La{" "}
                      <Link href="/doua-guerison-malade-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour la guérison</Link>{" "}
                      accompagne cette patience.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le rapprochement d&apos;Allah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La douleur pousse le croyant à se tourner vers Allah avec
                      humilité et dévotion. Cette connexion spirituelle intense
                      est un bienfait caché de l&apos;épreuve. Nombreux sont
                      ceux qui témoignent avoir découvert la profondeur de leur
                      foi à travers la maladie et la souffrance.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La récompense du malade
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit qu&apos;Allah
                      ordonne aux anges d&apos;inscrire pour le malade les mêmes
                      bonnes actions qu&apos;il accomplissait en bonne santé
                      (al-Bukhari). Le croyant alité ne perd rien de ses
                      récompenses habituelles. La{" "}
                      <Link href="/doua-malade-visite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">visite du malade</Link>{" "}
                      est aussi une sunna à connaître.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, le musulman face à la douleur combine quatre
                  éléments essentiels : la récitation des douas prophétiques
                  authentiques, le recours aux soins médicaux, la patience
                  active (sabr) et la confiance en la sagesse divine (tawakkul).
                  Cette approche équilibrée reflète la complétude de
                  l&apos;enseignement islamique qui ne sépare jamais la
                  spiritualité de l&apos;action concrète. Pour approfondir la
                  dimension spirituelle des invocations, découvrez notre
                  guide complet sur{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la doua en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-guerison-malade-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la guérison du malade
                  </Link>
                  <Link
                    href="/doua-malade-visite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la visite du malade
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
