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
    "Doua de tarawih en islam : invocations entre les séries et durant le witr",
  description:
    "Découvrez la doua de tarawih en islam : invocations authentiques entre les séries (subhana dhil-malakuti wal-jabarut), doua du witr, doua de qiyam al-layl, textes en arabe avec phonétique et traduction française.",
  openGraph: {
    title:
      "Doua de tarawih en islam : invocations entre les séries et durant le witr",
    description:
      "Les invocations authentiques de la prière de tarawih : doua entre les séries, doua du witr, qiyam al-layl, textes en arabe, phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-tarawih-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-tarawih-islam",
  },
};

const tocItems = [
  { id: "priere-tarawih", label: "La prière de tarawih en islam" },
  { id: "doua-entre-series", label: "Doua entre les séries de tarawih" },
  { id: "doua-witr-tarawih", label: "Doua du witr durant le tarawih" },
  { id: "doua-qiyam-layl", label: "Doua pour le qiyam al-layl" },
  { id: "hadith-imam-tarawih", label: "Prier avec l\u2019imam jusqu\u2019à la fin" },
  { id: "invocations-tarawih", label: "Invocations complètes de tarawih" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua entre les séries de tarawih ?",
    answer:
      "La doua la plus connue entre les séries (chaque deux raka&apos;at) de tarawih est : « Subhana dhil-malakuti wal-jabaruti wal-kibriya&apos;i wal-&apos;azhamah » (Gloire à Celui qui détient le Royaume, la Toute-Puissance, l&apos;Orgueil et la Grandeur). Cette invocation est rapportée dans les traditions des Salaf et permet au prieur de glorifier Allah entre les séries de prière nocturne.",
  },
  {
    question: "Combien de raka'at comporte la prière de tarawih ?",
    answer:
      "Les savants divergent sur le nombre exact de raka&apos;at de tarawih. Certains prient 8 raka&apos;at (plus 3 de witr) en se basant sur le hadith de &apos;Aisha (qu&apos;Allah l&apos;agrée) qui décrit la prière nocturne du Prophète (paix et salut sur lui). D&apos;autres prient 20 raka&apos;at (plus 3 de witr) en suivant la pratique de &apos;Umar ibn al-Khattab et du consensus des compagnons. Les deux avis sont valides.",
  },
  {
    question: "Peut-on faire la doua de tarawih en français ?",
    answer:
      "Pour les invocations personnelles en dehors de la prière elle-même, il est permis d&apos;invoquer en français. Cependant, les formules récitées durant la prière (dans le sujud, le ruku&apos; ou le qunut) doivent être en arabe selon la majorité des savants. Il est recommandé d&apos;apprendre les douas prophétiques en arabe pour les intégrer pleinement dans la prière de tarawih.",
  },
  {
    question: "Quelle est la doua du witr pendant le ramadan ?",
    answer:
      "La doua du qunut récitée dans le witr pendant le ramadan comprend notamment : « Allahumma ihdini fiman hadayt, wa &apos;afini fiman &apos;afayt, wa tawallani fiman tawallayt » (Seigneur, guide-moi parmi ceux que Tu as guidés, accorde-moi la santé parmi ceux à qui Tu l&apos;as accordée, prends-moi en charge parmi ceux que Tu as pris en charge). Cette doua est rapportée par at-Tirmidhi et an-Nasa&apos;i.",
  },
  {
    question: "Est-il obligatoire de prier le tarawih en groupe à la mosquée ?",
    answer:
      "La prière de tarawih en groupe à la mosquée est une sunna mu&apos;akkadah (fortement recommandée) et non une obligation. Le Prophète (paix et salut sur lui) l&apos;a priée en groupe pendant quelques nuits puis a cessé par crainte qu&apos;elle ne devienne obligatoire. &apos;Umar ibn al-Khattab a ensuite rétabli cette pratique en groupe. On peut donc aussi la prier chez soi individuellement.",
  },
  {
    question: "À quel moment fait-on la doua pendant le tarawih ?",
    answer:
      "Les moments propices pour la doua pendant le tarawih sont : entre chaque série de deux raka&apos;at (pause de repos), lors du sujud (prosternation), dans le qunut du witr, et après la salutation finale. Le dernier tiers de la nuit est particulièrement béni pour les invocations. Les dix dernières nuits du ramadan multiplient encore davantage le mérite des douas.",
  },
  {
    question: "Faut-il lever les mains pour la doua du qunut dans le witr ?",
    answer:
      "Oui, la majorité des savants recommandent de lever les mains lors de la doua du qunut dans le witr du tarawih. L&apos;imam lève ses mains à hauteur de la poitrine ou du visage, paumes tournées vers le ciel, et les fidèles derrière lui disent « Amin » à chaque invocation. Cette pratique est attestée par les compagnons du Prophète (paix et salut sur lui).",
  },
];

export default function DouaTarawihIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-tarawih-islam/#article",
        headline:
          "Doua de tarawih en islam : invocations entre les séries et durant le witr",
        description:
          "Découvrez la doua de tarawih en islam : invocations authentiques entre les séries, doua du witr, doua de qiyam al-layl, textes en arabe avec phonétique et traduction.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2026-04-13",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-tarawih-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-tarawih-islam/#breadcrumb",
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
            name: "Doua de tarawih",
            item: "https://www.islamreligion.fr/doua-tarawih-islam",
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
          title="Doua de tarawih en islam : invocations entre les séries et durant le witr"
          subtitle="Les invocations authentiques de la prière de tarawih : doua entre les séries, qunut du witr, qiyam al-layl. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Intérieur de mosquée avec arches et tapis éclairé par la lumière illustrant la prière de tarawih en islam"
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
                <span className="text-foreground">Doua de tarawih</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La prière de tarawih, accomplie chaque nuit du mois de
                  ramadan, est l&apos;un des actes d&apos;adoration les plus
                  méritoires en islam. Elle s&apos;accompagne d&apos;invocations
                  spécifiques entre les séries de deux raka&apos;at, d&apos;une
                  doua du qunut dans le witr, et d&apos;invocations de qiyam
                  al-layl. Découvrez les textes authentiques en arabe, leur
                  phonétique et leur traduction pour enrichir votre prière
                  nocturne durant le ramadan.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La prière de tarawih */}
              {/* ============================================ */}
              <section id="priere-tarawih" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La prière de tarawih en islam : origine et mérite
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La prière de <strong>tarawih</strong> (صلاة التراويح) tire son
                  nom du mot arabe &laquo;&nbsp;tarwiha&nbsp;&raquo; qui désigne
                  le repos pris entre chaque série de quatre raka&apos;at. Cette
                  prière surérogatoire est spécifiquement liée au mois béni de
                  ramadan et constitue l&apos;une des traditions prophétiques les
                  plus précieuses de la communauté musulmane.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a institué cette prière en
                  la pratiquant durant plusieurs nuits du ramadan avec ses
                  compagnons. Cependant, par crainte qu&apos;elle ne devienne
                  une obligation pour sa communauté, il a choisi de la prier
                  chez lui les nuits suivantes. C&apos;est &apos;Umar ibn
                  al-Khattab (qu&apos;Allah l&apos;agrée) qui, durant son
                  califat, rassembla les musulmans derrière un seul imam pour
                  la prière de tarawih à la mosquée, rétablissant ainsi cette
                  sunna collective.
                </p>

                <HadithCard
                  arabic="من قام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه"
                  text="Celui qui prie les nuits de ramadan avec foi et en espérant la récompense d'Allah, ses péchés antérieurs lui seront pardonnés."
                  source="Rapporté par al-Bukhari (37) et Muslim (759)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondateur souligne le mérite immense de la prière
                  nocturne durant le ramadan. Le terme &laquo;&nbsp;qama
                  ramadan&nbsp;&raquo; (prier les nuits de ramadan) englobe la
                  prière de tarawih et toute forme de qiyam al-layl accomplie
                  durant ce mois sacré. Deux conditions sont requises pour
                  obtenir ce pardon : la foi sincère (iman) et la recherche
                  exclusive de la récompense divine (ihtisab).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sunna mu&apos;akkadah :</strong> la prière de
                      tarawih est fortement recommandée pour tout musulman et
                      toute musulmane durant le ramadan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>En groupe ou individuellement :</strong> on peut
                      la prier à la mosquée en congrégation ou chez soi, bien
                      que la prière en groupe soit plus méritoire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Après la prière de &apos;isha :</strong> le
                      tarawih se prie après la prière obligatoire de
                      &apos;isha et avant le witr, qui clôt les prières de la
                      nuit.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de prière dans une mosquée avec arches et lumière illustrant le tarawih en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua entre les séries */}
              {/* ============================================ */}
              <section id="doua-entre-series" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua entre les séries de tarawih : Subhana Dhil-Malakut
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Entre chaque série de deux ou quatre raka&apos;at de tarawih,
                  les fidèles observent un temps de repos (tarwiha). Ce moment
                  est une occasion précieuse pour glorifier Allah, réciter des
                  invocations et se préparer spirituellement pour la série
                  suivante. L&apos;invocation la plus célèbre récitée durant
                  ces pauses est la glorification de la grandeur divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ ذِي الْمَلَكُوتِ وَالْجَبَرُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Subhana dhil-malakuti wal-jabaruti wal-kibriya&apos;i wal-&apos;azhamah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Celui qui détient le Royaume, la Toute-Puissance, l&apos;Orgueil et la Grandeur&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par an-Nasa&apos;i (1699) et Abu Dawud (1430)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation magnifique rassemble quatre attributs divins
                  fondamentaux. Le <strong>Malakut</strong> désigne le Royaume
                  absolu d&apos;Allah qui englobe les cieux et la terre. Le
                  <strong> Jabarut</strong> exprime la Toute-Puissance
                  irrésistible à laquelle rien ne peut s&apos;opposer. La
                  <strong> Kibriya&apos;</strong> renvoie à l&apos;Orgueil
                  légitime qui n&apos;appartient qu&apos;à Allah seul. Et la
                  <strong> &apos;Azhamah</strong> évoque la Grandeur
                  incomparable du Créateur des mondes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette doua trois fois
                  entre chaque série, en prolongeant la voix lors de la
                  troisième répétition. Cette pratique est attestée chez
                  plusieurs compagnons et tabi&apos;in (successeurs). Le prieur
                  peut également profiter de ces pauses pour réciter des
                  formules de dhikr, demander pardon à Allah (istighfar) ou
                  adresser des invocations personnelles. Pour approfondir
                  l&apos;ensemble des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllahi wal-hamdu lillahi wa la ilaha illAllahu wAllahu akbar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Allah, louange à Allah, il n&apos;y a de divinité qu&apos;Allah, et Allah est le plus Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2137)
                  </p>
                </div>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua du witr */}
              {/* ============================================ */}
              <section id="doua-witr-tarawih" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua du witr durant le tarawih : le qunut
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>witr</strong> constitue la conclusion de la prière
                  de tarawih et revêt une importance particulière en islam.
                  C&apos;est dans la dernière raka&apos;a du witr que
                  l&apos;imam récite la <strong>doua du qunut</strong>, une
                  invocation émouvante qui rassemble les demandes de guidée, de
                  protection, de pardon et de miséricorde. Durant le ramadan,
                  cette doua prend une dimension encore plus intense, notamment
                  lors des dix dernières nuits.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، إِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ihdini fiman hadayt, wa &apos;afini fiman &apos;afayt, wa tawallani fiman tawallayt, wa barik li fima a&apos;tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda &apos;alayk, innahu la yadhillu man walayt, wa la ya&apos;izzu man &apos;adayt, tabarakta Rabbana wa ta&apos;alayt
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, guide-moi parmi ceux que Tu as guidés, accorde-moi la santé parmi ceux à qui Tu l&apos;as accordée, prends-moi en charge parmi ceux que Tu as pris en charge, bénis ce que Tu m&apos;as donné, protège-moi du mal que Tu as décrété. Car c&apos;est Toi qui décrètes et nul ne décrète contre Toi. Celui que Tu prends comme allié ne sera jamais humilié, et celui que Tu prends comme ennemi ne sera jamais honoré. Béni sois-Tu, notre Seigneur, et élevé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (464) et an-Nasa&apos;i (1745)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua du qunut, enseignée par le Prophète (paix et salut
                  sur lui) à al-Hassan ibn &apos;Ali (qu&apos;Allah les agrée),
                  est la base de l&apos;invocation récitée dans le witr.
                  L&apos;imam peut y ajouter d&apos;autres invocations
                  prophétiques, notamment durant les nuits du ramadan. Parmi
                  les ajouts recommandés figure l&apos;invocation suivante,
                  rapportée par &apos;Umar ibn al-Khattab :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inna nasta&apos;inuka wa nastaghfiruka wa nuthni &apos;alaykal-khayr, wa la nakfuruka wa nakhla&apos;u wa natruku man yafjuruk
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous implorons Ton aide, nous Te demandons pardon, nous Te louons pour le bien, nous ne Te renions pas, nous rejetons et délaissons quiconque Te désobéit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bayhaqi dans as-Sunan al-Kubra (2/210)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour approfondir les invocations spécifiques du witr en dehors
                  du ramadan, consultez notre article dédié à la{" "}
                  <Link href="/doua-witr-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du witr en islam</Link>.
                  Le witr du tarawih se distingue par l&apos;intensité
                  émotionnelle qui l&apos;accompagne, en particulier lors de la
                  deuxième moitié du ramadan, lorsque les fidèles recherchent
                  la nuit du Destin (Laylat al-Qadr).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua pour le qiyam al-layl */}
              {/* ============================================ */}
              <section id="doua-qiyam-layl" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour le qiyam al-layl durant le ramadan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>qiyam al-layl</strong> (la prière nocturne) durant
                  le ramadan englobe à la fois le tarawih et les prières
                  supplémentaires accomplies dans la dernière partie de la nuit.
                  Le Prophète (paix et salut sur lui) avait l&apos;habitude
                  d&apos;ouvrir sa prière nocturne par une invocation
                  d&apos;ouverture (du&apos;a al-istiftah) d&apos;une beauté
                  remarquable.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ رَبَّ جِبْرِيلَ وَمِيكَائِيلَ وَإِسْرَافِيلَ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ، اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ، إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُسْتَقِيمٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Rabba Jibrila wa Mika&apos;ila wa Israfila, fatirad-samawati wal-ard, &apos;alimal-ghaybi wash-shahadah, Anta tahkumu bayna &apos;ibadika fima kanu fihi yakhtalifun, ihdini lima-khtulifa fihi minal-haqqi bi idhnik, innaka tahdi man tasha&apos;u ila siratin mustaqim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Maître de Jibril, Mika&apos;il et Israfil, Créateur des cieux et de la terre, Connaisseur de l&apos;invisible et du visible, Tu juges entre Tes serviteurs sur ce en quoi ils divergeaient. Guide-moi vers la vérité dans ce qui fait l&apos;objet de divergence, par Ta permission. Tu guides qui Tu veux vers un chemin droit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (770)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation d&apos;ouverture de la prière nocturne est
                  d&apos;une profondeur théologique remarquable. Elle invoque
                  Allah par Sa seigneurie sur les trois grands anges, par Sa
                  qualité de Créateur et de Connaisseur de toute chose. Elle
                  demande la guidée vers la vérité, ce qui en fait une doua
                  particulièrement adaptée aux moments de confusion ou de
                  questionnement spirituel.
                </p>

                <HadithCard
                  arabic="أقرب ما يكون الرب من العبد في جوف الليل الآخر فإن استطعت أن تكون ممن يذكر الله في تلك الساعة فكن"
                  text="Le moment où le Seigneur est le plus proche de Son serviteur, c'est au milieu de la dernière partie de la nuit. Si tu peux être parmi ceux qui invoquent Allah à cette heure-là, alors sois-le."
                  source="Rapporté par at-Tirmidhi (3579), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith souligne l&apos;importance capitale du dernier tiers
                  de la nuit pour les invocations. Durant le ramadan, de
                  nombreux fidèles profitent de cette période bénie, après le
                  tarawih ou avant le suhur (repas pré-aube), pour multiplier
                  les douas personnelles. C&apos;est un moment où les portes du
                  ciel sont ouvertes et où Allah descend au ciel le plus bas
                  pour répondre aux invocations de Ses serviteurs. Les{" "}
                  <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas du ramadan</Link>{" "}
                  prennent alors une dimension encore plus puissante.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière nocturne dans une mosquée illustrant le qiyam al-layl durant le ramadan"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Hadith prier avec l'imam */}
              {/* ============================================ */}
              <section id="hadith-imam-tarawih" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Prier avec l&apos;imam jusqu&apos;à la fin : un qiyam complet
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des hadiths les plus motivants pour les fidèles qui
                  accomplissent le tarawih en congrégation est celui qui
                  encourage à rester avec l&apos;imam jusqu&apos;à ce
                  qu&apos;il termine sa prière. Ce hadith offre une récompense
                  exceptionnelle qui devrait inciter chaque musulman à
                  accomplir la prière de tarawih du début à la fin.
                </p>

                <HadithCard
                  arabic="من قام مع الإمام حتى ينصرف كُتب له قيام ليلة"
                  text="Celui qui prie avec l'imam jusqu'à ce qu'il termine, on lui inscrit la récompense de toute une nuit de prière (qiyam)."
                  source="Rapporté par at-Tirmidhi (806), an-Nasa&apos;i (1605), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une générosité divine extraordinaire. Il
                  signifie que le fidèle qui accomplit le tarawih en entier avec
                  l&apos;imam, du takbirat al-ihram jusqu&apos;au salam final
                  du witr, obtient la même récompense que s&apos;il avait prié
                  toute la nuit en qiyam al-layl. Cette facilité témoigne de
                  la miséricorde d&apos;Allah qui récompense l&apos;effort
                  sincère de manière disproportionnée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants en tirent plusieurs enseignements pratiques.
                  Premièrement, il est préférable de prier le witr avec
                  l&apos;imam plutôt que de le reporter à la fin de la nuit,
                  afin de bénéficier de cette récompense complète. Si le
                  fidèle souhaite prier davantage après le tarawih, il peut
                  accomplir des prières supplémentaires deux par deux sans
                  refaire le witr. Deuxièmement, la patience durant les
                  longues récitations de l&apos;imam fait partie intégrante de
                  l&apos;adoration et de la discipline spirituelle du ramadan.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Rester avec l&apos;imam
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Accomplir toute la prière de tarawih et le witr avec
                      l&apos;imam garantit la récompense d&apos;une nuit
                      complète de qiyam. Cette facilité encourage les fidèles
                      à persévérer même lorsque la fatigue se fait sentir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Ajouter des prières après
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui veut prier davantage après le tarawih peut le
                      faire en raka&apos;at de deux en deux, sans refaire le
                      witr. Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Il n&apos;y a pas deux witr dans une même
                      nuit&nbsp;&raquo; (Abu Dawud).
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Durant les{" "}
                  <Link href="/doua-10-derniers-jours-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">dix dernières nuits du ramadan</Link>,
                  l&apos;imam prolonge généralement ses récitations et ses
                  invocations du qunut. C&apos;est dans ces nuits bénies que
                  la probabilité de trouver Laylat al-Qadr est la plus forte.
                  Le fidèle qui patiente avec l&apos;imam durant ces nuits
                  intenses cumule les récompenses de manière inestimable.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Invocations complètes */}
              {/* ============================================ */}
              <section id="invocations-tarawih" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations complètes à réciter durant le tarawih
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Pour enrichir votre prière de tarawih, voici un récapitulatif
                  des invocations authentiques à réciter aux différents moments
                  de la prière nocturne. Ces douas sont tirées du Coran et de
                  la Sunna et conviennent parfaitement au contexte du ramadan.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua dans le sujud (prosternation)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La prosternation est le moment où le serviteur est le plus
                  proche de son Seigneur. Le Prophète (paix et salut sur lui)
                  a encouragé de multiplier les invocations dans cette position.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Subhanakal-lahumma Rabbana wa bihamdika Allahumma-ghfir li
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Toi, Seigneur, et louange à Toi. Seigneur, pardonne-moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (794) et Muslim (484)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua après le taslim (salutation finale)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après chaque salutation finale du tarawih, le fidèle peut
                  réciter les adhkar habituels et ajouter cette invocation
                  prophétique qui demande le pardon et la guidée.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma innaka &apos;Afuwwun tuhibbul-&apos;afwa fa&apos;fu &apos;anni
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3513) et Ibn Majah (3850)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua, enseignée par le Prophète (paix et salut sur lui)
                  à &apos;Aisha (qu&apos;Allah l&apos;agrée) pour la nuit du
                  Destin, est particulièrement recommandée tout au long du
                  ramadan. Sa simplicité et sa profondeur en font l&apos;une des
                  invocations les plus aimées des musulmans. Le terme
                  &laquo;&nbsp;&apos;Afuww&nbsp;&raquo; désigne Celui qui
                  efface complètement les péchés, comme s&apos;ils
                  n&apos;avaient jamais existé.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour clôturer la nuit de tarawih
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après avoir terminé l&apos;ensemble de la prière de tarawih
                  et du witr, le fidèle peut conclure sa nuit d&apos;adoration
                  par cette invocation complète.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;alukal-jannata wa a&apos;udhu bika minan-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le Paradis et je cherche refuge auprès de Toi contre le Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (792), authentifié par al-Albani
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La régularité prime sur la quantité :</strong>{" "}
                      réciter quelques douas avec présence du coeur est plus
                      bénéfique que de multiplier les formules sans
                      concentration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Varier les invocations :</strong> alterner entre
                      les différentes douas prophétiques enrichit la prière et
                      maintient la concentration du coeur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer pour la Oumma :</strong> le tarawih est
                      un moment privilégié pour invoquer en faveur de la
                      communauté musulmane, des malades, des opprimés et de
                      tous ceux qui souffrent à travers le monde.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du witr en islam"
                  description="Découvrez toutes les invocations du witr : qunut, doua avant et après le witr, et les différentes formules prophétiques."
                  href="/doua-witr-islam"
                />
              </section>

              {/* ============================================ */}
              {/* AFFILIATE FORM + FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations du tarawih"
                description="Maîtrisez la langue du Coran pour réciter les douas du tarawih et du qunut avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne - maillage */}
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
                    href="/doua-ramadan-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du ramadan
                  </Link>
                  <Link
                    href="/doua-10-derniers-jours-ramadan-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua des 10 derniers jours du ramadan
                  </Link>
                  <Link
                    href="/doua-witr-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du witr
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
