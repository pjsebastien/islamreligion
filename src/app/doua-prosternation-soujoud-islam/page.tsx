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
    "Doua de la prosternation (soujoud) en islam : invocations authentiques",
  description:
    "Découvrez les douas de la prosternation (soujoud) en islam : Subhana Rabbiya al-A&apos;la, invocations authentiques en arabe avec phonétique et traduction, sujud ash-shukr, sujud at-tilawah et hadiths sur la proximité avec Allah.",
  openGraph: {
    title:
      "Doua de la prosternation (soujoud) en islam : invocations authentiques",
    description:
      "Les invocations authentiques de la prosternation en islam : textes en arabe, phonétique, traduction et hadiths. Le moment où le serviteur est le plus proche d&apos;Allah.",
    url: "https://www.islamreligion.fr/doua-prosternation-soujoud-islam",
    images: [
      {
        url: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-prosternation-soujoud-islam",
  },
};

const tocItems = [
  { id: "importance-soujoud", label: "L&apos;importance du soujoud en islam" },
  { id: "subhana-rabbiya", label: "Subhana Rabbiya al-A&apos;la : le dhikr obligatoire" },
  { id: "douas-prosternation", label: "Douas authentiques dans la prosternation" },
  { id: "plus-proche-allah", label: "Le plus proche d&apos;Allah dans le soujoud" },
  { id: "sujud-shukr", label: "Le sujud ash-shukr (prosternation de gratitude)" },
  { id: "sujud-tilawah", label: "Le sujud at-tilawah (prosternation de récitation)" },
  { id: "conseils-soujoud", label: "Conseils pour parfaire son soujoud" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de la prosternation (soujoud) en islam ?",
    answer:
      "La doua principale de la prosternation est « Subhana Rabbiya al-A&apos;la » (Gloire à mon Seigneur le Très-Haut), à répéter au minimum trois fois. Le Prophète (paix et salut sur lui) ajoutait également d&apos;autres invocations comme « Subhanaka Allahumma Rabbana wa bihamdika, Allahumma ighfir li » (Gloire à Toi, ô Allah notre Seigneur, par Ta louange. Ô Allah, pardonne-moi).",
  },
  {
    question: "Peut-on faire des douas personnelles pendant le soujoud ?",
    answer:
      "Oui, le Prophète (paix et salut sur lui) a encouragé les musulmans à multiplier les invocations pendant la prosternation. Il a dit : « Le serviteur est le plus proche de son Seigneur lorsqu&apos;il est en prosternation, alors multipliez-y les invocations » (Muslim). Après le dhikr obligatoire, on peut invoquer Allah dans toute langue pour ses besoins personnels.",
  },
  {
    question: "Combien de fois faut-il dire Subhana Rabbiya al-A'la ?",
    answer:
      "Le minimum est de le dire une fois, mais la Sunna recommande de le répéter au moins trois fois. Le Prophète (paix et salut sur lui) le disait trois fois ou davantage. Certains savants rapportent qu&apos;il le répétait parfois jusqu&apos;à dix fois dans les prières nocturnes (qiyam al-layl).",
  },
  {
    question: "Qu'est-ce que le sujud ash-shukr ?",
    answer:
      "Le sujud ash-shukr (prosternation de gratitude) est une prosternation effectuée en dehors de la prière pour remercier Allah d&apos;un bienfait reçu ou d&apos;un malheur écarté. Le Prophète (paix et salut sur lui) et ses compagnons la pratiquaient lorsqu&apos;ils recevaient une bonne nouvelle. Elle se fait face à la qibla si possible, avec le takbir, et on y dit « Subhana Rabbiya al-A&apos;la » et des douas de remerciement.",
  },
  {
    question: "Qu'est-ce que le sujud at-tilawah ?",
    answer:
      "Le sujud at-tilawah est une prosternation effectuée lors de la récitation ou l&apos;écoute de certains versets du Coran contenant un signe de prosternation. Il y a 15 endroits dans le Coran où cette prosternation est prescrite. On y dit « Subhana Rabbiya al-A&apos;la » et on peut ajouter : « Sajada wajhi lilladhi khalaqahu wa shaqqa sam&apos;ahu wa basarahu » (Mon visage se prosterne devant Celui qui l&apos;a créé et lui a donné l&apos;ouïe et la vue).",
  },
  {
    question: "Pourquoi le serviteur est-il le plus proche d'Allah en prosternation ?",
    answer:
      "Le Prophète (paix et salut sur lui) a dit : « Le moment où le serviteur est le plus proche de son Seigneur est lorsqu&apos;il est en prosternation » (Muslim). Les savants expliquent que c&apos;est parce que le soujoud représente le sommet de l&apos;humilité : le croyant pose la partie la plus noble de son corps (le visage) sur le sol, manifestant une soumission totale à Allah. Cette humilité extrême attire la proximité et la miséricorde divine.",
  },
  {
    question: "Faut-il les ablutions pour le sujud ash-shukr ?",
    answer:
      "Les savants divergent sur cette question. La majorité des hanbalites et l&apos;imam ash-Shafi&apos;i considèrent que les ablutions sont requises car le sujud ash-shukr est assimilé à une prière. L&apos;avis de certains hanbalites et d&apos;Ibn Taymiyyah est que les ablutions ne sont pas obligatoires pour le sujud ash-shukr, car ce n&apos;est pas une prière au sens strict. L&apos;avis le plus prudent est de faire ses ablutions si possible.",
  },
  {
    question: "Quelles sont les parties du corps qui doivent toucher le sol en soujoud ?",
    answer:
      "Le Prophète (paix et salut sur lui) a dit : « Il m&apos;a été ordonné de me prosterner sur sept os : le front (et il a indiqué le nez), les deux mains, les deux genoux et les extrémités des deux pieds » (al-Bukhari et Muslim). Ces sept membres doivent tous toucher le sol pour que la prosternation soit valide selon la majorité des savants.",
  },
];

export default function DouaProsternationSoujoudIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-prosternation-soujoud-islam/#article",
        headline:
          "Doua de la prosternation (soujoud) en islam : invocations authentiques",
        description:
          "Découvrez les douas de la prosternation (soujoud) en islam : invocations authentiques en arabe, phonétique, traduction, sujud ash-shukr, sujud at-tilawah et hadiths.",
        image: "/images/prosternation-sujud-priere-islam-mosquee.jpg",
        datePublished: "2026-04-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-prosternation-soujoud-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-prosternation-soujoud-islam/#breadcrumb",
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
            name: "Doua de la prosternation (soujoud)",
            item: "https://www.islamreligion.fr/doua-prosternation-soujoud-islam",
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
          title="Doua de la prosternation (soujoud) en islam : invocations authentiques"
          subtitle="Les invocations à réciter durant le soujoud, tirées du Coran et de la Sunna. Le moment où le croyant est le plus proche de son Seigneur."
          imageSrc="/images/prosternation-sujud-priere-islam-mosquee.jpg"
          imageAlt="Prosternation sujud lors de la prière en islam dans une mosquée illustrant la proximité avec Allah"
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
                <span className="text-foreground">Doua de la prosternation (soujoud)</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La prosternation (soujoud ou sajda) est le pilier le plus noble de
                  la prière en islam. C&apos;est le moment où le serviteur est le
                  plus proche d&apos;Allah, comme l&apos;a affirmé le Prophète (paix
                  et salut sur lui). Pendant le soujoud, le croyant glorifie son
                  Seigneur par le dhikr &laquo;&nbsp;Subhana Rabbiya
                  al-A&apos;la&nbsp;&raquo; et peut multiplier les invocations
                  personnelles. Cet article rassemble les douas authentiques de la
                  prosternation, du sujud ash-shukr et du sujud at-tilawah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance du soujoud */}
              {/* ============================================ */}
              <section id="importance-soujoud" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance du soujoud en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le soujoud (سجود), également appelé sajda, est l&apos;acte de
                  prosternation durant lequel le croyant pose son front, son nez,
                  ses deux mains, ses deux genoux et les extrémités de ses pieds
                  sur le sol. Cet acte constitue le sommet de l&apos;humilité et de
                  la soumission à Allah. C&apos;est dans cette position que le
                  musulman atteint le degré ultime de proximité avec son Créateur,
                  car il place la partie la plus noble de son corps — le visage — au
                  niveau le plus bas, en signe de dévotion totale.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne la prosternation à de nombreuses reprises et
                  en fait un signe distinctif des croyants sincères. Allah dit :
                  &laquo;&nbsp;Leur signe est sur leurs visages, à cause de la
                  trace de la prosternation&nbsp;&raquo; (Coran, 48:29). Cette
                  marque, qu&apos;elle soit physique ou spirituelle, symbolise
                  l&apos;attachement du croyant à son Seigneur et la régularité de
                  sa prière. Les prophètes, les anges et l&apos;ensemble de la
                  création se prosternent devant Allah, faisant du soujoud un acte
                  d&apos;adoration universel qui transcende le temps et l&apos;espace.
                </p>

                <HadithCard
                  arabic="أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ فَأَكْثِرُوا الدُّعَاءَ"
                  text="Le moment où le serviteur est le plus proche de son Seigneur est lorsqu'il est en prosternation. Multipliez-y donc les invocations."
                  source="Rapporté par Muslim (482)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental établit le lien entre le soujoud et
                  l&apos;invocation. Le Prophète (paix et salut sur lui) ne se
                  contente pas de décrire la proximité divine durant la
                  prosternation : il ordonne d&apos;en profiter pour multiplier les
                  douas. C&apos;est pourquoi les savants de l&apos;islam ont
                  toujours insisté sur l&apos;importance de prolonger le soujoud
                  et d&apos;y formuler ses demandes les plus chères, car
                  c&apos;est un moment privilégié où la porte de l&apos;exaucement
                  est grande ouverte.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le soujoud dans la prière :</strong>{" "}
                      chaque rak&apos;a contient deux prosternations, ce qui
                      représente au minimum 34 soujoud par jour pour les cinq
                      prières obligatoires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chemin vers le Paradis :</strong>{" "}
                      le Prophète (paix et salut sur lui) a dit à Rabi&apos;a ibn
                      Ka&apos;b, qui demandait sa compagnie au Paradis :
                      &laquo;&nbsp;Aide-moi en multipliant les
                      prosternations&nbsp;&raquo; (Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Élévation des degrés :</strong>{" "}
                      chaque prosternation élève le croyant d&apos;un degré
                      auprès d&apos;Allah et efface un péché, comme l&apos;a
                      enseigné le Prophète (paix et salut sur lui) dans un hadith
                      rapporté par Muslim.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Fidèle en prosternation soujoud lors de la prière en islam dans une mosquée"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Subhana Rabbiya al-A'la */}
              {/* ============================================ */}
              <section id="subhana-rabbiya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Subhana Rabbiya al-A&apos;la : le dhikr de la prosternation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le dhikr principal de la prosternation est la formule
                  &laquo;&nbsp;Subhana Rabbiya al-A&apos;la&nbsp;&raquo;, qui
                  signifie &laquo;&nbsp;Gloire à mon Seigneur le
                  Très-Haut&nbsp;&raquo;. Cette glorification est le coeur même
                  du soujoud et constitue le fondement sur lequel s&apos;ajoutent
                  ensuite les invocations supplémentaires. Le Prophète (paix et
                  salut sur lui) a enseigné cette formule lorsque fut révélé le
                  verset : &laquo;&nbsp;Glorifie le nom de ton Seigneur le
                  Très-Haut&nbsp;&raquo; (Coran, 87:1).
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua n°1 : Subhana Rabbiya al-A&apos;la
                  </h3>
                  <p className="mt-4 text-center text-2xl leading-loose text-foreground" dir="rtl">
                    سُبْحَانَ رَبِّيَ الْأَعْلَى
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Subhana Rabbiya al-A&apos;la
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Gloire à mon Seigneur le Très-Haut.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    À répéter au minimum 3 fois — Rapporté par Abu Dawud (869), at-Tirmidhi (262)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants expliquent que cette formule est parfaitement
                  adaptée à la position du soujoud. Alors que le corps du croyant
                  est dans la position la plus basse, sa langue glorifie Allah par
                  Son nom le plus élevé (al-A&apos;la). Ce contraste entre la
                  position physique d&apos;humilité et la glorification de
                  l&apos;Élévation divine crée une harmonie spirituelle profonde.
                  Le roukou&apos; (inclinaison) est accompagné de
                  &laquo;&nbsp;Subhana Rabbiya al-Adhim&nbsp;&raquo; (Gloire à
                  mon Seigneur l&apos;Immense), tandis que le soujoud, position
                  encore plus basse, est accompagné de la glorification du
                  Très-Haut.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua n°2 : Glorification et demande de pardon
                  </h3>
                  <p className="mt-4 text-center text-2xl leading-loose text-foreground" dir="rtl">
                    سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Subhanaka Allahumma Rabbana wa bihamdika, Allahumma ighfir li
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Gloire à Toi, ô Allah notre Seigneur, et par Ta louange. Ô Allah, pardonne-moi.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (794) et Muslim (484)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  &apos;Aisha (qu&apos;Allah soit satisfait d&apos;elle) a rapporté
                  que le Prophète (paix et salut sur lui) répétait fréquemment
                  cette invocation dans son roukou&apos; et son soujoud,
                  appliquant ainsi le commandement coranique :
                  &laquo;&nbsp;Glorifie par la louange de ton Seigneur et
                  demande-Lui pardon&nbsp;&raquo; (Coran, 110:3). Cette doua
                  combine deux dimensions essentielles : la glorification
                  d&apos;Allah et la demande de pardon, faisant du soujoud un
                  moment de purification spirituelle intense.
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
              {/* SECTION 3 : Douas authentiques dans le soujoud */}
              {/* ============================================ */}
              <section id="douas-prosternation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques à réciter dans la prosternation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà du dhikr obligatoire, le Prophète (paix et salut sur
                  lui) nous a enseigné plusieurs invocations magnifiques à
                  réciter pendant le soujoud. Ces douas couvrent la demande de
                  pardon, la protection, la guidance et la glorification
                  d&apos;Allah. Chacune d&apos;elles enrichit la prosternation et
                  transforme ce pilier de la prière en un véritable dialogue
                  intime avec le Créateur.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua n°3 : Demande de pardon complète
                  </h3>
                  <p className="mt-4 text-center text-2xl leading-loose text-foreground" dir="rtl">
                    اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Allahumma ighfir li dhanbi kullahu, diqqahu wa jillahu, wa awwalahu wa akhirahu, wa &apos;alaniyatahu wa sirrahu
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Ô Allah, pardonne-moi tous mes péchés : les petits et les grands, les premiers et les derniers, ceux commis en public et ceux commis en secret.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Rapporté par Muslim (483)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une richesse remarquable. Le
                  Prophète (paix et salut sur lui) demandait le pardon pour
                  l&apos;ensemble de ses péchés en les détaillant par catégories :
                  petits et grands, anciens et récents, publics et secrets. Cette
                  exhaustivité enseigne au croyant à ne rien omettre dans sa
                  demande de pardon et à profiter du soujoud — moment de
                  proximité maximale avec Allah — pour se purifier de tous ses
                  manquements.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua n°4 : Glorification détaillée
                  </h3>
                  <p className="mt-4 text-center text-2xl leading-loose text-foreground" dir="rtl">
                    سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Subbuhun Quddusun Rabbul-mala&apos;ikati war-Ruh
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Très Glorifié, Très Saint, Seigneur des anges et de l&apos;Esprit (Jibril).&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Rapporté par Muslim (487)
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua n°5 : Soumission totale dans le soujoud
                  </h3>
                  <p className="mt-4 text-center text-2xl leading-loose text-foreground" dir="rtl">
                    اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ وَلَكَ أَسْلَمْتُ سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Allahumma laka sajadtu wa bika amantu wa laka aslamtu. Sajada wajhi lilladhi khalaqahu wa sawwarahu wa shaqqa sam&apos;ahu wa basarahu. Tabaraka Allahu ahsanul-khaliqin.
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Ô Allah, c&apos;est devant Toi que je me prosterne, en Toi que je crois et à Toi que je me soumets. Mon visage se prosterne devant Celui qui l&apos;a créé, lui a donné sa forme, et lui a ouvert son ouïe et sa vue. Béni soit Allah, le Meilleur des créateurs.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Rapporté par Muslim (771)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette magnifique invocation est particulièrement recommandée
                  dans les prières surérogatoires et le qiyam al-layl (prière
                  nocturne). Elle résume toute la philosophie du soujoud :
                  reconnaître la seigneurie d&apos;Allah, Lui remettre tout son
                  être et méditer sur Ses bienfaits. Le croyant qui récite cette
                  doua avec compréhension et méditation transforme sa
                  prosternation en une expérience spirituelle profonde qui
                  renforce son lien avec Allah.
                </p>

                <HadithCard
                  arabic="إِذَا سَجَدَ أَحَدُكُمْ فَلَا يَبْرُكْ كَمَا يَبْرُكُ الْبَعِيرُ وَلْيَضَعْ يَدَيْهِ قَبْلَ رُكْبَتَيْهِ"
                  text="Lorsque l'un d'entre vous se prosterne, qu'il ne s'agenouille pas comme le chameau. Qu'il pose ses mains avant ses genoux."
                  source="Rapporté par Abu Dawud (840), an-Nasa'i (1091)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Plus proche d'Allah */}
              {/* ============================================ */}
              <section id="plus-proche-allah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le plus proche d&apos;Allah : la sagesse du soujoud
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le hadith &laquo;&nbsp;le serviteur est le plus proche de son
                  Seigneur lorsqu&apos;il est en prosternation&nbsp;&raquo;
                  (Muslim) contient une sagesse profonde que les savants de
                  l&apos;islam ont longuement méditée. Comment se fait-il que le
                  moment où le corps est le plus bas soit celui où l&apos;âme est
                  le plus élevée ? Cette apparente contradiction recèle l&apos;un
                  des enseignements les plus beaux de la spiritualité islamique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Ibn al-Qayyim explique que lorsque le croyant
                  abaisse son corps et pose son visage au sol, son coeur
                  s&apos;élève vers Allah. Plus l&apos;humilité extérieure est
                  grande, plus l&apos;élévation intérieure est puissante.
                  C&apos;est un principe fondamental de la spiritualité islamique :
                  celui qui s&apos;abaisse devant Allah est élevé, et celui qui
                  s&apos;enorgueillit est rabaissé. Le soujoud est donc la
                  manifestation la plus pure de l&apos;uboodiyyah (servitude
                  envers Allah), qui est le plus haut degré que l&apos;être humain
                  puisse atteindre.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière et prosternation dans une mosquée illustrant la proximité avec Allah"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  C&apos;est pour cette raison que le Prophète (paix et salut sur
                  lui) a ordonné de &laquo;&nbsp;multiplier les
                  invocations&nbsp;&raquo; dans cette position. Puisque le
                  serviteur est au plus proche de son Seigneur, ses douas sont
                  plus susceptibles d&apos;être exaucées. Les savants recommandent
                  donc de ne pas se presser dans le soujoud, mais de le prolonger
                  autant que possible, en alternant entre le dhikr
                  (&laquo;&nbsp;Subhana Rabbiya al-A&apos;la&nbsp;&raquo;), les
                  douas prophétiques mentionnées dans cet article et les
                  invocations personnelles dans sa propre langue.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prolonger le soujoud :</strong>{" "}
                      ne pas se précipiter est essentiel. Le Prophète (paix et
                      salut sur lui) prolongeait parfois sa prosternation au point
                      que les compagnons pensaient qu&apos;il avait oublié.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La présence du coeur :</strong>{" "}
                      le soujoud sans khushu&apos; (concentration spirituelle) perd
                      une grande partie de sa valeur. Le croyant doit méditer sur
                      le sens de sa position et la grandeur de Celui devant qui il
                      se prosterne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer pour l&apos;essentiel :</strong>{" "}
                      profiter de ce moment privilégié pour demander à Allah ce
                      qui nous tient le plus à coeur : la guidance, le pardon,
                      la protection et le bien de ce monde et de l&apos;au-delà.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Sujud ash-shukr */}
              {/* ============================================ */}
              <section id="sujud-shukr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sujud ash-shukr : la prosternation de gratitude
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le sujud ash-shukr (سجود الشكر) est une prosternation
                  effectuée en dehors de la prière pour exprimer sa gratitude
                  envers Allah lorsqu&apos;on reçoit un bienfait particulier ou
                  qu&apos;un malheur est écarté. Cette pratique est attestée par
                  la Sunna du Prophète (paix et salut sur lui) et de ses
                  compagnons, qui se prosternaient spontanément en signe de
                  remerciement lorsqu&apos;une bonne nouvelle leur parvenait.
                </p>

                <HadithCard
                  arabic="كَانَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا جَاءَهُ أَمْرٌ يَسُرُّهُ خَرَّ سَاجِدًا شُكْرًا لِلَّهِ تَعَالَى"
                  text="Lorsqu'une chose réjouissante arrivait au Prophète (paix et salut sur lui), il se prosternait en signe de gratitude envers Allah le Très-Haut."
                  source="Rapporté par Abu Dawud (2774), at-Tirmidhi (1578)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Abu Bakr (qu&apos;Allah soit satisfait de lui) se prosterna
                  lorsqu&apos;il apprit la mort de Musaylima le menteur.
                  Ka&apos;b ibn Malik se prosterna lorsqu&apos;il reçut la bonne
                  nouvelle de l&apos;acceptation de son repentir par Allah, relatée
                  dans la sourate at-Tawba. &apos;Ali ibn Abi Talib se prosterna
                  lorsqu&apos;il découvrit Dhul-Thudayya parmi les khawarij, confirmant
                  la prophétie du Messager d&apos;Allah. Ces exemples montrent que
                  le sujud ash-shukr est une pratique profondément enracinée dans
                  la tradition prophétique.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Quand effectuer le sujud ash-shukr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lors de la réception d&apos;une bonne nouvelle
                        (naissance, guérison, réussite), lors de
                        l&apos;éloignement d&apos;un malheur, ou en prenant
                        conscience d&apos;un bienfait d&apos;Allah que l&apos;on
                        avait négligé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Comment effectuer le sujud ash-shukr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Se diriger vers la qibla si possible, prononcer le takbir
                        (Allahu Akbar), se prosterner et dire
                        &laquo;&nbsp;Subhana Rabbiya al-A&apos;la&nbsp;&raquo;
                        puis des invocations de remerciement. Il n&apos;y a ni
                        tashahud ni salam selon l&apos;avis majoritaire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Douas recommandées dans le sujud ash-shukr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        On peut dire &laquo;&nbsp;Subhana Rabbiya
                        al-A&apos;la&nbsp;&raquo;, remercier Allah pour le
                        bienfait spécifique reçu, et demander Sa bénédiction
                        pour qu&apos;il perdure. Toute formule de gratitude
                        sincère est acceptée.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Sujud at-tilawah */}
              {/* ============================================ */}
              <section id="sujud-tilawah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sujud at-tilawah : la prosternation de récitation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le sujud at-tilawah (سجود التلاوة) est une prosternation
                  prescrite lors de la récitation ou l&apos;écoute de certains
                  versets du Coran qui contiennent un signe de prosternation.
                  Il y a 15 endroits dans le Coran où cette prosternation est
                  prescrite, selon l&apos;avis de la majorité des savants. Cette
                  prosternation manifeste l&apos;obéissance du croyant à
                  l&apos;injonction divine et son humilité devant la Parole
                  d&apos;Allah.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua n°6 : Invocation du sujud at-tilawah
                  </h3>
                  <p className="mt-4 text-center text-2xl leading-loose text-foreground" dir="rtl">
                    سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Sajada wajhi lilladhi khalaqahu wa shaqqa sam&apos;ahu wa basarahu bihawlihi wa quwwatihi. Fatabaraka Allahu ahsanul-khaliqin.
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Mon visage se prosterne devant Celui qui l&apos;a créé et lui a donné l&apos;ouïe et la vue par Sa puissance et Sa force. Béni soit Allah, le Meilleur des créateurs.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (580), Abu Dawud (1414)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) effectuait cette
                  prosternation aussi bien dans la prière qu&apos;en dehors de la
                  prière lorsqu&apos;il récitait le Coran. Les compagnons
                  faisaient de même, et &apos;Umar ibn al-Khattab a récité le
                  verset de la prosternation de la sourate an-Nahl sur le minbar
                  un vendredi, puis est descendu pour se prosterner, et toute
                  l&apos;assemblée s&apos;est prosternée avec lui. La semaine
                  suivante, il récita le même verset mais ne se prosterna pas,
                  montrant que cette prosternation est recommandée (sunnah) et non
                  obligatoire selon l&apos;avis de la majorité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Parmi les sourates contenant un signe de prosternation, on
                  retrouve : al-A&apos;raf (v. 206), ar-Ra&apos;d (v. 15),
                  an-Nahl (v. 50), al-Isra&apos; (v. 109), Maryam (v. 58),
                  al-Hajj (v. 18 et 77), al-Furqan (v. 60), an-Naml (v. 26),
                  as-Sajda (v. 15), Sad (v. 24), Fussilat (v. 38), an-Najm
                  (v. 62), al-Inshiqaq (v. 21) et al-&apos;Alaq (v. 19). Le
                  musulman qui lit régulièrement le Coran rencontrera ces versets
                  et aura ainsi l&apos;occasion de multiplier ses prosternations
                  devant Allah, enrichissant ainsi sa relation avec le Livre sacré.
                  Pour approfondir votre rapport au Coran, consultez notre guide sur{" "}
                  <Link href="/doua-qounout-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la doua du qounout</Link>{" "}
                  récitée dans la prière du witr.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pour parfaire le soujoud */}
              {/* ============================================ */}
              <section id="conseils-soujoud" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pour parfaire son soujoud et ses invocations
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le soujoud est bien plus qu&apos;un simple mouvement physique :
                  c&apos;est un acte d&apos;adoration complet qui engage le corps,
                  le coeur et la langue du croyant. Pour en tirer le maximum de
                  bénéfice spirituel, voici les conseils tirés de la Sunna et des
                  enseignements des savants de l&apos;islam.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Soigner la position physique
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Poser les sept membres sur le sol, écarter les bras du
                      corps, ne pas étendre les avant-bras au sol comme le chien,
                      et garder les pieds droits avec les orteils orientés vers
                      la qibla. Le Prophète (paix et salut sur lui) a détaillé
                      chaque aspect de la position correcte du soujoud.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Cultiver le khushu&apos; (recueillement)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Diriger le regard vers le lieu de prosternation, vider
                      son esprit des pensées mondaines et se concentrer sur la
                      signification des paroles prononcées. Le khushu&apos; est
                      l&apos;âme de la prière, et le soujoud en est le coeur.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Varier les invocations
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Alterner entre les différentes douas prophétiques
                      mentionnées dans cet article pour enrichir sa prière et
                      éviter la routine. Le Prophète (paix et salut sur lui)
                      lui-même variait ses invocations d&apos;un soujoud à
                      l&apos;autre.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Prolonger la prosternation la nuit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le qiyam al-layl (prière nocturne) est le moment idéal
                      pour prolonger ses prosternations et multiplier les
                      invocations. Le dernier tiers de la nuit combine deux
                      moments d&apos;exaucement : la descente divine et la
                      proximité du soujoud.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, le croyant qui souhaite parfaire son soujoud doit
                  travailler sur trois dimensions simultanément : la correction
                  de la position physique conformément à la Sunna, la présence
                  du coeur et du recueillement intérieur, et la richesse des
                  invocations prononcées. Ces trois éléments forment un
                  ensemble indissociable qui transforme la prosternation en un
                  véritable voyage spirituel vers la proximité divine. Découvrez
                  également les invocations à réciter{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">après la prière en islam</Link>{" "}
                  pour compléter votre adoration.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par le dhikr obligatoire :</strong>{" "}
                      toujours dire &laquo;&nbsp;Subhana Rabbiya
                      al-A&apos;la&nbsp;&raquo; trois fois avant d&apos;ajouter
                      d&apos;autres invocations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer en arabe et dans sa langue :</strong>{" "}
                      les douas prophétiques en arabe ont une valeur particulière,
                      mais les supplications personnelles dans sa langue maternelle
                      sont parfaitement valides et encouragées.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas négliger les prières surérogatoires :</strong>{" "}
                      chaque prière supplémentaire offre davantage de prosternations
                      et donc davantage de moments de proximité avec Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Apprendre les douas progressivement :</strong>{" "}
                      mémoriser une nouvelle doua du soujoud chaque semaine
                      permet d&apos;enrichir sa prière sans se sentir submergé.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les douas après la prière en islam"
                  description="Complétez votre adoration avec les invocations authentiques à réciter après chaque prière obligatoire."
                  href="/doua-apres-priere-islam"
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
                    href="/doua-apres-priere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua après la prière
                  </Link>
                  <Link
                    href="/doua-qounout-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du qounout
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
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
