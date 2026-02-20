import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";
import HadithCard from "@/components/HadithCard";

export const metadata: Metadata = {
  title:
    "Remède arabe hémorroïdes : soins naturels et médecine prophétique",
  description:
    "Découvrez les remèdes arabes contre les hémorroïdes : huile de nigelle, miel, hijama, séné, hygiène prophétique et invocations de guérison issues du Coran et de la Sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-hemorroides",
  },
};

const tocItems = [
  { id: "comprendre-hemorroides", label: "Comprendre les hémorroïdes" },
  { id: "remedes-prophetiques", label: "Remèdes prophétiques et applications locales" },
  { id: "hijama-hemorroides", label: "La hijama pour les hémorroïdes" },
  { id: "alimentation-transit", label: "Alimentation, transit et séné" },
  { id: "hygiene-sunna", label: "Hygiène selon la Sunna et invocations" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "L'huile de nigelle peut-elle soulager les hémorroïdes ?",
    answer:
      "L'huile de nigelle (habba sawda) possède des propriétés anti-inflammatoires reconnues, principalement grâce à la thymoquinone. Appliquée localement sur la zone concernée, elle peut contribuer à réduire l'inflammation et les démangeaisons. Il est recommandé de choisir une huile pressée à froid et de tester une petite quantité sur la peau avant une application plus large. Ce remède ne remplace pas un avis médical en cas de saignements abondants ou de douleurs persistantes.",
  },
  {
    question: "La hijama est-elle efficace contre les hémorroïdes ?",
    answer:
      "La hijama (ventouses humides) est mentionnée dans la Sunna comme un remède bénéfique pour de nombreux maux. Certains praticiens la recommandent pour soulager la congestion veineuse liée aux hémorroïdes, en posant les ventouses sur des points précis du bas du dos et du sacrum. Elle doit impérativement être réalisée par un praticien formé, avec du matériel stérile. En cas d'hémorroïdes sévères ou de saignements importants, il faut d'abord consulter un médecin.",
  },
  {
    question: "Le miel peut-il être appliqué sur les hémorroïdes ?",
    answer:
      "Le miel est reconnu pour ses propriétés cicatrisantes, antibactériennes et anti-inflammatoires. Certaines traditions de médecine prophétique mentionnent son application locale pour favoriser la cicatrisation des tissus. Un miel pur, non chauffé, de qualité (sidr, manuka ou miel de thym) peut être utilisé en cataplasme sur la zone affectée. Il est préférable de consulter un professionnel de santé avant toute application sur des hémorroïdes à vif ou saignantes.",
  },
  {
    question: "Le séné est-il recommandé en islam pour la constipation ?",
    answer:
      "Le séné (sana makki) est une plante laxative dont l'usage est mentionné dans des hadiths. Le Prophète Muhammad (paix et bénédictions sur lui) l'a recommandé pour ses vertus purgatives. En infusion légère, il peut aider à réguler le transit intestinal et à prévenir la constipation, facteur aggravant des hémorroïdes. Son usage doit rester ponctuel, car une consommation prolongée peut créer une accoutumance intestinale.",
  },
  {
    question: "Les dattes aident-elles à prévenir les hémorroïdes ?",
    answer:
      "Les dattes sont riches en fibres alimentaires, en potassium et en magnésium. Consommées régulièrement, elles contribuent au bon fonctionnement du transit intestinal et aident à prévenir la constipation, principale cause d'aggravation des hémorroïdes. Le Prophète (paix et bénédictions sur lui) consommait des dattes quotidiennement. Elles peuvent être intégrées au petit-déjeuner ou prises pour rompre le jeûne.",
  },
  {
    question: "Quelle invocation réciter en cas de douleur liée aux hémorroïdes ?",
    answer:
      "La tradition prophétique enseigne plusieurs invocations pour la guérison. L'une des plus connues est : 'Adhhib al-ba's, Rabb an-nas, wa-shfi Anta ash-Shafi, la shifa'a illa shifa'uk, shifa'an la yughadiru saqaman' (Ôte le mal, Seigneur des hommes, et guéris. Tu es Celui qui guérit, il n'y a de guérison que Ta guérison, une guérison qui ne laisse aucune maladie). Cette invocation, rapportée par al-Bukhari et Muslim, peut être récitée en posant la main sur la zone douloureuse.",
  },
  {
    question: "L'huile d'olive est-elle bénéfique pour les hémorroïdes ?",
    answer:
      "L'huile d'olive extra-vierge possède des vertus anti-inflammatoires et lubrifiantes. Consommée quotidiennement (une cuillère à soupe à jeun), elle favorise un transit plus fluide. En application locale, elle peut adoucir les tissus irrités et réduire l'inconfort. Le Prophète (paix et bénédictions sur lui) a recommandé de consommer l'huile d'olive et de s'en enduire, car elle provient d'un arbre béni.",
  },
  {
    question: "Quand faut-il consulter un proctologue pour des hémorroïdes ?",
    answer:
      "Il est impératif de consulter un médecin ou un proctologue si les hémorroïdes provoquent des saignements abondants ou récurrents, des douleurs intenses qui ne s'améliorent pas, une masse qui ne se résorbe pas après plusieurs jours, de la fièvre ou des signes d'infection. L'islam encourage le recours à la médecine moderne en parallèle des remèdes prophétiques. Se soigner est une responsabilité envers le corps qui nous est confié comme un dépôt (amana).",
  },
];

export default function RemedeArabeHemorroides() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-hemorroides/#article",
        headline:
          "Remède arabe hémorroïdes : soins naturels et médecine prophétique",
        description:
          "Découvrez les remèdes arabes contre les hémorroïdes : huile de nigelle, miel, hijama, séné, hygiène prophétique et invocations de guérison issues du Coran et de la Sunna.",
        image:
          "https://www.islamreligion.fr/images/remede-yeux-islam-soins.jpg",
        datePublished: "2025-10-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-arabe-hemorroides/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-hemorroides/#breadcrumb",
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
            name: "Remèdes arabes",
            item: "https://www.islamreligion.fr/remede-arabe",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Hémorroïdes",
            item: "https://www.islamreligion.fr/remede-arabe-hemorroides",
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
          title="Remède arabe hémorroïdes : soins naturels et médecine prophétique"
          subtitle="Huile de nigelle, miel, hijama, séné et hygiène prophétique pour soulager les hémorroïdes avec douceur et respect de la Sunna."
          imageSrc="/images/remede-yeux-islam-soins.jpg"
          imageAlt="Remèdes naturels et soins prophétiques en islam pour les hémorroïdes"
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
                <Link href="/remede-arabe" className="hover:text-primary">
                  Remèdes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Hémorroïdes</span>
              </nav>

              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* SECTION 1 : Comprendre les hémorroïdes */}
              {/* ============================================ */}
              <section id="comprendre-hemorroides" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre les hémorroïdes : une affection fréquente et souvent mal connue
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les hémorroïdes sont des structures vasculaires normales situées dans le canal
                  anal et autour de l&apos;anus. Tout le monde possède ces coussins veineux, qui
                  jouent un rôle dans la continence. On parle de &laquo;&nbsp;maladie
                  hémorroïdaire&nbsp;&raquo; lorsque ces veines se dilatent, s&apos;enflamment
                  ou prolapsent, provoquant douleur, démangeaisons et parfois saignements. Cette
                  affection touche une personne sur deux au cours de sa vie et n&apos;a rien de
                  honteux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La médecine distingue deux types principaux selon leur localisation :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Hémorroïdes internes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Situées à l&apos;intérieur du canal anal, au-dessus de la ligne pectinée.
                      Elles sont généralement indolores mais peuvent provoquer des saignements
                      rouge vif lors des selles. Lorsqu&apos;elles progressent, elles peuvent
                      sortir du canal anal (prolapsus) et devenir plus gênantes. On les classe
                      en quatre grades selon leur degré de prolapsus.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Hémorroïdes externes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Situées sous la peau, autour de l&apos;anus, en dessous de la ligne
                      pectinée. Elles se manifestent par un gonflement douloureux, des
                      démangeaisons et parfois une thrombose (caillot sanguin) qui forme une
                      masse dure et très sensible. Elles sont souvent plus douloureuses que
                      les hémorroïdes internes.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Facteurs favorisants
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs facteurs contribuent à l&apos;apparition ou à l&apos;aggravation de
                  la maladie hémorroïdaire. Les connaître permet de mieux les prévenir :
                </p>

                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Facteur
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Mécanisme
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Prévention
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Constipation chronique
                        </td>
                        <td className="py-3 pr-4">
                          Efforts de poussée excessifs qui dilatent les veines
                        </td>
                        <td className="py-3">
                          Alimentation riche en fibres, hydratation suffisante
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sédentarité prolongée
                        </td>
                        <td className="py-3 pr-4">
                          Station assise longue qui favorise la congestion pelvienne
                        </td>
                        <td className="py-3">
                          Se lever régulièrement, marcher chaque jour
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Grossesse et accouchement
                        </td>
                        <td className="py-3 pr-4">
                          Pression du fœtus sur les veines pelviennes
                        </td>
                        <td className="py-3">
                          Exercices doux, alimentation adaptée
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Alimentation pauvre en fibres
                        </td>
                        <td className="py-3 pr-4">
                          Selles dures et difficiles à évacuer
                        </td>
                        <td className="py-3">
                          Dattes, légumes, fruits, céréales complètes
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Port de charges lourdes
                        </td>
                        <td className="py-3 pr-4">
                          Augmentation de la pression abdominale
                        </td>
                        <td className="py-3">
                          Techniques de levage appropriées, renforcement du plancher pelvien
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La maladie hémorroïdaire n&apos;est pas un sujet aisé à aborder. Pourtant,
                  le Prophète Muhammad ﷺ n&apos;a jamais hésité à parler de santé, y compris
                  des sujets intimes, afin de préserver le bien-être de sa communauté. L&apos;
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>{" "}
                  considère le corps comme un dépôt (<em>amana</em>) confié par Dieu, et en
                  prendre soin est un acte de foi.
                </p>

                <HadithCard
                  arabic="تَدَاوَوْا عِبَادَ اللَّهِ فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً"
                  text="Soignez-vous, serviteurs de Dieu, car Dieu n'a pas créé de maladie sans avoir créé son remède."
                  source="Hadith rapporté par Abu Dawud et at-Tirmidhi"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rassure le croyant : chaque mal a son remède, et la recherche de
                  soins est non seulement permise mais encouragée. La{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    médecine prophétique
                  </Link>{" "}
                  offre un ensemble de remèdes naturels qui, associés à la médecine moderne,
                  peuvent apporter un soulagement significatif.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
                    alt="Dattes, chapelet et Coran, symboles de la médecine prophétique en islam"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Remèdes prophétiques */}
              {/* ============================================ */}
              <section id="remedes-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remèdes prophétiques et applications locales contre les hémorroïdes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La Sunna du Prophète ﷺ mentionne plusieurs substances naturelles aux
                  propriétés anti-inflammatoires, cicatrisantes et apaisantes. Ces remèdes,
                  utilisés depuis des siècles dans la tradition arabo-musulmane, peuvent être
                  appliqués localement pour soulager l&apos;inconfort causé par les hémorroïdes.
                </p>

                {/* Huile de nigelle */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile de nigelle (<em>habba sawda</em>) en application locale
                  </h3>

                  <HadithCard
                    arabic="عَلَيْكُمْ بِهَذِهِ الْحَبَّةِ السَّوْدَاءِ فَإِنَّ فِيهَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ"
                    text="Utilisez cette graine noire, car elle contient un remède contre toute maladie, sauf la mort."
                    source="Hadith rapporté par al-Bukhari et Muslim"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    La graine de nigelle (<em>Nigella sativa</em>) est le remède prophétique
                    le plus largement cité. Son composé actif principal, la thymoquinone, possède
                    des propriétés anti-inflammatoires, antioxydantes et analgésiques confirmées
                    par la recherche scientifique moderne. Pour les hémorroïdes, l&apos;huile de
                    nigelle s&apos;utilise principalement en application locale.
                  </p>

                  <h4 className="mt-4 font-semibold text-primary">Mode d&apos;emploi</h4>
                  <ul className="mt-2 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Imbiber un coton propre de quelques gouttes d&apos;huile de nigelle
                        pressée à froid
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Appliquer délicatement sur la zone affectée après la toilette intime
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Renouveler deux à trois fois par jour, notamment après chaque passage
                        aux toilettes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Possibilité de mélanger l&apos;huile de nigelle avec du miel pur pour
                        renforcer l&apos;effet cicatrisant
                      </span>
                    </li>
                  </ul>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Précaution :</strong> effectuer un test cutané préalable sur une
                    petite zone de peau (avant-bras) pour vérifier l&apos;absence de réaction
                    allergique. En cas d&apos;irritation, cesser l&apos;application et consulter
                    un professionnel de santé.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : cicatrisant et apaisant
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Coran présente le miel comme porteur de guérison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux couleurs variées, dans
                    laquelle il y a une guérison pour les gens&nbsp;&raquo; (sourate An-Nahl,
                    verset 69). Les propriétés antibactériennes, anti-inflammatoires et
                    cicatrisantes du miel sont aujourd&apos;hui largement documentées par la
                    médecine moderne. Certains centres hospitaliers utilisent même des
                    pansements au miel médical (miel de manuka) pour la cicatrisation des plaies.
                  </p>

                  <h4 className="mt-4 font-semibold text-primary">
                    Application pour les hémorroïdes
                  </h4>
                  <ul className="mt-2 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Appliquer une fine couche de miel pur (non pasteurisé) sur la zone
                        enflammée, de préférence le soir avant le coucher
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Les variétés les plus réputées en médecine prophétique : miel de
                        jujubier (<em>sidr</em>), miel de thym, miel de manuka
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Possibilité d&apos;associer le miel à l&apos;huile de nigelle pour un
                        cataplasme combinant les bienfaits des deux remèdes
                      </span>
                    </li>
                  </ul>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Précaution :</strong> ne pas appliquer de miel sur des hémorroïdes
                    ouvertes et saignantes sans avis médical. Privilégier un miel certifié pur,
                    non chauffé et de source fiable.
                  </p>
                </div>

                {/* Huile d'olive */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile d&apos;olive : lubrifiante et protectrice
                  </h3>

                  <HadithCard
                    arabic="كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ شَجَرَةٍ مُبَارَكَةٍ"
                    text="Mangez de l'huile d'olive et enduisez-vous-en, car elle provient d'un arbre béni."
                    source="Hadith rapporté par at-Tirmidhi et Ibn Majah"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    L&apos;huile d&apos;olive extra-vierge agit à deux niveaux contre les
                    hémorroïdes. En usage interne (une cuillère à soupe à jeun chaque matin),
                    elle lubrifie le tube digestif et facilite le transit. En application externe,
                    elle adoucit les tissus irrités grâce à ses acides gras mono-insaturés et
                    ses polyphénols anti-inflammatoires.
                  </p>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Conseil pratique :</strong> mélanger à parts égales huile d&apos;olive
                    extra-vierge et huile de nigelle pour obtenir un baume naturel à appliquer
                    localement après chaque toilette intime.
                  </p>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour découvrir tous les remèdes prophétiques et leurs usages"
                  href="/remede-arabe"
                  linkText="Voir la page complète des remèdes arabes"
                />

                {/* Tableau comparatif des remèdes */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Comparatif des remèdes prophétiques pour les hémorroïdes
                </h3>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Remède
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Propriétés principales
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Mode d&apos;utilisation
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source prophétique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile de nigelle
                        </td>
                        <td className="py-3 pr-4">
                          Anti-inflammatoire, antioxydante, analgésique
                        </td>
                        <td className="py-3 pr-4">
                          Application locale 2-3 fois/jour
                        </td>
                        <td className="py-3">
                          Al-Bukhari, Muslim
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel pur
                        </td>
                        <td className="py-3 pr-4">
                          Cicatrisant, antibactérien, anti-inflammatoire
                        </td>
                        <td className="py-3 pr-4">
                          Cataplasme local le soir
                        </td>
                        <td className="py-3">
                          Coran (An-Nahl, 69)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="py-3 pr-4">
                          Lubrifiante, adoucissante, anti-inflammatoire
                        </td>
                        <td className="py-3 pr-4">
                          Ingestion à jeun + application locale
                        </td>
                        <td className="py-3">
                          At-Tirmidhi, Ibn Majah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Séné (<em>sana makki</em>)
                        </td>
                        <td className="py-3 pr-4">
                          Laxatif, purgatif, régulateur du transit
                        </td>
                        <td className="py-3 pr-4">
                          Infusion ponctuelle
                        </td>
                        <td className="py-3">
                          At-Tirmidhi, Ibn Majah
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dattes
                        </td>
                        <td className="py-3 pr-4">
                          Riches en fibres, prévention de la constipation
                        </td>
                        <td className="py-3 pr-4">
                          Consommation quotidienne (3-7 par jour)
                        </td>
                        <td className="py-3">
                          Al-Bukhari, Muslim
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : La hijama */}
              {/* ============================================ */}
              <section id="hijama-hemorroides" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La hijama pour les hémorroïdes : ventouses et points spécifiques
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La hijama (ventouses humides) occupe une place particulière dans la médecine
                  prophétique. Le Prophète ﷺ l&apos;a pratiquée lui-même et l&apos;a
                  recommandée avec insistance :
                </p>

                <HadithCard
                  arabic="إِنَّ أَمْثَلَ مَا تَدَاوَيْتُمْ بِهِ الْحِجَامَةُ"
                  text="Le meilleur de vos remèdes est la hijama."
                  source="Hadith rapporté par al-Bukhari"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La hijama consiste à poser des ventouses sur des points précis du corps, puis
                  à pratiquer de légères incisions superficielles pour extraire une petite
                  quantité de sang. Cette technique ancestrale vise à améliorer la circulation
                  sanguine, à réduire la congestion veineuse et à stimuler les mécanismes
                  naturels de réparation du corps.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Points de hijama recommandés pour les hémorroïdes
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les praticiens de hijama spécialisés recommandent plusieurs points qui ciblent
                  la circulation pelvienne et le système digestif :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Point al-kahil (entre les omoplates)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Situé au sommet du dos, entre les deux omoplates. C&apos;est le point
                        principal de la hijama prophétique, mentionné dans plusieurs hadiths.
                        Il est considéré comme bénéfique pour la circulation générale et le
                        système veineux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Points lombaires (bas du dos)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Situés de part et d&apos;autre de la colonne vertébrale au niveau
                        lombaire. Ces points visent à décongestionner la zone pelvienne et
                        à soulager la pression sur les veines hémorroïdaires.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Point sacré (sacrum)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Situé au niveau du sacrum, en bas de la colonne vertébrale. Ce point
                        cible directement la région périnéale et les plexus veineux
                        hémorroïdaires. Il est souvent le point le plus efficace pour ce type
                        de trouble.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Points des jambes (mollets)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Des ventouses sur les mollets peuvent favoriser le retour veineux et
                        diminuer la stagnation sanguine dans la partie inférieure du corps,
                        contribuant ainsi à soulager la pression sur les hémorroïdes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
                  <div className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-amber-800">
                        Précautions pour la hijama
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        La hijama doit être pratiquée par un praticien qualifié et expérimenté,
                        dans un environnement stérile avec du matériel à usage unique. Elle
                        est contre-indiquée en cas de troubles de la coagulation, de prise
                        d&apos;anticoagulants, d&apos;anémie sévère et de grossesse. En cas
                        d&apos;hémorroïdes saignantes ou thrombosées, consulter un médecin
                        avant toute séance de hijama.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/coran-ouvert-chapelet-bois-islam-versets.jpg"
                    alt="Coran ouvert avec chapelet de bois, symboles de la guérison spirituelle en islam"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Sorcellerie en islam : protection et invocations puissantes"
                  description="Découvrez les protections spirituelles issues de la Sunna et du Coran."
                  href="/sorcellerie-islam-protection"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Alimentation et transit */}
              {/* ============================================ */}
              <section id="alimentation-transit" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Alimentation, transit et séné : prévenir les crises par la Sunna
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La constipation est le premier facteur aggravant des hémorroïdes. La tradition
                  prophétique accorde une grande importance à l&apos;alimentation et au bon
                  fonctionnement du transit intestinal. Plusieurs aliments et remèdes issus de
                  la Sunna contribuent directement à prévenir et à soulager les crises.
                </p>

                {/* Le séné */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le séné (<em>sana makki</em>) : le laxatif prophétique
                  </h3>

                  <HadithCard
                    arabic="عَلَيْكُمْ بِالسَّنَا وَالسَّنُوتِ فَإِنَّ فِيهِمَا شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ"
                    text="Utilisez le séné et le sannut, car ils contiennent un remède contre toute maladie, sauf la mort."
                    source="Hadith rapporté par Ibn Majah et al-Hakim"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le séné (<em>Senna alexandrina</em>) est une plante dont les feuilles et les
                    gousses sont utilisées comme laxatif stimulant. Son action repose sur les
                    sennosides, des composés qui stimulent les contractions intestinales et
                    favorisent l&apos;évacuation des selles. Pour les personnes souffrant
                    d&apos;hémorroïdes, le séné permet d&apos;éviter les efforts de poussée
                    excessifs qui aggravent la congestion veineuse.
                  </p>

                  <h4 className="mt-4 font-semibold text-primary">
                    Préparation de l&apos;infusion de séné
                  </h4>
                  <ul className="mt-2 space-y-2 text-foreground-secondary">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Placer une demi-cuillère à café de feuilles de séné séchées dans
                        une tasse
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Verser de l&apos;eau chaude (non bouillante) et laisser infuser
                        10 minutes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Filtrer et boire le soir avant le coucher, en ajoutant une cuillère
                        de miel pour adoucir le goût
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                      <span>
                        Ne pas dépasser 2 à 3 prises par semaine et limiter l&apos;usage à
                        quelques jours consécutifs
                      </span>
                    </li>
                  </ul>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Attention :</strong> le séné ne doit pas être utilisé de manière
                    prolongée, car il peut provoquer une accoutumance intestinale et des
                    déséquilibres électrolytiques. Il est déconseillé aux femmes enceintes,
                    aux enfants de moins de 12 ans et aux personnes souffrant de maladies
                    inflammatoires intestinales.
                  </p>
                </div>

                {/* Les dattes */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Les dattes : fibres naturelles et prévention
                  </h3>

                  <HadithCard
                    arabic="مَنْ تَصَبَّحَ بِسَبْعِ تَمَرَاتٍ عَجْوَةٍ لَمْ يَضُرَّهُ ذَلِكَ الْيَوْمَ سُمٌّ وَلَا سِحْرٌ"
                    text="Celui qui mange le matin sept dattes 'ajwa, ni le poison ni la sorcellerie ne lui nuiront ce jour-là."
                    source="Hadith rapporté par al-Bukhari et Muslim"
                  />

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Au-delà de leur dimension spirituelle, les dattes sont un allié de premier
                    plan pour la santé digestive. Une portion de 100 grammes de dattes contient
                    environ 7 grammes de fibres alimentaires, soit près du quart des apports
                    journaliers recommandés. Ces fibres augmentent le volume des selles et
                    facilitent leur passage, réduisant ainsi la pression sur les veines
                    hémorroïdaires.
                  </p>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Conseil :</strong> intégrer 3 à 7 dattes par jour dans
                    l&apos;alimentation, de préférence le matin au petit-déjeuner ou pour
                    rompre le jeûne. Les variétés ajwa, medjool et deglet nour sont
                    particulièrement riches en fibres et en minéraux.
                  </p>
                </div>

                {/* Alimentation prophétique */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Une alimentation riche en fibres selon la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition prophétique prône la modération alimentaire et la diversité. Le
                  Prophète ﷺ ne remplissait jamais son estomac entièrement et recommandait de
                  le diviser en trois parts : un tiers pour la nourriture, un tiers pour la
                  boisson et un tiers pour l&apos;air. Cette règle de modération contribue
                  directement à la santé digestive.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">Talbina (bouillie d&apos;orge)</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Riche en fibres solubles, elle facilite le transit et apaise
                      l&apos;estomac. Le Prophète ﷺ la recommandait pour le malade.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">Figues et olives</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Mentionnées dans la sourate At-Tin. Les figues sont très riches
                      en fibres et favorisent un transit régulier.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">Eau en quantité suffisante</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      L&apos;hydratation est primordiale pour ramollir les selles. Le Prophète ﷺ
                      buvait de l&apos;eau en trois gorgées et recommandait de ne pas négliger
                      la boisson.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">Légumineuses et céréales complètes</p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Lentilles, pois chiches, pain complet : ces aliments riches en fibres
                      insolubles augmentent le volume fécal et préviennent la constipation.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La recherche de la guérison passe aussi par l&apos;alimentation. La{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    médecine prophétique
                  </Link>{" "}
                  ne sépare pas le remède de la prévention : nourrir son corps de manière saine
                  est déjà un acte de soin et de reconnaissance envers le Créateur.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Hygiène et invocations */}
              {/* ============================================ */}
              <section id="hygiene-sunna" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Hygiène selon la Sunna, invocations de guérison et avis médical
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;hygiène intime occupe une place centrale dans la Sunna. Les
                  enseignements prophétiques sur la propreté s&apos;avèrent particulièrement
                  pertinents pour les personnes souffrant d&apos;hémorroïdes, car une hygiène
                  adaptée réduit l&apos;irritation et favorise la cicatrisation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;istinja : la toilette intime à l&apos;eau
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;istinja désigne le nettoyage des parties intimes à l&apos;eau après
                  chaque passage aux toilettes. Cette pratique, recommandée par le Prophète ﷺ,
                  est particulièrement bénéfique pour les personnes souffrant d&apos;hémorroïdes.
                  L&apos;eau nettoie en douceur, sans l&apos;abrasion du papier toilette qui
                  peut irriter et aggraver les lésions.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Utiliser de l&apos;eau tiède pour le nettoyage, ce qui apaise les
                      tissus enflammés
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Sécher délicatement la zone en tamponnant avec un linge propre
                      et doux, sans frotter
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Utiliser la main gauche pour la toilette intime, comme enseigné
                      dans la Sunna
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Envisager l&apos;installation d&apos;un bidet ou d&apos;un jet
                      d&apos;eau (<em>shattaf</em>) aux toilettes pour faciliter la
                      pratique de l&apos;istinja
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Les bains de siège : un remède ancestral
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les bains de siège à l&apos;eau tiède constituent un remède simple et efficace,
                  compatible avec l&apos;attention que l&apos;islam porte à la propreté. Ils
                  favorisent la décongestion veineuse, soulagent la douleur et nettoient la
                  zone en douceur.
                </p>

                <ul className="mt-4 space-y-2 text-foreground-secondary">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      S&apos;asseoir dans une bassine d&apos;eau tiède (ni trop chaude, ni
                      froide) pendant 10 à 15 minutes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Renouveler 2 à 3 fois par jour, surtout après les selles
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Possibilité d&apos;ajouter une cuillère de miel ou quelques gouttes
                      d&apos;huile d&apos;olive à l&apos;eau pour un effet apaisant
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Invocations de guérison (<em>du&apos;a</em>)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La dimension spirituelle de la guérison est au cœur de la foi musulmane. Le{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  est lui-même une guérison :
                  &laquo;&nbsp;Nous faisons descendre du Coran ce qui est une guérison et une
                  miséricorde pour les croyants&nbsp;&raquo; (sourate Al-Isra, verset 82).
                  Le Prophète ﷺ a enseigné des invocations à réciter en cas de maladie :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Ôte le mal, Seigneur des hommes, et guéris. Tu es Celui qui
                      guérit, il n&apos;y a de guérison que Ta guérison, une guérison qui ne
                      laisse aucune maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari et Muslim. Le Prophète ﷺ posait sa main sur
                      l&apos;endroit douloureux en récitant cette invocation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Au nom de Dieu, avec le nom duquel rien ne peut nuire
                      sur terre ni au ciel, et Il est l&apos;Audient,
                      l&apos;Omniscient.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par Abu Dawud et at-Tirmidhi. À réciter trois fois le matin
                      et trois fois le soir pour la protection globale.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La récitation régulière de ces invocations, associée aux{" "}
                  <Link
                    href="/reves-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    adhkar quotidiens
                  </Link>
                  , renforce la confiance du croyant en la miséricorde divine et apporte une
                  sérénité qui contribue au processus de guérison. Le Prophète ﷺ enseignait
                  que la sérénité du cœur a un effet direct sur la santé du corps.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Quand consulter un proctologue
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les remèdes prophétiques sont un complément précieux, mais ils ne remplacent
                  pas la médecine moderne. L&apos;islam encourage le recours aux médecins et
                  aux spécialistes. Il faut consulter sans tarder dans les situations suivantes :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Saignements abondants ou récurrents</strong> : un saignement
                      rectal peut avoir d&apos;autres causes que les hémorroïdes (fissure
                      anale, polype, pathologie plus sérieuse). Seul un examen médical
                      permet d&apos;établir un diagnostic fiable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Douleur intense et persistante</strong> : une thrombose
                      hémorroïdaire (caillot) nécessite parfois une incision médicale pour
                      soulager la douleur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prolapsus qui ne se résorbe pas</strong> : des hémorroïdes
                      internes qui sortent et ne rentrent plus nécessitent un avis
                      spécialisé (possibilité de ligature élastique ou de chirurgie).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Fièvre ou signes d&apos;infection</strong> : tout signe
                      infectieux (rougeur étendue, chaleur, fièvre) nécessite une prise en
                      charge médicale rapide.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Se soigner est une responsabilité envers le corps qui nous est confié. Le
                  Prophète ﷺ a dit : &laquo;&nbsp;Soignez-vous, serviteurs de Dieu, car Dieu
                  n&apos;a pas créé de maladie sans avoir créé son remède&nbsp;&raquo;. Cela
                  inclut le recours à la médecine moderne, qui fait partie des moyens que Dieu
                  a mis à disposition de l&apos;humanité.
                </p>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Signification selon la situation de la personne
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;approche des remèdes prophétiques pour les hémorroïdes peut varier
                  selon la situation personnelle. Voici quelques orientations adaptées :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les hémorroïdes sont fréquentes pendant la grossesse. L&apos;huile
                      d&apos;olive en application locale et les bains de siège sont les
                      remèdes les plus sûrs. Le séné est déconseillé durant la grossesse.
                      Les dattes sont particulièrement recommandées, le Coran les
                      mentionnant pour faciliter l&apos;accouchement (sourate Maryam, 25).
                      Consulter votre médecin avant tout remède.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne âgée
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La fragilité veineuse augmente avec l&apos;âge. Privilégier une
                      alimentation riche en fibres, une hydratation abondante et
                      l&apos;application locale de miel et d&apos;huile d&apos;olive.
                      Vérifier les interactions avec les traitements en cours avant
                      de prendre du séné ou de l&apos;huile de nigelle par voie orale.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour un travailleur sédentaire
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La station assise prolongée est un facteur aggravant majeur. Les cinq
                      prières quotidiennes (<em>salat</em>), avec leurs mouvements de
                      prosternation et de redressement, constituent un exercice régulier
                      qui favorise la circulation. Se lever toutes les heures et marcher
                      quelques minutes fait partie de la prévention.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pendant le Ramadan
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le jeûne peut aggraver la déshydratation et la constipation. Bien
                      s&apos;hydrater au moment de l&apos;iftar et du suhur, rompre le
                      jeûne avec des dattes (riche en fibres), et consommer des soupes
                      et des légumes. L&apos;huile d&apos;olive à jeun (au suhur) aide
                      à lubrifier le transit.
                    </p>
                  </div>
                </div>

                <MedicalDisclaimer />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation silo remede-arabe */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Remèdes arabes et médecine prophétique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les remèdes arabes
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie : protection et invocations
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêves en islam
                  </Link>
                  <Link
                    href="/apprendre-le-coran"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre le Coran
                  </Link>
                </div>
              </section>

              {/* Navigation vers page mere */}
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
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Remèdes et médecine prophétique
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La langue arabe
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
