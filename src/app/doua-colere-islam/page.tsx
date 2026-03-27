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
    "Doua contre la colère en islam : invocations et conseils prophétiques",
  description:
    "Découvrez la doua contre la colère en islam : invocations authentiques en arabe avec phonétique et traduction, hadiths sur la maîtrise de soi, refuge contre Shaytan et conseils prophétiques pour apaiser la colère.",
  openGraph: {
    title:
      "Doua contre la colère en islam : invocations et conseils prophétiques",
    description:
      "Les invocations authentiques pour apaiser la colère en islam : textes en arabe, phonétique, traduction et hadiths sur la maîtrise de soi.",
    url: "https://www.islamreligion.fr/doua-colere-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-colere-islam",
  },
};

const tocItems = [
  { id: "colere-perspective-islamique", label: "La colère en perspective islamique" },
  { id: "doua-refuge-shaytan", label: "La doua : A'udhu billahi min ash-shaytan" },
  { id: "conseils-prophetiques", label: "Conseils prophétiques contre la colère" },
  { id: "douas-patience-maitrise", label: "Douas pour la patience et la maîtrise de soi" },
  { id: "hadith-force-maitrise", label: "Le vrai fort : celui qui se maîtrise" },
  { id: "ablutions-remede", label: "Les ablutions comme remède à la colère" },
  { id: "bienfaits-maitrise-colere", label: "Les bienfaits de la maîtrise de la colère" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua à dire quand on est en colère en islam ?",
    answer:
      "La doua principale à réciter en cas de colère est « A&apos;udhu billahi min ash-shaytanir-rajim » (أعوذ بالله من الشيطان الرجيم), qui signifie « Je cherche refuge auprès d&apos;Allah contre Satan le maudit ». Le Prophète (paix et salut sur lui) a enseigné cette invocation car la colère est une incitation de Shaytan, et chercher refuge auprès d&apos;Allah permet de l&apos;apaiser.",
  },
  {
    question: "Quels sont les conseils du Prophète pour calmer la colère ?",
    answer:
      "Le Prophète (paix et salut sur lui) a donné plusieurs conseils pratiques : dire « A&apos;udhu billahi min ash-shaytan », s&apos;asseoir si on est debout, se coucher si on est assis, faire les ablutions (wudu), garder le silence et quitter l&apos;endroit qui provoque la colère. Ces gestes permettent de retrouver le calme et d&apos;éviter de commettre des actes regrettables.",
  },
  {
    question: "Pourquoi la colère est-elle liée à Shaytan en islam ?",
    answer:
      "En islam, la colère excessive est considérée comme une arme de Shaytan pour pousser l&apos;être humain à commettre des péchés : paroles blessantes, violence, injustice. Le Prophète (paix et salut sur lui) a expliqué que Shaytan est créé de feu, et que la colère est comme un feu qui brûle dans le coeur. C&apos;est pourquoi le refuge auprès d&apos;Allah et les ablutions (eau) sont les remèdes prescrits.",
  },
  {
    question: "Les ablutions calment-elles vraiment la colère ?",
    answer:
      "Oui, le Prophète (paix et salut sur lui) a recommandé de faire les ablutions (wudu) en cas de colère. Il a dit : « La colère vient de Shaytan, Shaytan est créé de feu, et le feu s&apos;éteint avec l&apos;eau. Si l&apos;un de vous se met en colère, qu&apos;il fasse ses ablutions » (rapporté par Abu Dawud). Au-delà de la dimension spirituelle, l&apos;eau fraîche sur le visage et les membres aide physiquement à retrouver le calme.",
  },
  {
    question: "Qui est le vrai 'fort' selon le Prophète ﷺ ?",
    answer:
      "Le Prophète (paix et salut sur lui) a dit : « Le fort n&apos;est pas celui qui terrasse les gens dans la lutte, mais le fort est celui qui se maîtrise lors de la colère » (rapporté par al-Bukhari et Muslim). Ce hadith renverse la conception habituelle de la force : la vraie puissance réside dans la capacité à contrôler ses émotions et à ne pas se laisser dominer par la colère.",
  },
  {
    question: "Peut-on réciter la doua contre la colère en français ?",
    answer:
      "La formule « A&apos;udhu billahi min ash-shaytanir-rajim » se récite idéalement en arabe, car c&apos;est la formulation enseignée par le Prophète (paix et salut sur lui). Cependant, les savants autorisent de faire des invocations personnelles dans sa propre langue. L&apos;important est la sincérité du coeur et la volonté de se rapprocher d&apos;Allah pour apaiser sa colère.",
  },
  {
    question: "La colère est-elle toujours interdite en islam ?",
    answer:
      "Non, l&apos;islam distingue la colère blâmable (pour des raisons personnelles et égoïstes) de la colère louable (pour la défense de la religion, de la justice ou des opprimés). Le Prophète (paix et salut sur lui) ne se mettait jamais en colère pour des raisons personnelles, mais il pouvait se mettre en colère lorsqu&apos;une limite d&apos;Allah était transgressée. La colère louable reste maîtrisée et ne pousse pas à l&apos;injustice.",
  },
  {
    question: "Comment aider quelqu'un en colère selon la Sunna ?",
    answer:
      "Selon la Sunna, si vous voyez quelqu&apos;un en colère, vous pouvez lui rappeler de chercher refuge auprès d&apos;Allah en disant « A&apos;udhu billahi min ash-shaytan ». Vous pouvez aussi l&apos;inviter calmement à s&apos;asseoir ou à faire ses ablutions. Le Prophète (paix et salut sur lui) a également conseillé de garder le silence et de ne pas répondre à la personne en colère pour ne pas envenimer la situation.",
  },
];

export default function DouaColereIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-colere-islam/#article",
        headline:
          "Doua contre la colère en islam : invocations et conseils prophétiques",
        description:
          "Découvrez la doua contre la colère en islam : invocations authentiques en arabe, hadiths sur la maîtrise de soi, refuge contre Shaytan et conseils prophétiques.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-04-18",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-colere-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-colere-islam/#breadcrumb",
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
            name: "Doua contre la colère",
            item: "https://www.islamreligion.fr/doua-colere-islam",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://www.islamreligion.fr/doua-colere-islam/#faq",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
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
          title="Doua contre la colère en islam : invocations et conseils prophétiques"
          subtitle="Les invocations authentiques pour apaiser la colère, tirées du Coran et de la Sunna. Textes en arabe, phonétique et traduction française."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation avec rayons dorés symbolisant la doua contre la colère en islam"
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
                <span className="text-foreground">Doua contre la colère</span>
              </nav>

              {/* Résumé rapide */}
              <div className="rounded-xl border border-secondary/20 bg-accent p-6">
                <h2 className="text-lg font-bold text-primary">En résumé</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  La colère est une émotion naturelle, mais son excès peut mener
                  à des paroles et des actes destructeurs. Le Prophète (paix et
                  salut sur lui) a enseigné des remèdes spirituels et pratiques
                  pour la maîtriser : réciter{" "}
                  <strong>A&apos;udhu billahi min ash-shaytanir-rajim</strong>,
                  faire les ablutions, changer de position et garder le silence.
                  Le vrai fort, selon le hadith, n&apos;est pas celui qui
                  terrasse les autres, mais celui qui se contrôle dans la colère.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : La colère en perspective islamique */}
              {/* ============================================ */}
              <section id="colere-perspective-islamique" className="scroll-mt-24">
                <h2 className="mt-12 text-2xl font-bold text-primary lg:text-3xl">
                  La colère en perspective islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La colère (al-ghadab, الغضب) est une émotion humaine
                  reconnue par l&apos;islam. Elle n&apos;est pas condamnée en
                  elle-même, mais c&apos;est son excès et ses conséquences qui
                  sont redoutés. Lorsqu&apos;elle échappe au contrôle,
                  elle devient une porte ouverte aux péchés les plus graves :
                  injures, violence, rupture des liens familiaux, injustice
                  envers autrui.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants de l&apos;islam distinguent deux types de colère.
                  La colère blâmable (ghadab madhmum) est celle qui naît de
                  l&apos;orgueil, de l&apos;égoïsme ou de futilités mondaines.
                  C&apos;est cette colère que Shaytan utilise pour égarer
                  l&apos;être humain et le pousser à commettre ce qu&apos;il
                  regrettera. À l&apos;opposé, la colère louable (ghadab
                  mahmud) est celle qui surgit pour défendre la religion
                  d&apos;Allah, protéger les opprimés ou faire respecter la
                  justice. Le Prophète (paix et salut sur lui) ne se mettait
                  jamais en colère pour des raisons personnelles, mais son
                  visage changeait lorsqu&apos;une limite d&apos;Allah était
                  transgressée.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne la maîtrise de la colère parmi les
                  qualités des croyants vertueux. Allah dit : &laquo;&nbsp;Ceux
                  qui dépensent dans l&apos;aisance et dans l&apos;adversité,
                  qui dominent leur rage et pardonnent aux gens, car Allah aime
                  les bienfaisants&nbsp;&raquo; (sourate Al-Imran, 3:134). Ce
                  verset place la maîtrise de la colère au rang des actes
                  d&apos;adoration qui rapprochent le serviteur de son Seigneur.
                  La{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en islam</Link>{" "}
                  est justement l&apos;un des moyens les plus puissants pour y
                  parvenir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;imam Ibn al-Qayyim explique que la colère est comme un
                  charbon ardent jeté dans le coeur de l&apos;homme. Si on le
                  laisse brûler sans intervenir, il consume la raison, la
                  patience et la foi. Mais celui qui sait éteindre ce feu par
                  le dhikr, les ablutions et le changement de posture protège
                  son coeur et préserve sa relation avec Allah et avec les gens.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : La doua refuge contre Shaytan */}
              {/* ============================================ */}
              <section id="doua-refuge-shaytan" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua contre la colère : A&apos;udhu billahi min ash-shaytan
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La formule prophétique par excellence pour apaiser la colère
                  est l&apos;isti&apos;adha, le fait de chercher refuge auprès
                  d&apos;Allah contre Satan le maudit. Le Prophète (paix et
                  salut sur lui) a explicitement prescrit cette invocation comme
                  remède immédiat à la colère, car celle-ci est une impulsion
                  provoquée par Shaytan.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu billahi min ash-shaytanir-rajim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge auprès d&apos;Allah contre Satan le maudit&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Formule prophétique rapportée dans al-Bukhari et Muslim
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation n&apos;est pas une simple formule à réciter
                  machinalement. Elle implique une prise de conscience profonde :
                  la colère qui envahit le coeur n&apos;est pas une force
                  incontrôlable. C&apos;est une suggestion de Shaytan, et le
                  croyant possède l&apos;arme la plus efficace pour la
                  repousser : le recours à Allah. En prononçant cette
                  isti&apos;adha, le musulman reconnaît sa faiblesse devant
                  la tentation et demande l&apos;aide de son Créateur.
                </p>

                <HadithCard
                  arabic="إنِّي أعلمُ كلمةً لو قالَها لذهبَ عنهُ ما يجدُ، لو قالَ: أعوذُ باللَّهِ منَ الشَّيطانِ الرَّجيمِ، ذَهبَ عنهُ ما يجِدُ"
                  text="Je connais une parole que s'il la prononçait, ce qu'il ressent disparaîtrait. S'il disait : 'Je cherche refuge auprès d'Allah contre Satan le maudit', ce qu'il ressent s'en irait."
                  source="Rapporté par al-Bukhari (6048) et Muslim (2610)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith est rapporté à propos d&apos;un homme dont le
                  visage avait rougi de colère en présence du Prophète (paix et
                  salut sur lui). Le Messager d&apos;Allah ne l&apos;a pas
                  réprimandé, mais a prescrit un remède spirituel d&apos;une
                  simplicité remarquable. La sagesse prophétique réside ici
                  dans le traitement de la cause (l&apos;influence de Shaytan)
                  plutôt que des symptômes (la rougeur du visage, la tension du
                  corps).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants recommandent de répéter cette formule plusieurs
                  fois si la colère persiste, en la récitant à voix basse avec
                  concentration et présence du coeur. L&apos;imam an-Nawawi
                  précise que l&apos;isti&apos;adha est le premier geste à
                  accomplir dès que la colère se manifeste, avant même
                  d&apos;essayer les autres remèdes prophétiques comme le
                  changement de position ou les ablutions.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-levees-illustration-lumiere.jpg"
                    alt="Illustration de mains levées en doua avec lumière symbolisant le refuge auprès d'Allah contre la colère"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophétiques dans leur langue originale. Découvrez des formations adaptées aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandées"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Conseils prophétiques */}
              {/* ============================================ */}
              <section id="conseils-prophetiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les conseils prophétiques pour apaiser la colère
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà de l&apos;isti&apos;adha, le Prophète (paix et salut
                  sur lui) a enseigné un ensemble de gestes concrets qui
                  agissent comme un programme complet de gestion de la colère.
                  Chaque conseil a une sagesse spirituelle et une efficacité
                  psychologique remarquable.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Changer de position physique
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Si l&apos;un de vous se met en colère alors
                        qu&apos;il est debout, qu&apos;il s&apos;assoie. Si la
                        colère ne le quitte pas, qu&apos;il se
                        couche&nbsp;&raquo; (rapporté par Abu Dawud). Ce
                        changement de posture brise l&apos;élan physique de la
                        colère et empêche la personne d&apos;agir
                        impulsivement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Garder le silence
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;Si l&apos;un de vous se met en colère,
                        qu&apos;il se taise&nbsp;&raquo; (rapporté par
                        l&apos;imam Ahmad). La majorité des dégâts causés par la
                        colère passent par les paroles : insultes, menaces,
                        paroles de divorce, rupture des liens. Le silence est un
                        bouclier qui protège de ces conséquences irréversibles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Faire les ablutions (wudu)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et salut sur lui) a dit :
                        &laquo;&nbsp;La colère vient de Shaytan, Shaytan est
                        créé de feu, et le feu s&apos;éteint avec l&apos;eau.
                        Si l&apos;un de vous se met en colère, qu&apos;il fasse
                        ses ablutions&nbsp;&raquo; (rapporté par Abu Dawud).
                        L&apos;eau apaise le corps et l&apos;esprit, et
                        l&apos;acte d&apos;adoration reconnecte le coeur à
                        Allah.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Quitter l&apos;endroit de la dispute
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        S&apos;éloigner de la source de la colère est une
                        démarche de sagesse recommandée par les savants. Cela
                        permet de rompre le cycle de l&apos;escalade verbale et
                        de retrouver la lucidité. Le musulman qui quitte un lieu
                        de dispute ne fuit pas par faiblesse : il agit par
                        maîtrise de soi et obéissance aux enseignements
                        prophétiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Se rappeler les conséquences
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Penser aux conséquences de la colère (regret, péché,
                        rupture des relations) aide à retrouver la raison. Les
                        savants conseillent de se rappeler que la colère peut
                        faire perdre en quelques secondes ce qu&apos;on a
                        construit en des années : confiance, amour familial,
                        réputation. La{" "}
                        <Link href="/doua-angoisse-stress-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre l&apos;angoisse</Link>{" "}
                        peut également aider à retrouver la sérénité.
                      </p>
                    </div>
                  </div>
                </div>

                <HadithCard
                  arabic="إذا غضب أحدكم وهو قائم فليجلس، فإن ذهب عنه الغضب وإلا فليضطجع"
                  text="Si l'un de vous se met en colère alors qu'il est debout, qu'il s'assoie. Si la colère s'en va, tant mieux, sinon qu'il se couche."
                  source="Rapporté par Abu Dawud (4782), authentifié par al-Albani"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Douas pour la patience */}
              {/* ============================================ */}
              <section id="douas-patience-maitrise" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas pour la patience et la maîtrise de soi
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  En plus de l&apos;isti&apos;adha, plusieurs invocations
                  authentiques aident le croyant à développer la patience (sabr)
                  et la maîtrise de soi face aux situations qui provoquent la
                  colère. Ces douas, tirées du Coran et de la Sunna,
                  renforcent le coeur et rappellent au musulman sa dépendance
                  envers Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua pour demander la patience
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation coranique est celle des croyants qui font
                  face à l&apos;adversité et demandent à Allah de les renforcer
                  par la patience et la fermeté.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Rabbana afrigh &apos;alayna sabran wa thabbit aqdamana
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, déverse sur nous la patience et affermis nos pas&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate Al-Baqara (2:250)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Doua de remise de son affaire à Allah
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Lorsque la colère naît d&apos;une situation d&apos;injustice
                  ou de frustration, remettre son affaire entre les mains
                  d&apos;Allah apaise le coeur et libère l&apos;esprit du
                  besoin de vengeance.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> HasbiyAllahu la ilaha illa Huwa, &apos;alayhi tawakkaltu wa Huwa Rabbul-&apos;Arshil-&apos;Adhim
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Allah me suffit, il n&apos;y a de divinité que Lui. En Lui je place ma confiance et Il est le Seigneur du Trône immense&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Coran, sourate At-Tawba (9:129)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua pour un coeur apaisé
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) invoquait régulièrement
                  Allah pour que son coeur reste ferme sur la foi et la
                  sérénité. Cette doua est particulièrement adaptée à celui qui
                  lutte contre la colère récurrente.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ya Muqallibal-qulub, thabbit qalbi &apos;ala dinik
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Ô Celui qui retourne les coeurs, affermis mon coeur sur Ta religion&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (2140), authentifié par al-Albani
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  4. Doua pour la tranquillité de l&apos;âme
                </h3>
                <p className="mt-3 leading-relaxed text-foreground">
                  Cette invocation prophétique complète aide le croyant à
                  trouver la sérénité dans les moments de tension et
                  d&apos;irritation. Elle combine le dhikr et la demande de
                  protection divine.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inni a&apos;udhu bika minal-hammi wal-hazani wal-&apos;ajzi wal-kasali wal-bukhli wal-jubni wa dala&apos;id-dayni wa ghalabatir-rijal
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Seigneur, je cherche refuge auprès de Toi contre le souci, la tristesse, l&apos;incapacité, la paresse, l&apos;avarice, la lâcheté, le poids de la dette et la domination des hommes&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (6369)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette dernière invocation est d&apos;une richesse
                  exceptionnelle car elle couvre l&apos;ensemble des états
                  négatifs qui peuvent accompagner la colère : le souci
                  (al-hamm), la tristesse (al-hazan), le sentiment
                  d&apos;impuissance (al-&apos;ajz). En demandant protection
                  contre tous ces maux, le croyant construit une armure
                  spirituelle qui le prémunit contre les dérapages émotionnels.
                  Pour approfondir les invocations contre la tristesse,
                  consultez notre article sur la{" "}
                  <Link href="/doua-tristesse-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua contre la tristesse en islam</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Le vrai fort */}
              {/* ============================================ */}
              <section id="hadith-force-maitrise" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  &laquo;&nbsp;Le fort est celui qui se maîtrise lors de la colère&nbsp;&raquo;
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Parmi les enseignements les plus marquants du Prophète (paix
                  et salut sur lui) sur la colère, ce hadith bouleverse les
                  représentations habituelles de la force et de la virilité. Il
                  établit que la vraie puissance n&apos;est pas physique, mais
                  intérieure.
                </p>

                <HadithCard
                  arabic="ليس الشديد بالصُّرَعة، إنما الشديد الذي يملك نفسه عند الغضب"
                  text="Le fort n'est pas celui qui terrasse les gens dans la lutte, mais le fort est celui qui se maîtrise lors de la colère."
                  source="Rapporté par al-Bukhari (6114) et Muslim (2609)"
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce hadith est d&apos;une profondeur remarquable. Dans la
                  société arabe de l&apos;époque, la force physique et la
                  capacité à terrasser un adversaire étaient des vertus
                  admirées. Le Prophète (paix et salut sur lui) redéfinit
                  radicalement cette notion : la force véritable est celle de
                  l&apos;âme qui résiste à la tempête intérieure de la colère.
                  Quiconque peut maîtriser son ego au moment où tout son être
                  le pousse à exploser possède une puissance que le simple
                  lutteur ne connaît pas.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les compagnons du Prophète ont incarné cet enseignement de
                  manière exemplaire. &apos;Umar ibn al-Khattab, connu pour
                  son tempérament fort, est devenu après l&apos;islam un modèle
                  de maîtrise de soi. Lorsqu&apos;un homme l&apos;insulta
                  publiquement, il répondit calmement :
                  &laquo;&nbsp;Si ce que tu dis est vrai, qu&apos;Allah me
                  pardonne. Si c&apos;est faux, qu&apos;Allah te
                  pardonne&nbsp;&raquo;. Cette réponse illustre la
                  transformation que la foi opère dans le coeur de celui qui
                  applique les enseignements prophétiques.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-trait-fin-lumiere-subtile.jpg"
                    alt="Illustration sobre de mains en invocation avec lumière subtile symbolisant la maîtrise de soi en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam al-Ghazali dans son ouvrage Ihya &apos;Ulum
                  ad-Din consacre un chapitre entier à la colère. Il explique
                  que la maîtrise de soi est un combat (mujahadah) quotidien
                  qui nécessite un entraînement progressif. Comme tout combat
                  spirituel, il commence par la prise de conscience, se
                  poursuit par la pratique des remèdes prophétiques et aboutit,
                  avec la persévérance, à un caractère apaisé et noble. Si vous
                  traversez un{" "}
                  <Link href="/doua-moment-difficile-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">moment difficile</Link>,
                  les douas prophétiques sont un soutien précieux.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Les ablutions comme remède */}
              {/* ============================================ */}
              <section id="ablutions-remede" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les ablutions : un remède prophétique contre la colère
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le lien entre les ablutions (wudu) et l&apos;apaisement de la
                  colère repose sur une logique à la fois spirituelle et
                  physique. Le Prophète (paix et salut sur lui) a établi une
                  connexion entre la nature de Shaytan (créé de feu) et le
                  remède par l&apos;eau.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/20 bg-accent p-6">
                  <p className="text-right font-arabic text-xl leading-loose text-primary" dir="rtl">
                    إِنَّ الْغَضَبَ مِنَ الشَّيْطَانِ وَإِنَّ الشَّيْطَانَ خُلِقَ مِنَ النَّارِ وَإِنَّمَا تُطْفَأُ النَّارُ بِالْمَاءِ فَإِذَا غَضِبَ أَحَدُكُمْ فَلْيَتَوَضَّأْ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Innal-ghadaba minash-shaytan, wa innash-shaytana khuliqa minan-nar, wa innama tutfa&apos;un-naru bil-ma&apos;, fa idha ghadiba ahadukum falyatawadda&apos;
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;La colère vient de Shaytan, et Shaytan a été créé de feu, et le feu s&apos;éteint avec l&apos;eau. Si l&apos;un de vous se met en colère, qu&apos;il fasse ses ablutions&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Abu Dawud (4784)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce hadith contient un enseignement à plusieurs niveaux. Sur
                  le plan spirituel, les ablutions sont un acte d&apos;adoration
                  qui purifie le croyant et le reconnecte à Allah. Sur le plan
                  physique, le contact de l&apos;eau fraîche avec le visage,
                  les mains et les pieds a un effet calmant reconnu. Le
                  processus même des ablutions, avec ses gestes méthodiques et
                  répétitifs, impose une pause qui interrompt le cycle de la
                  colère.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants contemporains soulignent la concordance entre
                  cette recommandation prophétique et les découvertes modernes
                  en psychologie. Le fait de se concentrer sur une action
                  physique précise (les gestes des ablutions) détourne
                  l&apos;attention de la source de la colère, ce que les
                  psychologues appellent la &laquo;&nbsp;distraction
                  cognitive&nbsp;&raquo;. De plus, l&apos;eau fraîche active le
                  système nerveux parasympathique, responsable de la
                  relaxation. La sagesse prophétique précède ainsi de quatorze
                  siècles les recommandations de la science moderne.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Purification spirituelle :</strong> les ablutions
                      effacent les péchés mineurs et rapprochent le croyant
                      d&apos;Allah, l&apos;éloignant ainsi de l&apos;influence
                      de Shaytan.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pause obligatoire :</strong> le temps nécessaire
                      pour accomplir les ablutions crée un délai naturel entre
                      l&apos;impulsion de la colère et l&apos;action, ce qui
                      permet à la raison de reprendre le dessus.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Apaisement physique :</strong> l&apos;eau froide
                      sur le visage, les avant-bras et les pieds provoque une
                      réponse physiologique de calme dans le corps.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Bienfaits de la maîtrise */}
              {/* ============================================ */}
              <section id="bienfaits-maitrise-colere" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les bienfaits de la maîtrise de la colère en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Maîtriser sa colère n&apos;est pas seulement une obligation
                  morale en islam : c&apos;est un acte d&apos;adoration qui
                  apporte des récompenses considérables dans cette vie et dans
                  l&apos;au-delà. Le Coran et la Sunna promettent des
                  bienfaits remarquables à celui qui parvient à dompter cette
                  émotion.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      L&apos;amour d&apos;Allah
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Allah dit que ceux qui &laquo;&nbsp;dominent leur
                      rage&nbsp;&raquo; font partie des bienfaisants (muhsinin)
                      qu&apos;Il aime (Coran, 3:134). La maîtrise de la colère
                      est donc un chemin direct vers l&apos;amour divin, la
                      plus grande des récompenses.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Une récompense immense au Jour dernier
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Quiconque retient sa colère alors qu&apos;il
                      a la capacité de l&apos;exprimer, Allah l&apos;appellera
                      devant toutes les créatures le Jour de la Résurrection
                      pour qu&apos;il choisisse parmi les houris celle qu&apos;il
                      voudra&nbsp;&raquo; (rapporté par Abu Dawud et
                      at-Tirmidhi).
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La préservation des liens
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Combien de foyers ont été brisés, combien d&apos;amitiés
                      ont été détruites par quelques mots prononcés sous le coup
                      de la colère. Celui qui maîtrise sa langue et ses actes
                      dans ces moments préserve ce qui lui est le plus cher :
                      sa famille, ses proches et sa communauté.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      La sérénité intérieure
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Celui qui apprend à gérer sa colère développe une paix
                      intérieure (sakina) qui transparaît dans tous les aspects
                      de sa vie. Il devient plus patient, plus sage dans ses
                      décisions et plus agréable dans ses relations. Cette
                      sérénité est un don d&apos;Allah à celui qui fait
                      l&apos;effort de se maîtriser.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Un homme vint demander conseil au Prophète (paix et salut sur
                  lui), et celui-ci lui répondit simplement :
                  &laquo;&nbsp;Ne te mets pas en colère&nbsp;&raquo;.
                  L&apos;homme répéta sa demande plusieurs fois, et le Prophète
                  lui donna la même réponse à chaque fois :
                  &laquo;&nbsp;Ne te mets pas en colère&nbsp;&raquo;
                  (rapporté par al-Bukhari). Cette insistance montre
                  l&apos;importance capitale que le Prophète accordait à ce
                  conseil. Si la colère vous pousse vers la{" "}
                  <Link href="/doua-peur-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">peur et l&apos;anxiété</Link>,
                  des invocations spécifiques existent pour y remédier.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua pour les moments difficiles en islam"
                  description="Découvrez les invocations authentiques pour traverser les épreuves avec patience et confiance en Allah."
                  href="/doua-moment-difficile-islam"
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
                    Doua en islam
                  </Link>
                  <Link
                    href="/doua-angoisse-stress-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre l&apos;angoisse et le stress
                  </Link>
                  <Link
                    href="/doua-moment-difficile-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les moments difficiles
                  </Link>
                  <Link
                    href="/doua-tristesse-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre la tristesse
                  </Link>
                  <Link
                    href="/doua-peur-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua contre la peur
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
