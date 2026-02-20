import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Retour de Jésus (Issa) : ce que dit vraiment l'islam",
  description:
    "Que dit l'islam sur le retour de Jésus (Issa) ? Versets coraniques, hadiths authentiques, circonstances de sa descente et mission selon la tradition islamique.",
  alternates: {
    canonical: "https://www.islamreligion.fr/retour-jesus-islam",
  },
};

const tocItems = [
  { id: "jesus-coran", label: "Jésus (Issa) dans le Coran" },
  { id: "preuves-textuelles", label: "Les preuves textuelles du retour" },
  { id: "circonstances", label: "Les circonstances de la descente" },
  { id: "mission", label: "La mission de Issa lors de son retour" },
  { id: "divergences", label: "Divergences savantes et approche spirituelle" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Jésus (Issa) va-t-il revenir selon l'islam ?",
    answer:
      "Selon la majorité des savants musulmans, Jésus (Issa) reviendra sur terre avant la fin des temps. Cette croyance repose sur plusieurs hadiths authentiques rapportés dans les recueils de Boukhari et Muslim, ainsi que sur des versets coraniques interprétés en ce sens par de nombreux exégètes. Son retour est considéré comme l'un des signes majeurs de l'Heure.",
  },
  {
    question: "Où descendra Jésus lors de son retour ?",
    answer:
      "D'après le hadith rapporté par Muslim, Jésus (Issa) descendra près du minaret blanc situé à l'est de Damas, en Syrie. Il sera accompagné de deux anges et posera ses mains sur leurs ailes. Les croyants le reconnaîtront immédiatement à sa description physique transmise par le Prophète Muhammad.",
  },
  {
    question: "Jésus est-il mort selon l'islam ?",
    answer:
      "L'islam enseigne que Jésus n'a pas été crucifié ni tué, conformément au verset 4:157 du Coran. Selon la croyance majoritaire, Allah l'a élevé vers Lui vivant. Les savants divergent sur les détails, mais s'accordent sur le fait que Jésus n'a pas subi la crucifixion telle que décrite dans la tradition chrétienne.",
  },
  {
    question: "Quel est le lien entre Jésus et le Dajjal ?",
    answer:
      "Selon les hadiths, Jésus (Issa) sera celui qui mettra fin au règne du Dajjal (l'Antéchrist). À son retour, il le poursuivra jusqu'à la porte de Loudd (en Palestine) où il l'éliminera. La présence de Jésus dissipera les illusions du Dajjal, car celui-ci ne pourra supporter sa proximité.",
  },
  {
    question: "Jésus suivra-t-il la loi de Muhammad à son retour ?",
    answer:
      "Oui, selon les savants musulmans, Jésus (Issa) ne viendra pas avec une nouvelle législation. Il appliquera la sharia du Prophète Muhammad et priera derrière l'imam des musulmans. Le hadith rapporté par Boukhari précise que le Mahdi lui proposera de diriger la prière, mais Jésus refusera par déférence envers la communauté de Muhammad.",
  },
  {
    question: "Combien de temps Jésus restera-t-il sur terre après son retour ?",
    answer:
      "D'après un hadith rapporté par Abou Dawoud, Jésus (Issa) restera sur terre pendant quarante ans après sa descente. Durant cette période, il gouvernera avec justice, établira la paix et mourra ensuite naturellement. Les musulmans accompliront la prière funéraire sur lui.",
  },
  {
    question: "Les chrétiens se convertiront-ils à l'islam au retour de Jésus ?",
    answer:
      "Selon les hadiths, Jésus brisera la croix et abolira la jizya (impôt de protection), ce que les savants interprètent comme le fait qu'il n'acceptera que l'islam. Le verset 4:159 du Coran mentionne que tous les Gens du Livre croiront en lui avant sa mort. Les exégètes y voient l'unification de la foi autour du monothéisme pur.",
  },
  {
    question: "Comment se préparer au retour de Jésus en islam ?",
    answer:
      "Les savants recommandent de ne pas se perdre dans les spéculations sur les dates ou les détails. La meilleure préparation consiste à renforcer sa foi par la prière, la lecture du Coran, les bonnes actions et la droiture morale au quotidien. Le Prophète Muhammad a lui-même encouragé les croyants à planter un arbre même s'ils voient l'Heure arriver, soulignant l'importance de l'action concrète.",
  },
];

export default function RetourJesus() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/retour-jesus-islam/#article",
        headline:
          "Retour de Jésus (Issa) : ce que dit vraiment l'islam",
        description:
          "Que dit l'islam sur le retour de Jésus (Issa) ? Versets coraniques, hadiths authentiques, circonstances de sa descente et mission selon la tradition islamique.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Retour-de-Jesus-Issa-ce-que-dit-vraiment-lislam-1.jpg",
        datePublished: "2025-08-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/retour-jesus-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/retour-jesus-islam/#breadcrumb",
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
            name: "Retour de Jésus",
            item: "https://www.islamreligion.fr/retour-jesus-islam",
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
          title="Retour de Jésus (Issa) : ce que dit vraiment l'islam"
          subtitle="Versets coraniques, hadiths authentiques et enseignements des savants sur la descente de Issa à la fin des temps."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Retour-de-Jesus-Issa-ce-que-dit-vraiment-lislam-1.jpg"
          imageAlt="Retour de Jésus Issa en islam, ce que dit vraiment la tradition islamique"
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
                <span className="text-foreground">Retour de Jésus en islam</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La figure de Jésus (Issa, paix sur lui) occupe une place
                  singulière dans la foi musulmane. Reconnu comme prophète,
                  messie et signe de l&apos;Heure, son retour sur terre
                  avant la fin des temps constitue l&apos;un des points de
                  convergence entre plusieurs hadiths authentiques et
                  certains versets coraniques. Loin du sensationnalisme,
                  la tradition islamique invite à comprendre cet
                  événement comme un appel à la droiture morale et à la
                  confiance en Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Jésus dans le Coran et la tradition */}
              {/* ============================================ */}
              <section id="jesus-coran" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Jésus (Issa) dans le Coran et la tradition islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Jésus fils de Marie (Issa ibn Maryam) tient une place
                  à part parmi les prophètes mentionnés dans le Coran.
                  Nommé plus de vingt-cinq fois dans le texte sacré, il
                  est présenté comme le Messie (al-Masih), un serviteur
                  d&apos;Allah envoyé aux enfants d&apos;Israël, né
                  miraculeusement d&apos;une mère vierge, Maryam, à qui
                  une sourate entière est consacrée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran affirme la naissance miraculeuse de Jésus dans
                  la sourate Al-Imran (3:45-49). L&apos;ange annonça à
                  Maryam la venue d&apos;un enfant dont le nom serait
                  &quot;le Messie, Jésus fils de Marie, illustre ici-bas
                  et dans l&apos;au-delà, et l&apos;un des rapprochés
                  d&apos;Allah.&quot; Dès le berceau, selon le récit
                  coranique, l&apos;enfant parla pour défendre l&apos;honneur
                  de sa mère et déclarer sa mission prophétique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran lui attribue des miracles remarquables, accomplis
                  avec la permission divine : guérir les aveugles et les
                  lépreux, redonner vie aux morts, façonner un oiseau
                  d&apos;argile auquel il insufflait la vie. Ces prodiges,
                  précise le Coran, ne relèvent pas de la divinité mais
                  de la puissance d&apos;Allah accordée à Son serviteur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce point constitue la divergence fondamentale avec la
                  théologie chrétienne. Le verset 5:75 du Coran déclare :
                  &quot;Le Messie, fils de Marie, n&apos;est qu&apos;un
                  messager. Des messagers sont passés avant lui.&quot;
                  De même, le verset 4:171 appelle les Gens du Livre à
                  ne pas exagérer dans leur religion et à ne pas attribuer
                  à Jésus la nature divine. L&apos;islam reconnaît
                  pleinement la grandeur de Jésus tout en maintenant
                  fermement le principe du monothéisme absolu (tawhid).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prophète et messie :</strong> Jésus est reconnu
                      comme l&apos;un des cinq prophètes doués de fermeté
                      (ulu al-azm), aux côtés de Noé, Abraham, Moïse et
                      Muhammad.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Naissance miraculeuse :</strong> conçu sans père
                      par la volonté divine, un prodige que le Coran compare
                      à la création d&apos;Adam (3:59).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Miracles attestés :</strong> guérison des malades,
                      résurrection des morts et parole au berceau, tous par la
                      permission d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Serviteur d&apos;Allah :</strong> le Coran
                      rappelle que Jésus lui-même s&apos;est défini comme
                      serviteur de Dieu, non comme Son fils (19:30).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Modèle de piété :</strong> la tradition islamique
                      le décrit comme un ascète détaché des biens de ce monde,
                      voué entièrement à l&apos;adoration d&apos;Allah.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette vision coranique de Jésus ne diminue en rien son
                  statut. Au contraire, elle le place au rang des plus
                  grands messagers de l&apos;histoire humaine. C&apos;est
                  précisément cette grandeur qui rend la question de son
                  retour si significative dans l&apos;eschatologie
                  islamique.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Retour-de-Jesus-Issa-ce-que-dit-vraiment-lislam-1.jpg"
                    alt="Jésus Issa dans le Coran et la tradition islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Les preuves textuelles du retour */}
              {/* ============================================ */}
              <section id="preuves-textuelles" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les preuves textuelles du retour de Issa
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question du retour de Jésus repose sur un ensemble
                  de textes coraniques et prophétiques que les savants
                  musulmans ont longuement étudiés. Si les hadiths sont
                  explicites sur ce sujet, les versets coraniques, eux,
                  font l&apos;objet d&apos;interprétations variées parmi
                  les exégètes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le verset 4:157 du Coran aborde la fin terrestre de
                  Jésus : &quot;Ils ne l&apos;ont ni tué ni crucifié,
                  mais ce n&apos;était qu&apos;un faux-semblant.&quot;
                  Le verset suivant (4:158) ajoute : &quot;Allah l&apos;a
                  élevé vers Lui.&quot; La majorité des exégètes classiques
                  comprennent cette élévation comme un enlèvement corporel
                  et spirituel, Jésus étant maintenu vivant auprès
                  d&apos;Allah jusqu&apos;à son retour.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le verset 4:159 poursuit : &quot;Il n&apos;y aura
                  personne, parmi les Gens du Livre, qui n&apos;aura
                  pas foi en lui avant sa mort.&quot; Les commentateurs
                  comme Ibn Kathir et At-Tabari interprètent &quot;sa
                  mort&quot; comme la mort de Jésus après son retour
                  sur terre, non avant son élévation. Chaque personne
                  du Livre, disent-ils, croira en lui en tant que
                  serviteur d&apos;Allah et prophète, une fois
                  qu&apos;il sera redescendu.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le verset 43:61 est également cité : &quot;Il sera
                  un signe de l&apos;Heure. N&apos;en doutez point
                  et suivez-moi.&quot; Certains exégètes lisent &quot;il&quot;
                  comme une référence directe à Jésus, dont le retour
                  annoncera l&apos;approche du Jour du Jugement. D&apos;autres
                  y voient une allusion au Coran lui-même. Cette pluralité
                  d&apos;interprétations témoigne de la richesse du texte
                  coranique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Du côté des hadiths, les récits sont plus directs. Le
                  Prophète Muhammad (paix et bénédictions sur lui) a dit :
                  &quot;Par Celui qui détient mon âme, le fils de Marie
                  descendra parmi vous en juge équitable.&quot; Ce hadith,
                  rapporté par Boukhari et Muslim, constitue l&apos;une
                  des preuves les plus solides dans la tradition sunnite.
                </p>

                {/* Tableau des preuves textuelles */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Source
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Référence
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Contenu
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Coran
                        </td>
                        <td className="py-3 pr-4">
                          4:157-158
                        </td>
                        <td className="py-3">
                          Jésus n&apos;a pas été crucifié, Allah l&apos;a
                          élevé vers Lui
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Coran
                        </td>
                        <td className="py-3 pr-4">
                          4:159
                        </td>
                        <td className="py-3">
                          Tous les Gens du Livre croiront en lui avant
                          sa mort
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Coran
                        </td>
                        <td className="py-3 pr-4">
                          43:61
                        </td>
                        <td className="py-3">
                          Il est un signe (ou une connaissance) de
                          l&apos;Heure
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Coran
                        </td>
                        <td className="py-3 pr-4">
                          3:45-49
                        </td>
                        <td className="py-3">
                          Annonce de la naissance de Jésus, ses miracles
                          et son titre de Messie
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hadith
                        </td>
                        <td className="py-3 pr-4">
                          Boukhari et Muslim
                        </td>
                        <td className="py-3">
                          Le fils de Marie descendra en juge équitable,
                          brisera la croix, tuera le porc
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hadith
                        </td>
                        <td className="py-3 pr-4">
                          Muslim
                        </td>
                        <td className="py-3">
                          Description de la descente près du minaret
                          blanc à l&apos;est de Damas
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hadith
                        </td>
                        <td className="py-3 pr-4">
                          Abou Dawoud
                        </td>
                        <td className="py-3">
                          Jésus restera sur terre quarante ans après
                          sa descente
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble de ces textes forme un corpus cohérent
                  pour les savants qui soutiennent la réalité du retour
                  de Jésus. Les hadiths, transmis par des chaînes de
                  transmission jugées fiables (mutawatir selon certains
                  spécialistes), viennent éclairer et préciser les
                  allusions coraniques. Il convient toutefois de rappeler
                  que d&apos;autres savants, minoritaires, proposent des
                  lectures plus métaphoriques de ces textes.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Les circonstances de la descente */}
              {/* ============================================ */}
              <section id="circonstances" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les circonstances de la descente de Issa
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les hadiths décrivent avec une précision remarquable
                  les circonstances dans lesquelles Jésus (paix sur lui)
                  redescendra sur terre. Ces détails, loin d&apos;être
                  de simples curiosités narratives, portent une
                  signification spirituelle que les savants se sont
                  attachés à commenter au fil des siècles.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le lieu : le minaret blanc à l&apos;est de Damas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le hadith rapporté par Muslim situe la descente
                        de Jésus près du minaret blanc à l&apos;est de
                        Damas, en Syrie. Ce lieu, identifié par de
                        nombreux historiens musulmans, symbolise la
                        jonction entre Orient et Occident, entre
                        l&apos;ancien et le nouveau.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le moment : après l&apos;apparition du Dajjal
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La descente de Jésus se produira pendant la
                        période de tribulation provoquée par le Dajjal
                        (l&apos;Antéchrist). Les croyants, assiégés et
                        éprouvés, trouveront en l&apos;arrivée de Jésus
                        le secours promis par Allah. C&apos;est au moment
                        où la prière de l&apos;aube sera sur le point
                        d&apos;être accomplie que Jésus apparaîtra.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La manière : accompagné de deux anges
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le hadith de Muslim précise que Jésus descendra
                        en posant ses mains sur les ailes de deux anges.
                        Il sera vêtu de deux vêtements teints au safran.
                        Lorsqu&apos;il baissera la tête, des gouttes en
                        tomberont, et lorsqu&apos;il la relèvera, des
                        perles de lumière en ruisselleront.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La description physique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète Muhammad a décrit Jésus comme un
                        homme de taille moyenne, au teint rougeâtre,
                        aux cheveux lisses tombant entre les épaules.
                        Cette description, rapportée par Boukhari,
                        permettra aux croyants de le reconnaître
                        immédiatement lors de sa descente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;élimination du Dajjal
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;un des premiers actes de Jésus après sa
                        descente sera de poursuivre le Dajjal. Selon
                        le hadith, il l&apos;atteindra à la porte de
                        Loudd (en Palestine) et l&apos;éliminera. À la
                        vue de Jésus, le Dajjal se dissoudra comme le
                        sel dans l&apos;eau, incapable de supporter la
                        présence d&apos;un véritable prophète d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      6
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La durée de son séjour terrestre
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Selon le hadith rapporté par Abou Dawoud, Jésus
                        restera sur terre pendant quarante ans après sa
                        descente. Il se mariera, aura des enfants, puis
                        mourra naturellement. Les musulmans accompliront
                        la prière funéraire sur lui et il sera enterré
                        selon la tradition, à Médine selon certaines
                        narrations.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces détails narratifs ne servent pas à alimenter la
                  curiosité. Les savants y voient un enseignement
                  profond : la victoire finale de la vérité sur
                  l&apos;imposture, la confirmation du lien entre tous
                  les prophètes et la fidélité d&apos;Allah à Ses
                  promesses. Le retour de Jésus incarne l&apos;espoir
                  que la justice prévaudra, quelle que soit l&apos;ampleur
                  de l&apos;épreuve.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Retour-de-Jesus-Issa-ce-que-dit-vraiment-lislam-1.jpg"
                    alt="Les circonstances de la descente de Jésus Issa selon les hadiths"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le Dajjal et les signes de la fin des temps en islam"
                  description="Découvrez les hadiths authentiques sur l'Antéchrist et les signes majeurs de l'Heure."
                  href="/signes-fin-monde-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : La mission de Issa */}
              {/* ============================================ */}
              <section id="mission" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La mission de Issa lors de son retour
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le retour de Jésus ne se limite pas à l&apos;élimination
                  du Dajjal. Les hadiths décrivent une mission plus vaste,
                  porteuse d&apos;un renouveau spirituel, social et même
                  économique pour l&apos;humanité. Cette période est
                  présentée comme un âge de paix et d&apos;abondance sans
                  précédent.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La première dimension de cette mission concerne le
                  rétablissement du monothéisme pur. Le hadith de
                  Boukhari et Muslim mentionne que Jésus &quot;brisera
                  la croix et tuera le porc.&quot; Les savants expliquent
                  que briser la croix symbolise la rectification de la
                  croyance en la crucifixion et la clarification du
                  véritable message de Jésus, celui du tawhid (unicité
                  divine). Quant à l&apos;abolition du porc, elle
                  représente le retour aux lois divines pures.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;abolition de la jizya (impôt de protection)
                  mentionnée dans les hadiths signifie, selon les exégètes,
                  que Jésus n&apos;acceptera que l&apos;islam. Il n&apos;y
                  aura plus de distinction entre communautés religieuses,
                  car la vérité sera devenue manifeste pour tous. Les
                  Gens du Livre, reconnaissant en Jésus le prophète
                  qu&apos;il a toujours été, et non un dieu, embrasseront
                  le monothéisme.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Restauration du monothéisme :</strong> Jésus
                      clarifiera son propre message, dissipant les
                      malentendus accumulés au fil des siècles sur sa
                      nature et sa mission.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Gouvernance juste :</strong> il gouvernera
                      selon la sharia du Prophète Muhammad, établissant
                      une justice qui ne fera aucune distinction entre
                      les peuples.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Unification des croyants :</strong> le retour
                      de Jésus mettra fin aux divisions sectaires et
                      rassemblera les fidèles autour de la foi authentique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Abondance matérielle :</strong> les hadiths
                      décrivent une ère où la richesse sera si abondante
                      que personne n&apos;acceptera plus l&apos;aumône,
                      tant les besoins de chacun seront satisfaits.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Paix universelle :</strong> les conflits
                      cesseront et même les animaux vivront en harmonie,
                      selon les descriptions prophétiques.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le lien avec le Mahdi mérite une attention particulière.
                  Selon les hadiths, le Mahdi sera déjà présent lorsque
                  Jésus descendra. Au moment de la prière, le Mahdi
                  proposera à Jésus de diriger la prière, mais Jésus
                  refusera, signifiant par ce geste qu&apos;il reconnaît
                  la primauté de la communauté de Muhammad et qu&apos;il
                  vient comme son soutien, non comme un nouveau
                  législateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette image du prophète Jésus priant derrière l&apos;imam
                  de la communauté musulmane porte un enseignement puissant :
                  la continuité prophétique, l&apos;unité du message divin
                  à travers les âges et l&apos;humilité qui caractérise les
                  véritables envoyés d&apos;Allah. Jésus ne revient pas
                  pour fonder une religion nouvelle. Il revient pour
                  confirmer et accomplir ce que tous les prophètes ont
                  toujours enseigné.
                </p>

                {/* Tableau mission */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aspect de la mission
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description selon les hadiths
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Signification spirituelle
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Briser la croix
                        </td>
                        <td className="py-3 pr-4">
                          Rectifier la croyance sur la crucifixion
                        </td>
                        <td className="py-3">
                          Retour au tawhid, clarification du message originel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Abolir la jizya
                        </td>
                        <td className="py-3 pr-4">
                          N&apos;accepter que l&apos;islam
                        </td>
                        <td className="py-3">
                          Unification de la foi, fin des divisions
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Éliminer le Dajjal
                        </td>
                        <td className="py-3 pr-4">
                          Le poursuivre jusqu&apos;à Loudd
                        </td>
                        <td className="py-3">
                          Victoire de la vérité sur l&apos;imposture
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Gouverner avec justice
                        </td>
                        <td className="py-3 pr-4">
                          Appliquer la sharia de Muhammad
                        </td>
                        <td className="py-3">
                          Continuité prophétique, unité du message
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Instaurer la paix
                        </td>
                        <td className="py-3 pr-4">
                          Période d&apos;abondance et de sécurité
                        </td>
                        <td className="py-3">
                          Promesse divine accomplie, miséricorde universelle
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir les signes de la fin des temps"
                  href="/fin-monde-islam-preparation"
                  linkText="Se préparer à la fin des temps en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Divergences et approche spirituelle */}
              {/* ============================================ */}
              <section id="divergences" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les divergences savantes et l&apos;approche spirituelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il serait réducteur de présenter le retour de Jésus
                  comme un fait unanimement interprété de manière
                  identique par tous les savants musulmans. Si la
                  majorité des théologiens sunnites affirment le retour
                  physique de Jésus sur terre, d&apos;autres voix,
                  notamment dans les courants réformistes et
                  rationalistes, proposent des lectures différentes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains penseurs musulmans contemporains, comme
                  Mohamed Abduh et Rachid Rida, ont suggéré que les
                  hadiths sur le retour de Jésus relèvent d&apos;une
                  dimension symbolique ou métaphorique. Selon eux,
                  la &quot;descente&quot; de Jésus pourrait représenter
                  le triomphe des valeurs qu&apos;il incarnait (justice,
                  monothéisme, compassion) plutôt qu&apos;un retour
                  physique au sens littéral.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les versets coraniques eux-mêmes, comme nous l&apos;avons
                  vu, se prêtent à plusieurs lectures. Le verset 43:61,
                  par exemple, est lu tantôt comme &quot;il est un signe
                  de l&apos;Heure&quot;, tantôt comme &quot;il est une
                  connaissance de l&apos;Heure&quot;, selon la variante
                  de lecture retenue. Cette richesse interprétative ne
                  fragilise pas la foi, elle en révèle la profondeur.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Position majoritaire :</strong> retour
                      physique de Jésus, fondé sur les hadiths mutawatir
                      et l&apos;exégèse classique d&apos;Ibn Kathir,
                      At-Tabari et An-Nawawi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Position réformiste :</strong> lecture
                      métaphorique, centrée sur le triomphe des valeurs
                      prophétiques plutôt que sur un événement physique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Point de convergence :</strong> quelle que
                      soit l&apos;interprétation retenue, tous les savants
                      s&apos;accordent sur l&apos;importance de la
                      préparation morale et spirituelle.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam An-Nawawi, commentant les hadiths sur les
                  signes de l&apos;Heure, rappelait que la finalité de
                  ces récits n&apos;est pas de provoquer l&apos;angoisse
                  ou la fascination, mais d&apos;inciter les croyants
                  à se préparer par les bonnes actions. Le Prophète
                  Muhammad lui-même, interrogé sur l&apos;Heure, a
                  répondu : &quot;Qu&apos;as-tu préparé pour elle ?&quot;
                  Cette réponse recentre le débat sur ce qui dépend
                  réellement du croyant : sa conduite quotidienne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le risque de l&apos;obsession eschatologique est
                  régulièrement soulevé par les savants. Se perdre dans
                  les calculs de dates, chercher à identifier le Dajjal
                  ou le Mahdi dans l&apos;actualité, interpréter chaque
                  événement politique comme un signe de l&apos;Heure :
                  autant d&apos;attitudes que la tradition islamique
                  décourage. La connaissance du moment exact de l&apos;Heure
                  appartient à Allah seul (31:34).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La véritable préparation, selon le consensus des
                  savants, repose sur cinq piliers pratiques :
                  l&apos;affermissement de la foi par l&apos;apprentissage,
                  la régularité dans la prière, la générosité envers
                  les plus vulnérables, la patience face aux épreuves
                  et le maintien de liens familiaux et communautaires
                  sains. Ces actes, répétés jour après jour, constituent
                  la meilleure réponse à toute interrogation sur la fin
                  des temps.
                </p>

                {/* Profils de lecteurs */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le croyant en quête de savoir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le retour de Jésus fait partie des connaissances
                      liées à l&apos;au-delà (al-ghayb). Étudier ce
                      sujet avec des sources fiables, auprès de savants
                      reconnus, renforce la foi sans tomber dans
                      l&apos;excès. Privilégiez les ouvrages classiques
                      d&apos;exégèse et les recueils de hadiths
                      authentiques.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour celui qui ressent de l&apos;inquiétude
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;eschatologie islamique ne vise pas à
                      provoquer la peur. Le Prophète Muhammad a dit :
                      &quot;Si l&apos;Heure arrive et que l&apos;un
                      d&apos;entre vous tient un plant dans sa main,
                      qu&apos;il le plante.&quot; Ce hadith invite à
                      l&apos;action positive plutôt qu&apos;à
                      l&apos;angoisse paralysante.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le dialogue interreligieux
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La figure de Jésus constitue un pont entre
                      musulmans et chrétiens. Comprendre la perspective
                      islamique sur son retour permet un dialogue
                      respectueux, fondé sur la connaissance mutuelle
                      plutôt que sur les préjugés. Les deux traditions
                      partagent l&apos;attente d&apos;un retour de Jésus,
                      bien que les modalités diffèrent.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le parent musulman
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Transmettre à ses enfants la place de Jésus dans
                      l&apos;islam ouvre une porte vers l&apos;amour des
                      prophètes et la compréhension de la continuité
                      du message divin. Racontez leur les miracles de
                      Jésus mentionnés dans le Coran avec émerveillement,
                      en soulignant la miséricorde d&apos;Allah.
                    </p>
                  </div>
                </div>
              </section>

              {/* ArticleCTA avant FAQ */}
              <ArticleCTA
                variant="lire-aussi"
                title="Les signes de la fin du monde en islam"
                description="Panorama complet des signes mineurs et majeurs de l'Heure selon le Coran et la Sunna."
                href="/signes-fin-monde-islam"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Eschatologie et fin des temps en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/signes-fin-monde-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Signes de la fin du monde en islam
                  </Link>
                  <Link
                    href="/fin-monde-islam-preparation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Se préparer à la fin des temps
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages liées */}
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêves en islam
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
