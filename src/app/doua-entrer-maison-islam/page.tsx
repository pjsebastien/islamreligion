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
    "Doua en entrant dans la maison en islam : invocations authentiques",
  description:
    "Découvrez la doua en entrant dans la maison en islam : invocations authentiques en arabe avec phonétique et traduction, hadiths sur le bismillah, le salam, le pied droit et la protection contre Shaytan.",
  openGraph: {
    title:
      "Doua en entrant dans la maison en islam : invocations authentiques",
    description:
      "Les invocations authentiques à réciter en entrant chez soi en islam : textes en arabe, phonétique, traduction et hadiths. Bismillah, salam et protection du foyer.",
    url: "https://www.islamreligion.fr/doua-entrer-maison-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-entrer-maison-islam",
  },
};

const tocItems = [
  { id: "sunna-entree-maison", label: "La sunna en entrant dans la maison" },
  { id: "doua-principale-entree", label: "Doua principale en entrant chez soi" },
  { id: "salam-entree", label: "Le salam en entrant dans la maison" },
  { id: "bismillah-shaytan", label: "Bismillah et la fuite de Shaytan" },
  { id: "douas-authentiques", label: "Douas authentiques à réciter" },
  { id: "adab-entree-maison", label: "Les adab liés à l&apos;entrée du foyer" },
  { id: "bienfaits-spirituels", label: "Bienfaits spirituels de ces invocations" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua à dire en entrant dans la maison en islam ?",
    answer:
      "La doua principale à réciter en entrant dans la maison est : « Allahumma inni as&apos;aluka khayral mawlij wa khayral makhraj, bismillahi walajnaa wa bismillahi kharajnaa, wa &apos;alAllahi Rabbinaa tawakkalnaa » (Seigneur, je Te demande le bien de l&apos;entrée et le bien de la sortie. Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et en Allah notre Seigneur nous plaçons notre confiance). Ce hadith est rapporté par Abu Dawud.",
  },
  {
    question: "Faut-il dire bismillah en entrant dans la maison ?",
    answer:
      "Oui, dire bismillah en entrant dans la maison est une sunna fortement recommandée. Le Prophète (paix et salut sur lui) a enseigné que lorsqu&apos;une personne entre chez elle en mentionnant le nom d&apos;Allah, le diable (Shaytan) dit aux autres démons : « Il n&apos;y a pour vous ni hébergement ni repas ici. » Le bismillah protège le foyer de l&apos;influence du Shaytan.",
  },
  {
    question: "Pourquoi faut-il saluer en entrant dans la maison ?",
    answer:
      "Le salam (salutation de paix) en entrant dans la maison est une sunna du Prophète (paix et salut sur lui). Même si la maison est vide, le croyant dit : « Assalamou &apos;alayna wa &apos;ala &apos;ibadillahis-salihin » (Que la paix soit sur nous et sur les serviteurs pieux d&apos;Allah). Ce salam attire la baraka (bénédiction) dans le foyer et éloigne le diable.",
  },
  {
    question: "Par quel pied faut-il entrer dans la maison en islam ?",
    answer:
      "La sunna recommande d&apos;entrer dans la maison avec le pied droit. En islam, le côté droit est associé au bien et à la bénédiction, tandis que le côté gauche est utilisé pour les actes de purification. Cette règle s&apos;applique également à l&apos;entrée dans la mosquée. En sortant, on commence par le pied gauche.",
  },
  {
    question: "Que se passe-t-il si on oublie de dire bismillah en entrant ?",
    answer:
      "Si une personne oublie de dire bismillah en entrant dans la maison, le Shaytan annonce aux autres démons qu&apos;ils ont trouvé un hébergement pour la nuit. De même, si elle ne mentionne pas le nom d&apos;Allah en mangeant, le diable prend part à son repas. C&apos;est pourquoi il est essentiel de prendre l&apos;habitude de mentionner Allah à chaque entrée.",
  },
  {
    question: "Peut-on dire la doua d'entrée dans la maison en français ?",
    answer:
      "Il est préférable de réciter la doua en arabe, car c&apos;est la formulation enseignée par le Prophète (paix et salut sur lui). Cependant, si une personne ne maîtrise pas encore l&apos;arabe, elle peut la dire en français en attendant de l&apos;apprendre. L&apos;essentiel est de ne jamais entrer chez soi sans invoquer Allah et sans prononcer le salam.",
  },
  {
    question: "La doua d'entrée protège-t-elle contre le mauvais œil ?",
    answer:
      "Oui, mentionner le nom d&apos;Allah en entrant dans la maison contribue à la protection du foyer contre tout mal, y compris le mauvais œil et l&apos;influence des djinns. Le bismillah, le salam et les invocations prophétiques créent un bouclier spirituel autour du foyer. Les savants recommandent également de réciter sourate Al-Baqara régulièrement chez soi pour une protection complète.",
  },
  {
    question: "Quelle est la différence entre la doua d'entrée et celle de sortie ?",
    answer:
      "La doua d&apos;entrée met l&apos;accent sur le bismillah, le salam aux occupants et la demande de bénédiction pour le foyer. La doua de sortie, quant à elle, insiste sur le tawakkul (confiance en Allah) et la demande de protection contre l&apos;égarement et les dangers extérieurs. Les deux sont complémentaires et font partie des adhkar quotidiens du musulman.",
  },
];

export default function DouaEntrerMaisonIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-entrer-maison-islam/#article",
        headline:
          "Doua en entrant dans la maison en islam : invocations authentiques",
        description:
          "Découvrez la doua en entrant dans la maison en islam : invocations authentiques en arabe, hadiths sur le bismillah, le salam, le pied droit et la protection contre Shaytan.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-04-10",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-entrer-maison-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-entrer-maison-islam/#breadcrumb",
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
            name: "Doua en entrant dans la maison",
            item: "https://www.islamreligion.fr/doua-entrer-maison-islam",
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
          title="Doua en entrant dans la maison en islam : invocations authentiques"
          subtitle="Les invocations prophétiques à réciter en entrant chez soi, tirées de la Sunna authentique. Textes en arabe, phonétique et traduction française pour protéger votre foyer."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation doua en entrant dans la maison avec rayons dorés symbolisant la bénédiction du foyer en islam"
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
                <span className="text-foreground">Doua en entrant dans la maison</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua en entrant dans la maison</strong> est une
                  sunna quotidienne que le Prophète Muhammad (paix et salut sur
                  lui) pratiquait chaque jour. En prononçant le bismillah et le
                  salam en franchissant le seuil de son foyer, le croyant attire
                  la baraka d&apos;Allah sur sa demeure et empêche le Shaytan
                  d&apos;y pénétrer. Cette invocation simple mais puissante
                  transforme chaque retour chez soi en un acte d&apos;adoration
                  et protège la famille de l&apos;influence du diable.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La sunna en entrant dans la maison */}
              {/* ============================================ */}
              <section id="sunna-entree-maison" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sunna du Prophète en entrant dans la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam accorde une importance considérable aux gestes du
                  quotidien et les enveloppe d&apos;une dimension spirituelle
                  profonde. Parmi ces gestes, l&apos;entrée dans la maison
                  occupe une place particulière dans la Sunna prophétique. Le
                  Prophète Muhammad (paix et salut sur lui) ne franchissait
                  jamais le seuil de sa demeure sans prononcer le nom
                  d&apos;Allah et sans saluer les occupants du foyer. Ce
                  comportement, loin d&apos;être un simple rituel, constitue un
                  véritable acte d&apos;adoration qui enveloppe la maison
                  d&apos;une protection divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La maison en islam n&apos;est pas un simple lieu
                  d&apos;habitation : c&apos;est un espace sacré où la famille
                  vit, prie, éduque ses enfants et se ressource spirituellement.
                  C&apos;est pourquoi les savants de l&apos;islam ont toujours
                  insisté sur l&apos;importance de protéger ce lieu par les
                  invocations prophétiques. Lorsque le croyant entre chez lui en
                  mentionnant le nom d&apos;Allah, il place son foyer sous la
                  garde du Très-Haut et en fait un refuge contre les maux
                  extérieurs et les influences néfastes. La{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                  accompagne ainsi chaque instant de la vie du musulman, y
                  compris les plus ordinaires.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les compagnons du Prophète (paix et salut sur lui)
                  témoignaient qu&apos;il ne négligeait jamais cette pratique,
                  que ce soit en rentrant d&apos;un voyage lointain ou d&apos;une
                  simple sortie au marché. Cette constance dans le dhikr
                  (rappel d&apos;Allah) illustre un principe fondamental de
                  l&apos;islam : la sacralisation du quotidien. Chaque geste,
                  aussi banal soit-il, peut devenir une source de récompense
                  lorsqu&apos;il est accompagné de l&apos;intention et de
                  l&apos;invocation appropriées. Entrer dans sa maison avec le
                  bismillah transforme un acte ordinaire en un acte de piété
                  récompensé par Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire bismillah :</strong>{" "}
                      mentionner le nom d&apos;Allah dès le seuil de la porte
                      pour placer le foyer sous la protection divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Saluer les occupants :</strong>{" "}
                      prononcer le salam en entrant, même si la maison est
                      vide, pour attirer la bénédiction d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Entrer du pied droit :</strong>{" "}
                      commencer par le pied droit est une sunna associée au
                      bien et à la baraka dans tous les actes nobles.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Intérieur baigné de lumière symbolisant la bénédiction divine dans le foyer musulman"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua principale en entrant */}
              {/* ============================================ */}
              <section id="doua-principale-entree" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua principale en entrant dans la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;invocation la plus complète à réciter en entrant dans
                  la maison est celle rapportée par Abu Dawud dans ses Sunan.
                  Cette doua combine la demande de bénédiction pour l&apos;entrée
                  et la sortie, la mention du nom d&apos;Allah et le tawakkul
                  (confiance totale en Allah). Elle constitue une formule
                  complète qui englobe tous les aspects de la protection du
                  foyer.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka khayral mawlij wa khayral makhraj, bismillahi walajnaa wa bismillahi kharajnaa, wa &apos;alAllahi Rabbinaa tawakkalnaa
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le bien de l&apos;entrée et le bien de la sortie. Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et en Allah notre Seigneur nous plaçons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5096)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est remarquable par sa structure tripartite.
                  Premièrement, le croyant demande à Allah le bien
                  (&laquo;&nbsp;khayr&nbsp;&raquo;) de l&apos;entrée et de la
                  sortie, c&apos;est-à-dire que chaque mouvement soit source de
                  bénédiction. Deuxièmement, il mentionne le nom d&apos;Allah
                  (bismillah) pour l&apos;entrée comme pour la sortie, créant
                  ainsi un lien permanent avec le Créateur à chaque seuil
                  franchi. Troisièmement, il exprime son tawakkul, sa confiance
                  absolue en Allah comme Seigneur et Protecteur. Cette
                  combinaison fait de cette doua l&apos;une des plus complètes
                  parmi les adhkar du quotidien.
                </p>

                <HadithCard
                  arabic="إذا دخل الرجل بيته فذكر الله تعالى عند دخوله وعند طعامه قال الشيطان: لا مبيت لكم ولا عشاء"
                  text="Lorsqu'un homme entre dans sa maison et mentionne le nom d'Allah en entrant et en mangeant, le Shaytan dit [aux autres démons] : Il n'y a pour vous ni hébergement ni repas ici."
                  source="Rapporté par Muslim (2018)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rapporté par Muslim illustre l&apos;impact direct et
                  concret du bismillah lors de l&apos;entrée dans la maison. Le
                  Shaytan, qui cherche constamment à s&apos;infiltrer dans les
                  foyers pour semer la discorde, la colère et les conflits, est
                  littéralement chassé lorsque le croyant invoque Allah.
                  L&apos;expression &laquo;&nbsp;ni hébergement ni
                  repas&nbsp;&raquo; montre que le diable est totalement exclu
                  de la maison où le nom d&apos;Allah est mentionné. C&apos;est
                  une protection réelle et tangible accordée par le Très-Haut à
                  Ses serviteurs qui L&apos;invoquent.
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
              {/* SECTION 3 : Le salam en entrant */}
              {/* ============================================ */}
              <section id="salam-entree" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le salam en entrant dans la maison : une sunna essentielle
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le salam (salutation de paix) constitue la deuxième sunna
                  fondamentale liée à l&apos;entrée dans la maison. Le Prophète
                  (paix et salut sur lui) enseignait à ses compagnons de saluer
                  les occupants du foyer en entrant, et cette pratique revêt une
                  importance spirituelle majeure. Le salam n&apos;est pas une
                  simple politesse : c&apos;est une invocation de paix et de
                  bénédiction qui transforme l&apos;atmosphère du foyer.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Anas ibn Malik (qu&apos;Allah l&apos;agrée) rapporte que le
                  Prophète (paix et salut sur lui) lui a dit :
                  &laquo;&nbsp;Mon fils, lorsque tu entres chez ta famille,
                  salue-les, ce sera une bénédiction pour toi et pour les gens
                  de ta maison&nbsp;&raquo; (rapporté par at-Tirmidhi). Ce
                  hadith montre que le salam à l&apos;entrée de la maison est
                  une source de baraka non seulement pour celui qui salue, mais
                  pour l&apos;ensemble de la maisonnée. La paix invoquée se
                  répand dans tout le foyer et crée un environnement serein
                  propice à l&apos;harmonie familiale.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Assalamou &apos;alayna wa &apos;ala &apos;ibadillahis-salihin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Que la paix soit sur nous et sur les serviteurs pieux d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    À réciter lorsque la maison est vide
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que même lorsque la maison est vide, le
                  croyant doit prononcer le salam. Dans ce cas, il dit :
                  &laquo;&nbsp;Assalamou &apos;alayna wa &apos;ala &apos;ibadillahis-salihin&nbsp;&raquo;
                  (Que la paix soit sur nous et sur les serviteurs pieux
                  d&apos;Allah). Cette pratique est rapportée dans les
                  commentaires du Coran pour le verset :
                  &laquo;&nbsp;Lorsque vous entrez dans des maisons, saluez-vous
                  les uns les autres d&apos;une salutation venant d&apos;Allah,
                  bénie et agréable&nbsp;&raquo; (Coran, sourate An-Nur, 24:61).
                  Le salam adressé même à une maison vide attire les anges et
                  repousse les djinns qui pourraient s&apos;y trouver.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Bismillah et la fuite de Shaytan */}
              {/* ============================================ */}
              <section id="bismillah-shaytan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Bismillah en entrant : quand Shaytan quitte la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des enseignements les plus remarquables de la Sunna
                  concernant l&apos;entrée dans la maison est l&apos;effet
                  direct du bismillah sur le Shaytan. Le Prophète (paix et salut
                  sur lui) a décrit de manière précise ce qui se passe dans le
                  monde invisible lorsque le croyant mentionne ou omet le nom
                  d&apos;Allah en franchissant le seuil de sa porte. Ce hadith
                  authentique nous dévoile une réalité spirituelle que nous ne
                  pouvons percevoir par nos sens.
                </p>

                <HadithCard
                  arabic="إذا دخل الرجل بيته فذكر الله تعالى عند دخوله وعند طعامه قال الشيطان: لا مبيت لكم ولا عشاء، وإذا دخل فلم يذكر الله عند دخوله قال الشيطان: أدركتم المبيت، وإذا لم يذكر الله عند طعامه قال: أدركتم المبيت والعشاء"
                  text="Lorsqu'un homme entre dans sa maison et mentionne Allah en entrant et en mangeant, le Shaytan dit : Il n'y a pour vous ni hébergement ni repas. Mais s'il entre sans mentionner Allah, le Shaytan dit : Vous avez trouvé un hébergement. Et s'il ne mentionne pas Allah en mangeant, le Shaytan dit : Vous avez trouvé hébergement et repas."
                  source="Rapporté par Muslim (2018)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle un mécanisme spirituel d&apos;une importance
                  capitale. Le Shaytan et ses alliés parmi les djinns cherchent
                  activement à s&apos;installer dans les foyers des musulmans
                  pour y semer la discorde, provoquer des disputes entre époux,
                  perturber l&apos;éducation des enfants et éloigner la famille
                  du dhikr d&apos;Allah. Leur stratégie est simple : profiter de
                  la négligence du croyant qui oublie de mentionner le nom
                  d&apos;Allah. La{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en sortant de la maison</Link>{" "}
                  complète cette protection en enveloppant le croyant de la
                  garde divine dès qu&apos;il franchit le seuil vers
                  l&apos;extérieur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également enseigné que
                  le Shaytan ne peut pas ouvrir une porte fermée au nom
                  d&apos;Allah. Al-Bukhari rapporte qu&apos;il a dit :
                  &laquo;&nbsp;Fermez vos portes et mentionnez le nom
                  d&apos;Allah, car le diable n&apos;ouvre pas une porte
                  fermée&nbsp;&raquo;. Cette instruction complémentaire montre
                  que la protection du foyer passe par deux moyens associés :
                  l&apos;invocation verbale (le bismillah) et l&apos;action
                  physique (fermer la porte). L&apos;islam associe toujours la
                  cause matérielle à la cause spirituelle, sans jamais négliger
                  l&apos;une au profit de l&apos;autre.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les invocations de protection du foyer en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas authentiques à réciter */}
              {/* ============================================ */}
              <section id="douas-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques en entrant dans la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici l&apos;ensemble des invocations authentiques que le
                  musulman peut réciter en entrant dans sa maison. Chacune de
                  ces douas est tirée de la Sunna prophétique et accompagnée de
                  son texte arabe, de sa phonétique et de sa traduction en
                  français.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua complète d&apos;entrée et de sortie
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la doua la plus complète, qui couvre à la fois
                  l&apos;entrée et la sortie du foyer. Elle est recommandée par
                  les savants comme l&apos;invocation principale à mémoriser en
                  priorité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka khayral mawlij wa khayral makhraj, bismillahi walajnaa wa bismillahi kharajnaa, wa &apos;alAllahi Rabbinaa tawakkalnaa
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande le bien de l&apos;entrée et le bien de la sortie. Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et en Allah notre Seigneur nous plaçons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5096)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Bismillah simple avec tawakkul
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Pour celui qui souhaite une formule plus courte, le bismillah
                  accompagné de l&apos;expression du tawakkul est une
                  alternative authentique rapportée dans les recueils de hadiths.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى رَبِّنَا تَوَكَّلْنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi walajnaa, wa bismillahi kharajnaa, wa &apos;ala Rabbinaa tawakkalnaa
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah nous entrons, au nom d&apos;Allah nous sortons, et en notre Seigneur nous plaçons notre confiance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5096)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Le salam en entrant dans une maison vide
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque le croyant entre dans une maison où il n&apos;y a
                  personne, il est recommandé de prononcer cette salutation qui
                  inclut la paix sur soi-même et sur les serviteurs pieux
                  d&apos;Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Assalamou &apos;alayna wa &apos;ala &apos;ibadillahis-salihin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Que la paix soit sur nous et sur les serviteurs pieux d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Mentionné dans le tafsir d&apos;An-Nur (24:61)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de protection pour le foyer
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation demande à Allah de bénir le foyer et de le
                  protéger de tout mal. Elle peut être récitée en complément des
                  invocations précédentes pour renforcer la protection
                  spirituelle de la maison.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahit-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua tirée du Coran pour la bénédiction du foyer
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le croyant peut également réciter cette invocation coranique
                  pour demander à Allah de bénir son lieu de résidence et de
                  l&apos;envelopper de Sa miséricorde.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ أَنزِلْنِي مُنزَلًا مُّبَارَكًا وَأَنتَ خَيْرُ الْمُنزِلِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi anzilni munzalan mubarakan wa Anta khayrul munzilin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais-moi descendre en un lieu béni, et Tu es le Meilleur de ceux qui font descendre&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Mu&apos;minun (23:29)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Adab liés à l'entrée */}
              {/* ============================================ */}
              <section id="adab-entree-maison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les adab (bonnes manières) en entrant dans la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations, l&apos;islam enseigne un ensemble
                  d&apos;adab (bonnes manières) à respecter en entrant dans la
                  maison. Ces règles de bienséance ont une dimension à la fois
                  spirituelle et sociale, et elles contribuent à créer un
                  environnement harmonieux au sein du foyer. Le Prophète (paix
                  et salut sur lui) était l&apos;exemple parfait de ces bonnes
                  manières, et les compagnons s&apos;efforçaient de l&apos;imiter
                  dans les moindres détails.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Entrer du pied droit
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La sunna recommande d&apos;entrer dans la maison avec le
                        pied droit, comme pour tous les actes nobles et bénis en
                        islam (entrer à la mosquée, mettre ses chaussures,
                        manger, etc.). En sortant, on commence par le pied
                        gauche. Cette distinction entre droite et gauche est un
                        rappel constant de la sacralisation des gestes du
                        quotidien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Utiliser le siwak (bâtonnet de miswak)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) avait l&apos;habitude
                        d&apos;utiliser le siwak en entrant chez lui. Aisha
                        (qu&apos;Allah l&apos;agrée) rapporte que la première
                        chose qu&apos;il faisait en arrivant était de se nettoyer
                        les dents avec le siwak (rapporté par Muslim). Cette
                        sunna allie hygiène et adoration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Avoir un visage souriant et bienveillant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) entrait chez lui avec
                        douceur et bienveillance. Il ne rapportait pas les soucis
                        extérieurs de manière brutale et s&apos;efforçait de
                        créer une atmosphère de sérénité. Le sourire est une
                        sadaqa (aumône) et il commence par la famille, qui a le
                        plus droit à notre bonne humeur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas entrer brusquement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants recommandent de signaler son arrivée avant
                        d&apos;entrer, notamment en toussotant ou en faisant du
                        bruit avec ses chaussures. Le Prophète (paix et salut
                        sur lui) interdisait à l&apos;homme de surprendre sa
                        famille en rentrant de voyage sans les prévenir. Cette
                        règle protège l&apos;intimité de chacun et évite les
                        situations embarrassantes.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="كان أول ما يفعله إذا دخل بيته أن يستاك"
                  text="La première chose qu'il faisait en entrant chez lui était d'utiliser le siwak (bâtonnet pour se nettoyer les dents)."
                  source="Rapporté par Muslim (253), d'après Aisha"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Bienfaits spirituels */}
              {/* ============================================ */}
              <section id="bienfaits-spirituels" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Bienfaits spirituels de la doua en entrant dans la maison
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les invocations liées à l&apos;entrée dans la maison ne sont
                  pas de simples formules à répéter machinalement. Elles
                  produisent des effets spirituels profonds sur le croyant, sa
                  famille et son foyer. Les savants de l&apos;islam ont détaillé
                  ces bienfaits en s&apos;appuyant sur les textes du Coran et de
                  la Sunna, montrant que chaque mot prononcé avec sincérité a un
                  impact réel dans le monde visible et invisible.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Protection contre le Shaytan
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le bismillah prononcé à l&apos;entrée chasse le diable du
                      foyer. Comme l&apos;a enseigné le Prophète (paix et salut
                      sur lui), le Shaytan ne peut ni dormir ni manger dans une
                      maison où le nom d&apos;Allah est mentionné. Cette
                      protection s&apos;étend à toute la famille présente dans
                      la demeure.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Baraka dans le foyer
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le salam et le bismillah attirent la bénédiction divine
                      sur la maison, la nourriture, les relations familiales et
                      toutes les activités qui s&apos;y déroulent. La baraka se
                      manifeste par la tranquillité, l&apos;abondance et la
                      concorde au sein de la famille.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Renforcement du lien avec Allah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Chaque doua prononcée est un rappel d&apos;Allah (dhikr)
                      qui renforce la muraqaba (conscience permanente de Dieu).
                      Le croyant qui invoque Allah en entrant chez lui maintient
                      un lien spirituel continu qui nourrit sa foi au quotidien.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Harmonie familiale
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Entrer avec le salam, le sourire et la douceur crée une
                      atmosphère de paix et d&apos;amour dans le foyer. Le
                      Shaytan, principal instigateur des disputes conjugales et
                      familiales, étant chassé par le bismillah, les relations
                      familiales s&apos;en trouvent préservées.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, les invocations à l&apos;entrée de la maison
                  constituent un pilier essentiel des adhkar quotidiens du
                  musulman. Elles transforment le foyer en un lieu de paix, de
                  baraka et de protection divine. Le croyant qui les pratique
                  avec régularité et sincérité remarquera leurs effets sur
                  l&apos;atmosphère de sa maison, sur ses relations familiales
                  et sur sa propre sérénité intérieure. Pour compléter cette
                  pratique, découvrez la{" "}
                  <Link href="/doua-nouvelle-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour une nouvelle maison en islam</Link>{" "}
                  qui accompagne l&apos;emménagement dans un nouveau foyer.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Récompense à chaque entrée :</strong>{" "}
                      la doua d&apos;entrée est un acte d&apos;adoration
                      récompensé par Allah, même si le croyant entre chez lui
                      plusieurs fois par jour.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éducation des enfants :</strong>{" "}
                      en pratiquant ces sunnas devant les enfants, les parents
                      leur transmettent l&apos;habitude du dhikr et ancrent
                      l&apos;amour d&apos;Allah dans leur quotidien dès le plus
                      jeune âge.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Effet cumulatif :</strong>{" "}
                      combinée avec la{" "}
                      <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de sortie</Link>,
                      la doua d&apos;entrée crée un cycle de protection continu
                      qui accompagne le croyant tout au long de sa journée.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua en sortant de la maison en islam"
                  description="Complétez votre protection quotidienne en découvrant les invocations authentiques à réciter en sortant de chez soi."
                  href="/doua-sortir-maison-islam"
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
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en sortant de la maison
                  </Link>
                  <Link
                    href="/doua-nouvelle-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour une nouvelle maison
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
                  </Link>
                  <Link
                    href="/doua-avant-dormir-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua avant de dormir
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
