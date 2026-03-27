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
    "Doua pour les parents vivants en islam : invocations authentiques en arabe",
  description:
    "Découvrez les douas pour les parents vivants en islam : Rabbi irhamhuma, Rabbana ighfir li wa liwalidayya, invocations en arabe avec phonétique et traduction, versets du Coran (17:23-24) et hadiths sur le birr al-walidayn.",
  openGraph: {
    title:
      "Doua pour les parents vivants en islam : invocations authentiques en arabe",
    description:
      "Les invocations authentiques pour les parents vivants en islam : textes en arabe, phonétique, traduction et hadiths sur la piété filiale (birr al-walidayn).",
    url: "https://www.islamreligion.fr/doua-parents-vivants-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-parents-vivants-islam",
  },
};

const tocItems = [
  { id: "importance-parents", label: "L\u2019importance des parents en islam" },
  { id: "verset-coran-parents", label: "Le verset du Coran sur les parents (17:23-24)" },
  { id: "douas-parents-vivants", label: "Douas authentiques pour les parents vivants" },
  { id: "birr-al-walidayn", label: "Le birr al-walidayn : la piété filiale" },
  { id: "hadiths-parents", label: "Hadiths sur les parents et le paradis" },
  { id: "honorer-parents-pratique", label: "Comment honorer ses parents au quotidien" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la meilleure doua pour les parents vivants en islam ?",
    answer:
      "La doua la plus connue pour les parents vivants est tirée du Coran (sourate Al-Isra, 17:24) : « Rabbi irhamhuma kama rabbayyani saghira » qui signifie « Seigneur, fais-leur miséricorde comme ils m&apos;ont élevé tout petit ». Cette invocation est recommandée car elle est coranique et exprime la reconnaissance envers les parents pour les soins qu&apos;ils ont prodigués durant l&apos;enfance.",
  },
  {
    question: "Peut-on faire la doua pour ses parents en français ?",
    answer:
      "Oui, il est tout à fait permis de faire des invocations pour ses parents dans toute langue, y compris le français. Allah comprend toutes les langues. Cependant, il est recommandé d&apos;apprendre les douas coraniques en arabe pour bénéficier de la bénédiction (baraka) des paroles révélées. Les supplications personnelles en français sont parfaitement valides et acceptées.",
  },
  {
    question: "Quand faut-il invoquer pour ses parents vivants ?",
    answer:
      "On peut invoquer pour ses parents à tout moment, mais certains instants sont particulièrement propices : après chaque prière obligatoire, lors de la prosternation (sujud), au dernier tiers de la nuit, le vendredi après l&apos;Asr et pendant le mois de Ramadan. Le Prophète (paix et salut sur lui) a encouragé les musulmans à invoquer régulièrement pour leurs parents, de leur vivant comme après leur décès.",
  },
  {
    question: "Quel est le statut des parents en islam ?",
    answer:
      "Les parents occupent un rang extrêmement élevé en islam. Allah a ordonné la bienfaisance envers eux juste après l&apos;obligation de L&apos;adorer Lui seul (Coran 17:23). Le Prophète (paix et salut sur lui) a placé le birr al-walidayn (la piété filiale) parmi les meilleures actions après la prière à son heure. La mère bénéficie d&apos;un statut encore plus élevé : le Paradis se trouve sous ses pieds selon le hadith.",
  },
  {
    question: "Est-ce que la doua d'un enfant pour ses parents est toujours exaucée ?",
    answer:
      "La doua de l&apos;enfant pour ses parents fait partie des invocations qui ont un statut privilégié en islam. Le Prophète (paix et salut sur lui) a enseigné que parmi les actions dont la récompense ne s&apos;interrompt pas après la mort figurent « un enfant pieux qui invoque pour lui » (rapporté par Muslim). Cette proximité du lien parental donne à cette doua une force particulière auprès d&apos;Allah.",
  },
  {
    question: "Que dit le Coran sur le respect des parents ?",
    answer:
      "Le Coran aborde le respect des parents dans de nombreux versets. Le plus célèbre est le passage de sourate Al-Isra (17:23-24) où Allah ordonne de ne pas leur dire « ouf » et de s&apos;adresser à eux avec douceur. Sourate Luqman (31:14) rappelle les sacrifices de la mère pendant la grossesse et l&apos;allaitement. Sourate Al-Ahqaf (46:15) mentionne la reconnaissance due aux parents pour les peines qu&apos;ils ont endurées.",
  },
  {
    question: "Quelle est la différence entre la doua pour les parents vivants et décédés ?",
    answer:
      "La doua pour les parents vivants inclut des demandes de santé, de guidée, de longue vie pieuse et de miséricorde. Pour les parents décédés, les invocations se concentrent sur le pardon, l&apos;élargissement de leur tombe, l&apos;élévation de leur rang au Paradis et la lumière dans leur demeure éternelle. Dans les deux cas, « Rabbi irhamhuma kama rabbayyani saghira » reste valable.",
  },
  {
    question: "Le birr al-walidayn est-il obligatoire même si les parents ne sont pas musulmans ?",
    answer:
      "Oui, le birr al-walidayn (la piété filiale) est obligatoire même envers des parents non-musulmans. Allah dit dans le Coran (31:15) : « Et si tous deux te forcent à M&apos;associer ce dont tu n&apos;as aucune connaissance, alors ne leur obéis pas, mais accompagne-les ici-bas de façon convenable. » Le respect, la bonté et les invocations pour leur guidée restent un devoir du musulman envers ses parents, quelle que soit leur religion.",
  },
];

export default function DouaParentsVivantsIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-parents-vivants-islam/#article",
        headline:
          "Doua pour les parents vivants en islam : invocations authentiques en arabe",
        description:
          "Découvrez les douas pour les parents vivants en islam : invocations coraniques en arabe, phonétique, traduction et hadiths sur la piété filiale.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-03-21",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-parents-vivants-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-parents-vivants-islam/#breadcrumb",
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
            name: "Doua pour les parents",
            item: "https://www.islamreligion.fr/doua-parents-vivants-islam",
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
          title="Doua pour les parents vivants en islam : invocations authentiques"
          subtitle="Les invocations coraniques et prophétiques pour honorer et invoquer en faveur de ses parents vivants. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en doua avec rayons dorés symbolisant l'invocation pour les parents en islam"
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
                <span className="text-foreground">Doua pour les parents</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Invoquer pour ses parents vivants est l&apos;un des actes les
                  plus méritoires en islam. Le Coran ordonne la bienfaisance
                  envers eux juste après l&apos;adoration d&apos;Allah, et le
                  Prophète (paix et salut sur lui) a placé la piété filiale
                  (birr al-walidayn) parmi les meilleures oeuvres. Les douas
                  &laquo;&nbsp;Rabbi irhamhuma kama rabbayyani saghira&nbsp;&raquo;
                  et &laquo;&nbsp;Rabbana ighfir li wa liwalidayya&nbsp;&raquo;
                  sont parmi les invocations les plus précieuses que le musulman
                  peut adresser à Allah en faveur de ses parents.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Importance des parents en islam */}
              {/* ============================================ */}
              <section id="importance-parents" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;importance des parents en islam : un rang unique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, les parents occupent un rang que nul autre être
                  humain ne peut égaler. Allah a lié leur droit au Sien propre
                  dans de nombreux versets du Coran, plaçant la bienfaisance
                  envers eux immédiatement après l&apos;obligation de
                  L&apos;adorer Lui seul. Cette association récurrente dans le
                  Livre d&apos;Allah témoigne de la gravité et de la noblesse du
                  lien filial en islam.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le terme arabe <strong>walidayn</strong> (والدين) désigne les
                  deux parents, père et mère, et le Coran les mentionne
                  ensemble dans la plupart des injonctions. Toutefois, la mère
                  bénéficie d&apos;un statut encore plus élevé en raison des
                  souffrances qu&apos;elle endure pendant la grossesse,
                  l&apos;accouchement et l&apos;allaitement. Le Prophète (paix
                  et salut sur lui) a répété trois fois &laquo;&nbsp;ta
                  mère&nbsp;&raquo; avant de mentionner le père lorsqu&apos;on
                  lui demanda qui mérite le plus la bonne compagnie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La <strong>doua pour les parents</strong> vivants constitue
                  l&apos;une des expressions les plus concrètes de cette piété
                  filiale. Invoquer Allah pour qu&apos;Il accorde à ses parents
                  santé, guidée, pardon et miséricorde est un acte
                  d&apos;adoration qui profite à la fois aux parents et à
                  l&apos;enfant qui invoque. Les savants de l&apos;islam
                  considèrent que cette doua fait partie des oeuvres pieuses
                  dont la récompense se prolonge dans cette vie et dans
                  l&apos;au-delà.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le droit des parents est lié au droit d&apos;Allah :</strong>{" "}
                      dans le Coran, la bienfaisance envers les parents est
                      mentionnée juste après le tawhid (unicité d&apos;Allah),
                      soulignant l&apos;immensité de ce devoir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un investissement pour l&apos;au-delà :</strong>{" "}
                      la satisfaction des parents est une porte vers la
                      satisfaction d&apos;Allah, et leur colère est une porte
                      vers la colère divine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un devoir permanent :</strong> contrairement à
                      d&apos;autres obligations ponctuelles, le devoir envers
                      les parents est continu et ne s&apos;interrompt jamais
                      tant qu&apos;ils sont en vie.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en prière dans une mosquée illustrant la doua pour les parents en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le verset du Coran (17:23-24) */}
              {/* ============================================ */}
              <section id="verset-coran-parents" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le verset du Coran sur les parents (sourate Al-Isra, 17:23-24)
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les versets 23 et 24 de la sourate Al-Isra constituent le
                  passage le plus complet et le plus célèbre du Coran sur le
                  devoir envers les parents. Allah y réunit l&apos;adoration
                  exclusive qui Lui est due et la bienfaisance envers les
                  parents dans un même commandement, avant de détailler les
                  comportements attendus du musulman envers ses père et mère.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا ۝ وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Wa qada Rabbuka alla ta&apos;budu illa iyyahu wa bil-walidayni ihsana. Imma yablughanna &apos;indakal-kibara ahaduha aw kilahuma fala taqul lahuma uffin wa la tanhar-huma wa qul lahuma qawlan karima. Wakhfid lahuma janahad-dhulli minar-rahmati wa qul Rabbi irhamhuma kama rabbayyani saghira.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Et ton Seigneur a décrété que vous n&apos;adoriez que Lui et que vous soyez bienfaisants envers vos parents. Si l&apos;un d&apos;eux ou tous deux atteignent la vieillesse auprès de toi, alors ne leur dis point « ouf » et ne les repousse pas, mais adresse-leur des paroles respectueuses. Et par miséricorde, abaisse pour eux l&apos;aile de l&apos;humilité et dis : Seigneur, fais-leur miséricorde comme ils m&apos;ont élevé tout petit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Isra (17:23-24)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce passage coranique contient plusieurs enseignements
                  fondamentaux. Tout d&apos;abord, l&apos;interdiction de dire
                  &laquo;&nbsp;ouf&nbsp;&raquo; (uff) aux parents représente le
                  degré le plus bas de l&apos;irrespect. Si Allah interdit ce
                  simple soupir d&apos;agacement, alors toute parole blessante,
                  tout cri ou toute forme de maltraitance est à fortiori
                  strictement interdite. Les savants considèrent que cette
                  interdiction englobe tout ce qui peut causer de la peine aux
                  parents, que ce soit par la parole, le geste ou même le
                  regard.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ensuite, l&apos;expression &laquo;&nbsp;abaisse pour eux
                  l&apos;aile de l&apos;humilité&nbsp;&raquo; est une métaphore
                  d&apos;une beauté remarquable. Tout comme l&apos;oiseau
                  abaisse ses ailes pour protéger ses petits, l&apos;enfant
                  devenu adulte doit envelopper ses parents âgés de douceur, de
                  protection et de tendresse. Ce renversement des rôles, où
                  l&apos;enfant devient le protecteur de ses parents, est
                  présenté comme un devoir sacré, motivé par la miséricorde
                  (rahma) et non par la contrainte.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Enfin, le verset se conclut par la doua la plus célèbre pour
                  les parents : &laquo;&nbsp;<strong>Rabbi irhamhuma kama
                  rabbayyani saghira</strong>&nbsp;&raquo; (Seigneur, fais-leur
                  miséricorde comme ils m&apos;ont élevé tout petit). Cette
                  invocation est un modèle de gratitude : elle rappelle les
                  années de soins, de veilles, de sacrifices et d&apos;amour
                  inconditionnel que les parents ont consacrés à leur enfant, et
                  demande à Allah de leur rendre cette miséricorde au centuple.
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
              {/* SECTION 3 : Douas authentiques */}
              {/* ============================================ */}
              <section id="douas-parents-vivants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques pour les parents vivants
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Coran et la Sunna nous enseignent plusieurs invocations
                  spécifiques pour les parents. Voici les principales douas
                  authentiques, accompagnées de leur texte arabe, de leur
                  phonétique et de leur traduction en français. Chaque musulman
                  devrait les apprendre et les réciter régulièrement pour ses
                  parents vivants.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Rabbi irhamhuma kama rabbayyani saghira
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  C&apos;est la doua coranique par excellence pour les parents.
                  Allah Lui-même l&apos;enseigne aux croyants dans la sourate
                  Al-Isra. Elle exprime une demande de miséricorde proportionnelle
                  à l&apos;amour et aux soins que les parents ont prodigués
                  durant l&apos;enfance.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi irhamhuma kama rabbayyani saghira
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, fais-leur miséricorde comme ils m&apos;ont élevé tout petit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Isra (17:24)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Rabbana ighfir li wa liwalidayya
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation du prophète Ibrahim (paix sur lui) est
                  rapportée dans la sourate Ibrahim. Elle demande le pardon
                  d&apos;Allah pour soi-même et pour ses parents, reconnaissant
                  que tous les êtres humains ont besoin de la clémence divine.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana ighfir li wa liwalidayya wa lil-mu&apos;minina yawma yaqumul-hisab
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne-moi, ainsi qu&apos;à mes parents et aux croyants, le Jour où se dressera le Compte&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Ibrahim (14:41)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour la santé et la guidée des parents
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le musulman peut également invoquer Allah avec des
                  supplications personnelles pour demander la santé, la
                  protection et la bonne fin pour ses parents. Parmi les douas
                  prophétiques adaptables, on trouve cette invocation de bien :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اغْفِرْ لِوَالِدَيَّ وَارْحَمْهُمَا وَعَافِهِمَا وَاعْفُ عَنْهُمَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma ighfir liwalidayya warhamhuma wa &apos;afihima wa&apos;fu &apos;anhuma
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, pardonne à mes parents, fais-leur miséricorde, accorde-leur la santé et absous-les&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Invocation inspirée des formules prophétiques (Muslim)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de reconnaissance envers les parents
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation tirée de la sourate Al-Ahqaf exprime la
                  gratitude envers Allah pour les bienfaits accordés à
                  soi-même et à ses parents, tout en demandant une descendance
                  pieuse. Elle est particulièrement recommandée lorsque
                  l&apos;on atteint la maturité.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي ۖ إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbi awzi&apos;ni an ashkura ni&apos;matakal-lati an&apos;amta &apos;alayya wa &apos;ala walidayya wa an a&apos;mala salihan tardahu wa aslih li fi dhurriyyati inni tubtu ilayka wa inni minal-muslimin
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, inspire-moi de rendre grâce pour le bienfait dont Tu m&apos;as comblé ainsi que mes parents, et de faire une bonne oeuvre que Tu agrées. Et fais que ma descendance soit de moeurs pieuses. Je me repens à Toi et je suis du nombre des musulmans&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Ahqaf (46:15)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  5. Doua pour la longévité pieuse des parents
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le musulman peut demander à Allah d&apos;accorder à ses
                  parents une vie longue dans l&apos;obéissance à Allah,
                  combinant la demande de longévité avec celle de la piété.
                  Cette supplication personnelle est encouragée par les savants.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَطِلْ عُمُرَ وَالِدَيَّ فِي طَاعَتِكَ وَأَحْسِنْ عَاقِبَتَهُمَا وَاجْعَلْ خَيْرَ أَعْمَالِهِمَا خَوَاتِمَهَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma atil &apos;umura walidayya fi ta&apos;atika wa ahsin &apos;aqibatahuma waj&apos;al khayra a&apos;malihima khawatimaha
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, prolonge la vie de mes parents dans Ton obéissance, accorde-leur une bonne fin et fais que leurs meilleures oeuvres soient les dernières&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Supplication personnelle recommandée par les savants
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Birr al-walidayn */}
              {/* ============================================ */}
              <section id="birr-al-walidayn" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le birr al-walidayn : la piété filiale en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le concept de <strong>birr al-walidayn</strong> (بر الوالدين)
                  dépasse la simple obéissance : il englobe la bienfaisance, la
                  bonté, la douceur, le respect et la générosité envers les
                  parents. C&apos;est un terme qui exprime la perfection de la
                  relation filiale, où l&apos;enfant ne se contente pas de
                  remplir un devoir, mais cherche l&apos;excellence dans le
                  traitement de ses parents.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  À l&apos;opposé du birr se trouve le &apos;uquq al-walidayn
                  (عقوق الوالدين), la désobéissance et la maltraitance des
                  parents, que le Prophète (paix et salut sur lui) a classée
                  parmi les grands péchés (al-kaba&apos;ir). Dans un hadith
                  rapporté par al-Bukhari et Muslim, il a mentionné le &apos;uquq
                  juste après le shirk (associationnisme), soulignant la gravité
                  extrême de ce péché. Celui qui maltraite ses parents risque
                  non seulement le châtiment dans l&apos;au-delà, mais
                  également des conséquences dans cette vie même.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le birr al-walidayn se manifeste de multiples façons : par la
                  parole douce, le service dévoué, la dépense financière, la
                  visite régulière, l&apos;écoute attentive et surtout par la
                  doua constante en leur faveur. Les savants considèrent que la
                  doua pour les parents est l&apos;une des formes les plus
                  élevées du birr, car elle perdure même après leur décès.
                  L&apos;enfant qui invoque pour ses parents leur offre un bien
                  que l&apos;argent ne peut acheter : la miséricorde d&apos;Allah.
                  Pour approfondir le sujet du{" "}
                  <Link href="/doua-pardon-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">pardon en islam</Link>,
                  consultez notre guide dédié.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-calligraphie-doree-lumiere.jpg"
                    alt="Coran ouvert avec calligraphie dorée illustrant les versets sur la piété filiale en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Hadiths sur les parents */}
              {/* ============================================ */}
              <section id="hadiths-parents" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hadiths sur les parents et le paradis
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La Sunna du Prophète (paix et salut sur lui) regorge de
                  hadiths qui élèvent le statut des parents et encouragent la
                  piété filiale. Ces paroles prophétiques montrent que les
                  parents, et en particulier la mère, sont une voie directe
                  vers le Paradis pour celui qui les honore avec sincérité.
                </p>

                <HadithCard
                  arabic="الجنة تحت أقدام الأمهات"
                  text="Le Paradis se trouve sous les pieds des mères."
                  source="Rapporté par an-Nasa&apos;i (3104), authentifié par al-Albani"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith célèbre exprime de manière saisissante le lien
                  entre la satisfaction de la mère et l&apos;accès au Paradis.
                  Les savants expliquent que &laquo;&nbsp;sous les pieds des
                  mères&nbsp;&raquo; signifie que le Paradis est obtenu par le
                  service, l&apos;obéissance et la bonté envers la mère. Celui
                  qui satisfait sa mère, qui l&apos;honore et qui invoque pour
                  elle se rapproche du Paradis de manière incomparable.
                </p>

                <HadithCard
                  arabic="سُئِلَ النَّبِيُّ صلى الله عليه وسلم أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ قَالَ الصَّلاَةُ عَلَى وَقْتِهَا قَالَ ثُمَّ أَيٌّ قَالَ بِرُّ الْوَالِدَيْنِ"
                  text="On demanda au Prophète (paix et salut sur lui) : « Quelle est l'oeuvre la plus aimée d'Allah ? » Il répondit : « La prière à son heure. » On lui demanda : « Et ensuite ? » Il répondit : « La piété filiale (birr al-walidayn). »"
                  source="Rapporté par al-Bukhari (527) et Muslim (85)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une portée considérable. Le Prophète
                  (paix et salut sur lui) a placé le birr al-walidayn
                  immédiatement après la prière à son heure, c&apos;est-à-dire
                  après le pilier pratique le plus important de l&apos;islam.
                  Cela signifie que la piété filiale est plus méritoire que le
                  jihad, l&apos;aumône, le jeûne surérogatoire et bien
                  d&apos;autres actes d&apos;adoration. Ce classement montre
                  l&apos;importance capitale que l&apos;islam accorde aux
                  parents.
                </p>

                <HadithCard
                  arabic="رَغِمَ أَنْفُهُ ثُمَّ رَغِمَ أَنْفُهُ ثُمَّ رَغِمَ أَنْفُهُ قِيلَ مَنْ يَا رَسُولَ اللَّهِ قَالَ مَنْ أَدْرَكَ وَالِدَيْهِ عِنْدَ الْكِبَرِ أَحَدَهُمَا أَوْ كِلَيْهِمَا ثُمَّ لَمْ يَدْخُلِ الْجَنَّةَ"
                  text="« Qu'il soit humilié ! Qu'il soit humilié ! Qu'il soit humilié ! » On demanda : « Qui, ô Messager d'Allah ? » Il répondit : « Celui qui atteint la vieillesse de l'un de ses parents ou des deux, puis n'entre pas au Paradis. »"
                  source="Rapporté par Muslim (2551)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est un avertissement sévère. Le Prophète (paix et
                  salut sur lui) répète trois fois l&apos;expression
                  &laquo;&nbsp;qu&apos;il soit humilié&nbsp;&raquo; pour
                  souligner la gravité de la situation de celui qui a la chance
                  d&apos;avoir ses parents âgés encore en vie mais ne profite
                  pas de cette occasion pour gagner le Paradis par leur service.
                  Les parents âgés sont en effet une porte grande ouverte vers
                  le Paradis : les servir, les accompagner, invoquer pour eux
                  et les traiter avec douceur sont autant d&apos;oeuvres dont la
                  récompense dépasse l&apos;imagination. Pour découvrir
                  d&apos;autres{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Honorer ses parents au quotidien */}
              {/* ============================================ */}
              <section id="honorer-parents-pratique" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment honorer ses parents au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La piété filiale ne se limite pas aux invocations : elle se
                  traduit par des actes concrets au quotidien. Le musulman qui
                  souhaite véritablement honorer ses parents combine la doua
                  sincère et l&apos;action dévouée, suivant en cela
                  l&apos;exemple du Prophète (paix et salut sur lui) et de ses
                  compagnons.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La parole douce et respectueuse
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        S&apos;adresser aux parents avec douceur et respect est
                        un commandement coranique direct. Même en cas de
                        désaccord, le musulman doit garder un ton posé et des
                        paroles bienveillantes. Le Coran interdit même le simple
                        soupir d&apos;agacement (&laquo;&nbsp;ouf&nbsp;&raquo;),
                        soulignant l&apos;extrême délicatesse requise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le service physique et la présence
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Aider ses parents dans les tâches quotidiennes, les
                        accompagner dans leurs rendez-vous, leur préparer à
                        manger, veiller à leur confort : ces gestes simples sont
                        considérés comme des actes d&apos;adoration
                        d&apos;une immense valeur auprès d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La dépense financière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Subvenir aux besoins de ses parents, même si l&apos;on
                        n&apos;est pas riche, est un devoir en islam. Le
                        Prophète (paix et salut sur lui) a enseigné que la
                        meilleure aumône est celle que l&apos;on dépense pour
                        sa famille, et les parents en sont les premiers
                        bénéficiaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;invocation constante en leur faveur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Invoquer Allah pour ses parents après chaque prière,
                        dans les moments de prosternation et lors des instants
                        propices est l&apos;un des plus grands cadeaux
                        qu&apos;un enfant puisse offrir à ses parents. La doua
                        sincère est un trésor que ni la distance ni les
                        circonstances ne peuvent empêcher.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Honorer les amis de ses parents
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné que
                        parmi les formes les plus élevées du birr figure le
                        fait d&apos;honorer les amis du père et de la mère.
                        Maintenir les liens que les parents ont tissés est une
                        forme d&apos;extension de la piété filiale au-delà du
                        cercle familial immédiat.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En résumé, honorer ses parents vivants est une responsabilité
                  globale qui touche à tous les aspects de la vie : la parole,
                  l&apos;action, la dépense et la doua. Le musulman qui excelle
                  dans la piété filiale ouvre pour lui-même les portes du
                  Paradis et attire sur sa vie la bénédiction (baraka)
                  d&apos;Allah. Il ne faut jamais sous-estimer cette
                  opportunité, car les parents ne vivent pas éternellement, et
                  le regret de celui qui les perd sans les avoir honorés est
                  une douleur que rien ne peut apaiser. Pour invoquer en faveur
                  de vos parents décédés, consultez notre article sur la{" "}
                  <Link href="/doua-parents-decedes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour les parents décédés</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour les parents décédés en islam"
                  description="Découvrez les invocations authentiques pour invoquer en faveur de vos parents après leur décès."
                  href="/doua-parents-decedes-islam"
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
                    href="/doua-parents-decedes-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les parents décédés
                  </Link>
                  <Link
                    href="/doua-pardon-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du pardon
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
                  </Link>
                  <Link
                    href="/doua-voyageur-safar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du voyageur
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
