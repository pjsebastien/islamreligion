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
    "Doua du marché et du commerce en islam : invocations pour la baraka",
  description:
    "Découvrez la doua du marché et du commerce en islam : invocations authentiques en arabe avec phonétique et traduction, éthique commerciale, honnêteté et baraka dans les gains halal.",
  openGraph: {
    title:
      "Doua du marché et du commerce en islam : invocations pour la baraka",
    description:
      "Les invocations authentiques pour le marché et le commerce en islam : textes en arabe, phonétique, traduction et hadiths sur l'éthique commerciale.",
    url: "https://www.islamreligion.fr/doua-marche-commerce-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-marche-commerce-islam",
  },
};

const tocItems = [
  { id: "doua-entree-marche", label: "Doua en entrant au marché" },
  { id: "honnetete-commerce", label: "L'honnêteté dans le commerce" },
  { id: "ethique-commerciale", label: "Éthique du commerce en islam" },
  { id: "douas-commercant", label: "Douas du commerçant musulman" },
  { id: "baraka-gains-halal", label: "La baraka dans les gains halal" },
  { id: "commerce-prophete", label: "Le commerce du Prophète" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua en entrant au marché en islam ?",
    answer:
      "La doua en entrant au marché est : « La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamd, yuhyi wa yumit, wa Huwa hayyun la yamut, biyadihil khayr, wa Huwa &apos;ala kulli shay&apos;in qadir » (Il n&apos;y a de divinité qu&apos;Allah, Seul, sans associé. À Lui la royauté et la louange. Il fait vivre et mourir. Il est Vivant et ne meurt pas. Le bien est dans Sa main et Il est capable de toute chose). Le Prophète (paix et salut sur lui) a enseigné que celui qui prononce cette invocation en entrant au marché se verra inscrire un million de bonnes actions.",
  },
  {
    question: "Pourquoi faire une doua en entrant au marché ?",
    answer:
      "Le marché est un lieu où l&apos;insouciance envers Allah est fréquente. Les gens y sont préoccupés par les achats, les ventes et les profits. Prononcer le dhikr d&apos;Allah dans un tel endroit permet de se distinguer et d&apos;attirer la miséricorde divine. Le Prophète (paix et salut sur lui) a dit que les endroits les plus détestés par Allah sont les marchés, car l&apos;oubli d&apos;Allah y est courant.",
  },
  {
    question: "Le commerce est-il autorisé en islam ?",
    answer:
      "Oui, le commerce est non seulement autorisé mais fortement encouragé en islam. Allah dit dans le Coran : « Allah a rendu licite le commerce et a interdit l&apos;usure » (Coran 2:275). Le Prophète Muhammad (paix et salut sur lui) était lui-même un commerçant réputé pour son honnêteté avant la révélation. L&apos;islam encourage le travail et le commerce honnête comme moyens de subsistance.",
  },
  {
    question: "Quelles sont les pratiques interdites dans le commerce en islam ?",
    answer:
      "L&apos;islam interdit plusieurs pratiques commerciales : la tromperie (ghish), la dissimulation des défauts d&apos;un produit, le mensonge sur la qualité ou le prix, l&apos;usure (riba), la spéculation excessive (gharar), l&apos;accaparement des marchandises pour faire monter les prix (ihtikar), et les faux serments pour vendre. Le Prophète (paix et salut sur lui) a maudit celui qui trompe dans le commerce.",
  },
  {
    question: "Comment obtenir la baraka dans son commerce ?",
    answer:
      "Pour obtenir la baraka dans son commerce, le musulman doit : être honnête et transparent dans toutes ses transactions, éviter le mensonge et les faux serments, prononcer les invocations du marché, donner l&apos;aumône sur ses gains, ne pas manquer les prières obligatoires à cause du commerce, traiter les clients avec bienveillance et être juste dans les poids et mesures.",
  },
  {
    question: "Le Prophète faisait-il du commerce ?",
    answer:
      "Oui, le Prophète Muhammad (paix et salut sur lui) était un commerçant accompli avant la révélation. Il gérait les affaires commerciales de Khadija (qu&apos;Allah soit satisfait d&apos;elle) et était surnommé « al-Amin » (le digne de confiance) et « as-Sadiq » (le véridique) en raison de son honnêteté exemplaire. Son modèle commercial reste une référence pour tout musulman.",
  },
  {
    question: "Peut-on faire du commerce le vendredi en islam ?",
    answer:
      "Le commerce est interdit uniquement pendant l&apos;appel à la prière du vendredi (salat al-jumu&apos;a). Allah dit : « Quand on appelle à la prière du vendredi, accourez à l&apos;invocation d&apos;Allah et laissez tout négoce » (Coran 62:9). En dehors de ce moment, le commerce est parfaitement licite le vendredi comme les autres jours.",
  },
];

export default function DouaMarcheCommerceIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-marche-commerce-islam/#article",
        headline:
          "Doua du marché et du commerce en islam : invocations pour la baraka",
        description:
          "Découvrez la doua du marché et du commerce en islam : invocations authentiques en arabe, éthique commerciale, honnêteté et baraka dans les gains halal.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-04-04",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-marche-commerce-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
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
            name: "Doua du marché et du commerce",
            item: "https://www.islamreligion.fr/doua-marche-commerce-islam",
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
          title="Doua du marché et du commerce en islam : invocations pour la baraka"
          subtitle="Les invocations authentiques du commerçant musulman, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française pour attirer la bénédiction divine dans vos transactions."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation doua du marché et du commerce avec rayons dorés symbolisant la baraka en islam"
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
                <span className="text-foreground">Doua du marché et du commerce</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La doua du marché est une invocation puissante que le Prophète
                  (paix et salut sur lui) a enseignée pour se souvenir d&apos;Allah
                  dans les lieux de commerce. Celui qui la prononce en entrant au
                  marché se verra inscrire un million de bonnes actions et effacer
                  un million de péchés. L&apos;islam encourage le commerce honnête
                  et place l&apos;éthique au coeur de toute transaction.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Doua en entrant au marché */}
              {/* ============================================ */}
              <section id="doua-entree-marche" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua en entrant au marché en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le marché est l&apos;un des endroits où l&apos;oubli d&apos;Allah
                  est le plus fréquent. Les gens y sont absorbés par les achats,
                  les ventes, les négociations et la recherche du profit. C&apos;est
                  pourquoi le Prophète Muhammad (paix et salut sur lui) a enseigné
                  une invocation spécifique à prononcer en entrant dans un marché,
                  afin de transformer ce moment en acte d&apos;adoration et de se
                  rappeler la grandeur d&apos;Allah au milieu de l&apos;agitation
                  commerciale.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua du marché est d&apos;autant plus importante que le
                  Prophète (paix et salut sur lui) a indiqué que les marchés font
                  partie des endroits les plus détestés par Allah, en raison de
                  l&apos;insouciance qui y règne. Prononcer le dhikr d&apos;Allah
                  dans un tel lieu permet au croyant de se distinguer et
                  d&apos;attirer sur lui une récompense immense. Voici cette
                  invocation majeure :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، يُحْيِي وَيُمِيتُ، وَهُوَ حَيٌّ لَا يَمُوتُ، بِيَدِهِ الْخَيْرُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illAllahu wahdahu la sharika lah, lahul mulku wa lahul hamd, yuhyi wa yumit, wa Huwa hayyun la yamut, biyadihil khayr, wa Huwa &apos;ala kulli shay&apos;in qadir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité qu&apos;Allah, Seul, sans associé. À Lui appartient la royauté et à Lui la louange. Il fait vivre et fait mourir. Il est Vivant et ne meurt pas. Le bien est dans Sa main et Il est capable de toute chose&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3428), Ibn Majah (2235)
                  </p>
                </div>

                <HadithCard
                  arabic="من دخل السوق فقال: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، يحيي ويميت، وهو حي لا يموت، بيده الخير، وهو على كل شيء قدير، كتب الله له ألف ألف حسنة، ومحا عنه ألف ألف سيئة، ورفع له ألف ألف درجة"
                  text="Celui qui entre au marché et dit : 'Il n'y a de divinité qu'Allah, Seul, sans associé...' Allah lui inscrit un million de bonnes actions, lui efface un million de péchés et l'élève d'un million de degrés."
                  source="Rapporté par at-Tirmidhi (3428), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La récompense mentionnée dans ce hadith est extraordinaire : un
                  million de bonnes actions, un million de péchés effacés et un
                  million de degrés élevés. Cela montre l&apos;importance que
                  l&apos;islam accorde au fait de se souvenir d&apos;Allah dans les
                  lieux où Il est le plus oublié. De nos jours, cette doua
                  s&apos;applique également lorsque l&apos;on entre dans un centre
                  commercial, un supermarché ou tout lieu de négoce. Pour découvrir
                  d&apos;autres{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : L'honnêteté dans le commerce */}
              {/* ============================================ */}
              <section id="honnetete-commerce" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;honnêteté dans le commerce en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;honnêteté (as-sidq) est le pilier fondamental du commerce
                  en islam. Le Prophète Muhammad (paix et salut sur lui), lui-même
                  commerçant avant la révélation, était surnommé &laquo;&nbsp;al-Amin&nbsp;&raquo;
                  (le digne de confiance) par les Quraysh en raison de son
                  intégrité irréprochable dans les affaires. Ce surnom témoigne de
                  l&apos;importance capitale que l&apos;islam accorde à la probité
                  commerciale.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le commerçant honnête occupe un rang élevé auprès d&apos;Allah.
                  Le Prophète (paix et salut sur lui) a placé le marchand véridique
                  et digne de confiance aux côtés des prophètes et des martyrs le
                  Jour du Jugement. Cette promesse extraordinaire montre que le
                  commerce, lorsqu&apos;il est exercé avec droiture, n&apos;est pas
                  une simple activité matérielle mais un véritable acte
                  d&apos;adoration.
                </p>

                <HadithCard
                  arabic="التاجر الصدوق الأمين مع النبيين والصديقين والشهداء"
                  text="Le commerçant véridique et digne de confiance sera avec les prophètes, les véridiques et les martyrs (le Jour du Jugement)."
                  source="Rapporté par at-Tirmidhi (1209)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  À l&apos;inverse, le mensonge et la tromperie dans le commerce
                  font partie des péchés les plus graves en islam. Le Prophète
                  (paix et salut sur lui) a mis en garde de manière sévère contre
                  la fraude commerciale. Un jour, en passant devant un tas de
                  nourriture sur le marché, il enfonça sa main et trouva de
                  l&apos;humidité cachée en dessous. Il demanda au vendeur pourquoi
                  il avait dissimulé le défaut, puis déclara :
                  &laquo;&nbsp;Celui qui nous trompe n&apos;est pas des
                  nôtres&nbsp;&raquo; (Muslim, 102). Cette parole montre que la
                  tromperie commerciale est incompatible avec la foi musulmane.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dorés symbolisant la baraka dans le commerce halal en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="lire-aussi"
                title="Doua en sortant de la maison"
                description="Découvrez l'invocation authentique à prononcer en sortant de chez soi, y compris pour se rendre au marché ou au travail."
                href="/doua-sortir-maison-islam"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Éthique du commerce en islam */}
              {/* ============================================ */}
              <section id="ethique-commerciale" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;éthique du commerce en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam a établi un cadre éthique complet pour encadrer les
                  transactions commerciales. Bien avant les législations modernes
                  sur la protection des consommateurs, la Charia islamique a posé
                  des règles précises pour garantir la justice, la transparence et
                  l&apos;équité dans les échanges. Ces principes ne sont pas de
                  simples recommandations morales : ils constituent des obligations
                  religieuses dont le respect conditionne la validité même des
                  transactions.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La transparence dans les transactions
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le vendeur est tenu de révéler tous les défauts connus de sa
                        marchandise. Dissimuler un vice constitue une forme de
                        tromperie (ghish) sévèrement condamnée. Le Prophète (paix et
                        salut sur lui) a dit : &laquo;&nbsp;Les deux contractants
                        ont le choix tant qu&apos;ils ne se sont pas séparés. S&apos;ils
                        sont sincères et transparents, leur transaction sera bénie.
                        S&apos;ils dissimulent et mentent, la bénédiction de leur
                        transaction sera effacée&nbsp;&raquo; (al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;interdiction de l&apos;usure (riba)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;usure est l&apos;un des plus grands péchés en islam.
                        Allah dit : &laquo;&nbsp;Allah a rendu licite le commerce et
                        a interdit l&apos;usure&nbsp;&raquo; (Coran 2:275). Le
                        commerçant musulman doit veiller à ce que ses transactions
                        soient exemptes de toute forme de riba, qu&apos;il
                        s&apos;agisse d&apos;intérêts bancaires, de ventes à crédit
                        avec majoration excessive ou de toute pratique usuraire.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La justice dans les poids et mesures
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah a consacré une sourate entière (Al-Mutaffifin, sourate
                        83) à la condamnation de ceux qui trichent dans les poids et
                        mesures : &laquo;&nbsp;Malheur aux fraudeurs qui, lorsqu&apos;ils
                        achètent, exigent la pleine mesure, et lorsqu&apos;ils
                        mesurent ou pèsent pour les autres, font perdre&nbsp;&raquo;
                        (Coran 83:1-3). La précision dans les poids et mesures est
                        une obligation religieuse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;interdiction de l&apos;accaparement (ihtikar)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Stocker des marchandises de première nécessité pour
                        provoquer une pénurie artificielle et faire monter les prix
                        est formellement interdit. Le Prophète (paix et salut sur
                        lui) a dit : &laquo;&nbsp;Celui qui accapare est un
                        pécheur&nbsp;&raquo; (Muslim, 1605). Cette règle protège les
                        plus vulnérables et garantit l&apos;accès de tous aux biens
                        essentiels.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;interdiction des faux serments
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Jurer faussement pour écouler sa marchandise est un péché
                        majeur. Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Le faux serment fait vendre la marchandise mais
                        efface la baraka&nbsp;&raquo; (al-Bukhari et Muslim). Le
                        commerçant doit laisser la qualité de ses produits parler
                        d&apos;elle-même, sans recourir aux serments mensongers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas du commerçant musulman */}
              {/* ============================================ */}
              <section id="douas-commercant" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas du commerçant musulman
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la doua principale en entrant au marché, le musulman
                  dispose de plusieurs invocations liées au commerce, à la
                  subsistance et à la recherche de gains licites. Ces douas
                  permettent de sanctifier son activité professionnelle et de
                  demander à Allah la bénédiction dans ses revenus. Voici les
                  invocations authentiques que tout commerçant musulman devrait
                  connaître.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander une subsistance bénie
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est recommandée pour demander à Allah une
                  subsistance abondante et bénie. Le musulman la récite avant de
                  commencer sa journée de travail ou d&apos;ouvrir son commerce,
                  plaçant ainsi sa confiance en Allah comme Seul Pourvoyeur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا، وَعِلْمًا نَافِعًا، وَعَمَلًا مُتَقَبَّلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka rizqan tayyiban, wa &apos;ilman nafi&apos;an, wa &apos;amalan mutaqabbalan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande une subsistance bonne et pure, une science bénéfique et des oeuvres acceptées&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (925)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour la protection contre les gains illicites
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le commerçant musulman doit constamment veiller à la licéité de
                  ses revenus. Cette invocation demande à Allah de le préserver de
                  tout gain haram et de le guider vers ce qui est pur et béni.
                  Elle exprime la conscience que la subsistance ne dépend pas
                  uniquement de l&apos;effort humain, mais de la volonté et de la
                  bénédiction d&apos;Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma-kfini bihalalika &apos;an haramik, wa aghnini bifadlika &apos;amman siwak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-moi suffisamment de Ton licite pour me passer de Ton illicite, et enrichis-moi par Ta grâce pour me passer de tout autre que Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3563)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la facilité dans les affaires
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation générale est particulièrement adaptée au
                  commerçant qui fait face à des difficultés dans ses affaires,
                  des négociations compliquées ou des périodes de baisse
                  d&apos;activité. Elle demande à Allah de faciliter les choses et
                  d&apos;ouvrir les portes de la subsistance. Pour d&apos;autres
                  invocations liées au travail, consultez notre article sur la{" "}
                  <Link href="/doua-entretien-travail-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour l&apos;entretien et le travail</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahlan, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahlan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf ce que Tu rends facile, et Tu rends l&apos;affliction facile quand Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974)
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur l'éthique commerciale et la baraka en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : La baraka dans les gains halal */}
              {/* ============================================ */}
              <section id="baraka-gains-halal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La baraka dans les gains halal
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La baraka (bénédiction divine) est un concept central dans
                  l&apos;économie islamique. Un revenu modeste mais béni peut
                  suffire et apporter satisfaction et sérénité, tandis qu&apos;une
                  fortune immense dépourvue de baraka peut être source de malheur
                  et d&apos;insatisfaction permanente. La baraka dans les gains est
                  directement liée à la manière dont le musulman gagne sa vie et
                  conduit ses transactions.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a clairement établi le lien
                  entre l&apos;honnêteté commerciale et la bénédiction divine.
                  Lorsque les deux parties d&apos;une transaction sont sincères et
                  transparentes, Allah bénit leur commerce. À l&apos;inverse,
                  le mensonge et la dissimulation effacent toute baraka, même si
                  le profit apparent semble élevé. Cette réalité spirituelle
                  échappe souvent à ceux qui ne considèrent le commerce que sous
                  l&apos;angle matériel.
                </p>

                <HadithCard
                  arabic="البيعان بالخيار ما لم يتفرقا، فإن صدقا وبينا بورك لهما في بيعهما، وإن كتما وكذبا محقت بركة بيعهما"
                  text="Les deux contractants ont le choix tant qu'ils ne se sont pas séparés. S'ils sont sincères et transparents, leur transaction sera bénie. S'ils dissimulent et mentent, la bénédiction de leur transaction sera effacée."
                  source="Rapporté par al-Bukhari (2079) et Muslim (1532)"
                />

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sincérité :</strong> être honnête dans la
                      description des produits et ne jamais exagérer leurs qualités
                      attire la baraka d&apos;Allah sur la transaction.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;aumône (sadaqa) :</strong> donner une partie
                      de ses gains en aumône purifie la richesse et attire
                      davantage de bénédiction. Le Prophète (paix et salut sur lui)
                      a dit que la sadaqa n&apos;a jamais diminué une richesse.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La facilité envers le client :</strong> être
                      indulgent et conciliant dans les transactions, accepter les
                      retours et ne pas être dur dans les réclamations fait partie
                      des moyens d&apos;attirer la miséricorde d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas négliger la prière :</strong> Allah dit :
                      &laquo;&nbsp;Des hommes que ni le commerce ni la vente ne
                      distraient de l&apos;invocation d&apos;Allah, de
                      l&apos;accomplissement de la prière et de l&apos;acquittement
                      de la zakat&nbsp;&raquo; (Coran 24:37). Maintenir ses prières
                      est la clé de la baraka.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La recherche de la baraka ne signifie pas renoncer au profit.
                  L&apos;islam encourage la prospérité économique, mais celle-ci
                  doit être construite sur des bases éthiques solides. Le musulman
                  qui combine effort, honnêteté et invocation d&apos;Allah verra
                  sa subsistance bénie et suffisante, conformément à la promesse
                  divine. Avant de se rendre au marché, pensez également à réciter
                  la{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en sortant de la maison</Link>{" "}
                  pour placer votre journée sous la protection d&apos;Allah.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Le commerce du Prophète */}
              {/* ============================================ */}
              <section id="commerce-prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le modèle commercial du Prophète Muhammad
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) est le modèle par
                  excellence du commerçant musulman. Avant même de recevoir la
                  révélation, il était reconnu par toute la société mecquoise pour
                  son intégrité exceptionnelle dans les affaires. Son parcours
                  commercial offre des enseignements précieux pour tout musulman
                  exerçant une activité économique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dès son jeune âge, Muhammad (paix et salut sur lui) accompagnait
                  son oncle Abu Talib dans les caravanes commerciales vers la Syrie
                  (ash-Sham). Il apprit les rudiments du commerce et développa une
                  réputation d&apos;honnêteté qui parvint aux oreilles de Khadija
                  bint Khuwaylid (qu&apos;Allah soit satisfait d&apos;elle), une
                  riche commerçante de La Mecque. Impressionnée par sa droiture,
                  elle lui confia la gestion de ses caravanes commerciales.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les résultats furent remarquables : sous la direction de Muhammad,
                  les bénéfices de Khadija doublèrent. Mais ce n&apos;est pas
                  seulement le profit qui marqua Khadija : c&apos;est la manière
                  dont il l&apos;obtenait. Jamais il ne recourait au mensonge, à
                  la tromperie ou à l&apos;exagération. Sa parole était fiable, ses
                  comptes transparents et son comportement irréprochable avec les
                  partenaires commerciaux et les clients.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      As-Sadiq (Le Véridique)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce surnom lui fut donné par les Mecquois avant l&apos;islam
                      en raison de sa véracité absolue. Il ne mentait jamais, ni
                      dans le commerce ni dans aucun autre domaine. Ce titre
                      illustre la valeur de la parole donnée dans les affaires.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Al-Amin (Le Digne de confiance)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Même ses adversaires les plus farouches lui confiaient leurs
                      biens en dépôt. Lors de l&apos;hégire vers Médine, il chargea
                      Ali (qu&apos;Allah soit satisfait de lui) de restituer les
                      dépôts que les Mecquois lui avaient confiés, y compris ceux
                      de ses persécuteurs.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La facilité dans les transactions
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit : &laquo;&nbsp;Qu&apos;Allah
                      fasse miséricorde à un homme indulgent lorsqu&apos;il vend,
                      indulgent lorsqu&apos;il achète, et indulgent lorsqu&apos;il
                      réclame son dû&nbsp;&raquo; (al-Bukhari, 2076). La douceur
                      dans le commerce est une sunna.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le dhikr au marché
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète enseignait de ne jamais oublier Allah au marché.
                      La doua d&apos;entrée au marché transforme une activité
                      mondaine en acte d&apos;adoration récompensé par un million
                      de bonnes actions. C&apos;est le secret de la baraka dans
                      le commerce prophétique.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le modèle du Prophète (paix et salut sur lui) prouve que
                  l&apos;éthique et la prospérité ne sont pas contradictoires.
                  Au contraire, c&apos;est l&apos;intégrité qui attire la
                  confiance des clients, fidélise les partenaires et, surtout,
                  assure la baraka d&apos;Allah dans les gains. Tout commerçant
                  musulman devrait s&apos;inspirer de cet exemple et réciter les
                  invocations enseignées par le Prophète pour sanctifier son
                  activité quotidienne.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour l'entretien et le travail en islam"
                  description="Découvrez les invocations authentiques à réciter avant un entretien d'embauche ou pour demander la bénédiction dans votre travail."
                  href="/doua-entretien-travail-islam"
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
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en sortant de la maison
                  </Link>
                  <Link
                    href="/doua-entretien-travail-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour le travail
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur
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
