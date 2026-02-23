import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title: "Rêver de souris en islam : signification, couleurs et interprétation",
  description:
    "Que signifie rêver de souris en islam ? Interprétation selon Ibn Sirin et Al-Nabulsi, signification par couleur (blanche, noire, grise), scénarios courants et conseils prophétiques.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-souris-islam",
  },
};

const tocItems = [
  { id: "signification", label: "Signification de la souris en islam" },
  { id: "ibn-sirin", label: "Interprétation selon Ibn Sirin" },
  { id: "couleurs", label: "Signification par couleur" },
  { id: "scenarios", label: "Scénarios courants en rêve" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "souris-vs-rat", label: "Souris vs rat en islam" },
  { id: "tradition", label: "La souris dans la tradition prophétique" },
  { id: "que-faire", label: "Que faire après ce rêve ?" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Rêver de souris en islam est-il un mauvais présage ?",
    answer:
      "Pas nécessairement. La signification dépend du contexte du rêve, de la couleur de la souris et de la situation du rêveur. Une souris blanche attrapée peut symboliser un gain, tandis qu'une souris noire qui attaque traduit plutôt un danger. Les savants insistent sur le fait qu'aucun rêve isolé ne constitue un présage définitif, il faut toujours replacer le rêve dans son contexte global.",
  },
  {
    question: "Que dit Ibn Sirin sur les souris dans les rêves ?",
    answer:
      "Ibn Sirin, le plus célèbre interprète des rêves en islam, associe la souris à une femme de mauvais caractère (fassiqa), à un voleur, ou à quelqu'un qui mange de vos biens sans droit. Il précise que la signification varie selon ce que fait la souris dans le rêve : si elle entre dans la maison, sort de la maison, est attrapée ou s'enfuit.",
  },
  {
    question: "Quelle est la différence entre rêver de souris et rêver de rat en islam ?",
    answer:
      "Bien que proches, les deux symboles diffèrent. La souris symbolise généralement des problèmes mineurs, des nuisances domestiques ou une personne qui grignote vos ressources discrètement. Le rat représente un ennemi plus important, un hypocrite ou un danger plus sérieux. La taille de l'animal dans le rêve influe aussi sur l'interprétation.",
  },
  {
    question: "Que faire après un rêve de souris qui fait peur ?",
    answer:
      "Le Prophète ﷺ a enseigné la conduite à suivre après tout rêve perturbant : cracher légèrement trois fois sur sa gauche, chercher refuge auprès de Dieu contre le diable, changer de côté dans le lit, et ne raconter ce rêve à personne. Si l'inquiétude persiste, on peut se lever pour prier ou réciter le verset du Trône.",
  },
  {
    question: "Rêver d'une souris blanche a-t-il un sens positif ?",
    answer:
      "Selon plusieurs interprètes, la souris blanche dans un rêve est moins négative que la noire. Elle peut annoncer une difficulté passagère mais aussi une opportunité de gain si le rêveur parvient à l'attraper. La couleur blanche en islam est généralement associée à la pureté, ce qui atténue la connotation négative de la souris.",
  },
  {
    question: "Rêver de tuer une souris en islam : bonne ou mauvaise chose ?",
    answer:
      "Tuer une souris dans un rêve est généralement interprété positivement. Cela symbolise la victoire sur un ennemi faible, la résolution d'un problème ou l'abandon d'une mauvaise habitude. Ibn Sirin y voyait le signe que le rêveur surmontera une difficulté liée à une personne nuisible dans son entourage.",
  },
  {
    question: "Rêver de beaucoup de souris ensemble : que signifie-t-il ?",
    answer:
      "Voir de nombreuses souris dans un rêve peut indiquer des soucis multiples, des dettes, des conflits familiaux ou un environnement malsain. Certains interprètes y voient aussi le signe d'une bénédiction à venir si les souris quittent la maison, car cela symbolise le départ des problèmes.",
  },
  {
    question: "Peut-on interpréter soi-même un rêve de souris ?",
    answer:
      "On peut réfléchir au sens de son rêve, mais les savants recommandent de consulter une personne compétente pour les rêves marquants. L'interprétation des rêves est une science qui demande de la connaissance, du discernement et la prise en compte du contexte personnel du rêveur. Un même symbole peut signifier des choses très différentes selon la personne.",
  },
];

export default function ReverSourisIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.islamreligion.fr/rever-souris-islam/#article",
        datePublished: "2025-09-05",
        headline: "Rêver de souris en islam : signification, couleurs et interprétation",
        description:
          "Que signifie rêver de souris en islam ? Interprétation selon Ibn Sirin, signification par couleur, scénarios courants et conseils prophétiques.",
        image: "https://www.islamreligion.frhttps://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-souris-islam-interpretation-islamique-et-conseils-spirituels.jpg",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: { "@id": "https://www.islamreligion.fr/rever-souris-islam/#webpage" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.islamreligion.fr/rever-souris-islam/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.islamreligion.fr" },
          { "@type": "ListItem", position: 2, name: "Rêves en islam", item: "https://www.islamreligion.fr/reves-islam" },
          { "@type": "ListItem", position: 3, name: "Rêver de souris", item: "https://www.islamreligion.fr/rever-souris-islam" },
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
          title="Rêver de souris en islam : signification et interprétation"
          subtitle="Ce que symbolise la souris dans un rêve selon la tradition islamique, les savants et les textes prophétiques."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-souris-islam-interpretation-islamique-et-conseils-spirituels.jpg"
          imageAlt="Signification de rêver de souris en islam, interprétation spirituelle selon la tradition islamique"
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

              <nav className="mb-8 text-sm text-foreground-secondary" aria-label="Fil d'Ariane">
                <Link href="/" className="hover:text-primary">Accueil</Link>
                <span className="mx-2">/</span>
                <Link href="/reves-islam" className="hover:text-primary">Rêves en islam</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rêver de souris</span>
              </nav>

              {/* Résumé rapide — optimisé featured snippet */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">En résumé</p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de souris en islam symbolise le plus souvent des craintes cachées,
                  de petites nuisances ou la présence d&apos;une personne qui profite de
                  vos biens sans droit. Selon Ibn Sirin, la souris représente une femme
                  de mauvais caractère (<em>fassiqa</em>) ou un voleur. La couleur, le
                  comportement de la souris et la situation du rêveur modifient
                  significativement l&apos;interprétation.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Signification générale */}
              {/* ============================================ */}
              <section id="signification" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification de la souris dans les rêves en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition islamique de l&apos;
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    interprétation des rêves
                  </Link>,
                  la souris est un symbole riche et nuancé. Elle n&apos;a pas une
                  signification unique : chaque détail du rêve (la couleur de
                  l&apos;animal, son comportement, l&apos;endroit où il se trouve et
                  l&apos;état d&apos;esprit du rêveur) modifie la lecture.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  De manière générale, la souris dans un rêve peut symboliser :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une personne nuisible</strong> : quelqu&apos;un qui profite
                      de vos biens, grignote vos ressources discrètement ou vous cause
                      du tort sans que vous vous en rendiez compte
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Des craintes cachées</strong> : des peurs que le rêveur
                      n&apos;exprime pas dans sa vie éveillée, des inquiétudes enfouies
                      qui refont surface la nuit
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>De petites difficultés</strong> : des soucis mineurs mais
                      persistants, des obstacles du quotidien qui irritent sans être
                      majeurs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un avertissement</strong> : une invitation à la vigilance
                      dans ses relations, ses finances ou son environnement familial
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il serait réducteur de s&apos;arrêter à une lecture uniformément
                  négative. La souris peut aussi porter un message d&apos;espoir :
                  l&apos;attraper, la chasser ou la voir fuir symbolise souvent la
                  résolution d&apos;un problème. L&apos;analyse demande de la nuance
                  et du discernement.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-souris-islam-interpretation-islamique-et-conseils-spirituels-1.jpg"
                    alt="Interprétation islamique du rêve de souris et sa signification spirituelle"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin + Al-Nabulsi */}
              {/* ============================================ */}
              <section id="ibn-sirin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interprétation selon Ibn Sirin et les savants
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Muhammad ibn Sirin (653-729), le plus célèbre interprète des rêves dans
                  la tradition musulmane, a consacré des passages détaillés à la souris
                  dans ses écrits. Son approche reste la référence la plus citée.
                </p>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">Ce que dit Ibn Sirin</h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Pour Ibn Sirin, la souris représente une <em>fassiqa</em>, c&apos;est-à-dire une femme
                    de mauvais caractère, une personne qui vit dans le péché ou qui manque
                    de scrupules. Il l&apos;associe aussi à un voleur, car la souris
                    agit dans l&apos;ombre, prend sans permission et se cache. Voir une
                    souris entrer dans sa maison peut indiquer l&apos;arrivée d&apos;une
                    personne qui convoite vos biens. La voir sortir peut symboliser la
                    perte d&apos;une bénédiction.
                  </p>
                </div>

                <div className="mt-6 border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-primary">L&apos;avis d&apos;Al-Nabulsi</h3>
                  <p className="mt-2 leading-relaxed text-foreground-secondary">
                    Abd al-Ghani al-Nabulsi (1641-1731), autre autorité majeure en matière
                    d&apos;interprétation des rêves, apporte une lecture complémentaire. Pour
                    lui, la souris peut symboliser les soucis domestiques, les tensions
                    au sein du foyer ou une personne qui sème la discorde en silence.
                    Il souligne que le contexte du rêveur est déterminant : la même souris
                    peut être un avertissement pour l&apos;un et un signe d&apos;espoir
                    pour l&apos;autre.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux savants s&apos;accordent sur un point : l&apos;interprétation
                  ne peut jamais être mécanique. Un même symbole change de sens selon
                  l&apos;état de foi du rêveur, ses préoccupations et les autres éléments
                  du rêve. C&apos;est pourquoi la{" "}
                  <Link href="/reves-islam#regles" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    science de l&apos;interprétation des rêves
                  </Link>{" "}
                  demande de la prudence et de la compétence.
                </p>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Par couleur */}
              {/* ============================================ */}
              <section id="couleurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification par couleur de la souris
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La couleur de la souris dans le rêve oriente fortement
                  l&apos;interprétation. Voici les principales associations selon la
                  tradition islamique.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Souris blanche</h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      La souris blanche est la moins négative. Elle peut annoncer une
                      période de difficulté passagère, mais aussi une opportunité de
                      gain ou de réussite si le rêveur parvient à l&apos;attraper. La
                      couleur blanche étant associée à la pureté en islam, elle atténue
                      la connotation négative du symbole.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Souris grise</h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      La souris grise reflète l&apos;ambiguïté. Elle peut signaler
                      la présence d&apos;ennemis discrets, une période de stagnation ou
                      une atmosphère de méfiance dans l&apos;entourage. Le gris traduit
                      l&apos;incertitude, ni franchement positif ni complètement négatif.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Souris marron ou brune</h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Contrairement à ce que l&apos;on pourrait penser, la souris marron
                      porte souvent une signification favorable. Elle peut évoquer le retour
                      de la chance, la résolution d&apos;un malentendu amoureux ou
                      professionnel, ou la transformation d&apos;un obstacle en opportunité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Souris noire</h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      La souris noire est le signe le plus préoccupant. Elle peut refléter
                      une profonde tristesse, un danger moral, une trahison ou un ennemi
                      dissimulé. Ce rêve invite à la vigilance accrue et à la{" "}
                      <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        protection spirituelle en islam
                      </Link>{" "}
                      par les invocations et les sourates protectrices.
                    </p>
                  </div>
                </div>

                {/* Tableau récapitulatif */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Couleur</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Signification</th>
                        <th className="py-3 font-semibold text-primary">Connotation</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Blanche</td>
                        <td className="py-3 pr-4">Tracas temporaire, opportunité possible</td>
                        <td className="py-3">Plutôt positive</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Grise</td>
                        <td className="py-3 pr-4">Ambiguïté, ennemis discrets, stagnation</td>
                        <td className="py-3">Neutre à négative</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Marron</td>
                        <td className="py-3 pr-4">Retour de chance, résolution de conflits</td>
                        <td className="py-3">Plutôt positive</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Noire</td>
                        <td className="py-3 pr-4">Danger, trahison, tristesse, ennemi caché</td>
                        <td className="py-3">Négative</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Scénarios courants */}
              {/* ============================================ */}
              <section id="scenarios" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Scénarios courants en rêve et leur signification
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le comportement de la souris dans le rêve est au moins aussi important
                  que sa couleur. Voici les situations les plus fréquentes et ce
                  qu&apos;elles peuvent indiquer.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h3 className="font-semibold text-primary">Une souris qui court dans la maison</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Peut signaler un malaise familial, un climat tendu au sein du
                        foyer ou la présence d&apos;une personne qui sème la discorde.
                        Le Prophète ﷺ recommandait de favoriser la paix chez soi et de
                        multiplier les invocations pour la protection du foyer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h3 className="font-semibold text-primary">Une souris qui mord</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Être mordu par une souris dans un rêve peut symboliser une
                        attaque verbale, une médisance ou un tort causé par une personne
                        proche. La morsure traduit un impact direct : le rêveur ressent
                        les conséquences de la nuisance dans sa vie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">3</span>
                    <div>
                      <h3 className="font-semibold text-primary">Attraper ou tuer une souris</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est l&apos;un des scénarios les plus positifs. Attraper
                        la souris symbolise la victoire sur une faiblesse, un rival ou
                        une mauvaise habitude.{" "}
                        <Link href="/signification-reve-tuer-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          Tuer la souris
                        </Link>{" "}
                        renforce cette lecture :
                        le rêveur surmonte un obstacle et reprend le contrôle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h3 className="font-semibold text-primary">Être poursuivi par une souris</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La fuite devant une souris indique souvent l&apos;évitement
                        d&apos;un problème. Le rêveur refuse de faire face à une
                        situation qui le dérange, comme un conflit, une vérité à
                        affronter ou un changement à accepter. L&apos;introspection et la prière
                        peuvent ramener la sérénité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">5</span>
                    <div>
                      <h3 className="font-semibold text-primary">Beaucoup de souris (invasion)</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Voir de nombreuses souris peut indiquer des soucis multiples,
                        des dettes, ou un environnement malsain. Certains interprètes
                        y voient aussi un signe de bénédiction à venir si les souris
                        quittent la maison, leur départ symbolisant la fin des problèmes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">6</span>
                    <div>
                      <h3 className="font-semibold text-primary">Une souris morte</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Trouver une souris morte dans un rêve peut symboliser la fin
                        d&apos;un conflit, la disparition d&apos;une menace ou la
                        résolution d&apos;un problème qui pesait. C&apos;est souvent
                        un signe positif indiquant que le danger est passé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">7</span>
                    <div>
                      <h3 className="font-semibold text-primary">Une souris dans la nourriture</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ce scénario traduit souvent l&apos;idée que quelqu&apos;un profite
                        de vos ressources ou que vos gains sont menacés. Ibn Sirin associait
                        ce type de rêve à la présence d&apos;un voleur ou d&apos;une
                        personne qui vit à vos dépens.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">8</span>
                    <div>
                      <h3 className="font-semibold text-primary">Une souris dans le lit</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Symbolise généralement une source d&apos;inquiétude dans
                        l&apos;intimité du rêveur, comme un problème conjugal, un secret
                        pesant ou un mal-être dans la sphère privée. Le lit étant un
                        lieu de repos et de vulnérabilité, la présence de la souris y
                        est d&apos;autant plus significative.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">9</span>
                    <div>
                      <h3 className="font-semibold text-primary">Entendre une souris sans la voir</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ce rêve peut indiquer la présence d&apos;un danger caché, de
                        médisances dont le rêveur n&apos;a pas conscience, ou d&apos;une
                        menace qui agit dans l&apos;ombre. L&apos;invisible est souvent
                        plus inquiétant que le visible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">10</span>
                    <div>
                      <h3 className="font-semibold text-primary">Souris et chat ensemble</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Voir un chat chasser une souris dans un rêve est généralement
                        positif : cela symbolise la protection, la résolution d&apos;un
                        conflit ou l&apos;intervention d&apos;un allié dans votre vie.
                        Si la souris échappe au chat, le problème persiste. Pour approfondir
                        ce symbole, consultez notre article sur{" "}
                        <Link href="/rever-chat-islam-symbolisme" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          le rêve de chat en islam
                        </Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-souris-islam-interpretation-islamique-et-conseils-spirituels-2.jpg"
                    alt="Scénarios de rêves de souris en islam et leurs significations"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de serpent en islam : signification et interprétation"
                  description="Le serpent est l'un des symboles les plus fréquents dans les rêves en islam."
                  href="/reves-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Selon la situation du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve ne porte pas la même signification pour tous. Les interprètes
                  tiennent compte de la situation personnelle du rêveur pour affiner leur
                  lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour une femme mariée</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La souris peut symboliser une rivale, une belle-mère envahissante
                      ou une personne de l&apos;entourage qui nuit discrètement au foyer.
                      Si la souris est attrapée ou chassée, cela indique que la situation
                      se résoudra favorablement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour une femme enceinte</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Chez la femme enceinte, le rêve de souris est souvent lié aux
                      inquiétudes naturelles de la grossesse. Il traduit les peurs
                      liées à la santé du bébé ou à la maternité. Les interprètes
                      recommandent de ne pas s&apos;alarmer et de multiplier les
                      invocations de protection.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour un homme</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Pour un homme, la souris peut représenter une femme de mauvais
                      caractère dans son entourage (selon Ibn Sirin), un concurrent
                      déloyal dans le travail, ou une menace financière. Le contexte
                      professionnel et familial éclaire la lecture.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">Pour une personne célibataire</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La souris peut refléter des doutes sur une relation naissante,
                      la méfiance envers un prétendant ou la peur de l&apos;engagement.
                      Si le rêveur attrape la souris, cela peut annoncer qu&apos;il
                      surmontera ses hésitations.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Souris vs Rat */}
              {/* ============================================ */}
              <section id="souris-vs-rat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Souris vs rat : quelle différence en islam ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux animaux sont proches, mais leur symbolisme diffère dans la
                  tradition islamique de l&apos;interprétation des rêves.
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">Critère</th>
                        <th className="py-3 pr-4 font-semibold text-primary">Souris</th>
                        <th className="py-3 font-semibold text-primary">Rat</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Type de menace</td>
                        <td className="py-3 pr-4">Mineure, discrète</td>
                        <td className="py-3">Plus importante, plus agressive</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Personne symbolisée</td>
                        <td className="py-3 pr-4">Petite nuisance, personne qui grignote vos biens</td>
                        <td className="py-3">Ennemi sérieux, hypocrite, voleur</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">Connotation</td>
                        <td className="py-3 pr-4">Problèmes du quotidien</td>
                        <td className="py-3">Danger réel, adversité</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">Selon Ibn Sirin</td>
                        <td className="py-3 pr-4">Femme fassiqa, petit voleur</td>
                        <td className="py-3">Ennemi agressif, corrompu</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                  La taille de l&apos;animal dans le rêve peut aussi modifier la lecture :
                  une très grosse souris se rapproche du symbolisme du rat, tandis qu&apos;un
                  petit rat peut être lu comme une souris. Pour une analyse plus détaillée,
                  consultez notre guide sur{" "}
                  <Link href="/rever-rat-islam-purification" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    rêver de rat en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Tradition prophétique */}
              {/* ============================================ */}
              <section id="tradition" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La souris dans la tradition prophétique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La souris n&apos;est pas seulement un symbole onirique en islam, elle
                  apparaît aussi dans les hadiths du Prophète Muhammad ﷺ.
                </p>

                <HadithCard
                  text="Éteignez les lampes la nuit lorsque vous dormez, fermez les portes, couvrez les récipients et couvrez la nourriture et la boisson, car la souris peut tirer la mèche et incendier la maison."
                  source="Hadith rapporté par al-Bukhari"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, qui fait partie des recommandations pratiques du Prophète ﷺ
                  pour la vie quotidienne, montre que la souris est perçue comme un animal
                  nuisible capable de causer des dégâts matériels. Cette image se retrouve
                  dans l&apos;interprétation des rêves : la souris est associée à ce qui
                  détruit en silence, grignote les ressources et agit dans l&apos;ombre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un autre hadith rapporté par Muslim mentionne la souris parmi les cinq
                  animaux nuisibles (<em>fawasiq</em>) qu&apos;il est permis de tuer
                  même en état de sacralisation (<em>ihram</em>) : le corbeau, le milan,
                  le scorpion, la souris et le{" "}
                  <Link href="/rever-chien-islam-signification" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    chien enragé
                  </Link>. Cette classification renforce
                  l&apos;association de la souris avec la nuisance dans la tradition islamique.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Que faire */}
              {/* ============================================ */}
              <section id="que-faire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire après avoir rêvé de souris ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si le rêve vous a laissé un sentiment d&apos;inquiétude, voici les
                  étapes recommandées par la Sunna et les savants :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">1</span>
                    <div>
                      <h3 className="font-semibold text-primary">Appliquer les recommandations prophétiques</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Cracher légèrement trois fois à gauche, chercher refuge auprès
                        de Dieu contre le diable, changer de côté dans le lit et ne
                        raconter ce rêve à personne si c&apos;est un cauchemar.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">2</span>
                    <div>
                      <h3 className="font-semibold text-primary">Réciter les sourates protectrices</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Al-Ikhlas, Al-Falaq, An-Nas et le verset du Trône (Ayat al-Kursi).
                        Pour ceux qui souhaitent approfondir leur récitation,{" "}
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
                      <h3 className="font-semibold text-primary">Faire ses ablutions et prier</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si l&apos;inquiétude persiste, se lever pour accomplir les
                        ablutions et{" "}
                        <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                          prier deux unités de prière
                        </Link>{" "}
                        (raka&apos;at) aide à
                        apaiser le cœur. La prière est le refuge du croyant face à
                        toute forme d&apos;anxiété.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">4</span>
                    <div>
                      <h3 className="font-semibold text-primary">Ne pas tirer de conclusions hâtives</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un rêve de souris n&apos;est jamais un présage définitif. Les
                        savants insistent : aucune décision importante ne devrait reposer
                        uniquement sur un rêve. La réflexion, la patience et la confiance
                        en la miséricorde de Dieu sont les meilleures réponses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">5</span>
                    <div>
                      <h3 className="font-semibold text-primary">Consulter une personne compétente si nécessaire</h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le rêve revient fréquemment ou vous trouble profondément,
                        consulter un imam ou un savant compétent en interprétation des
                        rêves peut apporter un éclairage utile et apaisant.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-souris-islam-interpretation-islamique-et-conseils-spirituels-3.jpg"
                    alt="Conseils spirituels pour réagir après un rêve de souris en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Comprenez les symboles coraniques de vos rêves"
                description="La compréhension des rêves en islam passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation pour approfondir vos connaissances."
                preselect="coran"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne — articles similaires */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Interprétations de rêves similaires</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rêves en islam
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de rat en islam
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de chat en islam
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de serpent en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">Sur le même sujet</h2>
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
