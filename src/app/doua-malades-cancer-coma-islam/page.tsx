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
    "Doua pour les malades : cancer, coma et maladies graves en islam",
  description:
    "Découvrez les douas authentiques pour les malades en islam : invocations pour le cancer, le coma et les maladies graves. Textes en arabe, phonétique et traduction. Hadiths sur la visite du malade, la patience et la guérison par la roqya.",
  openGraph: {
    title:
      "Doua pour les malades : cancer, coma et maladies graves en islam",
    description:
      "Les invocations authentiques pour les malades en islam : doua de guérison, visite du malade, roqya par le Coran et mérite de la patience face à la maladie.",
    url: "https://www.islamreligion.fr/doua-malades-cancer-coma-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-malades-cancer-coma-islam",
  },
};

const tocItems = [
  { id: "place-maladie-islam", label: "La place de la maladie en islam" },
  { id: "doua-guerison-malade", label: "Douas de guérison pour le malade" },
  { id: "visite-malade-islam", label: "Visiter le malade : mérites et douas" },
  { id: "doua-cancer-maladie-grave", label: "Doua pour le cancer et les maladies graves" },
  { id: "doua-coma-proches", label: "Doua pour une personne dans le coma" },
  { id: "versets-guerison-shifa", label: "Les versets coraniques de guérison (ayat ash-shifa)" },
  { id: "patience-maladie-recompense", label: "La patience face à la maladie : une récompense immense" },
];

const faqItems = [
  {
    question: "Quelle est la doua pour un malade en islam ?",
    answer:
      "La doua la plus connue pour un malade est : « Allahumma Rabban-nas, adh-hibil-ba's, ishfi Antash-Shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqama » (Seigneur des hommes, ôte le mal, guéris, Tu es le Guérisseur, il n&apos;y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie). Ce hadith est rapporté par al-Bukhari et Muslim. On peut également dire lors de la visite : « La ba's, tahourun in sha'Allah » (Pas de mal, c&apos;est une purification si Allah le veut).",
  },
  {
    question: "Peut-on faire une doua pour un malade du cancer en islam ?",
    answer:
      "Oui, absolument. Il n&apos;existe pas de restriction sur le type de maladie pour laquelle on peut invoquer Allah. Le cancer, comme toute autre maladie, est une épreuve qu&apos;Allah peut guérir. Le Prophète (paix et salut sur lui) a dit : « Allah n&apos;a pas fait descendre une maladie sans avoir fait descendre son remède » (al-Bukhari). Les douas de guérison, la récitation du Coran (roqya) et la patience sont les armes spirituelles du croyant face au cancer.",
  },
  {
    question: "Que réciter pour une personne dans le coma ?",
    answer:
      "Pour une personne dans le coma, les proches peuvent réciter les douas de guérison à son chevet, lire la sourate Al-Fatiha, les versets de guérison (ayat ash-shifa) et faire des invocations en sa faveur. Même si le malade ne peut répondre, les anges disent « Amine » aux invocations faites en sa faveur. Les savants recommandent également de réciter sourate Yasin et les sourates protectrices (Al-Falaq et An-Nas) auprès du malade.",
  },
  {
    question: "Quels sont les mérites de la visite du malade en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) a dit : « Lorsqu&apos;un musulman rend visite à un malade, il ne cesse d&apos;être dans la khurfa du Paradis jusqu&apos;à son retour » (Muslim). La visite du malade est un droit du musulman sur son frère et fait partie des cinq droits mentionnés dans le hadith authentique. Celui qui visite un malade reçoit la miséricorde d&apos;Allah, les invocations des anges et une récompense immense.",
  },
  {
    question: "La maladie efface-t-elle les péchés en islam ?",
    answer:
      "Oui, la maladie est une source d&apos;expiation des péchés pour le croyant patient. Le Prophète (paix et salut sur lui) a dit : « Le musulman n&apos;est atteint d&apos;aucune fatigue, maladie, souci, tristesse, nuisance ou chagrin, pas même une épine qui le pique, sans qu&apos;Allah ne lui efface par cela une partie de ses péchés » (al-Bukhari et Muslim). La patience face à la maladie élève le rang du croyant et purifie ses fautes.",
  },
  {
    question: "Peut-on faire la roqya pour un malade atteint de cancer ?",
    answer:
      "Oui, la roqya par le Coran est légitime et recommandée pour toute maladie, y compris le cancer. Le Prophète (paix et salut sur lui) a validé la roqya par la sourate Al-Fatiha et les sourates protectrices. La roqya consiste à réciter le Coran et les invocations prophétiques sur le malade ou dans de l&apos;eau qu&apos;il boira. Elle ne remplace pas le traitement médical mais le complète en tant que moyen spirituel de guérison.",
  },
  {
    question: "Quelle sourate réciter pour la guérison ?",
    answer:
      "Plusieurs sourates et versets sont recommandés pour la guérison : la sourate Al-Fatiha (qualifiée de Ar-Ruqya par le Prophète), le verset du Trône (Ayat al-Kursi, 2:255), les deux derniers versets de sourate Al-Baqara, sourate Al-Ikhlas, sourate Al-Falaq et sourate An-Nas. On peut également réciter les six versets de guérison (ayat ash-shifa) dispersés dans le Coran.",
  },
  {
    question: "Comment soutenir un proche atteint d'une maladie grave en islam ?",
    answer:
      "L&apos;islam encourage à soutenir le malade de plusieurs manières : lui rendre visite régulièrement, réciter des douas en sa faveur, lui rappeler le mérite de la patience, l&apos;aider matériellement dans ses besoins, faire la roqya pour lui et surtout ne jamais perdre espoir en la miséricorde d&apos;Allah. Le Prophète (paix et salut sur lui) interdisait de dire au malade des paroles décourageantes et encourageait à lui donner espoir.",
  },
];

export default function DouaMaladesCancerComaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-malades-cancer-coma-islam/#article",
        headline:
          "Doua pour les malades : cancer, coma et maladies graves en islam",
        description:
          "Découvrez les douas authentiques pour les malades en islam : invocations pour le cancer, le coma et les maladies graves. Hadiths sur la visite du malade et la patience.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-04-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-malades-cancer-coma-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-malades-cancer-coma-islam/#breadcrumb",
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
            name: "Doua pour les malades",
            item: "https://www.islamreligion.fr/doua-malades-cancer-coma-islam",
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
          title="Doua pour les malades : cancer, coma et maladies graves en islam"
          subtitle="Les invocations authentiques pour la guérison, la visite du malade et la patience face à l'épreuve. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains en invocation doua pour les malades avec lumière subtile symbolisant l'espoir de guérison en islam"
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
                <span className="text-foreground">Doua pour les malades</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  En islam, la maladie est une épreuve qui purifie les péchés
                  et élève le rang du croyant patient. Le Prophète (paix et
                  salut sur lui) a enseigné des douas spécifiques pour la
                  guérison, la visite du malade et le soulagement de la
                  souffrance. Que ce soit pour un proche atteint de cancer,
                  une personne dans le coma ou toute maladie grave, le
                  croyant dispose d&apos;invocations authentiques tirées du
                  Coran et de la Sunna pour implorer la miséricorde et la
                  guérison d&apos;Allah, Ash-Shafi (le Guérisseur).
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La place de la maladie en islam */}
              {/* ============================================ */}
              <section id="place-maladie-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La place de la maladie en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La maladie occupe une place particulière dans la vision
                  islamique de l&apos;existence. Loin d&apos;être perçue
                  uniquement comme un châtiment, elle est considérée comme
                  une épreuve divine qui comporte de multiples sagesses. Le
                  Coran enseigne que chaque être humain sera éprouvé, et la
                  maladie fait partie de ces épreuves par lesquelles Allah
                  teste la foi, la patience et la confiance de Ses
                  serviteurs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a profondément
                  changé la perception de la maladie en enseignant que toute
                  souffrance physique est une source d&apos;expiation des
                  péchés. Qu&apos;il s&apos;agisse d&apos;un simple mal de
                  tête, d&apos;une maladie chronique comme le cancer ou
                  d&apos;un état grave comme le coma, chaque instant de
                  patience face à la douleur est compté auprès d&apos;Allah
                  comme une bonne action et une purification spirituelle.
                </p>

                <HadithCard
                  arabic="ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن ولا أذى ولا غم حتى الشوكة يشاكها إلا كفر الله بها من خطاياه"
                  text="Le musulman n'est atteint d'aucune fatigue, maladie, souci, tristesse, nuisance ou chagrin, pas même une épine qui le pique, sans qu'Allah ne lui efface par cela une partie de ses péchés."
                  source="Rapporté par al-Bukhari (5641) et Muslim (2573)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental établit un principe essentiel :
                  aucune souffrance n&apos;est vaine pour le croyant. Le
                  cancer, le coma, les maladies graves qui semblent si
                  injustes aux yeux du monde sont, dans la perspective
                  islamique, des occasions de purification et
                  d&apos;élévation spirituelle. Le malade qui patiente et
                  reste attaché à sa foi sort de son épreuve purifié comme
                  l&apos;or sort du feu, débarrassé de ses impuretés.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La maladie comme purification :</strong>{" "}
                      chaque douleur endurée avec patience efface des péchés
                      et élève le rang du croyant auprès d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pas de maladie sans remède :</strong> le
                      Prophète (paix et salut sur lui) a affirmé qu&apos;Allah
                      a créé un remède pour chaque maladie (al-Bukhari),
                      encourageant ainsi la recherche de traitement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se soigner est recommandé :</strong>{" "}
                      l&apos;islam encourage à se soigner par tous les moyens
                      licites, tout en sachant que la guérison véritable ne
                      vient que d&apos;Allah.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dorés symbolisant l'espoir de guérison en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas de guérison pour le malade */}
              {/* ============================================ */}
              <section id="doua-guerison-malade" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas de guérison pour le malade
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a enseigné
                  plusieurs invocations spécifiques pour demander la guérison
                  à Allah. Ces douas sont des trésors prophétiques que le
                  malade peut réciter lui-même ou que ses proches peuvent
                  réciter en sa faveur, notamment dans les cas de maladies
                  graves comme le cancer ou lorsque le patient est dans le
                  coma.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La grande doua de guérison
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est l&apos;invocation de guérison la plus complète
                  et la plus connue, rapportée par Aïcha (qu&apos;Allah
                  l&apos;agrée). Le Prophète (paix et salut sur lui) la
                  récitait en passant sa main sur le corps du malade. Cette
                  doua reconnaît qu&apos;Allah seul est le véritable
                  Guérisseur et que toute guérison provient exclusivement de
                  Lui.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Rabban-nas, adh-hibil-ba&apos;s, ishfi Antash-Shafi, la shifa&apos;a illa shifa&apos;uk, shifa&apos;an la yughadiru saqama
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur des hommes, ôte le mal, guéris, Tu
                    es le Guérisseur, il n&apos;y a de guérison que Ta
                    guérison, une guérison qui ne laisse aucune
                    maladie&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (5675) et Muslim (2191)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La doua en posant la main sur la douleur
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait à celui qui
                  ressent une douleur de poser sa main sur l&apos;endroit
                  douloureux et de réciter cette invocation. Elle est
                  particulièrement adaptée pour les malades souffrant de
                  douleurs localisées, comme celles liées au cancer ou aux
                  traitements médicaux.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ (ثَلَاثًا) أَعُوذُ بِعِزَّةِ اللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah (trois fois), a&apos;udhu bi &apos;izzatillahi wa qudratih min sharri ma ajidu wa uhadhir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah (trois fois), je
                    cherche refuge dans la puissance d&apos;Allah et Sa
                    capacité contre le mal de ce que je ressens et que je
                    redoute&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2202)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. La doua de la roqya par sourate Al-Fatiha
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La sourate Al-Fatiha est qualifiée par le Prophète (paix
                  et salut sur lui) de &laquo;&nbsp;Ar-Ruqya&nbsp;&raquo;
                  (l&apos;incantation guérisseuse). Un compagnon a guéri un
                  homme piqué par un scorpion en récitant uniquement cette
                  sourate, et le Prophète a approuvé cette pratique. Elle
                  peut être récitée sur le malade, soufflée sur lui ou lue
                  dans de l&apos;eau qu&apos;il boira.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ○ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ○ الرَّحْمَنِ الرَّحِيمِ ○ مَالِكِ يَوْمِ الدِّينِ ○ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ○ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ○ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahir-Rahmanir-Rahim. Al-hamdu lillahi Rabbil-&apos;alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na&apos;budu wa iyyaka nasta&apos;in. Ihdinas-siratal-mustaqim. Siratal-ladhina an&apos;amta &apos;alayhim ghayril-maghdubi &apos;alayhim wa lad-dallin.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, le Tout Miséricordieux,
                    le Très Miséricordieux. Louange à Allah, Seigneur de
                    l&apos;univers. Le Tout Miséricordieux, le Très
                    Miséricordieux. Maître du Jour de la rétribution.
                    C&apos;est Toi [Seul] que nous adorons, et c&apos;est
                    Toi [Seul] dont nous implorons secours. Guide-nous dans
                    le droit chemin. Le chemin de ceux que Tu as comblés de
                    faveurs, non pas de ceux qui ont encouru Ta colère, ni
                    des égarés&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Al-Fatiha (1:1-7) — Réciter 7 fois sur le malade (al-Bukhari, 5736)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de combiner ces différentes douas
                  de guérison, de les réciter avec une foi sincère et une
                  certitude en la capacité d&apos;Allah de guérir toute
                  maladie, aussi grave soit-elle. La conviction du coeur est
                  une condition essentielle de l&apos;exaucement de ces
                  invocations. Le malade ou ses proches doivent invoquer avec
                  espoir, sans jamais désespérer de la miséricorde divine.
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
              {/* SECTION 3 : Visiter le malade */}
              {/* ============================================ */}
              <section id="visite-malade-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Visiter le malade en islam : mérites et douas
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La visite du malade (<strong>iyada al-marid</strong>) est
                  un acte d&apos;une importance considérable en islam. Elle
                  fait partie des droits du musulman sur son frère et
                  constitue l&apos;une des oeuvres les plus méritoires auprès
                  d&apos;Allah. Le Prophète (paix et salut sur lui) a
                  multiplié les encouragements à cette pratique et a enseigné
                  des douas spécifiques à réciter lors de la visite.
                </p>

                <HadithCard
                  arabic="من عاد مريضًا لم يزل في خرفة الجنة حتى يرجع"
                  text="Celui qui rend visite à un malade ne cesse d'être dans la khurfa (la cueillette) du Paradis jusqu'à son retour."
                  source="Rapporté par Muslim (2568)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith extraordinaire signifie que celui qui visite un
                  malade récolte les fruits du Paradis pendant toute la durée
                  de sa visite. Les savants expliquent que la
                  &laquo;&nbsp;khurfa&nbsp;&raquo; désigne la récolte des
                  fruits mûrs, ce qui symbolise les récompenses abondantes
                  qu&apos;Allah accorde au visiteur. Cette récompense
                  commence dès qu&apos;il quitte son domicile et ne
                  s&apos;arrête qu&apos;à son retour.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua de visite du malade
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque le visiteur entre chez le malade, il est
                  recommandé de prononcer cette parole rassurante et pleine
                  d&apos;espoir, qui combine le réconfort psychologique et
                  la bonne annonce spirituelle.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ba&apos;s, tahourun in sha&apos;Allah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Pas de mal, c&apos;est une purification si
                    Allah le veut&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (5656)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette parole prophétique est d&apos;une profondeur
                  remarquable. Elle rassure le malade en lui disant que son
                  état n&apos;est pas grave (&laquo;&nbsp;la
                  ba&apos;s&nbsp;&raquo;), puis lui annonce la bonne
                  nouvelle que sa maladie le purifie de ses péchés
                  (&laquo;&nbsp;tahour&nbsp;&raquo;). Pour le malade
                  atteint de cancer ou d&apos;une maladie grave, entendre
                  ces mots est un baume pour le coeur et un rappel que sa
                  souffrance a un sens profond devant Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua à réciter sept fois auprès du malade
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui
                  qui visite un malade dont le terme n&apos;est pas encore
                  arrivé et qui récite cette invocation sept fois, le malade
                  sera guéri par la permission d&apos;Allah.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> As&apos;alullaha al-&apos;Adhima Rabbal-&apos;Arshil-&apos;Adhim an yashfiyak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande à Allah le Très Grand, Seigneur
                    du Trône immense, de te guérir&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (3106) et at-Tirmidhi (2083) — À réciter 7 fois
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le moment de la visite :</strong> les savants
                      recommandent de ne pas prolonger excessivement la visite
                      pour ne pas fatiguer le malade, sauf s&apos;il le
                      souhaite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;attitude du visiteur :</strong> donner
                      espoir au malade, lui rappeler la miséricorde d&apos;Allah
                      et éviter toute parole décourageante ou pessimiste.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les 70 000 anges :</strong> le Prophète (paix
                      et salut sur lui) a dit que lorsqu&apos;un musulman
                      visite un malade le matin, 70 000 anges invoquent Allah
                      en sa faveur jusqu&apos;au soir (at-Tirmidhi).
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua cancer et maladies graves */}
              {/* ============================================ */}
              <section id="doua-cancer-maladie-grave" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour le cancer et les maladies graves
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le cancer est l&apos;une des épreuves les plus
                  douloureuses que puisse traverser un être humain. En islam,
                  face à cette maladie redoutable, le croyant ne reste pas
                  démuni. Il dispose de plusieurs moyens spirituels pour
                  affronter cette épreuve : les douas authentiques, la
                  récitation du Coran, la patience et la confiance absolue en
                  Allah. Le traitement médical et le recours à la doua ne
                  sont pas contradictoires mais complémentaires.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a affirmé un principe
                  fondamental qui donne espoir à tout malade, quelle que
                  soit la gravité de son état :
                </p>

                <HadithCard
                  arabic="ما أنزل الله داء إلا أنزل له شفاء"
                  text="Allah n'a pas fait descendre une maladie sans avoir fait descendre son remède."
                  source="Rapporté par al-Bukhari (5678)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est une source d&apos;espoir immense pour les
                  malades du cancer et de toute maladie grave. Il affirme
                  que le remède existe, même si la médecine humaine ne
                  l&apos;a pas encore découvert. Le croyant combine donc la
                  recherche du traitement médical avec l&apos;invocation
                  sincère adressée à Allah, sachant que la guérison véritable
                  ne vient que de Lui.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour le malade atteint de cancer, les savants recommandent
                  de multiplier les invocations suivantes : la grande doua
                  de guérison (Allahumma Rabban-nas...), la récitation
                  régulière de sourate Al-Fatiha, les versets de guérison
                  (ayat ash-shifa), et les invocations du matin et du soir.
                  Il est également recommandé de faire la{" "}
                  <Link href="/doua-guerison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua de guérison
                  </Link>{" "}
                  avec constance et persévérance, sans jamais désespérer de
                  la réponse d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-levees-illustration-lumiere.jpg"
                    alt="Illustration de mains levées en doua avec lumière symbolisant l'espoir face à la maladie en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;entourage du malade a également un rôle crucial à
                  jouer. Les proches peuvent réciter le Coran au chevet du
                  malade, faire des douas en sa faveur, lui rappeler les
                  mérites de la patience et l&apos;encourager dans son
                  parcours de soins. L&apos;islam enseigne que la doua du
                  frère musulman pour son frère absent est exaucée, un ange
                  étant désigné pour dire &laquo;&nbsp;Amine, et à toi la
                  même chose&nbsp;&raquo; à chaque invocation (Muslim).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua pour une personne dans le coma */}
              {/* ============================================ */}
              <section id="doua-coma-proches" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour une personne dans le coma
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsqu&apos;un proche se trouve dans le coma, la
                  situation est particulièrement éprouvante car le malade ne
                  peut plus communiquer ni invoquer lui-même. Dans ce cas,
                  la responsabilité de l&apos;invocation incombe aux proches
                  qui prennent le relais spirituel. Les savants de
                  l&apos;islam affirment que la doua faite en faveur
                  d&apos;un absent est exaucée et que les anges y répondent
                  par &laquo;&nbsp;Amine&nbsp;&raquo;.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour la personne dans le coma, les proches sont encouragés
                  à réciter à son chevet les douas de guérison mentionnées
                  précédemment, ainsi que les sourates suivantes : Al-Fatiha,
                  Al-Baqara (versets 1-5 et 255-257 et 285-286), Al-Ikhlas,
                  Al-Falaq et An-Nas. Les savants recommandent également de
                  réciter sourate Yasin, bien que les avis divergent sur le
                  fait de la réserver aux mourants ou de l&apos;utiliser pour
                  les malades en général.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi inni massaniya ad-durru wa Anta arhamur-rahimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, le mal m&apos;a touché et Tu
                    es le plus Miséricordieux des
                    miséricordieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:83) — Doua du prophète Ayyub (paix sur lui)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La doua du prophète Ayyub (Job) est particulièrement
                  appropriée dans le contexte des maladies graves et du coma.
                  Ayyub (paix sur lui) a enduré une maladie extrêmement
                  longue et douloureuse, perdant sa santé, ses biens et ses
                  enfants. Malgré tout, il est resté patient et a continué
                  à invoquer Allah avec cette doua d&apos;une simplicité
                  bouleversante. Allah l&apos;a finalement guéri et lui a
                  rendu plus que ce qu&apos;il avait perdu.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter au chevet du malade :</strong> même
                      si la personne est dans le coma, les savants affirment
                      qu&apos;elle peut bénéficier de la récitation du Coran
                      et des douas faites en sa faveur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sadaqa en son nom :</strong> les proches
                      peuvent faire l&apos;aumône au nom du malade et
                      demander à Allah de le guérir par cette bonne action.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais perdre espoir :</strong> tant que
                      l&apos;âme est dans le corps, l&apos;espoir de
                      guérison reste permis. Allah est capable de toute
                      chose et les miracles médicaux existent.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Versets coraniques de guérison */}
              {/* ============================================ */}
              <section id="versets-guerison-shifa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les versets coraniques de guérison (ayat ash-shifa)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran est lui-même décrit comme une guérison
                  (&laquo;&nbsp;shifa&nbsp;&raquo;) pour ce qui est dans
                  les poitrines. Allah dit : &laquo;&nbsp;Nous faisons
                  descendre du Coran ce qui est une guérison et une
                  miséricorde pour les croyants&nbsp;&raquo; (Al-Isra,
                  17:82). Les savants ont identifié six versets spécifiques
                  contenant le mot &laquo;&nbsp;shifa&nbsp;&raquo;
                  (guérison), appelés collectivement les{" "}
                  <strong>ayat ash-shifa</strong>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces six versets de guérison sont dispersés dans différentes
                  sourates du Coran : At-Tawba (9:14), Yunus (10:57),
                  An-Nahl (16:69), Al-Isra (17:82), Ash-Shu&apos;ara
                  (26:80) et Fussilat (41:44). Les savants recommandent de
                  les réciter ensemble sur le malade ou dans de l&apos;eau
                  que le malade boira. Parmi ces versets, celui de la
                  sourate Ash-Shu&apos;ara rapporte la parole du prophète
                  Ibrahim (paix sur lui) :
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa idha maridtu fa huwa yashfin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et quand je suis malade, c&apos;est Lui
                    qui me guérit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ash-Shu&apos;ara (26:80)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est d&apos;une puissance spirituelle
                  considérable. Ibrahim (paix sur lui) attribue la maladie
                  à lui-même par politesse envers Allah (&laquo;&nbsp;quand
                  je suis malade&nbsp;&raquo;) mais attribue la guérison
                  exclusivement à Allah (&laquo;&nbsp;c&apos;est Lui qui me
                  guérit&nbsp;&raquo;). Ce verset résume toute la croyance
                  islamique face à la maladie : le mal est une épreuve, et
                  la guérison est un don divin. Le croyant malade doit
                  s&apos;accrocher à cette certitude, que sa maladie soit
                  un cancer, un coma ou toute autre affliction.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La pratique recommandée pour la roqya par le Coran
                  consiste à réciter ces versets avec sincérité et
                  concentration, en soufflant doucement sur le malade ou sur
                  ses mains que l&apos;on passe ensuite sur le corps du
                  malade. Le Prophète (paix et salut sur lui) procédait
                  ainsi, comme le rapporte Aïcha (qu&apos;Allah l&apos;agrée) :
                  &laquo;&nbsp;Lorsque le Prophète tombait malade, il
                  récitait les sourates protectrices et soufflait sur
                  lui-même. Lorsque sa maladie s&apos;aggrava, c&apos;est
                  moi qui les récitais et passais ses mains sur son
                  corps&nbsp;&raquo; (al-Bukhari et Muslim).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : La patience face à la maladie */}
              {/* ============================================ */}
              <section id="patience-maladie-recompense" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La patience face à la maladie : une récompense immense
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La patience (<strong>sabr</strong>) face à la maladie est
                  l&apos;un des actes d&apos;adoration les plus élevés en
                  islam. Allah a promis aux patients une récompense sans
                  limites : &laquo;&nbsp;Les endurants auront leur pleine
                  récompense sans compter&nbsp;&raquo; (Az-Zumar, 39:10).
                  Cette promesse divine est particulièrement significative
                  pour les malades atteints de maladies longues et
                  douloureuses comme le cancer.
                </p>

                <HadithCard
                  arabic="عجبًا لأمر المؤمن إن أمره كله خير وليس ذاك لأحد إلا للمؤمن إن أصابته سراء شكر فكان خيرًا له وإن أصابته ضراء صبر فكان خيرًا له"
                  text="Comme l'affaire du croyant est étonnante ! Tout ce qui lui arrive est un bien, et cela n'est accordé qu'au croyant : s'il est touché par un bonheur, il remercie, et c'est un bien pour lui ; s'il est touché par un malheur, il patiente, et c'est un bien pour lui."
                  source="Rapporté par Muslim (2999)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est un véritable trésor pour le malade. Il lui
                  enseigne que sa situation, aussi difficile soit-elle, est
                  un bien pour lui s&apos;il fait preuve de patience. Le
                  cancer qui ronge le corps, le coma qui prive de
                  conscience, les traitements douloureux qui épuisent : tout
                  cela, enduré avec patience et confiance en Allah, devient
                  une source de récompense infinie. Le croyant malade est
                  donc gagnant dans tous les cas : s&apos;il guérit, il
                  remercie Allah ; s&apos;il reste malade, il accumule les
                  récompenses par sa patience.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que la patience requise n&apos;est
                  pas l&apos;absence de douleur ou de tristesse. Le
                  Prophète (paix et salut sur lui) a lui-même pleuré lors
                  de la mort de son fils Ibrahim, en disant :
                  &laquo;&nbsp;L&apos;oeil verse des larmes, le coeur est
                  triste, mais nous ne disons que ce qui satisfait notre
                  Seigneur&nbsp;&raquo; (al-Bukhari). La patience, c&apos;est
                  retenir sa langue des plaintes contre Allah, maintenir sa
                  foi dans la sagesse divine et continuer à invoquer avec
                  espoir, même au coeur de la souffrance la plus intense.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour les proches du malade, qu&apos;il s&apos;agisse
                  d&apos;un patient atteint de cancer en phase terminale ou
                  d&apos;une personne plongée dans le coma depuis des mois,
                  la patience est également requise. Accompagner un malade
                  grave est une épreuve en soi, et Allah récompense aussi
                  ceux qui soutiennent les malades avec dévouement et amour.
                  La{" "}
                  <Link href="/doua-douleur-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua contre la douleur
                  </Link>{" "}
                  et la{" "}
                  <Link href="/doua-malade-visite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua de visite du malade
                  </Link>{" "}
                  sont des moyens précieux pour soutenir le malade et gagner
                  la récompense divine.
                </p>
              </section>

              {/* Formulaire affiliation */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre vos douas"
                description="Maîtrisez la langue du Coran pour réciter les invocations de guérison avec compréhension et conviction. Des formations adaptées à tous les niveaux."
                preselect="arabe"
              />

              {/* FAQ */}
              <FaqSection items={faqItems} />

              {/* ============================================ */}
              {/* SECTION MAILLAGE INTERNE */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Pour aller plus loin
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Retrouvez toutes nos invocations authentiques sur notre
                  page principale{" "}
                  <Link
                    href="/doua-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    doua en islam
                  </Link>
                  . Voici d&apos;autres articles qui pourraient vous
                  intéresser :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link
                      href="/doua-guerison-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua de guérison en islam : invocations pour retrouver
                      la santé
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link
                      href="/doua-malade-visite-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua pour la visite du malade en islam
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link
                      href="/doua-douleur-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua contre la douleur en islam
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <Link
                      href="/doua-fin-vie-mourant-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua pour la fin de vie et le mourant en islam
                    </Link>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
