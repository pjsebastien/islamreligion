import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title:
    "Rêver de dattes en islam : signification et interprétation complète",
  description:
    "Que signifie rêver de dattes en islam ? Manger, cueillir, recevoir des dattes, dattes fraîches ou sèches : interprétation selon Ibn Sirin et An-Nabulsi.",
  openGraph: {
    title:
      "Rêver de dattes en islam : signification et interprétation complète",
    description:
      "Que signifie rêver de dattes en islam ? Manger, cueillir, recevoir des dattes, dattes fraîches ou sèches : interprétation selon Ibn Sirin et An-Nabulsi.",
    url: "https://www.islamreligion.fr/rever-dattes-islam",
    images: [{ url: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-dattes-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique des dattes en islam" },
  { id: "ibn-sirin", label: "Selon Ibn Sirin et An-Nabulsi" },
  { id: "manger", label: "Rêver de manger des dattes" },
  { id: "cueillir-recevoir", label: "Cueillir ou recevoir des dattes" },
  { id: "fraiches-seches", label: "Dattes fraîches vs dattes sèches" },
  { id: "palmier", label: "Le palmier dattier dans le rêve" },
  { id: "selon-reveur", label: "Selon la situation du rêveur" },
  { id: "conseils", label: "Conseils et attitude à adopter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Rêver de dattes en islam est-il un bon signe ?",
    answer:
      "Oui, dans la grande majorité des cas, rêver de dattes en islam est un signe positif. Les dattes symbolisent la subsistance bénie (rizq halal), la foi solide et la bénédiction divine. Ibn Sirin considère que ce rêve annonce un bienfait, une bonne nouvelle ou un gain licite. Toutefois, des dattes avariées ou pourries peuvent indiquer un avertissement. Le contexte du rêve et l'état des dattes sont déterminants pour affiner l'interprétation.",
  },
  {
    question: "Que signifie rêver de manger des dattes en islam ?",
    answer:
      "Manger des dattes dans un rêve est un signe de joie, de prospérité et de tranquillité à venir. Selon Ibn Sirin, ce rêve annonce un gain licite et la concrétisation de projets. Si les dattes sont sucrées et savoureuses, la signification est encore plus favorable. An-Nabulsi ajoute que manger des dattes en quantité symbolise la lecture du Coran, le savoir et la piété qui nourrit le coeur du croyant.",
  },
  {
    question: "Quelle est la différence entre rêver de dattes fraîches et de dattes sèches ?",
    answer:
      "Les dattes fraîches (rutab) dans un rêve symbolisent un bien immédiat, une joie prochaine et une période d'abondance. Elles sont liées à la saison de la récolte et à la générosité d'Allah au moment présent. Les dattes sèches (tamr), en revanche, représentent un bien durable, des économies, un héritage ou un savoir qui se conserve dans le temps. Les deux sont positives, mais leur temporalité diffère.",
  },
  {
    question: "Rêver de cueillir des dattes d'un palmier : quelle interprétation ?",
    answer:
      "Cueillir des dattes d'un palmier dans un rêve est un signe de réussite par l'effort personnel. Ce rêve indique que le rêveur obtiendra un bien ou un savoir grâce à sa persévérance et son travail. Si les dattes sont mûres et abondantes, le succès sera conséquent. Si le palmier est haut et que le rêveur y monte facilement, cela annonce une élévation de statut ou de rang.",
  },
  {
    question: "Que signifie rêver de recevoir des dattes de quelqu'un en islam ?",
    answer:
      "Recevoir des dattes d'une personne dans un rêve annonce le retour de la chance, un cadeau, une bonne parole ou un conseil bénéfique. Si la personne qui offre les dattes est un défunt, cela peut signifier que ce dernier bénéficie des invocations du rêveur ou que ses bonnes oeuvres profitent encore aux vivants. Si c'est un inconnu, il s'agit souvent d'une rizq inattendue venant d'Allah.",
  },
  {
    question: "Rêver de dattes pourries ou avariées en islam : que signifie-t-il ?",
    answer:
      "Les dattes pourries ou avariées dans un rêve sont l'un des rares cas où la datte porte un message négatif. Elles peuvent indiquer un gain douteux, une fatigue excessive, un éloignement de la foi ou un projet qui n'aboutira pas comme prévu. An-Nabulsi y voit un rappel à la vigilance : le rêveur doit vérifier la licéité de ses revenus et se rapprocher d'Allah par le repentir et les bonnes actions.",
  },
  {
    question: "Rêver d'un palmier dattier en islam a-t-il une signification particulière ?",
    answer:
      "Oui, le palmier dattier (nakhla) est un symbole très fort en islam. Le Prophète (paix et bénédictions sur lui) a comparé le croyant au palmier. Voir un palmier en rêve symbolise une personne pieuse, noble et généreuse. Un palmier chargé de fruits annonce la prospérité et la piété. Un palmier sec ou mort peut signifier la perte d'un bienfait ou l'éloignement d'une personne vertueuse.",
  },
  {
    question: "Rêver de dattes a-t-il un lien avec le Ramadan ou le jeûne ?",
    answer:
      "Les dattes sont intimement liées au jeûne et au Ramadan dans la tradition prophétique, puisque le Prophète (paix et bénédictions sur lui) rompait son jeûne avec des dattes fraîches. Rêver de dattes pendant ou en dehors du Ramadan peut symboliser la purification spirituelle, le rapprochement d'Allah et la recherche de nourriture pour l'âme autant que pour le corps. Ce rêve encourage la piété et la pratique de la sunna.",
  },
];

export default function ReverDattesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-dattes-islam/#article",
        headline:
          "Rêver de dattes en islam : signification et interprétation complète",
        description:
          "Que signifie rêver de dattes en islam ? Manger, cueillir, recevoir des dattes, dattes fraîches ou sèches : interprétation selon Ibn Sirin et An-Nabulsi.",
        image:
          "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-dattes-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-dattes-islam/#breadcrumb",
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
            name: "Rêves en islam",
            item: "https://www.islamreligion.fr/reves-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dattes",
            item: "https://www.islamreligion.fr/rever-dattes-islam",
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
          title="Rêver de dattes en islam : signification et interprétation"
          subtitle="Manger, cueillir, recevoir des dattes ou voir un palmier dattier : ce que la tradition islamique et les savants de l'oniromancie enseignent sur ce symbole béni."
          imageSrc="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
          imageAlt="Rêver de dattes en islam, signification et interprétation selon la tradition islamique"
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
                <Link href="/reves-islam" className="hover:text-primary">
                  Rêves en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Dattes</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de dattes en islam est l&apos;un des rêves les plus
                  positifs selon les savants de l&apos;oniromancie islamique.
                  La datte symbolise la subsistance bénie (<em>rizq halal</em>),
                  la foi sincère, la piété et la douceur de la vie. Ibn Sirin
                  y voit un signe de prospérité et de bonne nouvelle, tandis
                  qu&apos;An-Nabulsi associe la datte au savoir coranique et
                  à la pluie bienfaisante. L&apos;interprétation varie selon
                  que l&apos;on mange, cueille ou reçoit des dattes, et selon
                  leur état : fraîches, sèches ou avariées.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique des dattes */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique des dattes dans les rêves en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La datte occupe une place tout à fait singulière dans la
                  civilisation islamique. Fruit du palmier dattier, elle
                  accompagne les musulmans depuis les origines de l&apos;islam
                  et fait partie intégrante de la{" "}
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    tradition prophétique
                  </Link>
                  . Quand elle apparaît dans un rêve, elle porte un message
                  profondément ancré dans cette symbolique spirituelle et
                  culturelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Un fruit béni dans la Sunna du Prophète
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et bénédictions sur lui) a
                  mentionné la datte dans de nombreux hadiths. Il rompait
                  son jeûne avec des dattes fraîches (<em>rutab</em>) ou,
                  à défaut, avec des dattes sèches (<em>tamr</em>), avant
                  de prier le Maghreb. Il a dit : &laquo; Lorsque l&apos;un
                  de vous rompt son jeûne, qu&apos;il le fasse avec des
                  dattes, car elles sont une bénédiction &raquo;
                  (Abu Dawud). Cette pratique prophétique a gravé la datte
                  comme un symbole de bénédiction et de conformité à la sunna.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Par ailleurs, le Prophète (paix et bénédictions sur lui) a
                  comparé le croyant au palmier dattier : un arbre qui donne
                  ses fruits en toute saison, dont chaque partie est utile,
                  et qui ne perd pas ses feuilles. Cette comparaison noble
                  renforce l&apos;idée que voir des dattes dans un rêve
                  touche à la foi, à l&apos;utilité et à la générosité du
                  croyant.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  La datte et la rupture du jeûne (iftar)
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Pendant le mois de Ramadan, la datte est le premier aliment
                  que consomme le musulman pour rompre son jeûne. Ce geste,
                  répété chaque soir durant trente jours, crée une association
                  profonde entre la datte et le sentiment de soulagement, de
                  gratitude et de proximité avec Allah. Rêver de dattes peut
                  ainsi évoquer cette quête de purification spirituelle, ce
                  moment où le corps et l&apos;âme reçoivent enfin leur
                  nourriture après l&apos;effort du jeûne.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  La datte dans un rêve est donc rarement un symbole anodin.
                  Elle porte en elle la mémoire de la sunna, la douceur de
                  la foi et la promesse d&apos;une subsistance bénie. Les
                  savants de l&apos;oniromancie islamique s&apos;accordent
                  à dire que c&apos;est l&apos;un des symboles les plus
                  favorables que l&apos;on puisse rencontrer dans un rêve.
                </p>

                <SocialBanner />

              <AffiliateForm title="Approfondissez votre connaissance des rêves en islam" description="La compréhension des symboles oniriques passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation." preselect="coran" />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="ibn-sirin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent Ibn Sirin et An-Nabulsi sur le rêve de dattes
                </h2>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;interprétation d&apos;Ibn Sirin
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  L&apos;imam Muhammad ibn Sirin, considéré comme le père
                  de l&apos;oniromancie islamique, accorde une valeur très
                  positive aux dattes dans les rêves. Selon lui, voir des
                  dattes annonce une subsistance licite (<em>rizq halal</em>)
                  qui parviendra au rêveur sans grande difficulté. Les dattes
                  symbolisent aussi la pluie bienfaisante : tout comme la
                  pluie fait fructifier la terre, les dattes dans un rêve
                  annoncent que les efforts du rêveur porteront leurs fruits.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Ibn Sirin précise que manger des dattes dans un rêve est
                  le signe d&apos;un bien imminent : une bonne nouvelle, un
                  mariage, une naissance ou l&apos;acquisition d&apos;un
                  savoir bénéfique. Il distingue cependant entre les dattes
                  de bonne qualité, qui renforcent le caractère positif du
                  rêve, et les dattes abîmées ou de mauvais goût, qui peuvent
                  indiquer un gain mêlé de difficultés ou un bienfait qui ne
                  se réalisera qu&apos;après des épreuves.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Ibn Sirin associe également les dattes à la lecture du
                  Coran. Pour lui, celui qui voit des dattes en abondance
                  dans son rêve est une personne qui lit le Coran
                  régulièrement ou qui est appelée à s&apos;en rapprocher.
                  La douceur de la datte reflète la douceur de la parole
                  divine dans le coeur du croyant. C&apos;est pourquoi ce
                  rêve est souvent interprété comme une invitation à{" "}
                  <Link
                    href="/rever-lire-coran-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    approfondir sa relation avec le Coran
                  </Link>
                  .
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;interprétation d&apos;An-Nabulsi
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Le cheikh Abd al-Ghani an-Nabulsi enrichit
                  l&apos;interprétation d&apos;Ibn Sirin avec des nuances
                  supplémentaires. Pour An-Nabulsi, les dattes dans un rêve
                  représentent le savoir, la piété et l&apos;argent licite.
                  Il les compare à la pluie qui descend du ciel par la
                  volonté d&apos;Allah et nourrit tout ce qu&apos;elle
                  touche.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  An-Nabulsi distingue plusieurs scénarios. Voir des dattes
                  en grande quantité annonce une période de prospérité
                  familiale et de fertilité. Manger des dattes sucrées
                  indique que la parole du rêveur est douce et appréciée
                  par son entourage. Voir des dattes sans en manger peut
                  signifier que le rêveur dispose d&apos;un bien ou d&apos;une
                  opportunité qu&apos;il n&apos;a pas encore saisie.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  An-Nabulsi précise aussi que les dattes de Médine, en
                  particulier la variété <em>Ajwa</em>, portent une
                  signification renforcée dans les rêves. Le Prophète (paix
                  et bénédictions sur lui) a dit que la datte <em>Ajwa</em>
                  {" "}est un remède. Voir cette variété dans un rêve annonce
                  une guérison, une protection contre le mal et une
                  bénédiction spirituelle particulière.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos rêves en lisant le Coran en arabe"
                description="Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Manger des dattes */}
              {/* ============================================ */}
              <section id="manger" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de manger des dattes en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Manger des dattes dans un rêve est l&apos;une des visions
                  les plus fréquentes et les plus commentées par les savants.
                  Ce geste onirique, directement lié à la sunna prophétique,
                  porte un message de joie et de bénédiction. La douceur de
                  la datte que l&apos;on goûte dans le rêve reflète la
                  douceur d&apos;un bienfait qui se prépare dans la vie
                  éveillée.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Manger des dattes sucrées et savoureuses
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Si les dattes que le rêveur mange sont sucrées, juteuses
                  et de belle apparence, c&apos;est un signe clair de
                  prospérité. Selon Ibn Sirin, ce rêve annonce un gain
                  licite, une augmentation de la foi et une période de
                  tranquillité. Le rêveur peut s&apos;attendre à recevoir
                  de bonnes nouvelles, que ce soit sur le plan financier,
                  familial ou spirituel.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Manger des dattes avec plaisir et satisfaction dans le
                  rêve indique aussi que le rêveur vit en accord avec sa
                  foi et que ses actes de dévotion sont acceptés. C&apos;est
                  un encouragement à poursuivre sur cette voie et à
                  multiplier les bonnes actions. Certains savants y voient
                  un lien avec la récitation du Coran : la douceur des
                  dattes rappelle la douceur des versets qui nourrissent
                  l&apos;âme.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Manger des dattes en quantité
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Manger beaucoup de dattes dans un rêve peut avoir
                  plusieurs significations. Pour An-Nabulsi, cela symbolise
                  l&apos;acquisition d&apos;un savoir abondant ou la
                  lecture assidue du Coran. Ibn Sirin y voit un signe
                  d&apos;héritage ou de gain conséquent. Si le rêveur
                  mange les dattes avec d&apos;autres personnes, cela
                  renforce la dimension de partage, de générosité et de
                  liens familiaux solides.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  En revanche, si le rêveur mange des dattes avec excès
                  et dégoût, cela peut indiquer un attachement trop fort
                  aux biens de ce monde. Le rêve rappelle alors
                  l&apos;importance de l&apos;équilibre entre le matériel
                  et le spirituel, comme les dattes qui nourrissent le
                  corps lors de l&apos;iftar tout en marquant un moment
                  de dévotion.
                </p>

                <div className="mt-8">
                  <Image
                    src="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
                    alt="Dattes, chapelet et Coran posés sur un plateau, symboles de la tradition islamique et du Ramadan"
                    width={800}
                    height={500}
                    className="rounded-xl"
                  />
                  <p className="mt-3 text-sm text-foreground-secondary">
                    Les dattes occupent une place centrale dans la pratique
                    musulmane, notamment lors de la rupture du jeûne.
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg"
                    alt="Lanternes orientales, croissant de lune et dattes du Ramadan, symboles islamiques liés au rêve de dattes"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Cueillir / Recevoir */}
              {/* ============================================ */}
              <section id="cueillir-recevoir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Cueillir ou recevoir des dattes dans un rêve
                </h2>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Rêver de cueillir des dattes
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Cueillir des dattes d&apos;un palmier dans un rêve est
                  un symbole très fort de réussite obtenue par l&apos;effort.
                  Le geste de monter au palmier, de tendre la main vers les
                  fruits et de les détacher évoque le travail, la patience
                  et la détermination. Ce rêve annonce que le rêveur
                  récoltera bientôt le fruit de ses efforts, que ce soit
                  dans ses études, son travail ou un projet personnel.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Si les dattes cueillies sont mûres et abondantes, le
                  succès sera conséquent et rapide. Si elles sont encore
                  vertes ou peu mûres, cela indique que le projet est en
                  bonne voie mais nécessite encore de la patience. An-Nabulsi
                  ajoute que cueillir des dattes hors saison dans un rêve
                  peut signifier l&apos;acquisition d&apos;un savoir
                  inattendu ou un bienfait qui arrive de manière
                  surprenante.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Rêver de recevoir des dattes en cadeau
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Recevoir des dattes de quelqu&apos;un dans un rêve est
                  interprété comme un signe de chance et de bienveillance.
                  La personne qui offre les dattes représente souvent une
                  source de bien dans la vie du rêveur : un ami sincère,
                  un parent attentionné ou un bienfaiteur. Ce geste
                  onirique annonce une bonne parole, un conseil avisé ou
                  un cadeau matériel.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Un cas particulier mérite attention : recevoir des dattes
                  d&apos;une personne décédée dans un rêve. Les savants
                  interprètent cela comme un signe que les bonnes oeuvres
                  du défunt continuent de profiter aux vivants, ou que
                  les invocations (doua) du rêveur parviennent au défunt
                  et lui apportent de la miséricorde. Ce rêve est
                  considéré comme un échange spirituel entre les mondes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Rêver d&apos;offrir des dattes à quelqu&apos;un
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Offrir des dattes dans un rêve symbolise la générosité,
                  la sadaqa et le partage. Ce rêve indique que le rêveur
                  fait preuve de bonté dans sa vie éveillée et qu&apos;Allah
                  le récompensera pour cela. Selon Ibn Sirin, offrir des
                  dattes à un proche annonce le renforcement des liens
                  familiaux. Offrir des dattes à un inconnu peut signifier
                  que le rêveur recevra une offre ou une proposition
                  inattendue qui lui sera profitable.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Fraîches vs sèches */}
              {/* ============================================ */}
              <section id="fraiches-seches" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dattes fraîches vs dattes sèches : deux symboles distincts
                </h2>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Rêver de dattes fraîches (rutab)
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Les dattes fraîches, appelées <em>rutab</em> en arabe,
                  sont celles que l&apos;on cueille directement du palmier
                  à maturité. Elles sont molles, juteuses et sucrées. Dans
                  un rêve, elles symbolisent un bien immédiat, une joie
                  prochaine et un moment de bonheur qui arrive sans tarder.
                  Le Coran mentionne les dattes fraîches dans la sourate
                  Maryam (19:25) lorsque Allah ordonne à Maryam de secouer
                  le tronc du palmier pour que des dattes fraîches tombent
                  vers elle : un signe de réconfort divin dans un moment
                  d&apos;épreuve.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Rêver de dattes fraîches annonce souvent une période
                  d&apos;abondance, un regain d&apos;énergie ou une bonne
                  nouvelle imminente. Si le rêveur traverse une difficulté,
                  ce rêve lui indique qu&apos;un soulagement viendra
                  bientôt, tout comme les dattes fraîches furent un
                  réconfort pour Maryam (paix sur elle). Les savants
                  soulignent que ce rêve est particulièrement favorable
                  pour les femmes enceintes et les personnes en attente
                  d&apos;une réponse.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Rêver de dattes sèches (tamr)
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Les dattes sèches (<em>tamr</em>) sont les dattes
                  conservées, que l&apos;on peut stocker longtemps sans
                  qu&apos;elles se détériorent. Dans un rêve, elles
                  représentent un bien durable, des économies solides, un
                  héritage ou un savoir qui perdure dans le temps. Là où
                  la datte fraîche parle d&apos;un bienfait immédiat, la
                  datte sèche parle d&apos;un bienfait qui s&apos;inscrit
                  dans la durée.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  An-Nabulsi précise que les dattes sèches dans un rêve
                  peuvent aussi symboliser la sagesse acquise avec le temps,
                  l&apos;expérience de vie et les leçons tirées des
                  épreuves. Pour une personne âgée, rêver de dattes sèches
                  confirme la valeur de son parcours et la richesse de son
                  savoir. Pour une personne jeune, ce rêve encourage à
                  épargner, à investir dans le savoir et à construire pour
                  l&apos;avenir.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Rêver de dattes avariées ou pourries
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Les dattes abîmées, pourries ou infestées constituent
                  l&apos;exception dans la symbolique très positive des
                  dattes. Elles peuvent indiquer un gain mêlé de doute,
                  une fatigue physique ou morale, ou un projet prometteur
                  qui ne se réalisera pas comme prévu. An-Nabulsi y voit
                  un appel à la vigilance : le rêveur doit vérifier la
                  licéité de ses revenus, s&apos;éloigner des situations
                  ambiguës et se rapprocher d&apos;Allah par le repentir.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Palmier dattier */}
              {/* ============================================ */}
              <section id="palmier" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le palmier dattier dans le rêve : un symbole du croyant
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le palmier dattier (<em>nakhla</em>) est bien plus
                  qu&apos;un arbre dans la culture islamique. Le Prophète
                  (paix et bénédictions sur lui) l&apos;a élevé au rang de
                  symbole du croyant : &laquo; Parmi les arbres, il en est
                  un dont les feuilles ne tombent pas et qui est semblable
                  au musulman &raquo; (al-Bukhari et Muslim). Cette
                  comparaison confère au palmier une dimension spirituelle
                  unique qui se retrouve dans l&apos;interprétation des
                  rêves.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Voir un palmier chargé de dattes
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Un palmier dattier chargé de fruits dans un rêve
                  symbolise une personne pieuse, généreuse et utile à sa
                  communauté. Ce rêve peut aussi représenter une année
                  de prospérité, une famille unie ou un lieu béni. Si
                  le rêveur se trouve à l&apos;ombre du palmier, cela
                  annonce qu&apos;il bénéficiera de la protection et de
                  la bienveillance d&apos;une personne influente et
                  vertueuse.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Voir plusieurs palmiers dans un rêve renforce cette
                  signification : le rêveur est entouré de bonnes
                  personnes, sa famille est un soutien solide, et ses
                  affaires sont bénies. An-Nabulsi compare le verger de
                  palmiers dans un rêve à une assemblée de savants ou
                  à une communauté de croyants sincères. C&apos;est un
                  rêve qui réjouit le coeur et rassure l&apos;esprit.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Voir un palmier sec, coupé ou mort
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Un palmier sans feuilles, desséché ou abattu dans un
                  rêve porte un message différent. Il peut symboliser la
                  perte d&apos;un bienfait, l&apos;éloignement d&apos;une
                  personne vertueuse ou une période de sécheresse
                  spirituelle. Ibn Sirin précise que couper un palmier
                  dans un rêve peut indiquer une rupture de lien familial
                  ou la fin d&apos;une source de revenus.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-foreground">
                  Toutefois, si le rêveur plante un nouveau palmier ou
                  arrose un palmier sec qui reverdit, c&apos;est un signe
                  de renouveau, de repentance acceptée et de retour à la
                  foi. Ce rêve encourage à ne pas désespérer de la
                  miséricorde d&apos;Allah et à fournir les efforts
                  nécessaires pour retrouver l&apos;équilibre spirituel,
                  tout comme on prend soin d&apos;un arbre pour qu&apos;il
                  porte à nouveau ses fruits.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon le rêveur */}
              {/* ============================================ */}
              <section id="selon-reveur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interprétation selon la situation du rêveur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Comme pour tout{" "}
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêve en islam
                  </Link>
                  , la signification des dattes varie selon la personne qui
                  rêve. Les savants de l&apos;oniromancie islamique
                  prennent en compte le sexe, l&apos;âge, la situation
                  matrimoniale et l&apos;état spirituel du rêveur pour
                  affiner leur interprétation.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Pour la femme mariée
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      Rêver de dattes pour une femme mariée annonce la
                      stabilité du foyer, la bénédiction dans le couple
                      et la prospérité familiale. Si elle mange des dattes
                      sucrées, c&apos;est un signe de bonheur conjugal.
                      Si elle reçoit des dattes de son époux, cela
                      symbolise la tendresse et la générosité au sein du
                      mariage.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Pour la femme célibataire
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      Les dattes dans le rêve d&apos;une femme célibataire
                      peuvent annoncer un mariage prochain, une proposition
                      favorable ou la rencontre d&apos;une personne pieuse
                      et généreuse. Des dattes fraîches et belles renforcent
                      cette interprétation. Si la femme cueille elle-même
                      les dattes, cela indique qu&apos;elle choisira son
                      compagnon avec sagesse.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Pour la femme enceinte
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      Rêver de dattes pendant la grossesse est un signe
                      très favorable. Les savants y voient une allusion
                      directe au récit de Maryam (paix sur elle) et aux
                      dattes fraîches qu&apos;Allah lui accorda lors de
                      son accouchement. Ce rêve annonce un accouchement
                      facile, un enfant béni et la protection divine. Il
                      rejoint la symbolique de{" "}
                      <Link
                        href="/rever-viande-islam"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        la nourriture dans les rêves
                      </Link>
                      , signe de subsistance pour le nouveau-né.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Pour l&apos;homme
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      Pour un homme, rêver de dattes annonce un gain
                      licite, la réussite d&apos;un projet ou une
                      promotion. Si l&apos;homme cueille des dattes d&apos;un
                      haut palmier, cela symbolise une ambition qui sera
                      couronnée de succès. S&apos;il mange des dattes
                      avec sa famille, c&apos;est un signe de bonheur
                      familial et de responsabilité assumée avec sagesse.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Pour l&apos;étudiant ou le chercheur de savoir
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      Les dattes dans le rêve d&apos;un étudiant
                      symbolisent le savoir bénéfique, la mémorisation du
                      Coran et la réussite dans les études. Ce rêve
                      encourage à persévérer dans l&apos;apprentissage
                      et rappelle que le savoir est une nourriture pour
                      l&apos;âme, tout comme la datte nourrit le corps.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
                    alt="Coran ouvert dans la nature au coucher du soleil, méditation spirituelle après un rêve de dattes en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Conseils */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils et attitude à adopter après un rêve de dattes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le rêve de dattes, comme tout rêve en islam, appelle
                  une attitude mesurée et confiante. Les savants de la
                  tradition prophétique ont transmis des recommandations
                  claires pour accueillir ce type de rêve et en tirer
                  le meilleur parti.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Si le rêve est positif (dattes fraîches, sucrées,
                      abondantes)
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      Remerciez Allah pour cette bonne annonce. Le Prophète
                      (paix et bénédictions sur lui) a dit : &laquo; Le bon
                      rêve vient d&apos;Allah &raquo; (al-Bukhari). Vous
                      pouvez partager ce rêve avec une personne de confiance
                      qui vous aime sincèrement. Multipliez les invocations
                      de gratitude, la lecture du Coran et les actes de
                      bienfaisance. Ce rêve est une source d&apos;espoir
                      et d&apos;encouragement.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Si le rêve est inquiétant (dattes pourries, palmier
                      mort)
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      Ne paniquez pas et ne racontez ce rêve à personne.
                      Suivez la recommandation prophétique : crachez
                      légèrement trois fois sur votre gauche, demandez
                      la protection d&apos;Allah et changez de position
                      de sommeil. Profitez de ce rêve comme d&apos;un
                      rappel pour examiner vos revenus, vos relations
                      et votre pratique religieuse. Le repentir sincère
                      efface les inquiétudes.
                    </p>
                  </div>

                  <div className="rounded-lg border border-secondary/10 bg-accent/50 p-5">
                    <p className="font-semibold text-primary">
                      Un rappel sur l&apos;interprétation des rêves
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-foreground">
                      L&apos;oniromancie islamique est une science qui
                      demande du savoir, de la piété et de la prudence.
                      Les interprétations transmises par Ibn Sirin et
                      An-Nabulsi sont des repères, mais chaque rêve est
                      unique. Votre situation personnelle, votre état
                      émotionnel et votre rapport à Allah influencent le
                      sens de vos rêves. En cas de doute, consultez une
                      personne de science et de confiance, et gardez
                      toujours votre coeur attaché à la miséricorde
                      d&apos;Allah.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Pour approfondir la symbolique de la nourriture dans les
                  rêves, vous pouvez consulter nos articles sur{" "}
                  <Link
                    href="/rever-miel-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêver de miel en islam
                  </Link>
                  {" "}et{" "}
                  <Link
                    href="/rever-pain-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêver de pain en islam
                  </Link>
                  , deux symboles également riches de sens dans la tradition
                  islamique.
                </p>
              </section>

              {/* AffiliateForm avant FAQ */}
              <div className="mt-16">
                <AffiliateForm
                  title="Comprenez les symboles coraniques de vos rêves"
                  description="La compréhension des rêves en islam passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation pour approfondir vos connaissances."
                  preselect="coran"
                />
              </div>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Questions fréquentes sur le rêve de dattes en islam
                </h2>
                <div className="mt-8">
                  <FaqSection items={faqItems} />
                </div>
              </section>

              {/* Navigation silo */}
              <nav className="mt-16 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  Continuez votre lecture
                </p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/reves-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Rêves en islam : le sommaire complet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rever-miel-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Rêver de miel en islam : douceur et bénédiction
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rever-pain-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Rêver de pain en islam : subsistance et prospérité
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rever-viande-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Rêver de viande en islam : signification et interprétation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rever-lire-coran-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Rêver de lire le Coran en islam : un signe de piété
                    </Link>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
