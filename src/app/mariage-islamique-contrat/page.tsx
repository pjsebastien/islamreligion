import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Mariage islamique : contrat, conditions et obligations mutuelles",
  description:
    "Tout savoir sur le mariage islamique (Nikah) : conditions de validité, mahr, obligations des époux, clauses particulières et conseils pratiques pour un contrat conforme.",
  alternates: {
    canonical: "https://www.islamreligion.fr/mariage-islamique-contrat",
  },
};

const tocItems = [
  { id: "fondements", label: "Les fondements du contrat de mariage (Nikah)" },
  { id: "conditions", label: "Les conditions de validité du Nikah" },
  { id: "mahr", label: "Le mahr (dot) : droit et signification" },
  { id: "obligations", label: "Les obligations mutuelles des époux" },
  { id: "clauses", label: "Clauses particulières et protection des droits" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelles sont les conditions pour un mariage islamique valide ?",
    answer:
      "Un mariage islamique valide repose sur plusieurs conditions : le consentement libre et volontaire des deux époux, la présence d\u2019un wali (tuteur légal de la mariée), deux témoins musulmans adultes et dignes de confiance, la fixation d\u2019un mahr (dot) au profit de l\u2019épouse, l\u2019absence d\u2019empêchements légaux (lien de parenté prohibé, période de viducité) et l\u2019âge légal requis.",
  },
  {
    question: "Le mariage religieux a-t-il une valeur légale en France ?",
    answer:
      "En France, le mariage religieux n\u2019a pas de valeur légale à lui seul. Le Code civil exige un mariage civil préalable pour que l\u2019union soit reconnue par l\u2019État. Le Nikah peut être célébré en complément du mariage civil, mais il ne remplace pas ce dernier sur le plan juridique.",
  },
  {
    question: "La dot (mahr) est-elle obligatoire en islam ?",
    answer:
      "Oui, le mahr est une obligation coranique confirmée par la sourate An-Nisa (4:4). Il s\u2019agit d\u2019un droit exclusif de l\u2019épouse que le mari doit lui remettre. Son montant est librement fixé entre les deux parties, et il ne peut être repris une fois versé, sauf si l\u2019épouse y renonce volontairement.",
  },
  {
    question: "Peut-on ajouter des clauses au contrat de mariage islamique ?",
    answer:
      "Oui, la jurisprudence islamique autorise l\u2019ajout de clauses particulières au contrat de mariage, à condition qu\u2019elles ne contredisent pas les principes fondamentaux de la charia. La femme peut, par exemple, stipuler le droit de travailler, interdire la polygamie ou prévoir des conditions de divorce. Ces clauses engagent le mari dès l\u2019acceptation du contrat.",
  },
  {
    question: "Le consentement de la femme est-il obligatoire pour le Nikah ?",
    answer:
      "Absolument. Le consentement libre et explicite de la femme est une condition fondamentale du mariage islamique. Le Prophète (ṣalla Allāhu \u2018alayhi wa sallam) a déclaré qu\u2019une femme vierge ne doit pas être mariée sans sa permission, et qu\u2019une femme déjà mariée doit donner son accord explicite. Un mariage contracté sans consentement est considéré comme nul.",
  },
  {
    question: "Quel est le rôle du wali (tuteur) dans le mariage ?",
    answer:
      "Le wali est le représentant légal de la mariée lors du contrat de mariage. Il est généralement le père, puis le grand-père paternel, le frère ou un autre homme de la famille paternelle. Son rôle est de veiller aux intérêts de la mariée et de valider le contrat en son nom. Selon l\u2019école hanafite, la femme adulte peut contracter elle-même son mariage.",
  },
  {
    question: "Le mariage peut-il être annulé si une condition n\u2019est pas remplie ?",
    answer:
      "Oui, si une condition fondamentale du mariage n\u2019est pas respectée (absence de consentement, absence de témoins, mariage avec un mahram), le contrat est considéré comme nul (batil). Si une condition stipulée dans le contrat est violée par l\u2019une des parties, l\u2019autre partie peut demander l\u2019annulation du mariage auprès d\u2019un juge ou d\u2019un imam compétent.",
  },
  {
    question: "Quelles sont les obligations financières du mari envers sa femme ?",
    answer:
      "Le mari a l\u2019obligation de subvenir aux besoins de son épouse (nafaqa), ce qui inclut le logement, la nourriture, l\u2019habillement et les soins médicaux, selon ses moyens. Cette obligation est confirmée par le Coran (sourate An-Nisa 4:34) et les hadiths authentiques. Elle subsiste même si l\u2019épouse dispose de ses propres revenus.",
  },
];

export default function MariageIslamique() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/mariage-islamique-contrat/#article",
        headline:
          "Mariage islamique : contrat, conditions et obligations mutuelles",
        description:
          "Tout savoir sur le mariage islamique (Nikah) : conditions de validité, mahr, obligations des époux, clauses particulières et conseils pratiques.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Mariage-islamique-contrat-conditions-et-obligations-mutuelles.jpg",
        datePublished: "2025-08-26",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/mariage-islamique-contrat/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/mariage-islamique-contrat/#breadcrumb",
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
            name: "Mariage islamique",
            item: "https://www.islamreligion.fr/mariage-islamique-contrat",
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
          title="Mariage islamique : contrat, conditions et obligations mutuelles"
          subtitle="Le Nikah en islam, un engagement sacré fondé sur le consentement mutuel, la dot et le respect des droits de chaque époux."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Mariage-islamique-contrat-conditions-et-obligations-mutuelles.jpg"
          imageAlt="Mariage islamique, contrat, conditions et obligations mutuelles"
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
                <span className="text-foreground">Mariage islamique</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le mariage en islam (Nikah) est un contrat solennel entre
                  deux personnes libres et consentantes. Fondé sur le
                  Coran et la Sunna, il repose sur des conditions précises :
                  consentement mutuel, présence d&apos;un tuteur (wali) et
                  de témoins, versement d&apos;une dot (mahr) et
                  absence d&apos;empêchements légaux. Ce contrat
                  définit les droits et obligations de chaque
                  époux, tout en offrant la possibilité d&apos;y
                  ajouter des clauses protectrices.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Fondements du contrat de mariage */}
              {/* ============================================ */}
              <section id="fondements" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les fondements du contrat de mariage en islam (Nikah)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mariage occupe une place centrale dans la vie du musulman.
                  Loin d&apos;être un simple acte administratif, le Nikah
                  est un pacte sacré (&apos;aqd) qui engage deux
                  personnes devant Allah. Le Coran présente le mariage
                  comme un signe de la miséricorde divine, un lien
                  d&apos;amour et de sérénité entre les époux.
                </p>

                <div className="mt-6 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-base italic leading-relaxed text-foreground">
                    « Et parmi Ses signes, Il a créé de vous,
                    pour vous, des épouses pour que vous viviez en
                    tranquillité avec elles et Il a mis entre vous de
                    l&apos;affection et de la bonté. Il y a en cela des
                    preuves pour des gens qui réfléchissent. »
                  </p>
                  <p className="mt-2 text-sm font-semibold text-secondary">
                    Coran, sourate Ar-Rum (30:21)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset illustre la finalité du mariage islamique :
                  créer un espace de paix (sakina), nourri par
                  l&apos;affection (mawadda) et la miséricorde (rahma).
                  Le Nikah n&apos;est pas un sacrement au sens chrétien,
                  mais un contrat civil à dimension spirituelle, encadré
                  par les principes de la{" "}
                  <Link href="/jurisprudence-islamique-coran-sunna-ijma" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">jurisprudence islamique</Link>.
                  Il se distingue du mariage civil français par sa nature
                  religieuse, ses conditions spécifiques et ses
                  implications morales.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (ṣalla Allāhu &apos;alayhi
                  wa sallam) a fortement encouragé le mariage en
                  déclarant : « Le mariage fait partie de ma
                  Sunna. Celui qui s&apos;en détourne ne fait pas
                  partie des miens. » (rapporté par Ibn Majah).
                  Cette parole souligne que le mariage est un acte
                  d&apos;adoration (&apos;ibada) et non une simple formalité
                  sociale. Il constitue aussi le cadre légitime de
                  l&apos;intimité, hors duquel les{" "}
                  <Link href="/peches-sexualite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">péchés liés à la sexualité</Link>{" "}
                  sont fermement prohibés.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Contrat volontaire :</strong> le Nikah repose sur
                      l&apos;offre (ijab) et l&apos;acceptation (qabul) libres
                      des deux parties.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dimension spirituelle :</strong> le mariage est un
                      acte de piété qui complète la moitié
                      de la foi du croyant, selon un hadith célèbre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Encadrement par l&apos;imam :</strong> la
                      célébration du Nikah est souvent
                      supervisée par un imam qui prononce le sermon
                      nuptial (khutbat al-nikah) et s&apos;assure du respect des
                      conditions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Publicité du mariage :</strong> le
                      Prophète a recommandé de rendre le mariage
                      public et d&apos;organiser un repas de noce (walima)
                      pour annoncer l&apos;union.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Contrairement à certaines idées reçues,
                  le mariage islamique n&apos;est pas une transaction
                  unilatérale. Les deux époux disposent de droits
                  équilibrés, comme le confirme le Coran :
                  « Elles ont des droits équivalents à leurs
                  obligations, conformément à la bienséance »
                  (sourate Al-Baqarah, 2:228). Cette réciprocité
                  fonde l&apos;ensemble du cadre juridique du Nikah.
                  En cas de rupture de ce lien, des procédures précises
                  régissent{" "}
                  <Link href="/divorce-islam-talaq-khula" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le divorce en islam</Link>,
                  afin de préserver les droits de chaque partie.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Mariage-islamique-contrat-conditions-et-obligations-mutuelles.jpg"
                    alt="Contrat de mariage islamique, le Nikah et ses fondements coraniques"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Conditions de validité du Nikah */}
              {/* ============================================ */}
              <section id="conditions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les conditions de validité du Nikah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour qu&apos;un mariage islamique soit reconnu comme valide
                  (sahih), plusieurs conditions doivent être
                  impérativement réunies. L&apos;absence de
                  l&apos;une d&apos;entre elles peut entraîner la
                  nullité (butlan) ou l&apos;invalidation (fasad) du
                  contrat. Les savants des quatre grandes écoles
                  juridiques (hanafite, malikite, shafi&apos;ite, hanbalite)
                  s&apos;accordent sur les piliers fondamentaux, même si
                  certains détails varient d&apos;une école
                  à l&apos;autre.
                </p>

                {/* Tableau conditions */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Condition
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conséquence si absente
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Consentement mutuel
                        </td>
                        <td className="py-3 pr-4">
                          Accord libre et volontaire de chaque époux,
                          sans contrainte ni pression
                        </td>
                        <td className="py-3">
                          Nullité absolue du contrat
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Wali (tuteur)
                        </td>
                        <td className="py-3 pr-4">
                          Représentant légal de la mariée
                          (père, grand-père paternel, frère)
                        </td>
                        <td className="py-3">
                          Mariage invalide selon la majorité des
                          écoles (sauf hanafite)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Deux témoins
                        </td>
                        <td className="py-3 pr-4">
                          Deux témoins musulmans, adultes, sains
                          d&apos;esprit et dignes de confiance
                        </td>
                        <td className="py-3">
                          Contrat nul, union non reconnue
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mahr (dot)
                        </td>
                        <td className="py-3 pr-4">
                          Don obligatoire du mari à l&apos;épouse,
                          fixé d&apos;un commun accord
                        </td>
                        <td className="py-3">
                          Le mariage reste valide mais le mahr du juste prix
                          (mahr al-mithl) est dû
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Âge légal
                        </td>
                        <td className="py-3 pr-4">
                          Les deux parties doivent avoir atteint la
                          puberté et la maturité requise
                        </td>
                        <td className="py-3">
                          Contrat invalide dans la plupart des législations
                          contemporaines
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Absence d&apos;empêchements
                        </td>
                        <td className="py-3 pr-4">
                          Pas de lien de parenté prohibé (mahram),
                          pas de période de viducité (&apos;iddah) en cours
                        </td>
                        <td className="py-3">
                          Nullité absolue, union illégitime
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le consentement de la femme mérite une attention
                  particulière. Le Prophète (ṣalla Allāhu
                  &apos;alayhi wa sallam) a insisté sur ce point :
                  « La femme précédemment mariée
                  (thayyib) ne doit pas être donnée en mariage
                  sans qu&apos;on lui demande son avis, et la vierge (bikr)
                  ne doit pas être donnée en mariage sans sa
                  permission. » (rapporté par Al-Bukhari et Muslim).
                  Ce hadith réfute toute forme de mariage forcé.
                  Ce souci de justice se prolonge tout au long de
                  la vie conjugale, y compris dans{" "}
                  <Link href="/droits-femme-divorce-islamique" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les droits de la femme en cas de divorce</Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le rôle du wali est de protéger les
                  intérêts de la mariée, pas de
                  décider à sa place. Si le tuteur refuse
                  un prétendant convenable sans raison valable,
                  la mariée peut faire appel à un juge
                  islamique (qadi) qui agira en qualité de wali.
                  Le Prophète a dit : « Le sultan (autorité)
                  est le wali de celle qui n&apos;a pas de wali. »
                  (rapporté par Abu Dawud et At-Tirmidhi).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Offre et acceptation (ijab wa qabul) :</strong> la
                      formule doit être prononcée clairement lors
                      de la même assemblée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Témoins qualifiés :</strong> les
                      écoles divergent sur la possibilité que les
                      témoins soient des femmes. L&apos;école
                      hanafite accepte un homme et deux femmes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Khutbat al-nikah :</strong> le sermon nuptial est
                      une sunna recommandée (mustahabb), pas une
                      condition de validité. Il rappelle les devoirs des
                      époux et invoque la bénédiction divine.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Le mahr */}
              {/* ============================================ */}
              <section id="mahr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mahr (dot) : droit et signification
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mahr est l&apos;un des piliers du mariage islamique. Il
                  désigne le don que le mari s&apos;engage à
                  remettre à son épouse en vertu du contrat de
                  mariage. Ce n&apos;est ni un prix d&apos;achat ni une
                  compensation familiale : c&apos;est un droit exclusif de la
                  femme, inscrit dans le Coran.
                </p>

                <div className="mt-6 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-base italic leading-relaxed text-foreground">
                    « Et donnez aux épouses leur dot de bonne
                    grâce. Si de bon gré elles vous en
                    abandonnent quelque chose, jouissez-en en toute
                    aisée et bonne conscience. »
                  </p>
                  <p className="mt-2 text-sm font-semibold text-secondary">
                    Coran, sourate An-Nisa (4:4)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset établit clairement que le mahr appartient
                  à l&apos;épouse. Le mari ne peut le reprendre
                  après l&apos;avoir versé, sauf si la femme y
                  renonce librement. Le Coran insiste sur ce point dans un
                  autre passage : « Et si vous voulez changer une
                  épouse contre une autre, et que vous avez
                  donné à l&apos;une un quintar, n&apos;en reprenez
                  rien » (sourate An-Nisa, 4:20).
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le mahr immédiat (mu&apos;ajjal)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est la partie de la dot versée au moment
                        du mariage ou peu après. Il peut s&apos;agir
                        d&apos;argent, de bijoux, de biens immobiliers ou de
                        tout objet de valeur. Ce versement marque
                        l&apos;engagement concret du mari.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le mahr différé (mu&apos;akhkhar)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        C&apos;est la partie dont le versement est reporté
                        à une date ultérieure, souvent en cas de
                        divorce ou de décès du mari. Il constitue
                        une protection financière supplémentaire
                        pour l&apos;épouse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le montant du mahr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il n&apos;existe pas de montant fixe dans le Coran.
                        Le Prophète a recommandé la
                        modération : « Le meilleur mariage est
                        celui qui est le plus facile. » (rapporté
                        par Abu Dawud). Certaines écoles évoquent
                        un minimum symbolique (10 dirhams selon l&apos;école
                        hanafite), tandis que d&apos;autres laissent le montant
                        entièrement aux parties.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le mahr est un droit de l&apos;épouse, pas de sa
                      famille. Aucun parent ne peut se l&apos;approprier.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;épouse peut librement disposer de son mahr :
                      le garder, l&apos;investir ou en faire don.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Un mahr excessif est déconseillé car il peut
                      constituer un obstacle au mariage et charger le couple de
                      dettes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      En cas de khul&apos; (divorce demandé par la
                      femme), elle peut renoncer à tout ou partie de son
                      mahr pour obtenir la séparation.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Mariage-islamique-contrat-conditions-et-obligations-mutuelles.jpg"
                    alt="Le mahr, dot obligatoire dans le mariage islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Obligations mutuelles */}
              {/* ============================================ */}
              <section id="obligations" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les obligations mutuelles des époux
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mariage islamique définit un cadre de droits et de
                  devoirs réciproques. Chaque époux porte une
                  responsabilité envers l&apos;autre, dans un
                  équilibre fondé sur la complémentarité
                  et le respect mutuel. Le Coran résume cette
                  réciprocité de façon concise.
                </p>

                <div className="mt-6 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-base italic leading-relaxed text-foreground">
                    « Les hommes ont autorité sur les femmes,
                    en raison des faveurs qu&apos;Allah accorde à
                    ceux-là sur celles-ci, et aussi à cause des
                    dépenses qu&apos;ils font de leurs biens. »
                  </p>
                  <p className="mt-2 text-sm font-semibold text-secondary">
                    Coran, sourate An-Nisa (4:34)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset, souvent discuté, établit que la
                  responsabilité financière du foyer incombe
                  principalement au mari (qawwama). Cette charge ne confère
                  pas un pouvoir arbitraire, mais une obligation de subvenir aux
                  besoins de la famille. Le verset 2:228 rappelle l&apos;égalité
                  fondamentale : « Elles ont des droits
                  équivalents à leurs obligations,
                  conformément à la bienséance »
                  (sourate Al-Baqarah, 2:228).
                </p>

                {/* Tableau obligations mutuelles */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Obligation
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Époux
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Épouse
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Entretien financier (nafaqa)
                        </td>
                        <td className="py-3 pr-4">
                          Obligation de fournir logement, nourriture,
                          vêtements et soins médicaux
                        </td>
                        <td className="py-3">
                          Aucune obligation financière, même si
                          elle possède ses propres revenus
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Droits conjugaux
                        </td>
                        <td className="py-3 pr-4">
                          Droit à l&apos;intimité dans le respect
                          et la bienveillance
                        </td>
                        <td className="py-3">
                          Droit à l&apos;intimité et au bon
                          traitement de la part du mari
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Respect et bonté
                        </td>
                        <td className="py-3 pr-4">
                          Traiter son épouse avec douceur et
                          considération (ma&apos;ruf)
                        </td>
                        <td className="py-3">
                          Respecter son époux et contribuer à
                          l&apos;harmonie du foyer
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Cohabitation
                        </td>
                        <td className="py-3 pr-4">
                          Offrir un logement décent, adapté à
                          ses moyens
                        </td>
                        <td className="py-3">
                          Résider dans le domicile conjugal
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Éducation des enfants
                        </td>
                        <td className="py-3 pr-4">
                          Responsabilité financière et
                          éducative, modèle moral
                        </td>
                        <td className="py-3">
                          Participation active à
                          l&apos;éducation, transmission des valeurs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (ṣalla Allāhu &apos;alayhi wa
                  sallam) a donné l&apos;exemple le plus éloquent
                  en déclarant : « Les meilleurs d&apos;entre vous
                  sont les meilleurs envers leurs épouses, et je suis le
                  meilleur d&apos;entre vous envers mes épouses. »
                  (rapporté par At-Tirmidhi). Cette parole
                  prophétique place la bonté conjugale au rang des
                  vertus les plus nobles. Ce cadre de responsabilités
                  mutuelles prend une dimension particulière lorsque
                  le couple accueille un enfant, faisant de{" "}
                  <Link href="/maternite-islam-responsabilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la maternité une responsabilité sacrée en islam</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La nafaqa est proportionnelle :</strong> le mari
                      n&apos;est pas tenu de dépasser ses moyens, mais
                      doit assurer un niveau de vie convenable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consultation mutuelle (shura) :</strong> les
                      décisions familiales importantes doivent être
                      prises en concertation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection de l&apos;honneur :</strong> chaque
                      époux doit protéger la réputation et
                      la dignité de l&apos;autre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Patience et pardon :</strong> le Coran exhorte les
                      époux à la patience et au pardon
                      réciproque, particulièrement dans les
                      moments difficiles.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir les droits et devoirs dans le couple"
                  href="/mariage-islam-presages-significations"
                  linkText="Voir la page complète sur le mariage en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Clauses et protection des droits */}
              {/* ============================================ */}
              <section id="clauses" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les clauses particulières et la protection des droits
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des aspects les moins connus du mariage islamique
                  est la possibilité d&apos;y intégrer des
                  clauses particulières (shurut). Ces clauses,
                  négociées avant la signature du contrat,
                  permettent d&apos;adapter le Nikah aux besoins
                  spécifiques du couple, à condition de ne pas
                  contrevenir aux principes fondamentaux de la charia.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (ṣalla Allāhu &apos;alayhi wa
                  sallam) a souligné l&apos;importance de respecter les
                  engagements contractuels : « Les conditions les plus
                  dignes d&apos;être respectées sont celles par
                  lesquelles vous avez rendu l&apos;intimité conjugale
                  licite. » (rapporté par Al-Bukhari et Muslim).
                  Ce hadith confère aux clauses du contrat de mariage
                  une force juridique particulière.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Restriction de la polygamie
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La femme peut stipuler dans le contrat que son mari ne
                        prendra pas de seconde épouse. Cette clause est
                        reconnue par plusieurs écoles juridiques,
                        notamment l&apos;école hanbalite. Si le mari
                        viole cette condition, l&apos;épouse peut
                        demander le divorce.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Droit de travailler ou d&apos;étudier
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;épouse peut inclure une clause
                        garantissant son droit de poursuivre ses études
                        ou d&apos;exercer une activité professionnelle.
                        Ce droit, lorsqu&apos;il est inscrit au contrat,
                        devient contraignant pour le mari.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Conditions de divorce
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La femme peut se réserver le droit de prononcer
                        le divorce (talaq tafwid) dans certaines circonstances
                        prédéfinies. Elle peut également
                        prévoir des compensations financières
                        spécifiques en cas de répudiation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Lieu de résidence et voyages
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le couple peut convenir du lieu de résidence, de
                        la possibilité pour l&apos;épouse de
                        voyager seule ou de rendre visite à sa famille
                        régulièrement. Ces clauses préviennent
                        les désaccords futurs.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les adaptations contemporaines du contrat de mariage
                  islamique sont de plus en plus fréquentes. De
                  nombreux savants encouragent les futurs époux à
                  rédiger un contrat détaillé qui
                  prévoit les scénarios les plus courants
                  (déménagement, gestion des finances, garde des
                  enfants en cas de divorce). Cette démarche s&apos;inscrit
                  pleinement dans l&apos;esprit de la charia, qui valorise la
                  transparence et la protection des droits.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Toute clause contraire aux fondements du mariage islamique
                      est nulle (interdire l&apos;intimité, annuler le
                      mahr, etc.).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Il est recommandé de faire appel à un imam
                      ou un juriste compétent pour la rédaction des
                      clauses.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les clauses doivent être formulées par
                      écrit et signées par les deux parties avant
                      la cérémonie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La communication ouverte entre les fiancés avant
                      le mariage permet d&apos;éviter les malentendus et
                      de poser des bases solides.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Divorce en islam : talaq, khul' et procédures"
                  description="Comprendre les différentes formes de divorce en islam, les droits de chaque époux et les étapes de la séparation."
                  href="/divorce-islam-talaq-khula"
                />
              </section>

              {/* ============================================ */}
              {/* PROFILS : Selon la situation */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils selon votre situation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mariage islamique concerne différentes personnes
                  à différentes étapes de la vie. Voici
                  des orientations adaptées à chaque profil.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le futur marié
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Préparez-vous financièrement et
                      spirituellement. Fixez un mahr raisonnable,
                      renseignez-vous sur vos obligations (nafaqa, bon
                      traitement) et n&apos;hésitez pas à
                      consulter un imam pour comprendre les engagements du
                      contrat. La sincérité dans
                      l&apos;intention (niyya) est la base d&apos;un
                      mariage béni.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour la future mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Informez-vous sur vos droits : le mahr vous appartient
                      exclusivement, vous pouvez ajouter des clauses au contrat
                      et votre consentement est indispensable. N&apos;acceptez
                      jamais un mariage sous pression. Discutez ouvertement
                      avec votre futur époux de vos attentes, de vos
                      projets et des conditions que vous souhaitez inscrire
                      dans le contrat.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour les parents des fiancés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Votre rôle est d&apos;accompagner, pas de
                      contraindre. Le wali veille aux intérêts
                      de sa fille, mais ne peut imposer un mariage contre
                      sa volonté. Facilitez les démarches,
                      encouragez un mahr modéré et favorisez
                      le dialogue entre les futurs époux. Un mariage
                      fondé sur la confiance et la transparence a
                      bien plus de chances de perdurer qu&apos;un mariage
                      imposé par les familles.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* Conseils pratiques */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour un mariage islamique réussi
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà des conditions juridiques, un mariage
                  épanoui repose sur des attitudes concrètes.
                  Les savants et les conseillers familiaux musulmans
                  s&apos;accordent sur plusieurs principes fondamentaux.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        S&apos;entourer de personnes expérimentées
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Consultez un imam, un médiateur familial ou un
                        juriste islamique avant de signer le contrat. Leur
                        expérience permet d&apos;anticiper les
                        difficultés et de rédiger un contrat
                        équilibré.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Communiquer avant tout
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Abordez les sujets importants avant le mariage :
                        projets de vie, gestion financière,
                        éducation des enfants, répartition des
                        tâches. La transparence prévient la
                        majorité des conflits conjugaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir la transparence financière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Définissez ensemble le budget du foyer,
                        le montant du mahr et les éventuelles
                        dépenses partagées. La clarté
                        financière renforce la confiance mutuelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Cultiver la spiritualité commune
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Priez ensemble, lisez le Coran en couple, participez
                        à des cercles de{" "}
                        <Link href="/apprendre-science-religieuse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">science religieuse</Link>. La
                        spiritualité partagée est un ciment
                        puissant pour le couple musulman. Le Prophète
                        a dit : « Qu&apos;Allah fasse miséricorde
                        à l&apos;homme qui se lève la nuit pour
                        prier et qui réveille son épouse. »
                        (rapporté par Abu Dawud).
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Rédigez le contrat par écrit et conservez
                      une copie chez un tiers de confiance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Organisez une walima (repas de noce) même modeste,
                      car c&apos;est une sunna prophétique forte.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      N&apos;hésitez pas à suivre des cours de
                      préparation au mariage proposés par les
                      mosquées ou les associations musulmanes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      En France, effectuez le mariage civil avant ou en
                      parallèle du Nikah pour assurer la protection
                      juridique des deux époux.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* ArticleCTA avant FAQ */}
              {/* ============================================ */}
              <ArticleCTA
                variant="page-mere"
                title="Pour comprendre ce qui est licite et illicite en islam"
                href="/halal-haram-criteres"
                linkText="Découvrir les critères halal et haram"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles liés au mariage en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mariage-islam-presages-significations"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Mariage en islam : présages et significations
                  </Link>
                  <Link
                    href="/divorce-islam-talaq-khula"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Divorce en islam : talaq et khul&apos;
                  </Link>
                  <Link
                    href="/halal-haram-criteres"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Halal et haram : les critères en islam
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
