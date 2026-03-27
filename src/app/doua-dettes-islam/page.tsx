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
    "Doua contre les dettes en islam : invocations pour se libérer des dettes",
  description:
    "Découvrez les douas authentiques contre les dettes en islam : invocation Allahumma ikfini bi halalika, doua de Ali ibn Abi Talib, istighfar pour le rizq, textes en arabe avec phonétique et traduction française.",
  openGraph: {
    title:
      "Doua contre les dettes en islam : invocations pour se libérer des dettes",
    description:
      "Les invocations prophétiques contre les dettes en islam : textes en arabe, phonétique, traduction et hadiths authentiques pour se libérer de l&apos;endettement.",
    url: "https://www.islamreligion.fr/doua-dettes-islam",
    images: [
      {
        url: "/images/mains-priere-doua-islam-invocation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-dettes-islam",
  },
};

const tocItems = [
  { id: "gravite-dette", label: "La gravité de la dette en islam" },
  { id: "doua-allahumma-ikfini", label: "Doua Allahumma ikfini bi halalika" },
  { id: "doua-ali-ibn-abi-talib", label: "Doua de Ali ibn Abi Talib pour les dettes" },
  { id: "istighfar-rizq", label: "L&apos;istighfar pour augmenter le rizq" },
  { id: "douas-complementaires", label: "Douas complémentaires contre les dettes" },
  { id: "revenu-halal", label: "Rechercher le revenu halal et les causes licites" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour sortir de l&apos;endettement" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua contre les dettes en islam ?",
    answer:
      "La doua la plus connue contre les dettes est celle rapportée par at-Tirmidhi : « Allahumma ikfini bi halalika &apos;an haramik, wa aghnini bi fadlika &apos;amman siwak » (Seigneur, suffis-moi par le licite plutôt que l&apos;illicite, et enrichis-moi par Ta grâce plutôt que de dépendre d&apos;autrui). Le Prophète (paix et salut sur lui) l&apos;a enseignée à un homme endetté en lui promettant qu&apos;Allah le libérerait de ses dettes.",
  },
  {
    question: "Est-ce que la dette est un péché en islam ?",
    answer:
      "La dette en elle-même n&apos;est pas un péché si elle est contractée par nécessité et avec l&apos;intention sincère de rembourser. Cependant, l&apos;islam met fortement en garde contre l&apos;endettement. Le Prophète (paix et salut sur lui) cherchait refuge auprès d&apos;Allah contre les dettes et refusait de prier sur le défunt endetté tant que sa dette n&apos;était pas prise en charge. L&apos;endettement par insouciance ou pour le superflu est blâmable.",
  },
  {
    question: "Quelle est la doua de Ali ibn Abi Talib pour les dettes ?",
    answer:
      "Ali ibn Abi Talib (qu&apos;Allah l&apos;agrée) rapporte que le Prophète (paix et salut sur lui) lui a enseigné une invocation en lui disant : « Même si tu avais une dette aussi lourde qu&apos;une montagne, Allah te la rembourserait. » Cette doua commence par : « Allahumma ikfini bi halalika &apos;an haramik, wa aghnini bi fadlika &apos;amman siwak. »",
  },
  {
    question: "Combien de fois faut-il répéter la doua contre les dettes ?",
    answer:
      "Il n&apos;y a pas de nombre fixe imposé pour la répétition de la doua contre les dettes. Les savants recommandent de la réciter régulièrement, notamment après chaque prière obligatoire, au dernier tiers de la nuit et lors des moments propices à l&apos;exaucement. La constance et la sincérité sont plus importantes que le nombre de répétitions.",
  },
  {
    question: "L'istighfar aide-t-il vraiment à rembourser les dettes ?",
    answer:
      "Oui, l&apos;istighfar (demande de pardon) est un moyen authentique d&apos;élargir la subsistance selon le Coran et la Sunna. Allah dit dans sourate Nuh (71:10-12) que l&apos;istighfar entraîne l&apos;envoi de pluies abondantes, l&apos;augmentation des biens et des enfants, et l&apos;ouverture de jardins et rivières. Les savants considèrent que la demande de pardon lève les obstacles au rizq, y compris l&apos;endettement.",
  },
  {
    question: "Peut-on faire la doua contre les dettes en français ?",
    answer:
      "Oui, la doua contre les dettes peut être faite en français ou dans toute autre langue. Allah comprend toutes les langues et entend toute invocation sincère. Cependant, il est recommandé d&apos;apprendre les formulations prophétiques en arabe pour bénéficier de leur dimension spirituelle particulière, puis de compléter par des supplications personnelles dans sa langue maternelle.",
  },
  {
    question: "Quels sont les moments propices pour faire la doua contre les dettes ?",
    answer:
      "Les moments les plus propices pour invoquer Allah contre les dettes sont : le dernier tiers de la nuit (tahajjud), lors de la prosternation (sujud), entre l&apos;adhan et l&apos;iqama, le vendredi après la prière de l&apos;Asr, après les prières obligatoires et lors du jeûne. Combiner la doua avec ces moments bénis multiplie les chances d&apos;exaucement.",
  },
  {
    question: "L'islam interdit-il de s'endetter ?",
    answer:
      "L&apos;islam n&apos;interdit pas totalement l&apos;endettement, mais le déconseille fortement sauf en cas de nécessité réelle. Le Prophète (paix et salut sur lui) demandait refuge auprès d&apos;Allah contre les dettes. L&apos;islam interdit en revanche le riba (usure/intérêts), qui aggrave considérablement la situation de l&apos;endetté. Il est recommandé de n&apos;emprunter que le strict nécessaire et de rembourser le plus rapidement possible.",
  },
];

export default function DouaDettesIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-dettes-islam/#article",
        headline:
          "Doua contre les dettes en islam : invocations pour se libérer des dettes",
        description:
          "Découvrez les douas authentiques contre les dettes en islam : invocation Allahumma ikfini bi halalika, doua de Ali ibn Abi Talib, istighfar pour le rizq.",
        image: "/images/mains-priere-doua-islam-invocation.jpg",
        datePublished: "2026-04-07",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-dettes-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-dettes-islam/#breadcrumb",
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
            name: "Doua contre les dettes",
            item: "https://www.islamreligion.fr/doua-dettes-islam",
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
          title="Doua contre les dettes en islam : invocations pour se libérer de l'endettement"
          subtitle="Les invocations authentiques du Prophète et de ses compagnons pour sortir des dettes, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/mains-priere-doua-islam-invocation.jpg"
          imageAlt="Mains levées en prière doua islam invocation contre les dettes et difficultés financières"
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
                <span className="text-foreground">Doua contre les dettes</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les dettes constituent l&apos;une des épreuves les plus lourdes
                  dans la vie d&apos;un musulman. Le Prophète (paix et salut sur
                  lui) cherchait lui-même refuge auprès d&apos;Allah contre
                  l&apos;endettement et a enseigné à ses compagnons des
                  invocations puissantes pour s&apos;en libérer. Parmi elles, la
                  célèbre doua &laquo;&nbsp;Allahumma ikfini bi halalika &apos;an
                  haramik&nbsp;&raquo; et l&apos;invocation enseignée à Ali ibn
                  Abi Talib, dont l&apos;efficacité est garantie même pour une
                  dette aussi lourde qu&apos;une montagne.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Gravité de la dette en islam */}
              {/* ============================================ */}
              <section id="gravite-dette" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La gravité de la dette en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La dette (dayn, دَيْن) occupe une place particulière dans la
                  jurisprudence et la spiritualité islamiques. Loin d&apos;être
                  un simple sujet financier, l&apos;endettement est considéré en
                  islam comme une épreuve qui touche à la fois la vie mondaine et
                  la vie spirituelle du croyant. Le Prophète Muhammad (paix et
                  salut sur lui) accordait une importance considérable à cette
                  question, au point de chercher régulièrement refuge auprès
                  d&apos;Allah contre les dettes dans ses invocations
                  quotidiennes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam enseigne que la dette crée un lien de dépendance
                  entre le débiteur et le créancier, une situation contraire à
                  l&apos;idéal de liberté et de dignité que la religion promeut
                  pour chaque croyant. Le Prophète (paix et salut sur lui) a
                  comparé la dette à une forme d&apos;humiliation et de
                  soumission, car l&apos;endetté perd une part de sa liberté et
                  de son honneur. Il a également averti que la dette non
                  remboursée est un droit d&apos;autrui qui sera réclamé le Jour
                  du Jugement, ce qui en fait une responsabilité aussi bien
                  temporelle que spirituelle.
                </p>

                <HadithCard
                  arabic="اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال"
                  text="Seigneur, je cherche refuge auprès de Toi contre le souci et la tristesse, contre l'incapacité et la paresse, contre la lâcheté et l'avarice, et contre le poids des dettes et la domination des hommes."
                  source="Rapporté par al-Bukhari (2893) et Muslim"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est remarquable car le Prophète (paix et salut sur
                  lui) associe le poids des dettes (ghalabat ad-dayn) à la
                  domination des hommes (qahr ar-rijal), montrant le lien
                  profond entre endettement et perte de dignité. Il associe
                  également la dette aux soucis et à la tristesse, reconnaissant
                  l&apos;impact psychologique dévastateur de l&apos;endettement
                  sur le croyant. Cette invocation, que le Prophète récitait
                  quotidiennement, témoigne de la gravité de cette épreuve.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un obstacle au Paradis :</strong>{" "}
                      le Prophète (paix et salut sur lui) refusait initialement
                      de prier la prière funéraire sur le défunt endetté, jusqu&apos;à
                      ce qu&apos;un compagnon se porte garant de sa dette (al-Bukhari).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le martyr et la dette :</strong>{" "}
                      même le martyr, dont tous les péchés sont pardonnés, reste
                      redevable de ses dettes auprès des créanciers (Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;interdiction du riba :</strong>{" "}
                      l&apos;islam interdit catégoriquement l&apos;usure
                      (intérêts), qui aggrave la situation de l&apos;endetté et
                      constitue un péché majeur. Celui qui souffre de{" "}
                      <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                        l&apos;angoisse liée aux dettes
                      </Link>{" "}
                      trouvera également du réconfort dans les invocations contre
                      le stress et l&apos;anxiété.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur la dette et la subsistance en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua Allahumma ikfini */}
              {/* ============================================ */}
              <section id="doua-allahumma-ikfini" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua &laquo;&nbsp;Allahumma ikfini bi halalika &apos;an haramik&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les invocations les plus puissantes contre les dettes en
                  islam, celle rapportée par at-Tirmidhi occupe une place
                  centrale. Le Prophète Muhammad (paix et salut sur lui) a
                  enseigné cette doua à un homme qui était venu le voir,
                  accablé par le poids de ses dettes, cherchant une issue à sa
                  détresse financière. Cette invocation est devenue la
                  référence en matière de doua contre l&apos;endettement.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ikfini bi halalika &apos;an haramik, wa aghnini bi fadlika &apos;amman siwak
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, suffis-moi par ce qui est licite plutôt que ce qui est illicite, et enrichis-moi par Ta grâce plutôt que de dépendre d&apos;autrui&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3563), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est d&apos;une profondeur remarquable car elle
                  contient deux demandes complémentaires. La première,
                  &laquo;&nbsp;suffis-moi par le halal plutôt que le
                  haram&nbsp;&raquo;, exprime la volonté du croyant de
                  subvenir à ses besoins uniquement par des moyens licites, même
                  en situation de détresse. C&apos;est un engagement moral :
                  plutôt que de recourir à l&apos;usure, à la fraude ou à tout
                  autre moyen illicite pour rembourser ses dettes, le musulman
                  demande à Allah de lui ouvrir des portes halal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La seconde partie, &laquo;&nbsp;enrichis-moi par Ta grâce
                  plutôt que de dépendre d&apos;autrui&nbsp;&raquo;, touche à
                  la dignité du croyant. L&apos;endetté dépend de ses créanciers
                  et ressent souvent une humiliation face à cette dépendance.
                  En invoquant Allah par cette formule, il reconnaît que la
                  véritable richesse ne vient que de Lui et que seule Sa grâce
                  (fadl) peut véritablement affranchir l&apos;homme de toute
                  dépendance humaine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de réciter cette invocation après
                  chaque prière obligatoire, particulièrement après la prière
                  du Fajr et celle du Maghrib. Sa récitation régulière, avec
                  présence du coeur et conviction dans l&apos;exaucement, est un
                  moyen reconnu de voir s&apos;ouvrir des portes de subsistance
                  inattendues. De nombreux témoignages de musulmans attestent de
                  l&apos;efficacité de cette doua lorsqu&apos;elle est pratiquée
                  avec constance et sincérité.
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
              {/* SECTION 3 : Doua de Ali ibn Abi Talib */}
              {/* ============================================ */}
              <section id="doua-ali-ibn-abi-talib" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua de Ali ibn Abi Talib pour se libérer des dettes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Ali ibn Abi Talib (qu&apos;Allah l&apos;agrée), le quatrième
                  calife bien guidé et gendre du Prophète, rapporte une
                  invocation d&apos;une puissance exceptionnelle que le Prophète
                  (paix et salut sur lui) lui a enseignée spécifiquement pour
                  les dettes. Le contexte de cette transmission est
                  particulièrement éloquent : le Prophète a promis à Ali que
                  cette doua permettrait de rembourser une dette aussi lourde
                  qu&apos;une montagne.
                </p>

                <HadithCard
                  arabic="ألا أعلمك كلمات لو كان عليك مثل جبل صير دينًا أداه الله عنك"
                  text="Ne vais-je pas t'enseigner des paroles telles que, même si tu avais une dette aussi lourde que la montagne de Sir, Allah te la rembourserait ?"
                  source="Rapporté par at-Tirmidhi (3563)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La montagne de Sir (Jabal Sir) est une montagne célèbre
                  d&apos;Arabie, et le Prophète (paix et salut sur lui)
                  l&apos;utilise comme image pour souligner que cette doua
                  fonctionne quelle que soit l&apos;ampleur de la dette. Cette
                  promesse prophétique donne un espoir immense à tout musulman
                  endetté, quelle que soit sa situation financière.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;invocation enseignée à Ali est la même que celle
                  mentionnée précédemment : &laquo;&nbsp;Allahumma ikfini bi
                  halalika &apos;an haramik, wa aghnini bi fadlika &apos;amman
                  siwak.&nbsp;&raquo; Le fait que le Prophète l&apos;ait
                  enseignée spécifiquement à Ali dans ce contexte de dette
                  renforce son authenticité et sa puissance. Les savants
                  considèrent que le lien entre cette doua et le remboursement
                  des dettes est une cause spirituelle (sabab) qu&apos;Allah a
                  établie, au même titre que les causes matérielles comme le
                  travail et l&apos;économie.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Malikal-Mulk, tu&apos;til-mulka man tasha&apos;u wa tanzi&apos;ul-mulka mimman tasha&apos;u, wa tu&apos;izzu man tasha&apos;u wa tudhillu man tasha&apos;u, biyadikal-khayr, innaka &apos;ala kulli shay&apos;in qadir
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Maître de la royauté, Tu donnes la royauté à qui Tu veux et Tu retires la royauté à qui Tu veux. Tu honores qui Tu veux et Tu abaisses qui Tu veux. Le bien est entre Tes mains. Tu es certes Omnipotent&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Imran (3:26)
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce verset coranique, souvent récité en complément de la doua
                  de Ali, rappelle que toute richesse et toute subsistance
                  appartiennent à Allah. Le croyant endetté doit se rappeler
                  que Celui qui possède les trésors des cieux et de la terre
                  est capable de lui ouvrir des portes de rizq (subsistance)
                  qu&apos;il n&apos;imaginait même pas. Cette conviction est
                  le fondement même de la confiance en Allah (tawakkul) face
                  aux difficultés financières.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Istighfar pour le rizq */}
              {/* ============================================ */}
              <section id="istighfar-rizq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;istighfar : la clé oubliée pour augmenter le rizq
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des moyens les plus puissants et les plus négligés
                  pour sortir des dettes en islam est l&apos;istighfar, la
                  demande de pardon à Allah. Le lien entre le pardon divin et
                  l&apos;augmentation de la subsistance est clairement établi
                  dans le Coran, à travers le récit du prophète Nuh (Noé, paix
                  sur lui) qui exhorta son peuple à demander pardon pour
                  bénéficier des bienfaits d&apos;Allah.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Faqultu istaghfiru Rabbakum innahu kana Ghaffara. Yursilis-sama&apos;a &apos;alaykum midrara. Wa yumdidkum bi amwalin wa banin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Demandez pardon à votre Seigneur, car Il est Grand Pardonneur. Il vous enverra du ciel des pluies abondantes, et vous accordera des biens et des enfants&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Nuh (71:10-12)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce passage coranique établit un lien direct entre
                  l&apos;istighfar et l&apos;accroissement des biens matériels.
                  Les savants de l&apos;islam, notamment Ibn Taymiyyah et Ibn
                  al-Qayyim, ont expliqué que les péchés constituent un voile
                  entre le serviteur et sa subsistance. Lorsque le croyant
                  demande pardon avec sincérité, ce voile se lève et les portes
                  du rizq s&apos;ouvrent. Pour le musulman endetté, la demande
                  de pardon est donc un moyen spirituel complémentaire aux
                  efforts matériels.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La formule d&apos;istighfar la plus complète est celle connue
                  sous le nom de &laquo;&nbsp;Sayyid al-Istighfar&nbsp;&raquo;
                  (le maître de la demande de pardon), que le Prophète (paix et
                  salut sur lui) recommandait de réciter matin et soir :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma Anta Rabbi la ilaha illa Anta, khalaqtani wa ana &apos;abduk, wa ana &apos;ala &apos;ahdika wa wa&apos;dika ma-stata&apos;t, a&apos;udhu bika min sharri ma sana&apos;t, abu&apos;u laka bi ni&apos;matika &apos;alayya wa abu&apos;u bi dhanbi, faghfir li fa innahu la yaghfirudh-dhunuba illa Ant
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, Tu es mon Seigneur, il n&apos;y a de divinité que Toi. Tu m&apos;as créé et je suis Ton serviteur. Je m&apos;en tiens à Ton pacte et à Ta promesse autant que je le puis. Je cherche refuge auprès de Toi contre le mal que j&apos;ai commis. Je reconnais Tes bienfaits sur moi et je reconnais mon péché. Pardonne-moi, car nul ne pardonne les péchés si ce n&apos;est Toi&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6306)
                  </p>
                </div>

                <HadithCard
                  arabic="من لزم الاستغفار جعل الله له من كل هم فرجا ومن كل ضيق مخرجا ورزقه من حيث لا يحتسب"
                  text="Celui qui s'attache à l'istighfar, Allah lui accordera une issue à chaque souci, une sortie de chaque difficulté, et une subsistance d'où il ne s'y attendait pas."
                  source="Rapporté par Abu Dawud (1518), Ibn Majah (3819)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est une promesse directe du Prophète (paix et salut
                  sur lui) : l&apos;istighfar régulier est un moyen
                  d&apos;obtenir une subsistance inattendue. Pour celui qui
                  croule sous les dettes, cette promesse est une source
                  d&apos;espoir immense. Les savants recommandent de réciter
                  l&apos;istighfar au moins cent fois par jour, comme le faisait
                  le Prophète lui-même, en y ajoutant les douas spécifiques
                  contre les dettes pour maximiser l&apos;effet spirituel.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant l'istighfar et la doua contre les dettes en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Douas complémentaires */}
              {/* ============================================ */}
              <section id="douas-complementaires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas complémentaires contre les dettes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de la doua principale et de l&apos;istighfar, le Coran
                  et la Sunna nous offrent d&apos;autres invocations puissantes
                  que le musulman endetté peut réciter pour demander à Allah de
                  lui ouvrir les portes de la subsistance et de le libérer du
                  poids de ses dettes.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander la richesse licite
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait cette
                  invocation pour demander à Allah une subsistance abondante et
                  bénie, permettant de rembourser ses dettes et de vivre dans
                  la dignité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni as&apos;aluka &apos;ilman nafi&apos;an, wa rizqan tayyiban, wa &apos;amalan mutaqabbala
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je Te demande une science bénéfique, une subsistance pure et des oeuvres acceptées&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (925)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. La doua de Younous pour sortir de toute détresse
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  L&apos;invocation du prophète Younous (Jonas, paix sur lui),
                  récitée dans les profondeurs de l&apos;océan, est applicable à
                  toute situation de détresse, y compris l&apos;endettement. Le
                  Prophète (paix et salut sur lui) a garanti qu&apos;aucun
                  musulman ne la récite sans être exaucé.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> La ilaha illa Anta, subhanaka inni kuntu min adh-dhalimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Il n&apos;y a de divinité que Toi, gloire à Toi, j&apos;étais certes parmi les injustes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Anbiya (21:87)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la facilité et la levée des difficultés
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation courte mais puissante est particulièrement
                  adaptée aux moments où le poids de la dette semble
                  insurmontable. Elle rappelle que seul Allah peut transformer
                  la difficulté en facilité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma la sahla illa ma ja&apos;altahu sahla, wa Anta taj&apos;alul-hazna idha shi&apos;ta sahla
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf ce que Tu rends facile, et Tu rends la tristesse facile si Tu le veux&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Hibban (974), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants recommandent de combiner ces différentes
                  invocations dans une routine quotidienne. Par exemple, réciter
                  la doua &laquo;&nbsp;Allahumma ikfini&nbsp;&raquo; après chaque
                  prière, pratiquer l&apos;istighfar cent fois par jour, et
                  réciter la doua de Younous lors des moments de détresse
                  particulière. Cette approche globale maximise les chances
                  d&apos;exaucement et maintient le coeur du croyant attaché à
                  Allah dans toutes les circonstances. Pour ceux qui se
                  préparent à un{" "}
                  <Link href="/doua-entretien-travail-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    entretien d&apos;embauche
                  </Link>
                  , des douas spécifiques sont également disponibles.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Revenu halal */}
              {/* ============================================ */}
              <section id="revenu-halal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rechercher le revenu halal : allier doua et action concrète
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam enseigne que la doua seule ne suffit pas :
                  elle doit être accompagnée d&apos;efforts concrets et licites
                  pour sortir de l&apos;endettement. Le tawakkul (confiance en
                  Allah) ne signifie pas l&apos;inaction, mais plutôt
                  l&apos;action accompagnée de la certitude que le résultat
                  appartient à Allah. Le Prophète (paix et salut sur lui) a
                  dit :
                  &laquo;&nbsp;Attache ton chameau puis place ta confiance en
                  Allah&nbsp;&raquo; (at-Tirmidhi).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour le musulman endetté, cela signifie concrètement
                  rechercher activement un revenu halal pour rembourser ses
                  dettes. L&apos;islam valorise le travail et considère la
                  recherche de subsistance licite comme un acte d&apos;adoration.
                  Le Prophète (paix et salut sur lui) a dit :
                  &laquo;&nbsp;Personne n&apos;a mangé de nourriture meilleure
                  que celle qu&apos;il a gagnée du travail de ses propres
                  mains&nbsp;&raquo; (al-Bukhari). Chercher un emploi,
                  développer un commerce licite ou acquérir de nouvelles
                  compétences sont des démarches louables qui complètent
                  l&apos;invocation.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Établir un plan de remboursement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lister toutes ses dettes, prioriser celles envers les
                        individus (qui sont plus graves que les dettes
                        institutionnelles), et établir un calendrier de
                        remboursement réaliste. L&apos;intention sincère de
                        rembourser est en elle-même un acte d&apos;adoration
                        qui attire l&apos;aide d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Éviter absolument le riba (usure)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le riba est l&apos;un des plus grands péchés en islam.
                        Contracter de nouvelles dettes avec intérêts pour
                        rembourser les anciennes ne fait qu&apos;aggraver la
                        situation spirituelle et financière. Rechercher des
                        alternatives halal : prêts sans intérêts entre proches,
                        coopératives islamiques, finance participative.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Donner la sadaqa même endetté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Aussi paradoxal que cela puisse paraître, la sadaqa
                        (aumône volontaire) est un moyen d&apos;attirer la
                        baraka (bénédiction) dans ses finances. Le Prophète
                        (paix et salut sur lui) a dit : &laquo;&nbsp;La sadaqa
                        ne diminue pas la richesse&nbsp;&raquo; (Muslim). Même
                        un petit montant, donné avec sincérité, peut ouvrir des
                        portes de rizq insoupçonnées.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Demander de l&apos;aide à la communauté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam a institué la zakat, dont l&apos;une des
                        catégories de bénéficiaires est précisément les
                        endettés (al-gharimin). Le musulman endetté peut
                        légitimement solliciter l&apos;aide de la communauté
                        via les fonds de zakat, sans aucune honte, car c&apos;est
                        un droit qu&apos;Allah lui a accordé.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En combinant les invocations authentiques avec ces démarches
                  concrètes, le musulman endetté adopte l&apos;approche complète
                  que l&apos;islam préconise : l&apos;effort humain soutenu par
                  la confiance en Allah. Comme le rappelle le Coran :
                  &laquo;&nbsp;Allah ne change pas la condition d&apos;un peuple
                  tant qu&apos;il ne change pas ce qui est en lui-même&nbsp;&raquo;
                  (Coran, 13:11). Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">
                    invocations en islam
                  </Link>
                  , consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour sortir de l&apos;endettement en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations et des efforts matériels, l&apos;islam
                  offre un cadre complet de recommandations spirituelles et
                  pratiques pour aider le croyant à se libérer de ses dettes.
                  Voici les principaux conseils tirés de la tradition
                  prophétique et de l&apos;enseignement des savants.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Premièrement, la prière nocturne (tahajjud) est un moment
                  privilégié pour invoquer Allah contre les dettes. Le dernier
                  tiers de la nuit est le moment où Allah descend au ciel le
                  plus proche et dit : &laquo;&nbsp;Y a-t-il quelqu&apos;un qui
                  M&apos;invoque pour que Je l&apos;exauce ? Y a-t-il quelqu&apos;un
                  qui Me demande pour que Je lui donne ?&nbsp;&raquo;
                  (al-Bukhari et Muslim). Se lever pour prier deux rakaat et
                  invoquer Allah avec la doua contre les dettes est un moyen
                  puissant de voir sa situation changer.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Deuxièmement, la modération dans les dépenses est une
                  obligation islamique. Le Coran condamne le gaspillage (israf)
                  et loue ceux qui dépensent avec mesure :
                  &laquo;&nbsp;Ceux qui, lorsqu&apos;ils dépensent, ne sont
                  ni prodigues ni avares, et se tiennent au juste
                  milieu&nbsp;&raquo; (Coran, 25:67). Revoir son budget,
                  éliminer les dépenses superflues et vivre selon ses moyens
                  réels sont des actes conformes à la Sunna.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Troisièmement, la patience (sabr) face à cette épreuve est
                  en elle-même récompensée par Allah. L&apos;endettement, bien
                  qu&apos;il soit difficile, est une épreuve qui peut élever le
                  rang du croyant s&apos;il la traverse avec patience, doua et
                  efforts licites. Le Prophète (paix et salut sur lui) a
                  dit : &laquo;&nbsp;Comme est étonnante l&apos;affaire du
                  croyant ! Tout ce qui lui arrive est un bien pour lui&nbsp;&raquo;
                  (Muslim). Si le croyant endure avec patience et gratitude,
                  même cette épreuve financière devient un moyen de se
                  rapprocher d&apos;Allah.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Réciter les adhkar du matin et du soir :</strong>{" "}
                      les invocations prophétiques quotidiennes incluent des
                      protections contre les soucis financiers et attirent la
                      baraka dans la journée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier les bonnes actions :</strong>{" "}
                      la sadaqa, le bon comportement, l&apos;aide aux autres et
                      la prière surérogatoire sont autant de moyens d&apos;attirer
                      la miséricorde d&apos;Allah sur sa situation financière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne jamais désespérer :</strong>{" "}
                      le désespoir est interdit en islam. Allah dit :
                      &laquo;&nbsp;Ne désespérez pas de la miséricorde
                      d&apos;Allah&nbsp;&raquo; (Coran, 39:53). Quelle que soit
                      l&apos;ampleur de la dette, Allah est capable de tout
                      faciliter pour Son serviteur sincère.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm title="Apprenez l&apos;arabe pour comprendre vos douas" description="Maîtrisez la langue du Coran et comprenez enfin le sens profond de chaque invocation que vous récitez au quotidien." preselect="arabe" />

              <section id="faq" className="mt-16 scroll-mt-24">
                <FaqSection items={faqItems} />
              </section>

              {/* Maillage interne */}
              <nav className="mt-16 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  Articles recommandés
                </p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link
                      href="/doua-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua en islam : guide complet des invocations authentiques
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-angoisse-stress-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua contre l&apos;angoisse et le stress en islam
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doua-entretien-travail-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      Doua pour un entretien de travail en islam
                    </Link>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
