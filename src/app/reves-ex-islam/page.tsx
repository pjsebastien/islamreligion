import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver de son ex islam : que dit l'islam sur ces rêves du passé ?",
  description:
    "Découvrez la signification des rêves sur votre ex selon l'islam et ce que ces songes révèlent sur votre passé et votre spiritualité.",
  alternates: {
    canonical: "https://www.islamreligion.fr/reves-ex-islam",
  },
};

const tocItems = [
  { id: "emotions", label: "Miroir des émotions passées" },
  { id: "interpretation", label: "Interprétation et guérison" },
  { id: "analyse", label: "Analyser ces rêves" },
  { id: "guerir", label: "Guérir et avancer" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de son ex en islam ?",
    answer:
      "Rêver de son ex en islam reflète surtout l'état émotionnel du rêveur et non une volonté de renouer le passé. Ces songes mettent en lumière des questions d'acceptation, de guérison ou de transition. L'islam recommande d'aborder ces rêves avec patience et douceur envers soi-même, et de chercher la guidance d'Allah pour avancer.",
  },
  {
    question:
      "Que signifie recevoir un message de son ex dans un rêve en islam ?",
    answer:
      "Recevoir un message de son ex dans un rêve révèle souvent une affaire émotionnelle non résolue ou un désir de mettre les choses au clair. Cela traduit le besoin de clore un chapitre ou l'envie d'exprimer des émotions restées silencieuses. Écrire une lettre non envoyée peut aider à libérer ces sentiments.",
  },
  {
    question:
      "Que signifie se disputer avec son ex dans un rêve selon l'islam ?",
    answer:
      "Se disputer ou se battre avec son ex dans un rêve est le reflet de conflits intérieurs à résoudre. Cela indique souvent la lutte intérieure, la difficulté à pardonner ou à se pardonner. L'islam invite à travailler sa capacité à pardonner, envers soi ou envers l'autre, et à se tourner vers Allah pour trouver la paix.",
  },
  {
    question:
      "Rêver de se remettre en couple avec son ex en islam : que signifie-t-il ?",
    answer:
      "Se remettre en couple avec son ex dans un rêve symbolise généralement un besoin de réconfort ou une nostalgie d'une étape révolue. Ce n'est pas nécessairement un signe de vouloir renouer, mais plutôt une invitation à identifier ce qui manque dans la vie actuelle et à pratiquer la gratitude envers ce qu'Allah offre.",
  },
  {
    question: "Rêver de la mort de son ex en islam : est-ce un mauvais signe ?",
    answer:
      "Rêver de la mort de son ex est interprété comme un signal positif en islam. Il symbolise la clôture d'un cycle et la libération émotionnelle. Ce rêve invite à tourner la page, à remercier Allah pour la guérison obtenue et à accueillir les nouvelles opportunités avec confiance.",
  },
  {
    question:
      "Que signifie voir son ex avec quelqu'un d'autre dans un rêve en islam ?",
    answer:
      "Voir son ex avec quelqu'un d'autre dans un rêve est souvent le reflet de la jalousie ou de la peur du rejet. Ce songe invite le rêveur à travailler sur la confiance en soi et la foi dans la destinée (qadr). Allah est le Meilleur des planificateurs, et ce rêve encourage à placer sa confiance en Lui.",
  },
  {
    question: "Que faire après avoir rêvé de son ex en islam ?",
    answer:
      "Après un rêve de son ex, il est recommandé d'identifier l'émotion dominante ressentie au réveil, d'analyser la scène exacte et de la mettre en lien avec la période de vie traversée. Dialoguer avec une personne de confiance (ami, ainé ou imam) et consulter les recommandations coraniques (dhikr, prière d'istikhara) sont aussi des étapes conseillées.",
  },
  {
    question:
      "Pourquoi fait-on des rêves récurrents de son ex en islam ?",
    answer:
      "Les rêves récurrents de son ex indiquent souvent que le processus de guérison n'est pas terminé ou qu'une situation émotionnelle reste en suspens. Le stress, la solitude ou les périodes de transition favorisent ces rêves. L'islam invite à renforcer les liens sociaux, à pratiquer le dhikr et la méditation, et à consulter un conseiller spirituel si les rêves persistent.",
  },
];

export default function ReverExIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.islamreligion.fr/reves-ex-islam/#article",
        headline:
          "Rêver de son ex islam : que dit l'islam sur ces rêves du passé ?",
        description:
          "Découvrez la signification des rêves sur votre ex selon l'islam et ce que ces songes révèlent sur votre passé et votre spiritualité.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-son-ex-islam-que-dit-lislam-sur-ces-reves-du-passe-.jpg",
        datePublished: "2025-08-29",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id": "https://www.islamreligion.fr/reves-ex-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/reves-ex-islam/#breadcrumb",
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
            name: "Rêver de son ex",
            item: "https://www.islamreligion.fr/reves-ex-islam",
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
          title="Rêver de son ex islam : que dit l'islam sur ces rêves du passé ?"
          subtitle="Signification des rêves sur votre ex selon la tradition islamique, sens cachés et étapes de guérison."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-son-ex-islam-que-dit-lislam-sur-ces-reves-du-passe-.jpg"
          imageAlt="Rêver de son ex islam, que dit l'islam sur ces rêves du passé"
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
                <span className="text-foreground">Rêver de son ex</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Rêver de son ex en islam reflète surtout l&apos;état
                      émotionnel du rêveur et non une volonté de renouer le
                      passé.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Chaque scénario onirique a ses interprétations propres
                      selon la tradition islamique.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ces songes mettent en lumière des questions
                      d&apos;acceptation, de guérison ou de transition.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;islam recommande d&apos;aborder ces rêves avec
                      patience et douceur envers soi-même.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;analyse aide à comprendre son subconscient et à
                      avancer sereinement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La consultation de personnes de confiance peut
                      accompagner l&apos;apaisement du coeur.
                    </span>
                  </li>
                </ul>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Miroir des emotions passees */}
              {/* ============================================ */}
              <section id="emotions" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de son ex islam : miroir des émotions passées et
                  révélateur du présent
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la perspective islamique, rêver de son ex ne signifie
                  pas nécessairement vouloir renouer avec le passé. Ce type
                  de rêve agit comme un miroir de l&apos;état émotionnel
                  actuel du rêveur. Il met en lumière des sentiments
                  enfouis, des blessures non cicatrisées ou des
                  questionnements liés à une période révolue de la vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam enseigne que les rêves peuvent venir de trois
                  sources : d&apos;Allah (rêves véridiques), de soi-même
                  (reflets de l&apos;âme) ou du shaytan. Les rêves
                  concernant un ex relèvent le plus souvent de la deuxième
                  catégorie : ils reflètent les préoccupations du coeur et
                  les émotions non résolues. Comprendre cette dimension
                  aide à accueillir ces songes sans culpabilité ni crainte
                  excessive.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Scénarios fréquents et interprétation
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs scénarios reviennent fréquemment dans les rêves
                  liés à un ex. Chacun porte une signification propre et
                  invite à une réflexion différente sur son parcours
                  émotionnel et spirituel.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Recevoir un message de son ex</strong> :
                      traduit le besoin de clore un chapitre, ou encore
                      l&apos;envie d&apos;exprimer des émotions restées
                      silencieuses.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Être agressé(e) ou se disputer avec son ex
                      </strong>{" "}
                      : indique souvent la lutte intérieure, la difficulté à
                      pardonner ou à se pardonner.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        La mort ou la disparition de l&apos;ex
                      </strong>{" "}
                      : interprétée comme un signal positif, elle symbolise
                      que la page est tournée et que la libération
                      émotionnelle est en cours.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Voir son ex se marier</strong> : symbole
                      d&apos;un changement, d&apos;une transition à
                      accepter dans sa propre vie.
                    </span>
                  </li>
                </ul>

                {/* Tableau scenarios */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseils
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Recevoir un message de son ex
                        </td>
                        <td className="py-3 pr-4">
                          Affaire émotionnelle non résolue, désir de mettre
                          les choses au clair
                        </td>
                        <td className="py-3">
                          Exprimer ses sentiments, écrire une lettre non
                          envoyée
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir son ex se marier
                        </td>
                        <td className="py-3 pr-4">
                          Symbole de changement, transition à accepter
                        </td>
                        <td className="py-3">
                          Prière et ouverture à de nouveaux horizons
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se disputer avec son ex
                        </td>
                        <td className="py-3 pr-4">
                          Conflits intérieurs à résoudre
                        </td>
                        <td className="py-3">
                          Travailler sa capacité à pardonner
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rêver de la mort de son ex
                        </td>
                        <td className="py-3 pr-4">
                          Clôture d&apos;un cycle, libération émotionnelle
                        </td>
                        <td className="py-3">
                          Tourner la page, remercier Allah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces rêves ne sont pas des présages ou des injonctions à
                  agir. Ils invitent à l&apos;introspection et à la
                  compréhension de soi. L&apos;islam valorise cette
                  démarche de réflexion intérieure, qui permet au croyant
                  de mieux se connaitre et de renforcer sa relation avec
                  Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-son-ex-islam-que-dit-lislam-sur-ces-reves-du-passe-1-1.jpg"
                    alt="Rêver de son ex en islam, miroir des émotions passées et révélateur du présent"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Interpretation et guerison */}
              {/* ============================================ */}
              <section id="interpretation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation des rêves d&apos;amour passé : sens cachés
                  et étapes de guérison selon l&apos;islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation des rêves liés à un ancien
                  partenaire ne se limite pas à un simple décodage
                  symbolique. En islam, elle s&apos;inscrit dans une
                  démarche de compréhension de soi et de cheminement vers
                  la guérison du coeur. Chaque scénario onirique révèle des
                  facettes de l&apos;âme que le rêveur est invité à
                  explorer avec honnêteté.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les grandes significations varient selon le type de
                  scénario vécu dans le rêve. Voici les interprétations les
                  plus courantes selon la tradition islamique et les
                  recommandations des savants.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les grandes significations à connaitre
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se remettre en couple en rêve</strong> :
                      symbolise généralement un besoin de réconfort ou une
                      nostalgie d&apos;une étape révolue.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Disputes ou actes violents</strong> :
                      indiquent une peur de répéter les erreurs du passé ou
                      un sentiment de culpabilité ancré.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Son ex qui pleure ou envoie un message
                      </strong>{" "}
                      : signal d&apos;un besoin de clôture émotionnelle ou
                      envie inconsciente de dialogue et d&apos;apaisement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Intimité avec son ex en rêve</strong> : deux
                      pistes d&apos;analyse possibles, la persistance de
                      désirs non comblés ou le passage vers une nouvelle
                      phase de maturité affective.
                    </span>
                  </li>
                </ul>

                {/* Tableau types de reves */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation religieuse
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Action conseillée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Se marier avec son ex
                        </td>
                        <td className="py-3 pr-4">
                          Mélancolie ou remise en cause de son bonheur
                          actuel
                        </td>
                        <td className="py-3">
                          Identifier ce qui manque, pratiquer la gratitude
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tuer son ex
                        </td>
                        <td className="py-3 pr-4">
                          Libération, deuil de la relation passée
                        </td>
                        <td className="py-3">
                          Remercier Allah, prier pour une ouverture
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Son ex avec quelqu&apos;un d&apos;autre
                        </td>
                        <td className="py-3 pr-4">
                          Reflet de la jalousie ou peur du rejet
                        </td>
                        <td className="py-3">
                          Travailler la confiance et la foi dans le qadr
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Tableau causalite */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Comprendre la causalité du rêve
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les rêves de son ex ne surgissent pas au hasard. Ils sont
                  souvent liés à des déclencheurs précis dans la vie
                  éveillée du rêveur. Identifier ces causes aide à mieux
                  comprendre le message du rêve.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Causalité
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Exemple de signification
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Levier de guérison
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Stress ou solitude actuelle
                        </td>
                        <td className="py-3 pr-4">
                          Réminiscence de moments heureux ou douloureux
                          passés
                        </td>
                        <td className="py-3">
                          Renforcer les liens sociaux, dhikr
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Remise en question personnelle
                        </td>
                        <td className="py-3 pr-4">
                          Comparaison entre vie amoureuse passée et
                          présente
                        </td>
                        <td className="py-3">
                          Consulter un conseiller spirituel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse islamique invite à ne pas rester prisonnier de
                  ces interprétations, mais à les utiliser comme des outils
                  de croissance personnelle. Le but n&apos;est pas de
                  revivre le passé, mais de tirer les leçons nécessaires
                  pour avancer avec sérénité et confiance en Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-son-ex-islam-que-dit-lislam-sur-ces-reves-du-passe-1-2.jpg"
                    alt="Interprétation des rêves d'amour passé en islam, sens cachés et guérison"
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
              {/* SECTION 3 : Analyser ces reves */}
              {/* ============================================ */}
              <section id="analyse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment analyser ces rêves sentimentaux dans une
                  perspective islamique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Analyser un rêve lié à son ex demande une approche
                  méthodique et spirituelle. L&apos;islam offre un cadre
                  pour aborder ces songes sans se laisser submerger par
                  l&apos;émotion. Voici les étapes recommandées par les
                  savants et conseillers spirituels pour décrypter ces
                  rêves avec discernement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les 5 étapes pour analyser un rêve sentimental
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      1. Identifier l&apos;émotion dominante
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Ressentie au réveil : tristesse, soulagement, peur,
                      nostalgie. Cette émotion est la clé principale de
                      l&apos;interprétation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      2. Analyser la scène exacte
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Message reçu, dispute, retrouvailles, séparation.
                      Chaque détail oriente l&apos;interprétation dans une
                      direction précise.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      3. Mettre en lien avec la période de vie traversée
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Ces rêves surviennent souvent lors de transitions, de
                      doutes ou de périodes d&apos;isolement. Le contexte
                      actuel éclaire le message du rêve.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      4. Dialoguer avec une personne de confiance
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Un ami proche, un ainé ou un imam peuvent apporter un
                      regard extérieur et apaisant sur ces songes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      5. Consulter les recommandations coraniques
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Dhikr, prière de consultation (istikhara) ou patience
                      (sabr). Ces pratiques renforcent la sérénité et la
                      confiance en la volonté d&apos;Allah.
                    </p>
                  </div>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Quelles interrogations pour avancer ?
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Après avoir analysé le rêve, certaines questions
                  permettent de transformer cette expérience onirique en
                  levier de croissance spirituelle :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Est-ce que ce rêve m&apos;invite à pardonner ou à
                      demander pardon ?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Suis-je prêt(e) à ouvrir mon coeur à une nouvelle
                      relation ?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ai-je pris conscience de mes progrès spirituels
                      depuis la séparation ?
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;analyse des rêves sentimentaux dans une
                  perspective islamique n&apos;a pas pour but de raviver la
                  douleur, mais de permettre au croyant de se libérer de ce
                  qui l&apos;entrave et d&apos;avancer sur le chemin
                  qu&apos;Allah a tracé pour lui.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Pleurer en rêve en islam : compassion divine et intercession"
                  description="Découvrez la signification des larmes dans un rêve selon la tradition islamique."
                  href="/pleurer-reve-islam-compassion"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Guerir et avancer */}
              {/* ============================================ */}
              <section id="guerir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de son ex en islam : guérir, avancer et ouvrir son
                  coeur au changement
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La finalité de l&apos;interprétation de ces rêves
                  n&apos;est pas de s&apos;attarder sur le passé, mais de
                  trouver les clés pour guérir et avancer. L&apos;islam
                  offre un cadre spirituel solide pour accompagner ce
                  processus de guérison, en s&apos;appuyant sur la
                  confiance en Allah, la patience et la pratique religieuse.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Conseils pour retrouver l&apos;équilibre
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      1. Prendre le temps du deuil
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Ne pas minimiser l&apos;impact émotionnel d&apos;une
                      séparation. Le deuil est une étape naturelle et
                      nécessaire que l&apos;islam reconnait et respecte.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      2. Renforcer la foi en la destinée
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Se rappeler qu&apos;Allah est le Meilleur des
                      planificateurs. Ce qui est passé faisait partie du
                      plan divin, et ce qui vient sera meilleur, in sha
                      Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      3. Accueillir les nouvelles opportunités
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Ouvrir progressivement son coeur à d&apos;autres
                      projets, d&apos;autres rencontres et d&apos;autres
                      perspectives de vie.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      4. Dialoguer et demander conseil
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Consulter un imam ou un conseiller spirituel si les
                      rêves persistent et causent de la détresse.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      5. Pratiquer la gratitude et le pardon
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Remercier Allah pour le passé et s&apos;accorder le
                      pardon nécessaire. La gratitude et le pardon sont des
                      piliers de la guérison en islam.
                    </p>
                  </div>
                </div>

                {/* Tableau etapes de guerison */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Étapes
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action concrète
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bienfaits attendus
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Prendre du recul sur le passé
                        </td>
                        <td className="py-3 pr-4">
                          Méditation, silence intérieur, écriture des
                          émotions
                        </td>
                        <td className="py-3">
                          Clarté émotionnelle, apaisement
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Pratiquer la prière et le dhikr
                        </td>
                        <td className="py-3 pr-4">
                          Multiplication des invocations, surtout lors de
                          la tristesse
                        </td>
                        <td className="py-3">
                          Soutien spirituel, renforcement de la foi
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Reprendre confiance en l&apos;avenir
                        </td>
                        <td className="py-3 pr-4">
                          Fixer de nouveaux objectifs, s&apos;ouvrir à la
                          communauté
                        </td>
                        <td className="py-3">
                          Sentiment d&apos;avancer, énergie renouvelée
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque croyant est invité à transformer ces rêves en
                  opportunités de croissance. Le passé est une leçon, pas
                  une prison. En s&apos;appuyant sur la foi, la patience
                  et la communauté, il est possible de guérir et
                  d&apos;ouvrir son coeur au meilleur qu&apos;Allah a
                  préparé.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Rever-de-son-ex-islam-que-dit-lislam-sur-ces-reves-du-passe-1-3.jpg"
                    alt="Guérir et avancer après un rêve de son ex en islam, ouvrir son coeur au changement"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Selon le profil du reveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve lié à son ex ne porte pas la même
                  signification selon la personne qui le fait. Les
                  interprètes musulmans tiennent compte du contexte
                  personnel du rêveur pour affiner leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de son ex peut refléter une quête de guidance
                      sentimentale, un besoin de tourner la page ou un
                      rappel de la valeur de la patience dans l&apos;attente
                      du bon conjoint. Si le rêve est apaisé, c&apos;est un
                      signe de guérison en cours.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut traduire une comparaison inconsciente
                      entre la relation passée et la relation actuelle. Il
                      invite à renforcer la gratitude envers le conjoint
                      actuel et à travailler sur les aspects de la relation
                      qui méritent attention.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de son ex pendant la grossesse peut être lié
                      aux bouleversements émotionnels de cette période.
                      C&apos;est souvent un rappel de l&apos;importance de
                      se concentrer sur l&apos;avenir et la nouvelle vie
                      qui arrive, avec confiance en Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut refléter un processus de deuil
                      émotionnel, un questionnement sur ses choix passés ou
                      un appel à avancer vers de nouveaux projets. Il
                      invite à renforcer la confiance en soi et la foi dans
                      la destinée qu&apos;Allah a choisie.
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
                    href="/pleurer-reve-islam-compassion"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Pleurer en rêve en islam
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;un mort en islam
                  </Link>
                  <Link
                    href="/signification-reve-tuer-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Signification de tuer en rêve
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
