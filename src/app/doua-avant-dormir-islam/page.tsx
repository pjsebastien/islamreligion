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
    "Doua avant de dormir en islam : invocations du coucher",
  description:
    "Découvrez les douas avant de dormir en islam : Ayat al-Kursi, les 3 Qul, Bismika Allahumma amutu wa ahya, invocations de protection nocturne en arabe avec phonétique et traduction. Routine prophétique du coucher.",
  openGraph: {
    title:
      "Doua avant de dormir en islam : invocations du coucher",
    description:
      "Les invocations authentiques avant de dormir en islam : Ayat al-Kursi, les 3 Qul, douas prophétiques en arabe, phonétique et traduction française.",
    url: "https://www.islamreligion.fr/doua-avant-dormir-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-avant-dormir-islam",
  },
};

const tocItems = [
  { id: "importance-dhikr-sommeil", label: "L'importance du dhikr avant le sommeil" },
  { id: "ayat-al-kursi", label: "Ayat al-Kursi au coucher" },
  { id: "trois-qul", label: "Les 3 Qul : souffler dans les mains" },
  { id: "doua-bismika", label: "Doua Bismika Allahumma amutu wa ahya" },
  { id: "protection-nocturne", label: "Doua de la protection nocturne" },
  { id: "cauchemar-islam", label: "Que faire en cas de cauchemar" },
  { id: "routine-prophetique", label: "Routine du coucher prophétique" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua à dire avant de dormir en islam ?",
    answer:
      "Plusieurs douas sont recommandées avant de dormir en islam. La plus connue est « Bismika Allahumma amutu wa ahya » (C&apos;est en Ton nom, Seigneur, que je meurs et que je vis). Le Prophète (paix et salut sur lui) récitait également Ayat al-Kursi, les trois dernières sourates du Coran (Al-Ikhlas, Al-Falaq, An-Nas) et d&apos;autres invocations de protection avant de s&apos;endormir chaque nuit.",
  },
  {
    question: "Pourquoi réciter Ayat al-Kursi avant de dormir ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné que celui qui récite Ayat al-Kursi (verset du Trône, Coran 2:255) avant de dormir bénéficie d&apos;une protection divine toute la nuit. Un gardien d&apos;Allah veille sur lui et aucun démon ne peut l&apos;approcher jusqu&apos;au matin. Ce hadith est rapporté par al-Bukhari.",
  },
  {
    question: "Comment réciter les 3 Qul avant de dormir ?",
    answer:
      "Le Prophète (paix et salut sur lui) joignait ses deux mains, soufflait dedans, puis récitait les sourates Al-Ikhlas, Al-Falaq et An-Nas. Ensuite, il passait ses mains sur tout son corps en commençant par la tête, le visage, puis le devant du corps. Il répétait ce geste trois fois chaque soir avant de s&apos;endormir. Ce hadith est rapporté par al-Bukhari et Muslim.",
  },
  {
    question: "Que dire en cas de cauchemar en islam ?",
    answer:
      "En cas de cauchemar, le Prophète (paix et salut sur lui) a enseigné plusieurs gestes : cracher légèrement (sans salive) trois fois à gauche, chercher refuge auprès d&apos;Allah contre le diable et contre le mal du rêve, changer de côté de sommeil, et ne raconter le mauvais rêve à personne. On peut aussi se lever pour prier deux rak&apos;at. Le cauchemar vient du diable et ne doit pas être pris comme une prémonition.",
  },
  {
    question: "Peut-on réciter les douas du coucher en français ?",
    answer:
      "Il est permis d&apos;invoquer Allah dans toute langue, y compris en français, pour les douas personnelles. Cependant, pour les invocations prophétiques spécifiques (Ayat al-Kursi, les 3 Qul, les adhkar du coucher), il est fortement recommandé de les réciter en arabe pour bénéficier pleinement de leur effet protecteur. Apprendre la phonétique est un bon premier pas.",
  },
  {
    question: "Combien de douas faut-il réciter avant de dormir ?",
    answer:
      "Le Prophète (paix et salut sur lui) récitait un ensemble d&apos;invocations chaque soir : Ayat al-Kursi, les 3 Qul (trois fois), la doua Bismika Allahumma, les deux derniers versets de sourate Al-Baqara, et d&apos;autres adhkar. Il n&apos;y a pas de nombre minimum obligatoire, mais plus le musulman s&apos;attache à cette routine, plus il bénéficie de la protection et de la bénédiction divines.",
  },
  {
    question: "Est-il obligatoire de dormir sur le côté droit en islam ?",
    answer:
      "Dormir sur le côté droit est une sunna du Prophète (paix et salut sur lui), ce n&apos;est pas une obligation (fard). Le Prophète plaçait sa main droite sous sa joue et récitait les invocations du coucher. Les savants recommandent de commencer par le côté droit puis de se positionner comme on le souhaite pour dormir confortablement.",
  },
  {
    question: "Les douas avant de dormir protègent-elles des mauvais rêves ?",
    answer:
      "Oui, les invocations avant de dormir constituent une protection contre les mauvais rêves et les perturbations nocturnes. Le Prophète (paix et salut sur lui) a spécifiquement mentionné qu&apos;Ayat al-Kursi protège des démons toute la nuit, et que les 3 Qul suffisent comme protection. Le musulman qui s&apos;endort en état de dhikr bénéficie d&apos;une sérénité et d&apos;une tranquillité que seul le souvenir d&apos;Allah procure.",
  },
];

export default function DouaAvantDormirIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-avant-dormir-islam/#article",
        headline:
          "Doua avant de dormir en islam : invocations du coucher",
        description:
          "Découvrez les douas avant de dormir en islam : Ayat al-Kursi, les 3 Qul, douas prophétiques en arabe, phonétique et traduction. Routine complète du coucher.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-03-14",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-avant-dormir-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-avant-dormir-islam/#breadcrumb",
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
            name: "Doua avant de dormir",
            item: "https://www.islamreligion.fr/doua-avant-dormir-islam",
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
          title="Doua avant de dormir en islam : invocations du coucher"
          subtitle="Les invocations authentiques à réciter chaque soir avant le sommeil, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Mains levées en prière doua avant de dormir en islam avec lumière douce symbolisant la sérénité nocturne"
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
                <span className="text-foreground">Doua avant de dormir</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua avant de dormir</strong> occupe une place
                  essentielle dans la vie spirituelle du musulman. Chaque soir,
                  le Prophète (paix et salut sur lui) récitait un ensemble
                  d&apos;invocations avant de s&apos;endormir : Ayat al-Kursi,
                  les trois dernières sourates du Coran (les 3 Qul), la doua
                  &laquo;&nbsp;Bismika Allahumma amutu wa ahya&nbsp;&raquo; et
                  d&apos;autres adhkar de protection. Ces invocations constituent
                  un bouclier spirituel contre les perturbations nocturnes, les
                  cauchemars et les maux invisibles. S&apos;endormir dans le
                  dhikr d&apos;Allah, c&apos;est placer sa nuit entière sous la
                  protection du Créateur.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance du dhikr avant le sommeil */}
              {/* ============================================ */}
              <section id="importance-dhikr-sommeil" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance du dhikr avant le sommeil en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le sommeil est décrit dans le Coran comme un signe parmi les
                  signes d&apos;Allah. Il est une forme de &laquo;&nbsp;petite
                  mort&nbsp;&raquo; durant laquelle l&apos;âme quitte
                  temporairement le corps pour retourner à son Créateur. Allah
                  dit dans le Coran : &laquo;&nbsp;Allah recueille les âmes au
                  moment de leur mort ainsi que celles qui ne meurent pas au
                  cours de leur sommeil&nbsp;&raquo; (Coran, 39:42). Cette
                  réalité spirituelle confère au moment du coucher une dimension
                  sacrée que le musulman ne doit pas négliger.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) accordait une attention
                  particulière aux instants précédant le sommeil. Il ne se
                  couchait jamais sans réciter un ensemble d&apos;invocations et
                  de versets coraniques qui formaient une véritable routine
                  spirituelle. Ce dhikr du coucher avait plusieurs fonctions :
                  protéger le dormeur contre les perturbations nocturnes,
                  purifier l&apos;âme avant son retour temporaire à Allah, et
                  garantir un sommeil paisible sous la garde divine.
                </p>

                <HadithCard
                  arabic="إذا أوى أحدكم إلى فراشه فليأخذ داخلة إزاره فلينفض بها فراشه وليسم الله فإنه لا يعلم ما خلفه بعده على فراشه"
                  text="Lorsque l'un de vous rejoint son lit, qu'il prenne le bord de son vêtement et qu'il époussette son lit avec, et qu'il prononce le nom d'Allah, car il ne sait pas ce qui a pu s'y introduire après lui."
                  source="Rapporté par al-Bukhari (6320) et Muslim (2714)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre l&apos;approche prophétique du coucher :
                  un geste physique (épousseter le lit) accompagné d&apos;un
                  acte spirituel (prononcer le nom d&apos;Allah). Le Prophète
                  (paix et salut sur lui) enseignait que le moment du coucher
                  est un instant de vulnérabilité où le croyant a
                  particulièrement besoin de la protection divine. Le dhikr
                  avant le sommeil n&apos;est donc pas une simple recommandation,
                  mais un acte de piété qui transforme chaque nuit en une
                  occasion d&apos;adoration.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le sommeil est une petite mort :</strong>{" "}
                      l&apos;âme quitte le corps chaque nuit, ce qui rend le
                      dhikr du coucher d&apos;autant plus important pour confier
                      son âme à Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre le diable :</strong> le
                      Prophète (paix et salut sur lui) a enseigné que les
                      invocations du coucher éloignent les démons et protègent
                      le dormeur toute la nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un acte d&apos;adoration quotidien :</strong>{" "}
                      s&apos;endormir en état de dhikr fait de chaque nuit une
                      occasion de gagner des récompenses auprès d&apos;Allah.
                      Pour découvrir l&apos;ensemble des{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
                    alt="Mains en doua avec trait de lumière subtile illustrant le dhikr avant le sommeil en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ayat al-Kursi au coucher */}
              {/* ============================================ */}
              <section id="ayat-al-kursi" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ayat al-Kursi : le verset du Trône au coucher
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ayat al-Kursi (le verset du Trône) est le verset le plus
                  grandiose du Coran selon le Prophète (paix et salut sur lui).
                  Sa récitation avant le sommeil constitue l&apos;une des
                  protections les plus puissantes que le musulman puisse
                  invoquer chaque soir. Ce verset résume les attributs de
                  grandeur, de puissance et de souveraineté d&apos;Allah sur
                  toute Sa création.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum. La ta&apos;khudhuhu sinatun wa la nawm. Lahu ma fis-samawati wa ma fil-ard. Man dhal-ladhi yashfa&apos;u &apos;indahu illa bi-idhnih. Ya&apos;lamu ma bayna aydihim wa ma khalfahum. Wa la yuhituna bi-shay&apos;in min &apos;ilmihi illa bima sha&apos;a. Wasi&apos;a kursiyyuhus-samawati wal-ard. Wa la ya&apos;uduhu hifdhuhuma wa Huwal-&apos;Aliyyul-&apos;Adhim.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah, il n&apos;y a de divinité que Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et de Sa science, ils n&apos;embrassent que ce qu&apos;Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très-Haut, le Très Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:255)
                  </p>
                </div>

                <HadithCard
                  arabic="إذا أويت إلى فراشك فاقرأ آية الكرسي فإنه لن يزال عليك من الله حافظ ولا يقربك شيطان حتى تصبح"
                  text="Lorsque tu rejoins ton lit, récite Ayat al-Kursi. Il y aura alors auprès de toi un gardien [envoyé] par Allah, et aucun démon ne t'approchera jusqu'au matin."
                  source="Rapporté par al-Bukhari (5010)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;histoire de ce hadith est remarquable. Abu Hurayra
                  (qu&apos;Allah l&apos;agrée) raconte qu&apos;il gardait les
                  biens de la zakat lorsqu&apos;un voleur se présenta trois
                  nuits de suite. La troisième nuit, le voleur (qui était en
                  réalité un djinn) lui enseigna de réciter Ayat al-Kursi
                  avant de dormir pour être protégé. Le Prophète (paix et salut
                  sur lui) confirma cette information en disant :
                  &laquo;&nbsp;Il t&apos;a dit vrai, bien qu&apos;il soit un
                  grand menteur&nbsp;&raquo;.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La puissance de ce verset réside dans sa concentration de
                  tawhid (unicité divine). Chaque phrase affirme un attribut
                  d&apos;Allah qui inspire la sécurité : Il est le Vivant qui
                  ne dort jamais (donc Il veille pendant que nous dormons), Il
                  possède tout ce qui existe (donc rien ne peut nous atteindre
                  sans Sa permission), et la garde de l&apos;univers ne Lui
                  coûte aucune peine (donc veiller sur un seul serviteur est
                  chose aisée pour Lui). Réciter ce verset avant le sommeil,
                  c&apos;est confier sa nuit au Gardien suprême qui ne dort
                  jamais.
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
                  Les 3 Qul : souffler dans les mains avant de dormir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les pratiques les plus régulières du Prophète (paix et
                  salut sur lui) avant le sommeil figure la récitation des trois
                  dernières sourates du Coran, connues sous le nom des
                  &laquo;&nbsp;3 Qul&nbsp;&raquo; : sourate Al-Ikhlas (112),
                  sourate Al-Falaq (113) et sourate An-Nas (114). Cette
                  pratique est d&apos;une beauté et d&apos;une simplicité
                  remarquables.
                </p>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم إذا أوى إلى فراشه كل ليلة جمع كفيه ثم نفث فيهما فقرأ فيهما قل هو الله أحد وقل أعوذ برب الفلق وقل أعوذ برب الناس ثم يمسح بهما ما استطاع من جسده"
                  text="Chaque soir, lorsque le Prophète (paix et salut sur lui) rejoignait son lit, il joignait ses deux mains, soufflait dedans, puis y récitait Qul Huwa Allahu Ahad, Qul A'udhu bi Rabbil-Falaq et Qul A'udhu bi Rabbin-Nas. Puis il passait ses mains sur tout ce qu'il pouvait atteindre de son corps."
                  source="Rapporté par al-Bukhari (5017) et Muslim"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) commençait par la tête
                  et le visage, puis descendait sur le devant du corps, et
                  répétait ce geste trois fois. Cette pratique combine
                  l&apos;invocation verbale (récitation des sourates) et le
                  geste physique (passer les mains sur le corps), créant ainsi
                  une protection complète, spirituelle et corporelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourate Al-Ikhlas (112)
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul Huwa Allahu Ahad. Allahus-Samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Il est Allah, l&apos;Unique. Allah, le Seul à être imploré pour ce que nous désirons. Il n&apos;a jamais engendré, n&apos;a pas été engendré non plus. Et nul n&apos;est égal à Lui&nbsp;&raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourate Al-Falaq (113)
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbil-Falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-&apos;uqad. Wa min sharri hasidin idha hasad.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche refuge auprès du Seigneur de l&apos;aube naissante, contre le mal de ce qu&apos;Il a créé, contre le mal de l&apos;obscurité quand elle s&apos;approfondit, contre le mal de celles qui soufflent sur les noeuds, et contre le mal de l&apos;envieux quand il envie&nbsp;&raquo;
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourate An-Nas (114)
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbin-Nas. Malikin-Nas. Ilahin-Nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche refuge auprès du Seigneur des hommes, le Souverain des hommes, le Dieu des hommes, contre le mal du tentateur furtif, qui souffle le mal dans les poitrines des hommes, qu&apos;il soit parmi les djinns ou les hommes&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La combinaison de ces trois sourates offre une protection
                  complète. Sourate Al-Ikhlas purifie le tawhid et affirme
                  l&apos;unicité absolue d&apos;Allah. Sourate Al-Falaq protège
                  contre les maux extérieurs : les créatures nuisibles,
                  l&apos;obscurité, la sorcellerie et la jalousie. Sourate
                  An-Nas protège contre le mal intérieur : les chuchotements du
                  diable qui s&apos;insinuent dans le coeur. Ensemble, elles
                  forment un bouclier total que le Prophète (paix et salut sur
                  lui) ne délaissait jamais. Pour approfondir les{" "}
                  <Link href="/doua-matin-adhkar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">adhkar du matin</Link>,
                  consultez notre guide dédié.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua Bismika Allahumma */}
              {/* ============================================ */}
              <section id="doua-bismika" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua Bismika Allahumma amutu wa ahya
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Cette invocation est l&apos;une des plus connues et des plus
                  récitées par les musulmans au moment de se coucher. Elle
                  exprime une vérité profonde : le sommeil est une forme de mort
                  temporaire, et le réveil est une résurrection quotidienne.
                  En prononçant ces mots, le croyant confie son âme à Allah et
                  reconnaît que sa vie et sa mort sont entièrement entre les
                  mains de son Créateur.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismika Allahumma amutu wa ahya
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;C&apos;est en Ton nom, Seigneur, que je meurs et que je vis&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6324)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait cette doua
                  chaque soir en se couchant, et au réveil, il disait :
                  &laquo;&nbsp;Al-hamdu lillahil-ladhi ahyana ba&apos;da ma
                  amatana wa ilayhin-nushur&nbsp;&raquo; (Louange à Allah qui
                  nous a redonné la vie après nous avoir fait mourir, et c&apos;est
                  vers Lui la résurrection). Ces deux invocations forment un
                  binôme parfait qui encadre le sommeil du musulman.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une autre doua complémentaire, rapportée par Abu Dawud et
                  at-Tirmidhi, enrichit ce moment du coucher :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismika Rabbi wada&apos;tu janbi, wa bika arfa&apos;uhu. Fa in amsakta nafsi farhamha, wa in arsaltaha fahfadhha bima tahfadhu bihi &apos;ibadakas-salihin.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;C&apos;est en Ton nom, Seigneur, que je me couche, et c&apos;est en Ton nom que je me lève. Si Tu retiens mon âme, alors fais-lui miséricorde. Et si Tu la renvoies, protège-la de la manière dont Tu protèges Tes pieux serviteurs&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6320) et Muslim (2714)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua est d&apos;une profondeur remarquable. Le croyant
                  envisage les deux possibilités de sa nuit : soit Allah
                  retient son âme (c&apos;est-à-dire qu&apos;il meurt dans son
                  sommeil), et il demande la miséricorde ; soit Allah renvoie
                  son âme (c&apos;est-à-dire qu&apos;il se réveille), et il
                  demande la même protection dont bénéficient les pieux
                  serviteurs d&apos;Allah. Dans les deux cas, le musulman
                  s&apos;en remet totalement à son Créateur.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
                    alt="Coran ouvert avec chapelet en bois illustrant les versets et invocations du coucher en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Protection nocturne */}
              {/* ============================================ */}
              <section id="protection-nocturne" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de la protection nocturne
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des invocations principales, le Prophète (paix et
                  salut sur lui) enseignait d&apos;autres douas spécifiques
                  pour la protection durant la nuit. Ces invocations visent à
                  se prémunir contre les maux nocturnes, qu&apos;ils soient
                  physiques (insectes, maladies) ou spirituels (djinns,
                  cauchemars, waswas).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَلِمَاتِكَ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bi kalimatika at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge dans Tes paroles parfaites contre le mal de ce que Tu as créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui qui
                  descend dans un lieu et dit cette invocation, rien ne lui
                  nuira jusqu&apos;à ce qu&apos;il quitte cet endroit. Les
                  savants incluent le lit parmi les &laquo;&nbsp;lieux&nbsp;&raquo;
                  où cette protection s&apos;applique. C&apos;est donc une
                  invocation particulièrement adaptée au moment du coucher.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une autre invocation de protection nocturne puissante est
                  celle qui demande le pardon et la protection contre le
                  châtiment :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِاسْمِكَ اللَّهُمَّ وَضَعْتُ جَنْبِي اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَأَخْسِئْ شَيْطَانِي وَفُكَّ رِهَانِي وَاجْعَلْنِي فِي النَّدِيِّ الْأَعْلَى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismika Allahumma wada&apos;tu janbi. Allahumma-ghfir li dhanbi, wa akhsi&apos; shaytani, wa fukka rihani, waj&apos;alni fin-nadiyyil-a&apos;la.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah je me couche. Seigneur, pardonne-moi mes péchés, humilie le démon qui me tient compagnie, libère-moi de mes hypothèques et place-moi dans l&apos;assemblée la plus élevée&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5054)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette invocation est remarquable par sa complétude. En
                  quelques mots, le croyant demande quatre choses essentielles
                  avant de s&apos;endormir : le pardon de ses péchés
                  (purification de l&apos;âme), l&apos;éloignement du diable
                  (protection spirituelle), la libération de ses dettes
                  (tranquillité matérielle) et l&apos;élévation dans
                  l&apos;au-delà (aspiration suprême). C&apos;est une doua qui
                  couvre les besoins du croyant dans ce monde et dans
                  l&apos;autre.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les deux derniers versets de sourate Al-Baqara :</strong>{" "}
                      le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Celui qui récite les deux derniers versets de
                      sourate Al-Baqara dans la nuit, ils lui suffisent&nbsp;&raquo;
                      (al-Bukhari, 5009). Ces versets constituent une protection
                      supplémentaire puissante.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le tasbih avant le sommeil :</strong> Ali
                      (qu&apos;Allah l&apos;agrée) rapporte que Fatima
                      (qu&apos;Allah l&apos;agrée) se plaignit de la fatigue.
                      Le Prophète (paix et salut sur lui) lui enseigna de dire
                      33 fois SubhanAllah, 33 fois Al-hamdulillah et 34 fois
                      Allahu Akbar avant de dormir, affirmant que cela était
                      meilleur qu&apos;un serviteur (al-Bukhari, 3705).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sourate Al-Mulk (67) :</strong> le Prophète (paix
                      et salut sur lui) a enseigné que sourate Al-Mulk
                      intercède pour celui qui la récite jusqu&apos;à ce
                      qu&apos;il soit pardonné. Sa récitation régulière avant
                      le sommeil est une sunna recommandée (at-Tirmidhi, 2891).
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Que faire en cas de cauchemar */}
              {/* ============================================ */}
              <section id="cauchemar-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire en cas de cauchemar en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a clairement distingué
                  entre le bon rêve (ru&apos;ya) qui vient d&apos;Allah, et le
                  mauvais rêve (hulm) qui vient du diable. Le bon rêve est une
                  bonne nouvelle que le croyant peut partager avec ses proches,
                  tandis que le cauchemar est une perturbation satanique contre
                  laquelle le Prophète a enseigné des gestes et des invocations
                  précises.
                </p>

                <HadithCard
                  arabic="الرُّؤْيَا الْحَسَنَةُ مِنَ اللَّهِ فَإِذَا رَأَى أَحَدُكُمْ مَا يُحِبُّ فَلاَ يُحَدِّثْ بِهِ إِلاَّ مَنْ يُحِبُّ وَإِذَا رَأَى مَا يَكْرَهُ فَلْيَتَعَوَّذْ بِاللَّهِ مِنْ شَرِّهَا وَمِنْ شَرِّ الشَّيْطَانِ وَلْيَتْفِلْ ثَلاَثًا وَلاَ يُحَدِّثْ بِهَا أَحَدًا"
                  text="Le bon rêve vient d'Allah. Si l'un de vous voit ce qu'il aime, qu'il n'en parle qu'à ceux qu'il aime. Et s'il voit ce qu'il déteste, qu'il cherche refuge auprès d'Allah contre son mal et contre le mal du diable, qu'il crache légèrement trois fois [à gauche] et qu'il n'en parle à personne."
                  source="Rapporté par al-Bukhari (6985) et Muslim (2261)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont résumé la conduite prophétique en cas de
                  cauchemar en plusieurs étapes pratiques que tout musulman
                  devrait connaître et appliquer :
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Chercher refuge auprès d&apos;Allah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dire &laquo;&nbsp;A&apos;udhu billahi min ash-shaytanir-rajim&nbsp;&raquo;
                        (Je cherche refuge auprès d&apos;Allah contre le diable
                        banni) et chercher refuge contre le mal de ce
                        rêve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Cracher légèrement trois fois à gauche
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il s&apos;agit d&apos;un souffle léger sans salive
                        (naf&apos;th), répété trois fois du côté gauche. Ce
                        geste symbolique marque le rejet du mal et
                        l&apos;éloignement du diable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Changer de côté de sommeil
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a recommandé de
                        changer de position après un cauchemar. Si l&apos;on
                        dormait sur le côté droit, se tourner sur le côté
                        gauche, et inversement. Ce changement physique aide à
                        rompre avec le mauvais rêve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne raconter le cauchemar à personne
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a interdit de
                        raconter le mauvais rêve, car cela lui donne une
                        emprise et peut causer du tort. Le cauchemar ne nuit à
                        personne tant qu&apos;il n&apos;est pas raconté. En le
                        gardant pour soi et en cherchant refuge auprès
                        d&apos;Allah, son effet disparaît.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se lever pour prier si nécessaire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le cauchemar est particulièrement perturbant, le
                        Prophète (paix et salut sur lui) a conseillé de se
                        lever et de prier deux rak&apos;at. La prière nocturne
                        apaise le coeur et éloigne les perturbations
                        sataniques. Pour en savoir plus, consultez notre
                        article sur les{" "}
                        <Link href="/doua-cauchemar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en cas de cauchemar</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est important de souligner que le cauchemar, selon
                  l&apos;enseignement prophétique, ne constitue en aucun cas
                  une prémonition ou un signe divin. C&apos;est une
                  perturbation provenant du diable qui cherche à attrister le
                  croyant et à troubler son sommeil. Le musulman qui applique
                  les recommandations prophétiques mentionnées ci-dessus ne
                  doit ni s&apos;inquiéter ni accorder d&apos;importance au
                  contenu de son mauvais rêve.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Routine du coucher prophétique */}
              {/* ============================================ */}
              <section id="routine-prophetique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La routine complète du coucher prophétique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En rassemblant l&apos;ensemble des hadiths authentiques sur le
                  sujet, les savants ont établi une routine complète du coucher
                  telle que le Prophète (paix et salut sur lui) la pratiquait.
                  Cette routine, lorsqu&apos;elle est appliquée régulièrement,
                  transforme le simple acte de dormir en un moment
                  d&apos;adoration et de protection. Voici les étapes dans
                  l&apos;ordre recommandé :
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      1. Les ablutions (wudu)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) recommandait de
                      faire ses ablutions avant de dormir, même si l&apos;on
                      n&apos;est pas en état d&apos;impureté majeure. Il a
                      dit : &laquo;&nbsp;Lorsque tu rejoins ton lit, fais tes
                      ablutions comme pour la prière&nbsp;&raquo; (al-Bukhari,
                      247). Dormir en état de pureté rituelle est une sunna
                      qui attire la protection des anges.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      2. Épousseter le lit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Avant de s&apos;allonger, épousseter le lit trois fois
                      avec le bord de son vêtement en prononçant le nom
                      d&apos;Allah. Ce geste hygiénique et spirituel prépare
                      un espace propre et béni pour le sommeil.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      3. Se coucher sur le côté droit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) se couchait sur le
                      côté droit et plaçait sa main droite sous sa joue. Cette
                      position est recommandée (sunna) car elle facilite le
                      réveil pour la prière de nuit et présente des bienfaits
                      pour la santé.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      4. Réciter Ayat al-Kursi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le verset du Trône (Coran, 2:255) est la première
                      récitation du coucher. Il assure la protection divine
                      complète contre les démons jusqu&apos;au matin. Sa
                      récitation est une sunna fortement recommandée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      5. Les 3 Qul (trois fois)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Joindre les mains, souffler dedans, réciter les sourates
                      Al-Ikhlas, Al-Falaq et An-Nas, puis passer les mains
                      sur tout le corps. Répéter trois fois ce rituel pour une
                      protection complète.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      6. Les douas du coucher
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Réciter les invocations prophétiques : &laquo;&nbsp;Bismika
                      Allahumma amutu wa ahya&nbsp;&raquo;, la doua de
                      protection &laquo;&nbsp;Bismika Rabbi wada&apos;tu
                      janbi&nbsp;&raquo; et les autres adhkar mentionnés dans
                      cet article.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      7. Le tasbih de Fatima
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Dire 33 fois SubhanAllah, 33 fois Al-hamdulillah et
                      34 fois Allahu Akbar. Le Prophète (paix et salut sur
                      lui) a enseigné ce dhikr à Fatima (qu&apos;Allah
                      l&apos;agrée) comme étant meilleur qu&apos;un serviteur
                      pour l&apos;aider dans ses tâches quotidiennes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      8. Les derniers versets d&apos;Al-Baqara
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Réciter les deux derniers versets de sourate Al-Baqara
                      (2:285-286). Le Prophète (paix et salut sur lui) a dit
                      qu&apos;ils suffisent à celui qui les récite la nuit,
                      c&apos;est-à-dire qu&apos;ils lui apportent une
                      protection suffisante.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette routine peut sembler longue au premier abord, mais avec
                  la pratique régulière, elle ne prend que quelques minutes. Le
                  musulman peut commencer par les éléments les plus
                  importants (Ayat al-Kursi, les 3 Qul et Bismika Allahumma)
                  puis ajouter progressivement les autres adhkar. L&apos;essentiel
                  est la régularité : le Prophète (paix et salut sur lui) a
                  dit que l&apos;oeuvre la plus aimée d&apos;Allah est celle
                  qui est régulière, même si elle est modeste. Pour{" "}
                  <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>{" "}
                  et réciter ces invocations avec compréhension, consultez nos
                  ressources dédiées.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La régularité prime sur la quantité :</strong>{" "}
                      réciter quelques douas chaque soir avec constance est
                      meilleur que de tout réciter une fois puis abandonner.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La présence du coeur :</strong> les invocations
                      récitées avec méditation et compréhension ont un effet
                      bien plus profond que celles prononcées
                      machinalement. Prendre le temps de réfléchir au sens de
                      chaque doua est essentiel.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Enseigner aux enfants :</strong> transmettre
                      cette routine aux enfants dès leur jeune âge est une
                      sunna et un investissement éducatif précieux. Les enfants
                      qui grandissent avec les adhkar du coucher développent
                      un lien fort avec Allah et une sérénité naturelle face
                      au sommeil.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Adhkar du matin en islam"
                  description="Découvrez les invocations du matin recommandées par le Prophète (paix et salut sur lui) pour commencer chaque journée sous la protection divine."
                  href="/doua-matin-adhkar-islam"
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
                    href="/doua-matin-adhkar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Adhkar du matin
                  </Link>
                  <Link
                    href="/doua-cauchemar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en cas de cauchemar
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/remede-angoisse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède contre l&apos;angoisse
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
