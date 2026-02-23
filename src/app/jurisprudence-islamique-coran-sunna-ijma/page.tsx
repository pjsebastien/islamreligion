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
    "Sources de la jurisprudence islamique : Coran, Sunna, Ijma",
  description:
    "Découvrez les sources de la jurisprudence islamique : le Coran, la Sunna du Prophète, l&apos;Ijma (consensus), le Qiyas (analogie), l&apos;Ijtihad et les quatre écoles juridiques (madhahib).",
  alternates: {
    canonical:
      "https://www.islamreligion.fr/jurisprudence-islamique-coran-sunna-ijma",
  },
};

const tocItems = [
  { id: "coran", label: "Le Coran, source première" },
  { id: "sunna", label: "La Sunna du Prophète" },
  { id: "ijma", label: "L&apos;Ijma, consensus des savants" },
  { id: "qiyas-ijtihad", label: "Qiyas et Ijtihad" },
  { id: "madhahib", label: "Les quatre écoles juridiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelles sont les sources de la jurisprudence islamique ?",
    answer:
      "Les sources principales de la jurisprudence islamique (fiqh) sont au nombre de quatre : le Coran (parole d&apos;Allah révélée au Prophète Muhammad), la Sunna (paroles, actes et approbations du Prophète), l&apos;Ijma (consensus des savants musulmans sur une question donnée) et le Qiyas (raisonnement par analogie). À ces quatre sources fondamentales s&apos;ajoutent d&apos;autres outils méthodologiques comme l&apos;Ijtihad (effort interprétatif), l&apos;istihsan (préférence juridique) et la maslaha mursala (intérêt général).",
  },
  {
    question:
      "Quelle est la différence entre le Coran et la Sunna comme sources de droit ?",
    answer:
      "Le Coran est la parole directe d&apos;Allah, révélée au Prophète Muhammad par l&apos;intermédiaire de l&apos;ange Jibril (Gabriel). Il constitue la source suprême et incontestée du droit islamique. La Sunna, quant à elle, regroupe les paroles (qawliyya), les actes (fi&apos;liyya) et les approbations tacites (taqririyya) du Prophète. Elle sert à expliquer, préciser et compléter les prescriptions coraniques. Par exemple, le Coran ordonne la prière, mais c&apos;est la Sunna qui en détaille les modalités pratiques.",
  },
  {
    question: "Qu&apos;est-ce que l&apos;Ijma en islam ?",
    answer:
      "L&apos;Ijma désigne le consensus unanime des savants musulmans qualifiés (mujtahidun) d&apos;une époque donnée sur une question juridique précise. Pour qu&apos;un Ijma soit valide, il doit réunir l&apos;accord de tous les savants compétents, se fonder sur un texte du Coran ou de la Sunna, et concerner un point de droit précis. L&apos;Ijma est considéré comme une preuve contraignante, car le Prophète a dit : Ma communauté ne se réunira jamais sur une erreur (rapporté par At-Tirmidhi).",
  },
  {
    question: "Comment fonctionne le Qiyas (raisonnement par analogie) ?",
    answer:
      "Le Qiyas consiste à appliquer le jugement d&apos;un cas déjà tranché par le Coran ou la Sunna à un cas nouveau présentant la même cause juridique effective (&apos;illa). Quatre éléments sont nécessaires : le cas original (asl) avec son jugement connu, le cas nouveau (far&apos;) à résoudre, le jugement du cas original (hukm) et la cause commune (&apos;illa) qui relie les deux cas. Par exemple, l&apos;interdiction coranique du vin a été étendue par analogie à toute substance enivrante, la cause commune étant l&apos;ivresse.",
  },
  {
    question: "Quelles sont les quatre écoles juridiques en islam ?",
    answer:
      "Les quatre écoles juridiques sunnites (madhahib) sont : l&apos;école hanafite (fondée par l&apos;imam Abu Hanifa, répandue en Turquie, Asie centrale et sous-continent indien), l&apos;école malikite (fondée par l&apos;imam Malik ibn Anas, dominante en Afrique du Nord et de l&apos;Ouest), l&apos;école chaféite (fondée par l&apos;imam Ash-Shafi&apos;i, présente en Asie du Sud-Est et Afrique de l&apos;Est) et l&apos;école hanbalite (fondée par l&apos;imam Ahmad ibn Hanbal, prédominante dans la péninsule arabique).",
  },
  {
    question: "L&apos;Ijtihad est-il encore pratiqué aujourd&apos;hui ?",
    answer:
      "Oui, l&apos;Ijtihad continue d&apos;être pratiqué, notamment pour répondre aux questions contemporaines qui ne trouvent pas de réponse directe dans les textes fondateurs. Les grands conseils de fatwa et les académies de fiqh internationales exercent un Ijtihad collectif sur des sujets tels que la bioéthique, la finance islamique numérique, les cryptomonnaies ou l&apos;intelligence artificielle. Cependant, cet effort interprétatif reste réservé aux savants remplissant les conditions requises de connaissance du Coran, de la Sunna, de la langue arabe et des principes de la jurisprudence.",
  },
  {
    question:
      "Les sources du droit islamique s&apos;adaptent-elles aux enjeux modernes ?",
    answer:
      "Les sources du droit islamique offrent un cadre méthodologique suffisamment souple pour aborder les enjeux contemporains. Le Qiyas et l&apos;Ijtihad permettent d&apos;étendre les principes fondamentaux à des situations inédites. Les académies de fiqh internationales se penchent régulièrement sur des questions modernes comme la procréation médicalement assistée, les transactions numériques, la finance décentralisée et l&apos;éthique de l&apos;intelligence artificielle, en s&apos;appuyant toujours sur les textes fondateurs.",
  },
  {
    question:
      "Tout musulman peut-il interpréter directement le Coran ?",
    answer:
      "Tout musulman est encouragé à lire et à méditer le Coran, mais l&apos;interprétation juridique (tafsir ahkam) et l&apos;extraction de règles de droit nécessitent une formation approfondie. Le mujtahid (celui qui pratique l&apos;Ijtihad) doit maîtriser la langue arabe classique, connaître les sciences du Coran et du hadith, comprendre les causes de révélation (asbab an-nuzul), maîtriser les principes de la jurisprudence (usul al-fiqh) et connaître les points de consensus. Sans cette formation, le risque d&apos;interprétation erronée est considérable.",
  },
];

export default function JurisprudenceIslamique() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/jurisprudence-islamique-coran-sunna-ijma/#article",
        headline:
          "Sources de la jurisprudence islamique : Coran, Sunna, Ijma",
        description:
          "Découvrez les sources de la jurisprudence islamique : le Coran, la Sunna, l&apos;Ijma, le Qiyas, l&apos;Ijtihad et les quatre écoles juridiques.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Sources-de-la-jurisprudence-islamique-Coran-Sunna-Ijma-1.jpg",
        datePublished: "2025-08-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/jurisprudence-islamique-coran-sunna-ijma/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/jurisprudence-islamique-coran-sunna-ijma/#breadcrumb",
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
            name: "Jurisprudence islamique",
            item: "https://www.islamreligion.fr/jurisprudence-islamique-coran-sunna-ijma",
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
          title="Sources de la jurisprudence islamique : Coran, Sunna, Ijma"
          subtitle="Comprendre les fondements du fiqh, des textes révélés aux méthodes d&apos;interprétation des savants musulmans."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Sources-de-la-jurisprudence-islamique-Coran-Sunna-Ijma-1.jpg"
          imageAlt="Sources de la jurisprudence islamique, Coran, Sunna, Ijma"
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
                <span className="text-foreground">
                  Jurisprudence islamique
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La jurisprudence islamique (fiqh) repose sur un ensemble
                  structuré de sources qui fondent la législation musulmane.
                  Du Coran, parole révélée d&apos;Allah, à la Sunna
                  prophétique, en passant par le consensus des savants
                  (Ijma) et le raisonnement par analogie (Qiyas), chaque
                  source joue un rôle précis dans l&apos;élaboration du
                  droit islamique. Quatre grandes écoles juridiques ont
                  systématisé ces méthodes pour répondre aux questions de
                  la vie quotidienne et aux défis contemporains.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le Coran */}
              {/* ============================================ */}
              <section id="coran" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Coran : source première de la législation islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran constitue la pierre angulaire de toute la
                  jurisprudence islamique. Révélé au Prophète Muhammad
                  (paix et bénédictions sur lui) sur une période de
                  vingt-trois ans, il se compose de 114 sourates et de
                  plus de 6 000 versets. Parmi ceux-ci, environ 600
                  versets traitent directement de questions juridiques,
                  couvrant des domaines aussi variés que le droit familial,
                  les transactions commerciales, le droit pénal et les
                  obligations rituelles.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La prééminence du Coran sur toute autre source ne fait
                  l&apos;objet d&apos;aucune contestation parmi les
                  savants musulmans. Allah dit dans le Coran :
                  &laquo; Obéissez à Allah et obéissez au Messager et à
                  ceux d&apos;entre vous qui détiennent l&apos;autorité &raquo;
                  (sourate An-Nisa, 4:59). Ce verset établit la hiérarchie
                  des sources : d&apos;abord la parole d&apos;Allah, puis
                  celle du Prophète, puis le raisonnement des savants
                  qualifiés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les versets juridiques du Coran se distinguent par leur
                  universalité et leur capacité à s&apos;appliquer à
                  travers les époques. Les règles relatives à
                  l&apos;héritage (sourate An-Nisa), l&apos;interdiction
                  de l&apos;usure (sourate Al-Baqarah) ou <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les conditions du mariage en islam</Link> (sourate An-Nur) témoignent de cette
                  dimension intemporelle. Certains versets énoncent des
                  règles précises et détaillées, tandis que d&apos;autres
                  posent des principes généraux que la Sunna et les savants
                  viennent préciser.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Versets définitifs (qat&apos;i) :</strong> règles
                      claires ne laissant aucune place à l&apos;interprétation,
                      comme l&apos;interdiction du meurtre ou du vol.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Versets spéculatifs (dhanni) :</strong> textes
                      ouverts à l&apos;interprétation, nécessitant le recours
                      à la Sunna et à l&apos;Ijtihad des savants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Principes universels :</strong> la justice,
                      la préservation de la vie, la protection des biens et
                      la liberté de conscience irriguent l&apos;ensemble du
                      texte coranique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Abrogeant et abrogé (nasikh wa mansukh) :</strong>{" "}
                      certains versets ont remplacé des prescriptions
                      antérieures, ce qui nécessite une connaissance fine de
                      la chronologie de la révélation.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Sources-de-la-jurisprudence-islamique-Coran-Sunna-Ijma-1.jpg"
                    alt="Le Coran, source première de la jurisprudence islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : La Sunna */}
              {/* ============================================ */}
              <section id="sunna" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La Sunna : paroles, actes et approbations du Prophète
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La Sunna représente la deuxième source de la
                  jurisprudence islamique par ordre d&apos;importance.
                  Elle regroupe l&apos;ensemble des paroles, des actes et
                  des approbations tacites du Prophète Muhammad (paix et
                  bénédictions sur lui), transmis par ses compagnons et
                  consignés dans les recueils de hadiths. Allah souligne
                  l&apos;importance de la Sunna dans le Coran :
                  &laquo; Et Nous avons fait descendre vers toi le
                  Rappel, pour que tu exposes clairement aux gens ce
                  qu&apos;on a fait descendre pour eux &raquo; (sourate
                  An-Nahl, 16:44).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants du hadith ont développé une science
                  rigoureuse pour vérifier l&apos;authenticité des
                  traditions prophétiques. Le système de l&apos;isnad
                  (chaîne de transmission) permet de remonter chaque récit
                  jusqu&apos;au Prophète en évaluant la fiabilité,
                  la mémoire et la probité morale de chaque transmetteur.
                  Les recueils de l&apos;imam Al-Bukhari et de l&apos;imam
                  Muslim sont considérés comme les plus fiables par la
                  communauté savante sunnite.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La Sunna remplit trois fonctions fondamentales dans
                  l&apos;élaboration du droit islamique. Elle peut
                  confirmer un jugement déjà présent dans le Coran,
                  expliquer et détailler une prescription coranique
                  générale, ou encore légiférer dans des domaines où le
                  Coran ne s&apos;est pas prononcé de manière explicite.
                  Le Prophète (paix et bénédictions sur lui) a dit :
                  &laquo; Prenez de moi vos rites &raquo; (rapporté par
                  Muslim), illustrant le rôle pratique et normatif de la
                  Sunna dans la vie du croyant.
                </p>

                {/* Tableau types de Sunna */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de Sunna
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Définition
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Exemple
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Qawliyya (verbale)
                        </td>
                        <td className="py-3 pr-4">
                          Paroles prononcées par le Prophète sur un sujet
                          précis
                        </td>
                        <td className="py-3">
                          &laquo; Les actes ne valent que par les
                          intentions &raquo; (Al-Bukhari)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fi&apos;liyya (pratique)
                        </td>
                        <td className="py-3 pr-4">
                          Actes accomplis par le Prophète, observés et
                          rapportés par les compagnons
                        </td>
                        <td className="py-3">
                          La manière d&apos;accomplir la prière, les
                          ablutions, le pèlerinage
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Taqririyya (approbative)
                        </td>
                        <td className="py-3 pr-4">
                          Actes ou paroles de compagnons approuvés
                          tacitement par le Prophète
                        </td>
                        <td className="py-3">
                          Le Prophète ne s&apos;est pas opposé à certaines
                          pratiques de ses compagnons, les validant ainsi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rôle explicatif
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La Sunna précise les modalités pratiques des
                        obligations coraniques. Le Coran ordonne <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la prière avec excellence</Link>, mais c&apos;est le Prophète qui en a
                        enseigné les horaires, les mouvements et les
                        conditions de validité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rôle législatif
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La Sunna établit des règles dans des domaines où
                        le Coran reste silencieux, contribuant ainsi à définir <Link href="/halal-haram-criteres" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les critères du halal et du haram</Link>. Par exemple,
                        l&apos;interdiction de porter simultanément l&apos;or
                        et la soie pour les hommes provient exclusivement de
                        la tradition prophétique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Rôle confirmatif
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La Sunna vient parfois renforcer un jugement déjà
                        présent dans le Coran. L&apos;interdiction du
                        mensonge, de l&apos;injustice ou de la
                        consommation d&apos;alcool est ainsi affirmée dans
                        les deux sources.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Sources-de-la-jurisprudence-islamique-Coran-Sunna-Ijma-1.jpg"
                    alt="La Sunna prophétique, deuxième source de la jurisprudence islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Différence entre halal et haram : critères de licéité"
                  description="Comprenez les cinq catégories juridiques et les critères qui déterminent le licite et l&apos;illicite en islam."
                  href="/halal-haram-criteres"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : L'Ijma */}
              {/* ============================================ */}
              <section id="ijma" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;Ijma : le consensus des savants
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;Ijma constitue la troisième source de la
                  jurisprudence islamique. Il désigne l&apos;accord
                  unanime des savants musulmans qualifiés (mujtahidun)
                  d&apos;une même époque sur une question juridique
                  donnée. Le fondement coranique de l&apos;Ijma se trouve
                  notamment dans la parole d&apos;Allah : &laquo; Et quiconque
                  fait scission d&apos;avec le Messager, après que le
                  droit chemin lui est apparu, et suit un sentier autre que
                  celui des croyants, alors Nous le laisserons là où il
                  s&apos;est engagé &raquo; (sourate Al-Hashr, 59:7, dans
                  son sens élargi rattaché au consensus de la communauté).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour qu&apos;un Ijma soit reconnu comme valide, plusieurs
                  conditions doivent être réunies. Les savants qui y
                  participent doivent avoir atteint le rang de mujtahid,
                  c&apos;est-à-dire posséder une maîtrise approfondie du
                  Coran, de la Sunna, de la langue arabe et des principes
                  de la jurisprudence. L&apos;unanimité doit être réelle
                  et non simplement majoritaire. Enfin, le consensus doit
                  porter sur une question de droit clairement définie et
                  reposer sur une preuve textuelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les exemples historiques d&apos;Ijma, on peut citer
                  la compilation du Coran en un seul volume sous le
                  califat d&apos;Abu Bakr, la fixation du nombre de
                  rak&apos;at (unités de prière) pour chaque prière
                  obligatoire, ou encore l&apos;interdiction du mariage
                  avec la grand-mère. Ces consensus ont traversé les
                  siècles et font partie intégrante du patrimoine
                  juridique commun de la communauté musulmane.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ijma explicite (sarih) :</strong> tous les
                      savants qualifiés se prononcent clairement sur la
                      question et adoptent la même position.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ijma tacite (sukuti) :</strong> certains
                      savants émettent un avis et les autres ne
                      s&apos;y opposent pas, leur silence valant
                      approbation selon une partie des juristes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Force probante :</strong> une fois établi,
                      l&apos;Ijma a une valeur contraignante et ne peut
                      être contredit par un Ijtihad individuel ultérieur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rôle contemporain :</strong> les académies
                      de fiqh internationales perpétuent la tradition de
                      l&apos;Ijma en réunissant des savants du monde entier
                      pour statuer sur les questions modernes.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Sources-de-la-jurisprudence-islamique-Coran-Sunna-Ijma-1.jpg"
                    alt="L&apos;Ijma, consensus des savants musulmans"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Qiyas et Ijtihad */}
              {/* ============================================ */}
              <section id="qiyas-ijtihad" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Qiyas et l&apos;Ijtihad : raisonnement et effort
                  interprétatif
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Qiyas (raisonnement par analogie) et l&apos;Ijtihad
                  (effort interprétatif) représentent les outils
                  méthodologiques qui permettent à la jurisprudence
                  islamique de répondre aux situations nouvelles. Le
                  Qiyas consiste à étendre le jugement d&apos;un cas
                  traité par le Coran ou la Sunna à un cas nouveau qui
                  partage la même cause juridique effective
                  (&apos;illa). L&apos;Ijtihad, quant à lui, désigne
                  l&apos;effort intellectuel déployé par un savant
                  qualifié pour déduire une règle juridique à partir des
                  sources fondatrices.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Qiyas repose sur quatre piliers : le cas original
                  (asl) dont le jugement est connu par un texte, le cas
                  nouveau (far&apos;) qui nécessite un verdict, le
                  jugement du cas original (hukm) que l&apos;on souhaite
                  étendre, et la cause commune (&apos;illa) qui relie les
                  deux situations. Par exemple, l&apos;interdiction du vin
                  mentionnée dans le Coran a été étendue par Qiyas à
                  toute substance enivrante, la cause commune étant
                  l&apos;ivresse et l&apos;altération de la raison.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;Ijtihad ne peut être exercé que par un savant
                  remplissant des conditions strictes : maîtrise du Coran
                  et de la Sunna, connaissance approfondie de la langue
                  arabe, compréhension des principes de la jurisprudence
                  (usul al-fiqh), connaissance des points de consensus
                  (Ijma) et capacité de raisonnement rigoureux. Le
                  Prophète (paix et bénédictions sur lui) a encouragé
                  l&apos;Ijtihad en disant à Mu&apos;adh ibn Jabal, lors
                  de son envoi au Yémen : &laquo; Comment jugeras-tu ? &raquo;
                  Mu&apos;adh répondit qu&apos;il jugerait d&apos;abord par
                  le Livre d&apos;Allah, puis par la Sunna du Prophète, puis
                  par son Ijtihad (rapporté par Abu Dawud).
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Bioéthique et questions médicales
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants contemporains utilisent le Qiyas et
                        l&apos;Ijtihad pour se prononcer sur la greffe
                        d&apos;organes, la procréation médicalement
                        assistée, le diagnostic prénatal et les questions
                        liées à la fin de vie, en se fondant sur les
                        principes de préservation de la vie et de
                        prévention du mal.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Finance et transactions numériques
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les cryptomonnaies, les contrats intelligents et
                        les plateformes de financement participatif font
                        l&apos;objet d&apos;un Ijtihad collectif au sein
                        des académies de fiqh, qui évaluent leur
                        conformité aux principes d&apos;interdiction du
                        riba (usure) et du gharar (incertitude
                        excessive).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Intelligence artificielle et éthique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;utilisation de l&apos;intelligence
                        artificielle dans la prise de décision, la
                        surveillance et l&apos;automatisation soulève des
                        questions inédites que les savants abordent par
                        l&apos;Ijtihad, en s&apos;appuyant sur les
                        finalités de la charia (maqasid ash-shari&apos;a) :
                        préservation de la religion -- notamment par <Link href="/conditions-maghfira-pardon" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le pardon divin et ses conditions</Link> --, de la vie, de la
                        raison, de la descendance et des biens.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le mujtahid qui se trompe dans son effort
                      interprétatif reçoit tout de même une récompense,
                      et s&apos;il a raison, il en reçoit deux (hadith
                      rapporté par Al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;Ijtihad collectif (jama&apos;i) est
                      aujourd&apos;hui privilégié pour les questions
                      complexes, car il réduit le risque d&apos;erreur
                      individuelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le Qiyas n&apos;est pas accepté de la même manière
                      par toutes les écoles : l&apos;école hanbalite y
                      recourt plus rarement que l&apos;école hanafite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les maqasid ash-shari&apos;a (finalités de la loi
                      islamique) servent de boussole à tout Ijtihad
                      contemporain, orientant le raisonnement vers le
                      bien commun.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Sources-de-la-jurisprudence-islamique-Coran-Sunna-Ijma-1.jpg"
                    alt="Le Qiyas et l&apos;Ijtihad dans la jurisprudence islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir vos connaissances en sciences islamiques"
                  href="/apprendre-science-religieuse-islam"
                  linkText="Découvrir les sciences religieuses en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Les quatre écoles juridiques */}
              {/* ============================================ */}
              <section id="madhahib" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les quatre écoles juridiques (madhahib)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au fil des siècles, quatre grandes écoles juridiques
                  sunnites se sont constituées, chacune fondée par un imam
                  de renom et caractérisée par une méthodologie propre
                  d&apos;extraction des règles à partir des sources. Ces
                  écoles ne s&apos;opposent pas sur les fondements de la
                  foi, mais diffèrent dans leur approche du fiqh et dans
                  la hiérarchie qu&apos;elles accordent aux sources
                  secondaires. Leur diversité témoigne de la richesse
                  intellectuelle de la civilisation islamique et de la
                  souplesse de la charia.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Chaque école a développé un corpus de règles couvrant
                  les obligations rituelles, les transactions, le droit
                  familial et le droit pénal. Les divergences entre les
                  madhahib portent essentiellement sur des questions de
                  détail, non sur les principes fondamentaux. Le respect
                  mutuel entre les écoles est un trait marquant de la
                  tradition juridique islamique, et les savants ont
                  toujours reconnu la légitimité des avis différents dès
                  lors qu&apos;ils se fondent sur les textes.
                </p>

                {/* Tableau des madhahib */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          École
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Fondateur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Méthode
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Zone géographique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hanafite
                        </td>
                        <td className="py-3 pr-4">
                          Imam Abu Hanifa (699-767)
                        </td>
                        <td className="py-3 pr-4">
                          Large recours au Qiyas et à l&apos;istihsan
                          (préférence juridique) ; privilégie le
                          raisonnement rationnel
                        </td>
                        <td className="py-3">
                          Turquie, sous-continent indien, Asie centrale,
                          Balkans
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Malikite
                        </td>
                        <td className="py-3 pr-4">
                          Imam Malik ibn Anas (711-795)
                        </td>
                        <td className="py-3 pr-4">
                          Importance accordée à la pratique des gens de
                          Médine (&apos;amal ahl al-Madina) et à la
                          maslaha mursala (intérêt général)
                        </td>
                        <td className="py-3">
                          Afrique du Nord, Afrique de l&apos;Ouest,
                          Espagne historique (Al-Andalus)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Chaféite
                        </td>
                        <td className="py-3 pr-4">
                          Imam Ash-Shafi&apos;i (767-820)
                        </td>
                        <td className="py-3 pr-4">
                          Systématisation des usul al-fiqh ; équilibre
                          entre le texte et le raisonnement ; recours
                          modéré au Qiyas
                        </td>
                        <td className="py-3">
                          Asie du Sud-Est, Afrique de l&apos;Est, Yémen,
                          Égypte
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hanbalite
                        </td>
                        <td className="py-3 pr-4">
                          Imam Ahmad ibn Hanbal (780-855)
                        </td>
                        <td className="py-3 pr-4">
                          Attachement strict aux textes du Coran et de la
                          Sunna ; recours limité au Qiyas ; méfiance
                          envers le raisonnement spéculatif
                        </td>
                        <td className="py-3">
                          Péninsule arabique (Arabie saoudite, Qatar)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam Ash-Shafi&apos;i est souvent considéré comme
                  le père fondateur de la méthodologie juridique islamique
                  (usul al-fiqh) grâce à son ouvrage Ar-Risala, dans
                  lequel il a posé les règles d&apos;extraction des
                  jugements à partir du Coran et de la Sunna. Son approche
                  a influencé l&apos;ensemble des écoles, y compris celles
                  qui ne partagent pas toutes ses conclusions.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour l&apos;étudiant en sciences religieuses
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Comprendre les sources de la jurisprudence islamique
                      permet de saisir la logique qui sous-tend chaque avis
                      juridique. L&apos;étude des usul al-fiqh constitue le
                      socle de toute formation sérieuse en sciences
                      islamiques et ouvre la voie à une compréhension
                      méthodique des textes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour l&apos;imam et le prédicateur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La maîtrise des sources et des méthodes de la
                      jurisprudence est indispensable pour orienter les
                      fidèles avec justesse. Un imam qui connaît les
                      divergences entre les écoles peut proposer des
                      réponses nuancées, adaptées au contexte de sa
                      communauté, tout en restant fidèle aux textes
                      fondateurs.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le musulman curieux
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Connaître les sources du fiqh aide à comprendre
                      pourquoi les savants peuvent parfois donner des avis
                      différents sur une même question, que ce soit en matière de droit familial ou sur des sujets comme <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">l&apos;interprétation des rêves en islam</Link>. Cette connaissance
                      renforce la confiance dans la méthodologie islamique
                      et protège contre les interprétations hasardeuses ou
                      les discours sans fondement textuel.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Acc\u00e9dez aux sources du fiqh dans leur langue originale"
                description="Le Coran, la Sunna et les ouvrages de jurisprudence sont en arabe. Formez-vous pour lire et comprendre les textes de r\u00e9f\u00e9rence."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur la jurisprudence islamique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/halal-haram-criteres"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Halal et haram : critères de licéité
                  </Link>
                  <Link
                    href="/apprendre-science-religieuse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre les sciences religieuses
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
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
