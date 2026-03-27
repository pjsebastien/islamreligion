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
    "Doua de l'Aïd el-Fitr en islam : invocations, takbirat et sunnan du jour",
  description:
    "Découvrez les douas de l'Aïd el-Fitr en islam : takbirat al-eid en arabe avec phonétique et traduction, doua taqabbalAllahu minna wa minkum, salat al-eid, zakat al-fitr et sunnan authentiques du jour de l'Aïd.",
  openGraph: {
    title:
      "Doua de l'Aïd el-Fitr en islam : invocations, takbirat et sunnan du jour",
    description:
      "Les invocations authentiques de l'Aïd el-Fitr : takbirat, douas en arabe, phonétique et traduction. Guide complet des sunnan et adorations du jour de l'Aïd.",
    url: "https://www.islamreligion.fr/doua-aid-fitr-islam",
    images: [
      {
        url: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-aid-fitr-islam",
  },
};

const tocItems = [
  { id: "takbirat-aid", label: "Les takbirat de l'Aïd el-Fitr" },
  { id: "doua-rencontre-aid", label: "Doua en se rencontrant le jour de l'Aïd" },
  { id: "salat-al-eid", label: "La salat al-Aïd et ses invocations" },
  { id: "zakat-al-fitr", label: "Zakat al-Fitr : purification et doua" },
  { id: "sunnan-jour-aid", label: "Les sunnan du jour de l'Aïd" },
  { id: "douas-authentiques-aid", label: "Douas authentiques du jour de l'Aïd" },
  { id: "conseils-spirituels", label: "Conseils spirituels pour l'Aïd" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de l'Aïd el-Fitr en islam ?",
    answer:
      "La doua la plus connue de l&apos;Aïd el-Fitr est « TaqabbalAllahu minna wa minkum » (Qu&apos;Allah accepte de nous et de vous). C&apos;est une invocation que les compagnons du Prophète (paix et salut sur lui) échangeaient lorsqu&apos;ils se rencontraient le jour de l&apos;Aïd. Elle est rapportée par Ibn Hajar et d&apos;autres savants comme une pratique authentique des Salaf.",
  },
  {
    question: "Quand commence-t-on les takbirat de l'Aïd el-Fitr ?",
    answer:
      "Les takbirat de l&apos;Aïd el-Fitr commencent dès l&apos;annonce du jour de l&apos;Aïd (au coucher du soleil du dernier jour de Ramadan) et se poursuivent jusqu&apos;à la prière de l&apos;Aïd. Il est recommandé de les prononcer à voix haute sur le chemin de la mosquée, dans les rues et chez soi, conformément à la pratique des compagnons.",
  },
  {
    question: "Comment se déroule la salat al-Aïd el-Fitr ?",
    answer:
      "La salat al-Aïd se compose de deux rak&apos;at. Dans la première, l&apos;imam prononce sept takbirat supplémentaires avant la lecture de la Fatiha. Dans la seconde, il prononce cinq takbirat supplémentaires. Après la prière, l&apos;imam délivre un sermon (khutba) en deux parties. La prière se fait sans adhan ni iqama.",
  },
  {
    question: "La zakat al-Fitr est-elle obligatoire ?",
    answer:
      "Oui, la zakat al-Fitr est obligatoire pour tout musulman qui possède de quoi se nourrir pour la journée de l&apos;Aïd. Elle doit être versée avant la salat al-Aïd. Le Prophète (paix et salut sur lui) l&apos;a prescrite comme purification pour le jeûneur de ses paroles vaines et obscènes, et comme nourriture pour les pauvres (Abu Dawud).",
  },
  {
    question: "Quelles sont les sunnan du jour de l'Aïd el-Fitr ?",
    answer:
      "Les principales sunnan de l&apos;Aïd el-Fitr sont : faire le ghusl (bain rituel), porter ses plus beaux vêtements, manger des dattes en nombre impair avant de sortir, prononcer les takbirat sur le chemin de la mosquée, prendre un chemin différent pour le retour, échanger les voeux « TaqabbalAllahu minna wa minkum » et visiter la famille.",
  },
  {
    question: "Peut-on jeûner le jour de l'Aïd el-Fitr ?",
    answer:
      "Non, il est strictement interdit (haram) de jeûner le jour de l&apos;Aïd el-Fitr. Le Prophète (paix et salut sur lui) a interdit le jeûne en ce jour. Abu Sa&apos;id al-Khudri rapporte : « Le Prophète a interdit de jeûner le jour du Fitr et le jour du Adha » (al-Bukhari et Muslim). Ce jour est consacré à la joie, à la gratitude et au partage.",
  },
  {
    question: "Quelle est la différence entre l'Aïd el-Fitr et l'Aïd el-Adha ?",
    answer:
      "L&apos;Aïd el-Fitr marque la fin du mois de Ramadan et célèbre l&apos;accomplissement du jeûne. L&apos;Aïd el-Adha (fête du sacrifice) commémore le sacrifice d&apos;Ibrahim (paix sur lui) et a lieu le 10 Dhul Hijja. Les deux fêtes partagent la salat al-Aïd et les takbirat, mais l&apos;Aïd el-Adha inclut le sacrifice rituel (udhiya) et les takbirat durent plus longtemps.",
  },
  {
    question: "Faut-il faire la doua après la salat al-Aïd ?",
    answer:
      "Oui, le moment après toute prière est un moment propice pour faire des douas. Après la salat al-Aïd, il est recommandé de demander à Allah l&apos;acceptation du jeûne de Ramadan, du Coran récité, des prières accomplies et de toutes les bonnes oeuvres. C&apos;est aussi un moment idéal pour invoquer pour soi, sa famille et la communauté musulmane.",
  },
];

export default function DouaAidFitrIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-aid-fitr-islam/#article",
        headline:
          "Doua de l'Aïd el-Fitr en islam : invocations, takbirat et sunnan du jour",
        description:
          "Les douas de l'Aïd el-Fitr en islam : takbirat al-eid, doua taqabbalAllahu minna wa minkum, salat al-eid, zakat al-fitr et sunnan authentiques.",
        image: "/images/croissant-lune-dore-lanternes-islam-ramadan.jpg",
        datePublished: "2026-04-05",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-aid-fitr-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-aid-fitr-islam/#breadcrumb",
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
            name: "Doua de l'Aïd el-Fitr",
            item: "https://www.islamreligion.fr/doua-aid-fitr-islam",
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
          title="Doua de l'Aïd el-Fitr en islam : invocations, takbirat et sunnan"
          subtitle="Les invocations authentiques du jour de l'Aïd el-Fitr tirées du Coran et de la Sunna. Takbirat, douas en arabe, phonétique et traduction française."
          imageSrc="/images/croissant-lune-dore-lanternes-islam-ramadan.jpg"
          imageAlt="Croissant de lune doré et lanternes islamiques symbolisant l'Aïd el-Fitr après le Ramadan"
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
                <span className="text-foreground">Doua de l&apos;Aïd el-Fitr</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;Aïd el-Fitr est l&apos;une des deux grandes fêtes de
                  l&apos;islam, célébrée à la fin du mois béni de Ramadan. Ce
                  jour est marqué par les takbirat, la prière de l&apos;Aïd, la
                  zakat al-Fitr et de nombreuses invocations. Le musulman
                  remercie Allah pour lui avoir permis de compléter le jeûne et
                  implore l&apos;acceptation de ses adorations. La doua la plus
                  célèbre échangée entre musulmans ce jour-là est
                  &laquo;&nbsp;TaqabbalAllahu minna wa minkum&nbsp;&raquo;
                  (Qu&apos;Allah accepte de nous et de vous).
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Les takbirat de l'Aïd */}
              {/* ============================================ */}
              <section id="takbirat-aid" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les takbirat de l&apos;Aïd el-Fitr : formule et moment
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les takbirat constituent l&apos;une des pratiques les plus
                  emblématiques de l&apos;Aïd el-Fitr. Allah dit dans le
                  Coran : &laquo;&nbsp;Et pour que vous complétiez le nombre de
                  jours et que vous proclamiez la grandeur d&apos;Allah pour
                  vous avoir guidés, et afin que vous soyez
                  reconnaissants&nbsp;&raquo; (Coran, 2:185). Ce verset établit
                  le fondement coranique des takbirat de l&apos;Aïd el-Fitr,
                  directement liés à l&apos;achèvement du jeûne de Ramadan.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu Akbar, Allahu Akbar, La ilaha illa Allah, wa Allahu Akbar, Allahu Akbar, wa lillahi al-hamd
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah est le plus Grand, Allah est le plus Grand, il n&apos;y a de divinité qu&apos;Allah, Allah est le plus Grand, Allah est le plus Grand, et à Allah revient toute louange&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants sont unanimes sur le fait que les takbirat de
                  l&apos;Aïd el-Fitr sont une sunna fortement recommandée
                  (sunna mu&apos;akkada). Elles commencent dès l&apos;annonce du
                  jour de l&apos;Aïd, c&apos;est-à-dire au coucher du soleil du
                  dernier jour de Ramadan, et se poursuivent jusqu&apos;à la
                  prière de l&apos;Aïd. Ibn &apos;Umar et Abu Hurayra (qu&apos;Allah
                  les agrée) sortaient au marché les jours de l&apos;Aïd en
                  prononçant le takbir à voix haute, et les gens faisaient de
                  même en les entendant (al-Bukhari).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est recommandé de prononcer les takbirat dans toutes les
                  circonstances : chez soi, dans la rue, sur le chemin de la
                  mosquée et dans la mosquée elle-même avant le début de la
                  prière. Les hommes les prononcent à voix haute tandis que les
                  femmes les disent à voix basse. Cette pratique remplit les rues
                  et les foyers d&apos;une atmosphère de foi et de gratitude
                  envers Allah pour le bienfait du Ramadan accompli. Pour
                  approfondir les invocations liées au mois de{" "}
                  <Link href="/doua-ramadan-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Ramadan</Link>,
                  consultez notre guide dédié.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/decoration-ramadan-islam-lanternes-croissant-lune.jpg"
                    alt="Lanternes islamiques et croissant de lune symbolisant les takbirat et la joie de l'Aïd el-Fitr"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua en se rencontrant */}
              {/* ============================================ */}
              <section id="doua-rencontre-aid" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en se rencontrant le jour de l&apos;Aïd : TaqabbalAllahu minna wa minkum
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsque les musulmans se rencontrent le jour de l&apos;Aïd
                  el-Fitr, ils échangent une invocation d&apos;une profondeur
                  remarquable. Cette doua ne se limite pas à une simple formule
                  de politesse : c&apos;est une véritable invocation adressée à
                  Allah pour que les adorations de chacun soient acceptées.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> TaqabbalAllahu minna wa minkum
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Qu&apos;Allah accepte (les bonnes oeuvres) de nous et de vous&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette pratique est attestée par les compagnons du Prophète
                  (paix et salut sur lui). Jubayr ibn Nufayr rapporte :
                  &laquo;&nbsp;Les compagnons du Messager d&apos;Allah, lorsqu&apos;ils
                  se rencontraient le jour de l&apos;Aïd, se disaient les uns
                  aux autres : TaqabbalAllahu minna wa minka&nbsp;&raquo;. Ibn
                  Hajar a qualifié la chaîne de transmission de cette narration
                  de bonne (hasan). Cette formule traduit l&apos;esprit même de
                  l&apos;Aïd : un jour de gratitude collective où chaque
                  musulman espère que ses efforts durant le Ramadan ont été
                  agréés par Allah.
                </p>

                <HadithCard
                  arabic="ما من عبد يصوم يوماً في سبيل الله إلا باعد الله بذلك اليوم وجهه عن النار سبعين خريفاً"
                  text="Aucun serviteur ne jeûne un jour dans le sentier d'Allah sans qu'Allah n'éloigne, grâce à ce jour, son visage du Feu de soixante-dix années."
                  source="Rapporté par al-Bukhari (2840) et Muslim (1153)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La beauté de cette doua réside dans sa réciprocité : le
                  musulman invoque pour lui-même et pour son frère ou sa soeur
                  en même temps. C&apos;est un acte d&apos;amour fraternel qui
                  renforce les liens de la communauté. Les savants soulignent
                  qu&apos;il est permis d&apos;ajouter d&apos;autres formules de
                  voeux comme &laquo;&nbsp;Aïd moubarak&nbsp;&raquo; ou
                  &laquo;&nbsp;Kulla &apos;am wa antum bikhayr&nbsp;&raquo;
                  (Que vous soyez dans le bien chaque année), même si la
                  première formule reste la plus authentique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratique des compagnons :</strong> cette doua est
                      attestée par les Salaf et recommandée par les grands
                      savants comme Ibn Taymiyya et Ibn al-Qayyim.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Signification profonde :</strong> demander
                      l&apos;acceptation des oeuvres est plus important que de
                      simplement souhaiter une bonne fête, car l&apos;acceptation
                      par Allah est l&apos;objectif ultime du jeûne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réponse :</strong> lorsqu&apos;on vous dit
                      &laquo;&nbsp;TaqabbalAllahu minna wa minkum&nbsp;&raquo;,
                      vous répondez par la même formule ou par
                      &laquo;&nbsp;TaqabbalAllahu minna wa minka&nbsp;&raquo;
                      (au singulier).
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
              {/* SECTION 3 : Salat al-Aïd */}
              {/* ============================================ */}
              <section id="salat-al-eid" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La salat al-Aïd : prière et invocations de l&apos;Aïd el-Fitr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La salat al-Aïd est une prière spéciale que les musulmans
                  accomplissent en congrégation le matin du jour de l&apos;Aïd.
                  Elle se distingue des prières quotidiennes par ses takbirat
                  supplémentaires et par l&apos;absence d&apos;adhan et
                  d&apos;iqama. La majorité des savants considèrent cette prière
                  comme une obligation communautaire (fard kifaya), tandis que
                  d&apos;autres, comme les Hanafites, la considèrent comme
                  obligatoire individuellement (wajib).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le déroulement de la salat al-Aïd suit un ordre précis. La
                  première rak&apos;a commence par le takbirat al-ihram
                  (takbir d&apos;ouverture), suivi de sept takbirat
                  supplémentaires avant la lecture de la Fatiha. L&apos;imam
                  récite ensuite la sourate al-A&apos;la (87) ou la sourate
                  Qaf (50). Dans la seconde rak&apos;a, l&apos;imam prononce
                  cinq takbirat supplémentaires avant la Fatiha, puis récite la
                  sourate al-Ghashiya (88) ou la sourate al-Qamar (54). Après
                  la prière, l&apos;imam délivre un sermon en deux parties
                  portant sur les enseignements de l&apos;Aïd et les règles de
                  la zakat al-Fitr.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ تَقَبَّلْ مِنَّا صِيَامَنَا وَقِيَامَنَا وَرُكُوعَنَا وَسُجُودَنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma taqabbal minna siyamana wa qiyamana wa ruku&apos;ana wa sujudana
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;O Allah, accepte de nous notre jeûne, nos prières nocturnes, nos inclinaisons et nos prosternations&nbsp;&raquo;
                  </p>
                </div>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم لا يغدو يوم الفطر حتى يأكل تمرات"
                  text="Le Messager d'Allah (paix et salut sur lui) ne sortait pas le jour de l'Aïd el-Fitr avant d'avoir mangé des dattes."
                  source="Rapporté par al-Bukhari (953)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Après la salat al-Aïd, le moment est particulièrement propice
                  pour les invocations. Le musulman peut demander à Allah
                  l&apos;acceptation de son jeûne, de ses prières nocturnes
                  (tarawih et qiyam al-layl), de sa lecture du Coran et de
                  toutes ses bonnes actions accomplies durant le Ramadan.
                  C&apos;est également un moment idéal pour invoquer pour ses
                  parents, ses proches et l&apos;ensemble de la communauté
                  musulmane (oumma).
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Zakat al-Fitr */}
              {/* ============================================ */}
              <section id="zakat-al-fitr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Zakat al-Fitr : purification du jeûne et invocations
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La zakat al-Fitr est une aumône obligatoire intimement liée à
                  l&apos;Aïd el-Fitr. Elle a été prescrite par le Prophète (paix
                  et salut sur lui) pour purifier le jeûneur de ses paroles
                  vaines et de ses actes répréhensibles commis durant le
                  Ramadan, et pour nourrir les pauvres le jour de l&apos;Aïd
                  afin qu&apos;eux aussi puissent se réjouir en ce jour de fête.
                </p>

                <HadithCard
                  arabic="فرض رسول الله صلى الله عليه وسلم زكاة الفطر طهرة للصائم من اللغو والرفث وطعمة للمساكين"
                  text="Le Messager d'Allah (paix et salut sur lui) a prescrit la zakat al-Fitr comme purification pour le jeûneur de ses paroles vaines et obscènes, et comme nourriture pour les pauvres."
                  source="Rapporté par Abu Dawud (1609), Ibn Majah (1827)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La zakat al-Fitr est obligatoire pour chaque musulman, homme
                  ou femme, enfant ou adulte, libre ou esclave, qui possède de
                  quoi se nourrir pour la journée de l&apos;Aïd. Le chef de
                  famille la verse au nom de chaque membre de son foyer. Sa
                  quantité est d&apos;un sa&apos; (environ 2,5 à 3 kg) de
                  nourriture de base (dattes, blé, riz, orge ou autre aliment
                  courant du pays). Elle doit être versée avant la salat al-Aïd ;
                  après la prière, elle est considérée comme une simple aumône
                  (sadaqa) et ne remplit plus sa fonction purificatrice.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque le musulman verse la zakat al-Fitr, il est recommandé
                  de formuler l&apos;intention (niyya) dans son coeur et
                  d&apos;invoquer Allah pour qu&apos;Il accepte cette aumône et
                  purifie le jeûne de toute imperfection. La doua du donneur et
                  celle du receveur se rejoignent dans un élan de solidarité qui
                  incarne l&apos;esprit même de l&apos;Aïd. Lorsque celui qui
                  reçoit la zakat invoque pour le donneur, cette invocation est
                  bénie, car la gratitude attire la miséricorde divine.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg"
                    alt="Lanternes orientales, croissant et dattes symbolisant la zakat al-Fitr et les traditions de l'Aïd en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Sunnan du jour */}
              {/* ============================================ */}
              <section id="sunnan-jour-aid" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les sunnan du jour de l&apos;Aïd el-Fitr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le jour de l&apos;Aïd el-Fitr est riche en sunnan
                  (recommandations prophétiques) qui donnent à cette journée
                  toute sa dimension spirituelle et festive. Le Prophète (paix
                  et salut sur lui) accordait une attention particulière à ce
                  jour et le célébrait avec joie, dignité et gratitude envers
                  Allah. Voici les principales sunnan à observer.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le ghusl (bain rituel) avant la prière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il est recommandé de faire le ghusl le matin de
                        l&apos;Aïd avant de se rendre à la mosquée. Ibn
                        &apos;Umar (qu&apos;Allah l&apos;agrée) faisait le ghusl
                        le jour de l&apos;Aïd al-Fitr avant de sortir vers le
                        musalla (lieu de prière). Cette pratique symbolise la
                        purification et le renouveau.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Porter ses plus beaux vêtements
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) portait ses plus
                        beaux habits le jour de l&apos;Aïd. Jabir (qu&apos;Allah
                        l&apos;agrée) rapporte que le Prophète avait un manteau
                        (jubba) qu&apos;il portait les jours de l&apos;Aïd et
                        le vendredi (al-Bukhari). Se parer de beaux vêtements
                        est un acte de gratitude envers Allah pour Ses bienfaits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Manger des dattes en nombre impair avant de sortir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) ne sortait pas le
                        jour de l&apos;Aïd el-Fitr avant d&apos;avoir mangé des
                        dattes, et il les mangeait en nombre impair (al-Bukhari).
                        Cette sunna distingue l&apos;Aïd el-Fitr de l&apos;Aïd
                        el-Adha, où il est recommandé de ne pas manger avant de
                        sacrifier.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prendre un chemin différent pour le retour
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Jabir ibn &apos;Abdillah (qu&apos;Allah l&apos;agrée)
                        rapporte : &laquo;&nbsp;Le Prophète (paix et salut sur
                        lui) empruntait un chemin différent le jour de
                        l&apos;Aïd&nbsp;&raquo; (al-Bukhari). Parmi les sagesses
                        mentionnées par les savants : témoigner de la fête dans
                        plusieurs quartiers, saluer plus de personnes et
                        manifester les rites de l&apos;islam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Visiter la famille et renforcer les liens
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;Aïd est un moment privilégié pour visiter ses
                        parents, ses proches et ses voisins. Le maintien des
                        liens de parenté (silat ar-rahim) est un devoir islamique
                        majeur, et le jour de l&apos;Aïd offre une occasion
                        idéale pour le concrétiser. Offrir des cadeaux aux
                        enfants et partager des repas sont des traditions qui
                        renforcent la cohésion communautaire.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas authentiques */}
              {/* ============================================ */}
              <section id="douas-authentiques-aid" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas authentiques du jour de l&apos;Aïd el-Fitr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus du takbir et de la doua de rencontre, plusieurs
                  invocations sont particulièrement recommandées le jour de
                  l&apos;Aïd el-Fitr. Voici les principales douas à réciter en
                  ce jour béni, en arabe avec leur phonétique et leur traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour l&apos;acceptation du jeûne
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma taqabbal minna innaka Anta as-Sami&apos;u al-&apos;Alim, wa tub &apos;alayna innaka Anta at-Tawwabu ar-Rahim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;O Allah, accepte de nous, Tu es certes Celui qui entend et qui sait tout. Et accepte notre repentir, Tu es certes Celui qui accepte le repentir, le Miséricordieux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Inspirée de Coran (2:127)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de gratitude pour la guidance
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي هَدَانَا لِهَذَا وَمَا كُنَّا لِنَهْتَدِيَ لَوْلَا أَنْ هَدَانَا اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdu lillahi alladhi hadana li hadha wa ma kunna li nahtadiya lawla an hadanAllah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui nous a guidés à cela. Nous n&apos;aurions pas été guidés si Allah ne nous avait pas guidés&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-A&apos;raf (7:43)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la constance après le Ramadan
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ya Muqallib al-qulub, thabbit qalbi &apos;ala dinik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;O Toi qui retournes les coeurs, affermis mon coeur sur Ta religion&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2140), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette dernière invocation est particulièrement pertinente le
                  jour de l&apos;Aïd el-Fitr, car elle marque la transition
                  entre le mois de Ramadan et le reste de l&apos;année. Le
                  musulman demande à Allah de l&apos;aider à maintenir les
                  bonnes habitudes spirituelles acquises durant le Ramadan :
                  la prière nocturne, la lecture du Coran, la générosité et
                  la piété. Pour découvrir d&apos;autres{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils spirituels */}
              {/* ============================================ */}
              <section id="conseils-spirituels" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils spirituels pour vivre pleinement l&apos;Aïd el-Fitr
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;Aïd el-Fitr n&apos;est pas seulement un jour de fête :
                  c&apos;est un jour d&apos;adoration, de gratitude et de
                  renouveau spirituel. Pour tirer le meilleur bénéfice de cette
                  journée bénie, voici quelques conseils pratiques inspirés de
                  la tradition prophétique.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Gratitude avant festivité
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Avant de se réjouir, le musulman remercie Allah de lui
                      avoir permis de vivre le Ramadan et d&apos;en accomplir
                      le jeûne. La joie de l&apos;Aïd est une joie spirituelle
                      née de l&apos;obéissance à Allah, pas seulement une
                      célébration mondaine.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Ne pas oublier les pauvres
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Au-delà de la zakat al-Fitr obligatoire, il est recommandé
                      de faire des aumônes supplémentaires (sadaqat) pour que
                      chaque musulman puisse célébrer l&apos;Aïd dans la
                      dignité. La générosité est l&apos;une des valeurs
                      centrales de cette fête.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Maintenir la constance spirituelle
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le signe de l&apos;acceptation du Ramadan est la
                      constance dans les bonnes oeuvres après le mois béni. Les
                      savants rappellent que &laquo;&nbsp;le Seigneur du
                      Ramadan est aussi le Seigneur des autres mois&nbsp;&raquo;.
                      Continuer à prier, lire le Coran et invoquer Allah après
                      le Ramadan est essentiel.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Réjouir les enfants et la famille
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) permettait les
                      divertissements licites le jour de l&apos;Aïd. Il dit aux
                      compagnons lorsqu&apos;il vit des jeunes filles abyssines
                      jouer : &laquo;&nbsp;Pour que les juifs et les chrétiens
                      sachent qu&apos;il y a de la latitude dans notre
                      religion&nbsp;&raquo; (Ahmad). L&apos;Aïd est un jour de
                      joie pour toute la famille.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En conclusion, l&apos;Aïd el-Fitr est un jour où le musulman
                  célèbre la grâce d&apos;Allah avec reconnaissance, partage et
                  spiritualité. Les douas, les takbirat et les sunnan de cette
                  journée forment un ensemble cohérent qui allie adoration et
                  festivité. Que vous récitiez les takbirat sur le chemin de la
                  mosquée, échangiez la doua &laquo;&nbsp;TaqabbalAllahu minna
                  wa minkum&nbsp;&raquo; avec vos proches ou invoquiez Allah pour
                  la constance après le Ramadan, chaque acte de ce jour est une
                  occasion de se rapprocher du Créateur. Pour connaître les
                  invocations de l&apos;autre grande fête de l&apos;islam,
                  découvrez notre article sur la{" "}
                  <Link href="/doua-aid-adha-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de l&apos;Aïd el-Adha</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du Ramadan en islam"
                  description="Découvrez toutes les invocations authentiques du mois de Ramadan : doua de l'iftar, nuit du Destin et prières nocturnes."
                  href="/doua-ramadan-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas de l&apos;Aïd et du Ramadan avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-ramadan-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du Ramadan
                  </Link>
                  <Link
                    href="/doua-aid-adha-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;Aïd el-Adha
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
