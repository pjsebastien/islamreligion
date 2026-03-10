import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithBlock from "@/components/HadithBlock";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";
import ArticleCTA from "@/components/ArticleCTA";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Hadiths sur les cadeaux en islam : offrir, recevoir et renforcer les liens",
  description:
    "D\u00e9couvrez les hadiths authentiques sur les cadeaux en islam : le don (hadiya), l\u2019\u00e9change de pr\u00e9sents pour renforcer l\u2019amour, la pratique du Proph\u00e8te \uFDFA, les r\u00e8gles du cadeau entre \u00e9poux et entre voisins.",
  openGraph: {
    title:
      "Hadiths sur les cadeaux en islam : offrir, recevoir et renforcer les liens",
    description:
      "Les hadiths authentiques sur les cadeaux en islam : vertus du don, pratique proph\u00e9tique, cadeaux entre \u00e9poux, entre voisins et r\u00e8gles \u00e0 respecter selon la Sunna.",
    url: "https://www.islamreligion.fr/hadith-cadeaux-islam",
    images: [
      {
        url: "/images/motif-arabesque-islamique-geometrie-dore.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/hadith-cadeaux-islam",
  },
};

const tocItems = [
  { id: "vertus-cadeaux", label: "Vertus des cadeaux en islam" },
  { id: "pratique-prophetique", label: "La pratique du Proph\u00e8te \uFDFA" },
  { id: "cadeaux-epoux", label: "Cadeaux entre \u00e9poux" },
  { id: "cadeaux-voisins", label: "Cadeaux aux voisins et aux proches" },
  { id: "regles-cadeaux", label: "R\u00e8gles et limites du cadeau" },
  { id: "lecons", label: "Enseignements et le\u00e7ons pratiques" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question:
      "Quels sont les hadiths les plus importants sur les cadeaux en islam ?",
    answer:
      "Les hadiths les plus importants incluent celui rapport\u00e9 par Abu Hurayra o\u00f9 le Proph\u00e8te \uFDFA dit \u00ab \u00c9changez des cadeaux, vous vous aimerez \u00bb (Al-Adab al-Mufrad, n\u00b0594), celui d\u2019Aisha sur l\u2019acceptation des cadeaux par le Proph\u00e8te (Bukhari, n\u00b05097), et celui sur l\u2019interdiction de reprendre un cadeau (Bukhari, n\u00b02589). Ces hadiths couvrent les fondements du don en islam : sa vertu, la pratique proph\u00e9tique et ses r\u00e8gles.",
  },
  {
    question:
      "Est-il obligatoire d\u2019accepter un cadeau en islam ?",
    answer:
      "Accepter un cadeau est une sunna fortement recommand\u00e9e. Le Proph\u00e8te \uFDFA a dit : \u00ab Si l\u2019on m\u2019invitait \u00e0 un pied de mouton, j\u2019accepterais ; et si l\u2019on m\u2019offrait une \u00e9paule, je l\u2019accepterais \u00bb (Bukhari, n\u00b05178). Refuser un cadeau sans raison valable est consid\u00e9r\u00e9 comme un manque de courtoisie. Toutefois, on peut refuser un cadeau suspect\u00e9 d\u2019\u00eatre un pot-de-vin ou provenant de sources illicites.",
  },
  {
    question:
      "Peut-on reprendre un cadeau que l\u2019on a offert en islam ?",
    answer:
      "Non, le Proph\u00e8te \uFDFA a formellement interdit de reprendre un cadeau. Il a compar\u00e9 celui qui reprend son don \u00e0 un chien qui revient \u00e0 son vomissement (Bukhari, n\u00b02589). L\u2019exception concerne le p\u00e8re vis-\u00e0-vis de ses enfants, car il a le droit de reprendre ce qu\u2019il leur a donn\u00e9, selon un hadith rapport\u00e9 par Ibn Umar (Abu Dawud, n\u00b03539).",
  },
  {
    question:
      "Quel est le meilleur cadeau \u00e0 offrir en islam ?",
    answer:
      "Il n\u2019y a pas de cadeau unique d\u00e9sign\u00e9 comme \u00ab le meilleur \u00bb. Le Proph\u00e8te \uFDFA a dit que le parfum est un cadeau qui ne se refuse pas (Tirmidhi, n\u00b02791), et il a lui-m\u00eame offert des v\u00eatements, de la nourriture et du parfum. Les savants recommandent un cadeau utile, adapt\u00e9 au destinataire et offert avec sinc\u00e9rit\u00e9. La valeur morale du geste prime sur la valeur mat\u00e9rielle.",
  },
  {
    question:
      "Les cadeaux entre \u00e9poux sont-ils une sunna ?",
    answer:
      "Oui, offrir des cadeaux entre \u00e9poux est conforme \u00e0 la Sunna et renforce l\u2019amour conjugal. Le Proph\u00e8te \uFDFA a enseign\u00e9 que chaque d\u00e9pense faite pour sa famille est r\u00e9compens\u00e9e par Allah (Muslim, n\u00b01628). Aisha rapporte que le Proph\u00e8te \u00e9tait g\u00e9n\u00e9reux envers ses \u00e9pouses. Le cadeau entre \u00e9poux est un moyen concret d\u2019exprimer la mawadda (affection) mentionn\u00e9e dans le Coran.",
  },
  {
    question:
      "Doit-on offrir des cadeaux \u00e9gaux \u00e0 ses enfants ?",
    answer:
      "Oui, le Proph\u00e8te \uFDFA a ordonn\u00e9 l\u2019\u00e9quit\u00e9 dans les dons aux enfants. Nu\u2019man ibn Bashir rapporte que le Proph\u00e8te a refus\u00e9 de t\u00e9moigner d\u2019un cadeau in\u00e9gal entre enfants, disant : \u00ab Craignez Allah et soyez \u00e9quitables envers vos enfants \u00bb (Bukhari, n\u00b02587). Privil\u00e9gier un enfant engendre la jalousie et l\u2019injustice au sein de la famille.",
  },
  {
    question:
      "Peut-on offrir un cadeau \u00e0 un non-musulman ?",
    answer:
      "Oui, offrir un cadeau \u00e0 un non-musulman est tout \u00e0 fait permis et peut m\u00eame \u00eatre recommand\u00e9 pour renforcer les liens de bon voisinage ou appeler \u00e0 l\u2019islam par le bon comportement. Le Proph\u00e8te \uFDFA acceptait les cadeaux de non-musulmans et en offrait \u00e9galement. Umar ibn al-Khattab a offert un v\u00eatement \u00e0 son fr\u00e8re polyth\u00e9iste \u00e0 La Mecque (Bukhari, n\u00b02619).",
  },
  {
    question:
      "Quelle est la diff\u00e9rence entre hadiya (cadeau) et sadaqa (aum\u00f4ne) en islam ?",
    answer:
      "La hadiya (cadeau) est offerte \u00e0 une personne pr\u00e9cise pour renforcer un lien ou exprimer de l\u2019affection, tandis que la sadaqa (aum\u00f4ne) est donn\u00e9e aux n\u00e9cessiteux pour l\u2019amour d\u2019Allah. La hadiya n\u2019exige pas que le destinataire soit pauvre. Le Proph\u00e8te \uFDFA acceptait les cadeaux mais refusait la sadaqa pour lui-m\u00eame. Les deux sont r\u00e9compens\u00e9s par Allah, mais leur nature et leur intention diff\u00e8rent.",
  },
];

export default function HadithCadeauxIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/hadith-cadeaux-islam/#article",
        headline:
          "Hadiths sur les cadeaux en islam : offrir, recevoir et renforcer les liens",
        description:
          "D\u00e9couvrez les hadiths authentiques sur les cadeaux en islam : le don, l\u2019\u00e9change de pr\u00e9sents, la pratique du Proph\u00e8te et les r\u00e8gles \u00e0 respecter.",
        image: "/images/motif-arabesque-islamique-geometrie-dore.jpg",
        datePublished: "2026-04-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/hadith-cadeaux-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/hadith-cadeaux-islam/#breadcrumb",
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
            name: "Hadith du jour",
            item: "https://www.islamreligion.fr/hadith-du-jour",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hadiths sur les cadeaux",
            item: "https://www.islamreligion.fr/hadith-cadeaux-islam",
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
          title="Hadiths sur les cadeaux en islam"
          subtitle="Les enseignements proph&eacute;tiques sur le don (hadiya), l&apos;&eacute;change de pr&eacute;sents pour renforcer l&apos;amour, et les r&egrave;gles du cadeau selon la Sunna authentique."
          imageSrc="/images/motif-arabesque-islamique-geometrie-dore.jpg"
          imageAlt="Hadiths sur les cadeaux en islam, enseignements proph&eacute;tiques"
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
                <Link href="/hadith-du-jour" className="hover:text-primary">
                  Hadith du jour
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Hadiths sur les cadeaux
                </span>
              </nav>

              {/* A retenir */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  &Agrave; retenir
                </p>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Le Proph&egrave;te &#xFDFA; a encourag&eacute; l&apos;&eacute;change de cadeaux comme moyen de renforcer l&apos;amour et la fraternit&eacute; entre les musulmans.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Accepter un cadeau, m&ecirc;me modeste, est une sunna proph&eacute;tique ; le refuser sans raison est d&eacute;conseill&eacute;.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Reprendre un cadeau d&eacute;j&agrave; offert est formellement interdit par le Proph&egrave;te &#xFDFA;.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    Les cadeaux aux voisins, aux &eacute;poux et aux proches sont autant d&apos;actes r&eacute;compens&eacute;s par Allah.
                  </li>
                </ul>
              </div>

              {/* ============================== */}
              {/* SECTION : Vertus des cadeaux   */}
              {/* ============================== */}
              <section id="vertus-cadeaux" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Vertus des cadeaux en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le cadeau (<em>hadiya</em>) occupe une place importante dans la Sunna proph&eacute;tique. Loin d&apos;&ecirc;tre un simple geste social, le don en islam est un acte d&apos;adoration qui renforce les liens entre les c&oelig;urs, efface les rancunes et r&eacute;pand la mis&eacute;ricorde. Les hadiths suivants &eacute;tablissent les vertus fondamentales de l&apos;&eacute;change de cadeaux.
                </p>

                <HadithBlock
                  number={1}
                  title="&Eacute;changez des cadeaux, vous vous aimerez"
                  narrator="Abu Hurayra"
                  arabic="تَهَادَوْا تَحَابُّوا"
                  translation="&Eacute;changez des cadeaux, vous vous aimerez."
                  source="Al-Adab al-Mufrad d&apos;Al-Bukhari, n&deg;594"
                  grade="hasan"
                  explanation="Ce hadith concis r&eacute;sume toute la philosophie du cadeau en islam. Le Proph&egrave;te &#xFDFA; &eacute;tablit un lien direct de cause &agrave; effet entre le don et l&apos;amour. Le verbe &laquo;&nbsp;tahab&ucirc;&nbsp;&raquo; d&eacute;signe un amour r&eacute;ciproque : le cadeau ne cr&eacute;e pas un rapport de d&eacute;pendance mais un &eacute;change qui nourrit l&apos;affection mutuelle. Les savants soulignent que ce hadith s&apos;applique &agrave; tous les liens : familiaux, amicaux et communautaires."
                />

                <HadithBlock
                  number={2}
                  title="Le cadeau efface la rancune du c&oelig;ur"
                  narrator="Anas ibn Malik"
                  arabic="تَهَادَوْا فَإِنَّ الْهَدِيَّةَ تُذْهِبُ وَحَرَ الصَّدْرِ"
                  translation="&Eacute;changez des cadeaux, car le cadeau dissipe la rancune du c&oelig;ur."
                  source="Jami&apos; at-Tirmidhi, n&deg;2130"
                  grade="hasan"
                  explanation="Ce hadith compl&egrave;te le pr&eacute;c&eacute;dent en ajoutant une dimension th&eacute;rapeutique au cadeau. Le terme &laquo;&nbsp;wahar as-sadr&nbsp;&raquo; d&eacute;signe la rancune, le ressentiment qui p&egrave;se sur la poitrine. Le Proph&egrave;te &#xFDFA; enseigne que le don a le pouvoir de dissoudre les tensions entre les personnes. Ce hadith est particuli&egrave;rement pertinent dans les situations de conflit familial ou communautaire : offrir un cadeau peut &ecirc;tre le premier pas vers la r&eacute;conciliation."
                />

                <HadithBlock
                  number={3}
                  title="Le parfum est un cadeau qui ne se refuse pas"
                  narrator="Abu Hurayra"
                  arabic="مَنْ عُرِضَ عَلَيْهِ رَيْحَانٌ فَلَا يَرُدَّهُ فَإِنَّهُ خَفِيفُ الْمَحْمِلِ طَيِّبُ الرِّيحِ"
                  translation="Celui &agrave; qui l&apos;on offre du parfum (rayhan), qu&apos;il ne le refuse pas, car il est l&eacute;ger &agrave; porter et agr&eacute;able d&apos;odeur."
                  source="Sahih Muslim, n&deg;2253"
                  grade="sahih"
                  explanation="Le Proph&egrave;te &#xFDFA; mentionne le parfum comme exemple de cadeau qu&apos;il ne faut pas refuser. La raison donn&eacute;e est pragmatique : il est l&eacute;ger et agr&eacute;able. Les savants en d&eacute;duisent un principe g&eacute;n&eacute;ral : tout cadeau modeste et bien intentionn&eacute; m&eacute;rite d&apos;&ecirc;tre accept&eacute;. Refuser un don sans motif valable blesse le donateur et rompt le lien de fraternit&eacute;. Ce hadith souligne aussi l&apos;importance du parfum dans la Sunna."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces hadiths posent les fondations de l&apos;&eacute;thique du cadeau en islam. Le don n&apos;est pas une simple convention sociale : c&apos;est un moyen concret de cultiver l&apos;amour, d&apos;effacer les rancunes et de renforcer les liens. Pour approfondir l&apos;&eacute;thique relationnelle en islam, consultez notre article sur les{" "}
                  <Link href="/hadith-bon-comportement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le bon comportement en islam
                  </Link>.
                </p>
              </section>

              {/* ========================================= */}
              {/* SECTION : Pratique prophetique            */}
              {/* ========================================= */}
              <section id="pratique-prophetique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La pratique du Proph&egrave;te &#xFDFA; concernant les cadeaux
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Proph&egrave;te Muhammad &#xFDFA; ne se contentait pas d&apos;encourager le don : il en &eacute;tait lui-m&ecirc;me le meilleur exemple. Il acceptait les cadeaux avec gratitude, en offrait g&eacute;n&eacute;reusement et ne m&eacute;prisait jamais un pr&eacute;sent, aussi modeste f&ucirc;t-il. Les hadiths suivants illustrent cette pratique proph&eacute;tique.
                </p>

                <HadithBlock
                  number={4}
                  title="Le Proph&egrave;te &#xFDFA; acceptait les cadeaux et les r&eacute;compensait"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقْبَلُ الْهَدِيَّةَ وَيُثِيبُ عَلَيْهَا"
                  translation="Le Messager d&apos;Allah &#xFDFA; acceptait les cadeaux et les r&eacute;compensait (en retour)."
                  source="Sahih Al-Bukhari, n&deg;2585"
                  grade="sahih"
                  explanation="Ce hadith rapporte deux comportements proph&eacute;tiques essentiels. Premi&egrave;rement, le Proph&egrave;te &#xFDFA; ne refusait pas les cadeaux, m&ecirc;me les plus modestes, honorant ainsi le donateur. Deuxi&egrave;ment, il r&eacute;compensait le don par un contre-don, &eacute;tablissant le principe de r&eacute;ciprocit&eacute;. Les savants expliquent que &laquo;&nbsp;yuthib&nbsp;&raquo; (r&eacute;compenser) signifie offrir en retour quelque chose d&apos;&eacute;gale valeur ou plus. Ce hadith fonde la recommandation de r&eacute;pondre au cadeau par un cadeau."
                />

                <HadithBlock
                  number={5}
                  title="Si l&apos;on m&apos;offrait un pied de mouton, j&apos;accepterais"
                  narrator="Abu Hurayra"
                  arabic="لَوْ دُعِيتُ إِلَى ذِرَاعٍ أَوْ كُرَاعٍ لَأَجَبْتُ، وَلَوْ أُهْدِيَ إِلَيَّ ذِرَاعٌ أَوْ كُرَاعٌ لَقَبِلْتُ"
                  translation="Si l&apos;on m&apos;invitait &agrave; (un repas de) bras ou de pied (de mouton), j&apos;accepterais. Et si l&apos;on m&apos;offrait un bras ou un pied, je l&apos;accepterais."
                  source="Sahih Al-Bukhari, n&deg;5178"
                  grade="sahih"
                  explanation="Le Proph&egrave;te &#xFDFA; choisit d&eacute;lib&eacute;r&ement des morceaux modestes (le bras et le pied de mouton) pour montrer que la valeur mat&eacute;rielle du cadeau n&apos;a pas d&apos;importance. Ce hadith enseigne l&apos;humilit&eacute; face au don : le Messager d&apos;Allah, leader de la communaut&eacute;, accepterait un pr&eacute;sent tr&egrave;s simple. Il d&eacute;courage &eacute;galement la honte d&apos;offrir peu, car ce qui compte est l&apos;intention et le geste."
                />

                <HadithBlock
                  number={6}
                  title="Ne m&eacute;prisez aucun cadeau entre voisines"
                  narrator="Abu Hurayra"
                  arabic="يَا نِسَاءَ الْمُسْلِمَاتِ، لَا تَحْقِرَنَّ جَارَةٌ لِجَارَتِهَا وَلَوْ فِرْسِنَ شَاةٍ"
                  translation="&Ocirc; femmes musulmanes, qu&apos;aucune voisine ne m&eacute;prise le cadeau de sa voisine, m&ecirc;me s&apos;il s&apos;agit d&apos;un pied de mouton."
                  source="Sahih Al-Bukhari, n&deg;6017 &mdash; Sahih Muslim, n&deg;1030"
                  grade="sahih"
                  explanation="Ce hadith s&apos;adresse sp&eacute;cifiquement aux femmes et insiste sur le respect du cadeau, quelle que soit sa modestie. Le &laquo;&nbsp;firsin&nbsp;&raquo; (sabot de mouton) est un morceau de tr&egrave;s faible valeur : le Proph&egrave;te &#xFDFA; l&apos;utilise d&eacute;lib&eacute;r&eacute;ment pour enseigner que m&eacute;priser un don, c&apos;est m&eacute;priser le donateur. Ce hadith renforce aussi les liens de voisinage, un th&egrave;me majeur de la Sunna."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  La pratique proph&eacute;tique du cadeau se caract&eacute;rise par l&apos;humilit&eacute;, la g&eacute;n&eacute;rosit&eacute; et le respect. Le Proph&egrave;te &#xFDFA; n&apos;a jamais m&eacute;pris&eacute; un don ni refus&eacute; un cadeau par orgueil. Pour d&eacute;couvrir d&apos;autres aspects du bon comportement proph&eacute;tique, lisez notre article sur les{" "}
                  <Link href="/hadith-amitie-frequentation-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur l&apos;amiti&eacute; et la fr&eacute;quentation en islam
                  </Link>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Approfondir les sciences islamiques"
                description="&Eacute;tudiez les hadiths, le fiqh et l&apos;&eacute;thique islamique avec des professeurs qualifi&eacute;s."
                href="/apprendre-science-religieuse-islam"
                linkText="D&eacute;couvrir la formation"
              />

              {/* ============================== */}
              {/* SECTION : Cadeaux entre epoux  */}
              {/* ============================== */}
              <section id="cadeaux-epoux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Cadeaux entre &eacute;poux selon les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le cadeau entre &eacute;poux est un moyen privil&eacute;gi&eacute; de nourrir l&apos;amour conjugal (<em>mawadda</em>). Le Proph&egrave;te &#xFDFA; &eacute;tait g&eacute;n&eacute;reux envers ses &eacute;pouses et encourageait la d&eacute;pense pour la famille comme un acte r&eacute;compens&eacute; par Allah. Les hadiths suivants illustrent cette dimension conjugale du don.
                </p>

                <HadithBlock
                  number={7}
                  title="La d&eacute;pense pour sa famille est une sadaqa"
                  narrator="Abu Mas&apos;ud al-Ansari"
                  arabic="إِذَا أَنْفَقَ الْمُسْلِمُ نَفَقَةً عَلَى أَهْلِهِ وَهُوَ يَحْتَسِبُهَا كَانَتْ لَهُ صَدَقَةً"
                  translation="Lorsque le musulman d&eacute;pense pour sa famille en esp&eacute;rant la r&eacute;compense d&apos;Allah, cela lui est compt&eacute; comme une aum&ocirc;ne (sadaqa)."
                  source="Sahih Al-Bukhari, n&deg;55 &mdash; Sahih Muslim, n&deg;1002"
                  grade="sahih"
                  explanation="Ce hadith transforme chaque d&eacute;pense familiale en acte d&apos;adoration, &agrave; condition que l&apos;intention soit sinc&egrave;re. Offrir un cadeau &agrave; son &eacute;pouse, nourrir ses enfants, v&ecirc;tir sa famille : tout cela devient une sadaqa r&eacute;compens&eacute;e. La condition &laquo;&nbsp;ihtisab&nbsp;&raquo; (rechercher la r&eacute;compense) montre que l&apos;intention distingue la routine de l&apos;adoration. Ce hadith encourage les &eacute;poux &agrave; consid&eacute;rer leurs cadeaux mutuels comme des investissements spirituels."
                />

                <HadithBlock
                  number={8}
                  title="La meilleure d&eacute;pense est celle pour la famille"
                  narrator="Abu Hurayra"
                  arabic="دِينَارٌ أَنْفَقْتَهُ فِي سَبِيلِ اللَّهِ وَدِينَارٌ أَنْفَقْتَهُ فِي رَقَبَةٍ وَدِينَارٌ تَصَدَّقْتَ بِهِ عَلَى مِسْكِينٍ وَدِينَارٌ أَنْفَقْتَهُ عَلَى أَهْلِكَ، أَعْظَمُهَا أَجْرًا الَّذِي أَنْفَقْتَهُ عَلَى أَهْلِكَ"
                  translation="Un dinar d&eacute;pens&eacute; dans le sentier d&apos;Allah, un dinar d&eacute;pens&eacute; pour affranchir un esclave, un dinar donn&eacute; en aum&ocirc;ne &agrave; un pauvre, et un dinar d&eacute;pens&eacute; pour ta famille : celui dont la r&eacute;compense est la plus grande est celui d&eacute;pens&eacute; pour ta famille."
                  source="Sahih Muslim, n&deg;995"
                  grade="sahih"
                  explanation="Ce hadith &eacute;tablit une hi&eacute;rarchie surprenante : la d&eacute;pense pour la famille surpasse m&ecirc;me celle dans le sentier d&apos;Allah en termes de r&eacute;compense. Les savants expliquent que c&apos;est parce que la famille est la premi&egrave;re responsabilit&eacute; du musulman. N&eacute;gliger les siens pour donner aux autres est un d&eacute;s&eacute;quilibre que l&apos;islam corrige. Ce hadith encourage concr&egrave;tement les &eacute;poux &agrave; &ecirc;tre g&eacute;n&eacute;reux l&apos;un envers l&apos;autre."
                />

                <HadithBlock
                  number={9}
                  title="La femme du Proph&egrave;te &#xFDFA; et les cadeaux"
                  narrator="Aisha"
                  arabic="كَانَ النَّاسُ يَتَحَرَّوْنَ بِهَدَايَاهُمْ يَوْمَ عَائِشَةَ"
                  translation="Les gens choisissaient le jour d&apos;Aisha pour envoyer leurs cadeaux (au Proph&egrave;te &#xFDFA;)."
                  source="Sahih Al-Bukhari, n&deg;2580 &mdash; Sahih Muslim, n&deg;2442"
                  grade="sahih"
                  explanation="Ce hadith r&eacute;v&egrave;le que les Compagnons envoyaient d&eacute;lib&eacute;r&eacute;ment leurs cadeaux le jour o&ugrave; le Proph&egrave;te &#xFDFA; &eacute;tait chez Aisha, car ils savaient combien il l&apos;aimait et voulaient lui faire plaisir &agrave; travers elle. Ce t&eacute;moignage montre que le cadeau &eacute;tait un &eacute;l&eacute;ment naturel de la vie du foyer proph&eacute;tique. Il illustre aussi la place de l&apos;affection et de la d&eacute;licatesse dans les relations au sein de la communaut&eacute;."
                />
              </section>

              {/* ====================================== */}
              {/* SECTION : Cadeaux aux voisins/proches  */}
              {/* ====================================== */}
              <section id="cadeaux-voisins" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Cadeaux aux voisins et aux proches
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam accorde une importance capitale aux liens de voisinage et de parent&eacute;. Le cadeau est l&apos;un des moyens les plus efficaces pour entretenir ces liens. Le Proph&egrave;te &#xFDFA; a insist&eacute; sur la g&eacute;n&eacute;rosit&eacute; envers les voisins et les proches, m&ecirc;me avec peu de moyens.
                </p>

                <HadithBlock
                  number={10}
                  title="Offre &agrave; ton voisin, m&ecirc;me du bouillon"
                  narrator="Abu Dharr"
                  arabic="يَا أَبَا ذَرٍّ إِذَا طَبَخْتَ مَرَقَةً فَأَكْثِرْ مَاءَهَا وَتَعَاهَدْ جِيرَانَكَ"
                  translation="&Ocirc; Abu Dharr, lorsque tu pr&eacute;pares un bouillon, augmente son eau et pense &agrave; tes voisins."
                  source="Sahih Muslim, n&deg;2625"
                  grade="sahih"
                  explanation="Ce hadith illustre la simplicit&eacute; du don proph&eacute;tique. Le Proph&egrave;te &#xFDFA; n&apos;exige pas un plat &eacute;labor&eacute; : il demande simplement d&apos;augmenter la quantit&eacute; de bouillon pour en partager avec le voisin. Le verbe &laquo;&nbsp;ta&apos;ahad&nbsp;&raquo; (penser r&eacute;guli&egrave;rement &agrave;, veiller sur) indique que le geste doit &ecirc;tre r&eacute;current, pas exceptionnel. Ce hadith transforme la cuisine quotidienne en acte de g&eacute;n&eacute;rosit&eacute; et de solidarit&eacute; de voisinage."
                />

                <HadithBlock
                  number={11}
                  title="L&apos;&eacute;quit&eacute; dans les cadeaux aux enfants"
                  narrator="Nu&apos;man ibn Bashir"
                  arabic="اتَّقُوا اللَّهَ وَاعْدِلُوا بَيْنَ أَوْلَادِكُمْ"
                  translation="Craignez Allah et soyez &eacute;quitables envers vos enfants."
                  source="Sahih Al-Bukhari, n&deg;2587 &mdash; Sahih Muslim, n&deg;1623"
                  grade="sahih"
                  explanation="Nu&apos;man ibn Bashir rapporte que son p&egrave;re voulut lui faire un don exclusif. Le Proph&egrave;te &#xFDFA; refusa d&apos;en &ecirc;tre t&eacute;moin et ordonna l&apos;&eacute;quit&eacute; entre les enfants. Ce hadith &eacute;tablit un principe fondamental : l&apos;in&eacute;galit&eacute; dans les cadeaux aux enfants engendre la jalousie et d&eacute;truit l&apos;harmonie familiale. Les savants pr&eacute;cisent que cette &eacute;quit&eacute; concerne les dons volontaires, pas les d&eacute;penses li&eacute;es aux besoins sp&eacute;cifiques de chaque enfant."
                />

                <HadithBlock
                  number={12}
                  title="Celui qui maintient les liens de parent&eacute;"
                  narrator="Abu Hurayra"
                  arabic="لَيْسَ الْوَاصِلُ بِالْمُكَافِئِ وَلَكِنِ الْوَاصِلُ الَّذِي إِذَا قُطِعَتْ رَحِمُهُ وَصَلَهَا"
                  translation="Celui qui maintient les liens de parent&eacute; n&apos;est pas celui qui se contente de rendre la pareille, mais celui qui, lorsque ses liens sont rompus, les r&eacute;tablit."
                  source="Sahih Al-Bukhari, n&deg;5991"
                  grade="sahih"
                  explanation="Ce hadith &eacute;l&egrave;ve le concept de maintien des liens au-del&agrave; de la simple r&eacute;ciprocit&eacute;. Le vrai &laquo;&nbsp;w&acirc;sil&nbsp;&raquo; (celui qui maintient les liens) est celui qui continue &agrave; offrir, &agrave; visiter et &agrave; donner m&ecirc;me quand l&apos;autre rompt le lien. Le cadeau est un outil puissant pour r&eacute;tablir des relations bris&eacute;es. Ce hadith encourage la pers&eacute;v&eacute;rance dans le bien, m&ecirc;me face &agrave; l&apos;ingratitude."
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Les cadeaux aux voisins et aux proches s&apos;inscrivent dans l&apos;&eacute;thique plus large du bon voisinage en islam. Pour d&eacute;couvrir tous les enseignements proph&eacute;tiques sur ce sujet, consultez notre article sur les{" "}
                  <Link href="/hadith-voisin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    hadiths sur le voisin en islam
                  </Link>.
                </p>
              </section>

              {/* ============================== */}
              {/* SECTION : Regles et limites    */}
              {/* ============================== */}
              <section id="regles-cadeaux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  R&egrave;gles et limites du cadeau en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si le cadeau est vivement encourag&eacute;, l&apos;islam pose aussi des r&egrave;gles pr&eacute;cises pour &eacute;viter les d&eacute;rives. Le Proph&egrave;te &#xFDFA; a interdit de reprendre un cadeau, de donner pour obtenir un avantage indu, et a mis en garde contre les cadeaux qui dissimulent des pots-de-vin.
                </p>

                <HadithBlock
                  number={13}
                  title="L&apos;interdiction de reprendre un cadeau"
                  narrator="Ibn &apos;Abbas"
                  arabic="الْعَائِدُ فِي هِبَتِهِ كَالْكَلْبِ يَقِيءُ ثُمَّ يَعُودُ فِي قَيْئِهِ"
                  translation="Celui qui reprend son don est semblable au chien qui vomit puis revient &agrave; son vomissement."
                  source="Sahih Al-Bukhari, n&deg;2589 &mdash; Sahih Muslim, n&deg;1622"
                  grade="sahih"
                  explanation="Cette comparaison tr&egrave;s forte du Proph&egrave;te &#xFDFA; montre &agrave; quel point reprendre un cadeau est r&eacute;prouv&eacute; en islam. Une fois le don effectu&eacute;, il appartient au destinataire. L&apos;image du chien vise &agrave; susciter la r&eacute;pulsion face &agrave; ce comportement. Les savants en ont d&eacute;duit que reprendre un cadeau est haram (interdit) selon la majorit&eacute; des juristes. L&apos;exception concerne le don du p&egrave;re &agrave; son enfant, comme l&apos;indiquent d&apos;autres hadiths."
                />

                <HadithBlock
                  number={14}
                  title="Les cadeaux offerts aux gouverneurs"
                  narrator="Abu Humaid as-Sa&apos;idi"
                  arabic="مَا بَالُ الْعَامِلِ نَبْعَثُهُ فَيَأْتِي يَقُولُ هَذَا لَكُمْ وَهَذَا أُهْدِيَ لِي أَفَلَا جَلَسَ فِي بَيْتِ أَبِيهِ أَوْ أُمِّهِ فَيَنْظُرَ أَيُهْدَى لَهُ أَمْ لَا"
                  translation="Qu&apos;en est-il du fonctionnaire que nous envoyons et qui revient en disant : &laquo;&nbsp;Ceci est pour vous et cela m&apos;a &eacute;t&eacute; offert en cadeau&nbsp;&raquo; ? Que ne restait-il chez son p&egrave;re ou sa m&egrave;re pour voir si on lui aurait fait ce cadeau ou non !"
                  source="Sahih Al-Bukhari, n&deg;7174 &mdash; Sahih Muslim, n&deg;1832"
                  grade="sahih"
                  explanation="Ce hadith est fondamental en &eacute;thique islamique du pouvoir. Le Proph&egrave;te &#xFDFA; d&eacute;nonce les cadeaux offerts aux d&eacute;tenteurs d&apos;autorit&eacute; en raison de leur fonction : ce sont en r&eacute;alit&eacute; des pots-de-vin d&eacute;guis&eacute;s. Le test propos&eacute; est simple : si la personne n&apos;aurait pas re&ccedil;u ce cadeau sans sa position, alors c&apos;est un cadeau suspect. Ce hadith &eacute;tablit la distinction cruciale entre la hadiya l&eacute;gitime et la corruption."
                />

                <HadithBlock
                  number={15}
                  title="R&eacute;pondre au cadeau par un cadeau"
                  narrator="Aisha"
                  arabic="كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقْبَلُ الْهَدِيَّةَ وَيُثِيبُ عَلَيْهَا"
                  translation="Le Messager d&apos;Allah &#xFDFA; acceptait les cadeaux et offrait en retour."
                  source="Sahih Al-Bukhari, n&deg;2585"
                  grade="sahih"
                  explanation="Ce hadith, d&eacute;j&agrave; cit&eacute; dans la section sur la pratique proph&eacute;tique, prend ici une dimension normative. Les savants en d&eacute;duisent la recommandation (&laquo;&nbsp;istihbab&nbsp;&raquo;) de r&eacute;pondre &agrave; un cadeau par un cadeau de valeur &eacute;gale ou sup&eacute;rieure. Cette r&eacute;ciprocit&eacute; &eacute;vite que le don ne devienne une source de g&ecirc;ne ou de d&eacute;pendance pour le destinataire. Elle maintient l&apos;&eacute;quilibre et la dignit&eacute; entre les deux parties."
                />
              </section>

              {/* ============================== */}
              {/* SECTION : Lecons pratiques     */}
              {/* ============================== */}
              <section id="lecons" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Enseignements et le&ccedil;ons pratiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble des hadiths pr&eacute;sent&eacute;s dans cet article permet de d&eacute;gager des le&ccedil;ons concr&egrave;tes pour la pratique du cadeau en islam :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Offrir r&eacute;guli&egrave;rement pour renforcer les liens
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le cadeau n&apos;est pas r&eacute;serv&eacute; aux occasions sp&eacute;ciales. Un petit geste quotidien &mdash; un plat partag&eacute;, un parfum, un mot bienveillant accompagn&eacute; d&apos;un pr&eacute;sent &mdash; cultive l&apos;amour durablement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais m&eacute;priser un cadeau modeste
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Le Proph&egrave;te &#xFDFA; acceptait les cadeaux les plus simples. La valeur d&apos;un don r&eacute;side dans l&apos;intention du donateur, non dans son prix. M&eacute;priser un cadeau blesse et rompt les liens.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        R&eacute;pondre au cadeau par un cadeau
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        La r&eacute;ciprocit&eacute; est une sunna proph&eacute;tique. R&eacute;pondre au don par un don &eacute;quivalent ou sup&eacute;rieur pr&eacute;serve la dignit&eacute; mutuelle et entretient le cycle de la g&eacute;n&eacute;rosit&eacute;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      4
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        &Ecirc;tre &eacute;quitable dans les cadeaux aux enfants
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Privil&eacute;gier un enfant dans les dons est source de jalousie et d&apos;injustice. Le Proph&egrave;te &#xFDFA; a ordonn&eacute; l&apos;&eacute;quit&eacute; entre les enfants dans les cadeaux et les dons volontaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      5
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Ne jamais reprendre un cadeau
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Une fois le don effectu&eacute;, il appartient d&eacute;finitivement au destinataire. Revenir sur un cadeau est un comportement s&eacute;v&egrave;rement bl&acirc;m&eacute; par le Proph&egrave;te &#xFDFA;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      6
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">
                        Distinguer le cadeau du pot-de-vin
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
                        Un cadeau offert &agrave; une personne en position d&apos;autorit&eacute; pour obtenir un avantage est en r&eacute;alit&eacute; une corruption. L&apos;islam distingue clairement la hadiya sinc&egrave;re de la rishwa (pot-de-vin).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Affiliate Form */}
              <div className="mt-16">
                <AffiliateForm
                  title="Apprenez l&apos;arabe classique"
                  description="Comprenez les hadiths sur les cadeaux dans leur langue originale et approfondissez votre connaissance de l&apos;islam."
                  preselect="arabe"
                />
              </div>

              {/* FAQ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <div className="mt-12 space-y-4">
                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous nos hadiths par th&egrave;me"
                  href="/hadith-du-jour"
                  linkText="Hadith du jour : paroles authentiques"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le bon comportement en islam"
                  description="D&eacute;couvrez les enseignements proph&eacute;tiques sur l&apos;adab, la politesse et les bonnes mani&egrave;res."
                  href="/hadith-bon-comportement-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur l&apos;amiti&eacute; et la fr&eacute;quentation en islam"
                  description="Les enseignements du Proph&egrave;te &#xFDFA; sur le choix des amis et l&apos;influence de l&apos;entourage."
                  href="/hadith-amitie-frequentation-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="Hadiths sur le voisin en islam"
                  description="Les droits du voisin, la g&eacute;n&eacute;rosit&eacute; et le bon voisinage selon la Sunna."
                  href="/hadith-voisin-islam"
                />
              </div>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
