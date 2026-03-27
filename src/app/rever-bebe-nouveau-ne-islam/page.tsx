import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const metadata: Metadata = {
  title:
    "Rêver de bébé en islam : signification et interprétation complète",
  description:
    "Signification de rêver de bébé ou de nouveau-né en islam selon Ibn Sirin et An-Nabulsi. Bébé garçon, fille, qui pleure, souriant, allaiter.",
  openGraph: {
    title:
      "Rêver de bébé en islam : signification et interprétation complète",
    description:
      "Signification de rêver de bébé ou de nouveau-né en islam selon Ibn Sirin et An-Nabulsi. Bébé garçon, fille, qui pleure, souriant, allaiter.",
    url: "https://www.islamreligion.fr/rever-bebe-nouveau-ne-islam",
    images: [{ url: "/images/croissant-lune-lanterne-islam-decoration-pastel.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-bebe-nouveau-ne-islam",
  },
};

const tocItems = [
  { id: "signification", label: "Signification générale" },
  { id: "garcon-fille", label: "Bébé garçon ou fille" },
  { id: "emotions", label: "Bébé qui pleure ou sourit" },
  { id: "gestes", label: "Porter, allaiter, bercer" },
  { id: "situations", label: "Bébé malade ou abandonné" },
  { id: "profils", label: "Selon la situation du rêveur" },
  { id: "conseils", label: "Attitudes à adopter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie rêver de bébé en islam ?",
    answer:
      "Rêver de bébé en islam symbolise généralement un nouveau départ, une bénédiction divine ou l'arrivée d'une bonne nouvelle. Selon Ibn Sirin, le bébé dans un rêve représente souvent la pureté, l'innocence et le renouveau. L'interprétation précise dépend du contexte du rêve et de la situation personnelle du rêveur.",
  },
  {
    question:
      "Quelle est la différence entre rêver d'un bébé garçon et d'une bébé fille en islam ?",
    answer:
      "Selon la tradition onirique islamique, rêver d'un bébé garçon annonce souvent un accomplissement rapide, une responsabilité nouvelle ou un projet qui aboutit. Rêver d'une bébé fille est interprété comme un signe de bonheur, de prospérité et de douceur à venir. Les deux sont considérés comme des rêves positifs dans la majorité des cas.",
  },
  {
    question: "Que signifie rêver d'allaiter un bébé en islam ?",
    answer:
      "Rêver d'allaiter un bébé en islam symbolise la transmission, la générosité et le lien nourricier. Pour une femme, ce rêve peut évoquer un épanouissement maternel ou un don de soi envers un proche. Ibn Sirin y voyait aussi un signe de subsistance (rizq) accordée par Allah au rêveur.",
  },
  {
    question: "Rêver d'un bébé qui pleure est-il un mauvais signe en islam ?",
    answer:
      "Un bébé qui pleure dans un rêve en islam traduit souvent un manque affectif, un besoin spirituel non comblé ou une préoccupation intérieure. Ce n'est pas nécessairement un mauvais signe, mais plutôt un appel à l'introspection et à la prière. Il invite le rêveur à identifier ce qui lui manque et à se rapprocher d'Allah.",
  },
  {
    question: "Que signifie rêver de porter un bébé dans ses bras en islam ?",
    answer:
      "Porter un bébé dans ses bras en rêve symbolise une responsabilité confiée par Allah, la protection d'un être cher ou un projet dont on prend soin. Si le bébé est calme et serein, c'est un signe de réussite. Si le bébé est lourd ou agité, cela peut indiquer un fardeau ou une charge qui pèse sur le rêveur.",
  },
  {
    question: "Rêver d'un bébé mort ou malade en islam, que signifie-t-il ?",
    answer:
      "Rêver d'un bébé malade en islam peut symboliser une inquiétude, un projet fragilisé ou un avertissement divin invitant à la vigilance. Rêver d'un bébé mort peut représenter la fin d'un espoir ou d'un projet. Dans tous les cas, il est recommandé de chercher refuge auprès d'Allah et de multiplier les invocations de protection.",
  },
  {
    question: "Que faire après avoir rêvé d'un nouveau-né en islam ?",
    answer:
      "Après un rêve de bébé ou de nouveau-né, il est recommandé de noter les détails du rêve au réveil, de réciter les invocations de protection (Ayat al-Kursiy, les trois Qul) et de remercier Allah si le rêve était agréable. Si le rêve était troublant, souffler trois fois à gauche et chercher refuge auprès d'Allah contre le mal.",
  },
  {
    question:
      "Un homme peut-il rêver de bébé en islam et quelle en est la signification ?",
    answer:
      "Un homme qui rêve de bébé en islam peut recevoir un message lié à un nouveau projet, une responsabilité professionnelle ou familiale, ou une période de renouveau spirituel. Selon An-Nabulsi, ce rêve peut aussi annoncer un gain matériel ou une nouvelle favorable. Le contexte émotionnel du rêve oriente l'interprétation.",
  },
];

export default function ReverBebeNouveauNeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-bebe-nouveau-ne-islam/#article",
        headline:
          "Rêver de bébé en islam : signification et interprétation complète",
        description:
          "Signification de rêver de bébé ou de nouveau-né en islam selon Ibn Sirin et An-Nabulsi. Bébé garçon, fille, qui pleure, souriant, allaiter.",
        image:
          "https://www.islamreligion.fr/images/croissant-lune-lanterne-islam-decoration-pastel.jpg",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-bebe-nouveau-ne-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-bebe-nouveau-ne-islam/#breadcrumb",
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
            name: "Rêver de bébé",
            item: "https://www.islamreligion.fr/rever-bebe-nouveau-ne-islam",
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
          title="Rêver de bébé ou de nouveau-né en islam : signification et interprétation"
          subtitle="Comprendre la symbolique du bébé dans les rêves selon Ibn Sirin, An-Nabulsi et la tradition islamique."
          imageSrc="/images/croissant-lune-lanterne-islam-decoration-pastel.jpg"
          imageAlt="Rêver de bébé et de nouveau-né en islam, signification et interprétation spirituelle"
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
                  Rêver de bébé
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de bébé ou de nouveau-né en islam est l&apos;un des
                  rêves les plus fréquents et les plus riches en
                  significations. Symbole de pureté, de renouveau et de
                  bénédiction, le bébé onirique porte des messages variés
                  selon qu&apos;il soit garçon ou fille, souriant ou en
                  pleurs, porté dans les bras ou observé de loin. Les grands
                  interprètes comme Ibn Sirin et An-Nabulsi y voient des
                  signes liés à la foi, aux projets et à la vie
                  intérieure du rêveur.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Signification générale */}
              {/* ============================================ */}
              <section id="signification" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification du bébé et du nouveau-né dans les rêves en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le bébé occupe une place particulière dans
                  l&apos;oniromancie islamique. Le Prophète Muhammad (paix
                  et bénédictions sur lui) a enseigné que les rêves se
                  divisent en trois catégories : la vision véridique
                  (ru&apos;ya saliha) venant d&apos;Allah, le rêve
                  provenant du nafs (l&apos;âme) et celui insufflé par le
                  Shaytan. Un rêve de bébé peut relever de chacune de ces
                  catégories, selon les émotions ressenties et le contexte
                  du songe.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon Ibn Sirin, célèbre interprète des rêves du
                  VIIIe siècle, le nouveau-né dans un rêve représente
                  avant tout un commencement. Il peut s&apos;agir
                  d&apos;un nouveau projet, d&apos;une phase de vie
                  inédite ou d&apos;une transformation intérieure
                  profonde. An-Nabulsi, autre référence majeure,
                  complète cette vision en associant le bébé à la pureté
                  originelle (fitra) et au retour vers l&apos;innocence
                  spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne à plusieurs reprises la naissance
                  comme signe divin. Allah dit dans la sourate Maryam
                  (19:25) à propos de la naissance de &Icirc;sa (Jésus) :
                  le miracle de la naissance rappelle la toute-puissance
                  divine et Sa capacité à créer la vie là où on ne
                  l&apos;attend pas. Ce symbolisme se prolonge dans les
                  rêves, où le bébé devient le messager d&apos;un
                  renouveau voulu par Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/croissant-lune-lanterne-islam-decoration-pastel.jpg"
                    alt="Symbolisme du bébé dans les rêves en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il convient de noter que l&apos;interprétation d&apos;un
                  rêve de bébé ne se limite pas à une lecture unique. Les
                  savants recommandent de tenir compte de plusieurs
                  facteurs : l&apos;état émotionnel du rêveur pendant le
                  songe, les détails visuels (couleurs, lumière,
                  environnement) et la situation personnelle au moment du
                  rêve. Un même symbole peut porter un message différent
                  selon le vécu de chacun, comme c&apos;est aussi le cas
                  lorsque l&apos;on cherche à comprendre la{" "}
                  <Link
                    href="/rever-enceinte-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    signification de rêver d&apos;être enceinte en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Bébé garçon vs fille */}
              {/* ============================================ */}
              <section id="garcon-fille" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;un bébé garçon ou d&apos;une bébé fille en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La tradition onirique islamique distingue le sexe du bébé
                  dans l&apos;interprétation. Cette distinction ne
                  reflète aucune hiérarchie mais correspond à des
                  symboliques différentes héritées des grands interprètes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le bébé garçon : accomplissement et responsabilité
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin interprète le bébé garçon dans un rêve comme
                  un signe d&apos;accomplissement rapide. Voir un
                  nourrisson masculin annonce souvent la concrétisation
                  d&apos;un effort, la réussite d&apos;un projet ou
                  l&apos;arrivée d&apos;une responsabilité nouvelle que
                  le rêveur est prêt à assumer. An-Nabulsi y ajoute la
                  notion de force intérieure : le garçon symbolise la
                  détermination et la capacité à mener à bien ce qui a
                  été entrepris.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le bébé garçon apparaît beau et lumineux, cela
                  renforce le caractère positif du rêve. En revanche, un
                  garçon au visage sombre ou triste peut indiquer des
                  obstacles à surmonter avant d&apos;atteindre
                  l&apos;objectif visé.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La bébé fille : bonheur et prospérité
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Contrairement à certaines idées reçues, rêver d&apos;une
                  bébé fille est un signe très favorable en islam. Le
                  Prophète (paix et bénédictions sur lui) a dit :
                  &laquo; Celui qui a trois filles et fait preuve de
                  patience avec elles, les nourrit, les abreuve et les
                  habille de son labeur, elles lui seront un voile contre
                  le Feu au Jour du Jugement. &raquo; (Ibn Majah)
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voir une petite fille dans un rêve annonce
                  généralement la joie, la prospérité et l&apos;arrivée
                  de bonnes nouvelles. An-Nabulsi considère que la fille
                  dans le rêve symbolise aussi la douceur, la miséricorde
                  et un adoucissement des épreuves traversées par le
                  rêveur.
                </p>

                {/* Tableau comparatif */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aspect
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bébé garçon
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Bébé fille
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Symbolisme principal
                        </td>
                        <td className="py-3 pr-4">
                          Accomplissement, force, projet
                        </td>
                        <td className="py-3">
                          Bonheur, douceur, prospérité
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Selon Ibn Sirin
                        </td>
                        <td className="py-3 pr-4">
                          Réussite rapide, nouvelle charge
                        </td>
                        <td className="py-3">
                          Bonne nouvelle, miséricorde
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Selon An-Nabulsi
                        </td>
                        <td className="py-3 pr-4">
                          Détermination, énergie
                        </td>
                        <td className="py-3">
                          Adoucissement, sérénité
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Contexte négatif
                        </td>
                        <td className="py-3 pr-4">
                          Obstacles, fardeau
                        </td>
                        <td className="py-3">
                          Inquiétude passagère
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
                    alt="Famille musulmane unie, symbolisant les valeurs islamiques liées au rêve de bébé et de nouveau-né"
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
              {/* SECTION 3 : Bébé qui pleure ou sourit */}
              {/* ============================================ */}
              <section id="emotions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;un bébé qui pleure ou qui sourit
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les émotions exprimées par le bébé dans le rêve
                  orientent fortement l&apos;interprétation. Les savants
                  musulmans accordent une attention particulière à
                  l&apos;état du nourrisson, car il reflète souvent
                  l&apos;état intérieur du rêveur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Un bébé qui pleure : appel intérieur et manque
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Entendre un bébé pleurer dans un rêve traduit
                  généralement un vide affectif, un besoin spirituel non
                  satisfait ou une préoccupation refoulée. Ibn Sirin
                  associe les pleurs du nourrisson à un appel de
                  l&apos;âme (nafs) qui réclame attention et nourriture
                  spirituelle. Ce rêve invite à se questionner : quelle
                  partie de sa vie le rêveur néglige-t-il ? Quelle
                  adoration a-t-il délaissée ?
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si les pleurs sont intenses et prolongés, An-Nabulsi y
                  voit parfois un avertissement : le rêveur doit prêter
                  attention à une situation qui se détériore dans sa vie
                  éveillée. Il est alors recommandé de multiplier les
                  istighfar (demandes de pardon) et de se rapprocher
                  d&apos;Allah par la prière nocturne (qiyam al-layl).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Un bébé souriant : sérénité et bonne annonce
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  À l&apos;opposé, un bébé souriant ou riant dans un
                  rêve est considéré comme un signe très positif. Le
                  sourire du nourrisson évoque la satisfaction divine, la
                  paix intérieure et l&apos;annonce d&apos;une période
                  favorable. Le Prophète (paix et bénédictions sur lui) a
                  dit : &laquo; Le sourire que tu adresses à ton frère
                  est une aumône. &raquo; (Tirmidhi) Ce hadith rappelle
                  la valeur du sourire, y compris dans sa dimension
                  onirique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un bébé au regard lumineux et apaisé peut aussi
                  symboliser l&apos;acceptation d&apos;une prière
                  (du&apos;a) par Allah ou la proximité d&apos;un
                  bienfait. Ce type de rêve mérite d&apos;être accueilli
                  avec gratitude et louange envers le Créateur.
                </p>

                <div className="mt-8 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-sm font-semibold text-secondary">
                    Bon à savoir
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground italic">
                    &laquo; Le rêve agréable vient d&apos;Allah. Si
                    l&apos;un d&apos;entre vous voit ce qu&apos;il aime,
                    qu&apos;il n&apos;en parle qu&apos;à celui
                    qu&apos;il aime. Et le rêve détestable vient du
                    Shaytan. Si l&apos;un d&apos;entre vous voit ce
                    qu&apos;il déteste, qu&apos;il crache trois fois à
                    sa gauche et qu&apos;il cherche refuge auprès
                    d&apos;Allah contre son mal. &raquo; — Hadith
                    rapporté par al-Bukhari et Muslim.
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Porter, allaiter, bercer */}
              {/* ============================================ */}
              <section id="gestes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Porter, allaiter ou bercer un bébé dans un rêve
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les gestes accomplis envers le bébé dans le rêve
                  ajoutent une couche de sens supplémentaire. La manière
                  dont le rêveur interagit avec le nourrisson révèle sa
                  relation avec les responsabilités, la générosité et le
                  soin qu&apos;il apporte à son entourage.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Porter un bébé dans ses bras
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve symbolise une responsabilité acceptée, un
                      engagement sincère ou la protection d&apos;une
                      personne vulnérable. Si le bébé est léger et
                      paisible, la charge sera facile à assumer. Si le
                      bébé est lourd ou agité, le rêveur porte un
                      fardeau qui nécessite patience et persévérance.
                      Ibn Sirin rappelle que porter un enfant en rêve
                      peut aussi annoncer un gain matériel.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Allaiter un bébé
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;allaitement dans un rêve est un symbole
                      puissant de transmission et de nourriture
                      spirituelle. Pour une femme, il peut évoquer un
                      épanouissement dans son rôle maternel ou un don de
                      soi envers un proche. An-Nabulsi y voit aussi
                      un signe de rizq (subsistance) abondant accordé
                      par Allah. Pour un homme, ce rêve inhabituel peut
                      indiquer un sentiment d&apos;impuissance ou un
                      désir profond de protéger autrui.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Bercer un bébé
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Bercer un nourrisson dans un rêve traduit un
                      besoin de réconfort, de stabilité ou de retour au
                      calme. Ce geste doux évoque la patience du rêveur
                      face à une situation délicate. Il peut aussi
                      signifier que le rêveur apaise une inquiétude
                      ou accompagne un proche dans une période difficile.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Recevoir un bébé en cadeau
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Se voir offrir un bébé dans un rêve est interprété
                      par les savants comme une bénédiction imminente.
                      Ce don symbolise la confiance qu&apos;Allah place
                      dans le rêveur, un honneur spirituel ou une
                      mission à accomplir. C&apos;est un rêve qui
                      appelle à la reconnaissance et à la prière de
                      remerciement (salat ash-shukr).
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces gestes oniriques rejoignent la symbolique plus large
                  de la maternité et de la naissance dans les rêves. Pour
                  approfondir, vous pouvez consulter l&apos;interprétation
                  de{" "}
                  <Link
                    href="/rever-accoucher-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    rêver d&apos;accoucher en islam
                  </Link>{" "}
                  qui complète naturellement cette thématique.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Bébé malade ou abandonné */}
              {/* ============================================ */}
              <section id="situations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver d&apos;un bébé malade, abandonné ou mort
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Tous les rêves de bébé ne sont pas lumineux. Certains
                  scénarios oniriques mettent en scène un nourrisson en
                  difficulté, ce qui peut provoquer une vive inquiétude
                  chez le rêveur. Les interprètes musulmans invitent
                  cependant à ne pas céder à la peur et à analyser ces
                  rêves avec discernement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Un bébé malade ou affaibli
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver d&apos;un bébé malade ou fragile en islam
                  symbolise souvent un projet fragilisé, une relation qui
                  traverse une épreuve ou une foi qui s&apos;affaiblit.
                  Ibn Sirin interprète ce rêve comme un signal
                  d&apos;alerte : quelque chose dans la vie du rêveur
                  nécessite des soins, de l&apos;attention et un
                  renouvellement d&apos;énergie. An-Nabulsi précise que
                  le bébé malade peut aussi représenter une source de
                  revenu menacée ou un bien qui risque d&apos;être
                  perdu.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Un bébé abandonné ou trouvé
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Trouver un bébé abandonné dans un rêve peut revêtir
                  deux significations selon le contexte. D&apos;une part,
                  cela peut indiquer que le rêveur découvre une
                  opportunité inattendue, un talent caché ou une
                  responsabilité qu&apos;il n&apos;avait pas anticipée.
                  D&apos;autre part, si le rêveur est celui qui abandonne
                  le bébé, cela peut traduire un sentiment de culpabilité,
                  un renoncement ou la négligence d&apos;un devoir
                  important.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Un bébé mort dans un rêve
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La mort d&apos;un bébé dans un rêve est souvent
                  perturbante, mais les savants recommandent de ne pas
                  la prendre au sens littéral. Ce rêve symbolise
                  généralement la fin d&apos;un projet, d&apos;un
                  espoir ou d&apos;une phase de vie. Il peut aussi
                  représenter le deuil d&apos;une ambition abandonnée.
                  Pour les personnes qui vivent cette épreuve dans le
                  monde éveillé, ce rêve peut être un processus de
                  guérison de l&apos;âme. Il est recommandé de réciter
                  sourate Al-Fatiha et de chercher refuge auprès
                  d&apos;Allah. Le sujet de la{" "}
                  <Link
                    href="/rever-mort-islam-messages"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    mort dans les rêves en islam
                  </Link>{" "}
                  apporte un éclairage complémentaire sur cette
                  symbolique.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver d'être enceinte en islam : significations spirituelles"
                  description="Découvrez ce que symbolise la grossesse dans un rêve selon Ibn Sirin et la tradition islamique."
                  href="/rever-enceinte-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Selon la situation du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un même rêve de bébé ne porte pas la même signification
                  selon la personne qui le fait. Les grands interprètes
                  de l&apos;islam tiennent toujours compte de la
                  situation personnelle du rêveur pour affiner leur
                  lecture, car le songe s&apos;adresse à l&apos;individu
                  dans sa réalité propre.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de bébé pour une femme mariée peut annoncer
                      une grossesse, un renouveau dans la vie conjugale
                      ou une bénédiction au sein du foyer. Si elle
                      allaite le bébé dans le rêve, cela renforce le
                      caractère nourricier et protecteur du message.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut exprimer un désir de maternité, une
                      attente affective ou l&apos;émergence d&apos;un
                      projet personnel. Il invite à la patience, à la
                      confiance en Allah et à la préparation
                      intérieure pour les étapes à venir.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un homme qui rêve de bébé reçoit souvent un
                      message lié à ses responsabilités. Ce rêve peut
                      annoncer un nouveau projet professionnel, une
                      promotion ou une prise de conscience sur son rôle
                      de protecteur. An-Nabulsi y voit parfois un signe
                      de gain matériel ou de nouvelle favorable.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve reflète naturellement les espoirs et les
                      appréhensions liés à la grossesse. Il invite à
                      multiplier les invocations de protection pour le
                      bébé à naître, à s&apos;entourer de bienveillance
                      et à accueillir cette période avec tawakkul
                      (confiance en Allah).
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils et attitudes */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Attitudes à adopter après un rêve de bébé
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Accueillir un rêve de bébé avec sagesse demande de ne
                  pas se précipiter dans l&apos;interprétation. L&apos;islam
                  enseigne la mesure, la patience et le recours à la
                  prière avant toute conclusion. Voici les démarches
                  recommandées par les savants.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Noter le rêve au réveil
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les détails s&apos;effacent rapidement.
                        Consigner le rêve fidèlement permet d&apos;en
                        préserver les nuances pour une interprétation
                        plus juste.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter les invocations de protection
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ayat al-Kursiy, sourates Al-Falaq et An-Nas
                        protègent le rêveur et apaisent le coeur après
                        un songe troublant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Remercier Allah pour un rêve agréable
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le bébé était souriant et paisible, remercier
                        Allah par le hamd et partager le rêve uniquement
                        avec une personne de confiance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chercher refuge auprès d&apos;Allah pour un rêve
                        troublant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Souffler trois fois à gauche, dire
                        &laquo; A&apos;udhu billahi min ash-shaytani
                        ar-rajim &raquo; et ne pas raconter le rêve à
                        autrui, conformément à la sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Consulter une personne savante
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un imam ou un interprète de confiance pourra
                        replacer le rêve dans son contexte personnel et
                        spirituel. Éviter les interprétations hâtives
                        trouvées sur Internet sans vérification.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque rêve porte un message unique, tout comme la
                  symbolique du{" "}
                  <Link
                    href="/rever-chat-islam-symbolisme"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    chat dans les rêves en islam
                  </Link>{" "}
                  varie selon le contexte. La clé reste toujours
                  l&apos;humilité face au savoir divin et la confiance
                  en la sagesse d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée, invocation après un rêve de bébé en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
              <SocialBanner />

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
                    href="/rever-enceinte-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;être enceinte
                  </Link>
                  <Link
                    href="/rever-accoucher-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;accoucher
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de mort en islam
                  </Link>
                  <Link
                    href="/rever-chat-islam-symbolisme"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de chat en islam
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
