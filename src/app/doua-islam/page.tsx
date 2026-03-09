import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";
import { publishSchedule, isPublished } from "@/data/publishSchedule";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Doua en islam : les invocations authentiques du Coran et de la Sunna",
  description:
    "Découvrez les douâs (invocations) authentiques en islam : conditions d'exaucement, moments privilégiés, invocations du quotidien, de protection, d'épreuves et d'adoration. Textes en arabe, traduction et phonétique.",
  openGraph: {
    title:
      "Doua en islam : les invocations authentiques du Coran et de la Sunna",
    description:
      "Découvrez les douâs (invocations) authentiques en islam : conditions d'exaucement, moments privilégiés, invocations du quotidien, de protection, d'épreuves et d'adoration.",
    url: "https://www.islamreligion.fr/doua-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-islam",
  },
};

const tocItems = [
  { id: "definition", label: "Qu'est-ce qu'une doua ?" },
  { id: "conditions", label: "Conditions d'exaucement" },
  { id: "moments", label: "Moments où la doua est exaucée" },
  { id: "douas-quotidien", label: "Douas du quotidien" },
  { id: "catalogue", label: "Toutes les douas par thème" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qu'est-ce qu'une doua en islam ?",
    answer:
      "La doua (du'â, دعاء) est l'invocation adressée à Allah. C'est un acte d'adoration fondamental en islam : le croyant demande à son Créateur aide, pardon, protection ou guidance. Le Prophète ﷺ a dit : « La doua est l'adoration » (rapporté par at-Tirmidhi). Elle peut être faite en arabe ou dans toute autre langue, à tout moment et en tout lieu.",
  },
  {
    question: "Peut-on faire une doua en français ?",
    answer:
      "Oui, la doua peut être faite dans n'importe quelle langue. Allah comprend toutes les langues et l'essentiel est la sincérité du cœur. Cependant, les savants recommandent d'apprendre les invocations prophétiques en arabe car elles ont été enseignées par le Prophète ﷺ avec des mots choisis. Pour les douas personnelles (demandes libres), le français ou toute autre langue est parfaitement valide.",
  },
  {
    question: "Quels sont les meilleurs moments pour faire une doua ?",
    answer:
      "Les moments les plus propices sont : le dernier tiers de la nuit, entre l'adhan et l'iqama, pendant la prosternation (sujud), le vendredi après-midi (dernière heure avant le maghrib), le jour d'Arafat, pendant le Ramadan, lors de la pluie, et en voyage. Le Prophète ﷺ a indiqué que la doua de ces moments est rarement rejetée.",
  },
  {
    question: "Combien de fois faut-il répéter une doua ?",
    answer:
      "Le Prophète ﷺ avait l'habitude de répéter ses invocations trois fois. Mais il n'y a pas de nombre obligatoire : on peut répéter une doua autant de fois qu'on le souhaite, avec insistance et persévérance. Le hadith enseigne qu'Allah aime que Son serviteur insiste dans ses demandes.",
  },
  {
    question: "La doua est-elle toujours exaucée ?",
    answer:
      "Selon le hadith rapporté par at-Tirmidhi, toute doua du musulman est exaucée de l'une des trois manières : soit Allah lui accorde ce qu'il demande, soit Il éloigne de lui un mal équivalent, soit Il lui réserve la récompense pour l'au-delà. Le Prophète ﷺ a dit : « Aucune doua n'est perdue. »",
  },
  {
    question: "Quelles sont les conditions pour qu'une doua soit acceptée ?",
    answer:
      "Les principales conditions sont : la sincérité (ikhlas), la certitude qu'Allah répondra, la nourriture licite (halal), ne pas invoquer pour quelque chose d'illicite, être concentré et présent de cœur, louer Allah et prier sur le Prophète ﷺ avant et après l'invocation, et ne pas se précipiter (ne pas dire « j'ai invoqué mais rien ne s'est passé »).",
  },
  {
    question: "Faut-il lever les mains pour faire une doua ?",
    answer:
      "Lever les mains est une sunna lors de l'invocation. Le Prophète ﷺ a dit : « Votre Seigneur est Pudique et Généreux. Il a honte, lorsque Son serviteur lève les mains vers Lui, de les laisser vides » (rapporté par Abu Dawud). On lève les mains paumes vers le ciel, puis on passe les mains sur le visage à la fin selon certains savants.",
  },
  {
    question: "Quelle est la différence entre doua et dhikr ?",
    answer:
      "Le dhikr (ذكر) est le rappel d'Allah par des formules spécifiques (SubhanAllah, Alhamdulillah, Allahu Akbar, etc.). La doua (دعاء) est une demande personnelle adressée à Allah. Les deux sont des actes d'adoration, mais le dhikr est un rappel et une glorification, tandis que la doua est une supplication. Ils se complètent : le dhikr prépare le cœur à la doua.",
  },
];

export default function DouaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.islamreligion.fr/doua-islam/#webpage",
        url: "https://www.islamreligion.fr/doua-islam",
        name: "Doua en islam : les invocations authentiques du Coran et de la Sunna",
        description:
          "Découvrez les douâs (invocations) authentiques en islam : conditions d'exaucement, moments privilégiés, invocations par thème.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
        breadcrumb: {
          "@id": "https://www.islamreligion.fr/doua-islam/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/doua-islam/#breadcrumb",
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
          title="Doua en islam : les invocations authentiques du Coran et de la Sunna"
          subtitle="Les invocations prophétiques pour chaque moment de la vie : protection, guérison, épreuves, voyage, prière et bien plus. Textes en arabe, traduction française et phonétique."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation (doua) avec lumière divine, symbolisant la supplication en islam"
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
                <span className="text-foreground">Doua en islam</span>
              </nav>

              {/* ============================================ */}
              {/* INTRODUCTION */}
              {/* ============================================ */}
              <p className="text-lg leading-relaxed text-foreground">
                La <strong>doua</strong> (دعاء, <em>du&apos;â</em>) est
                l&apos;invocation par laquelle le musulman s&apos;adresse
                directement à Allah pour Lui demander aide, pardon, protection
                ou guidance. C&apos;est l&apos;un des actes d&apos;adoration les
                plus nobles en{" "}
                <Link
                  href="/"
                  className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                >
                  islam
                </Link>
                . Le Coran et la Sunna regorgent d&apos;invocations pour chaque
                circonstance de la vie : le réveil, le coucher, le repas, le
                voyage, la maladie, les épreuves et les moments de joie.
              </p>

              <p className="mt-4 leading-relaxed text-foreground">
                Cette page rassemble les fondements de la doua selon les sources
                authentiques, les conditions pour qu&apos;elle soit exaucée, les
                moments privilégiés, et un catalogue thématique de toutes les
                invocations avec leurs textes en arabe, phonétique et traduction
                française.
              </p>

              {/* ============================================ */}
              {/* SECTION 1 : Définition et place de la doua */}
              {/* ============================================ */}
              <section id="definition" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce qu&apos;une doua en islam ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mot <em>du&apos;â</em> (دعاء) vient de la racine arabe
                  &laquo;&nbsp;da&apos;a&nbsp;&raquo; qui signifie
                  &laquo;&nbsp;appeler, invoquer&nbsp;&raquo;. En islam, la doua
                  est l&apos;acte par lequel le serviteur se tourne vers son
                  Seigneur pour exprimer un besoin, un remerciement ou une
                  demande de pardon. Elle se distingue du dhikr (rappel
                  d&apos;Allah) et de la salat (prière rituelle), bien que ces
                  trois pratiques se complètent.
                </p>

                <HadithCard
                  arabic="الدُّعَاءُ هُوَ الْعِبَادَةُ"
                  text="La doua (l'invocation), c'est l'adoration."
                  source="Hadith rapporté par at-Tirmidhi — Le Prophète ﷺ place la doua au rang même de l'adoration."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah Lui-même invite Ses serviteurs à L&apos;invoquer dans le
                  Coran :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Et votre Seigneur a dit : Invoquez-Moi, Je vous
                    répondrai.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Ghafir (40:60)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La doua n&apos;est pas un simple souhait : c&apos;est un lien
                  direct entre le croyant et son Créateur, sans intermédiaire.
                  Elle peut être formulée en arabe ou dans n&apos;importe quelle
                  langue, à tout moment et en tout lieu. Le Prophète ﷺ faisait
                  des invocations dans chaque situation de sa vie quotidienne, et
                  les a enseignées à sa communauté.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Deux types de doua",
                      desc: "La doua de demande (du'â al-mas'ala) où l'on demande un bienfait, et la doua d'adoration (du'â al-'ibada) qui englobe tout acte de rapprochement vers Allah.",
                    },
                    {
                      title: "Accessible à tous",
                      desc: "Pas besoin de lieu spécial, d'état de pureté rituelle ou de formule complexe. La sincérité du cœur suffit pour invoquer Allah.",
                    },
                    {
                      title: "En toute circonstance",
                      desc: "Debout, assis, couché, en marchant, en voyage, en état de joie ou de détresse. La doua est valide dans toutes les situations.",
                    },
                    {
                      title: "Toujours exaucée",
                      desc: "Le Prophète ﷺ a enseigné que toute doua sincère est exaucée : soit immédiatement, soit en éloignant un mal, soit en réservant la récompense pour l'au-delà.",
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
              {/* SECTION 2 : Conditions d'exaucement */}
              {/* ============================================ */}
              <section id="conditions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les conditions pour qu&apos;une doua soit exaucée
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Toute doua est entendue par Allah, mais certaines conditions
                  augmentent les chances d&apos;exaucement. Les savants les ont
                  extraites du Coran et des hadiths authentiques.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      num: "1",
                      title: "La sincérité (al-ikhlas)",
                      desc: "Invoquer Allah seul, sans associé, avec un cœur pur et une intention sincère. Ne pas invoquer pour montrer aux autres.",
                    },
                    {
                      num: "2",
                      title: "La certitude de la réponse (al-yaqin)",
                      desc: "Être convaincu qu'Allah entend et qu'Il répondra. Le Prophète ﷺ a dit : « Invoquez Allah en étant certains d'être exaucés. » (at-Tirmidhi)",
                    },
                    {
                      num: "3",
                      title: "La présence du cœur (hudur al-qalb)",
                      desc: "Être concentré pendant l'invocation, pas distrait. Une doua récitée mécaniquement, sans conscience, est moins susceptible d'être acceptée.",
                    },
                    {
                      num: "4",
                      title: "La nourriture licite (al-halal)",
                      desc: "Le Prophète ﷺ a mentionné l'homme qui invoque alors que sa nourriture, sa boisson et ses vêtements proviennent du haram. « Comment serait-il exaucé ? » (Muslim)",
                    },
                    {
                      num: "5",
                      title: "Ne pas demander l'illicite",
                      desc: "Ne pas invoquer pour nuire à autrui injustement ni demander quelque chose d'interdit par la loi islamique.",
                    },
                    {
                      num: "6",
                      title: "La patience (ne pas se précipiter)",
                      desc: "Le Prophète ﷺ a dit : « L'invocation de l'un d'entre vous est exaucée tant qu'il ne se précipite pas en disant : J'ai invoqué mais je n'ai pas été exaucé. » (al-Bukhari et Muslim)",
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="flex items-start gap-4 rounded-lg border-l-4 border-secondary bg-accent px-5 py-4"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-semibold text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <HadithCard
                  arabic="ادْعُوا اللَّهَ وَأَنْتُمْ مُوقِنُونَ بِالإِجَابَةِ"
                  text="Invoquez Allah en étant certains de la réponse. Sachez qu'Allah n'exauce pas une invocation venant d'un cœur distrait et insouciant."
                  source="Hadith rapporté par at-Tirmidhi"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos invocations en lisant le Coran en arabe"
                description="Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Moments privilégiés */}
              {/* ============================================ */}
              <section id="moments" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les moments où la doua est exaucée
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Certains moments sont plus propices à l&apos;exaucement de la
                  doua. Le Prophète ﷺ les a indiqués dans de nombreux hadiths.
                  Connaître ces moments permet au croyant de maximiser ses
                  chances d&apos;être entendu.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Le dernier tiers de la nuit",
                      desc: "Allah descend au ciel le plus bas et dit : « Qui M'invoque pour que Je lui réponde ? Qui Me demande pour que Je lui donne ? » (al-Bukhari et Muslim)",
                    },
                    {
                      title: "Entre l'adhan et l'iqama",
                      desc: "« La doua entre l'adhan et l'iqama n'est pas rejetée. » (at-Tirmidhi)",
                    },
                    {
                      title: "Pendant la prosternation (sujud)",
                      desc: "« Le moment où le serviteur est le plus proche de son Seigneur, c'est lorsqu'il est en prosternation. Multipliez-y les invocations. » (Muslim)",
                    },
                    {
                      title: "Le vendredi (dernière heure)",
                      desc: "Il y a un moment le vendredi où toute doua est exaucée. Les savants situent ce moment dans la dernière heure avant le maghrib.",
                    },
                    {
                      title: "Le jour d'Arafat",
                      desc: "« La meilleure doua est celle du jour d'Arafat. » (at-Tirmidhi). C'est le moment le plus puissant de l'année.",
                    },
                    {
                      title: "Pendant la pluie",
                      desc: "« Deux douas ne sont pas rejetées : la doua au moment de l'appel à la prière et la doua sous la pluie. » (al-Hakim)",
                    },
                    {
                      title: "En voyage",
                      desc: "« Trois douas ne sont pas rejetées : la doua du voyageur, la doua de l'opprimé et la doua du parent pour son enfant. » (at-Tirmidhi)",
                    },
                    {
                      title: "Pendant le Ramadan et la nuit du Destin",
                      desc: "Le mois de Ramadan tout entier est un moment béni pour les invocations, en particulier la nuit du Destin (Laylat al-Qadr) dans les 10 dernières nuits.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas essentielles du quotidien */}
              {/* ============================================ */}
              <section id="douas-quotidien" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas essentielles du quotidien
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète ﷺ a enseigné des invocations pour chaque moment
                  de la journée. Voici les plus importantes, tirées des recueils
                  authentiques. Chaque invocation est donnée en arabe,
                  phonétique et traduction française.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en doua avec rayons dorés, symbolisant l'invocation en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Au réveil
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا
                    أَمَاتَنَا وَإِلَيْهِ النُّشُورُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdu lillahi alladhi
                    ahyana ba&apos;da ma amatana wa ilayhi an-nushur
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui nous a rendu la vie après
                    nous avoir fait mourir, et c&apos;est vers Lui la
                    résurrection.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Avant de dormir
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismika Allahumma amutu wa
                    ahya
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;En Ton nom, ô Allah, je meurs et je
                    vis.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari — Le sommeil est comparé à une
                    petite mort.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  En sortant de la maison
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ
                    وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi tawakkaltu &apos;ala
                    Allahi wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, je place ma confiance en
                    Allah. Il n&apos;y a de force et de puissance qu&apos;en
                    Allah.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi — On dit alors au croyant :
                    &laquo;&nbsp;Tu es guidé, tu es protégé.&nbsp;&raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Avant de manger
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim — Si l&apos;on oublie au début, dire :
                    &laquo;&nbsp;Bismillahi fi awwalihi wa
                    akhirihi&nbsp;&raquo;.
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Après avoir mangé
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ
                    مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdu lillahi alladhi
                    at&apos;amani hadha wa razaqanihi min ghayri hawlin minni wa
                    la quwwa
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui m&apos;a nourri de cela et
                    me l&apos;a accordé sans effort ni force de ma
                    part.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi — Ses péchés antérieurs sont
                    pardonnés.
                  </p>
                </div>
              </section>

              <div className="mt-6 overflow-hidden rounded-xl">
                <Image
                  src="/images/doua-mains-rayons-motifs-islamiques.jpg"
                  alt="Mains en prière avec motifs islamiques, symbolisant la doua et l'invocation"
                  width={1200}
                  height={720}
                  className="w-full object-cover"
                />
              </div>

              {/* ============================================ */}
              {/* SECTION 5 : Catalogue par thème */}
              {/* ============================================ */}
              <section id="catalogue" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Toutes les douas par thème
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Retrouvez ci-dessous toutes nos invocations classées par
                  catégorie. Chaque article contient le texte arabe, la
                  phonétique, la traduction française et les hadiths sources.
                </p>

                {/* Douas du quotidien */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Douas du quotidien
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {publishSchedule
                    .filter(
                      (a) =>
                        a.category === "doua-quotidien" &&
                        isPublished(a.publishDate)
                    )
                    .map((a) => (
                      <Link
                        key={a.slug}
                        href={`/${a.slug}`}
                        className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary">
                          {a.label}
                        </span>
                      </Link>
                    ))}
                </div>

                {/* Douas d'épreuves et difficultés */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Douas pour les épreuves et les difficultés
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {publishSchedule
                    .filter(
                      (a) =>
                        a.category === "doua-epreuves" &&
                        isPublished(a.publishDate)
                    )
                    .map((a) => (
                    <Link
                      key={a.slug}
                      href={`/${a.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary">
                        {a.label}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Douas d'adoration */}
                {(() => {
                  const adorationItems = publishSchedule.filter(
                    (a) =>
                      a.category === "doua-adoration" &&
                      isPublished(a.publishDate)
                  );
                  return adorationItems.length > 0 ? (
                    <>
                      <h3 className="mt-10 text-xl font-semibold text-primary">
                        Douas liées à l&apos;adoration
                      </h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {adorationItems.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/${a.slug}`}
                            className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </span>
                            <span className="text-sm font-medium text-foreground group-hover:text-primary">
                              {a.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : null;
                })()}

                {/* Douas de protection */}
                {(() => {
                  const protectionItems = publishSchedule.filter(
                    (a) =>
                      a.category === "doua-protection" &&
                      isPublished(a.publishDate)
                  );
                  return protectionItems.length > 0 ? (
                    <>
                      <h3 className="mt-10 text-xl font-semibold text-primary">
                        Douas de protection
                      </h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {protectionItems.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/${a.slug}`}
                            className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </span>
                            <span className="text-sm font-medium text-foreground group-hover:text-primary">
                              {a.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : null;
                })()}

                {/* Douas par occasion */}
                {(() => {
                  const occasionItems = publishSchedule.filter(
                    (a) =>
                      a.category === "doua-occasions" &&
                      isPublished(a.publishDate)
                  );
                  return occasionItems.length > 0 ? (
                    <>
                      <h3 className="mt-10 text-xl font-semibold text-primary">
                        Douas par occasion
                      </h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {occasionItems.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/${a.slug}`}
                            className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                              </svg>
                            </span>
                            <span className="text-sm font-medium text-foreground group-hover:text-primary">
                              {a.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : null;
                })()}
              </section>

              {/* ============================================ */}
              {/* CTA + FAQ */}
              {/* ============================================ */}
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
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection spirituelle
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Les rêves en islam
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
