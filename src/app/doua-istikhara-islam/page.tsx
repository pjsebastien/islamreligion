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
    "Doua istikhara : la prière de consultation en islam",
  description:
    "Découvrez la doua istikhara complète en arabe, phonétique et traduction française. Apprenez comment prier la salat al-istikhara étape par étape, quand la faire, les signes de réponse et les erreurs à éviter selon le Coran et la Sunna.",
  openGraph: {
    title:
      "Doua istikhara : la prière de consultation en islam",
    description:
      "La doua istikhara complète en arabe avec phonétique et traduction. Guide complet pour prier la salat al-istikhara : étapes, moment, signes et conseils pratiques.",
    url: "https://www.islamreligion.fr/doua-istikhara-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-istikhara-islam",
  },
};

const tocItems = [
  { id: "definition-istikhara", label: "Qu'est-ce que l'istikhara ?" },
  { id: "quand-faire-istikhara", label: "Quand faire la prière d'istikhara" },
  { id: "doua-istikhara-complete", label: "La doua istikhara complète" },
  { id: "comment-prier-istikhara", label: "Comment prier istikhara (étapes)" },
  { id: "signes-reponses", label: "Signes et réponses après istikhara" },
  { id: "erreurs-courantes", label: "Erreurs courantes à éviter" },
  { id: "conseils-pratiques", label: "Conseils pratiques" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua istikhara en arabe ?",
    answer:
      "La doua istikhara est l&apos;invocation enseignée par le Prophète (paix et salut sur lui) rapportée par al-Bukhari. Elle commence par « Allahumma inni astakhiruka bi &apos;ilmika wa astaqdiruka bi qudratika... » et se traduit par : « Seigneur, je Te consulte par Ta science et je Te demande de me donner le pouvoir par Ta puissance... ». Elle se récite après deux unités de prière surérogatoire.",
  },
  {
    question: "Peut-on faire la doua istikhara sans prier ?",
    answer:
      "Oui, selon certains savants comme Ibn Taymiyya, il est permis de réciter la doua istikhara seule sans effectuer les deux unités de prière, notamment lorsqu&apos;on ne peut pas prier (femme en période de menstrues, situation d&apos;urgence). Cependant, la forme complète avec la prière reste la sunna recommandée et la plus méritoire.",
  },
  {
    question: "Combien de fois peut-on faire l'istikhara ?",
    answer:
      "Il n&apos;y a pas de limite au nombre de fois où l&apos;on peut accomplir la prière d&apos;istikhara. Si le croyant n&apos;a pas de sentiment clair après la première prière, il peut la répéter plusieurs fois, voire plusieurs jours de suite, jusqu&apos;à ce qu&apos;il ressente une inclinaison claire. An-Nawawi recommande de la répéter jusqu&apos;à sept fois si nécessaire.",
  },
  {
    question: "Quand faire la prière d'istikhara ?",
    answer:
      "La prière d&apos;istikhara peut être accomplie à tout moment de la journée, sauf pendant les horaires interdits pour la prière surérogatoire : après la prière du Fajr jusqu&apos;au lever du soleil, lorsque le soleil est au zénith, et après la prière de l&apos;Asr jusqu&apos;au coucher du soleil. Le dernier tiers de la nuit est un moment particulièrement recommandé.",
  },
  {
    question: "Est-ce que l'istikhara se fait uniquement en arabe ?",
    answer:
      "La doua istikhara rapportée par le Prophète (paix et salut sur lui) est en arabe et il est fortement recommandé de la réciter dans sa langue originale. Cependant, la majorité des savants autorisent celui qui ne maîtrise pas l&apos;arabe à invoquer dans sa propre langue en attendant d&apos;apprendre le texte arabe. L&apos;essentiel est la sincérité de l&apos;intention.",
  },
  {
    question: "Doit-on voir un rêve après l'istikhara ?",
    answer:
      "Non, il n&apos;est absolument pas obligatoire de voir un rêve après la prière d&apos;istikhara. La réponse peut se manifester de plusieurs manières : une inclinaison du coeur, une facilitation ou un blocage des circonstances, ou parfois un rêve. Attendre un rêve comme condition de validité est une erreur répandue qui n&apos;a aucun fondement dans la Sunna.",
  },
  {
    question: "Peut-on faire istikhara pour le mariage ?",
    answer:
      "Oui, le mariage est l&apos;une des situations les plus courantes pour accomplir la prière d&apos;istikhara. Jabir ibn Abdillah rapporte que le Prophète (paix et salut sur lui) enseignait l&apos;istikhara pour toute affaire importante, tout comme il enseignait les sourates du Coran. Le choix du conjoint étant une décision majeure dans la vie du musulman, l&apos;istikhara y est particulièrement recommandée.",
  },
  {
    question: "Quelle sourate lire pendant la prière d'istikhara ?",
    answer:
      "Il n&apos;y a pas de sourate spécifique obligatoire pour la prière d&apos;istikhara. Toute sourate du Coran peut être récitée. Certains savants recommandent de lire sourate al-Kafirun dans la première unité et sourate al-Ikhlas dans la seconde, mais cela reste une recommandation et non une obligation. L&apos;essentiel est de réciter la Fatiha suivie d&apos;une sourate dans chaque unité.",
  },
];

export default function DouaIstikharaIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-istikhara-islam/#article",
        headline:
          "Doua istikhara : la prière de consultation en islam",
        description:
          "Découvrez la doua istikhara complète en arabe, phonétique et traduction. Guide complet pour prier la salat al-istikhara étape par étape.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-03-10",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-istikhara-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-istikhara-islam/#breadcrumb",
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
            name: "Doua istikhara",
            item: "https://www.islamreligion.fr/doua-istikhara-islam",
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
          title="Doua istikhara : la prière de consultation en islam"
          subtitle="L'invocation prophétique pour demander la guidance d'Allah avant toute décision importante. Texte complet en arabe, phonétique et traduction française avec les étapes détaillées."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua istikhara avec lumière symbolisant la guidance divine en islam"
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
                <span className="text-foreground">Doua istikhara</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua istikhara</strong> est l&apos;invocation par
                  laquelle le musulman demande à Allah de le guider vers le
                  meilleur choix lorsqu&apos;il fait face à une décision
                  importante. Le Prophète Muhammad (paix et salut sur lui) a
                  enseigné cette prière à ses compagnons comme il leur enseignait
                  les sourates du Coran, soulignant son importance capitale dans
                  la vie du croyant. Elle se compose de deux unités de prière
                  suivies d&apos;une invocation spécifique dans laquelle le
                  serviteur remet son choix entre les mains d&apos;Allah, Le
                  reconnaissant comme Celui qui sait ce que nous ignorons.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Définition de l'istikhara */}
              {/* ============================================ */}
              <section id="definition-istikhara" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que l&apos;istikhara en islam ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mot <strong>istikhara</strong> (استخارة) vient de la racine
                  arabe <em>khayr</em> (خير) qui signifie &laquo;&nbsp;le
                  bien&nbsp;&raquo;. Linguistiquement, l&apos;istikhara signifie
                  &laquo;&nbsp;demander le meilleur&nbsp;&raquo; ou
                  &laquo;&nbsp;chercher la guidance vers ce qui est
                  bon&nbsp;&raquo;. En terminologie islamique, c&apos;est le
                  fait de demander à Allah de guider le croyant vers la
                  meilleure décision parmi deux choix ou plus, en reconnaissant
                  que la science divine dépasse infiniment la connaissance
                  humaine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;istikhara est un acte d&apos;adoration profondément
                  ancré dans le <em>tawhid</em> (unicité d&apos;Allah). En
                  accomplissant cette prière, le musulman reconnaît
                  qu&apos;Allah seul connaît l&apos;invisible (<em>al-ghayb</em>),
                  qu&apos;Il seul sait ce qui est véritablement bon ou mauvais
                  pour Son serviteur, et qu&apos;Il seul détient le pouvoir de
                  faciliter ou d&apos;empêcher les choses. C&apos;est un acte
                  de soumission et de confiance absolue en la sagesse divine,
                  qui distingue le croyant de celui qui se fie uniquement à sa
                  propre intelligence ou aux conseils des créatures.
                </p>

                <HadithCard
                  arabic="كان رسول الله صلى الله عليه وسلم يعلمنا الاستخارة في الأمور كلها كما يعلمنا السورة من القرآن"
                  text="Le Messager d'Allah (paix et salut sur lui) nous enseignait l'istikhara dans toutes les affaires comme il nous enseignait une sourate du Coran."
                  source="Rapporté par al-Bukhari (1162)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith de Jabir ibn Abdillah (qu&apos;Allah l&apos;agrée)
                  est le fondement même de la prière d&apos;istikhara. La
                  comparaison avec l&apos;enseignement des sourates du Coran est
                  extrêmement significative : elle montre que le Prophète (paix
                  et salut sur lui) accordait à l&apos;istikhara la même
                  importance qu&apos;à la récitation coranique. Les savants en
                  déduisent que l&apos;istikhara ne devrait jamais être négligée
                  par le croyant lorsqu&apos;il fait face à un choix important.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;istikhara est une sunna mu&apos;akkada :</strong>{" "}
                      les savants la considèrent comme une sunna confirmée
                      (fortement recommandée) pour toute décision qui
                      préoccupe le croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Elle concerne toutes les affaires :</strong>{" "}
                      le hadith mentionne &laquo;&nbsp;toutes les
                      affaires&nbsp;&raquo; (al-umur kulliha), ce qui inclut
                      le mariage, le travail, les voyages, les achats
                      importants et tout choix dont l&apos;issue est
                      incertaine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Elle ne remplace pas la réflexion :</strong>{" "}
                      l&apos;istikhara vient compléter la consultation des
                      gens (istishara) et la réflexion personnelle. Le
                      croyant doit d&apos;abord se renseigner, peser le pour
                      et le contre, puis demander à Allah de le guider vers
                      le meilleur choix.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dorés symbolisant la guidance divine lors de la doua istikhara"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Quand faire l'istikhara */}
              {/* ============================================ */}
              <section id="quand-faire-istikhara" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand faire la prière d&apos;istikhara ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La prière d&apos;istikhara est prescrite chaque fois que le
                  musulman se trouve face à une décision pour laquelle il
                  hésite entre deux options ou plus. Les savants ont précisé
                  les situations dans lesquelles l&apos;istikhara est
                  recommandée et celles où elle n&apos;est pas appropriée,
                  afin de guider le croyant dans sa pratique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam an-Nawawi (qu&apos;Allah lui fasse miséricorde)
                  a expliqué que l&apos;istikhara est recommandée pour les
                  affaires permises (<em>mubah</em>) dont l&apos;issue est
                  incertaine. Elle ne se fait pas pour les actes obligatoires
                  (<em>wajib</em>) ni pour les actes interdits
                  (<em>haram</em>), car la réponse dans ces cas est déjà
                  claire : le musulman doit accomplir l&apos;obligatoire et
                  délaisser l&apos;interdit sans avoir besoin de consulter.
                  De même, elle n&apos;est pas nécessaire pour les actes
                  clairement recommandés (<em>mustahabb</em>) comme le pèlerinage
                  surérogatoire, sauf si le moment ou les circonstances
                  précises posent question.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Situations recommandées
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le choix d&apos;un conjoint, l&apos;acceptation d&apos;un
                      emploi, un déménagement, un voyage, un investissement,
                      un projet d&apos;études, le choix entre deux options
                      toutes deux permises. Toute décision dont les
                      conséquences peuvent affecter significativement la vie
                      du croyant.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Situations non concernées
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les obligations religieuses (prière, jeûne, zakât),
                      les interdictions (alcool, usure, mensonge), les choix
                      insignifiants du quotidien. On ne fait pas
                      l&apos;istikhara pour savoir si l&apos;on doit prier
                      ou non, car la réponse est connue.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Concernant le moment de la journée, la prière
                  d&apos;istikhara peut être accomplie à tout moment où la
                  prière surérogatoire est autorisée. Les horaires à éviter
                  sont : après la prière du Fajr jusqu&apos;au lever complet
                  du soleil, lorsque le soleil est au zénith (quelques
                  minutes avant le Dhuhr), et après la prière de l&apos;Asr
                  jusqu&apos;au coucher du soleil. En dehors de ces créneaux,
                  le croyant est libre de prier l&apos;istikhara à
                  n&apos;importe quel moment, y compris la nuit. Le dernier
                  tiers de la nuit est particulièrement recommandé car
                  c&apos;est le moment où Allah descend au ciel le plus bas
                  et répond aux invocations de Ses serviteurs.
                </p>

                <HadithCard
                  arabic="ينزل ربنا تبارك وتعالى كل ليلة إلى السماء الدنيا حين يبقى ثلث الليل الآخر فيقول: من يدعوني فأستجيب له، من يسألني فأعطيه، من يستغفرني فأغفر له"
                  text="Notre Seigneur descend chaque nuit au ciel le plus bas lorsqu'il reste le dernier tiers de la nuit et dit : Qui M'invoque pour que Je lui réponde ? Qui Me demande pour que Je lui donne ? Qui Me demande pardon pour que Je lui pardonne ?"
                  source="Rapporté par al-Bukhari (1145) et Muslim (758)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith, bien qu&apos;il ne concerne pas spécifiquement
                  l&apos;istikhara, montre que le dernier tiers de la nuit est
                  un moment privilégié pour toute invocation. Combiner la
                  prière d&apos;istikhara avec ce moment béni multiplie les
                  chances d&apos;obtenir une guidance claire d&apos;Allah.
                  Il est également recommandé de faire ses ablutions
                  (<em>wudu</em>) avec soin, de se tourner vers la qibla et
                  d&apos;être dans un état de recueillement et de sincérité
                  avant de commencer la prière.
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
              {/* SECTION 3 : La doua istikhara complète */}
              {/* ============================================ */}
              <section id="doua-istikhara-complete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua istikhara complète : arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici le texte intégral de la <strong>doua istikhara</strong>{" "}
                  telle qu&apos;elle a été enseignée par le Prophète Muhammad
                  (paix et salut sur lui) et rapportée par l&apos;imam
                  al-Bukhari dans son recueil authentique. Cette invocation se
                  récite après les deux unités de prière surérogatoire, une
                  fois le salam prononcé, ou bien juste avant le salam final
                  selon certains savants.
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوبِ
                  </p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">
                    Phonétique : Allahumma inni astakhiruka bi &apos;ilmika wa astaqdiruka bi qudratika wa as&apos;aluka min fadlika al-&apos;adhim, fa innaka taqdiru wa la aqdiru wa ta&apos;lamu wa la a&apos;lamu wa anta &apos;allam ul-ghuyub
                  </p>
                  <p className="mt-2 text-foreground">
                    Traduction : &laquo;&nbsp;Seigneur, je Te consulte par Ta
                    science et je Te demande de m&apos;accorder le pouvoir par
                    Ta puissance, et je Te demande de Ta grâce immense. Car Tu
                    es capable et je ne suis pas capable, Tu sais et je ne sais
                    pas, et c&apos;est Toi le Grand Connaisseur des choses
                    cachées.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Source : Rapporté par al-Bukhari (1162)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  La doua se poursuit ensuite en mentionnant l&apos;affaire
                  concernée. Le Prophète (paix et salut sur lui) a enseigné
                  de nommer sa demande précisément dans la suite de
                  l&apos;invocation :
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ
                  </p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">
                    Phonétique : Allahumma in kunta ta&apos;lamu anna hadha al-amra khayrun li fi dini wa ma&apos;ashi wa &apos;aqibati amri faqdurhu li wa yassirhu li thumma barik li fihi
                  </p>
                  <p className="mt-2 text-foreground">
                    Traduction : &laquo;&nbsp;Seigneur, si Tu sais que cette
                    affaire est un bien pour moi dans ma religion, ma vie
                    présente et ma vie future, alors décrète-la pour moi,
                    facilite-la pour moi, puis bénis-la pour moi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Source : Rapporté par al-Bukhari (1162)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Puis le croyant demande le contraire, au cas où cette
                  affaire serait un mal pour lui :
                </p>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">
                    وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ
                  </p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">
                    Phonétique : Wa in kunta ta&apos;lamu anna hadha al-amra sharrun li fi dini wa ma&apos;ashi wa &apos;aqibati amri fasrifhu &apos;anni wasrifni &apos;anhu waqdur li al-khayra haythu kana thumma ardini bihi
                  </p>
                  <p className="mt-2 text-foreground">
                    Traduction : &laquo;&nbsp;Et si Tu sais que cette affaire
                    est un mal pour moi dans ma religion, ma vie présente et ma
                    vie future, alors écarte-la de moi et écarte-moi d&apos;elle,
                    et décrète pour moi le bien où qu&apos;il se trouve, puis
                    fais que j&apos;en sois satisfait.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Source : Rapporté par al-Bukhari (1162)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Remarquez la profondeur de cette invocation : le croyant ne
                  demande pas simplement d&apos;obtenir ce qu&apos;il veut,
                  mais il remet véritablement son choix à Allah. Il demande
                  trois choses si l&apos;affaire est bonne : qu&apos;elle
                  soit décrétée, facilitée et bénie. Et si elle est mauvaise,
                  il demande qu&apos;elle soit écartée de lui{" "}
                  <em>et</em> qu&apos;il en soit écarté (car parfois
                  l&apos;homme reste attaché à ce qui lui nuit), puis que le
                  vrai bien lui soit accordé, et enfin qu&apos;il en soit{" "}
                  <em>satisfait</em> &mdash; car le contentement du coeur est
                  le plus grand des bienfaits.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a précisé que lorsque
                  le croyant arrive à la mention &laquo;&nbsp;cette
                  affaire&nbsp;&raquo; (<em>hadha al-amr</em>), il doit
                  nommer sa demande spécifique. Par exemple, si l&apos;on
                  hésite à accepter une offre de mariage, on mentionnera le
                  nom de la personne ou la nature de la décision. Cette
                  personnalisation rend l&apos;invocation plus intime et
                  plus sincère.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Comment prier istikhara */}
              {/* ============================================ */}
              <section id="comment-prier-istikhara" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment prier istikhara : les étapes détaillées
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La prière d&apos;istikhara est simple à accomplir, mais elle
                  requiert une intention sincère et un recueillement du coeur.
                  Voici les étapes à suivre, telles qu&apos;elles ont été
                  décrites par les savants à partir du hadith de Jabir
                  (qu&apos;Allah l&apos;agrée) rapporté par al-Bukhari.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire les ablutions (wudu)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Comme pour toute prière, les ablutions sont une
                        condition de validité. Effectuez vos ablutions avec
                        soin et concentration, en invoquant le nom d&apos;Allah
                        au début et en récitant l&apos;invocation après les
                        ablutions. Orientez votre coeur vers Allah dès ce
                        moment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Formuler l&apos;intention (niyyah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant de commencer la prière, formulez dans votre
                        coeur l&apos;intention de prier deux unités (rak&apos;at)
                        pour l&apos;istikhara. L&apos;intention se fait dans
                        le coeur et non à voix haute. Ayez clairement à
                        l&apos;esprit la décision pour laquelle vous
                        consultez Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prier deux unités (rak&apos;at) surérogatoires
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Accomplissez deux unités de prière en dehors des
                        prières obligatoires. Dans chaque unité, récitez
                        sourate al-Fatiha suivie d&apos;une autre sourate.
                        Certains savants recommandent sourate al-Kafirun
                        (109) dans la première et sourate al-Ikhlas (112)
                        dans la seconde, mais toute sourate est valide.
                        Priez avec concentration et humilité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prononcer le salam puis réciter la doua istikhara
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après avoir terminé les deux unités et prononcé le
                        salam final, levez vos mains et récitez la doua
                        istikhara complète mentionnée ci-dessus. Lorsque
                        vous atteignez le passage &laquo;&nbsp;cette
                        affaire&nbsp;&raquo;, nommez précisément votre
                        demande. Selon certains savants comme Ibn Taymiyya,
                        la doua peut aussi être récitée avant le salam,
                        lors du dernier tashahud.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        S&apos;en remettre à Allah avec confiance
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après la doua, placez votre confiance en Allah
                        (<em>tawakkul</em>) et avancez dans votre décision.
                        N&apos;attendez pas passivement un signe ou un
                        rêve : agissez dans la direction que vous penchez à
                        prendre, et observez si Allah facilite ou bloque
                        votre chemin. La réponse se manifeste souvent par
                        les événements et les circonstances.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/prosternation-sujud-priere-islam-mosquee.jpg"
                    alt="Prosternation sujud lors de la prière islamique dans une mosquée illustrant la salat al-istikhara"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est important de noter que la prière d&apos;istikhara
                  ne doit pas être confondue avec la recherche d&apos;un
                  &laquo;&nbsp;signe magique&nbsp;&raquo;. L&apos;istikhara
                  est un acte d&apos;adoration par lequel le croyant confie
                  sa décision à Allah, tout en continuant à réfléchir et
                  à agir. Le Prophète (paix et salut sur lui) ne restait
                  jamais inactif après avoir consulté Allah : il prenait
                  une décision et avançait avec confiance, sachant que si
                  Allah avait choisi le bien pour lui, Il le faciliterait.
                  Pour approfondir votre pratique de la prière, consultez
                  notre guide sur{" "}
                  <Link href="/istikhara-priere-consultation" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la prière de consultation</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Signes et réponses */}
              {/* ============================================ */}
              <section id="signes-reponses" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signes et réponses après la prière d&apos;istikhara
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;une des questions les plus fréquentes concernant
                  l&apos;istikhara est : &laquo;&nbsp;Comment savoir si
                  Allah a répondu ?&nbsp;&raquo; Les savants de l&apos;islam
                  ont clarifié ce point en s&apos;appuyant sur les textes
                  prophétiques et les récits des compagnons. La réponse
                  à l&apos;istikhara ne se limite pas aux rêves, comme
                  beaucoup le croient à tort.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Sheykh al-Islam Ibn Taymiyya (qu&apos;Allah lui fasse
                  miséricorde) a expliqué que celui qui fait l&apos;istikhara
                  doit avancer dans la direction qu&apos;il penche à prendre
                  et observer ce qui se passe. Si Allah veut le bien pour
                  lui dans cette affaire, Il la facilitera et ouvrira les
                  portes. Si cette affaire est un mal, Allah placera des
                  obstacles et fermera les voies. Le croyant doit alors
                  accepter cela comme la réponse d&apos;Allah et ne pas
                  s&apos;obstiner.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;inclinaison du coeur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Après l&apos;istikhara, le croyant peut ressentir une
                      inclinaison naturelle vers l&apos;une des options. Un
                      sentiment de paix, de sérénité et d&apos;ouverture
                      envers un choix peut être un signe de guidance. À
                      l&apos;inverse, un malaise persistant ou un resserrement
                      du coeur peut indiquer que cette voie n&apos;est pas la
                      meilleure.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La facilitation ou le blocage
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;un des signes les plus clairs est la
                      facilitation (<em>taysir</em>) ou le blocage des
                      circonstances. Si les portes s&apos;ouvrent
                      naturellement et les obstacles disparaissent,
                      c&apos;est souvent un signe positif. Si, malgré les
                      efforts, les obstacles se multiplient, c&apos;est un
                      signe qu&apos;Allah éloigne cette affaire du croyant.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le conseil des gens de confiance
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La consultation humaine (<em>istishara</em>) complète
                      l&apos;istikhara divine. Allah peut guider le croyant
                      à travers le conseil d&apos;un imam, d&apos;un parent
                      pieux ou d&apos;une personne d&apos;expérience.
                      Consulter les gens de sagesse après l&apos;istikhara
                      fait partie de la démarche recommandée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le rêve (non obligatoire)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un rêve véridique peut parfois accompagner
                      l&apos;istikhara, mais ce n&apos;est ni une condition
                      ni une obligation. Le Prophète (paix et salut sur lui)
                      n&apos;a jamais dit qu&apos;il fallait attendre un rêve
                      après l&apos;istikhara. Conditionner sa décision à un
                      rêve est une erreur qui peut mener à l&apos;immobilisme.
                    </p>
                  </div>
                </div>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">
                    وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ
                  </p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">
                    Phonétique : Wa &apos;asa an takrahu shay&apos;an wa huwa khayrun lakum, wa &apos;asa an tuhibbu shay&apos;an wa huwa sharrun lakum, wallahu ya&apos;lamu wa antum la ta&apos;lamun
                  </p>
                  <p className="mt-2 text-foreground">
                    Traduction : &laquo;&nbsp;Il se peut que vous détestiez
                    une chose alors qu&apos;elle est un bien pour vous, et il
                    se peut que vous aimiez une chose alors qu&apos;elle est
                    un mal pour vous. Allah sait et vous ne savez
                    pas.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Source : Coran, sourate al-Baqara (2:216)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset coranique est le fondement spirituel de
                  l&apos;istikhara. Il rappelle au croyant que sa
                  connaissance est limitée et que seul Allah maîtrise la
                  réalité des choses. Parfois, ce que nous désirons
                  ardemment est un mal déguisé, et ce que nous redoutons est
                  un bien caché. L&apos;istikhara est l&apos;acte par lequel
                  le croyant admet cette vérité et demande à Celui qui sait
                  tout de le guider. C&apos;est pourquoi la dernière
                  demande de la doua istikhara est{" "}
                  &laquo;&nbsp;puis fais que j&apos;en sois
                  satisfait&nbsp;&raquo; (<em>thumma ardini bihi</em>), car
                  le vrai bonheur réside dans l&apos;acceptation du décret
                  divin.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Erreurs courantes */}
              {/* ============================================ */}
              <section id="erreurs-courantes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Erreurs courantes à éviter lors de l&apos;istikhara
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Malgré sa simplicité apparente, la prière d&apos;istikhara
                  est entourée de nombreuses idées fausses et pratiques
                  erronées qui se sont répandues dans les sociétés
                  musulmanes. Les savants ont mis en garde contre ces erreurs
                  afin de préserver l&apos;authenticité de cette sunna
                  prophétique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Attendre un rêve comme condition :</strong>{" "}
                      beaucoup de musulmans pensent à tort qu&apos;il faut
                      obligatoirement voir un rêve après l&apos;istikhara
                      pour connaître la réponse. Cette croyance n&apos;a
                      aucun fondement dans la Sunna. Le rêve peut survenir,
                      mais ce n&apos;est ni une condition ni un critère de
                      validité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Demander à quelqu&apos;un d&apos;autre de faire l&apos;istikhara à sa place :</strong>{" "}
                      l&apos;istikhara est une invocation personnelle entre
                      le serviteur et son Seigneur. C&apos;est la personne
                      concernée par la décision qui doit l&apos;accomplir
                      elle-même. Il n&apos;existe aucun texte autorisant de
                      déléguer l&apos;istikhara à un imam, un sheikh ou un
                      proche.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire l&apos;istikhara après avoir déjà pris sa décision :</strong>{" "}
                      l&apos;istikhara doit être faite{" "}
                      <em>avant</em> de prendre une décision définitive,
                      lorsque le croyant hésite encore. La faire après avoir
                      déjà décidé et simplement chercher une confirmation
                      n&apos;est pas dans l&apos;esprit de cette prière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Interpréter les couleurs dans les rêves :</strong>{" "}
                      certaines traditions populaires prétendent que voir du
                      vert dans un rêve signifie un résultat positif et du
                      rouge un résultat négatif. Ces interprétations
                      n&apos;ont aucune base dans le Coran ni dans la Sunna
                      authentique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Négliger la consultation humaine :</strong>{" "}
                      l&apos;istikhara ne remplace pas l&apos;istishara
                      (consultation des gens de confiance). Le croyant doit
                      combiner les deux : consulter Allah par la prière et
                      consulter les personnes compétentes et de bon conseil.
                      Le Prophète (paix et salut sur lui) consultait
                      régulièrement ses compagnons avant de prendre des
                      décisions importantes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rester passif après l&apos;istikhara :</strong>{" "}
                      certains croyants font l&apos;istikhara puis
                      attendent passivement qu&apos;un signe tombe du ciel.
                      L&apos;istikhara implique d&apos;agir : avancer dans
                      la direction qui semble la meilleure et observer si
                      Allah facilite ou bloque le chemin. Le tawakkul
                      (confiance en Allah) s&apos;accompagne toujours de
                      l&apos;action.
                    </span>
                  </li>
                </ul>

                <HadithCard
                  arabic="لو أنكم تتوكلون على الله حق توكله لرزقكم كما يرزق الطير تغدو خماصا وتروح بطانا"
                  text="Si vous placiez votre confiance en Allah comme il se doit, Il vous accorderait votre subsistance comme Il la donne aux oiseaux : ils partent le matin le ventre vide et reviennent le soir rassasiés."
                  source="Rapporté par at-Tirmidhi (2344), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre parfaitement la conception islamique du
                  tawakkul : les oiseaux ne restent pas dans leur nid à
                  attendre la nourriture. Ils sortent, cherchent et agissent,
                  tout en plaçant leur confiance en Allah qui leur fournit
                  leur subsistance. De même, après l&apos;istikhara, le
                  croyant doit agir et avancer, sachant que c&apos;est Allah
                  qui guide ses pas vers ce qui est le mieux pour lui. Pour
                  approfondir le sujet des{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour une istikhara sincère
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Pour tirer le meilleur bénéfice de la prière
                  d&apos;istikhara, les savants recommandent plusieurs
                  attitudes et pratiques qui renforcent la sincérité du
                  croyant et ouvrent son coeur à la guidance divine. Voici
                  les conseils les plus importants tirés de la tradition
                  islamique.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Vider son coeur de tout penchant préalable
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;istikhara sincère exige que le croyant se
                        présente devant Allah avec un coeur ouvert, sans
                        avoir déjà choisi intérieurement. Si le croyant a
                        déjà décidé et cherche simplement une validation,
                        l&apos;istikhara perd de sa substance. La vraie
                        soumission consiste à dire : &laquo;&nbsp;Seigneur,
                        choisis pour moi, car Tu sais mieux que
                        moi.&nbsp;&raquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Apprendre la doua en arabe avec compréhension
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Mémoriser le texte arabe de la doua istikhara est
                        important, mais comprendre le sens de chaque mot
                        est encore plus bénéfique. Lorsque le croyant
                        comprend ce qu&apos;il dit, son coeur est davantage
                        impliqué et son invocation plus sincère. Pour ceux
                        qui souhaitent{" "}
                        <Link href="/apprendre-larabe" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">apprendre l&apos;arabe</Link>,
                        c&apos;est un investissement spirituel inestimable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Combiner istikhara et istishara
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La sagesse islamique enseigne de combiner la
                        consultation divine (istikhara) avec la consultation
                        humaine (istishara). Demandez conseil aux personnes
                        compétentes, expérimentées et pieuses de votre
                        entourage. Allah peut vous guider à travers leurs
                        paroles. Le Coran loue ceux dont les affaires sont
                        &laquo;&nbsp;consultation entre eux&nbsp;&raquo;
                        (Coran, 42:38).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Accepter le résultat avec satisfaction (rida)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La dernière partie de la doua istikhara demande à
                        Allah : &laquo;&nbsp;fais que j&apos;en sois
                        satisfait&nbsp;&raquo;. Cette satisfaction du coeur
                        (<em>rida</em>) est essentielle. Si, après
                        l&apos;istikhara, une porte se ferme, le croyant
                        doit l&apos;accepter avec sérénité, sachant
                        qu&apos;Allah a choisi le mieux pour lui même
                        s&apos;il ne le comprend pas sur le moment.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Répéter l&apos;istikhara si nécessaire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si aucune inclinaison claire ne se manifeste après
                        la première prière, il est tout à fait permis de
                        répéter l&apos;istikhara plusieurs fois. L&apos;imam
                        an-Nawawi mentionne qu&apos;elle peut être répétée
                        jusqu&apos;à sept fois. La persévérance dans
                        l&apos;invocation est elle-même un acte
                        d&apos;adoration qui rapproche le serviteur de son
                        Seigneur.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="my-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-2xl leading-loose text-primary" dir="rtl">
                    وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا
                  </p>
                  <p className="mt-3 text-sm italic text-foreground-secondary">
                    Phonétique : Wa man yatawakkal &apos;ala Allahi fa huwa hasbuhu, inna Allaha balighu amrihi, qad ja&apos;ala Allahu li kulli shay&apos;in qadra
                  </p>
                  <p className="mt-2 text-foreground">
                    Traduction : &laquo;&nbsp;Et quiconque place sa confiance
                    en Allah, Il lui suffit. Allah atteint ce qu&apos;Il veut.
                    Allah a assigné une mesure à chaque chose.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-xs text-foreground-secondary">
                    Source : Coran, sourate at-Talaq (65:3)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset est l&apos;essence même de l&apos;attitude que le
                  croyant doit adopter après l&apos;istikhara : le tawakkul,
                  cette confiance profonde en Allah qui sait que chaque chose
                  arrive selon un décret divin parfaitement mesuré. Le
                  croyant qui a fait l&apos;istikhara et placé sa confiance
                  en Allah est dans la meilleure des positions : quoi
                  qu&apos;il arrive, il sait que c&apos;est le choix
                  d&apos;Allah pour lui, et que ce choix est nécessairement
                  le meilleur. Cette certitude apporte une paix intérieure
                  que rien d&apos;autre ne peut procurer.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Enfin, n&apos;oubliez pas que l&apos;istikhara est un acte
                  d&apos;adoration qui s&apos;inscrit dans une relation
                  vivante avec Allah. Plus le croyant est proche de son
                  Seigneur par la prière, le dhikr, la lecture du Coran et
                  les bonnes actions, plus il sera réceptif à la guidance
                  divine. L&apos;istikhara n&apos;est pas un rituel isolé :
                  c&apos;est l&apos;expression d&apos;une foi vivante qui
                  reconnaît la souveraineté d&apos;Allah sur toute chose.
                  Découvrez aussi notre article sur les{" "}
                  <Link href="/doua-examen-reussite-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">douas pour la réussite aux examens</Link>{" "}
                  pour d&apos;autres invocations pratiques.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Guide complet des douas en islam"
                  description="Découvrez toutes les invocations prophétiques authentiques pour chaque situation de la vie quotidienne."
                  href="/doua-islam"
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
                    href="/doua-examen-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les examens
                  </Link>
                  <Link
                    href="/istikhara-priere-consultation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière de consultation (istikhara)
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
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
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
