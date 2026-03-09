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
    "Doua des toilettes en islam : invocations pour entrer et sortir",
  description:
    "Découvrez la doua des toilettes en islam : invocation pour entrer (Allahumma inni a&apos;udhu bika) et sortir (ghufranaka) des toilettes, adab, istinja et règles de propreté selon la Sunna.",
  openGraph: {
    title:
      "Doua des toilettes en islam : invocations pour entrer et sortir",
    description:
      "Les invocations authentiques pour entrer et sortir des toilettes en islam : textes en arabe, phonétique, traduction et adab selon la Sunna du Prophète.",
    url: "https://www.islamreligion.fr/doua-toilettes-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-toilettes-islam",
  },
};

const tocItems = [
  { id: "importance-doua-toilettes", label: "Importance de la doua des toilettes" },
  { id: "doua-entrer-toilettes", label: "Doua pour entrer aux toilettes" },
  { id: "doua-sortir-toilettes", label: "Doua pour sortir des toilettes" },
  { id: "adab-toilettes-islam", label: "Adab des toilettes en islam" },
  { id: "istinja-proprete", label: "Istinja et propreté en islam" },
  { id: "douas-complementaires", label: "Douas complémentaires et rappels" },
  { id: "erreurs-courantes", label: "Erreurs courantes à éviter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua pour entrer aux toilettes en islam ?",
    answer:
      "La doua pour entrer aux toilettes est : « Allahumma inni a&apos;udhu bika min al-khubthi wal-khaba&apos;ith » (Seigneur, je cherche refuge auprès de Toi contre les démons mâles et femelles). Cette invocation est rapportée par al-Bukhari et Muslim. On la prononce avant d&apos;entrer, en commençant par « Bismillah » selon certains savants.",
  },
  {
    question: "Quelle est la doua pour sortir des toilettes ?",
    answer:
      "La doua pour sortir des toilettes est « Ghufranaka » (Je Te demande pardon). Elle est rapportée par Abu Dawud, at-Tirmidhi et Ibn Majah d&apos;après Aisha (qu&apos;Allah soit satisfait d&apos;elle). Certaines versions ajoutent : « Al-hamdu lillahi alladhi adh-haba &apos;anni al-adha wa &apos;afani » (Louange à Allah qui a éloigné de moi la nuisance et m&apos;a accordé le bien-être).",
  },
  {
    question: "Faut-il entrer aux toilettes avec le pied gauche ou droit ?",
    answer:
      "La Sunna recommande d&apos;entrer aux toilettes avec le pied gauche et d&apos;en sortir avec le pied droit. Cette règle s&apos;inscrit dans le principe général en islam selon lequel la droite est réservée aux actes nobles et honorables, tandis que la gauche est utilisée pour les actes liés à la purification des impuretés.",
  },
  {
    question: "Peut-on invoquer Allah à l'intérieur des toilettes ?",
    answer:
      "Les savants recommandent de ne pas prononcer le nom d&apos;Allah ni faire de dhikr à l&apos;intérieur des toilettes, par respect pour le nom d&apos;Allah. La doua d&apos;entrée se prononce avant de franchir le seuil, et la doua de sortie se prononce après en être sorti. Si une personne éternue à l&apos;intérieur, elle peut louer Allah dans son coeur sans le prononcer à voix haute.",
  },
  {
    question: "Qu'est-ce que l'istinja en islam ?",
    answer:
      "L&apos;istinja est le nettoyage des parties intimes après avoir satisfait un besoin naturel. Il se fait avec de l&apos;eau, ou à défaut avec un nombre impair de pierres (au minimum trois). L&apos;istinja est obligatoire avant d&apos;accomplir la prière. Il fait partie des règles de propreté (tahara) fondamentales en islam.",
  },
  {
    question: "Peut-on lire le Coran aux toilettes ?",
    answer:
      "Non, il est interdit de lire le Coran ou de réciter des versets coraniques à l&apos;intérieur des toilettes. De même, il est déconseillé d&apos;y entrer avec un objet portant le nom d&apos;Allah ou des versets coraniques, sauf en cas de nécessité (comme un pendentif qui ne peut être retiré facilement).",
  },
  {
    question: "Quel est le lien entre la doua des toilettes et la protection contre les djinns ?",
    answer:
      "La doua d&apos;entrée aux toilettes demande la protection d&apos;Allah contre « al-khubthi wal-khaba&apos;ith », c&apos;est-à-dire les démons mâles et femelles. Les savants expliquent que les lieux d&apos;aisance sont des endroits où les shayatin (démons) se rassemblent. Cette invocation sert donc de bouclier spirituel contre leur présence et leur nuisance.",
  },
  {
    question: "La doua des toilettes est-elle obligatoire ou recommandée ?",
    answer:
      "La doua des toilettes est une Sunna mu&apos;akkadah (fortement recommandée), pas une obligation (fardh). Cependant, le musulman soucieux de suivre la Sunna du Prophète (paix et salut sur lui) veillera à la pratiquer systématiquement. Elle fait partie des invocations quotidiennes (adhkar) que le croyant récite pour se protéger tout au long de la journée.",
  },
];

export default function DouaToilettesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-toilettes-islam/#article",
        headline:
          "Doua des toilettes en islam : invocations pour entrer et sortir",
        description:
          "Découvrez la doua des toilettes en islam : invocation pour entrer et sortir, adab, istinja et règles de propreté selon la Sunna.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-03-30",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-toilettes-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-toilettes-islam/#breadcrumb",
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
            name: "Doua des toilettes",
            item: "https://www.islamreligion.fr/doua-toilettes-islam",
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
          title="Doua des toilettes en islam : invocations pour entrer et sortir"
          subtitle="Les invocations authentiques à réciter avant d'entrer et après être sorti des toilettes, les adab (bienséances) et les règles de propreté selon la Sunna du Prophète (paix et salut sur lui)."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation doua avec rayons dorés symbolisant la protection divine en islam"
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
                <span className="text-foreground">Doua des toilettes</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua des toilettes</strong> fait partie des
                  invocations quotidiennes que tout musulman devrait connaître.
                  Avant d&apos;entrer, on récite &laquo;&nbsp;Allahumma inni
                  a&apos;udhu bika min al-khubthi wal-khaba&apos;ith&nbsp;&raquo;
                  pour se protéger des démons. En sortant, on dit
                  &laquo;&nbsp;Ghufranaka&nbsp;&raquo; pour demander pardon à
                  Allah. Ces invocations, accompagnées des bienséances (adab)
                  prophétiques comme entrer du pied gauche et sortir du pied
                  droit, transforment un acte quotidien en occasion de rappel
                  et de protection spirituelle.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance de la doua des toilettes */}
              {/* ============================================ */}
              <section id="importance-doua-toilettes" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Pourquoi réciter une doua avant les toilettes en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam accorde une attention particulière à chaque
                  instant de la vie du croyant, y compris les actes les plus
                  intimes. La <strong>doua des toilettes</strong> illustre
                  parfaitement cette dimension : même lorsqu&apos;il se rend
                  aux lieux d&apos;aisance, le musulman reste connecté à Allah
                  par l&apos;invocation. Cette pratique s&apos;inscrit dans un
                  cadre plus large de protection spirituelle que le Prophète
                  (paix et salut sur lui) a enseigné à sa communauté.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam expliquent que les lieux
                  d&apos;aisance sont considérés comme des endroits où les
                  shayatin (démons) se rassemblent et trouvent refuge. C&apos;est
                  pourquoi le Prophète (paix et salut sur lui) a prescrit une
                  invocation spécifique avant d&apos;y entrer, afin de demander
                  la protection d&apos;Allah contre leur présence et leur
                  nuisance. Cette doua agit comme un bouclier spirituel qui
                  accompagne le croyant même dans les moments les plus
                  ordinaires de sa journée.
                </p>

                <HadithCard
                  arabic="إن هذه الحشوش محتضرة، فإذا أتى أحدكم الخلاء فليقل: أعوذ بالله من الخبث والخبائث"
                  text="Ces lieux d'aisance sont fréquentés (par les démons). Lorsque l'un de vous se rend aux toilettes, qu'il dise : Je cherche refuge auprès d'Allah contre les démons mâles et femelles."
                  source="Rapporté par Abu Dawud (6) et Ibn Majah (296)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle un aspect fondamental de la vision islamique
                  du monde : l&apos;univers invisible coexiste avec le monde
                  visible, et le croyant doit se prémunir contre les nuisances
                  spirituelles en toute circonstance. La doua des toilettes
                  n&apos;est donc pas un simple rituel, mais une véritable
                  demande de protection adressée au Créateur. Elle rappelle
                  aussi au musulman que chaque acte, même le plus anodin, peut
                  devenir une occasion de se rapprocher d&apos;Allah et de
                  gagner des récompenses. Pour approfondir les invocations
                  quotidiennes, consultez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet des douas en islam</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre les shayatin :</strong>{" "}
                      l&apos;invocation crée un voile protecteur entre le
                      croyant et les démons présents dans ces lieux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maintien du lien avec Allah :</strong> même dans
                      l&apos;intimité, le musulman reste conscient de la
                      présence divine et de Sa protection.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Application de la Sunna :</strong> suivre ces
                      invocations constitue un acte d&apos;obéissance au
                      Prophète (paix et salut sur lui) et une source de
                      récompense.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière illustrant les invocations quotidiennes du musulman dont la doua des toilettes"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua pour entrer aux toilettes */}
              {/* ============================================ */}
              <section id="doua-entrer-toilettes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour entrer aux toilettes : texte arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;invocation à réciter avant d&apos;entrer aux toilettes
                  est l&apos;une des plus connues des adhkar (invocations de
                  rappel) quotidiens. Le Prophète (paix et salut sur lui) la
                  récitait systématiquement, et elle fait partie des premières
                  douas que les parents enseignent à leurs enfants. Voici le
                  texte complet avec la prononciation et la traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Bismillah (en premier)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Plusieurs savants recommandent de commencer par dire
                  &laquo;&nbsp;Bismillah&nbsp;&raquo; (Au nom d&apos;Allah)
                  avant la doua principale. Cette mention du nom d&apos;Allah
                  constitue en elle-même un voile protecteur, comme l&apos;a
                  enseigné le Prophète (paix et salut sur lui).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Recommandé par plusieurs savants avant la doua principale
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Allahumma inni a&apos;udhu bika min al-khubthi wal-khaba&apos;ith
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la doua principale et authentique pour entrer aux
                  toilettes. Elle est rapportée dans les recueils de al-Bukhari
                  et Muslim, ce qui en fait une invocation de la plus haute
                  authenticité. Le Prophète (paix et salut sur lui) la
                  prononçait avant de franchir le seuil du lieu d&apos;aisance.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika min al-khubthi wal-khaba&apos;ith
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre les démons mâles et femelles&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (142) et Muslim (375)
                  </p>
                </div>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم إذا دخل الخلاء قال: اللهم إني أعوذ بك من الخبث والخبائث"
                  text="Lorsque le Prophète (paix et salut sur lui) entrait aux toilettes, il disait : Seigneur, je cherche refuge auprès de Toi contre les démons mâles et femelles."
                  source="Rapporté par al-Bukhari (142) et Muslim (375), d'après Anas ibn Malik"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le terme <strong>al-khubthi</strong> (الخبث) désigne les
                  djinns mâles malfaisants, tandis que <strong>al-khaba&apos;ith</strong>{" "}
                  (الخبائث) désigne les djinns femelles. Certains savants,
                  comme l&apos;imam an-Nawawi, précisent que le mot al-khubthi
                  peut aussi se lire al-khubth (avec un sukun sur le ba),
                  signifiant alors &laquo;&nbsp;le mal&nbsp;&raquo; de manière
                  générale. Dans les deux lectures, le sens reste une demande
                  de protection contre tout mal spirituel présent dans ces
                  lieux. Cette doua est à prononcer <strong>avant</strong>{" "}
                  d&apos;entrer, pas une fois à l&apos;intérieur, par respect
                  pour le nom d&apos;Allah.
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
              {/* SECTION 3 : Doua pour sortir des toilettes */}
              {/* ============================================ */}
              <section id="doua-sortir-toilettes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour sortir des toilettes : Ghufranaka
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Après avoir satisfait son besoin naturel, le musulman récite
                  une invocation en sortant des toilettes. La doua la plus
                  authentique est le simple mot &laquo;&nbsp;Ghufranaka&nbsp;&raquo;,
                  rapporté par Aisha (qu&apos;Allah soit satisfait d&apos;elle).
                  Cette invocation courte mais profonde exprime la demande de
                  pardon adressée à Allah après avoir quitté un lieu où
                  l&apos;on ne pouvait pas L&apos;invoquer.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Ghufranaka
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est l&apos;invocation principale à réciter en sortant
                  des toilettes. Sa brièveté la rend facile à mémoriser, même
                  pour les enfants et les nouveaux musulmans.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    غُفْرَانَكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ghufranaka
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je Te demande pardon&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (30), at-Tirmidhi (7) et Ibn Majah (300)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont donné plusieurs explications au fait de
                  demander pardon en sortant des toilettes. L&apos;imam
                  an-Nawawi et d&apos;autres érudits mentionnent que le
                  musulman demande pardon car il était dans un lieu où il ne
                  pouvait pas mentionner Allah, ce qui constitue une forme de
                  &laquo;&nbsp;manquement&nbsp;&raquo; par rapport à son état
                  habituel de dhikr. D&apos;autres savants expliquent que
                  l&apos;on remercie Allah pour le bienfait de l&apos;évacuation
                  des impuretés du corps et que l&apos;on demande pardon de
                  ne pas avoir suffisamment remercié pour cette grâce.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua complémentaire de sortie
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Certaines versions rapportées dans les recueils de hadiths
                  mentionnent une invocation plus longue que le Prophète (paix
                  et salut sur lui) prononçait parfois en sortant des toilettes.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنِّي الْأَذَى وَعَافَانِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdu lillahi alladhi adh-haba &apos;anni al-adha wa &apos;afani
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui a éloigné de moi la nuisance et m&apos;a accordé le bien-être&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (301)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua exprime la gratitude envers Allah pour un bienfait
                  que l&apos;on oublie souvent : la capacité du corps à évacuer
                  les déchets et les toxines. Lorsque cette fonction est
                  perturbée, la personne réalise à quel point ce processus
                  naturel est une grâce divine. Le musulman qui récite cette
                  invocation prend conscience de ce bienfait et remercie son
                  Seigneur en conséquence. La{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour sortir de la maison</Link>{" "}
                  suit le même principe de protection lors des transitions.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Adab des toilettes */}
              {/* ============================================ */}
              <section id="adab-toilettes-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Adab (bienséances) des toilettes en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations, l&apos;islam prescrit un ensemble
                  de bienséances (adab) liées à l&apos;utilisation des
                  toilettes. Ces règles, tirées de la Sunna du Prophète (paix
                  et salut sur lui), couvrent la manière d&apos;entrer, de se
                  comporter à l&apos;intérieur et de sortir. Elles témoignent
                  de la globalité de l&apos;enseignement islamique qui ne
                  néglige aucun aspect de la vie quotidienne.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entrer du pied gauche, sortir du pied droit
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La Sunna recommande d&apos;entrer aux toilettes en
                        avançant le pied gauche en premier, et d&apos;en sortir
                        avec le pied droit. Ce principe est l&apos;inverse de
                        ce qui est prescrit pour la mosquée (pied droit pour
                        entrer, gauche pour sortir). En islam, la droite est
                        réservée aux actes nobles et honorables, tandis que la
                        gauche est utilisée pour les situations liées aux
                        impuretés.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas faire face à la qibla ni lui tourner le dos
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a interdit de faire
                        face à la direction de la Ka&apos;ba (qibla) ou de lui
                        tourner le dos lors de la satisfaction des besoins
                        naturels. Cette règle s&apos;applique principalement en
                        plein air. Pour les toilettes modernes construites dans
                        les bâtiments, les savants divergent : certains
                        considèrent que l&apos;interdiction est levée lorsque
                        des murs séparent la personne de la qibla.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas parler ni faire de dhikr à l&apos;intérieur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est déconseillé de parler, de prononcer le nom
                        d&apos;Allah ou de faire du dhikr à l&apos;intérieur
                        des toilettes, par respect pour le nom d&apos;Allah.
                        C&apos;est pourquoi la doua d&apos;entrée se récite
                        avant de franchir le seuil et la doua de sortie
                        après en être sorti. Si la personne éternue à
                        l&apos;intérieur, elle peut louer Allah dans son coeur
                        sans le prononcer à voix haute.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Utiliser la main gauche pour le nettoyage
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné
                        d&apos;utiliser la main gauche pour l&apos;istinja
                        (nettoyage intime) et de réserver la main droite pour
                        manger, boire et les actes honorables. Cette règle
                        hygiénique, prescrite il y a plus de quatorze siècles,
                        est reconnue aujourd&apos;hui comme une mesure sanitaire
                        élémentaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas entrer avec des objets portant le nom d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est recommandé de retirer tout objet portant le nom
                        d&apos;Allah, des versets coraniques ou des invocations
                        avant d&apos;entrer aux toilettes, par respect pour ces
                        textes sacrés. Si cela n&apos;est pas possible (comme
                        un pendentif difficile à retirer), les savants
                        autorisent d&apos;entrer avec, en le cachant sous les
                        vêtements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
                    alt="Illustration lumineuse subtile symbolisant la pureté et la propreté spirituelle en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Istinja et propreté */}
              {/* ============================================ */}
              <section id="istinja-proprete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Istinja et propreté : les règles de purification en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;<strong>istinja</strong> désigne le nettoyage des
                  parties intimes après avoir satisfait un besoin naturel.
                  C&apos;est une obligation avant d&apos;accomplir la prière,
                  car la pureté (tahara) est une condition de validité de la
                  salat. L&apos;islam a prescrit des règles précises pour cette
                  purification, alliant propreté physique et dignité
                  spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit concernant les
                  habitants de Quba, qu&apos;Allah a loués dans le Coran pour
                  leur amour de la purification :
                </p>

                <HadithCard
                  arabic="إن فيه رجالا يحبون أن يتطهروا والله يحب المطهرين"
                  text="Il y a là des hommes qui aiment se purifier, et Allah aime ceux qui se purifient."
                  source="Rapporté par at-Tirmidhi (3100)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont expliqué que ces compagnons pratiquaient
                  l&apos;istinja avec de l&apos;eau après chaque besoin
                  naturel, ce qui était une pratique exemplaire. L&apos;eau
                  reste le moyen le plus complet et le plus recommandé pour
                  l&apos;istinja. À défaut d&apos;eau, on peut utiliser des
                  pierres ou du papier toilette, à condition de s&apos;essuyer
                  un nombre impair de fois (au minimum trois).
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;istinja avec l&apos;eau
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      C&apos;est la méthode la plus complète et la plus
                      recommandée. L&apos;eau purifie entièrement et élimine
                      toute trace d&apos;impureté. On utilise la main gauche
                      pour le nettoyage et l&apos;eau courante ou un récipient
                      pour verser. C&apos;est la pratique que le Prophète
                      (paix et salut sur lui) préférait.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;istijmar (avec des pierres)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      En l&apos;absence d&apos;eau, on peut utiliser des
                      pierres, du papier toilette ou tout matériau absorbant
                      et pur. Il faut s&apos;essuyer au minimum trois fois et
                      terminer sur un nombre impair. On ne peut pas utiliser
                      d&apos;os ni de matières impures pour l&apos;essuyage.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Combiner les deux méthodes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;idéal, selon les savants, est de combiner
                      l&apos;essuyage puis le lavage à l&apos;eau. Cette
                      méthode assure une propreté maximale et correspond à la
                      pratique des meilleurs compagnons du Prophète (paix et
                      salut sur lui).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Lien avec les ablutions
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;istinja précède les ablutions (wudu). Sans
                      istinja, les ablutions ne sont pas valides selon la
                      majorité des savants. Pour en savoir plus sur la
                      purification complète, consultez notre article sur la{" "}
                      <Link href="/doua-ablutions-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua des ablutions</Link>.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La propreté en islam ne se limite pas à l&apos;istinja. Le
                  Prophète (paix et salut sur lui) a dit : &laquo;&nbsp;La
                  propreté (tahara) est la moitié de la foi&nbsp;&raquo;
                  (Muslim). Cette parole prophétique élève la propreté physique
                  au rang d&apos;acte de foi. Le musulman qui veille à sa
                  purification ne fait pas qu&apos;entretenir son corps : il
                  accomplit un acte d&apos;adoration qui le rapproche de son
                  Créateur. Chaque geste de propreté, de l&apos;istinja aux
                  ablutions en passant par le bain rituel (ghusl), s&apos;inscrit
                  dans cette vision holistique de la pureté.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas complémentaires */}
              {/* ============================================ */}
              <section id="douas-complementaires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas complémentaires et rappels liés aux toilettes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des deux douas principales (entrée et sortie),
                  plusieurs invocations et rappels sont liés à l&apos;usage
                  des toilettes et à la purification. Voici un récapitulatif
                  complet des textes à connaître, avec leur contexte
                  d&apos;utilisation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua après les ablutions
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après l&apos;istinja et les ablutions qui suivent, le
                  musulman récite cette invocation qui renouvelle sa
                  profession de foi et demande à être parmi ceux qui se
                  purifient.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ash-hadu an la ilaha illAllah wahdahu la sharika lah, wa ash-hadu anna Muhammadan &apos;abduhu wa rasuluh. Allahumma ij&apos;alni min at-tawwabin waj&apos;alni min al-mutatahhirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;J&apos;atteste qu&apos;il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah, Seul sans associé, et j&apos;atteste que Muhammad est Son serviteur et messager. Seigneur, fais de moi un de ceux qui se repentent et fais de moi un de ceux qui se purifient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (55) et Muslim (234)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  6. Invocation de gratitude pour le bienfait du corps
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le musulman est invité à remercier Allah pour le
                  fonctionnement de son corps, notamment la capacité
                  d&apos;évacuer les déchets. Ce rappel de gratitude
                  transforme un acte banal en moment de contemplation
                  spirituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِيهِ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdu lillahi alladhi at&apos;amanihi wa razaqanihi min ghayri hawlin minni wa la quwwa
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui m&apos;a nourri et m&apos;a accordé cette subsistance sans aucune force ni puissance de ma part&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (4023) et at-Tirmidhi (3458)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;ensemble de ces invocations montre comment l&apos;islam
                  encadre chaque moment de la vie quotidienne par le rappel
                  d&apos;Allah. Du réveil au coucher, en passant par les repas,
                  les sorties et même les toilettes, le musulman dispose
                  d&apos;un répertoire complet de douas qui maintiennent le
                  lien entre le serviteur et son Seigneur. Pour découvrir
                  l&apos;ensemble de ces invocations, explorez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet des douas en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Erreurs courantes */}
              {/* ============================================ */}
              <section id="erreurs-courantes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Erreurs courantes à éviter aux toilettes en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  De nombreux musulmans commettent des erreurs par
                  méconnaissance des règles liées aux toilettes. Certaines de
                  ces erreurs touchent à la validité de la purification et,
                  par extension, à la validité de la prière. Il est donc
                  essentiel de les connaître et de les corriger.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter la doua à l&apos;intérieur des toilettes :</strong>{" "}
                      la doua d&apos;entrée doit être prononcée avant de
                      franchir le seuil, pas une fois à l&apos;intérieur.
                      De même, &laquo;&nbsp;Ghufranaka&nbsp;&raquo; se dit
                      après être sorti.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Négliger l&apos;istinja :</strong> se contenter
                      d&apos;un essuyage insuffisant compromet la pureté
                      nécessaire à la prière. L&apos;istinja doit être complet
                      et minutieux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Utiliser la main droite pour le nettoyage :</strong>{" "}
                      le Prophète (paix et salut sur lui) a expressément interdit
                      d&apos;utiliser la main droite pour l&apos;istinja
                      (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Entrer avec le pied droit :</strong> c&apos;est
                      le pied gauche qui entre en premier aux toilettes, et
                      le pied droit qui en sort en premier. L&apos;inverse
                      s&apos;applique pour la mosquée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire face à la qibla :</strong> s&apos;orienter
                      vers la Ka&apos;ba ou lui tourner le dos lors de la
                      satisfaction des besoins est interdit, surtout en plein
                      air.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Utiliser le téléphone avec du Coran :</strong>{" "}
                      consulter des applications coraniques ou écouter du
                      Coran aux toilettes est déconseillé par les savants,
                      par respect pour la parole d&apos;Allah.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le respect de ces bienséances ne relève pas de la simple
                  formalité. Il s&apos;agit d&apos;une expression concrète de
                  la piété (taqwa) dans les détails de la vie quotidienne. Le
                  Prophète (paix et salut sur lui) a enseigné ces règles avec
                  soin, car elles contribuent à la purification tant physique
                  que spirituelle du croyant. Le musulman qui les applique
                  témoigne de son attachement à la Sunna dans toutes les
                  dimensions de sa vie.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua des ablutions en islam"
                  description="Découvrez les invocations authentiques à réciter pendant et après les ablutions (wudu) pour compléter votre purification."
                  href="/doua-ablutions-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
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
                    href="/doua-ablutions-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua des ablutions
                  </Link>
                  <Link
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour sortir de la maison
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
