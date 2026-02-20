import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver de se faire tirer dessus islam : épreuves et protection d'Allah",
  description:
    "Découvrez la signification islamique de rêver de se faire tirer dessus : interprétation, épreuves et protection d'Allah dans vos rêves.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-tirer-dessus-islam",
  },
};

const tocItems = [
  { id: "interpretation", label: "Interprétation et signification" },
  { id: "symbolique", label: "Symbolique de l'agression" },
  { id: "perspectives", label: "Perspectives thérapeutiques" },
  { id: "scenarios", label: "Scénarios fréquents" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Que signifie rêver de se faire tirer dessus en islam ?",
    answer:
      "En islam, rêver de se faire tirer dessus symbolise généralement des épreuves intérieures, des conflits non résolus ou un sentiment de vulnérabilité. Ce rêve n'est pas un présage de danger physique mais un appel à l'introspection et à la recherche de la protection d'Allah. La localisation de la blessure et l'identité du tireur influencent fortement l'interprétation.",
  },
  {
    question:
      "Rêver d'être blessé par balle en islam est-il un mauvais signe ?",
    answer:
      "Pas nécessairement. Ce type de rêve peut indiquer une transformation spirituelle en cours, la nécessité de surmonter des obstacles ou un rappel de s'en remettre à Allah face aux difficultés. Les savants recommandent de ne pas s'alarmer mais de chercher la protection divine par les invocations et la prière.",
  },
  {
    question:
      "Que faire après un rêve de fusillade en islam ?",
    answer:
      "Après un tel rêve, il est recommandé de se tourner vers Allah en récitant les sourates protectrices (Al-Falaq, An-Nas, Ayat Al-Kursi), de souffler trois fois à gauche, de changer de position et de ne pas raconter ce rêve à n'importe qui. Une prière surérogatoire peut aussi aider à retrouver la sérénité.",
  },
  {
    question:
      "Que signifie rêver de se faire tirer dessus par un proche ?",
    answer:
      "Rêver d'être tiré dessus par un proche reflète souvent un conflit affectif, une trahison ressentie ou un manque de confiance dans la relation. Ce rêve invite au dialogue, à la réconciliation et à la recherche du pardon. Il ne prédit pas un événement réel mais met en lumière des tensions intérieures.",
  },
  {
    question:
      "Quelle est la signification d'une blessure au cœur dans un rêve islamique ?",
    answer:
      "Une blessure au cœur ou à la poitrine dans un rêve symbolise des craintes affectives, un deuil ou la peur de perdre un être cher. C'est une invitation à implorer la miséricorde d'Allah et à travailler sur la guérison émotionnelle. Les savants recommandent de multiplier les invocations pour apaiser le cœur.",
  },
  {
    question:
      "Rêver de survivre à une fusillade en islam : quelle interprétation ?",
    answer:
      "Survivre à une fusillade en rêve est un signe de résilience et de force spirituelle. Ce rêve indique que le rêveur a la capacité de surmonter les épreuves avec l'aide d'Allah. Il invite à rendre grâce, à méditer sur la patience et à renforcer sa confiance en la protection divine.",
  },
  {
    question:
      "Les rêves violents sont-ils d'origine satanique en islam ?",
    answer:
      "Les rêves violents peuvent être d'origine satanique (shaytani), mais ils peuvent aussi être le reflet de préoccupations personnelles (nafsani). L'islam enseigne de demander refuge auprès d'Allah, de ne pas accorder trop d'importance au rêve et de consulter un savant si le trouble persiste. Un rêve troublant ne définit pas l'avenir du croyant.",
  },
  {
    question:
      "Comment distinguer un rêve véridique d'un cauchemar en islam ?",
    answer:
      "Le rêve véridique (rahmani) est clair, cohérent et laisse une impression de paix ou d'enseignement. Le cauchemar (shaytani) est confus, angoissant et disparaît rapidement après le réveil. Les rêves de l'âme (nafsani) reflètent les préoccupations quotidiennes. Seul un savant compétent peut aider à distinguer ces catégories avec précision.",
  },
];

export default function ReverTirerDessus() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-tirer-dessus-islam/#article",
        headline:
          "Rêver de se faire tirer dessus islam : épreuves et protection d'Allah",
        description:
          "Découvrez la signification islamique de rêver de se faire tirer dessus : interprétation, épreuves et protection d'Allah dans vos rêves.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-se-faire-tirer-dessus-islam-epreuves-et-protection-dAllah.jpg",
        datePublished: "2025-09-26",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-tirer-dessus-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-tirer-dessus-islam/#breadcrumb",
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
            name: "Se faire tirer dessus",
            item: "https://www.islamreligion.fr/rever-tirer-dessus-islam",
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
          title="Rêver de se faire tirer dessus islam : épreuves et protection d'Allah"
          subtitle="Interprétation islamique des rêves de fusillade, symbolique de l'agression et protection divine."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-se-faire-tirer-dessus-islam-epreuves-et-protection-dAllah.jpg"
          imageAlt="Rêver de se faire tirer dessus en islam, épreuves et protection d'Allah"
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
                <span className="text-foreground">Se faire tirer dessus</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de se faire tirer dessus en islam réveille des peurs
                  profondes et interroge sur la signification spirituelle des
                  cauchemars. Ce thème mêle interprétation des rêves islamiques,
                  épreuves intérieures et réflexes de foi. La localisation de la
                  blessure, l&apos;identité de l&apos;assaillant et le contexte
                  du rêveur sont déterminants pour comprendre le message.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Interpretation et signification */}
              {/* ============================================ */}
              <section id="interpretation" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation des rêves islamiques : se faire tirer dessus,
                  signification profonde et nuances
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La tradition musulmane accorde une place particulière à
                  l&apos;interprétation des{" "}
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves islamiques</Link>, appelés
                  &quot;ruya&quot; dans les textes sacrés. Depuis des siècles,
                  la communauté musulmane s&apos;est interrogée sur la façon
                  dont les visions nocturnes pouvaient révéler des messages
                  cachés ou mettre en lumière des interrogations de l&apos;âme.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans le cas où l&apos;on rêve de se faire tirer dessus, la
                  signification va bien au-delà d&apos;un simple danger
                  physique. Ce type de rêve sert souvent de révélateur des
                  vulnérabilités profondes. En effet, être visé ou blessé
                  symbolise fréquemment une inquiétude ou un conflit intérieur
                  qui n&apos;a pas trouvé d&apos;issue durant la journée.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;arme à feu dans le rêve</strong> représente
                      généralement une force extérieure ressentie comme
                      oppressante.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La balle</strong> signale un impact émotionnel
                      brutal, parfois un malaise persistant ou une blessure du
                      passé non résolue.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        L&apos;identité de la personne qui tire
                      </strong>{" "}
                      est fondamentale : un inconnu, un parent, un collègue ?
                      Chaque cas possède une signification qui reflète la nature
                      des épreuves ressenties ou redoutées.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation doit toujours tenir compte du contexte
                  du rêveur : ses difficultés personnelles, son environnement
                  social, sa situation familiale ou professionnelle. Par
                  exemple, quelqu&apos;un traversant une période de conflit
                  familial percevra sûrement une balle tirée par un proche comme
                  le reflet de ses propres angoisses affectives.
                </p>

                {/* Tableau motifs */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Motif du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Sens principal en islam
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tiré dessus par un inconnu
                        </td>
                        <td className="py-3 pr-4">
                          Méfiance, failles dans l&apos;entourage
                        </td>
                        <td className="py-3">
                          Renforcer la confiance en Allah et revoir ses amitiés
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tiré dessus par un proche
                        </td>
                        <td className="py-3 pr-4">
                          Trahison, conflit affectif
                        </td>
                        <td className="py-3">
                          Dialoguer, chercher le pardon et la réconciliation
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Survivant après une fusillade
                        </td>
                        <td className="py-3 pr-4">
                          Résilience, force spirituelle
                        </td>
                        <td className="py-3">
                          Rendre grâce, méditer sur la patience
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Blessure au cœur/poitrine
                        </td>
                        <td className="py-3 pr-4">
                          Peur de la perte, chagrin
                        </td>
                        <td className="py-3">
                          Implorer la miséricorde et la guérison divine
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tir de loin ou par des flèches
                        </td>
                        <td className="py-3 pr-4">
                          Pression extérieure, vie déséquilibrée
                        </td>
                        <td className="py-3">
                          Affiner sa foi, se confier en Allah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La signification spirituelle des rêves en islam insiste aussi
                  sur la notion d&apos;introspection : qu&apos;Allah nous
                  accorde la lucidité pour différencier le message du rêve de
                  nos simples craintes. La Sunnah enseigne que si le rêve
                  trouble le cœur, il est conseillé de se tourner vers une
                  prière supplémentaire et de demander la guidance divine.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Si l&apos;on est <strong>blessé au cœur</strong> :
                      craintes affectives, deuil ou peur de perdre un proche. Ce ressenti rappelle les{" "}
                      <Link href="/rever-mort-islam-messages" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">songes liés à la mort en islam</Link>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Blessure à la tête</strong> : conflit
                      intellectuel, anxiétés liées à l&apos;école ou au
                      travail.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Blessure à l&apos;épaule</strong> : fardeau
                      émotionnel porté sans appel.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-se-faire-tirer-dessus-islam-epreuves-et-protection-dAllah-1.jpg"
                    alt="Interprétation du rêve de se faire tirer dessus en islam, épreuves et protection divine"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Symbolique de l'agression */}
              {/* ============================================ */}
              <section id="symbolique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique de l&apos;agression en rêve : sens et enjeux pour
                  la foi musulmane
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Voir dans son sommeil une agression violente, tel qu&apos;un
                  tir, questionne le rêveur musulman sur sa vulnérabilité, mais
                  aussi sur la manière de réagir face à l&apos;adversité. Le
                  sens du rêve est multiple : il s&apos;agit d&apos;identifier
                  la source du danger, d&apos;évaluer sa propre réaction, puis
                  d&apos;intégrer ce message comme une opportunité de croissance
                  spirituelle.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se faire tirer dessus par un inconnu</strong> :
                      prudence accrue dans ses relations sociales, vigilance sur
                      ses fréquentations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tir de la part d&apos;un proche</strong> : remise
                      en cause de la confiance, nécessité d&apos;un dialogue ou
                      d&apos;un pardon.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tir au travail ou à l&apos;école</strong> :
                      sentiment d&apos;insécurité ou de rivalité, parfois
                      conséquence d&apos;une ambiance hostile ou compétitive.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La dimension de la &quot;bataille interne&quot; anime souvent
                  le rêveur face à ses choix de vie, ses remords ou ses
                  inquiétudes. Il est alors conseillé, selon la tradition, de
                  renforcer sa prière du matin (Al-Fajr) afin de débuter sa
                  journée sous le signe de la protection d&apos;Allah.
                </p>

                {/* Tableau situation de tir */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Situation de tir dans le rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation islamique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Action bénéfique recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          À la maison
                        </td>
                        <td className="py-3 pr-4">
                          Perte de repères, sentiment d&apos;insécurité même en
                          lieu familier
                        </td>
                        <td className="py-3">
                          Rechercher le soutien familial et la communion dans la
                          foi
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sur lieu de travail
                        </td>
                        <td className="py-3 pr-4">
                          Rivalité, crainte de l&apos;échec
                        </td>
                        <td className="py-3">
                          Valoriser sa sincérité, éviter la jalousie
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          En extérieur (rue, champ, voiture)
                        </td>
                        <td className="py-3 pr-4">
                          Peurs diffuses, anxiété du quotidien
                        </td>
                        <td className="py-3">
                          Méditer, renforcer la confiance en Allah (Tawakkul)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse islamique recommande de ne jamais négliger mais
                  plutôt d&apos;accueillir avec patience ces épreuves
                  oniriques, tout comme on accueille les{" "}
                  <Link href="/rever-chien-islam-signification" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">visions d&apos;animaux symboliques dans les songes</Link>. Comme le rappelle notre tradition :
                  &quot;Quiconque endure la difficulté avec foi, Allah lui
                  accorde la facilité.&quot; C&apos;est dans cette dynamique
                  que trouver sens et apaisement en période d&apos;angoisse
                  nocturne constitue une voie vers une foi raffermie.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-se-faire-tirer-dessus-islam-epreuves-et-protection-dAllah-2.jpg"
                    alt="Symbolique de l'agression en rêve islamique, persévérance et protection d'Allah"
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
              {/* SECTION 3 : Perspectives thérapeutiques */}
              {/* ============================================ */}
              <section id="perspectives" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Perspectives thérapeutiques et spirituelles : comment agir
                  face à ce rêve récurrent ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Quand un musulman constate qu&apos;il rêve souvent d&apos;être
                  attaqué, blessé ou poursuivi, il est naturel de se demander
                  s&apos;il doit s&apos;en inquiéter ou en tirer des conclusions
                  précises. Les rêves violents ne sont pas à négliger, car ils
                  peuvent refléter des sources de stress ou de malaise passées
                  sous silence.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans la pratique spirituelle, plusieurs outils sont
                  recommandés pour apaiser l&apos;esprit et avancer sereinement :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tenir un journal des rêves</strong> pour repérer
                      l&apos;apparition de motifs récurrents ou de déclencheurs
                      émotionnels.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier les dhikr</strong> (invocations) et
                      lectures du{" "}
                      <Link
                        href="/apprendre-le-coran"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        Coran
                      </Link>{" "}
                      avant le sommeil, pour solliciter la protection
                      d&apos;Allah contre le mal.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Réaliser une prière surérogatoire
                      </strong>{" "}
                      (comme la prière de la nuit, Tahajjud) en cas de rêve
                      angoissant.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;une des plus belles recommandations du Prophète
                  Muhammad (paix sur lui) est de demander refuge auprès
                  d&apos;Allah contre la malfaisance des rêves et de souffler
                  trois fois à gauche, puis de ne pas en parler si le rêve
                  trouble l&apos;âme.
                </p>

                {/* Tableau moyens */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Moyen spirituel ou médical
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Effet recherché
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Prière, dhikr, Coran
                        </td>
                        <td className="py-3">
                          Sérénité intérieure, protection contre la peur
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Journal de rêves
                        </td>
                        <td className="py-3">
                          Détection des schémas émotionnels
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Consultation spécialisée
                        </td>
                        <td className="py-3">
                          Soulagement clinique, réduction du stress
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rêver d&apos;être abattu à la maison
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Rechercher le soutien de la famille, renforcer les liens
                        de confiance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rêver d&apos;être blessé au travail
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réfléchir à sa motivation, valoriser l&apos;effort
                        sincère.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rêver d&apos;être poursuivi par des ennemis
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Méditer sur la patience et s&apos;éloigner des ondes
                        négatives.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La capacité d&apos;accueillir la difficulté, de la
                  transformer en occasion de croissance, puis de la confier à
                  la miséricorde divine, incarne l&apos;essence même de la foi
                  musulmane face aux épreuves nocturnes. Si l&apos;angoisse persiste, il peut être utile de découvrir les{" "}
                  <Link href="/remede-angoisse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes islamiques contre l&apos;angoisse</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-se-faire-tirer-dessus-islam-epreuves-et-protection-dAllah-3.jpg"
                    alt="Perspectives thérapeutiques et spirituelles face aux rêves d'agression en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de tuer quelqu'un en islam : signification et repentir"
                  description="Découvrez ce que symbolise le fait de tuer dans un rêve selon la tradition islamique."
                  href="/signification-reve-tuer-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Scenarios frequents */}
              {/* ============================================ */}
              <section id="scenarios" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Typologie et scénarios fréquents dans les rêves
                  d&apos;agression
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour accompagner en douceur ceux qui traversent ces songes
                  troublants, il est utile d&apos;explorer les différents types
                  de scénarios : contexte, identité de l&apos;agresseur,
                  localisation de la blessure et issue du rêve. Cela permet de
                  mieux distinguer les fausses alertes des vrais signaux
                  spirituels.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rêver de se faire tirer dessus par un inconnu
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Conseil à la vigilance dans l&apos;entourage, éviter la
                        naïveté et renforcer la modestie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se faire tirer dessus par un proche
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Nécessité d&apos;ouvrir le dialogue et d&apos;examiner
                        la relation en profondeur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Tir à distance, blessures multiples
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Sentiment de surcharge émotionnelle, appel à travailler
                        la gestion du stress.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Blessure au ventre ou au cou
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Confrontation entre raison et émotions, invitation à
                        l&apos;introspection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Tir dans le dos
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Signal d&apos;une trahison, attention à la médisance.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rêve de survivre à une fusillade ou d&apos;y échapper
                  illustre la résilience de l&apos;âme face à l&apos;adversité.
                  La littérature musulmane cite souvent que chaque tourment,
                  même onirique, fait grandir vers plus de confiance en Allah :
                  &quot;Celui qui place sa confiance en Allah, Il lui
                  suffit.&quot;
                </p>

                {/* Tableau scenarios */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Message à retenir
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil concret
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Attaque brutale, grande hémorragie
                        </td>
                        <td className="py-3 pr-4">
                          Danger d&apos;épuisement, difficulté extrême
                        </td>
                        <td className="py-3">
                          Alléger son agenda, s&apos;accorder du repos
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fuite ou esquive réussie
                        </td>
                        <td className="py-3 pr-4">
                          Capacité à surmonter les épreuves
                        </td>
                        <td className="py-3">
                          Méditer sur ses forces cachées
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tir par flèche, blessure légère
                        </td>
                        <td className="py-3 pr-4">
                          Tensions amoureuses ou relationnelles
                        </td>
                        <td className="py-3">
                          Prendre soin de la relation, offrir une écoute sans
                          jugement
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque rêve d&apos;agression porte en lui un triple appel :
                  identification de la source d&apos;angoisse, renforcement de
                  la relation avec Allah, et mobilisation des outils
                  émotionnels mis en lumière par l&apos;islam.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Rester attentif aux changements dans sa vie suite à un
                      rêve marquant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Partager sa difficulté avec une personne de confiance,
                      pour ne jamais porter seul le fardeau de son anxiété
                      nocturne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Transformer la peur ressentie en moteur de prière et
                      d&apos;espoir.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Selon le profil du reveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de se faire tirer dessus ne porte pas la même
                  signification selon la personne qui le fait. Les interprètes
                  musulmans tiennent compte de la situation personnelle du
                  rêveur pour affiner leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut refléter une peur de l&apos;engagement ou
                      un sentiment de vulnérabilité face à l&apos;avenir. Il
                      invite à renforcer sa confiance en Allah et à ne pas
                      laisser les craintes dicter ses choix de vie.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve peut signaler des tensions conjugales non
                      exprimées ou une inquiétude pour la sécurité du foyer.
                      Il est conseillé de privilégier le dialogue avec
                      l&apos;époux et de renforcer la prière commune.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les rêves violents pendant la grossesse sont
                      fréquents et souvent liés aux inquiétudes naturelles pour
                      le bébé. Il est recommandé de multiplier les invocations
                      de protection et de ne pas accorder trop
                      d&apos;importance à ce type de rêve.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve reflète souvent des pressions professionnelles,
                      une rivalité ou un sentiment de responsabilité écrasante.
                      Il invite à faire le point sur ses priorités et à
                      renforcer le Tawakkul (confiance en Allah), notamment par{" "}
                      <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les invocations pour la réussite et la facilité</Link>.
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
                    href="/signification-reve-tuer-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de tuer en islam
                  </Link>
                  <Link
                    href="/pleurer-reve-islam-compassion"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Pleurer en rêve en islam
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie en islam
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
