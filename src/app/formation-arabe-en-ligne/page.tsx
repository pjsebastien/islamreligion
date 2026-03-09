import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import StickyFormationBar from "@/components/StickyFormationBar";

export const metadata: Metadata = {
  title:
    "Meilleures formations et cours d'arabe en ligne (2026)",
  description:
    "Découvrez les meilleures formations pour apprendre l'arabe en ligne : cours structurés, méthode éprouvée, témoignages d'élèves. Lisez l'arabe en moins de 30 jours.",
  openGraph: {
    title:
      "Meilleures formations et cours d'arabe en ligne (2026)",
    description:
      "Découvrez les meilleures formations pour apprendre l'arabe en ligne : cours structurés, méthode éprouvée, témoignages d'élèves. Lisez l'arabe en moins de 30 jours.",
    url: "https://www.islamreligion.fr/formation-arabe-en-ligne",
    images: [{ url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/formation-arabe-en-ligne",
  },
};

const tocItems = [
  { id: "pourquoi", label: "Pourquoi apprendre l'arabe en ligne ?" },
  { id: "criteres", label: "Comment choisir sa formation" },
  { id: "formations", label: "Les formations recommandées" },
  { id: "objectif-lire", label: "Objectif Lire l'Arabe" },
  { id: "boost-ton-arabe", label: "Boost Ton Arabe" },
  { id: "temoignages", label: "Témoignages d'élèves" },
  { id: "comparatif", label: "Comparatif des deux formations" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Combien de temps faut-il pour apprendre à lire l'arabe ?",
    answer:
      "Avec une méthode structurée et 15 minutes de pratique quotidienne, la plupart des élèves parviennent à lire l'alphabet arabe et à déchiffrer leurs premiers mots en 2 à 4 semaines. La formation Objectif Lire l'Arabe est conçue pour atteindre cet objectif en moins de 30 jours, même en partant de zéro.",
  },
  {
    question: "Est-ce que ces formations sont adaptées aux débutants complets ?",
    answer:
      "Oui, la formation Objectif Lire l'Arabe est spécialement conçue pour les personnes qui n'ont jamais étudié l'arabe. Elle part de zéro : l'alphabet, la prononciation de chaque lettre, puis la lecture progressive. Aucun prérequis n'est nécessaire.",
  },
  {
    question: "Quelle est la différence entre les deux formations ?",
    answer:
      "Objectif Lire l'Arabe s'adresse aux grands débutants et permet d'apprendre à lire et écrire en moins de 30 jours. Boost Ton Arabe est la suite logique : elle approfondit la grammaire, la conjugaison, la lecture sans voyelles et la compréhension du Coran. L'idéal est de commencer par la première, puis d'enchaîner avec la seconde.",
  },
  {
    question: "Les cours sont-ils en vidéo ou en direct ?",
    answer:
      "Les cours sont en vidéo préenregistrée, accessibles 24h/24 et 7j/7 depuis n'importe quel appareil. Vous avancez à votre rythme, sans contrainte d'horaire. Vous pouvez revoir chaque leçon autant de fois que nécessaire.",
  },
  {
    question: "Y a-t-il un suivi ou un accompagnement ?",
    answer:
      "Oui. Tout au long de la formation, vous recevez des messages de motivation et des conseils pour maintenir votre régularité. Vous pouvez poser vos questions directement au formateur et obtenir des réponses personnalisées. L'accès est à vie, sans limite de temps.",
  },
  {
    question: "Est-ce que je pourrai comprendre le Coran après ces formations ?",
    answer:
      "La formation Objectif Lire l'Arabe vous permet de déchiffrer les versets du Coran en arabe. Boost Ton Arabe va plus loin : grâce à l'étude de la grammaire et du vocabulaire religieux, vous commencerez à comprendre le sens des versets que vous lisez, sans dépendre uniquement de la traduction.",
  },
  {
    question: "Existe-t-il une garantie satisfait ou remboursé ?",
    answer:
      "Oui, les formations Objectif Arabe sont proposées avec une garantie satisfait ou remboursé. Si le contenu ne vous convient pas, vous pouvez demander un remboursement. Cela vous permet de tester la méthode sans risque.",
  },
  {
    question: "Faut-il un niveau en arabe pour suivre Boost Ton Arabe ?",
    answer:
      "Il est recommandé de savoir lire l'alphabet arabe avant de commencer Boost Ton Arabe. Si ce n'est pas le cas, commencez par Objectif Lire l'Arabe. Si vous savez déjà lire les lettres, vous pouvez directement passer à Boost Ton Arabe.",
  },
];

export default function FormationArabeEnLigne() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.islamreligion.fr/formation-arabe-en-ligne/#webpage",
        url: "https://www.islamreligion.fr/formation-arabe-en-ligne",
        name: "Meilleures formations et cours d'arabe en ligne (2026)",
        description:
          "Découvrez les meilleures formations pour apprendre l'arabe en ligne : cours structurés, méthode éprouvée, témoignages d'élèves.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
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
      {
        "@type": "BreadcrumbList",
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
            name: "Formation arabe en ligne",
            item: "https://www.islamreligion.fr/formation-arabe-en-ligne",
          },
        ],
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
          title="Les meilleures formations pour apprendre l'arabe en ligne"
          subtitle="Comparez les cours, découvrez une méthode éprouvée et commencez à lire l'arabe en moins de 30 jours — depuis chez vous, à votre rythme."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Coran ouvert avec calligraphie dorée, symbole de l'apprentissage de l'arabe"
          ctas={[
            { label: "Voir les formations", href: "#formations", variant: "primary" },
            { label: "Lire les témoignages", href: "#temoignages", variant: "secondary" },
          ]}
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

              {/* ============================================ */}
              {/* SECTION 1 : Pourquoi apprendre l'arabe en ligne */}
              {/* ============================================ */}
              <section id="pourquoi" className="scroll-mt-24 pt-8 lg:pt-0">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Pourquoi apprendre l&apos;arabe en ligne en 2026 ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;arabe est la langue du Coran, des invocations et de plus de
                  400 millions de locuteurs dans le monde. Que votre objectif soit de
                  <strong> comprendre vos prières</strong>, de <strong>lire le Coran sans traduction</strong> ou
                  simplement de découvrir une langue riche et fascinante, apprendre
                  l&apos;arabe est un investissement qui transforme votre quotidien spirituel.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Aujourd&apos;hui, plus besoin de se déplacer dans un institut ou de
                  voyager dans un pays arabophone. Les <strong>formations en ligne</strong> permettent
                  d&apos;apprendre depuis chez soi, à son rythme, avec des cours en vidéo
                  accessibles 24h/24. C&apos;est la solution idéale pour les personnes
                  actives, les parents ou ceux qui vivent loin d&apos;un centre de langue.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: "clock", title: "Flexible", desc: "Étudiez quand vous voulez : 15 à 30 min par jour suffisent" },
                    { icon: "home", title: "Depuis chez vous", desc: "Pas de déplacement, pas de contrainte géographique" },
                    { icon: "replay", title: "À votre rythme", desc: "Revoyez chaque leçon autant de fois que nécessaire" },
                    { icon: "wallet", title: "Accessible", desc: "Prix bien inférieur aux cours en institut ou en particulier" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="mt-1 text-sm text-foreground-secondary">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Critères de choix */}
              {/* ============================================ */}
              <section id="criteres" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment choisir la bonne formation d&apos;arabe ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Face à la multitude d&apos;offres, il est essentiel de savoir quels
                  critères privilégier. Voici les points que nous évaluons pour vous
                  recommander une formation :
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    { title: "Pédagogie adaptée aux francophones", desc: "Le formateur doit comprendre les difficultés spécifiques des francophones face à l'arabe : sons inexistants en français, sens d'écriture, alphabet totalement différent." },
                    { title: "Progression structurée", desc: "Un bon cours suit un parcours logique : alphabet → lecture → grammaire → compréhension. Pas de sauts incohérents." },
                    { title: "Accès à vie et support", desc: "Pouvoir revoir les leçons sans limite de temps et poser ses questions au formateur fait toute la différence." },
                    { title: "Résultats concrets et rapides", desc: "Les élèves doivent voir des progrès mesurables dès les premières semaines, pas après 2 ans." },
                    { title: "Orientation vers le Coran", desc: "Pour la communauté musulmane francophone, la capacité à lire et comprendre le Coran est souvent l'objectif premier." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-lg border-l-4 border-secondary bg-accent px-5 py-4">
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Introduction formations */}
              {/* ============================================ */}
              <section id="formations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les formations que nous recommandons
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Après avoir testé et analysé de nombreuses offres, nous recommandons
                  les formations <strong>Objectif Arabe</strong> créées par Samir Bouali.
                  Pourquoi ? Parce qu&apos;elles cochent toutes les cases : un formateur
                  diplômé (Master en langue arabe, Université Lyon 2), une méthode
                  pensée pour les francophones, des résultats visibles en quelques
                  semaines et un accompagnement humain tout au long du parcours.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Samir a lui-même appris l&apos;arabe en partant de zéro. Il enseigne
                  depuis plus de 10 ans et a accompagné des milliers d&apos;élèves
                  francophones. Ses formations se déclinent en deux niveaux
                  complémentaires, adaptés à votre niveau actuel.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Intérieur de mosquée baigné de lumière, symbole de la quête de connaissance en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Formation Objectif Lire l'Arabe */}
              {/* ============================================ */}
              <section id="objectif-lire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Formation &laquo;&nbsp;Objectif Lire l&apos;Arabe&nbsp;&raquo;
                </h2>
                <p className="mt-1 text-sm font-medium text-secondary">Niveau débutant — Partez de zéro</p>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette formation est faite pour vous si vous ne connaissez pas une
                  seule lettre de l&apos;alphabet arabe. En <strong>moins de 30 jours</strong>,
                  avec seulement <strong>15 minutes par jour</strong>, vous serez capable de :
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    "Reconnaître et prononcer toutes les lettres de l'alphabet arabe, y compris les sons difficiles",
                    "Lire des mots puis des phrases complètes en arabe",
                    "Écrire en arabe avec les bonnes règles de calligraphie",
                    "Déchiffrer vos premiers versets du Coran en arabe",
                    "Lire des hadiths et des invocations (douas) dans leur langue originale",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <svg className="h-3 w-3 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary">Ce qui est inclus</h3>
                  <ul className="mt-4 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Cours vidéo progressifs, du plus simple au plus avancé
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Exercices pratiques de lecture et d&apos;écriture
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Lectures guidées pour fluidifier votre lecture
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Bonus : initiation à la lecture coranique
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Accès à vie + support direct avec le formateur
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Garantie satisfait ou remboursé
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://objectifarabe.kneo.me/c/fc82aj/b9fl95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-dark"
                    >
                      Découvrir la formation
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Formation Boost Ton Arabe */}
              {/* ============================================ */}
              <section id="boost-ton-arabe" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Formation &laquo;&nbsp;Boost Ton Arabe&nbsp;&raquo;
                </h2>
                <p className="mt-1 text-sm font-medium text-secondary">Niveau intermédiaire / avancé — Allez plus loin</p>

                <p className="mt-6 leading-relaxed text-foreground">
                  Vous savez déjà lire les lettres arabes ? Passez à l&apos;étape
                  supérieure. <strong>Boost Ton Arabe</strong> est une formation
                  complète de <strong>plus de 50 heures de vidéo</strong> qui vous amène vers
                  l&apos;autonomie en arabe. Elle s&apos;appuie sur l&apos;étude des
                  4 Tomes de Médine, une référence dans l&apos;enseignement de l&apos;arabe
                  dans le monde entier.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de prière de mosquée avec arches et lumière du soleil, symbole de l'apprentissage"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  À l&apos;issue de cette formation, vous serez capable de :
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    "Lire l'arabe sans voyelles (comme dans les livres et journaux arabes)",
                    "Comprendre la grammaire arabe : conjugaison, analyse de phrases, déclinaisons",
                    "Lire et comprendre des textes religieux : Coran, hadiths, khotbas",
                    "Construire des phrases et vous exprimer en arabe",
                    "Annoter et résumer des textes en arabe de manière autonome",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <svg className="h-3 w-3 text-secondary" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-xl border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-primary">Ce qui est inclus</h3>
                  <ul className="mt-4 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Plus de 50 heures de cours vidéo structurés (4 niveaux progressifs)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Étude complète des 4 Tomes de Médine
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Exercices de grammaire, conjugaison et analyse de textes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      6 bonus exceptionnels (vocabulaire religieux, textes complémentaires)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Accès à vie + questions illimitées au formateur
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Garantie satisfait ou remboursé
                    </li>
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="https://objectifarabe.kneo.me/c/15f2x3/b9fl95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-dark"
                    >
                      Découvrir Boost Ton Arabe
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Témoignages */}
              {/* ============================================ */}
              <section id="temoignages" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent les élèves
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Des milliers de francophones ont déjà suivi les formations Objectif
                  Arabe. Voici quelques retours d&apos;expérience authentiques.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      name: "Samia",
                      text: "Avant de suivre la formation je n'avais aucune notion d'arabe. Au bout de 8 jours d'apprentissage, je savais lire et écrire. Je suis maintenant capable de déchiffrer des versets du Coran en arabe.",
                      highlight: "8 jours pour lire et écrire",
                    },
                    {
                      name: "Lionel",
                      text: "Je suis pleinement satisfait de tes cours. En tant que prof tu es très clair, ça fait le même effet qu'un cours particulier. La progression est logique et motivante.",
                      highlight: "Comme un cours particulier",
                    },
                    {
                      name: "Gino",
                      text: "Je crois que je suis tombé amoureux de la grammaire arabe. Je travaille 1 à 2 heures par jour, voire plus. La méthode est tellement bien structurée qu'on a envie d'avancer.",
                      highlight: "Passionné par la grammaire",
                    },
                    {
                      name: "Isabelle",
                      text: "Vos messages d'encouragements, vos conseils sur la manière de travailler… sont l'énorme plus de votre formation. On ne se sent jamais seul dans l'apprentissage.",
                      highlight: "Accompagnement humain",
                    },
                    {
                      name: "Angelina",
                      text: "J'ai déjà réussi à apprendre l'alphabet et je suis surprise de retenir si vite ce que j'apprends. La méthode est progressive et les explications sont limpides.",
                      highlight: "Progression rapide",
                    },
                    {
                      name: "Mokhtar",
                      text: "La pédagogie est claire et structurée. Les emails de motivation aident à garder le cap. J'ai enfin compris des notions de grammaire qui me bloquaient depuis des années.",
                      highlight: "Déclic grammatical",
                    },
                  ].map((t) => (
                    <div key={t.name} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-secondary">{t.highlight}</span>
                      </div>
                      <blockquote className="mt-3 text-foreground leading-relaxed italic">
                        &laquo;&nbsp;{t.text}&nbsp;&raquo;
                      </blockquote>
                      <p className="mt-3 text-sm font-semibold text-primary">— {t.name}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Comparatif */}
              {/* ============================================ */}
              <section id="comparatif" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comparatif : quelle formation choisir ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Voici un récapitulatif pour vous aider à choisir la formation
                  adaptée à votre niveau et à vos objectifs.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full min-w-[500px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 pr-4 font-semibold text-primary">Critère</th>
                        <th className="py-3 px-4 font-semibold text-primary">Objectif Lire l&apos;Arabe</th>
                        <th className="py-3 pl-4 font-semibold text-primary">Boost Ton Arabe</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      {[
                        ["Niveau requis", "Aucun (grand débutant)", "Savoir lire les lettres"],
                        ["Objectif", "Lire et écrire l'arabe", "Grammaire, compréhension, Coran"],
                        ["Durée estimée", "Moins de 30 jours", "Plusieurs mois (à votre rythme)"],
                        ["Volume de cours", "Cours vidéo progressifs", "50+ heures de vidéo (4 niveaux)"],
                        ["Temps quotidien", "15 min / jour", "30 min / jour"],
                        ["Méthode", "Alphabet → Lecture → Écriture", "Tomes de Médine (1 à 4)"],
                        ["Lecture du Coran", "Déchiffrage des versets", "Lecture fluide + compréhension"],
                        ["Accès", "À vie", "À vie"],
                        ["Support formateur", "Oui", "Oui"],
                        ["Garantie", "Satisfait ou remboursé", "Satisfait ou remboursé"],
                      ].map(([label, col1, col2]) => (
                        <tr key={label} className="border-b border-border/50">
                          <td className="py-3 pr-4 font-medium text-foreground">{label}</td>
                          <td className="py-3 px-4">{col1}</td>
                          <td className="py-3 pl-4">{col2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 rounded-xl border border-secondary/30 bg-accent px-6 py-6">
                  <h3 className="text-lg font-semibold text-primary">Notre recommandation</h3>
                  <p className="mt-2 leading-relaxed text-foreground">
                    Si vous partez de zéro, commencez par <strong>Objectif Lire l&apos;Arabe</strong>.
                    Une fois que vous maîtrisez la lecture, enchaînez avec <strong>Boost Ton
                    Arabe</strong> pour aller vers l&apos;autonomie complète. Les deux formations
                    se complètent parfaitement et vous amènent du niveau zéro à la
                    compréhension du Coran en arabe.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="https://objectifarabe.kneo.me/c/fc82aj/b9fl95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
                    >
                      Commencer par Objectif Lire l&apos;Arabe
                    </a>
                    <a
                      href="https://objectifarabe.kneo.me/c/15f2x3/b9fl95"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-secondary px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/5"
                    >
                      Passer à Boost Ton Arabe
                    </a>
                  </div>
                </div>
              </section>

              <div className="mt-6 overflow-hidden rounded-xl">
                <Image
                  src="/images/doua-mains-levees-illustration-lumiere.jpg"
                  alt="Mains levées en invocation (doua), illustration de la quête spirituelle"
                  width={1200}
                  height={720}
                  className="w-full object-cover"
                />
              </div>

              {/* ============================================ */}
              {/* SECTION 8 : FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* ============================================ */}
              {/* CTA Final */}
              {/* ============================================ */}
              <section className="mt-16 rounded-2xl bg-primary px-6 py-10 text-center text-white lg:px-12">
                <h2 className="text-2xl font-bold lg:text-3xl">
                  Prêt à apprendre l&apos;arabe ?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/80">
                  Rejoignez les milliers de francophones qui ont transformé leur
                  rapport à la langue arabe et au Coran grâce à la méthode Objectif
                  Arabe. Commencez aujourd&apos;hui, à votre rythme.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://objectifarabe.kneo.me/c/fc82aj/b9fl95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-secondary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-secondary-dark"
                  >
                    Je débute : Objectif Lire l&apos;Arabe
                  </a>
                  <a
                    href="https://objectifarabe.kneo.me/c/15f2x3/b9fl95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/20 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Je sais lire : Boost Ton Arabe
                  </a>
                </div>
              </section>

              {/* Transparence affiliation */}
              <p className="mt-12 rounded-lg bg-accent px-5 py-4 text-xs leading-relaxed text-foreground-secondary">
                <strong>Transparence :</strong> cette page contient des liens affiliés vers les formations Objectif Arabe. Si vous vous inscrivez via ces liens, nous percevons une commission sans aucun surcoût pour vous. Cela nous permet de financer le site et de continuer à proposer du contenu gratuit de qualité.
              </p>

              {/* Maillage interne */}
              <div className="mt-8 rounded-xl border border-border bg-white p-6">
                <h3 className="font-semibold text-primary">Articles en lien</h3>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link href="/apprendre-larabe" className="text-sm text-foreground-secondary hover:text-secondary">
                      Apprendre l&apos;arabe : méthode, alphabet et premiers pas
                    </Link>
                  </li>
                  <li>
                    <Link href="/apprendre-le-coran" className="text-sm text-foreground-secondary hover:text-secondary">
                      Apprendre le Coran : mémorisation, récitation et tajwid
                    </Link>
                  </li>
                  <li>
                    <Link href="/apprendre-science-religieuse-islam" className="text-sm text-foreground-secondary hover:text-secondary">
                      Apprendre la science religieuse en islam
                    </Link>
                  </li>
                  <li>
                    <Link href="/reves-islam" className="text-sm text-foreground-secondary hover:text-secondary">
                      Interprétation des rêves en islam
                    </Link>
                  </li>
                </ul>
              </div>

            </article>
          </div>
        </div>
      </main>
      <StickyFormationBar />
    </>
  );
}
