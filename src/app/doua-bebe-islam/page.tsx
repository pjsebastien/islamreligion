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
    "Doua pour un bébé en islam : invocations authentiques pour le nouveau-né",
  description:
    "Découvrez les douas pour un bébé en islam : invocations de protection en arabe avec phonétique et traduction, adhan à l'oreille, tahnik, aqiqah, choix du prénom et doua pour une descendance pieuse.",
  openGraph: {
    title:
      "Doua pour un bébé en islam : invocations authentiques pour le nouveau-né",
    description:
      "Les invocations authentiques pour accueillir un bébé en islam : doua de protection, adhan, tahnik, aqiqah et prières pour une descendance pieuse.",
    url: "https://www.islamreligion.fr/doua-bebe-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-bebe-islam",
  },
};

const tocItems = [
  { id: "accueil-bebe-islam", label: "Accueillir un bébé en islam" },
  { id: "adhan-oreille", label: "L'adhan à l'oreille du nouveau-né" },
  { id: "tahnik-aqiqah", label: "Le tahnik et la aqiqah" },
  { id: "douas-protection-bebe", label: "Douas de protection pour le bébé" },
  { id: "prenom-enfant-islam", label: "Le choix du prénom en islam" },
  { id: "doua-descendance-pieuse", label: "Doua pour une descendance pieuse" },
  { id: "conseils-parents-musulmans", label: "Conseils aux parents musulmans" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua pour un bébé en islam ?",
    answer:
      "La doua la plus connue pour protéger un bébé en islam est : « U&apos;idhu-ka (ou u&apos;idhu-ki) bi kalimati-Llahi at-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah » (Je te place sous la protection des paroles parfaites d&apos;Allah contre tout démon, tout animal nuisible et contre tout mauvais oeil). Le Prophète (paix et salut sur lui) récitait cette invocation pour ses petits-fils al-Hasan et al-Husayn.",
  },
  {
    question: "Faut-il faire l'adhan à l'oreille du bébé à la naissance ?",
    answer:
      "Oui, il est recommandé (sunna) de prononcer l&apos;adhan dans l&apos;oreille droite du nouveau-né dès sa naissance. Ce geste symbolique fait en sorte que les premières paroles que le bébé entend soient l&apos;appel à la prière et la proclamation de l&apos;unicité d&apos;Allah. Plusieurs hadiths rapportent cette pratique du Prophète (paix et salut sur lui).",
  },
  {
    question: "Qu'est-ce que le tahnik en islam ?",
    answer:
      "Le tahnik est une sunna prophétique qui consiste à frotter le palais du nouveau-né avec une datte mâchée ou du miel. Le Prophète (paix et salut sur lui) pratiquait ce geste pour les bébés qu&apos;on lui amenait. Selon al-Bukhari et Muslim, il prenait une datte, la mâchait légèrement puis la frottait dans la bouche du bébé. La science moderne a confirmé les bienfaits du sucre naturel pour stabiliser la glycémie du nouveau-né.",
  },
  {
    question: "Quand faut-il faire la aqiqah pour un bébé ?",
    answer:
      "La aqiqah est recommandée le septième jour après la naissance du bébé. Elle consiste à sacrifier deux moutons pour un garçon et un mouton pour une fille, selon la majorité des savants. Si le septième jour n&apos;est pas possible, on peut la reporter au quatorzième ou au vingt-et-unième jour. La viande est distribuée aux pauvres, aux proches et à la famille.",
  },
  {
    question: "Quelle doua réciter pour avoir des enfants pieux ?",
    answer:
      "Plusieurs douas coraniques sont recommandées pour demander une descendance pieuse. La plus célèbre est celle de Zakariya (paix sur lui) : « Rabbi hab li min ladunka dhurriyyatan tayyibah, innaka sami&apos;u ad-du&apos;a » (Seigneur, accorde-moi de Ta part une descendance pure, car Tu es Celui qui entend les invocations - Coran, 3:38). On peut également réciter : « Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yun » (Coran, 25:74).",
  },
  {
    question: "Comment choisir le prénom d'un bébé en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) a recommandé de donner de beaux prénoms aux enfants. Les prénoms les plus aimés d&apos;Allah sont &apos;AbdAllah et &apos;AbdurRahman. Il est recommandé de choisir un prénom porteur de bon sens : un nom de prophète, un nom composé avec &apos;Abd suivi d&apos;un Nom d&apos;Allah, ou un prénom ayant une belle signification. Les prénoms à connotation négative sont déconseillés.",
  },
  {
    question: "Peut-on faire la doua pour un bébé en français ?",
    answer:
      "Oui, il est tout à fait permis de faire des douas pour un bébé en français ou dans toute autre langue. Allah comprend toutes les langues et entend toute invocation sincère. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe, car elles ont été enseignées par le Prophète (paix et salut sur lui) et possèdent une valeur spirituelle particulière.",
  },
  {
    question: "Quels sont les droits du nouveau-né en islam ?",
    answer:
      "L&apos;islam accorde au nouveau-né plusieurs droits fondamentaux : recevoir l&apos;adhan dans l&apos;oreille droite, le tahnik, un beau prénom porteur de sens, la aqiqah le septième jour, le rasage des cheveux avec aumône équivalente en poids d&apos;argent, l&apos;allaitement maternel (recommandé deux ans), et surtout une éducation islamique bienveillante. Ces rites témoignent de l&apos;importance que l&apos;islam accorde à l&apos;enfant dès ses premiers instants.",
  },
];

export default function DouaBebeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-bebe-islam/#article",
        headline:
          "Doua pour un bébé en islam : invocations authentiques pour le nouveau-né",
        description:
          "Les douas pour un bébé en islam : invocations de protection, adhan, tahnik, aqiqah, choix du prénom et prières pour une descendance pieuse.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-04-12",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-bebe-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-bebe-islam/#breadcrumb",
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
            name: "Doua pour un bébé",
            item: "https://www.islamreligion.fr/doua-bebe-islam",
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
          title="Doua pour un bébé en islam : invocations authentiques pour le nouveau-né"
          subtitle="Les invocations prophétiques pour accueillir, protéger et bénir un bébé en islam. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua pour un bébé avec lumière divine symbolisant la bénédiction en islam"
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
                <span className="text-foreground">Doua pour un bébé</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;arrivée d&apos;un bébé est l&apos;un des plus grands
                  bienfaits qu&apos;Allah accorde à Ses serviteurs. L&apos;islam
                  encadre ce moment par des rites précis et des invocations
                  prophétiques : l&apos;adhan à l&apos;oreille, le tahnik, la
                  aqiqah, le choix d&apos;un beau prénom et surtout les douas de
                  protection contre le mal et le mauvais oeil. Ces gestes
                  spirituels accompagnent le nouveau-né dès ses premiers
                  instants et témoignent de la miséricorde de l&apos;islam envers
                  l&apos;enfant.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Accueillir un bébé en islam */}
              {/* ============================================ */}
              <section id="accueil-bebe-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Accueillir un bébé en islam : un bienfait et une responsabilité
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La naissance d&apos;un enfant est considérée en islam comme
                  une <strong>ni&apos;ma</strong> (bienfait) immense de la part
                  d&apos;Allah. Le Coran évoque à plusieurs reprises la
                  descendance comme un don divin, une source de joie et une
                  épreuve de responsabilité pour les parents. Allah dit dans le
                  Coran : &laquo;&nbsp;Les richesses et les enfants sont
                  l&apos;ornement de la vie de ce monde&nbsp;&raquo;
                  (Al-Kahf, 18:46).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) aimait profondément les
                  enfants et manifestait une grande tendresse envers eux. Il
                  portait ses petits-fils al-Hasan et al-Husayn sur ses épaules,
                  les embrassait et invoquait Allah en leur faveur. Cette
                  attitude prophétique établit le modèle que tout parent
                  musulman doit suivre : conjuguer l&apos;amour, la tendresse
                  et la prière pour ses enfants.
                </p>

                <HadithCard
                  arabic="كلكم راعٍ وكلكم مسؤولٌ عن رعيته"
                  text="Chacun d'entre vous est un berger et chacun d'entre vous est responsable de son troupeau."
                  source="Rapporté par al-Bukhari (7138) et Muslim (1829)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental rappelle que la parentalité en islam
                  n&apos;est pas seulement un lien biologique, mais un
                  <strong> amanah</strong> (dépôt) confié par Allah. Le parent
                  devra rendre des comptes au Jour du Jugement sur la manière
                  dont il a éduqué, protégé et guidé son enfant. C&apos;est
                  pourquoi les rites d&apos;accueil du nouveau-né et les douas
                  qui les accompagnent revêtent une importance capitale dans la
                  tradition islamique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La joie de la naissance :</strong>{" "}
                      il est sunna de féliciter les parents par la formule
                      &laquo;&nbsp;Baraka-Llahu laka fil-mawlud&nbsp;&raquo;
                      (Qu&apos;Allah bénisse le nouveau-né pour toi).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Fille ou garçon :</strong>{" "}
                      l&apos;islam interdit de manifester de la déception à la
                      naissance d&apos;une fille. Le Prophète (paix et salut
                      sur lui) a promis le Paradis à celui qui élève bien ses
                      filles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La gratitude envers Allah :</strong>{" "}
                      remercier Allah pour ce bienfait par la prière, la
                      charité et les invocations est le premier devoir du
                      parent musulman. Pour préparer spirituellement la venue
                      du bébé, consultez notre article sur la{" "}
                      <Link href="/doua-grossesse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pendant la grossesse</Link>.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
                    alt="Famille musulmane accueillant un bébé avec joie et bénédiction en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : L'adhan à l'oreille */}
              {/* ============================================ */}
              <section id="adhan-oreille" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;adhan à l&apos;oreille du nouveau-né : première sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les premiers gestes recommandés à la naissance d&apos;un
                  bébé en islam, l&apos;adhan occupe une place centrale. Le
                  Prophète (paix et salut sur lui) a enseigné de prononcer
                  l&apos;appel à la prière dans l&apos;oreille droite du
                  nouveau-né dès les premiers instants de sa vie. Ce geste
                  profondément symbolique fait en sorte que les premières
                  paroles que le bébé entend soient la proclamation de
                  l&apos;unicité d&apos;Allah et l&apos;invitation à la prière.
                </p>

                <HadithCard
                  arabic="من وُلد له مولود فأذّن في أذنه اليمنى وأقام في اليسرى لم تضرّه أمّ الصبيان"
                  text="Quiconque a un nouveau-né et prononce l'adhan dans son oreille droite et l'iqama dans son oreille gauche, Oum as-Sibyan (le djinn des enfants) ne lui nuira pas."
                  source="Rapporté par Abu Ya'la et al-Bayhaqi"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent la sagesse de ce rite par plusieurs
                  dimensions. D&apos;abord, il s&apos;agit d&apos;une
                  protection spirituelle : en faisant entendre au bébé les
                  paroles de l&apos;unicité divine, on éloigne de lui les
                  influences néfastes du shaytan. Ensuite, c&apos;est un acte
                  de consécration : le nouveau-né est symboliquement accueilli
                  dans la communauté musulmane par l&apos;appel à la foi.
                  Enfin, c&apos;est un rappel aux parents de leur mission
                  première : élever cet enfant dans la connaissance et
                  l&apos;amour d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est recommandé que ce soit le père qui prononce l&apos;adhan,
                  mais toute personne peut le faire en son absence. L&apos;adhan
                  doit être récité doucement, sans élever la voix de manière
                  excessive, car l&apos;intention est que le bébé l&apos;entende,
                  non qu&apos;il s&apos;agisse d&apos;un appel à la prière
                  collectif. Ce geste simple mais profond marque le début de la
                  vie spirituelle de l&apos;enfant musulman et constitue la
                  première invocation de protection en sa faveur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains savants comme Ibn al-Qayyim ont souligné que
                  l&apos;adhan à l&apos;oreille du bébé a également une portée
                  éducative : il grave dans l&apos;inconscient du nouveau-né les
                  mots les plus nobles de la langue arabe, ceux qui témoignent de
                  la grandeur d&apos;Allah et de la prophétie de Muhammad (paix
                  et salut sur lui). Pour approfondir la compréhension de la
                  naissance en islam, consultez notre guide complet sur la{" "}
                  <Link href="/doua-naissance-nouveau-ne-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua à la naissance du nouveau-né</Link>.
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
              {/* SECTION 3 : Tahnik et Aqiqah */}
              {/* ============================================ */}
              <section id="tahnik-aqiqah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le tahnik et la aqiqah : rites prophétiques pour le bébé
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Après l&apos;adhan, deux rites prophétiques majeurs
                  accompagnent l&apos;arrivée du nouveau-né : le
                  <strong> tahnik</strong> et la <strong>aqiqah</strong>. Ces
                  pratiques, solidement établies dans la Sunna, témoignent de
                  l&apos;attention que l&apos;islam porte au bien-être physique
                  et spirituel du bébé dès ses premiers jours.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le tahnik : frotter le palais du bébé avec une datte
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  Le tahnik consiste à mâcher légèrement une datte puis à
                  frotter le palais du nouveau-né avec. C&apos;est une pratique
                  que le Prophète (paix et salut sur lui) accomplissait
                  régulièrement. Lorsque les compagnons avaient un bébé, ils
                  l&apos;amenaient au Prophète qui pratiquait le tahnik et
                  invoquait Allah pour l&apos;enfant. La science moderne a
                  confirmé que l&apos;apport de sucre naturel dans les
                  premières heures de vie aide à stabiliser la glycémie du
                  nouveau-né et réduit le risque d&apos;hypoglycémie néonatale.
                </p>

                <HadithCard
                  arabic="جئتُ بعبد الله بن الزبير إلى النبي صلى الله عليه وسلم فحنّكه"
                  text="J'amenai 'AbdAllah ibn az-Zubayr au Prophète (paix et salut sur lui) qui lui fit le tahnik (avec une datte)."
                  source="Rapporté par al-Bukhari (5467) et Muslim (2146)"
                />

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La aqiqah : le sacrifice pour le nouveau-né
                </h3>

                <p className="mt-3 leading-relaxed text-foreground">
                  La aqiqah est le sacrifice d&apos;un ou deux moutons à
                  l&apos;occasion de la naissance d&apos;un enfant. Selon la
                  majorité des savants, il est recommandé de sacrifier deux
                  moutons pour un garçon et un mouton pour une fille. Ce
                  sacrifice est traditionnellement effectué le septième jour
                  après la naissance, accompagné du rasage des cheveux du bébé
                  et du don en charité d&apos;un poids équivalent en argent.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit : &laquo;&nbsp;Tout
                  enfant est mis en gage par sa aqiqah : on sacrifie pour lui le
                  septième jour, on lui rase la tête et on lui donne un
                  nom&nbsp;&raquo; (Abu Dawud, at-Tirmidhi). Les savants
                  expliquent que la aqiqah est une forme de gratitude envers
                  Allah pour le bienfait de l&apos;enfant, et une protection
                  spirituelle pour le nouveau-né. La viande est partagée entre
                  la famille, les proches et les nécessiteux, dans un esprit de
                  partage et de solidarité communautaire.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    Les rites du septième jour
                  </p>
                  <ul className="mt-3 space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">1.</span>
                      <span>Le sacrifice de la aqiqah (un ou deux moutons)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">2.</span>
                      <span>Le rasage des cheveux du bébé</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">3.</span>
                      <span>La charité du poids des cheveux en argent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">4.</span>
                      <span>L&apos;attribution définitive du prénom</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas de protection pour le bébé */}
              {/* ============================================ */}
              <section id="douas-protection-bebe" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas de protection pour le bébé en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam accorde une importance capitale à la protection
                  spirituelle du nouveau-né. Le Prophète (paix et salut sur lui)
                  enseignait des invocations spécifiques pour protéger les
                  enfants contre le mauvais oeil, les djinns et toute forme de
                  nuisance. Voici les principales douas authentiques que tout
                  parent musulman doit connaître.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de protection d&apos;Ibrahim (paix sur lui)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la doua que le Prophète (paix et salut sur lui)
                  récitait pour protéger ses petits-fils al-Hasan et al-Husayn.
                  Il s&apos;agit de l&apos;invocation la plus importante pour
                  la protection du bébé, transmise par Ibrahim (paix sur lui)
                  lui-même pour protéger ses enfants Isma&apos;il et Ishaq.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> U&apos;idhu-kuma bi kalimati-Llahi at-tammati min kulli shaytanin wa hammatin wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je vous place sous la protection des paroles parfaites d&apos;Allah contre tout démon, tout animal nuisible et contre tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3371)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua générale de protection par les paroles parfaites d&apos;Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation puissante peut être récitée quotidiennement
                  par les parents pour protéger leur bébé. Le Prophète (paix et
                  salut sur lui) recommandait de chercher refuge auprès
                  d&apos;Allah par Ses paroles parfaites contre tout mal.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimati-Llahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Les sourates protectrices (al-Mu&apos;awwidhat)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) recommandait également de
                  réciter les trois dernières sourates du Coran (al-Ikhlas,
                  al-Falaq et an-Nas) puis de souffler légèrement sur le bébé.
                  &apos;Aicha (qu&apos;Allah soit satisfait d&apos;elle) a
                  rapporté que le Prophète faisait cela chaque nuit avant de
                  dormir. Ces sourates constituent un bouclier spirituel
                  complet contre le mal, la sorcellerie, l&apos;envie et le
                  mauvais oeil. Les parents peuvent réciter ces sourates trois
                  fois chacune, souffler dans leurs mains et les passer sur le
                  corps du bébé. Ce geste prophétique simple mais puissant doit
                  devenir une habitude quotidienne pour tout parent musulman
                  soucieux de protéger son enfant.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière et invocation doua de protection pour un bébé en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Le choix du prénom */}
              {/* ============================================ */}
              <section id="prenom-enfant-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le choix du prénom du bébé en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Donner un beau prénom à son enfant est un droit fondamental du
                  nouveau-né en islam et un devoir pour les parents. Le Prophète
                  (paix et salut sur lui) accordait une grande importance au
                  choix des prénoms et allait jusqu&apos;à modifier les noms
                  porteurs de mauvais augure. Le prénom accompagne l&apos;enfant
                  toute sa vie et influence, selon les savants, sa personnalité
                  et son devenir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit : &laquo;&nbsp;Les
                  prénoms les plus aimés d&apos;Allah sont &apos;AbdAllah
                  (serviteur d&apos;Allah) et &apos;AbdurRahman (serviteur du
                  Tout-Miséricordieux)&nbsp;&raquo; (Muslim). Il est également
                  recommandé de nommer l&apos;enfant par un nom de prophète,
                  car le Prophète a dit : &laquo;&nbsp;Nommez-vous par les noms
                  des prophètes&nbsp;&raquo; (Abu Dawud). Les prénoms composés
                  avec &apos;Abd suivi d&apos;un des Noms d&apos;Allah
                  (&apos;AbdulKarim, &apos;AbdulAziz, etc.) sont
                  particulièrement méritoires.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de choisir un prénom qui a une belle
                  signification, car le Prophète (paix et salut sur lui)
                  changeait les prénoms à connotation négative. Il a par
                  exemple changé le nom &laquo;&nbsp;&apos;Asiya&nbsp;&raquo;
                  (désobéissante) en &laquo;&nbsp;Jamila&nbsp;&raquo; (belle).
                  Le prénom du bébé peut être donné dès la naissance ou au
                  septième jour lors de la aqiqah. Les deux pratiques sont
                  attestées dans la Sunna. L&apos;essentiel est de choisir un
                  prénom qui honore l&apos;enfant et le relie à sa foi.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Prénoms recommandés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Noms de prophètes (Muhammad, Ibrahim, Yusuf, Maryam),
                      noms composés avec &apos;Abd (&apos;AbdAllah,
                      &apos;AbdurRahman), prénoms à belle signification
                      (Nour, Iman, Salma, Khadija, Fatima, &apos;Ali, Omar).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Prénoms déconseillés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Prénoms à connotation négative, noms réservés à Allah
                      seul (ar-Rahman, al-Khaliq sans &apos;Abd), prénoms
                      liés à des divinités païennes ou porteurs de sens
                      contraires aux valeurs islamiques.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua pour une descendance pieuse */}
              {/* ============================================ */}
              <section id="doua-descendance-pieuse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour une descendance pieuse et bénie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations de protection, l&apos;islam enseigne
                  des douas puissantes pour demander à Allah une descendance
                  pieuse, vertueuse et attachée à la foi. Ces invocations
                  coraniques, prononcées par les prophètes eux-mêmes,
                  constituent un modèle pour tout parent qui aspire à voir ses
                  enfants grandir dans la droiture et la piété.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de Zakariya (paix sur lui) pour une descendance pure
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Zakariya (paix sur lui), malgré son âge avancé et
                  la stérilité de son épouse, ne perdit jamais espoir en la
                  miséricorde d&apos;Allah. Il adressa cette invocation
                  magnifique qui lui valut la naissance miraculeuse de Yahya
                  (Jean-Baptiste). Cette doua est particulièrement recommandée
                  pour les couples qui désirent un enfant pieux.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi hab li min ladunka dhurriyyatan tayyibah, innaka sami&apos;u ad-du&apos;a
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-moi de Ta part une descendance pure et bonne, car Tu es Celui qui entend les invocations&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:38)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua des serviteurs du Tout-Miséricordieux
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est mentionnée dans la sourate al-Furqan
                  parmi les caractéristiques des &apos;ibad ar-Rahman (les
                  serviteurs du Tout-Miséricordieux). Elle exprime le désir
                  profond de tout croyant : avoir une famille qui soit une
                  source de joie et un modèle de piété.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana hab lana min azwajina wa dhurriyyatina qurrata a&apos;yunin waj&apos;alna lil-muttaqina imama
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous, en nos épouses et nos descendants, la joie des yeux, et fais de nous un modèle pour les pieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Furqan (25:74)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua d&apos;Ibrahim (paix sur lui) pour sa descendance
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le prophète Ibrahim (paix sur lui), père des prophètes,
                  adressait constamment des invocations à Allah pour sa
                  descendance. Cette doua magnifique demande à Allah de faire de
                  la famille des gens qui accomplissent la prière avec constance.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi-j&apos;alni muqima as-salati wa min dhurriyyati Rabbana wa taqabbal du&apos;a
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que j&apos;accomplisse la prière ainsi qu&apos;une partie de ma descendance. Seigneur, exauce mon invocation&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ibrahim (14:40)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations coraniques montrent que les prophètes
                  eux-mêmes ne se contentaient pas de protéger leurs enfants
                  physiquement : ils invoquaient constamment Allah pour leur
                  guidée spirituelle. Le parent musulman doit suivre cet exemple
                  en multipliant les douas pour ses enfants, avant même leur
                  naissance et tout au long de leur vie. Pour les invocations
                  lors de l&apos;accouchement, consultez notre article dédié sur
                  la{" "}
                  <Link href="/doua-accouchement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour l&apos;accouchement en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils aux parents musulmans */}
              {/* ============================================ */}
              <section id="conseils-parents-musulmans" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils aux parents musulmans pour le bébé
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des rites et des invocations, l&apos;islam propose
                  une vision complète de l&apos;accueil du nouveau-né qui allie
                  la dimension spirituelle à l&apos;attention pratique. Voici
                  les conseils essentiels que tout parent musulman devrait
                  appliquer pour accompagner son bébé dans les meilleures
                  conditions.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;allaitement maternel recommandé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran recommande l&apos;allaitement maternel pendant
                        deux années complètes : &laquo;&nbsp;Les mères
                        allaiteront leurs enfants deux années
                        complètes&nbsp;&raquo; (Coran, 2:233). Ce bienfait
                        naturel renforce le lien entre la mère et l&apos;enfant
                        et lui apporte les nutriments essentiels pour un
                        développement sain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter le Coran en présence du bébé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Faire écouter le Coran au bébé dès ses premiers jours
                        crée un environnement spirituel bénéfique. Les anges
                        descendent là où le Coran est récité, et la baraka
                        (bénédiction) de la parole d&apos;Allah enveloppe le
                        foyer et tous ses habitants, y compris le nouveau-né.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer régulièrement pour la protection du bébé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les invocations de protection ne doivent pas se limiter
                        aux premiers jours. Le parent musulman doit réciter
                        quotidiennement les douas de protection, en particulier
                        l&apos;invocation d&apos;Ibrahim mentionnée dans cet
                        article et les sourates protectrices (al-Falaq et
                        an-Nas) avant le coucher du bébé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Donner la sadaqah en remerciement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La naissance est une occasion de multiplier les bonnes
                        actions et la charité. En plus de la aqiqah, il est
                        recommandé de donner en aumône pour remercier Allah de
                        ce bienfait et attirer davantage de bénédictions sur
                        le nouveau-né et sa famille.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Préparer l&apos;éducation islamique dès le berceau
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;éducation islamique commence bien avant que
                        l&apos;enfant ne comprenne les mots. L&apos;atmosphère
                        du foyer, la piété des parents, les invocations
                        récitées à voix haute et l&apos;absence de haram dans
                        la maison constituent le terreau dans lequel le bébé
                        grandira. Pour en savoir plus sur les{" "}
                        <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                        consultez notre guide complet.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua à la naissance du nouveau-né"
                  description="Découvrez toutes les invocations et les rites prophétiques à accomplir lors de la naissance d&apos;un enfant en islam."
                  href="/doua-naissance-nouveau-ne-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour réciter les douas pour votre bébé"
                description="Maîtrisez la langue du Coran pour réciter les invocations de protection avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-naissance-nouveau-ne-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua à la naissance
                  </Link>
                  <Link
                    href="/doua-accouchement-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour l&apos;accouchement
                  </Link>
                  <Link
                    href="/doua-grossesse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pendant la grossesse
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
