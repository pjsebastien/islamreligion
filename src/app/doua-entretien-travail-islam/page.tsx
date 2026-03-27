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
    "Doua pour un entretien ou travail en islam : invocations authentiques",
  description:
    "Découvrez les douas pour un entretien d&apos;embauche et le travail en islam : invocations en arabe avec phonétique et traduction, doua de Moussa (rabbi ishrah li sadri), doua istikhara, douas pour le rizq et la réussite professionnelle.",
  openGraph: {
    title:
      "Doua pour un entretien ou travail en islam : invocations authentiques",
    description:
      "Les invocations authentiques pour réussir un entretien d&apos;embauche et obtenir un travail béni en islam. Textes en arabe, phonétique et traduction française.",
    url: "https://www.islamreligion.fr/doua-entretien-travail-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-entretien-travail-islam",
  },
};

const tocItems = [
  { id: "islam-travail", label: "Le travail en islam : une forme d\u2019adoration" },
  { id: "doua-moussa", label: "Doua de Moussa : Rabbi ishrah li sadri" },
  { id: "douas-entretien", label: "Douas avant un entretien d\u2019embauche" },
  { id: "doua-istikhara", label: "Doua istikhara avant une décision professionnelle" },
  { id: "douas-rizq", label: "Douas pour le rizq et la subsistance" },
  { id: "douas-reussite-travail", label: "Douas pour la réussite au travail" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour le musulman actif" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua réciter avant un entretien d\u2019embauche ?",
    answer:
      "Avant un entretien d&apos;embauche, il est recommandé de réciter la doua de Moussa (paix sur lui) : « Rabbi ishrah li sadri, wa yassir li amri, wahlul \u2018uqdatan min lisani, yafqahu qawli » (Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche, dénoue le noeud de ma langue afin qu&apos;ils comprennent mes paroles). Cette invocation tirée du Coran (sourate Ta-Ha, 20:25-28) demande à Allah l&apos;aisance, la facilité et l&apos;éloquence, trois qualités essentielles pour un entretien.",
  },
  {
    question: "Peut-on faire une doua en français avant le travail ?",
    answer:
      "Oui, la doua peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et accepte les invocations sincères quelle que soit la langue utilisée. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe pour leur puissance spirituelle particulière, puis de formuler ses demandes personnelles dans la langue que l&apos;on maîtrise le mieux.",
  },
  {
    question: "Faut-il faire la prière de consultation (istikhara) avant un entretien ?",
    answer:
      "La prière de consultation (salat al-istikhara) est fortement recommandée avant toute décision importante, y compris un entretien d&apos;embauche ou un changement de poste. Elle consiste à prier deux rak&apos;at puis à réciter la doua d&apos;istikhara pour demander à Allah de guider vers le meilleur choix. Le Prophète (paix et salut sur lui) enseignait à ses compagnons l&apos;istikhara pour toute affaire, comme il leur enseignait une sourate du Coran.",
  },
  {
    question: "Quelle doua pour trouver un travail halal ?",
    answer:
      "Pour trouver un travail licite (halal), on peut réciter : « Allahumma ikfini bi halalika \u2018an haramik, wa aghnini bi fadlika \u2018amman siwak » (Seigneur, accorde-moi la suffisance par le licite plutôt que l&apos;illicite, et enrichis-moi par Ta grâce de sorte que je n&apos;aie besoin de personne d&apos;autre que Toi). Cette doua, rapportée par at-Tirmidhi, est particulièrement adaptée à la recherche d&apos;un emploi béni.",
  },
  {
    question: "Le rizq est-il prédéterminé en islam ?",
    answer:
      "Oui, le rizq (subsistance) de chaque individu est décrété par Allah avant même sa naissance. Cependant, cela ne signifie pas que le musulman doit rester passif. Le Prophète (paix et salut sur lui) a enseigné que la doua peut changer le destin, et qu&apos;il faut chercher activement sa subsistance tout en plaçant sa confiance en Allah (tawakkul). Le tawakkul consiste à fournir les efforts nécessaires puis à s&apos;en remettre à Allah pour le résultat.",
  },
  {
    question: "Quand réciter les douas pour le travail ?",
    answer:
      "Les meilleurs moments pour réciter les douas liées au travail sont : le matin après la prière du Fajr (moment où le Prophète a invoqué la baraka dans les débuts de journée), le dernier tiers de la nuit, lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, et le vendredi après la prière de l&apos;Asr. On peut aussi invoquer juste avant l&apos;entretien ou au début de la journée de travail.",
  },
  {
    question: "Existe-t-il une doua pour être augmenté ou promu au travail ?",
    answer:
      "Il n&apos;existe pas de doua spécifique pour une augmentation ou promotion, mais le musulman peut invoquer Allah pour élargir son rizq avec des invocations générales comme « Allahumma inni as&apos;aluka \u2018ilman nafi\u2018an, wa rizqan tayyiban, wa \u2018amalan mutaqabbalan » (Seigneur, je Te demande une science utile, une subsistance pure et des oeuvres acceptées). L&apos;essentiel est de fournir un travail excellent (itqan) et de s&apos;en remettre à Allah.",
  },
  {
    question: "Comment concilier tawakkul et recherche active d\u2019emploi ?",
    answer:
      "Le tawakkul (confiance en Allah) ne s&apos;oppose pas à la recherche active d&apos;emploi. Omar ibn al-Khattab a dit : « Attachez votre chameau, puis placez votre confiance en Allah. » Le musulman doit préparer son CV, postuler, se former et se préparer aux entretiens tout en invoquant Allah et en acceptant le résultat qu&apos;Il décide. C&apos;est l&apos;équilibre entre l&apos;effort humain et la confiance en la sagesse divine.",
  },
];

export default function DouaEntretienTravailIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-entretien-travail-islam/#article",
        headline:
          "Doua pour un entretien ou travail en islam : invocations authentiques",
        description:
          "Découvrez les douas pour un entretien d'embauche et le travail en islam : doua de Moussa, doua istikhara, douas pour le rizq et la réussite professionnelle.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-03-20",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-entretien-travail-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-entretien-travail-islam/#breadcrumb",
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
            name: "Doua pour un entretien",
            item: "https://www.islamreligion.fr/doua-entretien-travail-islam",
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
          title="Doua pour un entretien ou travail en islam : invocations authentiques"
          subtitle="Les invocations du Coran et de la Sunna pour réussir un entretien d&apos;embauche, obtenir un travail béni et demander le rizq à Allah. Textes en arabe, phonétique et traduction."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquée avec moucharabieh et lumière dorée symbolisant la bénédiction divine pour le travail en islam"
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
                <span className="text-foreground">Doua pour un entretien</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le musulman qui se prépare à un entretien d&apos;embauche ou
                  qui cherche un travail béni dispose de nombreuses invocations
                  authentiques issues du Coran et de la Sunna. La doua de Moussa
                  &laquo;&nbsp;Rabbi ishrah li sadri&nbsp;&raquo; (Seigneur,
                  ouvre-moi ma poitrine), la doua d&apos;istikhara pour les
                  décisions importantes et les invocations pour le rizq
                  (subsistance) sont autant d&apos;outils spirituels qui
                  accompagnent l&apos;effort concret. En islam, chercher un
                  travail licite est un acte d&apos;adoration, et invoquer Allah
                  pour y réussir est une sunna recommandée.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le travail en islam */}
              {/* ============================================ */}
              <section id="islam-travail" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le travail en islam : une forme d&apos;adoration
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, le travail n&apos;est pas simplement un moyen de
                  gagner sa vie : c&apos;est une véritable forme
                  d&apos;adoration lorsqu&apos;il est accompli avec une
                  intention sincère et dans le respect des règles divines. Le
                  Prophète (paix et salut sur lui) a valorisé le travail manuel
                  et intellectuel, enseignant que le meilleur revenu est celui
                  que l&apos;on gagne par l&apos;effort de ses propres mains.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran encourage les croyants à parcourir la terre et à
                  chercher la subsistance qu&apos;Allah a mise à leur
                  disposition : &laquo;&nbsp;Lorsque la prière est achevée,
                  dispersez-vous sur la terre et recherchez la grâce
                  d&apos;Allah&nbsp;&raquo; (Coran, Al-Jumu&apos;a, 62:10). Ce
                  verset montre clairement que la quête du travail est non
                  seulement permise mais encouragée par la révélation divine.
                  Le musulman qui cherche un emploi pour subvenir aux besoins
                  de sa famille accomplit un acte méritoire auprès d&apos;Allah.
                </p>

                <HadithCard
                  arabic="ما أكل أحد طعاما قط خيرا من أن يأكل من عمل يده وإن نبي الله داود عليه السلام كان يأكل من عمل يده"
                  text="Personne n'a jamais mangé de nourriture meilleure que celle gagnée par le travail de ses propres mains. Et le prophète Dawud (paix sur lui) mangeait du fruit de son travail."
                  source="Rapporté par al-Bukhari (2072)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette valorisation du travail s&apos;accompagne d&apos;une
                  exigence fondamentale : l&apos;excellence (itqan). Le
                  Prophète (paix et salut sur lui) a enseigné :
                  &laquo;&nbsp;Allah aime que lorsque l&apos;un de vous
                  accomplit un travail, il le fasse avec
                  excellence&nbsp;&raquo; (rapporté par al-Bayhaqi). Ainsi, le
                  musulman en entretien d&apos;embauche ne se contente pas de
                  réciter des douas : il se prépare minutieusement, travaille
                  ses compétences et présente la meilleure version de lui-même,
                  tout en plaçant sa confiance en Allah pour le résultat.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le tawakkul n&apos;exclut pas l&apos;effort :</strong>{" "}
                      le musulman prépare son entretien avec sérieux puis
                      s&apos;en remet à Allah pour le résultat.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chercher un travail halal :</strong> le revenu
                      licite est une obligation en islam, et Allah bénit celui
                      qui refuse le haram même dans les moments difficiles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;intention transforme le travail en adoration :</strong>{" "}
                      celui qui travaille pour nourrir sa famille, aider les
                      autres et contribuer au bien commun récolte des
                      récompenses divines pour chaque effort fourni.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant la doua avant un entretien de travail en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua de Moussa */}
              {/* ============================================ */}
              <section id="doua-moussa" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de Moussa : Rabbi ishrah li sadri
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua de Moussa (paix sur lui) est sans doute
                  l&apos;invocation la plus adaptée avant un entretien
                  d&apos;embauche ou toute situation professionnelle importante.
                  Lorsque Allah ordonna à Moussa d&apos;aller confronter
                  Pharaon, le tyran le plus puissant de son époque, Moussa
                  demanda à son Seigneur des qualités précises pour accomplir
                  cette mission redoutable.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ishrah li sadri, wa yassir li amri, wahlul &apos;uqdatan min lisani, yafqahu qawli
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, ouvre-moi ma poitrine, facilite-moi ma tâche, et dénoue le noeud de ma langue afin qu&apos;ils comprennent mes paroles&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ta-Ha (20:25-28)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation contient quatre demandes essentielles,
                  chacune directement applicable à la situation d&apos;un
                  entretien d&apos;embauche. Premièrement,
                  &laquo;&nbsp;ouvre-moi ma poitrine&nbsp;&raquo; (ishrah li
                  sadri) demande l&apos;apaisement du stress et de
                  l&apos;anxiété, cette sérénité intérieure qui permet
                  d&apos;aborder une situation difficile avec calme et
                  confiance. Deuxièmement, &laquo;&nbsp;facilite-moi ma
                  tâche&nbsp;&raquo; (yassir li amri) implore Allah de rendre
                  les choses aisées et de lever les obstacles. Troisièmement,
                  &laquo;&nbsp;dénoue le noeud de ma langue&nbsp;&raquo;
                  (wahlul &apos;uqdatan min lisani) demande l&apos;éloquence et
                  la clarté d&apos;expression, qualités indispensables face à
                  un recruteur. Quatrièmement, &laquo;&nbsp;afin qu&apos;ils
                  comprennent mes paroles&nbsp;&raquo; (yafqahu qawli) vise à
                  ce que le message soit correctement reçu et compris par
                  l&apos;interlocuteur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette doua avant toute
                  prise de parole importante : entretien d&apos;embauche,
                  présentation professionnelle, réunion, négociation ou examen
                  oral. Sa puissance réside dans le fait qu&apos;elle couvre à
                  la fois l&apos;état intérieur (la poitrine ouverte), les
                  circonstances extérieures (la facilitation de la tâche) et le
                  moyen d&apos;expression (la langue déliée). C&apos;est une
                  doua complète qui adresse toutes les dimensions de la réussite
                  professionnelle.
                </p>

                <HadithCard
                  arabic="اللهم لا سهل إلا ما جعلته سهلا وأنت تجعل الحزن إذا شئت سهلا"
                  text="Ô Allah, rien n'est facile sauf ce que Tu as rendu facile, et Tu rends le difficile facile si Tu le veux."
                  source="Rapporté par Ibn Hibban (974), authentifié par al-Albani"
                />
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Douas avant un entretien */}
              {/* ============================================ */}
              <section id="douas-entretien" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas à réciter avant un entretien d&apos;embauche
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la doua de Moussa, plusieurs invocations
                  prophétiques sont particulièrement adaptées au contexte
                  d&apos;un entretien d&apos;embauche. Elles permettent de
                  confier son affaire à Allah, de demander Sa guidance et
                  d&apos;attirer la baraka (bénédiction) sur cette démarche
                  professionnelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua en sortant de chez soi
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Avant de partir pour un entretien, le Prophète (paix et salut
                  sur lui) enseignait cette invocation à réciter en sortant de
                  chez soi, qui place le musulman sous la protection divine dès
                  le début de sa démarche.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah, tawakkaltu &apos;alAllah, wa la hawla wa la quwwata illa billah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, je place ma confiance en Allah, et il n&apos;y a de force ni de puissance qu&apos;en Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3426), Abu Dawud (5095)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour demander la facilité
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est idéale pour demander à Allah de rendre
                  l&apos;entretien facile et de lever tout obstacle qui pourrait
                  se dresser devant le candidat. Elle exprime une remise totale
                  à la volonté divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahlan, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahla
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, rien n&apos;est facile sauf ce que Tu as rendu facile, et Tu rends le difficile facile si Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour confier son affaire à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Inspirée du verset coranique, cette invocation permet au
                  musulman de remettre entièrement le résultat de son entretien
                  entre les mains d&apos;Allah, en acceptant d&apos;avance Sa
                  décision avec sérénité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa ufawwidu amri ilAllahi innAllaha basirun bil-&apos;ibad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et je remets mon sort à Allah. Allah est certes Clairvoyant sur Ses serviteurs&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ghafir (40:44)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois invocations, combinées à la doua de Moussa de la
                  section précédente, constituent un arsenal spirituel complet
                  pour aborder un entretien d&apos;embauche avec confiance et
                  sérénité. Le musulman les récite avec présence du coeur,
                  sachant que le résultat appartient à Allah et que tout ce qui
                  arrive est le meilleur décret divin. Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua istikhara */}
              {/* ============================================ */}
              <section id="doua-istikhara" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua istikhara avant une décision professionnelle
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La prière de consultation (salat al-istikhara) est l&apos;un
                  des trésors de la Sunna que le musulman devrait utiliser avant
                  toute décision professionnelle importante : accepter ou
                  refuser un poste, changer d&apos;entreprise, se lancer dans
                  un projet, ou même se présenter à un entretien. Le Prophète
                  (paix et salut sur lui) l&apos;enseignait à ses compagnons
                  pour toute affaire, petite ou grande.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La salat al-istikhara consiste à accomplir deux rak&apos;at
                  (unités de prière) en dehors des prières obligatoires, puis à
                  réciter la doua d&apos;istikhara dans laquelle on demande à
                  Allah de guider vers la meilleure option. Cette prière
                  n&apos;apporte pas nécessairement un rêve ou un signe
                  spectaculaire : la guidance divine peut se manifester par une
                  facilitation des choses, un sentiment de paix intérieure, ou
                  au contraire par la fermeture de portes qui éloignent du
                  mauvais choix.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni astakhiruka bi &apos;ilmika, wa astaqdiruka bi qudratika, wa as&apos;aluka min fadlika al-&apos;adhim, fa innaka taqdiru wa la aqdiru, wa ta&apos;lamu wa la a&apos;lamu, wa Anta &apos;allamul-ghuyub
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je Te consulte par Ta science, je Te demande de me donner le pouvoir par Ta puissance, et je Te demande de Ton immense grâce. Car Tu es capable et je ne suis pas capable, Tu sais et je ne sais pas, et Tu es le Connaisseur des choses invisibles&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1162)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La beauté de l&apos;istikhara réside dans son enseignement
                  profond : le musulman reconnaît qu&apos;il ne possède pas la
                  connaissance de l&apos;invisible et qu&apos;un emploi qui
                  semble idéal peut s&apos;avérer néfaste, tandis qu&apos;un
                  poste moins attrayant peut être source de bénédictions
                  insoupçonnées. En confiant sa décision à Allah, le croyant
                  se libère de l&apos;anxiété du choix et avance avec la
                  certitude que le meilleur lui sera accordé. Pour en savoir
                  plus, consultez notre article détaillé sur la{" "}
                  <Link href="/doua-istikhara-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua istikhara en islam</Link>.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les invocations pour le travail et la réussite professionnelle"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas pour le rizq */}
              {/* ============================================ */}
              <section id="douas-rizq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas pour le rizq et la subsistance
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le concept de rizq en islam dépasse la simple notion de
                  salaire ou de revenu. Le rizq englobe toute forme de
                  subsistance qu&apos;Allah accorde à Ses serviteurs : la
                  nourriture, la santé, la famille, le savoir, la foi et, bien
                  sûr, les moyens matériels. Le Coran affirme que le rizq de
                  chaque créature est garanti par Allah :
                  &laquo;&nbsp;Il n&apos;y a point de créature sur terre dont
                  la subsistance n&apos;incombe à Allah&nbsp;&raquo; (Coran,
                  Hud, 11:6).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour un rizq halal et suffisant
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation, rapportée par at-Tirmidhi, est
                  particulièrement précieuse pour celui qui cherche un emploi
                  licite. Elle demande à Allah de pourvoir aux besoins du
                  serviteur par des moyens halal, lui évitant ainsi de tomber
                  dans le haram par nécessité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ikfini bi halalika &apos;an haramik, wa aghnini bi fadlika &apos;amman siwak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, accorde-moi la suffisance par le licite plutôt que l&apos;illicite, et enrichis-moi par Ta grâce de sorte que je n&apos;aie besoin de personne d&apos;autre que Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3563)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour une science utile et un rizq pur
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait cette invocation
                  chaque matin, combinant la demande de science, de
                  subsistance pure et d&apos;oeuvres acceptées. Elle est
                  parfaitement adaptée au contexte professionnel car elle lie
                  la compétence, le revenu et la dimension spirituelle du
                  travail.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an, wa rizqan tayyiban, wa &apos;amalan mutaqabbalan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je Te demande une science utile, une subsistance pure et des oeuvres acceptées&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (925)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants de l&apos;islam mentionnent plusieurs moyens
                  d&apos;attirer le rizq : la piété (taqwa), le istighfar
                  (demande de pardon), le maintien des liens de parenté
                  (silat ar-rahim), la confiance en Allah (tawakkul) et la
                  gratitude (shukr). Le Coran affirme :
                  &laquo;&nbsp;Quiconque craint Allah, Il lui donnera une issue
                  favorable et lui accordera ses dons par des moyens
                  insoupçonnés&nbsp;&raquo; (Coran, At-Talaq, 65:2-3). Ainsi,
                  la quête du rizq n&apos;est pas seulement une démarche
                  matérielle : c&apos;est un chemin spirituel qui demande au
                  croyant d&apos;améliorer sa relation avec Allah pour voir
                  ses portes s&apos;ouvrir.
                </p>

                <HadithCard
                  arabic="من لزم الاستغفار جعل الله له من كل ضيق مخرجا ومن كل هم فرجا ورزقه من حيث لا يحتسب"
                  text="Celui qui s'attache au istighfar (demande de pardon), Allah lui accordera une issue pour chaque difficulté, un soulagement pour chaque souci, et lui donnera sa subsistance par des voies insoupçonnées."
                  source="Rapporté par Abu Dawud (1518), Ibn Majah (3819)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas pour la réussite au travail */}
              {/* ============================================ */}
              <section id="douas-reussite-travail" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas pour la réussite et la baraka au travail
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Une fois l&apos;emploi obtenu, le musulman continue
                  d&apos;invoquer Allah pour demander la baraka (bénédiction)
                  dans son travail, la réussite dans ses projets et la
                  protection contre les épreuves professionnelles. La doua ne
                  se limite pas à la recherche d&apos;emploi : elle accompagne
                  le croyant tout au long de sa carrière.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Commencer par Bismillah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que toute
                        action commencée sans la mention du nom d&apos;Allah est
                        privée de bénédiction. Dire &laquo;&nbsp;Bismillah&nbsp;&raquo;
                        avant chaque tâche professionnelle attire la baraka sur
                        l&apos;ensemble du travail accompli.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;invocation du matin pour la baraka
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a invoqué Allah en
                        disant : &laquo;&nbsp;Ô Allah, bénis ma communauté dans
                        ses matinées&nbsp;&raquo; (rapporté par at-Tirmidhi).
                        Commencer sa journée de travail tôt, après la prière du
                        Fajr, est un moyen d&apos;attirer cette bénédiction
                        matinale sur ses efforts professionnels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Viser l&apos;excellence (itqan) comme adoration
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;itqan (excellence) dans le travail est une forme
                        d&apos;adoration en islam. Le musulman accomplit ses
                        tâches avec le meilleur de ses capacités, non seulement
                        pour satisfaire son employeur, mais pour plaire à Allah
                        qui observe chaque effort. Cette intention transforme
                        le travail quotidien en acte de dévotion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer après chaque prière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les moments qui suivent les prières obligatoires sont
                        des instants privilégiés pour la doua. Le musulman peut
                        profiter de la prière du Dhuhr (en milieu de journée)
                        pour demander à Allah de bénir son travail, de faciliter
                        ses projets et de le protéger contre les difficultés
                        professionnelles. Découvrez aussi nos{" "}
                        <Link href="/doua-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour la réussite en islam</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La baraka dans le travail ne se mesure pas uniquement au
                  montant du salaire ou au prestige du poste. Elle se manifeste
                  par la satisfaction intérieure, l&apos;harmonie avec les
                  collègues, la capacité à concilier vie professionnelle et
                  pratique religieuse, et surtout par le sentiment que chaque
                  journée de travail est un pas de plus vers la satisfaction
                  d&apos;Allah. Le musulman qui accomplit son travail avec
                  itqan et intention sincère récolte des récompenses dans ce
                  monde et dans l&apos;au-delà.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour le musulman en recherche d&apos;emploi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam enseigne un équilibre parfait entre la
                  spiritualité et l&apos;action concrète. Le musulman en
                  recherche d&apos;emploi ne se contente pas de réciter des
                  douas : il combine l&apos;invocation avec une préparation
                  rigoureuse et des démarches actives. Voici les conseils
                  pratiques tirés de la sagesse islamique pour maximiser ses
                  chances de réussite.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Se préparer avec excellence
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Préparer son CV, s&apos;entraîner aux questions
                      d&apos;entretien, se renseigner sur l&apos;entreprise :
                      cette rigueur fait partie du tawakkul. Le Prophète (paix
                      et salut sur lui) a dit :
                      &laquo;&nbsp;Attache ta chamelle puis place ta confiance
                      en Allah&nbsp;&raquo;. La préparation est la
                      &laquo;&nbsp;chamelle&nbsp;&raquo; du candidat.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Prier le Fajr et invoquer tôt
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La bénédiction du matin est un trésor prophétique. Le
                      musulman qui prie le Fajr à l&apos;heure et commence ses
                      démarches tôt bénéficie de la baraka matinale invoquée
                      par le Prophète pour sa communauté. Les premières heures
                      de la journée sont les plus productives et les plus
                      bénies.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Multiplier le istighfar
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La demande de pardon (istighfar) est l&apos;une des clés
                      du rizq mentionnées dans le Coran. Le prophète Nuh (paix
                      sur lui) a dit à son peuple :
                      &laquo;&nbsp;Demandez pardon à votre Seigneur, Il vous
                      enverra du ciel des pluies abondantes et vous accordera
                      des biens et des enfants&nbsp;&raquo; (Coran, 71:10-12).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Accepter le décret divin
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si l&apos;entretien ne débouche pas sur une embauche, le
                      musulman accepte le qadr (décret divin) avec patience.
                      Ce refus peut être une protection d&apos;Allah contre un
                      travail qui n&apos;aurait pas été bénéfique. La confiance
                      en la sagesse divine transforme chaque échec apparent en
                      une étape vers le meilleur.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maintenir les liens de parenté :</strong>{" "}
                      le Prophète (paix et salut sur lui) a enseigné que
                      maintenir les liens familiaux (silat ar-rahim) élargit le
                      rizq et prolonge la vie. Ce conseil spirituel a des
                      retombées concrètes sur la carrière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Donner la sadaqa :</strong>{" "}
                      l&apos;aumône ne diminue pas les biens mais les augmente.
                      Donner, même peu, en période de recherche d&apos;emploi
                      est un acte de confiance en Allah qui attire Sa
                      générosité. Pour des invocations complémentaires, voir
                      notre article sur la{" "}
                      <Link href="/doua-examen-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour la réussite aux examens</Link>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se former continuellement :</strong>{" "}
                      l&apos;islam valorise la quête du savoir à tout âge. Le
                      musulman en recherche d&apos;emploi investit dans ses
                      compétences, car Allah aide celui qui fait des efforts
                      pour s&apos;améliorer.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour la réussite en islam"
                  description="Découvrez toutes les invocations authentiques pour réussir dans vos projets, études et vie professionnelle."
                  href="/doua-reussite-islam"
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
                    href="/doua-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour la réussite
                  </Link>
                  <Link
                    href="/doua-examen-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les examens
                  </Link>
                  <Link
                    href="/doua-istikhara-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua istikhara
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
