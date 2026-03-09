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
    "Doua de protection en islam : invocations contre le mal",
  description:
    "Découvrez les douas de protection en islam : Ayat al-Kursi, les 3 Qul, invocations du matin et du soir, doua contre le mauvais oeil, la sorcellerie et les djinns. Textes en arabe, phonétique et traduction.",
  openGraph: {
    title:
      "Doua de protection en islam : invocations contre le mal",
    description:
      "Les invocations de protection les plus puissantes en islam : Ayat al-Kursi, sourates protectrices, adhkar du matin et du soir, doua contre le mauvais oeil et la sorcellerie.",
    url: "https://www.islamreligion.fr/doua-protection-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-protection-islam",
  },
};

const tocItems = [
  { id: "protection-divine", label: "La protection divine en islam" },
  { id: "ayat-al-kursi", label: "Ayat al-Kursi : protection suprême" },
  { id: "trois-qul", label: "Les 3 Qul (sourates protectrices)" },
  { id: "doua-matin-soir", label: "Doua du matin et du soir" },
  { id: "mauvais-oeil", label: "Doua contre le mauvais oeil" },
  { id: "sorcellerie-djinns", label: "Doua contre la sorcellerie et les djinns" },
  { id: "hisn-al-muslim", label: "La forteresse du musulman (Hisn al-Muslim)" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua de protection la plus puissante en islam ?",
    answer:
      "Ayat al-Kursi (verset du Trône, sourate Al-Baqarah 2:255) est considéré comme la doua de protection la plus puissante en islam. Le Prophète (paix et salut sur lui) a affirmé que celui qui la récite le soir est protégé par Allah jusqu&apos;au matin, et qu&apos;aucun diable ne peut s&apos;approcher de lui. Elle est complétée par les trois sourates protectrices (Al-Ikhlas, Al-Falaq, An-Nas).",
  },
  {
    question: "Comment se protéger du mauvais oeil en islam ?",
    answer:
      "Pour se protéger du mauvais oeil (al-&apos;ayn) en islam, il est recommandé de réciter régulièrement Ayat al-Kursi, les trois dernières sourates du Coran (Al-Ikhlas, Al-Falaq, An-Nas), les adhkar du matin et du soir, et la doua spécifique : « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » (Je me réfugie auprès des paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé). La roqya légitime (récitation du Coran) est également un moyen de protection et de guérison.",
  },
  {
    question: "Quelles sourates réciter pour la protection ?",
    answer:
      "Les sourates les plus recommandées pour la protection sont : sourate Al-Baqarah (en particulier Ayat al-Kursi et les deux derniers versets), sourate Al-Ikhlas, sourate Al-Falaq et sourate An-Nas. Le Prophète (paix et salut sur lui) récitait ces trois dernières sourates trois fois chaque matin et chaque soir. Sourate Al-Baqarah, récitée dans une maison, éloigne le diable pendant trois jours.",
  },
  {
    question: "Quelle doua réciter avant de dormir pour être protégé ?",
    answer:
      "Avant de dormir, le Prophète (paix et salut sur lui) récitait Ayat al-Kursi, les trois Qul (Al-Ikhlas, Al-Falaq, An-Nas) trois fois en soufflant dans ses mains puis en les passant sur son corps, ainsi que les deux derniers versets de sourate Al-Baqarah. Il disait aussi : « Bismika Allahumma amutu wa ahya » (C&apos;est en Ton nom, Seigneur, que je meurs et que je vis).",
  },
  {
    question: "La doua de protection fonctionne-t-elle contre la sorcellerie ?",
    answer:
      "Oui, les douas de protection sont le remède par excellence contre la sorcellerie (sihr) en islam. Le Coran affirme que la sorcellerie ne peut nuire qu&apos;avec la permission d&apos;Allah, et que le refuge auprès d&apos;Allah est la meilleure défense. La récitation régulière d&apos;Ayat al-Kursi, des trois Qul et des adhkar quotidiens constitue un bouclier spirituel reconnu par les savants de l&apos;islam.",
  },
  {
    question: "Peut-on réciter les douas de protection en français ?",
    answer:
      "Les douas personnelles peuvent être faites dans toute langue, y compris le français. Cependant, pour les invocations prophétiques et les versets coraniques de protection (Ayat al-Kursi, les trois Qul), il est fortement recommandé de les réciter en arabe, car c&apos;est la langue de la révélation et ces textes ont une portée spirituelle particulière dans leur langue originale. Apprendre ces textes en arabe est accessible à tous, même aux débutants.",
  },
  {
    question: "Combien de fois faut-il réciter les douas de protection ?",
    answer:
      "Le Prophète (paix et salut sur lui) recommandait de réciter les trois Qul trois fois le matin et trois fois le soir. Ayat al-Kursi se récite au minimum une fois après chaque prière obligatoire et une fois avant de dormir. La doua « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » se récite trois fois le matin et le soir. La régularité quotidienne est la clé de l&apos;efficacité de la protection.",
  },
  {
    question: "Qu'est-ce que le Hisn al-Muslim (la citadelle du musulman) ?",
    answer:
      "Le Hisn al-Muslim (حصن المسلم), ou « la forteresse du musulman », est un recueil d&apos;invocations authentiques compilé par l&apos;imam Sa&apos;id ibn Ali ibn Wahf al-Qahtani. Il rassemble les douas du Prophète (paix et salut sur lui) pour chaque situation de la vie quotidienne : réveil, coucher, repas, voyage, protection, maladie, etc. C&apos;est une référence incontournable pour tout musulman souhaitant fortifier sa pratique des adhkar.",
  },
];

export default function DouaProtectionIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-protection-islam/#article",
        headline:
          "Doua de protection en islam : invocations contre le mal",
        description:
          "Découvrez les douas de protection en islam : Ayat al-Kursi, les 3 Qul, invocations du matin et du soir, doua contre le mauvais oeil, la sorcellerie et les djinns.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-03-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-protection-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-protection-islam/#breadcrumb",
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
            name: "Doua de protection",
            item: "https://www.islamreligion.fr/doua-protection-islam",
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
          title="Doua de protection en islam : invocations contre le mal"
          subtitle="Les invocations authentiques pour se protéger du mauvais oeil, de la sorcellerie et de tout mal. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en doua de protection avec rayons dorés symbolisant la lumière divine en islam"
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
                <span className="text-foreground">Doua de protection</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua de protection</strong> occupe une place
                  centrale dans la vie spirituelle du musulman. Allah a
                  révélé dans le Coran des versets et des sourates dont la
                  récitation constitue un véritable bouclier contre le mal,
                  le mauvais oeil, la sorcellerie et les djinns. Le Prophète
                  (paix et salut sur lui) récitait lui-même ces invocations
                  chaque jour et les enseignait à ses compagnons. Ayat
                  al-Kursi, les trois Qul et les adhkar du matin et du soir
                  forment la forteresse spirituelle que tout croyant devrait
                  ériger quotidiennement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La protection divine en islam */}
              {/* ============================================ */}
              <section id="protection-divine" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La protection divine en islam : un fondement de la foi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la protection (al-hifdh) est un attribut
                  d&apos;Allah. C&apos;est Lui, Al-Hafidh (le Protecteur),
                  qui préserve Ses serviteurs du mal visible et invisible.
                  Le croyant ne place sa confiance en aucune amulette, aucun
                  talisman ni aucune créature : il se tourne exclusivement
                  vers Allah pour obtenir Sa sauvegarde. Cette conception du
                  tawhid appliquée à la protection est un pilier de la
                  croyance islamique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran regorge de versets où Allah affirme Sa capacité à
                  protéger ceux qui L&apos;invoquent avec sincérité. Il dit
                  notamment : &laquo;&nbsp;Et quiconque place sa confiance en
                  Allah, Il lui suffit&nbsp;&raquo; (Coran, sourate At-Talaq,
                  65:3). Cette promesse divine est la base sur laquelle repose
                  l&apos;ensemble des invocations de protection : le musulman
                  récite ces douas non pas comme des formules magiques, mais
                  comme un acte d&apos;adoration et de soumission à Allah,
                  reconnaissant que seul Lui détient le pouvoir de préserver
                  de tout mal.
                </p>

                <HadithCard
                  arabic="احفظ الله يحفظك، احفظ الله تجده تجاهك"
                  text="Préserve Allah (Ses commandements), Il te préservera. Préserve Allah, tu Le trouveras devant toi."
                  source="Rapporté par at-Tirmidhi (2516), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental révèle un principe spirituel
                  puissant : la protection d&apos;Allah est liée à
                  l&apos;obéissance du serviteur. Celui qui préserve les
                  commandements d&apos;Allah dans sa vie quotidienne
                  (prière, honnêteté, droiture) bénéficie en retour de la
                  sauvegarde divine. Les douas de protection ne sont donc
                  pas de simples paroles : elles s&apos;inscrivent dans une
                  relation vivante entre le serviteur et son Seigneur,
                  fondée sur la foi, la confiance et l&apos;obéissance.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le tawakkul (confiance en Allah) :</strong>{" "}
                      c&apos;est la condition première de toute protection.
                      Le croyant prend les moyens matériels puis s&apos;en
                      remet entièrement à Allah pour le résultat.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les adhkar quotidiens :</strong> le Prophète
                      (paix et salut sur lui) ne négligeait jamais les
                      invocations du matin et du soir, montrant leur
                      importance dans la vie du musulman.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;interdiction des talismans :</strong>{" "}
                      porter des amulettes ou des objets de protection en
                      dehors du Coran est interdit en islam, car cela
                      contredit le principe du tawhid. La{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                      est le seul moyen légitime de chercher la protection
                      d&apos;Allah.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée et lumière illustrant les versets de protection en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ayat al-Kursi */}
              {/* ============================================ */}
              <section id="ayat-al-kursi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ayat al-Kursi : la protection suprême
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ayat al-Kursi (le verset du Trône) est le verset 255 de
                  sourate Al-Baqarah. Le Prophète (paix et salut sur lui)
                  l&apos;a désigné comme le plus grand verset du Coran, et
                  de nombreux hadiths authentiques attestent de son pouvoir
                  de protection exceptionnel. C&apos;est la doua de
                  protection par excellence, celle que chaque musulman
                  devrait mémoriser et réciter quotidiennement.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta&apos;khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa&apos;u &apos;indahu illa bi-idhnih, ya&apos;lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi shay&apos;in min &apos;ilmihi illa bima sha&apos;a, wasi&apos;a kursiyyuhus-samawati wal-ard, wa la ya&apos;uduhu hifdhuhuma wa Huwal-&apos;Aliyyul-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et de Sa science, ils n&apos;embrassent que ce qu&apos;Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqarah (2:255)
                  </p>
                </div>

                <HadithCard
                  arabic="من قرأ آية الكرسي في ليلة لم يزل عليه من الله حافظ ولا يقربه شيطان حتى يصبح"
                  text="Celui qui récite Ayat al-Kursi le soir, Allah lui envoie un protecteur et aucun diable ne peut s'approcher de lui jusqu'au matin."
                  source="Rapporté par al-Bukhari (5010)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter Ayat al-Kursi dans
                  plusieurs situations pour bénéficier de sa protection.
                  Après chaque prière obligatoire, le Prophète (paix et
                  salut sur lui) a enseigné que rien n&apos;empêche celui
                  qui la récite d&apos;entrer au Paradis, si ce n&apos;est
                  la mort. Avant de dormir, elle garantit la protection
                  divine toute la nuit. En sortant de chez soi, elle
                  constitue un bouclier contre les maux de la journée. Sa
                  récitation régulière est l&apos;un des actes les plus
                  bénéfiques que le musulman puisse accomplir au quotidien.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset réunit les plus beaux attributs d&apos;Allah :
                  Sa vie éternelle (Al-Hayy), Sa subsistance par Lui-même
                  (Al-Qayyum), Sa science absolue, Sa souveraineté sur les
                  cieux et la terre, et Sa grandeur infinie. Réciter ces
                  attributs avec conscience et méditation renforce la foi du
                  croyant et établit un lien de confiance profond avec le
                  Créateur. C&apos;est pourquoi les savants insistent sur
                  la nécessité de comprendre le sens d&apos;Ayat al-Kursi,
                  pas seulement de la réciter machinalement.
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
              {/* SECTION 3 : Les 3 Qul */}
              {/* ============================================ */}
              <section id="trois-qul" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les 3 Qul : les sourates protectrices du Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les trois dernières sourates du Coran, connues sous le
                  nom de &laquo;&nbsp;les trois Qul&nbsp;&raquo; (car elles
                  commencent toutes par &laquo;&nbsp;Qul&nbsp;&raquo; :
                  &laquo;&nbsp;Dis&nbsp;&raquo;), forment un ensemble de
                  protection que le Prophète (paix et salut sur lui) récitait
                  chaque matin et chaque soir. Les deux dernières sourates
                  (Al-Falaq et An-Nas) sont spécifiquement appelées
                  &laquo;&nbsp;al-mu&apos;awwidhatain&nbsp;&raquo; (les deux
                  protectrices).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Sourate Al-Ikhlas (Le monothéisme pur)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Sourate Al-Ikhlas affirme l&apos;unicité absolue
                  d&apos;Allah. Sa récitation équivaut au tiers du Coran
                  selon le hadith authentique. Elle protège le croyant en
                  renforçant sa foi dans le tawhid, fondement de toute
                  protection spirituelle.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul HuwAllahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Il est Allah, Unique. Allah, Le Seul à être imploré pour ce que nous désirons. Il n&apos;a jamais engendré, n&apos;a pas été engendré non plus. Et nul n&apos;est égal à Lui&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Ikhlas (112:1-4)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Sourate Al-Falaq (L&apos;aube naissante)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Sourate Al-Falaq est une invocation de refuge auprès
                  d&apos;Allah contre quatre types de mal : le mal de ce
                  qu&apos;Il a créé, le mal de l&apos;obscurité, le mal de
                  celles qui soufflent sur les noeuds (sorcellerie) et le
                  mal de l&apos;envieux. Elle constitue une protection
                  directe contre la{" "}
                  <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">sorcellerie en islam</Link>.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-&apos;uqad. Wa min sharri hasidin idha hasad.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche protection auprès du Seigneur de l&apos;aube naissante, contre le mal de ce qu&apos;Il a créé, contre le mal de l&apos;obscurité quand elle s&apos;approfondit, contre le mal de celles qui soufflent sur les noeuds, et contre le mal de l&apos;envieux quand il envie&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Falaq (113:1-5)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Sourate An-Nas (Les hommes)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Sourate An-Nas protège spécifiquement contre les
                  suggestions maléfiques du diable (waswas), qu&apos;il soit
                  parmi les djinns ou parmi les hommes. Elle complète sourate
                  Al-Falaq en couvrant les maux intérieurs (tentations,
                  doutes, pensées néfastes).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche protection auprès du Seigneur des hommes, le Souverain des hommes, Dieu des hommes, contre le mal du tentateur furtif, qui souffle le mal dans les poitrines des hommes, qu&apos;il soit parmi les djinns ou parmi les hommes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate An-Nas (114:1-6)
                  </p>
                </div>

                <HadithCard
                  arabic="قل هو الله أحد والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل شيء"
                  text="Récite 'Qul HuwAllahu Ahad' et les deux protectrices le matin et le soir, trois fois : elles te suffiront contre toute chose."
                  source="Rapporté par Abu Dawud (5082), at-Tirmidhi (3575)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua du matin et du soir */}
              {/* ============================================ */}
              <section id="doua-matin-soir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de protection du matin et du soir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les adhkar (invocations) du matin et du soir constituent
                  le bouclier quotidien du musulman. Le Prophète (paix et
                  salut sur lui) les récitait sans faille et encourageait
                  ses compagnons à ne jamais les négliger. Parmi ces
                  invocations, certaines sont spécifiquement liées à la
                  protection contre tout mal.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua de protection par les paroles parfaites d&apos;Allah
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je me réfugie auprès des paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui
                  qui récite cette invocation trois fois le soir ne sera pas
                  atteint par le venin de quoi que ce soit durant la nuit.
                  Un compagnon rapporte qu&apos;un homme fut piqué par un
                  scorpion durant la nuit, et le Prophète lui dit :
                  &laquo;&nbsp;Si tu avais récité cette doua, le scorpion ne
                  t&apos;aurait pas nui&nbsp;&raquo;. Cette invocation
                  couvre l&apos;ensemble des maux, qu&apos;ils soient
                  physiques ou spirituels.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua de protection complète du matin et du soir
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahil-ladhi la yadurru ma&apos;asmihi shay&apos;un fil-ardi wa la fis-sama&apos;i wa Huwas-Sami&apos;ul-&apos;Alim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, avec le nom de Qui rien sur terre ni au ciel ne peut nuire, et Il est l&apos;Audient, l&apos;Omniscient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5088), at-Tirmidhi (3388)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua, récitée trois fois le matin et trois fois le
                  soir, garantit une protection totale selon le hadith
                  authentique. Le Prophète (paix et salut sur lui) a affirmé
                  que celui qui la prononce ne sera atteint par aucun mal
                  soudain. Uthman ibn Affan (qu&apos;Allah l&apos;agrée),
                  qui rapporte ce hadith, ne manquait jamais de la réciter.
                  Les adhkar du matin se récitent après la prière du Fajr et
                  ceux du soir après la prière du Asr, conformément à la
                  pratique prophétique.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation (sujud) en prière dans une mosquée illustrant la soumission à Allah et la recherche de Sa protection"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua contre le mauvais oeil */}
              {/* ============================================ */}
              <section id="mauvais-oeil" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua contre le mauvais oeil (al-&apos;ayn)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mauvais oeil (al-&apos;ayn) est une réalité confirmée
                  par le Coran et la Sunna. Le Prophète (paix et salut sur
                  lui) a dit : &laquo;&nbsp;Le mauvais oeil est une
                  réalité&nbsp;&raquo; (al-Bukhari et Muslim). Il peut
                  provenir d&apos;un regard d&apos;envie ou
                  d&apos;admiration excessive, même involontairement. La
                  protection contre ce mal passe par les invocations
                  authentiques et la confiance absolue en Allah. Pour
                  approfondir ce sujet, consultez notre article sur la{" "}
                  <Link href="/doua-protection-mauvais-oeil-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de protection contre le mauvais oeil</Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a également dit :
                  &laquo;&nbsp;Le mauvais oeil est une réalité. S&apos;il y
                  avait quelque chose qui devançait le destin, ce serait le
                  mauvais oeil&nbsp;&raquo; (Muslim, 2188). La meilleure
                  protection reste la prévention par les adhkar quotidiens.
                  Le Prophète protégeait al-Hasan et al-Husayn
                  (qu&apos;Allah les agrée) avec cette invocation
                  spécifique :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> U&apos;idhukuma bi kalimatillahit-tammati min kulli shaytanin wa hammah, wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je vous place sous la protection des paroles parfaites d&apos;Allah, contre tout diable, tout animal venimeux et contre tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3371)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua, héritée du prophète Ibrahim (paix sur lui),
                  peut être récitée pour soi-même, pour ses enfants et pour
                  ses proches. Les savants recommandent également de dire
                  &laquo;&nbsp;Ma sha Allah, la quwwata illa billah&nbsp;&raquo;
                  (Ce qu&apos;Allah a voulu, il n&apos;y a de force
                  qu&apos;en Allah) lorsqu&apos;on admire quelque chose,
                  afin de prévenir le mauvais oeil avant même qu&apos;il ne
                  se produise.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire &laquo;&nbsp;Ma sha Allah&nbsp;&raquo; :</strong>{" "}
                      avant d&apos;exprimer de l&apos;admiration pour
                      prévenir le mauvais oeil, que ce soit pour soi-même
                      ou pour autrui.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La roqya légitime :</strong> la récitation du
                      Coran (en particulier sourate Al-Fatiha et les trois
                      Qul) sur la personne atteinte est le traitement
                      prophétique par excellence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La régularité des adhkar :</strong> celui qui
                      maintient ses invocations du matin et du soir se
                      constitue un bouclier permanent contre le mauvais
                      oeil et tout mal extérieur.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Doua contre la sorcellerie et les djinns */}
              {/* ============================================ */}
              <section id="sorcellerie-djinns" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua contre la sorcellerie et les djinns
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La sorcellerie (sihr) et les nuisances des djinns sont
                  des réalités mentionnées dans le Coran et la Sunna.
                  Le Prophète (paix et salut sur lui) a lui-même été
                  victime de sorcellerie et a été guéri par la récitation
                  des sourates Al-Falaq et An-Nas. Ces deux sourates ont
                  été révélées spécifiquement dans ce contexte. Pour un
                  traitement approfondi de ce sujet, consultez notre
                  article sur la{" "}
                  <Link href="/doua-contre-sorcellerie-djinns-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre la sorcellerie et les djinns</Link>.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran affirme clairement que la sorcellerie ne peut
                  nuire qu&apos;avec la permission d&apos;Allah :
                  &laquo;&nbsp;Et ils ne peuvent nuire à personne qu&apos;avec
                  la permission d&apos;Allah&nbsp;&raquo; (Coran, Al-Baqarah,
                  2:102). Cette vérité doit rassurer le croyant : celui qui
                  s&apos;attache aux moyens de protection enseignés par le
                  Prophète (paix et salut sur lui) est sous la sauvegarde
                  d&apos;Allah.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Réciter sourate Al-Baqarah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Récitez sourate Al-Baqarah, car la
                      prendre est une bénédiction et l&apos;abandonner est
                      un regret. Les sorciers ne peuvent
                      l&apos;affronter&nbsp;&raquo; (Muslim). Sa récitation
                      dans la maison éloigne le diable pendant trois jours.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les deux derniers versets d&apos;Al-Baqarah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Celui qui récite les deux derniers versets
                      de sourate Al-Baqarah la nuit, ils lui
                      suffisent&nbsp;&raquo; (al-Bukhari et Muslim).
                      Ils suffisent comme protection contre tout mal
                      durant la nuit.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La roqya par le Coran
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La roqya légitime consiste à réciter le Coran (Al-Fatiha,
                      Ayat al-Kursi, les trois Qul, les versets de sihr) sur
                      la personne atteinte. C&apos;est le remède prophétique
                      contre la sorcellerie, sans recours à aucun charlatan
                      ni pratique interdite.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;invocation en entrant chez soi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné de
                      mentionner le nom d&apos;Allah en entrant chez soi et
                      en mangeant. Si on le fait, le diable dit à ses
                      compagnons : &laquo;&nbsp;Vous n&apos;avez ni gîte
                      ni repas ici&nbsp;&raquo; (Muslim). La mention
                      d&apos;Allah est un bouclier contre les djinns.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants mettent en garde contre le recours aux
                  charlatans, aux amulettes et aux pratiques superstitieuses
                  pour se protéger de la sorcellerie. Ces pratiques relèvent
                  du shirk (associationnisme) et aggravent le mal au lieu de
                  le guérir. Le seul remède reconnu en islam est le Coran,
                  les douas prophétiques et la confiance en Allah. Pour
                  approfondir les moyens de{" "}
                  <Link href="/sorcellerie-islam-protection" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">protection contre la sorcellerie en islam</Link>,
                  consultez notre article dédié.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Hisn al-Muslim */}
              {/* ============================================ */}
              <section id="hisn-al-muslim" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La forteresse du musulman (Hisn al-Muslim) : le recueil de référence
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Hisn al-Muslim (حصن المسلم), compilé par l&apos;imam
                  Sa&apos;id ibn Ali ibn Wahf al-Qahtani, est le recueil
                  d&apos;invocations le plus diffusé dans le monde
                  musulman. Son titre, &laquo;&nbsp;La forteresse du
                  musulman&nbsp;&raquo;, illustre parfaitement le concept
                  de protection par les adhkar : chaque invocation est
                  une brique qui renforce la muraille spirituelle du
                  croyant contre les attaques du mal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce recueil rassemble toutes les invocations authentiques
                  du Prophète (paix et salut sur lui) classées par
                  situation : le réveil, le coucher, l&apos;entrée et la
                  sortie de la maison, la prière, le voyage, la maladie,
                  la protection contre le mal, et bien d&apos;autres. Sa
                  force réside dans le fait que chaque doua est sourcée et
                  authentifiée, ce qui garantit au musulman de ne réciter
                  que des invocations conformes à la Sunna.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Adhkar du matin (après le Fajr)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ayat al-Kursi, les trois Qul (3 fois), les douas de
                        protection mentionnées plus haut, le tasbih, le
                        tahmid et le takbir. Cet ensemble forme un bouclier
                        pour la journée entière.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Adhkar du soir (après le Asr)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les mêmes invocations sont répétées le soir pour
                        assurer la protection nocturne. Le Prophète (paix et
                        salut sur lui) insistait sur la régularité de ces
                        adhkar, matin et soir sans exception.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Adhkar après chaque prière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après chaque prière obligatoire, Ayat al-Kursi et
                        les invocations spécifiques sont récitées. Le
                        Prophète (paix et salut sur lui) a promis le
                        Paradis à celui qui récite Ayat al-Kursi après
                        chaque prière.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Adhkar avant de dormir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les trois Qul soufflées dans les mains, Ayat
                        al-Kursi, les deux derniers versets d&apos;Al-Baqarah
                        et les douas spécifiques du coucher. Cet ensemble
                        assure la protection divine pendant le sommeil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Adhkar en quittant la maison
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        &laquo;&nbsp;Bismillah, tawakkaltu &apos;alAllah, wa
                        la hawla wa la quwwata illa billah&nbsp;&raquo; (Au
                        nom d&apos;Allah, je place ma confiance en Allah, il
                        n&apos;y a de force ni de puissance qu&apos;en
                        Allah). Le Prophète (paix et salut sur lui) a
                        enseigné que celui qui dit cela est protégé et le
                        diable s&apos;éloigne de lui.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La beauté du Hisn al-Muslim réside dans sa simplicité et
                  son accessibilité. Chaque musulman, quel que soit son
                  niveau de connaissance, peut se constituer une forteresse
                  spirituelle en mémorisant progressivement ces invocations.
                  La clé n&apos;est pas de tout apprendre d&apos;un coup,
                  mais de commencer par les adhkar les plus importants
                  (Ayat al-Kursi et les trois Qul) et d&apos;ajouter les
                  autres au fil du temps. Pour{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>{" "}
                  et comprendre le sens profond de ces invocations,
                  découvrez nos ressources dédiées.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua en islam : toutes les invocations authentiques"
                  description="Retrouvez l&apos;ensemble des invocations prophétiques classées par thème : protection, guérison, voyage, réussite et bien plus."
                  href="/doua-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations de protection dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter Ayat al-Kursi et les douas de protection avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-protection-mauvais-oeil-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre le mauvais oeil
                  </Link>
                  <Link
                    href="/doua-contre-sorcellerie-djinns-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre la sorcellerie et les djinns
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie en islam : protection
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
