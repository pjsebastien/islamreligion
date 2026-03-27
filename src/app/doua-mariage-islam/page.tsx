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
    "Doua du mariage en islam : invocations pour les époux",
  description:
    "Découvrez les douas du mariage en islam : invocations authentiques en arabe avec phonétique et traduction pour les époux, la cérémonie du nikah, la nuit de noces, la stabilité du couple et la recherche d&apos;un bon conjoint.",
  openGraph: {
    title:
      "Doua du mariage en islam : invocations pour les époux",
    description:
      "Les invocations authentiques du mariage en islam : doua pour trouver un bon conjoint, doua du nikah, Barakallahu lakum, doua de la nuit de noces et invocations pour la stabilité du couple.",
    url: "https://www.islamreligion.fr/doua-mariage-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-mariage-islam",
  },
};

const tocItems = [
  { id: "mariage-en-islam", label: "Le mariage en islam : un acte d&apos;adoration" },
  { id: "doua-trouver-conjoint", label: "Doua pour trouver un bon conjoint" },
  { id: "doua-ceremonie-nikah", label: "Doua de la cérémonie du nikah" },
  { id: "doua-epoux-baraka", label: "Doua des époux : Barakallahu lakum" },
  { id: "doua-nuit-noces", label: "Doua de la nuit de noces" },
  { id: "doua-stabilite-couple", label: "Doua pour la stabilité du couple" },
  { id: "invocations-problemes-conjugaux", label: "Invocations contre les problèmes conjugaux" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua du mariage en islam ?",
    answer:
      "La doua du mariage la plus connue est « Barakallahu laka, wa baraka alayka, wa jama&apos;a baynakuma fi khayr » (Qu&apos;Allah vous bénisse, répande Sa bénédiction sur vous et vous unisse dans le bien). Cette invocation est authentiquement rapportée du Prophète (paix et salut sur lui) par at-Tirmidhi et Abu Dawud. Elle est récitée pour féliciter les nouveaux époux lors de la cérémonie du nikah.",
  },
  {
    question: "Quelle doua faire pour trouver un bon mari ou une bonne épouse ?",
    answer:
      "Parmi les invocations recommandées pour trouver un bon conjoint, on trouve la doua coranique : « Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin » (Seigneur, accorde-nous en nos épouses et nos descendants la joie des yeux). Il est aussi recommandé de faire la prière de consultation (istikhara) avant de prendre une décision matrimoniale, et de multiplier les invocations personnelles en demandant à Allah un conjoint pieux.",
  },
  {
    question: "Que dit-on lors de la cérémonie du nikah ?",
    answer:
      "Lors de la cérémonie du nikah, l&apos;imam ou le wali prononce un sermon (khutbat al-nikah) qui commence par la louange d&apos;Allah et la profession de foi. Les témoins et les familles invoquent ensuite la bénédiction sur les époux avec la doua « Barakallahu lakum ». Le contrat est scellé par l&apos;acceptation mutuelle (ijab wa qabul) devant les témoins et le versement de la dot (mahr).",
  },
  {
    question: "Quelle est la doua de la nuit de noces en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné que l&apos;époux doit poser sa main sur le front de son épouse et dire : « Allahumma inni as&apos;aluka khayraha wa khayra ma jabaltaha alayhi, wa a&apos;udhu bika min sharriha wa sharri ma jabaltaha alayhi » (Ô Allah, je Te demande son bien et le bien de ce sur quoi Tu l&apos;as façonnée, et je me réfugie auprès de Toi contre son mal et le mal de ce sur quoi Tu l&apos;as façonnée). Ce hadith est rapporté par Abu Dawud.",
  },
  {
    question: "La doua du mariage peut-elle être faite en français ?",
    answer:
      "Oui, les invocations personnelles pour le mariage peuvent être faites en français ou dans toute autre langue. Cependant, les formules prophétiques spécifiques comme « Barakallahu lakum » sont traditionnellement récitées en arabe, car elles suivent la Sunna du Prophète (paix et salut sur lui). Il est recommandé d&apos;apprendre ces douas en arabe tout en comprenant leur signification.",
  },
  {
    question: "Comment invoquer Allah pour sauver son couple ?",
    answer:
      "Pour préserver son couple, le musulman peut réciter régulièrement la doua « Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin waj&apos;alna lil-muttaqina imama » (Sourate Al-Furqan, 25:74). Il est aussi recommandé de prier ensemble, de multiplier les invocations de pardon (istighfar), et de demander à Allah de placer la miséricorde (rahma) et l&apos;affection (mawadda) entre les époux, comme mentionné dans la sourate Ar-Rum (30:21).",
  },
  {
    question: "Quel est le lien entre la doua et la réussite du mariage en islam ?",
    answer:
      "En islam, la doua est considérée comme l&apos;arme du croyant et un pilier essentiel de la réussite conjugale. Le mariage est un acte d&apos;adoration qui nécessite la bénédiction (baraka) d&apos;Allah pour prospérer. Les invocations régulières renforcent le lien spirituel entre les époux, les protègent contre les tentations extérieures (dont le shaytan) et attirent la miséricorde divine sur le foyer. Le Prophète (paix et salut sur lui) a enseigné de nombreuses douas spécifiques à chaque étape de la vie conjugale.",
  },
  {
    question: "Faut-il faire la prière de l&apos;istikhara avant de se marier ?",
    answer:
      "Oui, la prière de consultation (salat al-istikhara) est fortement recommandée avant de prendre la décision de se marier avec une personne. Elle consiste à accomplir deux unités de prière puis à réciter la doua de l&apos;istikhara pour demander à Allah de guider vers le meilleur choix. Le Prophète (paix et salut sur lui) enseignait cette prière à ses compagnons pour toutes les décisions importantes. Consultez notre guide complet sur la doua de l&apos;istikhara pour en savoir plus.",
  },
];

export default function DouaMariageIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-mariage-islam/#article",
        headline:
          "Doua du mariage en islam : invocations pour les époux",
        description:
          "Découvrez les douas du mariage en islam : invocations authentiques en arabe, doua du nikah, Barakallahu lakum, doua de la nuit de noces et invocations pour la stabilité du couple.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-03-10",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-mariage-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-mariage-islam/#breadcrumb",
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
            name: "Doua du mariage",
            item: "https://www.islamreligion.fr/doua-mariage-islam",
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
          title="Doua du mariage en islam : invocations pour les époux"
          subtitle="Les invocations authentiques du mariage en islam : douas pour trouver un conjoint pieux, bénédictions du nikah, doua de la nuit de noces et invocations pour la stabilité du couple."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation doua du mariage avec rayons dorés symbolisant la bénédiction divine en islam"
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
                <span className="text-foreground">Doua du mariage</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le mariage (nikah) est l&apos;un des actes les plus bénis en
                  islam. Le Prophète (paix et salut sur lui) a enseigné de
                  nombreuses invocations (douas) pour accompagner chaque étape
                  de la vie conjugale : de la recherche d&apos;un conjoint pieux
                  à la cérémonie du nikah, en passant par la nuit de noces et la
                  préservation du couple. Ces douas authentiques, tirées du Coran
                  et de la Sunna, attirent la bénédiction (baraka) d&apos;Allah
                  sur le foyer et renforcent le lien sacré entre les époux.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le mariage en islam */}
              {/* ============================================ */}
              <section id="mariage-en-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mariage en islam : un acte d&apos;adoration béni
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, le mariage n&apos;est pas un simple contrat civil ou
                  une convention sociale : c&apos;est un acte d&apos;adoration
                  (&apos;ibada) par lequel le musulman complète la moitié de sa
                  religion. Le Prophète (paix et salut sur lui) a accordé au
                  mariage une importance considérable, le décrivant comme une
                  Sunna incontournable et un moyen de se rapprocher d&apos;Allah.
                  La <strong>doua du mariage</strong> occupe donc une place
                  centrale dans cette institution sacrée, car elle permet
                  d&apos;attirer la bénédiction divine sur l&apos;union des époux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Et parmi Ses signes,
                  Il a créé de vous, pour vous, des épouses pour que vous viviez
                  en tranquillité avec elles et Il a mis entre vous de
                  l&apos;affection (mawadda) et de la miséricorde
                  (rahma)&nbsp;&raquo; (Ar-Rum, 30:21). Ce verset fondateur
                  établit que le mariage est un signe divin, fondé sur trois
                  piliers spirituels : la tranquillité (sakina),
                  l&apos;affection mutuelle et la miséricorde. C&apos;est
                  pourquoi les invocations occupent une place si importante dans
                  la vie conjugale musulmane.
                </p>

                <HadithCard
                  arabic="إذا تزوج أحدكم فقد استكمل نصف دينه فليتق الله في النصف الباقي"
                  text="Lorsque le serviteur se marie, il a complété la moitié de sa religion. Qu'il craigne Allah pour l'autre moitié."
                  source="Rapporté par al-Bayhaqi dans Shu&apos;ab al-Iman (5100)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith célèbre souligne la dimension spirituelle du mariage
                  en islam. L&apos;union conjugale protège le croyant de
                  nombreuses tentations et l&apos;aide à canaliser ses désirs
                  de manière licite (halal). Le <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">contrat de mariage islamique</Link> est
                  donc bien plus qu&apos;une formalité juridique : c&apos;est un
                  pacte sacré devant Allah, qui nécessite d&apos;être accompagné
                  d&apos;invocations sincères à chaque étape.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le mariage est une Sunna :</strong> le Prophète
                      (paix et salut sur lui) a encouragé les musulmans à se
                      marier et a désapprouvé le célibat volontaire par
                      ascétisme.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La baraka divine :</strong> un mariage contracté
                      selon les préceptes islamiques attire la bénédiction
                      d&apos;Allah sur les époux, leur foyer et leur descendance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les droits mutuels :</strong> chaque époux a des
                      droits et des devoirs envers l&apos;autre, et les douas
                      aident à renforcer la conscience de ces responsabilités
                      devant Allah.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-rayons-motifs-islamiques.jpg"
                    alt="Mains en invocation avec rayons et motifs islamiques symbolisant la doua du mariage en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua pour trouver un bon conjoint */}
              {/* ============================================ */}
              <section id="doua-trouver-conjoint" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour trouver un bon conjoint en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Avant même la cérémonie du mariage, le musulman est invité à
                  multiplier les invocations pour qu&apos;Allah lui accorde un
                  conjoint pieux et vertueux. La recherche d&apos;un bon époux
                  ou d&apos;une bonne épouse est une étape cruciale qui mérite
                  d&apos;être accompagnée de <strong>douas</strong> sincères et
                  persévérantes. Le Coran nous enseigne une invocation
                  magnifique à cet effet, récitée par les serviteurs du
                  Tout Miséricordieux.
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا</p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">Phonétique : Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin waj&apos;alna lil-muttaqina imama</p>
                  <p className="mt-2 text-foreground">Traduction : Seigneur, accorde-nous en nos épouses et nos descendants la joie des yeux, et fais de nous un guide pour les pieux.</p>
                  <p className="mt-1 text-xs text-foreground-secondary">Source : Coran, sourate Al-Furqan (25:74)</p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua coranique est l&apos;une des plus belles
                  invocations liées au mariage. Elle demande à Allah non
                  seulement un conjoint qui soit source de bonheur
                  (&laquo;&nbsp;qurrata a&apos;yunin&nbsp;&raquo; signifie
                  littéralement &laquo;&nbsp;la fraîcheur des yeux&nbsp;&raquo;),
                  mais aussi une descendance pieuse. L&apos;expression
                  &laquo;&nbsp;fais de nous un guide pour les pieux&nbsp;&raquo;
                  élève l&apos;ambition du croyant : il ne se contente pas de
                  demander un bon foyer, mais aspire à ce que sa famille soit un
                  modèle de piété pour la communauté.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En complément de cette doua, il est fortement recommandé
                  d&apos;accomplir la <Link href="/doua-istikhara-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prière de l&apos;istikhara</Link> avant
                  de prendre une décision matrimoniale. Cette prière de
                  consultation permet de demander à Allah de guider le croyant
                  vers le meilleur choix et d&apos;éloigner de lui ce qui
                  pourrait lui nuire. Le Prophète (paix et salut sur lui)
                  enseignait cette prière à ses compagnons pour toutes les
                  décisions importantes de la vie.
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ</p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">Phonétique : Rabbi inni lima anzalta ilayya min khayrin faqir</p>
                  <p className="mt-2 text-foreground">Traduction : Seigneur, j&apos;ai grand besoin de tout bien que Tu feras descendre sur moi.</p>
                  <p className="mt-1 text-xs text-foreground-secondary">Source : Coran, sourate Al-Qasas (28:24) - Invocation de Moussa (alayhi salam)</p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation fut prononcée par le prophète Moussa (alayhi
                  salam) alors qu&apos;il était seul, étranger et démuni à
                  Madyan. Peu après cette doua, Allah lui accorda un travail et
                  une épouse vertueuse. Les savants mentionnent souvent cette
                  invocation comme un modèle pour celui qui cherche un conjoint,
                  car elle exprime à la fois l&apos;humilité devant Allah et la
                  confiance totale en Sa générosité. Le croyant reconnaît son
                  besoin d&apos;Allah et s&apos;en remet entièrement à Sa
                  providence.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent également de multiplier les
                  invocations personnelles en dehors des prières obligatoires,
                  notamment au dernier tiers de la nuit, après les prières
                  prescrites et lors de la prosternation (sujud). Ces moments
                  sont particulièrement propices à l&apos;exaucement des douas.
                  Le croyant qui cherche un conjoint pieux doit combiner ses
                  efforts pratiques (recherche active, consultation de la
                  famille, fréquentation de milieux vertueux) avec une
                  confiance absolue en la volonté d&apos;Allah et une
                  persévérance dans l&apos;invocation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également donné des
                  critères clairs pour le choix du conjoint. Il a
                  dit : &laquo;&nbsp;On épouse une femme pour quatre raisons :
                  pour sa fortune, pour sa lignée, pour sa beauté et pour sa
                  religion. Choisis celle qui est pieuse, tu seras
                  gagnant&nbsp;&raquo; (al-Bukhari et Muslim). Ce hadith oriente
                  le croyant vers le critère essentiel : la piété et la
                  droiture morale. La doua pour trouver un bon conjoint doit
                  donc refléter cette priorité en demandant à Allah un compagnon
                  ou une compagne qui l&apos;aidera à se rapprocher de Lui.
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
              {/* SECTION 3 : Doua de la cérémonie du nikah */}
              {/* ============================================ */}
              <section id="doua-ceremonie-nikah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de la cérémonie du nikah (contrat de mariage)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La cérémonie du nikah est le moment solennel où le contrat de
                  mariage est scellé devant Allah et les témoins. C&apos;est une
                  occasion bénie au cours de laquelle les invocations jouent un
                  rôle central. Le Prophète (paix et salut sur lui) a enseigné
                  que le sermon du mariage (khutbat al-nikah) doit débuter par
                  la louange d&apos;Allah, la profession de foi et la récitation
                  de versets coraniques spécifiques.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le sermon du nikah, tel qu&apos;enseigné par le Prophète (paix
                  et salut sur lui), commence par : &laquo;&nbsp;Inna
                  al-hamda lillah, nahmaduhu wa nasta&apos;inuhu wa
                  nastaghfiruhu&nbsp;&raquo; (Certes, la louange appartient à
                  Allah, nous Le louons, Lui demandons aide et pardon). Ce
                  sermon comprend également la récitation de trois versets
                  coraniques : &laquo;&nbsp;Ô les croyants ! Craignez Allah
                  comme Il doit être craint&nbsp;&raquo; (Al-Imran, 3:102),
                  &laquo;&nbsp;Ô hommes ! Craignez votre Seigneur qui vous a
                  créés d&apos;un seul être&nbsp;&raquo; (An-Nisa, 4:1), et
                  &laquo;&nbsp;Ô les croyants ! Craignez Allah et dites des
                  paroles droites&nbsp;&raquo; (Al-Ahzab, 33:70).
                </p>

                <HadithCard
                  arabic="كل خطبة ليس فيها تشهد فهي كاليد الجذماء"
                  text="Tout sermon qui ne contient pas la profession de foi est comme une main coupée (incomplet)."
                  source="Rapporté par Abu Dawud (4841) et at-Tirmidhi (1106)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith souligne l&apos;importance de prononcer le sermon
                  du nikah conformément à la Sunna. Un mariage célébré avec la
                  mention d&apos;Allah, la récitation du Coran et les
                  invocations prophétiques est un mariage béni dès son
                  commencement. À l&apos;inverse, un mariage dépourvu de
                  rappel divin manque de la baraka nécessaire à sa prospérité.
                  Les savants recommandent donc de veiller à ce que la cérémonie
                  soit conduite selon les enseignements prophétiques.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le walima (repas de noces) fait également partie intégrante
                  de la célébration du mariage en islam. Le Prophète (paix et
                  salut sur lui) a ordonné à Abdur-Rahman ibn Awf
                  (qu&apos;Allah l&apos;agrée) d&apos;organiser un walima,
                  même avec un simple mouton. Ce repas communautaire est une
                  occasion de joie partagée, de rappel d&apos;Allah et de douas
                  collectives pour les époux. Les savants soulignent que le
                  walima doit rester dans les limites de la modération et de la
                  décence, sans extravagance ni ostentation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Après la conclusion du contrat, les invités et les proches
                  sont invités à formuler des invocations de bénédiction pour
                  les nouveaux époux. Le Prophète (paix et salut sur lui) a
                  enseigné une formule spécifique de félicitation qui
                  remplace les formulations préislamiques. Cette doua est
                  détaillée dans la section suivante.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua des époux - Barakallahu lakum */}
              {/* ============================================ */}
              <section id="doua-epoux-baraka" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua des époux : Barakallahu lakum
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>doua mariage</strong> la plus célèbre et la plus
                  pratiquée dans la tradition islamique est la formule
                  &laquo;&nbsp;Barakallahu lakum&nbsp;&raquo;. Cette invocation
                  est adressée aux nouveaux époux par les proches, les amis et
                  les invités lors de la célébration du mariage. Elle est
                  authentiquement rapportée du Prophète (paix et salut sur lui)
                  et constitue la formule de félicitation prophétique par
                  excellence.
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ</p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">Phonétique : Barakallahu laka, wa baraka alayka, wa jama&apos;a baynakuma fi khayr</p>
                  <p className="mt-2 text-foreground">Traduction : Qu&apos;Allah vous bénisse, répande Sa bénédiction sur vous et vous unisse dans le bien.</p>
                  <p className="mt-1 text-xs text-foreground-secondary">Source : Rapporté par at-Tirmidhi (1091) et Abu Dawud (2130)</p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua prophétique est remarquable par sa concision et sa
                  profondeur. Elle contient trois demandes complémentaires :
                  premièrement, la bénédiction d&apos;Allah pour chaque époux
                  individuellement ; deuxièmement, la bénédiction sur leur union
                  commune ; et troisièmement, que cette union soit
                  &laquo;&nbsp;dans le bien&nbsp;&raquo; (fi khayr), ce qui
                  englobe le bien religieux, moral, affectif et matériel. Le mot
                  &laquo;&nbsp;khayr&nbsp;&raquo; est utilisé ici de manière
                  indéfinie, ce qui lui confère un sens de globalité et
                  d&apos;abondance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de noter que le Prophète (paix et salut sur
                  lui) a remplacé par cette formule les félicitations
                  préislamiques qui contenaient parfois des expressions
                  inappropriées ou superstitieuses. Les compagnons avaient
                  l&apos;habitude de dire &laquo;&nbsp;bil-rifa&apos; wal-banin&nbsp;&raquo;
                  (avec harmonie et des garçons), une formule que le Prophète
                  a déconseillée au profit de la doua citée ci-dessus. Cela
                  montre l&apos;importance d&apos;islamiser nos traditions et de
                  suivre la Sunna en toute circonstance.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
                    alt="Arches de mosquée avec moucharabieh et lumière dorée symbolisant la bénédiction du mariage en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua de la nuit de noces */}
              {/* ============================================ */}
              <section id="doua-nuit-noces" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de la nuit de noces en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La nuit de noces est un moment intime et sacré dans la vie du
                  couple musulman. Le Prophète (paix et salut sur lui) a
                  enseigné des invocations spécifiques pour cette occasion,
                  afin que les époux commencent leur vie commune sous la
                  protection et la bénédiction d&apos;Allah. Ces
                  <strong> douas</strong> visent à éloigner le shaytan du foyer
                  conjugal et à attirer le bien sur l&apos;union.
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ</p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">Phonétique : Allahumma inni as&apos;aluka khayraha wa khayra ma jabaltaha alayhi, wa a&apos;udhu bika min sharriha wa sharri ma jabaltaha alayhi</p>
                  <p className="mt-2 text-foreground">Traduction : Ô Allah, je Te demande son bien et le bien de ce sur quoi Tu l&apos;as façonnée, et je me réfugie auprès de Toi contre son mal et le mal de ce sur quoi Tu l&apos;as façonnée.</p>
                  <p className="mt-1 text-xs text-foreground-secondary">Source : Rapporté par Abu Dawud (2160) et Ibn Majah (1918)</p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que
                  l&apos;époux doit poser sa main sur le front de son épouse
                  et prononcer cette invocation. Les savants expliquent que
                  cette doua reconnaît qu&apos;Allah a façonné chaque être
                  humain avec des qualités et des défauts, et que le croyant
                  demande à bénéficier des bonnes qualités de son conjoint tout
                  en étant protégé contre les aspects négatifs. C&apos;est une
                  marque de sagesse et de réalisme : le mariage n&apos;est pas
                  idéalisé, mais confié à Allah dans sa totalité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est également recommandé aux époux de prier deux unités
                  de prière (rak&apos;atayn) ensemble lors de la nuit de noces.
                  Cette pratique est rapportée des compagnons, notamment
                  d&apos;Abdullah ibn Mas&apos;ud (qu&apos;Allah l&apos;agrée),
                  qui a dit : &laquo;&nbsp;Quand ta femme vient à toi,
                  demande-lui de prier deux rak&apos;at derrière toi, puis
                  dis : Allahumma barik li fi ahli, wa barik lahum fiyya
                  (Ô Allah, bénis-moi en ma famille et bénis-les en
                  moi)&nbsp;&raquo;. Cette prière commune établit dès le
                  premier instant la dimension spirituelle du foyer conjugal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Enfin, avant les rapports intimes, le Prophète (paix et salut
                  sur lui) a enseigné de dire : &laquo;&nbsp;Bismillah,
                  Allahumma jannibna ash-shaytan wa jannib ash-shaytana ma
                  razaqtana&nbsp;&raquo; (Au nom d&apos;Allah. Ô Allah, éloigne
                  le shaytan de nous et éloigne-le de ce que Tu nous accorderas).
                  Ce hadith, rapporté par al-Bukhari et Muslim, assure que si
                  Allah accorde un enfant au couple, le shaytan ne lui nuira
                  jamais. C&apos;est une protection puissante pour la
                  descendance dès sa conception.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua pour la stabilité du couple */}
              {/* ============================================ */}
              <section id="doua-stabilite-couple" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la stabilité et la bénédiction du couple
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La vie conjugale est une épreuve quotidienne qui nécessite
                  des efforts constants et des invocations régulières. Le
                  Prophète (paix et salut sur lui) a encouragé les époux à
                  maintenir un lien spirituel fort à travers la prière commune,
                  le rappel d&apos;Allah et les <strong>douas</strong> pour la
                  préservation de leur union. La stabilité du couple en islam
                  repose sur la combinaison des efforts humains et de la
                  confiance en Allah.
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">Phonétique : Rabbana atina fi ad-dunya hasanatan wa fi al-akhirati hasanatan wa qina &apos;adhab an-nar</p>
                  <p className="mt-2 text-foreground">Traduction : Seigneur, accorde-nous une belle part en ce monde, une belle part dans l&apos;au-delà, et préserve-nous du châtiment du Feu.</p>
                  <p className="mt-1 text-xs text-foreground-secondary">Source : Coran, sourate Al-Baqara (2:201)</p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants commentent que la &laquo;&nbsp;belle part en ce
                  monde&nbsp;&raquo; (hasana) englobe un conjoint pieux, des
                  enfants vertueux, un foyer stable et une subsistance bénie.
                  Cette doua, qui était l&apos;invocation la plus fréquente du
                  Prophète (paix et salut sur lui) d&apos;après Anas ibn Malik
                  (qu&apos;Allah l&apos;agrée), couvre tous les aspects du
                  bonheur conjugal et familial. Les époux qui la récitent
                  régulièrement placent leur couple sous la protection divine.
                </p>

                <HadithCard
                  arabic="رحم الله رجلا قام من الليل فصلى وأيقظ امرأته فصلت فإن أبت نضح في وجهها الماء"
                  text="Qu'Allah fasse miséricorde à l'homme qui se lève la nuit pour prier et qui réveille sa femme pour qu'elle prie aussi. Et si elle refuse, qu'il lui asperge le visage d'eau."
                  source="Rapporté par Abu Dawud (1308) et Ibn Majah (1336)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, formulé avec une touche d&apos;humour prophétique,
                  souligne l&apos;importance de la prière nocturne en couple
                  comme moyen de renforcer le lien conjugal. Les époux qui
                  prient ensemble, qui récitent le Coran ensemble et qui
                  invoquent Allah ensemble construisent un foyer sur des
                  fondations spirituelles solides. Le Prophète (paix et salut
                  sur lui) a même qualifié ces couples de
                  &laquo;&nbsp;bienheureux&nbsp;&raquo; qui s&apos;entraident
                  dans l&apos;obéissance à Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les pratiques recommandées pour la stabilité du couple,
                  les savants mentionnent : réciter sourate Al-Baqara dans le
                  foyer (car le shaytan fuit la maison où elle est récitée),
                  multiplier les adhkar (invocations du matin et du soir),
                  pratiquer l&apos;istighfar (demande de pardon) régulièrement,
                  et invoquer Allah ensemble avant le sommeil. L&apos;ensemble
                  de ces <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link> forme
                  un bouclier protecteur pour le foyer musulman.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Invocations contre les problèmes conjugaux */}
              {/* ============================================ */}
              <section id="invocations-problemes-conjugaux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations contre les problèmes conjugaux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Aucun couple n&apos;est à l&apos;abri des épreuves et des
                  difficultés. Les désaccords, les tensions et les crises font
                  partie de la vie conjugale. L&apos;islam enseigne au croyant
                  de se tourner vers Allah dans ces moments difficiles et de
                  multiplier les invocations pour résoudre les conflits et
                  retrouver l&apos;harmonie. Le Coran et la Sunna offrent des
                  <strong> douas</strong> puissantes pour traverser les épreuves
                  du couple avec patience et sagesse.
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ</p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">Phonétique : La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin</p>
                  <p className="mt-2 text-foreground">Traduction : Il n&apos;y a de divinité que Toi. Gloire à Toi ! J&apos;ai été parmi les injustes.</p>
                  <p className="mt-1 text-xs text-foreground-secondary">Source : Coran, sourate Al-Anbiya (21:87) - Invocation de Younous (alayhi salam)</p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation universelle, prononcée par le prophète
                  Younous (alayhi salam) dans les ténèbres du ventre de la
                  baleine, est recommandée par le Prophète (paix et salut sur
                  lui) pour toute situation de détresse. Le Prophète a dit :
                  &laquo;&nbsp;Aucun musulman n&apos;invoque avec cette
                  invocation pour quoi que ce soit sans qu&apos;Allah ne lui
                  réponde&nbsp;&raquo; (at-Tirmidhi). Les savants la
                  recommandent particulièrement en cas de crise conjugale, car
                  elle combine la reconnaissance de la souveraineté
                  d&apos;Allah, Sa glorification et la reconnaissance de ses
                  propres fautes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Face aux problèmes conjugaux, l&apos;islam prescrit également
                  des étapes concrètes en plus des invocations. Le dialogue
                  bienveillant entre les époux est la première étape. Si le
                  conflit persiste, la médiation familiale est recommandée, comme
                  le mentionne le Coran : &laquo;&nbsp;Si vous craignez le
                  désaccord entre les deux, envoyez un arbitre de sa famille à
                  lui et un arbitre de sa famille à elle&nbsp;&raquo; (An-Nisa,
                  4:35). Tout au long de ce processus, les douas restent
                  l&apos;arme la plus puissante du croyant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;istighfar (demande de pardon) est particulièrement
                  recommandé pour les problèmes conjugaux. Le Prophète (paix et
                  salut sur lui) a enseigné que l&apos;istighfar ouvre les
                  portes de la subsistance, dissipe les soucis et apporte des
                  solutions aux situations apparemment impossibles. En
                  multipliant la formule &laquo;&nbsp;Astaghfirullah&nbsp;&raquo;
                  (je demande pardon à Allah) et en se repentant sincèrement de
                  ses propres défauts, l&apos;époux attire la miséricorde
                  divine sur son couple et ouvre la voie à la réconciliation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est aussi conseillé de réciter régulièrement la sourate
                  Al-Baqara dans le foyer, car le Prophète (paix et salut sur
                  lui) a dit : &laquo;&nbsp;Ne faites pas de vos maisons des
                  tombeaux. Certes, le shaytan fuit la maison dans laquelle on
                  récite sourate Al-Baqara&nbsp;&raquo; (Muslim). Le shaytan
                  est l&apos;ennemi déclaré du couple : il cherche à semer la
                  discorde entre les époux. La récitation du Coran et les
                  invocations régulières constituent le meilleur rempart
                  contre ses stratagèmes. Pour approfondir l&apos;importance de
                  la langue arabe dans la compréhension des invocations,
                  consultez notre guide pour{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La patience (sabr) :</strong> les épreuves
                      conjugales sont un test d&apos;Allah. La patience et
                      l&apos;endurance sont récompensées dans cette vie et
                      dans l&apos;au-delà.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le pardon mutuel :</strong> le Coran encourage les
                      époux à se pardonner mutuellement et à ne pas garder
                      rancune. Le pardon est une vertu supérieure qui attire la
                      miséricorde d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La consultation (shura) :</strong> les décisions
                      importantes du foyer doivent être prises en concertation
                      entre les époux, dans un esprit de respect et de
                      collaboration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le bon comportement (husn al-khuluq) :</strong> le
                      Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Les meilleurs d&apos;entre vous sont les
                      meilleurs envers leurs épouses&nbsp;&raquo; (at-Tirmidhi).
                      Le bon caractère est la clé de la réussite conjugale.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm avant la FAQ */}
              {/* ============================================ */}
              <div className="mt-16">
                <SocialBanner />

              <AffiliateForm
                  title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                  description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                  preselect="arabe"
                />
              </div>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
