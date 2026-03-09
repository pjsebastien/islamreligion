import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Rêver de scorpion en islam : ennemi caché, trahison et protection spirituelle",
  description:
    "Découvrez la signification du rêve de scorpion en islam selon Ibn Sirin et An-Nabulsi : ennemi caché, médisance, piqûre, couleurs et conseils de protection.",
  openGraph: {
    title:
      "Rêver de scorpion en islam : ennemi caché, trahison et protection spirituelle",
    description:
      "Découvrez la signification du rêve de scorpion en islam selon Ibn Sirin et An-Nabulsi : ennemi caché, médisance, piqûre, couleurs et conseils de protection.",
    url: "https://www.islamreligion.fr/rever-scorpion-islam",
    images: [{ url: "/images/mains-priere-doua-islam-invocation.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-scorpion-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique du scorpion" },
  { id: "savants", label: "Ibn Sirin et An-Nabulsi" },
  { id: "pique", label: "Être piqué par un scorpion" },
  { id: "tuer", label: "Tuer un scorpion en rêve" },
  { id: "couleurs", label: "Scorpion noir, jaune et autres" },
  { id: "maison", label: "Scorpion dans la maison" },
  { id: "profils", label: "Selon le rêveur" },
  { id: "conseils", label: "Conseils et protection" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de scorpion en islam ?",
    answer:
      "En islam, le scorpion dans un rêve symbolise généralement un ennemi caché, une personne hypocrite ou un danger dissimulé dans l\u0027entourage. Selon Ibn Sirin, il représente une personne qui nuit par la parole, la médisance ou la calomnie. La signification précise dépend du contexte du rêve, de la couleur du scorpion et de l\u0027action qui se déroule.",
  },
  {
    question: "Rêver d\u0027être piqué par un scorpion en islam : est-ce grave ?",
    answer:
      "La piqûre de scorpion dans un rêve est un avertissement sérieux mais pas une fatalité. Elle peut indiquer une trahison imminente, des propos blessants ou une perte financière causée par un proche. Ce rêve invite à redoubler de vigilance dans les relations et à renforcer la protection spirituelle par les invocations et la prière.",
  },
  {
    question: "Rêver de tuer un scorpion en islam : est-ce positif ?",
    answer:
      "Oui, tuer un scorpion dans un rêve est interprété positivement en islam. Selon Ibn Sirin, cela symbolise la victoire sur un ennemi, la neutralisation d\u0027une menace ou la capacité du rêveur à surmonter une épreuve. Ce rêve encourage à poursuivre ses efforts et à garder confiance en la protection divine.",
  },
  {
    question: "Que signifie un scorpion noir dans un rêve en islam ?",
    answer:
      "Le scorpion noir représente un ennemi particulièrement dangereux et dissimulé. Sa couleur sombre renforce le caractère sournois de la menace. Ce rêve invite à une vigilance accrue envers les personnes de l\u0027entourage qui pourraient agir dans l\u0027ombre, et à multiplier les invocations protectrices.",
  },
  {
    question: "Rêver d\u0027un scorpion jaune en islam : quelle signification ?",
    answer:
      "Le scorpion jaune dans un rêve islamique est souvent associé à la jalousie, l\u0027envie ou des difficultés financières provoquées par autrui. Le jaune symbolise parfois la maladie ou l\u0027affaiblissement. Ce rêve peut alerter sur une personne envieuse dans l\u0027entourage professionnel ou familial.",
  },
  {
    question: "Que signifie voir un scorpion dans sa maison en rêve ?",
    answer:
      "Un scorpion dans la maison en rêve signale un danger au sein du foyer ou de la sphère intime. Il peut s\u0027agir d\u0027un membre de la famille aux intentions douteuses, d\u0027un visiteur malveillant ou de tensions domestiques latentes. Ce rêve appelle à purifier l\u0027environnement familial par la récitation du Coran et les invocations.",
  },
  {
    question: "Que faire après avoir rêvé de scorpion en islam ?",
    answer:
      "Après un rêve de scorpion, il est recommandé de chercher refuge auprès d\u0027Allah contre le mal de ce rêve, de réciter les sourates protectrices (Al-Falaq, An-Nas, Ayat al-Kursi), de cracher légèrement trois fois à gauche et de ne pas raconter le rêve à n\u0027importe qui. Il est aussi conseillé de renforcer ses invocations quotidiennes.",
  },
  {
    question: "Rêver de plusieurs scorpions en islam : quelle interprétation ?",
    answer:
      "Voir plusieurs scorpions dans un rêve peut indiquer la présence de multiples ennemis ou de nombreuses sources de nuisance dans l\u0027entourage. Cela peut aussi symboliser un environnement toxique où les médisances et les complots se multiplient. Ce rêve invite à une réévaluation complète de ses fréquentations et à un renforcement de la protection spirituelle.",
  },
];

export default function ReverScorpionIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-scorpion-islam/#article",
        headline:
          "Rêver de scorpion en islam : ennemi caché, trahison et protection spirituelle",
        description:
          "Découvrez la signification du rêve de scorpion en islam selon Ibn Sirin et An-Nabulsi : ennemi caché, médisance, piqûre, couleurs et conseils de protection.",
        image:
          "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-scorpion-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-scorpion-islam/#breadcrumb",
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
            name: "Rêver de scorpion",
            item: "https://www.islamreligion.fr/rever-scorpion-islam",
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
          title="Rêver de scorpion en islam : ennemi caché, trahison et protection spirituelle"
          subtitle="Ce que symbolise le scorpion dans un rêve selon Ibn Sirin, An-Nabulsi et la tradition islamique. Interprétations complètes et conseils de protection."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Rêver de scorpion en islam, signification spirituelle et protection"
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
                <span className="text-foreground">Rêver de scorpion</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de scorpion en islam est un avertissement spirituel
                  majeur. Le scorpion représente un ennemi caché, une personne
                  hypocrite ou une source de médisance dans l&apos;entourage.
                  Selon les grands interprètes Ibn Sirin et An-Nabulsi, ce rêve
                  invite à la vigilance, à la purification et au renforcement
                  de la protection spirituelle. La couleur du scorpion,
                  l&apos;action vécue et la situation du rêveur affinent
                  l&apos;interprétation.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique du scorpion */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique du scorpion en islam : ennemi caché et médisance
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans la tradition islamique de l&apos;
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    interprétation des rêves
                  </Link>
                  , le scorpion occupe une place singulière parmi les créatures
                  porteuses de sens. Contrairement au serpent qui attaque
                  ouvertement, le scorpion frappe par surprise, par derrière,
                  avec une précision redoutable. Cette caractéristique en fait
                  le symbole par excellence de la trahison cachée et de la
                  médisance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad ﷺ a rappelé la distinction fondamentale
                  entre les trois types de rêves : le rêve véridique (
                  <em>ru&apos;ya</em>), venu d&apos;Allah, le rêve de
                  l&apos;âme (<em>nafsani</em>), produit par les
                  préoccupations personnelles, et le rêve du diable (
                  <em>shaytani</em>), destiné à troubler le croyant. Un rêve
                  de scorpion peut relever de chacune de ces catégories selon
                  le contexte et l&apos;état spirituel du rêveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le scorpion dans un rêve symbolise avant tout une personne
                  qui nuit par la parole. La médisance (<em>ghiba</em>) et la
                  calomnie (<em>buhtan</em>) sont des péchés majeurs en islam,
                  comparés par le Coran au fait de manger la chair de son
                  frère mort (sourate Al-Hujurat, verset 12). Le scorpion
                  incarne cette forme de nuisance insidieuse qui atteint sa
                  cible sans que celle-ci ne s&apos;en rende compte
                  immédiatement.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ennemi caché :</strong> une personne de
                      l&apos;entourage qui dissimule ses intentions
                      malveillantes derrière un visage amical
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Médisance et calomnie :</strong> des propos
                      tenus dans le dos du rêveur, des rumeurs qui circulent
                      sans qu&apos;il en ait conscience
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Hypocrisie :</strong> une relation basée sur la
                      fausseté, un proche qui affiche de la bienveillance tout
                      en oeuvrant contre le rêveur
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Danger imminent :</strong> un avertissement
                      divin pour préparer le rêveur à une épreuve ou une
                      trahison prochaine
                    </span>
                  </li>
                </ul>

                {/* Tableau symbolisme */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification spirituelle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Niveau d&apos;alerte
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir un scorpion immobile
                        </td>
                        <td className="py-3 pr-4">
                          Ennemi en observation, menace latente
                        </td>
                        <td className="py-3">Modéré</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Scorpion qui s&apos;approche
                        </td>
                        <td className="py-3 pr-4">
                          Danger qui se rapproche, trahison imminente
                        </td>
                        <td className="py-3">Élevé</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Être piqué par un scorpion
                        </td>
                        <td className="py-3 pr-4">
                          Atteinte concrète, perte ou blessure
                        </td>
                        <td className="py-3">Très élevé</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tuer un scorpion
                        </td>
                        <td className="py-3 pr-4">
                          Victoire sur l&apos;ennemi, délivrance
                        </td>
                        <td className="py-3">Positif</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le scorpion partage certaines similitudes symboliques avec
                  d&apos;autres créatures dans les rêves islamiques. Comme{" "}
                  <Link
                    href="/reve-arachnide-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    l&apos;araignée dans les rêves en islam
                  </Link>
                  , il évoque la ruse et la dissimulation. Cependant, le
                  scorpion se distingue par la violence de son attaque et la
                  douleur qu&apos;il inflige, ce qui renforce la gravité de
                  l&apos;avertissement spirituel.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Symbolique du scorpion dans les rêves en islam et protection spirituelle"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation du scorpion selon Ibn Sirin et An-Nabulsi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux plus grands interprètes de rêves de la tradition
                  islamique ont consacré une attention particulière au symbole
                  du scorpion. Leurs analyses, bien que séparées par plusieurs
                  siècles, se complètent et offrent une lecture riche et
                  nuancée de ce rêve.
                </p>

                <div className="mt-8 space-y-8">
                  <div className="border-l-4 border-secondary pl-6">
                    <h3 className="text-xl font-semibold text-primary">
                      L&apos;interprétation d&apos;Ibn Sirin (VIIIe siècle)
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      Pour Ibn Sirin, le scorpion dans un rêve représente un
                      ennemi faible en apparence mais dangereux par sa langue.
                      Il s&apos;agit d&apos;une personne qui médite du mal et
                      le répand par la parole. Le scorpion incarne celui qui
                      calomnie le rêveur auprès des autres, qui sème la
                      discorde par des propos mensongers ou qui trahit la
                      confiance accordée.
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      Ibn Sirin précise que manger un scorpion cru dans un
                      rêve signifie que le rêveur consomme de l&apos;argent
                      illicite provenant d&apos;un ennemi. Avaler un scorpion
                      peut aussi indiquer que l&apos;on confie un secret à
                      une personne indigne de confiance qui finira par le
                      divulguer. Le scorpion au lit suggère une tension
                      conjugale ou une trahison au sein du couple.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold text-primary">
                      L&apos;interprétation d&apos;An-Nabulsi (XVIIe siècle)
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      An-Nabulsi approfondit l&apos;analyse en reliant le
                      scorpion à la notion de ghiba (médisance). Selon lui, le
                      scorpion représente une personne dont la langue est
                      comme un dard : elle blesse sans laisser de trace
                      visible mais cause des dommages profonds à la
                      réputation et aux relations du rêveur.
                    </p>
                    <p className="mt-3 leading-relaxed text-foreground-secondary">
                      An-Nabulsi ajoute que la taille du scorpion dans le rêve
                      reflète l&apos;ampleur de la menace. Un gros scorpion
                      annonce un ennemi puissant et influent, tandis qu&apos;un
                      petit scorpion désigne un adversaire de moindre
                      envergure mais tout aussi nuisible par ses paroles.
                      Plusieurs scorpions réunis peuvent symboliser un groupe
                      de personnes malveillantes qui agissent de concert.
                    </p>
                  </div>
                </div>

                {/* Tableau comparatif savants */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aspect
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Ibn Sirin
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          An-Nabulsi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nature de la menace
                        </td>
                        <td className="py-3 pr-4">
                          Ennemi faible mais dangereux par la parole
                        </td>
                        <td className="py-3">
                          Personne dont la langue blesse comme un dard
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tuer un scorpion
                        </td>
                        <td className="py-3 pr-4">
                          Perte puis récupération d&apos;argent
                        </td>
                        <td className="py-3">
                          Victoire définitive sur un ennemi
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Scorpion au lit
                        </td>
                        <td className="py-3 pr-4">
                          Tension conjugale, trahison possible
                        </td>
                        <td className="py-3">
                          Ennemi au sein de l&apos;intimité
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Taille du scorpion
                        </td>
                        <td className="py-3 pr-4">
                          Proportionnelle à la nuisance
                        </td>
                        <td className="py-3">
                          Reflète la puissance de l&apos;ennemi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux savants s&apos;accordent sur un point fondamental :
                  le scorpion n&apos;est pas un symbole de malédiction mais un
                  avertissement. Comme pour d&apos;autres rêves animaux tels
                  que{" "}
                  <Link
                    href="/rever-crocodile-islam-protection"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le rêve de crocodile en islam
                  </Link>
                  , il s&apos;agit d&apos;une mise en garde divine qui offre
                  au rêveur la possibilité de se préparer et de se protéger.
                </p>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
                    alt="Coran ouvert dans la nature au coucher du soleil, symbolisant la sagesse des savants sur le reve de scorpion en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos rêves en lisant le Coran en arabe"
                description="Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Être piqué par un scorpion */}
              {/* ============================================ */}
              <section id="pique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;être piqué par un scorpion en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La piqûre de scorpion dans un rêve constitue l&apos;un des
                  scénarios les plus marquants pour le rêveur. Elle traduit
                  une atteinte directe, une blessure qui dépasse le stade de
                  la simple menace pour devenir une réalité douloureuse. Ce
                  rêve mérite une attention particulière car il porte un
                  message urgent de la part de la conscience spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon les interprètes classiques, la piqûre de scorpion
                  représente des paroles blessantes qui atteignent leur cible.
                  Il peut s&apos;agir d&apos;une calomnie qui cause un tort
                  réel, d&apos;une trahison qui se concrétise ou d&apos;une
                  perte financière causée par la malhonnêteté d&apos;un
                  proche. L&apos;endroit de la piqûre apporte des précisions
                  supplémentaires.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Piqûre à la main
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Une piqûre à la main peut indiquer une perte
                        financière, un vol ou un détournement d&apos;argent
                        par un proche. La main étant le symbole du travail et
                        de la subsistance, cette piqûre touche directement
                        les moyens de vie du rêveur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Piqûre au pied
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le pied symbolise le chemin de vie et la direction
                        empruntée. Être piqué au pied peut annoncer un
                        obstacle sur le parcours du rêveur, un piège tendu
                        sur sa route ou une embûche professionnelle préparée
                        par un concurrent déloyal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Piqûre au dos
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le dos représente le soutien et la confiance. Une
                        piqûre au dos est le symbole le plus direct de la
                        trahison : quelqu&apos;un en qui le rêveur avait
                        confiance agit dans son dos, par la médisance ou la
                        machination secrète.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Piqûre sans douleur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si la piqûre ne provoque aucune douleur dans le rêve,
                        cela peut signifier que le rêveur dispose d&apos;une
                        protection spirituelle suffisante pour amortir les
                        attaques de ses ennemis. C&apos;est un signe
                        encourageant qui invite à maintenir sa pratique
                        religieuse.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La réaction du rêveur après la piqûre est tout aussi
                  significative. S&apos;il parvient à soigner la blessure ou
                  à extraire le venin, cela annonce une guérison spirituelle
                  et la capacité à surmonter l&apos;épreuve. Ce symbolisme
                  rejoint celui que l&apos;on retrouve dans{" "}
                  <Link
                    href="/rever-asticot-ver-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le rêve d&apos;asticots et de vers en islam
                  </Link>
                  , où la transformation et la purification sont des thèmes
                  centraux.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Tuer un scorpion */}
              {/* ============================================ */}
              <section id="tuer" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de tuer un scorpion en islam : victoire et délivrance
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Tuer un scorpion dans un rêve est l&apos;une des rares
                  interprétations unanimement positives liées à cette
                  créature. Les savants y voient un signe de force, de
                  courage et de victoire sur les forces qui cherchent à nuire
                  au rêveur. C&apos;est un rêve porteur d&apos;espoir et de
                  réconfort.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin enseigne que tuer un scorpion peut symboliser une
                  perte d&apos;argent suivie d&apos;un rétablissement
                  complet. L&apos;épreuve est temporaire et la situation
                  finira par tourner en faveur du rêveur. An-Nabulsi y voit
                  plutôt la neutralisation définitive d&apos;un ennemi ou la
                  fin d&apos;une période de médisance qui pesait sur la vie
                  du rêveur.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Écraser un scorpion :</strong> victoire rapide
                      et décisive sur un adversaire, résolution d&apos;un
                      conflit par l&apos;action directe
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tuer un scorpion avec une chaussure :</strong>{" "}
                      utiliser des moyens simples et accessibles pour
                      neutraliser une menace, pragmatisme face au danger
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tuer plusieurs scorpions :</strong>{" "}
                      purification complète de l&apos;environnement, fin
                      d&apos;une période de troubles et de complots
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Difficulté à tuer un scorpion :</strong>{" "}
                      l&apos;ennemi est coriace, la lutte sera longue mais
                      la persévérance finira par payer
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce rêve encourage le rêveur à ne pas se laisser intimider
                  par les manoeuvres de ses adversaires. La capacité à tuer
                  le scorpion dans le rêve reflète une force intérieure réelle,
                  une détermination que le croyant peut cultiver par la prière,
                  la confiance en Allah et la patience face aux épreuves. Le
                  Prophète ﷺ a d&apos;ailleurs enseigné que la patience (
                  <em>sabr</em>) est une lumière qui éclaire le chemin du
                  croyant dans les moments difficiles.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Scorpion noir, jaune, etc. */}
              {/* ============================================ */}
              <section id="couleurs" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la couleur : scorpion noir, jaune,
                  blanc et rouge
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La couleur du scorpion dans le rêve apporte une dimension
                  supplémentaire à l&apos;interprétation. Chaque teinte
                  modifie la nature de la menace et oriente le rêveur vers
                  un type de vigilance particulier. Les savants accordent une
                  importance notable à ce détail visuel.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Scorpion noir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le noir symbolise l&apos;obscurité et le secret. Un
                      scorpion noir représente un ennemi particulièrement
                      sournois et dissimulé, qui agit dans l&apos;ombre avec
                      une intention profondément malveillante. Il peut
                      désigner une personne proche qui cache ses véritables
                      sentiments et prépare un coup bas. La prudence est de
                      rigueur dans toutes les relations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Scorpion jaune
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le jaune est associé à la jalousie, l&apos;envie et
                      parfois la maladie dans la tradition onirique islamique.
                      Un scorpion jaune peut signaler une personne envieuse
                      dans l&apos;entourage professionnel ou familial, des
                      difficultés financières provoquées par la mauvaise foi
                      d&apos;autrui, ou un affaiblissement physique lié au
                      stress causé par un ennemi.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Scorpion blanc
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le blanc atténue généralement la connotation négative
                      en islam. Un scorpion blanc peut représenter une
                      tromperie déguisée en bonté, une personne qui utilise
                      la religion ou la bienveillance apparente pour
                      dissimuler ses intentions réelles. C&apos;est un
                      avertissement contre la naïveté et l&apos;excès de
                      confiance.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Scorpion rouge
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rouge évoque la passion, la colère et le sang. Un
                      scorpion rouge dans un rêve peut annoncer un conflit
                      violent, une dispute intense ou une confrontation
                      directe avec un ennemi. Ce rêve invite à maîtriser sa
                      colère et à ne pas répondre aux provocations par la
                      violence, conformément à l&apos;enseignement prophétique.
                    </p>
                  </div>
                </div>

                {/* Tableau couleurs */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Couleur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Symbolisme
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Type de menace
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Noir
                        </td>
                        <td className="py-3 pr-4">
                          Obscurité, dissimulation
                        </td>
                        <td className="py-3">
                          Ennemi caché, trahison profonde
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Jaune
                        </td>
                        <td className="py-3 pr-4">
                          Jalousie, envie, maladie
                        </td>
                        <td className="py-3">
                          Rivalité, perte financière
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Blanc
                        </td>
                        <td className="py-3 pr-4">
                          Fausse pureté, illusion
                        </td>
                        <td className="py-3">
                          Hypocrisie déguisée en bonté
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rouge
                        </td>
                        <td className="py-3 pr-4">
                          Colère, passion, sang
                        </td>
                        <td className="py-3">
                          Conflit ouvert, confrontation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Scorpion dans la maison */}
              {/* ============================================ */}
              <section id="maison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;un scorpion dans la maison en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La maison dans les rêves islamiques symbolise le foyer, la
                  sphère intime et la vie privée du rêveur. La présence
                  d&apos;un scorpion dans cet espace sacré porte un message
                  particulièrement fort : le danger se trouve au plus près,
                  dans l&apos;environnement familier et supposé protecteur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin considère qu&apos;un scorpion dans la maison peut
                  représenter un membre de la famille ou un proche qui nourrit
                  des intentions hostiles. An-Nabulsi précise que
                  l&apos;emplacement exact du scorpion dans la maison affine
                  le message du rêve.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Scorpion dans la chambre
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un scorpion dans la chambre à coucher touche à
                        l&apos;intimité conjugale. Il peut signaler des
                        tensions dans le couple, une trahison sentimentale ou
                        l&apos;ingérence d&apos;une tierce personne dans la
                        relation. Ce rêve appelle au dialogue sincère entre
                        les époux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Scorpion dans la cuisine
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La cuisine est le lieu de la subsistance. Un scorpion
                        dans cet espace peut évoquer une menace sur les
                        ressources du foyer, une dépense imprévue causée par
                        la malveillance ou un risque lié à la nourriture
                        spirituelle, c&apos;est-à-dire les influences
                        intellectuelles et religieuses que l&apos;on
                        consomme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Scorpion à l&apos;entrée
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un scorpion à l&apos;entrée de la maison représente
                        un danger extérieur qui tente de pénétrer dans la
                        sphère privée. Il peut s&apos;agir d&apos;un
                        visiteur malintentionné, d&apos;une influence
                        négative de l&apos;extérieur ou d&apos;un voisin
                        qui cherche à nuire au foyer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Scorpion dans les vêtements
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Trouver un scorpion dans ses vêtements en rêve
                        représente une atteinte à la réputation personnelle
                        ou à l&apos;honneur. Ce rêve alerte sur des propos
                        malveillants qui touchent directement l&apos;image
                        du rêveur et invite à la vigilance quant aux
                        informations partagées avec l&apos;entourage.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Quel que soit l&apos;emplacement du scorpion dans la maison,
                  ce rêve invite à purifier son foyer par la récitation du
                  Coran, notamment la sourate Al-Baqara dont le Prophète ﷺ a
                  dit que le diable fuit la maison dans laquelle elle est
                  récitée. L&apos;assainissement de l&apos;espace domestique
                  passe aussi par le choix des personnes que l&apos;on
                  accueille chez soi, comme le souligne également{" "}
                  <Link
                    href="/rever-poux-islam-protection"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    l&apos;interprétation du rêve de poux en islam
                  </Link>
                  .
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/motifs-geometriques-islam-croissant-etoile.jpg"
                    alt="Motifs geometriques islamiques avec croissant et etoile, illustrant la protection spirituelle contre le scorpion en reve"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon le rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de scorpion ne porte pas la même signification
                  selon la personne qui le fait. Les grands interprètes
                  tiennent compte de la situation personnelle, du statut
                  social et de l&apos;état spirituel du rêveur pour affiner
                  leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le scorpion peut symboliser un prétendant aux
                      intentions malhonnêtes, un homme qui cache sa
                      véritable nature derrière de belles paroles. Ce rêve
                      invite à la prudence dans les nouvelles relations
                      sentimentales et à se renseigner sur les personnes qui
                      s&apos;approchent avec insistance. Il peut aussi
                      représenter une amie jalouse qui sabote les projets
                      matrimoniaux.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le scorpion dans la maison peut refléter des tensions
                      avec la belle-famille, des propos malveillants qui
                      fragilisent le couple ou l&apos;ingérence
                      d&apos;une personne extérieure dans la vie conjugale.
                      Ce rêve encourage le dialogue avec l&apos;époux, la
                      mise en place de limites claires avec l&apos;entourage
                      et le renforcement de la protection du foyer par les
                      invocations.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut traduire la crainte naturelle pour la
                      santé du bébé et la peur du mauvais oeil. Il invite à
                      multiplier les invocations de protection, notamment
                      les sourates protectrices, et à s&apos;éloigner des
                      personnes dont l&apos;envie est perceptible. Tuer le
                      scorpion dans le rêve est un signe rassurant de force
                      et de résilience maternelle.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le scorpion peut évoquer un concurrent déloyal au
                      travail, un associé qui prépare une trahison ou un
                      faux ami qui profite de la confiance accordée. Ce rêve
                      invite à la discrétion dans les affaires, à garder ses
                      projets pour soi et à vérifier la fiabilité de ses
                      partenaires avant de s&apos;engager dans de nouvelles
                      collaborations.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Conseils et protection */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils spirituels et protection après un rêve de scorpion
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rêve de scorpion, aussi inquiétant soit-il, ne doit pas
                  plonger le rêveur dans la peur ou le désespoir. Le Prophète
                  Muhammad ﷺ a enseigné des attitudes précises face aux rêves
                  désagréables, qui constituent un bouclier spirituel efficace
                  et accessible à tout croyant.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chercher refuge auprès d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Au réveil, prononcer{" "}
                        <em>A&apos;udhu billahi min ash-shaytani r-rajim</em>{" "}
                        (je cherche refuge auprès d&apos;Allah contre Satan
                        le lapidé). Cracher légèrement trois fois à gauche
                        sans produire de salive, conformément à la sunna.
                        Ces gestes simples dissipent l&apos;effet négatif du
                        rêve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter les sourates protectrices
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lire les sourates Al-Falaq et An-Nas (les deux
                        protectrices) ainsi que le verset du Trône (Ayat
                        al-Kursi). Ces récitations renforcent la protection
                        spirituelle du croyant et éloignent les influences
                        néfastes. Les pratiquer matin et soir constitue un
                        rempart quotidien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas raconter le rêve à tout le monde
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a recommandé de ne pas partager un
                        mauvais rêve avec n&apos;importe qui. Ne le
                        raconter qu&apos;à une personne de confiance, un
                        savant compétent ou un imam, capable d&apos;en
                        donner une interprétation juste et constructive.
                        Divulguer un mauvais rêve peut lui donner une force
                        qu&apos;il n&apos;avait pas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Renforcer la vigilance relationnelle
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réévaluer ses fréquentations avec discernement.
                        Observer les comportements de l&apos;entourage sans
                        tomber dans la paranoïa. Le rêve de scorpion est un
                        appel à la prudence, pas à la suspicion généralisée.
                        Garder la confiance en Allah tout en prenant les
                        précautions nécessaires.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau conseils */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action recommandée
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bénéfice spirituel
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Moment
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Récitation des sourates protectrices
                        </td>
                        <td className="py-3 pr-4">
                          Protection contre le mal visible et invisible
                        </td>
                        <td className="py-3">Matin et soir</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Invocations du matin et du soir
                        </td>
                        <td className="py-3 pr-4">
                          Bouclier spirituel quotidien
                        </td>
                        <td className="py-3">Quotidien</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Récitation de sourate Al-Baqara
                        </td>
                        <td className="py-3 pr-4">
                          Purifie le foyer, éloigne le mal
                        </td>
                        <td className="py-3">
                          Tous les 3 jours
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Aumône discrète (sadaqa)
                        </td>
                        <td className="py-3 pr-4">
                          Éloigne le malheur, attire la bénédiction
                        </td>
                        <td className="py-3">Régulièrement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est essentiel de rappeler qu&apos;aucune décision
                  importante ne devrait reposer uniquement sur un rêve. Les
                  savants insistent sur la nécessité de combiner
                  l&apos;interprétation des rêves avec la raison, la
                  consultation (<em>shura</em>) et la prière de guidance (
                  <em>salat al-istikhara</em>). Le rêve est un éclairage
                  parmi d&apos;autres, pas un verdict définitif.
                </p>
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
                    href="/reve-arachnide-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;araignée en islam
                  </Link>
                  <Link
                    href="/rever-asticot-ver-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;asticots en islam
                  </Link>
                  <Link
                    href="/rever-poux-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de poux en islam
                  </Link>
                  <Link
                    href="/rever-crocodile-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de crocodile en islam
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
