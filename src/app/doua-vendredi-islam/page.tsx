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
    "Doua du vendredi en islam : l&apos;heure d&apos;exaucement",
  description:
    "Découvrez les douas du vendredi en islam : invocations authentiques en arabe avec phonétique et traduction, l&apos;heure d&apos;exaucement (sa&apos;a), sourate al-Kahf, salawat sur le Prophète et sunnas du jour de joumou&apos;a.",
  openGraph: {
    title:
      "Doua du vendredi en islam : l&apos;heure d&apos;exaucement",
    description:
      "Les invocations du vendredi en islam : textes en arabe, phonétique, traduction et hadiths. L&apos;heure d&apos;exaucement, sourate al-Kahf et salawat.",
    url: "https://www.islamreligion.fr/doua-vendredi-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-vendredi-islam",
  },
};

const tocItems = [
  { id: "vendredi-jour-beni", label: "Le vendredi, jour béni en islam" },
  { id: "heure-exaucement", label: "L&apos;heure d&apos;exaucement (sa&apos;a)" },
  { id: "sourate-al-kahf", label: "Sourate al-Kahf le vendredi" },
  { id: "salawat-prophete", label: "Salawat sur le Prophète" },
  { id: "doua-asr-maghrib", label: "Doua entre Asr et Maghrib" },
  { id: "doua-khutba", label: "Doua pendant la khutba" },
  { id: "sunnas-vendredi", label: "Les sunnas du vendredi" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua du vendredi en islam ?",
    answer:
      "Parmi les meilleures douas du vendredi figurent la salawat sur le Prophète (paix et salut sur lui) et toute invocation sincère adressée à Allah durant l&apos;heure d&apos;exaucement (sa&apos;a). Le Prophète a enseigné que le vendredi contient un moment où aucune invocation n&apos;est rejetée. Les savants recommandent de multiplier les douas entre la prière de l&apos;Asr et le Maghrib, car c&apos;est l&apos;un des avis les plus solides concernant cette heure bénie.",
  },
  {
    question: "Quelle est l&apos;heure d&apos;exaucement le vendredi ?",
    answer:
      "L&apos;heure d&apos;exaucement (sa&apos;a) est un moment précis du vendredi où toute doua est acceptée par Allah. Les savants divergent sur son moment exact, mais les deux avis les plus forts sont : entre le moment où l&apos;imam s&apos;assoit sur le minbar et la fin de la prière, ou entre la prière de l&apos;Asr et le coucher du soleil (Maghrib). Le Prophète (paix et salut sur lui) a confirmé son existence dans un hadith rapporté par al-Bukhari et Muslim.",
  },
  {
    question: "Faut-il lire sourate al-Kahf le vendredi ?",
    answer:
      "Oui, la lecture de sourate al-Kahf le vendredi est une sunna fortement recommandée. Le Prophète (paix et salut sur lui) a dit que celui qui la lit le vendredi sera illuminé d&apos;une lumière entre les deux vendredis. Elle peut être lue à n&apos;importe quel moment du vendredi, de la nuit du jeudi soir jusqu&apos;au coucher du soleil le vendredi.",
  },
  {
    question: "Combien de salawat faut-il faire le vendredi ?",
    answer:
      "Le Prophète (paix et salut sur lui) a encouragé à multiplier les salawat le vendredi sans fixer un nombre précis. Cependant, un hadith rapporté par Abu Dawud mentionne la recommandation de faire des salawat en abondance. Certains savants mentionnent le mérite de 80 salawat le vendredi durant la prière de l&apos;Asr, qui effaceraient 80 années de péchés, bien que ce hadith soit discuté quant à son authenticité.",
  },
  {
    question: "Peut-on faire la doua du vendredi en français ?",
    answer:
      "Oui, la doua personnelle peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et entend l&apos;invocation de chaque serviteur. Cependant, il est recommandé d&apos;apprendre les formules prophétiques en arabe pour leur mérite spirituel particulier, puis de compléter par des douas personnelles dans sa langue maternelle.",
  },
  {
    question: "Quelles sont les sunnas à pratiquer le vendredi ?",
    answer:
      "Les sunnas du vendredi incluent : le ghusl (bain rituel), se parfumer, porter ses meilleurs vêtements, se rendre tôt à la mosquée, lire sourate al-Kahf, multiplier les salawat sur le Prophète (paix et salut sur lui), faire des douas durant l&apos;heure d&apos;exaucement, se couper les ongles et utiliser le siwak. Le vendredi est considéré comme une fête hebdomadaire pour les musulmans.",
  },
  {
    question: "La doua est-elle exaucée pendant la khutba du vendredi ?",
    answer:
      "Oui, selon plusieurs savants, le moment entre l&apos;assise de l&apos;imam sur le minbar et la fin de la prière de joumou&apos;a est l&apos;un des moments où la doua est exaucée. Le Prophète (paix et salut sur lui) a mentionné ce créneau dans un hadith rapporté par Muslim. Il est recommandé de faire des douas silencieuses durant la khutba, notamment lorsque l&apos;imam fait une pause entre les deux parties du sermon.",
  },
  {
    question: "Pourquoi le vendredi est-il le meilleur jour de la semaine en islam ?",
    answer:
      "Le vendredi (yawm al-joumou&apos;a) est le meilleur jour de la semaine car c&apos;est le jour où Adam a été créé, le jour où il est entré au Paradis, le jour où il en est sorti, et le jour où aura lieu la Résurrection. Le Prophète (paix et salut sur lui) a dit : « Le meilleur jour sur lequel le soleil se lève est le vendredi » (Muslim). Allah a choisi ce jour pour la communauté musulmane après que les juifs et les chrétiens s&apos;en soient détournés.",
  },
];

export default function DouaVendrediIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-vendredi-islam/#article",
        headline:
          "Doua du vendredi en islam : l'heure d'exaucement",
        description:
          "Découvrez les douas du vendredi en islam : invocations authentiques en arabe, l'heure d'exaucement, sourate al-Kahf, salawat et sunnas du jour de joumou'a.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2026-03-13",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-vendredi-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-vendredi-islam/#breadcrumb",
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
            name: "Doua du vendredi",
            item: "https://www.islamreligion.fr/doua-vendredi-islam",
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
          title="Doua du vendredi en islam : l'heure d'exaucement"
          subtitle="Les invocations authentiques du vendredi (joumou'a), tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française pour profiter de ce jour béni."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Intérieur de mosquée avec arches, tapis et lumière naturelle symbolisant la bénédiction du vendredi en islam"
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
                <span className="text-foreground">Doua du vendredi</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le vendredi (yawm al-joumou&apos;a) est le jour le plus béni
                  de la semaine en islam. Le Prophète (paix et salut sur lui) a
                  confirmé qu&apos;il contient une heure d&apos;exaucement
                  durant laquelle aucune doua n&apos;est rejetée. Ce jour est
                  l&apos;occasion de multiplier les invocations, les salawat sur
                  le Prophète, la lecture de sourate al-Kahf et les bonnes
                  actions. Découvrez les douas authentiques du vendredi, les
                  moments propices pour invoquer et les sunnas à pratiquer pour
                  tirer le meilleur de ce jour exceptionnel.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le vendredi jour béni */}
              {/* ============================================ */}
              <section id="vendredi-jour-beni" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le vendredi, jour béni en islam (yawm al-joumou&apos;a)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le vendredi occupe une place éminente dans la tradition
                  islamique. Le mot arabe <strong>joumou&apos;a</strong>{" "}
                  (جمعة) signifie &laquo;&nbsp;rassemblement&nbsp;&raquo;, car
                  c&apos;est le jour où les musulmans se réunissent pour
                  accomplir la prière congregationnelle. Mais au-delà de cette
                  dimension communautaire, le vendredi est un jour chargé de
                  bénédictions et de mérites spirituels que le croyant doit
                  connaître pour en tirer le maximum de bienfaits.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a clairement établi la
                  supériorité du vendredi sur les autres jours de la semaine.
                  Ce jour est intimement lié aux événements majeurs de la
                  création : la création d&apos;Adam, son entrée au Paradis,
                  sa sortie de celui-ci, et le Jour de la Résurrection qui
                  aura lieu un vendredi. Chacun de ces événements confère au
                  vendredi une dimension spirituelle unique qui dépasse
                  largement le simple cadre d&apos;un jour de prière
                  hebdomadaire.
                </p>

                <HadithCard
                  arabic="خير يوم طلعت عليه الشمس يوم الجمعة، فيه خلق آدم، وفيه أدخل الجنة، وفيه أخرج منها، ولا تقوم الساعة إلا في يوم الجمعة"
                  text="Le meilleur jour sur lequel le soleil se lève est le vendredi : c'est le jour où Adam a été créé, le jour où il est entré au Paradis, le jour où il en est sorti, et l'Heure ne surviendra qu'un vendredi."
                  source="Rapporté par Muslim (854)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental établit le vendredi comme le sommet
                  de la semaine pour le musulman. C&apos;est un jour où les
                  portes du ciel s&apos;ouvrent, où les invocations sont
                  exaucées et où la miséricorde divine se déverse abondamment
                  sur les croyants. Le musulman averti saisit cette
                  opportunité pour multiplier ses actes d&apos;adoration et
                  ses douas, sachant que chaque instant de ce jour est
                  potentiellement celui de l&apos;exaucement.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Jour de fête hebdomadaire :</strong>{" "}
                      le Prophète (paix et salut sur lui) a qualifié le
                      vendredi de &laquo;&nbsp;jour de fête&nbsp;&raquo;
                      (&apos;id) pour les musulmans, un jour de joie et
                      d&apos;adoration combinées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Choisi pour la Oumma :</strong>{" "}
                      Allah a guidé la communauté musulmane vers le vendredi
                      après que les juifs aient choisi le samedi et les
                      chrétiens le dimanche (Muslim, 856).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre les épreuves :</strong>{" "}
                      le musulman qui meurt le vendredi ou la nuit du vendredi
                      est protégé de l&apos;épreuve de la tombe, selon un
                      hadith rapporté par at-Tirmidhi (1074). Pour approfondir
                      les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-levees-illustration-lumiere.jpg"
                    alt="Mains levées en doua avec lumière divine illustrant l&apos;invocation du vendredi en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : L'heure d'exaucement */}
              {/* ============================================ */}
              <section id="heure-exaucement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;heure d&apos;exaucement du vendredi (sa&apos;a)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;une des plus grandes bénédictions du vendredi est
                  l&apos;existence d&apos;une heure précise durant laquelle
                  toute doua adressée à Allah est exaucée. Le Prophète (paix
                  et salut sur lui) a mentionné cette heure dans plusieurs
                  hadiths authentiques, la désignant par le terme{" "}
                  <strong>sa&apos;a</strong> (ساعة), c&apos;est-à-dire un
                  court moment, une fenêtre de temps bénie que le croyant doit
                  chercher avec ardeur chaque vendredi.
                </p>

                <HadithCard
                  arabic="إن في الجمعة لساعة لا يوافقها عبد مسلم وهو قائم يصلي يسأل الله شيئاً إلا أعطاه إياه"
                  text="Il y a dans le vendredi une heure durant laquelle aucun serviteur musulman, debout en prière, ne demande quelque chose à Allah sans qu'Il ne le lui accorde."
                  source="Rapporté par al-Bukhari (935) et Muslim (852)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont longuement débattu pour
                  identifier le moment exact de cette heure d&apos;exaucement.
                  L&apos;imam an-Nawawi a recensé plus de quarante avis
                  différents, mais deux opinions prédominent chez la majorité
                  des savants :
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entre l&apos;assise de l&apos;imam et la fin de la prière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Cet avis, soutenu par Muslim dans son Sahih, identifie
                        l&apos;heure d&apos;exaucement au moment où l&apos;imam
                        s&apos;assoit sur le minbar pour le sermon jusqu&apos;à
                        la fin de la prière de joumou&apos;a. C&apos;est un
                        moment de recueillement intense où le croyant doit
                        multiplier ses invocations silencieuses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entre la prière de l&apos;Asr et le Maghrib
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Cet avis, choisi par l&apos;imam Ahmad et Ibn
                        al-Qayyim, s&apos;appuie sur un hadith d&apos;Abdullah
                        ibn Salam rapporté par Abu Dawud et an-Nasa&apos;i.
                        C&apos;est la dernière partie de la journée du vendredi,
                        un créneau où le croyant peut se consacrer entièrement
                        à l&apos;invocation.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse pratique recommande de profiter des deux créneaux
                  pour maximiser ses chances de coïncider avec cette heure
                  bénie. Le croyant avisé fait ses douas durant la khutba et
                  réserve également du temps entre l&apos;Asr et le Maghrib
                  pour invoquer Allah avec humilité et insistance.
                </p>

                <HadithCard
                  arabic="التمسوها آخر ساعة بعد العصر"
                  text="Cherchez-la (l'heure d'exaucement) dans la dernière heure après l'Asr."
                  source="Rapporté par Abu Dawud (1048), authentifié par an-Nawawi"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith précise la recommandation du Prophète (paix et
                  salut sur lui) de chercher l&apos;heure d&apos;exaucement
                  dans la dernière heure du vendredi, c&apos;est-à-dire
                  avant le coucher du soleil. Ce moment, souvent négligé par
                  beaucoup de musulmans, est en réalité l&apos;un des plus
                  précieux de toute la semaine. Le croyant qui s&apos;y
                  consacre avec présence du coeur et sincérité dans ses
                  invocations ne sera pas déçu, bi idhnillah.
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
              {/* SECTION 3 : Sourate al-Kahf */}
              {/* ============================================ */}
              <section id="sourate-al-kahf" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La lecture de sourate al-Kahf le vendredi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les actes les plus méritoires du vendredi figure la
                  lecture de <strong>sourate al-Kahf</strong> (la Caverne,
                  sourate 18). Cette sourate, composée de 110 versets, est
                  un trésor de sagesse qui aborde quatre récits majeurs : les
                  Gens de la Caverne, le propriétaire des deux jardins, Moussa
                  et al-Khidr, et Dhul-Qarnayn. Chacun de ces récits illustre
                  une épreuve fondamentale de la vie terrestre et offre des
                  leçons inestimables pour le croyant.
                </p>

                <HadithCard
                  arabic="من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين"
                  text="Celui qui lit sourate al-Kahf le vendredi sera illuminé d'une lumière entre les deux vendredis."
                  source="Rapporté par al-Hakim (2/399), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La &laquo;&nbsp;lumière entre les deux vendredis&nbsp;&raquo;
                  mentionnée dans ce hadith est interprétée par les savants
                  comme une lumière spirituelle qui guide le croyant, le
                  protège des épreuves et illumine son chemin tout au long de
                  la semaine. Cette lumière est à la fois un bouclier contre
                  les tentations et une source de sérénité intérieure.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est permis de lire sourate al-Kahf à n&apos;importe quel
                  moment du vendredi, depuis la nuit du jeudi (après le
                  Maghrib du jeudi) jusqu&apos;au coucher du soleil le
                  vendredi. Certains savants préfèrent la lire avant la
                  prière de joumou&apos;a, tandis que d&apos;autres la
                  récitent le matin ou après la prière de l&apos;Asr. Le plus
                  important est de ne pas laisser passer un vendredi sans
                  cette lecture bénie.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wasbir nafsaka ma&apos;alladhina yad&apos;una Rabbahum bil-ghadati wal-&apos;ashiyyi yuriduna wajhah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Fais preuve de patience avec ceux qui invoquent leur Seigneur matin et soir, désirant Sa Face&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Kahf (18:28)
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre le Dajjal :</strong>{" "}
                      le Prophète a enseigné que la mémorisation des dix
                      premiers versets de sourate al-Kahf protège contre
                      l&apos;épreuve du Dajjal (Muslim, 809).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Quatre épreuves, quatre leçons :</strong>{" "}
                      épreuve de la foi, de la richesse, de la connaissance
                      et du pouvoir, chaque récit offre un enseignement
                      applicable au quotidien.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Accessible à tous :</strong>{" "}
                      même celui qui ne comprend pas l&apos;arabe bénéficie de
                      la récitation, et il est recommandé de lire également la
                      traduction pour méditer sur le sens. Découvrez comment{" "}
                      <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>{" "}
                      pour accéder directement au texte coranique.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Salawat sur le Prophète */}
              {/* ============================================ */}
              <section id="salawat-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les salawat sur le Prophète le vendredi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les actes les plus recommandés le vendredi figure la
                  multiplication des <strong>salawat</strong> (prières sur
                  le Prophète, paix et salut sur lui). Cette pratique est
                  encouragée tous les jours, mais elle revêt une importance
                  particulière le vendredi, jour où le Prophète a
                  spécifiquement exhorté sa communauté à augmenter cette
                  invocation bénie.
                </p>

                <HadithCard
                  arabic="أكثروا عليّ من الصلاة يوم الجمعة وليلة الجمعة فإن صلاتكم معروضة عليّ"
                  text="Multipliez les prières sur moi le vendredi et la nuit du vendredi, car vos prières me sont présentées."
                  source="Rapporté par al-Bayhaqi dans Sunan al-Kubra (3/249), hadith hassan"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle une réalité spirituelle remarquable : les
                  salawat que le croyant envoie sur le Prophète (paix et salut
                  sur lui) lui parviennent effectivement. Cette proximité
                  spirituelle avec le Messager d&apos;Allah est un honneur
                  immense pour le musulman, et le vendredi est le jour où
                  cette connexion est la plus forte. Chaque salawat est une
                  lumière qui relie le croyant à son Prophète bien-aimé.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La salawat ibrahimiyya (formule complète)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La forme la plus complète et la plus méritoire de la salawat
                  est la prière ibrahimiyya, celle que le musulman récite dans
                  le tashahhud final de chaque prière. C&apos;est cette formule
                  que le Prophète (paix et salut sur lui) a enseignée à ses
                  compagnons lorsqu&apos;ils lui ont demandé comment prier sur
                  lui.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma salli &apos;ala Muhammadin wa &apos;ala ali Muhammadin kama sallayta &apos;ala Ibrahima wa &apos;ala ali Ibrahima innaka Hamidun Majid. Allahumma barik &apos;ala Muhammadin wa &apos;ala ali Muhammadin kama barakta &apos;ala Ibrahima wa &apos;ala ali Ibrahima innaka Hamidun Majid.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, prie sur Muhammad et sur la famille de Muhammad comme Tu as prié sur Ibrahim et sur la famille d&apos;Ibrahim, Tu es certes Digne de louange et de gloire. Seigneur, bénis Muhammad et la famille de Muhammad comme Tu as béni Ibrahim et la famille d&apos;Ibrahim, Tu es certes Digne de louange et de gloire&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3370) et Muslim (406)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La formule courte de salawat
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Pour ceux qui souhaitent multiplier les salawat facilement,
                  la formule courte est également valide et peut être répétée
                  tout au long de la journée du vendredi, pendant les trajets,
                  les moments d&apos;attente ou toute autre occasion.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SallAllahu &apos;alayhi wa sallam
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Qu&apos;Allah prie sur lui et lui accorde la paix&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les mérites de la salawat sont immenses : pour chaque prière
                  sur le Prophète, Allah prie dix fois sur celui qui
                  l&apos;a prononcée, dix péchés lui sont effacés et dix
                  degrés lui sont élevés (an-Nasa&apos;i, 1297). Le vendredi,
                  ces récompenses sont multipliées, ce qui fait de la salawat
                  l&apos;un des actes d&apos;adoration les plus rentables
                  pour le croyant. Découvrez également les{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas après la prière</Link>{" "}
                  pour compléter votre pratique quotidienne.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua entre Asr et Maghrib */}
              {/* ============================================ */}
              <section id="doua-asr-maghrib" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas entre Asr et Maghrib le vendredi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le créneau entre la prière de l&apos;Asr et le Maghrib le
                  vendredi est considéré par de nombreux savants comme le
                  moment le plus probable de l&apos;heure d&apos;exaucement.
                  C&apos;est un temps béni où le croyant doit se consacrer
                  entièrement à l&apos;invocation, en choisissant les douas
                  les plus complètes et les plus profondes, issues du Coran
                  et de la Sunna.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici les invocations authentiques les plus recommandées
                  pour ce moment béni du vendredi :
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua du Maître de l&apos;istighfar (sayyid al-istighfar)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation, qualifiée par le Prophète (paix et salut
                  sur lui) de &laquo;&nbsp;maîtresse des demandes de
                  pardon&nbsp;&raquo;, est particulièrement recommandée le
                  vendredi, jour de miséricorde et de pardon.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana &apos;abduka, wa ana &apos;ala &apos;ahdika wa wa&apos;dika mastata&apos;tu, a&apos;udhu bika min sharri ma sana&apos;tu, abu&apos;u laka bi ni&apos;matika &apos;alayya wa abu&apos;u bi dhanbi, faghfir li fa innahu la yaghfiru adh-dhunuba illa Anta.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es mon Seigneur, il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je m&apos;en tiens à Ton pacte et à Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal que j&apos;ai commis. Je reconnais Tes bienfaits sur moi et je reconnais mon péché. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de protection et de guidée
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation prophétique rassemble les demandes
                  essentielles du croyant : la guidée, la piété, la chasteté
                  et la suffisance. Elle est particulièrement appropriée
                  pour l&apos;heure d&apos;exaucement du vendredi.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka al-huda wa at-tuqa wal-&apos;afafa wal-ghina
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande la guidée, la piété, la chasteté et la suffisance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2721)
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation sujud en prière dans une mosquée illustrant le recueillement du vendredi en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Entre l&apos;Asr et le Maghrib, le croyant peut alterner
                  entre les douas prophétiques et les invocations personnelles
                  dans sa propre langue. Il est recommandé de commencer par
                  la louange d&apos;Allah (hamd), de prier sur le Prophète
                  (salawat), puis de présenter ses demandes avec humilité et
                  insistance, avant de conclure par la salawat à nouveau.
                  Cette structure suit l&apos;enseignement prophétique sur
                  l&apos;étiquette de la doua et maximise les chances
                  d&apos;exaucement. Pour approfondir la prière, consultez
                  notre guide sur{" "}
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prier en islam avec excellence spirituelle</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua pendant la khutba */}
              {/* ============================================ */}
              <section id="doua-khutba" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua pendant la khutba du vendredi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le moment de la <strong>khutba</strong> (sermon du vendredi)
                  est un temps sacré où le musulman doit écouter attentivement
                  les paroles de l&apos;imam. Cependant, ce moment est
                  également propice à la doua silencieuse, car plusieurs
                  savants considèrent que l&apos;heure d&apos;exaucement se
                  situe précisément durant cette période. Le croyant peut donc
                  invoquer Allah dans son coeur tout en écoutant le sermon.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  parle durant la khutba commet une faute qui invalide sa
                  récompense du vendredi. C&apos;est pourquoi la doua doit
                  être silencieuse, faite dans le coeur, sans remuer les
                  lèvres de manière visible. Ce silence extérieur combiné à
                  une invocation intérieure intense est l&apos;état idéal du
                  croyant durant le sermon.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhaban-nar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous une belle part en ce monde et une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:201)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua coranique est l&apos;une des invocations les plus
                  complètes de l&apos;islam, car elle englobe le bien de ce
                  monde et de l&apos;au-delà tout en demandant la protection
                  contre le châtiment. Le Prophète (paix et salut sur lui) la
                  récitait fréquemment, et elle est particulièrement adaptée
                  au moment de la khutba où le croyant doit rester bref et
                  concis dans ses invocations intérieures.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Écouter attentivement :</strong>{" "}
                      le silence et l&apos;attention durant la khutba sont
                      obligatoires. La doua se fait dans le coeur, sans
                      déranger les autres fidèles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire &laquo;&nbsp;Amine&nbsp;&raquo; :</strong>{" "}
                      lorsque l&apos;imam fait une doua durant son sermon, le
                      fidèle dit &laquo;&nbsp;Amine&nbsp;&raquo; dans son
                      coeur pour y participer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Entre les deux khutbas :</strong>{" "}
                      la pause entre les deux parties du sermon est un moment
                      particulièrement propice pour la doua, car l&apos;imam
                      se tait et le croyant peut invoquer librement.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Sunnas du vendredi */}
              {/* ============================================ */}
              <section id="sunnas-vendredi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sunnas du vendredi : guide complet
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des douas, le vendredi est un jour riche en sunnas
                  (pratiques prophétiques recommandées) qui permettent au
                  croyant de maximiser les bénédictions de ce jour béni.
                  Chaque sunna accomplie avec sincérité est une source de
                  récompense et de rapprochement d&apos;Allah. Voici les
                  principales sunnas à observer chaque vendredi.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le ghusl (bain rituel)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a fortement
                      recommandé le ghusl le vendredi, le qualifiant de
                      devoir pour chaque musulman pubère. Ce bain n&apos;est
                      pas une simple hygiène corporelle : c&apos;est une
                      purification qui prépare le corps et l&apos;esprit à
                      la rencontre avec Allah lors de la prière
                      congregationnelle (al-Bukhari, 877).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se parfumer et porter ses meilleurs vêtements
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) encourageait les
                      musulmans à se parfumer et à porter leurs plus beaux
                      habits le vendredi. Cette sunna reflète le respect dû
                      à ce jour béni et à la mosquée comme lieu de
                      rassemblement des croyants. C&apos;est un acte de
                      dignité et de considération envers la communauté.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se rendre tôt à la mosquée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné que
                      celui qui se rend tôt à la mosquée le vendredi obtient
                      une récompense considérable : celui qui arrive à la
                      première heure a la récompense de sacrifier un chameau,
                      à la deuxième heure une vache, à la troisième un
                      mouton, et ainsi de suite (al-Bukhari, 881).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le siwak (bâtonnet de nettoyage)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;utilisation du siwak le vendredi est une sunna
                      confirmée. Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Si ce n&apos;était pas que je craigne de
                      rendre la chose difficile pour ma communauté, je leur
                      aurais ordonné le siwak avant chaque prière&nbsp;&raquo;
                      (al-Bukhari, 887). Le vendredi, cette recommandation
                      est encore plus appuyée.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble de ces sunnas forme un rituel complet qui
                  transforme le vendredi en une véritable expérience
                  spirituelle. Le musulman qui les applique avec régularité
                  et sincérité ne fait pas que suivre des recommandations
                  formelles : il vit pleinement la dimension sacrée de ce
                  jour et se rapproche de son Seigneur à travers chaque
                  geste, chaque invocation et chaque acte de dévotion.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est également recommandé de couper ses ongles le vendredi,
                  de faire des aumônes (sadaqat), de visiter les malades et
                  de renforcer les liens familiaux. Le vendredi est un jour de
                  communauté et de solidarité, où le musulman se tourne vers
                  Allah et vers ses frères et soeurs en foi. Pour compléter
                  votre compréhension de la prière, découvrez notre guide sur{" "}
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">prier en islam avec excellence spirituelle</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua après la prière en islam"
                  description="Découvrez les invocations authentiques à réciter après chaque prière pour compléter votre adoration quotidienne."
                  href="/doua-apres-priere-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations du vendredi dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas et sourate al-Kahf avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-apres-priere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua après la prière
                  </Link>
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier en islam avec excellence
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
