import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Rêver de son père en islam : signification selon Ibn Sirin et An-Nabulsi",
  description:
    "Que signifie rêver de son père en islam ? Père vivant, décédé, souriant ou en colère : découvrez les interprétations d'Ibn Sirin et d'An-Nabulsi selon votre situation.",
  alternates: {
    canonical: "https://www.islamreligion.fr/rever-pere-islam",
  },
};

const tocItems = [
  { id: "symbolique", label: "Symbolique du père en islam" },
  { id: "savants", label: "Ibn Sirin et An-Nabulsi" },
  { id: "vivant-decede", label: "Père vivant ou décédé" },
  { id: "emotions", label: "Père souriant ou en colère" },
  { id: "parler", label: "Parler avec son père" },
  { id: "malade", label: "Père malade en rêve" },
  { id: "profils", label: "Selon le rêveur" },
  { id: "conseils", label: "Conseils après le rêve" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Rêver de son père décédé en islam est-il un message de l'au-delà ?",
    answer:
      "Selon la tradition islamique, rêver de son père décédé peut constituer un message véridique. Les savants comme Ibn Sirin considèrent que le défunt qui apparaît serein ou souriant se trouve dans un bon état spirituel auprès d'Allah. Ce type de rêve invite le rêveur à multiplier les invocations (dou'a) et les aumônes en faveur de l'âme du père.",
  },
  {
    question: "Que signifie rêver de son père en colère en islam ?",
    answer:
      "Un père en colère dans un rêve islamique traduit souvent un avertissement moral. Les interprètes y voient un rappel à corriger un comportement, à respecter davantage ses obligations religieuses ou à réparer une injustice. Ce rêve appelle à l'introspection et au repentir sincère (tawba).",
  },
  {
    question: "Rêver que son père vivant meurt en islam : faut-il s'inquiéter ?",
    answer:
      "Rêver de la mort de son père vivant ne signifie pas un décès imminent. En oniromancie islamique, ce rêve symbolise souvent un changement de situation, une transition dans la vie du rêveur ou la fin d'une période de dépendance. Les savants recommandent de faire des invocations de protection pour son père et de renforcer les liens familiaux.",
  },
  {
    question: "Que signifie rêver de parler avec son père décédé ?",
    answer:
      "Parler avec un père décédé dans un rêve est considéré comme un signe fort en islam. Si les paroles sont claires et bienveillantes, elles peuvent contenir une guidance ou un conseil véridique. Ibn Sirin enseigne que les paroles d'un mort en rêve sont souvent vraies, car le défunt se trouve dans le domaine de la vérité (Dar al-Haqq).",
  },
  {
    question:
      "Rêver de son père souriant en islam : quelle interprétation ?",
    answer:
      "Un père souriant en rêve est un signe très positif selon les savants musulmans. Il indique la satisfaction paternelle, la bénédiction et la miséricorde divine. Si le père est décédé, ce sourire témoigne de son bon état dans l'au-delà et de sa satisfaction envers le rêveur.",
  },
  {
    question: "Pourquoi rêve-t-on souvent de son père en islam ?",
    answer:
      "Les rêves récurrents du père peuvent traduire un besoin de guidance, un attachement profond ou un appel à honorer la mémoire paternelle. Si le père est décédé, ces rêves peuvent indiquer qu'il a besoin de prières, d'aumônes ou de lecture du Coran en son nom. Les savants conseillent de faire la sadaqah jariyah pour l'âme du défunt.",
  },
  {
    question: "Rêver de son père malade en islam : que faire ?",
    answer:
      "Voir son père malade en rêve symbolise souvent une fragilité dans la sphère familiale ou un manque dans la pratique religieuse. Ce rêve invite à prendre soin de sa famille, à prier pour la santé de ses proches et à vérifier que les obligations envers les parents sont bien remplies, conformément au verset coranique sur la bienfaisance envers les parents.",
  },
  {
    question:
      "Quelle différence entre rêver de son père vivant et décédé en islam ?",
    answer:
      "Rêver d'un père vivant reflète généralement la relation actuelle avec lui : besoin de conseil, désir de réconciliation ou gratitude. Rêver d'un père décédé porte une dimension spirituelle plus forte : message de l'au-delà, demande d'invocations ou signe de son état dans le barzakh. Les deux types appellent à renforcer les liens familiaux et la piété filiale.",
  },
];

export default function ReverPereIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/rever-pere-islam/#article",
        headline:
          "Rêver de son père en islam : signification selon Ibn Sirin et An-Nabulsi",
        description:
          "Que signifie rêver de son père en islam ? Père vivant, décédé, souriant ou en colère : découvrez les interprétations d'Ibn Sirin et d'An-Nabulsi selon votre situation.",
        image:
          "/images/famille-musulmane-islam-croissant-lune-valeurs.jpg",
        datePublished: "2026-03-06",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/rever-pere-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/rever-pere-islam/#breadcrumb",
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
            name: "Rêver de son père",
            item: "https://www.islamreligion.fr/rever-pere-islam",
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
          title="Rêver de son père en islam : signification selon Ibn Sirin et An-Nabulsi"
          subtitle="Père vivant ou décédé, souriant ou en colère : découvrez ce que signifie voir son père dans un rêve selon la tradition islamique."
          imageSrc="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
          imageAlt="Famille musulmane représentant les valeurs islamiques du père, croissant de lune et spiritualité"
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
                <span className="text-foreground">Rêver de son père</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de son père en islam revêt une signification profonde,
                  liée à l&apos;autorité, la protection et la transmission
                  spirituelle. Que le père apparaisse vivant ou décédé, souriant
                  ou en colère, chaque détail oriente l&apos;interprétation.
                  Les savants Ibn Sirin et An-Nabulsi offrent des clés de lecture
                  précieuses, toujours ancrées dans le Coran et la Sunna.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Symbolique du père */}
              {/* ============================================ */}
              <section id="symbolique" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Symbolique du père dans la tradition onirique islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le père occupe une place centrale dans la cosmologie familiale
                  musulmane. Le Coran commande à plusieurs reprises la
                  bienfaisance envers les parents, et le père y représente le
                  pilier de l&apos;autorité, de la subsistance et de la
                  protection. Lorsqu&apos;il apparaît en rêve, cette figure
                  paternelle porte une charge symbolique considérable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Dans la pensée onirique islamique, le père symbolise
                  l&apos;autorité légitime, la sagesse acquise par
                  l&apos;expérience et le lien avec les racines familiales. Il
                  peut aussi incarner la loi, le cadre moral et la guidance
                  spirituelle que le rêveur recherche ou dont il a besoin.
                  Certains interprètes voient dans la figure paternelle un
                  miroir de la relation du croyant avec Allah, le Protecteur
                  suprême.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a rappelé que la
                  satisfaction d&apos;Allah passe par la satisfaction du père, et
                  que la colère d&apos;Allah accompagne la colère du père. Ce
                  hadith, rapporté par At-Tirmidhi, éclaire la dimension
                  spirituelle du père dans les rêves : sa présence onirique
                  reflète souvent l&apos;état de la relation du rêveur avec ses
                  devoirs familiaux et religieux.
                </p>

                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Les trois dimensions du père en rêve
                  </h3>
                  <ul className="mt-3 space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">&#9670;</span>
                      <span>
                        <strong>Dimension protectrice :</strong> le père
                        représente la sécurité, le refuge et la stabilité
                        matérielle. Le voir en rêve peut traduire un besoin de
                        réassurance face aux difficultés.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">&#9670;</span>
                      <span>
                        <strong>Dimension morale :</strong> il incarne la
                        conscience, le rappel des valeurs et la rectitude. Son
                        apparition invite à examiner ses choix et ses actions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">&#9670;</span>
                      <span>
                        <strong>Dimension spirituelle :</strong> le père peut
                        symboliser le lien avec la foi transmise, la chaîne de
                        la piété filiale et l&apos;héritage religieux.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La relation entre le père et l&apos;enfant dans le rêve
                  reflète souvent la qualité de la piété filiale (birr
                  al-walidayn). Un échange harmonieux traduit une conscience
                  tranquille, tandis qu&apos;un conflit peut signaler un
                  manquement à corriger. Les interprètes insistent sur la
                  nécessité d&apos;analyser chaque détail : le lieu, les
                  vêtements du père, ses paroles et l&apos;émotion ressentie au
                  réveil.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Ibn Sirin et An-Nabulsi */}
              {/* ============================================ */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Ce que disent Ibn Sirin et An-Nabulsi sur le rêve du père
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Les deux plus grands interprètes de rêves de la tradition
                  musulmane, Ibn Sirin (VIIIe siècle) et An-Nabulsi (XVIIe
                  siècle), ont consacré des passages détaillés à la figure
                  paternelle dans les songes. Leurs analyses restent des
                  références pour les musulmans du monde entier.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Selon Ibn Sirin
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      Ibn Sirin, dans son ouvrage de référence &quot;Muntakhab
                      al-Kalam fi Tafsir al-Ahlam&quot;, enseigne que voir son
                      père en rêve renvoie à la situation réelle du rêveur. Un
                      père bienveillant annonce une période de chance et de
                      réussite. Un père sévère met en garde contre une faute
                      morale. Si le père défunt apparaît habillé de blanc et
                      souriant, c&apos;est le signe d&apos;un bon état dans
                      l&apos;au-delà. Ibn Sirin précise que les paroles d&apos;un
                      père décédé sont à prendre au sérieux, car &quot;le mort
                      habite la demeure de la vérité&quot;.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Selon An-Nabulsi
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                      An-Nabulsi, dans &quot;Ta&apos;tir al-Anam fi Tafsir
                      al-Manam&quot;, approfondit l&apos;analyse en liant la
                      figure du père à l&apos;autorité et à la subsistance
                      (rizq). Rêver de son père en bonne santé annonce une
                      amélioration de la situation financière et sociale. Le voir
                      malade peut indiquer un blocage dans les affaires ou un
                      besoin de renouer avec sa foi. An-Nabulsi souligne que le
                      père qui donne un objet au rêveur transmet une baraka
                      (bénédiction), tandis que le père qui reprend un objet
                      annonce une perte ou un sacrifice à venir.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les deux savants s&apos;accordent sur un point fondamental :
                  la vision du père en rêve n&apos;est jamais anodine. Elle
                  touche aux racines mêmes de l&apos;identité du rêveur, à sa
                  relation avec l&apos;autorité et à son cheminement spirituel.
                  Ils recommandent tous deux de pratiquer l&apos;istikhara
                  (prière de consultation) et de consulter un savant de
                  confiance en cas de doute sur l&apos;interprétation.
                </p>

                <div className="mt-6 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-sm italic leading-relaxed text-foreground">
                    &quot;Les rêves véridiques sont une partie de la prophétie.
                    Celui qui voit son père en rêve, qu&apos;il réfléchisse à
                    l&apos;état de sa piété filiale et qu&apos;il multiplie les
                    invocations pour lui.&quot;
                  </p>
                  <p className="mt-2 text-xs font-medium text-foreground-secondary">
                    — Principe rapporté par les interprètes classiques,
                    inspiré du hadith sur les rêves véridiques (Sahih
                    al-Bukhari)
                  </p>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Père vivant ou décédé */}
              {/* ============================================ */}
              <section id="vivant-decede" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de son père vivant ou décédé : interprétations
                  distinctes
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La signification d&apos;un rêve change radicalement selon que
                  le père est encore en vie ou qu&apos;il est décédé.
                  L&apos;oniromancie islamique distingue clairement ces deux
                  situations, chacune portant ses propres messages et
                  enseignements.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Rêver de son père vivant
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque le père est encore en vie, le rêve reflète
                  généralement la dynamique de la relation père-enfant. Voir son
                  père en bonne santé et de bonne humeur annonce une période
                  favorable, marquée par la stabilité et la réussite. Le rêveur
                  peut s&apos;attendre à recevoir un soutien ou un conseil
                  précieux dans sa vie éveillée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le père vivant apparaît triste ou distant, le rêve invite à
                  rétablir la communication, à vérifier qu&apos;on remplit bien
                  ses devoirs filiaux et à demander pardon si nécessaire. Les
                  savants soulignent que ce type de rêve peut aussi refléter une
                  projection des inquiétudes du rêveur sur la santé ou le
                  bien-être de son père.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Rêver de son père décédé
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le rêve du père décédé porte une dimension spirituelle bien
                  plus profonde. Selon Ibn Sirin, ce type de rêve constitue
                  souvent un pont entre le monde des vivants et le barzakh
                  (l&apos;intervalle entre la mort et la résurrection). Le père
                  décédé qui apparaît en rêve peut transmettre un message
                  véridique, demander des prières ou manifester sa satisfaction.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le père décédé apparaît rajeuni, habillé de vêtements
                  blancs ou lumineux, c&apos;est le signe qu&apos;il se trouve
                  dans un état de grâce auprès d&apos;Allah. En revanche,
                  s&apos;il semble fatigué, triste ou mal vêtu, les interprètes
                  recommandent de multiplier les invocations, la récitation du
                  Coran et les aumônes en son nom. La sadaqah jariyah (aumône
                  continue) est particulièrement encouragée.
                </p>

                <div className="mt-6 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-accent text-foreground">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Contexte</th>
                        <th className="px-4 py-3 font-semibold">Père vivant</th>
                        <th className="px-4 py-3 font-semibold">
                          Père décédé
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-foreground-secondary">
                      <tr>
                        <td className="px-4 py-3 font-medium">En bonne santé</td>
                        <td className="px-4 py-3">
                          Stabilité, soutien à venir
                        </td>
                        <td className="px-4 py-3">
                          Bon état dans l&apos;au-delà
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Triste ou malade</td>
                        <td className="px-4 py-3">
                          Besoin de rapprochement
                        </td>
                        <td className="px-4 py-3">
                          Demande de prières et d&apos;aumônes
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Qui parle</td>
                        <td className="px-4 py-3">
                          Conseil ou avertissement
                        </td>
                        <td className="px-4 py-3">
                          Message véridique du barzakh
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium">Qui donne un objet</td>
                        <td className="px-4 py-3">
                          Soutien matériel ou moral
                        </td>
                        <td className="px-4 py-3">
                          Baraka et bénédiction transmise
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Père souriant ou en colère */}
              {/* ============================================ */}
              <section id="emotions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Père souriant ou en colère : les émotions dans le rêve
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;expression émotionnelle du père dans le rêve constitue
                  l&apos;un des indices les plus significatifs pour
                  l&apos;interprétation. Les savants musulmans y attachent une
                  grande importance, car elle révèle l&apos;orientation globale
                  du message onirique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Rêver de son père souriant
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un père souriant en rêve est un signe de satisfaction, de
                  bénédiction et de bonne nouvelle. Selon Ibn Sirin, ce sourire
                  paternel annonce une réussite prochaine, un bienfait matériel
                  ou une élévation spirituelle. Si le père décédé sourit, cela
                  témoigne de sa satisfaction envers le rêveur et de son bon
                  état auprès d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  An-Nabulsi ajoute que le sourire du père en rêve peut
                  également indiquer que les invocations du rêveur parviennent
                  au défunt et lui apportent du réconfort. C&apos;est un
                  encouragement à poursuivre les bonnes actions et les prières
                  en sa faveur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Rêver de son père en colère
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  La colère du père dans un rêve est un avertissement clair. Les
                  interprètes la relient au hadith du Prophète (paix et salut
                  sur lui) : &quot;La satisfaction d&apos;Allah réside dans la
                  satisfaction du père, et la colère d&apos;Allah réside dans la
                  colère du père.&quot; Ce rêve invite à un examen de conscience
                  approfondi.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Plusieurs causes possibles sont à envisager : un manquement
                  aux obligations religieuses, un comportement injuste envers
                  autrui, une négligence des liens familiaux ou un éloignement
                  de la voie droite. Le rêveur est appelé à se repentir
                  (tawba), à corriger sa conduite et, si le père est vivant, à
                  lui demander pardon directement.
                </p>

                <div className="mt-6 rounded-xl border border-border bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Autres émotions paternelles en rêve
                  </h3>
                  <ul className="mt-3 space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">&#9670;</span>
                      <span>
                        <strong>Père qui pleure :</strong> peut indiquer un
                        besoin urgent de prières, une tristesse liée à la
                        situation du rêveur ou un rappel de la fragilité de la
                        vie terrestre.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">&#9670;</span>
                      <span>
                        <strong>Père silencieux :</strong> traduit souvent une
                        attente, une patience ou une observation. Le rêveur est
                        invité à réfléchir à ses choix actuels.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 text-secondary">&#9670;</span>
                      <span>
                        <strong>Père qui embrasse :</strong> signe de
                        réconciliation, de tendresse et de baraka. C&apos;est
                        un rêve particulièrement réconfortant.
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Parler avec son père */}
              {/* ============================================ */}
              <section id="parler" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de parler avec son père en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La parole occupe une place privilégiée dans
                  l&apos;interprétation des rêves islamiques. Lorsque le père
                  s&apos;adresse au rêveur, le contenu, le ton et le contexte
                  de ses paroles prennent une valeur considérable.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin affirme que les paroles d&apos;un défunt dans un
                  rêve sont souvent véridiques, car il se trouve dans la demeure
                  de la vérité (Dar al-Haqq). Si le père décédé donne un
                  conseil, une mise en garde ou une information précise, le
                  rêveur doit y prêter une attention particulière et agir en
                  conséquence.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Quand un père vivant parle dans un rêve, ses paroles reflètent
                  souvent ce que le rêveur a besoin d&apos;entendre : un
                  encouragement, un rappel à l&apos;ordre ou une validation de
                  ses choix. Les interprètes distinguent plusieurs cas de
                  figure :
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      Paroles bienveillantes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un père qui parle avec douceur et amour annonce une
                      période favorable. Ses paroles peuvent contenir une
                      guidance ou un encouragement à persévérer sur la voie de
                      la foi.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      Paroles d&apos;avertissement
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si le père met en garde ou réprimande, le rêveur doit
                      examiner sa conduite. Ce type de rêve appelle au repentir
                      et à la correction des erreurs.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      Demande de prières
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Un père décédé qui demande des prières ou évoque un besoin
                      signale qu&apos;il faut multiplier les invocations, les
                      aumônes et la lecture du Coran en son nom.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      Paroles incompréhensibles
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Des paroles confuses ou inaudibles peuvent indiquer un
                      rêve agité (hulm) plutôt qu&apos;une vision véridique.
                      Les savants recommandent alors de chercher refuge auprès
                      d&apos;Allah et de ne pas s&apos;en inquiéter.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Père malade */}
              {/* ============================================ */}
              <section id="malade" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Rêver de son père malade en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voir son père malade dans un rêve suscite naturellement
                  l&apos;inquiétude, mais l&apos;interprétation islamique offre
                  une lecture plus nuancée que la simple crainte d&apos;une
                  maladie physique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Selon An-Nabulsi, la maladie du père en rêve symbolise souvent
                  une faiblesse dans la sphère de l&apos;autorité ou de la
                  subsistance. Elle peut indiquer des difficultés financières à
                  venir, un affaiblissement des liens familiaux ou un besoin de
                  renforcer sa pratique religieuse. Le père malade peut aussi
                  représenter une fragilité dans la foi du rêveur lui-même.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Sirin enseigne que si le père malade guérit dans le rêve,
                  c&apos;est un signe favorable qui annonce la résolution
                  prochaine d&apos;un problème. Si la maladie persiste ou
                  s&apos;aggrave, le rêveur est invité à redoubler de prières,
                  à vérifier ses obligations envers ses parents et à faire
                  l&apos;aumône.
                </p>

                <div className="mt-6 rounded-xl border-l-4 border-secondary bg-accent p-5">
                  <p className="text-sm leading-relaxed text-foreground">
                    <strong>Conseil pratique :</strong> après un rêve où le père
                    apparaît malade, les savants recommandent de réciter la
                    sourate Al-Fatiha pour sa guérison, de faire une sadaqah en
                    son nom et de prendre des nouvelles de sa santé réelle si le
                    père est encore en vie. Si le père est décédé, multiplier
                    les invocations de pardon (istighfar) en sa faveur.
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il convient de distinguer la maladie physique de la maladie
                  spirituelle dans le rêve. Un père fiévreux ou alité peut
                  symboliser une agitation intérieure, tandis qu&apos;un père
                  dont le visage est assombri ou transformé peut indiquer une
                  préoccupation liée à la foi ou à la moralité. Dans tous les
                  cas, ce rêve est un appel à la vigilance et à la bienveillance
                  filiale.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon le profil du rêveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon le profil du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;interprétation d&apos;un rêve de père varie selon la
                  situation personnelle du rêveur. Les savants musulmans
                  tiennent compte de l&apos;âge, du sexe, du statut marital et
                  de la relation réelle avec le père pour affiner leur lecture.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un fils
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le fils qui rêve de son père reçoit souvent un message lié
                      à ses responsabilités. Un père bienveillant encourage à
                      poursuivre sur la bonne voie. Un père sévère rappelle les
                      devoirs envers la famille et la communauté. Ce rêve peut
                      aussi refléter le désir de se montrer digne de
                      l&apos;héritage paternel.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une fille
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La fille qui rêve de son père voit souvent dans cette
                      vision un besoin de protection et de sécurité. Si le père
                      sourit, c&apos;est un signe de satisfaction et de baraka
                      sur sa vie. Si le père pleure, cela peut indiquer une
                      inquiétude paternelle sur les choix ou la situation de sa
                      fille.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une personne mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de son père quand on est marié(e) touche souvent à
                      la vie conjugale et familiale. Le père peut incarner un
                      modèle à suivre ou un rappel des valeurs familiales. Son
                      approbation en rêve annonce la stabilité du foyer, tandis
                      que son mécontentement invite à examiner la qualité de la
                      relation conjugale.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une personne en difficulté
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Les personnes traversant une épreuve (maladie, perte
                      d&apos;emploi, deuil) et rêvant de leur père reçoivent
                      souvent un message de réconfort et d&apos;espoir. Le père
                      symbolise alors le soutien divin et l&apos;assurance que
                      l&apos;épreuve sera surmontée avec patience et foi.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 8 : Conseils après le rêve */}
              {/* ============================================ */}
              <section id="conseils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire après avoir rêvé de son père en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La tradition prophétique offre des recommandations précises
                  sur la conduite à adopter après un rêve marquant. Voici les
                  étapes à suivre après avoir rêvé de son père.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      1. Distinguer le type de rêve
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a enseigné trois types
                      de rêves : la vision véridique (ru&apos;ya) venant
                      d&apos;Allah, le rêve agité (hulm) provenant de Shaytan,
                      et le rêve reflétant les pensées du jour. Si le rêve est
                      paisible et cohérent, il s&apos;agit probablement
                      d&apos;une ru&apos;ya. S&apos;il est perturbant et
                      confus, c&apos;est un hulm dont il ne faut pas
                      s&apos;inquiéter.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      2. Réagir selon la nature du rêve
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Pour un bon rêve : remercier Allah, le partager avec un
                      proche de confiance et en tirer un enseignement. Pour un
                      mauvais rêve : cracher légèrement trois fois à gauche,
                      chercher refuge auprès d&apos;Allah contre le mal de
                      Shaytan, changer de côté et ne pas en parler.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      3. Multiplier les invocations pour le père
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Que le père soit vivant ou décédé, réciter la dou&apos;a :
                      &quot;Rabbir-hamhuma kama rabbayani saghira&quot; (Seigneur,
                      fais-leur miséricorde comme ils m&apos;ont élevé quand
                      j&apos;étais petit). Si le père est décédé, ajouter la
                      récitation de la Fatiha, la sadaqah jariyah et la lecture
                      du Coran en son nom.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      4. Renforcer la piété filiale
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rêve de père est souvent un rappel à honorer ses
                      parents. Si le père est vivant, prendre de ses nouvelles,
                      lui rendre visite et lui exprimer sa gratitude. Si le père
                      est décédé, maintenir les liens avec ses proches, honorer
                      ses engagements et perpétuer ses bonnes actions.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <h3 className="text-base font-semibold text-primary">
                      5. Consulter un savant si nécessaire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      En cas de rêve récurrent ou particulièrement troublant,
                      consulter un imam ou un spécialiste de
                      l&apos;interprétation des rêves. Ne jamais se fier aux
                      interprétations hasardeuses trouvées sur internet sans
                      vérification auprès de sources fiables.
                    </p>
                  </div>
                </div>

                <Image
                  src="/images/famille-musulmane-islam-croissant-lune-valeurs.jpg"
                  alt="Famille musulmane symbolisant les valeurs de piété filiale et de transmission en islam"
                  width={800}
                  height={500}
                  className="mt-8 rounded-xl"
                />
              </section>

              {/* ============================================ */}
              {/* AffiliateForm + FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Approfondissez votre compréhension des rêves en islam"
                description="La connaissance du Coran et de la langue arabe enrichit la compréhension des symboles oniriques. Choisissez votre formation pour aller plus loin."
                preselect="coran"
              />

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
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;un mort en islam
                  </Link>
                  <Link
                    href="/rever-bebe-nouveau-ne-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;un bébé en islam
                  </Link>
                  <Link
                    href="/rever-enceinte-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;être enceinte en islam
                  </Link>
                  <Link
                    href="/rever-perdre-dents-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de perdre ses dents en islam
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
