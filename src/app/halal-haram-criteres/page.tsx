import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Diff\u00e9rence entre halal et haram : crit\u00e8res de lic\u00e9it\u00e9",
  description:
    "Comprenez la diff\u00e9rence entre halal et haram en islam : les cinq cat\u00e9gories juridiques, crit\u00e8res alimentaires, transactions financi\u00e8res et applications au quotidien.",
  alternates: {
    canonical: "https://www.islamreligion.fr/halal-haram-criteres",
  },
};

const tocItems = [
  { id: "categories", label: "Les cinq cat\u00e9gories juridiques" },
  { id: "alimentaire", label: "Crit\u00e8res de lic\u00e9it\u00e9 alimentaire" },
  { id: "financier", label: "Halal et haram dans la finance" },
  { id: "quotidien", label: "Application dans la vie quotidienne" },
  { id: "savants", label: "Savants et fatwas contemporaines" },
  { id: "faq", label: "Questions fr\u00e9quentes" },
];

const faqItems = [
  {
    question: "Quelle est la diff\u00e9rence entre halal et haram en islam ?",
    answer:
      "Le halal d\u00e9signe tout ce qui est licite et permis selon la loi islamique, tandis que le haram d\u00e9signe ce qui est strictement interdit. Entre ces deux p\u00f4les, la jurisprudence islamique reconna\u00eet trois cat\u00e9gories interm\u00e9diaires : le mustahabb (recommand\u00e9), le mubah (neutre) et le makrouh (d\u00e9conseill\u00e9). Cette gradation refl\u00e8te la souplesse et la sagesse de la l\u00e9gislation islamique.",
  },
  {
    question: "Quelles sont les cinq cat\u00e9gories de jugement en islam ?",
    answer:
      "Les cinq cat\u00e9gories sont : le fard ou wajib (obligatoire), le mustahabb (recommand\u00e9), le mubah (permis, neutre), le makrouh (d\u00e9conseill\u00e9) et le haram (interdit). Chaque acte humain rel\u00e8ve de l\u0027une de ces cat\u00e9gories selon le Coran, la Sunna et le travail des juristes musulmans.",
  },
  {
    question: "Comment savoir si un aliment est halal ?",
    answer:
      "Un aliment est halal lorsqu\u0027il r\u00e9pond \u00e0 plusieurs crit\u00e8res : l\u0027animal doit faire partie des esp\u00e8ces autoris\u00e9es, \u00eatre abattu rituellement (dhabiha) avec invocation du nom d\u0027Allah, le sang doit \u00eatre compl\u00e8tement drain\u00e9, et l\u0027aliment ne doit contenir aucun additif d\u0027origine illicite (alcool, g\u00e9latine de porc). Les certifications halal aident \u00e0 identifier les produits conformes.",
  },
  {
    question: "L\u0027int\u00e9r\u00eat bancaire (riba) est-il haram en islam ?",
    answer:
      "Oui, le riba (usure et int\u00e9r\u00eat) est formellement interdit en islam selon le Coran (sourate Al-Baqarah, verset 275) et la Sunna. Cette interdiction s\u0027applique aussi bien au pr\u00eateur qu\u0027\u00e0 l\u0027emprunteur. Les alternatives licites incluent la finance islamique fond\u00e9e sur le partage des profits et des risques (mourabaha, moucharaka, ijara).",
  },
  {
    question: "Le makrouh est-il un p\u00e9ch\u00e9 en islam ?",
    answer:
      "Le makrouh n\u0027est pas un p\u00e9ch\u00e9 au sens strict, contrairement au haram. Il s\u0027agit d\u0027un acte d\u00e9conseill\u00e9 dont l\u0027abandon est r\u00e9compens\u00e9 mais dont la pratique n\u0027entra\u00eene pas de sanction. Cependant, la r\u00e9p\u00e9tition excessive d\u0027actes makrouh peut fragiliser la discipline spirituelle du croyant et le rapprocher du haram.",
  },
  {
    question: "La certification halal est-elle fiable ?",
    answer:
      "La fiabilit\u00e9 d\u0027une certification halal d\u00e9pend de l\u0027organisme qui la d\u00e9livre. Les organismes reconnus appliquent des audits rigoureux, des inspections sur site et un suivi de la cha\u00eene de production. Il est recommand\u00e9 de privil\u00e9gier les certifications d\u00e9livr\u00e9es par des institutions reconnues par les autorit\u00e9s religieuses et les associations musulmanes du pays.",
  },
  {
    question:
      "Peut-on manger la viande des gens du Livre (chr\u00e9tiens et juifs) ?",
    answer:
      "Le Coran autorise la consommation de la nourriture des gens du Livre (sourate Al-M\u00e2\u0027idah, verset 5). Les savants divergent sur les conditions : certains consid\u00e8rent cette permission comme g\u00e9n\u00e9rale, d\u0027autres exigent que l\u0027abattage respecte un minimum de conditions (invocation du nom de Dieu, \u00e9gorgement). Il est recommand\u00e9 de consulter un savant de confiance pour sa situation personnelle.",
  },
  {
    question:
      "Comment g\u00e9rer le doute sur le caract\u00e8re halal d\u0027un produit ?",
    answer:
      "Le Proph\u00e8te (\u1e63alla All\u0101hu \u02bfalayhi wa sallam) a enseign\u00e9 : \u00ab Laisse ce qui te fait douter pour ce qui ne te fait pas douter. \u00bb En cas d\u0027incertitude, il est pr\u00e9f\u00e9rable de s\u0027abstenir, de rechercher des alternatives clairement licites et de se renseigner aupr\u00e8s d\u0027un savant ou d\u0027un organisme de certification comp\u00e9tent.",
  },
];

export default function HalalHaram() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/halal-haram-criteres/#article",
        headline:
          "Diff\u00e9rence entre halal et haram : crit\u00e8res de lic\u00e9it\u00e9",
        description:
          "Comprenez la diff\u00e9rence entre halal et haram en islam : les cinq cat\u00e9gories juridiques, crit\u00e8res alimentaires, transactions financi\u00e8res et applications au quotidien.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Difference-entre-halal-et-haram-criteres-de-liceite-1.jpg",
        datePublished: "2025-08-19",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/halal-haram-criteres/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/halal-haram-criteres/#breadcrumb",
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
            name: "Halal et haram",
            item: "https://www.islamreligion.fr/halal-haram-criteres",
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
          title="Diff\u00e9rence entre halal et haram : crit\u00e8res de lic\u00e9it\u00e9"
          subtitle="Comprendre les cat\u00e9gories de la jurisprudence islamique, les crit\u00e8res alimentaires, financiers et les applications au quotidien."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Difference-entre-halal-et-haram-criteres-de-liceite-1.jpg"
          imageAlt="Diff\u00e9rence entre halal et haram, crit\u00e8res de lic\u00e9it\u00e9 en islam"
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
                <span className="text-foreground">Halal et haram en islam</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En r&eacute;sum&eacute;
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La distinction entre halal et haram constitue l&apos;un des
                  fondements de la vie du musulman. Loin de se limiter &agrave;
                  l&apos;alimentation, ces notions couvrent l&apos;ensemble des
                  actes humains : finances, v&ecirc;tements, relations sociales,
                  loisirs. La jurisprudence islamique propose un syst&egrave;me
                  gradu&eacute; en cinq cat&eacute;gories, du fard (obligatoire)
                  au haram (interdit), offrant au croyant un cadre clair pour
                  chaque situation.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Les cinq categories juridiques */}
              {/* ============================================ */}
              <section id="categories" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les cinq cat&eacute;gories de la jurisprudence islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La jurisprudence musulmane (fiqh) classe chaque acte humain
                  dans l&apos;une de cinq cat&eacute;gories, appel&eacute;es
                  al-ahk&acirc;m al-khamsa. Ce syst&egrave;me, &eacute;labor&eacute;
                  par les grands juristes des quatre &eacute;coles sunnites
                  (hanafite, malikite, shafi&apos;ite, hanbalite), repose sur
                  <Link href="/jurisprudence-islamique-coran-sunna-ijma" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les sources fondamentales de la jurisprudence islamique</Link> : le Coran, la Sunna du Proph&egrave;te (&#7779;alla All&#257;hu
                  &#699;alayhi wa sallam), le consensus des savants (ijma&#699;)
                  et le raisonnement par analogie (qiy&acirc;s).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce classement ne se r&eacute;duit pas &agrave; une opposition
                  binaire entre permis et interdit. Il offre une &eacute;chelle
                  de valeurs qui tient compte de la complexit&eacute; des
                  situations humaines. Comme le rappelle le verset :
                  &laquo;&nbsp;&#212; les croyants, mangez des bonnes choses que
                  Nous vous avons attribu&eacute;es et remerciez Allah, si
                  c&apos;est Lui que vous adorez&nbsp;&raquo; (Coran, 2:172).
                  La base en islam est la permission, sauf preuve contraire
                  venant d&apos;un texte authentique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants insistent sur un principe fondamental : &laquo;&nbsp;la
                  base dans les choses est la permission&nbsp;&raquo;
                  (al-a&#7779;l fi al-ashy&acirc;&apos; al-ib&acirc;&#7717;a).
                  Cela signifie que tout ce qui n&apos;est pas interdit par un
                  texte clair reste autoris&eacute;. Ce principe prot&egrave;ge
                  le croyant de l&apos;exc&egrave;s de rigueur et de
                  l&apos;extr&eacute;misme.
                </p>

                {/* Tableau des 5 categories */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Cat&eacute;gorie
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          D&eacute;finition
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Exemple
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Cons&eacute;quence
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fard (obligatoire)
                        </td>
                        <td className="py-3 pr-4">
                          Acte ordonn&eacute; par Allah, dont
                          l&apos;accomplissement est r&eacute;compens&eacute; et
                          l&apos;abandon sanctionn&eacute;
                        </td>
                        <td className="py-3 pr-4">
                          Les cinq pri&egrave;res, le je&ucirc;ne du Ramadan, la zakat
                        </td>
                        <td className="py-3">
                          R&eacute;compense divine pour l&apos;accomplissement,
                          p&eacute;ch&eacute; en cas d&apos;abandon
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mustahabb (recommand&eacute;)
                        </td>
                        <td className="py-3 pr-4">
                          Acte encouragé par la Sunna, dont la pratique
                          est r&eacute;compens&eacute;e sans que l&apos;abandon
                          soit un p&eacute;ch&eacute;
                        </td>
                        <td className="py-3 pr-4">
                          Pri&egrave;res surr&eacute;rogatoires, saluer avec le salam,
                          utiliser le siwak
                        </td>
                        <td className="py-3">
                          R&eacute;compense pour la pratique,
                          pas de sanction pour l&apos;abandon
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Mubah (permis, neutre)
                        </td>
                        <td className="py-3 pr-4">
                          Acte ni r&eacute;compens&eacute; ni sanctionn&eacute;,
                          laiss&eacute; au libre choix du croyant
                        </td>
                        <td className="py-3 pr-4">
                          Choix vestimentaire (dans les limites de la pudeur),
                          manger un fruit, pratiquer un sport
                        </td>
                        <td className="py-3">
                          Aucune cons&eacute;quence spirituelle directe,
                          sauf si l&apos;intention transforme l&apos;acte
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Makrouh (d&eacute;conseill&eacute;)
                        </td>
                        <td className="py-3 pr-4">
                          Acte d&eacute;conseill&eacute; dont l&apos;abandon est
                          r&eacute;compens&eacute; mais dont la pratique
                          n&apos;entra&icirc;ne pas de sanction
                        </td>
                        <td className="py-3 pr-4">
                          Manger de l&apos;ail cru avant la mosqu&eacute;e,
                          gaspiller l&apos;eau des ablutions
                        </td>
                        <td className="py-3">
                          R&eacute;compense pour l&apos;abstention,
                          pas de p&eacute;ch&eacute; formel pour la pratique
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Haram (interdit)
                        </td>
                        <td className="py-3 pr-4">
                          Acte formellement prohib&eacute; par un texte clair,
                          dont la pratique constitue un p&eacute;ch&eacute;
                        </td>
                        <td className="py-3 pr-4">
                          Consommer du porc, boire de l&apos;alcool, pratiquer
                          l&apos;usure (riba), le meurtre
                        </td>
                        <td className="py-3">
                          P&eacute;ch&eacute; pour la pratique,
                          r&eacute;compense pour l&apos;abstention
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette classification n&apos;est pas fig&eacute;e dans le
                  temps. Le statut d&apos;un acte peut varier selon le contexte,
                  l&apos;intention (niyya) et les circonstances. Par exemple,
                  manger (mubah) devient obligatoire lorsque la survie est en
                  jeu, et un aliment normalement interdit peut &ecirc;tre
                  consomm&eacute; en cas de n&eacute;cessit&eacute;
                  absolue, comme le rappelle le Coran : &laquo;&nbsp;Mais quiconque
                  est contraint, sans exc&egrave;s ni transgression, nul
                  p&eacute;ch&eacute; sur lui&nbsp;&raquo; (Coran, 2:173).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le principe de pr&eacute;caution :</strong> en cas
                      de doute, le Proph&egrave;te (&#7779;alla All&#257;hu
                      &#699;alayhi wa sallam) conseille de s&apos;abstenir pour
                      prot&eacute;ger sa religion et son honneur. Si le croyant transgresse, <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le repentir sincère (tawba)</Link> reste toujours accessible.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>L&apos;intention compte :</strong> un acte
                      neutre (mubah) peut devenir m&eacute;ritoire si
                      l&apos;intention est bonne. Manger pour avoir la force
                      de prier est un acte d&apos;adoration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La gradation prot&egrave;ge :</strong> le
                      syst&egrave;me &eacute;vite l&apos;extr&eacute;misme en
                      reconnaissant des zones interm&eacute;diaires entre le
                      permis et l&apos;interdit.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Difference-entre-halal-et-haram-criteres-de-liceite-1.jpg"
                    alt="Les cinq cat&eacute;gories de la jurisprudence islamique, de l'obligatoire &agrave; l'interdit"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Criteres de liceite alimentaire */}
              {/* ============================================ */}
              <section id="alimentaire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les crit&egrave;res de lic&eacute;it&eacute; alimentaire
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La question alimentaire reste la dimension la plus visible de
                  la distinction halal/haram. Le Coran pose les fondements de
                  cette l&eacute;gislation dans plusieurs versets.
                  &laquo;&nbsp;&#212; les gens, mangez de ce qui est sur terre,
                  licite et bon&nbsp;&raquo; (Coran, 2:168). La Sunna
                  pr&eacute;cise les modalit&eacute;s pratiques de
                  l&apos;abattage et identifie les animaux autoris&eacute;s.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;abattage rituel (dhabiha) constitue la pierre
                  angulaire de la lic&eacute;it&eacute; alimentaire pour les
                  viandes. Plusieurs conditions doivent &ecirc;tre r&eacute;unies
                  simultan&eacute;ment : l&apos;animal doit &ecirc;tre vivant
                  au moment de l&apos;&eacute;gorgement, le nom d&apos;Allah
                  doit &ecirc;tre prononc&eacute; (tasmiyya), la jugulaire et
                  les carotides doivent &ecirc;tre tranch&eacute;es d&apos;un
                  geste rapide et le sang doit s&apos;&eacute;couler
                  compl&egrave;tement. Le bien-&ecirc;tre de l&apos;animal
                  est &eacute;galement pris en compte : le Proph&egrave;te
                  (&#7779;alla All&#257;hu &#699;alayhi wa sallam) a
                  ordonn&eacute; d&apos;aiguiser la lame et de ne pas faire
                  souffrir l&apos;animal.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les animaux terrestres autoris&eacute;s et interdits
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les animaux herbivores domestiques (bovins, ovins,
                        caprins, camelid&eacute;s) et la volaille sont
                        autoris&eacute;s. Les animaux carnivores &agrave;
                        crocs (lion, loup), les rapaces &agrave; serres, les
                        insectes (sauf les sauterelles selon un hadith
                        authentique) et le porc sont interdits. Le verset
                        est explicite : &laquo;&nbsp;Vous sont interdits la
                        b&ecirc;te trouv&eacute;e morte, le sang, la chair du
                        porc&nbsp;&raquo; (Coran, 5:3).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les produits de la mer
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La majorit&eacute; des savants consid&egrave;rent les
                        produits de la mer comme licites sans abattage rituel,
                        en vertu du hadith : &laquo;&nbsp;Son eau est
                        purificatrice et ses animaux morts sont
                        licites&nbsp;&raquo; (rapport&eacute; par Ab&ucirc;
                        Dawud et An-Nas&acirc;&apos;&icirc;). Certaines
                        divergences existent entre les &eacute;coles sur les
                        crustac&eacute;s et les animaux marins atypiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Additifs, g&eacute;latine et alcool dans les aliments
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les additifs alimentaires posent des questions
                        contemporaines. La g&eacute;latine de porc est
                        consid&eacute;r&eacute;e comme haram par la
                        majorit&eacute; des savants. Les ar&ocirc;mes contenant
                        de l&apos;alcool &eacute;thylique font l&apos;objet de
                        d&eacute;bats : si l&apos;alcool s&apos;&eacute;vapore
                        compl&egrave;tement lors de la cuisson et ne laisse
                        aucune trace enivrante, certains juristes
                        l&apos;autorisent. La prudence reste recommand&eacute;e.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau statut des aliments */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Aliment
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Statut
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Condition
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Viande de boeuf, mouton, poulet
                        </td>
                        <td className="py-3 pr-4">Halal</td>
                        <td className="py-3">
                          Abattage rituel (dhabiha), invocation du nom
                          d&apos;Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Poisson et fruits de mer
                        </td>
                        <td className="py-3 pr-4">Halal</td>
                        <td className="py-3">
                          Aucun abattage rituel requis (majorit&eacute; des
                          savants)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Porc et ses d&eacute;riv&eacute;s
                        </td>
                        <td className="py-3 pr-4">Haram</td>
                        <td className="py-3">
                          Interdiction absolue (Coran, 2:173 et 5:3)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Alcool et boissons enivrantes
                        </td>
                        <td className="py-3 pr-4">Haram</td>
                        <td className="py-3">
                          Toute substance enivrante est interdite, m&ecirc;me
                          en petite quantit&eacute;
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          G&eacute;latine de porc
                        </td>
                        <td className="py-3 pr-4">Haram</td>
                        <td className="py-3">
                          Alternatives : g&eacute;latine de boeuf halal,
                          agar-agar, pectine
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Viande des gens du Livre
                        </td>
                        <td className="py-3 pr-4">Divergence</td>
                        <td className="py-3">
                          Autoris&eacute;e selon le Coran (5:5), conditions
                          d&eacute;battues entre savants
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fruits, l&eacute;gumes, c&eacute;r&eacute;ales
                        </td>
                        <td className="py-3 pr-4">Halal</td>
                        <td className="py-3">
                          Licites par d&eacute;faut, sauf contamination par un
                          produit illicite
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La certification halal joue un r&ocirc;le croissant dans le
                  monde contemporain. Elle permet aux consommateurs musulmans
                  de v&eacute;rifier la conformit&eacute; des produits
                  industriels. Cependant, toutes les certifications ne se
                  valent pas. Les organismes les plus fiables proc&egrave;dent
                  &agrave; des audits r&eacute;guliers des abattoirs, des
                  cha&icirc;nes de production et des ingr&eacute;dients
                  utilis&eacute;s. Le consommateur averti se renseigne sur
                  l&apos;organisme certificateur avant de se fier au label.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Difference-entre-halal-et-haram-criteres-de-liceite-1.jpg"
                    alt="Crit&egrave;res de lic&eacute;it&eacute; alimentaire halal en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Halal et haram dans la finance */}
              {/* ============================================ */}
              <section id="financier" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Halal et haram dans les transactions financi&egrave;res
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La dimension financi&egrave;re du halal et du haram est tout
                  aussi importante que la dimension alimentaire. Le Coran est
                  cat&eacute;gorique sur l&apos;usure : &laquo;&nbsp;Ceux qui
                  pratiquent l&apos;int&eacute;r&ecirc;t usuraire (riba) ne se
                  tiendront, au Jour de la R&eacute;surrection, que comme se
                  tient celui que le toucher de Satan a
                  boulevers&eacute;&nbsp;&raquo; (Coran, 2:275). Cette
                  interdiction constitue l&apos;un des rares cas o&ugrave; le
                  Coran utilise un langage aussi s&eacute;v&egrave;re.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Trois concepts cl&eacute;s d&eacute;limitent le cadre des
                  transactions illicites en islam. Le riba (usure et
                  int&eacute;r&ecirc;t), le gharar (incertitude excessive dans
                  un contrat) et le maysir (jeux de hasard et sp&eacute;culation
                  pure). Ces trois interdictions visent &agrave;
                  prot&eacute;ger la soci&eacute;t&eacute; contre
                  l&apos;exploitation, l&apos;injustice et la destruction des
                  liens de solidarit&eacute;.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le riba : usure et int&eacute;r&ecirc;t bancaire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le riba d&eacute;signe toute augmentation
                        injustifi&eacute;e lors d&apos;un pr&ecirc;t ou d&apos;un
                        &eacute;change de biens de m&ecirc;me nature.
                        L&apos;int&eacute;r&ecirc;t bancaire conventionnel
                        entre dans cette cat&eacute;gorie selon la
                        quasi-totalit&eacute; des savants contemporains.
                        Le Proph&egrave;te (&#7779;alla All&#257;hu &#699;alayhi
                        wa sallam) a maudit celui qui consomme le riba, celui
                        qui le verse, celui qui r&eacute;dige le contrat et les
                        deux t&eacute;moins (rapport&eacute; par Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le gharar : l&apos;incertitude excessive
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le gharar d&eacute;signe l&apos;incertitude majeure
                        dans un contrat, lorsque l&apos;objet de la vente, son
                        prix ou ses conditions restent flous. Les produits
                        d&apos;assurance conventionnels contiennent souvent du
                        gharar, d&apos;o&ugrave; le d&eacute;veloppement de
                        l&apos;assurance islamique (takaful), fond&eacute;e sur
                        la solidarit&eacute; et le partage des risques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le maysir : jeux de hasard et sp&eacute;culation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le maysir englobe les jeux de hasard, la loterie et
                        toute forme de sp&eacute;culation pure o&ugrave; le
                        gain d&eacute;pend du hasard plut&ocirc;t que d&apos;un
                        travail r&eacute;el. Certains produits financiers
                        d&eacute;riv&eacute;s (options, contrats &agrave; terme
                        sp&eacute;culatifs) sont &eacute;galement
                        concern&eacute;s.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Les alternatives licites : la finance islamique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La finance islamique propose des solutions
                        conform&eacute;s &agrave; la charia. La mourabaha
                        (vente avec marge connue), la moucharaka (partenariat
                        avec partage des profits et des pertes), l&apos;ijara
                        (location-vente) et le sukuk (obligations islamiques)
                        permettent de financer des projets sans recourir &agrave;
                        l&apos;int&eacute;r&ecirc;t. Ces instruments
                        conna&icirc;ssent une croissance mondiale
                        significative.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Investissement en bourse :</strong> licite si
                      l&apos;entreprise ne tire pas ses revenus principaux
                      d&apos;activit&eacute;s haram (alcool, jeux de hasard,
                      pornographie, armes).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cryptomonnaies :</strong> les savants divergent.
                      Certains les autorisent sous conditions (pas de
                      sp&eacute;culation pure, utilit&eacute; r&eacute;elle),
                      d&apos;autres les consid&egrave;rent comme du gharar.
                      Le d&eacute;bat reste ouvert.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pr&ecirc;ts entre particuliers :</strong> le
                      pr&ecirc;t sans int&eacute;r&ecirc;t (qard hassan) est
                      fortement encouragé en islam. C&apos;est un acte de
                      solidarit&eacute; r&eacute;compens&eacute; par Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Commerce et n&eacute;goce :</strong> le commerce
                      licite est l&apos;une des activit&eacute;s les plus
                      nobles en islam. Le Proph&egrave;te (&#7779;alla All&#257;hu
                      &#699;alayhi wa sallam) a dit : &laquo;&nbsp;Le
                      commer&ccedil;ant honn&ecirc;te et digne de confiance sera
                      avec les proph&egrave;tes et les v&eacute;ridiques au Jour
                      de la R&eacute;surrection&nbsp;&raquo; (rapport&eacute;
                      par At-Tirmidh&icirc;).
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="P&eacute;ch&eacute;s et sexualit&eacute; en islam : comprendre les limites"
                  description="D&eacute;couvrez les r&egrave;gles islamiques concernant l'intimit&eacute;, les p&eacute;ch&eacute;s li&eacute;s &agrave; la sexualit&eacute; et le cadre &eacute;thique du couple."
                  href="/peches-sexualite-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Application vie quotidienne */}
              {/* ============================================ */}
              <section id="quotidien" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Application dans la vie quotidienne
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La distinction halal/haram ne se limite pas &agrave;
                  l&apos;assiette ou au portefeuille. Elle irrigue tous les
                  aspects de la vie du croyant : l&apos;habillement, les
                  relations sociales, les loisirs, l&apos;usage du
                  num&eacute;rique et m&ecirc;me le rapport &agrave;
                  l&apos;environnement. L&apos;objectif n&apos;est pas de
                  cr&eacute;er un carcan, mais d&apos;offrir un cadre de
                  vie &eacute;quilibr&eacute; o&ugrave; le bien-&ecirc;tre
                  spirituel et mat&eacute;riel coexistent.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        V&ecirc;tements et pudeur (awra)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam prescrit la couverture de la awra (parties
                        du corps &agrave; couvrir) pour l&apos;homme et la
                        femme, avec des diff&eacute;rences selon le contexte
                        (pri&egrave;re, espace public, espace priv&eacute;).
                        Le v&ecirc;tement doit &ecirc;tre propre, d&eacute;cent
                        et ne pas imiter ostensiblement la tenue
                        sp&eacute;cifique d&apos;une autre religion. Le
                        Proph&egrave;te (&#7779;alla All&#257;hu &#699;alayhi
                        wa sallam) encourageait la simplicit&eacute; et la
                        modestie sans exclure l&apos;&eacute;l&eacute;gance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Loisirs et divertissements
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les loisirs sont permis tant qu&apos;ils ne
                        contreviennent pas aux principes de la charia. Le sport,
                        les voyages, la lecture, les activit&eacute;s
                        cr&eacute;atives sont encouragés. En revanche, les
                        divertissements qui m&egrave;nent &agrave; la
                        n&eacute;gligence des obligations religieuses, &agrave;
                        la mixit&eacute; r&eacute;prouv&eacute;e ou &agrave; la
                        promotion du haram sont d&eacute;conseill&eacute;s ou
                        interdits selon le degr&eacute;.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Relations sociales et familiales
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam accorde une importance capitale aux
                        relations familiales et communautaires, &agrave; commencer par <Link href="/mariage-islamique-contrat" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le contrat de mariage islamique</Link>. Le respect des
                        parents, le bon voisinage, l&apos;honn&ecirc;tet&eacute;
                        dans les &eacute;changes et le maintien des liens de
                        parent&eacute; (silat ar-rahim) sont des obligations.
                        &Agrave; l&apos;inverse, la m&eacute;disance (gh&icirc;ba),
                        la calomnie (buht&acirc;n) et la diffamation sont des
                        p&eacute;ch&eacute;s majeurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Responsabilit&eacute; environnementale
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le gaspillage (isr&acirc;f) est consid&eacute;r&eacute;
                        comme makrouh, voire haram lorsqu&apos;il atteint
                        l&apos;exc&egrave;s. Le Proph&egrave;te (&#7779;alla
                        All&#257;hu &#699;alayhi wa sallam) d&eacute;conseillait
                        le gaspillage de l&apos;eau, m&ecirc;me au bord
                        d&apos;un fleuve. La pr&eacute;servation de
                        l&apos;environnement, la plantation d&apos;arbres et le
                        respect de la cr&eacute;ation font partie
                        int&eacute;grante de la responsabilit&eacute; du
                        croyant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        &Eacute;thique num&eacute;rique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;utilisation d&apos;Internet et des
                        r&eacute;seaux sociaux ob&eacute;it aux m&ecirc;mes
                        principes que la vie r&eacute;elle. La diffusion de
                        fausses informations, la consultation de contenus
                        illicites, le harc&egrave;lement en ligne et la
                        violation de la vie priv&eacute;e sont des actes
                        r&eacute;prouv&eacute;s. Le num&eacute;rique peut
                        &ecirc;tre un outil formidable d&apos;apprentissage et
                        de da&apos;wa (appel &agrave; Allah) lorsqu&apos;il est
                        utilis&eacute; avec sagesse.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Cosm&eacute;tiques et soins :</strong> v&eacute;rifier
                      la composition (pas de graisses animales haram, pas
                      d&apos;alcool en quantit&eacute; significative). La
                      tendance halal s&apos;&eacute;tend aux produits de
                      beaut&eacute; et d&apos;hygi&egrave;ne.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Musique et chant :</strong> les savants divergent
                      sur ce sujet. Certains interdisent les instruments de
                      musique, d&apos;autres les autorisent sous conditions (pas
                      de paroles ind&eacute;centes, pas d&apos;exc&egrave;s).
                      Le nasheeed (chant religieux) est
                      g&eacute;n&eacute;ralement accept&eacute;.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tourisme halal :</strong> un secteur en
                      d&eacute;veloppement qui propose des
                      h&eacute;bergements, restaurants et activit&eacute;s
                      conformes aux principes islamiques (pas d&apos;alcool,
                      espaces s&eacute;par&eacute;s pour les piscines,
                      nourriture halal).
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Difference-entre-halal-et-haram-criteres-de-liceite-1.jpg"
                    alt="Application du halal et du haram dans la vie quotidienne du musulman"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Savants et fatwas contemporaines */}
              {/* ============================================ */}
              <section id="savants" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La consultation des savants et les fatwas contemporaines
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Face aux d&eacute;fis du monde moderne -- dont les questionnements li&eacute;s aux <Link href="/signes-fin-monde-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">signes de la fin des temps</Link> --, le musulman ne peut
                  pas toujours d&eacute;terminer seul le statut d&apos;un acte.
                  Les questions li&eacute;es aux nouvelles technologies, &agrave;
                  la bio&eacute;thique, &agrave; la finance
                  num&eacute;rique ou &agrave; l&apos;alimentation industrielle
                  n&eacute;cessitent l&apos;expertise de savants
                  qualifi&eacute;s. La fatwa (avis juridique religieux) est
                  l&apos;outil par lequel les savants r&eacute;pondent aux
                  questions contemporaines en s&apos;appuyant sur les sources
                  fondamentales.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Une fatwa n&apos;est pas un texte sacr&eacute;. Elle
                  repr&eacute;sente l&apos;effort d&apos;interpr&eacute;tation
                  (ijtih&acirc;d) d&apos;un savant &agrave; un moment
                  donn&eacute;, pour une situation donn&eacute;e. Deux savants
                  peuvent &eacute;mettre des avis diff&eacute;rents sur une
                  m&ecirc;me question, et c&apos;est l&agrave; la richesse de
                  la jurisprudence islamique. Le croyant est invit&eacute; &agrave;
                  suivre l&apos;avis du savant en qui il a confiance, tout en
                  respectant la diversit&eacute; des opinions.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le r&ocirc;le des acad&eacute;mies de fiqh
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Des institutions comme l&apos;Acad&eacute;mie
                        internationale de fiqh (li&eacute;e &agrave;
                        l&apos;Organisation de la coop&eacute;ration islamique)
                        et le Conseil europ&eacute;en de la fatwa &eacute;mettent
                        des r&eacute;solutions collectives sur les questions
                        contemporaines. Ces d&eacute;cisions
                        coll&eacute;giales sont g&eacute;n&eacute;ralement plus
                        fiables qu&apos;un avis individuel, car elles
                        r&eacute;sultent d&apos;un d&eacute;bat entre
                        sp&eacute;cialistes de diff&eacute;rentes
                        &eacute;coles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;industrie de la certification halal
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La certification halal s&apos;&eacute;tend bien
                        au-del&agrave; de l&apos;alimentaire. Elle touche
                        d&eacute;sormais la mode (modest fashion), le tourisme,
                        les cosm&eacute;tiques, la pharmacie et m&ecirc;me les
                        services num&eacute;riques. Ce march&eacute; mondial
                        repr&eacute;sente plusieurs milliers de milliards de
                        dollars et n&eacute;cessite des standards
                        internationaux harmonis&eacute;s pour garantir la
                        confiance des consommateurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        &Eacute;viter les extr&ecirc;mes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Proph&egrave;te (&#7779;alla All&#257;hu &#699;alayhi
                        wa sallam) a mis en garde contre l&apos;exc&egrave;s de
                        rigueur : &laquo;&nbsp;Facilitez et ne rendez pas les
                        choses difficiles, annoncez la bonne nouvelle et ne
                        faites pas fuir&nbsp;&raquo; (rapport&eacute; par
                        Al-Bukh&acirc;r&icirc; et Muslim). Tout interdire sans
                        preuve textuelle est aussi r&eacute;prouv&eacute; que
                        tout autoriser sans discernement. La voie du juste
                        milieu (wasatiyya) est celle recommand&eacute;e par le
                        Coran.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Bio&eacute;thique :</strong> les questions de
                      procr&eacute;ation assist&eacute;e, de greffe d&apos;organes
                      et de g&eacute;n&eacute;tique font l&apos;objet de fatwas
                      d&eacute;taill&eacute;es, souvent nuanc&eacute;es selon
                      le contexte.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Intelligence artificielle :</strong> les savants
                      commencent &agrave; se pencher sur les implications
                      &eacute;thiques de l&apos;IA, notamment en mati&egrave;re
                      de vie priv&eacute;e, de responsabilit&eacute; et
                      d&apos;impact social.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rechercher la science :</strong> le croyant a le
                      devoir de <Link href="/apprendre-science-religieuse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">s&apos;instruire en mati&egrave;re de religion</Link>.
                      Conna&icirc;tre les bases du halal et du haram fait
                      partie des obligations de chaque musulman.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consulter avant d&apos;agir :</strong> en cas de
                      doute, la d&eacute;marche islamique est de poser la
                      question &agrave; un savant comp&eacute;tent plut&ocirc;t
                      que de se fier &agrave; son propre jugement ou &agrave;
                      des sources non v&eacute;rifi&eacute;es sur Internet.
                    </span>
                  </li>
                </ul>

                {/* Profils */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le consommateur musulman
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Privil&eacute;gier les produits certifi&eacute;s halal par
                      des organismes reconnus. Lire les &eacute;tiquettes,
                      conna&icirc;tre les additifs probl&eacute;matiques (E120,
                      E441, E542) et ne pas h&eacute;siter &agrave;
                      contacter le fabricant en cas de doute. La
                      pr&eacute;caution est une vertu, pas une obsession.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour l&apos;entrepreneur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Int&eacute;grer les principes du halal dans son
                      activit&eacute; professionnelle : transactions
                      transparentes, respect des engagements, refus de la
                      fraude et du riba. La finance islamique offre des
                      solutions de financement adapt&eacute;es aux
                      entrepreneurs soucieux de conformit&eacute;.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour le nouveau converti
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ne pas chercher &agrave; tout changer du jour au lendemain.
                      L&apos;islam invite &agrave; la progressivit&eacute;.
                      Commencer par les grandes interdictions (porc, alcool,
                      riba), puis affiner progressivement sa pratique.
                      S&apos;entourer de musulmans bienveillants et d&apos;un
                      savant patient qui accompagne sans brusquer. Le
                      Proph&egrave;te (&#7779;alla All&#257;hu &#699;alayhi wa
                      sallam) a dit : &laquo;&nbsp;L&apos;action la plus
                      aim&eacute;e d&apos;Allah est la plus r&eacute;guli&egrave;re,
                      m&ecirc;me si elle est minime&nbsp;&raquo;
                      (rapport&eacute; par Al-Bukh&acirc;r&icirc;).
                    </p>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Le mariage en islam : pr&eacute;sages et significations"
                  description="Comprendre les fondements du mariage islamique, ses conditions, ses b&eacute;n&eacute;dictions et son r&ocirc;le dans la vie du croyant."
                  href="/mariage-islam-presages-significations"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sujets en lien avec le halal et le haram
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/peches-sexualite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    P&eacute;ch&eacute;s et sexualit&eacute; en islam
                  </Link>
                  <Link
                    href="/mariage-islam-presages-significations"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Le mariage en islam
                  </Link>
                  <Link
                    href="/prier-islam-excellence-spirituelle"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prier en islam
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie et protection en islam
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le m&ecirc;me sujet
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
                    href="/fin-monde-islam-preparation"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    La fin du monde en islam
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
