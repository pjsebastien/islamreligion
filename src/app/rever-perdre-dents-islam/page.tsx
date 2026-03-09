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
    "Rêver de perdre ses dents en islam : interprétation et messages spirituels",
  description:
    "Découvrez la signification du rêve de perdre ses dents en islam : interprétations, messages et conseils spirituels pour mieux comprendre.",
  openGraph: {
    title:
      "Rêver de perdre ses dents en islam : interprétation et messages spirituels",
    description:
      "Découvrez la signification du rêve de perdre ses dents en islam : interprétations, messages et conseils spirituels pour mieux comprendre.",
    url: "https://www.islamreligion.fr/rever-perdre-dents-islam",
    images: [{ url: "/images/coran-ouvert-nature-coucher-soleil-islam.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-perdre-dents-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique des dents en islam" },
  { id: "variantes", label: "Variantes et scénarios" },
  { id: "une-par-une-ou-toutes", label: "Une par une ou toutes d\u2019un coup" },
  { id: "dents-cassees", label: "Dents qui se cassent" },
  { id: "sang-ou-sans-sang", label: "Avec ou sans sang" },
  { id: "sans-douleur", label: "Dents qui tombent sans douleur" },
  { id: "ramasser-dents", label: "Ramasser ses dents" },
  { id: "dents-repoussent", label: "Dents qui repoussent" },
  { id: "diversite", label: "Diversité culturelle" },
  { id: "conseils", label: "Conseils pratiques" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de perdre ses dents en islam ?",
    answer:
      "En islam, rêver de perdre ses dents est riche en symbolisme. Les dents représentent souvent les membres de la famille ou les proches, avec chaque dent assignée à une relation précise. Ce rêve peut annoncer un changement, un avertissement ou le signe d'une période de renouvellement spirituel. Le contexte (douleur, nombre de dents) modifie le message.",
  },
  {
    question: "Rêver de perdre une seule dent en islam : que signifie-t-il ?",
    answer:
      "Selon les enseignements classiques d'Ibn Sirin, voir une seule dent tomber est fréquemment lié à la disparition ou à l'éloignement d'un membre du foyer. Si la dent est remise à la main, cela peut signaler la naissance ou l'arrivée d'un nouvel enfant.",
  },
  {
    question: "Rêver que toutes ses dents tombent en islam : quelle signification ?",
    answer:
      "Cette vision donne lieu à une interprétation de longévité exceptionnelle. Le rêveur pourrait survivre à ses pairs ou traverser de grands bouleversements générationnels. Selon la tradition, cela peut aussi signifier un héritage ou un passage d'étape important dans la vie.",
  },
  {
    question: "Que dit Ibn Sirin sur le rêve de dents qui tombent ?",
    answer:
      "Pour Ibn Sirin, les dents supérieures reflètent la parenté paternelle (parents, oncles), et les dents inférieures font écho à la lignée maternelle et la descendance. Les incisives renvoient aux parents, les canines aux frères et protecteurs, les molaires aux aïeux.",
  },
  {
    question: "Rêver de dents qui tombent avec douleur en islam ?",
    answer:
      "La douleur pendant le rêve annonce souvent une épreuve morale ou physique à venir, une souffrance liée à un être cher. L'absence de douleur évoque plutôt des actes sans conséquence réelle ou un éloignement émotionnel naturel.",
  },
  {
    question: "Rêver de dents qui repoussent en islam : est-ce positif ?",
    answer:
      "Oui, cette image rare annonce le début d'une nouvelle étape dans la vie. C'est un message spirituel positif tourné vers la transformation et la purification. Ce rêve est considéré comme un signe de renouveau et de bénédiction.",
  },
  {
    question: "Que faire après un rêve de perte de dents en islam ?",
    answer:
      "La tradition recommande de renforcer le lien avec Allah par la prière et les invocations, d'exprimer sa gratitude pour ses proches, de multiplier les actes de charité (sadaqa) et de tenir un journal des rêves pour repérer les récurrences.",
  },
  {
    question: "Rêver de dents cassées en islam : quelle signification ?",
    answer:
      "Des dents cassées ou effritées dans un rêve symbolisent la fragilité et une remise en question des valeurs fondatrices. Ce rêve invite à la réflexion et à la protection du lien familial, tout en renforçant la foi et la confiance en Allah.",
  },
  {
    question: "Rêver que ses dents se cassent en islam : que faut-il comprendre ?",
    answer:
      "Selon An-Nabulsi, rêver que ses dents se cassent ou s\u2019effritent peut indiquer une perte de force intérieure, un choc émotionnel ou une atteinte à la réputation. Ce rêve invite le croyant à consolider ses fondations spirituelles et à se tourner vers Allah pour retrouver sa solidité. Si les dents se brisent sans tomber, cela peut aussi signaler des tensions familiales qui restent contenues.",
  },
  {
    question: "Rêver de dents qui tombent avec du sang en islam : quelle signification ?",
    answer:
      "La présence de sang lors de la chute des dents dans un rêve accentue la dimension de souffrance et d\u2019épreuve. Selon Ibn Sirin, le sang symbolise la douleur émotionnelle profonde et peut annoncer une séparation douloureuse ou un conflit familial marquant. Ce rêve appelle à la patience (sabr), à la prière et aux invocations de protection.",
  },
  {
    question: "Rêver de dents qui tombent sans douleur en islam : est-ce positif ?",
    answer:
      "Oui, selon plusieurs savants dont Ibn Sirin, si les dents tombent sans douleur et sans sang, cela peut représenter un soulagement futur ou un apaisement. La chute indolore suggère que les changements à venir, bien que déstabilisants, se dérouleront sans grande souffrance. C\u2019est parfois interprété comme un éloignement naturel et sans heurt d\u2019une personne ou d\u2019une situation.",
  },
];

export default function ReverPerdreDents() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-perdre-dents-islam/#article",
        headline:
          "Rêver de perdre ses dents en islam : interprétation et messages spirituels",
        description:
          "Découvrez la signification du rêve de perdre ses dents en islam : interprétations, messages et conseils spirituels.",
        image:
          "/images/coran-ouvert-nature-coucher-soleil-islam.jpg",
        datePublished: "2025-08-28",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-perdre-dents-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-perdre-dents-islam/#breadcrumb",
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
            name: "Rêver de perdre ses dents",
            item: "https://www.islamreligion.fr/rever-perdre-dents-islam",
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
          title="Rêver de perdre ses dents en islam : interprétation et messages spirituels"
          subtitle="Signification du rêve de perte de dents selon la tradition islamique, Ibn Sirin et les textes sacrés."
          imageSrc="/images/coran-ouvert-nature-coucher-soleil-islam.jpg"
          imageAlt="Rêver de perdre ses dents en islam, interprétation et messages spirituels"
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
                <span className="text-foreground">Rêver de perdre ses dents</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le rêve de perdre ses dents en islam intrigue et parfois
                  inquiète. Riche en symbolisme, il incarne des messages
                  spirituels profonds sur la famille, la destinée et la
                  vigilance. Les dents représentent souvent les membres de la
                  famille, avec chaque dent assignée à une relation précise
                  selon Ibn Sirin. Le contexte du rêve (douleur, nombre de
                  dents) modifie le message spirituel associé.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique des dents */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique des dents dans les rêves : liens familiaux et
                  interprétations en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans l&apos;islam, chaque détail d&apos;un rêve, y compris
                  la chute de dents, porte une signification spécifique liée au
                  vécu du rêveur et à l&apos;empreinte de la tradition
                  prophétique. Depuis des siècles, l&apos;
                  <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">interprétation des
                  rêves en islam</Link>
                  {" "}s&apos;appuie sur une grille où les dents incarnent la
                  sphère familiale et l&apos;équilibre spirituel du croyant.
                  Ainsi, perdre une dent n&apos;est jamais anodin : ce geste
                  évoque souvent le rapport à ses proches, à la santé ou à la
                  longévité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce symbolisme est hérité des grands recueils comme celui
                  d&apos;Ibn Sirin, où les dents supérieures reflètent la
                  parenté paternelle (parents, oncles), et les dents
                  inférieures font écho à la lignée maternelle et la
                  descendance. Comprendre ces correspondances aide à décrypter
                  le message onirique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Incisives :</strong> elles renvoient aux parents
                      ou à des figures parentales proches.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Canines :</strong> elles symbolisent les frères,
                      les protecteurs ou les figures de force au sein de la
                      famille.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Molaires :</strong> elles représentent les aïeux,
                      les ancêtres ou les membres âgés du cercle familial.
                    </span>
                  </li>
                </ul>

                {/* Tableau type de dent */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de dent
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Membre de la famille associé
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Interprétation spécifique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Incisive
                        </td>
                        <td className="py-3 pr-4">Parent proche</td>
                        <td className="py-3">
                          Séparation, souci pour la famille
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Canine
                        </td>
                        <td className="py-3 pr-4">Frère / protecteur</td>
                        <td className="py-3">
                          Bouleversement, conflit ou protection accrue
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Molaire
                        </td>
                        <td className="py-3 pr-4">Anciens / aïeux</td>
                        <td className="py-3">
                          Longévité, changement générationnel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La symbolique des dents s&apos;étend aussi à la vitalité, à
                  la fortune et à la réussite sociale. La perte peut alors
                  correspondre à l&apos;annonce d&apos;une transition
                  personnelle importante ou d&apos;une invitation à
                  l&apos;évolution spirituelle, un peu comme{" "}
                  <Link href="/rever-mort-islam-messages" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver d&apos;un mort en islam</Link>
                  {" "}peut signaler un passage vers une nouvelle étape de vie.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/femme-musulmane-hijab-lecture-coran-islam.jpg"
                    alt="Symbolique des dents dans les rêves en islam, liens familiaux et interprétation"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Variantes et scénarios */}
              {/* ============================================ */}
              <section id="variantes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre les variantes des rêves de perte dentaire :
                  témoignages et cas pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La richesse de l&apos;interprétation des rêves dans
                  l&apos;islam se révèle à travers différents scénarios vécus.
                  Chaque situation, chaque émotion suscitée par la perte
                  d&apos;une dent apporte sa propre nuance, à la fois guidée
                  par les textes et personnalisée selon l&apos;expérience du
                  rêveur.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Perte d&apos;une seule dent
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Fréquemment liée à la disparition ou à
                        l&apos;éloignement d&apos;un membre du foyer. Si la
                        dent est remise à la main, cela peut signaler la
                        naissance ou l&apos;arrivée d&apos;un nouvel enfant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Toutes les dents qui tombent
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Cette vision donne lieu à une interprétation de
                        longévité exceptionnelle. Le rêveur pourrait survivre
                        à ses pairs ou traverser de grands bouleversements
                        générationnels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Sensation de douleur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La douleur annonce souvent une épreuve morale ou
                        physique à venir, tandis que l&apos;absence de douleur
                        évoque des actes sans conséquence réelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Dents qui repoussent
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Cette image rare annonce le début d&apos;une nouvelle
                        étape dans la vie, un message spirituel positif tourné
                        vers la transformation et{" "}
                        <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la purification par le repentir sincère</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau scénarios */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Explication traditionnelle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Message spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chute de toutes les dents
                        </td>
                        <td className="py-3 pr-4">
                          Longévité, héritage, passage d&apos;étape
                        </td>
                        <td className="py-3">
                          Préparer un renouveau intérieur
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dents cassées ou effritées
                        </td>
                        <td className="py-3 pr-4">
                          Fragilité, remise en question
                        </td>
                        <td className="py-3">
                          Réflexion et protection du lien familial
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dents qui bougent
                        </td>
                        <td className="py-3 pr-4">
                          Transition difficile, inquiétude
                        </td>
                        <td className="py-3">
                          Renforcer la foi et la confiance en Allah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/islam-science-savoir-connaissance-livre.jpg"
                    alt="Variantes des rêves de perte dentaire en islam, témoignages et interprétations"
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

              <ArticleCTA
                variant="formation"
                title="Comprenez vos rêves en lisant le Coran en arabe"
                description="Apprenez à lire l'arabe et à comprendre le Coran grâce à des formations en ligne adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION : Dents une par une vs toutes */}
              {/* ============================================ */}
              <section id="une-par-une-ou-toutes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dents qui tombent une par une ou toutes d&apos;un coup : des messages différents
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La manière dont les dents tombent dans le rêve modifie profondément
                  l&apos;interprétation. Ibn Sirin distinguait clairement ces deux
                  scénarios, car ils ne portent pas le même message spirituel pour le
                  rêveur.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dents qui tombent une par une
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lorsque les dents chutent progressivement, cela symbolise
                      des épreuves successives étalées dans le temps. Selon Ibn Sirin,
                      chaque dent perdue correspond à un événement précis touchant
                      un membre de la famille. Ce rêve invite à la vigilance et à
                      renforcer les liens avec ses proches, car les changements
                      s&apos;annoncent graduellement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Toutes les dents tombent d&apos;un coup
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Voir toutes ses dents tomber simultanément porte une
                      interprétation plus radicale. Selon la tradition, cela peut
                      annoncer une longévité exceptionnelle — le rêveur survivant à
                      sa génération — ou un bouleversement majeur dans la vie
                      familiale. An-Nabulsi y voyait aussi le signe d&apos;un
                      héritage ou d&apos;un passage d&apos;étape décisif.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Dans les deux cas, la tradition encourage le croyant à ne pas
                  céder à la peur, mais à chercher la signification profonde en
                  lien avec sa situation personnelle. Une{" "}
                  <Link href="/rever-perdre-cheveux-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">perte de cheveux en rêve</Link>
                  {" "}partage une symbolique similaire de transformation et de
                  détachement progressif.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Dents qui se cassent */}
              {/* ============================================ */}
              <section id="dents-cassees" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver que ses dents se cassent en islam : signification spécifique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le rêve de dents qui se cassent diffère de celui où elles tombent.
                  La cassure évoque une rupture brutale, un choc inattendu qui
                  fragilise les fondations du rêveur. Selon An-Nabulsi, les dents
                  brisées dans un rêve peuvent symboliser&nbsp;:
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une perte de force intérieure :</strong> le rêveur
                      traverse une période où sa résistance morale est mise à
                      l&apos;épreuve.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un choc émotionnel :</strong> une nouvelle
                      déstabilisante ou une trahison qui ébranle la confiance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une atteinte à la réputation :</strong> la dent
                      cassée reflète parfois l&apos;image que les autres ont du
                      rêveur, une image qui se fissure.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si les dents se brisent sans tomber complètement, Ibn Sirin
                  considérait que les tensions restent contenues et qu&apos;une
                  réconciliation demeure possible. Ce rêve appelle à la patience
                  et à la réparation des liens endommagés, un peu comme un{" "}
                  <Link href="/rever-accident-voiture-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêve d&apos;accident de voiture</Link>
                  {" "}qui signale une épreuve soudaine sans annoncer
                  nécessairement le pire.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Avec ou sans sang */}
              {/* ============================================ */}
              <section id="sang-ou-sans-sang" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dents qui tombent avec du sang ou sans sang : deux interprétations distinctes
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La présence ou l&apos;absence de sang dans le rêve de perte de
                  dents constitue un élément déterminant pour les interprètes
                  classiques. Ibn Sirin et An-Nabulsi accordaient une attention
                  particulière à ce détail.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Interprétation selon Ibn Sirin
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil spirituel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dents qui tombent avec du sang
                        </td>
                        <td className="py-3 pr-4">
                          Séparation douloureuse, conflit familial profond,
                          épreuve marquante avec souffrance émotionnelle
                        </td>
                        <td className="py-3">
                          Patience (sabr), invocations de protection, sadaqa
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dents qui tombent sans sang
                        </td>
                        <td className="py-3 pr-4">
                          Changement naturel, transition sans violence,
                          éloignement progressif d&apos;un proche
                        </td>
                        <td className="py-3">
                          Acceptation sereine, confiance en la volonté d&apos;Allah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sang accentue la dimension de souffrance et d&apos;urgence.
                  Lorsqu&apos;il accompagne la chute, le rêve appelle à une réaction
                  immédiate : se rapprocher de ses proches, multiplier les
                  invocations et donner en charité. Sans sang, le message est plus
                  doux et suggère une évolution naturelle de la situation familiale
                  ou personnelle du rêveur. Cette distinction entre perte difficile
                  et perte sereine rejoint la symbolique de{" "}
                  <Link href="/rever-argent-or-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver d&apos;argent ou d&apos;or en islam</Link>
                  , où le contexte transforme le sens du rêve.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Sans douleur */}
              {/* ============================================ */}
              <section id="sans-douleur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de dents qui tombent sans douleur : une interprétation apaisante
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;absence de douleur lors de la chute des dents dans un rêve
                  est un signe que les interprètes musulmans considèrent souvent
                  avec nuance. Selon Ibn Sirin, lorsque les dents tombent sans
                  douleur et sans sang, cela peut annoncer un soulagement futur ou
                  un apaisement après une période d&apos;inquiétude.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    Ce que disent les savants
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    Pour An-Nabulsi, la chute indolore de dents suggère que les
                    changements à venir, bien que déstabilisants en apparence, se
                    produiront sans grande souffrance. C&apos;est parfois le signe
                    d&apos;un éloignement naturel d&apos;une personne ou d&apos;une
                    situation qui ne correspond plus au chemin du rêveur. Ibn Sirin
                    ajoutait que ce rêve peut aussi refléter des actes accomplis
                    sans valeur durable, invitant le croyant à revoir ses priorités.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce type de rêve ne doit pas alarmer outre mesure. Il invite
                  plutôt à l&apos;introspection et à l&apos;acceptation des cycles
                  de la vie. Le croyant peut y voir une occasion de se recentrer
                  sur ce qui compte véritablement et de renforcer sa relation avec
                  Allah.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Ramasser ses dents */}
              {/* ============================================ */}
              <section id="ramasser-dents" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ramasser ses dents dans un rêve en islam : que signifie ce geste ?
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Se voir ramasser ses dents après leur chute dans un rêve porte une
                  symbolique particulière dans la tradition islamique. Ce geste
                  n&apos;est pas anodin : il traduit une tentative de retenir ce qui
                  échappe ou de préserver un lien qui se défait.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ramasser ses dents dans la main :</strong> selon
                      Ibn Sirin, cela peut indiquer une difficulté à avoir des
                      enfants ou la fin d&apos;un cycle de vie. C&apos;est aussi
                      parfois interprété comme la volonté de garder le contrôle
                      face à un changement inévitable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ramasser et remettre les dents :</strong> ce geste
                      symbolise la tentative de réconciliation ou de réparation
                      d&apos;une relation abîmée. C&apos;est un appel à agir
                      concrètement pour restaurer l&apos;harmonie familiale.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les dents tombent au sol sans qu&apos;on les ramasse :</strong>{" "}
                      An-Nabulsi y voyait un signe de résignation ou
                      d&apos;acceptation face au destin (qadar). Le rêveur accepte
                      la perte et s&apos;en remet à la volonté d&apos;Allah.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le fait de ramasser ou non ses dents révèle l&apos;attitude du
                  rêveur face aux épreuves : résistance, acceptation ou volonté de
                  réparation. Cette symbolique de perte et de récupération se
                  retrouve dans d&apos;autres rêves comme{" "}
                  <Link href="/rever-bague-bijoux-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêver de perdre une bague ou un bijou en islam</Link>
                  , où l&apos;objet perdu représente un lien précieux.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION : Dents qui repoussent */}
              {/* ============================================ */}
              <section id="dents-repoussent" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de dents qui repoussent en islam : un signe de renouveau
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les rêves liés aux dents, celui où elles repoussent après
                  être tombées est considéré comme l&apos;un des plus positifs dans
                  la tradition islamique. Ce rêve rare porte un message
                  d&apos;espoir et de transformation.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Renouveau spirituel
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Selon Ibn Sirin, des dents qui repoussent symbolisent la
                      capacité du croyant à surmonter les épreuves et à renaître
                      spirituellement. C&apos;est un signe que les difficultés
                      traversées portent leurs fruits et que de nouvelles
                      bénédictions se préparent.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Amélioration de la situation
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      An-Nabulsi y voyait un bon présage annonçant une amélioration
                      notable dans la vie personnelle, professionnelle ou
                      financière du rêveur. Les ennuis passés s&apos;éloignent et
                      laissent place à une période de tranquillité et
                      d&apos;opportunités nouvelles.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce rêve encourage le croyant à garder confiance même après les
                  épreuves les plus rudes. La repousse des dents incarne la
                  promesse qu&apos;après chaque difficulté vient la facilité, un
                  principe fondamental rappelé dans le Coran (sourate Al-Inshirah,
                  94:5-6). C&apos;est un appel à la gratitude et au renforcement
                  de la foi.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Diversité culturelle */}
              {/* ============================================ */}
              <section id="diversite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La diversité culturelle des interprétations dans le monde
                  musulman
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;universalité du rêve de dents tombantes ne signifie
                  pas uniformité des lectures. Les significations attribuées à
                  ces songes diffèrent selon la région, le contexte familial ou
                  la tradition éducative.
                </p>

                {/* Tableau régions */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Région
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Caractéristique principale
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Impact sur l&apos;interprétation
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Maghreb
                        </td>
                        <td className="py-3 pr-4">
                          Famille, deuil, responsabilités
                        </td>
                        <td className="py-3">
                          Rappel de l&apos;ancrage communautaire
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Moyen-Orient
                        </td>
                        <td className="py-3 pr-4">
                          Séparation, rupture
                        </td>
                        <td className="py-3">
                          Exil ou distance affective
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Afrique subsaharienne
                        </td>
                        <td className="py-3 pr-4">
                          Ancêtres, mémoire
                        </td>
                        <td className="py-3">
                          Héritage et filiation renforcés
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Europe
                        </td>
                        <td className="py-3 pr-4">
                          Mélange tradition et psychologie
                        </td>
                        <td className="py-3">
                          Interprétation individualisée
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce brassage de lectures est aussi un atout pour le croyant
                  moderne : il peut ainsi mieux comprendre le rôle de ses
                  racines, tout en adaptant la symbolique des dents à ses
                  propres questionnements. Si le rêve s&apos;accompagne de
                  larmes, il peut être utile de consulter l&apos;article sur{" "}
                  <Link href="/pleurer-reve-islam-compassion" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les pleurs en rêve et leur dimension de compassion</Link>.
                  Les enseignants compétents
                  encouragent à s&apos;ouvrir à cette richesse, à condition
                  d&apos;enraciner chaque interprétation dans la sagesse
                  coranique et la Sunna prophétique.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de souris en islam : signification et interprétation"
                  description="Découvrez ce que symbolise la souris dans un rêve selon Ibn Sirin et la tradition islamique."
                  href="/rever-souris-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour transformer ce rêve en moteur de
                  croissance spirituelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour qu&apos;un rêve de dents tombantes devienne un levier de
                  croissance, il convient d&apos;en tirer des enseignements
                  sur-mesure. L&apos;islam encourage non seulement la recherche
                  de sens, mais aussi l&apos;effort d&apos;agir avec
                  discernement et gratitude.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Renforcer le lien avec Allah par{" "}
                      <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la prière et les
                      invocations</Link>, notamment après le Fajr ou lors de moments
                      de doute.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Exprimer sa gratitude pour ses proches en leur
                      témoignant affection ou en rétablissant le dialogue.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Multiplier les actes de charité discrète (sadaqa) afin
                      d&apos;atténuer les influences négatives du rêve.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Tenir un journal des rêves pour repérer les récurrences
                      et chercher un sens durable à travers le temps.
                    </span>
                  </li>
                </ul>

                {/* Tableau conseils */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Conseil concret
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Impact attendu
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Faire une prière spécifique après le rêve
                        </td>
                        <td className="py-3">
                          Clarté d&apos;esprit, paix intérieure, guidance divine
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Noter le rêve dans un carnet
                        </td>
                        <td className="py-3">
                          Meilleure compréhension des cycles émotionnels
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Partager le ressenti avec une personne de confiance
                        </td>
                        <td className="py-3">
                          Soutien moral et recul par rapport à l&apos;angoisse
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Multiplier les actes de bienveillance
                        </td>
                        <td className="py-3">
                          Baraka (bénédiction) et sérénité accrue
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/calligraphie-allah-islam-coeur-bois.jpg"
                    alt="Conseils pratiques après un rêve de perte de dents en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de perte de dents ne porte pas la même
                  signification selon la personne qui le fait. Les grands
                  interprètes tiennent compte de la situation personnelle du
                  rêveur pour affiner leur lecture. Si ce rêve génère de
                  l&apos;angoisse persistante, des{" "}
                  <Link href="/remede-angoisse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes islamiques contre l&apos;angoisse</Link>
                  {" "}peuvent accompagner la démarche spirituelle.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut refléter une inquiétude face à
                      l&apos;avenir, la peur de perdre ses repères ou un
                      besoin de renforcer ses liens familiaux. Il invite à la
                      patience et à la confiance en la volonté d&apos;Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La perte de dents peut symboliser des tensions au sein
                      du foyer ou l&apos;éloignement d&apos;un proche. C&apos;est
                      une invitation à renforcer le dialogue conjugal et à
                      préserver l&apos;harmonie familiale.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve est souvent lié aux angoisses naturelles de la
                      grossesse. Si les dents tombent dans la main, cela peut
                      être un signe positif annonçant la venue d&apos;un
                      enfant. Les savants recommandent la sérénité et les
                      invocations de protection.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve peut évoquer des préoccupations
                      professionnelles, la crainte de perdre sa position ou
                      un changement dans ses responsabilités familiales. Il
                      invite à revoir ses priorités et à s&apos;en remettre à
                      la guidance divine.
                    </p>
                  </div>
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
                    href="/reve-cheval-islam-bienfaits"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de cheval en islam
                  </Link>
                  <Link
                    href="/rever-perdre-cheveux-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de perdre ses cheveux
                  </Link>
                  <Link
                    href="/rever-accident-voiture-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;accident de voiture
                  </Link>
                  <Link
                    href="/rever-argent-or-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;argent ou d&apos;or
                  </Link>
                  <Link
                    href="/rever-bague-bijoux-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de bague ou bijoux
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
                  <Link
                    href="/rever-perdre-cheveux-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de perdre ses cheveux
                  </Link>
                  <Link
                    href="/rever-accident-voiture-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;accident de voiture
                  </Link>
                  <Link
                    href="/rever-argent-or-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;argent ou d&apos;or
                  </Link>
                  <Link
                    href="/rever-bague-bijoux-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de bague ou bijoux
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
