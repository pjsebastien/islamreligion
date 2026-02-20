import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Droits de la femme dans le divorce islamique : talaq, khula et protection",
  description:
    "Découvrez les droits de la femme dans le divorce en islam : khula, droits financiers pendant la iddah, garde des enfants et recours juridiques selon le Coran et la Sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/droits-femme-divorce-islamique",
  },
};

const tocItems = [
  { id: "droits-fondamentaux", label: "Droits fondamentaux de la femme" },
  { id: "khula", label: "Le khula : droit de demander le divorce" },
  { id: "droits-financiers", label: "Droits financiers pendant la iddah" },
  { id: "garde-enfants", label: "Garde des enfants (hadana)" },
  { id: "recours-juridiques", label: "Recours juridiques et protection" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "La femme peut-elle demander le divorce en islam ?",
    answer:
      "Oui, la femme dispose de plusieurs voies pour demander le divorce en islam. Le khula lui permet de solliciter la dissolution du mariage en restituant tout ou partie de sa dot au mari. Si le mari refuse, elle peut recourir au faskh, c&apos;est-a-dire la dissolution judiciaire prononcée par un qadi (juge islamique) en cas de préjudice avéré, d&apos;abandon ou de manquement grave aux obligations conjugales.",
  },
  {
    question: "Quels sont les droits financiers de la femme après le divorce ?",
    answer:
      "Après le divorce, la femme a droit au logement et a la nafaqa (pension alimentaire) pendant toute la durée de la iddah. Elle conserve intégralement sa dot (mahr) si le divorce est prononcé par le mari (talaq). Elle peut également recevoir une mut&apos;ah, un don de consolation destiné a compenser le préjudice subi. Le mari reste tenu de subvenir aux besoins de ses enfants.",
  },
  {
    question: "Qui obtient la garde des enfants en islam ?",
    answer:
      "En islam, la mère bénéficie d&apos;une priorité pour la garde (hadana) des jeunes enfants, en raison de la tendresse et des soins qu&apos;elle leur apporte naturellement. Cette priorité s&apos;applique généralement jusqu&apos;a l&apos;age de sept ans pour les garcons et jusqu&apos;a la puberté pour les filles, selon les écoles juridiques. Le bien-être de l&apos;enfant reste le critère déterminant dans tous les cas.",
  },
  {
    question: "La femme conserve-t-elle sa dot après le divorce ?",
    answer:
      "Dans le cas d&apos;un talaq (divorce initié par le mari), la femme conserve intégralement sa dot (mahr). Dans le cas d&apos;un khula (divorce demandé par la femme), elle peut être amenée a restituer tout ou partie de la dot en contrepartie de la dissolution du mariage. Le Coran précise qu&apos;il n&apos;est pas licite pour le mari de reprendre ce qu&apos;il a donné, sauf accord mutuel (Coran 2:229).",
  },
  {
    question: "Qu&apos;est-ce que le khula et comment le demander ?",
    answer:
      "Le khula est le droit accordé a la femme de demander la dissolution de son mariage en restituant une compensation financière au mari, généralement la dot ou une partie de celle-ci. La procédure implique une demande formelle auprès du mari ou, en cas de refus, auprès d&apos;un tribunal islamique. Le hadith de la femme de Thabit ibn Qays (rapporté par al-Bukhari) constitue le fondement principal de cette pratique.",
  },
  {
    question: "La femme a-t-elle droit au logement pendant la iddah ?",
    answer:
      "Oui, le Coran affirme clairement que la femme en période de iddah a droit au logement dans des conditions décentes. Allah dit : « Logez-les la ou vous logez selon vos moyens » (Coran 65:6). Le mari ne peut pas expulser son épouse du domicile conjugal pendant cette période, et il doit continuer a subvenir a ses besoins fondamentaux.",
  },
  {
    question:
      "Que faire si le mari refuse le divorce demandé par la femme ?",
    answer:
      "Si le mari refuse le khula, la femme peut saisir un qadi (juge islamique) ou un tribunal compétent pour demander un faskh (dissolution judiciaire). Le juge examine les motifs invoqués (préjudice, abandon, manquement aux obligations) et peut prononcer la dissolution du mariage même sans le consentement du mari. La médiation familiale est souvent tentée en amont de la procédure judiciaire.",
  },
  {
    question:
      "Les droits de la femme divorcée varient-ils selon les écoles juridiques ?",
    answer:
      "Oui, les quatre écoles juridiques sunnites (hanafite, malikite, chafiite et hanbalite) présentent des nuances dans l&apos;application des droits de la femme divorcée, notamment en ce qui concerne la durée de la garde des enfants, les conditions du khula et le montant de la mut&apos;ah. Toutefois, les principes fondamentaux de justice, de dignité et de protection de la femme restent communs a toutes les écoles.",
  },
];

export default function DroitsFemmeDivorce() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/droits-femme-divorce-islamique/#article",
        headline:
          "Droits de la femme dans le divorce islamique : talaq, khula et protection",
        description:
          "Découvrez les droits de la femme dans le divorce en islam : khula, droits financiers pendant la iddah, garde des enfants et recours juridiques.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Droits-de-la-femme-dans-le-divorce-islamique-guide-juridique-1.jpg",
        datePublished: "2025-08-27",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/droits-femme-divorce-islamique/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/droits-femme-divorce-islamique/#breadcrumb",
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
            name: "Droits de la femme dans le divorce",
            item: "https://www.islamreligion.fr/droits-femme-divorce-islamique",
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
          title="Droits de la femme dans le divorce islamique"
          subtitle="Talaq, khula, faskh : comprendre les droits financiers, la garde des enfants et les recours juridiques de la femme selon le Coran et la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Droits-de-la-femme-dans-le-divorce-islamique-guide-juridique-1.jpg"
          imageAlt="Droits de la femme dans le divorce islamique, protection et recours juridiques"
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
                <span className="text-foreground">
                  Droits de la femme dans le divorce
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;islam accorde a la femme des droits précis et protecteurs
                  en cas de divorce. Qu&apos;il s&apos;agisse du talaq, du khula ou
                  du faskh, la législation islamique garantit la dignité, la
                  sécurité financière et le bien-être de la femme et de ses
                  enfants. Ce cadre juridique, fondé sur le Coran et la Sunna,
                  vise a préserver la justice et a empêcher toute forme
                  d&apos;oppression.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Droits fondamentaux */}
              {/* ============================================ */}
              <section id="droits-fondamentaux" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les droits fondamentaux de la femme en cas de divorce
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le divorce en islam n&apos;est jamais encouragé, mais il est
                  reconnu comme une issue légitime lorsque la vie conjugale
                  devient insoutenable. Le Prophète (paix et bénédictions sur
                  lui) a rappelé que parmi les choses licites, le divorce est
                  celle qu&apos;Allah déteste le plus. Toutefois, lorsque la
                  séparation s&apos;impose, la femme ne doit en aucun cas être
                  lésée dans ses droits.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran pose des principes clairs de justice et de
                  bienveillance envers la femme divorcée. Allah dit :
                  « Retenez-les de manière convenable ou libérez-les de manière
                  convenable. Mais ne les retenez pas pour leur faire du tort,
                  car vous seriez alors injustes » (Coran 2:231). Ce verset
                  fonde l&apos;obligation de traiter la femme avec dignité et
                  respect tout au long du processus de séparation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate At-Talaq (sourate 65) détaille les obligations du
                  mari envers la femme en période de iddah, notamment le droit au
                  logement et a la subsistance. Allah précise : « Logez-les la
                  ou vous logez selon vos moyens et ne leur faites pas de tort
                  pour les contraindre » (Coran 65:6). Ces dispositions
                  coraniques constituent le socle de la protection de la femme
                  dans le divorce islamique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dignité et respect :</strong> la femme ne peut être
                      humiliée ni contrainte a rester dans un mariage nuisible.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sécurité financière :</strong> le mari est tenu de
                      subvenir aux besoins de la femme pendant la iddah et de
                      régler la dot restante.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Droit a l&apos;initiative :</strong> la femme peut
                      demander le divorce par le biais du khula ou du faskh.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection des enfants :</strong> le bien-être de
                      l&apos;enfant prime dans toute décision relative a la
                      garde.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Recours juridique :</strong> en cas de refus du
                      mari, la femme peut saisir un juge pour obtenir la
                      dissolution du mariage.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Trois formes principales de divorce coexistent en droit
                  islamique. Le <strong>talaq</strong> est le divorce prononcé
                  par le mari, qui peut être révocable ou irrévocable selon les
                  circonstances. Le <strong>khula</strong> permet a la femme de
                  demander la séparation en restituant une compensation au mari.
                  Le <strong>faskh</strong> est la dissolution judiciaire
                  prononcée par un juge en cas de préjudice grave. Chacune de ces
                  voies s&apos;accompagne de droits spécifiques pour la femme,
                  destinés a garantir sa protection et celle de ses enfants.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Droits-de-la-femme-dans-le-divorce-islamique-guide-juridique-1.jpg"
                    alt="Droits fondamentaux de la femme en cas de divorce islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le khula */}
              {/* ============================================ */}
              <section id="khula" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le khula : le droit de la femme a demander le divorce
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le khula représente l&apos;une des dispositions les plus
                  significatives du droit islamique en matière de protection de
                  la femme. Il s&apos;agit du droit reconnu a l&apos;épouse de
                  demander la dissolution de son mariage lorsque la vie conjugale
                  lui est devenue insupportable, même en l&apos;absence de faute
                  du mari.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le fondement coranique du khula se trouve dans la sourate
                  Al-Baqarah : « Il ne vous est pas licite de reprendre quoi que
                  ce soit de ce que vous leur avez donné, a moins que l&apos;un
                  et l&apos;autre ne craignent de ne pas observer les limites
                  d&apos;Allah. Si vous craignez que tous deux ne puissent
                  observer les limites d&apos;Allah, alors il n&apos;y a pas de
                  péché si la femme se rachète » (Coran 2:229).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith fondateur du khula est celui de la femme de Thabit ibn
                  Qays. Celle-ci se rendit auprès du Prophète (paix et
                  bénédictions sur lui) en disant : « Je ne reproche rien a
                  Thabit ni en caractère ni en religion, mais je ne veux pas
                  tomber dans l&apos;impiété en islam. » Le Prophète lui demanda
                  alors : « Acceptes-tu de lui rendre son jardin ? » Elle
                  répondit : « Oui. » Et le Prophète ordonna a Thabit :
                  « Accepte le jardin et répudie-la d&apos;un talaq. » (Rapporté
                  par al-Bukhari.)
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce récit montre que la femme n&apos;est pas tenue de justifier
                  une faute de la part du mari pour demander le khula. Le simple
                  fait de ne plus pouvoir remplir ses devoirs conjugaux en toute
                  conscience suffit a légitimer sa demande. La restitution de la
                  dot (ou d&apos;une partie) constitue la contrepartie de cette
                  dissolution, ce qui distingue le khula du talaq ou la femme
                  conserve intégralement sa dot.
                </p>

                {/* Tableau khula */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aspect
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Détail
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Fondement
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Définition
                        </td>
                        <td className="py-3 pr-4">
                          Dissolution du mariage a la demande de la femme avec
                          restitution d&apos;une compensation
                        </td>
                        <td className="py-3">Coran 2:229</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Condition
                        </td>
                        <td className="py-3 pr-4">
                          La femme restitue tout ou partie de la dot (mahr) au
                          mari
                        </td>
                        <td className="py-3">Hadith de Thabit (al-Bukhari)</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Motif requis
                        </td>
                        <td className="py-3 pr-4">
                          Aucune faute du mari n&apos;est exigée, la femme peut
                          invoquer l&apos;incompatibilité
                        </td>
                        <td className="py-3">Consensus des savants</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Procédure
                        </td>
                        <td className="py-3 pr-4">
                          Demande amiable au mari ou saisine du tribunal
                          islamique en cas de refus
                        </td>
                        <td className="py-3">Fiqh des quatre écoles</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Iddah après khula
                        </td>
                        <td className="py-3 pr-4">
                          Un cycle menstruel selon certains savants, trois cycles
                          selon d&apos;autres
                        </td>
                        <td className="py-3">Divergence jurisprudentielle</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Nature juridique
                        </td>
                        <td className="py-3 pr-4">
                          Séparation irrévocable (pas de retour sans nouveau
                          contrat)
                        </td>
                        <td className="py-3">Majorité des juristes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le khula confère a la femme une autonomie réelle dans la
                  gestion de sa vie conjugale. Il témoigne du souci de
                  l&apos;islam de ne pas enfermer la femme dans une relation
                  dont elle ne veut plus, tout en préservant un cadre équitable
                  pour les deux parties. La compensation financière versée au
                  mari ne doit pas excéder le montant de la dot initiale, selon
                  la position majoritaire des savants.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Droits-de-la-femme-dans-le-divorce-islamique-guide-juridique-1.jpg"
                    alt="Le khula, droit de la femme a demander le divorce en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Divorce en islam : talaq, khula et procédures"
                  description="Approfondissez les trois formes de divorce en islam et leurs implications juridiques selon le Coran et la Sunna."
                  href="/divorce-islam-talaq-khula"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Droits financiers pendant la iddah */}
              {/* ============================================ */}
              <section id="droits-financiers" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les droits financiers pendant la iddah
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La iddah (période d&apos;attente après le divorce) est un temps
                  de transition durant lequel la femme bénéficie de protections
                  financières précises. Sa durée est de trois cycles menstruels
                  pour les femmes qui ont leurs règles, de trois mois lunaires
                  pour celles qui ne les ont plus, et elle s&apos;étend
                  jusqu&apos;a l&apos;accouchement pour la femme enceinte.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Durant cette période, le mari conserve l&apos;obligation de
                  subvenir aux besoins de la femme. Cette obligation couvre
                  plusieurs aspects fondamentaux que le Coran et la Sunna
                  détaillent avec précision.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le droit au logement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran ordonne au mari de loger la femme dans des
                        conditions convenables pendant la iddah. Elle ne peut
                        être expulsée du domicile conjugal, et le logement doit
                        correspondre au niveau de vie du couple. Ce droit est
                        absolu et ne souffre d&apos;aucune exception (Coran
                        65:1, 65:6).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La nafaqa (pension alimentaire)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La nafaqa couvre la nourriture, les vêtements et les
                        soins médicaux de la femme pendant la iddah. Son montant
                        est proportionnel aux moyens du mari. En cas de divorce
                        révocable (talaq raj&apos;i), cette obligation est
                        unanimement reconnue par les quatre écoles juridiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La récupération du mahr
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La dot (mahr) est un droit exclusif de la femme. En cas
                        de talaq, elle conserve intégralement sa dot, y compris
                        la partie différée (mahr mu&apos;ajjal). Le mari n&apos;a
                        aucun droit de récupérer ce qu&apos;il a versé, sauf
                        dans le cadre d&apos;un khula consenti par la femme.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La mut&apos;ah (don de consolation)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La mut&apos;ah est un don que le mari verse a la femme
                        divorcée en signe de compensation et de bienveillance.
                        Le Coran dit : « Donnez-leur [aux femmes divorcées] une
                        compensation, le riche selon ses moyens et le pauvre
                        selon les siens, une compensation convenable » (Coran
                        2:236). Ce don vise a atténuer le préjudice moral et
                        matériel subi par la femme.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La femme enceinte bénéficie de la nafaqa jusqu&apos;a
                      l&apos;accouchement, quelle que soit la forme du divorce.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les frais médicaux liés a la grossesse et a
                      l&apos;accouchement restent a la charge du mari.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le mari ne peut pas conditionner le versement de la nafaqa
                      a un comportement particulier de la femme.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      En cas de manquement, la femme peut saisir la justice pour
                      contraindre le mari a s&apos;acquitter de ses obligations.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Coran encourage la réconciliation avant toute rupture
                  définitive. Allah dit : « Si vous désirez la réconciliation,
                  Allah rétablira l&apos;entente entre eux » (Coran 4:35).
                  Pendant le divorce révocable, le mari peut reprendre la vie
                  commune avec son épouse sans nouveau contrat, ce qui permet a
                  certains couples de surmonter leurs différends et de préserver
                  l&apos;unité familiale.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Droits-de-la-femme-dans-le-divorce-islamique-guide-juridique-1.jpg"
                    alt="Droits financiers de la femme pendant la iddah en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Garde des enfants (hadana) */}
              {/* ============================================ */}
              <section id="garde-enfants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La garde des enfants (hadana)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question de la garde des enfants après le divorce constitue
                  l&apos;un des sujets les plus sensibles en droit islamique. Le
                  principe fondamental est que le bien-être de l&apos;enfant
                  passe avant toute autre considération. La mère bénéficie
                  d&apos;une priorité naturelle pour la garde des jeunes
                  enfants, en raison de la tendresse, de la patience et des
                  soins qu&apos;elle leur prodigue.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a dit a une femme
                  qui craignait de perdre la garde de son enfant : « Tu as plus
                  de droit sur lui tant que tu ne te remaries pas. » (Rapporté
                  par Abu Dawud.) Ce hadith fonde la priorité maternelle dans la
                  garde des enfants, tout en posant la condition du non-remariage
                  comme limite a ce droit.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les écoles juridiques divergent sur l&apos;age a partir duquel
                  l&apos;enfant peut choisir entre ses deux parents ou être
                  confié au père. Toutefois, toutes s&apos;accordent sur le fait
                  que l&apos;intérêt supérieur de l&apos;enfant doit guider la
                  décision du juge.
                </p>

                {/* Tableau garde des enfants */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Age de l&apos;enfant
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Priorité de garde
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conditions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          De la naissance a 7 ans (garcon)
                        </td>
                        <td className="py-3 pr-4">
                          Priorité a la mère
                        </td>
                        <td className="py-3">
                          Capacité de la mère a assurer les soins, non-remariage
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          De la naissance a la puberté (fille)
                        </td>
                        <td className="py-3 pr-4">
                          Priorité a la mère
                        </td>
                        <td className="py-3">
                          Intérêt de l&apos;enfant, stabilité du foyer maternel
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Après 7 ans (garcon, école hanbalite)
                        </td>
                        <td className="py-3 pr-4">
                          Choix de l&apos;enfant entre les parents
                        </td>
                        <td className="py-3">
                          Discernement de l&apos;enfant, absence de contrainte
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Après la puberté (fille, école hanafite)
                        </td>
                        <td className="py-3 pr-4">
                          Transfert possible au père
                        </td>
                        <td className="py-3">
                          Décision du juge selon l&apos;intérêt de l&apos;enfant
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Enfant allaité
                        </td>
                        <td className="py-3 pr-4">
                          Priorité absolue a la mère
                        </td>
                        <td className="py-3">
                          Droit a la rémunération de l&apos;allaitement (Coran 65:6)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Indépendamment de la question de la garde, le père conserve
                  l&apos;obligation de subvenir aux besoins financiers de ses
                  enfants : nourriture, vêtements, logement, éducation et soins
                  médicaux. Cette obligation perdure jusqu&apos;a ce que le
                  garcon atteigne l&apos;autonomie financière et que la fille se
                  marie. Le Prophète (paix et bénédictions sur lui) a dit :
                  « Il suffit comme péché a une personne de négliger ceux dont
                  elle a la charge. » (Rapporté par Muslim.)
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le droit de visite du parent non gardien est garanti et ne
                      peut être empêché sans motif légitime.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La mère gardienne a droit a une rémunération pour
                      l&apos;allaitement et les soins prodigués aux enfants.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le déplacement de l&apos;enfant hors de la ville du père
                      nécessite l&apos;accord de celui-ci ou une autorisation
                      judiciaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le remariage de la mère peut entraîner le transfert de la
                      garde, sauf si le juge estime que l&apos;intérêt de
                      l&apos;enfant commande le contraire.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le mariage islamique : contrat, droits et obligations"
                  description="Comprendre les fondements du contrat de mariage en islam et les droits réciproques des époux."
                  href="/mariage-islamique-contrat"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Recours juridiques */}
              {/* ============================================ */}
              <section id="recours-juridiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Recours juridiques et protection contre l&apos;injustice
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne laisse pas la femme démunie face a un mari qui
                  refuse de la libérer ou qui la maltraite. Le faskh
                  (dissolution judiciaire) constitue un recours puissant pour
                  les femmes confrontées a des situations d&apos;oppression, de
                  négligence ou de préjudice conjugal.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le qadi (juge islamique) dispose de l&apos;autorité nécessaire
                  pour prononcer la dissolution du mariage dans plusieurs cas de
                  figure. L&apos;absence prolongée du mari, son incapacité a
                  subvenir aux besoins de la famille, les violences physiques ou
                  morales, l&apos;abandon du domicile conjugal et les
                  manquements graves aux obligations du contrat de mariage
                  constituent autant de motifs valables pour le faskh.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le faskh pour préjudice avéré
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lorsque la femme subit un préjudice matériel ou moral de
                        la part de son mari, elle peut demander au juge de
                        prononcer la dissolution du mariage. Les violences
                        conjugales, l&apos;abandon financier et les atteintes a
                        la dignité de la femme sont des motifs unanimement
                        reconnus par les juristes musulmans.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le role du qadi et la médiation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Avant de prononcer le faskh, le juge tente généralement
                        une médiation entre les époux, conformément a
                        l&apos;injonction coranique : « Si vous craignez la
                        rupture entre les deux, envoyez un arbitre de sa famille
                        et un arbitre de la famille de l&apos;autre » (Coran
                        4:35). La médiation familiale vise a préserver
                        l&apos;unité du foyer lorsque cela est possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les cadres juridiques modernes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Dans de nombreux pays, les tribunaux de la famille
                        intègrent les principes du fiqh dans leurs procédures
                        civiles. La Moudawwana marocaine, le code du statut
                        personnel tunisien et les lois familiales de plusieurs
                        pays arabes et européens offrent des cadres juridiques
                        qui protègent les droits de la femme musulmane divorcée.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Documenter les faits :</strong> conserver les
                      preuves de préjudice (témoignages, certificats médicaux,
                      correspondances) pour appuyer la demande de faskh.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consulter un imam ou un savant :</strong> obtenir
                      un avis religieux éclairé avant d&apos;entamer une
                      procédure judiciaire.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se faire accompagner juridiquement :</strong>
                      solliciter un avocat spécialisé en droit de la famille
                      pour garantir la défense de ses intérêts.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Connaître ses droits :</strong> s&apos;informer sur
                      les dispositions du code de la famille applicable dans
                      son pays de résidence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Solliciter la médiation :</strong> recourir a un
                      médiateur familial ou a un centre islamique avant de
                      saisir la justice.
                    </span>
                  </li>
                </ul>

                {/* Profile cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme en procédure de divorce
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si vous traversez une procédure de divorce, sachez que
                      l&apos;islam vous protège. Rassemblez les documents
                      nécessaires (contrat de mariage, preuves de versement de
                      la dot, attestations de témoins) et consultez un imam et
                      un avocat. Le khula ou le faskh sont des voies légitimes
                      si le talaq n&apos;est pas prononcé par le mari. Vos
                      droits financiers et votre dignité sont garantis par le
                      Coran.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une mère divorcée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      En tant que mère, vous bénéficiez d&apos;une priorité pour
                      la garde de vos jeunes enfants. Le père reste tenu de
                      subvenir a leurs besoins matériels. N&apos;hésitez pas a
                      faire valoir vos droits auprès du tribunal si le père
                      manque a ses obligations. Votre role auprès de vos enfants
                      est reconnu et valorisé par la jurisprudence islamique.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un médiateur familial
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le role du médiateur est de tenter la réconciliation avant
                      toute séparation définitive, conformément au Coran (4:35).
                      Assurez-vous que les deux parties connaissent leurs droits
                      et obligations. Documentez les accords obtenus et orientez
                      les époux vers un juge compétent si la médiation échoue.
                      La neutralité et la bienveillance sont les piliers de
                      votre mission.
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Droits-de-la-femme-dans-le-divorce-islamique-guide-juridique-1.jpg"
                    alt="Recours juridiques et protection de la femme dans le divorce islamique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Halal et haram : critères et fondements en islam"
                  description="Comprendre les principes qui régissent le licite et l&apos;illicite en islam, y compris dans les relations conjugales."
                  href="/halal-haram-criteres"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur le même sujet
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/divorce-islam-talaq-khula"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Divorce en islam : talaq et khula
                  </Link>
                  <Link
                    href="/mariage-islamique-contrat"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le contrat de mariage islamique
                  </Link>
                  <Link
                    href="/halal-haram-criteres"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Halal et haram : critères en islam
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
