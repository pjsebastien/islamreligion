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
    "Doua pour une nouvelle maison en islam : invocations et adab authentiques",
  description:
    "Découvrez la doua pour une nouvelle maison en islam : invocations authentiques en arabe avec phonétique et traduction, protection par sourate al-Baqarah, adab pour emménager et hadiths sur la baraka du foyer.",
  openGraph: {
    title:
      "Doua pour une nouvelle maison en islam : invocations et adab authentiques",
    description:
      "Les invocations authentiques pour emménager dans une nouvelle maison en islam : douas de protection en arabe, phonétique, traduction et hadiths sur la baraka du foyer.",
    url: "https://www.islamreligion.fr/doua-nouvelle-maison-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-nouvelle-maison-islam",
  },
};

const tocItems = [
  { id: "emmenager-nouvelle-maison", label: "Emménager dans une nouvelle maison en islam" },
  { id: "doua-protection-maison", label: "Doua de protection pour la maison" },
  { id: "bismillah-salam", label: "Dire bismillah et salam en entrant" },
  { id: "sourate-baqarah", label: "Lire sourate al-Baqarah pour protéger la maison" },
  { id: "douas-nouvelle-maison", label: "Douas pour une nouvelle maison" },
  { id: "adab-nouveau-foyer", label: "Adab et convenances du nouveau foyer" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua faire quand on entre dans une nouvelle maison en islam ?",
    answer:
      "En entrant dans une nouvelle maison, le musulman prononce « Bismillah » puis invoque la protection d&apos;Allah en disant : « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » (Je cherche refuge auprès des paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé). Il est aussi recommandé de lire sourate al-Baqarah pour éloigner les shayatins du foyer.",
  },
  {
    question: "Comment protéger sa nouvelle maison en islam ?",
    answer:
      "Pour protéger sa nouvelle maison en islam, il faut : 1) Prononcer « Bismillah » à chaque entrée, 2) Réciter sourate al-Baqarah (le Prophète a dit que Shaytan fuit la maison où elle est lue), 3) Lire ayat al-Kursi régulièrement, 4) Réciter les invocations de protection matin et soir, et 5) Faire entrer la maison dans une atmosphère de dhikr et de prière.",
  },
  {
    question: "Est-il obligatoire de faire une doua en emménageant dans une nouvelle maison ?",
    answer:
      "Faire une doua en emménageant n&apos;est pas obligatoire (fard) mais fortement recommandé (mustahabb). Le Prophète (paix et salut sur lui) encourageait les invocations en toute circonstance, notamment lors des transitions et des changements de lieu. Invoquer Allah en entrant dans un nouveau foyer attire la baraka et la protection divine sur les habitants.",
  },
  {
    question: "Quelle sourate lire dans une nouvelle maison pour la protéger ?",
    answer:
      "La sourate al-Baqarah est la sourate principale à lire dans une nouvelle maison. Le Prophète (paix et salut sur lui) a dit : « Ne faites pas de vos maisons des tombeaux. Shaytan fuit la maison dans laquelle sourate al-Baqarah est récitée » (Muslim). Ayat al-Kursi (verset 255 de al-Baqarah) est également recommandé chaque soir pour la protection nocturne.",
  },
  {
    question: "Peut-on faire une pendaison de crémaillère en islam ?",
    answer:
      "Il n&apos;y a pas de rituel spécifique de « pendaison de crémaillère » en islam. Cependant, inviter des proches pour partager un repas dans son nouveau foyer est conforme à la Sunna de la générosité et de l&apos;hospitalité. L&apos;essentiel est d&apos;éviter tout ce qui contredit la charia (mixité inappropriée, musique interdite, etc.) et de commencer par les invocations prophétiques.",
  },
  {
    question: "La doua a'udhu bi kalimatillah protège-t-elle la maison ?",
    answer:
      "Oui, la doua « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » est une invocation de protection générale que le Prophète (paix et salut sur lui) recommandait à quiconque descend dans un lieu nouveau. Le hadith rapporté par Muslim affirme que celui qui la prononce ne sera touché par aucun mal jusqu&apos;à ce qu&apos;il quitte ce lieu.",
  },
  {
    question: "Faut-il faire l'adhan dans une nouvelle maison ?",
    answer:
      "Certains savants recommandent de faire l&apos;adhan dans une nouvelle maison, car le Prophète (paix et salut sur lui) a dit que Shaytan s&apos;enfuit lorsqu&apos;il entend l&apos;appel à la prière. Bien que cette pratique ne soit pas spécifiquement rapportée pour l&apos;emménagement, elle relève des causes générales de protection contre le mal et peut être accompagnée des invocations prophétiques authentiques.",
  },
];

export default function DouaNouvelleMaisonIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-nouvelle-maison-islam/#article",
        headline:
          "Doua pour une nouvelle maison en islam : invocations et adab authentiques",
        description:
          "Découvrez la doua pour une nouvelle maison en islam : invocations de protection, sourate al-Baqarah, adab pour emménager et hadiths sur la baraka du foyer.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-04-12",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-nouvelle-maison-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-nouvelle-maison-islam/#breadcrumb",
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
            name: "Doua nouvelle maison",
            item: "https://www.islamreligion.fr/doua-nouvelle-maison-islam",
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
          title="Doua pour une nouvelle maison en islam : invocations et adab authentiques"
          subtitle="Les invocations prophétiques pour protéger votre nouveau foyer, attirer la baraka et éloigner le mal. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquée avec moucharabieh et lumière dorée symbolisant la protection et la baraka dans une nouvelle maison en islam"
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
                <span className="text-foreground">Doua nouvelle maison</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Emménager dans une nouvelle maison est un moment important dans
                  la vie du musulman. Le Prophète (paix et salut sur lui) a
                  enseigné des invocations spécifiques pour protéger le foyer,
                  attirer la baraka divine et éloigner le mal. Parmi les gestes
                  essentiels : prononcer bismillah en entrant, réciter la doua
                  de protection (a&apos;udhu bi kalimatillah), lire sourate
                  al-Baqarah et respecter les adab islamiques liés au foyer.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Emménager dans une nouvelle maison */}
              {/* ============================================ */}
              <section id="emmenager-nouvelle-maison" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Emménager dans une nouvelle maison en islam : un nouveau départ béni
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, le foyer (bayt) occupe une place centrale dans la vie
                  du croyant. C&apos;est le lieu où se construit la famille, où
                  se pratique l&apos;adoration et où se cultive la piété
                  quotidienne. Lorsqu&apos;un musulman s&apos;installe dans une{" "}
                  <strong>nouvelle maison</strong>, il ne s&apos;agit pas
                  simplement d&apos;un changement d&apos;adresse, mais
                  d&apos;une véritable transition spirituelle qui mérite
                  d&apos;être accompagnée par des invocations et des gestes
                  conformes à la Sunna.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) accordait une attention
                  particulière aux moments de transition dans la vie. Que ce soit
                  le voyage, le mariage ou l&apos;installation dans un nouveau
                  lieu, chaque étape était accompagnée de <strong>douas</strong>{" "}
                  spécifiques pour placer l&apos;événement sous la protection
                  d&apos;Allah. Le croyant qui emménage dans un nouveau foyer
                  cherche ainsi à en faire un lieu de baraka, de sérénité et de
                  rapprochement avec son Créateur, loin de tout mal et de toute
                  nuisance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition islamique nous enseigne que les djinns et les
                  shayatins peuvent habiter les lieux abandonnés ou les maisons
                  dans lesquelles Allah n&apos;est pas mentionné. C&apos;est
                  pourquoi il est fondamental de commencer son installation par
                  le dhikr d&apos;Allah, la récitation du Coran et les
                  invocations de protection. Ces gestes simples mais puissants
                  transforment un simple espace en un foyer béni et protégé.
                  Pour approfondir les invocations liées à la maison, consultez
                  notre article sur la{" "}
                  <Link href="/doua-entrer-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour entrer dans la maison</Link>.
                </p>

                <HadithCard
                  arabic="إذا دخل الرجل بيته فذكر الله عند دخوله وعند طعامه قال الشيطان لا مبيت لكم ولا عشاء"
                  text="Lorsqu'un homme entre dans sa maison et mentionne Allah en entrant et en mangeant, Shaytan dit [à ses compagnons] : Vous n'avez ni gîte ni repas ici."
                  source="Rapporté par Muslim (2018)"
                />

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le foyer est un lieu d&apos;adoration :</strong>{" "}
                      le Prophète (paix et salut sur lui) encourageait la prière
                      surérogatoire à la maison et la récitation du Coran pour
                      que le foyer ne devienne pas &laquo;&nbsp;un
                      tombeau&nbsp;&raquo;.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Remercier Allah pour cette grâce :</strong>{" "}
                      posséder ou louer un toit est un bienfait immense dont le
                      croyant doit être reconnaissant par le coeur, la langue et
                      les actes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par les invocations :</strong> avant même
                      d&apos;organiser les meubles, le musulman veille à
                      prononcer les douas de protection et à réciter le Coran
                      dans son nouveau foyer.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Intérieur de mosquée avec arches et lumière symbolisant la sérénité et la baraka recherchées dans un nouveau foyer en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de protection */}
              {/* ============================================ */}
              <section id="doua-protection-maison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de protection pour la nouvelle maison : a&apos;udhu bi kalimatillah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus importantes lorsqu&apos;on
                  s&apos;installe dans un nouveau lieu, la <strong>doua de
                  protection</strong> rapportée par Muslim occupe une place
                  privilégiée. Le Prophète (paix et salut sur lui) l&apos;a
                  enseignée à quiconque descend dans un lieu nouveau, ce qui
                  inclut naturellement l&apos;emménagement dans une nouvelle
                  maison.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge auprès des paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <HadithCard
                  arabic="من نزل منزلا ثم قال أعوذ بكلمات الله التامات من شر ما خلق لم يضره شيء حتى يرحل من منزله ذلك"
                  text="Quiconque descend dans un lieu puis dit : « Je cherche refuge auprès des paroles parfaites d'Allah contre le mal de ce qu'Il a créé », rien ne lui nuira jusqu'à ce qu'il quitte ce lieu."
                  source="Rapporté par Muslim (2708)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une importance capitale pour celui qui
                  emménage dans une <strong>nouvelle maison</strong>. La
                  promesse prophétique est claire : cette invocation constitue
                  une protection complète contre tout mal tant que la personne
                  demeure dans ce lieu. Les savants expliquent que les
                  &laquo;&nbsp;paroles parfaites d&apos;Allah&nbsp;&raquo;
                  (kalimat Allah at-tammat) désignent Ses attributs, Ses noms
                  et Ses décrets, qui sont tous exempts de toute imperfection.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam an-Nawawi (qu&apos;Allah lui fasse miséricorde)
                  souligne que cette invocation est particulièrement recommandée
                  lors de tout déplacement ou installation dans un nouveau lieu.
                  Elle englobe la protection contre les nuisances des djinns,
                  des animaux venimeux, des voleurs et de tout mal visible ou
                  invisible. C&apos;est donc la première doua à prononcer en
                  franchissant le seuil de sa nouvelle demeure. Pour découvrir
                  d&apos;autres invocations de protection, consultez notre guide
                  complet sur la{" "}
                  <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de protection en islam</Link>.
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
              {/* SECTION 3 : Bismillah et salam */}
              {/* ============================================ */}
              <section id="bismillah-salam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dire bismillah et donner le salam en entrant dans la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;une des sunnas les plus importantes — et souvent
                  négligée — est de prononcer <strong>bismillah</strong> et de
                  donner le <strong>salam</strong> à chaque entrée dans la
                  maison. Ce geste simple constitue un bouclier spirituel
                  quotidien qui empêche Shaytan de pénétrer dans le foyer et
                  garantit que la baraka d&apos;Allah accompagne chaque retour à
                  la maison.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi walajna, wa bismillahi kharajna, wa &apos;ala Rabbina tawakkalna
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et sur notre Seigneur nous plaçons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5096)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné cette invocation
                  comme une pratique quotidienne à chaque entrée et sortie du
                  domicile. Elle combine trois éléments fondamentaux : le
                  tasmiyah (prononcer le nom d&apos;Allah), la reconnaissance de
                  Sa seigneurie et le tawakkul (confiance totale en Lui). Cette
                  triple mention constitue une barrière contre le mal et une
                  source de baraka permanente pour le foyer.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que le salam (as-salamu &apos;alaykum)
                  doit également être prononcé en entrant, même si la maison est
                  vide. Certains se basent sur le verset coranique :
                  &laquo;&nbsp;Lorsque vous entrez dans des maisons, saluez-vous
                  mutuellement d&apos;une salutation venant d&apos;Allah, bénie
                  et bonne&nbsp;&raquo; (Coran, 24:61). Ce salam attire la
                  miséricorde divine et éloigne les mauvais esprits. Cette
                  habitude est particulièrement importante lors des premiers
                  jours dans une nouvelle maison, mais elle doit devenir un
                  réflexe quotidien permanent. Découvrez également la{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour sortir de la maison</Link>{" "}
                  qui complète ces invocations du foyer.
                </p>

                <HadithCard
                  arabic="إذا دخل الرجل بيته فذكر الله عند دخوله وعند طعامه قال الشيطان لا مبيت لكم ولا عشاء وإذا دخل فلم يذكر الله عند دخوله قال الشيطان أدركتم المبيت"
                  text="Lorsqu'un homme entre dans sa maison et mentionne Allah en entrant et en mangeant, Shaytan dit : Vous n'avez ni gîte ni repas. Mais s'il entre sans mentionner Allah, Shaytan dit : Vous avez trouvé un gîte."
                  source="Rapporté par Muslim (2018)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Sourate al-Baqarah */}
              {/* ============================================ */}
              <section id="sourate-baqarah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Lire sourate al-Baqarah pour protéger la nouvelle maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La récitation de <strong>sourate al-Baqarah</strong> est
                  l&apos;un des moyens les plus puissants pour protéger sa maison
                  en islam. Le Prophète (paix et salut sur lui) a explicitement
                  lié la lecture de cette sourate à l&apos;expulsion de Shaytan
                  du foyer, ce qui en fait une priorité absolue lors de
                  l&apos;emménagement dans une nouvelle demeure.
                </p>

                <HadithCard
                  arabic="لا تجعلوا بيوتكم مقابر إن الشيطان ينفر من البيت الذي تقرأ فيه سورة البقرة"
                  text="Ne faites pas de vos maisons des tombeaux. Shaytan fuit la maison dans laquelle sourate al-Baqarah est récitée."
                  source="Rapporté par Muslim (780)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith authentique établit un lien direct entre la
                  récitation de sourate al-Baqarah et la protection du foyer
                  contre les shayatins. Les savants expliquent que le terme
                  &laquo;&nbsp;tombeaux&nbsp;&raquo; (maqabir) signifie des
                  lieux dépourvus d&apos;adoration et de dhikr. Une maison dans
                  laquelle le Coran n&apos;est jamais récité devient un repaire
                  pour les démons, tandis qu&apos;un foyer rempli de Coran est
                  un lieu de lumière et de protection.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour la nouvelle maison, les savants recommandent de lire
                  sourate al-Baqarah en entier dès les premiers jours
                  d&apos;installation. Si cela s&apos;avère difficile en une
                  seule assise, il est possible de la répartir sur plusieurs
                  jours. Certains savants mentionnent que l&apos;effet de la
                  sourate dure trois jours dans la maison, après quoi il
                  convient de la relire. La récitation peut se faire à voix
                  haute ou à voix basse, l&apos;essentiel étant de la lire
                  avec recueillement et sincérité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta&apos;khudhuh sinatun wa la nawm
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Ayat al-Kursi — Coran, sourate al-Baqarah (2:255)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  <strong>Ayat al-Kursi</strong> (le verset du Trône) mérite une
                  mention spéciale. Le Prophète (paix et salut sur lui) a
                  enseigné que quiconque récite ce verset le soir, un gardien
                  d&apos;Allah reste auprès de lui et Shaytan ne peut
                  l&apos;approcher jusqu&apos;au matin (al-Bukhari). Ce verset
                  doit devenir une récitation quotidienne dans la nouvelle
                  maison, en particulier avant de dormir et après chaque prière
                  obligatoire.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée et lumière symbolisant la récitation de sourate al-Baqarah pour la protection de la maison"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas pour nouvelle maison */}
              {/* ============================================ */}
              <section id="douas-nouvelle-maison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas pour une nouvelle maison en arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici les principales invocations authentiques à réciter lors
                  de l&apos;installation dans une <strong>nouvelle
                  maison</strong>. Chaque doua est présentée avec son texte
                  arabe, sa phonétique et sa traduction en français pour
                  faciliter la mémorisation et la pratique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de protection en descendant dans un lieu
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est la première à prononcer en franchissant le
                  seuil de la nouvelle maison. Elle offre une protection complète
                  contre tout mal tant que l&apos;on réside dans ce lieu.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge auprès des paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua d&apos;entrée dans la maison
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation quotidienne prend une dimension particulière
                  lors de la première entrée dans le nouveau foyer. Elle place
                  chaque mouvement sous le nom d&apos;Allah et exprime le
                  tawakkul total.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi walajna, wa bismillahi kharajna, wa &apos;ala Rabbina tawakkalna
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et sur notre Seigneur nous plaçons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5096)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour demander la baraka dans la maison
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le croyant demande à Allah de bénir sa nouvelle demeure, de la
                  remplir de bien et d&apos;en éloigner tout mal. Cette
                  invocation exprime la gratitude et la dépendance envers le
                  Créateur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka khayral mawliji wa khayral makhraji, bismillahi walajna wa bismillahi kharajna wa &apos;alallahi Rabbina tawakkalna
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je Te demande le bien de l&apos;entrée et le bien de la sortie. Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et sur Allah notre Seigneur nous plaçons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5096)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de protection contre tout mal
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation complète les précédentes en demandant une
                  protection étendue contre le mal des djinns, des nuisibles et
                  de toute créature malfaisante.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min kulli shaytanin wa hammah, wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge auprès des paroles parfaites d&apos;Allah contre tout démon, toute bête venimeuse et tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3371)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation était celle qu&apos;Ibrahim (paix sur lui)
                  utilisait pour protéger Isma&apos;il et Ishaq (paix sur eux).
                  Le Prophète (paix et salut sur lui) l&apos;employait également
                  pour protéger al-Hassan et al-Hussayn (qu&apos;Allah les
                  agrée). Sa récitation dans la nouvelle maison assure une
                  protection complète contre les trois sources principales de
                  nuisance : les démons, les animaux venimeux et le mauvais
                  oeil. Pour un guide complet sur les invocations, retrouvez
                  notre article sur la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Adab du nouveau foyer */}
              {/* ============================================ */}
              <section id="adab-nouveau-foyer" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Adab et convenances islamiques pour le nouveau foyer
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations spécifiques, l&apos;islam enseigne un
                  ensemble d&apos;<strong>adab</strong> (convenances) à
                  respecter dans son foyer pour préserver la baraka et maintenir
                  un environnement spirituellement sain. Ces règles s&apos;appliquent
                  dès le premier jour dans la nouvelle maison et doivent devenir
                  des habitudes permanentes.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Établir la prière dans la maison
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) encourageait à
                        accomplir les prières surérogatoires à la maison. Cela
                        remplit le foyer de lumière et de baraka, et empêche
                        qu&apos;il ne devienne un lieu mort spirituellement.
                        Consacrer un espace de prière (musalla) dans la nouvelle
                        maison est une excellente initiative.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter le Coran régulièrement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La récitation régulière du Coran — en particulier
                        sourate al-Baqarah — maintient la protection divine sur
                        le foyer. Les anges sont attirés par les maisons où le
                        Coran est récité, tandis que les shayatins fuient ces
                        lieux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Éviter les images et statues
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que les
                        anges n&apos;entrent pas dans une maison où se trouvent
                        des images d&apos;êtres animés ou des statues
                        (al-Bukhari et Muslim). Lors de la décoration de la
                        nouvelle maison, le musulman veille à choisir un décor
                        conforme à la Sunna.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prononcer bismillah avant chaque repas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La mention du nom d&apos;Allah avant de manger empêche
                        Shaytan de partager le repas familial. Cette habitude,
                        combinée au bismillah de l&apos;entrée, crée une double
                        barrière de protection dans le foyer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Maintenir la propreté et l&apos;ordre
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam est la religion de la propreté (at-tahara).
                        Un foyer propre et ordonné attire la baraka et reflète
                        la discipline spirituelle du croyant. Le Prophète (paix
                        et salut sur lui) a dit : &laquo;&nbsp;Allah est beau et
                        Il aime la beauté&nbsp;&raquo; (Muslim). Cela
                        s&apos;applique pleinement à l&apos;entretien de la
                        maison.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En respectant ces adab dès le premier jour, le musulman
                  transforme sa nouvelle maison en un véritable sanctuaire de
                  foi. Le foyer devient alors un lieu où descendent les anges,
                  où la baraka se multiplie et où la famille grandit dans un
                  environnement propice à la piété et au bonheur. Chaque geste
                  quotidien — du salam de l&apos;entrée à la récitation du
                  Coran avant le coucher — contribue à construire cet
                  environnement spirituel sain et protégé.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Inviter les proches pour un repas :</strong>{" "}
                      partager la nourriture dans le nouveau foyer est un acte de
                      générosité conforme à la Sunna qui attire la baraka et
                      renforce les liens communautaires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire la sadaqa :</strong> donner en aumône lors de
                      l&apos;emménagement est recommandé comme signe de
                      gratitude envers Allah pour ce bienfait et comme protection
                      supplémentaire contre le mauvais oeil.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas oublier les adhkar quotidiens :</strong>{" "}
                      les invocations du matin et du soir protègent le foyer et
                      ses habitants tout au long de la journée et de la nuit.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
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
                    href="/doua-entrer-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour entrer dans la maison
                  </Link>
                  <Link
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour sortir de la maison
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection en islam
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
