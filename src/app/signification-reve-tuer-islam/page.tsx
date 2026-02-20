import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver de tuer quelqu'un en islam : signification, interprétation et repentir",
  description:
    "Que signifie rêver de tuer quelqu'un en islam ? Interprétation selon les savants, symbolisme de l'arme et de la victime, distinction entre rêve et péché, et conseils de repentir.",
  alternates: {
    canonical: "https://www.islamreligion.fr/signification-reve-tuer-islam",
  },
};

const tocItems = [
  { id: "symbolisme", label: "Symbolisme et interprétation" },
  { id: "details", label: "Armes, émotions et victime" },
  { id: "culpabilite", label: "Culpabilité et repentir" },
  { id: "conseils", label: "Conseils spirituels" },
  { id: "scenarios", label: "Mort, adversaires et renouveau" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Rêver de tuer quelqu'un en islam est-il un péché ?",
    answer:
      "Non, l'islam distingue clairement l'acte réel du rêve. Le Prophète ﷺ a enseigné que le rêveur n'est pas blâmé pour ce que son esprit produit durant le sommeil. Seuls les actes délibérés accomplis en pleine conscience sont jugés. Un tel rêve relève du symbolisme, pas du péché.",
  },
  {
    question:
      "Que signifie rêver de tuer un inconnu en islam ?",
    answer:
      "Tuer un inconnu dans un rêve symbolise souvent un conflit intérieur, le besoin d'effacer une habitude néfaste ou de se débarrasser d'un trait de caractère qui vous freine. C'est un appel à l'introspection et à la transformation personnelle.",
  },
  {
    question:
      "Rêver de tuer un proche : faut-il s'inquiéter ?",
    answer:
      "Ce rêve traduit généralement une tension familiale, un désir de distance ou un besoin de libération par rapport à une relation pesante. Il ne reflète en rien une intention réelle. Les savants recommandent de prendre ce rêve comme une invitation au dialogue et à la réconciliation.",
  },
  {
    question: "Que faire après un rêve de meurtre en islam ?",
    answer:
      "Les savants recommandent de ne pas divulguer le rêve sauf à une personne de confiance, de réciter les formules de protection (sourates Al-Falaq et An-Nas), de demander à Allah de détourner les mauvaises pensées, et de se rappeler que ce type de rêve est souvent un appel à l'introspection, pas un signe de danger.",
  },
  {
    question:
      "L'arme utilisée dans le rêve change-t-elle la signification ?",
    answer:
      "Oui, chaque arme porte un symbolisme différent. Un couteau traduit un combat intérieur intense. Une arme à feu suggère le désir d'une coupure nette. L'empoisonnement évoque une élimination en douceur. Les mains nues marquent un face-à-face direct avec ses propres conflits.",
  },
  {
    question:
      "Rêver de tuer un ennemi en islam : est-ce positif ?",
    answer:
      "Oui, c'est généralement interprété positivement. Cela symbolise la victoire sur les obstacles, l'affirmation de soi et le passage à une étape supérieure dans la vie. C'est un signe de libération et de renouveau.",
  },
  {
    question:
      "La culpabilité ressentie après le rêve a-t-elle un sens ?",
    answer:
      "La culpabilité après un tel rêve est un message intérieur, pas un péché. Elle peut indiquer un conflit non résolu, un sentiment d'injustice ou une relation déséquilibrée qui cherche à être reconnue. Les savants encouragent à transformer cette culpabilité en introspection constructive.",
  },
  {
    question:
      "Rêver de tuer un animal en islam : que signifie-t-il ?",
    answer:
      "Tuer un animal dans un rêve signale souvent un passage important dans la maturation personnelle, le rejet de modèles inadéquats ou la maîtrise de ses pulsions. C'est un chemin vers la paix et l'harmonie intérieure.",
  },
];

export default function ReveTuerIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/signification-reve-tuer-islam/#article",
        headline:
          "Rêver de tuer quelqu'un en islam : signification, interprétation et repentir",
        description:
          "Que signifie rêver de tuer quelqu'un en islam ? Interprétation selon les savants, symbolisme de l'arme et de la victime, et conseils de repentir.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-tuer-quelquun-signification-islam-interpretation-et-repentir.jpg",
        datePublished: "2025-09-14",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/signification-reve-tuer-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/signification-reve-tuer-islam/#breadcrumb",
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
            name: "Rêver de tuer",
            item: "https://www.islamreligion.fr/signification-reve-tuer-islam",
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
          title="Rêver de tuer quelqu'un en islam : signification et interprétation"
          subtitle="Ce que symbolise le meurtre dans un rêve selon la tradition islamique, les savants et les voies du repentir."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-tuer-quelquun-signification-islam-interpretation-et-repentir.jpg"
          imageAlt="Signification de rêver de tuer quelqu'un en islam, interprétation et repentir"
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
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <Link href="/reves-islam" className="hover:text-primary">Rêves en islam</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rêver de tuer</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">En résumé</p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;acte de tuer est formellement condamné dans les textes
                  islamiques, mais rêver de meurtre ne reflète en rien une
                  intention réelle ni un péché effectif. La signification de ce
                  rêve relève du symbolisme et de la psychologie intérieure :
                  conflits intérieurs, volonté de transformation ou libération
                  d&apos;émotions bloquées. Chaque détail du rêve (arme,
                  victime, émotions ressenties) en affine
                  l&apos;interprétation.
                </p>
              </div>

              {/* SECTION 1 : Symbolisme */}
              <section id="symbolisme" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation des rêves de tuer en islam : symbolisme et
                  explications spirituelles
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition musulmane, l&apos;
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    interprétation des rêves
                  </Link>{" "}
                  occupe une place particulière. Rêver de tuer quelqu&apos;un
                  n&apos;a, par essence, rien d&apos;une faute concrète. Les
                  textes fondateurs de l&apos;islam rappellent que le rêveur
                  n&apos;est jamais blâmé pour ce que son esprit produit durant
                  le sommeil. La signification du meurtre dans le rêve se lit
                  sur un registre symbolique, jamais littéral.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran insiste sur la sacralité de la vie humaine :{" "}
                  <em>
                    &quot;Celui qui tue une âme sans raison, c&apos;est comme
                    s&apos;il avait tué toute l&apos;humanité&quot;
                  </em>{" "}
                  (5:32). Cette exigence de respect maximal s&apos;applique à nos
                  actes, non à notre inconscient. Ainsi, lorsque surgit un rêve
                  aussi troublant que celui de tuer, il faut d&apos;abord se
                  rassurer : aucune action nocturne n&apos;est retenue contre
                  vous sur le plan du péché.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Que traduisent ces scènes parfois violentes dans les songes ?
                  Le plus souvent, elles reflètent des mouvements psychiques
                  profonds :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une confrontation intérieure :</strong>{" "}
                      vous luttez peut-être contre une facette de vous-même à
                      transformer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un besoin de libération :</strong> la colère, les
                      regrets ou la frustration cherchent à se manifester pour
                      trouver l&apos;apaisement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une victoire symbolique :</strong> parfois,
                      &quot;tuer&quot; en rêve un ennemi ou une figure négative,
                      c&apos;est s&apos;affranchir d&apos;un poids ou gagner en
                      autonomie, un thème que l&apos;on retrouve aussi dans le{" "}
                      <Link href="/rever-tirer-dessus-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        rêve de tirer sur quelqu&apos;un en islam
                      </Link>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une peur du déséquilibre :</strong> certains songes
                      expriment l&apos;angoisse de perdre le contrôle, d&apos;être
                      submergé par des émotions ou des situations, comme dans les{" "}
                      <Link href="/pleurer-reve-islam-compassion" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        rêves de pleurs en islam
                      </Link>.
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam, tels qu&apos;Ibn Sirin, insistent
                  sur le contexte et l&apos;intention ressentie dans le songe.
                  Si la scène vous trouble, c&apos;est le signe d&apos;un
                  déséquilibre à reconnaître, mais aussi d&apos;une opportunité
                  d&apos;évolution. Face au symbolisme du meurtre, un croyant
                  est encouragé à chercher la paix intérieure, à demander à
                  Allah de l&apos;apaiser et à se tourner vers des conseils
                  spirituels.
                </p>

                {/* Tableau elements */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Élément du rêve</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Interprétation religieuse</th>
                        <th className="py-3 font-semibold text-primary">Conseil spirituel</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Vous tuez un inconnu</td>
                        <td className="py-3 pr-4">Conflit intérieur, besoin d&apos;effacer une habitude néfaste</td>
                        <td className="py-3">Travaillez votre introspection et la foi</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Vous tuez un proche</td>
                        <td className="py-3 pr-4">Tension familiale, désir de distance, besoin de libération</td>
                        <td className="py-3">Dialogue, demande de pardon à Allah</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Soulagement après le rêve</td>
                        <td className="py-3 pr-4">Libération symbolique, clore un chapitre douloureux</td>
                        <td className="py-3">Remercier Allah pour cette évolution</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Culpabilité après le rêve</td>
                        <td className="py-3 pr-4">Conflit non résolu, peur du changement</td>
                        <td className="py-3">Invocations et dialogue avec un guide</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-tuer-quelquun-signification-islam-interpretation-et-repentir-1.jpg"
                    alt="Interprétation du rêve de tuer quelqu'un en islam, symbolisme spirituel"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* SECTION 2 : Details */}
              <section id="details" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Décrypter chaque détail : armes, émotions, identité de la
                  victime
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation des rêves en islam est autant une
                  affaire de contexte que de sentiments. Un même acte peut
                  présenter des significations multiples selon le déroulement du
                  rêve, l&apos;outil utilisé ou l&apos;identité de la personne
                  tuée.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le symbolisme de l&apos;arme
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h4 className="font-semibold text-primary">Tuer avec une arme blanche</h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Évoque le besoin de trancher dans le vif, de rompre avec
                        force une situation oppressante. Traduit un combat
                        intérieur intense.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h4 className="font-semibold text-primary">Tuer avec une arme à feu</h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Suggère le désir d&apos;une coupure nette, la volonté de
                        mettre fin à une relation ou une habitude qui trouble
                        votre paix intérieure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h4 className="font-semibold text-primary">Par empoisonnement</h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Parle d&apos;une élimination en douceur, d&apos;un
                        processus visant à écarter discrètement un élément
                        nuisible de votre vie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h4 className="font-semibold text-primary">À mains nues</h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Marque un face-à-face direct, une confrontation sans
                        détour avec ses propres conflits internes.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;identité de la victime
                </h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">Tuer un inconnu</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Symbole d&apos;une habitude, d&apos;une peur ou d&apos;un
                      trait à éliminer de votre caractère.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">Tuer un proche</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Appel à régler un conflit caché ou à lâcher prise sur une
                      dépendance affective pesante.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">Tuer un ennemi</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Victoire symbolique sur les obstacles, affirmation de soi
                      et passage à une nouvelle étape.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h4 className="font-semibold text-primary">Tuer un animal</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rejet de modèles inadéquats ou conquête de sa propre voie.
                      Maîtrise de ses pulsions. Pour la symbolique animale, voir aussi{" "}
                      <Link href="/reve-arachnide-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        rêver d&apos;araignée en islam
                      </Link>.
                    </p>
                  </div>
                </div>

                {/* Tableau armes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Type d&apos;arme</th>
                        <th className="py-3 pr-4 font-semibold text-primary">État émotionnel</th>
                        <th className="py-3 font-semibold text-primary">Symbolisme</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Arme blanche</td>
                        <td className="py-3 pr-4">Colère sourde, désir d&apos;autonomie</td>
                        <td className="py-3">Libération d&apos;une situation oppressante</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Arme à feu</td>
                        <td className="py-3 pr-4">Volonté de rupture nette</td>
                        <td className="py-3">Mettre fin à un cycle négatif</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Poison</td>
                        <td className="py-3 pr-4">Peur de l&apos;affrontement</td>
                        <td className="py-3">Élimination progressive d&apos;une influence</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Main nue</td>
                        <td className="py-3 pr-4">Lutte intérieure intense</td>
                        <td className="py-3">Affrontement direct de ses peurs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-tuer-quelquun-signification-islam-interpretation-et-repentir-2.jpg"
                    alt="Symbolisme des armes et de la victime dans le rêve de tuer en islam"
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

              {/* SECTION 3 : Culpabilite */}
              <section id="culpabilite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Culpabilité, repentir et pardon dans les rêves selon
                  l&apos;islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Face à ce type de rêve bouleversant, nombreux sont ceux qui se
                  réveillent avec un lourd sentiment de culpabilité. Dans la
                  tradition musulmane, il est fondamental de distinguer ce qui
                  surgit du subconscient de ce qui relève d&apos;un péché
                  conscient et responsable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam enseigne que le rêveur n&apos;est pas passible de
                  faute pour les actes commis en rêve. Seuls les gestes
                  délibérés, accomplis en pleine conscience, sont jugés dans la
                  balance divine. La culpabilité qui suit un tel songe est
                  souvent un message intérieur : il s&apos;agit d&apos;un
                  conflit non résolu, d&apos;un sentiment d&apos;injustice ou
                  d&apos;une relation déséquilibrée.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Sentiment de panique au réveil</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Peut indiquer une peur de perdre le contrôle ou un mal-être
                      profond à travailler par la prière et l&apos;introspection.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Regret ou honte</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Signal d&apos;un épisode passé non digéré, sur lequel il
                      conviendrait de demander l&apos;apaisement à Allah.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Soulagement</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Parfois, la résolution onirique d&apos;un conflit libère
                      le croyant d&apos;un poids, permettant une meilleure
                      clarté d&apos;esprit.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le repentir en islam garde son sens, même lorsqu&apos;il
                  s&apos;agit de rêves perturbants. La tradition recommande :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne pas divulguer le rêve à la légère, sauf auprès de
                      personnes de confiance ou d&apos;un imam avisé.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Réciter les formules de protection et demander à Allah de
                      détourner du cœur la violence ou les mauvaises pensées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Se rappeler la miséricorde infinie d&apos;Allah : un
                      mauvais rêve n&apos;entame jamais l&apos;amour divin
                      envers Son serviteur. La tradition du{" "}
                      <Link href="/conditions-maghfira-pardon" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        pardon divin en islam
                      </Link>{" "}
                      en est le plus bel exemple.
                    </span>
                  </li>
                </ul>
              </section>

              {/* SECTION 4 : Conseils spirituels */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils spirituels et travail sur soi après un rêve de
                  meurtre
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Après un rêve aussi marquant, il est important de s&apos;accorder
                  bienveillance et patience. L&apos;islam offre plusieurs pistes
                  pour transformer la perturbation en promesse de renouveau
                  spirituel.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h3 className="font-semibold text-primary">Se rappeler la distinction entre faits et rêves</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Aucun rêve, aussi intense soit-il, ne vous classe parmi
                        les personnes dangereuses. Ce sont des images mentales
                        détachées de toute action réelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h3 className="font-semibold text-primary">Faire des invocations avant de dormir</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants recommandent de réciter les sourates
                        protectrices et de formuler le vœu d&apos;une nuit
                        paisible et guidée. Pour approfondir sa récitation,{" "}
                        <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          apprendre le Coran
                        </Link>{" "}
                        est un pas bénéfique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h3 className="font-semibold text-primary">Écrire le contenu du rêve</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Poser des mots sur l&apos;expérience permet de mieux
                        identifier ses besoins d&apos;évolution et d&apos;y
                        voir plus clair.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h3 className="font-semibold text-primary">Dialoguer avec un guide spirituel</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le songe se répète ou perturbe fortement le quotidien,
                        consulter un imam ou un savant compétent apporte
                        un accompagnement rassurant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">5</span>
                    <div>
                      <h3 className="font-semibold text-primary">Explorer les causes du rêve</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Stress, fatigue, conflits non résolus : identifier les
                        causes contextuelles permet de mettre en place des
                        actions concrètes pour retrouver la paix intérieure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau conseils */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Conseil spirituel</th>
                        <th className="py-3 font-semibold text-primary">Bénéfice attendu</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Du&apos;a avant le sommeil</td>
                        <td className="py-3">Protection contre les troubles nocturnes</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Réflexion écrite</td>
                        <td className="py-3">Clarté sur ses besoins et conflits intérieurs</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Consultation d&apos;un savant</td>
                        <td className="py-3">Accompagnement sur-mesure, rassurant</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Actions positives dans la journée</td>
                        <td className="py-3">Neutralisation de l&apos;impact émotionnel du rêve</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-tuer-quelquun-signification-islam-interpretation-et-repentir-3.jpg"
                    alt="Conseils spirituels après un rêve de meurtre en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* SECTION 5 : Mort, adversaires, renouveau */}
              <section id="scenarios" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique de la mort, des adversaires et du renouveau
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà des scénarios anxiogènes, chaque image nocturne porte
                  une leçon à recueillir et à traduire dans le vécu quotidien.
                  Rêver de tuer, comme{" "}
                  <Link href="/rever-mort-islam-messages" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    rêver de mort en islam
                  </Link>{" "}
                  ou de conflits, symbolise
                  avant tout le besoin de transformation.
                </p>

                {/* Tableau types de reves */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Type de rêve</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Signification islamique</th>
                        <th className="py-3 font-semibold text-primary">Message spirituel</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Tuer un ennemi</td>
                        <td className="py-3 pr-4">Victoire sur les obstacles, affirmation de soi</td>
                        <td className="py-3">Libération, passage à une étape supérieure</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Tuer un proche</td>
                        <td className="py-3 pr-4">Rappel d&apos;un conflit, appel à la réconciliation</td>
                        <td className="py-3">Invitation à l&apos;apaisement et au pardon</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Tuer un inconnu</td>
                        <td className="py-3 pr-4">Transformation intérieure, rejet des entraves</td>
                        <td className="py-3">Évolution vers une meilleure version de soi</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Tuer un animal</td>
                        <td className="py-3 pr-4">Maîtrise de ses pulsions, équilibre instinct/raison</td>
                        <td className="py-3">Chemin vers la paix et l&apos;harmonie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque rêve est un fil tendu entre l&apos;invisible et la
                  réalité. Comme le rappelle la tradition, il ne tient
                  qu&apos;à chacun d&apos;y voir un encouragement subtil à
                  raviver sa foi et cheminer vers la lumière, même dans
                  l&apos;épreuve la plus sombre.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de souris en islam : signification et interprétation"
                  description="Un autre symbole fréquent dans les rêves en islam, avec des interprétations nuancées selon Ibn Sirin."
                  href="/rever-souris-islam"
                />
              </section>

              {/* FAQ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Interprétations de rêves similaires</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/reves-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">
                    Tous les rêves en islam
                  </Link>
                  <Link href="/rever-souris-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">
                    Rêver de souris en islam
                  </Link>
                  <Link href="/reve-poisson-islam-richesse" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">
                    Rêver de poisson en islam
                  </Link>
                </div>
              </section>

              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">
                    Comprendre l&apos;islam
                  </Link>
                  <Link href="/remede-arabe" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">
                    Remèdes et médecine prophétique
                  </Link>
                  <Link href="/apprendre-le-coran" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">
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
