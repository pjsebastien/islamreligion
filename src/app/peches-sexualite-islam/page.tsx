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
    "Péchés liés à la sexualité : ce qui est interdit en islam",
  description:
    "Découvrez les interdits sexuels en islam : zina, pratiques prohibées, masturbation, pornographie, cadre conjugal et repentir. Approche respectueuse et sourcée.",
  alternates: {
    canonical: "https://www.islamreligion.fr/peches-sexualite-islam",
  },
};

const tocItems = [
  { id: "grands-interdits", label: "Les grands interdits sexuels" },
  { id: "pratiques-interdites", label: "Pratiques intimes interdites" },
  { id: "questions-contemporaines", label: "Questions contemporaines" },
  { id: "cadre-mariage", label: "La sexualité dans le mariage" },
  { id: "repentir", label: "Le repentir et la miséricorde" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "La fornication (zina) est-elle un grand péché en islam ?",
    answer:
      "Oui, la fornication (zina) est considérée comme l&apos;un des plus grands péchés en islam. Le Coran l&apos;interdit explicitement dans la sourate Al-Isra (17:32) : \"Et n&apos;approchez point la fornication. En vérité, c&apos;est une turpitude et quel mauvais chemin.\" Elle fait partie des sept péchés destructeurs mentionnés dans les hadiths authentiques.",
  },
  {
    question: "Quels sont les péchés sexuels majeurs en islam ?",
    answer:
      "Les péchés sexuels majeurs en islam comprennent la fornication (zina), l&apos;adultère, la sodomie, l&apos;inceste, la bestialité et l&apos;exhibitionnisme. Chacun de ces actes est clairement prohibé par le Coran et la Sunna, avec des conséquences spirituelles proportionnelles à leur gravité.",
  },
  {
    question: "La masturbation est-elle interdite en islam ?",
    answer:
      "La majorité des savants musulmans considèrent la masturbation comme interdite (haram) ou au minimum fortement déconseillée (makruh). Le Coran, dans la sourate Al-Mu&apos;minun (23:5-7), invite les croyants à préserver leur chasteté en dehors du cadre conjugal. Certains savants, comme l&apos;imam Ahmad, admettent une tolérance pour celui qui craint de tomber dans la fornication.",
  },
  {
    question: "Comment se repentir d&apos;un péché sexuel en islam ?",
    answer:
      "Le repentir (tawbah) d&apos;un péché sexuel en islam repose sur quatre conditions : cesser immédiatement le péché, éprouver un regret sincère, prendre la ferme résolution de ne plus y revenir, et demander pardon à Allah. Le Coran affirme dans la sourate Az-Zumar (39:53) qu&apos;Allah pardonne tous les péchés à celui qui se repent sincèrement.",
  },
  {
    question:
      "Les relations intimes sont-elles encadrées dans le mariage en islam ?",
    answer:
      "Oui, l&apos;islam encadre les relations intimes au sein du mariage par des principes de respect mutuel, de consentement et de pudeur. Certaines périodes sont prohibées (menstruation, jeûne diurne du Ramadan), et des invocations sont recommandées avant l&apos;intimité. Le rapport intime conjugal est considéré comme un acte de dévotion lorsqu&apos;il est accompli dans le respect des règles divines.",
  },
  {
    question: "Regarder de la pornographie est-il haram en islam ?",
    answer:
      "Oui, regarder de la pornographie est unanimement considéré comme haram en islam. Le Coran ordonne aux croyants de baisser le regard (sourate An-Nur, 24:30) et de préserver leur chasteté. La pornographie contrevient à ces injonctions, nourrit les pulsions vers la fornication et nuit à la relation conjugale comme à la santé spirituelle du croyant.",
  },
  {
    question:
      "Quelles sont les conséquences spirituelles des péchés sexuels ?",
    answer:
      "Les péchés sexuels ont des conséquences spirituelles profondes selon les savants musulmans : éloignement d&apos;Allah, obscurcissement du c&oelig;ur, affaiblissement de la foi, perte de la baraka dans la vie quotidienne et difficulté à accomplir les actes d&apos;adoration. Le Prophète (paix et salut sur lui) a averti que la fornication retire la lumière de la foi du c&oelig;ur du croyant.",
  },
  {
    question:
      "Le pardon est-il possible après un péché sexuel en islam ?",
    answer:
      "Absolument. Allah est décrit dans le Coran comme \"Le Très Miséricordieux, le Tout Miséricordieux\" et Son pardon est sans limite pour celui qui se repent sincèrement. Le Prophète (paix et salut sur lui) a rapporté qu&apos;Allah se réjouit du repentir de Son serviteur plus qu&apos;un homme qui retrouve sa monture perdue dans le désert. Aucun péché, aussi grave soit-il, ne dépasse la miséricorde divine.",
  },
];

export default function PechesSexualite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/peches-sexualite-islam/#article",
        headline:
          "Péchés liés à la sexualité : ce qui est interdit en islam",
        description:
          "Découvrez les interdits sexuels en islam : zina, pratiques prohibées, masturbation, pornographie, cadre conjugal et repentir.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Peches-lies-a-la-sexualite-ce-qui-est-interdit-en-islam-1.jpg",
        datePublished: "2025-08-21",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/peches-sexualite-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/peches-sexualite-islam/#breadcrumb",
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
            name: "Péchés et sexualité",
            item: "https://www.islamreligion.fr/peches-sexualite-islam",
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
          title="Péchés liés à la sexualité : ce qui est interdit en islam"
          subtitle="Interdits sexuels, cadre conjugal et voie du repentir selon le Coran et la Sunna."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Peches-lies-a-la-sexualite-ce-qui-est-interdit-en-islam-1.jpg"
          imageAlt="Péchés liés à la sexualité, ce qui est interdit en islam"
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
                  Péchés et sexualité en islam
                </span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  L&apos;islam aborde la sexualité avec une approche
                  équilibrée : ce qui relève du licite dans le cadre du
                  mariage est valorisé comme un acte d&apos;adoration, tandis
                  que ce qui transgresse les limites fixées par Allah constitue
                  un péché dont la gravité varie. Cet article présente les
                  interdits sexuels selon le Coran et la Sunna, le cadre
                  conjugal qui encadre l&apos;intimité, et la voie du repentir
                  pour quiconque souhaite retrouver la proximité divine.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Les grands interdits sexuels */}
              {/* ============================================ */}
              <section id="grands-interdits" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les grands interdits sexuels en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La sexualité, en islam, n&apos;est ni taboue ni honteuse en
                  soi. Elle est considérée comme un bienfait d&apos;Allah
                  lorsqu&apos;elle s&apos;exerce dans le cadre licite du
                  mariage. En revanche, tout rapport charnel en dehors de
                  cette union sacrée entre dans la catégorie du haram, avec
                  des conséquences spirituelles et sociales lourdes.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le terme <strong>zina</strong> (fornication) désigne tout
                  rapport sexuel illicite entre un homme et une femme qui ne
                  sont pas unis par le mariage. Le Coran est catégorique sur
                  ce point : <em>&laquo; Et n&apos;approchez point la
                  fornication. En vérité, c&apos;est une turpitude et quel
                  mauvais chemin &raquo;</em> (sourate Al-Isra, 17:32).
                  L&apos;injonction divine ne se limite pas à interdire
                  l&apos;acte lui-même, elle prohibe aussi tout ce qui y
                  conduit : regards insistants, isolement avec une personne du
                  sexe opposé (khalwa), paroles suggestives.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;adultère (zina al-muhsan) constitue une aggravation
                  de cette transgression, car il brise en plus{" "}
                  <Link href="/divorce-islam-talaq-khula" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le pacte conjugal</Link>{" "}
                  et porte atteinte à la famille. Le Prophète (paix
                  et salut sur lui) a classé la fornication parmi les sept
                  péchés destructeurs (al-mubiqat), aux côtés du shirk
                  (associationnisme) et du meurtre, ce qui témoigne de la
                  gravité que l&apos;islam accorde à cet interdit.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La zina (fornication) :</strong> tout rapport
                      hors mariage, interdit par le Coran (17:32) et la Sunna.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;adultère :</strong> trahison du pacte
                      conjugal, considéré comme plus grave que la fornication
                      simple.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les préliminaires au péché :</strong> isolement
                      illicite (khalwa), regards insistants, paroles
                      séductrices, tout ce qui mène à la fornication.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les conséquences sociales :</strong> destruction
                      des liens familiaux, confusion de la filiation,
                      propagation de maladies.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Les conséquences spirituelles :</strong>{" "}
                      éloignement d&apos;Allah, obscurcissement du coeur,
                      perte de la baraka.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  La sourate An-Nur (24:2) rappelle la sanction terrestre
                  prévue pour les fornicateurs non mariés, tandis que
                  plusieurs hadiths authentiques détaillent les conséquences
                  dans l&apos;au-delà pour ceux qui persistent dans ce péché
                  sans repentir. Toutefois, il faut rappeler que ces sanctions
                  relèvent de la juridiction d&apos;un État islamique
                  constitué et ne peuvent en aucun cas être appliquées par des
                  individus.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Peches-lies-a-la-sexualite-ce-qui-est-interdit-en-islam-1.jpg"
                    alt="Les grands interdits sexuels en islam selon le Coran et la Sunna"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Pratiques intimes interdites */}
              {/* ============================================ */}
              <section id="pratiques-interdites" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Pratiques intimes interdites et leurs fondements
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Au-delà de la fornication, l&apos;islam interdit un ensemble
                  de pratiques sexuelles considérées comme des transgressions
                  graves de l&apos;ordre naturel voulu par le Créateur. Ces
                  interdictions reposent sur des textes coraniques, des
                  hadiths prophétiques et le consensus des savants (ijma).
                  Chaque interdit est fondé sur la préservation de la dignité
                  humaine, de la filiation et de la santé physique et
                  spirituelle.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sodomie (al-liwat), qu&apos;elle soit pratiquée entre
                  hommes ou dans le cadre conjugal, est formellement prohibée.
                  Le Prophète (paix et salut sur lui) a dit : <em>&laquo;
                  Maudit soit celui qui fait ce que faisait le peuple de
                  Loth &raquo;</em> (rapporté par Ahmad et At-Tirmidhi).
                  Le Coran relate le châtiment du peuple de Loth dans
                  plusieurs sourates (Al-A&apos;raf 7:80-84, Hud 11:82-83,
                  Al-Hijr 15:73-74) comme un avertissement permanent.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;inceste, c&apos;est-à-dire les relations sexuelles
                  avec les proches parents (mahram), est catégoriquement
                  interdit par le Coran dans la sourate An-Nisa (4:23), qui
                  énumère précisément les femmes avec lesquelles le mariage
                  est prohibé. La bestialité est également unanimement
                  condamnée par les savants comme un acte contraire à la
                  nature humaine et à la dignité du croyant.
                  L&apos;exhibitionnisme et l&apos;exposition volontaire de
                  ses parties intimes (awra) contreviennent au principe
                  fondamental de pudeur (haya) en islam.
                </p>

                {/* Tableau des pratiques interdites */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Pratique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Statut
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Fondement textuel
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fornication (zina)
                        </td>
                        <td className="py-3 pr-4">
                          Haram, péché majeur
                        </td>
                        <td className="py-3">
                          Coran 17:32, 24:2
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Adultère
                        </td>
                        <td className="py-3 pr-4">
                          Haram, aggravation de la zina
                        </td>
                        <td className="py-3">
                          Coran 17:32, hadith des sept destructeurs
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Sodomie (al-liwat)
                        </td>
                        <td className="py-3 pr-4">
                          Haram, unanimité des savants
                        </td>
                        <td className="py-3">
                          Coran 7:80-84, 11:82-83, hadith Ahmad
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Inceste
                        </td>
                        <td className="py-3 pr-4">
                          Haram, interdit absolu
                        </td>
                        <td className="py-3">
                          Coran 4:23
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Bestialité
                        </td>
                        <td className="py-3 pr-4">
                          Haram, consensus des savants
                        </td>
                        <td className="py-3">
                          Hadith At-Tirmidhi, Abu Dawud
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Exhibitionnisme
                        </td>
                        <td className="py-3 pr-4">
                          Haram, atteinte à la pudeur
                        </td>
                        <td className="py-3">
                          Coran 24:30-31, hadiths sur la awra
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il convient de souligner que ces interdictions ne sont pas
                  dictées par un rejet de la sexualité en tant que telle, mais
                  par le souci de la canaliser dans un cadre qui préserve la
                  dignité de chacun, protège la filiation et maintient la
                  cohésion sociale. L&apos;islam reconnaît pleinement le désir
                  comme une composante de la nature humaine (fitra) et
                  propose{" "}
                  <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le contrat de mariage</Link>{" "}
                  comme la voie saine et bénie pour
                  l&apos;exprimer.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le Coran interdit non seulement l&apos;acte, mais
                      aussi tout ce qui y conduit (moyens et prétextes).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La pudeur (haya) est une vertu fondamentale du croyant,
                      branche de la foi selon le hadith authentique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Les sanctions terrestres sont du ressort exclusif de la
                      juridiction compétente, jamais de l&apos;individu.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Questions contemporaines */}
              {/* ============================================ */}
              <section id="questions-contemporaines" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Questions contemporaines : masturbation, pornographie et
                  autres
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le monde moderne pose des défis que les générations
                  précédentes n&apos;avaient pas à affronter avec la même
                  intensité. L&apos;accès instantané à des contenus explicites,
                  la banalisation des relations hors mariage et la
                  redéfinition des normes sociales placent le croyant face à
                  des tentations omniprésentes. Les savants musulmans se sont
                  penchés sur ces questions avec rigueur et nuance.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La masturbation : un débat entre les écoles juridiques
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La majorité des savants (malikites, shafiites,
                        hanafites) considèrent la masturbation comme haram,
                        s&apos;appuyant sur le verset de la sourate
                        Al-Mu&apos;minun (23:5-7) qui invite les croyants à
                        préserver leur chasteté sauf avec leurs épouses.
                        L&apos;imam Ahmad ibn Hanbal a toutefois admis une
                        tolérance dans le cas où la personne craint de tomber
                        dans la fornication, selon le principe du moindre mal.
                        Le consensus reste clair : le mariage demeure la
                        solution recommandée, et le jeûne est préconisé pour
                        celui qui n&apos;en a pas les moyens, conformément au
                        hadith du Prophète (paix et salut sur lui).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La pornographie : un fléau unanimement condamné
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Aucune divergence n&apos;existe entre les savants sur
                        le caractère illicite de la pornographie. Elle
                        contrevient à l&apos;injonction coranique de baisser
                        le regard (sourate An-Nur, 24:30), nourrit les
                        pulsions vers la fornication et altère profondément
                        la perception de l&apos;intimité conjugale. De
                        nombreuses études confirment ses effets dévastateurs
                        sur la santé mentale, les relations de couple et la
                        capacité de concentration dans les actes
                        d&apos;adoration. Le croyant est invité à protéger
                        ses yeux et son coeur en multipliant le dhikr
                        (rappel d&apos;Allah) et en occupant son temps par
                        des activités bénéfiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La prostitution : une interdiction sans ambiguïté
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran interdit explicitement de pousser quiconque
                        à la prostitution (sourate An-Nur, 24:33). La vente
                        du corps est considérée comme une atteinte à la
                        dignité humaine que l&apos;islam cherche à protéger.
                        Celui qui s&apos;adonne à cette pratique, comme
                        celui qui y participe en tant que client, commet un
                        péché. Toutefois, l&apos;islam reconnaît que certaines
                        personnes y sont contraintes par la pauvreté ou
                        l&apos;exploitation, et invite la communauté à porter
                        assistance à ces personnes plutôt qu&apos;à les juger.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;homosexualité : la position des savants
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les savants musulmans, à travers les siècles, ont
                        considéré les actes homosexuels comme prohibés en se
                        fondant sur le récit coranique du peuple de Loth et
                        sur plusieurs hadiths. Il convient de distinguer entre
                        l&apos;attirance ressentie, qui en elle-même n&apos;est
                        pas un péché, et le passage à l&apos;acte. L&apos;islam
                        enseigne que chaque être humain est éprouvé
                        différemment, et que la lutte contre ses penchants
                        est en soi une forme d&apos;adoration lorsqu&apos;elle
                        est motivée par la crainte d&apos;Allah. La
                        bienveillance envers les personnes concernées, sans
                        pour autant valider l&apos;acte, reste un devoir du
                        croyant.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Face à ces tentations contemporaines, le Prophète (paix et
                  salut sur lui) a donné un conseil qui traverse les époques :
                  <em>&laquo; O jeunes gens, quiconque parmi vous en a les
                  moyens, qu&apos;il se marie, car c&apos;est mieux pour
                  préserver le regard et la chasteté. Et celui qui n&apos;en
                  a pas les moyens, qu&apos;il jeûne, car le jeûne est pour
                  lui une protection &raquo;</em> (rapporté par Al-Bukhari et
                  Muslim).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le jeûne est recommandé pour maîtriser les pulsions
                      lorsque le mariage n&apos;est pas possible.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Baisser le regard et éviter les contenus explicites
                      protège le coeur et la foi. Même les{" "}
                      <Link href="/reve-erotique-islam-purification" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">rêves à caractère intime</Link>{" "}
                      appellent une purification spirituelle.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      S&apos;entourer de bonnes fréquentations aide à rester
                      sur le droit chemin.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;addiction à la pornographie se soigne par des
                      étapes progressives : filtrage numérique, rappel
                      d&apos;Allah, recherche d&apos;un soutien de confiance.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Peches-lies-a-la-sexualite-ce-qui-est-interdit-en-islam-1.jpg"
                    alt="Questions contemporaines sur la sexualité en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : La sexualité dans le mariage */}
              {/* ============================================ */}
              <section id="cadre-mariage" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sexualité dans le cadre du mariage
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;interdire : il offre
                  un cadre positif et épanouissant pour l&apos;expression de
                  la sexualité. Le mariage (nikah) est présenté comme la voie
                  naturelle et bénie pour satisfaire le désir charnel. Le
                  Prophète (paix et salut sur lui) a même affirmé que
                  l&apos;intimité conjugale constitue une aumône :
                  <em>&laquo; Et dans vos rapports intimes, il y a une
                  aumône &raquo;</em> (rapporté par Muslim). Les compagnons,
                  étonnés, ont demandé : <em>&laquo; L&apos;un de nous
                  satisfait son désir et en est récompensé ? &raquo;</em>
                  Il répondit : <em>&laquo; S&apos;il l&apos;avait satisfait
                  de manière illicite, n&apos;aurait-il pas commis un
                  péché ? De même, s&apos;il le satisfait de manière licite,
                  il en est récompensé. &raquo;</em>
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le consentement mutuel est un pilier de l&apos;éthique
                  conjugale en islam. Le mari n&apos;a pas le droit de
                  contraindre son épouse à des pratiques qu&apos;elle refuse,
                  et la femme a le droit à la satisfaction de ses besoins
                  intimes. Le Prophète (paix et salut sur lui) a averti les
                  hommes de ne pas être égoïstes dans l&apos;intimité et
                  d&apos;accorder à leur épouse le temps et la tendresse
                  nécessaires.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les invocations avant l&apos;intimité
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné une
                        invocation à réciter avant le rapport conjugal :
                        <em>&laquo; Bismillah, Allahumma jannibna
                        ash-shaytan wa jannib ash-shaytana ma
                        razaqtana &raquo;</em> (Au nom d&apos;Allah, O Allah
                        éloigne de nous le diable et éloigne-le de ce que Tu
                        nous accorderas). Cette invocation protège le couple
                        et l&apos;enfant qui pourrait naître de cette union
                        (rapporté par Al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les périodes de restriction
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les rapports intimes sont interdits pendant les
                        menstrues de la femme (sourate Al-Baqarah, 2:222),
                        les lochies (après l&apos;accouchement) et pendant
                        les heures de jeûne obligatoire du Ramadan (du
                        lever au coucher du soleil). En dehors de ces
                        périodes, le couple jouit d&apos;une grande liberté
                        dans ses pratiques intimes, à condition de
                        respecter l&apos;interdit de la sodomie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La confidentialité conjugale
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a interdit aux
                        époux de divulguer les détails de leur vie intime.
                        Il a comparé celui qui le fait à un diable mâle qui
                        rencontre un diable femelle au bord de la route
                        (rapporté par Muslim). La pudeur et la discrétion
                        dans le couple sont des valeurs que l&apos;islam
                        place au rang des obligations morales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le respect mutuel et la tendresse
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Coran décrit les époux comme des vêtements l&apos;un
                        pour l&apos;autre (sourate Al-Baqarah, 2:187), une
                        image qui évoque la protection, la proximité et la
                        complémentarité. L&apos;égoïsme dans l&apos;intimité
                        est réprouvé : les deux partenaires ont des droits
                        et des devoirs réciproques. Les savants rappellent
                        que satisfaire les besoins affectifs et physiques de
                        son conjoint fait partie de la bienfaisance (ihsan)
                        encouragée par l&apos;islam.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le rapport conjugal est un acte d&apos;adoration
                      lorsqu&apos;il est accompli dans le respect des règles
                      divines.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Le consentement mutuel est un pilier de l&apos;éthique
                      conjugale islamique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La communication ouverte entre époux renforce le lien
                      affectif et prévient les transgressions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      L&apos;islam valorise la vie intime comme une source
                      de sérénité (sakina) et de miséricorde (rahma) au sein
                      du foyer.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le mariage en islam : présages et significations"
                  description="Découvrez les fondements du mariage islamique, ses bénédictions et les signes qui l&apos;entourent."
                  href="/mariage-islam-presages-significations"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Repentir et miséricorde */}
              {/* ============================================ */}
              <section id="repentir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le repentir et la miséricorde divine
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne ferme jamais la porte de l&apos;espérance.
                  La voie du{" "}
                  <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">repentir sincère (tawba)</Link>{" "}
                  reste toujours ouverte, car aussi grave que soit le péché commis, la miséricorde
                  d&apos;Allah reste plus vaste. Le Coran proclame :
                  <em>&laquo; Dis : O Mes serviteurs qui avez commis des
                  excès à votre propre détriment, ne désespérez pas de la
                  miséricorde d&apos;Allah. Car Allah pardonne tous les
                  péchés. Oui, c&apos;est Lui le Pardonneur, le Très
                  Miséricordieux &raquo;</em> (sourate Az-Zumar, 39:53). Ce
                  verset, qualifié par certains compagnons de &laquo; verset
                  le plus porteur d&apos;espoir du Coran &raquo;, s&apos;adresse
                  directement à ceux qui se sont égarés dans les péchés
                  les plus lourds, y compris les péchés sexuels.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a rapporté qu&apos;Allah
                  se réjouit du repentir de Son serviteur plus qu&apos;un
                  homme perdu dans le désert qui retrouve soudainement sa
                  monture chargée de nourriture et d&apos;eau (rapporté par
                  Al-Bukhari et Muslim). Cette image puissante illustre
                  l&apos;amour divin pour le retour du pécheur, quel que soit
                  l&apos;ampleur de ses fautes.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Cesser immédiatement le péché
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La première condition du repentir sincère est
                        d&apos;arrêter la transgression au moment même où
                        l&apos;on prend conscience de sa gravité. Cela
                        implique de couper les moyens d&apos;accès au péché :
                        supprimer les contenus illicites, rompre les
                        relations interdites, s&apos;éloigner des lieux de
                        tentation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Éprouver un regret sincère
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        <em>&laquo; Le regret est le repentir &raquo;</em>
                        (rapporté par Ibn Majah et Ahmad). Le coeur brisé par
                        la conscience de la faute commise est le signe
                        d&apos;une foi vivante. Ce regret ne doit pas mener
                        au désespoir, mais à une détermination renouvelée de
                        se rapprocher d&apos;Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prendre la résolution ferme de ne plus recommencer
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;intention sincère de ne plus retomber dans le
                        péché est la troisième condition. Même si la
                        rechute survient par faiblesse humaine, chaque
                        nouveau repentir est accepté tant que la sincérité
                        est présente. Allah ne se lasse pas de pardonner
                        tant que le serviteur ne se lasse pas de demander
                        pardon.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Demander pardon à Allah et multiplier les bonnes
                        actions
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;istighfar (demande de pardon), la prière
                        nocturne (qiyam al-layl), le jeûne surérogatoire et
                        l&apos;aumône sont autant de moyens de purifier
                        l&apos;âme après un péché. Le Coran enseigne :
                        <em>&laquo; Les bonnes actions dissipent les
                        mauvaises &raquo;</em> (sourate Hud, 11:114). Le
                        croyant repentant est encouragé à remplacer les
                        mauvaises habitudes par des actes de piété qui
                        renforcent sa relation avec Allah.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les savants rappellent un point fondamental : il n&apos;est
                  pas nécessaire de confesser ses péchés sexuels à qui que
                  ce soit. Le Prophète (paix et salut sur lui) a dit :
                  <em>&laquo; Toute ma communauté sera pardonnée, sauf ceux
                  qui commettent leurs péchés ouvertement &raquo;</em>
                  (rapporté par Al-Bukhari et Muslim). Le repentir est une
                  affaire entre le serviteur et son Seigneur. Celui qui
                  cache son péché et se repent sincèrement trouvera en Allah
                  un Pardonneur qui efface les fautes et les transforme en
                  bonnes actions (sourate Al-Furqan, 25:70).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne jamais désespérer de la miséricorde d&apos;Allah,
                      quel que soit le péché commis.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Garder son péché secret entre soi et Allah, ne pas le
                      divulguer.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Remplacer les mauvaises habitudes par des actes de
                      piété : prière, jeûne, aumône, lecture du Coran.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      La rechute n&apos;annule pas les repentirs précédents :
                      chaque retour sincère vers Allah est accepté.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Consulter un imam ou un conseiller de confiance pour
                      un accompagnement spirituel personnalisé. En cas
                      d&apos;angoisse persistante, les{" "}
                      <Link href="/remede-angoisse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">remèdes contre l&apos;angoisse en islam</Link>{" "}
                      offrent un soutien complémentaire.
                    </span>
                  </li>
                </ul>

                {/* Tableau étapes du repentir */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Étape du repentir
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Description
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Fondement
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Cessation du péché
                        </td>
                        <td className="py-3 pr-4">
                          Arrêter immédiatement la transgression
                        </td>
                        <td className="py-3">
                          Condition unanime des savants
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Regret sincère
                        </td>
                        <td className="py-3 pr-4">
                          Ressentir la honte et la tristesse face à la faute
                        </td>
                        <td className="py-3">
                          Hadith : &laquo; Le regret est le repentir &raquo;
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Résolution ferme
                        </td>
                        <td className="py-3 pr-4">
                          Prendre la décision de ne plus recommencer
                        </td>
                        <td className="py-3">
                          Consensus des juristes musulmans
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Demande de pardon
                        </td>
                        <td className="py-3 pr-4">
                          Istighfar, prière, bonnes actions compensatoires
                        </td>
                        <td className="py-3">
                          Coran 11:114, 39:53, 25:70
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION Profils */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils selon votre situation
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les défis liés à la sexualité varient selon la situation
                  personnelle de chacun. Voici des orientations adaptées à
                  trois profils fréquents.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un jeune célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La période de célibat est souvent la plus exposée aux
                      tentations. Le Prophète (paix et salut sur lui)
                      recommande le jeûne comme protection et le mariage dès
                      que les moyens le permettent. En attendant, préservez
                      votre regard, choisissez des fréquentations vertueuses,
                      occupez votre temps par l&apos;apprentissage du Coran
                      et le sport. Le dhikr régulier et les invocations du
                      matin et du soir sont des boucliers contre les
                      tentations quotidiennes.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un couple marié
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le mariage offre le cadre licite pour l&apos;expression
                      du désir, mais il requiert un entretien constant.
                      Communiquez ouvertement avec votre conjoint sur vos
                      besoins et vos limites. Respectez les périodes de
                      restriction, récitez les invocations avant
                      l&apos;intimité et veillez à la satisfaction mutuelle.
                      Si des tentations extérieures surgissent, renforcez
                      votre lien conjugal plutôt que de chercher ailleurs.
                      La prière en couple et les moments de qualité partagés
                      sont de puissants remparts.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une personne repentante
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Si vous portez le poids d&apos;un péché passé, sachez
                      que la porte du repentir est toujours ouverte. Ne
                      laissez pas la culpabilité vous paralyser ou vous
                      éloigner de la prière. Au contraire, rapprochez-vous
                      d&apos;Allah par l&apos;istighfar quotidien, la prière
                      nocturne et l&apos;aumône. Gardez votre péché secret,
                      ne le confiez qu&apos;à Allah. Entourez-vous de
                      personnes pieuses, fixez-vous des objectifs spirituels
                      progressifs, et rappelez-vous que chaque jour est une
                      nouvelle chance de recommencer.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* ArticleCTA avant FAQ */}
              {/* ============================================ */}
              <ArticleCTA
                variant="page-mere"
                title="Approfondir les critères du licite et de l&apos;illicite"
                href="/halal-haram-criteres"
                linkText="Comprendre le halal et le haram en islam"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Acc\u00e9dez aux sources du fiqh dans leur langue originale"
                description="Le Coran, la Sunna et les ouvrages de jurisprudence sont en arabe. Formez-vous pour lire et comprendre les textes de r\u00e9f\u00e9rence."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sujets en rapport
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/mariage-islam-presages-significations"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Mariage en islam : présages et significations
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
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie et protection en islam
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
