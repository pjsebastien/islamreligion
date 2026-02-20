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
    "Remède arabe grossesse : alimentation prophétique, invocations et soins naturels",
  description:
    "Découvrez les remèdes arabes pour la grossesse en islam : dattes, miel, huile d'olive, invocations pour la femme enceinte et conseils issus de la médecine prophétique. Suivi médical obligatoire.",
  alternates: {
    canonical: "https://www.islamreligion.fr/remede-arabe-grossesse",
  },
};

const tocItems = [
  { id: "grossesse-islam", label: "La grossesse en islam : une bénédiction" },
  {
    id: "alimentation-prophetique",
    label: "Alimentation prophétique pour la femme enceinte",
  },
  {
    id: "nausees-maux",
    label: "Soulager les nausées et maux courants",
  },
  {
    id: "invocations-grossesse",
    label: "Invocations et sourates pour une grossesse sereine",
  },
  {
    id: "precautions-interdits",
    label: "Précautions, contre-indications et suivi médical",
  },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Peut-on consommer de la nigelle (habba sawda) pendant la grossesse ?",
    answer:
      "La nigelle est un remède prophétique reconnu, mais son usage pendant la grossesse demande une grande prudence. Certaines études indiquent que la thymoquinone, son composé actif, pourrait avoir un effet sur les contractions utérines à forte dose. Il est fortement déconseillé de prendre de l'huile de nigelle en quantité importante sans avis médical. En petites quantités dans l'alimentation (quelques graines saupoudrées), le risque est généralement considéré comme faible, mais consultez toujours votre médecin ou sage-femme avant tout usage régulier.",
  },
  {
    question:
      "Quelles dattes manger pendant la grossesse selon la Sunna ?",
    answer:
      "La sourate Maryam (19:25) mentionne les dattes comme nourriture donnée à Maryam (que la paix soit sur elle) pendant son accouchement. Les dattes ajwa de Médine sont les plus citées dans les hadiths. Toutes les variétés de dattes sont bénéfiques : elles apportent du fer, du potassium, du magnésium et des sucres naturels. Des études modernes ont montré que la consommation de dattes au dernier trimestre peut favoriser la dilatation du col et faciliter le travail. Parlez-en à votre sage-femme pour adapter la quantité à votre situation.",
  },
  {
    question:
      "La hijama (ventouses) est-elle autorisée pendant la grossesse ?",
    answer:
      "La hijama est formellement déconseillée pendant la grossesse par la majorité des praticiens et des médecins. Elle peut provoquer des contractions ou des variations de pression artérielle dangereuses pour la mère et le bébé. Même si la hijama est un remède prophétique reconnu, elle fait partie des pratiques à reporter après l'accouchement et la période d'allaitement. Consultez votre médecin pour toute question.",
  },
  {
    question:
      "Le miel est-il sans danger pour la femme enceinte ?",
    answer:
      "Le miel est mentionné dans le Coran comme contenant une guérison pour les gens (sourate An-Nahl, verset 69). Pour la femme enceinte, le miel est généralement considéré comme sûr et bénéfique : il apaise les nausées, soulage les maux de gorge et apporte de l'énergie. Privilégiez un miel pur, non chauffé. En cas de diabète gestationnel, consultez votre médecin car le miel reste un sucre. Une cuillère à café dans de l'eau tiède le matin est un usage courant et sans risque.",
  },
  {
    question:
      "Quelles invocations réciter pour protéger le bébé pendant la grossesse ?",
    answer:
      "Plusieurs invocations sont recommandées : la récitation quotidienne d'Ayat al-Kursi (al-Baqara, 255), des sourates Al-Falaq et An-Nas pour la protection, et l'invocation « Rabbi habli min ladunka dhurriyyatan tayyibah » (Seigneur, accorde-moi une descendance vertueuse) tirée de la sourate Al-Imran (3:38). La lecture régulière de la sourate Maryam est également une pratique appréciée des femmes enceintes musulmanes. Ces invocations apportent sérénité et confiance en la protection divine.",
  },
  {
    question:
      "L'huile d'olive est-elle recommandée pendant la grossesse ?",
    answer:
      "L'huile d'olive est un remède prophétique particulièrement adapté à la grossesse. Le Prophète (paix et salut sur lui) a recommandé de la consommer et de s'en enduire. Elle est riche en acides gras mono-insaturés, en vitamine E et en antioxydants. Pendant la grossesse, elle peut être consommée en cuisine, utilisée en massage sur le ventre pour prévenir les vergetures, ou appliquée sur les cheveux. Aucune contre-indication connue en usage alimentaire normal.",
  },
  {
    question:
      "Quelles plantes sont interdites pendant la grossesse en médecine arabe ?",
    answer:
      "Plusieurs plantes utilisées en médecine arabe sont contre-indiquées pendant la grossesse : le séné (sana makki) est un laxatif puissant qui peut provoquer des contractions, l'absinthe est un emménagogue reconnu, la myrrhe à forte dose peut stimuler l'utérus, et le fenugrec en grande quantité est également déconseillé avant le terme. La règle de prudence est simple : ne prenez aucune plante médicinale sans l'accord de votre médecin ou sage-femme.",
  },
  {
    question:
      "Peut-on pratiquer la roqya pendant la grossesse ?",
    answer:
      "La roqya légitime (ar-ruqya ash-shar'iyya), qui consiste en la récitation du Coran et des invocations prophétiques, est tout à fait permise et même recommandée pendant la grossesse. Elle ne présente aucun risque car elle repose uniquement sur la parole de Dieu. La femme enceinte peut pratiquer la roqya sur elle-même en récitant les sourates protectrices (Al-Fatiha, Al-Falaq, An-Nas, Ayat al-Kursi). Cela apporte apaisement et renforce le lien spirituel avec le bébé à naître.",
  },
];

export default function RemedeArabeGrossesse() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-grossesse/#article",
        headline:
          "Remède arabe grossesse : alimentation prophétique, invocations et soins naturels",
        description:
          "Découvrez les remèdes arabes pour la grossesse en islam : dattes, miel, huile d'olive, invocations pour la femme enceinte et conseils issus de la médecine prophétique.",
        image:
          "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        datePublished: "2025-09-15",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/remede-arabe-grossesse/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/remede-arabe-grossesse/#breadcrumb",
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
            name: "Grossesse",
            item: "https://www.islamreligion.fr/remede-arabe-grossesse",
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
          title="Remède arabe et grossesse : alimentation prophétique, invocations et soins naturels"
          subtitle="Les bienfaits de la médecine prophétique pour la femme enceinte : dattes, miel, huile d'olive, sourate Maryam et invocations de protection."
          imageSrc="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
          imageAlt="Famille musulmane symbolisant la bénédiction de la grossesse en islam"
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
                <span className="text-foreground">Grossesse</span>
              </nav>

              <MedicalDisclaimer />

              {/* Avertissement spécifique grossesse */}
              <div className="my-8 rounded-xl border border-rose-200 bg-rose-50 px-6 py-5">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-rose-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-rose-800">
                      Rappel pour la femme enceinte
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-rose-700">
                      La grossesse est une période qui nécessite un suivi
                      médical régulier et attentif. Les informations présentées
                      ici sont données à titre de partage culturel et
                      traditionnel. Aucun remède naturel ne peut remplacer le
                      suivi de votre médecin ou de votre sage-femme.
                      <strong className="block mt-1">
                        Consultez toujours votre professionnel de santé avant
                        de prendre un complément, une plante ou de modifier
                        votre alimentation.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La grossesse en islam */}
              {/* ============================================ */}
              <section id="grossesse-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La grossesse en islam : une bénédiction et une
                  responsabilité
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En{" "}
                  <Link
                    href="/"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    islam
                  </Link>
                  , la grossesse est considérée comme l&apos;une des plus
                  grandes bénédictions qu&apos;Allah puisse accorder. La femme
                  enceinte occupe un rang élevé dans la tradition musulmane :
                  chaque instant de sa grossesse, chaque difficulté endurée,
                  est considéré comme un acte de dévotion récompensé par
                  Dieu.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a souligné à
                  de nombreuses reprises le statut de la mère en islam.
                  Lorsqu&apos;un compagnon lui demanda qui méritait le plus
                  sa bienveillance, il répondit trois fois &laquo;&nbsp;ta
                  mère&nbsp;&raquo; avant de citer le père. Ce hadith,
                  rapporté par al-Bukhari et Muslim, illustre la place
                  particulière que la maternité occupe dans la foi
                  musulmane.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran évoque la grossesse comme un effort continu et
                  honorable. Allah dit dans la sourate Luqman (31:14) :
                  &laquo;&nbsp;Sa mère l&apos;a porté [subissant]
                  faiblesse sur faiblesse&nbsp;&raquo;. Ce verset souligne
                  la reconnaissance divine envers la mère qui porte son
                  enfant, et la dette que chaque être humain a envers celle
                  qui l&apos;a mis au monde.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    وَوَصَّيْنَا الْإِنسَانَ بِوَالِدَيْهِ حَمَلَتْهُ أُمُّهُ وَهْنًا عَلَىٰ وَهْنٍ
                  </p>
                  <p className="mt-3 text-foreground italic">
                    &laquo;&nbsp;Nous avons enjoint à l&apos;homme la
                    bienveillance envers ses parents. Sa mère l&apos;a porté
                    [subissant] faiblesse sur faiblesse.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Luqman, verset 14
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette bénédiction s&apos;accompagne d&apos;une
                  responsabilité : prendre soin de son corps et de sa
                  santé pendant la grossesse est un devoir religieux. Le
                  corps est considéré en islam comme un dépôt
                  (<em>amana</em>) confié par Dieu, et la femme enceinte a
                  la double responsabilité de préserver sa propre santé et
                  celle de l&apos;enfant qu&apos;elle porte.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Le statut de la mère dans le Coran et la Sunna
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs versets et hadiths soulignent la place de la
                  mère. La sourate Al-Ahqaf (46:15) rappelle que la mère
                  porte son enfant pendant des mois de souffrance et le
                  sèvre après deux ans. Le Prophète (paix et salut sur lui)
                  a également dit que le Paradis se trouve sous les pieds
                  des mères (hadith rapporté par an-Nasai), une image
                  forte qui élève la maternité au rang des actes les plus
                  méritoires. Pour approfondir cette question, notre article
                  sur{" "}
                  <Link
                    href="/maternite-islam-responsabilite"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    le statut sacré de la mère en islam
                  </Link>{" "}
                  détaille les responsabilités et les bénédictions liées à
                  la maternité.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La tradition islamique enseigne aussi que la femme qui
                  décède pendant la grossesse ou lors de l&apos;accouchement
                  est considérée comme une martyre (<em>shahida</em>),
                  ce qui témoigne du sacrifice reconnu par Dieu dans
                  l&apos;acte de porter la vie.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/famille-musulmane-lecture-coran-islam-education.jpg"
                    alt="Famille musulmane lisant le Coran ensemble, symbole de la transmission spirituelle pendant la grossesse"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Découvrir tous les remèdes de la médecine prophétique"
                  href="/remede-arabe"
                  linkText="Voir la page remèdes arabes"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Alimentation prophétique */}
              {/* ============================================ */}
              <section
                id="alimentation-prophetique"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Alimentation prophétique pendant la grossesse : dattes,
                  miel et huile d&apos;olive
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La{" "}
                  <Link
                    href="/remede-arabe"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    médecine prophétique
                  </Link>{" "}
                  offre des recommandations alimentaires qui, pour
                  beaucoup, sont aujourd&apos;hui confirmées par la
                  recherche scientifique moderne. Voici les aliments les
                  plus mentionnés dans le Coran et la Sunna, et leur
                  intérêt spécifique pendant la grossesse.
                </p>

                {/* Dattes */}
                <div className="mt-8 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Les dattes : le fruit de Maryam (que la paix soit sur
                    elle)
                  </h3>

                  <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      وَهُزِّي إِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسَاقِطْ
                      عَلَيْكِ رُطَبًا جَنِيًّا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Secoue vers toi le tronc du palmier :
                      il fera tomber sur toi des dattes fraîches et
                      mûres.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Sourate Maryam, verset 25
                    </p>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    Ce verset est un des plus cités à propos de la
                    grossesse en islam. Allah a offert des dattes à Maryam
                    (que la paix soit sur elle) au moment de son
                    accouchement, ce qui souligne leur valeur nutritive
                    dans ce contexte. Les dattes sont riches en fer
                    (prévention de l&apos;anémie, fréquente chez la femme
                    enceinte), en potassium (régulation de la pression
                    artérielle), en magnésium (réduction des crampes) et
                    en fibres, ce qui aide à{" "}
                    <Link
                      href="/remede-arabe-constipation"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      soulager la constipation fréquente en fin de grossesse
                    </Link>.
                  </p>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Des recherches publiées dans le <em>Journal of
                    Obstetrics and Gynaecology</em> ont montré que la
                    consommation de six dattes par jour pendant les
                    quatre dernières semaines de grossesse était associée
                    à une dilatation cervicale plus importante à
                    l&apos;admission, des membranes intactes plus
                    fréquentes et un travail spontané plus courant. Ces
                    résultats confortent la sagesse coranique.
                  </p>

                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b-2 border-primary/10">
                          <th className="py-3 pr-4 font-semibold text-primary">
                            Nutriment
                          </th>
                          <th className="py-3 pr-4 font-semibold text-primary">
                            Pour 100 g de dattes
                          </th>
                          <th className="py-3 font-semibold text-primary">
                            Bienfait pour la grossesse
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-foreground-secondary">
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">
                            Fer
                          </td>
                          <td className="py-3 pr-4">0,9 mg</td>
                          <td className="py-3">
                            Prévention de l&apos;anémie
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">
                            Potassium
                          </td>
                          <td className="py-3 pr-4">696 mg</td>
                          <td className="py-3">
                            Régulation de la tension artérielle
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">
                            Magnésium
                          </td>
                          <td className="py-3 pr-4">54 mg</td>
                          <td className="py-3">
                            Réduction des crampes musculaires
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">
                            Fibres
                          </td>
                          <td className="py-3 pr-4">6,7 g</td>
                          <td className="py-3">
                            Régulation du transit intestinal
                          </td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">
                            Acide folique
                          </td>
                          <td className="py-3 pr-4">15 mcg</td>
                          <td className="py-3">
                            Développement du tube neural du bébé
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 pr-4 font-medium text-foreground">
                            Sucres naturels
                          </td>
                          <td className="py-3 pr-4">63 g</td>
                          <td className="py-3">
                            Énergie rapide pour la mère
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-4 text-sm text-foreground-secondary">
                    <strong>Usage recommandé :</strong> 3 à 6 dattes par
                    jour, de préférence au dernier trimestre. Les variétés
                    ajwa, medjool et deglet nour sont toutes adaptées. En
                    cas de diabète gestationnel, consultez votre médecin
                    pour adapter la quantité.
                  </p>
                </div>

                {/* Miel */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    Le miel : guérison mentionnée dans le Coran
                  </h3>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Le Coran présente le miel comme porteur de guérison :
                    &laquo;&nbsp;De leur ventre sort une boisson aux
                    couleurs variées, dans laquelle il y a une guérison
                    pour les gens&nbsp;&raquo; (sourate An-Nahl, verset
                    69). Le Prophète (paix et salut sur lui) consommait
                    régulièrement du miel et le recommandait.
                  </p>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    Pendant la grossesse, le miel offre plusieurs
                    bienfaits : il apaise les nausées lorsqu&apos;il est
                    dilué dans de l&apos;eau tiède, soulage les maux de
                    gorge (la femme enceinte ne pouvant pas prendre tous
                    les médicaments), apporte de l&apos;énergie naturelle
                    et possède des propriétés antibactériennes. Le miel de
                    jujubier (<em>sidr</em>) et le miel de thym sont
                    particulièrement appréciés dans la tradition arabe.
                  </p>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Précaution :</strong> le miel est un sucre.
                    En cas de diabète gestationnel diagnostiqué, il
                    convient de limiter sa consommation et de suivre les
                    recommandations de votre médecin. Une cuillère à café
                    par jour dans de l&apos;eau tiède reste un usage
                    modéré et courant.
                  </p>
                </div>

                {/* Huile d'olive */}
                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-xl font-semibold text-primary">
                    L&apos;huile d&apos;olive : l&apos;arbre béni
                  </h3>

                  <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                    <p
                      className="text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      كُلُوا الزَّيْتَ وَادَّهِنُوا بِهِ فَإِنَّهُ مِنْ
                      شَجَرَةٍ مُبَارَكَةٍ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Mangez de l&apos;huile d&apos;olive et
                      enduisez-vous-en, car elle provient d&apos;un arbre
                      béni.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Hadith rapporté par at-Tirmidhi et Ibn Majah
                    </p>
                  </div>

                  <p className="mt-4 leading-relaxed text-foreground-secondary">
                    L&apos;huile d&apos;olive extra-vierge est un allié
                    précieux pendant la grossesse. En usage alimentaire,
                    elle fournit des acides gras mono-insaturés favorables
                    au développement cérébral du fœtus, de la vitamine E
                    antioxydante et des polyphénols anti-inflammatoires.
                  </p>

                  <p className="mt-3 leading-relaxed text-foreground-secondary">
                    En usage externe, l&apos;huile d&apos;olive peut être
                    appliquée en massage sur le ventre, les hanches et les
                    cuisses pour assouplir la peau et limiter
                    l&apos;apparition des vergetures. Elle peut aussi être
                    utilisée sur les cheveux et le cuir chevelu, souvent
                    fragilisés par les changements hormonaux de la
                    grossesse. Les femmes sujettes à{" "}
                    <Link
                      href="/alopecie-remede-islam"
                      className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                    >
                      la perte de cheveux post-partum
                    </Link>{" "}
                    trouveront dans l&apos;huile d&apos;olive un soin
                    nourrissant précieux.
                  </p>

                  <p className="mt-3 text-sm text-foreground-secondary">
                    <strong>Usage recommandé :</strong> 1 à 2 cuillères à
                    soupe par jour en cuisine (assaisonnement, cuisson
                    douce). En massage, utiliser pure ou mélangée à
                    quelques gouttes d&apos;huile d&apos;amande douce.
                  </p>
                </div>

                {/* Autres aliments */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Autres aliments prophétiques bénéfiques pendant la
                  grossesse
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Talbina (bouillie d&apos;orge)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) la recommandait
                      pour le malade et la personne affaiblie. Riche en
                      fibres et en vitamines B, la talbina est un petit
                      déjeuner nourrissant pour la femme enceinte.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Lait et produits laitiers
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Le lait est mentionné dans le Coran comme une
                      boisson pure et agréable (sourate An-Nahl, 66).
                      Source de calcium, il contribue à la formation
                      osseuse du bébé.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Figues et grenades
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      La figue est mentionnée dans la sourate At-Tin. La
                      grenade est citée dans la sourate Ar-Rahman (55:68).
                      Toutes deux sont riches en antioxydants, en fibres
                      et en vitamines.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-4">
                    <p className="font-semibold text-primary">
                      Eau de Zamzam
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Eau de la source sacrée à La Mecque. Le Prophète
                      (paix et salut sur lui) a dit qu&apos;elle est
                      &laquo;&nbsp;pour ce pourquoi elle est
                      bue&nbsp;&raquo;. Riche en minéraux, elle est
                      bénéfique pour la femme enceinte.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
                    alt="Dattes, chapelet et Coran, aliments prophétiques recommandés pendant la grossesse en islam"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Nausées et maux courants */}
              {/* ============================================ */}
              <section id="nausees-maux" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Soulager les nausées et maux courants de la grossesse :
                  remèdes de la tradition arabe
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les nausées du premier trimestre, la fatigue, les
                  douleurs dorsales et les troubles du sommeil sont des
                  compagnons fréquents de la grossesse. À ces maux
                  s&apos;ajoutent souvent des troubles digestifs : il est
                  important de savoir comment{" "}
                  <Link
                    href="/remede-arabe-hemorroides"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    prévenir les hémorroïdes liées à la grossesse
                  </Link>
                  , fréquentes au troisième trimestre. La tradition arabe
                  et la médecine prophétique proposent des approches
                  douces pour accompagner ces désagréments, toujours en
                  complément du suivi médical.
                </p>

                {/* Nausées */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Contre les nausées matinales
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les nausées touchent environ 70 à 80 % des femmes
                  enceintes, principalement au premier trimestre. Voici les
                  remèdes traditionnels les plus utilisés dans la culture
                  arabe et musulmane.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Miel tiède au gingembre
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Mélanger une cuillère à café de miel pur dans un
                        verre d&apos;eau tiède (pas chaude) avec une fine
                        rondelle de gingembre frais. Le gingembre est
                        reconnu par l&apos;OMS comme un antiémétique
                        naturel efficace pendant la grossesse, à condition
                        de ne pas dépasser 1 g de gingembre sec par jour.
                        Le miel apaise l&apos;estomac et facilite la
                        digestion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Dattes le matin à jeun
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Manger une ou deux dattes au réveil, avant même de
                        se lever, stabilise le taux de sucre dans le sang
                        et réduit les sensations de nausée. C&apos;est
                        une pratique qui s&apos;inscrit dans la Sunna de
                        consommer des dattes le matin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Eau de menthe
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;infusion de menthe douce (pas de menthe
                        poivrée concentrée, qui peut être trop forte) est
                        un remède traditionnel largement utilisé dans le
                        monde arabe. Elle apaise l&apos;estomac et
                        rafraîchit. À consommer en petites quantités.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Citron et huile d&apos;olive
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Quelques gouttes de jus de citron mélangées à une
                        cuillère à café d&apos;huile d&apos;olive
                        extra-vierge le matin. Ce mélange est
                        traditionnellement utilisé dans les pays du
                        Maghreb et du Moyen-Orient pour calmer les nausées
                        et stimuler la digestion.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nigelle : précautions */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  La nigelle pendant la grossesse : prudence nécessaire
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La graine de nigelle (<em>habba sawda</em>) est le remède
                  prophétique le plus célèbre. Le Prophète (paix et salut
                  sur lui) a dit qu&apos;elle est
                  &laquo;&nbsp;un remède contre toute maladie, sauf la
                  mort&nbsp;&raquo; (rapporté par al-Bukhari et Muslim).
                  Cependant, son usage pendant la grossesse exige une
                  prudence particulière.
                </p>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-6 py-5">
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
                        Attention pour la femme enceinte
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-amber-700">
                        L&apos;huile de nigelle concentrée et les
                        compléments à base de nigelle sont déconseillés
                        pendant la grossesse sans avis médical. La
                        thymoquinone, son principe actif, peut avoir un
                        effet sur les contractions utérines à dose élevée.
                        En revanche, quelques graines de nigelle
                        saupoudrées sur un plat ou du pain (usage
                        alimentaire courant) ne présentent généralement
                        pas de risque. Demandez toujours conseil à votre
                        médecin.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Fatigue et sommeil */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Fatigue et troubles du sommeil
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La fatigue est l&apos;un des symptômes les plus courants
                  de la grossesse, surtout aux premier et troisième
                  trimestres. L&apos;anxiété qui accompagne souvent cette
                  période est tout aussi importante à prendre en charge :
                  notre guide pour{" "}
                  <Link
                    href="/remede-angoisse-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    gérer l&apos;anxiété de la future maman
                  </Link>{" "}
                  propose des invocations et des conseils adaptes. La
                  tradition prophétique valorise le repos et
                  l&apos;équilibre entre activité et récupération.
                </p>

                <ul className="mt-4 space-y-2 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sieste (<em>qaylula</em>)</strong> : le
                      Prophète (paix et salut sur lui) pratiquait la sieste
                      en milieu de journée et l&apos;a recommandée. Pour
                      la femme enceinte, une sieste de 20 à 30 minutes
                      permet de récupérer sans perturber le sommeil
                      nocturne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le lait chaud au miel</strong> : boisson
                      traditionnelle du coucher dans le monde arabe. Le
                      tryptophane du lait favorise l&apos;endormissement,
                      et le miel stabilise la glycémie pendant la nuit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La marche douce</strong> : la tradition
                      prophétique encourage l&apos;activité physique
                      modérée. Marcher régulièrement, à son rythme, aide
                      à réduire la fatigue, améliore la circulation
                      sanguine et prépare le corps à l&apos;accouchement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dormir sur le côté gauche</strong> : position
                      recommandée par les médecins pendant la grossesse
                      (améliore la circulation vers le placenta). Le
                      Prophète (paix et salut sur lui) avait pour habitude
                      de dormir sur le côté droit, mais les professionnels
                      de santé recommandent le côté gauche pour la femme
                      enceinte.
                    </span>
                  </li>
                </ul>

                {/* Tableau remèdes par trimestre */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Trimestre
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Maux courants
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Remèdes traditionnels
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          1er trimestre
                        </td>
                        <td className="py-3 pr-4">
                          Nausées, fatigue, vertiges
                        </td>
                        <td className="py-3">
                          Miel tiède + gingembre, dattes le matin,
                          talbina, repos
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          2e trimestre
                        </td>
                        <td className="py-3 pr-4">
                          Brûlures d&apos;estomac, crampes, vergetures
                        </td>
                        <td className="py-3">
                          Huile d&apos;olive en massage, lait + miel,
                          marche douce, figues
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          3e trimestre
                        </td>
                        <td className="py-3 pr-4">
                          Insomnie, douleurs dorsales, anxiété
                        </td>
                        <td className="py-3">
                          6 dattes/jour, récitation de sourate Maryam,
                          sieste, invocations du soir
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Invocations et sourates */}
              {/* ============================================ */}
              <section
                id="invocations-grossesse"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Invocations et sourates pour une grossesse sereine et un
                  accouchement facilité
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La dimension spirituelle de la grossesse est aussi
                  importante que la dimension physique en islam. La
                  récitation du{" "}
                  <Link
                    href="/apprendre-le-coran"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Coran
                  </Link>{" "}
                  et les invocations offrent à la femme enceinte un ancrage
                  spirituel, une source de sérénité et un lien profond
                  avec le bébé à naître.
                </p>

                {/* Sourate Maryam */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La sourate Maryam et la femme enceinte
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate Maryam (sourate 19) occupe une place
                  particulière pour les femmes enceintes musulmanes. Elle
                  raconte l&apos;histoire de Maryam (que la paix soit sur
                  elle), mère de Issa (Jésus), qui a porté et mis au monde
                  son enfant dans des circonstances extraordinaires. Sa
                  confiance en Dieu face à l&apos;épreuve, sa patience et
                  sa soumission sont un modèle pour toute femme enceinte.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate décrit le moment de l&apos;accouchement avec
                  une attention touchante : les douleurs de Maryam, son
                  invocation à Dieu, la nourriture offerte (les dattes), et
                  l&apos;eau qui coule sous ses pieds. Beaucoup de femmes
                  musulmanes lisent cette sourate régulièrement pendant
                  leur grossesse, et certaines la récitent pendant le
                  travail comme source de réconfort et de confiance.
                </p>

                {/* Invocations */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Invocations recommandées pendant la grossesse
                </h3>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-sm font-semibold text-secondary">
                      Demander une descendance vertueuse
                    </p>
                    <p
                      className="mt-2 text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً
                      ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Seigneur, accorde-moi, de Ta part,
                      une descendance vertueuse. Tu es Celui qui entend
                      les invocations.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Sourate Al-Imran, verset 38
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-sm font-semibold text-secondary">
                      Invocation pour la protection du bébé
                    </p>
                    <p
                      className="mt-2 text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      أُعِيذُهُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ مِنْ
                      كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ
                      لَامَّةٍ
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Je cherche pour lui (elle) protection
                      auprès des paroles parfaites d&apos;Allah, contre
                      tout démon, tout animal venimeux et contre tout
                      mauvais œil.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Hadith rapporté par al-Bukhari. Le Prophète (paix
                      et salut sur lui) utilisait cette invocation pour
                      Al-Hassan et Al-Husayn.
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-sm font-semibold text-secondary">
                      Invocation pour faciliter l&apos;accouchement
                    </p>
                    <p
                      className="mt-2 text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ
                      سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ
                      سَهْلًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Seigneur, rien n&apos;est facile sauf
                      ce que Tu rends facile, et Tu peux rendre la
                      difficulté facile si Tu le veux.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Hadith rapporté par Ibn Hibban
                    </p>
                  </div>

                  <div className="rounded-xl border border-secondary/20 bg-accent p-5">
                    <p className="text-sm font-semibold text-secondary">
                      Invocation de guérison
                    </p>
                    <p
                      className="mt-2 text-right font-arabic text-xl leading-loose text-primary"
                      dir="rtl"
                    >
                      أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ وَاشْفِ أَنْتَ
                      الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً
                      لَا يُغَادِرُ سَقَمًا
                    </p>
                    <p className="mt-3 text-foreground italic">
                      &laquo;&nbsp;Ôte le mal, Seigneur des hommes, et
                      guéris. Tu es Celui qui guérit, il n&apos;y a de
                      guérison que Ta guérison, une guérison qui ne laisse
                      aucune maladie.&nbsp;&raquo;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Rapporté par al-Bukhari et Muslim
                    </p>
                  </div>
                </div>

                {/* Routine spirituelle */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Routine spirituelle quotidienne pour la femme enceinte
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Voici une routine spirituelle adaptée à la grossesse,
                  qui combine récitation, invocations et moments de
                  recueillement.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le matin (après le Fajr)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter Ayat al-Kursi, les trois dernières sourates
                        (Al-Ikhlas, Al-Falaq, An-Nas) trois fois chacune,
                        et les adhkar du matin. Faire une invocation
                        personnelle pour le bébé.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        En journée
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lire une page ou quelques versets de la sourate
                        Maryam. Multiplier le dhikr (subhanAllah,
                        alhamdulillah, Allahu akbar). Poser la main sur
                        le ventre en récitant l&apos;invocation de
                        protection.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le soir (avant de dormir)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter les adhkar du soir, Ayat al-Kursi, et les
                        sourates protectrices. Faire les ablutions avant de
                        se coucher. Invoquer Dieu pour un sommeil paisible
                        et la protection du bébé pendant la nuit.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/femme-musulmane-hijab-lecture-coran-islam.jpg"
                    alt="Femme musulmane lisant le Coran, symbole de la sérénité spirituelle pendant la grossesse"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="La maternité en islam : responsabilités et bénédictions"
                  description="Découvrez le statut de la mère et les responsabilités parentales selon le Coran et la Sunna."
                  href="/maternite-islam-responsabilite"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Précautions et suivi médical */}
              {/* ============================================ */}
              <section
                id="precautions-interdits"
                className="mt-16 scroll-mt-24"
              >
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Précautions, contre-indications et suivi médical
                  obligatoire
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La grossesse est une période où la prudence doit primer
                  sur toute autre considération. La médecine prophétique
                  elle-même encourage le recours aux soins : le Prophète
                  (paix et salut sur lui) a dit
                  &laquo;&nbsp;Soignez-vous, car Dieu n&apos;a pas créé de
                  maladie sans avoir créé son remède&nbsp;&raquo; (rapporté
                  par Abu Dawud). Se soigner, c&apos;est aussi consulter
                  les médecins.
                </p>

                {/* Ce qu'il faut ÉVITER */}
                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Ce qu&apos;il faut éviter pendant la grossesse
                </h3>

                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                      &#10007;
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        La hijama (ventouses) pendant la grossesse
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La hijama est un remède prophétique reconnu, mais
                        elle est formellement déconseillée pendant la
                        grossesse. Elle peut provoquer des contractions
                        prématurées, des variations de pression artérielle
                        et un stress physiologique incompatible avec la
                        grossesse. Reportez cette pratique après
                        l&apos;accouchement et la fin de l&apos;allaitement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                      &#10007;
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Les plantes emménagogues et abortives
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Certaines plantes utilisées en médecine arabe
                        traditionnelle sont dangereuses pendant la
                        grossesse car elles stimulent les contractions
                        utérines. Parmi elles : le séné (<em>sana
                        makki</em>), l&apos;absinthe, la rue officinale,
                        le safran en grande quantité, la myrrhe concentrée
                        et le pennyroyal. Ne prenez jamais de plante
                        médicinale sans l&apos;avis de votre médecin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                      &#10007;
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Les huiles à usage interne à forte dose
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;huile de nigelle concentrée, le costus
                        marin (<em>al-qist al-hindi</em>) en ingestion
                        et le fenugrec en grande quantité sont à éviter
                        pendant la grossesse. En usage alimentaire normal
                        (quelques graines, une pincée dans un plat), le
                        risque est généralement faible, mais la prudence
                        reste de mise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                      &#10007;
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        L&apos;automédication par les compléments
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Même si un produit est présenté comme
                        &laquo;&nbsp;naturel&nbsp;&raquo; ou
                        &laquo;&nbsp;prophétique&nbsp;&raquo;, cela ne
                        signifie pas qu&apos;il est sans risque pendant la
                        grossesse. Les compléments alimentaires à base de
                        plantes doivent être validés par votre médecin ou
                        votre sage-femme. Un produit naturel peut avoir
                        des effets puissants, surtout à forte dose.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau récapitulatif autorisé / interdit */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Remède / pratique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Statut pendant la grossesse
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Précisions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dattes
                        </td>
                        <td className="py-3 pr-4 text-green-700 font-medium">
                          Recommandé
                        </td>
                        <td className="py-3">
                          3 à 6 par jour, surtout au 3e trimestre
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Miel pur
                        </td>
                        <td className="py-3 pr-4 text-green-700 font-medium">
                          Recommandé
                        </td>
                        <td className="py-3">
                          Sauf diabète gestationnel (avis médecin)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile d&apos;olive
                        </td>
                        <td className="py-3 pr-4 text-green-700 font-medium">
                          Recommandé
                        </td>
                        <td className="py-3">
                          Usage alimentaire et en massage
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Gingembre
                        </td>
                        <td className="py-3 pr-4 text-green-700 font-medium">
                          Autorisé (modéré)
                        </td>
                        <td className="py-3">
                          Max 1 g sec/jour, efficace contre les nausées
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Roqya (récitation coranique)
                        </td>
                        <td className="py-3 pr-4 text-green-700 font-medium">
                          Recommandé
                        </td>
                        <td className="py-3">
                          Aucune contre-indication
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nigelle (graines alimentaires)
                        </td>
                        <td className="py-3 pr-4 text-amber-600 font-medium">
                          Prudence
                        </td>
                        <td className="py-3">
                          Petites quantités alimentaires seulement
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Huile de nigelle (concentrée)
                        </td>
                        <td className="py-3 pr-4 text-red-600 font-medium">
                          Déconseillé
                        </td>
                        <td className="py-3">
                          Risque de contractions utérines
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hijama (ventouses)
                        </td>
                        <td className="py-3 pr-4 text-red-600 font-medium">
                          Déconseillé
                        </td>
                        <td className="py-3">
                          Reporter après l&apos;accouchement
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Séné (<em>sana makki</em>)
                        </td>
                        <td className="py-3 pr-4 text-red-600 font-medium">
                          Interdit
                        </td>
                        <td className="py-3">
                          Risque de contractions, laxatif puissant
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Costus marin (ingestion)
                        </td>
                        <td className="py-3 pr-4 text-red-600 font-medium">
                          Déconseillé
                        </td>
                        <td className="py-3">
                          Insuffisamment étudié pendant la grossesse
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Suivi médical */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Le suivi médical : une obligation et une sagesse
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est important de rappeler que le suivi médical
                  pendant la grossesse n&apos;est pas en contradiction avec
                  la foi. Au contraire, l&apos;islam encourage le recours
                  aux moyens que Dieu a mis à notre disposition, et la
                  médecine moderne en fait partie.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Consultations prénatales
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les visites chez le médecin ou la sage-femme
                      sont indispensables : échographies, analyses de
                      sang, suivi de la tension, dépistages. Ces examens
                      permettent de détecter et prévenir d&apos;éventuelles
                      complications.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Supplémentation médicale
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;acide folique, le fer, la vitamine D et
                      d&apos;autres suppléments prescrits par le médecin
                      sont nécessaires pour prévenir les carences. Ils
                      complètent l&apos;alimentation, même prophétique.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Préparation à l&apos;accouchement
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les cours de préparation à la naissance, la
                      rédaction d&apos;un projet de naissance et le choix
                      du lieu d&apos;accouchement font partie de la
                      responsabilité de la femme enceinte envers elle-même
                      et son bébé.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Signaux d&apos;alerte
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Saignements, douleurs abdominales intenses, perte
                      de liquide amniotique, diminution des mouvements
                      du bébé, fièvre : ces signes nécessitent une
                      consultation médicale immédiate. Aucun remède
                      traditionnel ne peut se substituer à une prise en
                      charge médicale urgente.
                    </p>
                  </div>
                </div>

                {/* Profils */}
                <h3 className="mt-10 text-xl font-semibold text-primary">
                  Conseils selon le profil de la femme enceinte
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les besoins varient selon la situation de chaque femme.
                  Voici des recommandations adaptées à différents profils.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Première grossesse
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;appréhension est naturelle pour une
                      primipare. La récitation de la sourate Maryam, les
                      invocations de confiance en Dieu et le soutien de
                      la communauté (famille, amies, sage-femme) sont
                      des ressources précieuses. Ne négligez pas le suivi
                      médical : c&apos;est votre première expérience, et
                      chaque grossesse est différente.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Grossesse après une fausse couche
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;anxiété est particulièrement présente après
                      une perte. L&apos;islam enseigne que l&apos;enfant
                      perdu intercédera pour ses parents au Jour du
                      Jugement. Renforcez les invocations, confiez votre
                      grossesse à Dieu, et entourez-vous d&apos;un suivi
                      médical rapproché pour être rassurée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Grossesse à risque
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      En cas de grossesse à risque (diabète gestationnel,
                      hypertension, grossesse multiple), le suivi médical
                      est encore plus important. Les remèdes prophétiques
                      accompagnent la grossesse mais ne remplacent jamais
                      les traitements prescrits. Informez votre médecin
                      de tout complément que vous prenez.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h4 className="text-lg font-semibold text-primary">
                      Grossesse pendant le Ramadan
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La femme enceinte est dispensée du jeûne du Ramadan
                      si elle craint pour sa santé ou celle de son bébé.
                      Les savants sont unanimes sur cette dispense. Si vous
                      jeûnez malgré tout, les dattes et le miel sont
                      particulièrement recommandés pour le suhur et
                      l&apos;iftar. Consultez votre médecin.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains en prière et invocation, symbolisant la confiance en Dieu pendant la grossesse"
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
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
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêves en islam
                  </Link>
                </div>
              </section>

              {/* Navigation sur le même sujet */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/maternite-islam-responsabilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Maternité en islam
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La langue arabe
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection spirituelle
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
