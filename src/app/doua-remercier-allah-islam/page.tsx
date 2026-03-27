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
    "Doua pour remercier Allah en islam : invocations de gratitude (shukr)",
  description:
    "Découvrez les douas pour remercier Allah en islam : invocations authentiques en arabe avec phonétique et traduction, le shukr dans le Coran et la Sunna, al-hamdulillah, doua d'Ibrahim, sujud ash-shukr et bienfaits de la gratitude.",
  openGraph: {
    title:
      "Doua pour remercier Allah en islam : invocations de gratitude (shukr)",
    description:
      "Les invocations authentiques pour remercier Allah en islam : textes en arabe, phonétique, traduction et hadiths sur la gratitude (shukr) et al-hamdulillah.",
    url: "https://www.islamreligion.fr/doua-remercier-allah-islam",
    images: [
      {
        url: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-remercier-allah-islam",
  },
};

const tocItems = [
  { id: "shukr-islam", label: "Le shukr (gratitude) en islam" },
  { id: "al-hamdulillah", label: "Al-hamdulillah : la louange à Allah" },
  { id: "douas-remercier-allah", label: "Douas pour remercier Allah" },
  { id: "doua-ibrahim", label: "Doua d'Ibrahim : rabbi ij'alni muqim as-salah" },
  { id: "sujud-ash-shukr", label: "Le sujud ash-shukr (prosternation de gratitude)" },
  { id: "bienfaits-gratitude", label: "Les bienfaits de la gratitude en islam" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour remercier Allah en islam ?",
    answer:
      "Parmi les meilleures douas pour remercier Allah figure la formule « Al-hamdulillah » (la louange appartient à Allah), qui est la base de toute gratitude en islam. Le Prophète (paix et salut sur lui) récitait également : « Allahumma a&apos;inni &apos;ala dhikrika wa shukrika wa husni &apos;ibadatik » (Seigneur, aide-moi à T&apos;évoquer, à Te remercier et à T&apos;adorer de la meilleure façon). Cette doua est rapportée par Abu Dawud et an-Nasa&apos;i.",
  },
  {
    question: "Comment faire le sujud ash-shukr (prosternation de gratitude) ?",
    answer:
      "Le sujud ash-shukr consiste à se prosterner face à la qibla lorsqu&apos;on reçoit une bonne nouvelle ou un bienfait d&apos;Allah. Il se compose d&apos;une seule prosternation, sans wudu obligatoire selon certains savants (avis de l&apos;imam Ahmad), tandis que d&apos;autres exigent les ablutions (avis de l&apos;imam ash-Shafi&apos;i). On prononce « SubhanAllah » et on invoque Allah pour Le remercier, puis on relève la tête.",
  },
  {
    question: "Que dit le Coran sur la gratitude envers Allah ?",
    answer:
      "Le Coran mentionne la gratitude (shukr) à de nombreuses reprises. Le verset le plus célèbre est : « Si vous êtes reconnaissants, J&apos;augmenterai Mes bienfaits pour vous » (Ibrahim, 14:7). Allah y établit un lien direct entre la gratitude du serviteur et l&apos;augmentation des bienfaits. Le Coran rappelle aussi que peu de serviteurs sont véritablement reconnaissants (Saba, 34:13).",
  },
  {
    question: "Quelle est la différence entre shukr et hamd en islam ?",
    answer:
      "Le hamd (الحمد) est la louange d&apos;Allah pour Ses qualités et Ses attributs, qu&apos;on ait reçu un bienfait ou non. Le shukr (الشكر) est la reconnaissance spécifique pour un bienfait reçu. Le hamd est plus large que le shukr : on loue Allah parce qu&apos;Il est digne de louange en toute circonstance, tandis que le shukr est une réponse à un bienfait précis. Les deux notions se complètent dans la pratique du musulman.",
  },
  {
    question: "Peut-on remercier Allah en français ?",
    answer:
      "Oui, le musulman peut remercier Allah dans toute langue, y compris le français. Allah comprend toutes les langues et connaît ce que renferment les coeurs. Cependant, il est recommandé d&apos;apprendre les formules prophétiques en arabe (al-hamdulillah, SubhanAllah, etc.) car elles portent une valeur spirituelle particulière et sont des adhkar (évocations) récompensés.",
  },
  {
    question: "Combien de fois par jour doit-on remercier Allah ?",
    answer:
      "Il n&apos;y a pas de limite au nombre de fois où l&apos;on remercie Allah. Le Prophète (paix et salut sur lui) invoquait Allah et Le remerciait tout au long de la journée : au réveil, après les repas, après la prière, en voyant un bienfait. La formule « Al-hamdulillah » doit accompagner le musulman en permanence. Le Prophète priait la nuit jusqu&apos;à ce que ses pieds enflent, par reconnaissance envers Allah.",
  },
  {
    question: "Quels sont les signes d'un serviteur reconnaissant en islam ?",
    answer:
      "Un serviteur reconnaissant (shakir) se distingue par trois attitudes : la gratitude du coeur (reconnaître intérieurement que tout bienfait vient d&apos;Allah), la gratitude de la langue (prononcer al-hamdulillah et les adhkar) et la gratitude des membres (utiliser les bienfaits d&apos;Allah dans Son obéissance et non dans Sa désobéissance). Les savants considèrent que le vrai shukr englobe ces trois dimensions simultanément.",
  },
];

export default function DouaRemercierAllahIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-remercier-allah-islam/#article",
        headline:
          "Doua pour remercier Allah en islam : invocations de gratitude (shukr)",
        description:
          "Découvrez les douas pour remercier Allah en islam : invocations authentiques en arabe, hadiths sur la gratitude, al-hamdulillah, doua d'Ibrahim et sujud ash-shukr.",
        image: "/images/doua-mains-trait-fin-lumiere-subtile.jpg",
        datePublished: "2026-03-31",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-remercier-allah-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-remercier-allah-islam/#breadcrumb",
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
            name: "Doua pour remercier Allah",
            item: "https://www.islamreligion.fr/doua-remercier-allah-islam",
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
          title="Doua pour remercier Allah en islam : invocations de gratitude"
          subtitle="Les invocations authentiques pour exprimer la reconnaissance envers Allah, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
          imageAlt="Mains levées en doua pour remercier Allah avec lumière subtile symbolisant la gratitude en islam"
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
                <span className="text-foreground">Doua pour remercier Allah</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La gratitude (shukr) est un pilier de la foi en islam. Le
                  musulman remercie Allah à chaque instant par la formule
                  &laquo;&nbsp;al-hamdulillah&nbsp;&raquo;, par des invocations
                  prophétiques spécifiques et par le sujud ash-shukr
                  (prosternation de gratitude). Le Coran promet à celui qui est
                  reconnaissant une augmentation de bienfaits, tandis que
                  l&apos;ingratitude expose au châtiment. Le Prophète (paix et
                  salut sur lui) incarnait lui-même la gratitude en priant la
                  nuit jusqu&apos;à l&apos;épuisement, disant :
                  &laquo;&nbsp;Ne serais-je pas un serviteur reconnaissant
                  ?&nbsp;&raquo;
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le shukr (gratitude) en islam */}
              {/* ============================================ */}
              <section id="shukr-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le shukr (gratitude) en islam : un acte d&apos;adoration à part entière
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>shukr</strong> (شكر) désigne la
                  reconnaissance, la gratitude et le remerciement envers Allah
                  pour Ses bienfaits innombrables. En islam, le shukr n&apos;est
                  pas un simple sentiment intérieur : c&apos;est un acte
                  d&apos;adoration complet qui engage le coeur, la langue et les
                  membres du corps. Allah mentionne la gratitude plus de
                  soixante-dix fois dans le Coran, ce qui témoigne de son
                  importance considérable dans la vie du croyant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont défini trois dimensions de la
                  gratitude. La première est la <strong>gratitude du coeur</strong> :
                  reconnaître intérieurement que tout bienfait provient
                  exclusivement d&apos;Allah, sans rien attribuer aux causes
                  secondaires de manière indépendante. La deuxième est la{" "}
                  <strong>gratitude de la langue</strong> : exprimer verbalement
                  la reconnaissance par des formules comme al-hamdulillah, par
                  les <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link> et
                  par l&apos;évocation constante des bienfaits divins. La
                  troisième est la <strong>gratitude des membres</strong> :
                  utiliser chaque bienfait reçu dans l&apos;obéissance à Allah
                  et non dans Sa désobéissance.
                </p>

                <HadithCard
                  arabic="عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ، وَلَيْسَ ذَاكَ لِأَحَدٍ إِلَّا لِلْمُؤْمِنِ، إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ"
                  text="Comme l'affaire du croyant est étonnante ! Tout son sort est un bien, et cela n'est accordé à personne d'autre que le croyant. Si un bonheur l'atteint, il remercie (shukr) et c'est un bien pour lui. Et si un malheur le frappe, il patiente et c'est un bien pour lui."
                  source="Rapporté par Muslim (2999)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental établit que le croyant oscille entre deux
                  états : la gratitude dans l&apos;aisance et la patience dans
                  l&apos;épreuve. Dans les deux cas, il est gagnant.
                  L&apos;imam Ibn al-Qayyim (rahimahullah) expliquait que le
                  shukr et le sabr (patience) sont les deux ailes du croyant :
                  sans l&apos;une d&apos;elles, il ne peut s&apos;élever
                  spirituellement. La doua pour remercier Allah s&apos;inscrit
                  donc au coeur même de la foi musulmane.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran établit un lien direct et puissant entre la gratitude
                  et l&apos;augmentation des bienfaits. Allah dit :
                  &laquo;&nbsp;Si vous êtes reconnaissants, très certainement
                  J&apos;augmenterai Mes bienfaits pour vous. Mais si vous êtes
                  ingrats, Mon châtiment sera terrible&nbsp;&raquo; (Ibrahim,
                  14:7). Ce verset pose une équation spirituelle limpide : plus
                  le serviteur remercie Allah, plus les bienfaits se
                  multiplient. À l&apos;inverse, l&apos;ingratitude (kufr
                  an-ni&apos;ma) entraîne la diminution, voire la disparition
                  des faveurs divines.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains ouvertes en prière illustrant la gratitude et le remerciement envers Allah en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Al-hamdulillah */}
              {/* ============================================ */}
              <section id="al-hamdulillah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Al-hamdulillah : la formule de louange et de gratitude par excellence
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La formule <strong>al-hamdulillah</strong> (الحمد لله) signifie
                  &laquo;&nbsp;la louange appartient à Allah&nbsp;&raquo; ou
                  &laquo;&nbsp;toute louange revient à Allah&nbsp;&raquo;.
                  C&apos;est la première phrase de la sourate al-Fatiha, récitée
                  par chaque musulman au minimum dix-sept fois par jour dans ses
                  prières obligatoires. Elle constitue le fondement même de la
                  gratitude en islam et accompagne le croyant à chaque instant
                  de sa vie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) prononçait al-hamdulillah
                  dans de nombreuses circonstances : après avoir mangé, après
                  avoir bu, en se réveillant le matin, après avoir éternué, en
                  montant sur sa monture et à chaque fois qu&apos;un bienfait
                  lui parvenait. Cette habitude prophétique transforme chaque
                  moment du quotidien en occasion de remercier Allah et de
                  renforcer le lien avec Lui. Le musulman qui prononce
                  al-hamdulillah après{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">chaque prière</Link>{" "}
                  témoigne de sa reconnaissance pour la capacité même
                  d&apos;adorer son Seigneur.
                </p>

                <HadithCard
                  arabic="الْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ"
                  text="Al-hamdulillah remplit la balance (des bonnes actions)."
                  source="Rapporté par Muslim (223)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre la valeur immense de cette formule auprès
                  d&apos;Allah. Dire al-hamdulillah avec sincérité et conscience
                  remplit la balance des bonnes actions le Jour du Jugement.
                  L&apos;imam an-Nawawi commentait que cette récompense
                  extraordinaire s&apos;explique par le fait que la louange
                  d&apos;Allah englobe la reconnaissance de Sa seigneurie, de Sa
                  divinité et de la perfection de Ses noms et attributs. En une
                  seule formule, le serviteur reconnaît la grandeur absolue de
                  son Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il existe également des formules renforcées de louange que le
                  Prophète (paix et salut sur lui) utilisait dans des contextes
                  précis. Parmi elles : &laquo;&nbsp;Al-hamdulillahi
                  hamdan kathiran tayyiban mubarakan fih&nbsp;&raquo; (La
                  louange abondante, pure et bénie appartient à Allah). Un
                  bédouin prononça cette formule et le Prophète (paix et salut
                  sur lui) dit que douze anges se précipitèrent pour
                  l&apos;élever (rapporté par Muslim). Le simple fait
                  d&apos;enrichir sa louange avec des mots sincères multiplie
                  la récompense de manière considérable.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Après les repas :</strong> &laquo;&nbsp;Al-hamdulillahi
                      alladhi at&apos;amani hadha wa razaqanihi min ghayri hawlin
                      minni wa la quwwa&nbsp;&raquo; (Louange à Allah qui m&apos;a
                      nourri et m&apos;a accordé cela sans effort ni force de
                      ma part).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Au réveil :</strong> &laquo;&nbsp;Al-hamdulillahi
                      alladhi ahyana ba&apos;da ma amatana wa ilayhi
                      an-nushur&nbsp;&raquo; (Louange à Allah qui nous a redonné
                      la vie après nous avoir fait mourir, et c&apos;est vers Lui
                      la résurrection).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>En toute circonstance :</strong> &laquo;&nbsp;Al-hamdulillahi
                      &apos;ala kulli hal&nbsp;&raquo; (Louange à Allah en toute
                      situation), une formule que le Prophète utilisait même lors
                      d&apos;événements désagréables.
                    </span>
                  </li>
                </ul>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Douas pour remercier Allah */}
              {/* ============================================ */}
              <section id="douas-remercier-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques pour remercier Allah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran et la Sunna contiennent de nombreuses invocations par
                  lesquelles le serviteur exprime sa reconnaissance envers
                  Allah. Ces douas couvrent différentes situations : la
                  gratitude générale, le remerciement après un bienfait
                  spécifique et la demande d&apos;aide pour être reconnaissant.
                  Voici les principales invocations authentiques, avec leur
                  texte arabe, leur phonétique et leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander l&apos;aide d&apos;Allah dans la gratitude
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseigna cette invocation
                  à Mu&apos;adh ibn Jabal (qu&apos;Allah l&apos;agrée) en lui
                  recommandant de ne jamais la délaisser après chaque prière.
                  Elle témoigne du fait que même la capacité de remercier Allah
                  est un bienfait qui nécessite Son aide.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma a&apos;inni &apos;ala dhikrika wa shukrika wa husni &apos;ibadatik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, aide-moi à T&apos;évoquer, à Te remercier et à T&apos;adorer de la meilleure façon&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (1522) et an-Nasa&apos;i (1303)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de Moussa (paix sur lui) pour la gratitude
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Allah rapporte dans le Coran cette magnifique invocation de
                  Moussa (paix sur lui), qui demande à son Seigneur la capacité
                  d&apos;être reconnaissant pour Ses bienfaits. C&apos;est un
                  modèle de doua pour tout musulman qui aspire à exprimer
                  pleinement sa gratitude.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi awzi&apos;ni an ashkura ni&apos;mataka allati an&apos;amta &apos;alayya wa &apos;ala walidayya wa an a&apos;mala salihan tardahu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, inspire-moi pour que je Te rende grâce du bienfait dont Tu m&apos;as comblé ainsi que mes parents, et pour que j&apos;accomplisse une oeuvre bonne que Tu agréeras&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Ahqaf (46:15) et An-Naml (27:19)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de reconnaissance après un bienfait
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque le musulman constate un bienfait d&apos;Allah dans sa
                  vie, il est recommandé de prononcer cette invocation qui
                  attribue explicitement le mérite à Allah seul, reconnaissant
                  que rien ne provient de la force ou de la capacité du
                  serviteur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdulillahi alladhi bi ni&apos;matihi tatimmu as-salihat
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah, par la grâce de qui les bonnes oeuvres s&apos;accomplissent&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (3803) et al-Hakim
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua en cas de difficulté (gratitude malgré l&apos;épreuve)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait que le
                  croyant doit remercier Allah même dans l&apos;adversité, car
                  toute épreuve pourrait être pire. Cette invocation reflète la
                  maturité spirituelle de celui qui voit la miséricorde
                  d&apos;Allah jusque dans les difficultés. Le{" "}
                  <Link href="/doua-pardon-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">pardon d&apos;Allah (istighfar)</Link>{" "}
                  et la gratitude vont ainsi de pair dans l&apos;attitude du
                  croyant face aux épreuves.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdulillahi &apos;ala kulli hal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah en toute circonstance&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim et Ibn Majah
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua d'Ibrahim */}
              {/* ============================================ */}
              <section id="doua-ibrahim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua d&apos;Ibrahim : rabbi ij&apos;alni muqim as-salah
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les plus belles invocations de gratitude dans le Coran
                  figure celle du prophète Ibrahim (paix sur lui), l&apos;ami
                  intime d&apos;Allah (khalilullah). Après avoir traversé des
                  épreuves considérables &mdash; l&apos;exil, le sacrifice de
                  son fils, l&apos;abandon de sa famille dans le désert de La
                  Mecque &mdash; Ibrahim exprima sa reconnaissance envers Allah
                  par une doua d&apos;une profondeur remarquable.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ij&apos;alni muqima as-salati wa min dhurriyyati, Rabbana wa taqabbal du&apos;a
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais de moi quelqu&apos;un qui accomplit la prière ainsi que parmi ma descendance. Seigneur, exauce mon invocation&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ibrahim (14:40)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua est remarquable par son contenu : Ibrahim ne
                  demande pas la richesse, la santé ou le pouvoir. Il demande à
                  Allah de le maintenir dans la prière, lui et sa descendance.
                  C&apos;est l&apos;expression la plus élevée de la gratitude :
                  demander à Allah la capacité de continuer à L&apos;adorer. Les
                  savants expliquent que celui qui accomplit la salat avec
                  constance ne peut qu&apos;être reconnaissant, car la prière
                  est elle-même un acte de shukr.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le contexte de cette invocation ajoute à sa puissance.
                  Ibrahim (paix sur lui) venait de remercier Allah pour lui
                  avoir accordé Isma&apos;il et Is-haq dans sa vieillesse :
                  &laquo;&nbsp;Louange à Allah qui m&apos;a donné, malgré ma
                  vieillesse, Isma&apos;il et Is-haq. Mon Seigneur entend bien
                  les prières&nbsp;&raquo; (Ibrahim, 14:39). Puis il enchaîna
                  immédiatement avec la demande de la prière. Ce passage du
                  remerciement pour un bienfait passé à la demande d&apos;un
                  bienfait futur illustre le cycle vertueux du shukr : le
                  croyant remercie, puis demande davantage de guidance, ce qui
                  engendre encore plus de gratitude.
                </p>

                <HadithCard
                  arabic="أَفَلَا أَكُونُ عَبْدًا شَكُورًا"
                  text="Ne serais-je pas un serviteur reconnaissant ?"
                  source="Rapporté par al-Bukhari (1130) et Muslim (2819) — Parole du Prophète (paix et salut sur lui) lorsqu'on lui demanda pourquoi il priait autant la nuit alors qu'Allah lui avait pardonné tous ses péchés."
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est l&apos;un des plus puissants sur le thème de
                  la gratitude. Le Prophète (paix et salut sur lui) se tenait
                  debout en prière nocturne (qiyam al-layl) si longtemps que
                  ses pieds enflaient. Lorsque &apos;Aisha (qu&apos;Allah
                  l&apos;agrée) l&apos;interrogea sur cette pratique intense
                  alors qu&apos;il était déjà pardonné, sa réponse fut d&apos;une
                  simplicité bouleversante. Pour le Prophète, la gratitude
                  n&apos;était pas un mot : c&apos;était un mode de vie, un
                  engagement total du corps et de l&apos;âme envers Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation de gratitude sujud ash-shukr dans une mosquée illustrant le remerciement envers Allah"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Sujud ash-shukr */}
              {/* ============================================ */}
              <section id="sujud-ash-shukr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sujud ash-shukr : la prosternation de gratitude en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>sujud ash-shukr</strong> (سجود الشكر) est une
                  prosternation que le musulman accomplit en dehors de la prière
                  pour remercier Allah lorsqu&apos;un bienfait particulier lui
                  parvient ou lorsqu&apos;un malheur est écarté de lui.
                  C&apos;est l&apos;une des expressions physiques les plus
                  intenses de la gratitude en islam, car elle traduit la
                  soumission totale du serviteur face à la générosité de son
                  Seigneur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) pratiquait le sujud
                  ash-shukr régulièrement. Abu Bakra (qu&apos;Allah
                  l&apos;agrée) rapporte que lorsqu&apos;une bonne nouvelle
                  parvenait au Prophète ou qu&apos;il recevait une annonce
                  réjouissante, il se prosternait face à Allah en signe de
                  gratitude (rapporté par Abu Dawud et at-Tirmidhi). De même,
                  Ka&apos;b ibn Malik (qu&apos;Allah l&apos;agrée) se
                  prosterna lorsqu&apos;il apprit qu&apos;Allah avait accepté
                  son repentir après la bataille de Tabuk (rapporté par
                  al-Bukhari et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants divergent sur les conditions du sujud ash-shukr.
                  L&apos;imam Ahmad ibn Hanbal et Ibn Taymiyya considèrent
                  qu&apos;il est permis de le pratiquer sans ablutions (wudu)
                  ni orientation vers la qibla, car il s&apos;agit d&apos;un
                  acte spontané de reconnaissance. L&apos;imam ash-Shafi&apos;i,
                  quant à lui, exige les mêmes conditions que la prière
                  (purification et orientation). Dans la pratique, il est
                  préférable de se conformer aux conditions de la prière si les
                  circonstances le permettent, mais le sujud ash-shukr reste
                  valide dans l&apos;urgence du moment selon l&apos;avis le plus
                  souple.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Quand le pratiquer :</strong> à la réception
                      d&apos;une bonne nouvelle, la naissance d&apos;un enfant,
                      la réussite d&apos;un examen, la guérison d&apos;une
                      maladie ou lorsqu&apos;un mal est évité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Comment le faire :</strong> se prosterner une
                      seule fois, dire &laquo;&nbsp;SubhanAllah&nbsp;&raquo; et
                      remercier Allah par les formules de louange, puis relever
                      la tête. Il n&apos;y a pas de takbir d&apos;entrée ni de
                      taslim de sortie selon l&apos;avis majoritaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ce qu&apos;on dit en prosternation :</strong> les
                      formules habituelles du sujud (&laquo;&nbsp;Subhana
                      Rabbiyal A&apos;la&nbsp;&raquo;) auxquelles on ajoute des
                      invocations de gratitude libres.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Bienfaits de la gratitude */}
              {/* ============================================ */}
              <section id="bienfaits-gratitude" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les bienfaits de la gratitude envers Allah en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Pratiquer la gratitude envers Allah n&apos;est pas seulement
                  un devoir religieux : c&apos;est une source de bienfaits
                  spirituels, psychologiques et même matériels que le Coran et
                  la Sunna détaillent abondamment. Le musulman qui intègre le
                  shukr dans sa vie quotidienne constate des transformations
                  profondes dans sa relation avec Allah et dans son bien-être
                  général.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le premier bienfait, et le plus mentionné dans le Coran, est
                  l&apos;<strong>augmentation des bienfaits</strong>. Allah a
                  promis dans la sourate Ibrahim (14:7) que la gratitude entraîne
                  un surcroît de faveurs divines. Les savants expliquent que
                  cette augmentation touche tous les domaines : la santé, la
                  subsistance (rizq), la science, la famille et surtout la foi
                  (iman). Inversement, l&apos;ingratitude est une cause directe
                  de la disparition des bienfaits. L&apos;imam Ibn al-Qayyim
                  écrivait : &laquo;&nbsp;Les bienfaits sont des proies et la
                  gratitude est leur chaîne ; si tu ne les attaches pas par le
                  shukr, ils s&apos;enfuient.&nbsp;&raquo;
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le deuxième bienfait est la <strong>protection contre
                  le châtiment</strong>. Allah dit dans le Coran :
                  &laquo;&nbsp;Pourquoi Allah vous châtierait-Il si vous êtes
                  reconnaissants et croyants ?&nbsp;&raquo; (An-Nisa, 4:147).
                  Ce verset indique que la combinaison de la gratitude et de la
                  foi constitue un bouclier contre la punition divine. Le
                  serviteur reconnaissant attire la satisfaction d&apos;Allah,
                  tandis que l&apos;ingrat s&apos;expose à Sa colère.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le troisième bienfait est la <strong>sérénité du
                  coeur</strong>. Le musulman reconnaissant vit dans un état de
                  satisfaction intérieure (rida) qui le protège de l&apos;envie,
                  de la jalousie et de l&apos;amertume. Lorsqu&apos;il regarde
                  sa vie à travers le prisme de la gratitude, il voit les
                  bienfaits d&apos;Allah partout : dans sa santé, sa famille,
                  sa foi, sa subsistance et même dans les épreuves qui le
                  purifient. Cette perspective transforme radicalement le
                  rapport à l&apos;existence et génère une paix intérieure que
                  les biens matériels ne peuvent offrir. Le Prophète (paix et
                  salut sur lui) enseignait d&apos;ailleurs de regarder ceux
                  qui ont moins que soi dans les affaires mondaines, et ceux
                  qui ont plus dans les affaires religieuses, afin de maintenir
                  la flamme de la gratitude vivante.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le quatrième bienfait est l&apos;<strong>élévation
                  spirituelle</strong>. Allah place les serviteurs
                  reconnaissants dans une catégorie d&apos;élite, affirmant que
                  &laquo;&nbsp;peu de Mes serviteurs sont reconnaissants&nbsp;&raquo;
                  (Saba, 34:13). Être véritablement reconnaissant est un degré
                  élevé de la foi que peu atteignent. L&apos;imam ash-Shukri
                  disait que le rang du shakir (le reconnaissant) est supérieur
                  à celui du sabir (le patient) car le patient endure ce
                  qu&apos;il n&apos;aime pas, tandis que le reconnaissant
                  transforme chaque moment en occasion d&apos;adoration. La doua
                  pour remercier Allah et le{" "}
                  <Link href="/doua-pardon-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir (istighfar)</Link>{" "}
                  sont ainsi les deux fondements d&apos;une vie spirituelle
                  équilibrée.
                </p>
              </section>

              <SocialBanner />

              <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* ============================================ */}
              {/* Maillage interne */}
              {/* ============================================ */}
              <nav className="mt-16" aria-label="Articles connexes">
                <h2 className="text-2xl font-bold text-primary">
                  Poursuivez votre lecture
                </h2>
                <ul className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/doua-islam"
                      className="group flex items-center gap-3 rounded-xl border border-secondary/20 bg-accent p-4 transition-colors hover:border-secondary/40"
                    >
                      <span className="text-2xl">🤲</span>
                      <div>
                        <p className="font-semibold text-primary group-hover:underline">
                          Toutes les douas en islam
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          Retrouvez l&apos;ensemble des invocations authentiques tirées du Coran et de la Sunna.
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-pardon-islam"
                      className="group flex items-center gap-3 rounded-xl border border-secondary/20 bg-accent p-4 transition-colors hover:border-secondary/40"
                    >
                      <span className="text-2xl">🕊️</span>
                      <div>
                        <p className="font-semibold text-primary group-hover:underline">
                          Doua pour demander pardon à Allah
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          Les invocations d&apos;istighfar et de repentir pour obtenir la miséricorde d&apos;Allah.
                        </p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-apres-priere-islam"
                      className="group flex items-center gap-3 rounded-xl border border-secondary/20 bg-accent p-4 transition-colors hover:border-secondary/40"
                    >
                      <span className="text-2xl">🕌</span>
                      <div>
                        <p className="font-semibold text-primary group-hover:underline">
                          Doua après la prière en islam
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          Les adhkar et invocations à réciter après chaque salat selon la Sunna.
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
