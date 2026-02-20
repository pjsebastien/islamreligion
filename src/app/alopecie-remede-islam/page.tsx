import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import MedicalDisclaimer from "@/components/MedicalDisclaimer";

export const metadata: Metadata = {
  title:
    "Alopécie remède islam : traitements naturels et médecine prophétique",
  description:
    "Découvrez les remèdes islamiques contre l\u2019alopécie : huile de nigelle, henné, miel, huile d\u2019olive et invocations de guérison. Médecine prophétique, alimentation selon la Sunna et soutien spirituel face à la chute de cheveux.",
  alternates: {
    canonical: "https://www.islamreligion.fr/alopecie-remede-islam",
  },
};

const tocItems = [
  { id: "comprendre-alopecie", label: "Comprendre l\u2019alopécie et ses formes" },
  { id: "remedes-prophetiques", label: "Remèdes prophétiques pour les cheveux" },
  { id: "alimentation-sunna", label: "Alimentation selon la Sunna" },
  { id: "invocations-guerison", label: "Invocations et soutien spirituel" },
  { id: "consulter-dermatologue", label: "Quand consulter un dermatologue" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "L\u2019huile de nigelle peut-elle vraiment faire repousser les cheveux ?",
    answer:
      "L\u2019huile de nigelle (habba sawda\u2019) possède des propriétés anti-inflammatoires et antioxydantes confirmées par plusieurs études. Appliquée régulièrement sur le cuir chevelu, elle peut aider à réduire la chute et stimuler la repousse. Le Prophète \uFDFA a dit qu\u2019elle est « un remède contre toute maladie, sauf la mort » (Sahih al-Bukhari, n\u00B0 5688). Toutefois, les résultats varient selon le type d\u2019alopécie et il est conseillé de consulter un dermatologue en parallèle.",
  },
  {
    question:
      "Le henné est-il recommandé en islam pour les cheveux ?",
    answer:
      "Le henné est mentionné dans plusieurs hadiths. Le Prophète \uFDFA encourageait la teinture au henné et au katam. En plus de ses propriétés colorantes, le henné renforce la fibre capillaire, assainit le cuir chevelu et apporte volume et brillance. C\u2019est un soin naturel halal par excellence, utilisé depuis des siècles dans la tradition musulmane.",
  },
  {
    question:
      "Quelle invocation réciter pour la guérison de l\u2019alopécie ?",
    answer:
      "Plusieurs invocations sont recommandées pour la guérison en général. L\u2019une des plus connues est : « Allahoumma Rabb an-nâs, adh-hib al-ba\u2019s, ishfi anta ash-Shâfi, lâ shifâ\u2019a illa shifâ\u2019ouka, shifâ\u2019an lâ youghâdirou saqaman » (Sahih al-Bukhari, n\u00B0 5742). Le croyant est invité à multiplier les doua avec sincérité et confiance en Allah, tout en se soignant par les moyens licites.",
  },
  {
    question:
      "La hijama (ventouses) aide-t-elle contre la chute de cheveux ?",
    answer:
      "La hijama améliore la circulation sanguine dans le cuir chevelu, ce qui peut favoriser l\u2019apport de nutriments aux follicules pileux. Le Prophète \uFDFA a recommandé la hijama comme remède prophétique bénéfique. Elle doit être pratiquée par un professionnel qualifié, dans des conditions d\u2019hygiène strictes, et en complément d\u2019un suivi médical si la chute est importante.",
  },
  {
    question:
      "L\u2019alimentation selon la Sunna peut-elle prévenir l\u2019alopécie ?",
    answer:
      "Une alimentation saine contribue à la santé capillaire. Les aliments recommandés par la Sunna, tels que les dattes, le miel, l\u2019huile d\u2019olive, l\u2019orge (talbina) et les légumineuses, apportent des vitamines, minéraux et acides gras bénéfiques pour les cheveux. Combiner ces aliments avec un mode de vie équilibré et une bonne hydratation constitue une approche préventive intéressante.",
  },
  {
    question:
      "L\u2019alopécie est-elle une épreuve selon l\u2019islam ?",
    answer:
      "En islam, toute maladie est considérée comme une épreuve (ibtila\u2019) par laquelle Allah purifie Ses serviteurs et élève leur rang. Le Prophète \uFDFA a dit : « Aucune fatigue, maladie ou chagrin n\u2019atteint le musulman sans qu\u2019Allah ne lui efface par cela une partie de ses péchés » (Sahih al-Bukhari, n\u00B0 5641). La patience (sabr) et la confiance en le décret divin (qadar) sont les piliers de l\u2019acceptation.",
  },
  {
    question:
      "Peut-on combiner médecine prophétique et traitements dermatologiques ?",
    answer:
      "Oui, et c\u2019est même recommandé. L\u2019islam encourage de se soigner par tous les moyens licites. La médecine prophétique (huile de nigelle, henné, miel) peut être utilisée en complément des traitements prescrits par un dermatologue (minoxidil, finastéride, PRP). Informez toujours votre médecin des produits naturels que vous utilisez pour éviter les interactions.",
  },
  {
    question:
      "Le stress spirituel peut-il aggraver la chute de cheveux ?",
    answer:
      "Le stress, y compris le stress émotionnel et spirituel, est un facteur reconnu d\u2019alopécie (effluvium télogène). L\u2019islam propose des outils concrets pour gérer le stress : la prière (salat), le dhikr, la lecture du Coran et la confiance en Allah. Ces pratiques contribuent à l\u2019apaisement intérieur et peuvent indirectement améliorer la santé capillaire en réduisant le cortisol.",
  },
];

export default function AlopecieRemedeIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/alopecie-remede-islam/#article",
        headline:
          "Alopécie remède islam : traitements naturels et médecine prophétique",
        description:
          "Découvrez les remèdes islamiques contre l\u2019alopécie : huile de nigelle, henné, miel, huile d\u2019olive et invocations de guérison. Médecine prophétique et soutien spirituel face à la chute de cheveux.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Alopecie-remede-islam-traitements-naturels-et-invocations-de-guerison-1.jpg",
        datePublished: "2025-09-01",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/alopecie-remede-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/alopecie-remede-islam/#breadcrumb",
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
            name: "Alopécie",
            item: "https://www.islamreligion.fr/alopecie-remede-islam",
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
        {/* ============================================ */}
        {/* HERO COMPACT */}
        {/* ============================================ */}
        <Hero
          title="Alopécie remède islam : traitements naturels et médecine prophétique"
          subtitle="Huile de nigelle, henné, miel, invocations de guérison et alimentation selon la Sunna pour prendre soin de vos cheveux."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Alopecie-remede-islam-traitements-naturels-et-invocations-de-guerison-1.jpg"
          imageAlt="Alopécie remède islam, traitements naturels et médecine prophétique pour la santé des cheveux"
          compact
        />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12 xl:grid-cols-[300px_1fr]">
            {/* ============================================ */}
            {/* SIDEBAR TOC */}
            {/* ============================================ */}
            <aside className="hidden lg:block">
              <TableOfContents items={tocItems} />
            </aside>

            <article className="max-w-3xl">
              {/* TOC mobile */}
              <div className="lg:hidden">
                <TableOfContents items={tocItems} />
              </div>

              {/* ============================================ */}
              {/* FIL D&apos;ARIANE */}
              {/* ============================================ */}
              <nav
                className="mb-8 text-sm text-foreground-secondary"
                aria-label="Fil d&apos;Ariane"
              >
                <Link href="/" className="hover:text-primary">
                  Accueil
                </Link>
                <span className="mx-2">/</span>
                <Link href="/remede-arabe" className="hover:text-primary">
                  Remèdes arabes
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Alopécie</span>
              </nav>

              {/* ============================================ */}
              {/* AVERTISSEMENT MEDICAL */}
              {/* ============================================ */}
              <MedicalDisclaimer />

              {/* ============================================ */}
              {/* RESUME RAPIDE */}
              {/* ============================================ */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La chute de cheveux touche des millions de personnes et peut devenir
                  une source d&apos;inquiétude légitime. La tradition islamique, riche
                  en{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    remèdes naturels prophétiques
                  </Link>
                  , propose des soins à base d&apos;huile de nigelle, de henné, de
                  miel et d&apos;huile d&apos;olive, associés à des invocations de
                  guérison et un soutien spirituel fondé sur la patience et la
                  confiance en Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Comprendre l&apos;alopécie */}
              {/* ============================================ */}
              <section id="comprendre-alopecie" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre l&apos;alopécie : formes, causes et regard
                  islamique sur la perte de cheveux
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;alopécie désigne toute forme de perte de cheveux anormale.
                  Elle peut être progressive, soudaine ou localisée. Avant de
                  chercher un remède, il est utile de comprendre les différentes
                  formes de ce trouble pour adapter la prise en charge de manière
                  pertinente et responsable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En islam, les cheveux sont considérés comme une bénédiction
                  (ni&apos;ma) d&apos;Allah. Le Prophète &#xFDFA; accordait de
                  l&apos;importance au soin de la chevelure et de la barbe. Il a
                  dit : « Celui qui a des cheveux, qu&apos;il les honore » (Sunan
                  Abu Dawud, n&deg; 4163). Prendre soin de ses cheveux n&apos;est
                  donc pas une question de vanité, mais un acte de reconnaissance
                  envers le Créateur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les principales formes d&apos;alopécie
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Chaque type d&apos;alopécie possède ses propres mécanismes et
                  ses réponses thérapeutiques. Voici un aperçu des formes les
                  plus fréquentes, avec leurs caractéristiques et les approches
                  naturelles qui peuvent les accompagner.
                </p>

                {/* Tableau 1 : Types d&apos;alopécie */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type d&apos;alopécie
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Caractéristiques
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Causes principales
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Approche naturelle possible
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Androgénétique
                        </td>
                        <td className="py-3 pr-4">
                          Perte progressive, dégarnissement des tempes et du
                          vertex chez l&apos;homme, amincissement diffus chez la
                          femme
                        </td>
                        <td className="py-3 pr-4">
                          Facteur hormonal (DHT), prédisposition génétique
                        </td>
                        <td className="py-3">
                          Huile de nigelle, huile de ricin, alimentation riche en
                          zinc
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Pelade (alopecia areata)
                        </td>
                        <td className="py-3 pr-4">
                          Plaques rondes sans cheveux, apparition soudaine
                        </td>
                        <td className="py-3 pr-4">
                          Maladie auto-immune, stress, facteurs génétiques
                        </td>
                        <td className="py-3">
                          Henné, miel, invocations, gestion du stress par le
                          dhikr
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Effluvium télogène
                        </td>
                        <td className="py-3 pr-4">
                          Chute diffuse et brutale, souvent réversible
                        </td>
                        <td className="py-3 pr-4">
                          Stress intense, post-partum, carence nutritionnelle,
                          choc émotionnel
                        </td>
                        <td className="py-3">
                          Talbina, dattes, huile d&apos;olive, repos et prière
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Alopécie de traction
                        </td>
                        <td className="py-3 pr-4">
                          Recul de la ligne frontale, zones fragilisées
                        </td>
                        <td className="py-3 pr-4">
                          Coiffures serrées, extensions, hijab trop serré
                        </td>
                        <td className="py-3">
                          Relâcher les coiffures, huile d&apos;olive, massage du
                          cuir chevelu
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Alopécie cicatricielle
                        </td>
                        <td className="py-3 pr-4">
                          Destruction définitive des follicules, zones lisses
                        </td>
                        <td className="py-3 pr-4">
                          Infection, lupus, lichen plan, brûlure
                        </td>
                        <td className="py-3">
                          Consultation médicale impérative, accompagnement
                          spirituel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Le rasage de la tête dans la tradition prophétique
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le rasage de la tête occupe une place particulière dans la
                  Sunna. Lors du pèlerinage (Hajj et Omra), le rasage (halq)
                  est un rite recommandé, considéré comme un acte
                  d&apos;humilité et de soumission à Allah. Le Prophète &#xFDFA;
                  a invoqué trois fois la miséricorde d&apos;Allah sur ceux qui
                  se rasaient la tête lors du pèlerinage (Sahih al-Bukhari,
                  n&deg; 1727).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour les nouveau-nés, le Prophète &#xFDFA; recommandait de
                  raser la tête du bébé au septième jour et de donner en aumône
                  le poids des cheveux en argent (Sunan at-Tirmidhi,
                  n&deg; 1519). Ces pratiques montrent que le cheveu, dans la
                  tradition islamique, est bien plus qu&apos;un simple élément
                  esthétique : il est lié à des actes d&apos;adoration et de
                  purification.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pendant le Hajj et la Omra</strong> : le rasage
                      (halq) ou le raccourcissement (taqsir) marque la sortie
                      de l&apos;état de sacralisation (ihram).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pour le nouveau-né (aqiqa)</strong> : le rasage
                      au septième jour purifie symboliquement et ouvre la voie
                      à une pousse saine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le soin quotidien</strong> : le Prophète &#xFDFA;
                      se peignait les cheveux et les huilait régulièrement,
                      montrant l&apos;importance de l&apos;entretien capillaire
                      dans la Sunna.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Alopecie-remede-islam-traitements-naturels-et-invocations-de-guerison-1.jpg"
                    alt="Comprendre l&apos;alopécie et la chute de cheveux en islam, types et remèdes naturels"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Remèdes prophétiques */}
              {/* ============================================ */}
              <section id="remedes-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Remèdes prophétiques pour la santé des cheveux : nigelle,
                  henné, miel et huile d&apos;olive
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    médecine prophétique
                  </Link>{" "}
                  offre un ensemble de remèdes naturels dont les bienfaits
                  capillaires sont reconnus à la fois par la tradition islamique
                  et par la recherche scientifique contemporaine. Chaque remède
                  apporte des propriétés spécifiques pour nourrir, protéger et
                  revitaliser les cheveux.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Huile de nigelle (habba sawda&apos;)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La graine de nigelle occupe une place de premier rang dans la
                  pharmacopée prophétique. Le Prophète &#xFDFA; a dit :
                  « Utilisez la graine de nigelle, car elle contient un remède
                  contre toute maladie, sauf la mort » (Sahih al-Bukhari,
                  n&deg; 5688). Sur le plan capillaire, l&apos;huile de nigelle
                  est riche en thymoquinone, un composé aux propriétés
                  anti-inflammatoires et antioxydantes puissantes.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Application locale</strong> : masser le cuir
                      chevelu avec quelques gouttes d&apos;huile de nigelle
                      pure, laisser poser 30 minutes à 1 heure avant le
                      shampooing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Voie interne</strong> : une cuillère à café
                      d&apos;huile de nigelle à jeun, pure ou mélangée à du
                      miel, pour un effet systémique sur l&apos;inflammation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Synergie</strong> : mélangée à l&apos;huile
                      d&apos;olive, elle combine anti-inflammation et nutrition
                      profonde de la fibre capillaire.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Henné (hinna&apos;)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le henné est l&apos;un des soins capillaires les plus anciens
                  et les plus appréciés dans la culture islamique. Le Prophète
                  &#xFDFA; a encouragé son utilisation pour la teinture des
                  cheveux et de la barbe. Anas ibn Malik rapporte que Abu Bakr
                  as-Siddiq (qu&apos;Allah l&apos;agrée) se teignait les cheveux
                  au henné et au katam (Sahih Muslim, n&deg; 2341).
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Renforce la kératine et épaissit la fibre capillaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Assainit le cuir chevelu et combat les pellicules.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Apporte brillance et volume sans produits chimiques
                      nocifs.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Miel (asal)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : « De leurs ventres sort une boisson
                  de couleurs variées, dans laquelle il y a une guérison pour
                  les gens » (sourate An-Nahl, verset 69). Le miel, mentionné
                  comme remède divin, possède des propriétés hydratantes,
                  antibactériennes et cicatrisantes qui bénéficient directement
                  au cuir chevelu.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Masque capillaire</strong> : appliquer du miel pur
                      sur le cuir chevelu mélangé à de l&apos;huile d&apos;olive,
                      laisser poser 20 à 30 minutes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consommation interne</strong> : une cuillère à soupe
                      de miel à jeun nourrit le corps de l&apos;intérieur et
                      soutient le système immunitaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Miel + nigelle</strong> : cette association
                      traditionnelle renforce les effets anti-inflammatoires et
                      nourrissants.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Huile d&apos;olive (zayt az-zaytoun)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;olivier est qualifié d&apos;« arbre béni » dans le
                  Coran (sourate An-Nur, verset 35). Le Prophète &#xFDFA; a
                  recommandé : « Mangez de l&apos;huile d&apos;olive et
                  enduisez-vous en, car elle provient d&apos;un arbre béni »
                  (Sunan at-Tirmidhi, n&deg; 1851). L&apos;huile d&apos;olive
                  extra-vierge est riche en acides gras mono-insaturés, en
                  vitamine E et en polyphénols, ce qui en fait un allié
                  précieux pour les cheveux.
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Nourrit en profondeur les cheveux secs et cassants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Apaise les irritations et les démangeaisons du cuir
                      chevelu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Protège la fibre capillaire contre les agressions
                      extérieures (soleil, froid, pollution).
                    </span>
                  </li>
                </ul>

                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Costus indien (al-qist al-hindi) et hijama
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le costus indien est un remède prophétique recommandé par le
                  Prophète &#xFDFA; : « Utilisez ce bois indien (al-oud
                  al-hindi), car il contient sept remèdes » (Sahih al-Bukhari,
                  n&deg; 5692). En application locale, l&apos;huile de costus
                  stimule la circulation du cuir chevelu, régule le sébum et
                  favorise un environnement propice à la repousse.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La hijama (ventouses humides) complète cette approche en
                  améliorant la circulation sanguine vers les follicules
                  pileux. Le Prophète &#xFDFA; a dit : « La guérison réside
                  dans trois choses : la gorgée de miel, l&apos;incision de la
                  hijama et la cautérisation par le feu, mais j&apos;interdis à
                  ma communauté la cautérisation » (Sahih al-Bukhari,
                  n&deg; 5680).
                </p>

                {/* Tableau 2 : Comparatif des remèdes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Remède prophétique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Propriétés capillaires
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Mode d&apos;utilisation
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Source islamique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile de nigelle
                        </td>
                        <td className="py-3 pr-4">
                          Anti-inflammatoire, antioxydant, stimule la repousse
                        </td>
                        <td className="py-3 pr-4">
                          Massage du cuir chevelu + voie interne
                        </td>
                        <td className="py-3">
                          Sahih al-Bukhari, n&deg; 5688
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Henné
                        </td>
                        <td className="py-3 pr-4">
                          Renforce, épaissit, assainit le cuir chevelu
                        </td>
                        <td className="py-3 pr-4">
                          Cataplasme capillaire (1 à 2 fois par mois)
                        </td>
                        <td className="py-3">
                          Sahih Muslim, n&deg; 2341
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel
                        </td>
                        <td className="py-3 pr-4">
                          Hydratant, antibactérien, cicatrisant
                        </td>
                        <td className="py-3 pr-4">
                          Masque capillaire + consommation à jeun
                        </td>
                        <td className="py-3">
                          Coran, sourate An-Nahl (16:69)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="py-3 pr-4">
                          Nutrition profonde, protection, apaisement
                        </td>
                        <td className="py-3 pr-4">
                          Bain d&apos;huile + consommation alimentaire
                        </td>
                        <td className="py-3">
                          Sunan at-Tirmidhi, n&deg; 1851
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Costus indien
                        </td>
                        <td className="py-3 pr-4">
                          Stimule la circulation, régule le sébum
                        </td>
                        <td className="py-3 pr-4">
                          Huile en massage ou poudre en cataplasme
                        </td>
                        <td className="py-3">
                          Sahih al-Bukhari, n&deg; 5692
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hijama (ventouses)
                        </td>
                        <td className="py-3 pr-4">
                          Améliore l&apos;irrigation des follicules pileux
                        </td>
                        <td className="py-3 pr-4">
                          Séances régulières par un praticien qualifié
                        </td>
                        <td className="py-3">
                          Sahih al-Bukhari, n&deg; 5680
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Alopecie-remede-islam-traitements-naturels-et-invocations-de-guerison-1.jpg"
                    alt="Remèdes prophétiques pour la santé des cheveux, huile de nigelle, henné, miel et huile d&apos;olive"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Retrouvez tous les remèdes naturels de la médecine prophétique"
                  href="/remede-arabe"
                  linkText="Voir les remèdes arabes et la médecine prophétique"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Alimentation selon la Sunna */}
              {/* ============================================ */}
              <section id="alimentation-sunna" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Alimentation selon la Sunna pour des cheveux en bonne santé
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La santé des cheveux commence dans l&apos;assiette. La Sunna
                  offre une alimentation naturelle et équilibrée, riche en
                  nutriments favorables à la pousse et à la résistance
                  capillaire. L&apos;approche prophétique de la nutrition
                  privilégie la modération, la qualité et la baraka des
                  aliments.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les dattes (tamr) : énergie et minéraux
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les dattes sont l&apos;un des aliments les plus chers au
                  Prophète &#xFDFA;. Il a dit : « Une maison où il n&apos;y a
                  pas de dattes, ses habitants ont faim » (Sahih Muslim,
                  n&deg; 2046). Riches en fer, potassium, magnésium et
                  vitamines du groupe B, les dattes contribuent à la
                  vitalité capillaire et à la prévention des carences
                  responsables de la chute.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La talbina : réconfort et nutrition
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La talbina est une bouillie d&apos;orge préparée avec du
                  lait et du miel. Aisha (qu&apos;Allah l&apos;agrée) rapporte
                  que le Prophète &#xFDFA; disait : « La talbina apaise le
                  c&oelig;ur du malade et dissipe une partie du chagrin »
                  (Sahih al-Bukhari, n&deg; 5689). L&apos;orge est riche en
                  fibres, en vitamines B et en silicium, un oligo-élément
                  reconnu pour renforcer les cheveux et les ongles.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Autres aliments bénéfiques de la tradition prophétique
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Figues</strong> : riches en fer, calcium et
                      antioxydants, elles participent au renouvellement
                      cellulaire du cuir chevelu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Grenade (rummaan)</strong> : source de vitamine C
                      et de polyphénols, elle améliore la microcirculation et
                      favorise l&apos;absorption du fer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Lentilles et légumineuses</strong> : apportent
                      des protéines végétales, du zinc et du fer, trois
                      éléments indispensables à la kératinisation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Eau de Zamzam</strong> : considérée comme une eau
                      bénie, elle est riche en minéraux et peut accompagner
                      toute démarche de soin avec l&apos;intention de guérison.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète &#xFDFA; enseignait la modération dans
                  l&apos;alimentation : « L&apos;être humain n&apos;a jamais
                  rempli de récipient pire que son estomac. Il suffit au fils
                  d&apos;Adam de quelques bouchées pour se maintenir »
                  (Sunan at-Tirmidhi, n&deg; 2380). Un équilibre alimentaire
                  respectueux de cette sagesse favorise une meilleure
                  assimilation des nutriments et une santé capillaire durable.
                </p>

                {/* Tableau 3 : Nutriments et aliments Sunna */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Nutriment
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Rôle pour les cheveux
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Aliments de la Sunna
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fer
                        </td>
                        <td className="py-3 pr-4">
                          Oxygénation des follicules pileux
                        </td>
                        <td className="py-3">
                          Dattes, lentilles, miel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Zinc
                        </td>
                        <td className="py-3 pr-4">
                          Synthèse de la kératine, cicatrisation
                        </td>
                        <td className="py-3">
                          Graines de nigelle, légumineuses
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vitamine E
                        </td>
                        <td className="py-3 pr-4">
                          Antioxydant, protège les cellules du cuir chevelu
                        </td>
                        <td className="py-3">
                          Huile d&apos;olive, amandes
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Oméga-3 et acides gras
                        </td>
                        <td className="py-3 pr-4">
                          Hydratation et souplesse de la fibre capillaire
                        </td>
                        <td className="py-3">
                          Huile de nigelle, huile d&apos;olive, poisson
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Silicium
                        </td>
                        <td className="py-3 pr-4">
                          Renforce la structure du cheveu
                        </td>
                        <td className="py-3">
                          Orge (talbina), figues
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Vitamines B
                        </td>
                        <td className="py-3 pr-4">
                          Croissance et renouvellement cellulaire
                        </td>
                        <td className="py-3">
                          Dattes, miel, orge
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Remèdes naturels pour les yeux en islam : soins prophétiques et invocations"
                  description="Les soins oculaires de la Sunna : kohl, miel, eau de rose et invocations pour préserver la vue."
                  href="/remede-arabe"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Invocations et soutien spirituel */}
              {/* ============================================ */}
              <section id="invocations-guerison" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations de guérison et soutien spirituel face à
                  l&apos;alopécie
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En islam, la guérison ne se limite pas aux remèdes
                  physiques. Le croyant est invité à solliciter l&apos;aide
                  d&apos;Allah par la prière, les invocations (doua) et la
                  confiance dans Son décret. Cette dimension spirituelle
                  accompagne et complète toute démarche thérapeutique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua pour la guérison (shifaa)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète &#xFDFA; récitait plusieurs invocations pour les
                  malades. L&apos;une des plus célèbres est l&apos;invocation
                  suivante, rapportée par Aisha (qu&apos;Allah l&apos;agrée) :
                </p>

                <blockquote className="my-6 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
                  <p className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl" dir="rtl">
                    اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا
                  </p>
                  <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
                    &laquo;&nbsp;Allahoumma Rabb an-nas, adh-hib al-ba&apos;s, ishfi Anta ash-Shafi, la shifa&apos;a illa shifa&apos;ouka, shifa&apos;an la youghadirou saqaman&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-foreground">
                    (O Allah, Seigneur des hommes, dissipe le mal, guéris car
                    Tu es le Guérisseur. Il n&apos;y a de guérison que la
                    Tienne, une guérison qui ne laisse aucune maladie.)
                  </p>
                  <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
                    Sahih al-Bukhari, n&deg; 5742
                  </cite>
                </blockquote>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La roqya légitime (ar-ruqya ash-shar&apos;iyya)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La roqya consiste à réciter des versets du{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  et des invocations prophétiques sur soi-même ou sur un
                  malade. Elle est autorisée et recommandée, à condition de
                  n&apos;utiliser que les paroles d&apos;Allah et Ses noms, et
                  de croire que la guérison vient de Lui seul. Le Prophète
                  &#xFDFA; a dit : « Il n&apos;y a aucun mal dans la roqya
                  tant qu&apos;elle ne contient pas de shirk (associationnisme) »
                  (Sahih Muslim, n&deg; 2200).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour l&apos;alopécie, le croyant peut réciter la sourate
                  Al-Fatiha, Ayat al-Kursi, les sourates Al-Ikhlas, Al-Falaq
                  et An-Nas, puis souffler sur de l&apos;huile d&apos;olive ou
                  de nigelle avant de l&apos;appliquer sur le cuir chevelu.
                  Cette pratique unit le soin physique à la dimension
                  spirituelle.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La patience (sabr) et le décret divin (qadar)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;alopécie, comme toute épreuve, peut devenir une
                  occasion de rapprochement avec Allah. Le Prophète &#xFDFA;
                  a dit : « Qu&apos;il est étonnant le cas du croyant ! Tout
                  ce qui lui arrive est un bien. Si un bonheur le touche, il
                  remercie et c&apos;est un bien pour lui. Si un malheur
                  l&apos;atteint, il patiente et c&apos;est un bien pour lui »
                  (Sahih Muslim, n&deg; 2999).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La perte de cheveux peut affecter l&apos;estime de soi,
                  surtout chez les femmes. L&apos;islam rappelle que la
                  véritable beauté réside dans la foi, la bonne conduite et la
                  proximité avec Allah. Le regard du Créateur est tourné vers
                  les c&oelig;urs, non vers les apparences. Le Prophète &#xFDFA;
                  a dit : « Allah ne regarde pas vos corps ni vos visages,
                  mais Il regarde vos c&oelig;urs et vos actions »
                  (Sahih Muslim, n&deg; 2564).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  L&apos;impact psychologique : ne pas minimiser la souffrance
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La dimension psychologique de l&apos;alopécie est réelle et
                  ne doit pas être sous-estimée. La tradition islamique
                  encourage l&apos;entraide et la compassion. Parler de sa
                  souffrance à un proche de confiance, chercher du soutien
                  auprès d&apos;un imam ou d&apos;un thérapeute, et multiplier
                  les actes d&apos;adoration sont autant de moyens de
                  traverser cette épreuve avec sérénité.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier le dhikr</strong> : la mention
                      d&apos;Allah apaise le c&oelig;ur et réduit
                      l&apos;anxiété liée à l&apos;image de soi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratiquer la gratitude (shukr)</strong> : se
                      concentrer sur les bienfaits d&apos;Allah aide à
                      relativiser l&apos;épreuve.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;aumône (sadaqa)</strong> : le Prophète
                      &#xFDFA; a dit que l&apos;aumône repousse les épreuves.
                      Donner pour les autres purifie l&apos;âme et attire la
                      miséricorde divine.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Alopecie-remede-islam-traitements-naturels-et-invocations-de-guerison-1.jpg"
                    alt="Invocations de guérison et soutien spirituel pour l&apos;alopécie en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Quand consulter un dermatologue */}
              {/* ============================================ */}
              <section id="consulter-dermatologue" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand consulter un dermatologue : allier médecine
                  prophétique et science moderne
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam encourage à se soigner par tous les moyens
                  licites. Le Prophète &#xFDFA; a dit : « Soignez-vous, car
                  Allah n&apos;a pas créé de maladie sans créer pour elle un
                  remède, sauf la mort » (Sunan Abu Dawud, n&deg; 3855). La
                  consultation d&apos;un dermatologue n&apos;est pas en
                  contradiction avec la médecine prophétique : les deux
                  approches se complètent.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Signes qui nécessitent une consultation médicale
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Chute de cheveux soudaine et importante (plus de 100
                      cheveux par jour pendant plusieurs semaines).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Apparition de plaques sans cheveux (pelade) ou de zones
                      rouges et squameuses.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Démangeaisons persistantes, douleurs ou sensation de
                      brûlure au niveau du cuir chevelu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Amincissement progressif et visible de la chevelure,
                      surtout après la ménopause ou lors de troubles
                      hormonaux.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Absence de repousse après plusieurs mois de soins
                      naturels bien conduits.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Traitements dermatologiques compatibles avec l&apos;islam
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La plupart des traitements dermatologiques modernes sont
                  licites en islam, tant qu&apos;ils ne contiennent pas de
                  substances illicites (alcool en usage interne, ingrédients
                  d&apos;origine porcine). Voici les principales options
                  thérapeutiques :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Minoxidil (application locale)</strong> : stimule
                      la repousse dans l&apos;alopécie androgénétique.
                      Compatible avec les soins prophétiques en alternance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>PRP (plasma riche en plaquettes)</strong> :
                      injection autologue qui stimule les cellules souches du
                      follicule. Autorisé en islam car il utilise le propre
                      sang du patient.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Greffe de cheveux (FUE/FUT)</strong> : permise
                      par la majorité des savants, car elle corrige un défaut
                      et non une modification par vanité (Fatwa de
                      l&apos;Académie islamique du Fiqh).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Compléments alimentaires</strong> : biotine, zinc
                      et fer sur prescription médicale, en vérifiant la
                      certification halal des gélules.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Conseils selon le profil du patient
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une femme portant le hijab
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le port du hijab n&apos;est pas une cause directe
                      d&apos;alopécie, mais un tissu trop serré ou
                      synthétique peut aggraver la traction. Privilégiez un
                      hijab en tissu naturel (coton, soie), évitez les
                      épingles serrées, et aérez vos cheveux à la maison.
                      Appliquez régulièrement un bain d&apos;huile d&apos;olive
                      ou de nigelle.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour un homme avec un dégarnissement précoce
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;alopécie androgénétique masculine est souvent
                      héréditaire. Consultez un dermatologue pour un bilan
                      hormonal. En parallèle, massez régulièrement le cuir
                      chevelu avec de l&apos;huile de nigelle, adoptez une
                      alimentation riche en zinc et en fer, et rappelez-vous
                      que le rasage de la tête est une Sunna honorable.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une femme en post-partum
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La chute de cheveux après l&apos;accouchement
                      (effluvium télogène du post-partum) est très fréquente
                      et généralement réversible en 6 à 12 mois. Consommez
                      des dattes, du miel et de la talbina, qui sont des
                      aliments recommandés par la Sunna pour les femmes après
                      l&apos;accouchement. Patientez et invoquez Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Pour une personne vivant une épreuve (stress, deuil)
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le stress est un déclencheur majeur de chute de
                      cheveux. Renforcez vos adhkar quotidiens, pratiquez la
                      prière de la nuit (qiyam al-layl), et cherchez du
                      soutien auprès de vos proches et de votre communauté.
                      La confiance en le qadar (décret divin) est le meilleur
                      remède contre l&apos;anxiété.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* AVERTISSEMENT MEDICAL avant FAQ */}
              {/* ============================================ */}
              <div className="mt-16">
                <MedicalDisclaimer />
              </div>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* ============================================ */}
              {/* NAVIGATION SILO REMEDE-ARABE */}
              {/* ============================================ */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Remèdes et médecine prophétique
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les remèdes arabes
                  </Link>
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

              {/* Navigation vers page mère */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/remede-arabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Médecine prophétique et remèdes naturels
                  </Link>
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêves en islam
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection et sorcellerie en islam
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
