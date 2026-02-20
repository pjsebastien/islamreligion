import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Istikhara : la prière de consultation étape par étape",
  description:
    "Apprenez à accomplir la salat al-istikhara, prière de consultation en islam : étapes, invocation complète, moments propices et témoignages concrets.",
  alternates: {
    canonical: "https://www.islamreligion.fr/istikhara-priere-consultation",
  },
};

const tocItems = [
  { id: "definition", label: "Qu'est-ce que l'istikhara" },
  { id: "etapes", label: "Accomplir l'istikhara étape par étape" },
  { id: "quand", label: "Quand et pour quels sujets" },
  { id: "reponse", label: "Comprendre la réponse" },
  { id: "temoignages", label: "Témoignages et exemples concrets" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qu'est-ce que la prière d'istikhara en islam ?",
    answer:
      "La prière d'istikhara est une prière surérogatoire de deux rak'ah suivie d'une invocation spécifique, par laquelle le croyant demande à Allah de le diriger vers le meilleur choix dans une affaire licite. Le mot istikhara signifie littéralement « chercher le bien » ou « demander le meilleur ».",
  },
  {
    question: "Comment faire la prière d'istikhara étape par étape ?",
    answer:
      "Formulez votre intention, effectuez vos ablutions, priez deux rak'ah surérogatoires (avec par exemple sourate Al-Kafirun puis Al-Ikhlas), prononcez le salam, puis récitez l'invocation d'istikhara en mentionnant clairement votre sujet. Concluez en vous en remettant à Allah avec sérénité.",
  },
  {
    question: "Peut-on faire l'istikhara sans prier les deux rak'ah ?",
    answer:
      "La forme complète recommandée comprend les deux rak'ah suivies de l'invocation. Toutefois, certains savants admettent que l'invocation seule peut être récitée si la personne est dans l'incapacité de prier (voyage, maladie). La priorité reste de combiner prière et invocation.",
  },
  {
    question: "Combien de fois peut-on répéter la prière d'istikhara ?",
    answer:
      "Il n'y a pas de limite fixée. Le Prophète (paix et salut sur lui) encourageait à renouveler l'istikhara tant que le cœur n'est pas apaisé. Certains savants recommandent de la répéter jusqu'à sept jours consécutifs si l'incertitude persiste.",
  },
  {
    question: "À quel moment de la journée faire l'istikhara ?",
    answer:
      "L'istikhara peut être accomplie à tout moment où la prière surérogatoire est autorisée. Il est toutefois déconseillé de la faire aux trois moments interdits : après la prière du fajr jusqu'au lever du soleil, au zénith, et après la prière du 'asr jusqu'au coucher du soleil. Le dernier tiers de la nuit est particulièrement recommandé.",
  },
  {
    question: "La réponse à l'istikhara vient-elle toujours en rêve ?",
    answer:
      "Non, c'est un mythe répandu. La réponse à l'istikhara se manifeste le plus souvent par un sentiment de paix ou de malaise, par l'ouverture ou la fermeture de portes dans les circonstances, ou par un penchant naturel du cœur vers une direction. Le rêve peut survenir, mais il n'est ni attendu ni nécessaire.",
  },
  {
    question: "Peut-on faire l'istikhara pour quelqu'un d'autre ?",
    answer:
      "Les savants divergent sur cette question. La majorité considère que l'istikhara est une démarche personnelle, car c'est le concerné qui doit ressentir l'orientation divine. Cependant, on peut invoquer Allah en faveur d'un proche pour qu'il soit dirigé vers le meilleur choix.",
  },
  {
    question: "Que faire si on ne ressent rien après l'istikhara ?",
    answer:
      "Si aucun signe clair ne se manifeste, il est recommandé de renouveler la prière, de consulter des personnes de confiance et de bon conseil, puis d'avancer avec détermination dans la direction qui semble la plus raisonnable. L'absence de blocage peut elle-même être un signe favorable.",
  },
];

export default function IstikharaPriere() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/istikhara-priere-consultation/#article",
        headline:
          "Istikhara : la prière de consultation étape par étape",
        description:
          "Apprenez à accomplir la salat al-istikhara, prière de consultation en islam : étapes, invocation complète, moments propices et témoignages.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Istikhara-la-priere-de-consultation-etape-par-etape-1.jpg",
        datePublished: "2025-08-24",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/istikhara-priere-consultation/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/istikhara-priere-consultation/#breadcrumb",
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
            name: "Prière d'istikhara",
            item: "https://www.islamreligion.fr/istikhara-priere-consultation",
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
          title="Istikhara : la prière de consultation étape par étape"
          subtitle="Découvrez comment accomplir la salat al-istikhara pour demander la direction d'Allah dans vos choix de vie."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Istikhara-la-priere-de-consultation-etape-par-etape-1.jpg"
          imageAlt="Istikhara, la prière de consultation en islam étape par étape"
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
                <span className="text-foreground">Prière d&apos;istikhara</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;istikhara est une prière surérogatoire de deux rak&apos;ah
                  suivie d&apos;une invocation précise, par laquelle le musulman
                  sollicite la direction d&apos;Allah avant de prendre une
                  décision importante. Mariage, carrière, déménagement,
                  investissement : cette prière s&apos;applique à toute affaire
                  licite où le cœur hésite. Contrairement aux idées reçues, la
                  réponse ne vient pas forcément en rêve, elle se manifeste le
                  plus souvent par un apaisement intérieur ou par l&apos;évolution
                  des circonstances.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Définition et fondements */}
              {/* ============================================ */}
              <section id="definition" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Qu&apos;est-ce que la prière d&apos;istikhara en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le mot « istikhara » provient de la racine arabe
                  « khayr » qui signifie « le bien ». Littéralement,
                  l&apos;istikhara désigne le fait de « chercher le meilleur »
                  auprès d&apos;Allah. C&apos;est une démarche spirituelle
                  profonde par laquelle le croyant reconnaît que sa connaissance
                  est limitée et que seul Allah possède la science de
                  l&apos;invisible.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le fondement de cette prière repose sur le célèbre hadith de
                  Jabir ibn Abdillah (qu&apos;Allah l&apos;agrée), rapporté par
                  l&apos;imam Al-Bukhari, dans lequel le Prophète (paix et salut
                  sur lui) enseignait l&apos;istikhara à ses compagnons pour
                  toutes leurs affaires, au même titre qu&apos;il leur enseignait
                  une sourate du Coran. Ce hadith montre à quel point cette
                  prière occupait une place centrale dans la vie du croyant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sagesse derrière l&apos;istikhara est multiple. Elle
                  enseigne l&apos;humilité face aux choix de la vie, elle
                  renforce le lien entre le serviteur et son Créateur, et elle
                  apporte une paix intérieure face aux décisions difficiles.
                  Elle s&apos;inscrit dans la continuité des{" "}
                  <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations pour la réussite et la facilité</Link>{" "}
                  que le croyant est encouragé à pratiquer au quotidien. Le
                  croyant qui prie l&apos;istikhara ne demande pas à Allah de
                  choisir à sa place, il Lui demande de faciliter ce qui est bon
                  et d&apos;éloigner ce qui est nuisible.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prière surérogatoire :</strong> deux rak&apos;ah
                      accomplies en dehors des prières obligatoires.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invocation spécifique :</strong> une du&apos;a
                      rapportée par Al-Bukhari, récitée après le salam.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Champ d&apos;application :</strong> uniquement les
                      affaires licites (mubah) où le croyant hésite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pas pour les obligations :</strong> on ne prie pas
                      l&apos;istikhara pour accomplir un acte obligatoire ou pour
                      délaisser un interdit.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Accessible à tous :</strong> homme ou femme, jeune
                      ou âgé, toute personne en état de prier peut la faire.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-primary">
                    Hadith de Jabir (Al-Bukhari)
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground-secondary italic">
                    « Le Messager d&apos;Allah (paix et salut sur lui) nous
                    enseignait l&apos;istikhara dans toutes les affaires, comme
                    il nous enseignait une sourate du Coran. »
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Istikhara-la-priere-de-consultation-etape-par-etape-1.jpg"
                    alt="La prière d'istikhara, consultation divine en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Étapes de la salat al-istikhara */}
              {/* ============================================ */}
              <section id="etapes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comment accomplir la salat al-istikhara étape par étape
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La prière d&apos;istikhara suit un déroulement simple et
                  accessible. Nul besoin d&apos;être un savant pour
                  l&apos;accomplir : le Prophète (paix et salut sur lui)
                  l&apos;enseignait à tous ses compagnons sans distinction.
                  Tout comme{" "}
                  <Link href="/abandon-priere-islam-consequences" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la régularité dans les prières obligatoires</Link>,
                  cette pratique surérogatoire témoigne de la confiance du croyant
                  envers son Seigneur. Voici
                  les six étapes détaillées pour la réaliser correctement.
                </p>

                {/* Tableau des étapes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Étape
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Détail
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          1. Intention
                        </td>
                        <td className="py-3 pr-4">
                          Formuler la niyyah dans le cœur
                        </td>
                        <td className="py-3">
                          Avoir l&apos;intention sincère de demander la
                          direction d&apos;Allah pour un sujet précis
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          2. Ablutions
                        </td>
                        <td className="py-3 pr-4">
                          Effectuer le wudu complet
                        </td>
                        <td className="py-3">
                          Purification rituelle comme pour toute prière,
                          avec attention et présence du cœur
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          3. Deux rak&apos;ah
                        </td>
                        <td className="py-3 pr-4">
                          Prier deux unités surérogatoires
                        </td>
                        <td className="py-3">
                          Réciter Al-Fatiha dans chaque rak&apos;ah. Il est
                          recommandé d&apos;ajouter sourate Al-Kafirun dans la
                          première et Al-Ikhlas dans la seconde
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          4. Du&apos;a d&apos;istikhara
                        </td>
                        <td className="py-3 pr-4">
                          Réciter l&apos;invocation après le salam
                        </td>
                        <td className="py-3">
                          Prononcer l&apos;invocation authentique rapportée
                          par Al-Bukhari, les mains levées vers le ciel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          5. Mentionner le sujet
                        </td>
                        <td className="py-3 pr-4">
                          Énoncer clairement son affaire
                        </td>
                        <td className="py-3">
                          Au passage « puis il mentionne son affaire » dans
                          la du&apos;a, nommer précisément le choix concerné
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          6. S&apos;en remettre à Allah
                        </td>
                        <td className="py-3 pr-4">
                          Conclure avec sérénité
                        </td>
                        <td className="py-3">
                          Ne pas s&apos;angoisser sur la réponse, faire
                          confiance à Allah et avancer avec détermination
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Formuler l&apos;intention avec sincérité
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant de commencer, identifiez clairement la décision
                        pour laquelle vous sollicitez la direction d&apos;Allah.
                        L&apos;intention (niyyah) se formule dans le cœur, sans
                        qu&apos;il soit nécessaire de la prononcer à voix haute.
                        Ce moment de recueillement prépare le cœur à recevoir
                        la réponse avec ouverture.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Accomplir les ablutions avec soin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le wudu est la porte d&apos;entrée de la prière. En
                        purifiant le corps, le croyant prépare aussi son esprit
                        à se tourner pleinement vers Allah. Prenez le temps de
                        faire vos ablutions avec attention, en pleine conscience
                        de l&apos;acte que vous vous apprêtez à accomplir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prier deux rak&apos;ah surérogatoires
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Il s&apos;agit de deux unités de prière volontaires,
                        distinctes des prières obligatoires. Après Al-Fatiha, il
                        est recommandé de réciter sourate Al-Kafirun (109) dans
                        la première rak&apos;ah et sourate Al-Ikhlas (112)
                        dans la seconde. Ces deux sourates expriment le
                        détachement et la confiance absolue en Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Réciter l&apos;invocation d&apos;istikhara
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après le salam final, levez les mains et récitez
                        l&apos;invocation rapportée dans le hadith de Jabir.
                        Si vous ne la connaissez pas en arabe, vous pouvez la
                        lire sur un support. L&apos;important est la présence
                        du cœur et la sincérité de la demande.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Mentionner clairement votre affaire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Au moment où l&apos;invocation mentionne « puis il
                        cite son besoin », nommez précisément votre sujet.
                        Par exemple : « ce mariage avec telle personne », « ce
                        poste dans telle entreprise », « ce déménagement vers
                        telle ville ». La clarté de la demande traduit la
                        sincérité de la démarche.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      6
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Conclure avec sérénité et confiance
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Une fois la prière et l&apos;invocation terminées, ne
                        restez pas dans l&apos;attente anxieuse d&apos;un signe
                        spectaculaire. Faites confiance au décret d&apos;Allah
                        et avancez dans votre vie avec détermination. La
                        réponse viendra sous la forme qu&apos;Allah choisit,
                        au moment qu&apos;Il détermine.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Traduction de la du'a */}
                <div className="mt-8 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-primary">
                    Traduction de l&apos;invocation d&apos;istikhara
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground-secondary italic">
                    « Ô Allah, je Te demande de m&apos;indiquer le meilleur
                    choix par Ta science, et je Te demande de m&apos;en donner
                    les moyens par Ta puissance, et je Te demande de Ta grâce
                    immense. Car Tu es capable et je ne le suis pas, Tu sais et
                    je ne sais pas, et Tu connais les choses cachées. Ô Allah,
                    si Tu sais que cette affaire [la nommer] est un bien pour
                    moi dans ma religion, dans ma vie ici-bas et dans ma
                    destinée finale, alors facilite-la-moi, puis bénis-la-moi.
                    Et si Tu sais que cette affaire est un mal pour moi dans
                    ma religion, dans ma vie ici-bas et dans ma destinée finale,
                    alors éloigne-la de moi et éloigne-moi d&apos;elle, et
                    destine-moi le bien où qu&apos;il se trouve, puis
                    rends-moi satisfait de ce choix. »
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Istikhara-la-priere-de-consultation-etape-par-etape-1.jpg"
                    alt="Les étapes de la salat al-istikhara en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Quand et pour quels sujets */}
              {/* ============================================ */}
              <section id="quand" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quand et pour quels sujets prier l&apos;istikhara
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;istikhara s&apos;adresse à toute situation licite dans
                  laquelle le croyant hésite. Pour savoir distinguer les
                  actes permis des interdits, il est utile de se référer aux{" "}
                  <Link href="/halal-haram-criteres" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">critères du halal et du haram en islam</Link>.
                  L&apos;istikhara ne concerne ni les
                  obligations religieuses (prier, jeûner) ni les interdits
                  (consommer de l&apos;alcool, mentir). Son champ
                  d&apos;application couvre les décisions de la vie courante où
                  le bien et le mal ne sont pas clairement tranchés par les
                  textes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants rappellent que la prière peut être accomplie à
                  tout moment propice à la prière surérogatoire. Trois périodes
                  sont toutefois à éviter : après la prière du fajr
                  jusqu&apos;au lever du soleil, au moment précis du zénith, et
                  après la prière du &apos;asr jusqu&apos;au coucher du soleil.
                  Le dernier tiers de la nuit, avant la prière du fajr, est
                  considéré comme le moment le plus propice pour les
                  invocations.
                </p>

                {/* Tableau situations */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Situation
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Exemple
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Pertinence de l&apos;istikhara
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mariage
                        </td>
                        <td className="py-3 pr-4">
                          Accepter ou non une demande en mariage
                        </td>
                        <td className="py-3">
                          Très pertinent, le mariage engage la vie entière
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Carrière
                        </td>
                        <td className="py-3 pr-4">
                          Changer d&apos;emploi, accepter une promotion
                        </td>
                        <td className="py-3">
                          Pertinent, surtout si le choix affecte la pratique
                          religieuse
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Études
                        </td>
                        <td className="py-3 pr-4">
                          Choisir entre deux formations ou universités
                        </td>
                        <td className="py-3">
                          Pertinent pour orienter son parcours avec sagesse
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voyage
                        </td>
                        <td className="py-3 pr-4">
                          Partir en voyage ou s&apos;installer dans une
                          autre ville
                        </td>
                        <td className="py-3">
                          Pertinent, le déplacement impacte la vie familiale
                          et spirituelle
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Investissement
                        </td>
                        <td className="py-3 pr-4">
                          Acheter un bien immobilier, investir dans un
                          projet
                        </td>
                        <td className="py-3">
                          Pertinent, les enjeux financiers méritent une
                          consultation divine
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Santé
                        </td>
                        <td className="py-3 pr-4">
                          Opter pour un traitement médical parmi plusieurs
                          options
                        </td>
                        <td className="py-3">
                          Pertinent, en complément de l&apos;avis médical
                          professionnel
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Affaires licites uniquement :</strong> on ne prie
                      pas l&apos;istikhara pour savoir s&apos;il faut commettre
                      un péché ou abandonner un devoir.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pas réservée aux grandes décisions :</strong> même
                      un choix apparemment anodin peut faire l&apos;objet
                      d&apos;une istikhara si le cœur hésite.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Complément de la réflexion :</strong> l&apos;istikhara
                      ne remplace pas la consultation des personnes compétentes,
                      elle s&apos;y ajoute.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Renouvelable :</strong> si le doute persiste après
                      une première istikhara, il est permis de la renouveler
                      sur plusieurs jours.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Prier en islam : atteindre l'excellence spirituelle"
                  description="Découvrez les fondements de la prière en islam, ses piliers et la voie vers le khushu'."
                  href="/prier-islam-excellence-spirituelle"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Comprendre la réponse */}
              {/* ============================================ */}
              <section id="reponse" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Comprendre la réponse : mythes et réalités
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;un des plus grands malentendus autour de
                  l&apos;istikhara concerne la manière dont la réponse se
                  manifeste. Beaucoup de croyants s&apos;attendent à un rêve
                  clair et limpide, à une vision ou à un signe spectaculaire
                  après la prière. Or, la réalité est bien plus subtile et
                  bien plus belle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : « Il se peut que vous détestiez une
                  chose alors qu&apos;elle est un bien pour vous, et il se peut
                  que vous aimiez une chose alors qu&apos;elle est un mal pour
                  vous. Allah sait, tandis que vous ne savez pas. » (Coran,
                  2:216). Ce verset éclaire la démarche de l&apos;istikhara : le
                  croyant admet que sa perception est limitée et s&apos;en remet
                  à Celui dont la science embrasse toute chose.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le rêve n&apos;est pas obligatoire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Aucun texte authentique ne conditionne la réponse de
                        l&apos;istikhara à un rêve. Attendre un rêve pour agir
                        peut conduire à la paralysie. Pour mieux comprendre
                        les{" "}
                        <Link href="/reves-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">trois types de rêves en islam</Link>,
                        il est utile de consulter les fondements de
                        l&apos;interprétation onirique. La réponse passe le plus
                        souvent par d&apos;autres voies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La paix ou le malaise intérieur
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Après l&apos;istikhara, observez votre état intérieur.
                        Un sentiment de paix, de légèreté et d&apos;ouverture
                        envers le choix envisagé peut indiquer un bien.
                        Inversement, un malaise persistant, une contraction du
                        cœur ou une répulsion inexplicable peuvent signaler
                        qu&apos;il vaut mieux s&apos;abstenir.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les portes qui s&apos;ouvrent ou se ferment
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Parfois, la réponse se manifeste dans les circonstances
                        elles-mêmes. Un projet qui se facilite de manière
                        inattendue, des obstacles qui se lèvent, ou au
                        contraire des portes qui se ferment les unes après les
                        autres. Ces signes extérieurs accompagnent souvent la
                        direction divine.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La consultation des proches reste recommandée
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;istikhara ne remplace pas la consultation
                        (istishara) des personnes de sagesse et
                        d&apos;expérience. Le Prophète (paix et salut sur lui)
                        consultait lui-même ses compagnons avant de prendre
                        certaines décisions. L&apos;istikhara et la
                        consultation humaine se complètent.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        On peut renouveler la prière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le doute persiste après une première istikhara, il
                        n&apos;y a aucun mal à la refaire. Certains savants
                        recommandent de la renouveler pendant trois, cinq ou
                        même sept jours. L&apos;important est de ne pas
                        transformer cette prière en source d&apos;anxiété.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-sm font-semibold text-primary">
                    Coran, sourate Al-Baqarah (2:216)
                  </p>
                  <p className="mt-2 leading-relaxed text-foreground-secondary italic">
                    « Il se peut que vous détestiez une chose alors qu&apos;elle
                    est un bien pour vous, et il se peut que vous aimiez une
                    chose alors qu&apos;elle est un mal pour vous. Allah sait,
                    tandis que vous ne savez pas. »
                  </p>
                </div>

                {/* Tableau mythes et réalités */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Mythe répandu
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Réalité islamique
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          La réponse vient toujours en rêve
                        </td>
                        <td className="py-3">
                          Aucun hadith ne le confirme, la réponse se manifeste
                          de multiples façons
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          On doit voir une couleur spécifique
                        </td>
                        <td className="py-3">
                          Croyance sans fondement textuel, la couleur dans un
                          rêve n&apos;est pas un critère de réponse
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          On ne peut la faire qu&apos;une seule fois
                        </td>
                        <td className="py-3">
                          La prière peut être renouvelée autant de fois que
                          nécessaire
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Il faut un imam pour la faire
                        </td>
                        <td className="py-3">
                          Tout musulman peut l&apos;accomplir seul, c&apos;est
                          une prière individuelle
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          La réponse est immédiate
                        </td>
                        <td className="py-3">
                          La direction divine peut se révéler progressivement,
                          au fil des jours ou des semaines
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Istikhara-la-priere-de-consultation-etape-par-etape-1.jpg"
                    alt="Comprendre la réponse de l'istikhara, mythes et réalités"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Témoignages et exemples concrets */}
              {/* ============================================ */}
              <section id="temoignages" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Témoignages et exemples concrets
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;istikhara n&apos;est pas une pratique théorique réservée
                  aux livres de fiqh. Des milliers de croyants y ont recours
                  chaque jour pour éclairer leurs décisions. Voici quelques
                  situations concrètes qui illustrent comment cette prière
                  accompagne les musulmans dans les moments de doute.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Myriam, entrepreneur : lancer ou non son projet
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Myriam hésitait depuis des mois à quitter son emploi
                      stable pour lancer sa propre entreprise. Après avoir
                      consulté ses proches et pesé le pour et le contre, elle
                      a prié l&apos;istikhara pendant plusieurs jours. Au
                      fil du temps, elle a ressenti un apaisement grandissant
                      à l&apos;idée de se lancer. Les circonstances se sont
                      alignées de manière inattendue : un local s&apos;est
                      libéré dans son quartier, un ancien collègue lui a
                      proposé un partenariat. Elle y a vu la réponse
                      d&apos;Allah. Son entreprise est aujourd&apos;hui
                      florissante, et elle continue de prier l&apos;istikhara
                      pour chaque décision stratégique.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Yassine, étudiant : choisir sa voie universitaire
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Admis dans deux universités prestigieuses, Yassine ne
                      parvenait pas à trancher. L&apos;une était plus
                      renommée, l&apos;autre plus proche de sa famille et
                      d&apos;une mosquée active. Après l&apos;istikhara, il a
                      ressenti une inclination nette vers la seconde option.
                      Il s&apos;y est inscrit et a trouvé un cercle
                      d&apos;étudiants musulmans qui a profondément marqué
                      son parcours spirituel. Avec le recul, il considère que
                      ce choix a été le meilleur de sa vie, tant sur le plan
                      académique que personnel.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Imane, en réflexion sur un mariage
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Imane avait reçu une demande en mariage d&apos;un homme
                      qui semblait réunir toutes les qualités recherchées. Sa
                      famille était favorable, ses amies l&apos;encourageaient.
                      Pourtant, un malaise persistait dans son cœur.
                      L&apos;istikhara a renforcé ce sentiment de malaise
                      plutôt que de l&apos;apaiser. Elle a finalement décliné
                      la demande. Quelques mois plus tard, elle a appris que
                      cet homme n&apos;avait pas été transparent sur certains
                      aspects de sa vie. L&apos;istikhara l&apos;avait
                      protégée d&apos;une situation difficile.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Sami, professionnel en transition : déménager à
                      l&apos;étranger
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground-secondary">
                      Sami avait reçu une offre d&apos;emploi dans un pays
                      étranger. Le salaire était attractif, mais le
                      déménagement signifiait s&apos;éloigner de ses parents
                      âgés et de sa communauté. Après l&apos;istikhara, les
                      portes se sont progressivement fermées : le visa a été
                      retardé, les conditions du contrat ont changé
                      défavorablement. Il a compris que ce n&apos;était pas le
                      bon moment. Quelques mois après, une opportunité
                      similaire s&apos;est présentée dans sa propre ville.
                      Il l&apos;a saisie avec gratitude.
                    </p>
                  </div>
                </div>

                {/* Profil cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un étudiant
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;istikhara accompagne les choix académiques et
                      professionnels avec sérénité. Face à une orientation, un
                      stage ou un projet de recherche, cette prière aide à
                      prendre du recul et à confier son avenir à Allah tout en
                      fournissant les efforts nécessaires.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un couple en réflexion
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Mariage</Link>, achat immobilier, arrivée d&apos;un enfant :
                      les décisions de couple méritent une consultation divine.
                      Chacun des deux conjoints peut prier l&apos;istikhara
                      individuellement, puis échanger sur les sentiments
                      ressentis pour prendre une décision éclairée.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un professionnel en transition
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Changement de carrière, création d&apos;entreprise,
                      mutation géographique : les transitions professionnelles
                      sont des moments de vulnérabilité. L&apos;istikhara
                      offre un cadre de réflexion apaisé et une connexion
                      spirituelle précieuse pour avancer avec confiance.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour tout croyant face à un choix
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Quelle que soit la nature du choix, l&apos;istikhara
                      rappelle que le croyant n&apos;est jamais seul face à
                      ses décisions. En sollicitant la direction d&apos;Allah,
                      on transforme l&apos;incertitude en confiance et
                      l&apos;hésitation en sérénité.
                    </p>
                  </div>
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour approfondir votre relation avec la prière"
                  href="/prier-islam-excellence-spirituelle"
                  linkText="Découvrir la prière en islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles en lien avec la prière et la spiritualité
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier en islam
                  </Link>
                  <Link
                    href="/mariage-islam-presages-significations"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Mariage en islam
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
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
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Protection spirituelle en islam
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
