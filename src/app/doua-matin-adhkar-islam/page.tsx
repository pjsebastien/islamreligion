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

export const metadata: Metadata = {
  title:
    "Doua du matin en islam : les adhkar as-sabah authentiques",
  description:
    "Découvrez les doua du matin (adhkar as-sabah) authentiques en islam : Ayat al-Kursi, les 3 Qul, Sayyid al-Istighfar, dhikr de protection et routine matinale complète du musulman.",
  openGraph: {
    title:
      "Doua du matin en islam : les adhkar as-sabah authentiques",
    description:
      "Découvrez les doua du matin (adhkar as-sabah) authentiques en islam : Ayat al-Kursi, les 3 Qul, Sayyid al-Istighfar, dhikr de protection et routine matinale complète du musulman.",
    url: "https://www.islamreligion.fr/doua-matin-adhkar-islam",
    images: [
      {
        url: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-matin-adhkar-islam",
  },
};

const tocItems = [
  {
    id: "importance-adhkar",
    label: "L\u2019importance des adhkar du matin en islam",
  },
  {
    id: "quand-reciter",
    label: "Quand réciter les adhkar du matin",
  },
  {
    id: "ayat-al-kursi",
    label: "Ayat al-Kursi (sourate al-Baqara 2:255)",
  },
  {
    id: "trois-qul",
    label: "Les 3 Qul : al-Ikhlas, al-Falaq, an-Nas",
  },
  {
    id: "sayyid-al-istighfar",
    label: "Sayyid al-Istighfar : la maîtresse des demandes de pardon",
  },
  {
    id: "adhkar-repetition",
    label: "Les adhkar de répétition (SubhanAllah, La ilaha illallah...)",
  },
  {
    id: "douas-protection",
    label: "Douas de protection du matin",
  },
  {
    id: "routine-matinale",
    label: "La routine matinale du musulman",
  },
  {
    id: "faq",
    label: "Questions fréquentes",
  },
];

const faqItems = [
  {
    question:
      "Quand faut-il réciter les adhkar du matin en islam ?",
    answer:
      "Les adhkar du matin (adhkar as-sabah) se récitent idéalement entre la prière du Fajr et le lever du soleil. C&apos;est l&apos;avis de la majorité des savants, dont l&apos;imam an-Nawawi et Ibn Baz. Certains savants considèrent que le temps s&apos;étend jusqu&apos;au milieu de la matinée (ad-duha), mais le meilleur moment reste juste après la prière de l&apos;aube.",
  },
  {
    question:
      "Quelle est la meilleure doua du matin à réciter en islam ?",
    answer:
      "Il n&apos;y a pas une seule meilleure doua du matin, mais Ayat al-Kursi est considéré comme l&apos;un des plus importants versets de protection. Le Prophète (paix et salut sur lui) a dit que celui qui le récite le matin est protégé jusqu&apos;au soir, et inversement. Le Sayyid al-Istighfar est également une invocation majeure que le Prophète qualifiait de maîtresse des demandes de pardon.",
  },
  {
    question:
      "Combien de temps faut-il pour réciter tous les adhkar du matin ?",
    answer:
      "La récitation complète des adhkar du matin prend généralement entre 15 et 25 minutes, selon la vitesse de récitation. Il est préférable de les réciter calmement et avec concentration (tadabbur) plutôt que de se précipiter. Même si l&apos;on ne peut pas tout réciter, faire ce qui est possible est toujours bénéfique.",
  },
  {
    question:
      "Peut-on réciter les adhkar du matin en français ?",
    answer:
      "Les invocations libres (du&apos;as) peuvent être faites dans n&apos;importe quelle langue. Cependant, pour les adhkar spécifiques rapportés du Prophète (paix et salut sur lui) et les versets coraniques comme Ayat al-Kursi, il est recommandé de les réciter en arabe pour bénéficier pleinement de leur mérite. Apprendre progressivement la prononciation arabe est fortement encouragé.",
  },
  {
    question:
      "Faut-il être en état de pureté rituelle pour réciter les adhkar du matin ?",
    answer:
      "Non, il n&apos;est pas obligatoire d&apos;être en état de pureté rituelle (wudu) pour réciter les adhkar et les invocations du matin. Cependant, être en état de wudu est préférable et ajoute au mérite de l&apos;acte. Pour la récitation du Coran (comme Ayat al-Kursi), les savants recommandent le wudu sans en faire une condition stricte pour la récitation par c&oelig;ur.",
  },
  {
    question:
      "Les adhkar du matin protègent-ils vraiment contre le mal ?",
    answer:
      "Oui, selon de nombreux hadiths authentiques. Le Prophète (paix et salut sur lui) a garanti la protection divine à celui qui récite certains adhkar le matin. Par exemple, réciter trois fois les sourates al-Ikhlas, al-Falaq et an-Nas suffit contre toute chose (rapporté par Abu Dawud et at-Tirmidhi). La confiance en Allah et la régularité dans la récitation sont essentielles.",
  },
  {
    question:
      "Peut-on lire les adhkar du matin sur un livre ou un téléphone ?",
    answer:
      "Oui, il est tout à fait permis de lire les adhkar à partir d&apos;un livre (comme Hisn al-Muslim, la Citadelle du musulman) ou d&apos;une application sur téléphone. L&apos;important est la sincérité de l&apos;intention et la concentration du c&oelig;ur. Avec le temps et la régularité, le musulman finit par les mémoriser naturellement.",
  },
];

export default function DouaMatinAdhkarIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-matin-adhkar-islam/#article",
        headline:
          "Doua du matin en islam : les adhkar as-sabah authentiques",
        description:
          "Découvrez les doua du matin (adhkar as-sabah) authentiques en islam : Ayat al-Kursi, les 3 Qul, Sayyid al-Istighfar, dhikr de protection et routine matinale du musulman.",
        image: "/images/doua-mains-rayons-motifs-islamiques.jpg",
        datePublished: "2026-03-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-matin-adhkar-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-matin-adhkar-islam/#breadcrumb",
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
            name: "Doua du matin (adhkar as-sabah)",
            item: "https://www.islamreligion.fr/doua-matin-adhkar-islam",
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
          title="Doua du matin en islam : les adhkar as-sabah authentiques"
          subtitle="Les invocations matinales du Prophète (paix et salut sur lui) pour commencer chaque journée sous la protection d&apos;Allah."
          imageSrc="/images/doua-mains-rayons-motifs-islamiques.jpg"
          imageAlt="Doua du matin en islam - mains levées en invocation avec rayons de lumière et motifs islamiques"
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
                aria-label="Fil d&apos;Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">
                  Doua du matin (adhkar as-sabah)
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les <strong>adhkar as-sabah</strong> (invocations du matin)
                  constituent un bouclier spirituel que le Prophète Muhammad
                  (paix et salut sur lui) récitait chaque jour entre la prière
                  du Fajr et le lever du soleil. Ils comprennent Ayat al-Kursi,
                  les trois sourates protectrices (al-Ikhlas, al-Falaq, an-Nas),
                  le Sayyid al-Istighfar et plusieurs formules de dhikr
                  répétées. Cette <strong>doua du matin</strong> complète protège
                  le croyant, efface ses péchés et lui assure la sérénité tout
                  au long de la journée.
                </p>
              </div>

              {/* ====== SECTION 1 : Importance des adhkar ====== */}
              <section id="importance-adhkar" className="scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des adhkar du matin en islam
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  Le dhikr (rappel d&apos;Allah) occupe une place centrale dans
                  la vie du musulman. Allah dit dans le Coran :{" "}
                  <em>
                    &laquo;&nbsp;Souvenez-vous de Moi, Je Me souviendrai de
                    vous&nbsp;&raquo;
                  </em>{" "}
                  (sourate al-Baqara, 2:152). Les <strong>adhkar du matin</strong>{" "}
                  représentent la mise en pratique quotidienne de ce commandement
                  divin, un engagement renouvelé chaque jour au lever du soleil.
                </p>

                <p className="mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) ne négligeait jamais ses
                  invocations matinales. Il enseignait à ses compagnons que les
                  adhkar du matin et du soir sont comme une forteresse
                  imprenable qui protège le croyant des épreuves, du mal des
                  hommes et des djinns, et de la négligence spirituelle.
                </p>

                <p className="mb-4 leading-relaxed text-foreground">
                  Ibn al-Qayyim (qu&apos;Allah lui fasse miséricorde) a dit :{" "}
                  <em>
                    &laquo;&nbsp;Les adhkar du matin et du soir jouent le rôle
                    d&apos;une armure : plus elle est épaisse, plus son porteur
                    est protégé. Bien mieux, leur effet est tel que celui qui les
                    récite est entouré d&apos;un bouclier
                    impénétrable.&nbsp;&raquo;
                  </em>{" "}
                  Cette parole illustre à quel point la régularité dans la{" "}
                  <strong>doua du matin</strong> est essentielle pour le croyant.
                </p>

                <HadithCard
                  arabic="مَثَلُ الَّذِي يَذْكُرُ رَبَّهُ وَالَّذِي لَا يَذْكُرُ رَبَّهُ مَثَلُ الْحَيِّ وَالْمَيِّتِ"
                  text="L&apos;exemple de celui qui invoque son Seigneur et de celui qui ne L&apos;invoque pas est comme l&apos;exemple du vivant et du mort."
                  source="Rapporté par al-Bukhari (6407)"
                />

                <p className="mb-4 leading-relaxed text-foreground">
                  Les bienfaits des adhkar du matin sont multiples : protection
                  contre le mal, effacement des péchés, augmentation de la
                  subsistance (rizq), sérénité du c&oelig;ur et rapprochement
                  d&apos;Allah. Chaque formule possède ses propres mérites,
                  attestés par des hadiths authentiques que nous détaillerons
                  dans les sections suivantes.
                </p>
              </section>

              {/* ====== SECTION 2 : Quand réciter ====== */}
              <section id="quand-reciter" className="mt-12 scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  Quand réciter les adhkar du matin
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  La question du moment précis pour réciter les{" "}
                  <strong>adhkar as-sabah</strong> est importante. Selon la
                  majorité des savants, le temps des adhkar du matin commence
                  après la prière du <strong>Fajr</strong> (l&apos;aube) et
                  s&apos;étend jusqu&apos;au lever du soleil. C&apos;est le
                  moment le plus méritoire pour ces invocations.
                </p>

                <p className="mb-4 leading-relaxed text-foreground">
                  Allah mentionne spécifiquement ce moment dans le Coran :{" "}
                  <em>
                    &laquo;&nbsp;Et glorifie la louange de ton Seigneur avant le
                    lever du soleil et avant son coucher&nbsp;&raquo;
                  </em>{" "}
                  (sourate Qaf, 50:39). Ce verset fait référence aux moments du
                  Fajr et du &apos;Asr, qui correspondent précisément aux temps
                  des adhkar du matin et du soir.
                </p>

                <div className="mb-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    Le meilleur moment
                  </p>
                  <ul className="mt-3 space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        <strong>Idéal :</strong> juste après la prière du Fajr,
                        en restant assis sur son lieu de prière jusqu&apos;au
                        lever du soleil
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        <strong>Acceptable :</strong> jusqu&apos;au milieu de la
                        matinée (ad-duha), selon certains savants
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        <strong>Conseil :</strong> ne pas retarder les adhkar
                        sans raison valable, car le mérite diminue avec le retard
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) avait l&apos;habitude de
                  rester assis après la prière du Fajr, invoquant Allah
                  jusqu&apos;au lever du soleil. Jabir ibn Samura (qu&apos;Allah
                  soit satisfait de lui) rapporte :{" "}
                  <em>
                    &laquo;&nbsp;Lorsque le Prophète priait le Fajr, il restait
                    assis à sa place jusqu&apos;au lever du soleil&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par Muslim). Ce moment béni est idéal pour réciter
                  l&apos;ensemble des <strong>doua du matin</strong>.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Apprenez l&apos;arabe pour réciter vos adhkar avec excellence"
                description="Maîtrisez la prononciation arabe et comprenez le sens profond de chaque invocation grâce à notre formation en ligne."
                href="/apprendre-larabe"
                linkText="Découvrir la formation"
              />

              {/* ====== SECTION 3 : Ayat al-Kursi ====== */}
              <section id="ayat-al-kursi" className="mt-12 scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  Ayat al-Kursi (sourate al-Baqara, 2:255)
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  Ayat al-Kursi est le verset le plus grandiose du Coran, comme
                  l&apos;a affirmé le Prophète (paix et salut sur lui) à Ubayy
                  ibn Ka&apos;b (qu&apos;Allah soit satisfait de lui). Sa
                  récitation chaque matin est l&apos;un des{" "}
                  <strong>adhkar as-sabah</strong> les plus importants, car elle
                  assure une protection divine complète jusqu&apos;au soir.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa Huwa, al-Hayyul-Qayyum. La ta&apos;khudhhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa&apos;u &apos;indahu illa bi-idhnih. Ya&apos;lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay&apos;in min &apos;ilmihi illa bima sha&apos;a. Wasi&apos;a kursiyyuhus-samawati wal-ard. Wa la ya&apos;uduhu hifdhuhuma. Wa Huwal-&apos;Aliyyul-&apos;Adhim.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et de Sa science, ils n&apos;embrassent que ce qu&apos;Il veut. Son Kursiy (Trône) déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate al-Baqara, verset 255
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit :{" "}
                  <em>
                    &laquo;&nbsp;Celui qui récite Ayat al-Kursi le matin est
                    protégé contre les djinns jusqu&apos;au soir, et celui qui le
                    récite le soir est protégé jusqu&apos;au matin&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par al-Hakim, authentifié par al-Albani). Ce verset
                  unique résume les attributs de perfection d&apos;Allah :
                  l&apos;unicité, la vie éternelle, la science absolue, la
                  souveraineté totale et la grandeur infinie.
                </p>

                <Image
                  src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                  alt="Coran ouvert avec calligraphie dorée et lumière - récitation d&apos;Ayat al-Kursi dans les adhkar du matin"
                  width={800}
                  height={450}
                  className="my-6 rounded-xl"
                />
              </section>

              {/* ====== SECTION 4 : Les 3 Qul ====== */}
              <section id="trois-qul" className="mt-12 scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  Les 3 Qul : al-Ikhlas, al-Falaq et an-Nas
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  Les trois dernières sourates du Coran, appelées les{" "}
                  <strong>&laquo;&nbsp;trois Qul&nbsp;&raquo;</strong> ou{" "}
                  <strong>al-Mu&apos;awwidhat</strong>, constituent un pilier
                  essentiel des <strong>adhkar du matin</strong>. Le Prophète
                  (paix et salut sur lui) les récitait trois fois chaque matin
                  et chaque soir.
                </p>

                <HadithCard
                  arabic="قُلْ هُوَ اللَّهُ أَحَدٌ وَالْمُعَوِّذَتَيْنِ حِينَ تُمْسِي وَحِينَ تُصْبِحُ ثَلَاثَ مَرَّاتٍ تَكْفِيكَ مِنْ كُلِّ شَيْءٍ"
                  text="Récite Qul Huwa Allahu Ahad et les deux sourates protectrices le soir et le matin, trois fois : elles te suffiront contre toute chose."
                  source="Rapporté par Abu Dawud (5082) et at-Tirmidhi (3575), authentifié par al-Albani"
                />

                {/* Sourate al-Ikhlas */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  Sourate al-Ikhlas (112) — 3 fois
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul Huwa Allahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Il est Allah, Unique. Allah, le Seul à être imploré pour ce que nous désirons. Il n&apos;a jamais engendré, n&apos;a pas été engendré non plus. Et nul n&apos;est égal à Lui.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">Sourate al-Ikhlas (112)</p>
                </div>

                {/* Sourate al-Falaq */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  Sourate al-Falaq (113) — 3 fois
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-&apos;uqad. Wa min sharri hasidin idha hasad.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche protection auprès du Seigneur de l&apos;aube naissante, contre le mal des êtres qu&apos;Il a créés, contre le mal de l&apos;obscurité quand elle s&apos;approfondit, contre le mal de celles qui soufflent sur les n&oelig;uds, et contre le mal de l&apos;envieux quand il envie.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">Sourate al-Falaq (113)</p>
                </div>

                {/* Sourate an-Nas */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  Sourate an-Nas (114) — 3 fois
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche protection auprès du Seigneur des hommes, le Souverain des hommes, Dieu des hommes, contre le mal du mauvais conseiller, furtif, qui souffle le mal dans les poitrines des hommes, qu&apos;il soit parmi les djinns ou parmi les hommes.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">Sourate an-Nas (114)</p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ces trois sourates couvrent l&apos;ensemble des formes de
                  protection : al-Ikhlas affirme le tawhid (unicité divine),
                  al-Falaq protège contre les maux extérieurs (sorcellerie,
                  envie, obscurité), et an-Nas protège contre les maux
                  intérieurs (les chuchotements de Shaytan). Récitées trois fois
                  le matin, elles forment un bouclier complet pour la journée.
                  Pour approfondir le sujet des invocations, consultez notre
                  guide complet sur la{" "}
                  <Link
                    href="/doua-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    doua en islam
                  </Link>.
                </p>
              </section>

              {/* ====== SECTION 5 : Sayyid al-Istighfar ====== */}
              <section id="sayyid-al-istighfar" className="mt-12 scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  Sayyid al-Istighfar : la maîtresse des demandes de pardon
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  Le <strong>Sayyid al-Istighfar</strong> (la maîtresse des
                  demandes de pardon) est l&apos;une des invocations les plus
                  puissantes que le Prophète (paix et salut sur lui) a
                  enseignées. Il est recommandé de la réciter chaque matin dans
                  le cadre des <strong>adhkar as-sabah</strong>, car elle porte
                  en elle une promesse extraordinaire.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana &apos;abduka, wa ana &apos;ala &apos;ahdika wa wa&apos;dika mastata&apos;tu, a&apos;udhu bika min sharri ma sana&apos;tu, abu&apos;u laka bi ni&apos;matika &apos;alayya, wa abu&apos;u bi dhanbi, faghfir li fa innahu la yaghfirudh-dhunuba illa anta.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, Tu es mon Seigneur, il n&apos;y a de divinité digne d&apos;adoration que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je suis fidèle à Ton pacte et à Ta promesse autant que je le puis. Je cherche refuge auprès de Toi contre le mal que j&apos;ai commis. Je reconnais devant Toi Tes bienfaits à mon égard et je reconnais mon péché. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit à propos de cette
                  invocation :{" "}
                  <em>
                    &laquo;&nbsp;Celui qui la récite le matin avec conviction et
                    meurt dans la journée entrera au Paradis. Et celui qui la
                    récite le soir avec conviction et meurt durant la nuit
                    entrera au Paradis.&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par al-Bukhari). Cette promesse montre
                  l&apos;immense valeur de cette <strong>doua du matin</strong>.
                </p>

                <p className="mb-4 leading-relaxed text-foreground">
                  Cette invocation contient les fondements de la foi : la
                  reconnaissance de la seigneurie d&apos;Allah (rububiyya),
                  l&apos;affirmation de Son unicité (tawhid), la soumission en
                  tant que serviteur (&apos;ubudiyya), la demande de protection
                  et l&apos;aveu des péchés (istighfar). C&apos;est une
                  invocation complète qui résume la relation entre le serviteur
                  et son Créateur.
                </p>

                <Image
                  src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                  alt="Prosternation (sujud) dans la mosquée - l&apos;humilité du croyant dans sa doua du matin"
                  width={800}
                  height={450}
                  className="my-6 rounded-xl"
                />
              </section>

              {/* ====== SECTION 6 : Adhkar de répétition ====== */}
              <section id="adhkar-repetition" className="mt-12 scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  Les adhkar de répétition
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  Parmi les <strong>adhkar du matin</strong> les plus méritoires
                  figurent les formules de dhikr à répéter un nombre précis de
                  fois. Ces invocations simples mais puissantes portent des
                  récompenses immenses et constituent le c&oelig;ur de la
                  routine matinale du croyant.
                </p>

                {/* SubhanAllahi wa bihamdihi 100x */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  SubhanAllahi wa bihamdihi — 100 fois
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllahi wa bihamdihi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire et louange à Allah.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6405) et Muslim (2692)
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit :{" "}
                  <em>
                    &laquo;&nbsp;Celui qui dit cent fois dans une journée
                    SubhanAllahi wa bihamdihi, ses péchés seront effacés,
                    fussent-ils aussi nombreux que l&apos;écume de la
                    mer.&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par al-Bukhari et Muslim). Cette formule courte mais
                  d&apos;un mérite immense ne prend que quelques minutes à
                  réciter.
                </p>

                {/* La ilaha illallah wahdahu */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  La ilaha illallah wahdahu la sharika lah — 10 fois (ou 100 fois)
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa &apos;ala kulli shay&apos;in qadir.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah, Seul, sans associé. À Lui appartient la royauté, à Lui la louange, et Il est Omnipotent.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6403) et Muslim (2693)
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Celui qui récite cette formule <strong>dix fois le matin</strong>{" "}
                  obtient dix récompenses, dix péchés lui sont effacés, il est
                  élevé de dix degrés et il est protégé contre le diable
                  jusqu&apos;au soir (rapporté par Abu Dawud). Et celui qui la
                  récite <strong>cent fois dans la journée</strong> obtient
                  l&apos;équivalent de l&apos;affranchissement de dix esclaves,
                  cent bonnes actions lui sont inscrites, cent mauvaises actions
                  lui sont effacées, et il est protégé contre le diable toute la
                  journée (rapporté par al-Bukhari et Muslim).
                </p>

                {/* SubhanAllah wa bihamdihi, SubhanAllahil-Adhim */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  SubhanAllahi wa bihamdihi, SubhanAllahil-&apos;Adhim
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllahi wa bihamdihi, SubhanAllahil-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire et louange à Allah, gloire à Allah le Très Grand.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6682) et Muslim (2694)
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit :{" "}
                  <em>
                    &laquo;&nbsp;Deux paroles sont légères sur la langue, lourdes
                    dans la balance et aimées du Tout Miséricordieux :
                    SubhanAllahi wa bihamdihi, SubhanAllahil-&apos;Adhim.&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par al-Bukhari et Muslim). Intégrer cette formule
                  dans ses <strong>adhkar as-sabah</strong> est un moyen simple
                  d&apos;accumuler d&apos;immenses récompenses.
                </p>
              </section>

              {/* ====== SECTION 7 : Douas de protection ====== */}
              <section id="douas-protection" className="mt-12 scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  Douas de protection du matin
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  En plus des formules de dhikr répétées, le Prophète (paix et
                  salut sur lui) récitait chaque matin des{" "}
                  <strong>douas de protection</strong> spécifiques. Ces
                  invocations demandent à Allah la préservation du corps, de
                  l&apos;âme, de la foi et de la situation du croyant tout au
                  long de la journée.
                </p>

                {/* Allahumma inni as'aluka al-'afiya */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  Demande de bien-être (al-&apos;afiya)
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;alukal-&apos;afiyata fid-dunya wal-akhira. Allahumma inni as&apos;alukal-&apos;afwa wal-&apos;afiyata fi dini wa dunyaya wa ahli wa mali. Allahummast-tur &apos;awrati wa amin raw&apos;ati. Allahumma-hfadhni min bayni yadayya wa min khalfi wa &apos;an yamini wa &apos;an shimali wa min fawqi, wa a&apos;udhu bi &apos;adhamatika an ughtala min tahti.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, je Te demande le bien-être dans ce monde et dans l&apos;au-delà. Ô Allah, je Te demande le pardon et le bien-être dans ma religion, ma vie, ma famille et mes biens. Ô Allah, couvre mes défauts et apaise mes craintes. Ô Allah, protège-moi par devant, par derrière, sur ma droite, sur ma gauche et au-dessus de moi. Et je cherche refuge auprès de Ta grandeur contre le fait d&apos;être englouti par en dessous.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5074) et Ibn Majah (3871), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Cette invocation extraordinaire couvre toutes les dimensions de
                  la protection : spirituelle, physique, familiale et
                  matérielle. Le mot <strong>al-&apos;afiya</strong> (le
                  bien-être, la préservation) est l&apos;une des demandes les
                  plus aimées d&apos;Allah. Al-&apos;Abbas ibn &apos;Abd
                  al-Muttalib (qu&apos;Allah soit satisfait de lui) a demandé au
                  Prophète de lui enseigner une invocation, et celui-ci lui a
                  dit :{" "}
                  <em>
                    &laquo;&nbsp;Demandez à Allah al-&apos;afiya&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par at-Tirmidhi).
                </p>

                {/* Hasbiyallahu la ilaha illa huwa */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  Hasbiyallahu la ilaha illa Huwa — 7 fois
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Hasbiyallahu la ilaha illa Huwa, &apos;alayhi tawakkaltu wa Huwa Rabbul-&apos;Arshil-&apos;Adhim.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah me suffit. Il n&apos;y a de divinité digne d&apos;adoration que Lui. En Lui je place ma confiance, et Il est le Seigneur du Trône immense.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5081), authentifié par Shu&apos;ayb al-Arna&apos;ut
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit :{" "}
                  <em>
                    &laquo;&nbsp;Celui qui dit sept fois le matin et le soir :
                    Hasbiyallahu la ilaha illa Huwa &apos;alayhi tawakkaltu wa
                    Huwa Rabbul-&apos;Arshil-&apos;Adhim, Allah lui suffira
                    contre ce qui le préoccupe.&nbsp;&raquo;
                  </em>{" "}
                  Cette <strong>doua du matin</strong> exprime le tawakkul
                  (la confiance totale en Allah) et constitue un remède contre
                  l&apos;anxiété et les soucis.
                </p>

                {/* Bismillahi ladhi la yadurru */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  Bismillahi ladhi la yadurru — 3 fois
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahil-ladhi la yadurru ma&apos;asmihi shay&apos;un fil-ardi wa la fis-sama&apos;i wa Huwas-Sami&apos;ul-&apos;Alim.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, avec le nom de Qui rien sur terre ni au ciel ne peut nuire, et Il est l&apos;Audient, l&apos;Omniscient.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5088) et at-Tirmidhi (3388), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-4 mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit :{" "}
                  <em>
                    &laquo;&nbsp;Celui qui dit trois fois le matin et trois fois
                    le soir cette invocation, rien ne lui nuira.&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par Abu Dawud et at-Tirmidhi). &apos;Uthman ibn
                  &apos;Affan (qu&apos;Allah soit satisfait de lui), qui
                  rapporte ce hadith, ne manquait jamais de la réciter. Pour
                  découvrir d&apos;autres invocations de protection, consultez
                  notre article sur les{" "}
                  <Link
                    href="/invocations-reussite-facilite"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    invocations authentiques pour la réussite
                  </Link>.
                </p>

                {/* Asbahna wa asbahal-mulku lillah */}
                <h3 className="mt-6 mb-3 text-xl font-semibold text-primary">
                  Asbahna wa asbahal-mulku lillah
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa Huwa &apos;ala kulli shay&apos;in qadir. Rabbi as&apos;aluka khayra ma fi hadhal-yawmi wa khayra ma ba&apos;dahu, wa a&apos;udhu bika min sharri ma fi hadhal-yawmi wa sharri ma ba&apos;dah.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Nous voilà au matin et la royauté appartient à Allah. Louange à Allah. Il n&apos;y a de divinité digne d&apos;adoration qu&apos;Allah, Seul, sans associé. À Lui la royauté, à Lui la louange et Il est Omnipotent. Seigneur, je Te demande le bien de cette journée et le bien de ce qui vient après. Et je cherche refuge auprès de Toi contre le mal de cette journée et le mal de ce qui vient après.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2723)
                  </p>
                </div>
              </section>

              {/* ====== SECTION 8 : Routine matinale ====== */}
              <section id="routine-matinale" className="mt-12 scroll-mt-24">
                <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
                  La routine matinale du musulman
                </h2>

                <p className="mb-4 leading-relaxed text-foreground">
                  Intégrer les <strong>adhkar as-sabah</strong> dans sa routine
                  quotidienne est un acte d&apos;adoration qui transforme chaque
                  matinée en un moment de connexion profonde avec Allah. Voici
                  un ordre pratique pour organiser sa routine matinale
                  spirituelle :
                </p>

                <div className="mb-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    Routine matinale recommandée
                  </p>
                  <ol className="mt-3 space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        1
                      </span>
                      <span>
                        <strong>Se réveiller pour le Fajr</strong> — accomplir
                        les ablutions et la prière obligatoire de l&apos;aube
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        2
                      </span>
                      <span>
                        <strong>Rester assis à sa place de prière</strong> —
                        commencer les adhkar du matin dans le calme et la
                        sérénité
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        3
                      </span>
                      <span>
                        <strong>Réciter Ayat al-Kursi</strong> — une fois, pour
                        la protection contre les djinns
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        4
                      </span>
                      <span>
                        <strong>Les 3 Qul</strong> — réciter trois fois chaque
                        sourate (al-Ikhlas, al-Falaq, an-Nas)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        5
                      </span>
                      <span>
                        <strong>Sayyid al-Istighfar</strong> — la maîtresse des
                        demandes de pardon, une fois
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        6
                      </span>
                      <span>
                        <strong>Les douas de protection</strong> — al-&apos;afiya,
                        Hasbiyallahu (7 fois), Bismillahi ladhi la yadurru (3
                        fois), et les autres invocations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        7
                      </span>
                      <span>
                        <strong>Les adhkar de répétition</strong> —
                        SubhanAllahi wa bihamdihi (100 fois), La ilaha illallah
                        wahdahu... (10 ou 100 fois)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                        8
                      </span>
                      <span>
                        <strong>Prière du Duha (optionnelle)</strong> — deux
                        rak&apos;at après le lever du soleil pour clôturer la
                        routine
                      </span>
                    </li>
                  </ol>
                </div>

                <p className="mb-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit :{" "}
                  <em>
                    &laquo;&nbsp;Celui qui prie le Fajr en groupe puis reste
                    assis à évoquer Allah jusqu&apos;au lever du soleil, puis
                    prie deux rak&apos;at, obtient la récompense complète d&apos;un
                    Hajj et d&apos;une &apos;Umra.&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par at-Tirmidhi, jugé bon). Cette récompense
                  extraordinaire montre l&apos;importance de consacrer ce
                  moment matinal aux <strong>adhkar du matin</strong> et au
                  rappel d&apos;Allah.
                </p>

                <p className="mb-4 leading-relaxed text-foreground">
                  Pour ceux qui débutent, il est conseillé de commencer par les
                  invocations les plus courtes et de les augmenter
                  progressivement. L&apos;essentiel est la régularité :{" "}
                  <em>
                    &laquo;&nbsp;Les actes les plus aimés d&apos;Allah sont les
                    plus réguliers, même s&apos;ils sont peu
                    nombreux&nbsp;&raquo;
                  </em>{" "}
                  (rapporté par al-Bukhari et Muslim). Un livre comme{" "}
                  <strong>Hisn al-Muslim</strong> (la Citadelle du musulman) est
                  un excellent support pour mémoriser ces invocations.
                </p>

                <p className="mb-4 leading-relaxed text-foreground">
                  La <strong>doua du matin</strong> ne doit pas être perçue comme
                  une contrainte, mais comme un moment privilégié de dialogue
                  avec le Créateur. Chaque formule récitée avec présence du
                  c&oelig;ur (hudur al-qalb) est une source de sérénité, de
                  protection et de bénédiction qui accompagne le croyant tout au
                  long de sa journée. Pour approfondir votre pratique de la
                  prière, découvrez notre guide sur{" "}
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    prier en islam avec excellence spirituelle
                  </Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua en islam : guide complet des invocations authentiques"
                  description="Découvrez toutes les invocations prophétiques pour chaque occasion de la vie quotidienne."
                  href="/doua-islam"
                />

                <ArticleCTA
                  variant="lire-aussi"
                  title="La prière du voyageur en islam : règles et facilités"
                  description="Comment adapter ses adhkar et ses prières lors d&apos;un voyage selon la tradition prophétique."
                  href="/priere-voyageur-islam"
                />
              </section>

              {/* ====== AffiliateForm ====== */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre vos adhkar du matin"
                description="Comprendre le sens de chaque doua du matin transforme votre expérience spirituelle. Découvrez notre formation en ligne pour maîtriser la langue arabe et approfondir votre compréhension du Coran et des invocations prophétiques."
                preselect="arabe"
              />

              {/* ====== FAQ ====== */}
              <FaqSection items={faqItems} id="faq" />
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
