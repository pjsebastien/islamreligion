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
    "Doua de l'eau de zamzam en islam : invocations authentiques et vertus",
  description:
    "Découvrez la doua de l'eau de zamzam en islam : invocations authentiques en arabe avec phonétique et traduction, hadith d'Ibn Abbas, vertus de l'eau de zamzam et comment la boire selon la Sunna.",
  openGraph: {
    title:
      "Doua de l'eau de zamzam en islam : invocations authentiques et vertus",
    description:
      "Les invocations authentiques à réciter en buvant l'eau de zamzam : textes en arabe, phonétique, traduction, hadiths et vertus spirituelles.",
    url: "https://www.islamreligion.fr/doua-zamzam-islam",
    images: [
      {
        url: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-zamzam-islam",
  },
};

const tocItems = [
  { id: "histoire-zamzam", label: "L'histoire de l'eau de zamzam" },
  { id: "hadith-zamzam", label: "Le hadith : L'eau de zamzam est pour ce pour quoi elle est bue" },
  { id: "douas-zamzam", label: "Douas authentiques en buvant zamzam" },
  { id: "vertus-zamzam", label: "Les vertus de l'eau de zamzam" },
  { id: "comment-boire", label: "Comment boire zamzam selon la Sunna" },
  { id: "zamzam-hajj-omra", label: "Zamzam pendant le hajj et la omra" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua à dire en buvant l'eau de zamzam ?",
    answer:
      "La doua la plus connue en buvant l&apos;eau de zamzam est celle d&apos;Ibn Abbas (qu&apos;Allah l&apos;agrée) : « Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an, wa rizqan wasi&apos;an, wa shifa&apos;an min kulli da&apos; » (Seigneur, je Te demande une science utile, une subsistance abondante et une guérison de toute maladie). On peut aussi formuler toute doua personnelle car le Prophète (paix et salut sur lui) a dit que l&apos;eau de zamzam est pour ce pour quoi elle est bue.",
  },
  {
    question: "Est-ce que l'eau de zamzam exauce les douas ?",
    answer:
      "Oui, selon le hadith authentique rapporté par Ibn Majah, le Prophète (paix et salut sur lui) a dit : « Ma&apos;u zamzam lima shuriba lahu » (L&apos;eau de zamzam est pour ce pour quoi elle est bue). Cela signifie que si on boit zamzam avec une intention sincère (guérison, science, subsistance), Allah exauce cette intention par Sa permission. Les savants soulignent l&apos;importance de la sincérité et de la confiance en Allah lors de cette invocation.",
  },
  {
    question: "Peut-on boire l'eau de zamzam debout ?",
    answer:
      "Oui, il est permis de boire l&apos;eau de zamzam debout. Ibn Abbas (qu&apos;Allah l&apos;agrée) rapporte qu&apos;il a donné de l&apos;eau de zamzam au Prophète (paix et salut sur lui) et qu&apos;il l&apos;a bue debout (rapporté par al-Bukhari). Les savants expliquent que boire debout est une exception spécifique à l&apos;eau de zamzam, bien que certains considèrent qu&apos;il est également recommandé de la boire assis.",
  },
  {
    question: "D'où vient l'eau de zamzam ?",
    answer:
      "L&apos;eau de zamzam provient du puits de zamzam situé dans l&apos;enceinte de la Mosquée Sacrée (al-Masjid al-Haram) à La Mecque. Ce puits a jailli miraculeusement sous les pieds d&apos;Isma&apos;il (paix sur lui) lorsqu&apos;il était nourrisson, alors que sa mère Hajar cherchait désespérément de l&apos;eau entre les monts Safa et Marwa. Depuis plus de 4000 ans, cette source n&apos;a jamais tari.",
  },
  {
    question: "Quelles sont les vertus de l'eau de zamzam en islam ?",
    answer:
      "L&apos;eau de zamzam possède de nombreuses vertus en islam. Le Prophète (paix et salut sur lui) l&apos;a qualifiée de « meilleure eau sur terre » (rapporté par at-Tabarani). Elle est un remède contre les maladies, une source de baraka (bénédiction), et elle comble le besoin pour lequel on la boit. Abu Dharr (qu&apos;Allah l&apos;agrée) a survécu uniquement en buvant zamzam pendant trente jours, et le Prophète lui a dit : « C&apos;est une nourriture qui rassasie ».",
  },
  {
    question: "Peut-on boire l'eau de zamzam en dehors de La Mecque ?",
    answer:
      "Oui, il est tout à fait permis de boire l&apos;eau de zamzam en dehors de La Mecque. Le Prophète (paix et salut sur lui) lui-même en a transporté. Les savants s&apos;accordent à dire que les vertus de l&apos;eau de zamzam ne sont pas limitées à un lieu précis. On peut donc la boire partout dans le monde en formulant ses douas et intentions, et ses bienfaits restent les mêmes par la permission d&apos;Allah.",
  },
  {
    question: "Faut-il faire une intention avant de boire zamzam ?",
    answer:
      "Oui, les savants recommandent fortement de formuler une intention claire (niyyah) avant de boire l&apos;eau de zamzam. C&apos;est le sens du hadith « L&apos;eau de zamzam est pour ce pour quoi elle est bue ». On peut formuler plusieurs intentions à la fois : guérison, science utile, subsistance, facilité dans les épreuves, etc. L&apos;essentiel est d&apos;avoir une confiance absolue en Allah et une sincérité dans sa demande.",
  },
  {
    question: "L'eau de zamzam peut-elle guérir les maladies ?",
    answer:
      "Oui, l&apos;eau de zamzam est considérée comme un remède en islam. Le Prophète (paix et salut sur lui) a dit : « L&apos;eau de zamzam est pour ce pour quoi elle est bue. Si tu la bois pour te guérir, Allah te guérira » (rapporté par Ahmad). De nombreux savants comme Ibn al-Qayyim ont rapporté des témoignages de guérison par l&apos;eau de zamzam. Cependant, la guérison reste entre les mains d&apos;Allah, et zamzam est un moyen parmi d&apos;autres, à combiner avec les causes matérielles.",
  },
];

export default function DouaZamzamIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-zamzam-islam/#article",
        headline:
          "Doua de l'eau de zamzam en islam : invocations authentiques et vertus",
        description:
          "Découvrez la doua de l'eau de zamzam en islam : invocations authentiques en arabe, hadith d'Ibn Abbas, vertus de l'eau de zamzam et comment la boire selon la Sunna.",
        image: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        datePublished: "2026-03-18",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-zamzam-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-zamzam-islam/#breadcrumb",
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
            name: "Doua de l'eau de zamzam",
            item: "https://www.islamreligion.fr/doua-zamzam-islam",
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
          title="Doua de l'eau de zamzam en islam : invocations authentiques et vertus"
          subtitle="Les invocations prophétiques à réciter en buvant l'eau de zamzam, tirées de la Sunna authentique. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
          imageAlt="Pèlerins en invocation près de la Kaaba à La Mecque illustrant la doua de l'eau de zamzam en islam"
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
                <span className="text-foreground">Doua de l&apos;eau de zamzam</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;eau de zamzam occupe une place unique en islam :
                  c&apos;est une eau bénie qui a jailli miraculeusement sous les
                  pieds d&apos;Isma&apos;il (paix sur lui) et dont la source
                  n&apos;a jamais tari depuis des millénaires. Le Prophète (paix
                  et salut sur lui) a enseigné que &laquo;&nbsp;l&apos;eau de
                  zamzam est pour ce pour quoi elle est bue&nbsp;&raquo;, faisant
                  de chaque gorgée une occasion d&apos;invocation exaucée. Ibn
                  Abbas (qu&apos;Allah l&apos;agrée) récitait une doua
                  spécifique en la buvant, demandant science utile, subsistance
                  abondante et guérison de toute maladie.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Histoire de zamzam */}
              {/* ============================================ */}
              <section id="histoire-zamzam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;histoire de l&apos;eau de zamzam en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;histoire de l&apos;eau de zamzam remonte à
                  l&apos;époque du prophète Ibrahim (Abraham, paix sur lui) et
                  constitue l&apos;un des récits les plus émouvants de la
                  tradition islamique. Sur ordre divin, Ibrahim laissa son
                  épouse Hajar et son fils nourrisson Isma&apos;il dans la
                  vallée aride et inhabitée de La Mecque, un lieu dépourvu de
                  toute végétation et de toute source d&apos;eau.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque les provisions d&apos;eau s&apos;épuisèrent, Hajar se
                  mit à courir entre les monts Safa et Marwa, cherchant
                  désespérément de l&apos;eau pour son enfant assoiffé. Elle
                  parcourut ce trajet sept fois, scrutant l&apos;horizon dans
                  l&apos;espoir d&apos;apercevoir une caravane ou un point
                  d&apos;eau. C&apos;est alors qu&apos;un miracle se produisit :
                  l&apos;ange Jibril (Gabriel) frappa le sol de son aile (ou de
                  son talon selon certaines narrations), et une source
                  d&apos;eau jaillit sous les pieds du petit Isma&apos;il.
                </p>

                <HadithCard
                  arabic="فعند ذلك بلغها الماء فقالت: زم زم، أي حبسته"
                  text="L'eau jaillit alors, et Hajar dit : 'Zam zam' (c'est-à-dire : arrête-toi, arrête-toi !), en essayant de contenir l'eau."
                  source="Rapporté par al-Bukhari (3364)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Hajar se hâta de rassembler l&apos;eau avec ses mains,
                  formant un bassin pour la retenir. Le Prophète (paix et salut
                  sur lui) a commenté cet épisode en disant que si Hajar avait
                  laissé l&apos;eau couler librement, zamzam aurait été une
                  rivière à ciel ouvert. Ce geste de Hajar, sa course entre
                  Safa et Marwa, est devenu l&apos;un des rites fondamentaux du{" "}
                  <Link href="/doua-hajj-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">hajj</Link>{" "}
                  et de la{" "}
                  <Link href="/doua-omra-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">omra</Link>,
                  perpétué par des millions de pèlerins chaque année.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une source miraculeuse :</strong> l&apos;eau de
                      zamzam jaillit dans un désert aride, sans aucune source
                      souterraine naturelle connue à l&apos;époque, par la
                      volonté d&apos;Allah seul.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Jamais tarie :</strong> depuis plus de 4000 ans,
                      cette source n&apos;a jamais cessé de couler, malgré les
                      millions de litres puisés chaque année par les pèlerins.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le sa&apos;y :</strong> la course entre Safa et
                      Marwa, en mémoire de Hajar, est devenue un pilier du hajj
                      et de la omra, rappelant à chaque musulman la confiance
                      absolue en Allah dans l&apos;épreuve.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/kaaba-mecque-pelerinage-hajj-islam.jpg"
                    alt="La Kaaba à La Mecque entourée de pèlerins illustrant le lieu sacré où se trouve le puits de zamzam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le hadith fondamental */}
              {/* ============================================ */}
              <section id="hadith-zamzam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  &laquo;&nbsp;L&apos;eau de zamzam est pour ce pour quoi elle est bue&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le hadith le plus célèbre concernant la doua zamzam est celui
                  qui établit le lien direct entre l&apos;intention du buveur
                  et l&apos;exaucement de sa demande. Ce hadith constitue le
                  fondement de toute la pratique spirituelle liée à la
                  consommation de l&apos;eau de zamzam en islam.
                </p>

                <HadithCard
                  arabic="ماء زمزم لما شرب له"
                  text="L'eau de zamzam est pour ce pour quoi elle est bue."
                  source="Rapporté par Ibn Majah (3062), Ahmad (14435), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, connu sous sa formule arabe &laquo;&nbsp;Ma&apos;u
                  zamzam lima shuriba lahu&nbsp;&raquo;, est d&apos;une portée
                  considérable. Il signifie que quiconque boit l&apos;eau de
                  zamzam avec une intention précise et sincère verra cette
                  intention réalisée par la permission d&apos;Allah. Que
                  l&apos;on boive zamzam pour la guérison d&apos;une maladie,
                  pour obtenir une science bénéfique, pour une subsistance
                  abondante ou pour toute autre demande légitime, Allah honore
                  cette intention.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Ibn al-Qayyim (qu&apos;Allah lui fasse
                  miséricorde) a témoigné de l&apos;efficacité de cette
                  pratique. Il rapporte qu&apos;il a lui-même bu l&apos;eau de
                  zamzam pour plusieurs raisons, notamment pour la guérison de
                  certaines maladies, et qu&apos;il a constaté des résultats
                  remarquables par la grâce d&apos;Allah. D&apos;autres savants
                  comme al-Hakim et as-Suyuti ont également rapporté des
                  témoignages similaires, confirmant la réalité de cette
                  promesse prophétique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants soulignent que la clé de l&apos;exaucement
                  réside dans la sincérité de l&apos;intention et la
                  certitude absolue en la promesse du Prophète (paix et salut
                  sur lui). Celui qui boit zamzam avec doute ou
                  distraction passe à côté de cette immense bénédiction. En
                  revanche, celui qui formule son intention avec un coeur
                  présent et une confiance ferme en Allah maximise les chances
                  d&apos;être exaucé. C&apos;est pourquoi les savants
                  recommandent de prendre un moment de recueillement avant de
                  boire, de formuler clairement ses demandes, puis de boire
                  avec la certitude que la réponse viendra d&apos;Allah au
                  moment qu&apos;Il jugera le plus approprié.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Douas authentiques */}
              {/* ============================================ */}
              <section id="douas-zamzam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques en buvant l&apos;eau de zamzam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Plusieurs invocations sont rapportées de la tradition
                  prophétique et des compagnons pour accompagner la
                  consommation de l&apos;eau de zamzam. Voici les principales
                  douas, accompagnées de leur texte arabe, de leur phonétique
                  et de leur traduction en français.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. La doua d&apos;Ibn Abbas en buvant zamzam
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Ibn Abbas (qu&apos;Allah l&apos;agrée), le cousin du
                  Prophète (paix et salut sur lui) et grand savant de la
                  communauté, récitait cette invocation chaque fois qu&apos;il
                  buvait l&apos;eau de zamzam. Elle est devenue la doua la plus
                  populaire associée à zamzam.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا وَاسِعًا، وَشِفَاءً مِنْ كُلِّ دَاءٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an, wa rizqan wasi&apos;an, wa shifa&apos;an min kulli da&apos;
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande une science utile, une subsistance abondante et une guérison de toute maladie&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par ad-Daraqutni, al-Hakim (1/473)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua générale en buvant zamzam
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  En plus de la doua d&apos;Ibn Abbas, les savants recommandent
                  de commencer par le nom d&apos;Allah et de formuler ses
                  propres demandes avec sincérité. L&apos;invocation suivante
                  combine la formule de base avec une demande de guérison et
                  de pardon.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّهُ بَلَغَنِي أَنَّ رَسُولَكَ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَاءُ زَمْزَمَ لِمَا شُرِبَ لَهُ، اللَّهُمَّ إِنِّي أَشْرَبُهُ أَسْتَشْفِي بِهِ فَاشْفِنِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma innahu balaghani anna rasulaka sallAllahu &apos;alayhi wa sallam qala: Ma&apos;u zamzam lima shuriba lahu. Allahumma inni ashrabuhu astashfi bihi fashfini
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, il m&apos;est parvenu que Ton Messager (paix et salut sur lui) a dit : L&apos;eau de zamzam est pour ce pour quoi elle est bue. Seigneur, je la bois en cherchant la guérison, alors guéris-moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Formule rapportée par les savants, basée sur le hadith d&apos;Ibn Majah (3062)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Dire Bismillah et formuler son intention
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Comme pour toute nourriture et boisson, il est recommandé de
                  commencer par &laquo;&nbsp;Bismillah&nbsp;&raquo; (Au nom
                  d&apos;Allah) avant de boire l&apos;eau de zamzam. Ensuite,
                  le croyant formule dans son coeur ou à voix basse
                  l&apos;intention pour laquelle il boit cette eau bénite :
                  guérison, science, subsistance, protection, facilité dans une
                  épreuve ou toute autre demande légitime.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sunna du Prophète (paix et salut sur lui) pour toute boisson et nourriture
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que l&apos;on peut multiplier les
                  intentions en buvant zamzam. Rien n&apos;empêche de demander
                  à Allah simultanément la guérison, la science, la
                  subsistance et la protection. Ibn al-Qayyim a d&apos;ailleurs
                  mentionné qu&apos;il buvait zamzam pour plusieurs intentions
                  à la fois. L&apos;essentiel est que chaque demande soit
                  formulée avec sincérité et confiance en Allah, sans la
                  moindre hésitation quant à la réponse divine.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Vertus de zamzam */}
              {/* ============================================ */}
              <section id="vertus-zamzam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les vertus de l&apos;eau de zamzam dans le Coran et la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;eau de zamzam est décrite dans la tradition islamique
                  comme une eau dotée de propriétés exceptionnelles, tant sur
                  le plan spirituel que physique. Les hadiths authentiques
                  attribuent à cette eau bénite des vertus que l&apos;on ne
                  retrouve dans aucune autre eau sur terre.
                </p>

                <HadithCard
                  arabic="خير ماء على وجه الأرض ماء زمزم، فيه طعام من الطُّعم وشفاء من السُّقم"
                  text="La meilleure eau sur la face de la terre est l'eau de zamzam. Elle est une nourriture qui rassasie et un remède contre la maladie."
                  source="Rapporté par at-Tabarani dans al-Mu'jam al-Kabir, authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle trois caractéristiques majeures de
                  l&apos;eau de zamzam. Premièrement, elle est la
                  &laquo;&nbsp;meilleure eau sur terre&nbsp;&raquo;, ce qui lui
                  confère un statut unique parmi toutes les eaux de la
                  création. Deuxièmement, elle est une nourriture (tu&apos;m),
                  capable de rassasier celui qui la boit. L&apos;histoire
                  d&apos;Abu Dharr (qu&apos;Allah l&apos;agrée) en est la
                  preuve vivante : il a survécu pendant trente jours en ne
                  buvant que de l&apos;eau de zamzam, sans aucune autre
                  nourriture, et il en est sorti en bonne santé.
                </p>

                <HadithCard
                  arabic="إنها مباركة، إنها طعام طُعم"
                  text="Elle est bénie, elle est une nourriture qui rassasie."
                  source="Rapporté par Muslim (2473), à propos de l'eau de zamzam"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Troisièmement, l&apos;eau de zamzam est un remède (shifa&apos;)
                  contre les maladies. Les savants de l&apos;islam, à travers
                  les siècles, ont rapporté de nombreux témoignages de
                  guérison obtenue par la consommation de zamzam avec
                  l&apos;intention de guérir. Ibn al-Qayyim a écrit dans son
                  ouvrage &laquo;&nbsp;Zad al-Ma&apos;ad&nbsp;&raquo;
                  qu&apos;il a personnellement expérimenté la guérison par
                  zamzam pour plusieurs affections, et qu&apos;il a observé des
                  résultats qui ne pouvaient s&apos;expliquer que par la
                  bénédiction divine.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en invocation doua illustrant la prière et l'intention en buvant l'eau de zamzam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Meilleure eau de la terre :</strong> le Prophète
                      (paix et salut sur lui) l&apos;a désignée comme
                      supérieure à toute autre eau, un honneur unique dans la
                      création.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Nourriture et boisson :</strong> elle rassasie
                      celui qui la boit et peut remplacer la nourriture, comme
                      l&apos;a vécu Abu Dharr pendant trente jours.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Remède et guérison :</strong> bue avec
                      l&apos;intention de guérir, elle est un moyen de
                      guérison par la permission d&apos;Allah. Les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>{" "}
                      sont un complément essentiel à cette pratique.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Comment boire zamzam */}
              {/* ============================================ */}
              <section id="comment-boire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment boire l&apos;eau de zamzam selon la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont détaillé les règles de
                  bienséance (adab) pour boire l&apos;eau de zamzam en
                  s&apos;appuyant sur les hadiths du Prophète (paix et salut
                  sur lui) et la pratique des compagnons. Respecter ces
                  recommandations permet de tirer le maximum de bénédiction de
                  cette eau sacrée.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Formuler une intention claire (niyyah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant de boire, formulez dans votre coeur
                        l&apos;intention pour laquelle vous buvez cette eau :
                        guérison, science, subsistance, protection ou toute
                        autre demande légitime. C&apos;est la clé de
                        l&apos;exaucement selon le hadith &laquo;&nbsp;Ma&apos;u
                        zamzam lima shuriba lahu&nbsp;&raquo;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Dire Bismillah et invoquer Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Commencez par dire &laquo;&nbsp;Bismillah&nbsp;&raquo;
                        puis récitez la doua d&apos;Ibn Abbas ou toute autre
                        invocation appropriée. La doua peut être faite avant,
                        pendant ou après avoir bu, selon les savants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se tourner vers la qibla (Ka&apos;ba)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est recommandé de se tourner en direction de la
                        qibla lorsque l&apos;on boit l&apos;eau de zamzam, car
                        c&apos;est la direction la plus honorable pour les
                        invocations. Cette recommandation est rapportée par
                        plusieurs savants comme un acte de bienséance
                        supplémentaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Boire en trois gorgées et se rassasier
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Comme pour toute boisson selon la Sunna, il est
                        recommandé de boire en trois gorgées (ou plus) en
                        respirant à l&apos;extérieur du récipient entre chaque
                        gorgée. Il est aussi recommandé de boire zamzam
                        à satiété (at-tadalluh), c&apos;est-à-dire en boire
                        abondamment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Remercier Allah après avoir bu
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après avoir bu, dire &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo;
                        (Louange à Allah) et renouveler sa confiance en
                        l&apos;exaucement de sa doua. La gratitude envers
                        Allah pour cette eau bénie est un complément essentiel
                        à l&apos;invocation.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="أن ابن عباس ناول النبي صلى الله عليه وسلم دلوا من ماء زمزم فشرب وهو قائم"
                  text="Ibn Abbas donna au Prophète (paix et salut sur lui) un seau d'eau de zamzam, et il la but debout."
                  source="Rapporté par al-Bukhari (1637) et Muslim (2027)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre que le Prophète (paix et salut sur lui) a bu
                  l&apos;eau de zamzam debout, ce que les savants considèrent
                  comme une spécificité de cette eau bénite. Bien que boire
                  assis soit la règle générale, boire zamzam debout est une
                  Sunna établie. Certains savants concluent que les deux
                  positions sont permises, l&apos;essentiel étant
                  l&apos;intention et la doua qui accompagnent la
                  consommation.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Zamzam pendant hajj et omra */}
              {/* ============================================ */}
              <section id="zamzam-hajj-omra" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;eau de zamzam pendant le hajj et la omra
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;eau de zamzam est intimement liée aux rites du
                  pèlerinage. Pour le pèlerin, boire zamzam fait partie
                  intégrante de l&apos;expérience spirituelle du hajj et de la
                  omra. Le puits de zamzam se situe à quelques mètres de la
                  Ka&apos;ba, dans l&apos;enceinte même du Masjid al-Haram, et
                  des distributeurs d&apos;eau sont disponibles dans toute la
                  mosquée pour permettre aux fidèles de s&apos;en abreuver
                  facilement.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de boire zamzam à plusieurs moments
                  clés du pèlerinage. Après le tawaf (circumambulation autour
                  de la Ka&apos;ba), il est Sunna de prier deux
                  rak&apos;at derrière le Maqam Ibrahim puis de boire
                  l&apos;eau de zamzam. C&apos;est un moment
                  particulièrement propice pour formuler ses douas, car le
                  pèlerin combine la bénédiction du tawaf, la proximité de
                  la Ka&apos;ba et les vertus de zamzam.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Après le tawaf
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Boire zamzam après les sept tours autour de la Ka&apos;ba
                      et les deux rak&apos;at au Maqam Ibrahim est une Sunna
                      établie. C&apos;est un moment de grande proximité avec
                      Allah, idéal pour formuler ses invocations les plus
                      chères. Pour connaître les{" "}
                      <Link href="/doua-arafat-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas du jour de Arafat</Link>,
                      consultez notre guide dédié.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pendant le sa&apos;y
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La course entre Safa et Marwa rappelle l&apos;épreuve de
                      Hajar, la mère d&apos;Isma&apos;il. Boire zamzam entre
                      les allers-retours du sa&apos;y, c&apos;est se
                      connecter à l&apos;histoire même de cette eau bénie et
                      revivre la confiance de Hajar en Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le jour de Arafat
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le jour de Arafat est le jour où les douas sont le
                      plus exaucées. De nombreux pèlerins emportent de
                      l&apos;eau de zamzam pour la boire pendant leur station
                      à Arafat, combinant ainsi les vertus de zamzam avec
                      la bénédiction de ce jour immense.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Avant le départ
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les savants recommandent de boire abondamment
                      l&apos;eau de zamzam avant de quitter La Mecque et
                      d&apos;en emporter avec soi. Le Prophète (paix et salut
                      sur lui) lui-même a transporté de l&apos;eau de zamzam
                      dans des outres et des récipients pour en donner à
                      d&apos;autres.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le pèlerinage est une occasion unique de boire zamzam à sa
                  source même, dans le lieu le plus sacré de l&apos;islam.
                  Chaque gorgée bue avec intention et invocation est une
                  occasion d&apos;exaucement que le croyant ne doit pas
                  négliger. Pour approfondir les invocations liées au
                  pèlerinage, découvrez nos articles sur la{" "}
                  <Link href="/doua-hajj-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du hajj</Link>{" "}
                  et la{" "}
                  <Link href="/doua-omra-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de la omra</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du hajj en islam"
                  description="Découvrez toutes les invocations authentiques à réciter pendant le pèlerinage à La Mecque, du tawaf à Arafat."
                  href="/doua-hajj-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-hajj-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du hajj
                  </Link>
                  <Link
                    href="/doua-omra-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de la omra
                  </Link>
                  <Link
                    href="/doua-arafat-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du jour de Arafat
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages mères */}
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
