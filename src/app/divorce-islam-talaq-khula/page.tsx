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
    "Règles complètes du divorce en islam : talaq, khula et procédures",
  description:
    "Découvrez les règles du divorce en islam : talaq, khula, faskh, droits des époux, période de iddah, garde des enfants et procédures selon le Coran et la Sunna.",
  alternates: {
    canonical: "https://www.islamreligion.fr/divorce-islam-talaq-khula",
  },
};

const tocItems = [
  { id: "perspective", label: "Le divorce dans la perspective islamique" },
  { id: "talaq", label: "Le talaq : divorce prononcé par l'époux" },
  { id: "khula", label: "Le khula : séparation demandée par l'épouse" },
  { id: "faskh", label: "Le faskh : annulation judiciaire" },
  { id: "droits", label: "Droits et protections après le divorce" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Le divorce est-il permis en islam ?",
    answer:
      "Oui, le divorce est permis en islam, mais il est considéré comme l\u0027acte licite le plus détesté par Allah selon un hadith rapporté par Abu Dawud. L\u0027islam le tolère comme dernier recours lorsque la vie conjugale devient insoutenable et que toutes les tentatives de réconciliation ont échoué, notamment la médiation familiale prescrite par le Coran (sourate An-Nisa, verset 35).",
  },
  {
    question: "Quelle est la différence entre talaq, khula et faskh ?",
    answer:
      "Le talaq est un divorce initié par l\u0027époux, le khula est une séparation demandée par l\u0027épouse en échange de la restitution de tout ou partie de sa dot (mahr), et le faskh est une annulation judiciaire prononcée par un juge islamique (qadi) pour des motifs graves comme le préjudice, l\u0027absence prolongée ou le défaut d\u0027entretien. Chacune de ces procédures a ses propres conditions et conséquences juridiques.",
  },
  {
    question: "La femme peut-elle demander le divorce en islam ?",
    answer:
      "Absolument. La femme dispose du droit de demander le divorce par la voie du khula, en restituant sa dot au mari. Ce droit est fondé sur le Coran (sourate Al-Baqarah, verset 229) et sur le hadith de la femme de Thabit ibn Qays rapporté par Al-Bukhari. Elle peut également demander le faskh devant un juge si elle subit un préjudice, un abandon ou un défaut d\u0027entretien.",
  },
  {
    question: "Qu\u0027est-ce que la période de iddah après le divorce ?",
    answer:
      "La iddah est une période d\u0027attente obligatoire après le divorce, d\u0027une durée de trois cycles menstruels pour les femmes non enceintes (sourate Al-Baqarah, verset 228), ou jusqu\u0027à l\u0027accouchement pour les femmes enceintes. Durant cette période, l\u0027épouse reste dans le domicile conjugal, le mari assure son entretien, et une réconciliation reste possible en cas de talaq révocable.",
  },
  {
    question: "Qui obtient la garde des enfants après un divorce islamique ?",
    answer:
      "Selon la jurisprudence islamique majoritaire, la mère a la priorité pour la garde des jeunes enfants (hadanah), tant qu\u0027elle remplit les conditions requises (raison, aptitude, absence de remariage selon certaines écoles). Le père reste responsable de l\u0027entretien financier des enfants. L\u0027intérêt supérieur de l\u0027enfant demeure le critère déterminant, et le juge peut adapter cette règle selon les circonstances.",
  },
  {
    question: "Le talaq prononcé trois fois en une seule fois est-il valide ?",
    answer:
      "Cette question fait l\u0027objet de divergences entre les savants. La majorité des juristes classiques (hanafites, malikites, shafiites) considèrent que les trois talaq prononcés en une fois comptent comme trois et rendent le divorce irrévocable. En revanche, l\u0027avis d\u0027Ibn Taymiyya et d\u0027Ibn Al-Qayyim, adopté par certaines juridictions contemporaines, les compte comme un seul talaq révocable.",
  },
  {
    question: "La femme conserve-t-elle sa dot après le divorce ?",
    answer:
      "En cas de talaq (divorce initié par le mari), la femme conserve l\u0027intégralité de sa dot (mahr). En cas de khula (divorce demandé par l\u0027épouse), elle restitue tout ou partie de la dot au mari en échange de la dissolution du mariage. Le Coran interdit formellement au mari de reprendre la dot de force (sourate An-Nisa, verset 20).",
  },
  {
    question: "La médiation familiale est-elle obligatoire avant le divorce en islam ?",
    answer:
      "Le Coran prescrit la médiation familiale avant toute séparation : « Si vous craignez la rupture entre les deux conjoints, envoyez un arbitre de sa famille à lui et un arbitre de sa famille à elle » (sourate An-Nisa, verset 35). Cette médiation vise à explorer toutes les voies de réconciliation avant de recourir au divorce. La plupart des juridictions islamiques l\u0027imposent comme étape préalable.",
  },
];

export default function DivorceIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/divorce-islam-talaq-khula/#article",
        headline:
          "Règles complètes du divorce en islam : talaq, khula et procédures",
        description:
          "Découvrez les règles du divorce en islam : talaq, khula, faskh, droits des époux, période de iddah et procédures selon le Coran et la Sunna.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Regles-completes-du-divorce-en-islam-talaq-khula-et-procedures.jpg",
        datePublished: "2025-08-27",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/divorce-islam-talaq-khula/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/divorce-islam-talaq-khula/#breadcrumb",
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
            name: "Divorce en islam",
            item: "https://www.islamreligion.fr/divorce-islam-talaq-khula",
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
          title="Règles complètes du divorce en islam : talaq, khula et procédures"
          subtitle="Comprendre les procédures du divorce islamique, les droits des époux et les protections prévues par le Coran et la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Regles-completes-du-divorce-en-islam-talaq-khula-et-procedures.jpg"
          imageAlt="Règles complètes du divorce en islam, talaq, khula et procédures"
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
                <span className="text-foreground">Divorce en islam</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le divorce en islam est un acte permis mais encadré par des
                  règles précises visant à protéger les deux époux. Du talaq
                  (initié par le mari) au khula (demandé par l&apos;épouse), en
                  passant par le faskh (annulation judiciaire), chaque
                  procédure obéit à des conditions strictes fondées sur la
                  justice, la miséricorde et le respect mutuel. La période de
                  iddah, la médiation familiale et les droits financiers
                  constituent les piliers de ce cadre protecteur.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le divorce dans la perspective islamique */}
              {/* ============================================ */}
              <section id="perspective" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le divorce dans la perspective islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Contrairement à une idée reçue, l&apos;islam n&apos;encourage
                  pas la rupture du lien conjugal. Si{" "}
                  <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le contrat de mariage islamique</Link>{" "}
                  établit un pacte sacré entre les époux, le Prophète (paix et
                  bénédictions sur lui) a rappelé que le divorce est « l&apos;acte
                  licite le plus détesté par Allah » (rapporté par Abu Dawud).
                  Cette parole prophétique situe d&apos;emblée le divorce dans
                  un cadre de dernier recours, lorsque la vie commune devient
                  une source de souffrance pour l&apos;un ou les deux époux.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran pose les fondements de cette approche mesurée. Dans
                  la sourate Al-Baqarah (verset 229), Allah dit : « Le divorce
                  est permis deux fois. Alors, soit garder [sa femme] de manière
                  convenable, soit la libérer avec bonté. » Ce verset établit
                  que la séparation doit toujours s&apos;accompagner de
                  bienveillance et de respect, jamais de rancune ou de
                  vengeance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate Al-Baqarah (verset 231) insiste davantage sur la
                  notion de justice : « Lorsque vous divorcez d&apos;avec vos
                  femmes et qu&apos;elles atteignent la fin de leur période
                  d&apos;attente, soit vous les retenez de manière convenable,
                  soit vous les libérez de manière convenable. Mais ne les
                  retenez pas pour leur nuire. » Cette injonction coranique
                  protège la femme contre tout abus de pouvoir de la part du
                  mari durant la procédure de séparation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Avant d&apos;envisager le divorce, l&apos;islam prescrit une
                  étape fondamentale : la médiation familiale. Le Coran ordonne
                  dans la sourate An-Nisa (verset 35) : « Si vous craignez la
                  rupture entre les deux conjoints, envoyez un arbitre de sa
                  famille à lui et un arbitre de sa famille à elle. Si les deux
                  [époux] désirent la réconciliation, Allah rétablira
                  l&apos;harmonie entre eux. » Ce recours à des médiateurs
                  issus des deux familles traduit la volonté de l&apos;islam
                  d&apos;épuiser toutes les voies de réconciliation avant
                  d&apos;accepter la séparation. Cette démarche s&apos;inscrit
                  dans la logique plus large du{" "}
                  <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir sincère et du pardon</Link>{" "}
                  encouragés par l&apos;islam.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dernier recours :</strong> le divorce n&apos;intervient
                      qu&apos;après l&apos;échec de toutes les tentatives de
                      réconciliation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Justice et miséricorde :</strong> les deux
                      valeurs centrales qui encadrent la procédure de
                      séparation en islam.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Médiation obligatoire :</strong> le Coran prescrit
                      la nomination d&apos;arbitres des deux familles avant
                      toute décision de rupture.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Bienveillance dans la séparation :</strong> même
                      en cas de divorce, les époux doivent se traiter avec
                      dignité et respect.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre les abus :</strong> l&apos;islam
                      interdit de retenir l&apos;épouse pour lui nuire ou de
                      lui reprendre ses droits par la contrainte.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Regles-completes-du-divorce-en-islam-talaq-khula-et-procedures.jpg"
                    alt="Le divorce dans la perspective islamique selon le Coran et la Sunna"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Le talaq */}
              {/* ============================================ */}
              <section id="talaq" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le talaq : divorce prononcé par l&apos;époux
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le talaq est la forme de divorce la plus connue en droit
                  islamique. Il désigne la dissolution du mariage par une
                  déclaration du mari. Toutefois, cette prérogative
                  n&apos;est pas un pouvoir arbitraire : elle obéit à des
                  conditions strictes destinées à protéger les droits de
                  l&apos;épouse et à préserver les chances de réconciliation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran encadre le talaq dans la sourate At-Talaq (versets
                  1-2) : « O Prophète, quand vous divorcez d&apos;avec vos
                  femmes, faites-le au moment de leur période de pureté, et
                  comptez la période d&apos;attente. » Ce verset impose des
                  conditions temporelles précises : le talaq ne doit pas être
                  prononcé pendant les menstruations de l&apos;épouse, ni après
                  un rapport conjugal dans le cycle en cours.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La{" "}
                  <Link href="/jurisprudence-islamique-coran-sunna-ijma" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">jurisprudence islamique</Link>{" "}
                  distingue trois types de talaq,
                  chacun ayant des conséquences différentes sur la possibilité
                  de retour entre les époux.
                </p>

                {/* Tableau types de talaq */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Définition
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Possibilité de retour
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Talaq révocable (raj&apos;i)
                        </td>
                        <td className="py-3 pr-4">
                          Premier ou deuxième divorce prononcé dans les règles.
                          Le mari peut reprendre son épouse durant la période
                          de iddah sans nouveau contrat de mariage.
                        </td>
                        <td className="py-3">
                          Oui, durant la iddah, sans nouvelle dot ni nouveau
                          contrat
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Talaq irrévocable mineur (ba&apos;in sughra)
                        </td>
                        <td className="py-3 pr-4">
                          Divorce après expiration de la iddah (premier ou
                          deuxième talaq) ou divorce par khula. Les époux
                          peuvent se remarier avec un nouveau contrat et une
                          nouvelle dot.
                        </td>
                        <td className="py-3">
                          Oui, mais avec un nouveau contrat de mariage et une
                          nouvelle dot
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Talaq irrévocable majeur (ba&apos;in kubra)
                        </td>
                        <td className="py-3 pr-4">
                          Troisième divorce. La femme ne peut plus épouser
                          le même homme sauf si elle se marie avec un autre
                          homme, consomme ce mariage, puis divorce naturellement
                          de lui.
                        </td>
                        <td className="py-3">
                          Non, sauf après un mariage intermédiaire sincère
                          (tahlil naturel)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La période de iddah (attente) est un élément central du
                  talaq. D&apos;une durée de trois cycles menstruels pour les
                  femmes non enceintes, elle remplit plusieurs fonctions :
                  vérifier l&apos;absence de grossesse, offrir un temps de
                  réflexion aux deux époux et permettre une éventuelle
                  réconciliation. Durant cette période, le mari est tenu
                  d&apos;assurer l&apos;entretien de son épouse et de ne pas
                  l&apos;expulser du domicile conjugal.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Conditions de validité du talaq
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le mari doit être sain d&apos;esprit, sobre et agir de
                        son plein gré. Un talaq prononcé sous la contrainte,
                        l&apos;ivresse ou la colère extrême est considéré comme
                        nul par de nombreux savants, conformément au hadith :
                        « Pas de divorce ni d&apos;affranchissement sous la
                        contrainte » (rapporté par Ibn Majah).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Période de pureté rituelle
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le talaq dit « sunni » (conforme à la Sunna) doit être
                        prononcé pendant une période de pureté (tuhr) durant
                        laquelle il n&apos;y a pas eu de rapport conjugal. Un
                        talaq prononcé pendant les menstruations est qualifié
                        de « bid&apos;i » (innovateur) et est considéré comme
                        blâmable, bien que sa validité fasse l&apos;objet de
                        divergences savantes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prononciation claire et sans ambiguïté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le talaq doit être prononcé de manière claire et
                        explicite. Les juristes distinguent les formules
                        explicites (sarih), qui prennent effet immédiatement,
                        des formules allusives (kinaya), dont la validité
                        dépend de l&apos;intention du mari.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le talaq progressif (un divorce à la fois) est la
                      procédure recommandée par la Sunna.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La présence de témoins est recommandée par certaines
                      écoles juridiques pour renforcer la validité de l&apos;acte.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le mari doit verser à l&apos;épouse un don de consolation
                      (mut&apos;a) selon la sourate Al-Baqarah (verset 236).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La validation légale du divorce par les autorités
                      compétentes est fortement conseillée pour protéger les
                      droits des deux parties.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Regles-completes-du-divorce-en-islam-talaq-khula-et-procedures.jpg"
                    alt="Le talaq en islam, divorce prononcé par l'époux avec ses conditions et types"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le mariage islamique : contrat, conditions et droits des époux"
                  description="Comprendre le contrat de mariage en islam, ses piliers et les droits mutuels des conjoints."
                  href="/mariage-islamique-contrat"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Le khula */}
              {/* ============================================ */}
              <section id="khula" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le khula : séparation demandée par l&apos;épouse
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le khula représente le droit de la femme à demander la
                  dissolution de son mariage. Ce mécanisme, fondé sur le Coran
                  et la Sunna, témoigne de l&apos;attention portée par
                  l&apos;islam aux{" "}
                  <Link href="/droits-femme-divorce-islamique" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">droits de la femme dans le divorce</Link>{" "}
                  et à sa dignité.
                  La femme n&apos;est pas prisonnière d&apos;un mariage qui
                  lui cause du tort : elle dispose d&apos;une voie légale pour
                  s&apos;en libérer.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le fondement coranique du khula se trouve dans la sourate
                  Al-Baqarah (verset 229) : « Si vous craignez que les deux
                  [conjoints] ne puissent observer les limites d&apos;Allah, nul
                  grief contre eux pour ce que la femme se rachètera. » Ce
                  verset établit clairement le droit de la femme à obtenir sa
                  liberté en restituant tout ou partie de sa dot (mahr) au
                  mari.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith de la femme de Thabit ibn Qays constitue le
                  précédent prophétique du khula. Selon le récit rapporté par
                  Al-Bukhari, cette femme vint voir le Prophète (paix et
                  bénédictions sur lui) et lui dit : « Je ne reproche rien à
                  Thabit quant à son caractère ou sa religion, mais je
                  détesterais de tomber dans l&apos;ingratitude en islam. » Le
                  Prophète lui demanda si elle acceptait de rendre le jardin
                  que Thabit lui avait donné en dot. Elle accepta, et le
                  Prophète ordonna à Thabit d&apos;accepter le jardin et de
                  prononcer le divorce. Ce récit montre que la femme peut
                  demander le divorce même en l&apos;absence de faute grave
                  du mari.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La demande de l&apos;épouse
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;épouse exprime sa volonté de mettre fin au
                        mariage auprès de son mari ou devant un juge. Elle
                        n&apos;est pas tenue de justifier sa demande par un
                        motif précis, bien qu&apos;elle doive agir de bonne
                        foi et ne pas nuire injustement à son époux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La compensation financière
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La femme restitue tout ou partie de sa dot (mahr) au
                        mari en échange de la dissolution du mariage. Le
                        montant de la compensation fait l&apos;objet d&apos;un
                        accord entre les époux ou, à défaut, d&apos;une
                        décision du juge. La majorité des savants considèrent
                        que la compensation ne doit pas dépasser le montant
                        de la dot initiale.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;acceptation du mari ou l&apos;intervention du juge
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le mari accepte, le khula prend effet
                        immédiatement. S&apos;il refuse, l&apos;épouse peut
                        saisir un juge islamique (qadi) qui examinera la
                        situation et pourra imposer le khula si les conditions
                        sont réunies. Cette possibilité protège la femme
                        contre un refus abusif du mari.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le khula est un droit reconnu à la femme, pas une
                      faveur accordée par le mari.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La iddah après un khula est d&apos;un cycle menstruel
                      selon l&apos;avis prépondérant, contre trois pour le
                      talaq classique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le khula ne compte pas dans les trois talaq : le
                      couple peut se remarier sans restriction liée au nombre
                      de divorces antérieurs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La femme conserve tous ses autres droits financiers
                      (entretien durant la iddah, droits sur les enfants).
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les droits de la femme en cas de divorce islamique"
                  description="Découvrez les protections prévues par la charia pour la femme divorcée : dot, entretien, garde et logement."
                  href="/droits-femme-divorce-islamique"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Le faskh */}
              {/* ============================================ */}
              <section id="faskh" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le faskh : annulation judiciaire du mariage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le faskh constitue une troisième voie de dissolution du
                  mariage, distincte du talaq et du khula. Il s&apos;agit
                  d&apos;une annulation prononcée par un juge islamique (qadi)
                  pour des motifs graves qui rendent la poursuite du mariage
                  impossible ou préjudiciable. Contrairement au khula,
                  l&apos;épouse n&apos;a pas à restituer sa dot puisque la
                  responsabilité de la rupture incombe à une circonstance
                  extérieure ou à une faute de l&apos;autre partie.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les motifs légitimes du faskh varient selon les écoles
                  juridiques, mais les savants s&apos;accordent sur plusieurs
                  situations qui justifient l&apos;intervention du juge pour
                  dissoudre le mariage. Le faskh protège les époux, et
                  particulièrement l&apos;épouse, contre les situations
                  d&apos;injustice ou de souffrance prolongée.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le préjudice (darar)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La violence physique ou psychologique, l&apos;insulte
                        récurrente, la négligence grave ou tout comportement
                        qui porte atteinte à la dignité de l&apos;épouse
                        constituent un motif de faskh. L&apos;école malikite
                        est particulièrement ouverte à ce motif, considérant
                        que toute forme de préjudice persistant justifie la
                        dissolution.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;absence prolongée du mari
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lorsque le mari s&apos;absente pendant une longue
                        période sans motif valable et sans pourvoir à
                        l&apos;entretien de son épouse, celle-ci peut demander
                        le faskh. Les écoles juridiques divergent sur la
                        durée minimale d&apos;absence requise, mais la
                        protection de l&apos;épouse contre l&apos;abandon fait
                        consensus.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le défaut d&apos;entretien (nafaqa)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le mari a l&apos;obligation d&apos;assurer
                        l&apos;entretien de son épouse (nourriture, logement,
                        vêtements). S&apos;il refuse ou se trouve dans
                        l&apos;incapacité prolongée de remplir cette
                        obligation, l&apos;épouse peut demander la dissolution
                        du mariage devant le juge.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le vice caché ou la fraude
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si l&apos;un des époux découvre après le mariage un
                        défaut physique grave dissimulé (maladie contagieuse,
                        impuissance) ou une tromperie sur l&apos;identité, la
                        situation familiale ou la condition sociale, le juge
                        peut annuler le mariage. Ce motif protège le
                        consentement éclairé des deux parties.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le faskh ne compte pas dans les trois talaq, ce qui
                      signifie que les époux peuvent se remarier si les
                      circonstances changent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;épouse conserve l&apos;intégralité de sa dot en
                      cas de faskh, puisqu&apos;elle n&apos;est pas à
                      l&apos;origine de la rupture.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le rôle du juge (qadi) est primordial : il examine les
                      preuves, entend les deux parties et rend une décision
                      conforme à la charia.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le faskh peut être demandé par l&apos;un ou l&apos;autre
                      des époux, bien qu&apos;il soit plus fréquemment
                      sollicité par l&apos;épouse.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Regles-completes-du-divorce-en-islam-talaq-khula-et-procedures.jpg"
                    alt="Le faskh en islam, annulation judiciaire du mariage par le qadi"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les critères du licite et de l'illicite en islam"
                  href="/halal-haram-criteres"
                  linkText="Voir les critères halal et haram"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Droits et protections après le divorce */}
              {/* ============================================ */}
              <section id="droits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les droits et protections après le divorce
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne considère pas le divorce comme une fin
                  brutale, mais comme une transition qui doit se dérouler dans
                  le respect et la protection des droits de chaque partie.
                  Le Coran et la Sunna prévoient un ensemble de garanties
                  financières, parentales et sociales destinées à préserver
                  la dignité des époux et le bien-être des enfants.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sourate Al-Baqarah (verset 231) rappelle que le divorce
                  ne doit jamais servir de prétexte pour priver la femme de
                  ses droits : « Ne les retenez pas pour leur nuire, car ce
                  serait de la transgression. Quiconque agit ainsi se fait
                  tort à lui-même. » Les droits après le divorce ne sont pas
                  de simples recommandations morales : ce sont des obligations
                  juridiques contraignantes dans le cadre de la charia.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;entretien durant la iddah
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le mari est tenu d&apos;assurer l&apos;entretien
                        complet de son ex-épouse pendant toute la durée de la
                        iddah : logement, nourriture, vêtements et soins.
                        Cette obligation persiste même si les époux ne vivent
                        plus sous le même toit. La sourate At-Talaq (verset 6)
                        précise : « Logez-les où vous logez, selon vos
                        moyens. »
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La conservation de la dot (mahr)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        En cas de talaq ou de faskh, la femme conserve
                        l&apos;intégralité de sa dot. Le Coran interdit
                        formellement au mari de reprendre la dot de force
                        (sourate An-Nisa, verset 20). Ce droit est
                        inaliénable et protège la sécurité financière de la
                        femme après la séparation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La garde des enfants (hadanah)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La majorité des savants accordent la priorité à la
                        mère pour la garde des jeunes enfants, tant
                        qu&apos;elle remplit les conditions requises, en raison
                        du{" "}
                        <Link href="/maternite-islam-responsabilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rang éminent de la maternité en islam</Link>.
                        Le Prophète (paix et bénédictions sur lui) a dit : « Tu
                        as plus droit à lui tant que tu ne te remaries pas »
                        (rapporté par Abu Dawud). Le père conserve la
                        responsabilité financière de l&apos;entretien des
                        enfants.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le droit au logement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La femme divorcée a droit au logement pendant la
                        période de iddah. Si elle a la garde des enfants,
                        ce droit peut être prolongé tant que les enfants sont
                        en bas âge. Le logement doit être décent et
                        correspondre aux moyens du mari.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau des droits après le divorce */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Droit
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bénéficiaire
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Fondement
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Entretien durant la iddah
                        </td>
                        <td className="py-3 pr-4">
                          Épouse divorcée
                        </td>
                        <td className="py-3">
                          Sourate At-Talaq, verset 6
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Conservation de la dot (mahr)
                        </td>
                        <td className="py-3 pr-4">
                          Épouse (talaq et faskh)
                        </td>
                        <td className="py-3">
                          Sourate An-Nisa, verset 20
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Garde des jeunes enfants
                        </td>
                        <td className="py-3 pr-4">
                          Mère (prioritaire)
                        </td>
                        <td className="py-3">
                          Hadith rapporté par Abu Dawud
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Entretien des enfants
                        </td>
                        <td className="py-3 pr-4">
                          Enfants (à charge du père)
                        </td>
                        <td className="py-3">
                          Consensus des savants (ijma&apos;)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Logement durant la iddah
                        </td>
                        <td className="py-3 pr-4">
                          Épouse divorcée
                        </td>
                        <td className="py-3">
                          Sourate At-Talaq, versets 1 et 6
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Don de consolation (mut&apos;a)
                        </td>
                        <td className="py-3 pr-4">
                          Épouse répudiée
                        </td>
                        <td className="py-3">
                          Sourate Al-Baqarah, verset 236
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La femme enceinte divorcée a droit à l&apos;entretien
                      jusqu&apos;à l&apos;accouchement, quelle que soit la
                      forme du divorce.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;allaitement est un droit de l&apos;enfant : le
                      père doit rémunérer la mère si elle allaite après le
                      divorce (sourate Al-Baqarah, verset 233).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le droit de visite du parent non gardien est reconnu par
                      les savants comme un droit de l&apos;enfant et du parent.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La femme divorcée conserve ses droits successoraux
                      durant la période de iddah en cas de talaq révocable.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Regles-completes-du-divorce-en-islam-talaq-khula-et-procedures.jpg"
                    alt="Les droits et protections après le divorce en islam pour les époux et les enfants"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* Profils */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Selon votre situation personnelle
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le divorce est une épreuve qui touche chaque personne
                  différemment selon son rôle et sa situation. Les règles
                  islamiques tiennent compte de cette diversité pour offrir
                  un cadre protecteur adapté à chacun.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un époux en difficulté
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si vous traversez une crise conjugale, l&apos;islam vous
                      encourage à chercher la réconciliation avant toute
                      décision. Sollicitez la médiation familiale prescrite
                      par le Coran (sourate An-Nisa, verset 35), prenez le
                      temps de la réflexion et consultez un imam ou un
                      conseiller. Le talaq ne doit jamais être prononcé sous
                      l&apos;impulsion de la colère.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une épouse souhaitant le divorce
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Sachez que l&apos;islam vous accorde le droit de
                      demander la dissolution du mariage par le khula ou le
                      faskh. Vous n&apos;êtes pas contrainte de rester dans
                      un mariage qui vous cause du tort. Renseignez-vous sur
                      vos droits, entourez-vous de personnes de confiance et
                      n&apos;hésitez pas à solliciter l&apos;aide d&apos;un
                      juge si votre mari refuse le divorce.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un médiateur familial
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le rôle du médiateur est capital dans la procédure de
                      divorce islamique. Votre mission est d&apos;écouter les
                      deux parties avec impartialité, de chercher sincèrement
                      la réconciliation et, si celle-ci s&apos;avère
                      impossible, d&apos;accompagner le couple vers une
                      séparation respectueuse des droits de chacun. Le Coran
                      (sourate An-Nisa, verset 35) vous confie la
                      responsabilité de faciliter le dialogue et de préserver
                      l&apos;intérêt des enfants.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Comprenez les sources islamiques du droit familial"
                description="Les termes juridiques islamiques viennent du Coran et de la Sunna. Apprenez l'arabe pour acc\u00e9der directement aux textes fondateurs."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles en lien avec le mariage et la famille
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mariage-islamique-contrat"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le mariage islamique
                  </Link>
                  <Link
                    href="/droits-femme-divorce-islamique"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Droits de la femme en divorce
                  </Link>
                  <Link
                    href="/halal-haram-criteres"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Critères halal et haram
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
