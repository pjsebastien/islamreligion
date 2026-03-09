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
    "Doua de l'Aïd el-Adha en islam : takbirat, sacrifice et invocations authentiques",
  description:
    "Découvrez les douas de l'Aïd el-Adha en islam : takbirat al-eid en arabe avec phonétique et traduction, doua taqabbalAllahu minna wa minkum, doua lors de l'égorgement du sacrifice, histoire d'Ibrahim et sunnan authentiques du jour de l'Aïd al-Adha.",
  openGraph: {
    title:
      "Doua de l'Aïd el-Adha en islam : takbirat, sacrifice et invocations authentiques",
    description:
      "Les invocations authentiques de l'Aïd el-Adha : takbirat, doua du sacrifice en arabe, phonétique et traduction. Guide complet des sunnan et adorations du jour de l'Aïd al-Adha.",
    url: "https://www.islamreligion.fr/doua-aid-adha-islam",
    images: [
      {
        url: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-aid-adha-islam",
  },
};

const tocItems = [
  { id: "takbirat-aid-adha", label: "Les takbirat de l'Aïd el-Adha" },
  { id: "doua-taqabbal", label: "Doua taqabbalAllahu minna wa minkum" },
  { id: "doua-sacrifice", label: "Doua lors du sacrifice (udhiya)" },
  { id: "histoire-ibrahim", label: "Le sacrifice d'Ibrahim et son invocation" },
  { id: "sunnan-aid-adha", label: "Les sunnan du jour de l'Aïd el-Adha" },
  { id: "douas-authentiques-adha", label: "Douas authentiques de l'Aïd el-Adha" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de l'Aïd el-Adha en islam ?",
    answer:
      "La doua principale de l&apos;Aïd el-Adha est « TaqabbalAllahu minna wa minkum » (Qu&apos;Allah accepte de nous et de vous). Cette invocation est échangée entre les musulmans lorsqu&apos;ils se rencontrent le jour de l&apos;Aïd. On récite également les takbirat : « Allahu Akbar, Allahu Akbar, la ilaha illAllah, wallahu Akbar, Allahu Akbar wa lillahil-hamd. » Ces formules sont prononcées dès le 1er Dhul-Hijja jusqu&apos;au 13e jour.",
  },
  {
    question: "Quelle doua dire lors de l'égorgement du sacrifice ?",
    answer:
      "Lors de l&apos;égorgement du sacrifice (udhiya), on prononce « Bismillah, Allahu Akbar » (Au nom d&apos;Allah, Allah est le plus Grand). On peut compléter par la doua prophétique : « Allahumma minka wa laka, Allahumma taqabbal minni » (Seigneur, cela vient de Toi et c&apos;est pour Toi, Seigneur accepte de moi). Il est également recommandé de mentionner le nom de la personne pour qui le sacrifice est offert.",
  },
  {
    question: "Quand commencent les takbirat de l'Aïd el-Adha ?",
    answer:
      "Les takbirat de l&apos;Aïd el-Adha se divisent en deux catégories. Les takbirat muqayyad (restreints) se récitent après chaque prière obligatoire, du Fajr du jour de Arafat (9 Dhul-Hijja) jusqu&apos;au Asr du 13e Dhul-Hijja. Les takbirat mutlaq (libres) se prononcent à tout moment dès le 1er Dhul-Hijja jusqu&apos;au coucher du soleil du 13e Dhul-Hijja.",
  },
  {
    question: "Peut-on faire le sacrifice de l'Aïd el-Adha pour un défunt ?",
    answer:
      "Les savants divergent sur cette question. La majorité des savants hanafites et hanbalites autorisent le sacrifice pour un défunt, en précisant que la récompense lui parvient par la volonté d&apos;Allah. D&apos;autres savants, comme ceux de l&apos;école shafiite, estiment que le sacrifice est réservé aux vivants sauf s&apos;il a été recommandé par testament. Dans tous les cas, il est recommandé d&apos;inclure le défunt dans la doua lors de l&apos;égorgement.",
  },
  {
    question: "Quelles sont les sunnan du jour de l'Aïd el-Adha ?",
    answer:
      "Les sunnan du jour de l&apos;Aïd el-Adha incluent : faire le ghusl (grandes ablutions), porter ses plus beaux habits, ne pas manger avant la prière de l&apos;Aïd (contrairement à l&apos;Aïd el-Fitr), se rendre à la prière à pied, emprunter un chemin différent au retour, multiplier les takbirat, échanger les voeux (taqabbalAllahu minna wa minkum), accomplir le sacrifice après la prière et distribuer la viande en trois parts.",
  },
  {
    question: "Est-ce que le sacrifice de l'Aïd est obligatoire ?",
    answer:
      "Selon l&apos;imam Abu Hanifa, le sacrifice (udhiya) est obligatoire (wajib) pour tout musulman qui en a les moyens financiers. Selon les imams Malik, Shafi&apos;i et Ahmad, c&apos;est une sunna mu&apos;akkada (fortement recommandée). Le Prophète (paix et salut sur lui) a dit : « Celui qui en a les moyens et ne sacrifie pas, qu&apos;il ne s&apos;approche pas de notre lieu de prière » (Ahmad, Ibn Majah), ce qui montre l&apos;importance considérable de cet acte.",
  },
  {
    question: "Quelle est la différence entre l'Aïd el-Fitr et l'Aïd el-Adha ?",
    answer:
      "L&apos;Aïd el-Fitr marque la fin du Ramadan et est associé à la zakat al-fitr, tandis que l&apos;Aïd el-Adha (fête du sacrifice) commémore l&apos;épreuve d&apos;Ibrahim et est associé au sacrifice d&apos;un animal. L&apos;Aïd el-Adha dure quatre jours (10-13 Dhul-Hijja) contre un seul pour l&apos;Aïd el-Fitr. On ne mange pas avant la prière de l&apos;Aïd el-Adha (on mange de la viande du sacrifice), alors qu&apos;on mange des dattes avant la prière de l&apos;Aïd el-Fitr.",
  },
  {
    question: "Peut-on jeûner le jour de l'Aïd el-Adha ?",
    answer:
      "Non, il est strictement interdit (haram) de jeûner le jour de l&apos;Aïd el-Adha (10 Dhul-Hijja) ainsi que les trois jours de Tashriq qui suivent (11, 12 et 13 Dhul-Hijja). Le Prophète (paix et salut sur lui) a interdit le jeûne ces jours-là, car ce sont des jours de manger, de boire et de dhikr (rappel d&apos;Allah). En revanche, le jeûne du jour de Arafat (9 Dhul-Hijja) est fortement recommandé pour le non-pèlerin.",
  },
];

export default function DouaAidAdhaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-aid-adha-islam/#article",
        headline:
          "Doua de l'Aïd el-Adha en islam : takbirat, sacrifice et invocations authentiques",
        description:
          "Découvrez les douas de l'Aïd el-Adha en islam : takbirat, doua du sacrifice, histoire d'Ibrahim et sunnan authentiques du jour de l'Aïd al-Adha.",
        image: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        datePublished: "2026-04-16",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-aid-adha-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-aid-adha-islam/#breadcrumb",
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
            name: "Doua de l'Aïd el-Adha",
            item: "https://www.islamreligion.fr/doua-aid-adha-islam",
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
          title="Doua de l'Aïd el-Adha en islam : takbirat, sacrifice et invocations"
          subtitle="Les invocations authentiques de l'Aïd el-Adha, tirées du Coran et de la Sunna. Takbirat, doua du sacrifice, histoire d'Ibrahim et sunnan du jour de l'Aïd al-Adha."
          imageSrc="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
          imageAlt="Pèlerins en invocation près de la Kaaba lors du Hajj et de l'Aïd el-Adha en islam"
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
                <span className="text-foreground">Doua de l&apos;Aïd el-Adha</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;Aïd el-Adha (fête du sacrifice) est l&apos;une des
                  deux grandes fêtes de l&apos;islam. Ce jour béni commémore le
                  sacrifice d&apos;Ibrahim (paix sur lui) et sa soumission
                  totale à Allah. Les musulmans y multiplient les takbirat, les
                  invocations et accomplissent le sacrifice rituel (udhiya).
                  Découvrez dans cet article les douas authentiques en arabe
                  avec phonétique et traduction, les formules à prononcer lors
                  de l&apos;égorgement et les sunnan prophétiques du jour de
                  l&apos;Aïd al-Adha.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Les takbirat de l'Aïd el-Adha */}
              {/* ============================================ */}
              <section id="takbirat-aid-adha" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les takbirat de l&apos;Aïd el-Adha : formule en arabe et moments de récitation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les <strong>takbirat de l&apos;Aïd el-Adha</strong> occupent
                  une place centrale dans les adorations de cette fête bénie.
                  Contrairement à l&apos;Aïd el-Fitr où les takbirat se limitent
                  à la veille et au matin, les takbirat de l&apos;Aïd el-Adha
                  s&apos;étendent sur une période plus longue et revêtent une
                  importance particulière. Allah dit dans le Coran :
                  &laquo;&nbsp;Et invoquez Allah pendant un nombre de jours
                  déterminés&nbsp;&raquo; (Coran, 2:203), en référence aux jours
                  de Tashriq.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent deux types de takbirat pour
                  l&apos;Aïd el-Adha. Les <strong>takbirat mutlaq</strong>
                  (libres) se récitent à tout moment du 1er Dhul-Hijja
                  jusqu&apos;au coucher du soleil du 13e Dhul-Hijja : dans la
                  rue, au marché, chez soi et dans la mosquée. Les{" "}
                  <strong>takbirat muqayyad</strong> (restreints) se prononcent
                  après chaque prière obligatoire, du Fajr du jour de Arafat
                  (9 Dhul-Hijja) jusqu&apos;au Asr du 13e Dhul-Hijja. Cette
                  durée étendue distingue l&apos;Aïd el-Adha et témoigne de la
                  grandeur de ces jours bénis.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu Akbar, Allahu Akbar, la ilaha illAllah, wallahu Akbar, Allahu Akbar wa lillahil-hamd
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah est le plus Grand, Allah est le plus Grand, il n&apos;y a de divinité qu&apos;Allah, Allah est le plus Grand, Allah est le plus Grand et à Allah revient toute louange&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Formule rapportée par Ibn Mas&apos;ud (Ibn Abi Shayba)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une autre formule, rapportée d&apos;Ibn Abbas (qu&apos;Allah
                  l&apos;agrée), ajoute la répétition triple du takbir :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ اللَّهُ أَكْبَرُ وَأَجَلُّ اللَّهُ أَكْبَرُ عَلَى مَا هَدَانَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu Akbar, Allahu Akbar, Allahu Akbar, wa lillahil-hamd, Allahu Akbar wa ajall, Allahu Akbar &apos;ala ma hadana
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah est le plus Grand, Allah est le plus Grand, Allah est le plus Grand, à Allah revient la louange, Allah est le plus Grand et le plus Majestueux, Allah est le plus Grand pour nous avoir guidés&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bayhaqi dans as-Sunan al-Kubra
                  </p>
                </div>

                <HadithCard
                  arabic="ما من أيام العمل الصالح فيها أحب إلى الله من هذه الأيام يعني أيام العشر"
                  text="Il n'y a pas de jours où les bonnes oeuvres sont plus aimées d'Allah que ces jours-là, c'est-à-dire les dix jours de Dhul-Hijja."
                  source="Rapporté par al-Bukhari (969)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith souligne l&apos;immense valeur des dix premiers
                  jours de Dhul-Hijja. Les savants enseignent que parmi les
                  meilleures oeuvres durant ces jours figurent le takbir, le
                  tahlil (dire la ilaha illAllah) et le tahmid (dire
                  al-hamdulillah). Ibn Umar et Abu Hurayra (qu&apos;Allah les
                  agrée) sortaient au marché durant ces jours et prononçaient
                  le takbir à voix haute, incitant les gens à les suivre dans
                  cette glorification d&apos;Allah.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
                    alt="Musulmans en prière et invocation lors de l'Aïd el-Adha avec la Kaaba en arrière-plan"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua taqabbalAllahu minna wa minkum */}
              {/* ============================================ */}
              <section id="doua-taqabbal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua taqabbalAllahu minna wa minkum : la salutation de l&apos;Aïd
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La formule <strong>taqabbalAllahu minna wa minkum</strong>
                  est la salutation traditionnelle que les musulmans échangent
                  le jour de l&apos;Aïd el-Adha lorsqu&apos;ils se rencontrent.
                  Cette invocation signifie &laquo;&nbsp;Qu&apos;Allah accepte
                  de nous et de vous&nbsp;&raquo; et constitue un voeu
                  d&apos;acceptation des adorations accomplies durant les jours
                  bénis de Dhul-Hijja.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> TaqabbalAllahu minna wa minkum
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Qu&apos;Allah accepte (les adorations) de nous et de vous&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Pratique des Compagnons, rapportée par al-Bayhaqi et al-Muhamili
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette formule est attestée dans la pratique des Compagnons du
                  Prophète (paix et salut sur lui). L&apos;imam Ahmad rapporte
                  que les Compagnons se disaient mutuellement le jour de
                  l&apos;Aïd : &laquo;&nbsp;TaqabbalAllahu minna wa
                  minka&nbsp;&raquo;. L&apos;imam Ibn Taymiyya a déclaré que
                  cette pratique est rapportée d&apos;un groupe de Compagnons et
                  que les imams comme Ahmad et d&apos;autres ont donné la
                  permission de la pratiquer. Elle fait partie des formules de
                  félicitation que l&apos;on échange en se serrant la main, en
                  s&apos;embrassant ou en se téléphonant le jour de l&apos;Aïd.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  On peut également compléter cette formule par d&apos;autres
                  voeux comme &laquo;&nbsp;Aïd Mubarak&nbsp;&raquo; (Aïd béni)
                  ou &laquo;&nbsp;Kulla &apos;amin wa antum
                  bikhayr&nbsp;&raquo; (Que chaque année vous trouve en bien).
                  Ces expressions, bien qu&apos;elles n&apos;aient pas de
                  source prophétique directe, entrent dans le cadre général des
                  bonnes paroles et des voeux de bien encouragés par
                  l&apos;islam. Comme pour l&apos;
                  <Link href="/doua-aid-fitr-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Aïd el-Fitr</Link>,
                  ces échanges renforcent les liens fraternels entre musulmans.
                </p>

                <HadithCard
                  arabic="أفشوا السلام بينكم"
                  text="Répandez le salam (la salutation de paix) entre vous."
                  source="Rapporté par Muslim (54)"
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
              {/* SECTION 3 : Doua lors du sacrifice */}
              {/* ============================================ */}
              <section id="doua-sacrifice" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua lors du sacrifice de l&apos;Aïd el-Adha (udhiya)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le sacrifice (udhiya ou qurbani) est l&apos;acte central de
                  l&apos;Aïd el-Adha. Il commémore la soumission d&apos;Ibrahim
                  (paix sur lui) à l&apos;ordre d&apos;Allah de sacrifier son
                  fils Isma&apos;il. Lors de l&apos;égorgement de l&apos;animal,
                  le musulman prononce des invocations spécifiques transmises
                  par le Prophète Muhammad (paix et salut sur lui) pour que cet
                  acte soit agréé par Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La première formule, obligatoire selon la majorité des
                  savants, est la mention du nom d&apos;Allah (tasmiya) au
                  moment de l&apos;égorgement. Sans cette mention, le sacrifice
                  n&apos;est pas valide selon l&apos;imam Abu Hanifa et
                  l&apos;imam Malik. Voici la formule complète telle que
                  rapportée dans la Sunna :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi wallahu Akbar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, et Allah est le plus Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1966)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Après avoir prononcé bismillahi Allahu Akbar, le Prophète
                  (paix et salut sur lui) ajoutait une invocation complète qui
                  exprime le sens profond du sacrifice : tout vient d&apos;Allah
                  et tout retourne à Allah. Cette doua témoigne que le
                  sacrifice n&apos;est pas un simple abattage rituel, mais un
                  acte d&apos;adoration profond par lequel le musulman se
                  rapproche de son Seigneur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ مِنْكَ وَلَكَ، اللَّهُمَّ تَقَبَّلْ مِنِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma minka wa laka, Allahumma taqabbal minni
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, cela vient de Toi et c&apos;est pour Toi. Seigneur, accepte de moi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (2795) et at-Tirmidhi
                  </p>
                </div>

                <HadithCard
                  arabic="بسم الله، اللهم تقبل من محمد وآل محمد ومن أمة محمد"
                  text="Au nom d'Allah. Seigneur, accepte cela de Muhammad, de la famille de Muhammad et de la communauté de Muhammad."
                  source="Rapporté par Muslim (1967)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith montre que le Prophète (paix et salut sur lui)
                  incluait toute sa communauté dans la doua du sacrifice. Les
                  savants recommandent au musulman de mentionner son propre nom
                  et celui de sa famille en disant par exemple :
                  &laquo;&nbsp;Bismillahi wallahu Akbar, Allahumma hadha
                  &apos;anni wa &apos;an ahli bayti&nbsp;&raquo; (Au nom
                  d&apos;Allah, Allah est le plus Grand, Seigneur ceci est de
                  ma part et de celle de ma famille).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Orienter l&apos;animal vers la qibla :</strong>{" "}
                      il est recommandé de tourner l&apos;animal vers La Mecque
                      au moment de l&apos;égorgement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Aiguiser le couteau :</strong> le Prophète (paix
                      et salut sur lui) a ordonné d&apos;aiguiser la lame et de
                      bien traiter l&apos;animal pour minimiser sa souffrance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Après la prière de l&apos;Aïd :</strong> le
                      sacrifice doit être accompli après la prière de l&apos;Aïd.
                      Tout animal égorgé avant la prière est considéré comme
                      une simple viande et non comme un sacrifice rituel.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Le sacrifice d'Ibrahim */}
              {/* ============================================ */}
              <section id="histoire-ibrahim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le sacrifice d&apos;Ibrahim : l&apos;épreuve et l&apos;invocation
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;histoire du sacrifice d&apos;Ibrahim (paix sur lui) est
                  le fondement même de l&apos;Aïd el-Adha. Allah mit Ibrahim à
                  l&apos;épreuve en lui ordonnant en songe de sacrifier son fils
                  Isma&apos;il (paix sur lui). Cette épreuve, d&apos;une
                  intensité inimaginable, illustre le sommet de la soumission
                  (islam) à la volonté d&apos;Allah. Le Coran rapporte ce récit
                  bouleversant dans la sourate As-Saffat.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsqu&apos;Ibrahim annonça la vision à son fils, la réponse
                  d&apos;Isma&apos;il fut d&apos;une soumission exemplaire.
                  Allah rapporte ses paroles dans le Coran :
                  &laquo;&nbsp;Mon cher père, fais ce qui t&apos;est commandé.
                  Tu me trouveras, s&apos;il plaît à Allah, du nombre des
                  endurants&nbsp;&raquo; (Coran, 37:102). Cette réponse
                  témoigne de la foi inébranlable du père et du fils, tous deux
                  soumis à la volonté divine sans hésitation.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    فَلَمَّا أَسْلَمَا وَتَلَّهُ لِلْجَبِينِ ۝ وَنَادَيْنَاهُ أَن يَا إِبْرَاهِيمُ ۝ قَدْ صَدَّقْتَ الرُّؤْيَا إِنَّا كَذَٰلِكَ نَجْزِي الْمُحْسِنِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Falamma aslama wa tallahu lil-jabin. Wa nadaynahu an ya Ibrahim. Qad saddaqtar-ru&apos;ya, inna kadhalika najzil-muhsinin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Puis quand tous deux se furent soumis et qu&apos;il l&apos;eut jeté sur le front, Nous l&apos;appelâmes : Ibrahim ! Tu as confirmé la vision. C&apos;est ainsi que Nous récompensons les bienfaisants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate As-Saffat (37:103-105)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Allah racheta Isma&apos;il par un bélier immense, instituant
                  ainsi le sacrifice rituel que les musulmans perpétuent chaque
                  année lors de l&apos;Aïd el-Adha. Ce geste symbolise que ce
                  n&apos;est pas la viande ni le sang qui parvient à Allah, mais
                  la piété (taqwa) du serviteur. Allah dit :
                  &laquo;&nbsp;Ni leurs chairs ni leurs sangs n&apos;atteignent
                  Allah, mais ce qui L&apos;atteint de votre part c&apos;est la
                  piété&nbsp;&raquo; (Coran, 22:37).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibrahim (paix sur lui) est également connu pour ses
                  invocations puissantes. Parmi les douas coraniques
                  d&apos;Ibrahim les plus célèbres, celle qu&apos;il prononça
                  pour sa descendance et pour les musulmans à venir :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbij-&apos;alni muqimas-salati wa min dhurriyyati, Rabbana wa taqabbal du&apos;a&apos;
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais que j&apos;accomplisse assidûment la prière ainsi qu&apos;une partie de ma descendance. Seigneur, accepte mon invocation&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ibrahim (14:40)
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie illustrant les versets sur le sacrifice d'Ibrahim et l'Aïd el-Adha"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Les sunnan du jour de l'Aïd el-Adha */}
              {/* ============================================ */}
              <section id="sunnan-aid-adha" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sunnan du jour de l&apos;Aïd el-Adha
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le jour de l&apos;Aïd el-Adha est riche en sunnan
                  prophétiques que le musulman s&apos;efforce d&apos;accomplir
                  pour suivre l&apos;exemple du Prophète Muhammad (paix et
                  salut sur lui). Ces actes embellissent la fête, renforcent
                  les liens communautaires et permettent de gagner la
                  récompense d&apos;Allah. Voici les principales sunnan à
                  observer ce jour béni.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas manger avant la prière de l&apos;Aïd
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Contrairement à l&apos;Aïd el-Fitr où l&apos;on mange
                        des dattes avant la prière, la sunna de l&apos;Aïd
                        el-Adha est de ne rien manger jusqu&apos;au retour de
                        la prière, puis de manger de la viande de son
                        sacrifice. Le Prophète (paix et salut sur lui) ne
                        mangeait le jour de l&apos;Aïd el-Adha qu&apos;après
                        être revenu de la prière, et il mangeait de son
                        sacrifice (rapporté par at-Tirmidhi).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le ghusl et les plus beaux habits
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est recommandé de faire les grandes ablutions (ghusl)
                        et de porter ses plus beaux vêtements pour la prière de
                        l&apos;Aïd. Le Prophète (paix et salut sur lui) portait
                        ses meilleurs habits les jours de fête. Se parfumer est
                        également une sunna pour les hommes en ce jour béni.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se rendre à pied et changer de chemin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) se rendait à la
                        prière de l&apos;Aïd à pied et empruntait un chemin
                        différent au retour (rapporté par al-Bukhari). Cette
                        sunna permet de multiplier les témoins le Jour du
                        Jugement et d&apos;afficher la joie de cette fête dans
                        les rues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Distribuer la viande du sacrifice en trois parts
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La sunna recommande de répartir la viande du sacrifice
                        en trois parts : un tiers pour la famille, un tiers
                        offert en cadeau aux proches et voisins, et un tiers
                        donné en aumône aux pauvres et nécessiteux. Cette
                        répartition incarne les valeurs de partage et de
                        solidarité de l&apos;islam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Multiplier le takbir sur le chemin de la prière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Sur le trajet vers le lieu de prière, le musulman
                        prononce le takbir à voix haute. Cette pratique,
                        rapportée des Compagnons, remplit les rues de
                        glorification d&apos;Allah et crée une atmosphère
                        spirituelle unique propre au jour de l&apos;Aïd. Pour
                        approfondir les{" "}
                        <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                        consultez notre guide complet.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas authentiques */}
              {/* ============================================ */}
              <section id="douas-authentiques-adha" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques à réciter le jour de l&apos;Aïd el-Adha
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des takbirat et de la doua du sacrifice, le musulman
                  peut adresser à Allah de nombreuses invocations le jour de
                  l&apos;Aïd el-Adha. Les jours de Tashriq (11, 12 et 13
                  Dhul-Hijja) sont des jours de dhikr et d&apos;invocation, et
                  le jour de l&apos;Aïd en est le sommet. Voici des douas
                  authentiques particulièrement appropriées pour cette occasion
                  bénie.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua de gratitude envers Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le jour de l&apos;Aïd est un jour de reconnaissance envers
                  Allah pour Ses bienfaits. Le musulman Le remercie de
                  l&apos;avoir guidé vers l&apos;islam et de lui avoir permis
                  d&apos;accomplir le sacrifice et les adorations des jours de
                  Dhul-Hijja.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَٰذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdulillahilladhi hadana lihadha wa ma kunna linahtadiya lawla an hadanAllah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui nous a guidés à ceci. Nous n&apos;aurions jamais été guidés si Allah ne nous avait pas guidés&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-A&apos;raf (7:43)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua pour l&apos;acceptation des oeuvres
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;une des préoccupations majeures du croyant est que ses
                  adorations soient acceptées par Allah. Le jour de l&apos;Aïd,
                  après avoir jeûné le jour de Arafat, accompli le sacrifice et
                  multiplié les takbirat, le musulman implore Allah
                  d&apos;agréer ses oeuvres, comme le faisaient Ibrahim et
                  Isma&apos;il après avoir élevé les fondations de la Kaaba.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana taqabbal minna innaka Antas-Sami&apos;ul-&apos;Alim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accepte cela de nous. C&apos;est Toi l&apos;Audient, l&apos;Omniscient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:127)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la protection et le bien
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le jour de l&apos;Aïd est également un moment propice pour
                  demander à Allah le bien de ce monde et de l&apos;au-delà.
                  Cette doua coranique complète est recommandée par le
                  Prophète (paix et salut sur lui) et convient parfaitement à
                  cette occasion de joie et de spiritualité. Pour découvrir
                  les invocations du{" "}
                  <Link href="/doua-arafat-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">jour de Arafat</Link>,
                  consultez notre article dédié.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &apos;adhabannar
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, accorde-nous une belle part en ce monde, et une belle part dans l&apos;au-delà, et protège-nous du châtiment du Feu&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:201)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le jour de l&apos;Aïd el-Adha est un moment où le musulman
                  doit multiplier les actes d&apos;adoration tout en vivant la
                  joie de cette fête. Le Prophète (paix et salut sur lui) a
                  dit que les jours de Tashriq sont des jours de manger, de
                  boire et de rappel d&apos;Allah (dhikr). L&apos;équilibre
                  entre la célébration festive et la dimension spirituelle est
                  la marque d&apos;un Aïd vécu selon la Sunna. Pour ceux qui
                  accomplissent le pèlerinage, les invocations du{" "}
                  <Link href="/doua-hajj-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Hajj</Link>{" "}
                  complètent naturellement celles de l&apos;Aïd el-Adha.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du jour de Arafat en islam"
                  description="Découvrez les invocations authentiques du jour de Arafat, le meilleur jour de l&apos;année pour la doua."
                  href="/doua-arafat-islam"
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
                    href="/doua-aid-fitr-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;Aïd el-Fitr
                  </Link>
                  <Link
                    href="/doua-arafat-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du jour de Arafat
                  </Link>
                  <Link
                    href="/doua-hajj-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du Hajj
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
