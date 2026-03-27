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
    "Doua du Ramadan en islam : invocations du mois béni",
  description:
    "Découvrez les doua du Ramadan en islam : invocations authentiques en arabe avec phonétique et traduction pour le sahur, l'iftar, Laylat al-Qadr, les 10 derniers jours et la fin du mois béni.",
  openGraph: {
    title:
      "Doua du Ramadan en islam : invocations du mois béni",
    description:
      "Les invocations authentiques du mois de Ramadan en islam : doua du sahur, de l'iftar, de la nuit du destin et des 10 derniers jours. Textes en arabe, phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-ramadan-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-ramadan-islam",
  },
};

const tocItems = [
  { id: "ramadan-mois-doua", label: "Le Ramadan, mois de la doua" },
  { id: "doua-debut-ramadan", label: "Doua au début du Ramadan" },
  { id: "doua-sahur", label: "Doua pendant le sahur" },
  { id: "doua-iftar", label: "Doua de la rupture du jeûne (iftar)" },
  { id: "doua-laylat-al-qadr", label: "Doua de la nuit du destin" },
  { id: "doua-10-derniers-jours", label: "Doua des 10 derniers jours" },
  { id: "doua-fin-ramadan", label: "Doua de la fin du Ramadan" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua du Ramadan ?",
    answer:
      "Il n&apos;existe pas une seule meilleure doua du Ramadan, mais parmi les plus recommandées figurent la doua de rupture du jeûne « Dhahaba adh-dhama&apos;u wabtallatil-&apos;uruqu wa thabatal-ajru in sha Allah » et la doua de Laylat al-Qadr « Allahumma innaka &apos;afuwwun tuhibbul-&apos;afwa fa&apos;fu &apos;anni ». Le Prophète (paix et salut sur lui) encourageait à multiplier les invocations tout au long du mois béni, en particulier lors de la rupture du jeûne et durant les dix dernières nuits.",
  },
  {
    question: "La doua du jeûneur est-elle toujours exaucée ?",
    answer:
      "Oui, selon le hadith rapporté par at-Tirmidhi, la doua du jeûneur fait partie des invocations qui ne sont pas rejetées. Le Prophète (paix et salut sur lui) a dit : « Trois invocations ne sont pas rejetées : la doua du jeûneur au moment de la rupture, la doua du dirigeant juste et la doua de l&apos;opprimé. » Le moment de l&apos;iftar est donc un instant privilégié où le musulman doit multiplier ses demandes à Allah.",
  },
  {
    question: "Peut-on faire la doua du Ramadan en français ?",
    answer:
      "Oui, la doua peut être faite dans toute langue, y compris le français. Allah comprend toutes les langues et accepte la sincérité du coeur. Cependant, il est recommandé d&apos;apprendre les invocations prophétiques en arabe pour bénéficier de leur formulation originale. Pour les supplications personnelles, le français est parfaitement valide pendant le Ramadan comme en dehors.",
  },
  {
    question: "Quand faire la doua pendant le Ramadan ?",
    answer:
      "Les moments les plus propices pour la doua pendant le Ramadan sont : au moment du sahur (repas avant l&apos;aube), car c&apos;est le dernier tiers de la nuit ; au moment de la rupture du jeûne (iftar) ; pendant les prières de tarawih ; durant les dix dernières nuits, en particulier les nuits impaires (21, 23, 25, 27, 29) ; et lors de la prosternation (sujud). Le jeûneur bénéficie d&apos;un statut privilégié tout au long de la journée.",
  },
  {
    question: "Quelle doua réciter pour Laylat al-Qadr ?",
    answer:
      "La doua la plus authentique pour Laylat al-Qadr est celle enseignée par le Prophète (paix et salut sur lui) à Aïcha : « Allahumma innaka &apos;afuwwun tuhibbul-&apos;afwa fa&apos;fu &apos;anni » (Seigneur, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi). Ce hadith est rapporté par at-Tirmidhi et Ibn Majah. Il est également recommandé de multiplier toutes les formes d&apos;invocations personnelles durant cette nuit bénie.",
  },
  {
    question: "Comment maximiser l'exaucement de la doua pendant le Ramadan ?",
    answer:
      "Pour maximiser l&apos;exaucement de la doua pendant le Ramadan, il convient de : jeûner avec sincérité et dévotion, être en état de pureté rituelle, orienter son coeur vers Allah avec humilité, commencer par la louange d&apos;Allah et la salutation sur le Prophète, choisir les moments bénis (iftar, dernier tiers de la nuit, sujud), et persévérer dans l&apos;invocation sans se décourager. La piété et la générosité pendant le Ramadan renforcent également l&apos;acceptation des douas.",
  },
  {
    question: "Faut-il lever les mains pour faire la doua du Ramadan ?",
    answer:
      "Lever les mains est une sunna recommandée lors de la doua en général, y compris pendant le Ramadan. Le Prophète (paix et salut sur lui) a dit : « Votre Seigneur est Pudique et Généreux, Il a honte de renvoyer les mains de Son serviteur vides lorsqu&apos;il les lève vers Lui » (Abu Dawud). Cependant, certaines douas spécifiques comme celle de l&apos;iftar se font sans nécessairement lever les mains.",
  },
  {
    question: "Quelle est la différence entre doua et dhikr pendant le Ramadan ?",
    answer:
      "Le dhikr est le rappel d&apos;Allah par des formules de glorification (SubhanAllah, Alhamdulillah, Allahu Akbar), tandis que la doua est une demande personnelle adressée à Allah. Pendant le Ramadan, les deux sont fortement recommandés. Le dhikr prépare le coeur et crée un état de proximité avec Allah qui favorise l&apos;exaucement de la doua. Les savants conseillent d&apos;alterner entre dhikr et doua, en commençant toujours par la louange d&apos;Allah avant de formuler ses demandes.",
  },
];

export default function DouaRamadanIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-ramadan-islam/#article",
        headline:
          "Doua du Ramadan en islam : invocations du mois béni",
        description:
          "Découvrez les doua du Ramadan en islam : invocations authentiques en arabe avec phonétique et traduction pour le sahur, l'iftar, Laylat al-Qadr et les 10 derniers jours.",
        image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        datePublished: "2026-03-12",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-ramadan-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-ramadan-islam/#breadcrumb",
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
            name: "Doua du Ramadan",
            item: "https://www.islamreligion.fr/doua-ramadan-islam",
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
          title="Doua du Ramadan en islam : invocations du mois béni"
          subtitle="Les invocations authentiques du mois de Ramadan, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française pour chaque moment clé du jeûne."
          imageSrc="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
          imageAlt="Croissant de lune doré et lanternes illuminées symbolisant le mois de Ramadan en islam"
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
                <span className="text-foreground">Doua du Ramadan</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le mois de Ramadan est le moment le plus propice de
                  l&apos;année pour la <strong>doua</strong> (invocation).
                  Le jeûneur bénéficie d&apos;un statut privilégié auprès
                  d&apos;Allah, et chaque instant de ce mois béni est une
                  opportunité d&apos;adresser ses demandes au Créateur. Du
                  sahur à l&apos;iftar, en passant par la nuit du destin
                  (Laylat al-Qadr), cet article rassemble les{" "}
                  <strong>invocations authentiques du Ramadan</strong> en
                  arabe, avec leur phonétique et traduction française.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le Ramadan, mois de la doua */}
              {/* ============================================ */}
              <section id="ramadan-mois-doua" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Ramadan, mois béni de la doua en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mois de <strong>Ramadan</strong> occupe une place
                  exceptionnelle dans le calendrier islamique. Neuvième mois
                  du calendrier hégirien, il est le mois durant lequel le
                  Coran fut révélé au Prophète Muhammad (paix et salut sur
                  lui). Allah dit : &laquo;&nbsp;Le mois de Ramadan au cours
                  duquel le Coran a été descendu comme guide pour les gens,
                  et preuves claires de la bonne direction et du
                  discernement&nbsp;&raquo; (Coran, 2:185). Cette révélation
                  confère au Ramadan un caractère sacré qui en fait la
                  période la plus favorable pour l&apos;invocation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La <strong>doua pendant le Ramadan</strong> bénéficie de
                  plusieurs facteurs qui en renforcent l&apos;exaucement.
                  Premièrement, le jeûneur est dans un état de soumission et
                  d&apos;humilité devant Allah, ce qui rapproche le serviteur
                  de son Seigneur. Deuxièmement, les portes du ciel sont
                  ouvertes et les portes de l&apos;enfer sont fermées
                  pendant ce mois. Troisièmement, les démons sont enchaînés,
                  ce qui libère le croyant des tentations et lui permet de
                  se concentrer pleinement sur l&apos;adoration. Pour
                  approfondir la compréhension des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>,
                  consultez notre guide complet.
                </p>

                <HadithCard
                  arabic="إذا جاء رمضان فتحت أبواب الجنة وغلقت أبواب النار وصفدت الشياطين"
                  text="Lorsque le Ramadan arrive, les portes du Paradis sont ouvertes, les portes de l'Enfer sont fermées, et les démons sont enchaînés."
                  source="Rapporté par al-Bukhari (1899) et Muslim (1079)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre l&apos;atmosphère spirituelle unique du
                  Ramadan. L&apos;ouverture des portes du Paradis symbolise
                  la multiplication des récompenses et l&apos;acceptation
                  facilitée des invocations. C&apos;est dans ce contexte
                  exceptionnel que le musulman doit redoubler d&apos;efforts
                  dans sa doua, profitant de chaque instant pour demander à
                  Allah le bien de ce monde et de l&apos;au-delà.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les portes de la miséricorde sont grandes ouvertes :</strong>{" "}
                      Allah multiplie les récompenses de chaque acte
                      d&apos;adoration accompli pendant le Ramadan, y compris
                      la doua.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le jeûneur a une invocation exaucée :</strong>{" "}
                      le Prophète (paix et salut sur lui) a affirmé que le
                      jeûneur a une doua qui n&apos;est pas rejetée, en
                      particulier au moment de la rupture du jeûne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le Ramadan contient Laylat al-Qadr :</strong>{" "}
                      cette nuit, meilleure que mille mois, est le sommet
                      absolu pour la doua. Découvrez notre article dédié à la{" "}
                      <Link href="/doua-nuit-destin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de la nuit du destin</Link>.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg"
                    alt="Décoration du Ramadan avec lanternes illuminées et croissant de lune symbolisant le mois béni en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua au début du Ramadan */}
              {/* ============================================ */}
              <section id="doua-debut-ramadan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua au début du Ramadan : accueillir le mois béni
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;arrivée du mois de Ramadan est un événement majeur
                  que le Prophète (paix et salut sur lui) accueillait avec
                  joie et gratitude. Il annonçait la bonne nouvelle du
                  Ramadan à ses compagnons et les encourageait à se préparer
                  spirituellement pour ce mois exceptionnel. Le musulman
                  commence donc le Ramadan par des invocations de gratitude
                  et de demande de bénédiction.
                </p>

                <HadithCard
                  arabic="أتاكم رمضان شهر مبارك فرض الله عليكم صيامه تفتح فيه أبواب السماء وتغلق فيه أبواب الجحيم وتغل فيه مردة الشياطين"
                  text="Ramadan est venu à vous, un mois béni durant lequel Allah vous a prescrit le jeûne. Les portes du ciel y sont ouvertes, les portes de l'enfer y sont fermées, et les démons rebelles y sont enchaînés."
                  source="Rapporté par an-Nasa'i (2106) et Ahmad (8991)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants rapportent que le Prophète (paix et salut sur
                  lui) avait l&apos;habitude d&apos;invoquer Allah à
                  l&apos;approche du Ramadan. L&apos;invocation suivante,
                  bien que sa chaîne de transmission soit discutée par
                  certains savants, est largement pratiquée par la communauté
                  musulmane pour accueillir le mois béni :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ بَارِكْ لَنَا فِي رَجَبٍ وَشَعْبَانَ وَبَلِّغْنَا رَمَضَانَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma barik lana fi Rajab wa Sha&apos;ban wa ballighna Ramadan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, bénis-nous les mois de Rajab et de Sha&apos;ban, et fais-nous parvenir au mois de Ramadan&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tabarani dans al-Mu&apos;jam al-Awsat et Ahmad
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au premier jour du Ramadan, il est également recommandé de
                  renouveler son intention (niyyah) de jeûner et de formuler
                  des demandes spécifiques pour ce mois. Le croyant peut
                  demander à Allah de lui accorder la force de jeûner, la
                  capacité de prier les tarawih, la patience et la piété,
                  ainsi que l&apos;acceptation de toutes ses bonnes actions.
                  C&apos;est le moment idéal pour dresser une liste de douas
                  personnelles à répéter tout au long du mois.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque le croyant aperçoit le croissant de lune marquant
                  le début du Ramadan, il peut réciter l&apos;invocation
                  prophétique de la vision du croissant de lune :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ahillahu &apos;alayna bil-amni wal-iman, was-salamati wal-Islam, rabbi wa rabbukAllah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que ce croissant se lève sur nous avec sécurité et foi, avec paix et soumission à Toi. Mon Seigneur et ton Seigneur est Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3451) et ad-Darimi
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est un bel exemple de la manière dont le
                  musulman accueille chaque nouveau mois avec conscience et
                  gratitude. Pour le Ramadan, elle prend une dimension
                  particulière car elle inaugure trente jours de dévotion
                  intense et de proximité avec Allah. Il est recommandé de
                  la compléter par des douas personnelles en français ou en
                  arabe, selon la capacité de chacun.
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
              {/* SECTION 3 : Doua pendant le sahur */}
              {/* ============================================ */}
              <section id="doua-sahur" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pendant le sahur : invocations du repas avant l&apos;aube
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le <strong>sahur</strong> (repas pris avant l&apos;aube)
                  est un moment béni du Ramadan. Le Prophète (paix et salut
                  sur lui) a fortement encouragé les musulmans à prendre ce
                  repas, en affirmant qu&apos;il contient une bénédiction
                  (barakah). Le sahur coïncide avec le dernier tiers de la
                  nuit, moment où Allah descend au ciel le plus bas et
                  répond aux invocations de Ses serviteurs.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce moment est donc doublement béni pour la doua : le
                  croyant est à la fois un jeûneur dont l&apos;invocation est
                  exaucée et un serviteur qui invoque Allah dans le dernier
                  tiers de la nuit, instant où la descente divine est
                  affirmée par le hadith. Avant de commencer son sahur, le
                  musulman peut formuler l&apos;intention de jeûner et
                  invoquer Allah pour que sa journée de jeûne soit acceptée.
                  Pour enrichir vos invocations matinales, découvrez
                  également les{" "}
                  <Link href="/doua-matin-adhkar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">adhkar du matin</Link>{" "}
                  qui complètent parfaitement les douas du sahur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ وَالْعَزِيمَةَ عَلَى الرُّشْدِ وَأَسْأَلُكَ شُكْرَ نِعْمَتِكَ وَحُسْنَ عِبَادَتِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;alukat-thabata fil-amri wal-&apos;azimata &apos;alar-rushd, wa as&apos;aluka shukra ni&apos;matika wa husna &apos;ibadatik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande la constance dans les affaires et la détermination dans la droiture, je Te demande de pouvoir être reconnaissant envers Tes bienfaits et de bien T&apos;adorer&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par an-Nasa&apos;i (1304) et Ahmad
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le temps du sahur est également un moment privilégié pour
                  l&apos;istighfar (demande de pardon). Allah mentionne dans
                  le Coran que les vertueux sont ceux qui &laquo;&nbsp;à
                  l&apos;heure de l&apos;aube, implorent le pardon
                  d&apos;Allah&nbsp;&raquo; (Coran, 3:17). Le musulman
                  jeûneur peut donc alterner entre la doua personnelle,
                  l&apos;istighfar et le dhikr pendant cette période bénie,
                  profitant de l&apos;intimité de la nuit pour se confier
                  à Allah avec sincérité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Renouveler l&apos;intention du jeûne :</strong>{" "}
                      formuler l&apos;intention de jeûner pour Allah avec
                      sincérité est un acte recommandé avant le sahur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier l&apos;istighfar :</strong>{" "}
                      demander le pardon d&apos;Allah dans les derniers
                      instants avant l&apos;aube est une sunna confirmée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prier la salat al-fajr :</strong>{" "}
                      accomplir la prière de l&apos;aube avec concentration
                      (khushu&apos;) après le sahur scelle la nuit de doua
                      par l&apos;acte d&apos;adoration le plus noble.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua de la rupture du jeûne */}
              {/* ============================================ */}
              <section id="doua-iftar" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de la rupture du jeûne (iftar) : l&apos;invocation exaucée
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le moment de l&apos;<strong>iftar</strong> (rupture du
                  jeûne) est l&apos;un des instants les plus précieux du
                  Ramadan pour la doua. Le Prophète (paix et salut sur lui) a
                  enseigné que le jeûneur a une invocation qui n&apos;est pas
                  rejetée au moment où il rompt son jeûne. C&apos;est
                  pourquoi les savants insistent pour que le musulman ne
                  gaspille pas cet instant en se précipitant sur la
                  nourriture, mais qu&apos;il prenne le temps d&apos;invoquer
                  Allah avant et pendant la rupture. Pour approfondir ce
                  sujet, consultez notre article dédié à la{" "}
                  <Link href="/doua-rupture-jeune-iftar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de rupture du jeûne (iftar)</Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La doua la plus authentique de la rupture du jeûne est
                  celle rapportée par Abu Dawud. Le Prophète (paix et salut
                  sur lui) prononçait ces mots au moment de rompre son
                  jeûne :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Dhahaba adh-dhama&apos;u wabtallatil-&apos;uruqu wa thabatal-ajru in sha Allah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;La soif est partie, les veines se sont humidifiées et la récompense est confirmée, si Allah le veut&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (2357), qualifié de hasan
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Après avoir prononcé cette doua prophétique, le musulman
                  peut ajouter toutes ses demandes personnelles. C&apos;est
                  le moment de demander à Allah le pardon des péchés, la
                  guidance, la guérison d&apos;une maladie, la facilitation
                  d&apos;une affaire ou toute autre demande. Les savants
                  recommandent de préparer à l&apos;avance une liste de douas
                  personnelles pour ne rien oublier dans ce moment précieux.
                </p>

                <HadithCard
                  arabic="ثلاثة لا ترد دعوتهم: الصائم حتى يفطر، والإمام العادل، ودعوة المظلوم"
                  text="Trois personnes voient leur invocation exaucée : le jeûneur jusqu'à ce qu'il rompe son jeûne, le dirigeant juste, et l'opprimé."
                  source="Rapporté par at-Tirmidhi (3598) et Ibn Majah (1752)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith confirme le statut privilégié du jeûneur auprès
                  d&apos;Allah. Notons que la formule &laquo;&nbsp;jusqu&apos;à
                  ce qu&apos;il rompe son jeûne&nbsp;&raquo; indique que
                  l&apos;invocation du jeûneur est acceptée tout au long de
                  la journée de jeûne, avec un pic au moment même de
                  l&apos;iftar. Cela signifie que pendant toute la durée du
                  Ramadan, chaque journée de jeûne est une occasion continue
                  de doua exaucée.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation sujud en prière dans une mosquée illustrant l'humilité et la doua pendant le Ramadan"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua de Laylat al-Qadr */}
              {/* ============================================ */}
              <section id="doua-laylat-al-qadr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de la nuit du destin (Laylat al-Qadr)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  <strong>Laylat al-Qadr</strong> (la nuit du destin) est la
                  nuit la plus importante de l&apos;année en islam. Allah
                  dit : &laquo;&nbsp;La nuit du destin est meilleure que
                  mille mois&nbsp;&raquo; (Coran, 97:3). Cela signifie que
                  les actes d&apos;adoration accomplis durant cette nuit,
                  y compris la <strong>doua</strong>, sont plus méritoires
                  que ceux accomplis pendant plus de 83 ans. C&apos;est le
                  sommet absolu de la spiritualité ramadanesque et le moment
                  où chaque invocation prend une valeur inestimable. Pour un
                  guide complet sur les invocations de cette nuit
                  exceptionnelle, consultez notre article sur la{" "}
                  <Link href="/doua-nuit-destin-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de la nuit du destin</Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Aïcha (qu&apos;Allah l&apos;agrée) a demandé au Prophète
                  (paix et salut sur lui) : &laquo;&nbsp;Si je sais quelle
                  nuit est Laylat al-Qadr, que dois-je dire ?&nbsp;&raquo;
                  Il lui répondit de réciter cette invocation magnifique :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma innaka &apos;afuwwun tuhibbul-&apos;afwa fa&apos;fu &apos;anni
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3513) et Ibn Majah (3850)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est d&apos;une beauté et d&apos;une profondeur
                  remarquables. Le nom divin &laquo;&nbsp;Al-&apos;Afuw&nbsp;&raquo;
                  (Celui qui efface les péchés) est plus fort que
                  &laquo;&nbsp;Al-Ghafur&nbsp;&raquo; (Celui qui pardonne).
                  Alors que le pardon (maghfira) signifie couvrir le péché,
                  le &apos;afw signifie l&apos;effacer complètement, comme
                  s&apos;il n&apos;avait jamais existé. Demander le
                  &apos;afw d&apos;Allah pendant Laylat al-Qadr, c&apos;est
                  demander l&apos;effacement total de ses péchés.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette doua abondamment
                  pendant les dix dernières nuits du Ramadan, et en
                  particulier pendant les nuits impaires (21, 23, 25, 27 et
                  29), car Laylat al-Qadr se trouve parmi elles selon la
                  majorité des savants. Le croyant peut la répéter des
                  dizaines de fois durant la nuit, entre les unités de
                  prière, lors de la prosternation et dans tous les moments
                  d&apos;invocation.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Signes de Laylat al-Qadr
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a décrit cette nuit
                      comme une nuit sereine, ni trop chaude ni trop froide.
                      Le soleil du lendemain se lève sans rayons prononcés.
                      Cependant, les savants précisent qu&apos;il ne faut pas
                      attendre de voir ces signes pour multiplier les douas,
                      mais plutôt prier chaque nuit impaire comme si
                      c&apos;était Laylat al-Qadr.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Programme de doua pour la nuit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Alternez entre la prière (qiyam al-layl), la lecture du
                      Coran, le dhikr et la doua personnelle. Commencez par
                      les invocations prophétiques puis ajoutez vos demandes
                      personnelles. N&apos;oubliez pas l&apos;istighfar et la
                      salutation sur le Prophète (paix et salut sur lui).
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua des 10 derniers jours */}
              {/* ============================================ */}
              <section id="doua-10-derniers-jours" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua des 10 derniers jours du Ramadan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les <strong>dix derniers jours du Ramadan</strong> sont
                  la période la plus intense du mois béni. Le Prophète (paix
                  et salut sur lui) redoublait d&apos;efforts pendant ces
                  jours, serrait son izaar (se consacrait entièrement à
                  l&apos;adoration), veillait toute la nuit et réveillait
                  sa famille pour prier. Aïcha (qu&apos;Allah l&apos;agrée) a
                  décrit son état en disant qu&apos;il faisait durant ces
                  nuits ce qu&apos;il ne faisait à aucun autre moment de
                  l&apos;année.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  C&apos;est durant ces dix derniers jours que le Prophète
                  (paix et salut sur lui) pratiquait l&apos;i&apos;tikaf
                  (retraite spirituelle dans la mosquée). L&apos;i&apos;tikaf
                  est l&apos;occasion de se couper du monde et de se
                  consacrer exclusivement à l&apos;adoration d&apos;Allah,
                  multipliant les prières, les douas, la lecture du Coran et
                  le dhikr. Pour ceux qui ne peuvent pas faire
                  l&apos;i&apos;tikaf, il est recommandé de maximiser
                  l&apos;adoration nocturne chez soi.
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier la doua de Laylat al-Qadr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Répéter &laquo;&nbsp;Allahumma innaka &apos;afuwwun
                        tuhibbul-&apos;afwa fa&apos;fu &apos;anni&nbsp;&raquo;
                        des dizaines de fois chaque nuit, en particulier lors
                        des nuits impaires (21, 23, 25, 27, 29).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prier le qiyam al-layl en longueur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allonger les prosternations (sujud) pour y multiplier
                        les douas, car le moment le plus proche entre le
                        serviteur et son Seigneur est lors de la
                        prosternation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Invoquer pour soi et pour les autres
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ne pas se limiter aux demandes personnelles mais
                        invoquer pour ses parents, ses enfants, la communauté
                        musulmane et l&apos;humanité entière. L&apos;ange dit
                        &laquo;&nbsp;amin&nbsp;&raquo; et demande la même
                        chose pour celui qui invoque pour son frère en son
                        absence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Alterner entre doua, Coran et dhikr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants recommandent de varier les actes
                        d&apos;adoration pour maintenir la concentration et
                        la motivation tout au long de la nuit. Lire le Coran,
                        faire du dhikr et formuler des douas en alternance
                        garde le coeur vivant et attentif.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Persévérer jusqu&apos;au dernier jour
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ne pas relâcher l&apos;effort dans les derniers jours
                        du Ramadan. Certains savants estiment que la nuit du
                        29 pourrait être Laylat al-Qadr. La persévérance dans
                        la doua jusqu&apos;au bout est la marque du croyant
                        sincère.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) nous a enseigné que
                  les oeuvres sont jugées par leur conclusion. Celui qui
                  termine le Ramadan dans l&apos;effort et la dévotion
                  maximale récoltera les plus grandes récompenses. Ces dix
                  derniers jours sont l&apos;opportunité de transformer sa
                  vie spirituelle en profondeur, de demander à Allah le
                  pardon de tous ses péchés et de renouveler son engagement
                  dans la voie de l&apos;islam. Pour compléter vos
                  invocations, explorez notre guide sur{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">l&apos;apprentissage de l&apos;arabe</Link>{" "}
                  afin de comprendre chaque mot de vos douas.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Doua de la fin du Ramadan */}
              {/* ============================================ */}
              <section id="doua-fin-ramadan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de la fin du Ramadan : clôturer le mois béni
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La fin du Ramadan est un moment empreint à la fois de joie
                  et de tristesse. La joie de l&apos;Aïd al-Fitr approche,
                  mais le croyant ressent aussi la nostalgie de quitter ce
                  mois béni de proximité avec Allah. Les derniers jours sont
                  l&apos;occasion d&apos;adresser des douas de clôture, de
                  demander à Allah l&apos;acceptation de son jeûne, de ses
                  prières et de toutes ses bonnes actions accomplies pendant
                  le Ramadan.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le musulman peut invoquer Allah avec les formulations
                  suivantes dans les derniers jours du Ramadan, en demandant
                  que les bienfaits spirituels acquis perdurent au-delà du
                  mois béni :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ وَتُبْ عَلَيْنَا إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana taqabbal minna innaka Antas-Sami&apos;ul-&apos;Alim, wa tub &apos;alayna innaka Antat-Tawwabur-Rahim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accepte de nous, car c&apos;est Toi l&apos;Audient, l&apos;Omniscient. Et accepte notre repentir, car c&apos;est Toi le Repentant, le Miséricordieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:127-128)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les premiers musulmans (salaf) avaient l&apos;habitude
                  d&apos;invoquer Allah pendant six mois après le Ramadan
                  pour qu&apos;Il accepte leur jeûne et leurs bonnes actions,
                  puis ils invoquaient pendant les six mois suivants pour
                  atteindre le Ramadan suivant. Cela montre l&apos;importance
                  qu&apos;ils accordaient à la doua d&apos;acceptation après
                  l&apos;accomplissement de toute bonne oeuvre.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le jour de l&apos;Aïd al-Fitr, qui marque la fin du
                  Ramadan, est lui aussi un moment de doua. Le takbir
                  (Allahu Akbar) retentit dès la veille de l&apos;Aïd et le
                  musulman peut invoquer Allah pour que la joie de cette fête
                  soit accompagnée du pardon divin et de la libération du
                  feu de l&apos;enfer. Le Prophète (paix et salut sur lui) a
                  dit que celui qui jeûne le Ramadan avec foi et espérance de
                  la récompense voit ses péchés antérieurs pardonnés.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Demander l&apos;acceptation du jeûne :</strong>{" "}
                      invoquer Allah pour qu&apos;Il accepte chaque journée
                      de jeûne, chaque prière de tarawih et chaque acte de
                      générosité accompli pendant le mois.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prier pour la continuité :</strong>{" "}
                      demander à Allah la force de maintenir les bonnes
                      habitudes acquises pendant le Ramadan : prière la nuit,
                      lecture du Coran, générosité et dhikr.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer pour atteindre le prochain Ramadan :</strong>{" "}
                      comme les salaf, demander à Allah de vivre
                      suffisamment longtemps pour jeûner le prochain Ramadan
                      et bénéficier à nouveau de ses bénédictions.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de la rupture du jeûne (iftar)"
                  description="Guide complet des invocations authentiques au moment de l'iftar : textes en arabe, phonétique et traduction."
                  href="/doua-rupture-jeune-iftar-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations du Ramadan"
                description="Maîtrisez la langue du Coran pour réciter les douas du Ramadan avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-rupture-jeune-iftar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;iftar
                  </Link>
                  <Link
                    href="/doua-nuit-destin-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de la nuit du destin
                  </Link>
                  <Link
                    href="/doua-matin-adhkar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Adhkar du matin
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam
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
