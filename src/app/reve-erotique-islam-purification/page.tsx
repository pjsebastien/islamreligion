import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêve érotique islam : compréhension spirituelle et purification recommandée",
  description:
    "Que dit l'islam sur les rêves érotiques ? Statut juridique, règles de ghusl, catégories de rêves et conseils spirituels pour aborder ce sujet sans honte.",
  alternates: {
    canonical: "https://www.islamreligion.fr/reve-erotique-islam-purification",
  },
};

const tocItems = [
  { id: "statut", label: "Statut des rêves érotiques en islam" },
  { id: "ghusl", label: "Règles de purification (ghusl)" },
  { id: "cas-particuliers", label: "Cas particuliers et avis juridiques" },
  { id: "approche-spirituelle", label: "Approche spirituelle et psychologique" },
  { id: "lever-gene", label: "Lever la gêne et consulter" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Les rêves érotiques sont-ils un péché en islam ?",
    answer:
      "Non, les rêves érotiques ne constituent pas un péché en islam. Le Prophète (paix et bénédictions sur lui) a enseigné que la plume est levée pour trois personnes, dont le dormeur jusqu\u0027à son réveil (Abu Dawud). Ce qui se produit involontairement pendant le sommeil n\u0027engage aucune responsabilité morale devant Allah.",
  },
  {
    question: "Quand le ghusl est-il obligatoire après un rêve érotique ?",
    answer:
      "Le ghusl (bain rituel) devient obligatoire uniquement lorsque le dormeur constate des traces physiques (maniy) au réveil, qu\u0027il se souvienne ou non du rêve. En l\u0027absence de toute trace, le ghusl n\u0027est pas requis, même si le rêveur se souvient d\u0027un contenu érotique. Cette règle s\u0027applique aux hommes comme aux femmes.",
  },
  {
    question:
      "Une femme doit-elle faire le ghusl après un rêve érotique ?",
    answer:
      "Oui, la règle du ghusl après un rêve érotique s\u0027applique aux femmes de la même manière qu\u0027aux hommes. Umm Sulaym a posé la question directement au Prophète (paix et bénédictions sur lui), qui a confirmé que si une femme constate des traces d\u0027émission, le ghusl est obligatoire (Sahih al-Bukhari, Sahih Muslim).",
  },
  {
    question:
      "Que faire si on ne se souvient pas du rêve mais trouve des traces ?",
    answer:
      "Si des traces physiques sont constatées au réveil sans aucun souvenir de rêve, le ghusl reste obligatoire selon le consensus des savants. La présence de traces suffit à elle seule pour rendre le bain rituel nécessaire, indépendamment du souvenir du rêve.",
  },
  {
    question:
      "Les adhkar avant le sommeil protègent-ils des rêves érotiques ?",
    answer:
      "La récitation des adhkar avant le coucher, notamment ayat al-kursi, les trois dernières sourates du Coran et les invocations prophétiques, contribue à protéger le dormeur contre les suggestions de Shaytan. Bien que les rêves érotiques puissent aussi relever du fonctionnement naturel du corps (nafsani), les adhkar apaisent l\u0027esprit et favorisent un sommeil serein.",
  },
  {
    question: "Le jeûne est-il invalidé par un rêve érotique ?",
    answer:
      "Non, un rêve érotique n\u0027invalide pas le jeûne, même s\u0027il est accompagné d\u0027une émission physique. Cela relève d\u0027un acte involontaire qui échappe au contrôle du jeûneur. Il convient toutefois d\u0027effectuer le ghusl avant de reprendre la prière si des traces sont constatées.",
  },
  {
    question:
      "Un rêve érotique avec une personne précise a-t-il une signification ?",
    answer:
      "Les savants rattachent la majorité des rêves érotiques à la catégorie des rêves de l\u0027âme (hadith an-nafs), liés aux pensées, aux désirs ou aux préoccupations du quotidien. L\u0027identité de la personne vue dans le rêve ne porte pas de signification prophétique particulière et ne doit pas être source de culpabilité.",
  },
  {
    question:
      "Comment surmonter la gêne liée aux rêves érotiques en islam ?",
    answer:
      "Le Prophète (paix et bénédictions sur lui) a toujours répondu avec douceur et sans jugement aux questions sensibles de ses compagnons, y compris celles d\u0027Umm Sulaym sur ce sujet. L\u0027islam encourage à chercher le savoir sans honte, à consulter un savant de confiance et à se rappeler que ces rêves sont une part naturelle de l\u0027expérience humaine.",
  },
];

export default function ReveErotique() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/reve-erotique-islam-purification/#article",
        headline:
          "Rêve érotique islam : compréhension spirituelle et purification recommandée",
        description:
          "Que dit l'islam sur les rêves érotiques ? Statut juridique, règles de ghusl, catégories de rêves et conseils spirituels.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Reve-erotique-islam-comprehension-spirituelle-et-purification-recommandee-1.jpg",
        datePublished: "2025-08-31",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/reve-erotique-islam-purification/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/reve-erotique-islam-purification/#breadcrumb",
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
            name: "Rêves en islam",
            item: "https://www.islamreligion.fr/reves-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Rêve érotique",
            item: "https://www.islamreligion.fr/reve-erotique-islam-purification",
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
          title="Rêve érotique islam : compréhension spirituelle et purification recommandée"
          subtitle="Statut juridique, purification et approche bienveillante des rêves érotiques selon le Coran et la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Reve-erotique-islam-comprehension-spirituelle-et-purification-recommandee-1.jpg"
          imageAlt="Rêve érotique en islam, compréhension spirituelle et purification recommandée"
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
                <Link href="/reves-islam" className="hover:text-primary">
                  Rêves en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Rêve érotique</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Les rêves érotiques sont une expérience humaine naturelle qui
                  ne porte aucune faute morale en islam. Le Prophète (paix et
                  bénédictions sur lui) a clairement enseigné que le dormeur
                  n&apos;est pas tenu pour responsable de ce qui survient
                  pendant le sommeil. Le ghusl n&apos;est requis que lorsque des
                  traces physiques sont constatées au réveil. L&apos;approche
                  islamique associe compréhension, miséricorde et règles de
                  purification précises.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Statut des rêves érotiques */}
              {/* ============================================ */}
              <section id="statut" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le statut des rêves érotiques en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les questions que les croyants hésitent parfois à poser,
                  celle du rêve érotique occupe une place particulière. Pourtant,
                  la tradition prophétique aborde ce sujet avec une clarté et
                  une bienveillance remarquables. Le Prophète Muhammad (paix et
                  bénédictions sur lui) a rappelé que{" "}
                  <em>
                    &quot;la plume est levée pour trois personnes : le dormeur
                    jusqu&apos;à son réveil, l&apos;enfant jusqu&apos;à sa
                    puberté et le fou jusqu&apos;à ce qu&apos;il retrouve la
                    raison&quot;
                  </em>{" "}
                  (rapporté par Abu Dawud). Ce hadith fondamental établit que
                  rien de ce qui se produit involontairement pendant le sommeil
                  ne peut être imputé au dormeur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants distinguent trois catégories de rêves dans la
                  tradition islamique, une classification qui aide à mieux
                  comprendre la nature des rêves érotiques et à les aborder
                  sans culpabilité :
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le rêve véridique (ru&apos;ya sadiqa) :</strong>{" "}
                      une vision provenant d&apos;Allah, porteuse de sens et de
                      guidance. Ce type de rêve est considéré comme une
                      quarante-sixième partie de la prophétie (Sahih
                      al-Bukhari).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le cauchemar (hulm min ash-Shaytan) :</strong> une
                      perturbation provoquée par Shaytan pour susciter la peur
                      ou le trouble chez le croyant. Le Prophète (paix et
                      bénédictions sur lui) a recommandé de cracher trois fois à
                      gauche et de chercher refuge auprès d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>
                        Le rêve de l&apos;âme (hadith an-nafs) :
                      </strong>{" "}
                      un reflet des pensées, des désirs et des préoccupations
                      quotidiennes de la personne. La majorité des rêves
                      érotiques relèvent de cette catégorie, liée au
                      fonctionnement naturel du corps et de l&apos;esprit.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette distinction est fondamentale : elle permet de séparer
                  les rêves érotiques des tentations conscientes et volontaires.
                  Le croyant qui fait un tel rêve n&apos;a commis aucune faute
                  et ne doit ressentir ni honte ni culpabilité. Allah, dans Sa
                  miséricorde, ne tient pas le dormeur pour responsable de ce
                  que son subconscient produit durant la nuit.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Qudama (rahimahullah) a clarifié dans{" "}
                  <em>Al-Mughni</em> que le rêve érotique est involontaire par
                  nature et qu&apos;il n&apos;y a aucune différence entre un
                  homme et une femme sur ce point. Umm Sulaym, une compagnonne
                  du Prophète, n&apos;a pas hésité à l&apos;interroger
                  directement sur ce sujet, ce qui témoigne de la place
                  accordée au savoir, même sur les questions les plus intimes.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Reve-erotique-islam-comprehension-spirituelle-et-purification-recommandee-1.jpg"
                    alt="Compréhension spirituelle du rêve érotique en islam selon le Coran et la Sunna"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Règles de purification (ghusl) */}
              {/* ============================================ */}
              <section id="ghusl" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les règles de purification (ghusl) après un rêve érotique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question du ghusl (bain rituel) après un rêve érotique est
                  l&apos;une des plus fréquentes parmi les musulmans. Les règles
                  sont précises et bien documentées dans la Sunna. Le critère
                  déterminant n&apos;est pas le contenu du rêve lui-même, mais
                  la présence ou l&apos;absence de traces physiques (maniy) au
                  réveil.
                </p>

                {/* Tableau ghusl */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Situation
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Ghusl obligatoire ?
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Détail
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Traces physiques constatées au réveil
                        </td>
                        <td className="py-3 pr-4">
                          Oui
                        </td>
                        <td className="py-3">
                          Le ghusl est obligatoire, que le rêveur se souvienne
                          ou non du rêve
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Aucune trace physique au réveil
                        </td>
                        <td className="py-3 pr-4">
                          Non
                        </td>
                        <td className="py-3">
                          Le ghusl n&apos;est pas requis, même si le rêveur se
                          souvient d&apos;un contenu érotique
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Doute sur la présence de traces
                        </td>
                        <td className="py-3 pr-4">
                          Recommandé par précaution
                        </td>
                        <td className="py-3">
                          Les savants conseillent de vérifier et, en cas de
                          doute persistant, d&apos;effectuer le ghusl
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rêve érotique sans émission ni traces
                        </td>
                        <td className="py-3 pr-4">
                          Non
                        </td>
                        <td className="py-3">
                          Les simples ablutions (wudu) suffisent pour reprendre
                          la prière
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette règle repose sur le hadith rapporté par Aisha (qu&apos;Allah
                  l&apos;agrée) : le Prophète (paix et bénédictions sur lui) a
                  été interrogé au sujet de l&apos;homme qui trouve de
                  l&apos;humidité sans se souvenir d&apos;un rêve. Il a répondu
                  que le ghusl s&apos;impose. Et lorsqu&apos;il a été interrogé
                  au sujet de l&apos;homme qui voit un rêve mais ne trouve pas
                  de traces, il a dit qu&apos;il n&apos;y a pas de ghusl
                  (rapporté par Abu Dawud et at-Tirmidhi).
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Formuler l&apos;intention (niyyah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant de commencer le ghusl, le croyant formule
                        l&apos;intention intérieure de se purifier pour
                        Allah. Cette intention n&apos;a pas besoin d&apos;être
                        prononcée à voix haute.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Laver les mains et les parties intimes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Commencer par laver les mains trois fois, puis
                        nettoyer les parties intimes pour éliminer toute trace
                        d&apos;impureté avant de procéder au reste du bain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Effectuer les ablutions complètes (wudu)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Pratiquer un wudu complet comme pour la prière, en
                        incluant le rinçage de la bouche et du nez. Certains
                        savants recommandent de retarder le lavage des pieds à
                        la fin du ghusl.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Verser l&apos;eau sur l&apos;ensemble du corps
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;eau doit atteindre chaque partie du corps sans
                        exception, en commençant par le côté droit puis le
                        côté gauche, conformément à la Sunna. Il convient de
                        s&apos;assurer que l&apos;eau pénètre les racines des
                        cheveux.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est important de souligner que cette obligation concerne
                  les hommes et les femmes de manière identique. Le hadith
                  d&apos;Umm Sulaym (qu&apos;Allah l&apos;agrée) le confirme
                  sans ambiguïté : elle demanda au Prophète (paix et
                  bénédictions sur lui) si une femme qui voit en rêve ce que
                  l&apos;homme voit doit se laver. Il répondit :{" "}
                  <em>
                    &quot;Oui, si elle constate des traces d&apos;eau
                    (émission).&quot;
                  </em>{" "}
                  (Sahih al-Bukhari, Sahih Muslim).
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Reve-erotique-islam-comprehension-spirituelle-et-purification-recommandee-1.jpg"
                    alt="Règles de purification ghusl après un rêve érotique en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Cas particuliers et avis */}
              {/* ============================================ */}
              <section id="cas-particuliers" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Cas particuliers et avis juridiques
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà du cas général, plusieurs situations spécifiques
                  suscitent des interrogations légitimes. Les quatre grandes
                  écoles de jurisprudence islamique (hanafite, malikite,
                  shafiite et hanbalite) s&apos;accordent sur les principes
                  fondamentaux, tout en apportant des nuances sur certains cas
                  de figure.
                </p>

                {/* Tableau cas particuliers */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Cas
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Avis
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          École
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rêve érotique pendant les menstrues
                        </td>
                        <td className="py-3 pr-4">
                          Le ghusl des menstrues suffit, il couvre les deux
                          impuretés (janaba et hayd)
                        </td>
                        <td className="py-3">
                          Consensus des quatre écoles
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rêve érotique en période post-partum (nifas)
                        </td>
                        <td className="py-3 pr-4">
                          Le ghusl de fin de nifas englobe la purification
                          de la janaba
                        </td>
                        <td className="py-3">
                          Consensus des quatre écoles
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Rêve sans excitation ni émission
                        </td>
                        <td className="py-3 pr-4">
                          Pas de ghusl requis, les ablutions simples suffisent
                        </td>
                        <td className="py-3">
                          Hanafite, malikite, shafiite, hanbalite
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Excitation ressentie sans émission physique
                        </td>
                        <td className="py-3 pr-4">
                          Pas de ghusl obligatoire, mais vérification
                          recommandée
                        </td>
                        <td className="py-3">
                          Shafiite, hanbalite
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Traces constatées sans souvenir du rêve
                        </td>
                        <td className="py-3 pr-4">
                          Ghusl obligatoire, la trace suffit comme critère
                        </td>
                        <td className="py-3">
                          Consensus des quatre écoles
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Souvenir du rêve mais aucune trace
                        </td>
                        <td className="py-3 pr-4">
                          Pas de ghusl, seules les ablutions sont nécessaires
                        </td>
                        <td className="py-3">
                          Consensus des quatre écoles
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam an-Nawawi (rahimahullah) précise dans son
                  commentaire du Sahih Muslim que la présence de traces au
                  réveil est le seul critère déterminant pour l&apos;obligation
                  du ghusl, indépendamment de tout autre facteur. Cette clarté
                  juridique vise à simplifier la pratique pour le croyant et à
                  éviter les scrupules excessifs (waswas) qui pourraient
                  perturber sa relation avec la prière.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le madhiy (liquide pré-séminal) ne rend pas le ghusl
                      obligatoire : il suffit de laver la zone concernée et
                      de renouveler les ablutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      En cas de doute sur la nature du liquide (madhiy ou
                      maniy), les savants recommandent de se fier aux
                      caractéristiques connues (couleur, odeur, consistance)
                      ou de procéder au ghusl par précaution.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le scrupule excessif (waswas) est lui-même considéré
                      comme une épreuve. Le Prophète (paix et bénédictions
                      sur lui) a recommandé de se fier à la certitude et de
                      ne pas se laisser envahir par le doute.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sagesse de ces règles réside dans leur simplicité : elles
                  permettent au croyant de reprendre sa vie quotidienne et ses
                  prières sans porter un fardeau disproportionné. Le fiqh
                  islamique rappelle constamment que la facilité est un
                  principe fondamental, comme le mentionne le Coran :{" "}
                  <em>
                    &quot;Allah veut pour vous la facilité et ne veut pas pour
                    vous la difficulté&quot;
                  </em>{" "}
                  (sourate Al-Baqarah, 2:185).
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Reve-erotique-islam-comprehension-spirituelle-et-purification-recommandee-1.jpg"
                    alt="Cas particuliers et avis juridiques sur le rêve érotique en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Approche spirituelle */}
              {/* ============================================ */}
              <section id="approche-spirituelle" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;approche spirituelle et psychologique
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les rêves érotiques relèvent d&apos;un fonctionnement
                  biologique naturel, reconnu comme tel par les savants
                  musulmans depuis des siècles. Loin de constituer un signe de
                  faiblesse spirituelle, ils témoignent du fonctionnement normal
                  du corps humain, y compris pendant le sommeil. L&apos;islam
                  invite à aborder cette réalité avec sérénité, sans honte ni
                  dramatisation.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      Le corps comme amana (dépôt divin)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le corps du croyant est un dépôt confié par Allah. Ses
                      fonctions naturelles, y compris celles qui se manifestent
                      pendant le sommeil, font partie de la création divine.
                      Les comprendre avec respect et savoir, c&apos;est honorer
                      cette amana.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      Les adhkar du coucher comme protection
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La récitation d&apos;ayat al-kursi, des trois dernières
                      sourates du Coran (Al-Ikhlas, Al-Falaq, An-Nas) et de
                      l&apos;invocation prophétique{" "}
                      <em>
                        &quot;Bismika Allahumma amutu wa ahya&quot;
                      </em>{" "}
                      contribue à placer le sommeil sous la protection
                      d&apos;Allah et à apaiser l&apos;esprit avant la nuit.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      Se tourner sur le côté droit
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et bénédictions sur lui) recommandait
                      de dormir sur le côté droit, une position qui, selon la
                      Sunna, favorise un sommeil paisible et protégé. Ce geste
                      simple s&apos;inscrit dans une hygiène de vie globale
                      prônée par la tradition prophétique.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="font-semibold text-primary">
                      L&apos;invocation du réveil
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Au réveil, la récitation de{" "}
                      <em>
                        &quot;Alhamdulillahi alladhi ahyana ba&apos;da ma
                        amatana wa ilayhi an-nushur&quot;
                      </em>{" "}
                      (Sahih al-Bukhari) permet de renouer avec la gratitude
                      et de commencer la journée dans un état de conscience
                      spirituelle, quelle que soit la nature du rêve vécu.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Éviter de ruminer le contenu du rêve : les savants
                      recommandent de ne pas y accorder plus d&apos;importance
                      qu&apos;il n&apos;en mérite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne pas raconter un rêve érotique à autrui : la Sunna
                      recommande de garder pour soi les rêves déplaisants ou
                      perturbants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Baisser le regard et préserver sa chasteté pendant la
                      journée contribue à apaiser l&apos;esprit et à réduire
                      la fréquence de ce type de rêves.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le jeûne surérogatoire est mentionné par le Prophète
                      (paix et bénédictions sur lui) comme un moyen de
                      renforcer la maîtrise de soi pour ceux qui le
                      souhaitent.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La miséricorde d&apos;Allah s&apos;étend à toutes les
                  dimensions de la vie humaine, y compris les plus intimes. Le
                  Coran rappelle :{" "}
                  <em>
                    &quot;Allah n&apos;impose à aucune âme une charge
                    supérieure à sa capacité&quot;
                  </em>{" "}
                  (sourate Al-Baqarah, 2:286). Le rêve érotique, par définition
                  involontaire, entre pleinement dans cette compréhension : le
                  croyant n&apos;a pas à porter le poids de ce qui échappe à sa
                  volonté.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Voir quelqu'un pleurer en rêve islam : compassion divine et intercession"
                  description="Les pleurs vus en rêve, miroir de l'âme et signe de miséricorde selon la tradition islamique."
                  href="/pleurer-reve-islam-compassion"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Lever la gêne */}
              {/* ============================================ */}
              <section id="lever-gene" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Lever la gêne et consulter avec sagesse
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des obstacles majeurs à la bonne compréhension des
                  rêves érotiques en islam reste la gêne. Beaucoup de croyants,
                  hommes et femmes, hésitent à poser des questions sur ce sujet,
                  par peur du jugement ou par un sentiment de pudeur mal placé.
                  Pourtant, la tradition prophétique offre un modèle
                  remarquable d&apos;ouverture sur ces questions.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;exemple le plus souvent cité est celui d&apos;Umm
                  Sulaym (qu&apos;Allah l&apos;agrée), qui s&apos;est adressée
                  directement au Prophète (paix et bénédictions sur lui) pour
                  lui demander si une femme devait se laver après avoir fait un
                  rêve similaire à celui d&apos;un homme. Aisha (qu&apos;Allah
                  l&apos;agrée) s&apos;étonna de sa franchise, mais le
                  Prophète la félicita indirectement en répondant avec douceur
                  et clarté. Cet échange, rapporté dans les deux Sahih, montre
                  que la recherche du savoir prime sur la gêne, même dans les
                  sujets les plus intimes.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme marié
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve érotique n&apos;est en aucun cas un signe
                      d&apos;infidélité ou de manquement envers son épouse.
                      Il relève du fonctionnement naturel du corps. Si le
                      sujet génère des questionnements au sein du couple, le
                      dialogue ouvert et la consultation d&apos;un savant de
                      confiance sont recommandés.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les mêmes règles s&apos;appliquent aux femmes. Le
                      hadith d&apos;Umm Sulaym témoigne que cette question
                      n&apos;est pas réservée aux hommes. Une femme qui fait
                      un rêve érotique ne doit ressentir aucune honte et doit
                      simplement vérifier si le ghusl est nécessaire selon
                      les critères établis par la Sunna.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un adolescent
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;apparition de rêves érotiques fait partie des
                      signes naturels de la puberté, reconnue en islam comme
                      le moment où les obligations religieuses deviennent
                      effectives. Il est du devoir des parents et des
                      éducateurs d&apos;expliquer les règles du ghusl avec
                      douceur et clarté, en s&apos;inspirant de la pédagogie
                      prophétique qui n&apos;a jamais esquivé ces sujets.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Combattre le tabou :</strong> le silence sur ces
                      questions conduit à l&apos;ignorance et aux pratiques
                      erronées. L&apos;islam valorise le savoir, y compris
                      dans les domaines les plus intimes de la vie humaine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consulter un savant de confiance :</strong> pour
                      les cas qui génèrent un doute persistant, la
                      consultation d&apos;un imam ou d&apos;un savant permet
                      de clarifier la situation avec bienveillance et
                      compétence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se rappeler la miséricorde d&apos;Allah :</strong>{" "}
                      Allah connaît la nature de Ses créatures et ne leur
                      impose pas ce qui dépasse leur capacité. Le rêve
                      érotique involontaire ne diminue en rien la foi ni la
                      valeur spirituelle du croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Éduquer sans juger :</strong> transmettre ces
                      connaissances aux plus jeunes fait partie de
                      l&apos;accompagnement éducatif recommandé par
                      l&apos;islam, dans le respect de la pudeur et de la
                      dignité de chacun.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a dit :{" "}
                  <em>
                    &quot;La pudeur ne vient qu&apos;avec le bien&quot;
                  </em>{" "}
                  (Sahih al-Bukhari). Mais la pudeur ne signifie pas
                  l&apos;ignorance. Au contraire, c&apos;est en comprenant les
                  règles avec précision que le croyant peut vivre sa foi avec
                  sérénité, sans confusion ni tourment inutile.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Qu&apos;il s&apos;agisse d&apos;un adolescent découvrant les
                  transformations de son corps, d&apos;un adulte confronté à un
                  questionnement ponctuel ou d&apos;un parent souhaitant
                  transmettre les bonnes pratiques, la voie prophétique offre
                  un cadre clair, miséricordieux et ancré dans la réalité
                  humaine. Comme le rapporte le Coran :{" "}
                  <em>
                    &quot;Et Nous avons certes honoré les fils d&apos;Adam&quot;
                  </em>{" "}
                  (sourate Al-Isra, 17:70).
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Reve-erotique-islam-comprehension-spirituelle-et-purification-recommandee-1.jpg"
                    alt="Lever la gêne et consulter avec sagesse sur les rêves érotiques en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Interprétations de rêves similaires
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rêves en islam
                  </Link>
                  <Link
                    href="/rever-enceinte-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;être enceinte en islam
                  </Link>
                  <Link
                    href="/pleurer-reve-islam-compassion"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Voir quelqu&apos;un pleurer en rêve
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
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
