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
    "Doua du soir (adhkar) : les invocations authentiques avant la nuit",
  description:
    "Découvrez les doua du soir (adhkar al-massa) en islam : invocations authentiques en arabe avec phonétique et traduction, ayat al-kursi, sourates protectrices, hadiths et bienfaits spirituels des adhkar quotidiens.",
  openGraph: {
    title:
      "Doua du soir (adhkar) : les invocations authentiques avant la nuit",
    description:
      "Les adhkar du soir en islam : invocations prophétiques en arabe, phonétique et traduction française. Protégez-vous chaque soir avec les douas authentiques.",
    url: "https://www.islamreligion.fr/doua-soir-adhkar-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-soir-adhkar-islam",
  },
};

const tocItems = [
  { id: "importance-adhkar-soir", label: "L'importance des adhkar du soir" },
  { id: "moment-recitation", label: "Quand réciter les douas du soir" },
  { id: "ayat-al-kursi", label: "Ayat al-Kursi : la protection suprême" },
  { id: "sourates-protectrices", label: "Les sourates protectrices (Al-Ikhlas, Al-Falaq, An-Nas)" },
  { id: "invocations-prophetiques", label: "Les invocations prophétiques du soir" },
  { id: "bienfaits-adhkar", label: "Les bienfaits des adhkar du soir" },
  { id: "conseils-pratiques", label: "Conseils pour une pratique régulière" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua du soir la plus importante en islam ?",
    answer:
      "Ayat al-Kursi (Coran 2:255) est considéré comme l&apos;adhkar du soir le plus important. Le Prophète (paix et salut sur lui) a enseigné que celui qui le récite le soir est protégé par Allah jusqu&apos;au matin. Les trois sourates protectrices (Al-Ikhlas, Al-Falaq et An-Nas), récitées trois fois chacune, complètent cette protection divine.",
  },
  {
    question: "À quel moment faut-il réciter les adhkar du soir ?",
    answer:
      "Les savants s&apos;accordent à dire que le meilleur moment pour réciter les adhkar du soir se situe entre la prière d&apos;Al-Asr et le coucher du soleil (maghrib). Certains savants comme Ibn Baz estiment que le temps s&apos;étend jusqu&apos;au premier tiers de la nuit. L&apos;essentiel est de les réciter quotidiennement, même si l&apos;horaire idéal est dépassé.",
  },
  {
    question: "Combien de temps prend la récitation des adhkar du soir ?",
    answer:
      "La récitation complète des adhkar du soir prend environ 10 à 15 minutes. Cependant, même réciter les invocations essentielles (Ayat al-Kursi, les trois sourates protectrices et quelques formules de dhikr) en 5 minutes apporte une protection considérable. La régularité prime sur la quantité.",
  },
  {
    question: "Peut-on réciter les douas du soir en français ?",
    answer:
      "Il est préférable de réciter les adhkar du soir en arabe, car c&apos;est la langue dans laquelle ils ont été révélés et transmis. Cependant, les savants autorisent celui qui ne maîtrise pas encore l&apos;arabe à comprendre le sens en français tout en s&apos;efforçant d&apos;apprendre progressivement la prononciation arabe. La phonétique facilite cet apprentissage.",
  },
  {
    question: "Quels sont les bienfaits des adhkar du soir ?",
    answer:
      "Les bienfaits des adhkar du soir sont nombreux : protection contre le mal, les djinns et le mauvais oeil durant la nuit, apaisement du coeur et de l&apos;esprit, expiation des péchés, augmentation des bonnes actions et renforcement du lien avec Allah. Le Prophète (paix et salut sur lui) n&apos;a jamais délaissé ces invocations.",
  },
  {
    question: "Faut-il être en état de pureté pour réciter les adhkar du soir ?",
    answer:
      "Les adhkar du soir peuvent être récités sans ablution (wudu), car il s&apos;agit de dhikr (évocation d&apos;Allah) et non de prière rituelle. Cependant, être en état de pureté rituelle est recommandé car cela augmente la récompense et la concentration spirituelle. Il est aussi permis de les réciter dans n&apos;importe quelle position : assis, debout ou allongé.",
  },
  {
    question: "Quelle est la différence entre les adhkar du matin et du soir ?",
    answer:
      "La plupart des adhkar du matin et du soir sont identiques dans leur formulation. La différence réside principalement dans le moment de récitation et dans certaines expressions spécifiques : on dit « amsayna » (nous voilà au soir) le soir au lieu de « assbahna » (nous voilà au matin). Les sourates protectrices et Ayat al-Kursi se récitent de la même manière matin et soir.",
  },
];

export default function DouaSoirAdhkarIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-soir-adhkar-islam/#article",
        headline:
          "Doua du soir (adhkar) : les invocations authentiques avant la nuit",
        description:
          "Découvrez les doua du soir (adhkar al-massa) en islam : invocations authentiques en arabe avec phonétique et traduction, sourates protectrices et bienfaits spirituels.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-03-16",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-soir-adhkar-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-soir-adhkar-islam/#breadcrumb",
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
            name: "Doua du soir (adhkar)",
            item: "https://www.islamreligion.fr/doua-soir-adhkar-islam",
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
          title="Doua du soir (adhkar) : les invocations authentiques avant la nuit"
          subtitle="Les adhkar du soir tirés du Coran et de la Sunna. Textes en arabe, phonétique et traduction française pour protéger votre nuit et renforcer votre foi."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains en invocation doua du soir avec lumière subtile symbolisant les adhkar en islam"
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
                <span className="text-foreground">Doua du soir (adhkar)</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les adhkar du soir (أذكار المساء) sont des invocations
                  prophétiques que le musulman récite chaque jour entre la
                  prière d&apos;Al-Asr et le coucher du soleil. Ils constituent
                  un bouclier spirituel contre le mal, les djinns et le mauvais
                  oeil durant la nuit. Le Prophète (paix et salut sur lui) ne
                  les délaissait jamais et a enseigné que celui qui les récite
                  est placé sous la protection d&apos;Allah jusqu&apos;au matin.
                  Ayat al-Kursi, les trois sourates protectrices et les formules
                  de dhikr forment le coeur de cette pratique quotidienne
                  essentielle.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance des adhkar du soir */}
              {/* ============================================ */}
              <section id="importance-adhkar-soir" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des adhkar du soir en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les <strong>adhkar du soir</strong> (أذكار المساء) occupent
                  une place fondamentale dans la vie quotidienne du musulman.
                  Le terme &laquo;&nbsp;adhkar&nbsp;&raquo; (pluriel de dhikr)
                  désigne les formules d&apos;évocation et de rappel d&apos;Allah
                  que le croyant récite à des moments précis de la journée.
                  Ces invocations ne sont pas de simples paroles rituelles :
                  elles constituent un véritable bouclier spirituel qui protège
                  le musulman contre les épreuves, les tentations et les maux
                  visibles et invisibles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Ceux qui croient et
                  dont les coeurs se tranquillisent au rappel d&apos;Allah.
                  N&apos;est-ce point par le rappel d&apos;Allah que les coeurs
                  se tranquillisent&nbsp;?&nbsp;&raquo; (Ar-Ra&apos;d, 13:28).
                  Ce verset illustre la dimension apaisante du dhikr : les
                  adhkar du soir permettent au croyant de clore sa journée dans
                  la sérénité, en confiant sa nuit et son repos à la protection
                  divine.
                </p>

                <HadithCard
                  arabic="من قال حين يمسي: بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم، ثلاث مرات، لم تصبه فجأة بلاء حتى يصبح"
                  text="Celui qui dit le soir : 'Au nom d'Allah, avec le nom de Qui rien sur terre ni dans le ciel ne peut nuire, et Il est l'Audient, l'Omniscient', trois fois, ne sera touché par aucun malheur soudain jusqu'au matin."
                  source="Rapporté par Abu Dawud (5088) et at-Tirmidhi (3388)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith met en lumière la puissance protectrice des
                  adhkar du soir. Le Prophète (paix et salut sur lui) a
                  explicitement lié la récitation de ces invocations à une
                  protection concrète contre les malheurs et les épreuves
                  nocturnes. Cette protection n&apos;est pas symbolique :
                  elle est réelle et garantie par la parole prophétique pour
                  quiconque s&apos;y attache avec régularité et sincérité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection spirituelle :</strong>{" "}
                      les adhkar du soir forment une barrière contre les djinns,
                      le mauvais oeil et les maux nocturnes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Apaisement du coeur :</strong>{" "}
                      le dhikr apporte une tranquillité intérieure qui facilite
                      un sommeil serein et réparateur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Expiation des péchés :</strong>{" "}
                      certaines formules d&apos;adhkar permettent d&apos;effacer
                      les péchés mineurs commis durant la journée, comme
                      l&apos;a enseigné le Prophète (paix et salut sur lui).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-chapelet-tasbih-islam-livre-sacre.jpg"
                    alt="Coran ouvert avec chapelet tasbih pour les adhkar du soir en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Quand réciter */}
              {/* ============================================ */}
              <section id="moment-recitation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand réciter les douas du soir (le moment idéal)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La question du moment précis pour réciter les adhkar du soir
                  est un sujet que les savants de l&apos;islam ont étudié en
                  détail. La majorité des oulémas s&apos;accordent sur le fait
                  que le temps des adhkar du soir commence après la prière
                  d&apos;Al-Asr et s&apos;étend jusqu&apos;au coucher du
                  soleil (maghrib). Certains savants, comme l&apos;imam Ibn
                  Baz (rahimahullah), considèrent que le temps s&apos;étend
                  jusqu&apos;au premier tiers de la nuit.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mot arabe &laquo;&nbsp;massa&nbsp;&raquo; (المساء), qui
                  signifie &laquo;&nbsp;le soir&nbsp;&raquo;, désigne dans le
                  contexte religieux la période qui suit la prière d&apos;Al-Asr.
                  C&apos;est ce qui distingue les adhkar du soir de ceux du
                  matin (adhkar as-sabah), qui se récitent entre la prière du
                  Fajr et le lever du soleil. Cette organisation temporelle
                  reflète la sagesse islamique qui rythme la journée du croyant
                  par des moments de rappel et d&apos;invocation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de noter que les savants s&apos;accordent
                  sur le fait que réciter les adhkar du soir même après le
                  coucher du soleil reste bénéfique. L&apos;essentiel est la
                  régularité dans la pratique. Le Prophète (paix et salut sur
                  lui) a enseigné que les actes les plus aimés d&apos;Allah sont
                  les plus réguliers, même s&apos;ils sont peu nombreux
                  (al-Bukhari et Muslim). Mieux vaut réciter quelques adhkar
                  chaque soir que de les réciter en entier de manière
                  sporadique.
                </p>

                <HadithCard
                  arabic="أحب الأعمال إلى الله أدومها وإن قل"
                  text="Les actes les plus aimés d'Allah sont les plus réguliers, même s'ils sont peu nombreux."
                  source="Rapporté par al-Bukhari (6464) et Muslim (783)"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Ayat al-Kursi */}
              {/* ============================================ */}
              <section id="ayat-al-kursi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ayat al-Kursi : la doua de protection suprême du soir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ayat al-Kursi (le verset du Trône) est le verset le plus
                  grandiose du Coran selon le Prophète (paix et salut sur lui).
                  Sa récitation chaque soir constitue l&apos;un des piliers des
                  adhkar et offre une protection garantie par la parole
                  prophétique. C&apos;est la première invocation que le musulman
                  devrait réciter dans ses adhkar du soir.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta&apos;khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa&apos;u &apos;indahu illa bi-idhnih, ya&apos;lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi-shay&apos;in min &apos;ilmihi illa bima sha&apos;a, wasi&apos;a kursiyyuhus-samawati wal-ard, wa la ya&apos;uduhu hifdhuhuma, wa Huwal-&apos;Aliyyul-&apos;Adhim
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et de Sa science, ils n&apos;embrassent que ce qu&apos;Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:255)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  récite Ayat al-Kursi le soir ne cesse d&apos;être sous la
                  protection d&apos;Allah et aucun diable ne peut
                  l&apos;approcher jusqu&apos;au matin. Ce hadith, rapporté par
                  al-Bukhari, confère à ce verset un statut unique parmi toutes
                  les invocations du soir. Les savants recommandent de le
                  réciter avec concentration et compréhension du sens, car la
                  présence du coeur renforce l&apos;effet protecteur de cette
                  récitation.
                </p>

                <HadithCard
                  arabic="من قرأ آية الكرسي في ليلة لم يزل عليه من الله حافظ ولا يقربه شيطان حتى يصبح"
                  text="Celui qui récite Ayat al-Kursi le soir ne cesse d'avoir un protecteur de la part d'Allah, et aucun diable ne peut l'approcher jusqu'au matin."
                  source="Rapporté par al-Bukhari (5010)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Sourates protectrices */}
              {/* ============================================ */}
              <section id="sourates-protectrices" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sourates protectrices : Al-Ikhlas, Al-Falaq et An-Nas
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les trois dernières sourates du Coran forment un ensemble
                  appelé &laquo;&nbsp;Al-Mu&apos;awwidhat&nbsp;&raquo;
                  (les protectrices). Le Prophète (paix et salut sur lui)
                  les récitait chaque soir trois fois et soufflait dans ses
                  mains avant de les passer sur son corps. Cette pratique est
                  l&apos;une des sunnas les plus authentiques concernant les
                  adhkar du soir.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Sourate Al-Ikhlas (Le Monothéisme Pur)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Qul HuwAllahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Dis : Il est Allah, Unique. Allah, Le Seul à être imploré pour ce que nous désirons. Il n&apos;a jamais engendré, n&apos;a pas été engendré non plus. Et nul n&apos;est égal à Lui.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Ikhlas (112:1-4) - A réciter 3 fois
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Sourate Al-Falaq (L&apos;Aube Naissante)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Qul a&apos;udhu bi-Rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-&apos;uqad. Wa min sharri hasidin idha hasad.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Dis : Je cherche protection auprès du Seigneur de l&apos;aube naissante, contre le mal des êtres qu&apos;Il a créés, contre le mal de l&apos;obscurité quand elle s&apos;approfondit, contre le mal de celles qui soufflent sur les noeuds, et contre le mal de l&apos;envieux quand il envie.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Falaq (113:1-5) - A réciter 3 fois
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Sourate An-Nas (Les Hommes)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Qul a&apos;udhu bi-Rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Dis : Je cherche protection auprès du Seigneur des hommes, le Souverain des hommes, Dieu des hommes, contre le mal du mauvais conseiller, furtif, qui souffle le mal dans les poitrines des hommes, qu&apos;il soit parmi les djinns ou les hommes.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate An-Nas (114:1-6) - A réciter 3 fois
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La pratique prophétique consistait à réunir les paumes des
                  mains, à y souffler légèrement après avoir récité ces trois
                  sourates, puis à passer les mains sur le visage et le corps
                  entier, en commençant par la tête. &Apos;Aicha (qu&apos;Allah
                  soit satisfait d&apos;elle) a rapporté que le Prophète (paix
                  et salut sur lui) faisait cela chaque nuit sans exception
                  (al-Bukhari et Muslim). Cette sunna allie la parole protectrice
                  au geste physique, enveloppant le corps entier dans la
                  protection divine.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains ouvertes en prière pour les invocations du soir et les adhkar en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Invocations prophétiques */}
              {/* ============================================ */}
              <section id="invocations-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les invocations prophétiques du soir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus d&apos;Ayat al-Kursi et des sourates protectrices,
                  le Prophète (paix et salut sur lui) a enseigné plusieurs
                  invocations spécifiques à réciter chaque soir. Ces douas
                  couvrent différents aspects de la protection et du rappel
                  d&apos;Allah. Voici les plus importantes tirées des
                  recueils authentiques.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Invocation du soir pour se remettre à Allah
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Amsayna wa amsal-mulku lillah, wal-hamdu lillah, la ilaha illAllahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa &apos;ala kulli shay&apos;in qadir
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Nous voilà au soir et le royaume appartient à Allah. Louange à Allah. Il n&apos;y a de divinité qu&apos;Allah Seul, sans associé. A Lui le royaume, à Lui la louange et Il est capable de toute chose.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2723)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de protection et de satisfaction
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Raditu billahi Rabban, wa bil-Islami dinan, wa bi-Muhammadin sallAllahu &apos;alayhi wa sallama nabiyyan
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;J&apos;ai agréé Allah comme Seigneur, l&apos;islam comme religion et Muhammad (paix et salut sur lui) comme prophète.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5072) et at-Tirmidhi (3389) - A réciter 3 fois
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  récite cette invocation trois fois le soir, Allah se charge de
                  le satisfaire au Jour de la Résurrection. Cette doua renouvelle
                  l&apos;engagement du croyant envers sa foi et son Seigneur
                  à chaque fin de journée.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Le sayyid al-istighfar (maître de la demande de pardon)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Parmi les adhkar du soir les plus importants figure le sayyid
                  al-istighfar, la plus noble des formules de demande de pardon.
                  Le Prophète (paix et salut sur lui) a promis une récompense
                  exceptionnelle à celui qui la récite le soir avec conviction.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana &apos;abduka, wa ana &apos;ala &apos;ahdika wa wa&apos;dika mastata&apos;tu, a&apos;udhu bika min sharri ma sana&apos;tu, abu&apos;u laka bi-ni&apos;matika &apos;alayya, wa abu&apos;u bi-dhanbi, faghfir li fa-innahu la yaghfirudh-dhunuba illa Anta
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Seigneur, Tu es mon Seigneur, il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je suis fidèle à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j&apos;ai commis. Je reconnais Ton bienfait envers moi et je reconnais mon péché. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit au sujet de cette
                  invocation : &laquo;&nbsp;Quiconque la récite le soir avec
                  conviction et meurt dans la nuit entrera au
                  Paradis&nbsp;&raquo; (al-Bukhari). Cette promesse
                  extraordinaire montre l&apos;importance que l&apos;islam
                  accorde à la demande de pardon quotidienne et à la
                  réconciliation avec Allah avant le sommeil. Pour approfondir
                  les <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Bienfaits */}
              {/* ============================================ */}
              <section id="bienfaits-adhkar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les bienfaits des adhkar du soir sur le croyant
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les bienfaits des adhkar du soir dépassent la simple dimension
                  rituelle. Ils agissent sur le plan spirituel, psychologique et
                  même physique du croyant. Les savants de l&apos;islam, à
                  commencer par Ibn al-Qayyim dans son ouvrage
                  &laquo;&nbsp;Al-Wabil as-Sayyib&nbsp;&raquo;, ont
                  longuement détaillé les effets du dhikr sur l&apos;individu.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Protection contre le mal
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les adhkar du soir créent une barrière protectrice contre
                      les djinns, le mauvais oeil, la sorcellerie et tout mal
                      nocturne. Le Prophète (paix et salut sur lui) a garanti
                      cette protection à celui qui s&apos;y attache
                      régulièrement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Sérénité et apaisement
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le dhikr apaise le coeur et calme l&apos;anxiété. Le
                      Coran affirme que c&apos;est par le rappel d&apos;Allah
                      que les coeurs trouvent la quiétude. Réciter les adhkar
                      du soir favorise un sommeil paisible et réparateur.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Expiation des péchés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Certaines formules comme le sayyid al-istighfar et le
                      tasbih (SubhanAllah, Alhamdulillah, Allahu Akbar)
                      permettent d&apos;effacer les péchés mineurs et de clore
                      la journée dans un état de pureté spirituelle.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Multiplication des récompenses
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Chaque formule de dhikr est récompensée de manière
                      considérable. Le Prophète (paix et salut sur lui) a
                      enseigné que dire &laquo;&nbsp;SubhanAllahi wa
                      bihamdihi&nbsp;&raquo; 100 fois efface les péchés même
                      s&apos;ils sont aussi nombreux que l&apos;écume de la mer
                      (Muslim).
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ibn al-Qayyim (rahimahullah) a dénombré plus de soixante-dix
                  bienfaits du dhikr dans son ouvrage. Parmi ceux-ci : le dhikr
                  repousse Shaytan, il attire la satisfaction d&apos;Allah, il
                  dissipe les soucis et la tristesse, il apporte la subsistance
                  (rizq), il illumine le visage du croyant et lui confère une
                  dignité et une prestance remarquables. Ces bienfaits se
                  manifestent chez celui qui s&apos;attache aux adhkar avec
                  régularité et présence du coeur, non comme une simple
                  récitation mécanique. Pour approfondir la dimension
                  spirituelle de la prière, découvrez notre article sur{" "}
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prier en islam avec excellence</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour une récitation régulière des douas du soir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La régularité est la clé de l&apos;efficacité des adhkar du
                  soir. Beaucoup de musulmans connaissent l&apos;importance de
                  ces invocations mais peinent à les intégrer dans leur routine
                  quotidienne. Voici des conseils pratiques pour ancrer cette
                  habitude bénie dans votre vie de tous les jours.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Fixer un moment précis après Al-Asr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Associez la récitation des adhkar à un moment fixe de
                        votre journée, idéalement juste après la prière
                        d&apos;Al-Asr. Cette régularité transforme
                        l&apos;invocation en habitude automatique, facilitant
                        sa pratique sur le long terme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Commencer par les invocations essentielles
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ne cherchez pas à tout réciter dès le début. Commencez
                        par Ayat al-Kursi, les trois sourates protectrices et le
                        sayyid al-istighfar. Une fois ces bases acquises, ajoutez
                        progressivement les autres formules de dhikr.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Utiliser un support (livre ou application)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le livre &laquo;&nbsp;Hisn al-Muslim&nbsp;&raquo;
                        (La Citadelle du Musulman) rassemble toutes les
                        invocations authentiques. Avoir ce support à portée de
                        main facilite la récitation et garantit
                        l&apos;authenticité des textes récités.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Comprendre le sens de ce que vous récitez
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter les adhkar avec compréhension décuple leur
                        impact spirituel. Prenez le temps d&apos;apprendre la
                        traduction de chaque invocation. La présence du coeur
                        (hudur al-qalb) est essentielle pour tirer pleinement
                        profit des adhkar du soir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Impliquer sa famille
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter les adhkar du soir en famille renforce les liens
                        et enseigne cette pratique aux enfants dès leur jeune
                        âge. Le foyer qui pratique le dhikr collectif bénéficie
                        d&apos;une atmosphère de sérénité et de protection
                        spirituelle. Les{" "}
                        <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations pour la réussite</Link>{" "}
                        peuvent compléter cette pratique familiale.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La constance avant la quantité :</strong>{" "}
                      mieux vaut réciter quelques adhkar chaque soir sans
                      exception que de tout réciter de manière irrégulière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas se décourager :</strong>{" "}
                      si vous oubliez un soir, reprenez le lendemain sans
                      culpabilité excessive. Le Prophète (paix et salut sur
                      lui) a enseigné qu&apos;Allah aime la facilité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Enseigner aux enfants :</strong>{" "}
                      habituer les enfants aux adhkar du soir dès leur plus
                      jeune âge crée une habitude qui les accompagnera toute
                      leur vie et les protégera in sha Allah.
                    </span>
                  </li>
                </ul>
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
                    href="/doua-matin-adhkar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du matin (adhkar)
                  </Link>
                  <Link
                    href="/doua-avant-dormir-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua avant de dormir
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
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
