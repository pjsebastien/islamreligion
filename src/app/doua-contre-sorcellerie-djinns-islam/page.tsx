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
    "Doua contre la sorcellerie et les djinns en islam : invocations de protection",
  description:
    "Découvrez les douas contre la sorcellerie (sihr) et les djinns en islam : Ayat al-Kursi, sourates al-Falaq et an-Nas, roqya shar'iyya, invocations prophétiques en arabe avec phonétique et traduction.",
  openGraph: {
    title:
      "Doua contre la sorcellerie et les djinns en islam : invocations de protection",
    description:
      "Les invocations authentiques de protection contre la sorcellerie et les djinns : Ayat al-Kursi, al-Mu'awwidhat, roqya shar'iyya et douas prophétiques en arabe.",
    url: "https://www.islamreligion.fr/doua-contre-sorcellerie-djinns-islam",
    images: [
      {
        url: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-contre-sorcellerie-djinns-islam",
  },
};

const tocItems = [
  { id: "sorcellerie-islam", label: "La sorcellerie (sihr) en islam" },
  { id: "ayat-al-kursi", label: "Ayat al-Kursi : le verset de protection" },
  { id: "muawwidhat", label: "Al-Mu'awwidhat : sourates al-Falaq et an-Nas" },
  { id: "roqya-shariyya", label: "La roqya shar'iyya : guérison par le Coran" },
  { id: "douas-protection", label: "Douas prophétiques de protection" },
  { id: "prophete-sihr", label: "Le Prophète et l'épreuve de la sorcellerie" },
  { id: "conseils-pratiques", label: "Conseils pratiques au quotidien" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua contre la sorcellerie en islam ?",
    answer:
      "Les meilleures douas contre la sorcellerie sont les sourates al-Falaq et an-Nas (al-Mu&apos;awwidhat), Ayat al-Kursi (verset 255 de sourate al-Baqara) et l&apos;invocation « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » (Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé). Le Prophète (paix et salut sur lui) récitait ces invocations chaque soir avant de dormir.",
  },
  {
    question: "Comment se protéger des djinns selon la Sunna ?",
    answer:
      "Pour se protéger des djinns, la Sunna recommande de réciter Ayat al-Kursi chaque soir, de lire les trois dernières sourates du Coran (al-Ikhlas, al-Falaq, an-Nas) trois fois matin et soir, de dire « Bismillah » avant d&apos;entrer chez soi, aux toilettes et avant de manger, et de réciter la doua « A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq » le soir. Ces pratiques constituent un bouclier spirituel quotidien.",
  },
  {
    question: "Qu'est-ce que la roqya shar'iyya en islam ?",
    answer:
      "La roqya shar&apos;iyya est la guérison par la récitation du Coran et des invocations prophétiques authentiques. Elle consiste à lire des versets coraniques (al-Fatiha, Ayat al-Kursi, les Mu&apos;awwidhat) et des douas du Prophète sur la personne atteinte de sorcellerie ou de possession. La roqya est licite en islam à condition de n&apos;utiliser que le Coran, les douas authentiques et la langue arabe compréhensible, sans recourir à des talismans ou à des pratiques occultes.",
  },
  {
    question: "La sorcellerie existe-t-elle réellement en islam ?",
    answer:
      "Oui, la sorcellerie (sihr) est une réalité confirmée par le Coran et la Sunna. Allah mentionne la sorcellerie dans sourate al-Baqara (2:102) et sourate al-Falaq (113:4). Le Prophète (paix et salut sur lui) a lui-même été victime d&apos;un sort jeté par Labid ibn al-A&apos;sam, et Allah l&apos;a guéri par la révélation des sourates al-Falaq et an-Nas. La sorcellerie est un péché majeur et fait partie des sept péchés destructeurs.",
  },
  {
    question: "Peut-on faire la roqya sur soi-même ?",
    answer:
      "Oui, il est tout à fait permis et même recommandé de pratiquer la roqya sur soi-même. Le Prophète (paix et salut sur lui) se faisait lui-même la roqya en récitant les Mu&apos;awwidhat et en soufflant dans ses mains avant de les passer sur son corps. Chaque musulman peut réciter le Coran, souffler dans ses mains et passer celles-ci sur les parties de son corps qu&apos;il peut atteindre.",
  },
  {
    question: "Quels sont les signes de la sorcellerie en islam ?",
    answer:
      "Les signes évoqués par les savants incluent un changement soudain et inexplicable de comportement, des cauchemars récurrents, un éloignement inexpliqué entre époux, des maladies sans cause médicale identifiable, et une aversion soudaine pour la prière ou la lecture du Coran. Cependant, ces signes ne sont pas des preuves formelles et il est essentiel de consulter d&apos;abord un médecin avant de conclure à un envoûtement.",
  },
  {
    question: "Est-il permis d'aller voir un sorcier pour annuler la sorcellerie ?",
    answer:
      "Non, il est strictement interdit en islam de consulter un sorcier (sahir), un voyant ou un devin pour annuler la sorcellerie. Le Prophète (paix et salut sur lui) a dit : « Celui qui va voir un devin et le croit en ce qu&apos;il dit a mécru en ce qui a été révélé à Muhammad » (Ahmad). Le remède légitime est la roqya shar&apos;iyya par le Coran et les invocations prophétiques.",
  },
  {
    question: "Combien de temps dure un traitement par la roqya ?",
    answer:
      "Il n&apos;y a pas de durée fixe pour un traitement par la roqya. Certaines personnes ressentent un soulagement immédiat, tandis que d&apos;autres nécessitent une pratique régulière sur plusieurs semaines. Les savants recommandent la constance dans la récitation quotidienne du Coran, des adhkar du matin et du soir, et des douas de protection. La guérison vient d&apos;Allah et son timing relève de Sa sagesse.",
  },
];

export default function DouaContreSorcellerieDjinnsIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-contre-sorcellerie-djinns-islam/#article",
        headline:
          "Doua contre la sorcellerie et les djinns en islam : invocations de protection",
        description:
          "Découvrez les douas contre la sorcellerie (sihr) et les djinns en islam : Ayat al-Kursi, sourates al-Falaq et an-Nas, roqya shar'iyya et invocations prophétiques.",
        image: "/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg",
        datePublished: "2026-04-02",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-contre-sorcellerie-djinns-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-contre-sorcellerie-djinns-islam/#breadcrumb",
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
            name: "Doua contre la sorcellerie et les djinns",
            item: "https://www.islamreligion.fr/doua-contre-sorcellerie-djinns-islam",
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
          title="Doua contre la sorcellerie et les djinns en islam"
          subtitle="Les invocations authentiques de protection contre le sihr et les djinns, tirées du Coran et de la Sunna. Ayat al-Kursi, al-Mu'awwidhat, roqya et douas prophétiques en arabe, phonétique et traduction."
          imageSrc="/images/doua-pelerinage-hajj-kaaba-islam-invocation.jpg"
          imageAlt="Mains levées en invocation doua de protection contre la sorcellerie et les djinns en islam"
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
                <span className="text-foreground">Doua contre la sorcellerie et les djinns</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La sorcellerie (sihr) et les djinns sont des réalités
                  mentionnées dans le Coran et la Sunna. L&apos;islam offre un
                  arsenal complet de protection spirituelle : Ayat al-Kursi, les
                  sourates al-Falaq et an-Nas, la roqya shar&apos;iyya et de
                  nombreuses douas prophétiques. Le Prophète (paix et salut sur
                  lui) a lui-même été victime de sorcellerie et a été guéri par
                  la révélation divine. Chaque musulman peut et doit se protéger
                  quotidiennement par ces invocations authentiques.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La sorcellerie en islam */}
              {/* ============================================ */}
              <section id="sorcellerie-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sorcellerie (sihr) en islam : définition et statut
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le terme arabe <strong>sihr</strong> (سحر) désigne la
                  sorcellerie, c&apos;est-à-dire l&apos;ensemble des pratiques
                  occultes par lesquelles une personne cherche à nuire à autrui
                  en recourant aux djinns et aux forces invisibles. En islam, la
                  sorcellerie est une réalité confirmée par le Coran et la Sunna,
                  et son statut juridique est sans ambiguïté : c&apos;est un
                  péché majeur qui constitue de la mécréance (kufr).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah mentionne explicitement la sorcellerie dans le Coran,
                  notamment dans sourate al-Baqara : &laquo;&nbsp;Et ils suivirent
                  ce que les diables racontent contre le règne de Soulayman. Ce
                  n&apos;est pas Soulayman qui a mécru, mais les diables ont mécru
                  en enseignant aux gens la sorcellerie&nbsp;&raquo; (Coran,
                  2:102). Ce verset établit clairement que la sorcellerie est liée
                  à l&apos;action des shayatines (démons) et qu&apos;elle
                  constitue une forme de mécréance.
                </p>

                <HadithCard
                  arabic="اجتنبوا السبع الموبقات: الشرك بالله، والسحر..."
                  text="Évitez les sept péchés destructeurs : l'associationnisme (shirk), la sorcellerie (sihr)..."
                  source="Rapporté par al-Bukhari (2766) et Muslim (89)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith classe la sorcellerie immédiatement après le shirk
                  parmi les péchés les plus graves en islam. Le sorcier (sahir)
                  fait appel aux djinns en leur offrant des actes de mécréance
                  en échange de leur aide pour nuire aux gens. C&apos;est
                  pourquoi les savants considèrent unanimement que pratiquer la
                  sorcellerie annule l&apos;islam de celui qui s&apos;y adonne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Quant aux <strong>djinns</strong> (جن), ce sont des créatures
                  d&apos;Allah faites de feu, dotées de libre arbitre comme les
                  êtres humains. Parmi eux se trouvent des musulmans et des
                  mécréants, des pieux et des malfaisants. Les djinns mécréants,
                  appelés shayatines, sont ceux que les sorciers invoquent pour
                  accomplir leurs méfaits. Allah dit : &laquo;&nbsp;Et parmi nous
                  il y a des musulmans et des injustes&nbsp;&raquo; (Coran,
                  72:14). Cependant, le croyant ne doit ni les craindre
                  excessivement ni les ignorer : il doit se protéger par les
                  moyens que le Coran et la Sunna ont prescrits.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le sihr est un péché majeur :</strong>{" "}
                      classé parmi les sept péchés destructeurs (al-mubiqat),
                      juste après l&apos;associationnisme.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les djinns sont des créatures réelles :</strong>{" "}
                      mentionnés dans plus de trente versets du Coran, ils
                      vivent dans un monde parallèle au nôtre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le remède est dans le Coran :</strong>{" "}
                      Allah a révélé dans Son Livre les moyens de se protéger
                      et de se guérir de toute atteinte occulte. La{" "}
                      <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de protection en islam</Link>{" "}
                      est le premier bouclier du croyant.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets de protection contre la sorcellerie"
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
                  Ayat al-Kursi : le plus grand verset de protection
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ayat al-Kursi (le verset du Trône), verset 255 de sourate
                  al-Baqara, est considéré par le Prophète (paix et salut sur
                  lui) comme le plus grand verset du Coran. Sa récitation
                  constitue l&apos;un des plus puissants moyens de protection
                  contre la sorcellerie, les djinns et tout mal invisible.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahu la ilaha illa Huwal-Hayyul-Qayyum, la ta&apos;khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa&apos;u &apos;indahu illa bi-idhnih, ya&apos;lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay&apos;in min &apos;ilmihi illa bima sha&apos;a, wasi&apos;a kursiyyuhus-samawati wal-ard, wa la ya&apos;uduhu hifdhuhu ma, wa Huwal-&apos;Aliyyul-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent. À Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission ? Il connaît leur passé et leur futur. Et de Sa science, ils n&apos;embrassent que ce qu&apos;Il veut. Son Trône déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Baqara (2:255)
                  </p>
                </div>

                <HadithCard
                  arabic="إذا أويت إلى فراشك فاقرأ آية الكرسي، فإنه لا يزال عليك من الله حافظ ولا يقربك شيطان حتى تصبح"
                  text="Lorsque tu te rends à ton lit, récite Ayat al-Kursi. Un protecteur de la part d'Allah ne cessera de veiller sur toi et aucun démon ne s'approchera de toi jusqu'au matin."
                  source="Rapporté par al-Bukhari (2311)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, rapporté par Abu Hurayra, est remarquable car
                  c&apos;est un shaytane lui-même qui a révélé cette vérité au
                  compagnon, et le Prophète (paix et salut sur lui) a confirmé
                  ses propos en disant : &laquo;&nbsp;Il t&apos;a dit vrai,
                  bien qu&apos;il soit un grand menteur.&nbsp;&raquo; Ainsi,
                  même les djinns reconnaissent la puissance de ce verset et
                  fuient devant sa récitation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter Ayat al-Kursi dans
                  plusieurs circonstances : après chaque prière obligatoire,
                  avant de dormir, au matin et au soir dans le cadre des adhkar,
                  et à chaque fois que l&apos;on ressent une crainte ou une
                  menace spirituelle. Sa récitation régulière crée une protection
                  divine continue qui empêche les shayatines et les djinns
                  malfaisants de s&apos;approcher du croyant.
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
              {/* SECTION 3 : Al-Mu'awwidhat */}
              {/* ============================================ */}
              <section id="muawwidhat" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Al-Mu&apos;awwidhat : les sourates al-Falaq et an-Nas
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les <strong>Mu&apos;awwidhat</strong> (المعوذات) désignent les
                  sourates par lesquelles le musulman cherche refuge auprès
                  d&apos;Allah. Elles regroupent sourate al-Falaq (113) et
                  sourate an-Nas (114), auxquelles on ajoute parfois sourate
                  al-Ikhlas (112). Ces sourates ont été révélées spécifiquement
                  comme protection contre la sorcellerie et le mal invisible, et
                  le Prophète (paix et salut sur lui) les récitait chaque jour.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourate al-Falaq (L&apos;Aube naissante)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbil-falaq, min sharri ma khalaq, wa min sharri ghasiqin idha waqab, wa min sharrin-naffathati fil-&apos;uqad, wa min sharri hasidin idha hasad
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche refuge auprès du Seigneur de l&apos;aube naissante, contre le mal de ce qu&apos;Il a créé, contre le mal de l&apos;obscurité quand elle s&apos;approfondit, contre le mal de celles qui soufflent sur les noeuds, et contre le mal de l&apos;envieux quand il envie&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate al-Falaq (113:1-5)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le verset &laquo;&nbsp;contre le mal de celles qui soufflent
                  sur les noeuds&nbsp;&raquo; (an-naffathat fil-&apos;uqad) est
                  une référence directe à la sorcellerie. Les exégètes
                  expliquent que les sorcières et sorciers nouaient des noeuds
                  en soufflant dessus pour jeter des sorts. Allah a révélé
                  cette sourate pour que le croyant cherche refuge contre cette
                  pratique maléfique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Sourate an-Nas (Les Hommes)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Qul a&apos;udhu bi Rabbin-nas, Malikin-nas, Ilahin-nas, min sharril-waswasil-khannas, alladhi yuwaswisu fi sudurin-nas, minal-jinnati wan-nas
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Dis : Je cherche refuge auprès du Seigneur des hommes, le Souverain des hommes, le Dieu des hommes, contre le mal du tentateur furtif, qui souffle le mal dans les poitrines des hommes, qu&apos;il soit parmi les djinns ou les hommes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate an-Nas (114:1-6)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sourate an-Nas mentionne explicitement les djinns (al-jinna)
                  comme source de waswas (suggestions maléfiques). Cette sourate
                  protège donc directement contre l&apos;influence des djinns
                  sur l&apos;esprit et le coeur du croyant. La récitation
                  combinée d&apos;al-Falaq et an-Nas couvre ainsi les deux
                  aspects de la menace occulte : la sorcellerie extérieure et
                  l&apos;influence intérieure des djinns.
                </p>

                <HadithCard
                  arabic="قل هو الله أحد والمعوذتين حين تمسي وحين تصبح ثلاث مرات تكفيك من كل شيء"
                  text="Récite 'Qul Huwa Allahu Ahad' et les deux sourates protectrices (al-Falaq et an-Nas) trois fois le matin et le soir : elles te suffiront contre toute chose."
                  source="Rapporté par Abu Dawud (5082), at-Tirmidhi (3575)"
                />

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains levées en prière et invocation de protection contre la sorcellerie et les djinns"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Roqya shar'iyya */}
              {/* ============================================ */}
              <section id="roqya-shariyya" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La roqya shar&apos;iyya : la guérison par le Coran
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>roqya shar&apos;iyya</strong> (الرقية الشرعية)
                  désigne le traitement légitime en islam contre la sorcellerie,
                  la possession par les djinns et le mauvais oeil. Elle consiste
                  à réciter des versets du Coran et des invocations prophétiques
                  authentiques sur la personne atteinte, en plaçant toute sa
                  confiance en Allah comme seul Guérisseur véritable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a approuvé et pratiqué la
                  roqya. Il a posé trois conditions pour qu&apos;elle soit
                  licite : qu&apos;elle soit faite avec les paroles d&apos;Allah
                  (le Coran) ou Ses Noms et Attributs, qu&apos;elle soit en
                  langue arabe ou dans une langue compréhensible, et que le
                  praticien et le patient croient que la guérison vient
                  uniquement d&apos;Allah et non de la roqya elle-même.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La méthode de la roqya shar&apos;iyya comprend plusieurs
                  étapes. Tout d&apos;abord, le raqi (celui qui pratique la
                  roqya) récite sourate al-Fatiha, Ayat al-Kursi, les derniers
                  versets de sourate al-Baqara, les sourates al-Falaq et an-Nas
                  sur le malade. Il peut également souffler dans de l&apos;eau
                  après y avoir récité le Coran, que le malade boira ou utilisera
                  pour se laver. L&apos;huile d&apos;olive et le miel, mentionnés
                  dans la Sunna, peuvent accompagner le traitement.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se purifier et faire ses ablutions
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant de pratiquer la roqya, il est recommandé
                        d&apos;être en état de pureté rituelle. Les ablutions
                        (wudu) renforcent la connexion spirituelle avec Allah
                        et donnent plus de force à la récitation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter les versets de protection
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lire al-Fatiha (7 fois), Ayat al-Kursi, les deux
                        derniers versets de sourate al-Baqara, sourate al-Falaq
                        et sourate an-Nas (3 fois chacune). Le raqi place sa
                        main sur la partie douloureuse ou sur la tête du malade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Souffler légèrement après la récitation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) soufflait dans ses
                        mains après avoir récité les Mu&apos;awwidhat, puis les
                        passait sur son corps. Cette pratique (nafth) est une
                        Sunna authentique et un moyen de transmettre la
                        bénédiction de la récitation coranique.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Persévérer dans le traitement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La roqya n&apos;est pas un acte ponctuel mais un
                        processus qui peut nécessiter de la régularité. Il faut
                        maintenir les adhkar quotidiens, la lecture du Coran et
                        les prières obligatoires pour renforcer la protection
                        spirituelle. La guérison vient d&apos;Allah selon Son
                        timing et Sa sagesse.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est essentiel de distinguer la roqya shar&apos;iyya de la
                  sorcellerie déguisée. Certains charlatans prétendent pratiquer
                  la roqya tout en utilisant des talismans, des écritures
                  incompréhensibles, de l&apos;encens spécifique ou en demandant
                  des informations sur la mère du patient. Ces pratiques sont
                  des signes de sorcellerie et non de roqya légitime. Le
                  musulman doit être vigilant et ne consulter que des
                  praticiens dont la méthode se limite au Coran et aux douas
                  prophétiques authentiques. Pour en savoir plus sur les
                  invocations de protection, consultez notre article sur la{" "}
                  <Link href="/doua-protection-mauvais-oeil-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de protection contre le mauvais oeil</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas prophétiques de protection */}
              {/* ============================================ */}
              <section id="douas-protection" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas prophétiques de protection contre le sihr et les djinns
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus des sourates coraniques, le Prophète (paix et salut
                  sur lui) a enseigné de nombreuses invocations spécifiques pour
                  se protéger contre la sorcellerie, les djinns et tout mal
                  invisible. Ces douas constituent un bouclier spirituel
                  quotidien que tout musulman devrait intégrer dans sa routine
                  matinale et vespérale.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. A&apos;udhu bi kalimatillahi at-tammati
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation est l&apos;une des plus importantes pour la
                  protection quotidienne. Le Prophète (paix et salut sur lui)
                  la récitait chaque soir et l&apos;enseignait à ses
                  compagnons comme un rempart contre tout mal.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de protection pour les enfants
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) récitait cette invocation
                  sur al-Hasan et al-Husayn, ses petits-fils, pour les protéger
                  des djinns et du mauvais oeil. Il enseignait cette pratique
                  en rappelant qu&apos;Ibrahim (paix sur lui) faisait de même
                  pour Isma&apos;il et Ishaq.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> U&apos;idhukuma bi kalimatillahi at-tammati min kulli shaytanin wa hammah, wa min kulli &apos;aynin lammah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je vous place sous la protection des paroles parfaites d&apos;Allah contre tout démon, tout animal venimeux et contre tout mauvais oeil&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (3371)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua en arrivant dans un lieu
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation protège celui qui descend dans un lieu
                  (voyage, hôtel, nouveau logement) contre tout mal, y compris
                  les djinns qui pourraient habiter cet endroit.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi at-tammati min sharri ma khalaq
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge dans les paroles parfaites d&apos;Allah contre le mal de ce qu&apos;Il a créé&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a dit à propos de cette
                  invocation : &laquo;&nbsp;Celui qui descend dans un lieu et
                  dit cette doua, rien ne lui nuira jusqu&apos;à ce qu&apos;il
                  quitte ce lieu.&nbsp;&raquo; Cette garantie prophétique
                  souligne l&apos;efficacité absolue de cette invocation comme
                  bouclier de protection.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Bismillah alladhi la yadurru ma&apos;asmihi shay&apos;
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette doua du matin et du soir offre une protection complète
                  contre tout mal, terrestre et céleste, visible et invisible.
                  Sa récitation trois fois le matin et trois fois le soir
                  constitue un bouclier impénétrable.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillahi alladhi la yadurru ma&apos;asmihi shay&apos;un fil-ardi wa la fis-sama&apos;i wa Huwas-Sami&apos;ul-&apos;Alim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah, avec le nom duquel rien sur terre ni dans le ciel ne peut nuire, et Il est l&apos;Audient, l&apos;Omniscient&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (5088), at-Tirmidhi (3388)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Le Prophète et la sorcellerie */}
              {/* ============================================ */}
              <section id="prophete-sihr" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Prophète (paix et salut sur lui) et l&apos;épreuve de la sorcellerie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des épisodes les plus importants liés à la
                  sorcellerie en islam est celui où le Prophète Muhammad (paix et
                  salut sur lui) fut lui-même victime d&apos;un sort. Cet
                  événement, rapporté dans les recueils authentiques, confirme
                  la réalité de la sorcellerie tout en montrant qu&apos;Allah
                  protège et guérit ceux qui se tournent vers Lui.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon le hadith rapporté par al-Bukhari et Muslim, un homme
                  juif de Médine nommé <strong>Labid ibn al-A&apos;sam</strong>{" "}
                  jeta un sort au Prophète (paix et salut sur lui). Le sort fut
                  placé dans un peigne et des cheveux noués, puis caché dans un
                  puits appelé Dharwan. L&apos;effet de cette sorcellerie était
                  que le Prophète avait parfois l&apos;impression d&apos;avoir
                  fait quelque chose qu&apos;il n&apos;avait pas fait. Cependant,
                  cela n&apos;a jamais affecté sa mission prophétique ni la
                  révélation divine.
                </p>

                <HadithCard
                  arabic="سُحِرَ النبيُّ صلى الله عليه وسلم حتى كان يُخَيَّلُ إليه أنه يفعل الشيءَ وما يفعله"
                  text="Le Prophète (paix et salut sur lui) fut ensorcelé au point qu'il lui semblait parfois avoir fait une chose qu'il n'avait pas faite."
                  source="Rapporté par al-Bukhari (3175) et Muslim (2189)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah envoya alors l&apos;ange Jibril (Gabriel) au Prophète
                  pour l&apos;informer de la nature du sort et de son
                  emplacement. Selon certaines narrations, c&apos;est à cette
                  occasion que furent révélées les sourates al-Falaq et an-Nas.
                  Le Prophète envoya Ali ibn Abi Talib récupérer le peigne
                  ensorcelé dans le puits. En récitant les onze versets des
                  Mu&apos;awwidhat (al-Falaq et an-Nas), les onze noeuds du
                  sort se dénouèrent un à un, et le Prophète fut complètement
                  guéri.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cet épisode contient plusieurs enseignements majeurs pour le
                  musulman. Premièrement, si le meilleur des hommes, le
                  Prophète (paix et salut sur lui), a pu être touché par la
                  sorcellerie, cela signifie que nul n&apos;est à l&apos;abri
                  et que la protection quotidienne est indispensable. Deuxièmement,
                  la guérison est venue exclusivement par le Coran et la
                  révélation divine, ce qui confirme que le Livre d&apos;Allah
                  est le remède par excellence contre tout mal occulte.
                  Troisièmement, le Prophète n&apos;a pas cherché vengeance
                  contre le sorcier, montrant ainsi un modèle de pardon et de
                  confiance en Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sorcellerie n&apos;a pas affecté la révélation :</strong>{" "}
                      le sort n&apos;a jamais altéré la transmission du message
                      divin ni la relation du Prophète avec Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le Coran est le remède :</strong>{" "}
                      la guérison est venue par les sourates al-Falaq et
                      an-Nas, confirmant leur rôle central dans la protection
                      spirituelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le pardon plutôt que la vengeance :</strong>{" "}
                      le Prophète a pardonné au sorcier, enseignant que la
                      confiance en Allah est supérieure à la rancune. Pour
                      approfondir les{" "}
                      <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas en islam</Link>,
                      consultez notre guide complet.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour se protéger au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La protection contre la sorcellerie et les djinns n&apos;est
                  pas un acte ponctuel mais une démarche quotidienne qui
                  s&apos;intègre dans la vie du musulman. Le Prophète (paix et
                  salut sur lui) avait une routine de protection spirituelle que
                  tout croyant peut et doit adopter. Voici les pratiques
                  essentielles à mettre en place chaque jour.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Les adhkar du matin et du soir
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Réciter chaque matin et chaque soir les invocations
                      prophétiques : Ayat al-Kursi, les trois dernières sourates
                      (3 fois chacune), &laquo;&nbsp;Bismillahi alladhi la
                      yadurru...&nbsp;&raquo; (3 fois) et &laquo;&nbsp;A&apos;udhu
                      bi kalimatillahi at-tammati...&nbsp;&raquo;. Cette routine
                      constitue le bouclier de base du musulman.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Dire Bismillah en toute circonstance
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Prononcer &laquo;&nbsp;Bismillah&nbsp;&raquo; avant de
                      manger, de boire, d&apos;entrer chez soi, de se
                      déshabiller et d&apos;entrer aux toilettes. Le Prophète
                      a dit que Bismillah ferme la porte aux shayatines et les
                      empêche de partager notre nourriture et notre foyer.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Réciter sourate al-Baqara chez soi
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Ne faites pas de vos maisons des tombeaux.
                      Le diable fuit la maison dans laquelle sourate al-Baqara
                      est récitée&nbsp;&raquo; (Muslim). Lire cette sourate
                      régulièrement chez soi éloigne les djinns de manière
                      durable.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Maintenir les cinq prières
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les cinq prières quotidiennes sont le pilier de la
                      protection spirituelle. Le musulman qui prie régulièrement
                      maintient un lien constant avec Allah qui constitue le
                      plus puissant rempart contre toute atteinte occulte. La
                      prière est lumière, preuve et protection.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de ces pratiques quotidiennes, il est important de
                  maintenir une hygiène spirituelle globale : éviter les péchés
                  qui affaiblissent la protection divine, se repentir
                  régulièrement, maintenir la lecture quotidienne du Coran et
                  renforcer sa confiance en Allah (tawakkul). Le musulman qui
                  combine ces éléments se construit une forteresse spirituelle
                  que ni la sorcellerie ni les djinns ne peuvent pénétrer, bi
                  idhnillah (avec la permission d&apos;Allah).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais consulter de voyant ou sorcier :</strong>{" "}
                      le Prophète a averti que celui qui consulte un devin voit
                      sa prière rejetée pendant 40 jours (Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éviter les talismans et amulettes :</strong>{" "}
                      porter des talismans (tamima) est interdit en islam. Le
                      Prophète a dit : &laquo;&nbsp;Celui qui porte une amulette
                      a commis du shirk&nbsp;&raquo; (Ahmad).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Placer sa confiance en Allah seul :</strong>{" "}
                      le tawakkul (confiance en Allah) est la clé de toute
                      protection. Allah dit : &laquo;&nbsp;Et quiconque place
                      sa confiance en Allah, Il lui suffit&nbsp;&raquo; (Coran,
                      65:3). Pour découvrir d&apos;autres{" "}
                      <Link href="/doua-protection-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas de protection en islam</Link>,
                      consultez notre guide dédié.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua de protection contre le mauvais oeil en islam"
                  description="Découvrez les invocations prophétiques pour se protéger du mauvais oeil (al-'ayn) et comment pratiquer la ruqya contre cette épreuve."
                  href="/doua-protection-mauvais-oeil-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas de protection avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
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
                    href="/doua-protection-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de protection en islam
                  </Link>
                  <Link
                    href="/doua-protection-mauvais-oeil-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre le mauvais oeil
                  </Link>
                  <Link
                    href="/remede-angoisse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remède contre l&apos;angoisse
                  </Link>
                  <Link
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
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
