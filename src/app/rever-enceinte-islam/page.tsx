import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver d'être enceinte islam : significations spirituelles et interprétations",
  description:
    "Découvrez la signification de rêver d'être enceinte en islam : interprétations selon Ibn Sirin, symbolisme spirituel, conseils pratiques et messages cachés.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-enceinte-islam",
  },
};

const tocItems = [
  { id: "essentiel", label: "L'essentiel à retenir" },
  { id: "signification", label: "Signification spirituelle" },
  { id: "interpretations", label: "Interprétations selon la tradition" },
  { id: "symbolisme", label: "Symbolisme et messages cachés" },
  { id: "premonitoires", label: "Rêves prémonitoires" },
  { id: "conseils", label: "Conseils pratiques" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver d'être enceinte en islam ?",
    answer:
      "Rêver d'être enceinte en islam symbolise souvent un changement intérieur, une bénédiction à venir ou de nouvelles responsabilités. Ce rêve peut évoquer la prospérité, la croissance personnelle, un projet en gestation ou un événement futur. L'interprétation varie selon le contexte personnel du rêveur.",
  },
  {
    question:
      "Quelle est la signification du rêve de grossesse pour une femme mariée ?",
    answer:
      "Pour une femme mariée, rêver d'être enceinte peut annoncer une grossesse réelle, une période de succès, un gain matériel ou un épanouissement spirituel. Les savants comme Ibn Sirin y voient souvent un signe de bénédiction divine et de changement positif dans la vie conjugale.",
  },
  {
    question:
      "Que signifie rêver d'être enceinte pour une femme célibataire en islam ?",
    answer:
      "Pour une femme célibataire, ce rêve peut signaler une attente anticipée, un trouble intérieur, un désir refoulé ou une appréhension face à l'avenir. Il invite à la patience, à la prière et à la confiance en Allah pour traverser cette période de questionnement.",
  },
  {
    question: "Que signifie rêver d'être enceinte pour un homme en islam ?",
    answer:
      "Lorsqu'un homme rêve de grossesse en islam, cela révèle souvent un secret, un poids moral ou un fardeau qu'il porte seul et dont il cherche la libération. Ce rêve l'invite à ouvrir le dialogue, alléger son coeur et pratiquer le dhikr pour retrouver la sérénité.",
  },
  {
    question:
      "Rêver d'être enceinte en islam est-il un signe prémonitoire ?",
    answer:
      "En islam, certains rêves sont considérés comme des visions véridiques (Ru'ya Saliha) envoyées par Allah. Cependant, tous les rêves de grossesse ne sont pas prémonitoires. Il convient de distinguer les rêves véridiques des rêves provenant du Shaytane ou de l'âme (nafs), et seul Allah connait la signification ultime.",
  },
  {
    question: "Que signifie rêver d'accoucher en islam ?",
    answer:
      "Rêver d'accoucher en islam peut symboliser l'aboutissement d'un projet, la résolution d'une difficulté ou l'arrivée d'un changement majeur. Si l'accouchement se passe bien dans le rêve, c'est un signe positif de réussite et de soulagement. Un accouchement difficile peut indiquer des obstacles à surmonter.",
  },
  {
    question: "Que faire après un rêve de grossesse en islam ?",
    answer:
      "Après un rêve de grossesse, il est recommandé de noter le rêve au réveil, de réciter les invocations de protection, de pratiquer les prières surérogatoires et de consulter un imam ou une personne de confiance. Il faut éviter les interprétations hâtives et se remettre à Allah avec sérénité.",
  },
  {
    question:
      "Que signifie rêver d'être enceinte de jumeaux en islam ?",
    answer:
      "Rêver d'une grossesse de jumeaux en islam peut symboliser une double bénédiction ou une double épreuve, des responsabilités intenses ou des conflits émergents. Ce rêve invite à la méditation, à la patience et à échanger avec un conseiller spirituel pour en comprendre le sens profond.",
  },
];

export default function ReverEnceinte() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-enceinte-islam/#article",
        headline:
          "Rêver d'être enceinte islam : significations spirituelles et interprétations",
        description:
          "Découvrez la signification de rêver d'être enceinte en islam : interprétations selon Ibn Sirin, symbolisme spirituel et conseils pratiques.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-detre-enceinte-islam-significations-spirituelles-et-interpretations.jpg",
        datePublished: "2025-08-20",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-enceinte-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-enceinte-islam/#breadcrumb",
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
            name: "Rêver d'être enceinte",
            item: "https://www.islamreligion.fr/rever-enceinte-islam",
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
          title="Rêver d'être enceinte islam : significations spirituelles et interprétations"
          subtitle="Interprétation du rêve de grossesse selon la tradition islamique, Ibn Sirin et les textes sacrés."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-detre-enceinte-islam-significations-spirituelles-et-interpretations.jpg"
          imageAlt="Rêver d'être enceinte en islam, significations spirituelles et interprétations"
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
                <span className="text-foreground">
                  Rêver d&apos;être enceinte
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le rêve de grossesse en islam intrigue et suscite la
                  réflexion. Très fréquemment rapporté, il interroge sur ses
                  significations spirituelles, ses implications dans la foi,
                  ainsi que sur les messages que notre âme cherche à
                  transmettre. Ce rêve symbolise souvent un changement
                  intérieur, une bénédiction ou de nouvelles responsabilités.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : L'essentiel à retenir */}
              {/* ============================================ */}
              <section id="essentiel" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;essentiel à retenir sur le rêve de grossesse en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Rêver d&apos;être enceinte en islam symbolise souvent un
                  changement intérieur, une bénédiction ou de nouvelles
                  responsabilités. L&apos;interprétation varie selon le
                  contexte personnel : mariage, célibat, situation familiale
                  et niveau de spiritualité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Trois catégories de rêves : les rêves véridiques
                      (inspirés par Allah), les rêves du Shaytane
                      (perturbateurs) et les rêves de l&apos;âme (liés aux
                      préoccupations).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La grossesse en rêve évoque la prospérité, la croissance
                      personnelle, des projets ou des événements futurs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Prudence recommandée : seul Allah connait la
                      signification ultime de chaque rêve.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les rituels et les prières sont conseillés pour
                      accompagner et éclairer les rêves.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les messages oniriques invitent à la réflexion, à la
                      gratitude et à la recherche de sens spirituel.
                    </span>
                  </li>
                </ul>

                {/* Tableau interprétations selon la situation */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Situation du rêveur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation fréquente
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Femme mariée
                        </td>
                        <td className="py-3 pr-4">
                          Bénédiction, nouveau projet, changement positif
                        </td>
                        <td className="py-3">
                          Remercier Allah, renforcer la foi
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Femme célibataire
                        </td>
                        <td className="py-3 pr-4">
                          Sens caché, anxiété, attentes futures
                        </td>
                        <td className="py-3">
                          Patience, prière, confiance en Allah
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Homme
                        </td>
                        <td className="py-3 pr-4">
                          Fardeau, secret, charge à porter
                        </td>
                        <td className="py-3">
                          Pratiquer le dhikr, méditer sur la responsabilité
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Signification spirituelle */}
              {/* ============================================ */}
              <section id="signification" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification spirituelle du rêve de grossesse en islam :
                  entre bénédictions et responsabilités
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Interpréter le rêve de grossesse, c&apos;est avant tout
                  accueillir l&apos;idée d&apos;une croissance intérieure.
                  Pour de nombreuses soeurs musulmanes, ce rêve ne se réduit
                  pas à un simple désir de maternité, mais peut révéler une
                  phase de transformation personnelle, de renouveau spirituel
                  ou l&apos;émergence de nouveaux projets porteurs de sens.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants évoquent ce rêve comme l&apos;annonce
                  d&apos;événements heureux, de prospérité ou d&apos;une
                  avancée significative. La grossesse symbolise aussi le fait
                  de porter un fardeau nécessitant soin et persévérance. Le
                  rêveur s&apos;élève, gagne en maturité, en foi ou en
                  capacité à assumer ses choix de vie.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Bénédictions à venir :</strong> ce rêve annonce
                      souvent des événements heureux, la prospérité ou une
                      avancée significative.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Nouvelles responsabilités :</strong> la grossesse
                      symbolise le fait de porter un fardeau nécessitant soin
                      et persévérance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Développement personnel :</strong> le rêveur
                      s&apos;élève, gagne en maturité, en foi ou en capacité
                      à assumer ses choix de vie.
                    </span>
                  </li>
                </ul>

                {/* Témoignage Fatima */}
                <div className="mt-8 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Témoignage
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground italic">
                    &laquo; Fatima, originaire de Lyon, a vécu ce rêve en
                    pleine période de doute. Grace à la prière et à un
                    accompagnement spirituel, elle a compris que ce rêve
                    signalait un cheminement intérieur bien au-delà de la
                    simple maternité. Ce fut pour elle le début d&apos;un
                    renouveau spirituel profond. &raquo;
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas paniquer face à un rêve étrange ou perturbant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les rêves de grossesse peuvent surprendre, mais ils ne
                        sont pas nécessairement négatifs. L&apos;islam invite
                        à la sérénité face aux messages oniriques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Relativiser l&apos;interprétation et privilégier la
                        prière sincère
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Seul Allah connait la signification ultime. La
                        connexion avec la prière reste la meilleure approche
                        pour accueillir un rêve avec sagesse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Consulter un imam ou une personne de confiance
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le rêve vous trouble véritablement, n&apos;hésitez
                        pas à en parler à un conseiller spirituel de confiance
                        pour bénéficier d&apos;un éclairage adapté.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-detre-enceinte-islam-significations-spirituelles-et-interpretations-1.jpg"
                    alt="Signification spirituelle du rêve de grossesse en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Interprétations selon la tradition */}
              {/* ============================================ */}
              <section id="interpretations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les interprétations spécifiques selon la tradition islamique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam Ibn Sirin, référence majeure dans la science des
                  rêves au sein de la tradition musulmane, distingue plusieurs
                  situations pour interpréter le rêve de grossesse. Chaque
                  contexte apporte un éclairage différent sur le message
                  onirique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Femme mariée :</strong> annonce potentielle de
                      grossesse, période de succès, gain matériel ou
                      épanouissement spirituel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Femme célibataire :</strong> peut signaler une
                      attente anticipée, un trouble intérieur, un désir
                      refoulé ou une appréhension liée à la virginité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Femme stérile :</strong> reflète parfois la
                      tristesse ou un espoir immense, un manque ou une
                      épreuve, toujours ponctué par l&apos;espoir de la
                      miséricorde divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Homme rêvant de grossesse :</strong> révèle
                      souvent un secret, un poids moral, un fardeau porté seul
                      dont il cherche la libération.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam insiste sur la prudence dans
                  l&apos;interprétation des rêves. Seul Allah connait
                  véritablement leur signification. Chaque rêve doit être
                  accueilli avec humilité et discernement.
                </p>

                {/* Tableau détails du rêve */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Détail du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification potentielle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Attitude conseillée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Grossesse de jumeaux
                        </td>
                        <td className="py-3 pr-4">
                          Double bénédiction ou épreuve, conflits émergents,
                          responsabilités intenses
                        </td>
                        <td className="py-3">
                          Méditer, chercher la patience, consulter un
                          conseiller spirituel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Enceinte mais peur d&apos;accoucher
                        </td>
                        <td className="py-3 pr-4">
                          Doute, hésitation avant une étape cruciale
                        </td>
                        <td className="py-3">
                          Renforcer la confiance en Allah, réciter les
                          sourates protectrices
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Homme enceinte de manière inattendue
                        </td>
                        <td className="py-3 pr-4">
                          Fardeau caché ou secret pesant
                        </td>
                        <td className="py-3">
                          Ouvrir le dialogue, alléger le coeur, pratiquer le
                          dhikr
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir une autre femme enceinte
                        </td>
                        <td className="py-3 pr-4">
                          Projet en gestation autour de soi, envie inconsciente
                        </td>
                        <td className="py-3">
                          Pratiquer l&apos;altruisme, encourager les projets
                          d&apos;autrui
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Contexte actuel */}
                <h3 className="mt-10 text-xl font-bold text-primary">
                  L&apos;impact du contexte actuel sur l&apos;interprétation
                  des rêves de grossesse
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une soeur vivant dans un contexte occidental laique peut
                  percevoir ce rêve comme l&apos;expression d&apos;un besoin
                  d&apos;enracinement dans la tradition ou d&apos;une
                  appréhension de la maternité en dehors du cadre familial
                  élargi. La pression sociale, familiale ou professionnelle
                  intensifie souvent la fréquence et l&apos;intensité de ce
                  type de rêve.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Chaque effort pour s&apos;améliorer, aussi petit soit-il,
                  apparait précieux aux yeux d&apos;Allah. Il convient de ne
                  pas négliger la santé émotionnelle et d&apos;accueillir ces
                  rêves comme des invitations à la réflexion et à la
                  croissance spirituelle.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Pleurer dans un rêve en islam : signification et compassion"
                  description="Découvrez ce que symbolisent les larmes dans un rêve selon la tradition islamique."
                  href="/pleurer-reve-islam-compassion"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Symbolisme et messages cachés */}
              {/* ============================================ */}
              <section id="symbolisme" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolisme de la grossesse en rêve : mutation, créativité et
                  messages cachés
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le symbolisme de la grossesse en rêve, reconnu en islam mais
                  aussi dans d&apos;autres cultures, illustre puissamment les
                  concepts de mutation, de créativité et de projets en
                  germination. En islam, cela va bien au-delà de
                  l&apos;accouchement physique : c&apos;est aussi la naissance
                  d&apos;une nouvelle facette de soi, d&apos;un engagement ou
                  d&apos;une vocation.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Créativité accrue :</strong> le rêve peut
                      indiquer que le rêveur nourrit une idée importante, une
                      ambition ou un projet.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Transformation personnelle :</strong> se voir
                      enceinte évoque un changement d&apos;étape de vie et une
                      évolution intérieure profonde.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Craintes et espoirs face à la nouveauté :</strong>{" "}
                      la grossesse génère à la fois joie et anxiété face à
                      l&apos;inconnu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Messages d&apos;alerte oniriques :</strong>{" "}
                      prédisent parfois le besoin de se préparer à des défis
                      ou responsabilités, révélant des craintes passées sous
                      silence.
                    </span>
                  </li>
                </ul>

                {/* Tableau scénarios oniriques */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario onirique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Message symbolique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Enceinte et incapable d&apos;accoucher
                        </td>
                        <td className="py-3">
                          Blocage dans l&apos;accomplissement d&apos;un projet
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Enceinte d&apos;un ex-partenaire
                        </td>
                        <td className="py-3">
                          Sentiment non résolu, besoin d&apos;avancer
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Enceinte et heureuse
                        </td>
                        <td className="py-3">
                          Reconnaissance de l&apos;abondance divine, quête de
                          bonheur simple
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Enceinte hors mariage
                        </td>
                        <td className="py-3">
                          Conflit intérieur, désir caché, questionnement
                          éthique et spirituel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-detre-enceinte-islam-significations-spirituelles-et-interpretations-2.jpg"
                    alt="Symbolisme de la grossesse en rêve en islam, mutation et créativité"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Rêves prémonitoires */}
              {/* ============================================ */}
              <section id="premonitoires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêves prémonitoires et sens cachés de la grossesse en rêve
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Dans l&apos;histoire islamique, les rêves prémonitoires ont
                  souvent joué un role central. Certains récits prophétiques
                  rapportent que des événements majeurs furent annoncés ou
                  confirmés par des rêves, renforçant la foi des croyants et
                  la dimension surnaturelle de cette expérience.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La force de l&apos;islam réside dans son approche équilibrée
                  des rêves. Loin de tomber dans la superstition, il encourage
                  à accueillir les rêves comme une opération de clarification
                  du coeur, tout en restant prudent quant à
                  l&apos;interprétation.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      1. Les rêves véridiques (Ru&apos;ya Saliha)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Perçus comme des signes envoyés par Allah, ils portent
                      souvent un message de guidance, d&apos;espoir ou
                      d&apos;avertissement. Ce sont les rêves les plus
                      précieux pour le croyant.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      2. Les rêves du Shaytane
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Conçus pour semer la peur, l&apos;inquiétude ou la
                      confusion dans le coeur du musulman. Face à ces rêves,
                      il convient de chercher refuge auprès d&apos;Allah et de
                      réciter les invocations de protection.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      3. Les rêves issus de l&apos;âme (nafs)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Reflets des préoccupations quotidiennes, des désirs ou
                      des tensions intérieures. Ces rêves traduisent ce qui
                      habite l&apos;esprit au quotidien et invitent à
                      l&apos;introspection.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-bold text-primary">
                  Pratiques recommandées après un rêve de grossesse
                </h3>

                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Pour les rêves positifs
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Remercier Allah et prier pour maintenir la bénédiction.
                        Partager le rêve avec une personne de confiance dans
                        la joie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Pour les rêves effrayants
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter &laquo; Bismillah &raquo; trois fois, souffler
                        à gauche et chercher protection contre le Shaytane.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Partager avec discernement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ne partager ses rêves qu&apos;avec des personnes
                        dignes de confiance afin d&apos;éviter les
                        interprétations erronées.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier le dhikr avant le sommeil
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter Ayat al-Kursiy et les trois Qul (sourates
                        Al-Ikhlas, Al-Falaq et An-Nas) pour favoriser des
                        rêves paisibles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Témoignage Omar */}
                <div className="mt-8 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Témoignage
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground italic">
                    &laquo; Omar, jeune père de famille, a vu dans son rêve de
                    grossesse l&apos;annonce d&apos;un changement
                    professionnel. Ce message onirique l&apos;a guidé vers une
                    décision éclairée, illustrant comment les rêves peuvent
                    parfois orienter sans jamais remplacer la consultation ni
                    la prière. &raquo;
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-detre-enceinte-islam-significations-spirituelles-et-interpretations-3.jpg"
                    alt="Rêves prémonitoires et sens cachés de la grossesse en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques et démarches spirituelles
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Accueillir un rêve de grossesse avec sagesse demande de ne
                  pas céder à l&apos;interprétation hative ni à la peur
                  excessive. L&apos;islam privilégie les échanges calmes avec
                  des personnes savantes et l&apos;accompagnement du rêve par
                  des prières spécifiques.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Accompagner le rêve de duas spécifiques, comme les
                      invocations avant le sommeil demandant la guidance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      S&apos;assurer d&apos;être en état de pureté (wudu)
                      pour favoriser des rêves paisibles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Prendre le temps d&apos;écrire le rêve et les émotions
                      ressenties pour en discerner le sens avec lucidité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      S&apos;appuyer sur le Coran, la prière et les cercles
                      de conseil vertueux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Accepter humblement de ne pas comprendre immédiatement
                      les messages oniriques.
                    </span>
                  </li>
                </ul>

                {/* Tableau démarches recommandées */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Démarche recommandée
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Résultat attendu
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Point d&apos;attention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Noter le rêve au réveil
                        </td>
                        <td className="py-3 pr-4">
                          Prise de conscience, mémorisation fidèle
                        </td>
                        <td className="py-3">
                          Ne pas embellir le souvenir
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Duas et prières protectrices
                        </td>
                        <td className="py-3 pr-4">
                          Apaisement du coeur, clarté mentale
                        </td>
                        <td className="py-3">
                          Constance dans la pratique
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Solliciter un conseil éclairé
                        </td>
                        <td className="py-3 pr-4">
                          Démarche d&apos;humilité, guidance
                        </td>
                        <td className="py-3">
                          Éviter les interprétations aventureuses
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Introspection et bilan spirituel
                        </td>
                        <td className="py-3 pr-4">
                          Évolution de la foi, décisions alignées
                        </td>
                        <td className="py-3">
                          Patience, accepter le rythme divin
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Seule la prière et la droiture du coeur permettent
                  finalement d&apos;accueillir le message du rêve avec
                  sérénité et générosité, invitant à faire un pas nouveau vers
                  la plénitude spirituelle.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de poisson en islam : richesse et abondance"
                  description="Découvrez ce que symbolise le poisson dans un rêve selon Ibn Sirin et la tradition islamique."
                  href="/reve-poisson-islam-richesse"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de grossesse ne porte pas la même signification
                  selon la personne qui le fait. Les grands interprètes
                  tiennent compte de la situation personnelle du rêveur pour
                  affiner leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de grossesse annonce souvent une bénédiction,
                      un nouveau projet ou un épanouissement dans la vie
                      conjugale. Il invite à remercier Allah et à renforcer
                      la foi au sein du foyer.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut signaler une attente, un trouble intérieur
                      ou un désir refoulé. Il invite à la patience, à la
                      prière et à la confiance en Allah pour traverser cette
                      période de questionnement personnel.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve reflète souvent les espoirs et les
                      préoccupations naturelles de la grossesse. Il invite à
                      multiplier les invocations de protection, à
                      s&apos;entourer de bienveillance et à accueillir cette
                      période avec gratitude envers Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de grossesse chez un homme révèle souvent un
                      fardeau caché, un secret pesant ou une responsabilité
                      portée seul. Il invite à ouvrir le dialogue, à alléger
                      le coeur par le dhikr et à méditer sur ses engagements.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Interprétations de rêves similaires
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rêves en islam
                  </Link>
                  <Link
                    href="/rever-souris-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de souris en islam
                  </Link>
                  <Link
                    href="/reve-poisson-islam-richesse"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de poisson en islam
                  </Link>
                  <Link
                    href="/pleurer-reve-islam-compassion"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Pleurer dans un rêve en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
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
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes et médecine prophétique
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
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
