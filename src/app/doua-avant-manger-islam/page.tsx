import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title:
    "Doua avant de manger en islam : invocations authentiques (arabe, phonétique, traduction)",
  description:
    "Découvrez la doua avant de manger en islam : bismillah, invocation quand on oublie de dire bismillah, doua après le repas, adab du repas et hadiths authentiques avec texte arabe, phonétique et traduction.",
  openGraph: {
    title:
      "Doua avant de manger en islam : invocations authentiques (arabe, phonétique, traduction)",
    description:
      "Les invocations authentiques avant et après le repas en islam : bismillah, doua en cas d'oubli, manger avec la main droite et adab du repas selon la Sunna.",
    url: "https://www.islamreligion.fr/doua-avant-manger-islam",
    images: [
      {
        url: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-avant-manger-islam",
  },
};

const tocItems = [
  { id: "bismillah-avant-manger", label: "Dire bismillah avant de manger" },
  { id: "doua-oubli-bismillah", label: "Doua quand on oublie bismillah" },
  { id: "manger-main-droite", label: "Manger avec la main droite" },
  { id: "doua-apres-manger", label: "Doua après avoir mangé" },
  { id: "adab-repas-islam", label: "Les adab du repas en islam" },
  { id: "douas-authentiques-repas", label: "Douas authentiques du repas" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua avant de manger en islam ?",
    answer:
      "La doua avant de manger en islam est « Bismillah » (Au nom d&apos;Allah). C&apos;est la formule essentielle que tout musulman doit prononcer avant de commencer son repas. Le Prophète (paix et salut sur lui) a enseigné que dire bismillah avant de manger empêche Shaytan de partager le repas et attire la bénédiction (baraka) d&apos;Allah sur la nourriture.",
  },
  {
    question: "Que dire si on oublie de dire bismillah avant de manger ?",
    answer:
      "Si l&apos;on oublie de dire bismillah au début du repas, on doit dire : « Bismillahi fi awwalihi wa akhirihi » (بسم الله في أوله وآخره), ce qui signifie « Au nom d&apos;Allah au début et à la fin ». Ce hadith est rapporté par Abu Dawud et at-Tirmidhi. Cette formule rattrape l&apos;oubli et rétablit la baraka sur le repas.",
  },
  {
    question: "Quelle est la doua après avoir mangé en islam ?",
    answer:
      "La doua principale après avoir mangé est : « Al-hamdulillahi alladhi at&apos;amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwa » (Louange à Allah qui m&apos;a nourri de ceci et me l&apos;a accordé sans effort ni force de ma part). Le Prophète (paix et salut sur lui) a dit que celui qui prononce cette invocation après le repas voit ses péchés antérieurs pardonnés (at-Tirmidhi).",
  },
  {
    question: "Pourquoi faut-il manger avec la main droite en islam ?",
    answer:
      "Le Prophète (paix et salut sur lui) a ordonné de manger avec la main droite car Shaytan mange avec sa main gauche. Manger de la main droite fait partie de la Sunna et des bonnes manières (adab) du repas en islam. Ce hadith est rapporté par Muslim. Cela s&apos;applique également au fait de boire.",
  },
  {
    question: "Peut-on dire la doua avant de manger en français ?",
    answer:
      "Il est préférable de dire « Bismillah » en arabe car c&apos;est une formule courte et facile à mémoriser. Cependant, pour les invocations supplémentaires (doua après le repas, remerciement), il est permis de les faire en français ou dans toute autre langue. L&apos;essentiel est la sincérité et la conscience de remercier Allah pour Sa provision.",
  },
  {
    question: "Quels sont les adab (bonnes manières) du repas en islam ?",
    answer:
      "Les principaux adab du repas en islam sont : dire bismillah avant de manger, manger avec la main droite, manger ce qui est devant soi, ne pas critiquer la nourriture, ne pas manger en excès (remplir un tiers de l&apos;estomac), s&apos;asseoir pour manger, dire al-hamdulillah après le repas, se laver les mains avant et après, et partager la nourriture avec les autres.",
  },
  {
    question: "Est-ce que dire bismillah est obligatoire avant de manger ?",
    answer:
      "La majorité des savants considèrent que dire bismillah avant de manger est une obligation (wajib) selon l&apos;avis le plus solide, en raison de l&apos;ordre explicite du Prophète (paix et salut sur lui). D&apos;autres savants le considèrent comme une Sunna fortement recommandée (sunna mu&apos;akkada). Dans tous les cas, le musulman doit veiller à ne jamais négliger cette invocation.",
  },
  {
    question: "Que dit le Prophète sur le fait de ne pas dire bismillah avant de manger ?",
    answer:
      "Le Prophète (paix et salut sur lui) a enseigné que lorsqu&apos;une personne ne mentionne pas le nom d&apos;Allah (ne dit pas bismillah) avant de manger, Shaytan considère que ce repas lui est licite et y participe. Ce hadith rapporté par Muslim souligne l&apos;importance capitale de cette invocation pour protéger son repas et bénéficier de la baraka divine.",
  },
];

export default function DouaAvantMangerIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-avant-manger-islam/#article",
        headline:
          "Doua avant de manger en islam : invocations authentiques (arabe, phonétique, traduction)",
        description:
          "Découvrez la doua avant de manger en islam : bismillah, invocation quand on oublie, doua après le repas, adab du repas et hadiths authentiques.",
        image: "/images/arches-mosquee-moucharabieh-lumiere-doree.jpg",
        datePublished: "2026-04-02",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-avant-manger-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-avant-manger-islam/#breadcrumb",
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
            name: "Doua avant de manger",
            item: "https://www.islamreligion.fr/doua-avant-manger-islam",
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
          title="Doua avant de manger en islam : invocations authentiques du repas"
          subtitle="Les invocations à prononcer avant et après le repas selon le Coran et la Sunna. Textes en arabe, phonétique et traduction française avec les adab du repas."
          imageSrc="/images/arches-mosquee-moucharabieh-lumiere-doree.jpg"
          imageAlt="Arches de mosquée avec moucharabieh et lumière dorée illustrant les invocations du repas en islam"
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
                <span className="text-foreground">Doua avant de manger</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La <strong>doua avant de manger</strong> en islam est une
                  pratique essentielle de la Sunna. Le Prophète (paix et salut
                  sur lui) a enseigné de dire &laquo;&nbsp;Bismillah&nbsp;&raquo;
                  avant chaque repas, de manger avec la main droite et de
                  remercier Allah après avoir mangé. En cas d&apos;oubli, la
                  formule &laquo;&nbsp;Bismillahi fi awwalihi wa
                  akhirihi&nbsp;&raquo; permet de rattraper cette omission.
                  Ces invocations attirent la baraka sur la nourriture et
                  protègent le croyant de Shaytan.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Dire bismillah avant de manger */}
              {/* ============================================ */}
              <section id="bismillah-avant-manger" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Dire bismillah avant de manger : le fondement du repas en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La <strong>doua avant de manger</strong> la plus importante en
                  islam est la mention du nom d&apos;Allah par la formule
                  &laquo;&nbsp;Bismillah&nbsp;&raquo; (بسم الله). Cette
                  invocation, courte mais d&apos;une portée immense, est le
                  premier geste spirituel que le musulman accomplit avant de
                  porter la nourriture à sa bouche. Le Prophète Muhammad (paix
                  et salut sur lui) a clairement ordonné cette pratique et en a
                  expliqué la sagesse profonde.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Prononcer bismillah avant le repas n&apos;est pas un simple
                  rituel mécanique. C&apos;est un acte de reconnaissance
                  envers Allah, le Pourvoyeur (ar-Razzaq), qui accorde la
                  nourriture à Ses serviteurs. C&apos;est aussi un acte de
                  protection : le Prophète (paix et salut sur lui) a enseigné
                  que lorsque le serviteur mentionne le nom d&apos;Allah sur
                  son repas, Shaytan ne peut pas y prendre part. En revanche,
                  lorsque le nom d&apos;Allah n&apos;est pas mentionné,
                  Shaytan considère que ce repas lui est permis.
                </p>

                <HadithCard
                  arabic="إذا أكل أحدكم فليذكر اسم الله تعالى، فإن نسي أن يذكر اسم الله تعالى في أوله فليقل: بسم الله أوله وآخره"
                  text="Lorsque l'un de vous mange, qu'il mentionne le nom d'Allah. S'il oublie de mentionner le nom d'Allah au début, qu'il dise : Au nom d'Allah au début et à la fin."
                  source="Rapporté par Abu Dawud (3767) et at-Tirmidhi (1858) — hadith sahih"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est fondamental car il établit deux règles
                  essentielles. Premièrement, le musulman doit dire bismillah
                  avant chaque repas ou collation, qu&apos;il s&apos;agisse
                  d&apos;un plat élaboré ou d&apos;une simple bouchée.
                  Deuxièmement, l&apos;islam, dans sa miséricorde, prévoit une
                  formule de rattrapage pour celui qui oublie, montrant ainsi
                  que cette religion facilite la pratique et ne cherche pas à
                  mettre les croyants en difficulté.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Bismillah attire la baraka :</strong> la
                      nourriture bénie par la mention d&apos;Allah nourrit le
                      corps et l&apos;âme, même en petite quantité.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre Shaytan :</strong> sans la
                      mention du nom d&apos;Allah, le diable partage le repas
                      du croyant, ce qui diminue la baraka de la nourriture.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un acte simple mais essentiel :</strong> il
                      suffit de dire &laquo;&nbsp;Bismillah&nbsp;&raquo; à
                      voix audible ou en son for intérieur avant de commencer
                      à manger.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-kareem-islam-dattes-chapelet-coran.jpg"
                    alt="Dattes, chapelet et Coran illustrant les invocations du repas et la nourriture bénie en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua quand on oublie bismillah */}
              {/* ============================================ */}
              <section id="doua-oubli-bismillah" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua quand on oublie de dire bismillah avant de manger
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Il arrive fréquemment que le musulman, pris par la faim ou
                  distrait, oublie de prononcer bismillah avant de commencer
                  son repas. L&apos;islam, religion de facilité et de
                  miséricorde, a prévu une invocation spécifique pour rattraper
                  cet oubli. Le Prophète (paix et salut sur lui) a enseigné
                  une formule simple qui couvre le début et la fin du repas.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Bismillahi fi awwalihi wa akhirihi
                  </h3>
                  <p className="mt-4 text-center text-3xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Bismillahi fi awwalihi wa akhirihi
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Au nom d&apos;Allah, au début et à la fin.&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une sagesse remarquable. En
                  prononçant cette formule, le croyant rattrape son oubli et
                  rétablit la mention du nom d&apos;Allah sur l&apos;ensemble
                  de son repas, depuis le début jusqu&apos;à la fin. Les
                  savants expliquent que Shaytan, qui avait commencé à
                  participer au repas en l&apos;absence de la mention
                  d&apos;Allah, est alors contraint de vomir ce qu&apos;il
                  avait consommé. C&apos;est un témoignage de la puissance du
                  nom d&apos;Allah et de Sa miséricorde envers Ses serviteurs.
                </p>

                <HadithCard
                  arabic="إن الشيطان يستحل الطعام أن لا يذكر اسم الله عليه، وإنه جاء بهذه الجارية ليستحل بها، فأخذت بيدها، فجاء بهذا الأعرابي ليستحل به، فأخذت بيده، والذي نفسي بيده إن يده في يدي مع يدها"
                  text="Shaytan considère licite la nourriture sur laquelle le nom d'Allah n'est pas mentionné."
                  source="Rapporté par Muslim (2017)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith illustre concrètement comment Shaytan profite de
                  la négligence des croyants. Le Prophète (paix et salut sur
                  lui) a vu de ses propres yeux comment le diable tentait de
                  s&apos;immiscer dans le repas des musulmans. Cela montre
                  l&apos;importance vitale de ne jamais négliger la mention du
                  nom d&apos;Allah, et en cas d&apos;oubli, de se rattraper
                  immédiatement avec la formule enseignée. La{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                  accompagne le croyant dans chaque aspect de sa vie
                  quotidienne.
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
              {/* SECTION 3 : Manger avec la main droite */}
              {/* ============================================ */}
              <section id="manger-main-droite" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Manger avec la main droite : une Sunna essentielle
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les enseignements prophétiques liés au repas, manger
                  avec la main droite occupe une place fondamentale. Le
                  Prophète (paix et salut sur lui) a non seulement recommandé
                  cette pratique, mais il a également averti celui qui mange de
                  la main gauche sans excuse valable, car c&apos;est la
                  manière dont Shaytan se nourrit.
                </p>

                <HadithCard
                  arabic="لا يأكلن أحدكم بشماله، ولا يشربن بها، فإن الشيطان يأكل بشماله ويشرب بها"
                  text="Que personne d'entre vous ne mange ni ne boive de sa main gauche, car Shaytan mange et boit de sa main gauche."
                  source="Rapporté par Muslim (2020)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Le hadith célèbre adressé au jeune Omar ibn Abi Salama
                  résume parfaitement les trois règles fondamentales du repas
                  en islam. Le Prophète (paix et salut sur lui) lui a
                  dit : &laquo;&nbsp;Ô mon garçon, prononce le nom d&apos;Allah
                  (Bismillah), mange de ta main droite et mange ce qui est
                  devant toi.&nbsp;&raquo; Ce hadith, rapporté par al-Bukhari
                  et Muslim, rassemble en une seule phrase les trois piliers
                  de l&apos;étiquette alimentaire islamique : la mention du
                  nom d&apos;Allah, l&apos;usage de la main droite et le fait
                  de manger de ce qui se trouve à sa portée sans étendre la
                  main vers la part des autres.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants précisent que cette règle concerne la personne
                  qui est en capacité d&apos;utiliser sa main droite. Celui
                  qui est gaucher de naissance ou qui souffre d&apos;un
                  handicap à la main droite est excusé. L&apos;islam ne
                  charge jamais une âme au-delà de sa capacité. Toutefois, la
                  personne valide qui choisit délibérément de manger de la
                  main gauche par simple habitude ou par négligence va à
                  l&apos;encontre de la Sunna prophétique.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire bismillah :</strong> mentionner le nom
                      d&apos;Allah avant de commencer le repas.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Manger de la main droite :</strong> se
                      distinguer de Shaytan qui mange de la main gauche.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Manger ce qui est devant soi :</strong> ne pas
                      étendre la main vers la part des autres convives par
                      politesse et modestie.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua après avoir mangé */}
              {/* ============================================ */}
              <section id="doua-apres-manger" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua après avoir mangé : al-hamdulillah et les invocations de gratitude
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Si dire bismillah ouvre le repas, la{" "}
                  <strong>doua après avoir mangé</strong> le clôt dans la
                  gratitude et la reconnaissance envers Allah. Le Prophète
                  (paix et salut sur lui) a enseigné plusieurs invocations à
                  prononcer après le repas, dont certaines comportent des
                  promesses extraordinaires, comme le pardon des péchés
                  antérieurs. Ces douas transforment un acte quotidien en une
                  source de récompenses immenses.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua complète après le repas
                  </h3>
                  <p className="mt-4 text-center text-3xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Al-hamdulillahi alladhi at&apos;amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwa
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Louange à Allah qui m&apos;a nourri de ceci et
                    me l&apos;a accordé sans effort ni force de ma
                    part.&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La récompense de cette invocation est immense. Le Prophète
                  (paix et salut sur lui) a dit : &laquo;&nbsp;Celui qui mange
                  une nourriture puis dit cette invocation, ses péchés
                  antérieurs lui seront pardonnés.&nbsp;&raquo; (Rapporté par
                  at-Tirmidhi et Abu Dawud). Ce hadith montre la générosité
                  d&apos;Allah qui transforme un simple repas en occasion
                  d&apos;expiation des péchés, à condition que le serviteur
                  reconnaisse que toute provision vient exclusivement de Lui.
                </p>

                <div className="mt-8 rounded-xl border border-secondary/20 bg-white p-6">
                  <h3 className="text-lg font-semibold text-primary">
                    Doua courte après le repas
                  </h3>
                  <p className="mt-4 text-center text-3xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Al-hamdulillahi hamdan kathiran tayyiban mubarakan fihi
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Louange à Allah, une louange abondante, bonne
                    et bénie.&nbsp;&raquo;
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette formule, rapportée par al-Bukhari, était prononcée par
                  le Prophète (paix et salut sur lui) lui-même après ses
                  repas. Sa concision la rend facile à mémoriser et à
                  pratiquer au quotidien. La{" "}
                  <Link href="/doua-remercier-allah-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua pour remercier Allah</Link>{" "}
                  ne se limite pas au repas : elle englobe toutes les
                  bénédictions que le croyant reçoit dans sa vie.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/ramadan-islam-lanternes-orientales-croissant-dattes.jpg"
                    alt="Lanternes orientales et dattes illustrant la gratitude après le repas et les invocations en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Les adab du repas en islam */}
              {/* ============================================ */}
              <section id="adab-repas-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les adab (bonnes manières) du repas en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne se contente pas d&apos;enseigner une doua
                  avant et après le repas : il propose un ensemble complet de
                  bonnes manières (adab) qui transforment l&apos;acte de
                  manger en une véritable adoration. Ces règles, tirées de la
                  Sunna du Prophète (paix et salut sur lui), couvrent chaque
                  aspect du repas, de la préparation à la fin du repas.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se laver les mains avant et après le repas
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) se lavait les mains
                        avant de manger et après avoir terminé. Cette habitude
                        relève à la fois de l&apos;hygiène et de la Sunna.
                        Elle prépare le corps et l&apos;esprit à recevoir la
                        nourriture dans les meilleures conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        S&apos;asseoir pour manger et boire
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a déconseillé de
                        manger debout ou en marchant. S&apos;asseoir
                        confortablement, sans s&apos;allonger ni
                        s&apos;accouder, est la posture recommandée. Le
                        Prophète (paix et salut sur lui) disait :
                        &laquo;&nbsp;Je ne mange pas accoudé, je ne suis
                        qu&apos;un serviteur, je mange comme mange le
                        serviteur.&nbsp;&raquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas critiquer la nourriture
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Abu Hurayra (qu&apos;Allah soit satisfait de lui)
                        rapporte que le Prophète (paix et salut sur lui) n&apos;a
                        jamais critiqué une nourriture : si elle lui plaisait,
                        il la mangeait, sinon il la laissait sans rien dire
                        (al-Bukhari et Muslim). Critiquer la nourriture est un
                        manque de gratitude envers Allah qui l&apos;a pourvue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas manger en excès
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a enseigné la règle
                        des trois tiers : un tiers pour la nourriture, un tiers
                        pour la boisson et un tiers pour l&apos;air. Ce hadith,
                        rapporté par at-Tirmidhi et Ibn Majah, est considéré
                        par les médecins modernes comme un principe de santé
                        remarquable. L&apos;excès alimentaire est blâmé en islam.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Lécher les doigts et nettoyer le plat
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) recommandait de
                        lécher les doigts après avoir mangé et de ne pas
                        gaspiller la nourriture. Il disait que le croyant ne
                        sait pas dans quelle partie de la nourriture se trouve
                        la baraka (Muslim). Ce comportement reflète la
                        gratitude et le respect envers les bienfaits d&apos;Allah.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;ensemble de ces adab montre que l&apos;islam ne
                  sépare jamais le quotidien de la spiritualité. Chaque repas
                  est une occasion de se rapprocher d&apos;Allah, de suivre la
                  Sunna et d&apos;accumuler des récompenses. Le musulman qui
                  applique ces règles transforme un acte ordinaire en une
                  adoration complète, depuis le bismillah initial jusqu&apos;au
                  al-hamdulillah final.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas authentiques du repas */}
              {/* ============================================ */}
              <section id="douas-authentiques-repas" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Récapitulatif des douas authentiques du repas en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Voici l&apos;ensemble des invocations authentiques liées au
                  repas, avec leur texte en arabe, leur phonétique et leur
                  traduction en français. Mémorisez-les et pratiquez-les à
                  chaque repas pour suivre la Sunna du Prophète (paix et salut
                  sur lui) et bénéficier de la baraka d&apos;Allah sur votre
                  nourriture.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Bismillah — Avant de manger
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-center text-3xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Bismillah
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Au nom d&apos;Allah.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Se dit avant de commencer à manger — Rapporté par al-Bukhari et Muslim
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Bismillahi fi awwalihi wa akhirihi — En cas d&apos;oubli
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-center text-3xl leading-loose text-primary" dir="rtl">
                    بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Bismillahi fi awwalihi wa akhirihi
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Au nom d&apos;Allah, au début et à la fin.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Se dit quand on oublie bismillah au début — Rapporté par Abu Dawud (3767) et at-Tirmidhi (1858)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Al-hamdulillahi alladhi at&apos;amani — Après le repas
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-center text-3xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Al-hamdulillahi alladhi at&apos;amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwa
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Louange à Allah qui m&apos;a nourri de ceci et
                    me l&apos;a accordé sans effort ni force de ma part.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Se dit après le repas — Rapporté par at-Tirmidhi (3458) et Abu Dawud (4023)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua de l&apos;invité pour son hôte
                </h3>
                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-center text-3xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ، وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ
                  </p>
                  <p className="mt-3 text-center text-base italic text-foreground-secondary">
                    Allahumma barik lahum fima razaqtahum, waghfir lahum warhamhum
                  </p>
                  <p className="mt-2 text-center text-base text-foreground">
                    &laquo;&nbsp;Ô Allah, bénis-les dans ce que Tu leur as
                    accordé, pardonne-leur et accorde-leur Ta
                    miséricorde.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-center text-sm text-foreground-secondary">
                    Se dit quand on mange chez quelqu&apos;un — Rapporté par Muslim (2042)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations couvrent l&apos;ensemble des situations
                  liées au repas. Le musulman qui les mémorise et les pratique
                  quotidiennement suit l&apos;exemple du Prophète (paix et
                  salut sur lui) et attire la bénédiction d&apos;Allah sur sa
                  nourriture, sa santé et sa famille. Pour approfondir les
                  invocations liées au jeûne et à la rupture du jeûne,
                  consultez notre article sur la{" "}
                  <Link href="/doua-rupture-jeune-iftar-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua de rupture du jeûne (iftar)</Link>.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour remercier Allah en islam"
                  description="Découvrez les invocations authentiques pour exprimer votre gratitude envers Allah dans toutes les circonstances de la vie."
                  href="/doua-remercier-allah-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
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
                    href="/doua-rupture-jeune-iftar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de rupture du jeûne
                  </Link>
                  <Link
                    href="/doua-remercier-allah-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour remercier Allah
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
