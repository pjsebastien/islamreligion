import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title: "Apprendre l'arabe : méthode, alphabet et premiers pas",
  description:
    "Comment apprendre l'arabe ? Alphabet, méthode pour débutants, différences entre arabe littéraire et dialecte, et accès à une formation en ligne structurée.",
  alternates: {
    canonical: "https://www.islamreligion.fr/apprendre-larabe",
  },
};

const tocItems = [
  { id: "pourquoi", label: "Pourquoi apprendre l'arabe ?" },
  { id: "alphabet", label: "L'alphabet arabe" },
  { id: "types", label: "Arabe littéraire, coranique ou dialecte ?" },
  { id: "methode", label: "Méthode en 5 étapes" },
  { id: "seul-ou-accompagne", label: "Apprendre seul ou accompagné ?" },
  { id: "duree", label: "Combien de temps faut-il ?" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Est-ce difficile d'apprendre l'arabe ?",
    answer:
      "L'arabe demande un investissement initial pour maîtriser l'alphabet et le sens d'écriture (de droite à gauche). Mais une fois ces bases acquises, la logique de la langue — construite sur des racines de trois lettres — facilite l'apprentissage du vocabulaire. Avec une méthode régulière, les progrès sont rapides.",
  },
  {
    question: "Peut-on apprendre l'arabe en 3 mois ?",
    answer:
      "En 3 mois de pratique régulière (30 minutes par jour), il est réaliste de savoir lire l'arabe, connaître les bases de la grammaire et maîtriser un vocabulaire courant de 300 à 500 mots. Pour tenir une conversation fluide, comptez plutôt 6 à 12 mois.",
  },
  {
    question: "L'arabe s'écrit-il de droite à gauche ?",
    answer:
      "Oui, l'arabe s'écrit et se lit de droite à gauche. Les chiffres, en revanche, se lisent de gauche à droite. Cette particularité peut surprendre au début, mais on s'y habitue en quelques jours de pratique.",
  },
  {
    question: "Quelle différence entre arabe littéraire et dialecte ?",
    answer:
      "L'arabe littéraire (fusha) est la langue officielle, celle du Coran, des médias et de la littérature. Les dialectes (darija, égyptien, levantin…) sont les langues parlées au quotidien dans chaque région. Ils partagent une base commune mais diffèrent en prononciation et vocabulaire. Pour un débutant, commencer par le littéraire est recommandé.",
  },
  {
    question: "Faut-il apprendre l'arabe pour lire le Coran ?",
    answer:
      "Lire le Coran en arabe est possible sans parler couramment la langue : il suffit de maîtriser l'alphabet et les règles de lecture (tajwid). Comprendre le sens des versets demande un niveau plus avancé. Beaucoup de musulmans commencent par la lecture avant d'approfondir la compréhension.",
  },
  {
    question: "Par où commencer pour apprendre l'arabe ?",
    answer:
      "La première étape est de maîtriser l'alphabet arabe : les 28 lettres, leurs 4 formes (isolée, initiale, médiane, finale) et les voyelles courtes. Ensuite, apprenez à lire des mots simples, puis passez au vocabulaire de base et à la grammaire élémentaire.",
  },
  {
    question: "Combien de lettres comporte l'alphabet arabe ?",
    answer:
      "L'alphabet arabe comprend 28 lettres, toutes des consonnes. Les voyelles sont indiquées par des signes diacritiques (harakat) placés au-dessus ou en dessous des lettres : la fatha (a), la kasra (i) et la damma (u).",
  },
  {
    question: "Quelle est la meilleure méthode pour apprendre l'arabe ?",
    answer:
      "La méthode la plus efficace combine un cours structuré (en ligne ou en présentiel) avec une pratique quotidienne. L'écoute régulière (Coran, podcasts, vidéos) et la répétition espacée pour le vocabulaire accélèrent considérablement la progression.",
  },
];

const alphabetLetters = [
  { letter: "ا", name: "Alif", phonetic: "a" },
  { letter: "ب", name: "Ba", phonetic: "b" },
  { letter: "ت", name: "Ta", phonetic: "t" },
  { letter: "ث", name: "Tha", phonetic: "th" },
  { letter: "ج", name: "Jim", phonetic: "j" },
  { letter: "ح", name: "Ha", phonetic: "ḥ" },
  { letter: "خ", name: "Kha", phonetic: "kh" },
  { letter: "د", name: "Dal", phonetic: "d" },
  { letter: "ذ", name: "Dhal", phonetic: "dh" },
  { letter: "ر", name: "Ra", phonetic: "r" },
  { letter: "ز", name: "Zay", phonetic: "z" },
  { letter: "س", name: "Sin", phonetic: "s" },
  { letter: "ش", name: "Shin", phonetic: "sh" },
  { letter: "ص", name: "Sad", phonetic: "ṣ" },
  { letter: "ض", name: "Dad", phonetic: "ḍ" },
  { letter: "ط", name: "Ta", phonetic: "ṭ" },
  { letter: "ظ", name: "Dha", phonetic: "ẓ" },
  { letter: "ع", name: "Ayn", phonetic: "ʿ" },
  { letter: "غ", name: "Ghayn", phonetic: "gh" },
  { letter: "ف", name: "Fa", phonetic: "f" },
  { letter: "ق", name: "Qaf", phonetic: "q" },
  { letter: "ك", name: "Kaf", phonetic: "k" },
  { letter: "ل", name: "Lam", phonetic: "l" },
  { letter: "م", name: "Mim", phonetic: "m" },
  { letter: "ن", name: "Nun", phonetic: "n" },
  { letter: "ه", name: "Ha", phonetic: "h" },
  { letter: "و", name: "Waw", phonetic: "w/u" },
  { letter: "ي", name: "Ya", phonetic: "y/i" },
];

export default function ApprendreLarabe() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.islamreligion.fr/apprendre-larabe/#webpage",
        url: "https://www.islamreligion.fr/apprendre-larabe",
        name: "Apprendre l'arabe : méthode, alphabet et premiers pas",
        description:
          "Comment apprendre l'arabe ? Alphabet, méthode pour débutants, différences entre arabe littéraire et dialecte.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
        breadcrumb: { "@id": "https://www.islamreligion.fr/apprendre-larabe/#breadcrumb" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/apprendre-larabe/#breadcrumb",
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
            name: "Apprendre l'arabe",
            item: "https://www.islamreligion.fr/apprendre-larabe",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
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
          title="Apprendre l'arabe : méthode, alphabet et premiers pas"
          subtitle="Tout ce qu'il faut savoir pour commencer l'apprentissage de la langue arabe, pas à pas et à votre rythme."
          imageSrc="/images/islam-science-savoir-connaissance-livre.jpg"
          imageAlt="Livre ouvert symbolisant le savoir et la connaissance en islam"
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

              {/* Breadcrumb visible */}
              <nav className="mb-8 text-sm text-foreground-secondary" aria-label="Fil d'Ariane">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Apprendre l&apos;arabe</span>
              </nav>

              {/* ============================================ */}
              {/* SECTION 1 : Pourquoi apprendre l'arabe */}
              {/* ============================================ */}
              <section id="pourquoi" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Pourquoi apprendre l&apos;arabe ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;arabe est l&apos;une des langues les plus parlées au monde, avec plus
                  de 400 millions de locuteurs natifs. C&apos;est aussi la langue liturgique
                  de plus de 1,8 milliard de musulmans. Mais au-delà des chiffres, apprendre
                  l&apos;arabe ouvre des portes que peu d&apos;autres langues peuvent offrir.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h3 className="font-semibold text-primary">Comprendre les textes sacrés dans leur langue originale</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran a été révélé en arabe. Les traductions, aussi bonnes
                        soient-elles, ne peuvent restituer toute la profondeur et la
                        beauté du texte original. Maîtriser l&apos;arabe permet de saisir
                        les nuances des versets, de comprendre les invocations quotidiennes
                        et de vivre sa prière avec une conscience accrue. Pour aller plus
                        loin dans cette démarche, découvrez comment{" "}
                        <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          apprendre le Coran
                        </Link>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h3 className="font-semibold text-primary">Accéder à une civilisation riche de 14 siècles</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La langue arabe est le fil conducteur d&apos;une civilisation
                        qui a produit des avancées majeures en mathématiques, médecine,
                        astronomie, philosophie et littérature. Lire Ibn Sina, al-Khwarizmi
                        ou les grands poètes dans le texte original, c&apos;est accéder
                        à un patrimoine intellectuel d&apos;une richesse rare.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h3 className="font-semibold text-primary">Communiquer avec plus de 400 millions de personnes</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;arabe est la langue officielle de 26 pays, du Maroc à
                        l&apos;Irak. C&apos;est aussi l&apos;une des six langues
                        officielles de l&apos;ONU. Voyager au Moyen-Orient ou en Afrique
                        du Nord avec des bases en arabe transforme l&apos;expérience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h3 className="font-semibold text-primary">Développer ses capacités cognitives</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Apprendre une langue dont l&apos;écriture, la structure et la
                        logique diffèrent du français stimule des zones du cerveau peu
                        sollicitées. Le système de racines trilitères de l&apos;arabe
                        développe la pensée analytique et la mémoire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">5</span>
                    <div>
                      <h3 className="font-semibold text-primary">Saisir des opportunités professionnelles</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La maîtrise de l&apos;arabe est un atout sur le marché du travail :
                        diplomatie, commerce international, traduction, journalisme,
                        enseignement ou humanitaire. C&apos;est une compétence rare et
                        recherchée dans le monde francophone.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="اطْلُبُوا الْعِلْمَ وَلَوْ بِالصِّينِ"
                  text="Recherchez le savoir, même jusqu'en Chine."
                  source="Parole attribuée au Prophète ﷺ, rapportée par Ibn Majah"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : L'alphabet arabe */}
              {/* ============================================ */}
              <section id="alphabet" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;alphabet arabe : les 28 lettres
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;alphabet arabe compte 28 lettres, toutes des consonnes. Les voyelles
                  sont représentées par de petits signes placés au-dessus ou en dessous des
                  lettres, appelés <em>harakat</em> (mouvements). L&apos;écriture se fait de
                  droite à gauche, et la plupart des lettres se lient entre elles au sein
                  d&apos;un même mot.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Chaque lettre possède jusqu&apos;à 4 formes selon sa position dans le mot :
                  <strong> isolée</strong>, <strong>initiale</strong> (début),
                  <strong> médiane</strong> (milieu) et <strong>finale</strong> (fin).
                  Certaines lettres comme le <em>alif</em> (ا), le <em>dal</em> (د) ou
                  le <em>waw</em> (و) ne se lient pas à la lettre suivante.
                </p>

                {/* Tableau de l'alphabet */}
                <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-7 md:gap-3">
                  {alphabetLetters.map((item) => (
                    <div
                      key={item.name + item.phonetic}
                      className="flex flex-col items-center rounded-xl border border-border bg-white p-3 text-center transition-shadow hover:shadow-sm"
                    >
                      <span className="font-arabic text-3xl text-primary" dir="rtl">
                        {item.letter}
                      </span>
                      <span className="mt-1 text-xs font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="text-xs text-foreground-secondary">
                        ({item.phonetic})
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les voyelles courtes (harakat)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Trois voyelles courtes existent en arabe. La <strong>fatha</strong> (◌َ)
                  se place au-dessus de la lettre et donne le son « a ». La
                  <strong> kasra</strong> (◌ِ) se place en dessous et donne le son « i ».
                  La <strong>damma</strong> (◌ُ) se place au-dessus et donne le son « ou ».
                  Le <strong>sukun</strong> (◌ْ) indique l&apos;absence de voyelle après la
                  consonne. La <strong>shadda</strong> (◌ّ) double la consonne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans les textes courants (journaux, livres), les voyelles courtes ne sont
                  généralement pas écrites. Le lecteur les déduit du contexte et de la
                  grammaire. En revanche, le Coran et les ouvrages pédagogiques sont
                  entièrement vocalisés pour faciliter la lecture.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/calligraphie-allah-islam-coeur-bois.jpg"
                    alt="Calligraphie arabe du nom d'Allah sur un cœur en bois"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    La calligraphie arabe, un art qui reflète la beauté de la langue
                  </p>
                </div>

                <AffiliateForm
                  title="Recevez une formation structurée en arabe"
                  description="Vous souhaitez aller plus loin que l'alphabet ? Accédez à un programme complet pour apprendre l'arabe avec un suivi pédagogique adapté à votre niveau."
                  buttonText="Recevoir les détails de la formation"
                  preselect="arabe"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Arabe littéraire, coranique, dialecte */}
              {/* ============================================ */}
              <section id="types" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Arabe littéraire, coranique ou dialecte : lequel apprendre ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Quand on parle d&apos;« apprendre l&apos;arabe », on fait souvent référence
                  à trois formes distinctes de la langue. Chacune a sa place et son utilité.
                  Comprendre leurs différences permet de choisir la bonne direction dès le
                  départ.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;arabe littéraire (fusha)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      C&apos;est l&apos;arabe standard moderne, utilisé dans les médias,
                      la littérature, les documents officiels et l&apos;enseignement.
                      Il est compris dans l&apos;ensemble du monde arabe. C&apos;est
                      la forme recommandée pour les débutants car elle constitue un
                      socle commun à tous les pays arabophones.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;arabe coranique (classique)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Très proche du fusha, l&apos;arabe coranique est la langue du
                      Coran et des textes classiques. Il comporte des tournures et un
                      vocabulaire spécifiques liés au contexte de la révélation.
                      Apprendre l&apos;arabe littéraire donne les bases nécessaires
                      pour aborder le texte coranique. Pour approfondir,
                      consultez notre page sur{" "}
                      <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        l&apos;apprentissage du Coran
                      </Link>.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les dialectes (darija, égyptien, levantin…)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Chaque région du monde arabe possède son dialecte parlé au
                      quotidien. Le dialecte marocain (darija) diffère sensiblement
                      de l&apos;égyptien ou du levantin. Si votre objectif est de
                      communiquer dans un pays précis, apprendre le dialecte local
                      est un plus. Mais la base reste le littéraire.
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-border bg-background-alt p-6">
                  <h3 className="text-lg font-semibold text-primary">Notre recommandation</h3>
                  <p className="mt-2 leading-relaxed text-foreground">
                    Commencez par l&apos;arabe littéraire. Il vous permettra de lire,
                    écrire, comprendre les médias arabophones et accéder aux textes
                    religieux. Une fois cette base solide, l&apos;apprentissage d&apos;un
                    dialecte sera beaucoup plus rapide, car les structures grammaticales
                    et une grande partie du vocabulaire sont partagés.
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Méthode en 5 étapes */}
              {/* ============================================ */}
              <section id="methode" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment apprendre l&apos;arabe : la méthode en 5 étapes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Apprendre l&apos;arabe ne s&apos;improvise pas. Voici un parcours progressif
                  qui a fait ses preuves auprès de milliers de francophones. Chaque étape
                  s&apos;appuie sur la précédente.
                </p>

                {/* Étape 1 */}
                <div className="mt-8 border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Étape 1 — Maîtriser l&apos;alphabet et la lecture (semaines 1-2)
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Apprenez les 28 lettres, leurs formes et les voyelles courtes.
                    L&apos;objectif est de pouvoir déchiffrer n&apos;importe quel mot
                    vocalisé. Consacrez 20 à 30 minutes par jour à tracer les lettres
                    à la main et à lire des mots simples. La répétition est la clé à
                    ce stade.
                  </p>
                </div>

                {/* Étape 2 */}
                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Étape 2 — Acquérir le vocabulaire de base (semaines 3-6)
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Apprenez 10 à 15 mots nouveaux par jour en utilisant la répétition
                    espacée (flashcards). Commencez par les mots du quotidien : salutations,
                    famille, nourriture, couleurs, chiffres. Le système de racines
                    trilitères de l&apos;arabe vous aidera : une fois que vous connaissez
                    la racine <em>k-t-b</em> (écrire), vous comprenez <em>kitab</em> (livre),
                    <em> katib</em> (écrivain), <em>maktaba</em> (bibliothèque).
                  </p>
                </div>

                {/* Étape 3 */}
                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Étape 3 — Comprendre la grammaire fondamentale (mois 2-3)
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    La grammaire arabe (<em>nahw</em>) et la morphologie (<em>sarf</em>)
                    sont structurées et logiques. Concentrez-vous sur : la phrase nominale
                    et verbale, les pronoms, la conjugaison au passé et au présent,
                    le masculin/féminin, le singulier/duel/pluriel. Ne cherchez pas à
                    tout maîtriser d&apos;un coup : la grammaire s&apos;assimile
                    progressivement par la pratique.
                  </p>
                </div>

                {/* Étape 4 */}
                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Étape 4 — Pratiquer l&apos;écoute et l&apos;expression (mois 3-6)
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Écoutez du contenu en arabe : récitations du Coran, journaux télévisés
                    (Al Jazeera, France 24 en arabe), podcasts pour apprenants. Essayez
                    de répéter ce que vous entendez. Si possible, échangez avec un
                    arabophone. L&apos;oral progresse par l&apos;exposition régulière.
                  </p>
                </div>

                {/* Étape 5 */}
                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Étape 5 — Lire des textes authentiques (à partir du mois 6)
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Commencez à lire des textes réels : articles de presse, histoires
                    courtes, versets du Coran avec traduction en parallèle. Relevez
                    le vocabulaire inconnu et analysez les structures grammaticales.
                    À ce stade, la progression devient exponentielle car chaque
                    lecture renforce les acquis.
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/femme-musulmane-hijab-lecture-coran-islam.jpg"
                    alt="Femme musulmane lisant le Coran, symbole de l'apprentissage de l'arabe"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <AffiliateForm
                  title="Suivez cette méthode avec un cours structuré"
                  description="Un programme en ligne qui reprend ces 5 étapes avec des cours vidéo, des exercices corrigés et un suivi personnalisé. Laissez votre email pour recevoir les détails."
                  buttonText="Recevoir les informations"
                  preselect="arabe"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Seul ou accompagné ? */}
              {/* ============================================ */}
              <section id="seul-ou-accompagne" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Apprendre l&apos;arabe seul ou avec un professeur ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux approches ont leurs avantages. Le choix dépend de votre
                  budget, de votre discipline personnelle et de vos objectifs.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Critère</th>
                        <th className="py-3 pr-4 font-semibold text-primary">En autodidacte</th>
                        <th className="py-3 font-semibold text-primary">Avec un cours en ligne</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Flexibilité</td>
                        <td className="py-3 pr-4">Totale, à votre rythme</td>
                        <td className="py-3">Bonne, selon le programme</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Structure</td>
                        <td className="py-3 pr-4">À construire soi-même</td>
                        <td className="py-3">Programme progressif fourni</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Correction</td>
                        <td className="py-3 pr-4">Limitée (pas de retour)</td>
                        <td className="py-3">Exercices corrigés, feedback</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Prononciation</td>
                        <td className="py-3 pr-4">Difficile sans modèle</td>
                        <td className="py-3">Audio/vidéo avec natifs</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Motivation</td>
                        <td className="py-3 pr-4">Risque d&apos;abandon</td>
                        <td className="py-3">Soutenue par le suivi</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Coût</td>
                        <td className="py-3 pr-4">Gratuit (ressources en ligne)</td>
                        <td className="py-3">Payant (investissement)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;autodidacte peut très bien progresser avec de la discipline et les
                  bonnes ressources. Mais un cours structuré apporte un cadre, une progression
                  logique et un soutien qui font souvent la différence entre ceux qui
                  persévèrent et ceux qui abandonnent au bout de quelques semaines.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;idéal ? Combiner les deux : suivre un cours en ligne pour la
                  structure et la correction, tout en complétant par des lectures et
                  de l&apos;écoute personnelles. L&apos;apprentissage de l&apos;arabe, comme
                  celui de la{" "}
                  <Link href="/" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    religion musulmane
                  </Link>{" "}
                  en général, est un chemin qui se parcourt avec patience et régularité.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Combien de temps */}
              {/* ============================================ */}
              <section id="duree" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Combien de temps faut-il pour apprendre l&apos;arabe ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La durée dépend de l&apos;objectif visé et du temps consacré chaque jour.
                  Voici des repères réalistes pour un francophone qui pratique 30 minutes
                  par jour de manière régulière.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-primary">Lire l&apos;arabe</h3>
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                        2 à 4 semaines
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Déchiffrer l&apos;alphabet, lire des mots vocalisés et des phrases
                      simples. C&apos;est la base qui débloque tout le reste.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-primary">Conversations simples</h3>
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                        3 à 6 mois
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Se présenter, poser des questions, comprendre et répondre dans
                      des situations courantes. Vocabulaire de 500 à 1 000 mots.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-primary">Comprendre des textes</h3>
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                        12 à 18 mois
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lire la presse, comprendre des conférences, accéder aux textes
                      religieux avec une bonne compréhension. Vocabulaire de 3 000+ mots.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces délais sont indicatifs. La régularité compte plus que la durée
                  de chaque session. Mieux vaut 20 minutes chaque jour que 3 heures une
                  fois par semaine. L&apos;arabe, comme toute langue, s&apos;apprend par la
                  pratique répétée.
                </p>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* ============================================ */}
              {/* CTA final */}
              {/* ============================================ */}
              <AffiliateForm
                title="Prêt à commencer l'apprentissage de l'arabe ?"
                description="Accédez à une formation en ligne complète, avec cours vidéo, exercices progressifs et suivi pédagogique. Laissez votre email pour recevoir toutes les informations sur le programme et les conditions d'inscription."
                buttonText="Recevoir les détails"
                preselect="arabe"
              />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    L&apos;islam : les fondamentaux
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes de la tradition arabe
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
