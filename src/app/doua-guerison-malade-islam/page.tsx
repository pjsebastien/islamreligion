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
    "Doua de guérison en islam : invocations pour les malades",
  description:
    "Découvrez les douas de guérison en islam : invocations prophétiques en arabe avec phonétique et traduction, sourate al-Fatiha comme remède, versets coraniques de guérison (ayat ash-shifa), roqya shar&apos;iyya et conseils pour le malade.",
  openGraph: {
    title:
      "Doua de guérison en islam : invocations pour les malades",
    description:
      "Les invocations authentiques pour la guérison en islam : douas prophétiques, versets coraniques, roqya shar&apos;iyya. Textes en arabe, phonétique et traduction française.",
    url: "https://www.islamreligion.fr/doua-guerison-malade-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-guerison-malade-islam",
  },
};

const tocItems = [
  { id: "maladie-epreuve", label: "La maladie comme épreuve en islam" },
  { id: "doua-guerison-prophetique", label: "Doua de guérison prophétique" },
  { id: "fatiha-remede", label: "Sourate al-Fatiha comme remède" },
  { id: "ayat-shifa", label: "Versets coraniques de guérison (ayat ash-shifa)" },
  { id: "roqya-shariyya", label: "La roqya shar&apos;iyya" },
  { id: "sept-douas", label: "7 douas spécifiques pour le malade" },
  { id: "patience-malade", label: "La patience du malade en islam" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua de guérison en islam ?",
    answer:
      "La doua de guérison la plus authentique est celle du Prophète (paix et salut sur lui) : « Allahumma Rabban-nas, adh-hibil-ba&apos;s, ishfi Antash-Shafi, la shifa&apos;a illa shifa&apos;uka, shifa&apos;an la yughadiru saqaman » (Seigneur des hommes, ôte le mal, guéris, Tu es le Guérisseur, il n&apos;y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie). Ce hadith est rapporté par al-Bukhari et Muslim.",
  },
  {
    question: "Comment faire la doua pour un malade en islam ?",
    answer:
      "Pour faire la doua pour un malade, vous pouvez poser votre main droite sur l&apos;endroit douloureux (si c&apos;est votre propre corps) ou sur le front du malade, puis réciter les invocations prophétiques de guérison. Il est également recommandé de souffler légèrement après avoir récité les sourates protectrices (al-Fatiha, al-Falaq, an-Nas). La visite du malade est elle-même une sunna récompensée.",
  },
  {
    question: "Quels sont les versets coraniques de guérison (ayat ash-shifa) ?",
    answer:
      "Les six versets de guérison (ayat ash-shifa) identifiés par les savants sont : sourate al-Fatiha (1:1-7), sourate at-Tawba (9:14), sourate Yunus (10:57), sourate an-Nahl (16:69), sourate al-Isra (17:82) et sourate ash-Shu&apos;ara (26:80). Chacun de ces versets contient le mot « shifa » (guérison) et peut être récité sur le malade dans le cadre de la roqya shar&apos;iyya.",
  },
  {
    question: "La roqya est-elle permise en islam ?",
    answer:
      "Oui, la roqya shar&apos;iyya (incantation conforme à la Sunna) est permise et même recommandée en islam. Elle consiste à réciter le Coran et les invocations prophétiques sur le malade. Le Prophète (paix et salut sur lui) a pratiqué la roqya et l&apos;a autorisée à condition qu&apos;elle ne contienne ni shirk (associationnisme), ni paroles incompréhensibles, et que l&apos;on croie que la guérison vient d&apos;Allah seul.",
  },
  {
    question: "Peut-on faire la doua de guérison en français ?",
    answer:
      "Oui, la doua de guérison peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et entend la supplication de chaque serviteur. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe car elles ont été enseignées dans cette langue par le Prophète (paix et salut sur lui) et possèdent une dimension spirituelle particulière.",
  },
  {
    question: "Est-ce que la maladie expie les péchés en islam ?",
    answer:
      "Oui, selon plusieurs hadiths authentiques, la maladie et les épreuves expient les péchés du croyant. Le Prophète (paix et salut sur lui) a dit : « Aucune fatigue, maladie, souci, tristesse, gêne ou dommage n&apos;atteint le musulman, même une épine qui le pique, sans qu&apos;Allah ne lui efface par cela certains de ses péchés » (al-Bukhari et Muslim). La patience du malade est donc doublement récompensée.",
  },
  {
    question: "Quand faut-il faire la doua de guérison pour un malade ?",
    answer:
      "La doua de guérison peut être faite à tout moment, mais certains instants sont particulièrement favorables : le dernier tiers de la nuit, lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, et le vendredi après l&apos;Asr. Il est aussi recommandé de faire la doua lors de la visite du malade, car l&apos;ange dit « Amine, et à toi la même chose » lorsqu&apos;on invoque pour le malade.",
  },
  {
    question: "Peut-on combiner la doua avec un traitement médical ?",
    answer:
      "Absolument. L&apos;islam encourage le recours aux soins médicaux en parallèle des invocations. Le Prophète (paix et salut sur lui) a dit : « Serviteurs d&apos;Allah, soignez-vous, car Allah n&apos;a pas créé de maladie sans avoir créé son remède » (Abu Dawud). Se soigner est un moyen matériel qu&apos;Allah a mis à disposition, et la doua est le moyen spirituel. Les deux sont complémentaires et ne s&apos;excluent pas.",
  },
];

export default function DouaGuerisonMaladeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-guerison-malade-islam/#article",
        headline:
          "Doua de guérison en islam : invocations pour les malades",
        description:
          "Découvrez les douas de guérison en islam : invocations prophétiques en arabe, sourate al-Fatiha comme remède, versets coraniques de guérison, roqya shar'iyya et patience du malade.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-03-11",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-guerison-malade-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-guerison-malade-islam/#breadcrumb",
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
            name: "Doua de guérison",
            item: "https://www.islamreligion.fr/doua-guerison-malade-islam",
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
          title="Doua de guérison en islam : invocations pour les malades"
          subtitle="Les invocations authentiques pour la guérison, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française pour accompagner le malade avec foi et sérénité."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains levées en doua de guérison avec lumière subtile symbolisant l'espoir et la miséricorde divine en islam"
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
                <span className="text-foreground">Doua de guérison</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua guérison malade</strong> occupe une place
                  centrale dans la spiritualité islamique. Le Coran se
                  définit lui-même comme &laquo;&nbsp;une guérison pour ce qui
                  est dans les poitrines&nbsp;&raquo; (Yunus, 10:57), et le
                  Prophète (paix et salut sur lui) a enseigné de nombreuses
                  invocations spécifiques pour accompagner le malade vers la
                  guérison. Entre patience face à l&apos;épreuve, récitation
                  des versets coraniques et douas prophétiques, l&apos;islam
                  offre un accompagnement spirituel complet qui s&apos;allie
                  harmonieusement aux soins médicaux.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La maladie comme épreuve */}
              {/* ============================================ */}
              <section id="maladie-epreuve" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La maladie comme épreuve divine en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la maladie n&apos;est pas perçue comme un
                  châtiment aveugle ou un signe de colère divine. Elle est
                  avant tout une <strong>épreuve</strong> (ibtila&apos;) par
                  laquelle Allah teste la foi, la patience et la sincérité de
                  Son serviteur. Cette vision spirituelle transforme
                  radicalement le rapport du croyant à la souffrance et lui
                  donne un sens profond au-delà de la douleur physique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran affirme clairement ce principe : &laquo;&nbsp;Nous
                  vous éprouverons certes par un peu de peur, de faim et de
                  diminution de biens, de personnes et de fruits. Et fais la
                  bonne annonce aux endurants&nbsp;&raquo; (al-Baqara, 2:155).
                  La maladie fait partie de ces épreuves que tout être humain
                  est appelé à traverser au cours de sa vie terrestre. Ce qui
                  distingue le croyant, c&apos;est sa capacité à accueillir
                  cette épreuve avec patience et à se tourner vers Allah par
                  la <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua</Link> et
                  l&apos;invocation.
                </p>

                <HadithCard
                  arabic="ما يصيب المسلم من نصب ولا وصب ولا هم ولا حزن ولا أذى ولا غم حتى الشوكة يشاكها إلا كفر الله بها من خطاياه"
                  text="Aucune fatigue, maladie, souci, tristesse, gêne ou dommage n'atteint le musulman, même une épine qui le pique, sans qu'Allah ne lui efface par cela certains de ses péchés."
                  source="Rapporté par al-Bukhari (5641) et Muslim (2573)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental révèle une réalité extraordinaire :
                  chaque instant de souffrance, aussi minime soit-il, est une
                  source de purification pour le croyant. La maladie devient
                  ainsi un moyen d&apos;expiation des péchés et
                  d&apos;élévation spirituelle. Le malade qui patiente et
                  invoque Allah voit ses fautes effacées et son rang élevé
                  auprès de son Seigneur.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La maladie expie les péchés :</strong>{" "}
                      chaque douleur, chaque fièvre, chaque instant de
                      souffrance efface les fautes du croyant patient,
                      comme le feu purifie l&apos;or de ses impuretés.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La maladie rapproche d&apos;Allah :</strong>{" "}
                      c&apos;est souvent dans les moments de faiblesse que
                      le serviteur se tourne le plus sincèrement vers son
                      Créateur, renforçant ainsi sa relation avec Lui.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se soigner est un devoir :</strong>{" "}
                      l&apos;islam ordonne de recourir aux soins médicaux.
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Soignez-vous, car Allah n&apos;a pas
                      créé de maladie sans avoir créé son
                      remède&nbsp;&raquo; (Abu Dawud). Découvrez également
                      les{" "}
                      <Link href="/remede-arabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes de la médecine prophétique</Link>.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière pour la doua de guérison du malade en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de guérison prophétique */}
              {/* ============================================ */}
              <section id="doua-guerison-prophetique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de guérison prophétique : l&apos;invocation du Prophète pour les malades
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a enseigné
                  plusieurs invocations spécifiques pour demander la guérison
                  à Allah. Ces <strong>douas de guérison</strong> sont
                  rapportées dans les recueils authentiques de hadiths et
                  constituent le fondement de la pratique spirituelle du
                  musulman face à la maladie. La plus célèbre d&apos;entre
                  elles est celle qu&apos;il récitait en posant sa main sur
                  le malade.
                </p>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم يعود بعض أهله يمسح بيده اليمنى ويقول: اللهم رب الناس أذهب البأس واشف أنت الشافي لا شفاء إلا شفاؤك شفاء لا يغادر سقما"
                  text="Le Prophète (paix et salut sur lui) visitait certains membres de sa famille, posait sa main droite et disait : « Seigneur des hommes, ôte le mal, guéris, Tu es le Guérisseur, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie. »"
                  source="Rapporté par al-Bukhari (5675) et Muslim (2191)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est remarquable à plusieurs égards.
                  D&apos;abord, elle affirme le principe fondamental que la
                  guérison appartient exclusivement à Allah : &laquo;&nbsp;Tu
                  es le Guérisseur&nbsp;&raquo; (Antash-Shafi). Les
                  médicaments et les médecins ne sont que des moyens
                  qu&apos;Allah a créés, mais la guérison véritable vient de
                  Lui seul. Ensuite, la formule &laquo;&nbsp;une guérison qui
                  ne laisse aucune maladie&nbsp;&raquo; exprime la demande
                  d&apos;une guérison complète et définitive, sans rechute ni
                  séquelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Rabban-nas, adh-hibil-ba&apos;s, ishfi Antash-Shafi, la shifa&apos;a illa shifa&apos;uka, shifa&apos;an la yughadiru saqaman
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur des hommes, ôte le mal, guéris, Tu es le Guérisseur, il n&apos;y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (5675) et Muslim (2191)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait également
                  cette invocation en passant sa main sur l&apos;endroit
                  douloureux du malade. Il est donc recommandé, lors de la
                  visite d&apos;un malade, de poser sa main droite sur son
                  front ou sur la zone de douleur et de réciter cette doua
                  avec sincérité et conviction. Cette pratique est une sunna
                  confirmée que tout musulman peut accomplir pour ses proches.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une autre invocation prophétique pour la guérison consiste
                  à poser la main sur l&apos;endroit douloureux de son
                  propre corps et à dire :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ (ثَلَاثًا) أَعُوذُ بِعِزَّةِ اللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah (trois fois), a&apos;udhu bi &apos;izzatillahi wa qudratih min sharri ma ajidu wa uhadhir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah (trois fois), je cherche refuge dans la puissance d&apos;Allah et Son pouvoir contre le mal de ce que je ressens et que je crains&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2202)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a recommandé de
                  réciter cette invocation sept fois en posant la main sur
                  l&apos;endroit douloureux. Cette sunna combine la parole
                  (dhikr), le geste (toucher) et l&apos;intention (tawakkul
                  sur Allah), formant ainsi un acte d&apos;adoration complet
                  face à la maladie. Pour approfondir la pratique de la{" "}
                  <Link href="/doua-malade-visite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">visite du malade et ses invocations</Link>,
                  consultez notre guide dédié.
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
              {/* SECTION 3 : Sourate al-Fatiha comme remède */}
              {/* ============================================ */}
              <section id="fatiha-remede" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sourate al-Fatiha : la plus grande sourate de guérison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Sourate al-Fatiha occupe une place unique dans le Coran et
                  dans la pratique de la guérison en islam. Le Prophète (paix
                  et salut sur lui) l&apos;a qualifiée de
                  &laquo;&nbsp;Mère du Livre&nbsp;&raquo; (Umm al-Kitab) et
                  a confirmé son efficacité comme remède (ruqya). Un
                  compagnon l&apos;a récitée sur un chef de tribu piqué par
                  un scorpion, et l&apos;homme fut guéri par la permission
                  d&apos;Allah. Le Prophète approuva cette pratique et
                  dit : &laquo;&nbsp;Comment savais-tu qu&apos;elle est une
                  ruqya ?&nbsp;&raquo; (al-Bukhari).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Al-Fatiha contient en effet tous les éléments de la
                  guérison spirituelle : la louange d&apos;Allah, la
                  reconnaissance de Sa seigneurie, l&apos;affirmation de Son
                  unicité dans l&apos;adoration, la demande de guidance et
                  la recherche de la voie droite. Les savants comme Ibn
                  al-Qayyim ont longuement commenté les vertus curatives de
                  cette sourate, affirmant que celui qui connaît sa valeur et
                  la récite avec foi et sincérité sur le malade constatera
                  des effets remarquables, bi idhnillah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahir-Rahmanir-Rahim. Al-hamdu lillahi Rabbil-&apos;alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na&apos;budu wa iyyaka nasta&apos;in. Ihdinas-siratal-mustaqim. Siratal-ladhina an&apos;amta &apos;alayhim, ghayril-maghdubi &apos;alayhim wa lad-dallin.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur des mondes. Le Tout Miséricordieux, le Très Miséricordieux. Maître du Jour du Jugement. C&apos;est Toi que nous adorons et c&apos;est Toi dont nous implorons le secours. Guide-nous dans le droit chemin. Le chemin de ceux que Tu as comblés de Tes bienfaits, non pas de ceux qui ont encouru Ta colère, ni de ceux qui se sont égarés&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Fatiha (1:1-7)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour pratiquer la guérison par al-Fatiha, il est
                  recommandé de la réciter sept fois sur le malade en
                  soufflant légèrement après chaque récitation. On peut
                  également la réciter sur de l&apos;eau que le malade boira
                  ensuite, ou sur de l&apos;huile d&apos;olive avec laquelle
                  on massera la zone douloureuse. Ces pratiques sont attestées
                  dans la tradition prophétique et appliquées par les savants
                  à travers les siècles. Pour en savoir plus sur les
                  invocations islamiques, consultez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet sur la doua en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Versets coraniques de guérison */}
              {/* ============================================ */}
              <section id="ayat-shifa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les versets coraniques de guérison (ayat ash-shifa)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont identifié six versets
                  coraniques qui contiennent explicitement le mot
                  &laquo;&nbsp;shifa&nbsp;&raquo; (guérison). Ces versets,
                  appelés <strong>ayat ash-shifa</strong>, sont récités dans
                  le cadre de la roqya shar&apos;iyya et constituent un
                  remède spirituel puissant pour toute forme de maladie,
                  qu&apos;elle soit physique, psychologique ou spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran lui-même se définit comme un remède :
                  &laquo;&nbsp;Et Nous faisons descendre du Coran ce qui est
                  une guérison et une miséricorde pour les
                  croyants&nbsp;&raquo; (al-Isra, 17:82). Cette guérison
                  coranique agit à plusieurs niveaux : elle guérit les coeurs
                  de l&apos;ignorance et du doute, les âmes de leurs
                  maladies spirituelles, et les corps de leurs maux
                  physiques, par la permission d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée et lumière, versets de guérison ayat ash-shifa"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les six versets de guérison (ayat ash-shifa)
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Voici les six versets identifiés par les savants comme les
                  versets de guérison du Coran. Chacun contient le mot
                  &laquo;&nbsp;shifa&nbsp;&raquo; et peut être récité sur le
                  malade ou sur de l&apos;eau destinée à la consommation :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      1. Sourate at-Tawba (9:14)
                    </h4>
                    <p className="mt-2 text-right font-arabic text-lg leading-loose text-primary" dir="rtl">
                      وَيَشْفِ صُدُورَ قَوْمٍ مُّؤْمِنِينَ
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary italic">
                      &laquo;&nbsp;Et Il guérira les poitrines d&apos;un peuple croyant&nbsp;&raquo;
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      2. Sourate Yunus (10:57)
                    </h4>
                    <p className="mt-2 text-right font-arabic text-lg leading-loose text-primary" dir="rtl">
                      يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ وَشِفَاءٌ لِّمَا فِي الصُّدُورِ
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary italic">
                      &laquo;&nbsp;Ô gens ! Une exhortation vous est venue de votre Seigneur, une guérison pour ce qui est dans les poitrines&nbsp;&raquo;
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      3. Sourate an-Nahl (16:69)
                    </h4>
                    <p className="mt-2 text-right font-arabic text-lg leading-loose text-primary" dir="rtl">
                      يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِّلنَّاسِ
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary italic">
                      &laquo;&nbsp;De leurs ventres sort une boisson de couleurs variées, dans laquelle il y a une guérison pour les gens&nbsp;&raquo;
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      4. Sourate al-Isra (17:82)
                    </h4>
                    <p className="mt-2 text-right font-arabic text-lg leading-loose text-primary" dir="rtl">
                      وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary italic">
                      &laquo;&nbsp;Et Nous faisons descendre du Coran ce qui est une guérison et une miséricorde pour les croyants&nbsp;&raquo;
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      5. Sourate ash-Shu&apos;ara (26:80)
                    </h4>
                    <p className="mt-2 text-right font-arabic text-lg leading-loose text-primary" dir="rtl">
                      وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary italic">
                      &laquo;&nbsp;Et quand je suis malade, c&apos;est Lui qui me guérit&nbsp;&raquo;
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">
                      6. Sourate Fussilat (41:44)
                    </h4>
                    <p className="mt-2 text-right font-arabic text-lg leading-loose text-primary" dir="rtl">
                      قُلْ هُوَ لِلَّذِينَ آمَنُوا هُدًى وَشِفَاءٌ
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary italic">
                      &laquo;&nbsp;Dis : Il est pour ceux qui croient une guidée et une guérison&nbsp;&raquo;
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants recommandent de réciter ces six versets
                  ensemble, de manière régulière, sur le malade ou sur de
                  l&apos;eau. La récitation doit être faite avec foi,
                  concentration et certitude que la guérison vient d&apos;Allah
                  seul. Ibn al-Qayyim, dans son ouvrage Zad al-Ma&apos;ad,
                  consacre un chapitre entier aux vertus curatives du Coran
                  et explique que la guérison coranique dépend autant de la
                  force de foi du récitant que de la réceptivité du malade.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : La roqya shar'iyya */}
              {/* ============================================ */}
              <section id="roqya-shariyya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La roqya shar&apos;iyya : l&apos;incantation légitime en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>roqya shar&apos;iyya</strong> désigne la
                  pratique de réciter le Coran et les invocations
                  prophétiques sur un malade dans le but de demander la
                  guérison à Allah. Cette pratique est fermement établie
                  dans la Sunna : le Prophète (paix et salut sur lui) la
                  pratiquait lui-même et l&apos;a autorisée pour sa
                  communauté, à condition qu&apos;elle respecte certaines
                  règles précises.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a posé trois
                  conditions pour la validité de la roqya. Muslim rapporte
                  qu&apos;il a dit : &laquo;&nbsp;Montrez-moi vos ruqya. Il
                  n&apos;y a pas de mal dans la ruqya tant qu&apos;elle ne
                  comporte pas de shirk&nbsp;&raquo; (Muslim, 2200). Les
                  savants ont déduit de ce hadith et d&apos;autres textes les
                  conditions suivantes :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Utiliser exclusivement le Coran et les invocations prophétiques
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La roqya doit se baser sur les paroles d&apos;Allah
                        et les douas enseignées par le Prophète (paix et salut
                        sur lui). Toute incantation contenant des paroles
                        incompréhensibles, des noms de djinns ou des formules
                        magiques est strictement interdite.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Être exempt de tout shirk (associationnisme)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ni le praticien ni le malade ne doivent croire que la
                        guérison vient d&apos;autre qu&apos;Allah. Les
                        amulettes, talismans et pratiques de sorcellerie sont
                        absolument interdits. Pour en savoir plus sur la{" "}
                        <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">protection contre la sorcellerie en islam</Link>,
                        consultez notre article dédié.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Avoir la conviction que la guérison vient d&apos;Allah seul
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La roqya n&apos;est pas un rituel magique. C&apos;est
                        un acte d&apos;adoration par lequel le serviteur
                        demande à son Seigneur la guérison. La certitude
                        (yaqin) que seul Allah guérit est une condition
                        essentielle de l&apos;efficacité de la roqya. Le
                        Coran et les douas sont des moyens, et Allah est le
                        Guérisseur (ash-Shafi).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La roqya shar&apos;iyya peut être pratiquée par tout
                  musulman sincère, homme ou femme. Il n&apos;est pas
                  nécessaire de recourir à un &laquo;&nbsp;raqi&nbsp;&raquo;
                  spécialisé : chaque musulman peut réciter le Coran sur
                  lui-même ou sur ses proches. En réalité, la personne la
                  plus qualifiée pour pratiquer la roqya est celle dont la
                  foi est la plus forte et dont le coeur est le plus
                  attaché à Allah. Pour{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>{" "}
                  et réciter le Coran avec une compréhension profonde,
                  c&apos;est un investissement qui renforcera votre
                  pratique spirituelle.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : 7 douas spécifiques */}
              {/* ============================================ */}
              <section id="sept-douas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  7 douas spécifiques pour la guérison du malade
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici sept invocations authentiques tirées du Coran et de
                  la Sunna que le malade ou celui qui lui rend visite peut
                  réciter pour demander la guérison à Allah. Chaque doua est
                  présentée en arabe avec sa phonétique et sa traduction
                  française.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua du Prophète Ayyub (Job) face à la maladie
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Ayyub (paix sur lui) est l&apos;exemple par
                  excellence de la patience face à la maladie. Après des
                  années de souffrance, il adressa cette invocation sublime
                  à Allah, qui lui rendit aussitôt la santé et le combla
                  de bienfaits. Cette doua est particulièrement recommandée
                  pour celui qui traverse une longue maladie.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Anni massaniyad-durru wa Anta arhamur-rahimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Le mal m&apos;a touché et Tu es le plus Miséricordieux des miséricordieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Anbiya (21:83)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de visite du malade
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné cette
                  invocation pour celui qui rend visite à un malade. Celui
                  qui la récite sept fois, le malade guérira par la
                  permission d&apos;Allah, sauf si son terme est arrivé.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَسْأَلُ اللَّهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> As&apos;alullaha al-&apos;Adhim, Rabbal-&apos;Arshil-&apos;Adhim, an yashfiyak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande à Allah le Magnifique, Seigneur du Trône magnifique, de te guérir&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2083), Abu Dawud (3106)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de protection par les sourates protectrices
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Aisha (qu&apos;Allah soit satisfait d&apos;elle) rapporte
                  que le Prophète (paix et salut sur lui), lorsqu&apos;il
                  tombait malade, récitait les sourates al-Falaq et an-Nas
                  (al-Mu&apos;awwidhatayn) et soufflait dans ses mains
                  avant de les passer sur son corps. Lorsque sa maladie
                  s&apos;aggrava, c&apos;est Aisha qui les récitait et
                  passait ses propres mains sur lui.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua en posant la main sur la douleur
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est récitée en plaçant la main droite
                  sur l&apos;endroit douloureux du corps. Le Prophète (paix
                  et salut sur lui) l&apos;a enseignée à Uthman ibn Abil-As
                  lorsque celui-ci se plaignit d&apos;une douleur dans son
                  corps.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu billahi wa qudratihi min sharri ma ajidu wa uhadhir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge auprès d&apos;Allah et de Sa puissance contre le mal de ce que je ressens et que je crains&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2202)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua de Younous (Jonas) dans la détresse
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Bien que cette doua ait été prononcée par le prophète
                  Younous (paix sur lui) dans le ventre de la baleine, le
                  Prophète Muhammad (paix et salut sur lui) a affirmé que
                  tout musulman qui l&apos;invoque dans une situation de
                  détresse, y compris la maladie, sera exaucé par Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Anbiya (21:87)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  6. Doua pour demander la santé et la protection
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait cette
                  invocation chaque matin et chaque soir pour demander à
                  Allah la santé et la protection. Elle est particulièrement
                  recommandée en prévention de la maladie et comme rappel
                  quotidien de la dépendance du serviteur envers son
                  Seigneur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;alukal-&apos;afwa wal-&apos;afiyata fid-dunya wal-akhira
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le pardon et la santé dans ce monde et dans l&apos;au-delà&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (3871), an-Nasa&apos;i
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  7. Doua pour la guérison complète
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation exprime la demande d&apos;une guérison
                  totale et la reconnaissance qu&apos;Allah seul détient le
                  pouvoir de guérir. Elle est récitée en complément des
                  autres douas pour renforcer la demande de guérison.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اشْفِ عَبْدَكَ يَنْكَأُ لَكَ عَدُوًّا أَوْ يَمْشِي لَكَ إِلَى صَلَاةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahummashfi &apos;abdaka yanka&apos;u laka &apos;aduwwan aw yamshi laka ila salah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, guéris Ton serviteur qui combattra un ennemi pour Toi ou marchera vers une prière pour Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (3107)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : La patience du malade */}
              {/* ============================================ */}
              <section id="patience-malade" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La patience du malade en islam : une vertu récompensée
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations et des remèdes, l&apos;islam
                  accorde une importance immense à la <strong>patience</strong>{" "}
                  (sabr) du malade. Cette patience n&apos;est pas une
                  résignation passive, mais une attitude active de confiance
                  en Allah, de satisfaction de Son décret (rida) et de
                  persévérance dans l&apos;adoration malgré la douleur. Les
                  récompenses promises au malade patient sont extraordinaires.
                </p>

                <HadithCard
                  arabic="عجبا لأمر المؤمن إن أمره كله خير وليس ذاك لأحد إلا للمؤمن إن أصابته سراء شكر فكان خيرا له وإن أصابته ضراء صبر فكان خيرا له"
                  text="Comme l'affaire du croyant est étonnante ! Tout ce qui lui arrive est un bien, et cela n'est accordé qu'au croyant : si un bonheur l'atteint, il remercie et c'est un bien pour lui ; et si un malheur l'atteint, il patiente et c'est un bien pour lui."
                  source="Rapporté par Muslim (2999)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith magnifique résume toute la philosophie islamique
                  face à l&apos;épreuve de la maladie. Le croyant est dans
                  une situation gagnante dans tous les cas : s&apos;il
                  guérit, il remercie Allah et cela renforce sa foi ;
                  s&apos;il continue de souffrir, sa patience lui vaut des
                  récompenses immenses et l&apos;expiation de ses péchés.
                  La maladie devient ainsi une opportunité spirituelle unique.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;expiation des péchés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Chaque douleur, chaque fièvre, chaque instant de
                      souffrance est une occasion d&apos;expier ses péchés.
                      Le Prophète (paix et salut sur lui) a comparé cela
                      au feu qui purifie le métal de ses impuretés :
                      &laquo;&nbsp;La fièvre est un souffle de
                      l&apos;Enfer, rafraîchissez-la avec l&apos;eau&nbsp;&raquo;
                      (al-Bukhari).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;élévation des degrés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La maladie n&apos;est pas seulement une expiation :
                      elle élève le rang du croyant auprès d&apos;Allah.
                      Certains degrés au Paradis ne peuvent être atteints
                      que par la patience face aux épreuves. Le malade
                      patient atteint ainsi des stations spirituelles
                      inaccessibles autrement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La récompense continue
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le malade qui était habitué à accomplir certains actes
                      d&apos;adoration (prière nocturne, jeûne, etc.)
                      continue de recevoir la récompense de ces actes même
                      s&apos;il ne peut plus les accomplir à cause de sa
                      maladie. Allah, dans Sa générosité, lui inscrit les
                      bonnes actions qu&apos;il avait l&apos;habitude de
                      faire en état de santé.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La compagnie des anges
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui visite un malade est entouré par les anges
                      qui invoquent en sa faveur. Le Prophète (paix et salut
                      sur lui) a dit que celui qui visite un malade le matin,
                      70 000 anges prient pour lui jusqu&apos;au
                      soir (at-Tirmidhi). La{" "}
                      <Link href="/doua-malade-visite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">visite du malade</Link>{" "}
                      est ainsi une sunna aux mérites considérables.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La patience du malade se manifeste de plusieurs manières :
                  ne pas se plaindre excessivement auprès des gens (tout en
                  pouvant décrire sa douleur au médecin), ne pas remettre en
                  question le décret d&apos;Allah, maintenir autant que
                  possible ses actes d&apos;adoration, et multiplier les
                  invocations et le dhikr. Le malade patient qui dit
                  &laquo;&nbsp;al-hamdulillah&nbsp;&raquo; malgré sa douleur
                  atteint un degré de foi que beaucoup envieront au Jour du
                  Jugement.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire &laquo;&nbsp;inna lillahi wa inna ilayhi raji&apos;un&nbsp;&raquo; :</strong>{" "}
                      &laquo;&nbsp;Nous sommes à Allah et c&apos;est vers
                      Lui que nous retournerons&nbsp;&raquo;. Cette formule
                      coranique (al-Baqara, 2:156) est recommandée face à
                      toute épreuve et apaise le coeur du croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier le dhikr :</strong>{" "}
                      le souvenir d&apos;Allah (dhikr) est le meilleur
                      compagnon du malade. Les formules simples comme
                      &laquo;&nbsp;subhanAllah&nbsp;&raquo;,
                      &laquo;&nbsp;al-hamdulillah&nbsp;&raquo; et
                      &laquo;&nbsp;Allahu akbar&nbsp;&raquo; apaisent le
                      coeur et attirent la miséricorde divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Garder espoir en la guérison :</strong>{" "}
                      le désespoir est interdit en islam. Le malade doit
                      garder espoir en la miséricorde d&apos;Allah et en Sa
                      capacité à guérir toute maladie, quelle qu&apos;elle
                      soit. Le Coran affirme : &laquo;&nbsp;Ne désespérez
                      pas de la miséricorde d&apos;Allah&nbsp;&raquo;
                      (az-Zumar, 39:53).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Combiner doua et traitement médical :</strong>{" "}
                      la confiance en Allah n&apos;exclut pas le recours
                      aux soins médicaux. Au contraire, se soigner fait
                      partie de la prise des moyens (al-akhdh bil-asbab)
                      que l&apos;islam encourage. Le Prophète (paix et salut
                      sur lui) a dit : &laquo;&nbsp;Allah n&apos;a pas créé
                      de maladie sans avoir créé son
                      remède&nbsp;&raquo; (al-Bukhari).
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour la visite du malade en islam"
                  description="Découvrez les invocations authentiques à réciter lors de la visite d&apos;un malade et les mérites de cette sunna prophétique."
                  href="/doua-malade-visite-islam"
                />
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
                    href="/doua-malade-visite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la visite du malade
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes de la médecine prophétique
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection contre la sorcellerie
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam
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
