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
    "Doua accouchement en islam : invocations pour la mère et le nouveau-né",
  description:
    "Découvrez les doua pour l'accouchement en islam : invocations en arabe avec phonétique et traduction, sourate Maryam, doua pendant le travail, adhan dans l'oreille du bébé, tahnik et douas de protection pour la mère et l'enfant.",
  openGraph: {
    title:
      "Doua accouchement en islam : invocations pour la mère et le nouveau-né",
    description:
      "Les invocations authentiques pour l'accouchement en islam : douas en arabe, sourate Maryam, prières pendant le travail, et rites d'accueil du nouveau-né selon la Sunna.",
    url: "https://www.islamreligion.fr/doua-accouchement-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-accouchement-islam",
  },
};

const tocItems = [
  { id: "preparation-spirituelle", label: "Préparation spirituelle avant l'accouchement" },
  { id: "douas-travail", label: "Douas pendant le travail et l'accouchement" },
  { id: "sourate-maryam", label: "Sourate Maryam et l'accouchement" },
  { id: "doua-nouveau-ne", label: "Doua pour le nouveau-né : adhan et tahnik" },
  { id: "douas-protection", label: "Douas de protection pour la mère et l'enfant" },
  { id: "invocations-textes", label: "Textes des douas en arabe, phonétique et traduction" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter pendant l'accouchement en islam ?",
    answer:
      "Pendant l&apos;accouchement, la femme musulmane peut réciter plusieurs invocations authentiques. Parmi les plus recommandées : « La ilaha illa Allah al-&apos;Adhim al-Halim » (Il n&apos;y a de divinité qu&apos;Allah, l&apos;Immense, le Clément), « Rabbi la tadharni fardan wa anta khayru al-warithin » (Seigneur, ne me laisse pas seul, Tu es le meilleur des héritiers) et les versets de la sourate Maryam relatifs à l&apos;accouchement. La récitation de « HasbiyAllahu la ilaha illa Huwa » est également recommandée pour se remettre entièrement à Allah.",
  },
  {
    question: "Peut-on lire la sourate Maryam pendant l'accouchement ?",
    answer:
      "Oui, la lecture de la sourate Maryam (sourate 19) est une pratique courante et recommandée par de nombreux savants lors de l&apos;accouchement. Cette sourate contient le récit de la naissance miraculeuse de &apos;Issa (Jésus) par Maryam (Marie), et les versets décrivant l&apos;accouchement sont considérés comme une source de réconfort et d&apos;apaisement pour la femme en travail. Les versets 23 à 26 sont particulièrement récités.",
  },
  {
    question: "Que dire dans l'oreille du bébé à la naissance en islam ?",
    answer:
      "Selon la Sunna, il est recommandé de prononcer l&apos;adhan (appel à la prière) dans l&apos;oreille droite du nouveau-né dès sa naissance. Le Prophète (paix et salut sur lui) a fait l&apos;adhan dans l&apos;oreille de al-Hasan ibn Ali à sa naissance (rapporté par Abu Dawud et at-Tirmidhi). Ainsi, les premières paroles que le bébé entend sont la proclamation de l&apos;unicité d&apos;Allah et la grandeur du message de l&apos;islam.",
  },
  {
    question: "Qu'est-ce que le tahnik pour le nouveau-né ?",
    answer:
      "Le tahnik est une pratique prophétique qui consiste à mâcher une datte (ou un aliment sucré) et à en frotter le palais du nouveau-né. Le Prophète (paix et salut sur lui) pratiquait le tahnik pour les nouveau-nés qu&apos;on lui apportait, comme rapporté dans al-Bukhari et Muslim à propos du fils d&apos;Abu Talha. Cette pratique est considérée comme une sunna et symbolise le fait de commencer la vie avec douceur, tout en bénéficiant de la bénédiction du Prophète.",
  },
  {
    question: "La femme en couches peut-elle invoquer Allah sans ablutions ?",
    answer:
      "Oui, la femme en travail ou en couches peut invoquer Allah (faire des douas) sans ablutions. La doua est permise en tout état et en toute circonstance, que l&apos;on soit en état de pureté rituelle ou non. Seule la prière (salat) et la lecture directe du Coran nécessitent les ablutions selon la majorité des savants. La femme peut donc réciter des invocations, faire du dhikr et supplier Allah durant tout l&apos;accouchement sans restriction.",
  },
  {
    question: "Quelles sont les douas de protection pour le nouveau-né ?",
    answer:
      "Les principales douas de protection pour le nouveau-né incluent : « U&apos;idhuka bi kalimat Allahi at-tammah min kulli shaytanin wa hammah wa min kulli &apos;aynin lammah » (Je te place sous la protection des paroles parfaites d&apos;Allah contre tout démon, tout animal venimeux et tout mauvais oeil). Le Prophète (paix et salut sur lui) utilisait cette invocation pour protéger al-Hasan et al-Husayn (rapporté par al-Bukhari). La récitation des sourates al-Falaq et an-Nas est également recommandée.",
  },
  {
    question: "Le mari peut-il faire des douas pour sa femme pendant l'accouchement ?",
    answer:
      "Absolument, le mari est encouragé à invoquer Allah pour sa femme pendant l&apos;accouchement. Il peut faire des douas pour faciliter l&apos;accouchement, réciter le Coran, faire du dhikr et demander la protection d&apos;Allah pour la mère et l&apos;enfant. La doua du mari pour sa femme est une forme de soutien spirituel puissant, et l&apos;invocation du musulman pour son frère ou sa soeur en son absence est exaucée selon le hadith rapporté par Muslim.",
  },
];

export default function DouaAccouchementIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-accouchement-islam/#article",
        headline:
          "Doua accouchement en islam : invocations pour la mère et le nouveau-né",
        description:
          "Découvrez les doua pour l'accouchement en islam : invocations en arabe, sourate Maryam, doua pendant le travail, adhan, tahnik et douas de protection.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-03-25",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-accouchement-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-accouchement-islam/#breadcrumb",
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
            name: "Doua pour l'accouchement",
            item: "https://www.islamreligion.fr/doua-accouchement-islam",
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
          title="Doua accouchement en islam : invocations pour la mère et le nouveau-né"
          subtitle="Les invocations authentiques pour accompagner la naissance, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquée avec moucharabieh et lumière dorée symbolisant la sérénité de la doua pour l'accouchement en islam"
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
                <span className="text-foreground">Doua pour l&apos;accouchement</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;accouchement est un moment intense où la femme musulmane se
                  tourne naturellement vers Allah pour demander facilité, protection
                  et bénédiction. L&apos;islam offre un ensemble complet
                  d&apos;invocations et de pratiques spirituelles pour accompagner
                  la naissance : douas pendant le travail, lecture de la sourate
                  Maryam, adhan dans l&apos;oreille du nouveau-né, tahnik et douas
                  de protection. Ces rites prophétiques transforment
                  l&apos;accouchement en un acte d&apos;adoration et de confiance
                  absolue en Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Préparation spirituelle */}
              {/* ============================================ */}
              <section id="preparation-spirituelle" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Préparation spirituelle avant l&apos;accouchement en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La préparation à l&apos;accouchement en islam ne se limite pas
                  aux aspects médicaux et matériels. Elle englobe une dimension
                  spirituelle profonde qui permet à la future mère de vivre ce
                  moment avec sérénité, confiance et proximité avec Allah. La{" "}
                  <Link href="/doua-grossesse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua pendant la grossesse
                  </Link>{" "}
                  prépare le coeur et l&apos;esprit à cette épreuve bénie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les semaines précédant l&apos;accouchement sont un moment
                  privilégié pour intensifier les invocations et le dhikr. La
                  femme enceinte est encouragée à multiplier les istighfar
                  (demandes de pardon), car le Prophète (paix et salut sur lui) a
                  enseigné que le repentir ouvre les portes de la facilité.
                  L&apos;épreuve de l&apos;accouchement, bien que naturelle, est
                  reconnue en islam comme un acte de grande valeur spirituelle. Le
                  Coran lui-même évoque les souffrances de la mère en les
                  associant à la noblesse de la maternité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les pratiques recommandées avant l&apos;accouchement, on
                  trouve la lecture régulière du Coran, en particulier la sourate
                  Maryam et la sourate Yusuf, qui contiennent des récits
                  d&apos;épreuves suivies de délivrance divine. La femme enceinte
                  peut également pratiquer la sadaqa (aumône), car le Prophète
                  (paix et salut sur lui) a dit que l&apos;aumône éteint la
                  colère du Seigneur et repousse la mauvaise mort. Se confier
                  entièrement à Allah par le tawakkul (la confiance en Dieu) est
                  la clé d&apos;une préparation spirituelle réussie.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier les istighfar :</strong> demander
                      pardon à Allah purifie le coeur et attire Sa miséricorde
                      sur la mère et l&apos;enfant à naître.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lire le Coran quotidiennement :</strong> la
                      récitation apaise l&apos;âme et crée un environnement
                      spirituel bénéfique pour le bébé dans le ventre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire des douas spécifiques :</strong> invoquer
                      Allah pour un accouchement facile, un bébé en bonne santé
                      et une descendance pieuse est une sunna des prophètes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratiquer le tawakkul :</strong> placer sa
                      confiance totale en Allah, tout en prenant les moyens
                      médicaux nécessaires, est l&apos;équilibre enseigné par
                      l&apos;islam.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en doua avec rayons dorés symbolisant l'invocation pour l'accouchement en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Douas pendant le travail */}
              {/* ============================================ */}
              <section id="douas-travail" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas pendant le travail et l&apos;accouchement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le moment du travail et de l&apos;accouchement est l&apos;un
                  des instants les plus propices à l&apos;exaucement des douas.
                  La douleur, la vulnérabilité et la sincérité du coeur créent
                  les conditions idéales pour une invocation acceptée par Allah.
                  La femme en travail se trouve dans un état de détresse naturelle
                  (idtirar) qui rapproche la servante de son Seigneur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pendant les contractions et le travail, la femme musulmane peut
                  réciter les invocations prophétiques de la détresse. Le Prophète
                  (paix et salut sur lui) a enseigné plusieurs douas puissantes
                  pour les moments de difficulté, qui s&apos;appliquent
                  parfaitement à l&apos;accouchement. L&apos;essentiel est de
                  maintenir le lien avec Allah par le dhikr et l&apos;invocation,
                  même entre les contractions, en répétant des formules simples
                  comme &laquo;&nbsp;Ya Allah&nbsp;&raquo;, &laquo;&nbsp;Ya
                  Rahman&nbsp;&raquo; ou &laquo;&nbsp;Ya Latif&nbsp;&raquo;.
                </p>

                <HadithCard
                  arabic="دعوة ذي النون إذ دعا وهو في بطن الحوت: لا إله إلا أنت سبحانك إني كنت من الظالمين، فإنه لم يدع بها رجل مسلم في شيء قط إلا استجاب الله له"
                  text="L'invocation de Dhun-Nun (Younous) lorsqu'il invoqua dans le ventre de la baleine : 'Il n'y a de divinité que Toi, gloire à Toi, j'ai certes été parmi les injustes.' Aucun musulman n'invoque avec cette doua dans une situation sans qu'Allah ne l'exauce."
                  source="Rapporté par at-Tirmidhi (3505), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation de Younous (paix sur lui) est
                  particulièrement adaptée au moment de l&apos;accouchement, car
                  elle exprime à la fois la reconnaissance de l&apos;unicité
                  d&apos;Allah, la glorification de Sa perfection et
                  l&apos;humilité du serviteur. La femme en travail, dans sa
                  douleur, peut trouver un immense réconfort en sachant que cette
                  doua est garantie d&apos;être exaucée. L&apos;imam Ahmad a
                  rapporté que cette invocation est bénéfique dans toute
                  situation de détresse, qu&apos;elle soit physique ou
                  émotionnelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mari et les proches présents sont également encouragés à
                  invoquer Allah pour la femme en couches. La{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua de protection
                  </Link>{" "}
                  peut être récitée par le père ou tout membre de la famille pour
                  demander la sécurité de la mère et de l&apos;enfant. Le
                  Prophète (paix et salut sur lui) a enseigné que la doua du
                  musulman pour son frère ou sa soeur en son absence est exaucée,
                  et un ange dit &laquo;&nbsp;Amine, et à toi pareil&nbsp;&raquo;.
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
              {/* SECTION 3 : Sourate Maryam */}
              {/* ============================================ */}
              <section id="sourate-maryam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sourate Maryam et l&apos;accouchement : le récit de la naissance de &apos;Issa
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La sourate Maryam (sourate 19 du Coran) occupe une place
                  centrale dans la tradition des douas liées à
                  l&apos;accouchement. Cette sourate contient le récit détaillé
                  de la naissance miraculeuse de &apos;Issa (Jésus, paix sur lui)
                  par Maryam (Marie), une naissance unique dans l&apos;histoire
                  de l&apos;humanité, sans père, par la seule volonté d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les versets 23 à 26 de la sourate Maryam décrivent le moment de
                  l&apos;accouchement avec une profondeur émotionnelle saisissante.
                  Maryam, seule et vulnérable, ressent les douleurs de
                  l&apos;enfantement au pied d&apos;un palmier. Dans sa détresse,
                  elle dit : &laquo;&nbsp;Malheur à moi ! Que je fusse morte avant
                  cet instant ! Et que je fusse totalement oubliée !&nbsp;&raquo;
                  (Coran 19:23). Ce cri de douleur, loin d&apos;être un péché, est
                  l&apos;expression humaine d&apos;une souffrance intense
                  qu&apos;Allah a consignée dans Son Livre avec tendresse et
                  miséricorde.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La réponse divine ne se fait pas attendre. Allah envoie un ange
                  qui la rassure : &laquo;&nbsp;Ne t&apos;afflige pas. Ton
                  Seigneur a placé à tes pieds une source. Secoue vers toi le
                  tronc du palmier : il fera tomber sur toi des dattes fraîches et
                  mûres. Mange donc et bois et que ton oeil se
                  réjouisse&nbsp;&raquo; (Coran 19:24-26). Ce passage contient
                  plusieurs enseignements pour la femme en couches : Allah ne
                  l&apos;abandonne jamais, Il pourvoit à ses besoins même dans les
                  moments les plus difficiles, et la nourriture (en particulier
                  les dattes) est recommandée pour renforcer la mère.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  De nombreux savants recommandent la lecture de ces versets
                  pendant le travail pour plusieurs raisons. D&apos;abord, le
                  récit rappelle que si Allah a facilité un accouchement
                  miraculeux pour Maryam, Il est capable de faciliter tout
                  accouchement. Ensuite, la mention des dattes dans ce contexte
                  coranique a conduit les médecins musulmans à recommander la
                  consommation de dattes en fin de grossesse, une pratique dont
                  les bienfaits ont été confirmés par des études scientifiques
                  modernes montrant que les dattes facilitent la dilatation du col
                  de l&apos;utérus.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains jointes en prière et doua illustrant l'invocation pendant l'accouchement en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua pour le nouveau-né */}
              {/* ============================================ */}
              <section id="doua-nouveau-ne" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour le nouveau-né : adhan dans l&apos;oreille et tahnik
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam accorde une importance considérable aux premiers
                  instants de vie du nouveau-né. Dès la naissance, plusieurs
                  pratiques prophétiques permettent d&apos;accueillir le bébé dans
                  la communauté musulmane et de le placer sous la protection
                  d&apos;Allah. La{" "}
                  <Link href="/doua-naissance-nouveau-ne-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua pour la naissance du nouveau-né
                  </Link>{" "}
                  fait partie intégrante de ces rites d&apos;accueil bénis.
                </p>

                <HadithCard
                  arabic="رأيت رسول الله صلى الله عليه وسلم أذن في أذن الحسن بن علي حين ولدته فاطمة بالصلاة"
                  text="J'ai vu le Messager d'Allah (paix et salut sur lui) faire l'adhan dans l'oreille d'al-Hasan ibn Ali lorsque Fatima le mit au monde."
                  source="Rapporté par Abu Dawud (5105) et at-Tirmidhi (1514)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;adhan dans l&apos;oreille du nouveau-né est une sunna
                  d&apos;une profondeur symbolique remarquable. Les premières
                  paroles que l&apos;enfant entend dans ce monde sont
                  &laquo;&nbsp;Allahu Akbar&nbsp;&raquo; (Allah est le plus Grand)
                  et &laquo;&nbsp;La ilaha illa Allah&nbsp;&raquo; (Il n&apos;y a
                  de divinité qu&apos;Allah). Cette proclamation établit dès le
                  premier souffle le lien entre le nouveau-né et son Créateur.
                  L&apos;adhan est prononcé dans l&apos;oreille droite, et selon
                  certains savants, l&apos;iqama dans l&apos;oreille gauche,
                  bien que cette dernière pratique soit discutée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le <strong>tahnik</strong> est une autre pratique prophétique
                  essentielle. Il consiste à mâcher une datte molle et à en
                  frotter doucement le palais du nouveau-né avec le doigt. Le
                  Prophète (paix et salut sur lui) pratiquait lui-même ce rite pour
                  les bébés qu&apos;on lui apportait, invoquant la bénédiction
                  d&apos;Allah sur eux. Abu Musa al-Ash&apos;ari rapporte
                  qu&apos;il apporta son fils au Prophète qui lui fit le tahnik
                  avec une datte et invoqua la bénédiction pour lui (al-Bukhari
                  et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les autres sunna liées à la naissance, on trouve le choix
                  d&apos;un bon prénom pour l&apos;enfant, la aqiqa (sacrifice
                  d&apos;un animal le septième jour), le rasage des cheveux du
                  bébé et la circoncision pour les garçons. L&apos;ensemble de
                  ces pratiques forme un cadre spirituel complet qui entoure le
                  nouveau-né de bénédictions dès ses premiers instants de vie.
                  Chacun de ces actes est accompagné de douas spécifiques
                  demandant à Allah de bénir l&apos;enfant, de le protéger et
                  d&apos;en faire un serviteur pieux.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas de protection */}
              {/* ============================================ */}
              <section id="douas-protection" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas de protection pour la mère et l&apos;enfant
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La protection spirituelle de la mère et du nouveau-né est une
                  priorité dans l&apos;enseignement prophétique. Le Prophète (paix
                  et salut sur lui) accordait une attention particulière à la
                  protection des enfants contre le mauvais oeil, les djinns et
                  toute forme de mal. Ces{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    douas de protection en islam
                  </Link>{" "}
                  sont d&apos;autant plus importantes pour le nouveau-né,
                  particulièrement vulnérable dans ses premiers jours de vie.
                </p>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم يعوذ الحسن والحسين يقول: أعيذكما بكلمات الله التامة من كل شيطان وهامة ومن كل عين لامة"
                  text="Le Messager d'Allah (paix et salut sur lui) protégeait al-Hasan et al-Husayn en disant : 'Je vous place sous la protection des paroles parfaites d'Allah contre tout démon, tout animal venimeux et tout mauvais oeil.'"
                  source="Rapporté par al-Bukhari (3371)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation prophétique est l&apos;une des plus puissantes
                  pour la protection des enfants. Le Prophète (paix et salut sur
                  lui) ajoutait que c&apos;est avec cette même doua
                  qu&apos;Ibrahim (Abraham, paix sur lui) protégeait Isma&apos;il
                  et Ishaq (Ismaël et Isaac). Ce lien avec les prophètes
                  antérieurs montre la continuité de cette pratique protectrice à
                  travers les générations prophétiques. Les parents sont donc
                  encouragés à réciter cette invocation quotidiennement sur leurs
                  enfants, en particulier le soir avant le coucher.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour la mère en période post-natale, les douas de protection
                  sont également essentielles. La période des couches (nifas) est
                  un moment de grande vulnérabilité physique et émotionnelle. La
                  récitation des sourates al-Falaq et an-Nas (les deux
                  protectrices), d&apos;ayat al-Kursi et des adhkar du matin et
                  du soir constitue un bouclier spirituel contre tout mal. Le mari
                  et la famille sont encouragés à veiller sur la mère, à
                  l&apos;entourer de bienveillance et à invoquer régulièrement
                  Allah pour sa guérison rapide et sa protection.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;ensemble de la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua en islam
                  </Link>{" "}
                  nous enseigne que l&apos;invocation est une arme spirituelle
                  accessible à tout musulman. En période de naissance, cette arme
                  prend une dimension particulière car elle protège non seulement
                  la mère mais aussi le nouveau-né, un être pur et innocent qui
                  entre dans un monde rempli d&apos;épreuves. Les parents qui
                  prennent l&apos;habitude de réciter les douas prophétiques pour
                  leurs enfants dès la naissance posent les fondations d&apos;une
                  éducation islamique solide et d&apos;une protection durable.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Textes des douas */}
              {/* ============================================ */}
              <section id="invocations-textes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Textes des douas pour l&apos;accouchement en arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici les principales invocations authentiques à réciter avant,
                  pendant et après l&apos;accouchement. Chaque doua est présentée
                  avec son texte arabe, sa translittération phonétique et sa
                  traduction en français pour faciliter la mémorisation et la
                  compréhension.
                </p>

                {/* Doua 1 */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de la détresse (Younous)
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Phonétique
                  </p>
                  <p className="mt-1 italic text-foreground">
                    La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Traduction
                  </p>
                  <p className="mt-1 text-foreground">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi,
                    j&apos;ai certes été parmi les injustes.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Coran 21:87 — Doua de Younous (paix sur lui) dans le ventre de
                    la baleine. Le Prophète a garanti son exaucement dans toute
                    situation de détresse.
                  </p>
                </div>

                {/* Doua 2 */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour demander la facilité
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Phonétique
                  </p>
                  <p className="mt-1 italic text-foreground">
                    Allahumma la sahla illa ma ja&apos;altahu sahlan, wa Anta
                    taj&apos;alu al-hazna idha shi&apos;ta sahlan
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Traduction
                  </p>
                  <p className="mt-1 text-foreground">
                    &laquo;&nbsp;Ô Allah, rien n&apos;est facile sauf ce que Tu
                    rends facile, et Tu rends l&apos;affliction facile si Tu le
                    veux.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Rapporté par Ibn Hibban (974), authentifié. Doua
                    particulièrement adaptée aux moments de douleur pendant le
                    travail.
                  </p>
                </div>

                {/* Doua 3 */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de remise à Allah (tawakkul)
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Phonétique
                  </p>
                  <p className="mt-1 italic text-foreground">
                    HasbiyAllahu la ilaha illa Huwa, &apos;alayhi tawakkaltu wa
                    Huwa Rabbu al-&apos;Arshi al-&apos;Adhim
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Traduction
                  </p>
                  <p className="mt-1 text-foreground">
                    &laquo;&nbsp;Allah me suffit, il n&apos;y a de divinité que
                    Lui. En Lui je place ma confiance et Il est le Seigneur du
                    Trône immense.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Coran 9:129 — Le Prophète (paix et salut sur lui) a enseigné
                    que celui qui récite cette doua sept fois le matin et le soir,
                    Allah lui suffira contre tout ce qui le préoccupe (Abu Dawud).
                  </p>
                </div>

                {/* Doua 4 */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de protection pour le nouveau-né
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Phonétique
                  </p>
                  <p className="mt-1 italic text-foreground">
                    U&apos;idhukuma bi kalimati Allahi at-tammah min kulli
                    shaytanin wa hammah wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Traduction
                  </p>
                  <p className="mt-1 text-foreground">
                    &laquo;&nbsp;Je vous place sous la protection des paroles
                    parfaites d&apos;Allah contre tout démon, tout animal venimeux
                    et tout mauvais oeil.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Rapporté par al-Bukhari (3371). Le Prophète utilisait cette
                    invocation pour protéger al-Hasan et al-Husayn, comme le
                    faisait Ibrahim pour Isma&apos;il et Ishaq.
                  </p>
                </div>

                {/* Doua 5 */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua pour une descendance pieuse
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right text-2xl leading-loose text-foreground" dir="rtl">
                    رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Phonétique
                  </p>
                  <p className="mt-1 italic text-foreground">
                    Rabbi hab li min ladunka dhurriyyatan tayyibatan innaka
                    sami&apos;u ad-du&apos;a&apos;
                  </p>
                  <p className="mt-3 text-sm font-medium text-secondary">
                    Traduction
                  </p>
                  <p className="mt-1 text-foreground">
                    &laquo;&nbsp;Seigneur, accorde-moi de Ta part une descendance
                    bonne et pure. Tu es certes Celui qui entend les
                    invocations.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-xs text-foreground-secondary">
                    Coran 3:38 — Doua de Zakariyya (paix sur lui) demandant à
                    Allah un enfant pieux. Invocation idéale avant et après
                    l&apos;accouchement.
                  </p>
                </div>
              </section>

              {/* AffiliateForm avant FAQ */}
              <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
