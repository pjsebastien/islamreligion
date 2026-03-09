import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Doua de la rupture du jeûne (iftar) : invocations authentiques du Ramadan",
  description:
    "Découvrez les douas authentiques de la rupture du jeûne (iftar) en islam : invocations prophétiques en arabe avec phonétique et traduction, mérites du jeûne, doua du sahur et de la Nuit du Destin.",
  openGraph: {
    title:
      "Doua de la rupture du jeûne (iftar) : invocations authentiques du Ramadan",
    description:
      "Découvrez les douas authentiques de la rupture du jeûne (iftar) en islam : invocations prophétiques en arabe avec phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-rupture-jeune-iftar-islam",
    images: [
      {
        url: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-rupture-jeune-iftar-islam",
  },
};

const tocItems = [
  { id: "jeune-islam", label: "Le jeûne en islam et sa place spirituelle" },
  { id: "doua-principale", label: "La doua principale à la rupture du jeûne" },
  { id: "doua-alternative", label: "Doua alternative pour l'iftar" },
  { id: "moment-exaucement", label: "L'iftar : un moment d'exaucement" },
  { id: "doua-invite", label: "Doua du jeûneur pour celui qui offre l'iftar" },
  { id: "merites-jeune", label: "Mérites du jeûne et de l'invocation" },
  { id: "sahur-douas", label: "Que dire en début de jeûne (sahur)" },
  { id: "douas-ramadan", label: "Autres douas recommandées pendant le Ramadan" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la doua à dire au moment de la rupture du jeûne (iftar) ?",
    answer:
      "La doua authentique la plus connue est : « Dhahaba adh-dhama&apos;u wa abtallati al-&apos;uruqu wa thabata al-ajru insha&apos;Allah » (La soif est partie, les veines se sont humidifiées et la récompense est confirmée si Allah le veut). Ce hadith est rapporté par Abu Dawud et jugé bon par les savants.",
  },
  {
    question:
      "Peut-on dire la doua de rupture du jeûne en français ?",
    answer:
      "Oui, il est permis de formuler ses invocations en français ou dans toute autre langue. Cependant, les savants recommandent d&apos;apprendre la formulation arabe prophétique car elle a été enseignée par le Prophète (paix et salut sur lui) avec des mots choisis. Pour les demandes personnelles, le français est tout à fait valide.",
  },
  {
    question: "Le moment de l&apos;iftar est-il un moment d&apos;exaucement de la doua ?",
    answer:
      "Oui, le Prophète (paix et salut sur lui) a dit : « Trois personnes ne voient pas leur invocation rejetée : le jeûneur au moment de la rupture, le dirigeant juste, et l&apos;invocation de l&apos;opprimé » (rapporté par at-Tirmidhi). Le moment de l&apos;iftar est donc un instant privilégié pour invoquer Allah.",
  },
  {
    question: "Faut-il manger avant de faire la doua de l&apos;iftar ?",
    answer:
      "La Sunna recommande de rompre le jeûne avec des dattes ou de l&apos;eau, puis de prononcer la doua. On peut aussi dire la doua juste avant de manger, au moment même de la rupture. L&apos;important est de profiter de cet instant béni pour invoquer Allah avec sincérité.",
  },
  {
    question: "Quelle doua dire pour quelqu&apos;un qui nous offre l&apos;iftar ?",
    answer:
      "Le Prophète (paix et salut sur lui) enseignait de dire : « Aftara &apos;indakum as-sa&apos;imun, wa akala ta&apos;amakum al-abrar, wa sallat &apos;alaykum al-mala&apos;ikah » (Que les jeûneurs rompent chez vous, que les pieux mangent votre nourriture, et que les anges prient pour vous). Rapporté par Abu Dawud.",
  },
  {
    question: "Existe-t-il une doua spécifique pour le sahur (repas avant l&apos;aube) ?",
    answer:
      "Il n&apos;y a pas de doua spécifique au sahur rapportée authentiquement. Cependant, le dernier tiers de la nuit (qui correspond souvent au moment du sahur) est un moment d&apos;exaucement. Le Prophète (paix et salut sur lui) recommandait de prendre le sahur et d&apos;invoquer Allah pendant cette période bénie.",
  },
  {
    question: "Quelle est la doua de la Nuit du Destin (Laylat al-Qadr) ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné à Aïsha (qu&apos;Allah l&apos;agrée) de dire : « Allahumma innaka &apos;afuwwun tuhibbu al-&apos;afwa fa&apos;fu &apos;anni » (Ô Allah, Tu es Celui qui pardonne, Tu aimes le pardon, alors pardonne-moi). Rapporté par at-Tirmidhi.",
  },
  {
    question: "Combien de douas peut-on faire au moment de l&apos;iftar ?",
    answer:
      "Il n&apos;y a pas de limite au nombre d&apos;invocations. Le croyant peut d&apos;abord réciter la doua prophétique de l&apos;iftar, puis ajouter toutes les demandes personnelles qu&apos;il souhaite. C&apos;est un moment béni où Allah est particulièrement proche de Ses serviteurs, il convient donc d&apos;en profiter pleinement.",
  },
];

export default function DouaRuptureJeune() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-rupture-jeune-iftar-islam/#article",
        headline:
          "Doua de la rupture du jeûne (iftar) : invocations authentiques du Ramadan",
        description:
          "Découvrez les douas authentiques de la rupture du jeûne (iftar) en islam : invocations prophétiques, mérites du jeûne, doua du sahur et de la Nuit du Destin.",
        image: "/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg",
        datePublished: "2026-03-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-rupture-jeune-iftar-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-rupture-jeune-iftar-islam/#breadcrumb",
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
            name: "Doua rupture du jeûne",
            item: "https://www.islamreligion.fr/doua-rupture-jeune-iftar-islam",
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
          title="Doua de la rupture du jeûne (iftar) : invocations authentiques du Ramadan"
          subtitle="Les invocations prophétiques pour l'iftar, le sahur et le mois béni du Ramadan. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
          imageAlt="Ramadan kareem : dattes, chapelet et Coran pour la rupture du jeûne iftar en islam"
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
                <span className="text-foreground">
                  Doua rupture du jeûne
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua de la rupture du jeûne</strong> (iftar) est
                  une invocation prophétique récitée au moment précis où le
                  jeûneur rompt son jeûne, généralement au coucher du soleil.
                  C&apos;est un instant béni où la doua du croyant est
                  exaucée. Le Prophète ﷺ a enseigné plusieurs formulations
                  authentiques que tout musulman devrait connaître, notamment
                  durant le mois sacré du Ramadan.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le jeûne en islam */}
              {/* ============================================ */}
              <section id="jeune-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le jeûne en islam et sa place spirituelle
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le jeûne (<em>as-siyam</em>, الصيام) constitue le quatrième
                  pilier de l&apos;islam. Prescrit dans le Coran, il
                  s&apos;accomplit principalement durant le mois de Ramadan,
                  neuvième mois du calendrier hégirien. Allah dit dans le
                  Coran : « Ô vous qui avez cru ! Le jeûne vous a été
                  prescrit comme il a été prescrit à ceux qui vous ont
                  précédés, afin que vous atteigniez la piété (taqwa). »
                  (Coran, 2:183).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le jeûne ne se limite pas à l&apos;abstinence de nourriture
                  et de boisson du lever au coucher du soleil. Il représente
                  une école de discipline spirituelle, de maîtrise de soi et
                  de rapprochement avec Allah. Le Prophète ﷺ a dit : « Celui
                  qui jeûne le Ramadan avec foi et en espérant la récompense
                  d&apos;Allah, ses péchés passés lui seront pardonnés. »
                  (Rapporté par al-Bukhari et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans cette perspective, les <strong>invocations</strong>{" "}
                  (<Link
                    href="/doua-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    douas
                  </Link>) occupent une place centrale dans la journée du
                  jeûneur. Du sahur (repas avant l&apos;aube) à l&apos;iftar
                  (rupture du jeûne), chaque moment est propice à
                  l&apos;invocation. Mais c&apos;est au moment de la rupture
                  que la doua revêt une importance toute particulière, car le
                  Prophète ﷺ a indiqué que le jeûneur possède, à cet instant,
                  une invocation qui n&apos;est pas rejetée.
                </p>

                <HadithCard
                  arabic="مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"
                  text="Celui qui jeûne le Ramadan avec foi et en espérant la récompense, ses péchés passés lui seront pardonnés."
                  source="Rapporté par al-Bukhari et Muslim"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le jeûne est un acte d&apos;adoration unique en son genre.
                  Dans un hadith qudsi, Allah dit : « Tout acte du fils
                  d&apos;Adam est pour lui, sauf le jeûne, car il est pour
                  Moi et c&apos;est Moi qui en donne la récompense. »
                  (Rapporté par al-Bukhari). Cette particularité confère au
                  jeûne une dimension intime entre le serviteur et son
                  Seigneur, une dimension que l&apos;invocation vient
                  sublimer.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua principale à la rupture */}
              {/* ============================================ */}
              <section id="doua-principale" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua principale à la rupture du jeûne
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La doua la plus authentique pour la rupture du jeûne est
                  celle rapportée par Abu Dawud. Le Prophète ﷺ la prononçait
                  au moment précis où il rompait son jeûne, généralement avec
                  des dattes fraîches ou de l&apos;eau. Cette invocation est
                  considérée comme la plus solide par les savants du hadith,
                  et c&apos;est celle que tout musulman devrait mémoriser en
                  priorité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ
                    الْأَجْرُ إِنْ شَاءَ اللَّهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Dhahaba adh-dhama&apos;u
                    wa abtallati al-&apos;uruqu wa thabata al-ajru
                    insha&apos;Allah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;La soif est partie, les veines se sont
                    humidifiées et la récompense est confirmée, si Allah le
                    veut.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (2357), jugé bon (hasan) par
                    ad-Daraqutni
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette doua est remarquable par sa concision et sa
                  profondeur. Elle exprime trois réalités : la fin de la
                  difficulté physique (la soif), le retour à la normale du
                  corps (les veines humidifiées) et la certitude spirituelle
                  (la récompense est acquise). C&apos;est une invocation de
                  gratitude et de confiance en Allah, prononcée à un moment
                  où le corps et l&apos;âme sont dans un état de vulnérabilité
                  et de proximité avec le Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que l&apos;expression « insha&apos;Allah »
                  dans cette doua n&apos;exprime pas le doute, mais plutôt
                  la bonne manière de s&apos;adresser à Allah en reconnaissant
                  que toute chose dépend de Sa volonté. C&apos;est une forme
                  d&apos;adab (bon comportement) dans l&apos;invocation.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en doua avec rayons dorés, symbolisant l'invocation à la rupture du jeûne"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua alternative */}
              {/* ============================================ */}
              <section id="doua-alternative" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua alternative pour la rupture du jeûne
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  En plus de la doua principale, d&apos;autres invocations
                  sont rapportées pour le moment de l&apos;iftar. Bien que
                  certaines n&apos;aient pas le même degré d&apos;authenticité
                  que la première, elles sont largement pratiquées par les
                  musulmans et reconnues par de nombreux savants comme
                  formulations acceptables.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma laka sumtu wa
                    &apos;ala rizqika aftartu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, c&apos;est pour Toi que j&apos;ai
                    jeûné et c&apos;est avec Ta subsistance que je romps mon
                    jeûne.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (2358) — chaîne faible selon
                    certains savants, mais largement utilisé
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation, bien que sa chaîne de transmission soit
                  jugée faible par certains spécialistes du hadith, est
                  considérée comme recevable par de nombreux savants dans le
                  cadre des <em>fada&apos;il al-a&apos;mal</em> (les mérites
                  des actes). Elle exprime une belle vérité spirituelle :
                  le jeûne est accompli pour Allah seul, et c&apos;est Sa
                  subsistance qui permet au serviteur de rompre ce jeûne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Certains savants recommandent de combiner les deux
                  formulations : commencer par la doua principale authentique,
                  puis ajouter cette seconde invocation. D&apos;autres
                  préfèrent s&apos;en tenir uniquement à la première, par
                  souci de rigueur dans le suivi de la Sunna. Les deux
                  approches sont valides et le musulman choisira selon sa
                  conviction.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ
                    تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma laka sumtu wa
                    bika amantu wa &apos;alayka tawakkaltu wa &apos;ala
                    rizqika aftartu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, c&apos;est pour Toi que j&apos;ai
                    jeûné, en Toi que j&apos;ai cru, en Toi que j&apos;ai
                    placé ma confiance et c&apos;est avec Ta subsistance que
                    je romps mon jeûne.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Formulation élargie rapportée dans certaines compilations
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Moment d'exaucement */}
              {/* ============================================ */}
              <section id="moment-exaucement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;iftar : un moment privilégié d&apos;exaucement de la doua
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le moment de la rupture du jeûne n&apos;est pas seulement
                  un instant de soulagement physique. C&apos;est l&apos;un
                  des moments les plus propices à l&apos;exaucement des
                  invocations. Le Prophète ﷺ a explicitement désigné cet
                  instant comme un moment où la doua n&apos;est pas rejetée.
                </p>

                <HadithCard
                  arabic="ثَلاَثَةٌ لاَ تُرَدُّ دَعْوَتُهُمُ: الصَّائِمُ حِينَ يُفْطِرُ، وَالإِمَامُ الْعَادِلُ، وَدَعْوَةُ الْمَظْلُومِ"
                  text="Trois personnes ne voient pas leur invocation rejetée : le jeûneur au moment de la rupture de son jeûne, le dirigeant juste, et l'invocation de l'opprimé."
                  source="Rapporté par at-Tirmidhi (3598) et Ibn Majah"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une importance capitale pour le
                  croyant. Il nous apprend que le jeûneur bénéficie d&apos;un
                  statut particulier auprès d&apos;Allah au moment précis
                  de l&apos;iftar. Les savants expliquent que cela est dû
                  à plusieurs raisons : le jeûneur vient d&apos;accomplir
                  un acte d&apos;adoration sincère durant toute la journée,
                  son corps et son âme sont dans un état de faiblesse et
                  d&apos;humilité devant Allah, et il se trouve dans un état
                  de soumission totale à la volonté divine.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  C&apos;est pourquoi les savants recommandent vivement de
                  ne pas se contenter de la doua de rupture du jeûne, mais
                  de profiter de cet instant pour formuler toutes ses
                  demandes personnelles : demande de pardon, de guidance,
                  de protection, de guérison, de subsistance, et
                  d&apos;invocations pour ses proches. Le croyant avisé
                  prépare à l&apos;avance ses invocations pour ne rien
                  oublier au moment béni de l&apos;iftar.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    إِنَّ لِلصَّائِمِ عِنْدَ فِطْرِهِ لَدَعْوَةً مَا تُرَدُّ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Inna lis-sa&apos;imi
                    &apos;inda fitrihi la-da&apos;watan ma turaddu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Le jeûneur possède, au moment de sa
                    rupture du jeûne, une invocation qui n&apos;est pas
                    rejetée.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (1753), authentifié par al-Busiri
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Préparez vos douas à l&apos;avance :</strong>{" "}
                      notez sur papier ou sur votre téléphone les demandes
                      que vous souhaitez formuler à chaque iftar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commencez par la doua prophétique :</strong>{" "}
                      récitez d&apos;abord l&apos;invocation authentique,
                      puis ajoutez vos demandes personnelles.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>N&apos;oubliez pas vos proches :</strong>{" "}
                      invoquez Allah pour vos parents, vos enfants, la
                      communauté musulmane et l&apos;humanité entière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Soyez concentré :</strong> évitez les
                      distractions au moment de l&apos;iftar. Éteignez le
                      téléphone quelques instants pour vous consacrer
                      pleinement à l&apos;invocation.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua du jeûneur pour l'hôte */}
              {/* ============================================ */}
              <section id="doua-invite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua du jeûneur pour celui qui lui offre l&apos;iftar
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam accorde une grande importance à la générosité,
                  tout particulièrement durant le Ramadan. Offrir l&apos;iftar
                  à un jeûneur est un acte de grande valeur. Le Prophète ﷺ
                  a dit : « Celui qui donne à un jeûneur de quoi rompre son
                  jeûne aura la même récompense que lui, sans que cela ne
                  diminue en rien la récompense du jeûneur. » (Rapporté par
                  at-Tirmidhi).
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ وَأَكَلَ
                    طَعَامَكُمُ الْأَبْرَارُ وَصَلَّتْ عَلَيْكُمُ
                    الْمَلَائِكَةُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Aftara &apos;indakum
                    as-sa&apos;imun, wa akala ta&apos;amakum al-abrar,
                    wa sallat &apos;alaykum al-mala&apos;ikah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Que les jeûneurs rompent leur jeûne chez
                    vous, que les pieux mangent votre nourriture, et que
                    les anges prient sur vous.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (3854) et Ibn Majah
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est prononcée par le jeûneur en faveur
                  de celui qui l&apos;a invité à rompre le jeûne chez lui.
                  C&apos;est un acte de reconnaissance et de gratitude qui
                  renforce les liens sociaux et la fraternité au sein de la
                  communauté musulmane. L&apos;hôte reçoit ainsi trois
                  bénédictions : la compagnie des jeûneurs, la venue des
                  pieux, et les prières des anges.
                </p>

                <HadithCard
                  arabic="مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ غَيْرَ أَنَّهُ لاَ يَنْقُصُ مِنْ أَجْرِ الصَّائِمِ شَيْئًا"
                  text="Celui qui donne à un jeûneur de quoi rompre son jeûne aura la même récompense que lui, sans que cela ne diminue en rien la récompense du jeûneur."
                  source="Rapporté par at-Tirmidhi (807) et Ibn Majah"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète ﷺ encourageait également une doua plus
                  générale pour l&apos;hôte après avoir mangé chez quelqu&apos;un :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي وَاسْقِ مَنْ
                    سَقَانِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma at&apos;im man
                    at&apos;amani wasqi man saqani
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, nourris celui qui m&apos;a nourri
                    et donne à boire à celui qui m&apos;a donné à
                    boire.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2055)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Mérites du jeûne */}
              {/* ============================================ */}
              <section id="merites-jeune" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les mérites du jeûne et de l&apos;invocation pendant le
                  Ramadan
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mois de Ramadan est décrit par le Prophète ﷺ comme un
                  mois dont le début est miséricorde, le milieu est pardon et
                  la fin est affranchissement du Feu. C&apos;est un mois où
                  les portes du Paradis sont ouvertes, les portes de
                  l&apos;Enfer sont fermées et les démons sont enchaînés.
                  Dans ce contexte exceptionnel, l&apos;invocation acquiert
                  une puissance et une efficacité sans pareilles.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le pardon des péchés
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le jeûne du Ramadan, accompli avec foi et espérance,
                        efface les péchés passés. Combiné aux prières
                        nocturnes (tarawih) et aux invocations, il constitue
                        une purification complète de l&apos;âme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La multiplication des récompenses
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Chaque bonne action accomplie durant le Ramadan voit
                        sa récompense multipliée. La récitation du Coran,
                        l&apos;aumône, les invocations : tout est amplifié
                        durant ce mois béni.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;intercession du jeûne
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète ﷺ a dit : « Le jeûne et le Coran
                        intercèderont pour le serviteur au Jour du Jugement. »
                        (Rapporté par Ahmad). Le jeûne dira : « Seigneur, je
                        l&apos;ai privé de nourriture et de désirs pendant le
                        jour, accepte mon intercession en sa faveur. »
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La porte ar-Rayyan
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Paradis possède une porte spéciale appelée
                        ar-Rayyan, réservée exclusivement aux jeûneurs.
                        Seuls ceux qui ont jeûné entreront par cette porte,
                        et personne d&apos;autre ne pourra y accéder.
                        (Rapporté par al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/interieur-mosquee-arches-tapis-lumiere.jpg"
                    alt="Intérieur de mosquée avec arches et lumière, évoquant la spiritualité du Ramadan"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Sahur et début de jeûne */}
              {/* ============================================ */}
              <section id="sahur-douas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que dire en début de jeûne (sahur)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le sahur (سحور) est le repas pris avant l&apos;aube, avant
                  le début du jeûne. Le Prophète ﷺ a vivement encouragé sa
                  prise en disant : « Prenez le sahur, car dans le sahur il
                  y a une bénédiction (baraka). » (Rapporté par al-Bukhari
                  et Muslim). Bien qu&apos;il n&apos;existe pas de doua
                  spécifique au sahur rapportée de manière authentique, le
                  moment qui l&apos;entoure est l&apos;un des plus bénis
                  pour l&apos;invocation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En effet, le sahur se situe dans le dernier tiers de la
                  nuit, moment où Allah descend au ciel le plus bas et dit :
                  « Y a-t-il quelqu&apos;un qui M&apos;invoque pour que Je
                  lui réponde ? Y a-t-il quelqu&apos;un qui Me demande pour
                  que Je lui donne ? Y a-t-il quelqu&apos;un qui cherche Mon
                  pardon pour que Je lui pardonne ? » (Rapporté par
                  al-Bukhari et Muslim). Le croyant avisé profitera donc du
                  moment du sahur pour multiplier les invocations.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    نَوَيْتُ صَوْمَ غَدٍ مِنْ شَهْرِ رَمَضَانَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Nawaytu sawma ghadin min
                    shahri Ramadan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;J&apos;ai l&apos;intention de jeûner demain
                    pour le mois de Ramadan.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Formulation de l&apos;intention — l&apos;intention dans
                    le cœur suffit selon la majorité des savants
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants précisent que l&apos;intention du jeûne peut
                  être formulée dans le cœur sans nécessairement être
                  prononcée verbalement. Le hadith du Prophète ﷺ dit :
                  « Les actes ne valent que par les intentions. » (Rapporté
                  par al-Bukhari et Muslim). Le simple fait de se lever pour
                  le sahur constitue déjà en soi une forme d&apos;intention
                  de jeûner.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici quelques invocations recommandées pendant le
                  dernier tiers de la nuit, au moment du sahur :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ
                    إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astaghfirullaha al-&apos;Adhim
                    alladhi la ilaha illa huwa al-Hayy al-Qayyum wa atubu
                    ilayh
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je demande pardon à Allah le Très Grand,
                    il n&apos;y a de divinité que Lui, le Vivant, le
                    Subsistant, et je me repens à Lui.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud et at-Tirmidhi
                  </p>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua en islam : guide complet des invocations authentiques"
                  description="Retrouvez toutes les invocations prophétiques par thème : protection, guérison, voyage, épreuves et bien plus."
                  href="/doua-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Douas du Ramadan */}
              {/* ============================================ */}
              <section id="douas-ramadan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Autres douas recommandées pendant le Ramadan
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le mois de Ramadan est une saison spirituelle par
                  excellence. Au-delà de la doua de rupture du jeûne,
                  le musulman est encouragé à multiplier les invocations
                  tout au long de ce mois béni. Voici les invocations les
                  plus importantes à connaître et à pratiquer pendant le
                  Ramadan.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La doua de la Nuit du Destin (Laylat al-Qadr)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La Nuit du Destin est la nuit la plus importante de
                  l&apos;année. Allah dit à son sujet : « La Nuit du Destin
                  est meilleure que mille mois. » (Coran, 97:3). Le Prophète
                  ﷺ a enseigné à Aïsha (qu&apos;Allah l&apos;agrée) une
                  invocation spécifique pour cette nuit :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ
                    فَاعْفُ عَنِّي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma innaka
                    &apos;afuwwun tuhibbu al-&apos;afwa fa&apos;fu &apos;anni
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Allah, Tu es Celui qui pardonne, Tu
                    aimes le pardon, alors pardonne-moi.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3513) et Ibn Majah — Sahih
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une beauté et d&apos;une
                  simplicité remarquables. Elle demande le &apos;afw, un
                  pardon qui va au-delà de la simple rémission des péchés :
                  c&apos;est un effacement complet, comme si la faute
                  n&apos;avait jamais existé. Les savants recommandent de
                  la répéter abondamment durant les dix dernières nuits du
                  Ramadan, en particulier les nuits impaires (21, 23, 25,
                  27, 29).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Douas de demande de pardon (istighfar)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Ramadan est le mois du pardon par excellence. Allah
                  dit dans le Coran : « Et ceux qui, lorsqu&apos;ils ont
                  commis une turpitude ou se sont fait du tort à eux-mêmes,
                  se souviennent d&apos;Allah et implorent le pardon de
                  leurs péchés. » (Coran, 3:135). Le Prophète ﷺ lui-même
                  demandait pardon à Allah plus de soixante-dix fois par
                  jour.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ
                    التَّوَّابُ الرَّحِيمُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi ighfir li wa tub
                    &apos;alayya innaka anta at-Tawwabu ar-Rahim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-moi et accepte mon
                    repentir, Tu es certes Celui qui accepte le repentir,
                    le Très Miséricordieux.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud et at-Tirmidhi
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Conseils pratiques pour l&apos;iftar
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour tirer le meilleur parti du moment béni de
                  l&apos;iftar, voici quelques recommandations pratiques
                  issues de la Sunna et des conseils des savants :
                </p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rompez avec des dattes :</strong> le Prophète
                      ﷺ rompait son jeûne avec des dattes fraîches
                      (rutab). S&apos;il n&apos;en trouvait pas, il
                      prenait des dattes sèches (tamr). S&apos;il n&apos;en
                      trouvait pas non plus, il buvait de l&apos;eau.
                      (Rapporté par Abu Dawud).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne retardez pas l&apos;iftar :</strong> le
                      Prophète ﷺ a dit : « Les gens ne cesseront d&apos;être
                      dans le bien tant qu&apos;ils hâteront la rupture du
                      jeûne. » (Rapporté par al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Mangez modérément :</strong> le Prophète ﷺ
                      recommandait de ne pas trop manger. « Le fils
                      d&apos;Adam ne remplit pas de récipient pire que son
                      ventre. » (Rapporté par at-Tirmidhi).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Partagez votre iftar :</strong> invitez des
                      proches, des voisins ou des personnes dans le besoin.
                      Offrir l&apos;iftar à un jeûneur équivaut à obtenir
                      la récompense de son jeûne.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l'arabe pour réciter les douas dans leur langue originale"
                description="Maîtriser la langue arabe vous permettra de comprendre et de réciter les invocations prophétiques avec profondeur et justesse."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles en lien avec le jeûne et les invocations
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                  <Link
                    href="/repentir-sincere-islam-tawba"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le repentir en islam
                  </Link>
                </div>
              </section>

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
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier en islam
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
