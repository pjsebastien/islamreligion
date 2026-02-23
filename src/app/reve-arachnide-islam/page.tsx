import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title: "Rêver d'araignée en islam : symbolisme et interprétation selon les savants",
  description:
    "Que signifie rêver d'araignée en islam ? Symbolisme coranique, interprétation selon Ibn Sirin et Al-Nabulsi, signification par couleur et comportement.",
  alternates: {
    canonical: "https://www.islamreligion.fr/reve-arachnide-islam",
  },
};

const tocItems = [
  { id: "symbolisme", label: "Symbolisme de l'araignée en islam" },
  { id: "savants", label: "Selon les savants musulmans" },
  { id: "couleurs", label: "Couleurs et comportements" },
  { id: "position", label: "Position et contexte" },
  { id: "cas-extremes", label: "Araignée géante et mygale" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Rêver d'araignée en islam est-il un mauvais signe ?",
    answer: "Pas forcément. Le rêve d'araignée en islam est polyvalent : il peut évoquer autant la ruse cachée que la créativité protectrice. La toile de l'araignée, qui a protégé le Prophète ﷺ lors de l'Hégire, peut être un signe de protection divine. Le contexte (couleur, comportement, position) détermine la signification.",
  },
  {
    question: "Que dit Ibn Sirin sur le rêve d'araignée ?",
    answer: "Ibn Sirin interprète l'araignée comme un signe de faiblesse ou de manipulation féminine. Il prévient le rêveur d'une possible source de ruse dans son entourage. Cependant, le contexte du rêve et la situation du rêveur modifient considérablement l'interprétation.",
  },
  {
    question: "Que signifie rêver d'une araignée noire en islam ?",
    answer: "L'araignée noire symbolise la peur, le mystère ou une menace cachée. Elle invite à la vigilance dans les relations et à examiner ses cercles proches. C'est un signe d'avertissement qui ne doit pas être ignoré, mais traité avec patience et recours aux invocations.",
  },
  {
    question: "Rêver d'une araignée blanche en islam : est-ce positif ?",
    answer: "Oui, l'araignée blanche est associée à la clarté, à la pureté et à la protection divine contre des épreuves majeures. Elle rappelle la toile qui a protégé le Prophète ﷺ dans la grotte. C'est un signe d'espoir et de purification.",
  },
  {
    question: "Que signifie rêver d'une morsure d'araignée en islam ?",
    answer: "La morsure d'araignée en rêve est un signal d'alarme : elle peut indiquer un danger actif, une trahison en cours ou une attaque émotionnelle dans votre vie éveillée. Les savants recommandent d'analyser la source de ses soucis et de demander la guidance d'Allah.",
  },
  {
    question: "Rêver d'une toile d'araignée en islam : quelle signification ?",
    answer: "La toile d'araignée intacte dans un rêve suggère la patience et la construction, le reflet de la persévérance dans un projet. Si on nettoie la toile, cela symbolise la purification et la rupture avec les influences négatives. Si la toile est détruite, cela peut indiquer une perte potentielle.",
  },
  {
    question: "Rêver d'une araignée géante en islam : que signifie-t-il ?",
    answer: "Une araignée géante ou mygale en rêve amplifie la signification : elle symbolise une épreuve de taille ou une peur grossissante dans la vie réelle. Les savants recommandent le dhikr, la demande de pardon et la consultation d'un guide religieux pour libérer la peur.",
  },
  {
    question: "L'araignée est-elle mentionnée dans le Coran ?",
    answer: "Oui, la sourate Al-Ankabut (L'Araignée, sourate 29) mentionne la toile de l'araignée comme symbole de fragilité. De plus, la tradition rapporte que lors de l'Hégire, une araignée a tissé sa toile à l'entrée de la grotte où se cachait le Prophète ﷺ, le protégeant de ses poursuivants.",
  },
];

export default function ReveArachnideIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.islamreligion.fr/reve-arachnide-islam/#article",
        headline: "Rêver d'araignée en islam : symbolisme et interprétation selon les savants",
        description: "Que signifie rêver d'araignée en islam ? Symbolisme coranique, interprétation selon Ibn Sirin et Al-Nabulsi.",
        image: "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-daraignee-islam-symbolisme-et-interpretation-selon-les-savants.jpg",
        datePublished: "2025-09-01",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: { "@id": "https://www.islamreligion.fr/reve-arachnide-islam/#webpage" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/reve-arachnide-islam/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.islamreligion.fr" },
          { "@type": "ListItem", position: 2, name: "Rêves en islam", item: "https://www.islamreligion.fr/reves-islam" },
          { "@type": "ListItem", position: 3, name: "Rêver d'araignée", item: "https://www.islamreligion.fr/reve-arachnide-islam" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Hero
          title="Rêver d'araignée en islam : symbolisme et interprétation"
          subtitle="Signification du rêve d'araignée selon le Coran, Ibn Sirin et la tradition islamique."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-daraignee-islam-symbolisme-et-interpretation-selon-les-savants.jpg"
          imageAlt="Rêver d'araignée en islam, symbolisme et interprétation selon les savants musulmans"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            <aside className="hidden lg:block"><TableOfContents items={tocItems} /></aside>

            <article className="max-w-3xl">
              <div className="lg:hidden"><TableOfContents items={tocItems} /></div>

              <nav className="mb-8 text-sm text-foreground-secondary" aria-label="Fil d'Ariane">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <Link href="/reves-islam" className="hover:text-primary">Rêves en islam</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rêver d&apos;araignée</span>
              </nav>

              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">En résumé</p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le rêve d&apos;araignée en islam est riche en symbolisme. Il
                  peut évoquer la ruse cachée comme la créativité protectrice.
                  La toile d&apos;araignée, qui a protégé le Prophète ﷺ lors de
                  l&apos;Hégire, symbolise la protection divine. Les couleurs
                  (noire, blanche, rouge), le comportement (attaque, toile,
                  morsure) et la position (plafond, lit, sur soi) nuancent
                  fortement l&apos;interprétation.
                </p>
              </div>

              {/* SECTION 1 */}
              <section id="symbolisme" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Origine et symbolisme de l&apos;araignée dans les rêves en
                  islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les songes mettant en scène des araignées, souvent enveloppés
                  de mystère, suscitent une profonde interrogation chez nombre de
                  croyants musulmans. Derrière la peur ou l&apos;étonnement, le
                  rêve d&apos;araignée dans le cadre de{" "}
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    l&apos;interprétation des rêves en islam
                  </Link>{" "}
                  véhicule un symbolisme riche,
                  émaillé de significations subtiles selon les savants.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans la tradition musulmane, l&apos;araignée est mentionnée à
                  travers l&apos;histoire du Prophète Muhammad ﷺ : lors de
                  l&apos;Hégire, une toile fut tissée à l&apos;entrée de la
                  grotte où il s&apos;était réfugié. Ce signe subtil montre que
                  la protection divine peut se manifester par les moyens les
                  plus fragiles. La sourate Al-Ankabut (sourate 29) mentionne
                  également la toile de l&apos;araignée comme symbole de
                  fragilité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Créature fragile mais talentueuse :</strong> sa
                      toile renvoie à la délicatesse de la stratégie humaine
                      face à la toute-puissance d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Symbole de patience et de discrétion :</strong>{" "}
                      mais avertit aussi contre la tromperie qui peut naître de
                      l&apos;excès de subtilité.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Scénario du rêve</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Interprétation dominante</th>
                        <th className="py-3 font-semibold text-primary">Pistes de réflexion</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Araignée agressive</td>
                        <td className="py-3 pr-4">Avertissement, vigilance accrue</td>
                        <td className="py-3">Identifier et protéger ses intérêts</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Tuer l&apos;araignée</td>
                        <td className="py-3 pr-4">Fin d&apos;une ruse ou domination d&apos;une peur</td>
                        <td className="py-3">Période de renouveau, affirmation</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Araignée blanche</td>
                        <td className="py-3 pr-4">Protection divine, purification</td>
                        <td className="py-3">Garder la foi en période d&apos;épreuve</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Araignée noire</td>
                        <td className="py-3 pr-4">Danger caché ou menace</td>
                        <td className="py-3">Examiner ses cercles proches</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Nettoyer une toile</td>
                        <td className="py-3 pr-4">Purge de mauvaises influences</td>
                        <td className="py-3">Rompre avec l&apos;ancien, accueillir le neuf</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-daraignee-islam-symbolisme-et-interpretation-selon-les-savants-1.jpg"
                    alt="Symbolisme de l'araignée dans les rêves en islam" width={1200} height={720} className="w-full object-cover"
                  />
                </div>
              </section>

              {/* SECTION 2 */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation selon les savants musulmans
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La pluralité des significations incite toujours à la prudence :
                  chaque rêve doit être interprété à la lumière du vécu et du
                  contexte individuel, y compris pour les{" "}
                  <Link href="/signification-reve-tuer-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    rêves les plus troublants
                  </Link>. Les grands interprètes ne sont pas
                  toujours d&apos;accord, ce qui enrichit la compréhension.
                </p>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">Ibn Sirin</h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Pour Ibn Sirin, l&apos;araignée est un signe de faiblesse ou
                    de manipulation féminine. Elle prévient le rêveur d&apos;une
                    possible source de ruse dans son entourage.
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">Al-Nabulsi</h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Al-Nabulsi y voit un message d&apos;avertissement ou une
                    bénédiction cachée. Il invite à l&apos;introspection sur la
                    loyauté et les intentions profondes.
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">Interprétation moderne</h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Les approches modernes encouragent une réflexion sur
                    l&apos;état émotionnel du rêveur, questionnant ses choix et
                    relations à travers le prisme du rêve.
                  </p>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Savant</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Position dominante</th>
                        <th className="py-3 font-semibold text-primary">Exemple d&apos;interprétation</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Ibn Sirin</td>
                        <td className="py-3 pr-4">Faiblesse ou manipulation</td>
                        <td className="py-3">Prévenir d&apos;une source de ruse</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Al-Nabulsi</td>
                        <td className="py-3 pr-4">Avertissement ou bénédiction cachée</td>
                        <td className="py-3">Introspection sur la loyauté</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Moderne</td>
                        <td className="py-3 pr-4">Réflexion sur l&apos;état émotionnel</td>
                        <td className="py-3">Questionner ses choix et relations</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* SECTION 3 */}
              <section id="couleurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification par couleur et comportement de l&apos;araignée
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Face à un rêve d&apos;araignée, la couleur et le comportement
                  de l&apos;animal offrent de puissants indices aux croyants
                  attentifs.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Araignée noire</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Symbole de peur, de mystère ou de menace cachée. La vigilance dans les relations est recommandée.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Araignée blanche</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Associée à la clarté, la pureté, voire la protection divine contre des épreuves majeures.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Araignée rouge</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Double facette entre passion et danger : avertissement d&apos;un excès ou d&apos;un conflit sous-jacent.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Araignée verte ou jaune</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Signe d&apos;évolution intérieure, de renouveau ou, pour le jaune, de possible trahison.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">Les actions de l&apos;araignée</h3>

                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h4 className="font-semibold text-primary">Attaque ou morsure</h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">Invite à analyser la source de ses soucis et à demander la guidance d&apos;Allah.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h4 className="font-semibold text-primary">Tisser une toile</h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">Reflet de la construction patiente d&apos;un projet ou d&apos;une protection autour de soi.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h4 className="font-semibold text-primary">Nettoyer la toile</h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">Purification, rupture avec le passé ou avec des influences négatives. Cela rejoint les pratiques de{" "}
                        <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          protection contre la sorcellerie en islam
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Couleur/Action</th>
                        <th className="py-3 font-semibold text-primary">Signification spirituelle</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Noire</td><td className="py-3">Avertissement, prudence accrue</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Blanche</td><td className="py-3">Espoir, protection, purification</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Piqûre ou attaque</td><td className="py-3">Danger actif ou trahison en cours</td></tr>
                      <tr className="border-b border-border"><td className="py-3 pr-4 font-medium text-foreground">Tisse une toile</td><td className="py-3">Création, persévérance, projet en maturation</td></tr>
                      <tr><td className="py-3 pr-4 font-medium text-foreground">Destruction de la toile</td><td className="py-3">Perte potentielle ou libération d&apos;un schéma nocif</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-daraignee-islam-symbolisme-et-interpretation-selon-les-savants-2.jpg"
                    alt="Interprétation des couleurs de l'araignée dans les rêves en islam" width={1200} height={720} className="w-full object-cover"
                  />
                </div>
              </section>

              {/* SECTION 4 */}
              <section id="position" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Sens selon la position et le contexte de l&apos;araignée
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le lieu où l&apos;araignée apparaît dans votre rêve module
                  considérablement la signification. Être attentif à la scène
                  globale aide à décrypter un message ajusté à votre
                  cheminement spirituel.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Au plafond</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Inquiétudes persistantes dans la sphère mentale ou spirituelle. Signe de problèmes non résolus.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Sur soi</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Intrusion dans la vie privée, influence extérieure. Reprendre sa souveraineté.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Dans le lit</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Menace sur la paix intérieure, possible trahison d&apos;un cercle proche, un symbolisme que l&apos;on retrouve aussi dans le{" "}
                      <Link href="/rever-crocodile-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        rêve de crocodile en islam
                      </Link>.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Plusieurs araignées</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">Accumulation d&apos;émotions ou de situations, ambiance de pression ou d&apos;abondance.</p>
                  </div>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Position</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Explication</th>
                        <th className="py-3 font-semibold text-primary">Pistes d&apos;action</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Au plafond</td>
                        <td className="py-3 pr-4">Problèmes non résolus, force protectrice en embuscade</td>
                        <td className="py-3">Consolider sa foi, se tourner vers la prière</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Sur le corps</td>
                        <td className="py-3 pr-4">Sentiment d&apos;envahissement</td>
                        <td className="py-3">Couper les liens toxiques</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Dans le lit</td>
                        <td className="py-3 pr-4">Alerte sur la confiance accordée</td>
                        <td className="py-3">Renforcer sa vigilance, supplication</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">En grand nombre</td>
                        <td className="py-3 pr-4">Organiser sa vie et ses pensées</td>
                        <td className="py-3">Distinguer vraies menaces et bénédictions cachées</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de souris en islam : signification et interprétation"
                  description="Un autre symbole animal fréquent dans les rêves en islam."
                  href="/rever-souris-islam"
                />
              </section>

              {/* SECTION 5 */}
              <section id="cas-extremes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Araignée géante, mygale et multitude : cas concrets
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Certains rêves d&apos;araignée prennent des formes extrêmes,
                  créant la panique ou l&apos;incompréhension. Ces scénarios
                  massifs appellent à la fois au discernement et à la
                  miséricorde divine.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Mygale ou araignée géante</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Amplifie la peur ou la pression. Symbolise une épreuve de taille ou une peur grossissante dans la vie réelle.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Nid ou colonie d&apos;araignées</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Évoque la multiplication d&apos;angoisses, ou parfois la bénédiction cachée dans une construction communautaire harmonieuse.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">Destruction collective</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Besoin urgent de purification ou rupture d&apos;un cycle familial/social devenu toxique. Le{" "}
                      <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        repentir sincère (tawba)
                      </Link>{" "}
                      peut accompagner cette démarche.
                    </p>
                  </div>
                </div>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Cas de figure</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Conseils en islam</th>
                        <th className="py-3 font-semibold text-primary">Objectif spirituel</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Mygale récurrente</td>
                        <td className="py-3 pr-4">Dhikr, demande de pardon, consultation</td>
                        <td className="py-3">Libérer la peur, renforcer la foi</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Araignées multiples</td>
                        <td className="py-3 pr-4">Filtrer ses influences, clarifier</td>
                        <td className="py-3">Distinguer pression et épreuves salutaires</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Rêve cauchemardesque</td>
                        <td className="py-3 pr-4">Prière nocturne, lecture du{" "}
                          <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Coran</Link>
                        </td>
                        <td className="py-3">Transformer l&apos;inquiétude en espoir</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Se souvenir que tout rêve, même effrayant, peut être un
                  tremplin vers la maturité et l&apos;harmonie intérieure. Ne
                  jamais hésiter à parler de ses songes à une personne de
                  confiance ou à un savant compétent, car la guidance
                  d&apos;Allah passe souvent par le partage.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-daraignee-islam-symbolisme-et-interpretation-selon-les-savants-3.jpg"
                    alt="Araignée géante et mygale dans les rêves en islam, interprétation et conseils spirituels" width={1200} height={720} className="w-full object-cover"
                  />
                </div>
              </section>

              <AffiliateForm
                title="Comprenez les symboles coraniques de vos rêves"
                description="La compréhension des rêves en islam passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation pour approfondir vos connaissances."
                preselect="coran"
              />

              <FaqSection items={faqItems} id="faq" />

              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Interprétations de rêves similaires</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/reves-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Tous les rêves en islam</Link>
                  <Link href="/rever-souris-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Rêver de souris en islam</Link>
                  <Link href="/reve-poisson-islam-richesse" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Rêver de poisson en islam</Link>
                  <Link href="/signification-reve-tuer-islam" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Rêver de tuer en islam</Link>
                </div>
              </section>

              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Comprendre l&apos;islam</Link>
                  <Link href="/remede-arabe" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Remèdes et médecine prophétique</Link>
                  <Link href="/apprendre-le-coran" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary">Apprendre le Coran</Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
