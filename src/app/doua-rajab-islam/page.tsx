import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua du mois de Rajab en islam : invocations et mérites du mois sacré",
  description:
    "Découvrez les douas du mois de Rajab en islam : l&apos;invocation Allahumma barik lana fi Rajab, son statut chez les savants, les actes d&apos;adoration recommandés et la préparation au Ramadan.",
  openGraph: {
    title:
      "Doua du mois de Rajab en islam : invocations et mérites du mois sacré",
    description:
      "Les invocations du mois de Rajab en islam : doua Allahumma barik lana fi Rajab, mérites du mois sacré, préparation au Ramadan et actes d&apos;adoration recommandés.",
    url: "https://www.islamreligion.fr/doua-rajab-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-rajab-islam",
  },
};

const tocItems = [
  { id: "rajab-mois-sacre", label: "Rajab : un mois sacré en islam" },
  { id: "doua-allahumma-barik", label: "Doua Allahumma barik lana fi Rajab" },
  { id: "statut-doua-savants", label: "Statut de cette doua chez les savants" },
  { id: "douas-rajab-authentiques", label: "Douas authentiques à réciter pendant Rajab" },
  { id: "actes-adoration-rajab", label: "Actes d&apos;adoration à multiplier" },
  { id: "preparer-ramadan", label: "Rajab : la porte vers le Ramadan" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua du mois de Rajab en islam ?",
    answer:
      "La doua la plus connue du mois de Rajab est : « Allahumma barik lana fi Rajab wa Sha&apos;ban wa ballighna Ramadan » (Seigneur, bénis-nous les mois de Rajab et de Sha&apos;ban, et fais-nous parvenir au Ramadan). Cette invocation est attribuée au Prophète (paix et salut sur lui) et rapportée par Ahmad et at-Tabarani, bien que sa chaîne de transmission soit jugée faible (da&apos;if) par la majorité des savants.",
  },
  {
    question: "La doua Allahumma barik lana fi Rajab est-elle authentique ?",
    answer:
      "La chaîne de transmission de cette doua est jugée faible (da&apos;if) par la majorité des savants du hadith, notamment l&apos;imam an-Nawawi et cheikh al-Albani. Cependant, de nombreux savants comme Ibn Rajab al-Hanbali considèrent qu&apos;il est permis de la réciter car elle entre dans le cadre des invocations générales et ne contient aucune innovation dans le sens. L&apos;intention reste de demander la bénédiction d&apos;Allah.",
  },
  {
    question: "Pourquoi Rajab est-il un mois sacré en islam ?",
    answer:
      "Rajab fait partie des quatre mois sacrés (al-ashhur al-hurum) mentionnés dans le Coran (sourate at-Tawba, 9:36). Ces mois sont Dhul Qi&apos;da, Dhul Hijja, Muharram et Rajab. Pendant ces mois, le combat était interdit chez les Arabes avant l&apos;islam, et la gravité des péchés y est amplifiée. Allah a choisi ces mois et les a rendus sacrés depuis la création des cieux et de la terre.",
  },
  {
    question: "Quels actes d&apos;adoration sont recommandés en Rajab ?",
    answer:
      "Les savants recommandent de multiplier les actes d&apos;adoration généraux pendant Rajab : le jeûne surérogatoire (sans spécifier de jours particuliers à Rajab), les prières nocturnes (qiyam al-layl), la lecture du Coran, le dhikr, l&apos;aumône et le repentir sincère (tawba). Il n&apos;y a pas de prière spéciale ni de jeûne spécifique à Rajab qui soit authentiquement établi dans la Sunna.",
  },
  {
    question: "Peut-on jeûner pendant le mois de Rajab ?",
    answer:
      "Oui, il est permis de jeûner pendant le mois de Rajab de manière surérogatoire, comme on le ferait n&apos;importe quel autre mois. Cependant, les savants comme Ibn Taymiyya mettent en garde contre le fait de spécifier Rajab par un jeûne particulier (jeûner tout le mois par exemple) en croyant que cela a un mérite spécial, car aucun hadith authentique ne l&apos;établit. Le jeûne des lundis et jeudis ou des jours blancs reste recommandé toute l&apos;année.",
  },
  {
    question: "Quel est le lien entre Rajab et le Ramadan ?",
    answer:
      "Rajab est considéré comme le début de la préparation spirituelle vers le Ramadan. Un proverbe célèbre dit : « Rajab est le mois d&apos;Allah, Sha&apos;ban est le mois du Prophète, et Ramadan est le mois de la Oumma. » Rajab marque le moment où le croyant commence à préparer son coeur, à augmenter ses invocations et à se repentir pour arriver au Ramadan dans les meilleures dispositions spirituelles.",
  },
  {
    question: "Y a-t-il des innovations (bid&apos;a) liées au mois de Rajab ?",
    answer:
      "Oui, plusieurs pratiques innovées sont associées à Rajab et n&apos;ont aucun fondement dans la Sunna : la prière de « Salat ar-Ragha&apos;ib » le premier vendredi de Rajab, le sacrifice spécial appelé « al-&apos;atira », ou encore la célébration du 27 Rajab comme nuit de l&apos;Isra et du Mi&apos;raj avec des rites particuliers. Les savants recommandent de s&apos;en tenir aux actes d&apos;adoration généraux établis par la Sunna.",
  },
  {
    question: "Quand commence le mois de Rajab ?",
    answer:
      "Le mois de Rajab est le septième mois du calendrier hégirien (lunaire islamique). Il se situe entre Joumada ath-thani (6e mois) et Sha&apos;ban (8e mois), qui précède directement le Ramadan. Sa date de début varie chaque année dans le calendrier grégorien car le calendrier lunaire est plus court d&apos;environ 11 jours par rapport au calendrier solaire.",
  },
];

export default function DouaRajabIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-rajab-islam/#article",
        headline:
          "Doua du mois de Rajab en islam : invocations et mérites du mois sacré",
        description:
          "Les douas du mois de Rajab en islam : invocation Allahumma barik lana fi Rajab, statut chez les savants, actes d'adoration et préparation au Ramadan.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-04-17",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-rajab-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-rajab-islam/#breadcrumb",
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
            name: "Doua en islam",
            item: "https://www.islamreligion.fr/doua-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Doua du mois de Rajab",
            item: "https://www.islamreligion.fr/doua-rajab-islam",
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
          title="Doua du mois de Rajab en islam : invocations et mérites du mois sacré"
          subtitle="Découvrez les invocations authentiques du mois sacré de Rajab, leur statut chez les savants et comment préparer votre coeur pour le Ramadan."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquée avec moucharabieh et lumière dorée symbolisant la sacralité du mois de Rajab en islam"
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
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua du mois de Rajab</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rajab est l&apos;un des quatre mois sacrés en islam, période
                  durant laquelle le croyant est invité à multiplier les
                  invocations et les actes d&apos;adoration. La doua la plus
                  célèbre de ce mois est &laquo;&nbsp;Allahumma barik lana fi
                  Rajab wa Sha&apos;ban wa ballighna Ramadan&nbsp;&raquo;.
                  Bien que sa chaîne de transmission soit faible, les savants
                  autorisent largement sa récitation. Ce mois marque le début
                  de la préparation spirituelle vers le Ramadan.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Rajab mois sacré */}
              {/* ============================================ */}
              <section id="rajab-mois-sacre" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rajab : un mois sacré en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mois de <strong>Rajab</strong> occupe une place
                  particulière dans le calendrier islamique. Septième mois de
                  l&apos;année hégirien, il fait partie des quatre mois sacrés
                  (<em>al-ashhur al-hurum</em>) qu&apos;Allah a mentionnés dans
                  le Coran. Cette sacralité n&apos;est pas une convention
                  humaine : elle est un décret divin établi depuis la création
                  des cieux et de la terre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Le nombre de mois,
                  auprès d&apos;Allah, est de douze mois, dans la prescription
                  d&apos;Allah, le jour où Il créa les cieux et la terre. Quatre
                  d&apos;entre eux sont sacrés&nbsp;&raquo; (at-Tawba, 9:36).
                  Ces quatre mois sont Dhul Qi&apos;da, Dhul Hijja, Muharram et
                  Rajab. Le Prophète (paix et salut sur lui) a précisé que Rajab
                  est &laquo;&nbsp;le mois isolé&nbsp;&raquo; (<em>al-fard</em>)
                  car il est le seul des quatre mois sacrés à ne pas être
                  consécutif aux trois autres.
                </p>

                <HadithCard
                  arabic="إن الزمان قد استدار كهيئته يوم خلق الله السماوات والأرض، السنة اثنا عشر شهرا منها أربعة حرم"
                  text="Le temps a repris sa forme originelle, telle qu'elle était le jour où Allah créa les cieux et la terre. L'année compte douze mois, dont quatre sont sacrés."
                  source="Rapporté par al-Bukhari (4662) et Muslim (1679)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le nom &laquo;&nbsp;Rajab&nbsp;&raquo; vient de la racine
                  arabe &laquo;&nbsp;rajaba&nbsp;&raquo; qui signifie
                  &laquo;&nbsp;vénérer, respecter&nbsp;&raquo;. Les Arabes
                  pré-islamiques respectaient déjà ce mois en cessant les
                  combats et les raids. L&apos;islam a confirmé cette sacralité
                  tout en purifiant les pratiques qui y étaient associées. Pendant
                  ce mois, la gravité des péchés est amplifiée, tout comme la
                  récompense des bonnes actions est multipliée selon de nombreux
                  savants.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un mois de repentir :</strong> Rajab est une
                      occasion privilégiée pour se repentir et revenir vers
                      Allah avant le Ramadan. Le croyant y prépare son coeur
                      et purifie ses intentions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un mois de doua :</strong> l&apos;invocation y
                      prend une dimension particulière, car le croyant demande
                      à Allah de lui accorder la bénédiction de parvenir au
                      Ramadan en bonne santé et dans la foi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un mois de préparation :</strong> les pieux
                      prédécesseurs considéraient Rajab comme le mois des
                      semailles, Sha&apos;ban comme le mois de l&apos;arrosage
                      et Ramadan comme le mois de la récolte.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
                    alt="Croissant de lune doré et lanternes symbolisant le mois sacré de Rajab en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua Allahumma barik lana fi Rajab */}
              {/* ============================================ */}
              <section id="doua-allahumma-barik" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua &laquo;&nbsp;Allahumma barik lana fi Rajab&nbsp;&raquo; : texte et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua la plus célèbre associée au mois de Rajab est
                  l&apos;invocation par laquelle le croyant demande à Allah de
                  bénir les mois de Rajab et de Sha&apos;ban et de lui permettre
                  d&apos;atteindre le Ramadan. Cette doua est attribuée au
                  Prophète (paix et salut sur lui) et rapportée par l&apos;imam
                  Ahmad dans son Musnad et par at-Tabarani.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ بَارِكْ لَنَا فِي رَجَبٍ وَشَعْبَانَ وَبَلِّغْنَا رَمَضَانَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma barik lana fi Rajab wa Sha&apos;ban wa ballighna Ramadan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, bénis-nous les mois de Rajab et de Sha&apos;ban, et fais-nous parvenir au Ramadan&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ahmad (2346) et at-Tabarani dans al-Awsat (3939)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation exprime une réalité profonde : le croyant ne
                  considère jamais le Ramadan comme acquis. Il demande
                  humblement à Allah de lui accorder la vie et la santé
                  nécessaires pour atteindre ce mois béni. Combien de personnes
                  ont commencé l&apos;année sans jamais voir le Ramadan suivant ?
                  Cette doua est un rappel de notre fragilité et de notre
                  dépendance totale envers Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le fait de mentionner les trois mois ensemble &mdash; Rajab,
                  Sha&apos;ban et Ramadan &mdash; montre l&apos;importance de la
                  continuité spirituelle. Le croyant ne doit pas attendre le
                  Ramadan pour commencer à adorer Allah avec ferveur. La
                  préparation commence dès Rajab, s&apos;intensifie pendant
                  Sha&apos;ban et atteint son apogée durant le Ramadan. C&apos;est
                  une progression spirituelle que les pieux prédécesseurs
                  (<em>salaf</em>) respectaient scrupuleusement.
                </p>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم يصوم شعبان إلا قليلا"
                  text="Le Messager d'Allah (paix et salut sur lui) jeûnait la quasi-totalité du mois de Sha'ban."
                  source="Rapporté par al-Bukhari (1969) et Muslim (1156)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith authentique montre que le Prophète (paix et salut sur
                  lui) intensifiait ses actes d&apos;adoration durant la
                  période qui précède le Ramadan. Rajab et Sha&apos;ban forment
                  ensemble un couloir spirituel qui mène vers le mois du Coran.
                  La <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pendant le Ramadan</Link> prend
                  alors tout son sens lorsque le croyant s&apos;y est préparé
                  depuis Rajab.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Apprenez vos douas en arabe"
                description="Comprendre l&apos;arabe vous permet de saisir le sens profond des invocations prophétiques et du Coran. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Statut de la doua chez les savants */}
              {/* ============================================ */}
              <section id="statut-doua-savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Statut de la doua de Rajab chez les savants
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua &laquo;&nbsp;Allahumma barik lana fi Rajab wa
                  Sha&apos;ban wa ballighna Ramadan&nbsp;&raquo; fait
                  l&apos;objet d&apos;un débat parmi les savants du hadith
                  concernant son authenticité. Il est important pour le
                  musulman de connaître ce débat afin de pratiquer en toute
                  connaissance de cause.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La chaîne de transmission (<em>isnad</em>) de ce hadith
                  contient Zaidah ibn Abi ar-Ruqad, un narrateur jugé
                  &laquo;&nbsp;inconnu&nbsp;&raquo; (<em>majhul</em>) par
                  certains spécialistes. C&apos;est pour cette raison que des
                  savants comme <strong>cheikh al-Albani</strong> l&apos;ont
                  classé comme faible (<em>da&apos;if</em>). L&apos;imam
                  <strong> an-Nawawi</strong> l&apos;a également mentionné parmi
                  les hadiths dont la chaîne de transmission n&apos;est pas
                  solide. L&apos;imam <strong>al-Bayhaqi</strong> l&apos;a
                  rapporté dans ses ouvrages tout en signalant la faiblesse de
                  sa chaîne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cependant, une partie importante des savants autorisent la
                  récitation de cette doua pour plusieurs raisons. Premièrement,
                  de nombreux savants, parmi lesquels <strong>Ibn Rajab
                  al-Hanbali</strong> dans son ouvrage <em>Lata&apos;if
                  al-Ma&apos;arif</em>, considèrent que les hadiths faibles
                  peuvent être appliqués dans le domaine des vertus
                  (<em>fada&apos;il al-a&apos;mal</em>), à condition que la
                  faiblesse ne soit pas sévère. Deuxièmement, le contenu de
                  cette doua ne comporte aucune innovation doctrinale : demander
                  la bénédiction d&apos;Allah et la vie jusqu&apos;au Ramadan
                  est une invocation parfaitement conforme aux principes
                  islamiques.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Position de prudence :</strong> certains savants
                      préfèrent formuler cette doua avec ses propres mots sans
                      l&apos;attribuer au Prophète (paix et salut sur lui),
                      puisque le sens reste valide.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Position de tolérance :</strong> d&apos;autres
                      savants autorisent sa récitation telle quelle, en la
                      considérant comme une doua générale dont le sens est
                      louable et conforme à la Sunna.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le consensus :</strong> aucun savant ne conteste
                      la <em>licéité</em> de demander à Allah de bénir les mois
                      et de faire parvenir au Ramadan. Le débat porte uniquement
                      sur l&apos;attribution de la formulation exacte au
                      Prophète (paix et salut sur lui).
                    </span>
                  </li>
                </ul>

                <p className="mt-4 leading-relaxed text-foreground">
                  En conclusion, le musulman peut réciter cette doua de Rajab
                  sans aucun mal, tout en sachant que son authenticité comme
                  hadith prophétique n&apos;est pas établie de manière certaine.
                  L&apos;essentiel est de ne pas en faire une obligation
                  religieuse et de se concentrer sur les invocations
                  authentiquement établies dans la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    pratique de la doua en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas authentiques à réciter */}
              {/* ============================================ */}
              <section id="douas-rajab-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques à réciter pendant le mois de Rajab
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà de la doua spécifique de Rajab, le croyant dispose
                  d&apos;un riche répertoire d&apos;invocations authentiques
                  qu&apos;il peut multiplier pendant ce mois sacré. Voici les
                  principales douas tirées du Coran et de la Sunna, particulièrement
                  adaptées à cette période de préparation spirituelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua du repentir (istighfar)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Rajab étant un mois de retour vers Allah, la meilleure
                  invocation à y multiplier est le <em>sayyid al-istighfar</em>,
                  la maîtresse des demandes de pardon enseignée par le Prophète
                  (paix et salut sur lui).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Anta Rabbi, la ilaha illa Anta, khalaqtani wa ana &apos;abduka, wa ana &apos;ala &apos;ahdika wa wa&apos;dika ma stata&apos;tu, a&apos;udhu bika min sharri ma sana&apos;tu, abu&apos;u laka bi ni&apos;matika &apos;alayya wa abu&apos;u bi dhanbi, faghfir li fa innahu la yaghfiru adh-dhunuba illa Anta
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es mon Seigneur. Il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je respecte Ton pacte et Ta promesse autant que je le peux. Je cherche refuge auprès de Toi contre le mal de ce que j&apos;ai fait. Je reconnais Tes bienfaits envers moi et je reconnais mes péchés. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour demander la guidée et la piété
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Pendant Rajab, le croyant cherche à renforcer sa foi et sa
                  piété en vue du Ramadan. Cette doua prophétique rassemble les
                  demandes essentielles pour le cheminement spirituel.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka al-huda wa at-tuqa wa al-&apos;afafa wa al-ghina
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande la guidée, la piété, la chasteté et la suffisance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2721)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la constance dans l&apos;adoration
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;un des plus grands défis du croyant est de maintenir la
                  régularité dans l&apos;adoration. Cette invocation est
                  particulièrement pertinente en Rajab, alors que le croyant
                  amorce une montée spirituelle qui doit durer jusqu&apos;au
                  Ramadan et au-delà.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ya Muqallib al-qulub, thabbit qalbi &apos;ala dinik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Toi qui retournes les coeurs, affermis mon coeur sur Ta religion&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2140)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua pour une bonne fin
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Puisque la doua de Rajab implique la demande de parvenir au
                  Ramadan, elle rappelle au croyant l&apos;incertitude de la
                  vie. Cette invocation pour une bonne fin (<em>husn
                  al-khatima</em>) est donc parfaitement appropriée.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ij&apos;al khayra &apos;umuri akhirahu wa khayra &apos;amali khawatimahu wa khayra ayyami yawma alqak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que le meilleur moment de ma vie soit sa fin, que la meilleure de mes actions soit la dernière, et que le meilleur de mes jours soit celui où je Te rencontrerai&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tabarani, authentifié par al-Albani dans Sahih al-Jami&apos; (1268)
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dorés symbolisant la doua du mois de Rajab en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Actes d'adoration à multiplier */}
              {/* ============================================ */}
              <section id="actes-adoration-rajab" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Actes d&apos;adoration à multiplier pendant Rajab
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Si aucun acte d&apos;adoration spécifique à Rajab n&apos;est
                  établi par un hadith authentique, les savants s&apos;accordent
                  sur le fait que ce mois sacré invite le croyant à intensifier
                  ses bonnes actions habituelles. La sacralité du mois amplifie
                  la valeur des actes accomplis, tout comme elle aggrave la
                  gravité des péchés commis.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Le jeûne surérogatoire</strong> est l&apos;un des
                  actes les plus recommandés. Le croyant peut jeûner les lundis
                  et jeudis, les trois jours blancs (13, 14, 15 de chaque mois
                  lunaire) ou tout autre jour sans attribuer à ce jeûne un
                  mérite spécifique à Rajab. L&apos;imam Ibn Taymiyya a
                  clarifié qu&apos;il n&apos;est pas établi dans la Sunna de
                  spécifier Rajab par un jeûne particulier, mais le jeûne
                  général y reste recommandé comme dans tout autre mois.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>La prière nocturne</strong> (<em>qiyam al-layl</em>)
                  est un pilier de la préparation au Ramadan. Le croyant qui
                  s&apos;habitue à prier la nuit dès Rajab trouvera les
                  prières de tarawih beaucoup plus naturelles lorsque le
                  Ramadan arrivera. Même deux raka&apos;at après la prière du
                  &apos;isha suffisent pour commencer cette habitude.
                </p>

                <HadithCard
                  arabic="أفضل الصلاة بعد الفريضة صلاة الليل"
                  text="La meilleure prière après la prière obligatoire est la prière de la nuit."
                  source="Rapporté par Muslim (1163)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>La lecture du Coran</strong> doit également
                  s&apos;intensifier pendant cette période. Le croyant peut se
                  fixer un programme de lecture quotidienne qui lui permettra
                  d&apos;arriver au Ramadan avec une habitude solide de
                  récitation. <strong>Le dhikr</strong> (évocation d&apos;Allah),
                  <strong> l&apos;aumône</strong> (<em>sadaqa</em>) et
                  <strong> le bon comportement</strong> envers les gens sont
                  autant d&apos;actes à multiplier pendant ce mois béni.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Enfin, <strong>le repentir sincère</strong> (<em>tawba</em>)
                  est l&apos;acte le plus important à accomplir pendant Rajab.
                  Purifier son coeur des rancunes, demander pardon pour ses
                  péchés et prendre de nouvelles résolutions : voilà le
                  véritable esprit de ce mois sacré. Le croyant qui entre dans
                  le Ramadan avec un coeur purifié et un repentir sincère est
                  celui qui en tirera le plus grand bénéfice. Pour approfondir la
                  pratique de l&apos;invocation, consultez notre guide sur la{" "}
                  <Link href="/doua-nuit-destin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    doua de la Nuit du Destin
                  </Link>{" "}
                  (Laylat al-Qadr), point culminant du Ramadan.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Préparer le Ramadan */}
              {/* ============================================ */}
              <section id="preparer-ramadan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rajab : la porte vers le Ramadan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Abu Bakr al-Balkhi, un savant des premières générations,
                  disait : &laquo;&nbsp;Le mois de Rajab est le mois des
                  semailles, le mois de Sha&apos;ban est le mois de
                  l&apos;irrigation et le mois de Ramadan est le mois de la
                  récolte.&nbsp;&raquo; Cette métaphore agricole illustre
                  parfaitement le rôle de Rajab dans la vie spirituelle du
                  musulman : c&apos;est le moment de planter les graines de la
                  piété pour récolter les fruits du Ramadan.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La préparation au Ramadan dès Rajab passe par plusieurs
                  étapes concrètes. La première est <strong>l&apos;examen de
                  conscience</strong> (<em>muhasaba</em>) : le croyant fait le
                  point sur ses manquements, ses péchés récurrents et les
                  aspects de sa pratique qu&apos;il souhaite améliorer. La
                  deuxième est <strong>l&apos;établissement d&apos;un
                  programme</strong> progressif d&apos;adoration : commencer par
                  de petites actions régulières qui s&apos;intensifieront au fil
                  des semaines.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La troisième étape est <strong>la purification des
                  relations</strong> : pardonner à ceux qui nous ont fait du
                  tort, demander pardon à ceux que nous avons offensés et
                  renforcer les liens familiaux. Le Prophète (paix et salut sur
                  lui) a enseigné que les portes du Paradis s&apos;ouvrent le
                  lundi et le jeudi, mais que le pardon est refusé à deux
                  personnes en conflit jusqu&apos;à ce qu&apos;elles se
                  réconcilient (Muslim, 2565).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La quatrième étape est <strong>la doua
                  constante</strong> pour demander à Allah de nous faire
                  parvenir au Ramadan. Cette invocation, qu&apos;elle prenne
                  la forme de la doua classique de Rajab ou de toute autre
                  formulation personnelle, traduit l&apos;attachement du croyant
                  à ce mois béni. Elle exprime également sa conscience que
                  chaque Ramadan peut être le dernier, et que seul Allah détient
                  les clés de la vie et de la mort.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mois de Rajab est donc bien plus qu&apos;un simple mois du
                  calendrier : c&apos;est un appel divin à la préparation, au
                  repentir et à l&apos;élévation spirituelle. Le croyant qui
                  saisit cette opportunité arrive au Ramadan le coeur ouvert, la
                  langue habituée au dhikr et l&apos;âme prête à accueillir les
                  bénédictions infinies de ce mois sacré. Pour découvrir
                  l&apos;ensemble des invocations islamiques, consultez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    guide complet sur la doua en islam
                  </Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* AFFILIATE FORM */}
              {/* ============================================ */}
              <div className="mt-16">
                <SocialBanner />

              <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />
              </div>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
