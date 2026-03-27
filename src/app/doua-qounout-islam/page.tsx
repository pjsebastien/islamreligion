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
    "Doua du qounout en islam : texte arabe, phonétique et traduction",
  description:
    "Découvrez la doua du qounout en islam : invocation du witr et du nazilah en arabe avec phonétique et traduction française. Quand et comment réciter le qounout, lever les mains et les hadiths authentiques.",
  openGraph: {
    title:
      "Doua du qounout en islam : texte arabe, phonétique et traduction",
    description:
      "La doua du qounout complète : qounout al-witr et qounout an-nazilah en arabe, phonétique et traduction. Guide pratique avec hadiths authentiques.",
    url: "https://www.islamreligion.fr/doua-qounout-islam",
    images: [
      {
        url: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-qounout-islam",
  },
};

const tocItems = [
  { id: "definition-qounout", label: "Qu'est-ce que le qounout en islam" },
  { id: "qounout-witr", label: "Doua du qounout al-witr" },
  { id: "qounout-nazilah", label: "Doua du qounout an-nazilah" },
  { id: "quand-reciter", label: "Quand réciter le qounout" },
  { id: "lever-mains", label: "Comment lever les mains durant le qounout" },
  { id: "douas-supplementaires", label: "Douas supplémentaires du qounout" },
  { id: "erreurs-courantes", label: "Erreurs courantes à éviter" },
];

const faqItems = [
  {
    question: "Qu'est-ce que la doua du qounout en islam ?",
    answer:
      "La doua du qounout est une invocation récitée durant la prière, principalement lors de la prière du witr. Le terme « qounout » signifie obéissance et dévotion envers Allah. L&apos;invocation la plus connue commence par « Allahumma ihdini fiman hadayt » (Seigneur, guide-moi parmi ceux que Tu as guidés). Elle est rapportée dans un hadith authentique enseigné par le Prophète (paix et salut sur lui) à al-Hasan ibn Ali.",
  },
  {
    question: "Quand doit-on réciter le qounout dans la prière du witr ?",
    answer:
      "Le qounout du witr se récite dans la dernière rak&apos;a de la prière du witr, soit avant le ruku&apos; (inclinaison) selon l&apos;avis de la majorité des savants, soit après le ruku&apos; selon d&apos;autres avis. Les deux positions sont acceptées. Le fidèle lève les mains et récite la doua du qounout après avoir terminé la récitation du Coran et avant de s&apos;incliner, ou après s&apos;être relevé de l&apos;inclinaison.",
  },
  {
    question: "Est-il obligatoire de réciter le qounout dans le witr ?",
    answer:
      "Non, le qounout dans la prière du witr n&apos;est pas obligatoire (wajib) selon la majorité des savants. C&apos;est une sunna recommandée (mustahabb). La prière du witr reste valide même sans le qounout. Certains savants hanafites le considèrent comme wajib, mais l&apos;avis majoritaire est qu&apos;il s&apos;agit d&apos;une pratique recommandée que le Prophète (paix et salut sur lui) accomplissait régulièrement.",
  },
  {
    question: "Quelle est la différence entre le qounout al-witr et le qounout an-nazilah ?",
    answer:
      "Le qounout al-witr est l&apos;invocation récitée régulièrement dans la prière du witr, principalement la doua « Allahumma ihdini fiman hadayt ». Le qounout an-nazilah est une invocation exceptionnelle récitée lors de calamités (guerres, épidémies, catastrophes) dans les prières obligatoires, après le ruku&apos; de la dernière rak&apos;a. Le Prophète (paix et salut sur lui) a pratiqué le qounout an-nazilah pendant un mois pour invoquer contre certaines tribus.",
  },
  {
    question: "Peut-on réciter le qounout en français ?",
    answer:
      "Les savants recommandent de réciter la doua du qounout en arabe, surtout les formules prophétiques authentiques. Cependant, selon certains savants comme Ibn Taymiyya, il est permis d&apos;ajouter des invocations personnelles dans sa propre langue après avoir récité la formule en arabe. Pour celui qui ne maîtrise pas encore l&apos;arabe, faire la doua en français est toléré le temps d&apos;apprendre le texte arabe.",
  },
  {
    question: "Faut-il lever les mains pendant le qounout ?",
    answer:
      "Oui, il est recommandé (sunna) de lever les mains pendant la récitation du qounout. Les paumes sont tournées vers le ciel, à hauteur de la poitrine ou des épaules. Cette pratique est rapportée de plusieurs compagnons du Prophète (paix et salut sur lui). Certains savants précisent qu&apos;il ne faut pas passer les mains sur le visage après le qounout dans la prière, contrairement à la doua en dehors de la prière.",
  },
  {
    question: "Le qounout se récite-t-il toutes les nuits ou seulement pendant le Ramadan ?",
    answer:
      "Le qounout du witr peut être récité toute l&apos;année, pas uniquement pendant le Ramadan. Le Prophète (paix et salut sur lui) priait le witr régulièrement. Cependant, certains savants recommandent de ne pas le réciter systématiquement chaque nuit pour ne pas le confondre avec une obligation. D&apos;autres considèrent qu&apos;il est préférable de le réciter régulièrement. Les deux avis sont acceptés.",
  },
  {
    question: "Que dit-on après le qounout dans la prière du witr ?",
    answer:
      "Après avoir terminé la doua du qounout, le fidèle prononce le takbir (Allahu Akbar) et descend en prosternation (sujud) s&apos;il récite le qounout avant le ruku&apos;. S&apos;il le récite après le ruku&apos;, il descend directement en prosternation. Il est également rapporté de dire « Subhana-l-Malik al-Quddus » trois fois après le taslim (salutation finale) du witr, en allongeant la voix à la troisième fois.",
  },
];

export default function DouaQounoutIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-qounout-islam/#article",
        headline:
          "Doua du qounout en islam : texte arabe, phonétique et traduction",
        description:
          "Découvrez la doua du qounout en islam : invocation du witr et du nazilah en arabe avec phonétique et traduction française.",
        image: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        datePublished: "2026-03-22",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-qounout-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-qounout-islam/#breadcrumb",
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
            name: "Doua du qounout",
            item: "https://www.islamreligion.fr/doua-qounout-islam",
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
          title="Doua du qounout en islam : texte arabe, phonétique et traduction"
          subtitle="L'invocation du qounout récitée dans la prière du witr et lors des calamités. Textes authentiques en arabe, phonétique et traduction française."
          imageSrc="/images/prosternation-sujud-priere-islam-mosquee.jpg"
          imageAlt="Prosternation sujud durant la prière en islam dans une mosquée illustrant le qounout"
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
                <span className="text-foreground">Doua du qounout</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le qounout est une invocation récitée dans la prière du witr
                  et, exceptionnellement, lors de calamités (qounout an-nazilah).
                  La doua la plus connue est celle enseignée par le Prophète
                  (paix et salut sur lui) à al-Hasan ibn Ali : &laquo;&nbsp;Allahumma
                  ihdini fiman hadayt&nbsp;&raquo;. Le fidèle lève les mains,
                  paumes vers le ciel, et récite cette invocation dans la
                  dernière rak&apos;a du witr, avant ou après l&apos;inclinaison
                  selon les avis des savants.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Définition du qounout */}
              {/* ============================================ */}
              <section id="definition-qounout" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que le qounout en islam ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>qounout</strong> (قنوت) dérive de la
                  racine &laquo;&nbsp;qa-na-ta&nbsp;&raquo; qui signifie
                  obéissance, dévotion et humilité envers Allah. Dans le
                  vocabulaire juridique islamique, le qounout désigne une
                  invocation spécifique récitée durant la prière, le plus
                  souvent dans la dernière rak&apos;a de la prière du witr. Ce
                  terme apparaît dans le Coran lui-même, où Allah dit :
                  &laquo;&nbsp;Et tenez-vous debout devant Allah avec
                  dévotion (qanitin)&nbsp;&raquo; (Coran, 2:238).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le qounout est un moment privilégié de communion entre le
                  serviteur et son Seigneur. Debout dans la prière, les mains
                  levées vers le ciel, le fidèle adresse à Allah une supplique
                  empreinte d&apos;humilité, de reconnaissance et de demande de
                  guidée. C&apos;est un acte d&apos;adoration qui résume
                  l&apos;essence même de la relation entre le croyant et son
                  Créateur : la dépendance totale envers Allah et la confiance
                  absolue en Sa miséricorde.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent principalement deux types de qounout.
                  Le premier est le <strong>qounout al-witr</strong>, récité
                  régulièrement dans la prière du witr, la dernière prière de
                  la nuit. Le second est le{" "}
                  <strong>qounout an-nazilah</strong>, une invocation
                  exceptionnelle récitée lors de calamités, de guerres ou de
                  catastrophes qui frappent la communauté musulmane. Chacun de
                  ces deux types possède ses propres textes, ses moments et
                  ses règles que nous détaillerons dans cet article.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Qounout al-witr :</strong> invocation régulière
                      dans la prière du witr, pratiquée toute l&apos;année.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Qounout an-nazilah :</strong> invocation
                      exceptionnelle lors de calamités, récitée dans les prières
                      obligatoires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un acte de dévotion :</strong> le qounout
                      incarne l&apos;humilité et la soumission du croyant
                      devant Allah, debout dans la prière et les mains
                      levées.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de prière dans une mosquée avec arches et lumière du soleil illustrant le recueillement du qounout"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Qounout al-witr */}
              {/* ============================================ */}
              <section id="qounout-witr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua du qounout al-witr : Allahumma ihdini fiman hadayt
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua du qounout al-witr est l&apos;invocation la plus
                  connue et la plus récitée dans la prière du witr. Elle a été
                  enseignée par le Prophète (paix et salut sur lui) à son
                  petit-fils al-Hasan ibn Ali (qu&apos;Allah les agrée) pour
                  qu&apos;il la récite dans la prière du witr. Ce texte
                  prophétique constitue la base de l&apos;invocation du
                  qounout pratiquée par des millions de musulmans chaque nuit.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ، وَعَافِنِي فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ، وَقِنِي شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ihdini fiman hadayt, wa &apos;afini fiman &apos;afayt, wa tawallani fiman tawallayt, wa barik li fima a&apos;tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda &apos;alayk, wa innahu la yadhillu man walayt, wa la ya&apos;izzu man &apos;adayt, tabarakta Rabbana wa ta&apos;alayt
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, guide-moi parmi ceux que Tu as guidés, accorde-moi le bien-être parmi ceux à qui Tu l&apos;as accordé, prends-moi en charge parmi ceux que Tu as pris en charge, bénis ce que Tu m&apos;as donné, protège-moi du mal que Tu as décrété. Car c&apos;est Toi qui décides et nul ne peut décider contre Toi. Celui que Tu prends comme allié ne sera jamais humilié, et celui que Tu prends comme ennemi ne sera jamais honoré. Béni sois-Tu, notre Seigneur, et Exalté&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1425), at-Tirmidhi (464), an-Nasa&apos;i (1745)
                  </p>
                </div>

                <HadithCard
                  arabic="علّم الحسن بن علي رسول الله صلى الله عليه وسلم كلمات يقولهن في قنوت الوتر"
                  text="Le Messager d'Allah (paix et salut sur lui) enseigna à al-Hasan ibn Ali des paroles à prononcer dans le qounout du witr."
                  source="Rapporté par Abu Dawud (1425), at-Tirmidhi (464), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua est d&apos;une richesse spirituelle remarquable.
                  Elle commence par la demande de guidance (hidaya), qui est
                  le bien le plus précieux qu&apos;un croyant puisse espérer.
                  Puis elle enchaîne avec la demande de bien-être (&apos;afiya),
                  de protection divine (wilaya), de bénédiction (baraka) et
                  de préservation contre le mal. Elle se conclut par
                  l&apos;affirmation de la souveraineté absolue d&apos;Allah :
                  c&apos;est Lui qui décide, et nul ne peut s&apos;opposer à
                  Son décret.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de mémoriser cette doua en arabe
                  et de la réciter avec compréhension et présence du coeur.
                  Il est également permis d&apos;y ajouter d&apos;autres
                  invocations après l&apos;avoir récitée, comme la demande
                  de pardon, la prière sur le Prophète (paix et salut sur
                  lui) ou toute doua personnelle. Pour approfondir les
                  invocations liées à la prière du witr, consultez notre
                  article sur la{" "}
                  <Link href="/doua-witr-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du witr en islam</Link>.
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
              {/* SECTION 3 : Qounout an-nazilah */}
              {/* ============================================ */}
              <section id="qounout-nazilah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le qounout an-nazilah : l&apos;invocation lors des calamités
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le qounout an-nazilah est une invocation récitée dans les
                  prières obligatoires lorsque la communauté musulmane
                  traverse une épreuve majeure : guerre, épidémie, catastrophe
                  naturelle ou persécution. Contrairement au qounout du witr
                  qui est régulier, le qounout an-nazilah est temporaire et
                  lié à une situation spécifique. Il est pratiqué dans la
                  dernière rak&apos;a des cinq prières quotidiennes, après le
                  ruku&apos; (inclinaison).
                </p>

                <HadithCard
                  arabic="قنت رسول الله صلى الله عليه وسلم شهرا بعد الركوع في صلاة الفجر يدعو على رعل وذكوان"
                  text="Le Messager d'Allah (paix et salut sur lui) a pratiqué le qounout pendant un mois après le ruku' dans la prière du Fajr, invoquant contre les tribus de Ri'l et Dhakwan."
                  source="Rapporté par al-Bukhari (1002) et Muslim (677)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre que le Prophète (paix et salut sur lui) a
                  lui-même pratiqué le qounout an-nazilah après le massacre
                  de soixante-dix compagnons récitateurs du Coran par ces
                  tribus. Cette pratique a été maintenue pendant un mois,
                  puis abandonnée lorsque la situation s&apos;est résolue.
                  Cela confirme le caractère temporaire et circonstanciel de
                  cette forme de qounout.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ، وَعَافِنَا فِيمَنْ عَافَيْتَ، وَتَوَلَّنَا فِيمَنْ تَوَلَّيْتَ، وَبَارِكْ لَنَا فِيمَا أَعْطَيْتَ، وَقِنَا شَرَّ مَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ihdina fiman hadayt, wa &apos;afina fiman &apos;afayt, wa tawallana fiman tawallayt, wa barik lana fima a&apos;tayt, wa qina sharra ma qadayt, fa innaka taqdi wa la yuqda &apos;alayk
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, guide-nous parmi ceux que Tu as guidés, accorde-nous le bien-être parmi ceux à qui Tu l&apos;as accordé, prends-nous en charge parmi ceux que Tu as pris en charge, bénis ce que Tu nous as donné, et protège-nous du mal que Tu as décrété. Car c&apos;est Toi qui décides et nul ne peut décider contre Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Version au pluriel pour l&apos;imam dans la prière en commun
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque l&apos;imam récite le qounout an-nazilah en
                  congrégation, les fidèles derrière lui lèvent les mains
                  et disent &laquo;&nbsp;Amin&nbsp;&raquo; à chaque
                  invocation. L&apos;imam utilise la forme plurielle
                  (&laquo;&nbsp;ihdina&nbsp;&raquo; au lieu de
                  &laquo;&nbsp;ihdini&nbsp;&raquo;) car il invoque au nom de
                  toute la communauté. Il est également permis d&apos;ajouter
                  des invocations spécifiques à la calamité en cours, en
                  demandant à Allah de protéger les musulmans, de secourir
                  les opprimés et de guider les égarés.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Temporaire :</strong> le qounout an-nazilah
                      est lié à une situation précise et cesse lorsque la
                      calamité prend fin.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dans les prières obligatoires :</strong>{" "}
                      contrairement au qounout du witr, il se récite dans les
                      cinq prières quotidiennes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Après le ruku&apos; :</strong> les savants
                      s&apos;accordent sur le fait que le qounout an-nazilah
                      se récite après l&apos;inclinaison, dans la dernière
                      rak&apos;a.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Quand réciter le qounout */}
              {/* ============================================ */}
              <section id="quand-reciter" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand réciter le qounout : avant ou après le ruku&apos; ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La question du moment précis où réciter le qounout dans la
                  prière du witr fait l&apos;objet de divergences entre les
                  écoles juridiques. Les deux positions sont fondées sur des
                  preuves valides, et le musulman peut suivre l&apos;une ou
                  l&apos;autre en toute sérénité.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Avant le ruku&apos; (inclinaison)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est l&apos;avis de la majorité des savants
                        hanbalites et de certains shafi&apos;ites. Après avoir
                        terminé la récitation du Coran dans la dernière
                        rak&apos;a du witr, le fidèle prononce le takbir
                        (Allahu Akbar), lève les mains et récite la doua du
                        qounout. Puis il s&apos;incline normalement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Après le ruku&apos; (inclinaison)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est l&apos;avis des savants shafi&apos;ites et
                        de certains hanbalites. Après le ruku&apos;, le fidèle
                        se relève en disant &laquo;&nbsp;Sami&apos;a Allahu
                        liman hamidah&nbsp;&raquo;, puis lève les mains et
                        récite le qounout avant de descendre en prosternation.
                        Cette position est soutenue par la pratique du
                        qounout an-nazilah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;avis conciliant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Plusieurs savants contemporains, dont Cheikh Ibn
                        Uthaymin, considèrent que les deux positions sont
                        valides et que le fidèle peut alterner entre les
                        deux. L&apos;essentiel est de réciter le qounout
                        avec humilité et présence du coeur, quel que soit
                        le moment choisi.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Concernant le qounout an-nazilah, les savants s&apos;accordent
                  davantage sur le fait qu&apos;il se récite après le ruku&apos;,
                  dans la dernière rak&apos;a, conformément à la pratique
                  rapportée du Prophète (paix et salut sur lui). C&apos;est
                  également la position la plus pratiquée dans les mosquées
                  lors des prières collectives en période de calamité.
                  Pour en savoir plus sur les invocations après la prière,
                  consultez notre guide sur les{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas après la prière en islam</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en invocation doua illustrant la position des mains pendant le qounout en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Lever les mains */}
              {/* ============================================ */}
              <section id="lever-mains" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment lever les mains durant le qounout
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La manière de lever les mains pendant le qounout est un
                  aspect pratique important que de nombreux fidèles souhaitent
                  connaître. Les textes prophétiques et les pratiques des
                  compagnons nous éclairent sur la position correcte à
                  adopter.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de lever les mains à hauteur de la
                  poitrine ou légèrement au-dessus, les paumes tournées vers
                  le ciel, comme dans la position classique de la doua. Les
                  mains ne doivent pas être écartées de manière excessive ni
                  collées l&apos;une à l&apos;autre. C&apos;est une position
                  naturelle d&apos;humilité et de supplique, qui traduit la
                  dépendance du serviteur envers son Seigneur.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Position des mains
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les paumes sont tournées vers le ciel, à hauteur de la
                      poitrine ou des épaules. Les doigts sont joints
                      naturellement, sans crispation. Cette position exprime
                      la demande et la réception de la miséricorde divine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le takbir avant le qounout
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si le qounout est récité avant le ruku&apos;, le fidèle
                      prononce &laquo;&nbsp;Allahu Akbar&nbsp;&raquo; en
                      levant les mains, puis les maintient levées pour la
                      doua. Ce takbir supplémentaire est une sunna rapportée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Passer les mains sur le visage
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les savants divergent sur le fait de passer les mains
                      sur le visage après le qounout dans la prière. La
                      majorité considère qu&apos;il est préférable de ne pas
                      le faire dans la prière, bien que cela soit permis
                      pour la doua en dehors de la prière.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      En congrégation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lorsque l&apos;imam récite le qounout à voix haute,
                      les fidèles derrière lui lèvent les mains et répondent
                      &laquo;&nbsp;Amin&nbsp;&raquo; à chaque invocation.
                      Ils ne répètent pas la doua mais se contentent de dire
                      Amin avec le coeur présent.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est important de souligner que la position des mains
                  n&apos;est qu&apos;un aspect extérieur du qounout. Ce qui
                  compte véritablement, c&apos;est la présence du coeur,
                  la sincérité de l&apos;invocation et la conscience que
                  l&apos;on s&apos;adresse directement à Allah, le Maître
                  de l&apos;univers. Le Prophète (paix et salut sur lui) a
                  enseigné que la doua faite avec un coeur distrait
                  n&apos;atteint pas le même degré que celle faite avec
                  concentration et humilité. Pour découvrir l&apos;ensemble
                  des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas supplémentaires */}
              {/* ============================================ */}
              <section id="douas-supplementaires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas supplémentaires à réciter dans le qounout
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la doua principale du qounout (Allahumma ihdini
                  fiman hadayt), les savants recommandent d&apos;ajouter
                  d&apos;autres invocations prophétiques pour enrichir sa
                  prière. Voici les formules les plus authentiques à réciter
                  après la doua de base.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La prière sur le Prophète (salat &apos;ala an-Nabi)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Il est recommandé de conclure le qounout par la prière sur
                  le Prophète (paix et salut sur lui). Certains savants
                  considèrent cela comme fortement recommandé, car le
                  Prophète (paix et salut sur lui) a enseigné que toute doua
                  est suspendue entre le ciel et la terre tant qu&apos;on
                  n&apos;envoie pas la prière sur lui.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma salli &apos;ala Muhammad wa &apos;ala ali Muhammad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde Ta grâce à Muhammad et à la famille de Muhammad&nbsp;&raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de demande de pardon (istighfar)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La demande de pardon est une invocation que le Prophète
                  (paix et salut sur lui) récitait abondamment. L&apos;ajouter
                  dans le qounout est une pratique recommandée, surtout dans
                  le dernier tiers de la nuit où la prière du witr est
                  habituellement accomplie.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu biridaka min sakhatik, wa bimu&apos;afatika min &apos;uqubatik, wa a&apos;udhu bika mink, la uhsi thana&apos;an &apos;alayk, Anta kama athnayta &apos;ala nafsik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge dans Ta satisfaction contre Ta colère, dans Ton pardon contre Ton châtiment. Je cherche refuge en Toi contre Toi. Je ne saurais dénombrer les éloges que Tu mérites, Tu es tel que Tu T&apos;es loué Toi-même&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1427), at-Tirmidhi (3566), an-Nasa&apos;i (1747)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Invocation pour la fermeté dans la religion
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette doua peut être ajoutée dans le qounout pour demander
                  à Allah la constance dans la foi et la protection contre
                  les épreuves qui éloignent de la religion.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inna nasta&apos;inuka wa nastaghfiruka wa nuthni &apos;alaykal-khayr, wa la nakfuruk, wa nakhla&apos;u wa natruku man yafjuruk
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous implorons Ton aide et Ton pardon, nous faisons Ton éloge et ne Te renions pas, nous désavouons et abandonnons quiconque Te désobéit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bayhaqi dans as-Sunan al-Kubra, attribué à Omar ibn al-Khattab
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Erreurs courantes */}
              {/* ============================================ */}
              <section id="erreurs-courantes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Erreurs courantes à éviter dans le qounout
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Malgré la simplicité apparente du qounout, certaines erreurs
                  sont fréquemment commises par les fidèles. Connaître ces
                  erreurs permet d&apos;améliorer la qualité de cette
                  invocation et de s&apos;assurer qu&apos;elle est conforme
                  à la pratique prophétique.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Allonger excessivement le qounout
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Certains imams allongent le qounout au point de
                        fatiguer les fidèles, en particulier les personnes
                        âgées et les malades. Le Prophète (paix et salut
                        sur lui) recommandait la modération dans la prière.
                        Le qounout doit rester raisonnable en durée,
                        surtout en congrégation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Transformer le qounout en sermon
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le qounout est une invocation adressée à Allah, pas
                        un discours adressé aux gens. Certains imams
                        profitent du qounout pour faire passer des messages
                        aux fidèles, ce qui détourne cette pratique de son
                        objectif premier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter des douas non authentiques
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est préférable de s&apos;en tenir aux invocations
                        rapportées du Prophète (paix et salut sur lui) et de
                        ses compagnons. Les formules inventées ou les douas
                        dont l&apos;authenticité n&apos;est pas établie
                        doivent être évitées, surtout en congrégation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Négliger la présence du coeur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter le qounout machinalement, sans réfléchir au
                        sens des paroles, est une erreur majeure. Le
                        qounout est un moment de connexion intime avec
                        Allah, et chaque mot doit être prononcé avec
                        conscience et humilité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Confondre qounout du witr et qounout an-nazilah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Chaque type de qounout a son contexte et ses règles.
                        Le qounout an-nazilah ne doit être pratiqué que lors
                        de calamités avérées, sur décision de l&apos;imam
                        ou des autorités religieuses. Le pratiquer sans
                        raison valable revient à innover dans la religion.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="إن أحدكم إذا قام يصلي فإنما يناجي ربه"
                  text="Lorsque l'un d'entre vous se lève pour prier, il s'entretient en privé avec son Seigneur."
                  source="Rapporté par al-Bukhari (531)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rappelle la nature intime de la prière, et par
                  extension du qounout. Chaque invocation prononcée est une
                  conversation directe avec Allah, le Créateur des cieux et
                  de la terre. Cette conscience devrait transformer
                  radicalement la manière dont le fidèle aborde le qounout :
                  non pas comme une simple formalité, mais comme un moment
                  sacré de communion spirituelle.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du witr en islam"
                  description="Découvrez les invocations complètes de la prière du witr, la dernière prière de la nuit, avec les textes en arabe et leur traduction."
                  href="/doua-witr-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter le qounout et les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-witr-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du witr
                  </Link>
                  <Link
                    href="/doua-apres-priere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua après la prière
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
