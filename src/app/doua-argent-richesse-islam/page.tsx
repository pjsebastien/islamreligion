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
    "Doua pour l\u2019argent et la richesse en islam : invocations pour le rizq halal",
  description:
    "D\u00e9couvrez les douas pour l\u2019argent et la richesse en islam : invocations authentiques en arabe avec phon\u00e9tique et traduction pour demander le rizq halal, l\u2019istighfar qui ouvre les portes de la subsistance et le tawakkul.",
  openGraph: {
    title:
      "Doua pour l\u2019argent et la richesse en islam : invocations pour le rizq halal",
    description:
      "Les invocations authentiques pour demander la subsistance (rizq) en islam : douas en arabe, phon\u00e9tique, traduction, hadiths et conseils pratiques.",
    url: "https://www.islamreligion.fr/doua-argent-richesse-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-argent-richesse-islam",
  },
};

const tocItems = [
  { id: "rizq-en-islam", label: "Le concept de rizq en islam" },
  { id: "doua-subsistance-halal", label: "Doua pour la subsistance halal" },
  { id: "istighfar-rizq", label: "L\u2019istighfar et les portes du rizq" },
  { id: "douas-authentiques", label: "Douas authentiques pour le rizq" },
  { id: "tawakkul-effort", label: "Tawakkul et effort : l\u2019\u00e9quilibre islamique" },
  { id: "baraka-abondance", label: "La baraka vs l\u2019abondance mat\u00e9rielle" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour attirer le rizq" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour demander de l\u2019argent en islam ?",
    answer:
      "Parmi les meilleures douas pour demander la subsistance en islam, on trouve : \u00ab Allahumma ikfini bi halalika &apos;an haramik, wa aghnini bi fadlika &apos;amman siwak \u00bb (Seigneur, suffis-moi par ce qui est licite plut\u00f4t que par ce qui est illicite, et enrichis-moi par Ta gr\u00e2ce plut\u00f4t que par d&apos;autres que Toi). Cette doua est rapport\u00e9e par at-Tirmidhi et englobe la demande de subsistance halal et la suffisance divine.",
  },
  {
    question: "L\u2019istighfar permet-il vraiment d\u2019augmenter la richesse ?",
    answer:
      "Oui, le Coran \u00e9tablit un lien direct entre l&apos;istighfar (demande de pardon) et l&apos;augmentation de la subsistance. Dans la sourate Nouh (71:10-12), Allah rapporte les paroles du proph\u00e8te Nouh : \u00ab Demandez pardon \u00e0 votre Seigneur, car Il est Grand Pardonneur. Il vous enverra du ciel des pluies abondantes, vous accordera des biens et des enfants, et vous donnera des jardins et des rivi\u00e8res. \u00bb L&apos;istighfar r\u00e9gulier est donc un moyen spirituel authentique d&apos;attirer le rizq.",
  },
  {
    question: "Peut-on demander \u00e0 Allah de devenir riche en islam ?",
    answer:
      "Oui, il est permis de demander \u00e0 Allah la richesse \u00e0 condition de la vouloir pour de bonnes raisons : subvenir aux besoins de sa famille, faire la charit\u00e9, aider les n\u00e9cessiteux et accomplir des actes d&apos;adoration. Le Proph\u00e8te (paix et salut sur lui) faisait lui-m\u00eame des douas pour la subsistance abondante. En revanche, la richesse recherch\u00e9e pour l&apos;orgueil, le gaspillage ou les actes illicites est bl\u00e2m\u00e9e.",
  },
  {
    question: "Quels sont les p\u00e9ch\u00e9s qui emp\u00eachent le rizq en islam ?",
    answer:
      "Plusieurs p\u00e9ch\u00e9s sont mentionn\u00e9s comme des obstacles au rizq : l&apos;usure (riba), le mensonge dans le commerce, la tromperie, l&apos;avarice, couper les liens de parent\u00e9 et n\u00e9gliger la pri\u00e8re. Le Proph\u00e8te (paix et salut sur lui) a dit : \u00ab Le serviteur est priv\u00e9 de rizq \u00e0 cause d&apos;un p\u00e9ch\u00e9 qu&apos;il commet \u00bb (rapport\u00e9 par Ibn Majah). Le repentir et le retour \u00e0 Allah sont les premiers pas pour d\u00e9bloquer la subsistance.",
  },
  {
    question: "La sadaqa augmente-t-elle la richesse en islam ?",
    answer:
      "Oui, la sadaqa (aum\u00f4ne) est un moyen puissant d&apos;augmenter la richesse selon les enseignements islamiques. Le Proph\u00e8te (paix et salut sur lui) a dit : \u00ab La richesse ne diminue jamais par la sadaqa \u00bb (Muslim). Allah promet de multiplier la r\u00e9compense de celui qui d\u00e9pense dans Son sentier, et de remplacer ce qu&apos;il a d\u00e9pens\u00e9 par quelque chose de meilleur.",
  },
  {
    question: "Quand faire la doua pour le rizq ?",
    answer:
      "Les moments les plus propices pour invoquer Allah pour le rizq sont : le dernier tiers de la nuit, entre l&apos;adhan et l&apos;iqama, apr\u00e8s les pri\u00e8res obligatoires, le vendredi apr\u00e8s la pri\u00e8re du &apos;asr, et pendant le sujud (prosternation). Le matin apr\u00e8s la pri\u00e8re du fajr est \u00e9galement un moment b\u00e9ni : le Proph\u00e8te (paix et salut sur lui) a invoqu\u00e9 la b\u00e9n\u00e9diction sur le d\u00e9but de journ\u00e9e de sa communaut\u00e9.",
  },
  {
    question: "Quelle sourate r\u00e9citer pour attirer la richesse ?",
    answer:
      "Sourate Al-Waqi&apos;a est particuli\u00e8rement recommand\u00e9e pour attirer la subsistance. Selon un hadith rapport\u00e9 par al-Bayhaqi, le Proph\u00e8te (paix et salut sur lui) a dit : \u00ab Celui qui r\u00e9cite sourate Al-Waqi&apos;a chaque nuit ne sera jamais touch\u00e9 par la pauvret\u00e9. \u00bb Sourate Al-Mulk est \u00e9galement recommand\u00e9e pour la protection et la baraka dans la subsistance.",
  },
  {
    question: "Comment concilier doua et travail pour la richesse en islam ?",
    answer:
      "L&apos;islam enseigne que la doua et l&apos;effort ne sont pas contradictoires mais compl\u00e9mentaires. Le Proph\u00e8te (paix et salut sur lui) a dit : \u00ab Attache ta chamelle puis place ta confiance en Allah \u00bb (at-Tirmidhi). Le musulman doit travailler avec s\u00e9rieux, chercher les moyens l\u00e9gitimes de subsistance, tout en invoquant Allah pour la b\u00e9n\u00e9diction (baraka) dans ses efforts. Le tawakkul n&apos;est pas la passivit\u00e9, mais la confiance en Allah apr\u00e8s avoir fourni l&apos;effort.",
  },
];

export default function DouaArgentRichesseIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-argent-richesse-islam/#article",
        headline:
          "Doua pour l\u2019argent et la richesse en islam : invocations pour le rizq halal",
        description:
          "D\u00e9couvrez les douas pour l\u2019argent et la richesse en islam : invocations authentiques pour demander le rizq halal, istighfar et tawakkul.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2026-04-08",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-argent-richesse-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-argent-richesse-islam/#breadcrumb",
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
            name: "Doua pour la subsistance (rizq)",
            item: "https://www.islamreligion.fr/doua-argent-richesse-islam",
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
          title="Doua pour l&apos;argent et la richesse en islam : invocations pour le rizq halal"
          subtitle="Les invocations authentiques pour demander la subsistance licite (rizq halal), tir&eacute;es du Coran et de la Sunna. Textes en arabe, phon&eacute;tique et traduction fran&ccedil;aise."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Coran ouvert avec calligraphie dor\u00e9e et lumi\u00e8re symbolisant la doua pour le rizq et la richesse en islam"
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
                <span className="text-foreground">Doua pour la subsistance (rizq)</span>
              </nav>

              {/* R\u00e9sum\u00e9 rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r\u00e9sum\u00e9
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le rizq (subsistance) est un concept central en islam : Allah
                  est Ar-Razzaq, Celui qui pourvoit \u00e0 la subsistance de
                  chaque cr\u00e9ature. Le musulman est invit\u00e9 \u00e0 demander
                  \u00e0 Allah une richesse halal et b\u00e9nie, tout en fournissant
                  les efforts n\u00e9cessaires. L&apos;istighfar, les douas
                  proph\u00e9tiques et la sadaqa sont des moyens authentiques
                  d&apos;attirer la baraka dans sa subsistance, comme le Coran et
                  la Sunna l&apos;enseignent clairement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le concept de rizq en islam */}
              {/* ============================================ */}
              <section id="rizq-en-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le concept de rizq (subsistance) en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>rizq</strong> (رزق) d\u00e9signe toute
                  forme de subsistance, de provision ou de bienfait qu&apos;Allah
                  accorde \u00e0 Ses cr\u00e9atures. Ce concept englobe bien plus
                  que la richesse mat\u00e9rielle : il comprend la sant\u00e9, la
                  famille, le savoir, la foi et m\u00eame le temps. Allah porte le
                  nom sublime <strong>Ar-Razzaq</strong> (Le Pourvoyeur absolu),
                  ce qui signifie qu&apos;Il est la source exclusive de toute
                  subsistance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran \u00e9tablit cette r\u00e9alit\u00e9 de mani\u00e8re
                  in\u00e9quivoque : &laquo;&nbsp;Il n&apos;y a point de b\u00eate
                  sur terre dont la subsistance n&apos;incombe \u00e0
                  Allah&nbsp;&raquo; (Coran, H\u016bd 11:6). Chaque \u00eatre
                  vivant, du plus petit insecte au plus grand animal, voit sa
                  subsistance garantie par le Cr\u00e9ateur. Cette certitude
                  constitue le fondement m\u00eame de la relation du croyant avec
                  son Seigneur en mati\u00e8re de richesse et de subsistance.
                </p>

                <HadithCard
                  arabic="\u0625\u0650\u0646\u0651\u064e \u0631\u064f\u0648\u062d\u064e \u0627\u0644\u0642\u064f\u062f\u064f\u0633\u0650 \u0646\u064e\u0641\u064e\u062b\u064e \u0641\u0650\u064a \u0631\u064f\u0648\u0639\u0650\u064a \u0623\u064e\u0646\u0651\u064e \u0646\u064e\u0641\u0652\u0633\u064b\u0627 \u0644\u064e\u0646 \u062a\u064e\u0645\u064f\u0648\u062a\u064e \u062d\u064e\u062a\u0651\u064e\u0649 \u062a\u064e\u0633\u0652\u062a\u064e\u0643\u0652\u0645\u0650\u0644\u064e \u0631\u0650\u0632\u0642\u064e\u0647\u064e\u0627 \u0648\u064e\u0623\u064e\u062c\u064e\u0644\u064e\u0647\u064e\u0627 \u0641\u064e\u0627\u062a\u0651\u064e\u0642\u064f\u0648\u0627 \u0627\u0644\u0644\u0647\u064e \u0648\u064e\u0623\u064e\u062c\u0652\u0645\u0650\u0644\u064f\u0648\u0627 \u0641\u0650\u064a \u0627\u0644\u0637\u0651\u064e\u0644\u064e\u0628\u0650"
                  text="L&apos;Esprit Saint (Jibril) a insuffl\u00e9 dans mon coeur qu&apos;aucune \u00e2me ne mourra avant d&apos;avoir re\u00e7u la totalit\u00e9 de sa subsistance et atteint son terme. Craignez donc Allah et recherchez [votre subsistance] de belle mani\u00e8re."
                  source="Rapport\u00e9 par Abu Nu&apos;aym dans al-Hilyah, authentifi\u00e9 par al-Albani dans Sahih al-Jami&apos; (2085)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental enseigne deux v\u00e9rit\u00e9s
                  compl\u00e9mentaires. D&apos;abord, chaque personne recevra
                  int\u00e9gralement le rizq qui lui a \u00e9t\u00e9 d\u00e9cr\u00e9t\u00e9 :
                  rien ne peut emp\u00eacher ce qui est \u00e9crit de parvenir \u00e0
                  son destinataire. Ensuite, cette certitude ne dispense pas de
                  rechercher sa subsistance &laquo;&nbsp;de belle
                  mani\u00e8re&nbsp;&raquo;, c&apos;est-\u00e0-dire par des
                  moyens licites (halal), sans pr\u00e9cipitation ni recours \u00e0
                  l&apos;illicite.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Allah est Ar-Razzaq :</strong>{" "}
                      le Pourvoyeur absolu dont la subsistance atteint chaque
                      cr\u00e9ature sans exception, dans les cieux et sur terre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le rizq est pr\u00e9destin\u00e9 :</strong>{" "}
                      la subsistance de chaque individu est \u00e9crite avant
                      m\u00eame sa naissance, comme le mentionnent les hadiths sur
                      le destin.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rechercher le halal :</strong>{" "}
                      le musulman doit chercher sa subsistance par des voies
                      licites, m\u00eame si le rizq est garanti. La mani\u00e8re
                      de l&apos;obtenir fait partie de l&apos;\u00e9preuve terrestre.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains lev\u00e9es en invocation doua pour demander le rizq et la subsistance en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua pour la subsistance halal */}
              {/* ============================================ */}
              <section id="doua-subsistance-halal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour la subsistance halal : Allahumma ikfini bi halalika
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus compl\u00e8tes pour demander la
                  subsistance licite, celle rapport\u00e9e par Ali ibn Abi Talib
                  (qu&apos;Allah l&apos;agr\u00e9e) occupe une place
                  particuli\u00e8re. Le Proph\u00e8te (paix et salut sur lui) la
                  enseigna \u00e0 un homme endett\u00e9, lui promettant
                  qu&apos;Allah lui rembourserait ses dettes m\u00eame si elles
                  \u00e9galaient le mont Thabir.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0627\u0643\u0652\u0641\u0650\u0646\u0650\u064a \u0628\u0650\u062d\u064e\u0644\u064e\u0627\u0644\u0650\u0643\u064e \u0639\u064e\u0646\u0652 \u062d\u064e\u0631\u064e\u0627\u0645\u0650\u0643\u064e \u0648\u064e\u0623\u064e\u063a\u0652\u0646\u0650\u0646\u0650\u064a \u0628\u0650\u0641\u064e\u0636\u0652\u0644\u0650\u0643\u064e \u0639\u064e\u0645\u0651\u064e\u0646\u0652 \u0633\u0650\u0648\u064e\u0627\u0643\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma ikfini bi halalika &apos;an haramik, wa aghnini bi fadlika &apos;amman siwak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, suffis-moi par ce qui est licite plut\u00f4t que par ce qui est illicite, et enrichis-moi par Ta gr\u00e2ce plut\u00f4t que par d&apos;autres que Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par at-Tirmidhi (3563)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est remarquable par sa profondeur. Elle contient
                  deux demandes essentielles. La premi\u00e8re,
                  &laquo;&nbsp;suffis-moi par le halal&nbsp;&raquo;, exprime le
                  souhait de trouver dans la subsistance licite de quoi se passer
                  de l&apos;illicite. Le croyant demande \u00e0 Allah de lui
                  ouvrir les portes du rizq halal afin qu&apos;il n&apos;ait
                  jamais besoin de recourir au haram pour subvenir \u00e0 ses
                  besoins.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La seconde demande, &laquo;&nbsp;enrichis-moi par Ta
                  gr\u00e2ce&nbsp;&raquo;, va encore plus loin : elle exprime le
                  d\u00e9sir de ne d\u00e9pendre que d&apos;Allah seul, sans avoir
                  besoin de quiconque parmi les cr\u00e9atures. C&apos;est
                  l&apos;essence m\u00eame du tawakkul (confiance en Allah) appliqu\u00e9
                  \u00e0 la subsistance. Le musulman qui r\u00e9cite cette doua avec
                  sinc\u00e9rit\u00e9 cultive en lui l&apos;ind\u00e9pendance
                  int\u00e9rieure vis-\u00e0-vis des cr\u00e9atures et la
                  d\u00e9pendance totale envers le Cr\u00e9ateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de r\u00e9citer cette invocation apr\u00e8s
                  chaque pri\u00e8re obligatoire, le matin et le soir, et
                  particuli\u00e8rement dans les moments de difficult\u00e9
                  financi\u00e8re. Elle peut \u00e9galement \u00eatre r\u00e9cit\u00e9e
                  lors de la recherche d&apos;emploi, avant un entretien ou au
                  moment de lancer un projet commercial. Pour des invocations
                  sp\u00e9cifiques au contexte professionnel, consultez notre
                  article sur la{" "}
                  <Link href="/doua-entretien-travail-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour l&apos;entretien et le travail</Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations proph&eacute;tiques dans leur langue originale. D&eacute;couvrez des formations adapt&eacute;es aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommand\u00e9es"
              />

              {/* ============================================ */}
              {/* SECTION 3 : L'istighfar et les portes du rizq */}
              {/* ============================================ */}
              <section id="istighfar-rizq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;istighfar : la cl\u00e9 qui ouvre les portes du rizq
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus \u00e9tonnants du Coran
                  est le lien direct entre l&apos;istighfar (la demande de
                  pardon \u00e0 Allah) et l&apos;augmentation de la subsistance.
                  Ce lien est \u00e9tabli dans la sourate Nouh, o\u00f9 le
                  proph\u00e8te Nouh (paix sur lui) enseigne \u00e0 son peuple
                  un secret spirituel d&apos;une immense port\u00e9e.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0641\u064e\u0642\u064f\u0644\u0652\u062a\u064f \u0627\u0633\u0652\u062a\u064e\u063a\u0652\u0641\u0650\u0631\u064f\u0648\u0627 \u0631\u064e\u0628\u0651\u064e\u0643\u064f\u0645\u0652 \u0625\u0650\u0646\u0651\u064e\u0647\u064f \u0643\u064e\u0627\u0646\u064e \u063a\u064e\u0641\u0651\u064e\u0627\u0631\u064b\u0627 \u0622 \u064a\u064f\u0631\u0652\u0633\u0650\u0644\u0650 \u0627\u0644\u0633\u0651\u064e\u0645\u064e\u0627\u0621\u064e \u0639\u064e\u0644\u064e\u064a\u0652\u0643\u064f\u0645 \u0645\u0651\u0650\u062f\u0652\u0631\u064e\u0627\u0631\u064b\u0627 \u0622 \u0648\u064e\u064a\u064f\u0645\u0652\u062f\u0650\u062f\u0652\u0643\u064f\u0645 \u0628\u0650\u0623\u064e\u0645\u0652\u0648\u064e\u0627\u0644\u064d \u0648\u064e\u0628\u064e\u0646\u0650\u064a\u0646\u064e
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Faqultu istaghfiru Rabbakum innahu kana Ghaffara. Yursilis-sama&apos;a &apos;alaykum midrara. Wa yumdidkum bi amwalin wa banin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;J&apos;ai dit : Demandez pardon \u00e0 votre Seigneur, car Il est Grand Pardonneur. Il vous enverra du ciel des pluies abondantes et vous accordera des biens et des enfants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Nouh (71:10-12)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces versets r\u00e9v\u00e8lent une v\u00e9rit\u00e9 spirituelle
                  profonde : les p\u00e9ch\u00e9s constituent un obstacle majeur \u00e0
                  la subsistance. Lorsque le serviteur demande pardon \u00e0 Allah
                  avec sinc\u00e9rit\u00e9, il l\u00e8ve ces obstacles et permet au
                  rizq de couler \u00e0 nouveau. L&apos;imam Hasan al-Basri, l&apos;un
                  des plus grands savants des premières g\u00e9n\u00e9rations, recevait
                  r\u00e9guli\u00e8rement des plaintes de personnes souffrant de
                  s\u00e9cheresse, de pauvret\u00e9 ou de st\u00e9rilit\u00e9.
                  \u00c0 chacune, il donnait la m\u00eame r\u00e9ponse :
                  &laquo;&nbsp;Faites l&apos;istighfar.&nbsp;&raquo;
                </p>

                <HadithCard
                  arabic="\u0645\u064e\u0646\u0652 \u0644\u064e\u0632\u0650\u0645\u064e \u0627\u0644\u0627\u0633\u0652\u062a\u0650\u063a\u0652\u0641\u064e\u0627\u0631\u064e \u062c\u064e\u0639\u064e\u0644\u064e \u0627\u0644\u0644\u0647\u064f \u0644\u064e\u0647\u064f \u0645\u0650\u0646\u0652 \u0643\u064f\u0644\u0651\u0650 \u0647\u064e\u0645\u0651\u064d \u0641\u064e\u0631\u064e\u062c\u064b\u0627 \u0648\u064e\u0645\u0650\u0646\u0652 \u0643\u064f\u0644\u0651\u0650 \u0636\u0650\u064a\u0642\u064d \u0645\u064e\u062e\u0652\u0631\u064e\u062c\u064b\u0627 \u0648\u064e\u0631\u064e\u0632\u064e\u0642\u064e\u0647\u064f \u0645\u0650\u0646\u0652 \u062d\u064e\u064a\u0652\u062b\u064f \u0644\u064e\u0627 \u064a\u064e\u062d\u0652\u062a\u064e\u0633\u0650\u0628\u064f"
                  text="Quiconque s&apos;adonne r\u00e9guli\u00e8rement \u00e0 l&apos;istighfar, Allah lui accordera une issue \u00e0 chaque souci, une sortie de chaque difficult\u00e9, et le pourvoira d&apos;o\u00f9 il ne s&apos;y attend pas."
                  source="Rapport\u00e9 par Abu Dawud (1518) et Ibn Majah (3819)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est l&apos;un des textes les plus cit\u00e9s en
                  mati\u00e8re de rizq. Il enseigne que l&apos;istighfar r\u00e9gulier
                  produit trois effets : la r\u00e9solution des soucis (faraj), la
                  sortie des difficult\u00e9s (makhraj) et la subsistance inattendue
                  (rizq). La formule la plus simple d&apos;istighfar est
                  &laquo;&nbsp;Astaghfirullah&nbsp;&raquo; (\u0623\u0633\u062a\u063a\u0641\u0631 \u0627\u0644\u0644\u0647),
                  que le Proph\u00e8te (paix et salut sur lui) r\u00e9p\u00e9tait
                  plus de cent fois par jour.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour celui qui traverse une difficult\u00e9 financi\u00e8re,
                  l&apos;istighfar est donc le premier rem\u00e8de \u00e0 adopter.
                  Il ne s&apos;agit pas d&apos;un simple rituel, mais d&apos;un
                  retour sinc\u00e8re vers Allah, d&apos;une prise de conscience
                  de ses erreurs et d&apos;une demande humble de pardon. Ceux qui
                  ont des dettes peuvent \u00e9galement consulter notre guide
                  sur la{" "}
                  <Link href="/doua-dettes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour les dettes en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas authentiques pour le rizq */}
              {/* ============================================ */}
              <section id="douas-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques pour le rizq : arabe, phon\u00e9tique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici les principales invocations authentiques pour demander
                  la subsistance \u00e0 Allah, tir\u00e9es du Coran et de la Sunna.
                  Chaque doua est pr\u00e9sent\u00e9e avec son texte arabe original,
                  sa phon\u00e9tique et sa traduction en fran\u00e7ais.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de Moussa (paix sur lui) pour le bien
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0631\u064e\u0628\u0651\u0650 \u0625\u0650\u0646\u0651\u0650\u064a \u0644\u0650\u0645\u064e\u0627 \u0623\u064e\u0646\u0632\u064e\u0644\u0652\u062a\u064e \u0625\u0650\u0644\u064e\u064a\u0651\u064e \u0645\u0650\u0646\u0652 \u062e\u064e\u064a\u0652\u0631\u064d \u0641\u064e\u0642\u0650\u064a\u0631\u064c
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Rabbi inni lima anzalta ilayya min khayrin faqir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, j&apos;ai grand besoin de tout bien que Tu feras descendre vers moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Qasas (28:24)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua fut prononc\u00e9e par Moussa (paix sur lui) alors
                  qu&apos;il \u00e9tait dans un \u00e9tat de d\u00e9nuement
                  total, \u00e9tranger, fuyant l&apos;\u00c9gypte et sans
                  ressource. Apr\u00e8s cette invocation, Allah lui accorda
                  imm\u00e9diatement un refuge, une \u00e9pouse et un emploi.
                  Cette doua est un mod\u00e8le de humilit\u00e9 et de confiance
                  absolue en Allah pour quiconque traverse une p\u00e9riode de
                  besoin.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour la baraka dans la subsistance
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0628\u064e\u0627\u0631\u0650\u0643\u0652 \u0644\u064e\u0646\u064e\u0627 \u0641\u0650\u064a\u0645\u064e\u0627 \u0631\u064e\u0632\u064e\u0642\u0652\u062a\u064e\u0646\u064e\u0627 \u0648\u064e\u0642\u0650\u0646\u064e\u0627 \u0639\u064e\u0630\u064e\u0627\u0628\u064e \u0627\u0644\u0646\u0651\u064e\u0627\u0631\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma barik lana fima razaqtana wa qina &apos;adhaban-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, b\u00e9nis-nous dans ce que Tu nous as accord\u00e9 comme subsistance et prot\u00e8ge-nous du ch\u00e2timent du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (2734)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Rabbi zidni &apos;ilma
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0631\u0651\u064e\u0628\u0651\u0650 \u0632\u0650\u062f\u0652\u0646\u0650\u064a \u0639\u0650\u0644\u0652\u0645\u064b\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Rabbi zidni &apos;ilma
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, augmente ma science&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ta-Ha (20:114)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Bien que cette doua concerne directement le savoir, les savants
                  la relient au rizq car le savoir utile est l&apos;un des
                  meilleurs moyens d&apos;acc\u00e9der \u00e0 une subsistance
                  halal et abondante. Le Proph\u00e8te (paix et salut sur lui) a
                  enseign\u00e9 que chercher la science est une voie vers le
                  Paradis, et le savoir ouvre des portes de subsistance que
                  l&apos;ignorance maintient ferm\u00e9es.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua du matin pour la subsistance
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0651\u0650\u064a \u0623\u064e\u0633\u0652\u0623\u064e\u0644\u064f\u0643\u064e \u0639\u0650\u0644\u0652\u0645\u064b\u0627 \u0646\u064e\u0627\u0641\u0650\u0639\u064b\u0627 \u0648\u064e\u0631\u0650\u0632\u0652\u0642\u064b\u0627 \u0637\u064e\u064a\u0651\u0650\u0628\u064b\u0627 \u0648\u064e\u0639\u064e\u0645\u064e\u0644\u064b\u0627 \u0645\u064f\u062a\u064e\u0642\u064e\u0628\u0651\u064e\u0644\u064b\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an, wa rizqan tayyiban, wa &apos;amalan mutaqabbalan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande un savoir utile, une subsistance bonne et pure, et des oeuvres accept\u00e9es&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Ibn Majah (925), authentifi\u00e9 par al-Albani
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation matin ale, que le Proph\u00e8te (paix et salut
                  sur lui) r\u00e9citait apr\u00e8s la pri\u00e8re du fajr, regroupe
                  les trois tr\u00e9sors que tout musulman devrait rechercher : un
                  savoir qui profite, une subsistance pure (tayyib) et des actes
                  accept\u00e9s par Allah. Le qualificatif
                  &laquo;&nbsp;tayyib&nbsp;&raquo; (bon et pur) souligne que le
                  musulman ne demande pas simplement de l&apos;argent, mais une
                  subsistance dont la source, la nature et l&apos;utilisation sont
                  conformes \u00e0 la volont\u00e9 divine.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-chapelet-tasbih-islam-livre-sacre.jpg"
                    alt="Coran et chapelet tasbih symbolisant le dhikr et l&apos;istighfar pour attirer le rizq en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Tawakkul et effort */}
              {/* ============================================ */}
              <section id="tawakkul-effort" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tawakkul et effort : l&apos;\u00e9quilibre islamique pour la richesse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam n&apos;enseigne ni la passivit\u00e9 fataliste ni
                  l&apos;acharnement mat\u00e9rialiste. La voie islamique vers la
                  richesse repose sur un \u00e9quilibre subtil entre le
                  <strong> tawakkul</strong> (confiance totale en Allah) et
                  l&apos;effort concret (al-akhdhu bil-asbab). Le Proph\u00e8te
                  (paix et salut sur lui) a parfaitement illustr\u00e9 ce principe
                  dans un hadith c\u00e9l\u00e8bre.
                </p>

                <HadithCard
                  arabic="\u0644\u064e\u0648\u0652 \u0623\u064e\u0646\u0651\u064e\u0643\u064f\u0645\u0652 \u062a\u064e\u0648\u064e\u0643\u0651\u064e\u0644\u0652\u062a\u064f\u0645\u0652 \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0644\u0647\u0650 \u062d\u064e\u0642\u0651\u064e \u062a\u064e\u0648\u064e\u0643\u0651\u064f\u0644\u0650\u0647\u0650 \u0644\u064e\u0631\u064e\u0632\u064e\u0642\u064e\u0643\u064f\u0645\u0652 \u0643\u064e\u0645\u064e\u0627 \u064a\u064e\u0631\u0652\u0632\u064f\u0642\u064f \u0627\u0644\u0637\u0651\u064e\u064a\u0652\u0631\u064e \u062a\u064e\u063a\u0652\u062f\u064f\u0648 \u062e\u0650\u0645\u064e\u0627\u0635\u064b\u0627 \u0648\u064e\u062a\u064e\u0631\u064f\u0648\u062d\u064f \u0628\u0650\u0637\u064e\u0627\u0646\u064b\u0627"
                  text="Si vous placiez votre confiance en Allah comme Il le m\u00e9rite, Il vous pourvoirait comme Il pourvoit les oiseaux : ils partent le matin le ventre vide et reviennent le soir repus."
                  source="Rapport\u00e9 par at-Tirmidhi (2344), authentifi\u00e9 par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants tirent de ce hadith un enseignement capital :
                  m\u00eame les oiseaux, malgr\u00e9 leur tawakkul, <em>sortent</em>{" "}
                  de leur nid pour chercher leur nourriture. Le tawakkul ne
                  signifie donc pas rester assis chez soi en attendant que la
                  richesse tombe du ciel. Il signifie travailler avec s\u00e9rieux
                  et comp\u00e9tence, tout en sachant que le r\u00e9sultat final
                  appartient \u00e0 Allah seul.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Omar ibn al-Khattab (qu&apos;Allah l&apos;agr\u00e9e), le
                  deuxi\u00e8me calife, disait : &laquo;&nbsp;Que personne
                  d&apos;entre vous ne reste assis sans chercher sa subsistance
                  en disant : \u201cSeigneur, pourvois-moi\u201d, car vous savez bien
                  que le ciel ne fait pas pleuvoir de l&apos;or ni de
                  l&apos;argent.&nbsp;&raquo; Cette parole illustre parfaitement
                  l&apos;\u00e9quilibre islamique : invoquer Allah avec ferveur
                  ET fournir l&apos;effort n\u00e9cessaire.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chercher activement sa subsistance
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le travail halal est une forme d&apos;adoration en islam.
                        Le Proph\u00e8te (paix et salut sur lui) a dit que la
                        meilleure nourriture est celle gagn\u00e9e par le travail
                        de ses propres mains (al-Bukhari).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer Allah avec certitude
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Accompagner chaque effort d&apos;une invocation sinc\u00e8re.
                        Demander \u00e0 Allah la baraka dans son travail, la
                        r\u00e9ussite de ses projets et la facilitation de ses
                        affaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Accepter le d\u00e9cret divin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Apr\u00e8s avoir fourni l&apos;effort et invoqu\u00e9 Allah,
                        accepter le r\u00e9sultat avec gratitude. Si la richesse
                        attendue n&apos;arrive pas, c&apos;est qu&apos;Allah a un
                        meilleur plan pour Son serviteur.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour les commer\u00e7ants et entrepreneurs, l&apos;islam
                  enseigne des \u00e9thiques sp\u00e9cifiques qui attirent la
                  baraka : l&apos;honn\u00eatet\u00e9, la transparence, la
                  g\u00e9n\u00e9rosit\u00e9 avec les clients et l&apos;\u00e9vitement
                  de la tromperie. D\u00e9couvrez les invocations sp\u00e9cifiques
                  dans notre article sur la{" "}
                  <Link href="/doua-marche-commerce-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour le march\u00e9 et le commerce</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : La baraka vs l'abondance */}
              {/* ============================================ */}
              <section id="baraka-abondance" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La baraka vs l&apos;abondance mat\u00e9rielle : comprendre la vraie richesse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la v\u00e9ritable richesse ne se mesure pas \u00e0 la
                  quantit\u00e9 d&apos;argent poss\u00e9d\u00e9, mais \u00e0 la
                  <strong> baraka</strong> (b\u00e9n\u00e9diction divine) pr\u00e9sente
                  dans cette richesse. Une personne peut poss\u00e9der peu mais
                  jouir d&apos;une baraka immense qui rend son peu suffisant et
                  b\u00e9n\u00e9fique. \u00c0 l&apos;inverse, une fortune colossale
                  d\u00e9pourvue de baraka peut \u00eatre source de malheur,
                  de stress et de destruction.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) a d\u00e9fini la
                  v\u00e9ritable richesse de mani\u00e8re surprenante :
                  &laquo;&nbsp;La richesse ne r\u00e9side pas dans l&apos;abondance
                  des biens, mais la v\u00e9ritable richesse est la richesse de
                  l&apos;\u00e2me&nbsp;&raquo; (al-Bukhari et Muslim). Cette
                  d\u00e9finition r\u00e9volutionnaire place la contentement
                  int\u00e9rieur (qana&apos;a) au-dessus de l&apos;accumulation
                  mat\u00e9rielle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La baraka dans le rizq se manifeste de plusieurs fa\u00e7ons :
                  un salaire modeste qui suffit \u00e0 couvrir tous les besoins,
                  une nourriture simple qui rassasie et nourrit bien, un temps
                  qui semble s&apos;\u00e9tirer pour accomplir plus de bonnes
                  oeuvres. Les causes de la baraka sont nombreuses dans les
                  textes islamiques : la pi\u00e9t\u00e9 (taqwa), l&apos;honn\u00eatet\u00e9
                  dans les transactions, le maintien des liens de parent\u00e9
                  (silat ar-rahim), la sadaqa r\u00e9guli\u00e8re et le fait de
                  manger ensemble en famille.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La taqwa attire le rizq :</strong>{" "}
                      &laquo;&nbsp;Quiconque craint Allah, Il lui donnera une
                      issue et le pourvoira d&apos;o\u00f9 il ne s&apos;y attend
                      pas&nbsp;&raquo; (Coran, At-Talaq 65:2-3).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les liens de parent\u00e9 :</strong>{" "}
                      le Proph\u00e8te (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Celui qui veut que sa subsistance soit
                      \u00e9largie et sa vie prolong\u00e9e, qu&apos;il maintienne
                      les liens de parent\u00e9&nbsp;&raquo; (al-Bukhari).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La gratitude multiplie les bienfaits :</strong>{" "}
                      &laquo;&nbsp;Si vous \u00eates reconnaissants, J&apos;augmenterai
                      [Mes bienfaits] pour vous&nbsp;&raquo; (Coran, Ibrahim
                      14:7). La reconnaissance envers Allah est un multiplicateur
                      de rizq.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour attirer le rizq au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-del\u00e0 des invocations, l&apos;islam propose un ensemble
                  de pratiques concr\u00e8tes pour attirer la subsistance et la
                  b\u00e9n\u00e9diction divine dans sa vie. Ces pratiques,
                  fond\u00e9es sur le Coran et la Sunna, constituent une
                  v\u00e9ritable m\u00e9thodologie pour une vie financi\u00e8re
                  saine et b\u00e9nie.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se lever t\u00f4t le matin
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) a invoqu\u00e9 la
                      baraka sur le d\u00e9but de journ\u00e9e de sa communaut\u00e9.
                      Se lever \u00e0 l&apos;aube, prier le fajr et commencer
                      ses activit\u00e9s t\u00f4t est un moyen authentique
                      d&apos;attirer la b\u00e9n\u00e9diction dans sa journ\u00e9e.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Donner la sadaqa r\u00e9guli\u00e8rement
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La charit\u00e9 n&apos;appauvrit jamais. Le Proph\u00e8te
                      (paix et salut sur lui) a dit : &laquo;&nbsp;La richesse ne
                      diminue pas par la sadaqa&nbsp;&raquo; (Muslim). Donner,
                      m\u00eame peu, ouvre les portes de la subsistance divine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Maintenir les liens de parent\u00e9
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Visiter ses proches, prendre de leurs nouvelles et les
                      aider \u00e9largit la subsistance et prolonge la vie selon
                      les hadiths authentiques. La silat ar-rahim est un des plus
                      grands moyens d&apos;attirer le rizq.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      \u00c9viter les p\u00e9ch\u00e9s qui bloquent le rizq
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;usure (riba), le mensonge, la tromperie et la
                      n\u00e9gligence des pri\u00e8res sont des obstacles
                      majeurs \u00e0 la subsistance. Purifier sa vie des p\u00e9ch\u00e9s
                      est un pr\u00e9alable \u00e0 l&apos;afflux de rizq.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En r\u00e9sum\u00e9, la qu\u00eate de richesse en islam est un
                  acte d&apos;adoration lorsqu&apos;elle est orient\u00e9e vers
                  le halal, accompagn\u00e9e d&apos;invocations sinc\u00e8res et
                  mise au service du bien. Le musulman qui combine les douas
                  proph\u00e9tiques, l&apos;istighfar r\u00e9gulier, l&apos;effort
                  honn\u00eate et la sadaqa place sa confiance en Ar-Razzaq et
                  peut esp\u00e9rer la meilleure subsistance ici-bas et dans
                  l&apos;au-del\u00e0. Pour d\u00e9couvrir toutes les invocations
                  islamiques, consultez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet des douas en islam</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour les dettes en islam"
                  description="D\u00e9couvrez les invocations authentiques pour demander \u00e0 Allah de vous lib\u00e9rer de vos dettes et vous accorder la suffisance."
                  href="/doua-dettes-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Ma\u00eetrisez la langue du Coran pour r\u00e9citer les douas avec compr\u00e9hension et profondeur spirituelle. D\u00e9couvrez nos formations en ligne adapt\u00e9es \u00e0 tous les niveaux."
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
                    href="/doua-entretien-travail-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour l&apos;entretien et le travail
                  </Link>
                  <Link
                    href="/doua-dettes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les dettes
                  </Link>
                  <Link
                    href="/doua-marche-commerce-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour le march\u00e9 et le commerce
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages m\u00e8res */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le m\u00eame sujet
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
