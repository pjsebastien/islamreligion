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
    "Doua contre la tristesse en islam : invocations authentiques et remèdes spirituels",
  description:
    "Découvrez les douas contre la tristesse en islam : invocation al-hamm wal-hazan en arabe avec phonétique et traduction, doua de Younous, le Coran comme guérison du coeur, hadiths et conseils pour surmonter la tristesse.",
  openGraph: {
    title:
      "Doua contre la tristesse en islam : invocations authentiques et remèdes spirituels",
    description:
      "Les invocations authentiques contre la tristesse en islam : textes en arabe, phonétique, traduction et hadiths. Retrouvez sérénité et espoir grâce au Coran et à la Sunna.",
    url: "https://www.islamreligion.fr/doua-tristesse-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-tristesse-islam",
  },
};

const tocItems = [
  { id: "tristesse-en-islam", label: "La tristesse dans la vision islamique" },
  { id: "doua-al-hamm-wal-hazan", label: "Doua al-hamm wal-hazan (Allahumma inni 'abduka)" },
  { id: "doua-younous", label: "La doua de Younous contre l'affliction" },
  { id: "coran-guerison-coeur", label: "Le Coran : guérison (shifaa) pour les coeurs" },
  { id: "douas-authentiques", label: "Douas authentiques contre la tristesse" },
  { id: "patience-espoir", label: "Patience et espoir face à l'épreuve" },
  { id: "conseils-pratiques", label: "Conseils pratiques au quotidien" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua contre la tristesse en islam ?",
    answer:
      "La doua la plus complète contre la tristesse est l&apos;invocation al-hamm wal-hazan rapportée par l&apos;imam Ahmad : « Allahumma inni &apos;abduka, ibnu &apos;abdika, ibnu amatika... » dans laquelle le croyant remet entièrement son sort à Allah et Lui demande de faire du Coran le printemps de son coeur et la lumière de sa poitrine. Le Prophète (paix et salut sur lui) a garanti que quiconque la récite verra sa tristesse remplacée par la joie.",
  },
  {
    question: "Est-il normal d'être triste en islam ?",
    answer:
      "Oui, la tristesse est une émotion humaine naturelle que l&apos;islam ne condamne pas. Le Prophète (paix et salut sur lui) lui-même a pleuré la mort de son fils Ibrahim et a connu l&apos;année de la tristesse (&apos;am al-huzn) après la perte de Khadija et d&apos;Abu Talib. L&apos;islam encourage cependant à ne pas se laisser submerger par la tristesse et à chercher refuge auprès d&apos;Allah par la doua, la lecture du Coran et la patience.",
  },
  {
    question: "La doua de Younous aide-t-elle contre la tristesse ?",
    answer:
      "Oui, la doua de Younous (« La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin ») est recommandée dans toute situation de détresse, y compris la tristesse profonde. Le Prophète (paix et salut sur lui) a dit qu&apos;aucun musulman ne récite cette invocation sans qu&apos;Allah ne l&apos;exauce. Elle combine le tawhid, la glorification d&apos;Allah et la reconnaissance de ses propres fautes.",
  },
  {
    question: "Comment le Coran guérit-il la tristesse ?",
    answer:
      "Le Coran est décrit par Allah comme « une guérison pour ce qui est dans les poitrines » (Coran, 10:57). Sa récitation apaise le coeur, rappelle la miséricorde d&apos;Allah et donne un sens aux épreuves. Les sourates Al-Inshirah (94), Ad-Duha (93) et Al-Baqara sont particulièrement recommandées contre la tristesse. L&apos;écoute et la méditation du Coran libèrent des endorphines spirituelles qui apaisent l&apos;âme.",
  },
  {
    question: "Peut-on faire la doua contre la tristesse en français ?",
    answer:
      "Oui, la doua peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et entend chaque invocation sincère. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe, car elles ont une puissance spirituelle particulière attestée par le Prophète (paix et salut sur lui). Les supplications personnelles en français sont parfaitement valides.",
  },
  {
    question: "Quels sont les meilleurs moments pour faire doua contre la tristesse ?",
    answer:
      "Les moments les plus propices pour invoquer Allah contre la tristesse sont : le dernier tiers de la nuit (tahajjud), lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le vendredi après l&apos;Asr, et lors de la pluie. Le Prophète (paix et salut sur lui) invoquait régulièrement Allah matin et soir avec des formules de protection contre la tristesse et l&apos;angoisse.",
  },
  {
    question: "L'islam interdit-il de pleurer de tristesse ?",
    answer:
      "Non, l&apos;islam n&apos;interdit pas de pleurer. Le Prophète (paix et salut sur lui) a dit : « L&apos;oeil verse des larmes, le coeur est triste, et nous ne disons que ce qui plaît à notre Seigneur » (al-Bukhari). Ce qui est interdit, c&apos;est la lamentation excessive (niyaha), le fait de se frapper le visage ou de déchirer ses vêtements par désespoir. Les larmes sincères sont un signe de miséricorde.",
  },
  {
    question: "La dépression est-elle différente de la tristesse en islam ?",
    answer:
      "Oui, les savants contemporains distinguent la tristesse passagère, qui est une émotion naturelle, de la dépression clinique, qui est une maladie nécessitant un traitement médical. L&apos;islam encourage le recours à la médecine en plus des invocations. Le Prophète (paix et salut sur lui) a dit : « Allah n&apos;a pas fait descendre une maladie sans avoir fait descendre un remède » (al-Bukhari). La doua et le traitement médical sont complémentaires.",
  },
];

export default function DouaTristesseIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-tristesse-islam/#article",
        headline:
          "Doua contre la tristesse en islam : invocations authentiques et remèdes spirituels",
        description:
          "Découvrez les douas contre la tristesse en islam : invocation al-hamm wal-hazan, doua de Younous, le Coran comme guérison du coeur, hadiths et conseils pratiques.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-03-24",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-tristesse-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-tristesse-islam/#breadcrumb",
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
            name: "Doua contre la tristesse",
            item: "https://www.islamreligion.fr/doua-tristesse-islam",
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
          title="Doua contre la tristesse en islam : invocations et remèdes spirituels"
          subtitle="Les invocations authentiques contre la tristesse et l'affliction, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Mains levées en prière doua contre la tristesse en islam avec lumière apaisante"
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
                <span className="text-foreground">Doua contre la tristesse</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La tristesse (al-huzn) est une émotion humaine naturelle que
                  l&apos;islam ne condamne pas. Le Prophète (paix et salut sur lui)
                  lui-même a connu la tristesse et a enseigné des invocations
                  puissantes pour la surmonter. La doua al-hamm wal-hazan
                  (&laquo;&nbsp;Allahumma inni &apos;abduka...&nbsp;&raquo;) est
                  l&apos;une des plus complètes : le Prophète a garanti que
                  quiconque la prononce verra sa tristesse remplacée par la joie.
                  Le Coran, décrit comme une guérison (shifaa) pour les coeurs,
                  et la patience (sabr) constituent les piliers du remède islamique
                  contre l&apos;affliction.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La tristesse dans la vision islamique */}
              {/* ============================================ */}
              <section id="tristesse-en-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La tristesse (al-huzn) dans la vision islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La tristesse est une réalité de la condition humaine que
                  l&apos;islam reconnaît pleinement. Le terme arabe
                  <strong> al-huzn</strong> (الحُزْن) désigne la tristesse, le
                  chagrin et l&apos;affliction du coeur. Loin de la nier ou de
                  la considérer comme un signe de faiblesse de foi, l&apos;islam
                  offre un cadre spirituel complet pour la comprendre, la
                  traverser et la surmonter avec l&apos;aide d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) lui-même a vécu
                  des épisodes de profonde tristesse. L&apos;année 619, connue
                  sous le nom de <strong>&apos;am al-huzn</strong> (année de la
                  tristesse), fut marquée par la perte de deux êtres chers :
                  son épouse bien-aimée Khadija (qu&apos;Allah l&apos;agrée) et
                  son oncle protecteur Abu Talib. Il pleura également la mort de
                  son fils Ibrahim en disant : &laquo;&nbsp;L&apos;oeil verse des
                  larmes, le coeur est triste, et nous ne disons que ce qui plaît
                  à notre Seigneur&nbsp;&raquo;. Cette parole prophétique légitime
                  l&apos;expression de la tristesse tout en posant un cadre
                  spirituel essentiel.
                </p>

                <HadithCard
                  arabic="إن العين تدمع والقلب يحزن ولا نقول إلا ما يرضي ربنا وإنا بفراقك يا إبراهيم لمحزونون"
                  text="L'oeil verse des larmes, le coeur est triste, et nous ne disons que ce qui plaît à notre Seigneur. Et nous sommes attristés par ta séparation, ô Ibrahim."
                  source="Rapporté par al-Bukhari (1303) et Muslim (2315)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran lui-même mentionne la tristesse à de nombreuses
                  reprises. Allah dit au Prophète : &laquo;&nbsp;Ne sois pas
                  triste, car Allah est avec nous&nbsp;&raquo; (Coran, 9:40).
                  Cette parole, prononcée dans la grotte de Thawr lors de la
                  hijra, illustre le principe fondamental : la tristesse est
                  naturelle, mais le croyant ne doit jamais se sentir abandonné
                  par son Créateur. La présence d&apos;Allah est le remède
                  ultime contre tout chagrin.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La tristesse n&apos;est pas un péché :</strong>{" "}
                      c&apos;est une émotion humaine que le Prophète lui-même a
                      éprouvée et exprimée ouvertement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;épreuve purifie le croyant :</strong>{" "}
                      chaque affliction endurée avec patience efface des péchés
                      et élève le rang du musulman auprès d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le refuge est en Allah :</strong> le Prophète
                      cherchait régulièrement protection auprès d&apos;Allah
                      contre la tristesse (al-huzn) et l&apos;angoisse
                      (al-hamm) dans ses invocations quotidiennes.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière symbolisant la doua contre la tristesse en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua al-hamm wal-hazan */}
              {/* ============================================ */}
              <section id="doua-al-hamm-wal-hazan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua al-hamm wal-hazan : &laquo;&nbsp;Allahumma inni &apos;abduka&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua al-hamm wal-hazan est considérée comme l&apos;invocation
                  la plus complète et la plus puissante contre la tristesse et
                  l&apos;angoisse en islam. Rapportée par l&apos;imam Ahmad dans
                  son Musnad, cette invocation prophétique contient une
                  reconnaissance totale de la servitude envers Allah et une
                  demande explicite de remplacement de la tristesse par la joie.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni &apos;abduka, ibnu &apos;abdika, ibnu amatika, nasiyati biyadika, madin fiyya hukmuka, &apos;adlun fiyya qada&apos;uka, as&apos;aluka bikulli ismin huwa laka, sammayta bihi nafsaka, aw &apos;allamtahu ahadan min khalqika, aw anzaltahu fi kitabika, aw ista&apos;tharta bihi fi &apos;ilmil-ghaybi &apos;indaka, an taj&apos;alal-Qur&apos;ana rabi&apos;a qalbi, wa nura sadri, wa jala&apos;a huzni, wa dhahaba hammi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je suis Ton serviteur, fils de Ton serviteur, fils de Ta servante. Mon toupet est dans Ta main. Ton jugement s&apos;accomplit sur moi. Ton décret à mon égard est juste. Je Te demande par chaque Nom qui T&apos;appartient, par lequel Tu T&apos;es nommé Toi-même, ou que Tu as enseigné à l&apos;une de Tes créatures, ou que Tu as révélé dans Ton Livre, ou que Tu as gardé dans la science de l&apos;Invisible auprès de Toi, de faire du Coran le printemps de mon coeur, la lumière de ma poitrine, la dissipation de ma tristesse et la fin de mon angoisse&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ahmad (3712), authentifié par al-Albani
                  </p>
                </div>

                <HadithCard
                  arabic="ما أصاب أحدا قط هم ولا حزن فقال اللهم إني عبدك... إلا أذهب الله همه وحزنه وأبدله مكانه فرحا"
                  text="Quiconque est touché par l'angoisse ou la tristesse et prononce cette invocation, Allah dissipera son angoisse et sa tristesse et les remplacera par la joie."
                  source="Rapporté par Ahmad (3712), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une richesse théologique
                  exceptionnelle. Elle commence par une affirmation de servitude
                  totale envers Allah : &laquo;&nbsp;Je suis Ton
                  serviteur&nbsp;&raquo;. Le croyant reconnaît que son destin est
                  entièrement entre les mains d&apos;Allah et que Ses décrets
                  sont justes, même lorsqu&apos;ils apportent de la douleur.
                  Cette acceptation n&apos;est pas de la résignation passive
                  mais une confiance lucide en la sagesse divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La partie la plus remarquable de cette doua est la demande
                  de faire du Coran &laquo;&nbsp;le printemps du coeur&nbsp;&raquo;
                  (rabi&apos;a qalbi). Tout comme le printemps redonne vie à la
                  terre après l&apos;hiver, le Coran revivifie le coeur après
                  la tristesse. La &laquo;&nbsp;lumière de la poitrine&nbsp;&raquo;
                  (nura sadri) dissipe les ténèbres de l&apos;affliction, tandis
                  que &laquo;&nbsp;la dissipation de la tristesse&nbsp;&raquo;
                  (jala&apos;a huzni) efface le chagrin comme on essuie un
                  miroir terni. Les compagnons demandèrent au Prophète :
                  &laquo;&nbsp;Ne devrions-nous pas apprendre ces
                  paroles&nbsp;?&nbsp;&raquo; Il répondit : &laquo;&nbsp;Bien sûr,
                  il convient à quiconque les entend de les apprendre.&nbsp;&raquo;
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
              {/* SECTION 3 : Doua de Younous */}
              {/* ============================================ */}
              <section id="doua-younous" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Younous contre l&apos;affliction et la détresse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus puissantes contre la tristesse
                  figure la doua du prophète Younous (Jonas, paix sur lui).
                  Englouti par un poisson géant et plongé dans les ténèbres de
                  la nuit, de la mer et du ventre de l&apos;animal, Younous se
                  trouvait dans une situation de détresse absolue. C&apos;est
                  dans ce contexte d&apos;affliction extrême qu&apos;il adressa
                  à Allah une invocation d&apos;une sincérité sans pareille.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <HadithCard
                  arabic="دعوة ذي النون إذ دعا وهو في بطن الحوت: لا إله إلا أنت سبحانك إني كنت من الظالمين، فإنه لم يدع بها رجل مسلم في شيء قط إلا استجاب الله له"
                  text="L'invocation de Dhoun-Noun (Younous) lorsqu'il invoqua dans le ventre du poisson : 'Il n'y a de divinité que Toi, gloire à Toi, j'étais certes parmi les injustes.' Aucun musulman n'invoque par cette formule pour quoi que ce soit sans qu'Allah ne l'exauce."
                  source="Rapporté par at-Tirmidhi (3505), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La puissance de cette invocation réside dans la combinaison
                  de trois éléments fondamentaux. Le tawhid
                  (&laquo;&nbsp;La ilaha illa Anta&nbsp;&raquo;) affirme
                  l&apos;unicité absolue d&apos;Allah comme seul recours.
                  La glorification (&laquo;&nbsp;Subhanaka&nbsp;&raquo;)
                  reconnaît la perfection divine, même dans l&apos;épreuve.
                  La reconnaissance des fautes (&laquo;&nbsp;Inni kuntu min
                  adh-dhalimin&nbsp;&raquo;) exprime une humilité sincère qui
                  ouvre les portes de la miséricorde. Pour la personne triste,
                  cette doua est un rappel que l&apos;épreuve peut être une
                  occasion de se rapprocher d&apos;Allah et d&apos;obtenir Son
                  pardon.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah répondit à l&apos;invocation de Younous en le libérant
                  du ventre du poisson et en le ramenant sur la terre ferme.
                  Le Coran dit : &laquo;&nbsp;Nous l&apos;avons sauvé de son
                  angoisse. C&apos;est ainsi que Nous sauvons les
                  croyants&nbsp;&raquo; (Coran, 21:88). Cette promesse divine
                  s&apos;étend à tout croyant qui, submergé par la tristesse
                  ou la détresse, invoque Allah avec la même sincérité que
                  Younous. La garantie prophétique (&laquo;&nbsp;aucun musulman
                  ne la récite sans être exaucé&nbsp;&raquo;) en fait une arme
                  spirituelle d&apos;une efficacité sans égale.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Le Coran comme guérison du coeur */}
              {/* ============================================ */}
              <section id="coran-guerison-coeur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Coran : guérison (shifaa) pour les coeurs affligés
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Allah décrit Son Livre comme une guérison complète pour
                  les maladies du coeur, y compris la tristesse et
                  l&apos;affliction. Le Coran dit : &laquo;&nbsp;Ô gens, une
                  exhortation vous est venue de votre Seigneur, une guérison
                  pour ce qui est dans les poitrines, un guide et une
                  miséricorde pour les croyants&nbsp;&raquo; (Coran, 10:57).
                  Cette dimension thérapeutique du Coran est un remède que
                  l&apos;islam prescrit à toute personne touchée par la
                  tristesse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs sourates sont particulièrement recommandées par les
                  savants pour apaiser le coeur triste. La sourate
                  <strong> Ad-Duha</strong> (93) fut révélée au Prophète (paix
                  et salut sur lui) après une période où la révélation s&apos;était
                  interrompue, provoquant en lui une grande tristesse. Allah le
                  rassure : &laquo;&nbsp;Ton Seigneur ne t&apos;a ni abandonné
                  ni détesté. La vie dernière t&apos;est certes meilleure que la
                  vie présente. Et ton Seigneur t&apos;accordera certes Ses
                  faveurs, et tu seras satisfait&nbsp;&raquo; (Coran, 93:3-5).
                  Ces versets sont un baume pour quiconque se sent abandonné ou
                  oublié par la miséricorde divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate <strong>Al-Inshirah</strong> (94) complète ce
                  message consolateur avec la promesse divine répétée :
                  &laquo;&nbsp;Certes, avec la difficulté vient la
                  facilité. Certes, avec la difficulté vient la
                  facilité&nbsp;&raquo; (Coran, 94:5-6). La répétition de
                  cette promesse souligne sa certitude absolue. Ibn
                  Mas&apos;ud (qu&apos;Allah l&apos;agrée) disait :
                  &laquo;&nbsp;Si la difficulté entrait dans un trou, la
                  facilité y entrerait pour l&apos;en faire
                  sortir&nbsp;&raquo;. Cette vision coranique transforme la
                  perception de l&apos;épreuve : la tristesse n&apos;est
                  jamais permanente, car la facilité lui est intrinsèquement
                  liée.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée symbolisant la guérison du coeur et le remède contre la tristesse"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa nunazzilu minal-Qur&apos;ani ma huwa shifa&apos;un wa rahmatun lil-mu&apos;minin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Nous faisons descendre du Coran ce qui est guérison et miséricorde pour les croyants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Isra (17:82)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas authentiques contre la tristesse */}
              {/* ============================================ */}
              <section id="douas-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques contre la tristesse et l&apos;angoisse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Outre la doua al-hamm wal-hazan et l&apos;invocation de Younous,
                  le Prophète (paix et salut sur lui) a enseigné plusieurs
                  invocations spécifiques pour se protéger contre la tristesse et
                  l&apos;angoisse. Voici les principales douas authentiques,
                  accompagnées de leur texte en arabe, de leur phonétique et de
                  leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de protection matin et soir contre la tristesse
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait régulièrement
                  cette invocation dans ses adhkar du matin et du soir pour
                  demander protection contre la tristesse et l&apos;angoisse.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika minal-hammi wal-hazan, wal-&apos;ajzi wal-kasal, wal-bukhli wal-jubn, wa dala&apos;id-dayni wa ghalabatir-rijal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre l&apos;angoisse et la tristesse, contre l&apos;incapacité et la paresse, contre l&apos;avarice et la lâcheté, contre le poids des dettes et la domination des hommes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6369)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua lors d&apos;une affliction ou d&apos;un malheur
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque le croyant est frappé par un malheur qui provoque de
                  la tristesse, le Prophète (paix et salut sur lui) a enseigné
                  cette parole qui combine l&apos;acceptation du décret divin
                  et l&apos;espoir d&apos;une compensation meilleure.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Inna lillahi wa inna ilayhi raji&apos;un, Allahumma&apos;jurni fi musibati wa akhlif li khayran minha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Certes nous appartenons à Allah et c&apos;est vers Lui que nous retournerons. Seigneur, récompense-moi dans mon malheur et accorde-moi quelque chose de meilleur en retour&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (918)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de remise de l&apos;affaire à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique exprime la confiance absolue en
                  Allah lorsque le coeur est accablé par la tristesse et que
                  les circonstances semblent sans issue.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbiyAllahu la ilaha illa Huwa, &apos;alayhi tawakkaltu wa Huwa Rabbul-&apos;arshil-&apos;adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah me suffit, il n&apos;y a de divinité que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate At-Tawba (9:129)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné de réciter cette
                  invocation sept fois le matin et sept fois le soir. Celui qui
                  la récite avec conviction verra Allah lui suffire contre tout
                  ce qui le préoccupe. Pour découvrir d&apos;autres invocations
                  contre l&apos;angoisse, consultez notre article sur la{" "}
                  <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre l&apos;angoisse et le stress</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Patience et espoir */}
              {/* ============================================ */}
              <section id="patience-espoir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Patience et espoir face à l&apos;épreuve de la tristesse
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La patience (sabr) et l&apos;espoir (raja&apos;) sont les
                  deux piliers du comportement islamique face à la tristesse.
                  Le Coran et la Sunna enseignent que toute épreuve est
                  temporaire et que la récompense de celui qui patiente est
                  immense auprès d&apos;Allah. Le croyant qui traverse une
                  période de tristesse ne doit jamais perdre espoir en la
                  miséricorde de son Seigneur.
                </p>

                <HadithCard
                  arabic="عجبا لأمر المؤمن إن أمره كله خير وليس ذاك لأحد إلا للمؤمن إن أصابته سراء شكر فكان خيرا له وإن أصابته ضراء صبر فكان خيرا له"
                  text="Que l'affaire du croyant est étonnante ! Tout est un bien pour lui, et cela n'est réservé qu'au croyant : s'il est touché par un bonheur, il remercie Allah et c'est un bien pour lui ; s'il est touché par un malheur, il patiente et c'est un bien pour lui."
                  source="Rapporté par Muslim (2999)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith transforme fondamentalement la perception de la
                  tristesse. Pour le croyant, même les moments les plus
                  douloureux contiennent un bien caché. La patience dans
                  l&apos;affliction efface les péchés, élève le rang spirituel
                  et rapproche de l&apos;agrément d&apos;Allah. Le Prophète
                  (paix et salut sur lui) a dit : &laquo;&nbsp;Aucune fatigue,
                  maladie, souci, tristesse, douleur ou angoisse n&apos;atteint
                  le musulman, même la piqûre d&apos;une épine, sans
                  qu&apos;Allah ne lui efface par cela une partie de ses
                  péchés&nbsp;&raquo; (al-Bukhari et Muslim).
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne jamais désespérer de la miséricorde d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran affirme : &laquo;&nbsp;Ne désespérez pas de la
                        miséricorde d&apos;Allah. Seuls les gens mécréants
                        désespèrent de la miséricorde d&apos;Allah&nbsp;&raquo;
                        (Coran, 12:87). Le désespoir est considéré comme un
                        péché majeur, car il implique un doute sur la capacité
                        d&apos;Allah à changer les situations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se rappeler que l&apos;épreuve est temporaire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        &laquo;&nbsp;Certes, avec la difficulté vient la
                        facilité&nbsp;&raquo; (Coran, 94:6). Cette promesse
                        divine est une certitude absolue. Aucune tristesse
                        n&apos;est éternelle, et chaque épreuve porte en elle
                        les germes de la délivrance. Le croyant qui garde cette
                        conviction trouve la force de persévérer.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Avoir une bonne opinion d&apos;Allah (husn adh-dhann)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a rapporté
                        qu&apos;Allah dit : &laquo;&nbsp;Je suis tel que Mon
                        serviteur pense de Moi&nbsp;&raquo; (al-Bukhari et
                        Muslim). Avoir une bonne opinion d&apos;Allah signifie
                        croire fermement qu&apos;Il souhaite le bien pour Ses
                        serviteurs et que chaque épreuve a une sagesse, même
                        si elle nous échappe sur le moment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier le dhikr et les invocations
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran affirme : &laquo;&nbsp;N&apos;est-ce point
                        par le rappel d&apos;Allah que les coeurs se
                        tranquillisent&nbsp;?&nbsp;&raquo; (Coran, 13:28). Le
                        dhikr (rappel d&apos;Allah) est le remède le plus direct
                        contre la tristesse. La répétition de formules comme
                        &laquo;&nbsp;SubhanAllah&nbsp;&raquo;,
                        &laquo;&nbsp;Alhamdulillah&nbsp;&raquo; et
                        &laquo;&nbsp;La ilaha illAllah&nbsp;&raquo; apaise le
                        coeur et le reconnecte à son Créateur.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour surmonter la tristesse au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se limite pas à des invocations : il propose
                  une approche globale qui combine la dimension spirituelle et
                  les actions concrètes pour retrouver la sérénité. Le Prophète
                  (paix et salut sur lui) a lui-même montré l&apos;exemple en
                  combinant la doua, l&apos;action et la confiance en Allah pour
                  traverser les moments difficiles.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La prière (salat) comme refuge
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) disait : &laquo;&nbsp;La
                      fraîcheur de mes yeux a été placée dans la
                      prière&nbsp;&raquo; (an-Nasa&apos;i). Lorsque quelque chose
                      le préoccupait, il se hâtait vers la prière. La salat est
                      un moment de connexion directe avec Allah qui apaise
                      profondément l&apos;âme triste.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La compagnie des gens pieux
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      S&apos;entourer de personnes pieuses et bienveillantes aide
                      à traverser les périodes de tristesse. Le Prophète a comparé
                      le bon compagnon au vendeur de musc : même si l&apos;on
                      n&apos;achète rien, on profite de la bonne odeur
                      (al-Bukhari et Muslim). L&apos;isolement aggrave la
                      tristesse.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;aumône (sadaqa) pour purifier le coeur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné que
                      l&apos;aumône éteint la colère du Seigneur et éloigne la
                      mauvaise mort (at-Tirmidhi). Donner aux autres détourne
                      l&apos;attention de sa propre souffrance et procure une
                      satisfaction intérieure qui apaise la tristesse.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le recours à la médecine si nécessaire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;islam encourage le recours aux soins médicaux en
                      complément des invocations. Le Prophète a dit :
                      &laquo;&nbsp;Allah n&apos;a pas fait descendre une maladie
                      sans avoir fait descendre un remède&nbsp;&raquo;
                      (al-Bukhari). En cas de tristesse persistante ou de
                      dépression, consulter un professionnel de santé est une
                      démarche conforme à la Sunna.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En définitive, le musulman face à la tristesse dispose
                  d&apos;un arsenal complet : les invocations prophétiques,
                  la lecture du Coran, la prière, le dhikr, la compagnie des
                  gens de bien, l&apos;aumône et le recours aux soins
                  médicaux si nécessaire. Cette approche équilibrée reflète
                  la sagesse de l&apos;islam qui ne sépare jamais la
                  spiritualité de l&apos;action concrète. Pour d&apos;autres
                  invocations dans les moments difficiles, consultez notre
                  article sur la{" "}
                  <Link href="/doua-moment-difficile-epreuve-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour les moments difficiles et les épreuves</Link>.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter les adhkar matin et soir :</strong>{" "}
                      les invocations prophétiques du matin et du soir
                      contiennent des protections spécifiques contre la
                      tristesse et l&apos;angoisse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Méditer sur les bienfaits d&apos;Allah :</strong>{" "}
                      la gratitude (shukr) est un antidote puissant contre la
                      tristesse. Dresser mentalement la liste des bienfaits
                      d&apos;Allah aide à relativiser les épreuves.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratiquer une activité physique :</strong>{" "}
                      le Prophète (paix et salut sur lui) encourageait
                      l&apos;activité physique (natation, tir à l&apos;arc,
                      équitation). Le mouvement libère le corps et l&apos;esprit
                      de la pesanteur de la tristesse.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour les moments difficiles et les épreuves"
                  description="Découvrez les invocations prophétiques pour traverser les épreuves de la vie avec patience et confiance en Allah."
                  href="/doua-moment-difficile-epreuve-islam"
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
                    href="/doua-angoisse-stress-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;angoisse et le stress
                  </Link>
                  <Link
                    href="/doua-moment-difficile-epreuve-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les moments difficiles
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
