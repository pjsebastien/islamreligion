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
    "Rêver de papillon en islam : transformation, beauté et renouveau spirituel",
  description:
    "Que signifie rêver de papillon en islam ? Symbole de transformation, de légèreté et de renouveau. Interprétation selon Ibn Sirin, An-Nabulsi et la tradition musulmane.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-papillon-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique du papillon en islam" },
  { id: "savants", label: "Avis d'Ibn Sirin et An-Nabulsi" },
  { id: "couleurs", label: "Papillon coloré, blanc ou noir" },
  { id: "se-pose", label: "Papillon qui se pose sur soi" },
  { id: "attraper", label: "Attraper un papillon en rêve" },
  { id: "profil-reveur", label: "Selon le profil du rêveur" },
  { id: "conseils", label: "Conseils spirituels après ce rêve" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de papillon en islam ?",
    answer:
      "Rêver de papillon en islam symbolise la transformation spirituelle, le renouveau intérieur et la légèreté de l\u2019âme. Selon les savants musulmans, le papillon représente le passage d\u2019un état à un autre, souvent du bas vers le haut, de l\u2019épreuve vers la sérénité. Le contexte du rêve (couleur, comportement, interaction avec le rêveur) modifie profondément la lecture.",
  },
  {
    question: "Rêver de papillon blanc en islam, est-ce un bon signe ?",
    answer:
      "Oui, le papillon blanc est un signe très favorable en islam. Il représente la pureté de l\u2019intention, la sincérité du coeur et la proximité avec Allah. Les interprètes y voient un présage de paix intérieure, de réconciliation ou d\u2019élévation spirituelle. Ce rêve peut aussi annoncer une bonne nouvelle liée à la foi.",
  },
  {
    question: "Que signifie rêver d\u2019un papillon noir en islam ?",
    answer:
      "Le papillon noir en rêve invite à la prudence. Selon la tradition islamique, il peut symboliser une épreuve passagère, un deuil ou un attachement excessif au monde d\u2019ici-bas (dounia). Les savants rappellent toutefois que même ce rêve porte un message de transformation : l\u2019épreuve peut mener à un renouveau si le croyant reste patient.",
  },
  {
    question: "Rêver d\u2019un papillon qui se pose sur ma main en islam",
    answer:
      "Un papillon qui se pose sur la main du rêveur est un signe de confiance divine. Les interprètes musulmans considèrent que ce rêve annonce la réception d\u2019un bienfait, d\u2019une bonne nouvelle ou d\u2019une responsabilité honorifique. La main symbolise l\u2019action, et le papillon apporte un message de douceur et de légèreté dans les entreprises du rêveur.",
  },
  {
    question: "Que signifie rêver d\u2019attraper un papillon en islam ?",
    answer:
      "Attraper un papillon en rêve symbolise la saisie d\u2019une opportunité éphémère ou l\u2019acquisition d\u2019un bonheur fragile. Selon Ibn Sirin, ce geste peut représenter le désir de retenir une joie passagère. Si le papillon reste dans la main, c\u2019est un signe de réussite. S\u2019il s\u2019envole, le rêve invite à la patience et au détachement.",
  },
  {
    question: "Rêver de papillon coloré en islam",
    answer:
      "Un papillon aux couleurs vives dans un rêve islamique symbolise la diversité des bienfaits d\u2019Allah et l\u2019abondance spirituelle. Les couleurs multiples représentent les différentes facettes de la baraka : santé, richesse, savoir, amour. Ce rêve est généralement interprété comme un signe de joie, de créativité et d\u2019harmonie dans la vie du rêveur.",
  },
  {
    question: "Rêver de beaucoup de papillons en islam",
    answer:
      "Voir de nombreux papillons dans un rêve en islam est un symbole de bénédictions multiples et de renouveau. An-Nabulsi associe cette vision à une période de prospérité, de rencontres bénéfiques ou de transformations positives en chaîne. C\u2019est aussi un rappel de la beauté éphémère de la vie et de l\u2019importance de profiter des moments de grâce.",
  },
  {
    question: "Que faire après un rêve de papillon en islam ?",
    answer:
      "Après un rêve de papillon positif, les savants recommandent de remercier Allah, de faire une sadaqa et de méditer sur le changement que ce rêve annonce. Si le rêve était troublant, il convient de réciter les sourates protectrices (Al-Falaq et An-Nas), de cracher légèrement trois fois à gauche et de ne pas divulguer le rêve à n\u2019importe qui.",
  },
];

export default function ReverPapillonIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-papillon-islam/#article",
        headline:
          "Rêver de papillon en islam : transformation, beauté et renouveau spirituel",
        description:
          "Que signifie rêver de papillon en islam ? Symbole de transformation, de légèreté et de renouveau selon les savants musulmans.",
        image:
          "/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-papillon-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-papillon-islam/#breadcrumb",
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
            name: "Rêver de papillon",
            item: "https://www.islamreligion.fr/rever-papillon-islam",
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
          title="Rêver de papillon en islam : transformation, beauté et renouveau spirituel"
          subtitle="Interprétation du rêve de papillon selon Ibn Sirin, An-Nabulsi et la tradition islamique. Symbolisme des couleurs, variantes et conseils spirituels."
          imageSrc="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
          imageAlt="Rêver de papillon en islam, transformation spirituelle et renouveau"
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
                <span className="text-foreground">Rêver de papillon</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de papillon en islam est un symbole puissant de
                  transformation, de renouveau et de légèreté spirituelle. Le
                  papillon, qui passe de la chrysalide à la créature ailée,
                  représente le cheminement de l&apos;âme vers la lumière. Selon
                  Ibn Sirin et An-Nabulsi, sa couleur, son comportement et son
                  interaction avec le rêveur modifient profondément
                  l&apos;interprétation. Ce rêve touche à la fois la
                  spiritualité, les relations et les changements de vie.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique du papillon */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La symbolique du papillon dans la tradition islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le papillon occupe une place particulière dans
                  l&apos;imaginaire musulman. Sa métamorphose, de la chenille
                  rampante au papillon lumineux, renvoie à l&apos;un des thèmes
                  les plus profonds de l&apos;islam : la transformation de
                  l&apos;âme (nafs). Là où le{" "}
                  <Link
                    href="/rever-pigeon-oiseau-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêve de pigeon ou d&apos;oiseau
                  </Link>{" "}
                  symbolise souvent un message céleste, le papillon porte un
                  message de renaissance personnelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La métamorphose du papillon rappelle au croyant que chaque
                  épreuve est une chrysalide : un passage obligé vers un état
                  supérieur. Le Coran enseigne qu&apos;avec la difficulté vient
                  la facilité (sourate Al-Sharh, verset 6), et le papillon
                  incarne cette promesse divine. L&apos;obscurité du cocon
                  précède toujours la lumière du vol.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans la culture arabo-musulmane, le papillon est aussi lié à
                  la notion d&apos;éphémère. Sa vie courte mais intense rappelle
                  que la dounia (vie terrestre) est passagère, et que le croyant
                  doit profiter de chaque instant pour adorer Allah et
                  accomplir le bien. Le papillon ne s&apos;attarde pas, il
                  butine et poursuit son chemin, à l&apos;image du musulman qui
                  traverse cette vie en se préparant pour l&apos;au-delà.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les dimensions symboliques du papillon
                </h3>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La transformation (tahawwul)</strong> : passage
                      d&apos;un état à un autre, du péché au repentir, de
                      l&apos;ignorance au savoir, de la faiblesse à la force
                      spirituelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;âme (ruh)</strong> : dans certaines
                      traditions, le papillon symbolise l&apos;âme qui s&apos;élève
                      vers son Créateur, libérée des pesanteurs terrestres.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La beauté divine (jamal)</strong> : les motifs et
                      les couleurs du papillon témoignent de la perfection
                      créatrice d&apos;Allah, chaque aile étant un signe
                      (ayah) de Sa grandeur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La fragilité et la confiance</strong> : malgré sa
                      légèreté, le papillon affronte le vent et parcourt de
                      longues distances, symbolisant le tawakkul (confiance en
                      Allah) face aux épreuves.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La résurrection (ba&apos;th) est un autre thème que le
                  papillon évoque naturellement. La chenille qui semble mourir
                  dans son cocon pour renaître sous une forme magnifiée rappelle
                  la promesse coranique de la vie après la mort. Ce parallèle
                  donne au rêve de papillon une dimension eschatologique que les
                  savants musulmans n&apos;ont pas manqué de relever.
                </p>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mosquee-miniature-3d-islam-nuit-etoiles.jpg"
                    alt="Symbolique du papillon dans la tradition islamique et l'interprétation des rêves"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="savants" className="mt-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interprétation selon Ibn Sirin et An-Nabulsi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les deux piliers de l&apos;oniromancie islamique, Ibn Sirin
                  (VIIIe siècle) et Abd al-Ghani an-Nabulsi (XVIIe siècle),
                  ont analysé le papillon sous des angles complémentaires. Leurs
                  interprétations, ancrées dans le Coran et la sunna, continuent
                  d&apos;orienter les savants contemporains.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;avis d&apos;Ibn Sirin
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour Ibn Sirin, le papillon dans un rêve représente une
                  personne faible en apparence mais dotée d&apos;une grande
                  beauté intérieure. Il associe le papillon à la légèreté
                  du caractère et à l&apos;instabilité, mais pas toujours de
                  manière négative. Le papillon qui vole librement peut
                  symboliser un croyant détaché des biens matériels, concentré
                  sur l&apos;adoration d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin distingue aussi le papillon de jour et le papillon
                  de nuit. Le papillon diurne, aux couleurs vives, annonce une
                  joie visible et partagée. Le papillon nocturne, attiré par la
                  lumière, symbolise le croyant qui cherche la guidance divine
                  dans l&apos;obscurité de l&apos;épreuve. Ce dernier peut aussi
                  représenter une personne qui se laisse tenter par les
                  apparences trompeuses, à l&apos;image du papillon de nuit
                  attiré par la flamme.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon Ibn Sirin, voir un papillon sortir de son cocon en rêve
                  est un signe fort de renouveau. Ce songe annonce la fin
                  d&apos;une période de stagnation, le début d&apos;une
                  nouvelle phase de vie marquée par la croissance et
                  l&apos;épanouissement. Pour un malade, ce rêve peut présager
                  la guérison ; pour un endetté, la libération de ses charges.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;avis d&apos;An-Nabulsi
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi enrichit la lecture en insistant sur la dimension
                  amoureuse et relationnelle du papillon. Pour lui, cet insecte
                  symbolise fréquemment une femme douce et attirante, ou une
                  relation sentimentale empreinte de délicatesse. Voir un
                  papillon dans sa maison peut annoncer un mariage, une
                  grossesse ou l&apos;arrivée d&apos;une personne bienveillante
                  dans le foyer.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi relève aussi que le papillon peut représenter un
                  enfant ou une âme jeune. Sa fragilité rappelle la
                  vulnérabilité de l&apos;enfance, et ce rêve peut s&apos;adresser
                  aux parents, les invitant à protéger et accompagner leurs
                  enfants avec tendresse. Pour les{" "}
                  <Link
                    href="/rever-chat-islam-symbolisme"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêves de chat en islam
                  </Link>
                  , on retrouve cette même nuance de douceur et de proximité
                  avec le monde domestique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi insiste sur la couleur comme clé
                  d&apos;interprétation. Un papillon aux couleurs éclatantes
                  annonce des bienfaits variés et une vie riche en expériences
                  positives. Un papillon terne ou décoloré invite le rêveur à
                  examiner sa vie spirituelle et à raviver sa connexion avec
                  Allah par le dhikr et la prière.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Savant
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Symbole principal
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Lecture dominante
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ibn Sirin
                        </td>
                        <td className="py-3 pr-4">
                          Transformation, renouveau
                        </td>
                        <td className="py-3">
                          Détachement des biens, quête de lumière
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          An-Nabulsi
                        </td>
                        <td className="py-3 pr-4">
                          Amour, douceur, féminité
                        </td>
                        <td className="py-3">
                          Relation sentimentale, mariage, enfant
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Papillon coloré, blanc, noir */}
              {/* ============================================ */}
              <section id="couleurs" className="mt-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de papillon coloré, blanc ou noir en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La couleur du papillon dans le rêve est un indicateur
                  déterminant pour les interprètes musulmans. Chaque teinte
                  porte un message distinct, nuançant la portée du songe selon
                  la palette observée par le rêveur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le papillon blanc
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le blanc est la couleur de la pureté en islam. Un papillon
                  blanc dans un rêve symbolise la sincérité du coeur (ikhlas),
                  la paix intérieure et la proximité avec Allah. Ce rêve est
                  souvent vécu après une période de repentir ou de retour vers
                  la pratique religieuse. Il confirme au rêveur que ses efforts
                  spirituels portent leurs fruits et que son âme s&apos;allège
                  progressivement de ses fardeaux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le papillon blanc peut aussi représenter une personne honnête
                  et fiable dans l&apos;entourage du rêveur. Les savants
                  affirment que ce songe rassure sur les intentions de ceux qui
                  nous entourent et annonce des relations empreintes de
                  transparence et de bienveillance.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le papillon noir
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le noir dans les rêves islamiques n&apos;est pas
                  systématiquement négatif, mais il appelle à la vigilance. Un
                  papillon noir peut symboliser une épreuve passagère, un deuil
                  en cours ou une période d&apos;introspection nécessaire.
                  Certains interprètes y voient le rappel qu&apos;avant la
                  transformation, il faut traverser l&apos;obscurité du cocon.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi associe parfois le papillon noir à une personne
                  qui porte le deuil ou à une âme défunte qui rend visite au
                  rêveur. Ce rêve invite à multiplier les invocations pour les
                  morts (dou&apos;a) et à faire des aumônes en leur nom. Il
                  peut aussi signifier que le rêveur est attaché à quelque
                  chose qu&apos;il doit lâcher pour avancer.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le papillon coloré ou multicolore
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un papillon aux couleurs vives (bleu, jaune, orange, vert)
                  annonce une période de joie et d&apos;abondance. Chaque
                  couleur ajoute une nuance propre :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Bleu</strong> : sérénité, amour sincère et
                      spiritualité profonde. Le bleu est la couleur du ciel,
                      rapprochant le rêveur du divin.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Jaune</strong> : joie éphémère, rencontre
                      agréable mais passagère. Le jaune peut aussi avertir
                      d&apos;une jalousie ou d&apos;une envie à surveiller.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Orange</strong> : prospérité matérielle,
                      changement financier favorable. Le rêveur peut
                      s&apos;attendre à une amélioration de sa situation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Vert</strong> : bénédiction, baraka et
                      croissance spirituelle. Le vert est la couleur de
                      l&apos;islam et annonce un rêve très positif.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multicolore</strong> : diversité des bienfaits,
                      richesse d&apos;expériences et ouverture vers de
                      nouvelles opportunités qui transformeront la vie du
                      rêveur.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Couleur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Blanc
                        </td>
                        <td className="py-3 pr-4">
                          Pureté, sincérité, paix
                        </td>
                        <td className="py-3">
                          Poursuivre la voie spirituelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Noir
                        </td>
                        <td className="py-3 pr-4">
                          Epreuve, deuil, introspection
                        </td>
                        <td className="py-3">
                          Patienter et invoquer Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Bleu
                        </td>
                        <td className="py-3 pr-4">
                          Amour sincère, sérénité
                        </td>
                        <td className="py-3">
                          Cultiver les liens affectifs
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vert
                        </td>
                        <td className="py-3 pr-4">
                          Baraka, croissance spirituelle
                        </td>
                        <td className="py-3">
                          Remercier Allah et persévérer
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Multicolore
                        </td>
                        <td className="py-3 pr-4">
                          Abondance, opportunités
                        </td>
                        <td className="py-3">
                          Saisir les occasions avec gratitude
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Papillon qui se pose */}
              {/* ============================================ */}
              <section id="se-pose" className="mt-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;un papillon qui se pose sur soi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le lieu où le papillon choisit de se poser dans le rêve
                  modifie radicalement sa signification. Les interprètes
                  musulmans accordent une attention particulière à ce détail,
                  car il révèle la nature du message transmis. Ce type de
                  rêve est comparable aux{" "}
                  <Link
                    href="/rever-abeille-guepe-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêves d&apos;abeille en islam
                  </Link>
                  , où l&apos;interaction avec l&apos;insecte oriente toute
                  la lecture.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sur la main
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un papillon qui se pose sur la main annonce la réception
                  d&apos;un bienfait concret. La main droite symbolise la
                  bénédiction et le gain licite (halal), tandis que la main
                  gauche peut indiquer un don inattendu ou une aide providentielle.
                  Ce rêve rassure le rêveur sur sa capacité à recevoir et à
                  donner. Il peut annoncer une déclaration d&apos;amour, une
                  proposition de mariage ou la concrétisation d&apos;un projet
                  attendu depuis longtemps.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sur l&apos;épaule ou la tête
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le papillon qui se pose sur l&apos;épaule symbolise une
                  responsabilité légère mais honorable que le rêveur est
                  appelé à porter. Sur la tête, il annonce une élévation de
                  statut, une reconnaissance sociale ou spirituelle. Les savants
                  interprètent ce geste comme un signe de distinction divine :
                  Allah met en lumière celui qu&apos;Il choisit, et le papillon
                  est le messager de cette distinction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sur le visage ou les lèvres
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un papillon qui effleure le visage est un signe de beauté
                  intérieure reconnue par l&apos;entourage du rêveur. S&apos;il
                  se pose sur les lèvres, les interprètes y voient un présage
                  de paroles douces et bénéfiques : le rêveur sera amené à
                  prononcer des mots qui toucheront les coeurs, que ce soit par
                  le rappel d&apos;Allah, un conseil sage ou une réconciliation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Dans la maison
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un papillon qui entre dans la maison du rêveur est
                  interprété comme l&apos;arrivée d&apos;une bénédiction dans
                  le foyer. An-Nabulsi y voit un présage de mariage pour les
                  célibataires, de grossesse pour les couples qui attendent un
                  enfant, ou simplement d&apos;une période de joie et
                  d&apos;harmonie familiale. Le foyer sera baigné de légèreté
                  et de douceur, inchAllah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le papillon virevolte dans la maison sans se poser, le
                  rêve peut indiquer une agitation passagère mais inoffensive,
                  un changement en cours qui finira par se stabiliser. Le
                  rêveur est invité à la patience, sachant que le papillon
                  finit toujours par trouver sa fleur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Attraper un papillon */}
              {/* ============================================ */}
              <section id="attraper" className="mt-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Attraper un papillon en rêve : signification islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;action d&apos;attraper un papillon dans un rêve
                  introduit une tension entre le désir de possession et la
                  nature libre de cette créature. Les interprètes musulmans
                  y lisent un message nuancé, selon que le papillon est
                  capturé, retenu ou relâché.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Attraper et garder le papillon
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le rêveur attrape un papillon et le garde dans sa main
                  sans l&apos;abîmer, c&apos;est un signe de réussite et de
                  maîtrise. Ce rêve annonce la concrétisation d&apos;un
                  projet, l&apos;obtention d&apos;un bienfait matériel ou
                  spirituel, ou la conquête du coeur d&apos;une personne
                  aimée. La délicatesse du geste est primordiale : écraser le
                  papillon annulerait le bienfait.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin compare ce geste à celui du savant qui saisit une
                  vérité subtile : il faut de la finesse, de la patience et
                  du respect pour retenir ce qui est fragile. Le rêveur est
                  encouragé à traiter ses opportunités avec la même
                  délicatesse qu&apos;il traiterait un papillon vivant.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le papillon s&apos;envole après la capture
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le papillon s&apos;échappe des mains du rêveur, les
                  interprètes y voient un rappel au détachement. Ce rêve
                  signifie que certains bienfaits ne sont pas destinés à
                  durer, ou que le rêveur tente de retenir ce qui
                  n&apos;est pas fait pour lui. La sagesse islamique invite
                  alors à accepter la volonté d&apos;Allah et à se concentrer
                  sur ce qui reste, plutôt que de courir après ce qui fuit.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce songe peut aussi s&apos;adresser à une personne qui
                  s&apos;accroche à un passé révolu. Le papillon qui
                  s&apos;envole dit au rêveur : laisse partir ce qui doit
                  partir, et prépare-toi à recevoir ce qui viendra. Cette
                  attitude de tawakkul (remise à Allah) est au coeur de la
                  spiritualité musulmane et rappelle l&apos;état d&apos;esprit
                  du{" "}
                  <Link
                    href="/rever-voyage-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêve de voyage en islam
                  </Link>
                  , où le mouvement et le lâcher-prise se rejoignent.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Tuer un papillon en rêve
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Tuer un papillon dans un songe est un signe d&apos;avertissement.
                  Ce geste symbolise la destruction d&apos;une beauté, la
                  perte d&apos;une opportunité par négligence ou
                  l&apos;étouffement d&apos;un sentiment positif. Les savants
                  recommandent au rêveur de faire son examen de conscience
                  et de vérifier s&apos;il ne gaspille pas les bienfaits
                  qu&apos;Allah met sur son chemin. Une sadaqa est fortement
                  conseillée pour compenser la symbolique de ce rêve.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Attraper et garder
                        </td>
                        <td className="py-3 pr-4">
                          Réussite, bienfait saisi
                        </td>
                        <td className="py-3">
                          Prendre soin de ce qui est acquis
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le papillon s&apos;envole
                        </td>
                        <td className="py-3 pr-4">
                          Détachement, acceptation
                        </td>
                        <td className="py-3">
                          Faire confiance à Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tuer le papillon
                        </td>
                        <td className="py-3 pr-4">
                          Perte, gaspillage d&apos;un bienfait
                        </td>
                        <td className="py-3">
                          Faire une sadaqa, introspection
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Observer sans toucher
                        </td>
                        <td className="py-3 pr-4">
                          Contemplation, paix intérieure
                        </td>
                        <td className="py-3">
                          Apprécier les bienfaits d&apos;Allah
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profil-reveur" className="mt-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon le profil du rêveur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Un même rêve de papillon ne porte pas le même message selon
                  la situation du rêveur. Les interprètes musulmans tiennent
                  compte de l&apos;âge, du statut marital, de la condition
                  spirituelle et des préoccupations du moment pour affiner
                  leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Le papillon symbolise le renouveau dans le couple et la
                      légèreté retrouvée dans la relation conjugale. Ce rêve
                      peut annoncer une période de complicité renouvelée avec
                      son époux, une grossesse désirée ou simplement un regain
                      de joie dans le quotidien. Le papillon coloré dans la
                      maison est un signe de baraka sur le foyer.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Le papillon représente une transformation personnelle en
                      cours. Ce rêve annonce souvent une rencontre sentimentale
                      ou un changement de statut. An-Nabulsi y voit le signe
                      qu&apos;une proposition de mariage approche, portée par
                      la douceur et la sincérité. Le papillon qui se pose sur
                      elle confirme qu&apos;elle sera choisie avec tendresse.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Le papillon est un signe rassurant pour la future mère.
                      Sa métamorphose reflète celle du bébé qui se forme et se
                      prépare à voir le monde. Ce rêve annonce un accouchement
                      en douceur et un enfant qui apportera joie et lumière
                      au foyer, inchAllah. Le papillon blanc est
                      particulièrement positif dans ce contexte.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Le papillon peut représenter une femme douce et
                      attirante, ou un projet professionnel en phase de
                      transformation. Ce rêve encourage l&apos;homme à
                      accueillir le changement avec sérénité plutôt que de le
                      combattre. Si le papillon se pose sur sa main, c&apos;est
                      un signe de gain ou de réussite dans une entreprise
                      menée avec finesse.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une personne en difficulté
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Le papillon est un message d&apos;espoir profond. Sa
                      métamorphose dit au rêveur que l&apos;épreuve actuelle
                      est temporaire, que le cocon finira par s&apos;ouvrir.
                      Ce rêve invite à la patience (sabr) et au tawakkul,
                      rappelant que les plus belles transformations naissent
                      des passages les plus sombres.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un repenti (ta&apos;ib)
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Le papillon confirme que le repentir a été accepté par
                      Allah. La transformation de la chenille en papillon
                      reflète exactement le parcours de celui qui revient vers
                      son Seigneur : ce qu&apos;il était ne définit pas ce
                      qu&apos;il deviendra. Ce rêve est un encouragement
                      puissant à persévérer sur la voie droite.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils spirituels */}
              {/* ============================================ */}
              <section id="conseils" className="mt-14 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils spirituels après un rêve de papillon
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le rêve de papillon, qu&apos;il soit lumineux ou troublant,
                  est une invitation à la réflexion et au rapprochement avec
                  Allah. La tradition prophétique enseigne des attitudes
                  précises à adopter après chaque songe significatif.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Si le rêve était positif
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Remercier Allah</strong> par une prosternation de
                      gratitude (sujud ash-shukr) et multiplier les louanges.
                      Le papillon est un messager de bienfait : accueillez-le
                      avec reconnaissance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Partager le rêve</strong> avec une personne de
                      confiance, un proche pieux ou un imam compétent en
                      interprétation. Ne le divulguez pas à n&apos;importe
                      qui pour préserver sa baraka.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Méditer sur la transformation</strong> que le
                      rêve annonce et se préparer activement au changement
                      positif qui approche. Faire une sadaqa pour accompagner
                      le bienfait.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lire sourate Youssouf</strong> pour approfondir
                      sa compréhension des rêves et renforcer sa connexion avec
                      la science de l&apos;interprétation onirique en islam.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Si le rêve était troublant
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter les sourates protectrices</strong>{" "}
                      (Al-Falaq, An-Nas, Al-Ikhlas) avant de dormir et au
                      réveil. Ayat al-Kursi offre aussi une protection
                      renforcée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas raconter le rêve</strong> à n&apos;importe
                      qui, conformément au hadith du Prophète ﷺ qui
                      recommandait de garder les mauvais rêves pour soi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cracher légèrement trois fois</strong> à gauche
                      en se réveillant et chercher refuge auprès d&apos;Allah
                      contre le mal de ce rêve (a&apos;udhu billahi min
                      ash-shaytani ar-rajim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Changer de position</strong> dans le lit et prier
                      deux rakat volontaires si l&apos;inquiétude persiste.
                      Le dhikr avant le sommeil prévient les cauchemars.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Pratiques complémentaires recommandées
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le papillon rappelle au croyant que la transformation est un
                  processus continu. Les savants encouragent la lecture régulière
                  du Coran, le jeûne surérogatoire et le dhikr quotidien pour
                  maintenir l&apos;âme dans un état de réceptivité spirituelle.
                  Un coeur purifié reçoit des rêves plus clairs et plus
                  significatifs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La fréquentation des cercles de savoir, l&apos;aumône
                  régulière et le bon comportement avec les proches
                  contribuent à attirer la baraka dans les rêves. Chaque effort
                  spirituel est un pas vers une meilleure compréhension des
                  messages qu&apos;Allah adresse à Ses serviteurs à travers
                  leurs songes.
                </p>

                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Pratique spirituelle
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bienfait pour les rêves
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lecture de sourate Youssouf
                        </td>
                        <td className="py-3">
                          Meilleure compréhension des symboles oniriques
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dhikr avant le sommeil
                        </td>
                        <td className="py-3">
                          Rêves plus clairs et apaisants
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Jeûne surérogatoire
                        </td>
                        <td className="py-3">
                          Purification du coeur, rêves véridiques
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sadaqa régulière
                        </td>
                        <td className="py-3">
                          Attraction de la baraka, visions positives
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm */}
              {/* ============================================ */}
              <AffiliateForm
                title="Approfondissez votre compréhension des rêves islamiques"
                description="La compréhension des rêves en islam passe par la connaissance du Coran et de la langue arabe. Choisissez votre formation pour approfondir vos connaissances."
                preselect="coran"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne - Silo */}
              <nav className="mt-16 rounded-xl border border-secondary/20 bg-accent p-6">
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
                    href="/rever-abeille-guepe-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;abeille ou guêpe en islam
                  </Link>
                  <Link
                    href="/rever-pigeon-oiseau-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de pigeon ou oiseau en islam
                  </Link>
                  <Link
                    href="/rever-chat-islam-symbolisme"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de chat en islam
                  </Link>
                  <Link
                    href="/rever-voyage-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de voyage en islam
                  </Link>
                </div>
              </nav>

              {/* Navigation pages mères */}
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
