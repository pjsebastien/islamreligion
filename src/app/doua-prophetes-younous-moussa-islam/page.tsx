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
    "Doua des prophètes en islam : Younous, Moussa, Ibrahim, Adam et Ayyub",
  description:
    "Découvrez les douas des prophètes en islam : invocations de Younous, Moussa, Ibrahim, Adam, Ayyub et Nuh en arabe avec phonétique et traduction. Hadiths authentiques et leçons spirituelles pour vos épreuves.",
  openGraph: {
    title:
      "Doua des prophètes en islam : Younous, Moussa, Ibrahim, Adam et Ayyub",
    description:
      "Les invocations les plus puissantes des prophètes en islam : textes en arabe, phonétique, traduction et leçons spirituelles tirées du Coran et de la Sunna.",
    url: "https://www.islamreligion.fr/doua-prophetes-younous-moussa-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-prophetes-younous-moussa-islam",
  },
};

const tocItems = [
  { id: "importance-doua-prophetes", label: "L\u2019importance des douas des prophètes" },
  { id: "doua-younous", label: "Doua de Younous dans le ventre de la baleine" },
  { id: "doua-moussa", label: "Doua de Moussa : Rabbi inni lima anzalta" },
  { id: "doua-ibrahim-adam", label: "Douas d\u2019Ibrahim et Adam" },
  { id: "doua-ayyub-nuh", label: "Douas d\u2019Ayyub et Nuh" },
  { id: "lecons-spirituelles", label: "Leçons spirituelles et mise en pratique" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de Younous dans le Coran ?",
    answer:
      "La doua de Younous (paix sur lui) est : « La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin » (Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes). Elle se trouve dans la sourate Al-Anbiya (21:87). Le Prophète (paix et salut sur lui) a affirmé qu&apos;aucun musulman n&apos;invoque Allah avec cette doua sans qu&apos;elle soit exaucée (at-Tirmidhi).",
  },
  {
    question: "Quelle est la doua de Moussa pour demander le bien ?",
    answer:
      "La doua de Moussa (paix sur lui) est : « Rabbi inni lima anzalta ilayya min khayrin faqir » (Seigneur, j&apos;ai grand besoin de tout bien que Tu feras descendre vers moi). Elle se trouve dans la sourate Al-Qasas (28:24). Moussa la prononça alors qu&apos;il était seul, étranger et sans ressources à Madyan, et Allah lui accorda immédiatement un foyer et un mariage.",
  },
  {
    question: "Peut-on réciter les douas des prophètes en français ?",
    answer:
      "Oui, il est permis de faire des invocations en français ou dans toute autre langue. Cependant, les savants recommandent d&apos;apprendre les douas des prophètes en arabe, car ce sont les termes exacts du Coran et ils portent une profondeur spirituelle unique. L&apos;idéal est de mémoriser le texte arabe tout en comprenant le sens.",
  },
  {
    question: "Quelle est la doua d'Adam après son péché ?",
    answer:
      "La doua d&apos;Adam et Hawwa (paix sur eux) après avoir désobéi est : « Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakounanna min al-khasirin » (Seigneur, nous nous sommes fait du tort à nous-mêmes. Si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons parmi les perdants). Elle se trouve dans la sourate Al-A&apos;raf (7:23).",
  },
  {
    question: "Quand réciter la doua de Younous ?",
    answer:
      "La doua de Younous peut être récitée à tout moment, mais elle est particulièrement recommandée lors des épreuves, des difficultés et des moments d&apos;angoisse. Le Prophète (paix et salut sur lui) a enseigné qu&apos;elle est efficace pour tout musulman en difficulté. Les moments propices incluent le dernier tiers de la nuit, en prosternation et entre l&apos;adhan et l&apos;iqama.",
  },
  {
    question: "Pourquoi les douas des prophètes sont-elles si puissantes ?",
    answer:
      "Les douas des prophètes sont puissantes car elles sont rapportées dans le Coran par Allah Lui-même, ce qui garantit leur authenticité et leur agrément. Elles ont été prononcées dans des situations extrêmes par les meilleurs des hommes, avec une sincérité absolue. Le Coran mentionne qu&apos;Allah les a exaucées, ce qui confirme leur efficacité et encourage les croyants à les utiliser.",
  },
  {
    question: "Quelle doua réciter face à une épreuve difficile ?",
    answer:
      "Face à une épreuve difficile, plusieurs douas prophétiques sont recommandées : la doua de Younous (« La ilaha illa Anta subhanaka... ») pour toute situation de détresse, la doua de Moussa (« Rabbi inni lima anzalta... ») pour demander le bien, et la doua d&apos;Ayyub (« Anni massaniya ad-durru wa Anta arham ar-rahimin ») pour les épreuves de santé ou de perte. Combiner ces invocations avec la patience (sabr) est la voie prophétique.",
  },
];

export default function DouaProphetesYounousMoussaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-prophetes-younous-moussa-islam/#article",
        headline:
          "Doua des prophètes en islam : Younous, Moussa, Ibrahim, Adam et Ayyub",
        description:
          "Découvrez les douas des prophètes en islam : invocations de Younous, Moussa, Ibrahim, Adam, Ayyub et Nuh en arabe avec phonétique et traduction.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2026-03-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-prophetes-younous-moussa-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-prophetes-younous-moussa-islam/#breadcrumb",
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
            name: "Doua des prophètes",
            item: "https://www.islamreligion.fr/doua-prophetes-younous-moussa-islam",
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
          title="Doua des prophètes en islam : les invocations de Younous, Moussa, Ibrahim et plus"
          subtitle="Les invocations les plus puissantes du Coran, prononcées par les prophètes dans les moments les plus difficiles. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Coran ouvert avec calligraphie dorée et lumière symbolisant les invocations des prophètes en islam"
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
                <span className="text-foreground">Doua des prophètes</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les douas des prophètes occupent une place exceptionnelle en
                  islam : ce sont des invocations rapportées directement par
                  Allah dans le Coran, prononcées par Ses meilleurs serviteurs
                  dans des épreuves extrêmes. Younous dans le ventre de la
                  baleine, Moussa seul et démuni à Madyan, Ibrahim jeté dans le
                  feu, Adam après son péché, Ayyub frappé par la maladie et Nuh
                  face à son peuple rebelle : chacune de ces douas a été exaucée
                  par Allah, et chacune reste une clé puissante pour le croyant
                  dans ses propres épreuves.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance des douas des prophètes */}
              {/* ============================================ */}
              <section id="importance-doua-prophetes" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des douas des prophètes en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les prophètes (anbiya) sont les êtres les plus proches
                  d&apos;Allah et les plus aimés de Lui. Leurs invocations,
                  rapportées dans le Coran, ne sont pas de simples paroles :
                  elles ont été choisies par Allah pour être préservées dans Son
                  Livre éternel. Ce choix divin confère à ces douas une
                  puissance et une noblesse que nulle autre invocation ne
                  possède. Le croyant qui les récite marche sur les traces des
                  meilleurs des hommes et utilise des mots agréés par le
                  Créateur Lui-même.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce qui rend ces invocations particulièrement précieuses,
                  c&apos;est le contexte dans lequel elles ont été prononcées.
                  Chaque prophète a fait face à une épreuve d&apos;une intensité
                  hors du commun : la solitude absolue dans les ténèbres
                  marines pour Younous, l&apos;exil et le dénuement total pour
                  Moussa, les flammes d&apos;un bûcher immense pour Ibrahim, le
                  poids du premier péché de l&apos;humanité pour Adam, une
                  maladie dévastatrice pour Ayyub, et des siècles de rejet pour
                  Nuh. Malgré la gravité de ces situations, chaque prophète
                  s&apos;est tourné vers Allah avec une confiance absolue, et
                  chaque fois, Allah a répondu.
                </p>

                <HadithCard
                  arabic="دعوة ذي النون إذ دعا وهو في بطن الحوت: لا إله إلا أنت سبحانك إني كنت من الظالمين، فإنه لم يدع بها رجل مسلم في شيء قط إلا استجاب الله له"
                  text="L'invocation de Dhun-Nun (Younous) lorsqu'il invoqua dans le ventre de la baleine : 'Il n'y a de divinité que Toi, gloire à Toi, j'étais parmi les injustes.' Aucun musulman n'invoque Allah avec cette doua pour quelque chose sans qu'Allah ne l'exauce."
                  source="Rapporté par at-Tirmidhi (3505), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre un principe fondamental : les douas des
                  prophètes ne sont pas réservées à eux seuls. Le Prophète
                  Muhammad (paix et salut sur lui) a explicitement enseigné que
                  tout musulman peut bénéficier de leur puissance. Ces
                  invocations constituent un trésor spirituel accessible à
                  chaque croyant, quelle que soit l&apos;épreuve qu&apos;il
                  traverse. Le Coran les a préservées précisément pour que les
                  générations futures s&apos;en inspirent et les utilisent dans
                  leur propre relation avec Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Des invocations agréées par Allah :</strong>{" "}
                      chaque doua prophétique mentionnée dans le Coran a été
                      suivie d&apos;une réponse divine, ce qui prouve leur
                      acceptation auprès d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Des modèles de sincérité :</strong> les prophètes
                      incarnent l&apos;ikhlas (sincérité) absolu dans
                      l&apos;invocation, un enseignement que le croyant doit
                      s&apos;efforcer de reproduire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Des remèdes pour toute épreuve :</strong> que
                      l&apos;on traverse une difficulté financière, une maladie,
                      une injustice ou une angoisse, il existe une doua
                      prophétique adaptée à chaque situation.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-levees-illustration-lumiere.jpg"
                    alt="Mains levées en invocation avec lumière divine symbolisant les douas des prophètes en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de Younous */}
              {/* ============================================ */}
              <section id="doua-younous" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de Younous dans le ventre de la baleine
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;histoire de Younous (Jonas, paix sur lui) est l&apos;une
                  des plus poignantes du Coran. Envoyé au peuple de Ninive pour
                  les appeler à Allah, il quitta sa ville par frustration devant
                  le refus de son peuple, sans attendre la permission divine. Il
                  embarqua sur un navire qui fut pris dans une tempête violente.
                  Désigné par le sort, il fut jeté à la mer et avalé par un
                  immense poisson. Dans ces ténèbres triples — la nuit, la mer
                  et le ventre de la baleine — Younous se tourna vers Allah avec
                  une invocation d&apos;une profondeur exceptionnelle.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua est considérée par les savants comme l&apos;une des
                  invocations les plus puissantes de l&apos;islam. Elle
                  contient trois éléments essentiels : le tawhid (affirmation
                  de l&apos;unicité d&apos;Allah), le tasbih (glorification
                  d&apos;Allah et reconnaissance de Sa perfection) et
                  l&apos;aveu de sa propre faute (reconnaissance de son injustice
                  envers soi-même). Les savants expliquent que c&apos;est cette
                  combinaison qui rend la doua de Younous si efficace : le
                  serviteur reconnaît la grandeur d&apos;Allah tout en
                  reconnaissant sa propre faiblesse et son besoin absolu de Son
                  pardon.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah décrit la réponse à cette invocation dans le Coran :
                  &laquo;&nbsp;Nous l&apos;exauçâmes et le sauvâmes de son
                  angoisse. C&apos;est ainsi que Nous sauvons les
                  croyants&nbsp;&raquo; (Al-Anbiya, 21:88). La dernière phrase
                  est capitale : &laquo;&nbsp;C&apos;est ainsi que Nous sauvons
                  les croyants&nbsp;&raquo;. Elle signifie que cette promesse de
                  délivrance ne concerne pas uniquement Younous, mais
                  s&apos;étend à tout croyant sincère qui invoque Allah avec
                  cette même doua. C&apos;est une garantie divine universelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn al-Qayyim (qu&apos;Allah lui fasse miséricorde) a
                  commenté cette doua en expliquant que Younous avait été parmi
                  ceux qui glorifient Allah (musabbihin) avant même d&apos;être
                  englouti. Le Coran souligne : &laquo;&nbsp;S&apos;il
                  n&apos;avait pas été parmi ceux qui glorifient Allah, il
                  serait resté dans le ventre jusqu&apos;au Jour de la
                  Résurrection&nbsp;&raquo; (As-Saffat, 37:143-144). Cela
                  enseigne au croyant l&apos;importance de maintenir le dhikr
                  (rappel d&apos;Allah) dans les moments de facilité, car
                  c&apos;est cette relation préétablie avec Allah qui rend
                  l&apos;invocation efficace dans les moments de difficulté.
                </p>

                <HadithCard
                  arabic="من دعا بدعاء يونس استجيب له"
                  text="Quiconque invoque avec la doua de Younous sera exaucé."
                  source="Rapporté par al-Hakim, authentifié par adh-Dhahabi"
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
              {/* SECTION 3 : Doua de Moussa */}
              {/* ============================================ */}
              <section id="doua-moussa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de Moussa : &laquo;&nbsp;Rabbi inni lima anzalta&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le prophète Moussa (Moïse, paix sur lui) a prononcé cette
                  invocation dans un contexte de vulnérabilité extrême. Après
                  avoir accidentellement tué un homme en Égypte, il dut fuir la
                  colère de Pharaon et parcourir le désert seul, sans
                  provisions ni compagnon, jusqu&apos;à atteindre Madyan. Arrivé
                  épuisé et affamé, il aida deux femmes à abreuver leur
                  troupeau, puis s&apos;assit à l&apos;ombre d&apos;un arbre et
                  adressa à Allah cette doua empreinte d&apos;humilité et de
                  confiance totale.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi inni lima anzalta ilayya min khayrin faqir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, j&apos;ai grand besoin de tout bien que Tu feras descendre vers moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Qasas (28:24)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La beauté de cette doua réside dans sa formulation. Moussa ne
                  demande pas quelque chose de précis : il ne dit pas
                  &laquo;&nbsp;donne-moi de la nourriture&nbsp;&raquo; ou
                  &laquo;&nbsp;accorde-moi un refuge&nbsp;&raquo;. Il
                  s&apos;adresse à Allah avec un état de besoin total et une
                  ouverture complète à tout bien que le Créateur voudra lui
                  accorder. Cette attitude d&apos;abandon confiant (tawakkul)
                  est l&apos;essence même de la relation du serviteur avec son
                  Seigneur : reconnaître sa pauvreté absolue face à la richesse
                  infinie d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La réponse d&apos;Allah fut immédiate et dépassait tout ce que
                  Moussa pouvait espérer. L&apos;une des deux femmes revint vers
                  lui avec une invitation de leur père, le prophète
                  Chu&apos;ayb (selon certains commentateurs). Moussa reçut en
                  une seule réponse divine : un abri, de la nourriture, un
                  emploi, une épouse et une famille. Ce récit enseigne au
                  croyant que lorsqu&apos;il s&apos;en remet sincèrement à
                  Allah en reconnaissant son besoin, la réponse divine peut
                  dépasser toutes ses attentes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est particulièrement recommandée pour celui
                  qui cherche un emploi, un mariage, un logement ou tout autre
                  besoin matériel et spirituel. Les savants soulignent que le
                  mot &laquo;&nbsp;khayr&nbsp;&raquo; (bien) dans cette doua est
                  général et englobe tout type de bienfait. C&apos;est pourquoi
                  cette doua convient à toute situation de besoin, sans
                  restriction. Pour approfondir les invocations liées aux
                  épreuves, consultez notre article sur la{" "}
                  <Link href="/doua-moment-difficile-epreuve-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua dans les moments difficiles</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Intérieur de mosquée avec arches et lumière symbolisant la sérénité des invocations prophétiques"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas d'Ibrahim et Adam */}
              {/* ============================================ */}
              <section id="doua-ibrahim-adam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas d&apos;Ibrahim et Adam : confiance et repentir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ibrahim (Abraham, paix sur lui) et Adam (paix sur lui)
                  représentent deux modèles complémentaires dans l&apos;art de
                  l&apos;invocation. Ibrahim est le symbole de la confiance
                  absolue en Allah (tawakkul), tandis qu&apos;Adam incarne le
                  repentir sincère (tawba). Leurs douas, préservées dans le
                  Coran, offrent au croyant des clés spirituelles pour naviguer
                  entre la confiance en la protection divine et la
                  reconnaissance de ses propres faiblesses.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua d&apos;Ibrahim : HasbunAllahu wa ni&apos;mal wakil
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsqu&apos;Ibrahim fut jeté dans un immense bûcher par son
                  peuple, il prononça cette invocation qui exprime une confiance
                  totale en Allah. Les flammes étaient si intenses que les
                  oiseaux tombaient en vol à proximité. Pourtant, Ibrahim ne
                  demanda même pas à être sauvé du feu : il se contenta de
                  remettre son affaire à Allah, sachant que le meilleur Garant
                  ne délaisse jamais Ses serviteurs sincères.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbunAllahu wa ni&apos;mal wakil
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah nous suffit, Il est le meilleur Garant&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:173)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La réponse d&apos;Allah fut extraordinaire :
                  &laquo;&nbsp;Nous dîmes : Ô feu, sois fraîcheur et paix
                  pour Ibrahim&nbsp;&raquo; (Al-Anbiya, 21:69). Le feu
                  lui-même obéit à l&apos;ordre d&apos;Allah et devint un
                  jardin frais pour Ibrahim. Cette invocation fut également
                  celle des compagnons du Prophète lors de la bataille de Uhud,
                  lorsqu&apos;on leur annonça que les armées ennemies
                  s&apos;étaient rassemblées contre eux. Leur réponse fut la
                  même confiance absolue, et Allah les protégea.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua d&apos;Adam : Rabbana zalamna anfusana
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après avoir mangé de l&apos;arbre interdit au Paradis, Adam
                  et Hawwa (Ève) prirent conscience de leur faute. Contrairement
                  à Iblis (Satan) qui refusa de reconnaître son erreur et
                  s&apos;enfonça dans l&apos;orgueil, Adam et Hawwa se
                  tournèrent immédiatement vers Allah avec cette doua de
                  repentir sincère. C&apos;est la première doua de repentir de
                  l&apos;histoire de l&apos;humanité, et elle demeure un modèle
                  pour tout musulman qui a commis une faute.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana zalamna anfusana wa in lam taghfir lana wa tarhamna lanakounanna min al-khasirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, nous nous sommes fait du tort à nous-mêmes. Si Tu ne nous pardonnes pas et ne nous fais pas miséricorde, nous serons certainement parmi les perdants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-A&apos;raf (7:23)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua contient les piliers du repentir sincère : la
                  reconnaissance de la faute (&laquo;&nbsp;nous nous sommes
                  fait du tort&nbsp;&raquo;), la demande de pardon
                  (&laquo;&nbsp;pardonne-nous&nbsp;&raquo;), l&apos;appel à la
                  miséricorde (&laquo;&nbsp;fais-nous miséricorde&nbsp;&raquo;)
                  et la conscience des conséquences (&laquo;&nbsp;nous serons
                  parmi les perdants&nbsp;&raquo;). Allah accepta le repentir
                  d&apos;Adam et le choisit comme premier prophète de
                  l&apos;humanité, montrant que la faute suivie d&apos;un
                  repentir sincère ne diminue pas le statut du croyant auprès
                  d&apos;Allah, mais peut au contraire l&apos;élever.
                </p>

                <HadithCard
                  arabic="كل بني آدم خطاء وخير الخطائين التوابون"
                  text="Tous les fils d'Adam sont fautifs, et les meilleurs des fautifs sont ceux qui se repentent."
                  source="Rapporté par at-Tirmidhi (2499), Ibn Majah (4251)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas d'Ayyub et Nuh */}
              {/* ============================================ */}
              <section id="doua-ayyub-nuh" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas d&apos;Ayyub et Nuh : patience et persévérance
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ayyub (Job, paix sur lui) et Nuh (Noé, paix sur lui)
                  incarnent la patience (sabr) poussée à son paroxysme. Ayyub
                  endura des années de maladie, de perte de biens et
                  d&apos;enfants, tandis que Nuh prêcha pendant 950 ans face à
                  un peuple obstinément rebelle. Leurs douas sont des modèles
                  pour tout croyant qui traverse une épreuve longue et
                  éprouvante, où la patience semble atteindre ses limites.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua d&apos;Ayyub : appel à la miséricorde divine
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Ayyub fut frappé par une maladie qui dura des années. Il
                  perdit sa santé, ses biens et ses enfants. Ses proches
                  l&apos;abandonnèrent les uns après les autres, à
                  l&apos;exception de son épouse fidèle. Malgré cette épreuve
                  extrême, Ayyub ne se plaignit jamais devant les gens. Quand
                  il s&apos;adressa enfin à Allah, il le fit avec une pudeur
                  et une délicatesse remarquables : il ne demanda pas
                  explicitement la guérison, mais se contenta de constater son
                  état et de rappeler la miséricorde infinie d&apos;Allah.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Anni massaniya ad-durru wa Anta arham ar-rahimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Le mal m&apos;a touché et Tu es le plus Miséricordieux des miséricordieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:83)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La réponse d&apos;Allah fut immédiate :
                  &laquo;&nbsp;Nous l&apos;exauçâmes, dissipâmes le mal
                  dont il souffrait, lui rendîmes sa famille et autant
                  qu&apos;eux avec eux, par miséricorde de Notre part et
                  en rappel pour les adorateurs&nbsp;&raquo; (Al-Anbiya,
                  21:84). Allah non seulement guérit Ayyub, mais lui rendit le
                  double de ce qu&apos;il avait perdu. Cette doua est
                  particulièrement recommandée pour les malades et ceux qui
                  traversent des épreuves de santé ou de perte.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua de Nuh : appel au secours divin
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Nuh prêcha son peuple pendant 950 ans. Malgré cette
                  persévérance extraordinaire, seule une poignée de personnes
                  crut en lui. Son propre fils refusa de le suivre et périt
                  dans le déluge. Face à l&apos;obstination de son peuple et
                  après avoir épuisé tous les moyens de persuasion — prêche
                  public, conseil privé, appel de jour et de nuit — Nuh adressa
                  cette invocation à Allah.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ إِنِّي مَغْلُوبٌ فَانتَصِرْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi inni maghlubun fantasir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je suis vaincu, accorde-moi le secours&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Qamar (54:10)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua, d&apos;une concision frappante, exprime le moment
                  où le prophète reconnaît avoir atteint la limite de ses
                  capacités humaines et s&apos;en remet entièrement à la
                  puissance divine. La réponse d&apos;Allah fut le déluge
                  universel, qui anéantit les oppresseurs et sauva Nuh et les
                  croyants dans l&apos;Arche. Cette invocation enseigne au
                  croyant que même après des décennies d&apos;épreuve, la
                  délivrance divine peut survenir en un instant. La{" "}
                  <Link href="/doua-opprime-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de l&apos;opprimé</Link>{" "}
                  complète cette dimension avec d&apos;autres invocations pour
                  celui qui subit l&apos;injustice.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Leçons spirituelles */}
              {/* ============================================ */}
              <section id="lecons-spirituelles" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Leçons spirituelles et mise en pratique des douas prophétiques
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les douas des prophètes ne sont pas de simples formules à
                  réciter mécaniquement. Elles portent en elles des
                  enseignements profonds que le croyant doit intérioriser pour
                  en tirer le maximum de bénéfice spirituel. Voici les
                  principales leçons que l&apos;on peut extraire de ces
                  invocations coraniques.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tawhid est la clé de l&apos;exaucement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La doua de Younous commence par l&apos;affirmation de
                        l&apos;unicité d&apos;Allah (&laquo;&nbsp;La ilaha
                        illa Anta&nbsp;&raquo;). Avant de demander quoi que ce
                        soit, le serviteur doit réaffirmer sa foi en
                        l&apos;unicité d&apos;Allah. C&apos;est le fondement
                        sans lequel aucune invocation ne trouve sa pleine
                        puissance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Reconnaître ses fautes avant de demander
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Younous, Adam et d&apos;autres prophètes ont commencé
                        leur invocation par l&apos;aveu de leurs manquements.
                        Cette humilité devant Allah ouvre les portes de la
                        miséricorde. Le croyant qui reconnaît sa faiblesse est
                        plus proche de l&apos;exaucement que celui qui
                        s&apos;estime méritant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tawakkul : s&apos;en remettre totalement à Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ibrahim avec &laquo;&nbsp;HasbunAllahu wa ni&apos;mal
                        wakil&nbsp;&raquo; et Moussa avec son appel ouvert au
                        bien illustrent le tawakkul absolu. Le croyant ne
                        dicte pas à Allah comment répondre : il Lui fait
                        confiance pour choisir la meilleure réponse, même si
                        elle diffère de ses attentes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir le dhikr avant l&apos;épreuve
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran souligne que Younous était déjà parmi les
                        &laquo;&nbsp;musabbihin&nbsp;&raquo; (ceux qui
                        glorifient Allah) avant d&apos;être englouti. Celui
                        qui entretient une relation constante avec Allah dans
                        la facilité sera secouru dans la difficulté. Le dhikr
                        quotidien est un investissement spirituel dont les
                        fruits apparaissent au moment de l&apos;épreuve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La patience précède la délivrance
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ayyub patienta des années, Nuh des siècles. Aucun
                        d&apos;entre eux ne fut délivré instantanément. La
                        patience (sabr) n&apos;est pas une attente passive :
                        c&apos;est une adoration active qui rapproche le
                        serviteur d&apos;Allah et prépare le terrain pour la
                        réponse divine. Le croyant doit persévérer dans la
                        doua sans se décourager, sachant qu&apos;Allah répond
                        au moment le plus opportun.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En pratique, les savants recommandent d&apos;intégrer les
                  douas des prophètes dans les adhkar (invocations) quotidiens.
                  La doua de Younous peut être récitée dans la prosternation
                  (sujud), la doua de Moussa lorsqu&apos;on cherche un bienfait,
                  la doua d&apos;Adam après un péché, et la doua d&apos;Ayyub
                  lors d&apos;une épreuve de santé. Le croyant qui mémorise ces
                  invocations et les comprend possède un arsenal spirituel
                  d&apos;une puissance inégalée. Pour découvrir d&apos;autres
                  invocations essentielles, consultez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet de la doua en islam</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua dans les moments difficiles"
                  description="Découvrez les invocations authentiques pour traverser les épreuves avec foi et sérénité."
                  href="/doua-moment-difficile-epreuve-islam"
                />
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
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
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/doua-moment-difficile-epreuve-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua dans les moments difficiles
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                  <Link
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur
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
