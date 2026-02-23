import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title: "Islam religion : définition, piliers et croyances musulmanes",
  description:
    "Qu'est-ce que l'islam ? Découvrez la religion musulmane, ses 5 piliers, les 6 piliers de la foi, le Coran, le Prophète Muhammad ﷺ et l'histoire de l'islam.",
  alternates: {
    canonical: "https://www.islamreligion.fr",
  },
};

const tocItems = [
  { id: "definition", label: "Qu'est-ce que l'islam ?" },
  { id: "piliers", label: "Les 5 piliers de l'islam" },
  { id: "foi", label: "Les 6 piliers de la foi" },
  { id: "sources", label: "Les sources de l'islam" },
  { id: "prophete", label: "Le Prophète Muhammad ﷺ" },
  { id: "histoire", label: "Histoire de l'islam" },
  { id: "courants", label: "Les courants de l'islam" },
  { id: "religions", label: "L'islam et les religions abrahamiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Que signifie le mot « islam » ?",
    answer:
      "Le mot « islam » vient de la racine arabe « s-l-m » qui évoque la paix et la soumission. Il désigne la soumission volontaire à la volonté de Dieu (Allah). Un musulman est donc celui qui se soumet à Dieu en toute conscience.",
  },
  {
    question: "Quelle est la différence entre musulman et islamiste ?",
    answer:
      "Un musulman est une personne qui pratique l'islam, la religion. Le terme « islamiste » désigne une personne qui instrumentalise la religion à des fins politiques. Ce sont deux notions très différentes : l'immense majorité des musulmans ne sont pas islamistes.",
  },
  {
    question: "Quels sont les 5 piliers de l'islam ?",
    answer:
      "Les cinq piliers sont : la shahada (attestation de foi), la salat (prière quotidienne), la zakat (aumône légale), le sawm (jeûne du mois de Ramadan) et le hajj (pèlerinage à La Mecque au moins une fois dans sa vie pour ceux qui en ont la capacité).",
  },
  {
    question: "Quels sont les 6 piliers de la foi en islam ?",
    answer:
      "Les six piliers de la foi (al-iman) sont : croire en Allah, en Ses anges, en Ses Livres révélés, en Ses prophètes et messagers, au Jour dernier et au destin (al-qadar), qu'il soit bon ou mauvais.",
  },
  {
    question: "Quel est le livre sacré de l'islam ?",
    answer:
      "Le Coran est le livre sacré des musulmans. Il est considéré comme la parole de Dieu révélée au Prophète Muhammad ﷺ par l'intermédiaire de l'ange Gabriel (Jibril) sur une période de 23 ans. Il comprend 114 sourates et plus de 6 200 versets.",
  },
  {
    question: "Qui est le prophète de l'islam ?",
    answer:
      "Muhammad ﷺ (paix et bénédictions sur lui) est le dernier prophète et messager de Dieu selon l'islam. Né à La Mecque vers 570, il a reçu la révélation divine à l'âge de 40 ans. Les musulmans le considèrent comme le sceau des prophètes, c'est-à-dire le dernier envoyé de Dieu à l'humanité.",
  },
  {
    question: "L'islam est-il une religion de paix ?",
    answer:
      "Le mot « islam » partage sa racine avec le mot « salam » qui signifie paix en arabe. Les textes fondateurs de l'islam appellent à la paix, à la justice et au respect d'autrui. Le Coran affirme que « quiconque tue une âme innocente, c'est comme s'il avait tué l'humanité entière » (sourate Al-Ma'ida, verset 32).",
  },
  {
    question: "Combien y a-t-il de musulmans dans le monde ?",
    answer:
      "L'islam compte environ 1,8 milliard de fidèles à travers le monde, ce qui en fait la deuxième religion après le christianisme. Les musulmans représentent environ 24 % de la population mondiale et vivent sur tous les continents.",
  },
  {
    question: "Quelle est la différence entre sunnite et chiite ?",
    answer:
      "La divergence entre sunnites et chiites remonte à la question de la succession du Prophète Muhammad ﷺ après sa mort. Les sunnites (environ 85-90 % des musulmans) reconnaissent les quatre premiers califes. Les chiites (environ 10-15 %) considèrent que la succession revenait à Ali ibn Abi Talib, cousin et gendre du Prophète.",
  },
  {
    question: "Comment se convertir à l'islam ?",
    answer:
      "La conversion à l'islam passe par la prononciation sincère de la shahada (attestation de foi) : « J'atteste qu'il n'y a de divinité qu'Allah et que Muhammad est Son messager. » Il est recommandé de le faire en présence de témoins et de prendre le temps d'étudier les bases de la foi avant cette démarche.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.islamreligion.fr/#webpage",
        url: "https://www.islamreligion.fr",
        name: "Islam religion : définition, piliers et croyances musulmanes",
        description:
          "Qu'est-ce que l'islam ? Découvrez la religion musulmane, ses 5 piliers, les 6 piliers de la foi, le Coran, le Prophète Muhammad ﷺ et l'histoire de l'islam.",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        inLanguage: "fr-FR",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.islamreligion.fr/#website",
        url: "https://www.islamreligion.fr",
        name: "IslamReligion.fr",
        inLanguage: "fr-FR",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
        ],
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
          title="Islam : comprendre la religion musulmane"
          subtitle="Les piliers, les croyances et les fondements de l'islam présentés de manière claire, authentique et accessible à tous."
          imageSrc="/images/grande-mosquee-blanche-minarets-islam-architecture.jpg"
          imageAlt="Grande mosquée blanche avec minarets, symbole de l'architecture islamique"
          ctas={[
            { label: "Découvrir l'islam", href: "#definition", variant: "primary" },
            { label: "Apprendre l'arabe", href: "/apprendre-larabe", variant: "secondary" },
          ]}
          stats={[
            { value: "1,8 Mrd", label: "de musulmans dans le monde" },
            { value: "5", label: "piliers de l'islam" },
            { value: "114", label: "sourates du Coran" },
            { value: "25", label: "prophètes mentionnés" },
          ]}
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            {/* Sidebar : sommaire */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Contenu principal */}
            <article className="max-w-3xl">
              {/* Sommaire mobile */}
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Définition */}
              {/* ============================================ */}
              <section id="definition" className="scroll-mt-24 pt-8 lg:pt-0">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que l&apos;islam ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam est une religion monothéiste abrahamique fondée sur la révélation
                  du Coran au Prophète Muhammad ﷺ au VII<sup>e</sup> siècle. Le mot « islam »
                  provient de la racine arabe <em>s-l-m</em>, qui exprime à la fois la paix
                  (<em>salam</em>) et la soumission volontaire à Dieu (<em>istislam</em>).
                  Avec environ 1,8 milliard de fidèles répartis sur tous les continents,
                  l&apos;islam est la deuxième religion du monde.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Être musulman, c&apos;est reconnaître l&apos;unicité de Dieu (Allah en arabe)
                  et accepter Muhammad ﷺ comme Son dernier messager. Cette religion repose sur
                  un équilibre entre foi intérieure, pratique cultuelle et comportement moral.
                  Elle englobe tous les aspects de la vie : la spiritualité, les relations
                  familiales, le commerce, la justice sociale et le rapport à la nature.
                </p>

                <HadithCard
                  arabic="إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ"
                  text="Les actes ne valent que par les intentions."
                  source="Hadith rapporté par al-Bukhari et Muslim"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam se distingue par trois dimensions complémentaires.
                  L&apos;<strong>islam</strong> lui-même désigne les pratiques extérieures
                  (les cinq piliers). L&apos;<strong>iman</strong> (la foi) concerne les
                  croyances du cœur. Et l&apos;<strong>ihsan</strong> (l&apos;excellence)
                  représente le degré le plus élevé : adorer Dieu comme si on Le voyait, car
                  même si on ne Le voit pas, Lui nous voit. Ces trois niveaux forment un
                  tout cohérent que chaque musulman cherche à développer tout au long de sa vie.
                </p>

                <div className="mt-8 rounded-xl border border-border bg-background-alt p-6">
                  <h3 className="text-lg font-semibold text-primary">À retenir</h3>
                  <ul className="mt-3 space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Religion monothéiste : un seul Dieu, Allah
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Dernier prophète : Muhammad ﷺ
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      Livre sacré : le Coran (114 sourates)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      1,8 milliard de fidèles dans le monde
                    </li>
                  </ul>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Les 5 piliers */}
              {/* ============================================ */}
              <section id="piliers" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les 5 piliers de l&apos;islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les cinq piliers (<em>arkan al-islam</em>) constituent le socle de la
                  pratique musulmane. Chaque musulman est tenu de les observer dans la mesure
                  de ses capacités. Ils ont été énoncés par le Prophète Muhammad ﷺ dans
                  un célèbre hadith rapporté par Omar ibn al-Khattab.
                </p>

                <HadithCard
                  arabic="بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ"
                  text="L'islam est bâti sur cinq piliers."
                  source="Hadith rapporté par al-Bukhari et Muslim"
                />

                {/* Pilier 1 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary">
                    1. La shahada — l&apos;attestation de foi
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    La shahada est la déclaration par laquelle une personne reconnaît
                    qu&apos;il n&apos;y a de divinité qu&apos;Allah et que Muhammad ﷺ est
                    Son messager. C&apos;est la porte d&apos;entrée dans l&apos;islam.
                    En arabe, elle se formule ainsi :
                    « <em>Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan
                    rasul Allah</em> » (J&apos;atteste qu&apos;il n&apos;y a de divinité
                    qu&apos;Allah et que Muhammad est le messager d&apos;Allah).
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Cette attestation résume l&apos;essence du monothéisme islamique :
                    le <em>tawhid</em>, l&apos;unicité absolue de Dieu. Elle implique
                    de reconnaître qu&apos;Allah est le seul Créateur, le seul digne
                    d&apos;adoration, et que Ses noms et attributs Lui sont propres.
                  </p>
                </div>

                {/* Pilier 2 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary">
                    2. La salat — la prière rituelle
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    La prière (<em>salat</em>) est le lien direct entre le croyant et
                    son Créateur. Elle s&apos;accomplit cinq fois par jour : à l&apos;aube
                    (fajr), à la mi-journée (dhuhr), dans l&apos;après-midi (asr),
                    au coucher du soleil (maghrib) et le soir (isha). Chaque prière
                    comprend des mouvements précis — position debout, inclinaison,
                    prosternation — accompagnés de récitations coraniques.
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Avant la prière, le musulman effectue les ablutions (<em>wudu</em>),
                    une purification rituelle à l&apos;eau. La prière se fait en direction
                    de la Kaaba à La Mecque (<em>qibla</em>). Elle peut être accomplie
                    individuellement ou en groupe, et la prière en commun du vendredi
                    (salat al-jumu&apos;a) revêt une importance particulière.
                  </p>
                </div>

                {/* Pilier 3 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary">
                    3. La zakat — l&apos;aumône purificatrice
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    La zakat est une obligation financière annuelle pour tout musulman
                    dont les biens atteignent un seuil minimal (<em>nisab</em>). Elle
                    représente généralement 2,5 % de l&apos;épargne et des richesses
                    accumulées sur une année. Le Coran précise huit catégories de
                    bénéficiaires : les pauvres, les nécessiteux, ceux qui collectent
                    la zakat, les nouveaux convertis, les esclaves à affranchir, les
                    endettés, ceux qui œuvrent dans le sentier de Dieu et les voyageurs
                    en difficulté.
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Au-delà de son aspect financier, la zakat purifie le cœur de
                    l&apos;attachement excessif aux biens matériels et renforce la
                    solidarité au sein de la communauté. Elle se distingue de la
                    <em> sadaqa</em> (aumône volontaire) qui, elle, n&apos;a pas de
                    montant ni de moment fixe.
                  </p>
                </div>

                {/* Pilier 4 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary">
                    4. Le sawm — le jeûne du Ramadan
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Pendant le mois de Ramadan, neuvième mois du calendrier lunaire islamique,
                    les musulmans jeûnent de l&apos;aube au coucher du soleil. Ce jeûne
                    (<em>sawm</em>) consiste à s&apos;abstenir de manger, de boire et
                    d&apos;avoir des relations intimes durant les heures diurnes.
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Le Ramadan est bien plus qu&apos;une privation alimentaire. C&apos;est
                    un mois de recueillement spirituel, de lecture du Coran, de prières
                    nocturnes (<em>tarawih</em>) et de générosité. Le jeûne développe la
                    maîtrise de soi, la patience et l&apos;empathie envers ceux qui
                    souffrent de la faim au quotidien. Les personnes malades, les femmes
                    enceintes, les voyageurs et les enfants en sont dispensés.
                  </p>
                </div>

                {/* Pilier 5 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary">
                    5. Le hajj — le pèlerinage à La Mecque
                  </h3>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Le pèlerinage à La Mecque (<em>hajj</em>) est une obligation pour
                    tout musulman adulte qui en a les moyens physiques et financiers,
                    au moins une fois dans sa vie. Il se déroule chaque année entre le
                    8 et le 13 du mois de Dhul Hijja, le dernier mois du calendrier
                    islamique.
                  </p>
                  <p className="mt-3 leading-relaxed text-foreground">
                    Les pèlerins, vêtus de deux pièces de tissu blanc non cousues
                    (<em>ihram</em>), accomplissent plusieurs rites : la circumambulation
                    autour de la Kaaba (<em>tawaf</em>), le parcours entre les collines
                    de Safa et Marwa (<em>sa&apos;i</em>), la station sur le mont Arafat
                    et la lapidation symbolique des stèles à Mina. Le hajj est un moment
                    d&apos;unité où des millions de croyants de toutes origines se
                    retrouvent dans une égalité totale devant Dieu.
                  </p>

                  <div className="mt-6 overflow-hidden rounded-xl">
                    <Image
                      src="/images/kaaba-mecque-pelerinage-hajj-islam.jpg"
                      alt="Pèlerins autour de la Kaaba à La Mecque lors du hajj"
                      width={800}
                      height={500}
                      className="w-full object-cover"
                    />
                    <p className="mt-2 text-center text-sm text-foreground-secondary">
                      La Kaaba à La Mecque, lieu le plus sacré de l&apos;islam
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Les 6 piliers de la foi */}
              {/* ============================================ */}
              <section id="foi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les 6 piliers de la foi (al-iman)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Si les cinq piliers de l&apos;islam concernent la pratique, les six piliers
                  de la foi (<em>arkan al-iman</em>) touchent aux croyances du cœur. Tout
                  musulman doit y adhérer pour que sa foi soit complète. Ils sont tirés du
                  célèbre hadith de Jibril (Gabriel) dans lequel le Prophète ﷺ a défini la foi.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "La foi en Allah",
                      desc: "Croire en l'existence de Dieu, en Son unicité, en Ses noms et Ses attributs parfaits. C'est le fondement même de l'islam : le tawhid.",
                    },
                    {
                      title: "La foi aux anges",
                      desc: "Les anges sont des créatures de lumière obéissant à Dieu. Parmi eux : Jibril (Gabriel) qui transmet la révélation, Mikaïl, Israfil et l'ange de la mort.",
                    },
                    {
                      title: "La foi aux Livres révélés",
                      desc: "Dieu a envoyé des Livres à Ses prophètes : les Feuillets d'Ibrahim, la Torah de Moussa, les Psaumes de Dawud, l'Évangile de Issa et le Coran de Muhammad ﷺ.",
                    },
                    {
                      title: "La foi aux prophètes",
                      desc: "Le Coran mentionne 25 prophètes, d'Adam à Muhammad ﷺ, en passant par Noé, Abraham, Moïse et Jésus. Tous ont transmis le même message : l'unicité de Dieu.",
                    },
                    {
                      title: "La foi au Jour dernier",
                      desc: "Chaque âme sera ressuscitée et jugée selon ses actes. Le Jour du jugement (yawm al-qiyama) est un pilier central de la croyance islamique.",
                    },
                    {
                      title: "La foi au destin",
                      desc: "Le qadar signifie que Dieu a connaissance de toute chose et que rien n'échappe à Sa volonté. Le musulman accepte les épreuves avec patience et les bienfaits avec gratitude.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-white p-5 transition-shadow hover:shadow-sm"
                    >
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-8 leading-relaxed text-foreground">
                  La foi et la pratique sont indissociables en islam. Un musulman ne peut
                  se contenter de croire sans agir, ni pratiquer sans conviction sincère.
                  Les <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves en islam</Link> sont
                  d&apos;ailleurs considérés comme un signe lié à la foi : le Prophète ﷺ
                  a enseigné que le rêve véridique est une des composantes de la prophétie.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Les sources */}
              {/* ============================================ */}
              <section id="sources" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sources de l&apos;islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam repose sur deux sources principales : le Coran et la Sunna.
                  Ces textes fondateurs guident les musulmans dans leur relation à Dieu,
                  leur vie quotidienne et leurs interactions sociales.
                </p>

                {/* Le Coran */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le Coran : la parole de Dieu
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Coran (<em>al-Qur&apos;an</em>, « la récitation ») est le texte sacré
                  de l&apos;islam. Les musulmans croient qu&apos;il s&apos;agit de la parole
                  littérale de Dieu, transmise au Prophète Muhammad ﷺ par l&apos;ange
                  Gabriel sur une période de 23 ans, entre 610 et 632. Il se compose de
                  114 sourates (chapitres) et de plus de 6 200 versets (<em>ayat</em>).
                </p>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Coran aborde des thèmes variés : l&apos;unicité de Dieu, les récits
                  des prophètes, les règles de vie, la morale, les lois, la vie après la
                  mort et les signes de Dieu dans la création. Il a été préservé en{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">langue arabe</Link>{" "}
                  dans sa forme originale depuis sa révélation. Pour ceux qui souhaitent
                  accéder directement au texte,{" "}
                  <Link href="/apprendre-le-coran" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre le Coran</Link>{" "}
                  est une démarche spirituelle valorisée en islam.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
                    alt="Coran ouvert avec un chapelet en bois, versets coraniques visibles"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <HadithCard
                  arabic="خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ"
                  text="Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne."
                  source="Hadith rapporté par al-Bukhari"
                />

                {/* La Sunna */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La Sunna et les hadiths
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La Sunna désigne l&apos;ensemble des paroles, des actes et des approbations
                  tacites du Prophète Muhammad ﷺ. Elle est transmise à travers les
                  hadiths, des récits rapportés par les compagnons du Prophète puis compilés
                  par des savants. Les deux recueils les plus reconnus sont ceux
                  d&apos;al-Bukhari et de Muslim, considérés comme les plus authentiques.
                </p>
                <p className="mt-3 leading-relaxed text-foreground">
                  La Sunna complète le Coran en précisant les modalités pratiques du culte
                  et de la vie quotidienne. Par exemple, le Coran ordonne la prière, mais
                  c&apos;est la Sunna qui en détaille les gestes et les horaires.
                </p>

                {/* Autres sources */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le consensus et le raisonnement analogique
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Deux autres sources secondaires complètent le Coran et la Sunna dans la
                  jurisprudence islamique (<em>fiqh</em>). L&apos;<em>ijma</em> est le
                  consensus des savants sur une question donnée. Le <em>qiyas</em> est le
                  raisonnement par analogie, utilisé pour répondre à des situations nouvelles
                  en se référant à des cas déjà tranchés par les textes. Ces outils
                  permettent à la loi islamique de s&apos;adapter aux réalités de chaque
                  époque tout en restant fidèle à ses principes fondateurs.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Le Prophète */}
              {/* ============================================ */}
              <section id="prophete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Prophète Muhammad ﷺ
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Muhammad ﷺ (paix et bénédictions sur lui) est né à La Mecque vers l&apos;an
                  570 dans la tribu des Quraysh. Orphelin très jeune, il a été élevé par
                  son grand-père Abd al-Muttalib puis par son oncle Abu Talib. Il était connu
                  pour sa droiture et son honnêteté, ce qui lui valait le surnom
                  d&apos;<em>al-Amine</em> (le digne de confiance).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La révélation
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  À l&apos;âge de 40 ans, alors qu&apos;il méditait dans la grotte de Hira
                  sur le mont An-Nur, Muhammad ﷺ reçut la première révélation par
                  l&apos;intermédiaire de l&apos;ange Gabriel. Les premiers versets révélés
                  furent ceux de la sourate Al-Alaq : « Lis, au nom de ton Seigneur qui a
                  créé. » Cette nuit, connue sous le nom de <em>Laylat al-Qadr</em> (la
                  Nuit du Destin), marque le début de la mission prophétique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;Hégire et la communauté de Médine
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Face à la persécution des Mecquois, le Prophète ﷺ et ses compagnons
                  émigrèrent vers Médine en 622. Cet événement, appelé <em>Hégire</em>,
                  marque le début du calendrier islamique. À Médine, Muhammad ﷺ établit
                  la première communauté musulmane organisée, fondée sur la fraternité entre
                  les émigrés mecquois (<em>muhajiroun</em>) et les habitants de Médine
                  (<em>ansar</em>). Il rédigea la Constitution de Médine, un texte
                  qui organisait la coexistence entre musulmans, juifs et autres tribus.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Un message universel
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète ﷺ transmit le message de l&apos;islam pendant 23 ans, jusqu&apos;à
                  sa mort en 632 à Médine. Son dernier sermon, prononcé lors du pèlerinage
                  d&apos;adieu sur le mont Arafat, résume les valeurs de l&apos;islam :
                  l&apos;égalité entre les êtres humains, le respect des droits, la justice
                  et la fraternité. Il déclara notamment : « Un Arabe n&apos;a aucun mérite
                  sur un non-Arabe, ni un non-Arabe sur un Arabe, si ce n&apos;est par la
                  piété. »
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sa vie, ses enseignements et son comportement constituent un modèle pour
                  les musulmans. La <em>sira</em> (biographie prophétique) et les hadiths
                  sont étudiés pour comprendre comment appliquer les principes coraniques
                  au quotidien. Les musulmans invoquent la paix et les bénédictions sur lui
                  chaque fois que son nom est mentionné, par respect et amour.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mosquee-prophete-medine-islam-dome-vert.jpg"
                    alt="Mosquée du Prophète à Médine avec son dôme vert"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    La mosquée du Prophète (al-Masjid an-Nabawi) à Médine
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Histoire */}
              {/* ============================================ */}
              <section id="histoire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Histoire de l&apos;islam
                </h2>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les débuts et l&apos;expansion
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après la mort du Prophète ﷺ en 632, la communauté musulmane fut dirigée
                  par les quatre califes bien guidés (<em>al-khulafa ar-rashidun</em>) :
                  Abu Bakr, Omar, Othman et Ali. Cette période est considérée comme l&apos;âge
                  d&apos;or de la gouvernance islamique. Sous leur direction, l&apos;islam
                  s&apos;étendit rapidement de la péninsule arabique vers la Perse, la Syrie,
                  l&apos;Égypte et l&apos;Afrique du Nord.
                </p>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les dynasties omeyyade (661-750) puis abbasside (750-1258) poursuivirent
                  cette expansion. La civilisation islamique s&apos;étendit de l&apos;Espagne
                  à l&apos;Inde, créant un vaste espace culturel et commercial unifié par
                  la foi, la langue arabe et les échanges intellectuels.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;âge d&apos;or de la civilisation islamique
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Entre le VIII<sup>e</sup> et le XIV<sup>e</sup> siècle, le monde musulman
                  connut un essor scientifique et culturel remarquable. Les savants musulmans
                  ont apporté des contributions majeures dans de nombreux domaines.
                </p>
                <p className="mt-3 leading-relaxed text-foreground">
                  En <strong>mathématiques</strong>, al-Khwarizmi posa les fondements de
                  l&apos;algèbre (le mot vient de l&apos;arabe <em>al-jabr</em>). Le mot
                  « algorithme » lui-même dérive de son nom. En <strong>médecine</strong>,
                  Ibn Sina (Avicenne) rédigea le <em>Canon de la médecine</em>, référence
                  en Europe pendant des siècles. Les pratiques de la{" "}
                  <Link href="/remede-arabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">médecine prophétique et des remèdes arabes</Link>{" "}
                  s&apos;inscrivent dans cette tradition. En <strong>optique</strong>, Ibn
                  al-Haytham est considéré comme le père de la méthode scientifique moderne.
                  En <strong>astronomie</strong>, les savants musulmans perfectionnèrent
                  l&apos;astrolabe et établirent des observatoires.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coupole-mosquee-art-islamique-calligraphie.jpg"
                    alt="Coupole de mosquée ornée d'art islamique et de calligraphie"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    L&apos;art islamique, reflet d&apos;une civilisation tournée vers la beauté et le savoir
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;islam dans le monde contemporain
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Aujourd&apos;hui, l&apos;islam est présent sur tous les continents. Les pays
                  à majorité musulmane s&apos;étendent du Maroc à l&apos;Indonésie, en passant
                  par le Moyen-Orient, l&apos;Afrique subsaharienne et l&apos;Asie centrale.
                  L&apos;Indonésie est le pays comptant le plus de musulmans (environ
                  230 millions), suivi du Pakistan, de l&apos;Inde et du Bangladesh.
                </p>
                <p className="mt-3 leading-relaxed text-foreground">
                  En Europe et en Amérique, les communautés musulmanes se sont développées
                  au fil des migrations et des conversions. En France, l&apos;islam est la
                  deuxième religion avec environ 5 à 6 millions de fidèles. Les musulmans
                  y contribuent à la vie sociale, économique et culturelle du pays.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Les courants */}
              {/* ============================================ */}
              <section id="courants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les courants de l&apos;islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam, bien qu&apos;uni par un socle commun de croyances et de
                  pratiques, connaît plusieurs courants qui se distinguent par des questions
                  théologiques, juridiques ou spirituelles.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le sunnisme
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le sunnisme rassemble environ 85 à 90 % des musulmans. Le terme
                  vient de <em>ahl as-sunna wal-jama&apos;a</em> (les gens de la Sunna
                  et de la communauté). Les sunnites se réfèrent au Coran, à la Sunna
                  du Prophète ﷺ et reconnaissent la légitimité des quatre premiers
                  califes. Le sunnisme comprend quatre grandes écoles juridiques
                  (<em>madhahib</em>) : hanafite, malékite, chafiite et hanbalite.
                  Chacune propose une méthodologie propre pour interpréter les textes,
                  mais elles se reconnaissent mutuellement.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le chiisme
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le chiisme représente environ 10 à 15 % des musulmans. Les chiites
                  considèrent que la direction de la communauté revenait à Ali ibn Abi
                  Talib, cousin et gendre du Prophète ﷺ, puis à ses descendants (les
                  imams). Le chiisme duodécimain, le plus répandu, reconnaît une lignée
                  de douze imams. L&apos;Iran, l&apos;Irak, Bahreïn et le Liban comptent
                  d&apos;importantes populations chiites.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le soufisme
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le soufisme (<em>tasawwuf</em>) est la dimension spirituelle et mystique
                  de l&apos;islam. Il ne constitue pas un courant séparé mais une voie
                  intérieure que l&apos;on retrouve aussi bien chez les sunnites que chez les
                  chiites. Les soufis cherchent la proximité avec Dieu à travers le
                  dhikr (invocation), la méditation, l&apos;ascèse et la purification du
                  cœur. De grands savants comme al-Ghazali, Rumi ou Ibn Arabi ont marqué
                  cette tradition.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Religions abrahamiques */}
              {/* ============================================ */}
              <section id="religions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;islam et les religions abrahamiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam se considère comme la continuité des messages divins transmis
                  depuis Abraham (Ibrahim). Le Coran mentionne de nombreux prophètes communs
                  au judaïsme et au christianisme : Adam, Noé (Nuh), Abraham (Ibrahim),
                  Moïse (Moussa), David (Dawud) et Jésus (Issa), entre autres.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Points communs
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Les trois religions partagent le monothéisme, la croyance en des prophètes
                  envoyés par Dieu, la notion de Livres révélés, le Jour du jugement et
                  un cadre moral fondé sur la justice et la compassion. Abraham occupe une
                  place centrale dans chacune d&apos;elles : père d&apos;Isaac (ancêtre des
                  Hébreux) et d&apos;Ismaël (ancêtre des Arabes selon la tradition islamique).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Différences fondamentales
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La principale divergence tient à la nature de Dieu et au statut de Jésus.
                  L&apos;islam rejette la Trinité et considère Jésus (Issa) comme un prophète
                  majeur et le Messie, mais pas comme le fils de Dieu. Les musulmans croient
                  que Jésus n&apos;a pas été crucifié mais élevé au ciel par Dieu, et
                  qu&apos;il reviendra avant la fin des temps.
                </p>
                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;islam reconnaît la Torah et l&apos;Évangile comme des révélations
                  divines originelles, tout en considérant que ces textes ont subi des
                  altérations au fil du temps. Le Coran est vu comme la dernière révélation,
                  confirmant et complétant les messages précédents.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La place de Jésus (Issa) en islam
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Jésus occupe une place singulière en islam. Le Coran lui consacre de
                  nombreux versets et une sourate porte le nom de sa mère, Maryam (Marie).
                  Il est décrit comme né miraculeusement d&apos;une vierge, ayant accompli
                  des miracles par la permission de Dieu, et porteur d&apos;un message
                  de miséricorde. Les musulmans l&apos;aiment et le respectent profondément
                  en tant que prophète et messager de Dieu.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 9 : FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* ============================================ */}
              {/* SECTION 10 : Tous nos articles */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Tous nos articles
                </h2>
                <p className="mt-4 leading-relaxed text-foreground">
                  Retrouvez l&apos;ensemble de nos articles classés par thème pour approfondir
                  votre connaissance de l&apos;islam.
                </p>

                {/* Rêves en islam */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary">
                    <Link href="/reves-islam" className="underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Rêves en islam
                    </Link>
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "/rever-souris-islam", label: "Souris" },
                      { href: "/reve-poisson-islam-richesse", label: "Poisson" },
                      { href: "/reve-arachnide-islam", label: "Araignée" },
                      { href: "/rever-chien-islam-signification", label: "Chien" },
                      { href: "/reve-cheval-islam-bienfaits", label: "Cheval" },
                      { href: "/rever-rat-islam-purification", label: "Rat" },
                      { href: "/symbolisme-fourmis-islam", label: "Fourmis" },
                      { href: "/rever-poux-islam-protection", label: "Poux" },
                      { href: "/rever-chat-islam-symbolisme", label: "Chat" },
                      { href: "/rever-crocodile-islam-protection", label: "Crocodile" },
                      { href: "/cafard-islam-signification", label: "Cafard" },
                      { href: "/signification-reve-tuer-islam", label: "Tuer" },
                      { href: "/pleurer-reve-islam-compassion", label: "Pleurer" },
                      { href: "/rever-tirer-dessus-islam", label: "Se faire tirer dessus" },
                      { href: "/rever-mort-islam-messages", label: "Mort" },
                      { href: "/rever-perdre-dents-islam", label: "Perdre ses dents" },
                      { href: "/reves-ex-islam", label: "Son ex" },
                      { href: "/rever-enceinte-islam", label: "Être enceinte" },
                      { href: "/rever-accoucher-islam", label: "Accoucher" },
                      { href: "/reve-erotique-islam-purification", label: "Rêve érotique" },
                      { href: "/mariage-islam-presages-significations", label: "Mariage" },
                      { href: "/sorcellerie-islam-protection", label: "Sorcellerie" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Prière et pratique */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary">Prière et pratique</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "/prier-islam-excellence-spirituelle", label: "Prier avec excellence" },
                      { href: "/priere-voyageur-islam", label: "Prière du voyageur" },
                      { href: "/abandon-priere-islam-consequences", label: "Abandon de la prière" },
                      { href: "/istikhara-priere-consultation", label: "Prière de consultation (istikhara)" },
                      { href: "/invocations-reussite-facilite", label: "Invocations pour la réussite" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Eschatologie */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary">Fin des temps et eschatologie</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "/fin-monde-islam-preparation", label: "Se préparer à la fin des temps" },
                      { href: "/signes-fin-monde-islam", label: "Signes de la fin du monde" },
                      { href: "/signes-mineurs-actuels", label: "Signes mineurs actuels" },
                      { href: "/dajjal-signes-islam", label: "Le Dajjal (Antéchrist)" },
                      { href: "/retour-jesus-islam", label: "Le retour de Jésus (Issa)" },
                      { href: "/gog-magog-liberation-fin-des-temps", label: "Gog et Magog" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mariage et famille */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary">Mariage et famille</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "/mariage-islamique-contrat", label: "Le contrat de mariage" },
                      { href: "/divorce-islam-talaq-khula", label: "Divorce en islam" },
                      { href: "/droits-femme-divorce-islamique", label: "Droits de la femme et divorce" },
                      { href: "/maternite-islam-responsabilite", label: "Maternité en islam" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Jurisprudence */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary">Jurisprudence et éthique</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "/halal-haram-criteres", label: "Halal et haram : les critères" },
                      { href: "/jurisprudence-islamique-coran-sunna-ijma", label: "Sources de la jurisprudence" },
                      { href: "/peches-sexualite-islam", label: "Péchés et sexualité" },
                      { href: "/temoins-crime-islam-protection", label: "Témoins d'un crime en islam" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Remèdes arabes */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary">
                    <Link href="/remede-arabe" className="underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                      Remèdes arabes et médecine prophétique
                    </Link>
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "/remede-yeux-islam-soins", label: "Soins des yeux" },
                      { href: "/remede-arabe-endometriose", label: "Endométriose" },
                      { href: "/alopecie-remede-islam", label: "Alopécie" },
                      { href: "/remede-arabe-acouphene", label: "Acouphènes" },
                      { href: "/psoriasis-remede-arabe", label: "Psoriasis" },
                      { href: "/remede-arabe-arreter-fumer", label: "Arrêter de fumer" },
                      { href: "/remede-arabe-constipation", label: "Constipation" },
                      { href: "/remede-arabe-hemorroides", label: "Hémorroïdes" },
                      { href: "/remede-arabe-toux-soins-naturels", label: "Toux" },
                      { href: "/remede-angoisse-islam", label: "Angoisse" },
                      { href: "/remede-arabe-grossesse", label: "Grossesse" },
                      { href: "/remede-arabe-maigrir-islam", label: "Maigrir" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Spiritualité */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-primary">Spiritualité et repentir</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { href: "/conditions-maghfira-pardon", label: "Conditions du pardon divin" },
                      { href: "/repentir-sincere-islam-tawba", label: "Le repentir sincère (tawba)" },
                      { href: "/apprendre-science-religieuse-islam", label: "Apprendre la science religieuse" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-lg border border-border bg-white px-3 py-1.5 text-sm text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              <AffiliateForm
                title="Apprenez l'arabe et le Coran avec une formation structurée"
                description="Choisissez la formation qui correspond à vos objectifs et recevez un programme d'apprentissage adapté à votre niveau."
              />

              {/* ============================================ */}
              {/* CTA de navigation interne */}
              {/* ============================================ */}
              <section className="mt-16 rounded-xl bg-primary-dark p-8 text-center lg:p-12">
                <h2 className="text-2xl font-bold text-white lg:text-3xl">
                  Aller plus loin
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-white/70">
                  Explorez nos ressources pour approfondir votre connaissance de l&apos;islam,
                  apprendre la langue du Coran ou découvrir la sagesse de la tradition
                  prophétique.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-xl bg-secondary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-light"
                  >
                    Apprendre l&apos;arabe
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Apprendre le Coran
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Rêves en islam
                  </Link>
                  <Link
                    href="/remede-arabe"
                    className="rounded-xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Remèdes arabes
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
