import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";
import { SocialBanner } from "@/components/SocialLinks";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua du nouveau vêtement en islam : invocations authentiques (arabe, phonétique, traduction)",
  description:
    "Découvrez la doua du nouveau vêtement en islam : Allahumma lakal hamd, tubli wa yukhlif, ilbas jadidan. Textes en arabe avec phonétique et traduction, hadiths authentiques et adab vestimentaire.",
  openGraph: {
    title:
      "Doua du nouveau vêtement en islam : invocations authentiques (arabe, phonétique, traduction)",
    description:
      "Les invocations authentiques à réciter en portant un nouveau vêtement : textes en arabe, phonétique, traduction française et hadiths sur le bon comportement vestimentaire en islam.",
    url: "https://www.islamreligion.fr/doua-nouveau-vetement-islam",
    images: [
      {
        url: "/images/doua-mains-levees-illustration-lumiere.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-nouveau-vetement-islam",
  },
};

const tocItems = [
  { id: "sunna-nouveau-vetement", label: "La sunna du nouveau vêtement" },
  { id: "doua-porter-vetement", label: "Doua en portant un nouveau vêtement" },
  { id: "doua-pour-autrui", label: "Doua pour celui qui porte un nouveau vêtement" },
  { id: "douas-authentiques", label: "Les douas authentiques (arabe et phonétique)" },
  { id: "adab-vestimentaire", label: "Adab du vêtement en islam" },
  { id: "gratitude-bienfaits", label: "La gratitude pour les bienfaits d'Allah" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua du nouveau vêtement en islam ?",
    answer:
      "La doua du nouveau vêtement la plus connue est : « Allahumma lakal hamdu Anta kasawtanihi, as&apos;aluka khayrahu wa khayra ma suni&apos;a lahu, wa a&apos;udhu bika min sharrihi wa sharri ma suni&apos;a lahu » (Seigneur, à Toi la louange, c&apos;est Toi qui m&apos;en as vêtu. Je Te demande son bien et le bien pour lequel il a été confectionné, et je cherche refuge auprès de Toi contre son mal et le mal pour lequel il a été confectionné). Ce hadith est rapporté par Abu Dawud et at-Tirmidhi.",
  },
  {
    question: "Que dire à quelqu'un qui porte un nouveau vêtement en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) enseignait de dire à celui qui porte un nouveau vêtement : « Tubli wa yukhliful-lahu ta&apos;ala » (Porte-le jusqu&apos;à ce qu&apos;il s&apos;use et qu&apos;Allah t&apos;en accorde un autre). Une autre formule rapportée est : « Ilbas jadidan wa &apos;ish hamidan wa mut shahidan » (Porte du neuf, vis dans la louange et meurs en martyr). Ces formules expriment des voeux de bénédiction pour le porteur.",
  },
  {
    question: "Est-il obligatoire de dire une doua en portant un nouveau vêtement ?",
    answer:
      "La doua du nouveau vêtement n&apos;est pas obligatoire (wajib) mais fortement recommandée (mustahabb). C&apos;est une sunna du Prophète (paix et salut sur lui) qui permet de remercier Allah pour Ses bienfaits et d&apos;attirer la baraka sur le vêtement. Négliger cette sunna ne constitue pas un péché, mais la pratiquer est une source de récompense et de bénédiction.",
  },
  {
    question: "Peut-on dire la doua du nouveau vêtement en français ?",
    answer:
      "Oui, il est permis de faire des invocations dans toute langue. Cependant, il est recommandé d&apos;apprendre les formules prophétiques en arabe, car elles ont été transmises par le Prophète (paix et salut sur lui) dans cette langue et possèdent une puissance spirituelle particulière. L&apos;idéal est de réciter en arabe tout en comprenant le sens.",
  },
  {
    question: "Quelles sont les règles vestimentaires en islam pour les hommes ?",
    answer:
      "En islam, l&apos;homme doit porter des vêtements qui couvrent la awra (du nombril aux genoux au minimum), éviter la soie pure et l&apos;or, ne pas laisser traîner ses vêtements en dessous des chevilles par orgueil (isbal), et ne pas porter de vêtements qui imitent spécifiquement les femmes. La modestie, la propreté et la décence sont les principes fondamentaux du code vestimentaire masculin en islam.",
  },
  {
    question: "La doua du nouveau vêtement s'applique-t-elle aussi aux chaussures ?",
    answer:
      "Oui, les savants considèrent que la doua du nouveau vêtement s&apos;applique à tout ce que l&apos;on porte de neuf : vêtements, chaussures, coiffures, montres et accessoires. Le terme arabe « thawb » utilisé dans les hadiths englobe, selon les commentateurs, tout ce dont on se pare ou que l&apos;on porte sur soi. L&apos;essentiel est de remercier Allah pour chaque bienfait.",
  },
  {
    question: "Quelle est la sunna pour mettre et enlever ses vêtements ?",
    answer:
      "La sunna consiste à commencer par le côté droit en s&apos;habillant et par le côté gauche en se déshabillant. Le Prophète (paix et salut sur lui) aimait commencer par la droite en toutes choses nobles : se chausser, se peigner, se purifier et s&apos;habiller (al-Bukhari et Muslim). Il est aussi recommandé de dire « Bismillah » avant de se vêtir.",
  },
  {
    question: "Existe-t-il une couleur de vêtement préférée en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) portait des vêtements de différentes couleurs, mais il affectionnait particulièrement le blanc. Il a dit : « Portez des vêtements blancs, car ils sont parmi vos meilleurs vêtements, et ensevelissez-y vos morts » (Abu Dawud, at-Tirmidhi). Il portait également du vert, du rouge et du noir selon les occasions. Aucune couleur n&apos;est interdite en soi, sauf les vêtements teints au safran pour les hommes.",
  },
];

export default function DouaNouveauVetementIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-nouveau-vetement-islam/#article",
        headline:
          "Doua du nouveau vêtement en islam : invocations authentiques (arabe, phonétique, traduction)",
        description:
          "Découvrez la doua du nouveau vêtement en islam : Allahumma lakal hamd, tubli wa yukhlif, ilbas jadidan. Textes en arabe, phonétique et traduction, hadiths authentiques et adab vestimentaire.",
        image: "/images/doua-mains-levees-illustration-lumiere.jpg",
        datePublished: "2026-03-29",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-nouveau-vetement-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-nouveau-vetement-islam/#breadcrumb",
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
            name: "Doua en islam",
            item: "https://www.islamreligion.fr/doua-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Doua du nouveau vêtement",
            item: "https://www.islamreligion.fr/doua-nouveau-vetement-islam",
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
          title="Doua du nouveau vêtement en islam : invocations authentiques"
          subtitle="Les invocations prophétiques à réciter lorsque l'on porte un nouveau vêtement ou que l'on en offre un. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-levees-illustration-lumiere.jpg"
          imageAlt="Mains levées en invocation doua du nouveau vêtement avec lumière divine symbolisant la gratitude en islam"
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
                <Link href="/doua-islam" className="hover:text-primary">
                  Doua en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Doua du nouveau vêtement</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Lorsqu&apos;un musulman porte un nouveau vêtement, la sunna
                  l&apos;invite à remercier Allah par une doua spécifique :
                  &laquo;&nbsp;Allahumma lakal hamdu, Anta kasawtanihi&nbsp;&raquo;
                  (Seigneur, à Toi la louange, c&apos;est Toi qui m&apos;en as
                  vêtu). De même, celui qui voit son frère porter un habit neuf
                  lui dit : &laquo;&nbsp;Tubli wa yukhliful-lahu
                  ta&apos;ala&nbsp;&raquo; (Porte-le jusqu&apos;à ce qu&apos;il
                  s&apos;use et qu&apos;Allah t&apos;en accorde un autre). Ces
                  invocations transforment un geste quotidien en acte
                  d&apos;adoration et attirent la baraka sur le vêtement.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La sunna du nouveau vêtement */}
              {/* ============================================ */}
              <section id="sunna-nouveau-vetement" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La sunna du nouveau vêtement en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) ne laissait aucun
                  aspect de la vie quotidienne sans enseignement. Parmi les
                  sunnas souvent méconnues, celle de la <strong>doua du
                  nouveau vêtement</strong> occupe une place particulière.
                  Chaque fois qu&apos;il portait un habit neuf, il remerciait
                  Allah et invoquait Sa bénédiction. Ce geste simple mais
                  profond rappelle au croyant que chaque bienfait — même un
                  vêtement — provient d&apos;Allah et mérite d&apos;être
                  reconnu.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;islam considère le vêtement comme un don divin. Allah
                  dit dans le Coran : &laquo;&nbsp;Ô enfants d&apos;Adam ! Nous
                  avons fait descendre sur vous un vêtement pour cacher vos
                  nudités, ainsi que des parures. Mais le vêtement de la piété
                  (taqwa), voilà qui est meilleur&nbsp;&raquo; (sourate
                  Al-A&apos;raf, 7:26). Ce verset établit un lien direct entre
                  le vêtement matériel et la dimension spirituelle : se vêtir
                  n&apos;est pas seulement un acte physique, c&apos;est aussi
                  une occasion de se rapprocher d&apos;Allah en Le remerciant
                  pour Ses bienfaits.
                </p>

                <HadithCard
                  arabic="كان النبي صلى الله عليه وسلم إذا لبس ثوبًا جديدًا سمّاه باسمه: عمامةً أو قميصًا أو رداءً ثم يقول: اللَّهمَّ لكَ الحمدُ أنتَ كسوتَنيه"
                  text="Lorsque le Prophète (paix et salut sur lui) portait un nouveau vêtement, il le nommait — turban, chemise ou manteau — puis disait : Seigneur, à Toi la louange, c'est Toi qui m'en as vêtu."
                  source="Rapporté par Abu Dawud (4020) et at-Tirmidhi (1767)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith révèle un enseignement subtil : le Prophète (paix et
                  salut sur lui) commençait par nommer le type de vêtement avant
                  de prononcer la doua. Les savants expliquent que cela traduit
                  une conscience pleine du bienfait reçu. Il ne s&apos;agit pas
                  d&apos;un automatisme mécanique, mais d&apos;une véritable
                  prise de conscience de la faveur d&apos;Allah. En nommant le
                  vêtement, le croyant reconnaît précisément ce dont il a été
                  gratifié, ce qui renforce la sincérité de sa gratitude.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Le vêtement est une ni&apos;ma (bienfait) :</strong>{" "}
                      Allah mentionne le vêtement parmi Ses bienfaits dans
                      plusieurs versets du Coran, rappelant que des millions de
                      personnes dans le monde n&apos;ont pas accès à des habits
                      décents.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La gratitude attire davantage de bienfaits :</strong>{" "}
                      Allah promet : &laquo;&nbsp;Si vous êtes reconnaissants,
                      très certainement Je vous donnerai
                      davantage&nbsp;&raquo; (Ibrahim, 14:7).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La sunna couvre tous les types de vêtements :</strong>{" "}
                      que ce soit un habit, des chaussures, un couvre-chef ou
                      tout autre accessoire vestimentaire, la doua s&apos;applique
                      à chaque nouvelle acquisition.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/mains-priere-doua-islam-invocation.jpg"
                    alt="Mains ouvertes en prière illustrant la doua du nouveau vêtement et la gratitude envers Allah en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua en portant un nouveau vêtement */}
              {/* ============================================ */}
              <section id="doua-porter-vetement" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua à réciter en portant un nouveau vêtement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné une doua
                  complète que le musulman récite lorsqu&apos;il revêt un habit
                  neuf. Cette invocation combine la louange d&apos;Allah, la
                  demande de bien et la protection contre le mal. Elle constitue
                  la <strong>doua du nouveau vêtement</strong> la plus
                  authentique et la plus complète dans la Sunna.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ خَيْرَهُ وَخَيْرَ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma lakal hamdu Anta kasawtanihi, as&apos;aluka khayrahu wa khayra ma suni&apos;a lahu, wa a&apos;udhu bika min sharrihi wa sharri ma suni&apos;a lahu
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, à Toi la louange, c&apos;est Toi qui m&apos;en as vêtu. Je Te demande son bien et le bien pour lequel il a été confectionné, et je cherche refuge auprès de Toi contre son mal et le mal pour lequel il a été confectionné&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (4020) et at-Tirmidhi (1767), authentifié par al-Albani
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Cette doua se décompose en trois parties essentielles. La
                  première est la louange : &laquo;&nbsp;Allahumma lakal
                  hamdu&nbsp;&raquo; — le croyant commence par louer Allah,
                  reconnaissant que tout bienfait vient de Lui. La deuxième est
                  l&apos;attribution : &laquo;&nbsp;Anta
                  kasawtanihi&nbsp;&raquo; — c&apos;est Toi qui m&apos;en as
                  vêtu, affirmant que même si le vêtement a été acheté ou offert
                  par un humain, c&apos;est Allah qui en est la cause première.
                  La troisième partie est la demande de protection : le croyant
                  sollicite le bien du vêtement et se réfugie contre son mal
                  potentiel.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les commentateurs du hadith expliquent que &laquo;&nbsp;le mal
                  du vêtement&nbsp;&raquo; peut désigner l&apos;orgueil
                  qu&apos;il pourrait susciter, le mauvais oeil qu&apos;il
                  pourrait attirer, ou encore l&apos;inconfort physique
                  qu&apos;il pourrait causer. En demandant protection contre ces
                  maux, le musulman adopte une attitude de vigilance spirituelle
                  qui transforme un simple acte de consommation en moment de
                  connexion avec son Créateur.
                </p>

                <HadithCard
                  arabic="من لبس ثوبًا جديدًا فقال: الحمد لله الذي كساني هذا ورزقنيه من غير حول مني ولا قوة، غفر الله له ما تقدم من ذنبه"
                  text="Celui qui porte un nouveau vêtement et dit : Louange à Allah qui m'a vêtu de cela et me l'a accordé sans effort ni puissance de ma part, Allah lui pardonne ses péchés antérieurs."
                  source="Rapporté par Abu Dawud (4023), at-Tirmidhi (3458), jugé hassan"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith offre une motivation supplémentaire considérable :
                  le simple fait de prononcer cette formule de gratitude en
                  portant un vêtement neuf entraîne le pardon des péchés
                  passés. Cette récompense immense pour un geste si simple
                  illustre la miséricorde d&apos;Allah et la facilité de
                  l&apos;islam. Chaque nouveau vêtement devient ainsi une
                  opportunité de purification spirituelle, à condition de
                  prononcer ces paroles avec sincérité et conscience.
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua pour celui qui porte un nouveau vêtement */}
              {/* ============================================ */}
              <section id="doua-pour-autrui" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour celui qui porte un nouveau vêtement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;enseigner une doua pour
                  soi-même : il prescrit également des invocations que le
                  musulman adresse à son frère ou à sa soeur lorsqu&apos;il le
                  voit porter un <strong>nouveau vêtement</strong>. Ces formules
                  de bénédiction renforcent les liens fraternels et diffusent la
                  baraka au sein de la communauté. C&apos;est un adab magnifique
                  qui illustre l&apos;attention que l&apos;islam porte aux
                  relations sociales.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Tubli wa yukhliful-lahu ta&apos;ala
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  La première formule est celle rapportée par Abu Dawud. Elle
                  exprime un double souhait : que le vêtement dure longtemps et
                  qu&apos;Allah en accorde un autre lorsque celui-ci sera usé.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Tubli wa yukhliful-lahu ta&apos;ala
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Porte-le jusqu&apos;à ce qu&apos;il s&apos;use et qu&apos;Allah (le Très-Haut) t&apos;en accorde un autre&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (4020)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Ilbas jadidan wa &apos;ish hamidan wa mut shahidan
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette seconde formule est encore plus forte dans sa
                  signification. Elle contient trois invocations en une seule
                  phrase : porter du neuf, vivre dans la louange d&apos;Allah et
                  mourir en martyr. Cette doua englobe le bien-être matériel, la
                  rectitude spirituelle et la meilleure des fins possibles.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْبَسْ جَدِيدًا وَعِشْ حَمِيدًا وَمُتْ شَهِيدًا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ilbas jadidan wa &apos;ish hamidan wa mut shahidan
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Porte du neuf, vis dans la louange et meurs en martyr&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ibn Majah (3558) et Ahmad
                  </p>
                </div>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que &laquo;&nbsp;mourir en
                  martyr&nbsp;&raquo; (shahid) dans ce contexte ne se limite pas
                  nécessairement au martyre sur le champ de bataille.
                  Le Prophète (paix et salut sur lui) a enseigné que plusieurs
                  catégories de personnes obtiennent le rang de shahid : celui
                  qui meurt d&apos;une maladie du ventre, celui qui se noie,
                  celui qui meurt sous un effondrement, la femme qui meurt en
                  couches et bien d&apos;autres. Cette doua implore donc pour le
                  porteur du vêtement la meilleure fin possible auprès
                  d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est remarquable de noter que l&apos;islam transforme
                  l&apos;occasion banale d&apos;un compliment vestimentaire en
                  un moment d&apos;invocation profonde. Au lieu de se contenter
                  d&apos;un simple &laquo;&nbsp;c&apos;est joli&nbsp;&raquo;, le
                  musulman adresse à son frère une prière qui englobe sa vie
                  entière et sa mort. C&apos;est cette dimension spirituelle qui
                  distingue la politesse islamique de la simple courtoisie
                  mondaine.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Les douas authentiques */}
              {/* ============================================ */}
              <section id="douas-authentiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les douas authentiques du vêtement : arabe, phonétique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici un récapitulatif complet des invocations liées au
                  vêtement que le Prophète (paix et salut sur lui) a enseignées
                  à sa communauté. Chaque doua est présentée avec son texte
                  arabe, sa phonétique et sa traduction pour faciliter
                  l&apos;apprentissage et la mémorisation.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua en enfilant un vêtement (neuf ou non)
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette doua se récite chaque fois que l&apos;on s&apos;habille,
                  pas uniquement pour un vêtement neuf. Elle exprime la
                  reconnaissance envers Allah pour le bienfait du vêtement.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا الثَّوْبَ وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Al-hamdu lillahi-lladhi kasani hadha ath-thawba wa razaqanihi min ghayri hawlin minni wa la quwwa
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Louange à Allah qui m&apos;a vêtu de ce vêtement et me l&apos;a accordé sans effort ni puissance de ma part&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (4023), at-Tirmidhi (3458)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua en enlevant un vêtement
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) enseignait aussi de dire
                  &laquo;&nbsp;Bismillah&nbsp;&raquo; en se déshabillant, car
                  cela constitue un voile protecteur contre les djinns et les
                  regards des êtres invisibles.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Bismillah
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Au nom d&apos;Allah&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (606)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua du miroir en lien avec le vêtement
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Après avoir enfilé son vêtement, le musulman se regarde
                  souvent dans le miroir. La sunna prévoit une{" "}
                  <Link href="/doua-miroir-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du miroir</Link>{" "}
                  spécifique pour ce moment, complétant ainsi l&apos;ensemble
                  des invocations liées à la toilette et à la parure.
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma kama hassanta khalqi fa hassin khuluqi
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, de même que Tu as embelli ma création, embellis mon caractère&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ahmad (3823), authentifié par al-Albani
                  </p>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation avec rayons dorés symbolisant les douas du vêtement en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Adab du vêtement en islam */}
              {/* ============================================ */}
              <section id="adab-vestimentaire" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Adab et règles du vêtement en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam encadre la manière de se vêtir par un ensemble
                  d&apos;adab (règles de bienséance) et de prescriptions
                  juridiques. Ces règles visent à préserver la pudeur, à
                  cultiver l&apos;humilité et à embellir le musulman sans tomber
                  dans l&apos;excès ni l&apos;orgueil. Connaître ces adab est
                  essentiel pour que le vêtement soit source de récompense
                  plutôt que de péché.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Commencer par la droite en s&apos;habillant
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) aimait commencer par
                        la droite en toutes choses nobles : se chausser, se
                        peigner, se purifier et s&apos;habiller. En se
                        déshabillant, on commence par le côté gauche. Cette
                        sunna s&apos;applique aussi aux chaussures : on enfile
                        d&apos;abord la droite et on retire d&apos;abord la
                        gauche.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Éviter l&apos;orgueil et l&apos;ostentation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;islam interdit de porter des vêtements par
                        orgueil ou pour se vanter devant les autres. Le Prophète
                        (paix et salut sur lui) a mis en garde contre le fait de
                        laisser traîner son vêtement par fierté (isbal), car
                        &laquo;&nbsp;Allah ne regardera pas, au Jour de la
                        Résurrection, celui qui traîne son vêtement par
                        orgueil&nbsp;&raquo; (al-Bukhari et Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        La propreté et le soin de l&apos;apparence
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah est beau et aime la beauté, comme l&apos;a
                        enseigné le Prophète (paix et salut sur lui). Le
                        musulman est encouragé à porter des vêtements propres,
                        soignés et agréables, en particulier pour la prière du
                        vendredi et les rassemblements. La propreté
                        vestimentaire fait partie intégrante de la foi.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le blanc : la couleur recommandée
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Portez des vêtements blancs, car ils sont
                        parmi vos meilleurs vêtements, et ensevelissez-y vos
                        morts&nbsp;&raquo; (Abu Dawud, at-Tirmidhi). Le blanc
                        symbolise la pureté et la simplicité, mais toutes les
                        couleurs sont permises à l&apos;exception de certaines
                        restrictions pour les hommes (safran pur, par exemple).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        L&apos;interdiction de la soie et de l&apos;or pour les
                        hommes
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a interdit aux
                        hommes de porter de la soie pure et de l&apos;or, tout
                        en les autorisant pour les femmes. Cette règle vise à
                        préserver la distinction naturelle entre les sexes et à
                        protéger l&apos;homme contre l&apos;excès de luxe et la
                        mollesse.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="إن الله جميل يحب الجمال"
                  text="Allah est beau et Il aime la beauté."
                  source="Rapporté par Muslim (91)"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : La gratitude pour les bienfaits */}
              {/* ============================================ */}
              <section id="gratitude-bienfaits" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La gratitude pour les bienfaits d&apos;Allah : au-delà du vêtement
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>doua du nouveau vêtement</strong> s&apos;inscrit
                  dans un cadre plus large : celui de la gratitude (shukr)
                  envers Allah pour chacun de Ses bienfaits. L&apos;islam
                  enseigne au croyant à reconnaître la main d&apos;Allah dans
                  chaque aspect de sa vie quotidienne — la nourriture, le
                  logement, la santé et, bien sûr, le vêtement. Cette
                  conscience permanente est le fondement de la relation entre le
                  serviteur et son Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné de nombreuses
                  invocations liées aux actes quotidiens : la{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en sortant de la maison</Link>,
                  la doua en entrant dans la maison, la doua avant et après le
                  repas, la doua en montant en voiture, et bien d&apos;autres.
                  Chacune de ces invocations transforme un geste ordinaire en
                  acte d&apos;adoration, et le vêtement ne fait pas exception.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le shukr par la parole
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Dire &laquo;&nbsp;Al-hamdulillah&nbsp;&raquo; en portant
                      un vêtement, en mangeant un repas ou en recevant un
                      bienfait quelconque. La gratitude verbale est la forme la
                      plus accessible du shukr et elle est récompensée par
                      Allah.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le shukr par le coeur
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Reconnaître intérieurement que tout bienfait provient
                      d&apos;Allah, sans aucun mérite personnel. Le coeur
                      reconnaissant est un coeur en paix, car il sait que son
                      Seigneur pourvoit à ses besoins avec sagesse et
                      générosité.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Le shukr par les actes
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Utiliser les bienfaits d&apos;Allah dans Son obéissance.
                      Porter des vêtements conformes à l&apos;éthique islamique,
                      donner ses anciens habits en aumône et veiller à ne pas
                      gaspiller sont autant de manifestations concrètes de la
                      gratitude.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;aumône des vêtements usagés
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Lorsqu&apos;un musulman acquiert un nouveau vêtement, il
                      est recommandé de donner l&apos;ancien en sadaqa (aumône).
                      Ce geste complète le cycle de la gratitude : recevoir
                      d&apos;Allah et redistribuer à Ses serviteurs dans le
                      besoin.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  En définitive, la doua du nouveau vêtement est bien plus
                  qu&apos;une simple formule à réciter machinalement. Elle est
                  l&apos;expression d&apos;une vision du monde où chaque
                  bienfait est reconnu, chaque grâce est remerciée et chaque
                  instant est une occasion de se rapprocher d&apos;Allah. Le
                  musulman qui intègre ces invocations dans sa vie quotidienne
                  vit dans un état permanent de conscience divine (muraqaba) qui
                  élève son âme et purifie son coeur. Pour découvrir
                  l&apos;ensemble des invocations quotidiennes, consultez notre{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">guide complet des douas en islam</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua en sortant de la maison"
                  description="Découvrez les invocations prophétiques à réciter en quittant votre domicile pour attirer la protection d'Allah."
                  href="/doua-sortir-maison-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <SocialBanner />

              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maîtrisez la langue du Coran pour réciter les douas avec compréhension et profondeur spirituelle. Découvrez nos formations en ligne adaptées à tous les niveaux."
                preselect="arabe"
              />

              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles sur les invocations en islam
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/doua-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en islam (guide complet)
                  </Link>
                  <Link
                    href="/doua-miroir-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du miroir
                  </Link>
                  <Link
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en sortant de la maison
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
