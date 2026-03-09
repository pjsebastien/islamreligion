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
    "Doua pour la grossesse en islam : invocations pour la femme enceinte",
  description:
    "Découvrez les douas pour la grossesse en islam : invocations authentiques en arabe avec phonétique et traduction, doua de Zakariya, doua de Maryam, protection du bébé, versets coraniques sur les enfants et hadiths.",
  openGraph: {
    title:
      "Doua pour la grossesse en islam : invocations pour la femme enceinte",
    description:
      "Les invocations authentiques pour la grossesse en islam : doua de Zakariya, doua de Maryam, protection pendant la grossesse, versets coraniques sur les enfants.",
    url: "https://www.islamreligion.fr/doua-grossesse-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-grossesse-islam",
  },
};

const tocItems = [
  { id: "grossesse-en-islam", label: "La grossesse en islam : une bénédiction divine" },
  { id: "doua-zakariya", label: "Doua de Zakariya pour avoir un enfant" },
  { id: "douas-bebe-sain", label: "Douas pour un bébé en bonne santé" },
  { id: "protection-grossesse", label: "Protection pendant la grossesse" },
  { id: "doua-maryam", label: "Doua de Maryam et versets sur les enfants" },
  { id: "conseils-spirituels", label: "Conseils spirituels pour la femme enceinte" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour tomber enceinte en islam ?",
    answer:
      "La doua la plus recommandée pour tomber enceinte est celle du prophète Zakariya (paix sur lui) : « Rabbi la tadharni fardan wa Anta khayrul-warithine » (Seigneur, ne me laisse pas seul et Tu es le meilleur des héritiers, Coran 21:89). Cette invocation est particulièrement puissante car Allah l&apos;a exaucée en accordant à Zakariya un fils (Yahya) alors que lui et son épouse étaient très âgés et qu&apos;elle était stérile.",
  },
  {
    question: "Quelles sourates réciter pendant la grossesse en islam ?",
    answer:
      "Plusieurs sourates sont recommandées pendant la grossesse : sourate Maryam (19) pour sa bénédiction liée à la maternité, sourate Luqman (31) pour la sagesse dans l&apos;éducation, sourate Al-Insan (76) et le verset du Trône (Ayat al-Kursi, 2:255) pour la protection. La récitation régulière du Coran apporte sérénité et bénédiction à la mère et au bébé.",
  },
  {
    question: "Comment protéger son bébé pendant la grossesse en islam ?",
    answer:
      "Pour protéger son bébé pendant la grossesse, il est recommandé de réciter les invocations de protection prophétiques, notamment : « A&apos;udhu bi kalimatillahi at-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah » (Je cherche refuge dans les paroles parfaites d&apos;Allah contre tout démon, tout animal nuisible et tout mauvais oeil). Le Prophète Ibrahim (paix sur lui) utilisait cette doua pour protéger ses enfants.",
  },
  {
    question: "Peut-on faire la doua pour la grossesse en français ?",
    answer:
      "Oui, la doua pour la grossesse peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et entend la supplication de chaque serviteur. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe pour bénéficier de leur puissance spirituelle particulière. Les supplications personnelles en français sont parfaitement valides.",
  },
  {
    question: "Quelle doua faire pour avoir un enfant pieux en islam ?",
    answer:
      "La doua coranique la plus connue pour avoir un enfant pieux est : « Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin waj&apos;alna lil-muttaqina imama » (Seigneur, fais que nos épouses et nos descendants soient la joie de nos yeux, et fais de nous un modèle pour les pieux, Coran 25:74). Cette invocation demande à Allah des enfants qui seront source de bonheur et de piété.",
  },
  {
    question: "Quand faire les douas pour la grossesse ?",
    answer:
      "Les douas pour la grossesse peuvent être faites à tout moment, mais certains instants sont particulièrement propices : le dernier tiers de la nuit, lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le vendredi après l&apos;Asr et pendant le mois de Ramadan. La régularité et la persévérance dans l&apos;invocation sont essentielles, car Allah aime le serviteur qui insiste dans sa doua.",
  },
  {
    question: "La grossesse donne-t-elle un statut particulier à la femme en islam ?",
    answer:
      "Oui, la femme enceinte a un statut élevé en islam. Le Prophète (paix et salut sur lui) a comparé la femme qui décède pendant la grossesse ou l&apos;accouchement à une martyre (shahida). De plus, chaque douleur et fatigue endurées pendant la grossesse sont une source d&apos;expiation des péchés et d&apos;élévation en degré auprès d&apos;Allah. La maternité est considérée comme un acte d&apos;adoration majeur.",
  },
  {
    question: "Existe-t-il une doua spécifique pour chaque trimestre de grossesse ?",
    answer:
      "Il n&apos;existe pas de doua spécifique pour chaque trimestre dans les textes authentiques. Cependant, les savants recommandent de multiplier les invocations tout au long de la grossesse : demander la protection au premier trimestre, invoquer pour la bonne formation du bébé au deuxième trimestre, et intensifier les douas pour un accouchement facile au troisième trimestre. Les invocations prophétiques générales restent valables à tout moment.",
  },
];

export default function DouaGrossesseIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-grossesse-islam/#article",
        headline:
          "Doua pour la grossesse en islam : invocations pour la femme enceinte",
        description:
          "Découvrez les douas pour la grossesse en islam : invocations authentiques en arabe, doua de Zakariya, doua de Maryam, protection pendant la grossesse et versets coraniques.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-04-07",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-grossesse-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-grossesse-islam/#breadcrumb",
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
            name: "Doua pour la grossesse",
            item: "https://www.islamreligion.fr/doua-grossesse-islam",
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
          title="Doua pour la grossesse en islam : invocations pour la femme enceinte"
          subtitle="Les invocations authentiques pour la grossesse tirées du Coran et de la Sunna. Doua de Zakariya, doua de Maryam, protection du bébé : textes en arabe, phonétique et traduction française."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquée avec moucharabieh et lumière dorée symbolisant la bénédiction divine pour la grossesse en islam"
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
                <span className="text-foreground">Doua pour la grossesse</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La grossesse est une bénédiction immense en islam, et le Coran
                  comme la Sunna offrent de nombreuses invocations pour
                  accompagner la femme enceinte. De la doua de Zakariya pour
                  obtenir une descendance pieuse à la protection prophétique
                  contre le mauvais oeil, en passant par les versets sur Maryam,
                  chaque étape de la grossesse peut être vécue dans la
                  spiritualité et la confiance en Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La grossesse en islam */}
              {/* ============================================ */}
              <section id="grossesse-en-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La grossesse en islam : une bénédiction et une épreuve
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la grossesse occupe une place d&apos;honneur
                  considérable. Elle est perçue à la fois comme un don divin
                  (ni&apos;ma) et comme une épreuve qui élève le rang de la
                  femme auprès d&apos;Allah. Le Coran décrit la maternité avec
                  une profonde reconnaissance, soulignant les sacrifices que la
                  mère endure pour porter et nourrir son enfant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;Nous avons commandé à
                  l&apos;homme la bienfaisance envers ses père et mère. Sa mère
                  l&apos;a porté en endurant peine sur peine, et son sevrage a
                  lieu à deux ans&nbsp;&raquo; (Luqman, 31:14). Ce verset met
                  en lumière la difficulté physique et émotionnelle de la
                  grossesse, tout en rappelant que cette épreuve est reconnue
                  et récompensée par Allah. Chaque douleur, chaque nausée,
                  chaque nuit d&apos;insomnie est une source de récompense
                  divine pour la femme enceinte.
                </p>

                <HadithCard
                  arabic="إن المرأة إذا حملت كان لها أجر الصائم القائم المجاهد بماله ونفسه في سبيل الله"
                  text="Lorsqu'une femme est enceinte, elle a la récompense de celui qui jeûne, prie la nuit et combat dans le sentier d'Allah avec ses biens et sa personne."
                  source="Rapporté par at-Tabarani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le désir d&apos;enfant est profondément ancré dans la nature
                  humaine (fitra), et l&apos;islam l&apos;encourage pleinement.
                  Le Prophète (paix et salut sur lui) a recommandé le mariage
                  et la procréation, et de nombreux prophètes mentionnés dans
                  le Coran ont invoqué Allah pour obtenir une descendance
                  pieuse. Ibrahim, Zakariya, et bien d&apos;autres ont adressé
                  à Allah des supplications touchantes que nous pouvons
                  reprendre aujourd&apos;hui.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un statut élevé pour la mère :</strong>{" "}
                      le Prophète (paix et salut sur lui) a placé la mère trois
                      fois avant le père lorsqu&apos;on lui demanda qui mérite
                      le plus la compagnie bienveillante (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La grossesse comme jihad :</strong>{" "}
                      les savants considèrent que la femme enceinte mène un
                      combat intérieur comparable au jihad, par les souffrances
                      qu&apos;elle endure avec patience pour la cause d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;enfant comme sadaqa jariya :</strong>{" "}
                      un enfant pieux est une aumône continue pour ses parents,
                      car ses bonnes actions leur profitent même après leur mort,
                      comme l&apos;a enseigné le Prophète (paix et salut sur lui).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
                    alt="Arches de mosquée baignées de lumière dorée symbolisant la bénédiction de la maternité en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de Zakariya */}
              {/* ============================================ */}
              <section id="doua-zakariya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Zakariya : &laquo;&nbsp;Rabbi la tadharni fardan&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus émouvantes du Coran figure
                  celle du prophète Zakariya (paix sur lui). Âgé et privé
                  d&apos;enfant, voyant sa femme stérile, il ne perdit jamais
                  espoir en la miséricorde d&apos;Allah. Son invocation est un
                  modèle absolu de confiance en Allah pour quiconque désire un
                  enfant ou vit les étapes de la grossesse.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi la tadharni fardan wa Anta khayrul-warithine
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ne me laisse pas seul, et Tu es le meilleur des héritiers&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:89)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est d&apos;une concision et d&apos;une profondeur
                  remarquables. Zakariya reconnaît sa situation difficile tout
                  en affirmant sa confiance absolue en Allah. L&apos;expression
                  &laquo;&nbsp;Tu es le meilleur des héritiers&nbsp;&raquo;
                  signifie que même si Allah ne lui accorde pas d&apos;enfant,
                  Il reste le meilleur garant de toute chose. Cette attitude de
                  soumission totale (tawakkul) est ce qui a rendu cette doua
                  si puissante.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran rapporte également une autre invocation de Zakariya,
                  encore plus détaillée, dans laquelle il exprime son désir
                  d&apos;un héritier pieux :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi hab li min ladunka dhurriyyatan tayyibatan innaka sami&apos;ud-du&apos;a
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-moi de Ta part une descendance bonne et pure. Tu es certes Celui qui entend les invocations&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:38)
                  </p>
                </div>

                <HadithCard
                  arabic="ادعوا الله وأنتم موقنون بالإجابة"
                  text="Invoquez Allah en étant convaincus de la réponse."
                  source="Rapporté par at-Tirmidhi (3479)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La réponse d&apos;Allah à Zakariya fut miraculeuse : malgré
                  son âge avancé et la stérilité de sa femme, il lui fut accordé
                  Yahya (Jean-Baptiste), un prophète noble et chaste. Ce récit
                  enseigne que rien n&apos;est impossible pour Allah. La femme
                  enceinte qui récite cette doua place sa grossesse sous la
                  protection et la bénédiction du Créateur qui a le pouvoir de
                  tout accorder, quelle que soit la difficulté apparente.
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
              {/* SECTION 3 : Douas pour un bébé sain */}
              {/* ============================================ */}
              <section id="douas-bebe-sain" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas pour un bébé en bonne santé pendant la grossesse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La femme enceinte peut multiplier les invocations pour
                  demander à Allah que son enfant naisse en bonne santé, avec
                  une constitution saine et un caractère pieux. Le Coran et la
                  Sunna offrent plusieurs formules que la future maman peut
                  réciter quotidiennement tout au long de sa grossesse.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour une descendance pieuse
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique est l&apos;une des plus complètes
                  pour demander une descendance qui sera source de bonheur et
                  de piété. Elle est tirée des qualités des serviteurs du
                  Miséricordieux (&apos;ibad ar-Rahman) décrites à la fin de
                  sourate Al-Furqan.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin waj&apos;alna lil-muttaqina imama
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que nos épouses et nos descendants soient la joie de nos yeux, et fais de nous un modèle pour les pieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Furqan (25:74)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua d&apos;Ibrahim pour une descendance vertueuse
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Ibrahim (paix sur lui) a également invoqué Allah
                  pour obtenir un enfant vertueux. Sa doua est un modèle pour
                  les parents qui souhaitent que leur enfant soit un serviteur
                  dévoué d&apos;Allah dès le ventre de sa mère.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi hab li minas-salihine
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-moi un enfant parmi les vertueux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate As-Saffat (37:100)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour que l&apos;enfant accomplisse la prière
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Ibrahim (paix sur lui) a aussi invoqué Allah pour que sa
                  descendance soit attachée à la prière, pilier fondamental de
                  l&apos;islam. Cette doua peut être récitée dès la grossesse
                  pour placer l&apos;enfant à naître sous la guidance divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbij&apos;alni muqimas-salati wa min dhurriyyati Rabbana wa taqabbal du&apos;a
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais de moi quelqu&apos;un qui accomplit la prière, ainsi que parmi ma descendance. Seigneur, accepte mon invocation&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ibrahim (14:40)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois invocations coraniques forment un ensemble complet
                  que la femme enceinte peut intégrer à sa routine quotidienne
                  de dhikr. En les récitant avec sincérité et régularité, elle
                  confie le développement de son bébé à Allah, le Créateur qui
                  façonne l&apos;enfant dans le ventre de sa mère comme Il le
                  veut. Le Coran rappelle : &laquo;&nbsp;C&apos;est Lui qui vous
                  forme dans les matrices comme Il veut&nbsp;&raquo; (Al-Imran,
                  3:6). Pour accompagner la{" "}
                  <Link href="/doua-accouchement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour l&apos;accouchement</Link>,
                  ces invocations préparent spirituellement la mère et l&apos;enfant.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Protection pendant la grossesse */}
              {/* ============================================ */}
              <section id="protection-grossesse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Protection spirituelle pendant la grossesse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La grossesse est une période de vulnérabilité où la
                  protection spirituelle revêt une importance particulière. Le
                  Prophète (paix et salut sur lui) a enseigné des invocations
                  spécifiques pour protéger les enfants, et ces mêmes
                  formules peuvent être récitées dès la grossesse pour placer
                  le bébé sous la sauvegarde d&apos;Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua de protection d&apos;Ibrahim pour ses enfants
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) utilisait cette invocation
                  pour protéger al-Hassan et al-Hussein, ses petits-fils. Elle
                  est tirée de la protection qu&apos;Ibrahim (paix sur lui)
                  demandait pour Isma&apos;il et Ishaq.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> U&apos;idhukuma bi kalimatillahi at-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je vous place sous la protection des paroles parfaites d&apos;Allah contre tout démon, tout animal nuisible et tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3371)
                  </p>
                </div>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم يعوذ الحسن والحسين"
                  text="Le Prophète (paix et salut sur lui) protégeait al-Hassan et al-Hussein par cette invocation et disait : « Votre ancêtre Ibrahim protégeait Isma'il et Ishaq par ces mots. »"
                  source="Rapporté par al-Bukhari (3371)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est particulièrement recommandée pendant la
                  grossesse. La femme enceinte peut la réciter en posant sa
                  main sur son ventre, demandant à Allah de protéger son enfant
                  contre trois dangers majeurs : les démons (shayatin), les
                  créatures nuisibles (hawamm) et le mauvais oeil (&apos;ayn).
                  Les{" "}
                  <Link href="/doua-bebe-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour le bébé</Link>{" "}
                  complètent cette protection après la naissance.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets de protection pour la grossesse"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le verset du Trône (Ayat al-Kursi) pour la protection
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que la
                  récitation d&apos;Ayat al-Kursi procure une protection
                  divine. La femme enceinte peut le réciter matin et soir pour
                  se placer, elle et son bébé, sous la garde d&apos;Allah. Ce
                  verset est considéré comme le plus grandiose du Coran et
                  constitue un bouclier spirituel puissant contre tout mal.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les sourates protectrices :</strong>{" "}
                      réciter sourate Al-Falaq (113) et sourate An-Nas (114)
                      trois fois matin et soir protège contre le mal des
                      créatures et le mauvais oeil.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Al-Ikhlas :</strong>{" "}
                      récitée avec les Mu&apos;awwidhat (sourates protectrices),
                      elle forme un ensemble complet de protection que le
                      Prophète (paix et salut sur lui) pratiquait chaque nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;invocation du matin et du soir :</strong>{" "}
                      les adhkar quotidiens constituent un rempart spirituel
                      essentiel pour la femme enceinte et son enfant à naître.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua de Maryam et versets */}
              {/* ============================================ */}
              <section id="doua-maryam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Maryam, les versets coraniques sur les enfants et la maternité
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;histoire de Maryam (paix sur elle) dans le Coran est
                  un témoignage extraordinaire de la puissance d&apos;Allah et
                  de Son soutien aux femmes pieuses. Sa grossesse miraculeuse,
                  sa patience face aux épreuves et sa confiance absolue en
                  Allah en font un modèle inégalé pour toute femme musulmane
                  qui traverse la grossesse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque Maryam ressentit les douleurs de l&apos;accouchement,
                  elle s&apos;écria dans sa détresse. Allah lui répondit
                  directement, la réconfortant et lui montrant Sa sollicitude :
                  &laquo;&nbsp;Ne t&apos;afflige pas, ton Seigneur a placé à
                  tes pieds une source&nbsp;&raquo; (Maryam, 19:24). Cette
                  parole divine enseigne que même dans les moments les plus
                  difficiles de la grossesse et de l&apos;accouchement, Allah
                  ne délaisse jamais Ses servantes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La mère de Maryam elle-même avait prononcé une invocation
                  magnifique lorsqu&apos;elle attendait son enfant. Elle
                  consacra ce qu&apos;elle portait dans son ventre au service
                  d&apos;Allah avant même la naissance :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ إِنِّي وَضَعْتُهَا أُنثَىٰ وَاللَّهُ أَعْلَمُ بِمَا وَضَعَتْ وَلَيْسَ الذَّكَرُ كَالْأُنثَىٰ وَإِنِّي سَمَّيْتُهَا مَرْيَمَ وَإِنِّي أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi inni wada&apos;tuha untha wallahu a&apos;lamu bima wada&apos;at wa laysa-dh-dhakaru kal-untha wa inni sammaytuna Maryama wa inni u&apos;idhuha bika wa dhurriyyataha mina-sh-shaytani-r-rajim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, j&apos;ai mis au monde une fille — et Allah savait mieux ce qu&apos;elle avait mis au monde — et je l&apos;ai nommée Maryam, et je la place sous Ta protection, elle et sa descendance, contre Satan le lapidé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:36)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation de la mère de Maryam est un modèle
                  remarquable pour toute femme enceinte. Elle enseigne trois
                  choses essentielles : accepter ce qu&apos;Allah accorde
                  (fille ou garçon), placer l&apos;enfant sous la protection
                  d&apos;Allah dès le ventre, et demander cette protection
                  pour toute la descendance future. Le résultat de cette doua
                  fut que Maryam devint la meilleure femme de l&apos;humanité,
                  protégée de Satan dès sa naissance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran contient de nombreux versets qui évoquent les
                  enfants comme une bénédiction et une parure de la vie
                  d&apos;ici-bas. Allah dit : &laquo;&nbsp;Les biens et les
                  enfants sont la parure de la vie de ce monde&nbsp;&raquo;
                  (Al-Kahf, 18:46). Ce verset rappelle que les enfants sont un
                  ornement précieux, mais que la véritable richesse réside dans
                  les oeuvres durables de piété. La{" "}
                  <Link href="/doua-naissance-nouveau-ne-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour la naissance du nouveau-né</Link>{" "}
                  prolonge cette chaîne d&apos;invocations après
                  l&apos;accouchement.
                </p>

                <HadithCard
                  arabic="ما من مولود إلا يمسه الشيطان حين يولد فيستهل صارخا من مس الشيطان إلا مريم وابنها"
                  text="Tout nouveau-né est touché par Satan au moment de sa naissance, ce qui le fait crier, sauf Maryam et son fils (Issa)."
                  source="Rapporté par al-Bukhari (3431) et Muslim (2366)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith confirme l&apos;efficacité de la doua de la mère
                  de Maryam : en plaçant sa fille et sa descendance sous la
                  protection d&apos;Allah contre Satan, cette invocation fut
                  exaucée de manière miraculeuse. C&apos;est une raison
                  supplémentaire pour la femme enceinte de réciter cette doua
                  avec conviction, espérant qu&apos;Allah protège son enfant de
                  toute influence néfaste.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Conseils spirituels */}
              {/* ============================================ */}
              <section id="conseils-spirituels" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils spirituels pour la femme enceinte en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations spécifiques, l&apos;islam propose un
                  cadre spirituel complet pour accompagner la femme tout au long
                  de sa grossesse. Combiner les douas avec une pratique
                  spirituelle régulière maximise les bienfaits pour la mère et
                  l&apos;enfant, tant sur le plan physique que spirituel.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La récitation régulière du Coran
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lire le Coran quotidiennement apporte sérénité et
                        bénédiction. Sourate Maryam (19) est particulièrement
                        recommandée pour son lien avec la maternité. La voix de
                        la mère récitant le Coran bénéficie spirituellement au
                        bébé, et cette habitude crée un lien fort entre
                        l&apos;enfant et le Livre d&apos;Allah dès le ventre.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les adhkar du matin et du soir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Maintenir les invocations quotidiennes du matin et du
                        soir procure une protection continue. Le Prophète (paix
                        et salut sur lui) a enseigné que ces formules
                        constituent un bouclier contre tout mal. Pendant la
                        grossesse, elles protègent à la fois la mère et
                        l&apos;enfant qu&apos;elle porte.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La sadaqa (aumône) pendant la grossesse
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Donner l&apos;aumône pendant la grossesse est vivement
                        encouragé. Le Prophète (paix et salut sur lui) a
                        enseigné que la sadaqa repousse les épreuves et attire
                        la miséricorde d&apos;Allah. Faire du bien aux autres
                        pendant cette période bénie multiplie les récompenses.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le tawakkul (confiance en Allah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La grossesse peut susciter des inquiétudes légitimes.
                        L&apos;islam enseigne de combiner les causes matérielles
                        (suivi médical, alimentation saine, repos) avec une
                        confiance totale en Allah. C&apos;est Lui qui crée,
                        façonne et protège l&apos;enfant dans le ventre de sa
                        mère. Le tawakkul apaise le coeur et favorise une
                        grossesse sereine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La patience face aux épreuves de la grossesse
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les nausées, les douleurs et la fatigue de la grossesse
                        sont autant d&apos;occasions d&apos;obtenir la
                        récompense d&apos;Allah. Le sabr (patience) de la femme
                        enceinte est un acte d&apos;adoration en soi. Chaque
                        difficulté endurée avec gratitude et acceptation élève
                        son rang auprès d&apos;Allah.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, la grossesse en islam est bien plus qu&apos;une
                  expérience physique : c&apos;est un voyage spirituel que la
                  femme parcourt en compagnie d&apos;Allah. En combinant les
                  douas authentiques avec une pratique spirituelle régulière et
                  une confiance absolue en son Créateur, la future maman
                  transforme chaque instant de sa grossesse en un acte
                  d&apos;adoration. Pour compléter cette préparation
                  spirituelle, découvrez également notre guide sur la{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                  et les conditions d&apos;exaucement des invocations.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour l'accouchement en islam"
                  description="Découvrez les invocations à réciter pendant le travail et l'accouchement pour faciliter la délivrance et protéger la mère et l'enfant."
                  href="/doua-accouchement-islam"
                />
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
                    href="/doua-accouchement-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour l&apos;accouchement
                  </Link>
                  <Link
                    href="/doua-naissance-nouveau-ne-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la naissance du nouveau-né
                  </Link>
                  <Link
                    href="/doua-bebe-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour le bébé
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
