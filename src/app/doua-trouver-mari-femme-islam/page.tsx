import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua pour trouver un mari ou une femme en islam : invocations authentiques",
  description:
    "Découvrez les douas authentiques pour trouver un conjoint pieux en islam : invocations en arabe avec phonétique et traduction, doua Rabbana hab lana, doua de Moussa, istikhara avant le mariage et conseils pratiques.",
  openGraph: {
    title:
      "Doua pour trouver un mari ou une femme en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour trouver un conjoint en islam : textes en arabe, phonétique, traduction, hadiths et conseils pour se préparer au mariage.",
    url: "https://www.islamreligion.fr/doua-trouver-mari-femme-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-trouver-mari-femme-islam",
  },
};

const tocItems = [
  { id: "mariage-islam", label: "Le mariage en islam : une adoration" },
  { id: "doua-rabbana-hab-lana", label: "Doua Rabbana hab lana min azwajina" },
  { id: "doua-moussa", label: "Doua de Moussa : Rabbi inni lima anzalta" },
  { id: "istikhara-mariage", label: "L\u2019istikhara avant le mariage" },
  { id: "qualites-conjoint", label: "Les qualit\u00e9s \u00e0 rechercher chez un conjoint" },
  { id: "patience-tawakkul", label: "Patience et tawakkul dans la recherche" },
  { id: "douas-complementaires", label: "Douas compl\u00e9mentaires pour le mariage" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour trouver un mari ou une femme en islam ?",
    answer:
      "Parmi les meilleures douas pour trouver un conjoint figurent la doua coranique « Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\u2019yun » (sourate Al-Furqan, 25:74), qui demande \u00e0 Allah un \u00e9poux et une descendance qui r\u00e9jouissent le c\u0153ur, et la doua de Moussa « Rabbi inni lima anzalta ilayya min khayrin faqir » (sourate Al-Qasas, 28:24), prononc\u00e9e alors qu&apos;il \u00e9tait seul et d\u00e9muni, et apr\u00e8s laquelle Allah lui accorda une \u00e9pouse pieuse.",
  },
  {
    question: "Peut-on faire une doua pour trouver un conjoint en fran\u00e7ais ?",
    answer:
      "Oui, la doua peut \u00eatre faite dans toute langue, y compris le fran\u00e7ais. Allah comprend toutes les langues et entend la sinc\u00e9rit\u00e9 du c\u0153ur. N\u00e9anmoins, il est recommand\u00e9 d&apos;apprendre les invocations proph\u00e9tiques en arabe pour b\u00e9n\u00e9ficier de leur puissance spirituelle particuli\u00e8re. On peut alterner entre les formules arabes et ses propres supplications en fran\u00e7ais.",
  },
  {
    question: "Quand faut-il faire la doua pour trouver un conjoint ?",
    answer:
      "Les moments les plus propices sont le dernier tiers de la nuit, pendant la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le vendredi apr\u00e8s la pri\u00e8re du Asr, et apr\u00e8s les pri\u00e8res obligatoires. La r\u00e9gularit\u00e9 et la pers\u00e9v\u00e9rance sont plus importantes que le moment pr\u00e9cis : il faut invoquer Allah avec constance et confiance.",
  },
  {
    question: "Est-il permis de demander \u00e0 Allah un conjoint pr\u00e9cis ?",
    answer:
      "Oui, il est permis de demander \u00e0 Allah un conjoint pr\u00e9cis, mais il est pr\u00e9f\u00e9rable d&apos;accompagner cette demande de la pri\u00e8re de l&apos;istikhara. Cette pri\u00e8re de consultation permet de remettre le choix final entre les mains d&apos;Allah, qui sait ce qui est v\u00e9ritablement bon pour Son serviteur. Si Allah d\u00e9tourne le c\u0153ur de cette personne, c&apos;est qu&apos;Il a pr\u00e9par\u00e9 mieux.",
  },
  {
    question: "Combien de temps faut-il pour que la doua du mariage soit exauc\u00e9e ?",
    answer:
      "Il n&apos;y a pas de d\u00e9lai fix\u00e9. Allah exauce la doua selon Sa sagesse et au moment le plus opportun pour le serviteur. Le Proph\u00e8te (paix et salut sur lui) a enseign\u00e9 que toute doua est exauc\u00e9e de trois mani\u00e8res : soit la demande est accord\u00e9e, soit un mal \u00e9quivalent est \u00e9cart\u00e9, soit la r\u00e9compense est gard\u00e9e pour l&apos;au-del\u00e0. La patience et la confiance en Allah sont indispensables.",
  },
  {
    question: "Faut-il faire l\u2019istikhara avant de se marier ?",
    answer:
      "L&apos;istikhara est fortement recommand\u00e9e (mustahabb) avant toute d\u00e9cision importante, y compris le mariage. Le Proph\u00e8te (paix et salut sur lui) enseignait cette pri\u00e8re \u00e0 ses compagnons pour toute affaire, comme il leur enseignait les sourates du Coran. Elle consiste en deux raka\u2019at suivies d&apos;une invocation sp\u00e9cifique demandant \u00e0 Allah de guider vers ce qui est bon.",
  },
  {
    question: "Quelles qualit\u00e9s rechercher chez un conjoint en islam ?",
    answer:
      "Le Proph\u00e8te (paix et salut sur lui) a indiqu\u00e9 que l&apos;on \u00e9pouse une femme pour quatre raisons : sa richesse, sa lign\u00e9e, sa beaut\u00e9 et sa religiosit\u00e9, et il a recommand\u00e9 de privil\u00e9gier la religiosit\u00e9 (din). De m\u00eame, pour le choix d&apos;un \u00e9poux, le Proph\u00e8te a dit : \u00ab Si celui dont la religiosit\u00e9 et le caract\u00e8re vous agr\u00e9ent se pr\u00e9sente, mariez-le. \u00bb Le bon caract\u00e8re (khuluq) et la pratique religieuse sont les crit\u00e8res prioritaires.",
  },
  {
    question: "La doua peut-elle remplacer les efforts concrets pour trouver un conjoint ?",
    answer:
      "Non, la doua ne remplace pas les causes concr\u00e8tes (asb\u00e2b). L&apos;islam enseigne de lier la confiance en Allah (tawakkul) \u00e0 l&apos;action. Le Proph\u00e8te (paix et salut sur lui) a dit : \u00ab Attache ton chameau puis place ta confiance en Allah. \u00bb Il faut donc invoquer tout en cherchant activement : en informant son entourage, en acceptant les rencontres l\u00e9gitimes et en se pr\u00e9parant spirituellement et mat\u00e9riellement au mariage.",
  },
];

export default function DouaTrouverMariFemmeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-trouver-mari-femme-islam/#article",
        headline:
          "Doua pour trouver un mari ou une femme en islam : invocations authentiques",
        description:
          "Les douas authentiques pour trouver un conjoint pieux en islam : invocations en arabe avec phon\u00e9tique et traduction, doua Rabbana hab lana, doua de Moussa, istikhara avant le mariage.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-04-11",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-trouver-mari-femme-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-trouver-mari-femme-islam/#breadcrumb",
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
            name: "Doua pour trouver un conjoint",
            item: "https://www.islamreligion.fr/doua-trouver-mari-femme-islam",
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
          title="Doua pour trouver un mari ou une femme en islam"
          subtitle="Invocations authentiques du Coran et de la Sunna pour demander à Allah un conjoint pieux. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Mains levées en doua avec rayons de lumière et motifs islamiques pour invoquer Allah afin de trouver un conjoint"
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
                <span className="text-foreground">Doua pour trouver un conjoint</span>
              </nav>

              {/* R\u00e9sum\u00e9 rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r\u00e9sum\u00e9
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le mariage est une adoration en islam et trouver un conjoint
                  pieux est une qu\u00eate l\u00e9gitime que le musulman accompagne
                  d&apos;invocations sinc\u00e8res. Le Coran et la Sunna offrent
                  plusieurs douas authentiques pour demander \u00e0 Allah un
                  \u00e9poux ou une \u00e9pouse : la c\u00e9l\u00e8bre doua
                  &laquo;&nbsp;Rabbana hab lana min azwajina&nbsp;&raquo;, la doua
                  de Moussa qui pr\u00e9c\u00e9da son mariage, et la pri\u00e8re de
                  l&apos;istikhara pour \u00eatre guid\u00e9 dans son choix.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le mariage en islam */}
              {/* ============================================ */}
              <section id="mariage-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mariage en islam : une adoration et une sunna proph\u00e9tique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mariage (nikah) occupe une place centrale dans la vie du
                  musulman. Bien loin d&apos;\u00eatre un simple contrat social, il
                  est consid\u00e9r\u00e9 comme un acte d&apos;adoration, une
                  sunna du Proph\u00e8te (paix et salut sur lui) et un moyen de
                  compl\u00e9ter la moiti\u00e9 de sa foi. Le Coran d\u00e9crit le
                  lien conjugal avec des mots d&apos;une beaut\u00e9
                  remarquable : les \u00e9poux sont un &laquo;&nbsp;v\u00eatement&nbsp;&raquo;
                  l&apos;un pour l&apos;autre, symbolisant la protection, la
                  pudeur et l&apos;intimit\u00e9 partag\u00e9e.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Et parmi Ses signes, Il a
                  cr\u00e9\u00e9 de vous, pour vous, des \u00e9pouses pour que vous
                  viviez en tranquillit\u00e9 avec elles et Il a mis entre vous de
                  l&apos;affection et de la mis\u00e9ricorde. Il y a en cela des
                  preuves pour des gens qui r\u00e9fl\u00e9chissent&nbsp;&raquo;
                  (Ar-Rum, 30:21). Ce verset \u00e9tablit que le mariage est un signe
                  divin, une manifestation de la mis\u00e9ricorde d&apos;Allah envers
                  Ses cr\u00e9atures. Chercher un conjoint pieux revient donc \u00e0
                  rechercher la mis\u00e9ricorde d&apos;Allah.
                </p>

                <HadithCard
                  arabic="\u064a\u0627 \u0645\u0639\u0634\u0631 \u0627\u0644\u0634\u0628\u0627\u0628 \u0645\u0646 \u0627\u0633\u062a\u0637\u0627\u0639 \u0645\u0646\u0643\u0645 \u0627\u0644\u0628\u0627\u0621\u0629 \u0641\u0644\u064a\u062a\u0632\u0648\u062c \u0641\u0625\u0646\u0647 \u0623\u063a\u0636 \u0644\u0644\u0628\u0635\u0631 \u0648\u0623\u062d\u0635\u0646 \u0644\u0644\u0641\u0631\u062c"
                  text="\u00d4 jeunes gens, celui d&apos;entre vous qui en a la capacit\u00e9, qu&apos;il se marie, car cela pr\u00e9serve mieux le regard et prot\u00e8ge mieux la chastet\u00e9."
                  source="Rapport\u00e9 par al-Bukhari (5066) et Muslim (1400)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre que le Proph\u00e8te (paix et salut sur lui)
                  encourageait activement le mariage, le pr\u00e9sentant comme un
                  bouclier moral et spirituel. Pour celui ou celle qui d\u00e9sire
                  se marier, la d\u00e9marche commence par l&apos;invocation
                  d&apos;Allah. Avant m\u00eame de chercher parmi les gens, le
                  croyant se tourne vers son Seigneur pour Lui demander de
                  faciliter cette \u00e9tape de vie et de lui accorder un conjoint
                  qui l&apos;aide \u00e0 se rapprocher de Lui.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le mariage compl\u00e8te la foi :</strong>{" "}
                      le Proph\u00e8te (paix et salut sur lui) a dit que celui
                      qui se marie a compl\u00e9t\u00e9 la moiti\u00e9 de sa
                      religion, qu&apos;il craigne donc Allah pour l&apos;autre
                      moiti\u00e9 (at-Tabarani).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une protection mutuelle :</strong>{" "}
                      les \u00e9poux se prot\u00e8gent mutuellement des
                      tentations, s&apos;entraident dans l&apos;ob\u00e9issance
                      \u00e0 Allah et fondent un foyer stable pour la communaut\u00e9.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Allah aide celui qui veut se marier :</strong>{" "}
                      le Proph\u00e8te (paix et salut sur lui) a mentionn\u00e9
                      trois personnes qu&apos;Allah s&apos;engage \u00e0 aider,
                      parmi lesquelles celui qui veut se marier pour pr\u00e9server
                      sa chastet\u00e9 (at-Tirmidhi, an-Nasa&apos;i).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en pri\u00e8re dans une mosqu\u00e9e illustrant l&apos;invocation pour trouver un conjoint en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua Rabbana hab lana */}
              {/* ============================================ */}
              <section id="doua-rabbana-hab-lana" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua &laquo;&nbsp;Rabbana hab lana min azwajina&nbsp;&raquo; (Coran 25:74)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Cette invocation coranique est l&apos;une des plus
                  r\u00e9cit\u00e9es par les musulmans qui cherchent un conjoint
                  pieux ou qui souhaitent am\u00e9liorer leur vie conjugale. Elle
                  est prononc\u00e9e par les &laquo;&nbsp;serviteurs du
                  Mis\u00e9ricordieux&nbsp;&raquo; (\u2018Ibad ar-Rahman), un
                  groupe de croyants d&apos;\u00e9lite dont Allah d\u00e9crit les
                  qualit\u00e9s dans la sourate Al-Furqan.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0631\u064e\u0628\u0651\u064e\u0646\u064e\u0627 \u0647\u064e\u0628\u0652 \u0644\u064e\u0646\u064e\u0627 \u0645\u0650\u0646\u0652 \u0623\u064e\u0632\u0652\u0648\u064e\u0627\u062c\u0650\u0646\u064e\u0627 \u0648\u064e\u0630\u064f\u0631\u0651\u0650\u064a\u0651\u064e\u0627\u062a\u0650\u0646\u064e\u0627 \u0642\u064f\u0631\u0651\u064e\u0629\u064e \u0623\u064e\u0639\u0652\u064a\u064f\u0646\u064d \u0648\u064e\u0627\u062c\u0652\u0639\u064e\u0644\u0652\u0646\u064e\u0627 \u0644\u0650\u0644\u0652\u0645\u064f\u062a\u0651\u064e\u0642\u0650\u064a\u0646\u064e \u0625\u0650\u0645\u064e\u0627\u0645\u064b\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yun, waj&apos;alna lil-muttaqina imama
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que nos \u00e9pouses et nos descendants soient la joie de nos yeux, et fais de nous un mod\u00e8le pour les pieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Furqan (25:74)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua contient plusieurs enseignements profonds. Le terme
                  &laquo;&nbsp;hab&nbsp;&raquo; (accorde-nous, fais-nous don)
                  indique que le conjoint pieux est un cadeau d&apos;Allah, pas
                  un simple r\u00e9sultat du hasard ou de l&apos;effort humain.
                  L&apos;expression &laquo;&nbsp;qurrata a&apos;yun&nbsp;&raquo;
                  (joie des yeux, fra\u00eecheur des yeux) d\u00e9signe un bonheur
                  si profond que les yeux se posent sur l&apos;\u00eatre aim\u00e9
                  avec un apaisement total, sans chercher ailleurs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;invocation ne se limite pas \u00e0 demander un conjoint :
                  elle englobe \u00e9galement la descendance et l&apos;aspiration
                  \u00e0 devenir un mod\u00e8le pour les pieux. Cela montre que le
                  mariage en islam s&apos;inscrit dans un projet global de
                  pi\u00e9t\u00e9, o\u00f9 le foyer devient un lieu de
                  transmission de la foi et des valeurs islamiques. Celui qui
                  r\u00e9cite cette doua demande donc bien plus qu&apos;un simple
                  compagnon de vie : il demande une famille enti\u00e8re d\u00e9di\u00e9e
                  \u00e0 l&apos;ob\u00e9issance \u00e0 Allah.
                </p>

                <HadithCard
                  arabic="\u0627\u0644\u062f\u0651\u064f\u0646\u0652\u064a\u064e\u0627 \u0645\u064e\u062a\u064e\u0627\u0639\u064c\u060c \u0648\u064e\u062e\u064e\u064a\u0652\u0631\u064f \u0645\u064e\u062a\u064e\u0627\u0639\u0650 \u0627\u0644\u062f\u0651\u064f\u0646\u0652\u064a\u064e\u0627 \u0627\u0644\u0652\u0645\u064e\u0631\u0652\u0623\u064e\u0629\u064f \u0627\u0644\u0635\u0651\u064e\u0627\u0644\u0650\u062d\u064e\u0629\u064f"
                  text="Ce bas monde est jouissance, et la meilleure jouissance de ce bas monde est une femme pieuse."
                  source="Rapport\u00e9 par Muslim (1467)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith confirm\u00e9 par l&apos;imam Muslim souligne que
                  parmi toutes les b\u00e9n\u00e9dictions de cette vie, un conjoint
                  pieux est la plus pr\u00e9cieuse. C&apos;est pourquoi la
                  demander \u00e0 Allah par la doua est l&apos;une des meilleures
                  invocations que le croyant puisse formuler. Pour d\u00e9couvrir
                  davantage d&apos;invocations li\u00e9es au{" "}
                  <Link href="/doua-mariage-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">mariage en islam</Link>,
                  consultez notre article d\u00e9di\u00e9.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations proph\u00e9tiques dans leur langue originale. D\u00e9couvrez des formations adapt\u00e9es aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommand\u00e9es"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua de Moussa */}
              {/* ============================================ */}
              <section id="doua-moussa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de Moussa : &laquo;&nbsp;Rabbi inni lima anzalta&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;histoire de Moussa (paix sur lui) \u00e0 Madyan est l&apos;un
                  des r\u00e9cits les plus \u00e9mouvants du Coran concernant la
                  qu\u00eate d&apos;un conjoint. Apr\u00e8s avoir fui l&apos;\u00c9gypte,
                  Moussa arriva \u00e0 Madyan seul, sans ressources ni foyer. Il
                  aper\u00e7ut deux femmes qui attendaient pour abreuver leur
                  troupeau car elles ne pouvaient se m\u00ealer aux hommes. Par
                  noblesse de caract\u00e8re, il les aida spontan\u00e9ment, puis
                  se retira \u00e0 l&apos;ombre et prononca cette invocation
                  c\u00e9l\u00e8bre.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0631\u064e\u0628\u0651\u0650 \u0625\u0650\u0646\u0651\u0650\u064a \u0644\u0650\u0645\u064e\u0627 \u0623\u064e\u0646\u0632\u064e\u0644\u0652\u062a\u064e \u0625\u0650\u0644\u064e\u064a\u0651\u064e \u0645\u0650\u0646\u0652 \u062e\u064e\u064a\u0652\u0631\u064d \u0641\u064e\u0642\u0650\u064a\u0631\u064c
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Rabbi inni lima anzalta ilayya min khayrin faqir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, j&apos;ai grand besoin de tout bien que Tu feras descendre vers moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Qasas (28:24)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce qui rend cette doua si particuli\u00e8re, c&apos;est le
                  contexte dans lequel elle fut prononc\u00e9e. Moussa (paix sur
                  lui) ne demanda pas explicitement une \u00e9pouse : il exprima
                  simplement son besoin total envers Allah, reconnaissant sa
                  pauvret\u00e9 et sa d\u00e9pendance absolue. C&apos;est cette
                  humilit\u00e9 et cette confiance qui touch\u00e8rent le c\u0153ur
                  de la r\u00e9ponse divine. Peu de temps apr\u00e8s, l&apos;une
                  des deux femmes revint vers lui, envoy\u00e9e par son p\u00e8re
                  Shu&apos;ayb (paix sur lui), pour lui proposer un emploi et,
                  finalement, le mariage.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les le\u00e7ons de ce r\u00e9cit sont multiples. Moussa agit
                  d&apos;abord avec vertu en aidant les deux femmes sans rien
                  attendre en retour. Il se tourna ensuite vers Allah avec une
                  sinc\u00e9rit\u00e9 totale, sans pr\u00e9ciser ce qu&apos;il
                  voulait, laissant \u00e0 son Seigneur le choix du bienfait.
                  Allah lui accorda alors bien plus qu&apos;il n&apos;avait
                  imagin\u00e9 : une \u00e9pouse, un foyer, un emploi et la
                  protection du proph\u00e8te Shu&apos;ayb. Cette histoire enseigne
                  que la bienveillance, l&apos;humilit\u00e9 devant Allah et la
                  confiance en Sa g\u00e9n\u00e9rosit\u00e9 sont les meilleures
                  pr\u00e9parations au mariage.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour celui ou celle qui cherche un conjoint, cette doua est
                  particuli\u00e8rement adapt\u00e9e. Elle ne demande pas un bien
                  pr\u00e9cis mais s&apos;en remet enti\u00e8rement \u00e0 la
                  sagesse d&apos;Allah. R\u00e9cit\u00e9e r\u00e9guli\u00e8rement
                  avec pr\u00e9sence du c\u0153ur, elle exprime cette belle
                  attitude de tawakkul (confiance en Allah) que chaque musulman
                  devrait cultiver dans sa recherche de conjoint.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Istikhara avant le mariage */}
              {/* ============================================ */}
              <section id="istikhara-mariage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La pri\u00e8re de l&apos;istikhara avant le mariage
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;istikhara (pri\u00e8re de consultation) est une sunna
                  fortement recommand\u00e9e avant toute d\u00e9cision importante,
                  et le mariage en est l&apos;exemple par excellence. Le
                  Proph\u00e8te (paix et salut sur lui) enseignait cette pri\u00e8re
                  \u00e0 ses compagnons comme il leur enseignait les sourates du
                  Coran, preuve de son importance capitale dans la vie du
                  musulman.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0651\u0650\u064a \u0623\u064e\u0633\u0652\u062a\u064e\u062e\u0650\u064a\u0631\u064f\u0643\u064e \u0628\u0650\u0639\u0650\u0644\u0652\u0645\u0650\u0643\u064e \u0648\u064e\u0623\u064e\u0633\u0652\u062a\u064e\u0642\u0652\u062f\u0650\u0631\u064f\u0643\u064e \u0628\u0650\u0642\u064f\u062f\u0652\u0631\u064e\u062a\u0650\u0643\u064e \u0648\u064e\u0623\u064e\u0633\u0652\u0623\u064e\u0644\u064f\u0643\u064e \u0645\u0650\u0646\u0652 \u0641\u064e\u0636\u0652\u0644\u0650\u0643\u064e \u0627\u0644\u0652\u0639\u064e\u0638\u0650\u064a\u0645\u0650
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma inni astakhiruka bi&apos;ilmika wa astaqdiruka bi qudratika wa as&apos;aluka min fadlikal-&apos;adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande de me guider par Ta science, de me donner la capacit\u00e9 par Ta puissance, et je Te demande de Ta gr\u00e2ce immense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par al-Bukhari (1162) \u2014 d\u00e9but de la doua de l&apos;istikhara
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La pri\u00e8re de l&apos;istikhara se compose de deux raka&apos;at
                  (unit\u00e9s de pri\u00e8re) suivies de l&apos;invocation
                  compl\u00e8te dans laquelle le croyant demande \u00e0 Allah de
                  lui faciliter l&apos;affaire si elle est bonne pour lui, ou de
                  l&apos;en \u00e9loigner si elle contient un mal. Appliqu\u00e9e
                  au mariage, cette pri\u00e8re permet de confier \u00e0 Allah le
                  choix final du conjoint, en reconnaissant que Lui seul conna\u00eet
                  ce qui est v\u00e9ritablement b\u00e9n\u00e9fique.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dor\u00e9e illustrant les versets sur le mariage et les invocations"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Contrairement \u00e0 une id\u00e9e r\u00e9pandue,
                  l&apos;istikhara ne se manifeste pas n\u00e9cessairement par un
                  r\u00eave ou un signe spectaculaire. La r\u00e9ponse peut se
                  traduire par une facilitation ou une difficult\u00e9 dans les
                  d\u00e9marches, un sentiment de s\u00e9r\u00e9nit\u00e9 ou de
                  malaise, ou encore des circonstances qui orientent naturellement
                  vers une direction. L&apos;important est de faire confiance \u00e0
                  Allah apr\u00e8s l&apos;avoir consult\u00e9, sans h\u00e9siter
                  ni revenir en arri\u00e8re sur la d\u00e9cision qui se dessine.
                  Pour approfondir ce sujet, d\u00e9couvrez notre article sur{" "}
                  <Link href="/doua-istikhara-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la doua de l&apos;istikhara</Link>.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire ses ablutions et prier deux raka&apos;at
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Commencer par des ablutions compl\u00e8tes, puis prier
                        deux raka&apos;at surr\u00e9rogatoires en dehors de la
                        pri\u00e8re obligatoire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        R\u00e9citer l&apos;invocation de l&apos;istikhara
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Apr\u00e8s le salam, r\u00e9citer l&apos;invocation
                        compl\u00e8te de l&apos;istikhara en mentionnant
                        sp\u00e9cifiquement l&apos;affaire du mariage au moment
                        indiqu\u00e9 dans la doua.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        S&apos;en remettre \u00e0 Allah et observer les signes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Apr\u00e8s l&apos;istikhara, avancer dans la d\u00e9marche
                        avec confiance. Si les portes s&apos;ouvrent, c&apos;est
                        un signe positif. Si des obstacles surgissent
                        r\u00e9p\u00e9titivement, c&apos;est qu&apos;Allah
                        \u00e9loigne un mal du croyant.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Qualit\u00e9s \u00e0 rechercher */}
              {/* ============================================ */}
              <section id="qualites-conjoint" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les qualit\u00e9s \u00e0 rechercher chez un conjoint en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Proph\u00e8te (paix et salut sur lui) a \u00e9tabli des
                  crit\u00e8res clairs pour le choix du conjoint. Ces orientations
                  proph\u00e9tiques servent de boussole au musulman dans sa
                  recherche et compl\u00e8tent les invocations par une d\u00e9marche
                  r\u00e9fl\u00e9chie et fond\u00e9e sur la Sunna.
                </p>

                <HadithCard
                  arabic="\u062a\u064f\u0646\u0643\u064e\u062d\u064f \u0627\u0644\u0645\u064e\u0631\u0623\u064e\u0629\u064f \u0644\u0623\u0631\u0628\u064e\u0639\u064d: \u0644\u0650\u0645\u064e\u0627\u0644\u0650\u0647\u064e\u0627\u060c \u0648\u0644\u0650\u062d\u064e\u0633\u064e\u0628\u0650\u0647\u064e\u0627\u060c \u0648\u0644\u0650\u062c\u064e\u0645\u064e\u0627\u0644\u0650\u0647\u064e\u0627\u060c \u0648\u0644\u0650\u062f\u0650\u064a\u0646\u0650\u0647\u064e\u0627\u060c \u0641\u064e\u0627\u0638\u0641\u064e\u0631\u0652 \u0628\u0650\u0630\u064e\u0627\u062a\u0650 \u0627\u0644\u062f\u0651\u0650\u064a\u0646\u0650 \u062a\u064e\u0631\u0650\u0628\u064e\u062a\u0652 \u064a\u064e\u062f\u064e\u0627\u0643\u064e"
                  text="On \u00e9pouse une femme pour quatre raisons : sa richesse, sa lign\u00e9e, sa beaut\u00e9 et sa religiosit\u00e9. Choisis celle qui est pieuse, puissent tes mains \u00eatre couvertes de poussi\u00e8re (si tu ne le fais pas)."
                  source="Rapport\u00e9 par al-Bukhari (5090) et Muslim (1466)"
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La religiosit\u00e9 (din)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le crit\u00e8re prioritaire est la pratique religieuse
                      sinc\u00e8re. Un conjoint qui craint Allah prot\u00e9gera les
                      droits de son \u00e9poux ou \u00e9pouse, \u00e9duquera les
                      enfants dans la foi et sera un compagnon dans l&apos;ob\u00e9issance
                      \u00e0 Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le bon caract\u00e8re (khuluq)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Proph\u00e8te (paix et salut sur lui) a dit que les
                      meilleurs croyants sont ceux qui ont le meilleur caract\u00e8re,
                      et les meilleurs d&apos;entre eux sont ceux qui sont les
                      meilleurs envers leurs \u00e9pouses (at-Tirmidhi).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La compatibilit\u00e9 (kafa&apos;a)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les savants mentionnent la compatibilit\u00e9 dans la
                      pratique religieuse, le niveau social et les objectifs de
                      vie. Cette harmonie facilite la stabilit\u00e9 du couple
                      et r\u00e9duit les sources de conflits futurs.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La capacit\u00e9 \u00e0 fonder un foyer
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Au-del\u00e0 des qualit\u00e9s spirituelles, le r\u00e9alisme
                      est important : la maturit\u00e9 \u00e9motionnelle, la
                      responsabilit\u00e9 financi\u00e8re et la volont\u00e9
                      d&apos;investir dans le couple sont des crit\u00e8res
                      l\u00e9gitimes \u00e0 consid\u00e9rer.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour le choix d&apos;un \u00e9poux, le Proph\u00e8te (paix et
                  salut sur lui) a donn\u00e9 une orientation similaire en
                  disant : &laquo;&nbsp;Si celui dont la religiosit\u00e9 et le
                  caract\u00e8re vous agr\u00e9ent se pr\u00e9sente \u00e0 vous,
                  mariez-le. Si vous ne le faites pas, il y aura une grande
                  \u00e9preuve sur terre et une large corruption&nbsp;&raquo;
                  (at-Tirmidhi, 1084). Les crit\u00e8res sont donc les m\u00eames
                  pour les hommes et les femmes : la pi\u00e9t\u00e9 et le bon
                  caract\u00e8re priment sur toute autre consid\u00e9ration. Pour
                  en savoir plus sur les{" "}
                  <Link href="/doua-protection-couple-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de protection du couple</Link>,
                  consultez notre article d\u00e9di\u00e9.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Patience et tawakkul */}
              {/* ============================================ */}
              <section id="patience-tawakkul" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Patience et tawakkul : faire confiance \u00e0 Allah dans la recherche
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La recherche d&apos;un conjoint peut parfois s&apos;\u00e9tendre
                  sur des mois, voire des ann\u00e9es, et cette attente constitue
                  une \u00e9preuve \u00e0 part enti\u00e8re. L&apos;islam offre un
                  cadre spirituel qui transforme cette p\u00e9riode d&apos;attente
                  en une occasion de se rapprocher d&apos;Allah et de renforcer
                  sa foi. Le tawakkul (confiance en Allah) n&apos;est pas la
                  passivit\u00e9 : c&apos;est l&apos;alliance de l&apos;effort
                  sinc\u00e8re et de la remise totale du r\u00e9sultat entre les
                  mains du Cr\u00e9ateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Et quiconque place sa
                  confiance en Allah, Il lui suffit. Allah atteint ce qu&apos;Il
                  veut. Allah a \u00e9tabli une mesure pour chaque
                  chose&nbsp;&raquo; (At-Talaq, 65:3). Ce verset rappelle que
                  chaque \u00e9v\u00e9nement de la vie, y compris le mariage, est
                  d\u00e9cr\u00e9t\u00e9 par Allah au moment le plus opportun. Le
                  retard dans la r\u00e9ponse n&apos;est pas un signe de refus
                  divin, mais la preuve qu&apos;Allah pr\u00e9pare quelque chose
                  de meilleur que ce que le serviteur imagine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0648\u064e\u0645\u064e\u0646 \u064a\u064e\u062a\u0651\u064e\u0642\u0650 \u0627\u0644\u0644\u0651\u064e\u0647\u064e \u064a\u064e\u062c\u0652\u0639\u064e\u0644 \u0644\u0651\u064e\u0647\u064f \u0645\u064e\u062e\u0652\u0631\u064e\u062c\u064b\u0627 \u0648\u064e\u064a\u064e\u0631\u0652\u0632\u064f\u0642\u0652\u0647\u064f \u0645\u0650\u0646\u0652 \u062d\u064e\u064a\u0652\u062b\u064f \u0644\u064e\u0627 \u064a\u064e\u062d\u0652\u062a\u064e\u0633\u0650\u0628\u064f
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Wa man yattaqillaha yaj&apos;al lahu makhraja, wa yarzuqhu min haythu la yahtasib
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et quiconque craint Allah, Il lui donnera une issue favorable et lui accordera Ses dons par des moyens qu&apos;il ne soupconnait pas&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate At-Talaq (65:2-3)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce verset est un r\u00e9confort immense pour quiconque attend de
                  trouver un conjoint. La taqwa (crainte r\u00e9v\u00e9rencielle
                  d&apos;Allah) ouvre des portes insoup\u00e7onn\u00e9es. Celui qui
                  pr\u00e9serve sa chastet\u00e9 dans l&apos;attente, qui continue
                  de prier et d&apos;invoquer, et qui refuse les voies illicites
                  pour combler sa solitude, verra Allah lui accorder un conjoint
                  par des moyens qu&apos;il n&apos;avait m\u00eame pas envisag\u00e9s.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier les actes d&apos;adoration :</strong>{" "}
                      la p\u00e9riode d&apos;attente est un temps
                      d&apos;investissement spirituel. Je\u00fbne, pri\u00e8res
                      nocturnes, lecture du Coran et dhikr rapprochent d&apos;Allah
                      et attirent Sa mis\u00e9ricorde.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas se comparer aux autres :</strong>{" "}
                      chaque destin est unique. Le fait que d&apos;autres se
                      marient avant soi ne signifie pas un oubli divin. Allah
                      accorde \u00e0 chacun au moment qui lui convient le mieux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prendre les causes concr\u00e8tes :</strong>{" "}
                      informer sa famille et son entourage, accepter les
                      propositions l\u00e9gitimes, participer \u00e0 des
                      \u00e9v\u00e9nements communautaires et se pr\u00e9parer
                      mat\u00e9riellement au mariage font partie du tawakkul
                      complet. Consultez notre page sur les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>{" "}
                      pour d\u00e9couvrir d&apos;autres douas.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du mariage en islam"
                  description="D\u00e9couvrez toutes les invocations li\u00e9es au mariage : doua de la nuit de noces, doua pour la f\u00e9licit\u00e9 conjugale et doua pour les \u00e9poux."
                  href="/doua-mariage-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Douas compl\u00e9mentaires */}
              {/* ============================================ */}
              <section id="douas-complementaires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas compl\u00e9mentaires pour trouver un conjoint pieux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des deux douas principales d\u00e9j\u00e0 mentionn\u00e9es,
                  plusieurs invocations authentiques peuvent accompagner le
                  musulman dans sa recherche d&apos;un conjoint. Ces douas
                  couvrent diff\u00e9rents aspects de la demande : la facilitation,
                  la protection contre un mauvais choix et la demande de bienfait
                  g\u00e9n\u00e9ral.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander le bien \u00e0 Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation proph\u00e9tique g\u00e9n\u00e9rale permet de
                  demander \u00e0 Allah tout ce qui est bon, y compris un conjoint
                  pieux. Sa simplicit\u00e9 et sa port\u00e9e en font une doua
                  id\u00e9ale \u00e0 r\u00e9p\u00e9ter quotidiennement.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0651\u0650\u064a \u0623\u064e\u0633\u0652\u0623\u064e\u0644\u064f\u0643\u064e \u0645\u0650\u0646\u0652 \u062e\u064e\u064a\u0652\u0631\u0650 \u0645\u064e\u0627 \u0633\u064e\u0623\u064e\u0644\u064e\u0643\u064e \u0645\u0650\u0646\u0652\u0647\u064f \u0646\u064e\u0628\u0650\u064a\u0651\u064f\u0643\u064e \u0645\u064f\u062d\u064e\u0645\u0651\u064e\u062f\u064c
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma inni as&apos;aluka min khayri ma sa&apos;alaka minhu nabiyyuka Muhammad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le bien que Ton proph\u00e8te Muhammad T&apos;a demand\u00e9&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par at-Tirmidhi (3521)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour la facilit\u00e9 dans les affaires
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque les portes semblent ferm\u00e9es et que la recherche
                  devient difficile, cette doua demande \u00e0 Allah de faciliter
                  ce qui para\u00eet compliqu\u00e9 et d&apos;aplanir les
                  obstacles.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0644\u064e\u0627 \u0633\u064e\u0647\u0652\u0644\u064e \u0625\u0650\u0644\u0651\u064e\u0627 \u0645\u064e\u0627 \u062c\u064e\u0639\u064e\u0644\u0652\u062a\u064e\u0647\u064f \u0633\u064e\u0647\u0652\u0644\u064b\u0627 \u0648\u064e\u0623\u064e\u0646\u0652\u062a\u064e \u062a\u064e\u062c\u0652\u0639\u064e\u0644\u064f \u0627\u0644\u0652\u062d\u064e\u0632\u0652\u0646\u064e \u0625\u0650\u0630\u064e\u0627 \u0634\u0650\u0626\u0652\u062a\u064e \u0633\u064e\u0647\u0652\u0644\u064b\u0627
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahla, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahla
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf ce que Tu rends facile, et Tu rends le chagrin facile quand Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Ibn Hibban (974), authentifi\u00e9
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de protection contre un mauvais choix
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation compl\u00e8te demande \u00e0 Allah de
                  prot\u00e9ger contre les d\u00e9cisions n\u00e9fastes et de
                  guider vers ce qui est v\u00e9ritablement b\u00e9n\u00e9fique.
                  Elle est particuli\u00e8rement adapt\u00e9e lorsqu&apos;on
                  h\u00e9site entre plusieurs propositions.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    \u0627\u0644\u0644\u0651\u064e\u0647\u064f\u0645\u0651\u064e \u0625\u0650\u0646\u0651\u0650\u064a \u0623\u064e\u0639\u064f\u0648\u0630\u064f \u0628\u0650\u0643\u064e \u0645\u0650\u0646\u0652 \u0634\u064e\u0631\u0651\u0650 \u0645\u064e\u0627 \u0639\u064e\u0645\u0650\u0644\u0652\u062a\u064f \u0648\u064e\u0645\u0650\u0646\u0652 \u0634\u064e\u0631\u0651\u0650 \u0645\u064e\u0627 \u0644\u064e\u0645\u0652 \u0623\u064e\u0639\u0652\u0645\u064e\u0644\u0652
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phon\u00e9tique :</strong> Allahumma inni a&apos;udhu bika min sharri ma &apos;amiltu wa min sharri ma lam a&apos;mal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge aupr\u00e8s de Toi contre le mal de ce que j&apos;ai fait et le mal de ce que je n&apos;ai pas fait&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapport\u00e9 par Muslim (2716)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;id\u00e9al est de combiner ces invocations avec les douas
                  principales (Rabbana hab lana et Rabbi inni lima anzalta) et
                  de les r\u00e9citer r\u00e9guli\u00e8rement, en particulier
                  aux moments propices : le dernier tiers de la nuit, pendant la
                  prosternation, entre l&apos;adhan et l&apos;iqama, et le
                  vendredi apr\u00e8s l&apos;Asr. La r\u00e9gularit\u00e9 et la
                  sinc\u00e9rit\u00e9 du c\u0153ur importent davantage que la
                  quantit\u00e9 de r\u00e9p\u00e9titions.
                </p>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Ma\u00eetrisez la langue du Coran pour r\u00e9citer les douas avec compr\u00e9hension et profondeur spirituelle. D\u00e9couvrez nos formations en ligne adapt\u00e9es \u00e0 tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur les invocations en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam
                  </Link>
                  <Link
                    href="/doua-mariage-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du mariage
                  </Link>
                  <Link
                    href="/doua-istikhara-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;istikhara
                  </Link>
                  <Link
                    href="/doua-protection-couple-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection du couple
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages m\u00e8res */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le m\u00eame sujet
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
