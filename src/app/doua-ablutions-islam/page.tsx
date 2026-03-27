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
    "Doua des ablutions en islam : invocations avant et après le wudu",
  description:
    "Découvrez les doua des ablutions (wudu) en islam : bismillah avant les ablutions, shahada et invocations après le wudu en arabe, phonétique et traduction. Hadiths authentiques et mérites spirituels.",
  openGraph: {
    title:
      "Doua des ablutions en islam : invocations avant et après le wudu",
    description:
      "Les invocations authentiques des ablutions en islam : bismillah avant le wudu, shahada après, doua at-tawwabin. Textes en arabe, phonétique et traduction française.",
    url: "https://www.islamreligion.fr/doua-ablutions-islam",
    images: [
      {
        url: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-ablutions-islam",
  },
};

const tocItems = [
  { id: "importance-ablutions", label: "Importance des ablutions en islam" },
  { id: "bismillah-avant-wudu", label: "Dire bismillah avant le wudu" },
  { id: "shahada-apres-wudu", label: "La shahada après les ablutions" },
  { id: "doua-tawwabin", label: "Doua Allahumma ij'alni min at-tawwabin" },
  { id: "autres-douas-ablutions", label: "Autres douas liées aux ablutions" },
  { id: "merites-spirituels", label: "Mérites spirituels du wudu" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour le wudu" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle doua dire avant les ablutions en islam ?",
    answer:
      "Avant de commencer les ablutions (wudu), il est recommandé de dire « Bismillah » (Au nom d&apos;Allah). Selon un hadith rapporté par Abu Dawud, le Prophète (paix et salut sur lui) a dit : « Pas d&apos;ablutions pour celui qui ne mentionne pas le nom d&apos;Allah. » Certains savants considèrent cette mention comme obligatoire, d&apos;autres comme fortement recommandée (sunna mu&apos;akkada).",
  },
  {
    question: "Quelle doua réciter après les ablutions ?",
    answer:
      "Après les ablutions, le Prophète (paix et salut sur lui) enseignait de dire la shahada : « Ashhadu an la ilaha illAllah wahdahu la sharika lah, wa ashhadu anna Muhammadan abduhu wa rasuluh » (J&apos;atteste qu&apos;il n&apos;y a de divinité qu&apos;Allah, Seul sans associé, et j&apos;atteste que Muhammad est Son serviteur et Son messager). Il ajoutait également : « Allahumma ij&apos;alni min at-tawwabin waj&apos;alni min al-mutatahhirin » (Seigneur, fais de moi un de ceux qui se repentent et un de ceux qui se purifient).",
  },
  {
    question: "Est-ce que les ablutions effacent les péchés ?",
    answer:
      "Oui, selon plusieurs hadiths authentiques, les ablutions effectuées correctement effacent les péchés mineurs. Le Prophète (paix et salut sur lui) a dit : « Lorsque le serviteur musulman fait ses ablutions et lave son visage, chaque péché qu&apos;il a regardé avec ses yeux sort avec l&apos;eau. Lorsqu&apos;il lave ses mains, chaque péché qu&apos;il a commis avec ses mains sort avec l&apos;eau. Lorsqu&apos;il lave ses pieds, chaque péché vers lequel ses pieds ont marché sort avec l&apos;eau, jusqu&apos;à ce qu&apos;il sorte purifié de ses péchés » (Muslim).",
  },
  {
    question: "Peut-on faire la doua des ablutions en français ?",
    answer:
      "Le bismillah avant les ablutions doit idéalement être prononcé en arabe, car il s&apos;agit d&apos;un dhikr (rappel d&apos;Allah) dont la formulation est fixée. De même, la shahada et les douas après le wudu sont des invocations prophétiques qu&apos;il est préférable de réciter en arabe. Cependant, les savants autorisent celui qui ne maîtrise pas encore l&apos;arabe à invoquer dans sa langue maternelle en attendant d&apos;apprendre les formulations authentiques.",
  },
  {
    question: "Quelles sont les conditions de validité des ablutions ?",
    answer:
      "Les ablutions sont valides lorsque le musulman lave les membres dans l&apos;ordre prescrit : l&apos;intention (niyyah), dire bismillah, laver les mains trois fois, se rincer la bouche et le nez, laver le visage trois fois, laver les avant-bras jusqu&apos;aux coudes trois fois, passer les mains mouillées sur la tête et les oreilles, puis laver les pieds jusqu&apos;aux chevilles trois fois. L&apos;eau utilisée doit être pure (tahur).",
  },
  {
    question: "Quelle est la différence entre le wudu et le ghusl ?",
    answer:
      "Le wudu (petites ablutions) consiste à laver certains membres du corps avant la prière. Le ghusl (grandes ablutions) est un bain rituel complet qui purifie l&apos;ensemble du corps. Le ghusl est obligatoire après les rapports intimes, les menstrues, les lochies et l&apos;émission de sperme. Le wudu suffit pour la prière quotidienne si aucune cause de ghusl n&apos;est présente.",
  },
  {
    question: "Faut-il refaire les ablutions après avoir dormi ?",
    answer:
      "Le sommeil profond annule les ablutions selon la majorité des savants. Un léger assoupissement (comme celui qui somnole assis sans s&apos;allonger) ne les annule pas selon certains avis. Par précaution, il est recommandé de refaire ses ablutions après tout sommeil, afin de s&apos;assurer de la validité de la purification avant la prière.",
  },
  {
    question: "Combien de fois faut-il laver chaque membre lors du wudu ?",
    answer:
      "La Sunna recommande de laver chaque membre trois fois lors des ablutions. Cependant, laver une seule fois est suffisant pour la validité du wudu. Le Prophète (paix et salut sur lui) a fait ses ablutions en lavant chaque membre une, deux et trois fois, montrant ainsi la flexibilité. Laver trois fois est la pratique la plus complète et la plus méritoire.",
  },
];

export default function DouaAblutionsIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-ablutions-islam/#article",
        headline:
          "Doua des ablutions en islam : invocations avant et après le wudu",
        description:
          "Découvrez les doua des ablutions (wudu) en islam : bismillah avant les ablutions, shahada et invocations après le wudu en arabe, phonétique et traduction.",
        image: "/images/interieur-mosquee-arches-tapis-lumiere.jpg",
        datePublished: "2026-03-20",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-ablutions-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-ablutions-islam/#breadcrumb",
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
            name: "Doua des ablutions",
            item: "https://www.islamreligion.fr/doua-ablutions-islam",
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
          title="Doua des ablutions en islam : invocations avant et après le wudu"
          subtitle="Les invocations authentiques à réciter avant et après les ablutions, tirées de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
          imageAlt="Intérieur de mosquée avec arches et lumière symbolisant la purification et les ablutions en islam"
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
                <span className="text-foreground">Doua des ablutions</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les ablutions (wudu) ne sont pas un simple geste d&apos;hygiène :
                  elles constituent un acte d&apos;adoration à part entière en islam.
                  Le Prophète (paix et salut sur lui) enseignait de prononcer
                  &laquo;&nbsp;bismillah&nbsp;&raquo; avant de commencer le wudu, puis
                  de réciter la shahada et une doua spécifique après l&apos;avoir
                  terminé. Ces invocations transforment la purification physique en
                  purification spirituelle, effaçant les péchés mineurs et ouvrant
                  les portes du Paradis.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance des ablutions */}
              {/* ============================================ */}
              <section id="importance-ablutions" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des ablutions (wudu) en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les ablutions, appelées <strong>wudu</strong> (وضوء) en arabe,
                  représentent l&apos;un des piliers fondamentaux de la purification
                  rituelle en islam. Aucune prière n&apos;est acceptée sans ablutions
                  valides, ce qui place le wudu au coeur même de la pratique
                  quotidienne du musulman. Le Prophète (paix et salut sur lui) a
                  élevé cet acte bien au-delà d&apos;un simple rituel de propreté en
                  lui associant des invocations spécifiques et des mérites spirituels
                  considérables.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran lui-même ordonne les ablutions de manière explicite dans
                  la sourate Al-Ma&apos;ida : &laquo;&nbsp;Ô vous qui croyez !
                  Lorsque vous vous levez pour la prière, lavez vos visages et vos
                  mains jusqu&apos;aux coudes, passez vos mains mouillées sur vos
                  têtes et lavez vos pieds jusqu&apos;aux chevilles&nbsp;&raquo;
                  (Coran 5:6). Ce verset établit à la fois l&apos;obligation du wudu
                  et ses étapes essentielles. Les savants soulignent que cette
                  purification prépare le croyant à se tenir devant Allah dans la
                  prière, en purifiant son corps et son âme simultanément.
                </p>

                <HadithCard
                  arabic="لا تُقبل صلاة بغير طهور"
                  text="Aucune prière n'est acceptée sans purification."
                  source="Rapporté par Muslim (224)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith fondamental rappelle que la purification est une condition
                  sine qua non de la validité de la prière. Mais le wudu va bien au-delà
                  de cette simple condition : accompagné de ses invocations prophétiques,
                  il devient un moment privilégié de connexion avec Allah, un instant
                  où le serviteur purifie son corps tout en élevant son âme par le
                  dhikr (rappel d&apos;Allah). Les <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link> accompagnent
                  ainsi chaque acte du quotidien, y compris les ablutions.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Condition de validité de la prière :</strong>{" "}
                      sans wudu, les cinq prières quotidiennes ne sont pas acceptées
                      par Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Purification physique et spirituelle :</strong>{" "}
                      le wudu lave le corps de ses impuretés et l&apos;âme de ses
                      péchés mineurs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Signe distinctif des croyants :</strong>{" "}
                      le Prophète (paix et salut sur lui) reconnaîtra sa communauté
                      le Jour du Jugement par les traces lumineuses du wudu
                      (al-ghurra wal-tahjil).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/salle-priere-mosquee-arches-lumiere-soleil.jpg"
                    alt="Salle de prière de mosquée avec arches et lumière du soleil symbolisant la purification par les ablutions"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Bismillah avant le wudu */}
              {/* ============================================ */}
              <section id="bismillah-avant-wudu" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dire bismillah avant les ablutions : obligation ou sunna ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La première invocation liée aux ablutions est le
                  &laquo;&nbsp;bismillah&nbsp;&raquo; que le musulman prononce avant
                  de commencer son wudu. Cette mention du nom d&apos;Allah au début
                  de la purification transforme un acte physique en acte
                  d&apos;adoration. Le Prophète (paix et salut sur lui) a insisté
                  sur l&apos;importance de cette formule à travers plusieurs hadiths
                  authentiques.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    À prononcer avant de commencer les ablutions
                  </p>
                </div>

                <HadithCard
                  arabic="لا وضوء لمن لم يذكر اسم الله عليه"
                  text="Pas d'ablutions pour celui qui ne mentionne pas le nom d'Allah."
                  source="Rapporté par Abu Dawud (101), at-Tirmidhi (25), Ibn Majah (399)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith a fait l&apos;objet de discussions entre les savants.
                  L&apos;imam Ahmad ibn Hanbal considérait que prononcer bismillah
                  est une obligation (wajib) pour les ablutions, et que les oublier
                  volontairement invalide le wudu. En revanche, la majorité des
                  savants (Abu Hanifa, Malik et ash-Shafi&apos;i) considèrent que
                  c&apos;est une sunna fortement recommandée (sunna mu&apos;akkada),
                  et que l&apos;oubli n&apos;invalide pas les ablutions. Dans tous
                  les cas, le musulman doit s&apos;efforcer de ne jamais omettre
                  cette mention, car elle sacralise le wudu et en augmente la
                  récompense.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains savants précisent que la formulation complète est
                  &laquo;&nbsp;Bismillahi ar-Rahmani ar-Rahim&nbsp;&raquo; (Au nom
                  d&apos;Allah, le Tout Miséricordieux, le Très Miséricordieux),
                  tandis que d&apos;autres considèrent que le simple
                  &laquo;&nbsp;Bismillah&nbsp;&raquo; suffit. L&apos;essentiel est
                  de mentionner le nom d&apos;Allah avec conscience et présence du
                  coeur, et non de le prononcer machinalement. Cette intention
                  consciente est ce qui distingue un acte d&apos;adoration d&apos;une
                  simple habitude.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le musulman oublie de dire bismillah au début de ses ablutions,
                  il peut le prononcer dès qu&apos;il s&apos;en souvient au cours du
                  wudu. Les savants qui considèrent le bismillah comme obligatoire
                  précisent que l&apos;oubli est excusé, conformément au hadith :
                  &laquo;&nbsp;Allah a pardonné à ma communauté l&apos;erreur,
                  l&apos;oubli et ce à quoi elle a été contrainte&nbsp;&raquo;
                  (Ibn Majah). Seul l&apos;abandon volontaire est problématique
                  selon l&apos;école hanbalite.
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
              {/* SECTION 3 : La shahada après les ablutions */}
              {/* ============================================ */}
              <section id="shahada-apres-wudu" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La shahada après les ablutions : doua authentique du Prophète
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Une fois les ablutions terminées, le Prophète (paix et salut sur
                  lui) enseignait à ses compagnons de prononcer l&apos;attestation de
                  foi (shahada) accompagnée d&apos;une formule spécifique. Cette
                  invocation transforme la fin du wudu en un moment de renouvellement
                  de la foi et ouvre au croyant les portes du Paradis. C&apos;est
                  l&apos;une des doua les plus importantes liées aux ablutions.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ashhadu an la ilaha illAllah wahdahu la sharika lah, wa ashhadu anna Muhammadan abduhu wa rasuluh
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;J&apos;atteste qu&apos;il n&apos;y a de divinité qu&apos;Allah, Seul sans associé, et j&apos;atteste que Muhammad est Son serviteur et Son messager&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (234)
                  </p>
                </div>

                <HadithCard
                  arabic="ما منكم من أحد يتوضأ فيبلغ أو فيسبغ الوضوء ثم يقول: أشهد أن لا إله إلا الله وأن محمدا عبد الله ورسوله إلا فتحت له أبواب الجنة الثمانية يدخل من أيها شاء"
                  text="Quiconque parmi vous fait ses ablutions de manière complète puis dit : 'J'atteste qu'il n'y a de divinité qu'Allah et que Muhammad est Son serviteur et Son messager', les huit portes du Paradis lui seront ouvertes et il entrera par celle qu'il voudra."
                  source="Rapporté par Muslim (234)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La promesse contenue dans ce hadith est extraordinaire : les huit
                  portes du Paradis s&apos;ouvrent pour celui qui prononce cette
                  shahada après un wudu complet. Cette récompense immense pour un
                  acte aussi simple montre à quel point Allah facilite l&apos;accès
                  au Paradis pour Ses serviteurs. Le croyant qui s&apos;habitue à
                  prononcer cette attestation après chaque ablution accumule un
                  mérite considérable, cinq fois par jour au minimum.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que cette ouverture des portes du Paradis
                  est liée à la combinaison de la purification physique (le wudu) et
                  de la purification spirituelle (le renouvellement de la foi par la
                  shahada). Le musulman qui termine ses ablutions en attestant
                  l&apos;unicité d&apos;Allah et la mission prophétique de Muhammad
                  réaffirme les fondements mêmes de sa foi. Cette pratique régulière
                  ancre le tawhid dans le quotidien et rappelle au croyant le sens
                  profond de chaque acte d&apos;adoration.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans certaines versions du hadith, rapportées par at-Tirmidhi, le
                  Prophète (paix et salut sur lui) ajoutait à cette shahada la
                  formule suivante, qui constitue une doua supplémentaire à réciter
                  après les ablutions. Découvrez également les{" "}
                  <Link href="/doua-apres-priere-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas après la prière</Link>{" "}
                  pour compléter votre pratique quotidienne.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua Allahumma ij'alni min at-tawwabin */}
              {/* ============================================ */}
              <section id="doua-tawwabin" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua &laquo;&nbsp;Allahumma ij&apos;alni min at-tawwabin&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En complément de la shahada, le Prophète (paix et salut sur lui)
                  enseignait une doua spécifique après les ablutions dans laquelle
                  le croyant demande à Allah de le compter parmi ceux qui se
                  repentent constamment et parmi ceux qui se purifient. Cette
                  invocation établit un lien profond entre la purification physique
                  du wudu et la purification spirituelle du repentir (tawba).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ij&apos;alni min at-tawwabin waj&apos;alni min al-mutatahhirin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais de moi un de ceux qui se repentent et fais de moi un de ceux qui se purifient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (55), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua contient deux demandes essentielles qui méritent une
                  attention particulière. La première, &laquo;&nbsp;fais de moi un de
                  ceux qui se repentent&nbsp;&raquo; (at-tawwabin), renvoie à la
                  qualité de celui qui revient constamment vers Allah, reconnaissant
                  ses fautes et cherchant Son pardon. Le terme &laquo;&nbsp;tawwab&nbsp;&raquo;
                  est une forme intensive en arabe, indiquant non pas un repentir
                  occasionnel, mais une disposition permanente au retour vers Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La seconde demande, &laquo;&nbsp;fais de moi un de ceux qui se
                  purifient&nbsp;&raquo; (al-mutatahhirin), dépasse la simple
                  purification physique. Elle englobe la purification de l&apos;âme,
                  du coeur et des intentions. Le croyant qui prononce cette doua
                  après son wudu demande à Allah une purification totale, extérieure
                  et intérieure. C&apos;est pourquoi cette invocation est
                  particulièrement appropriée au moment des ablutions, car elle crée
                  une harmonie entre la pureté du corps et la pureté de l&apos;âme.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en invocation doua après les ablutions wudu en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de combiner la shahada et cette doua après
                  chaque wudu, formant ainsi une séquence complète
                  d&apos;invocations. Le croyant termine ses ablutions en attestant
                  l&apos;unicité d&apos;Allah, puis demande à être compté parmi
                  ceux qui se repentent et se purifient. Cette pratique régulière,
                  répétée au moins cinq fois par jour, forge une conscience
                  spirituelle profonde et un lien constant avec le Créateur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Autres douas liées aux ablutions */}
              {/* ============================================ */}
              <section id="autres-douas-ablutions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Autres douas et adhkar liés aux ablutions
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Outre le bismillah avant le wudu, la shahada et la doua
                  at-tawwabin après, il existe d&apos;autres invocations que le
                  musulman peut réciter en lien avec ses ablutions. Ces douas
                  supplémentaires enrichissent la dimension spirituelle du wudu et
                  permettent au croyant de maximiser la récompense de cet acte
                  d&apos;adoration quotidien.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua en levant le regard vers le ciel après le wudu
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Certains compagnons rapportent que le Prophète (paix et salut sur
                  lui) levait le regard vers le ciel après avoir terminé ses
                  ablutions pour prononcer la shahada. Ce geste symbolise
                  l&apos;élévation de l&apos;invocation vers le Créateur et la
                  conscience que la purification est un acte dédié à Allah seul.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La prière de deux rak&apos;at après les ablutions
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Bien que ce ne soit pas une doua à proprement parler, le Prophète
                  (paix et salut sur lui) a encouragé ses compagnons à accomplir
                  deux rak&apos;at (unités de prière) après les ablutions. Bilal ibn
                  Rabah, le muezzin du Prophète, pratiquait assidûment cette sunna,
                  et le Prophète lui annonça qu&apos;il avait entendu le bruit de
                  ses pas au Paradis grâce à cette pratique.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Subhanaka Allahumma wa bihamdika, ashhadu an la ilaha illa Anta, astaghfiruka wa atubu ilayk
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Toi, Seigneur, et louange à Toi. J&apos;atteste qu&apos;il n&apos;y a de divinité que Toi. Je Te demande pardon et je me repens vers Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par an-Nasa&apos;i dans As-Sunan al-Kubra (9909)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour entrer aux toilettes (avant le wudu)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Avant même de commencer les ablutions, le musulman qui entre aux
                  toilettes pour se purifier prononce une invocation spécifique
                  demandant la protection d&apos;Allah contre les démons. Cette doua
                  fait partie de l&apos;ensemble des invocations liées à la
                  purification et complète le cycle d&apos;adhkar associé au wudu.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika min al-khubuthi wal-khaba&apos;ith
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre les démons mâles et femelles&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (142) et Muslim (375)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Mérites spirituels du wudu */}
              {/* ============================================ */}
              <section id="merites-spirituels" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites spirituels des ablutions en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les ablutions ne se limitent pas à un acte de purification
                  physique : elles sont une source immense de récompenses et de
                  mérites dans l&apos;au-delà. Le Prophète (paix et salut sur lui)
                  a décrit dans de nombreux hadiths les bienfaits spirituels du wudu,
                  allant de l&apos;effacement des péchés à l&apos;élévation en
                  degrés au Paradis. Comprendre ces mérites encourage le musulman à
                  parfaire ses ablutions et à les accomplir avec conscience et
                  dévotion.
                </p>

                <HadithCard
                  arabic="إذا توضأ العبد المسلم فغسل وجهه خرج من وجهه كل خطيئة نظر إليها بعينيه مع الماء أو مع آخر قطر الماء"
                  text="Lorsque le serviteur musulman fait ses ablutions et lave son visage, chaque péché qu'il a regardé avec ses yeux sort avec l'eau ou avec la dernière goutte d'eau."
                  source="Rapporté par Muslim (244)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith extraordinaire décrit un processus de purification
                  spirituelle qui accompagne la purification physique. À mesure que
                  l&apos;eau coule sur les membres du croyant, les péchés mineurs
                  commis par chaque membre sont lavés et évacués. Les yeux sont
                  purifiés des regards illicites, les mains des actes répréhensibles,
                  et les pieds des pas vers le mal. Le croyant sort de ses ablutions
                  dans un état de pureté totale, physique et spirituelle.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;effacement des péchés mineurs
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Chaque ablution correctement effectuée efface les péchés
                        mineurs commis entre elle et la précédente. Le Prophète
                        (paix et salut sur lui) a comparé cela à une rivière devant
                        la porte de l&apos;un d&apos;entre nous dans laquelle il se
                        baignerait cinq fois par jour : resterait-il la moindre
                        saleté sur lui ?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;élévation en degrés au Paradis
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Voulez-vous que je vous indique par quoi Allah
                        efface les péchés et élève les degrés ? Parfaire les ablutions
                        malgré les difficultés, multiplier les pas vers les mosquées
                        et attendre la prière après la prière. Voilà le ribat (la
                        garde aux frontières spirituelles)&nbsp;&raquo; (Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La marque lumineuse le Jour du Jugement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que sa
                        communauté sera reconnue le Jour de la Résurrection par les
                        traces lumineuses du wudu sur leurs visages, mains et pieds
                        (al-ghurra wal-tahjil). Il encourageait à prolonger le
                        lavage des membres au-delà du minimum pour augmenter cette
                        luminosité. Pour approfondir les grandes ablutions, consultez
                        notre article sur la{" "}
                        <Link href="/doua-grande-ablution-ghusl-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du ghusl (grandes ablutions)</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour perfectionner son wudu
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Perfectionner ses ablutions est un objectif que tout musulman
                  devrait poursuivre. Le Prophète (paix et salut sur lui) a encouragé
                  à &laquo;&nbsp;parfaire le wudu&nbsp;&raquo; (isbagh al-wudu),
                  c&apos;est-à-dire à le faire de manière complète et soignée, en
                  n&apos;omettant aucune partie et en accompagnant chaque geste des
                  invocations prescrites. Voici les recommandations pratiques pour
                  tirer le maximum de mérite de ses ablutions.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;intention consciente (niyyah)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Formulez l&apos;intention dans votre coeur avant de commencer
                      les ablutions. L&apos;intention n&apos;a pas besoin d&apos;être
                      prononcée à voix haute : c&apos;est une résolution intérieure
                      de se purifier pour Allah. Cette conscience transforme un geste
                      mécanique en acte d&apos;adoration.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le siwak avant le wudu
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) recommandait l&apos;usage du
                      siwak (bâton d&apos;arak) avant les ablutions. Il a dit :
                      &laquo;&nbsp;Si je ne craignais pas d&apos;imposer une
                      difficulté à ma communauté, je leur aurais ordonné le siwak
                      avant chaque ablution&nbsp;&raquo; (Ahmad).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Ne pas gaspiller l&apos;eau
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) faisait ses ablutions avec
                      un mudd d&apos;eau (environ 625 ml). Il a interdit le gaspillage
                      de l&apos;eau même au bord d&apos;une rivière. Le wudu parfait
                      n&apos;est pas celui qui utilise le plus d&apos;eau, mais celui
                      qui est fait avec le plus de soin et de présence spirituelle.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Laver entre les doigts
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) insistait sur le fait de
                      passer l&apos;eau entre les doigts des mains et des pieds
                      (takhallul). Cette sunna souvent négligée garantit que
                      l&apos;eau atteint toutes les parties du membre, validant
                      ainsi l&apos;ablution de manière complète.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, le wudu parfait combine la rigueur dans le respect des
                  étapes, la modération dans l&apos;utilisation de l&apos;eau, la
                  présence du coeur et la récitation des invocations prescrites. Le
                  musulman qui maîtrise ces éléments transforme chaque ablution en
                  un moment de purification totale et de rapprochement avec Allah.
                  Chaque wudu devient alors une opportunité de renouveler sa foi et
                  d&apos;effacer ses péchés, cinq fois par jour au minimum.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencer par la droite :</strong>{" "}
                      le Prophète (paix et salut sur lui) aimait commencer par la
                      droite en toute chose, y compris dans ses ablutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Respecter l&apos;ordre des membres :</strong>{" "}
                      la séquence prescrite (visage, bras, tête, pieds) doit être
                      respectée selon la majorité des savants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas oublier les oreilles :</strong>{" "}
                      le passage des mains mouillées sur les oreilles fait partie
                      intégrante du wudu et ne doit pas être négligé.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua après la prière en islam"
                  description="Complétez votre pratique spirituelle avec les invocations authentiques à réciter après chaque prière."
                  href="/doua-apres-priere-islam"
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
                    href="/doua-apres-priere-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua après la prière
                  </Link>
                  <Link
                    href="/doua-grande-ablution-ghusl-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua des grandes ablutions (ghusl)
                  </Link>
                  <Link
                    href="/doua-avant-dormir-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua avant de dormir
                  </Link>
                  <Link
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection
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
