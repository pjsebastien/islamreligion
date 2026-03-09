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
    "Doua khatm al-Coran : les invocations après avoir terminé le Coran",
  description:
    "Découvrez la doua khatm al-Coran : invocations authentiques à réciter après avoir terminé la lecture du Coran, en arabe avec phonétique et traduction. Mérite de la khatma, pratique de Anas ibn Malik et recommandations des savants.",
  openGraph: {
    title:
      "Doua khatm al-Coran : les invocations après avoir terminé le Coran",
    description:
      "Les invocations authentiques à réciter après la khatma du Coran : textes en arabe, phonétique, traduction et hadiths sur le mérite de terminer le Coran.",
    url: "https://www.islamreligion.fr/doua-khatm-coran-islam",
    images: [
      {
        url: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-khatm-coran-islam",
  },
};

const tocItems = [
  { id: "merite-khatma", label: "Le mérite de terminer le Coran" },
  { id: "definition-khatm", label: "Qu\u2019est-ce que la khatm al-Coran" },
  { id: "douas-apres-khatma", label: "Les douas après la khatma" },
  { id: "pratique-anas", label: "Anas ibn Malik et le rassemblement familial" },
  { id: "reprendre-fatiha", label: "Reprendre depuis sourate al-Fatiha" },
  { id: "moments-propices", label: "Moments propices pour la doua de khatma" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter après avoir terminé le Coran ?",
    answer:
      "Après avoir terminé la lecture du Coran, il est recommandé d&apos;invoquer Allah avec des douas personnelles et des formules rapportées par les Salaf. Parmi les plus connues : demander à Allah de nous faire bénéficier du Coran, de nous accorder Sa miséricorde et Son pardon, et de faire du Coran une lumière et un argument en notre faveur le Jour du Jugement. Certains savants recommandent également de réciter sourate al-Fatiha et le début de sourate al-Baqara juste après la khatma.",
  },
  {
    question: "Est-il authentique de faire une doua après la khatma du Coran ?",
    answer:
      "La pratique de faire une doua après la khatma du Coran est attestée par les compagnons et les Tabi&apos;in. Anas ibn Malik (qu&apos;Allah l&apos;agrée) rassemblait sa famille pour invoquer Allah lorsqu&apos;il terminait le Coran. Cette pratique (athar) est rapportée par ad-Darimi et considérée comme authentique par de nombreux savants. Bien qu&apos;il n&apos;existe pas de hadith marfu&apos; (attribué au Prophète) avec une formule précise, le principe de l&apos;invocation après la khatma fait l&apos;objet d&apos;un consensus quasi unanime.",
  },
  {
    question: "Combien de temps faut-il pour terminer le Coran ?",
    answer:
      "La durée pour terminer le Coran varie selon le rythme de lecture. Le Prophète (paix et salut sur lui) a recommandé de ne pas le terminer en moins de trois jours, et les savants recommandent une khatma par mois comme minimum. Pendant le Ramadan, de nombreux musulmans le terminent en 30 jours en lisant un juz&apos; (partie) par jour. Certains compagnons le terminaient en sept jours de manière régulière.",
  },
  {
    question: "Peut-on faire la doua de khatm al-Coran en groupe ?",
    answer:
      "Oui, faire la doua de khatm al-Coran en groupe est une pratique attestée. Anas ibn Malik (qu&apos;Allah l&apos;agrée) rassemblait les membres de sa famille pour cette occasion. De nombreux savants considèrent cette pratique comme recommandée (mustahabb), surtout pendant le Ramadan où la khatma est souvent réalisée lors des prières de Tarawih en congrégation.",
  },
  {
    question: "Faut-il recommencer le Coran directement après la khatma ?",
    answer:
      "Il est recommandé de ne pas laisser un long intervalle entre la fin du Coran et le début d&apos;une nouvelle lecture. Plusieurs savants conseillent de lire sourate al-Fatiha et le début de sourate al-Baqara immédiatement après avoir terminé sourate an-Nas, afin de montrer que le musulman ne se lasse jamais du Livre d&apos;Allah et que sa relation avec le Coran est continue.",
  },
  {
    question: "La doua est-elle exaucée au moment de la khatma ?",
    answer:
      "De nombreux savants affirment que le moment de la khatma est un moment où la doua est exaucée. Cette opinion est attribuée à Mujahid ibn Jabr, l&apos;un des grands Tabi&apos;in et élève d&apos;Ibn Abbas. Ad-Darimi rapporte cette parole dans ses Sunan. C&apos;est pourquoi les pieux prédécesseurs accordaient une grande importance à l&apos;invocation après avoir terminé le Coran.",
  },
  {
    question: "Peut-on faire la doua de khatma en français ?",
    answer:
      "Oui, la doua après la khatma peut être faite dans toute langue. L&apos;important est la sincérité du coeur et la présence spirituelle lors de l&apos;invocation. Cependant, il est recommandé de commencer par les formules arabes rapportées par les Salaf, puis de compléter par des invocations personnelles dans sa propre langue.",
  },
  {
    question: "Quelle est la différence entre khatma et tilawa ?",
    answer:
      "La tilawa désigne la récitation du Coran de manière générale, qu&apos;il s&apos;agisse de quelques versets ou de plusieurs sourates. La khatma (خَتْمَة) désigne spécifiquement le fait de terminer la lecture intégrale du Coran, du début de sourate al-Fatiha jusqu&apos;à la fin de sourate an-Nas. Chaque khatma complète est considérée comme un acte d&apos;adoration majeur qui mérite une célébration spirituelle par la doua.",
  },
];

export default function DouaKhatmCoranIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-khatm-coran-islam/#article",
        headline:
          "Doua khatm al-Coran : les invocations après avoir terminé le Coran",
        description:
          "Découvrez la doua khatm al-Coran : invocations authentiques à réciter après avoir terminé la lecture du Coran, mérite de la khatma et pratique des compagnons.",
        image: "/images/coran-ouvert-calligraphie-doree-lumiere.jpg",
        datePublished: "2026-03-24",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-khatm-coran-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-khatm-coran-islam/#breadcrumb",
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
            name: "Doua de la fin du Coran",
            item: "https://www.islamreligion.fr/doua-khatm-coran-islam",
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
          title="Doua khatm al-Coran : les invocations après avoir terminé le Coran"
          subtitle="Les invocations authentiques à réciter après la lecture complète du Coran, tirées de la pratique des compagnons et des Tabi'in. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
          imageAlt="Coran ouvert avec calligraphie dorée et lumière symbolisant la fin de la lecture complète du Coran en islam"
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
                <span className="text-foreground">Doua de la fin du Coran</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La doua khatm al-Coran est l&apos;invocation que le musulman
                  adresse à Allah après avoir terminé la lecture intégrale du
                  Coran. Cette pratique, attestée par les compagnons du Prophète
                  (paix et salut sur lui) et notamment Anas ibn Malik, est
                  considérée comme un moment béni où les invocations sont
                  exaucées. Après la khatma, le croyant demande à Allah de lui
                  faire bénéficier du Coran, de le lui faire mémoriser et de le
                  rendre un argument en sa faveur au Jour du Jugement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le mérite de terminer le Coran */}
              {/* ============================================ */}
              <section id="merite-khatma" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le mérite de terminer la lecture du Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Terminer la lecture du Coran en entier est l&apos;un des actes
                  d&apos;adoration les plus nobles en islam. Le musulman qui
                  parcourt le Livre d&apos;Allah du début à la fin accomplit un
                  voyage spirituel unique, passant par les récits des prophètes,
                  les prescriptions divines, les promesses du Paradis et les
                  avertissements contre le châtiment. Chaque lettre lue lui
                  rapporte une récompense multipliée par dix, comme
                  l&apos;enseigne le Prophète (paix et salut sur lui).
                </p>

                <HadithCard
                  arabic="من قرأ حرفا من كتاب الله فله به حسنة والحسنة بعشر أمثالها لا أقول ألم حرف ولكن ألف حرف ولام حرف وميم حرف"
                  text="Celui qui lit une lettre du Livre d'Allah obtient une bonne action, et la bonne action est multipliée par dix. Je ne dis pas que Alif-Lam-Mim est une lettre, mais Alif est une lettre, Lam est une lettre et Mim est une lettre."
                  source="Rapporté par at-Tirmidhi (2910), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Si chaque lettre vaut dix récompenses, on mesure
                  l&apos;immensité de la rétribution accordée à celui qui
                  termine les 6236 versets du Coran, composés de centaines de
                  milliers de lettres. La khatma représente donc un trésor
                  de hassanat (bonnes actions) que le musulman accumule
                  progressivement, jour après jour, jusqu&apos;à atteindre la
                  dernière sourate.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam ont toujours accordé une
                  importance particulière à la khatma du Coran. Imam an-Nawawi
                  mentionne dans son ouvrage al-Adhkar que les pieux
                  prédécesseurs (Salaf) considéraient la fin du Coran comme un
                  moment de joie et de célébration spirituelle. Ils
                  multipliaient les invocations à ce moment précis, convaincus
                  que la porte de l&apos;exaucement était grande ouverte après
                  avoir accompli cet acte d&apos;adoration majeur.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un acte récompensé lettre par lettre :</strong>{" "}
                      chaque caractère lu dans le Coran génère au minimum dix
                      hassanat, ce qui rend la khatma complète
                      incommensurablement précieuse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le Coran intercède pour son lecteur :</strong>{" "}
                      le Prophète (paix et salut sur lui) a enseigné que le
                      Coran viendra le Jour du Jugement comme intercesseur pour
                      ceux qui le lisaient régulièrement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une élévation en degrés :</strong> le rang du
                      croyant au Paradis sera déterminé par la quantité de
                      Coran qu&apos;il a mémorisée et récitée. On lui dira :
                      &laquo;&nbsp;Lis et monte&nbsp;&raquo;.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée symbolisant le mérite de la lecture complète du Coran"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Qu'est-ce que la khatm al-Coran */}
              {/* ============================================ */}
              <section id="definition-khatm" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que la khatm al-Coran (ختم القرآن)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme <strong>khatm</strong> (خَتْم) signifie
                  littéralement &laquo;&nbsp;sceller&nbsp;&raquo; ou
                  &laquo;&nbsp;terminer&nbsp;&raquo; en arabe. La{" "}
                  <strong>khatm al-Coran</strong> désigne donc le fait de
                  terminer la lecture intégrale du Coran, depuis le premier
                  verset de sourate al-Fatiha jusqu&apos;au dernier verset de
                  sourate an-Nas. On appelle aussi cet accomplissement une
                  &laquo;&nbsp;khatma&nbsp;&raquo; (خَتْمَة).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) révisait le Coran en
                  entier chaque année avec l&apos;ange Jibril (Gabriel) pendant
                  le mois de Ramadan. L&apos;année de sa mort, cette révision
                  eut lieu deux fois, ce qui est considéré comme un signe de
                  l&apos;imminence de son départ de ce monde. Cette pratique
                  prophétique a établi la tradition de la khatma annuelle, voire
                  mensuelle, chez les musulmans.
                </p>

                <HadithCard
                  arabic="اقرأ القرآن في شهر قلت إني أجد قوة قال فاقرأه في سبع ولا تزد على ذلك"
                  text="Lis le Coran en un mois. Je dis : Je me sens capable de plus. Il dit : Alors lis-le en sept jours, et pas moins que cela."
                  source="Rapporté par al-Bukhari (5054) et Muslim (1159)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith établit un cadre pour la fréquence de la khatma :
                  le minimum recommandé est une fois par mois, et le maximum
                  une fois tous les sept jours pour la lecture régulière. Le
                  Prophète (paix et salut sur lui) a déconseillé de terminer le
                  Coran en moins de trois jours, car cela empêcherait la
                  méditation (tadabbur) nécessaire à une lecture bénéfique.
                  L&apos;objectif n&apos;est pas la vitesse, mais la qualité de
                  la connexion avec la Parole d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les compagnons du Prophète avaient des habitudes variées. Ibn
                  Mas&apos;ud terminait le Coran chaque semaine. Uthman ibn
                  Affan le lisait parfois en une seule nuit dans ses prières
                  nocturnes. Pendant le Ramadan, de nombreux musulmans suivent
                  la division du Coran en 30 juz&apos; (parties), lisant un
                  juz&apos; par jour pour terminer le Coran à la fin du mois
                  béni.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Apprenez à lire le Coran avec tajwid"
                description="Maîtrisez la récitation du Coran avec les règles de tajwid pour une khatma de qualité. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Les douas après la khatma */}
              {/* ============================================ */}
              <section id="douas-apres-khatma" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas à réciter après avoir terminé le Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le moment qui suit la fin de la lecture du Coran est considéré
                  par les savants comme un moment privilégié pour
                  l&apos;invocation. Plusieurs formules ont été rapportées par
                  les compagnons et les Tabi&apos;in. Voici les principales
                  douas recommandées, accompagnées de leur texte arabe, de leur
                  phonétique et de leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Demander à Allah de faire bénéficier du Coran
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est parmi les plus récitées après la khatma.
                  Le croyant demande à Allah de faire du Coran une source de
                  bénédiction, de lumière et de guidance dans sa vie quotidienne.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ انْفَعْنِي بِالْقُرْآنِ الْعَظِيمِ وَاجْعَلْهُ لِي إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-nfa&apos;ni bil-Qur&apos;anil-&apos;adhim, waj&apos;alhu li imaman wa nuran wa hudan wa rahmah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais-moi bénéficier du Coran immense, et fais-en pour moi un imam, une lumière, une guidance et une miséricorde&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation rapportée par les Salaf
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Demander la mémorisation et la compréhension
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le musulman qui termine le Coran aspire à le mémoriser, à le
                  comprendre et à le mettre en pratique. Cette doua exprime ce
                  triple souhait devant Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ ذَكِّرْنِي مِنْهُ مَا نَسِيتُ وَعَلِّمْنِي مِنْهُ مَا جَهِلْتُ وَارْزُقْنِي تِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma dhakkirni minhu ma nasitu, wa &apos;allimni minhu ma jahiltu, warzuqni tilawatahu ana&apos;al-layli wa atrafa-nnahar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rappelle-moi ce que j&apos;en ai oublié, enseigne-moi ce que j&apos;en ignore, et accorde-moi de le réciter aux heures de la nuit et aux extrémités du jour&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation rapportée par les Salaf
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Faire du Coran un argument en sa faveur
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que le Coran
                  sera soit un argument en faveur du croyant, soit un argument
                  contre lui le Jour du Jugement. Cette doua demande à Allah de
                  placer le lecteur parmi ceux pour qui le Coran témoignera en
                  bien.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اجْعَلِ الْقُرْآنَ حُجَّةً لِي وَلَا تَجْعَلْهُ حُجَّةً عَلَيَّ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-j&apos;alil-Qur&apos;ana hujjatan li wa la taj&apos;alhu hujjatan &apos;alayya
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais du Coran un argument en ma faveur et ne le fais pas un argument contre moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation rapportée par les Salaf
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua pour le pardon et la miséricorde
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le moment de la khatma est propice pour demander le pardon
                  d&apos;Allah. Le lecteur du Coran reconnaît ses manquements et
                  implore la miséricorde divine après avoir médité sur les
                  versets du Livre sacré.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ ارْحَمْنِي بِالْقُرْآنِ وَاجْعَلْهُ لِي نُورًا وَبَرَاهِينَ وَأَجْرًا عَظِيمًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-rhamni bil-Qur&apos;an, waj&apos;alhu li nuran wa barahina wa ajran &apos;adhima
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-moi Ta miséricorde par le Coran, et fais-en pour moi une lumière, des preuves et une immense récompense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation rapportée par les Salaf
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de ces formules, les savants encouragent le musulman
                  à ajouter des invocations personnelles après la khatma : pour
                  soi-même, pour ses parents, pour la communauté musulmane, pour
                  demander la guidance et le raffermissement sur le droit chemin.
                  Ce moment de proximité avec Allah, après avoir parcouru
                  l&apos;intégralité de Sa parole, ne doit pas être gaspillé.
                  Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre page dédiée.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Anas ibn Malik */}
              {/* ============================================ */}
              <section id="pratique-anas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Anas ibn Malik et le rassemblement familial pour la doua
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;une des preuves les plus solides de la légitimité de la
                  doua après la khatma provient de la pratique du compagnon Anas
                  ibn Malik (qu&apos;Allah l&apos;agrée), le serviteur du
                  Prophète (paix et salut sur lui) pendant dix ans. Son
                  témoignage direct de la Sunna prophétique confère à sa pratique
                  une autorité particulière auprès des savants.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ad-Darimi rapporte dans ses Sunan qu&apos;Anas ibn Malik,
                  lorsqu&apos;il terminait la lecture du Coran,{" "}
                  <strong>rassemblait les membres de sa famille</strong> pour
                  invoquer Allah ensemble. Cette pratique montre que la khatma
                  n&apos;était pas considérée comme un acte individuel
                  uniquement, mais comme un événement spirituel qui méritait
                  d&apos;être partagé avec les proches. Le fait de réunir la
                  famille pour cette occasion transforme la doua en un acte
                  collectif d&apos;une grande portée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette pratique d&apos;Anas ibn Malik a été reprise par de
                  nombreux savants à travers les siècles. Al-Hakam ibn
                  &apos;Utayba, Mujahid ibn Jabr et d&apos;autres Tabi&apos;in
                  recommandaient la doua collective après la khatma. Imam Ahmad
                  ibn Hanbal mentionnait cette pratique comme étant établie
                  (ma&apos;thur) chez les Salaf. Cette unanimité des premiers
                  musulmans constitue un argument de poids en faveur de cette
                  tradition.
                </p>

                <HadithCard
                  arabic="كان أنس بن مالك إذا ختم القرآن جمع أهله ودعا"
                  text="Anas ibn Malik, lorsqu'il terminait le Coran, rassemblait sa famille et invoquait (Allah)."
                  source="Rapporté par ad-Darimi dans ses Sunan"
                />

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant le rassemblement familial pour la doua de khatm al-Coran"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les enseignements tirés de cette pratique sont multiples.
                  D&apos;abord, elle montre que les compagnons considéraient la
                  khatma comme un moment suffisamment important pour y associer
                  leurs proches. Ensuite, elle souligne la dimension communautaire
                  de la relation au Coran : sa lecture bénéficie à l&apos;individu,
                  mais sa célébration est partagée. Enfin, le fait qu&apos;Anas
                  choisissait spécifiquement ce moment pour la doua renforce
                  l&apos;idée que la fin du Coran est un instant où
                  l&apos;invocation est exaucée.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Reprendre depuis al-Fatiha */}
              {/* ============================================ */}
              <section id="reprendre-fatiha" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Reprendre la lecture depuis sourate al-Fatiha
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Une pratique recommandée par de nombreux savants consiste à
                  entamer une nouvelle lecture du Coran immédiatement après
                  avoir terminé la précédente. Concrètement, après avoir lu les
                  derniers versets de sourate an-Nas, le musulman récite sourate
                  al-Fatiha puis les premiers versets de sourate al-Baqara
                  avant de faire sa doua de khatma.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette recommandation repose sur une sagesse profonde : elle
                  symbolise le fait que le musulman ne se lasse jamais du Livre
                  d&apos;Allah. Sa relation avec le Coran est un cycle continu,
                  sans interruption ni pause prolongée. Chaque khatma achevée
                  est le début d&apos;une nouvelle khatma, dans un mouvement
                  perpétuel de lecture, de méditation et de mise en pratique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Kathir mentionne dans son tafsir que certains Salaf
                  récitaient les trois premiers versets de sourate al-Baqara
                  après la fin de sourate an-Nas. D&apos;autres se contentaient
                  de réciter sourate al-Fatiha seule. L&apos;objectif reste le
                  même : montrer à Allah que le serviteur ne s&apos;éloigne pas
                  de Son Livre, qu&apos;il le quitte d&apos;une main pour le
                  reprendre de l&apos;autre. Cette attitude reflète l&apos;amour
                  du Coran et le désir de rester constamment sous son ombre
                  protectrice.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Terminer sourate an-Nas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Achever la lecture du dernier verset de la dernière
                        sourate du Coran avec concentration et recueillement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter sourate al-Fatiha
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lire la Fatiha en entier pour amorcer immédiatement un
                        nouveau cycle de lecture, sans coupure avec le Coran.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Lire les premiers versets de sourate al-Baqara
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter au moins les cinq premiers versets de al-Baqara
                        pour marquer le début concret de la nouvelle khatma.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire la doua de khatma
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lever les mains et invoquer Allah avec les douas
                        mentionnées précédemment, en y ajoutant ses invocations
                        personnelles pour soi, sa famille et la oumma.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette séquence complète transforme la fin du Coran en un
                  nouveau départ spirituel. Le musulman termine sa khatma avec
                  gratitude, invoque Allah avec espoir, puis reprend sa lecture
                  avec détermination. C&apos;est un cercle vertueux qui maintient
                  le lien permanent entre le croyant et la Parole de son
                  Créateur. Pour ceux qui souhaitent approfondir leur pratique
                  coranique, découvrez les{" "}
                  <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas du Ramadan</Link>,
                  période par excellence de la khatma du Coran.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Moments propices */}
              {/* ============================================ */}
              <section id="moments-propices" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Moments propices pour achever la khatma et invoquer
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Bien que la khatma du Coran soit bénéfique en tout temps,
                  certains moments sont particulièrement recommandés pour
                  terminer la lecture et faire la doua qui l&apos;accompagne.
                  Combiner la bénédiction de la khatma avec les moments
                  d&apos;exaucement multiplie la portée de l&apos;invocation.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le dernier tiers de la nuit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Allah descend au ciel le plus bas durant le dernier tiers
                      de la nuit et dit : &laquo;&nbsp;Qui M&apos;invoque pour
                      que Je lui réponde ?&nbsp;&raquo; Terminer sa khatma à ce
                      moment, puis invoquer Allah, combine deux causes
                      d&apos;exaucement.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pendant le Ramadan
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Ramadan est le mois du Coran par excellence. La
                      majorité des musulmans terminent au moins une khatma
                      pendant ce mois béni. La{" "}
                      <Link href="/doua-nuit-destin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Nuit du Destin (Laylat al-Qadr)</Link>{" "}
                      est un moment particulièrement puissant pour la doua de
                      khatma.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le jour de Arafat
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le jour de Arafat (9 Dhul Hijja) est l&apos;un des jours
                      les plus bénis de l&apos;année. Certains savants
                      recommandent de planifier sa khatma pour qu&apos;elle
                      coïncide avec ce jour où les invocations sont exaucées.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le vendredi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le vendredi contient une heure durant laquelle aucune
                      invocation n&apos;est rejetée. Terminer sa khatma le
                      vendredi, puis faire la doua à l&apos;approche du Maghrib,
                      est une pratique recommandée par certains savants.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Mujahid ibn Jabr, l&apos;un des plus grands exégètes parmi
                  les Tabi&apos;in et élève d&apos;Ibn Abbas, affirmait que la
                  doua est exaucée au moment de la khatma. Cette parole, bien
                  qu&apos;elle ne soit pas un hadith prophétique, reflète la
                  compréhension des premiers musulmans et constitue un avis
                  respecté par les quatre écoles juridiques. L&apos;imam
                  ash-Shafi&apos;i pratiquait lui-même la doua après la khatma
                  et la recommandait à ses étudiants.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Planifier sa khatma :</strong> calculer à
                      l&apos;avance le rythme de lecture pour que la fin du
                      Coran coïncide avec un moment béni (Ramadan, vendredi,
                      dernier tiers de la nuit).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Préparer ses douas :</strong> noter à l&apos;avance
                      les invocations que l&apos;on souhaite adresser à Allah
                      après la khatma, pour ne rien oublier lors de ce moment
                      précieux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Inviter ses proches :</strong> suivre la pratique
                      d&apos;Anas ibn Malik en rassemblant sa famille pour
                      partager ce moment de spiritualité et d&apos;invocation
                      collective.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de la Nuit du Destin"
                  description="Découvrez les invocations à réciter pendant Laylat al-Qadr, la nuit la plus bénie de l&apos;année, idéale pour la khatma du Coran."
                  href="/doua-nuit-destin-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour réciter le Coran avec compréhension"
                description="Maîtrisez la langue du Coran pour comprendre chaque verset que vous récitez et vivre une khatma transformatrice. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-ramadan-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du Ramadan
                  </Link>
                  <Link
                    href="/doua-nuit-destin-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de la Nuit du Destin
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
