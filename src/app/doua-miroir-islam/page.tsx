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
    "Doua devant le miroir en islam : invocation pour la beaute et le bon caractere",
  description:
    "Decouvrez la doua devant le miroir en islam : Allahumma ahsanta khalqi fa ahsin khuluqi en arabe, phonetique et traduction. Hadiths authentiques sur la beaute interieure et exterieure, gratitude envers Allah pour Son apparence.",
  openGraph: {
    title:
      "Doua devant le miroir en islam : invocation pour la beaute et le bon caractere",
    description:
      "La doua du miroir en islam : texte arabe, phonetique et traduction. Invocation prophetique pour remercier Allah et demander un bon caractere.",
    url: "https://www.islamreligion.fr/doua-miroir-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-miroir-islam",
  },
};

const tocItems = [
  { id: "doua-miroir-texte", label: "Texte de la doua du miroir" },
  { id: "signification-doua", label: "Signification et sagesse de cette doua" },
  { id: "beaute-caractere-islam", label: "Beaute et caractere en islam" },
  { id: "gratitude-apparence", label: "La gratitude pour son apparence" },
  { id: "beaute-interieure-exterieure", label: "Beaute interieure et exterieure" },
  { id: "douas-complementaires", label: "Douas complementaires" },
  { id: "conseils-pratiques", label: "Conseils pratiques au quotidien" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question: "Quelle est la doua a dire devant le miroir en islam ?",
    answer:
      "La doua a reciter devant le miroir est : &laquo;&nbsp;Allahumma ahsanta khalqi fa ahsin khuluqi&nbsp;&raquo; (O Allah, Tu as embelli ma creation, alors embellis mon caractere). Cette invocation est rapportee par l&apos;imam Ahmad et Ibn Hibban. Elle permet au musulman de remercier Allah pour son apparence et de Lui demander un bon comportement.",
  },
  {
    question: "Est-ce une sunna de faire une doua en se regardant dans le miroir ?",
    answer:
      "Oui, il est rapporte que le Prophete (paix et salut sur lui) recitait une invocation lorsqu&apos;il se regardait dans le miroir. Cette pratique fait partie des sunnan quotidiennes (actes recommandes) qui transforment les gestes ordinaires en actes d&apos;adoration. Le simple fait de se regarder dans un miroir devient ainsi une occasion de se rapprocher d&apos;Allah.",
  },
  {
    question: "Peut-on reciter la doua du miroir en francais ?",
    answer:
      "Oui, la doua du miroir peut etre recitee dans toute langue, car Allah comprend toutes les langues. Cependant, il est recommande d&apos;apprendre le texte arabe original pour beneficier de la baraka de la formulation prophetique. Dire &laquo;&nbsp;O Allah, Tu as embelli ma creation, alors embellis mon caractere&nbsp;&raquo; en francais reste valide comme invocation personnelle.",
  },
  {
    question: "Quel est le lien entre la beaute physique et le bon caractere en islam ?",
    answer:
      "En islam, la beaute physique est un bienfait d&apos;Allah qui appelle a la gratitude, tandis que le bon caractere (husn al-khuluq) est la veritable beaute recherchee. La doua du miroir etablit ce lien : en voyant sa forme exterieure, le musulman demande a Allah d&apos;embellir egalement son interieur. Le Prophete (paix et salut sur lui) a dit que le meilleur des croyants est celui qui a le meilleur caractere.",
  },
  {
    question: "La doua du miroir protege-t-elle contre l'orgueil ?",
    answer:
      "Oui, la doua du miroir constitue une protection spirituelle contre l&apos;orgueil (kibr) et la vanite. En attribuant sa beaute a Allah (&laquo;&nbsp;Tu as embelli ma creation&nbsp;&raquo;), le musulman reconnait qu&apos;il n&apos;est pas l&apos;auteur de son apparence. Cette humilite devant le miroir empeche le sentiment de superiorite lie au physique, un piege que le Prophete (paix et salut sur lui) a mis en garde contre.",
  },
  {
    question: "Quand doit-on reciter la doua du miroir ?",
    answer:
      "La doua du miroir se recite a chaque fois que l&apos;on se regarde dans un miroir ou dans toute surface reflechissante. Il n&apos;y a pas de moment specifique impose. Que ce soit le matin en se preparant, avant de sortir de la maison, ou a tout autre moment de la journee, cette invocation rappelle au musulman de lier chaque geste quotidien au souvenir d&apos;Allah.",
  },
  {
    question: "Existe-t-il d'autres douas liees a l'apparence en islam ?",
    answer:
      "Oui, l&apos;islam propose plusieurs douas liees a l&apos;apparence et aux soins personnels. La doua en enfilant un nouveau vetement (&laquo;&nbsp;Alhamdulillahi lladhi kasani hadha&nbsp;&raquo;), la doua en sortant de la maison, et les invocations de gratitude pour les bienfaits physiques font partie du quotidien du musulman. Chacune de ces douas transforme un acte ordinaire en ibadah (adoration).",
  },
  {
    question: "Le Prophete se regardait-il dans le miroir ?",
    answer:
      "Oui, il est authentiquement rapporte que le Prophete (paix et salut sur lui) se regardait dans le miroir et dans l&apos;eau. Il prenait soin de son apparence, arrangeait ses cheveux et sa barbe, et portait des vetements propres. Cette attention a l&apos;apparence exterieure s&apos;accompagnait toujours d&apos;une invocation pour la beaute interieure, montrant l&apos;equilibre islamique entre les deux dimensions.",
  },
];

export default function DouaMiroirIslam() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-miroir-islam/#article",
        headline:
          "Doua devant le miroir en islam : invocation pour la beaute et le bon caractere",
        description:
          "Decouvrez la doua du miroir en islam : Allahumma ahsanta khalqi fa ahsin khuluqi, texte arabe, phonetique, traduction et hadiths authentiques.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-04-14",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-miroir-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-miroir-islam/#breadcrumb",
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
            name: "Doua devant le miroir",
            item: "https://www.islamreligion.fr/doua-miroir-islam",
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
          title="Doua devant le miroir en islam : invocation pour la beaute et le bon caractere"
          subtitle="L&apos;invocation prophetique a reciter en se regardant dans le miroir. Texte arabe, phonetique, traduction francaise et hadiths authentiques sur la beaute et le caractere."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation avec rayons dores symbolisant la doua du miroir en islam"
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
                <span className="text-foreground">Doua devant le miroir</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En resume
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  La doua du miroir est une invocation prophetique que le
                  musulman recite en se regardant dans un miroir. Par cette
                  formule &mdash; &laquo;&nbsp;Allahumma ahsanta khalqi fa ahsin
                  khuluqi&nbsp;&raquo; (O Allah, Tu as embelli ma creation, alors
                  embellis mon caractere) &mdash; le croyant remercie Allah pour
                  son apparence physique et Lui demande d&apos;embellir
                  egalement son caractere. Cette doua incarne l&apos;equilibre
                  islamique entre la beaute exterieure et la beaute interieure.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Texte de la doua du miroir */}
              {/* ============================================ */}
              <section id="doua-miroir-texte" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Texte complet de la doua du miroir en arabe, phonetique et traduction
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Lorsque le Prophete (paix et salut sur lui) se regardait dans
                  le miroir, il recitait une invocation specifique qui lie la
                  beaute physique au bon caractere. Cette doua du miroir est
                  rapportee dans plusieurs recueils de hadiths et fait partie
                  des invocations quotidiennes recommandees pour tout musulman.
                  Voici le texte complet avec sa phonetique et sa traduction.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  1. Doua principale du miroir
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ أَحْسَنْتَ خَلْقِي فَأَحْسِنْ خُلُقِي
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Allahumma ahsanta khalqi fa ahsin khuluqi
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;O Allah, Tu as embelli ma creation (mon
                    physique), alors embellis mon caractere (ma moralite).&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Ahmad (3823) et Ibn Hibban (959)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  2. Variante rapportee avec &laquo;&nbsp;hassanta&nbsp;&raquo;
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Allahumma kama hassanta khalqi fa hassin khuluqi
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;O Allah, de meme que Tu as rendu belle ma
                    creation, rends beau mon caractere.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Ahmad (6156), classe hasan par an-Nawawi
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  3. Doua de gratitude en voyant son reflet
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي سَوَّى خَلْقِي فَعَدَلَهُ وَكَرَّمَ صُورَةَ وَجْهِي فَأَحْسَنَهَا وَجَعَلَنِي مِنَ الْمُسْلِمِينَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Al-hamdulillahi lladhi sawwa khalqi fa &apos;adalahu, wa karrama surata wajhi fa ahsanaha, wa ja&apos;alani minal-muslimin
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Louange a Allah qui a equilibre ma creation
                    et l&apos;a rendue harmonieuse, qui a honore la forme de
                    mon visage et l&apos;a embellie, et qui m&apos;a fait
                    musulman.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Ibn as-Sunni dans &apos;Amal al-Yawm wa al-Layla (163)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces trois formulations se completent et peuvent toutes etre
                  recitees devant le miroir. La premiere est la plus courante et
                  la plus facile a memoriser. Elle resume a elle seule toute la
                  philosophie islamique du rapport entre l&apos;apparence et le
                  caractere : ce qu&apos;Allah a cree de beau a l&apos;exterieur
                  doit trouver son equivalent a l&apos;interieur.
                </p>

                <HadithCard
                  arabic="إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم"
                  text="Allah ne regarde ni vos apparences ni vos biens, mais Il regarde vos coeurs et vos actes."
                  source="Rapporte par Muslim (2564)"
                />

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Mains ouvertes en invocation doua du miroir en islam avec lumiere doree"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Signification et sagesse */}
              {/* ============================================ */}
              <section id="signification-doua" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification et sagesse de la doua du miroir
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua du miroir ne se reduit pas a une simple formule a
                  repeter mecaniquement. Elle contient une profondeur
                  spirituelle remarquable qui revele la vision islamique de
                  l&apos;etre humain dans sa totalite. Chaque mot de cette
                  invocation porte un enseignement que le musulman doit mediter
                  a chaque fois qu&apos;il se regarde dans le miroir.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le mot <strong>khalq</strong> (خَلْق) designe la creation
                  physique, la forme exterieure, l&apos;apparence que chaque
                  individu recoit d&apos;Allah sans l&apos;avoir choisie. Le
                  mot <strong>khuluq</strong> (خُلُق) designe le caractere, la
                  moralite, les qualites interieures que l&apos;individu
                  developpe tout au long de sa vie. Le jeu de mots entre ces
                  deux termes, qui partagent la meme racine arabe (خ ل ق), est
                  voulu et porteur de sens : la creation exterieure et la
                  creation interieure sont liees, et toutes deux viennent
                  d&apos;Allah.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  En disant &laquo;&nbsp;Tu as embelli ma creation&nbsp;&raquo;,
                  le musulman accomplit un acte de gratitude (shukr) envers
                  Allah pour son apparence, quelle qu&apos;elle soit. Car en
                  islam, toute creation d&apos;Allah est belle et harmonieuse.
                  Allah dit dans le Coran : &laquo;&nbsp;Nous avons certes cree
                  l&apos;homme dans la forme la plus parfaite&nbsp;&raquo;
                  (at-Tin, 95:4). Le musulman ne se regarde donc pas dans le
                  miroir avec insatisfaction ou critique, mais avec gratitude
                  envers le Createur qui l&apos;a faconne.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La seconde partie &mdash; &laquo;&nbsp;alors embellis mon
                  caractere&nbsp;&raquo; &mdash; est une demande humble
                  adressee a Allah. Elle reconnait que le bon caractere est un
                  don divin que l&apos;on doit chercher activement. Si la beaute
                  physique est accordee sans effort, la beaute morale necessite
                  un travail constant sur soi-meme, une lutte contre les
                  mauvais penchants de l&apos;ame (nafs) et une quete
                  permanente de l&apos;aide d&apos;Allah. Cette doua est donc a
                  la fois un remerciement et une supplication, deux piliers de
                  la relation entre le serviteur et son Seigneur.
                </p>

                <HadithCard
                  arabic="أكمل المؤمنين إيمانًا أحسنهم خلقًا"
                  text="Les croyants dont la foi est la plus complete sont ceux qui ont le meilleur caractere."
                  source="Rapporte par Abu Dawud (4682) et at-Tirmidhi (1162)"
                />

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Khalq et khuluq :</strong> deux mots de la meme
                      racine arabe qui relient la forme physique au caractere
                      moral, montrant que les deux sont des creations d&apos;Allah.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Double dimension :</strong> la doua du miroir
                      combine la gratitude pour le bienfait accorde et la
                      demande pour un bienfait supplementaire, un modele
                      d&apos;invocation complet.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Protection contre l&apos;orgueil :</strong>{" "}
                      attribuer sa beaute a Allah empeche la vanite et le
                      narcissisme, des maladies du coeur que l&apos;islam
                      combat fermement.
                    </span>
                  </li>
                </ul>
              </section>

              <ArticleCTA
                variant="formation"
                title="Comprenez vos douas en arabe"
                description="Apprendre l&apos;arabe vous permet de comprendre le Coran et les invocations prophetiques dans leur langue originale. Decouvrez des formations adaptees aux francophones."
                href="/formation-arabe-en-ligne"
                linkText="Voir les formations recommandees"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Beaute et caractere en islam */}
              {/* ============================================ */}
              <section id="beaute-caractere-islam" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La beaute et le bon caractere (husn al-khuluq) en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam accorde une importance capitale au bon caractere
                  (husn al-khuluq). Le Prophete (paix et salut sur lui) a
                  d&apos;ailleurs defini sa propre mission en ces termes :
                  &laquo;&nbsp;J&apos;ai ete envoye pour parfaire les nobles
                  caracteres&nbsp;&raquo; (rapporte par al-Bayhaqi). Cette
                  declaration prophetique place le perfectionnement moral au
                  coeur meme du message islamique, bien au-dessus de toute
                  consideration liee a l&apos;apparence physique.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le bon caractere en islam englobe de nombreuses qualites : la
                  patience (sabr), la generosite (karam), la douceur (hilm), la
                  veracite (sidq), la pudeur (haya&apos;), l&apos;humilite
                  (tawadu&apos;) et la misericorde (rahma). Chacune de ces
                  vertus constitue un embellissement interieur que le musulman
                  recherche activement. Le miroir, en montrant l&apos;exterieur,
                  doit rappeler au croyant de travailler sur son interieur avec
                  la meme attention, voire davantage.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que le bon caractere est la chose la
                  plus lourde dans la balance du croyant au Jour du Jugement.
                  Le Prophete (paix et salut sur lui) a enseigne que celui qui
                  possede un bon caractere atteint le rang de celui qui jeune le
                  jour et prie la nuit, soulignant ainsi que la moralite est un
                  acte d&apos;adoration a part entiere, au meme titre que les
                  rituels. Pour approfondir les{" "}
                  <Link href="/doua-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations en islam</Link>,
                  consultez notre guide complet.
                </p>

                <HadithCard
                  arabic="ما شيء أثقل في ميزان المؤمن يوم القيامة من خلق حسن"
                  text="Rien ne sera plus lourd dans la balance du croyant au Jour de la Resurrection que le bon caractere."
                  source="Rapporte par Abu Dawud (4799) et at-Tirmidhi (2002)"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  La doua du miroir s&apos;inscrit dans cette logique : elle
                  rappelle quotidiennement au musulman que la vraie beaute est
                  celle du caractere. Un visage agreable accompagne d&apos;un
                  mauvais caractere est une contradiction que l&apos;islam
                  cherche a resoudre. A l&apos;inverse, un bon caractere
                  illumine le visage de son porteur d&apos;une lumiere (nur) que
                  percoivent les coeurs sinceres. C&apos;est pourquoi les
                  Compagnons decrivaient le visage du Prophete (paix et salut
                  sur lui) comme rayonnant de lumiere : sa beaute interieure
                  se manifestait sur son apparence exterieure.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Gratitude pour l'apparence */}
              {/* ============================================ */}
              <section id="gratitude-apparence" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La gratitude pour son apparence en islam
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Dans une epoque ou l&apos;insatisfaction corporelle touche
                  des millions de personnes, la doua du miroir offre un
                  antidote spirituel puissant. L&apos;islam enseigne que chaque
                  etre humain a ete cree par Allah dans la meilleure forme, et
                  que toute apparence physique est un bienfait divin qui
                  merite la gratitude plutot que la plainte ou le complexe.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Allah dit dans le Coran : &laquo;&nbsp;C&apos;est Lui qui vous
                  a donnes votre forme et a rendu belles vos formes&nbsp;&raquo;
                  (Ghafir, 40:64). Ce verset affirme que toute forme humaine
                  est belle aux yeux d&apos;Allah, car elle est le resultat de
                  Sa creation parfaite. Le musulman qui se regarde dans le
                  miroir doit donc voir le chef-d&apos;oeuvre du Createur, et
                  non une source d&apos;insatisfaction. La doua du miroir
                  transforme ce moment intime en un acte de foi et de
                  reconnaissance.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est rapporte que le Prophete (paix et salut sur lui)
                  demandait a Allah de le proteger contre la laideur du
                  caractere de la meme facon qu&apos;Il l&apos;avait protege
                  contre la laideur physique. Cette attitude prophetique montre
                  que la preoccupation premiere n&apos;est pas l&apos;apparence
                  &mdash; qui est un don acquis &mdash; mais le caractere, qui
                  est un effort permanent. Le miroir devient ainsi un rappel
                  spirituel : &laquo;&nbsp;Mon exterieur est fixe par Allah,
                  mais mon interieur est mon chantier quotidien.&nbsp;&raquo;
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/priere-islam-doua-mosquee-silhouette.jpg"
                    alt="Silhouette en priere dans une mosquee illustrant la gratitude et l invocation devant le miroir en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Chaque creation est belle :</strong> le Coran
                      affirme qu&apos;Allah a cree l&apos;homme dans la
                      meilleure forme (ahsani taqwim), ce qui interdit toute
                      devalorisation de son propre physique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>La gratitude attire les bienfaits :</strong>{" "}
                      Allah promet d&apos;augmenter Ses bienfaits pour celui
                      qui est reconnaissant : &laquo;&nbsp;Si vous etes
                      reconnaissants, Je vous augmenterai&nbsp;&raquo; (Ibrahim,
                      14:7).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Contre la culture du complexe :</strong> la doua
                      du miroir s&apos;oppose aux standards de beaute
                      artificiels en ancrant le musulman dans la satisfaction
                      de ce qu&apos;Allah lui a accorde. Decouvrez la{" "}
                      <Link href="/doua-nouveau-vetement-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua du nouveau vetement</Link>{" "}
                      pour completer vos invocations liees a l&apos;apparence.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Beaute interieure vs exterieure */}
              {/* ============================================ */}
              <section id="beaute-interieure-exterieure" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Beaute interieure et beaute exterieure : l&apos;equilibre islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;islam ne rejette pas la beaute physique ni le soin de
                  l&apos;apparence. Au contraire, le Prophete (paix et salut
                  sur lui) encourageait la proprete, le bon parfum, les
                  vetements soignes et une apparence agreable. Mais il
                  subordonnait toujours la beaute exterieure a la beaute
                  interieure, etablissant une hierarchie claire dans les
                  priorites du croyant.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un hadith rapporte par Muslim illustre parfaitement cette
                  vision. Un homme vint voir le Prophete (paix et salut sur
                  lui) et dit : &laquo;&nbsp;L&apos;homme aime que son vetement
                  soit beau et que sa chaussure soit belle.&nbsp;&raquo; Le
                  Prophete repondit : &laquo;&nbsp;Allah est Beau et Il aime
                  la beaute. L&apos;orgueil, c&apos;est de rejeter la verite
                  et de mepriser les gens.&nbsp;&raquo; Cette reponse
                  prophetique distingue clairement entre le soin legitime de
                  l&apos;apparence et l&apos;orgueil condamnable.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Beaute exterieure (khalq)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Don d&apos;Allah recu sans effort. Soigner son apparence
                      est recommande (sunna) : proprete, bon parfum, vetements
                      soignes. Ne doit jamais mener a l&apos;orgueil ni au
                      mepris des autres. Est un bienfait qui appelle la
                      gratitude et le remerciement envers le Createur.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Beaute interieure (khuluq)
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Fruit d&apos;un effort constant et d&apos;une lutte
                      contre les penchants negatifs de l&apos;ame. Le bon
                      caractere est la chose la plus lourde dans la balance du
                      Jour du Jugement. C&apos;est la beaute veritable que le
                      musulman doit rechercher en priorite et qui illumine le
                      visage de son porteur.
                    </p>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  La doua du miroir unit ces deux dimensions en un seul instant
                  : le croyant voit sa beaute exterieure (khalq) et demande
                  immediatement la beaute interieure (khuluq). Ce reflexe
                  spirituel, repete quotidiennement, forge une conscience
                  permanente de la vraie valeur de l&apos;individu aux yeux
                  d&apos;Allah. Car au Jour du Jugement, ce n&apos;est pas le
                  visage qui sera interroge, mais le coeur et les actes. Le
                  musulman qui recite cette doua le sait et s&apos;y prepare.
                  Pour d&apos;autres invocations liees aux gestes quotidiens,
                  decouvrez la{" "}
                  <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en sortant de la maison</Link>.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Douas complementaires */}
              {/* ============================================ */}
              <section id="douas-complementaires" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Douas complementaires pour le quotidien du musulman
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La doua du miroir s&apos;inscrit dans un ensemble plus large
                  d&apos;invocations que le musulman recite tout au long de sa
                  journee. Chaque geste quotidien &mdash; s&apos;habiller,
                  sortir, manger, dormir &mdash; possede sa propre invocation
                  qui transforme l&apos;ordinaire en adoration. Voici des douas
                  complementaires liees a l&apos;apparence et aux soins
                  personnels.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua en enfilant un nouveau vetement
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Al-hamdulillahi lladhi kasani hadha wa razaqanihi min ghayri hawlin minni wa la quwwatin
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;Louange a Allah qui m&apos;a vetu de ceci et
                    me l&apos;a accorde sans aucune force ni puissance de ma
                    part.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Abu Dawud (4023) et at-Tirmidhi (3458)
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua pour demander le bon caractere
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ اهْدِنِي لِأَحْسَنِ الْأَخْلَاقِ لَا يَهْدِي لِأَحْسَنِهَا إِلَّا أَنْتَ وَاصْرِفْ عَنِّي سَيِّئَهَا لَا يَصْرِفُ عَنِّي سَيِّئَهَا إِلَّا أَنْتَ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Allahumma-hdini li ahsanil-akhlaqi la yahdi li ahsaniha illa Anta, wasrif &apos;anni sayyi&apos;aha la yasrifu &apos;anni sayyi&apos;aha illa Anta
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;O Allah, guide-moi vers les meilleurs
                    caracteres, nul ne guide vers les meilleurs caracteres
                    si ce n&apos;est Toi. Et ecarte de moi les mauvais
                    caracteres, nul ne les ecarte si ce n&apos;est Toi.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par Muslim (771), doua d&apos;ouverture de la priere
                  </p>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Doua de protection contre le mauvais caractere
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-white p-6">
                  <p className="text-right text-2xl leading-loose text-primary" dir="rtl">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ مُنْكَرَاتِ الْأَخْلَاقِ وَالْأَعْمَالِ وَالْأَهْوَاءِ
                  </p>
                  <p className="mt-3 text-base italic text-foreground-secondary">
                    Allahumma inni a&apos;udhu bika min munkaratil-akhlaqi wal-a&apos;mali wal-ahwa&apos;i
                  </p>
                  <p className="mt-2 text-base text-foreground">
                    &laquo;&nbsp;O Allah, je cherche refuge aupres de Toi
                    contre les mauvais caracteres, les mauvaises actions et
                    les mauvais desirs.&nbsp;&raquo;
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    Rapporte par at-Tirmidhi (3591)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ces invocations complementaires montrent l&apos;importance
                  que l&apos;islam accorde au perfectionnement du caractere. Le
                  musulman ne se contente pas de demander le bon caractere devant
                  le miroir : il le demande aussi dans sa priere, dans ses
                  invocations du matin et du soir, et a chaque occasion. Cette
                  repetition constante temoigne de la difficulte de cette quete
                  et de la necessite de l&apos;aide divine pour y parvenir.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour integrer la doua du miroir au quotidien
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Transformer la doua du miroir en habitude quotidienne
                  demande un effort conscient au debut, avant de devenir un
                  reflexe naturel. Voici des conseils pratiques pour integrer
                  cette sunna dans votre routine et en tirer le maximum de
                  benefice spirituel.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Memorisez la formule la plus courte
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Commencez par la version la plus simple :
                        &laquo;&nbsp;Allahumma ahsanta khalqi fa ahsin
                        khuluqi&nbsp;&raquo;. Cette formule est courte, facile
                        a retenir et contient l&apos;essentiel du message.
                        Repetez-la plusieurs fois jusqu&apos;a la connaitre
                        par coeur avant de passer aux versions plus longues.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Placez un rappel pres de votre miroir
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Un petit adhesif ou un post-it avec le texte de la doua
                        pres de votre miroir principal peut servir de rappel
                        pendant les premieres semaines. Avec le temps, la
                        recitation deviendra automatique des que vos yeux
                        croiseront votre reflet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Meditez sur le sens pendant la recitation
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ne recitez pas la doua comme une formule vide. Prenez
                        un instant pour reflechir : &laquo;&nbsp;Allah m&apos;a
                        donne cette apparence, je Lui en suis reconnaissant.
                        Mais mon caractere est-il aussi beau que mon
                        visage ?&nbsp;&raquo; Cette reflexion donne a la doua
                        toute sa profondeur et son efficacite spirituelle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Enseignez-la a vos enfants
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Apprendre cette doua aux enfants des leur plus jeune
                        age les aide a developper une relation saine avec leur
                        apparence et a comprendre que la beaute interieure
                        prime sur l&apos;exterieur. C&apos;est un outil
                        educatif puissant contre les complexes physiques.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Combinez avec d&apos;autres sunnan du matin
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Integrez la doua du miroir dans votre routine matinale
                        avec les autres invocations du matin, la doua en
                        s&apos;habillant et la{" "}
                        <Link href="/doua-sortir-maison-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">doua en sortant de la maison</Link>.
                        Cet enchainement cree un rituel spirituel complet qui
                        sanctifie le debut de chaque journee.
                      </p>
                    </div>
                  </div>
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Doua du nouveau vetement en islam"
                  description="Decouvrez l&apos;invocation a reciter en enfilant un nouveau vetement et la sunna prophetique liee a l&apos;habillement."
                  href="/doua-nouveau-vetement-islam"
                />
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <AffiliateForm
                title="Apprenez l&apos;arabe pour comprendre les invocations dans leur langue originale"
                description="Maitrisez la langue du Coran pour reciter les douas avec comprehension et profondeur spirituelle. Decouvrez nos formations en ligne adaptees a tous les niveaux."
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
                    href="/doua-nouveau-vetement-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua du nouveau vetement
                  </Link>
                  <Link
                    href="/doua-sortir-maison-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua en sortant de la maison
                  </Link>
                </div>
              </section>

              {/* Navigation vers pages meres */}
              <section className="mt-6 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Sur le meme sujet
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
