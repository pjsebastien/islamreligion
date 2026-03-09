import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import HadithCard from "@/components/HadithCard";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";
import AffiliateForm from "@/components/AffiliateForm";

export const metadata: Metadata = {
  title:
    "Doua du voyageur en islam : les invocations authentiques du safar",
  description:
    "Toutes les doua du voyageur en islam : invocation en montant dans le véhicule, doua de voyage complète, doua au retour et pour confier sa famille. Textes en arabe, phonétique et traduction.",
  openGraph: {
    title:
      "Doua du voyageur en islam : les invocations authentiques du safar",
    description:
      "Toutes les doua du voyageur en islam : invocation en montant dans le véhicule, doua de voyage complète, doua au retour et pour confier sa famille. Textes en arabe, phonétique et traduction.",
    url: "https://www.islamreligion.fr/doua-voyageur-safar-islam",
    images: [
      {
        url: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "https://www.islamreligion.fr/doua-voyageur-safar-islam",
  },
};

const tocItems = [
  { id: "voyage-islam", label: "Le voyage en islam et sa dimension spirituelle" },
  { id: "doua-vehicule", label: "Doua en montant dans le véhicule" },
  { id: "doua-voyage-complete", label: "Doua de voyage complète" },
  { id: "doua-retour", label: "Doua au retour du voyage" },
  { id: "confier-famille", label: "Doua pour confier sa famille" },
  { id: "doua-exaucee", label: "La doua du voyageur est exaucée" },
  { id: "conseils-pratiques", label: "Conseils pratiques pour le voyageur musulman" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question:
      "Quelle est la doua du voyageur en islam ?",
    answer:
      "La doua du voyageur la plus connue est celle rapportée par Muslim : on dit trois fois Allahu Akbar, puis on récite \"SubhanAllahi alladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun\" (Gloire à Celui qui a mis ceci à notre service, alors que nous n&apos;étions pas capables de le dominer, et c&apos;est vers notre Seigneur que nous retournerons). On ajoute ensuite des invocations pour le bien du voyage, la piété et les actes agréés par Allah.",
  },
  {
    question:
      "Quand faut-il réciter la doua du voyage ?",
    answer:
      "La doua du voyage se récite au moment de monter dans le moyen de transport (voiture, avion, train, bateau, etc.) et de s&apos;installer pour le départ. Le Prophète (paix et salut sur lui) ne la récitait qu&apos;une fois installé sur sa monture, comme l&apos;indiquent les hadiths d&apos;Ibn Omar rapportés par Muslim. Il est recommandé de la dire à chaque nouveau voyage.",
  },
  {
    question:
      "La doua du voyageur est-elle exaucée ?",
    answer:
      "Oui, la doua du voyageur fait partie des invocations qui ne sont pas rejetées. Le Prophète (paix et salut sur lui) a dit : \"Trois invocations sont exaucées sans aucun doute : l&apos;invocation du voyageur, l&apos;invocation de l&apos;opprimé et l&apos;invocation du père pour son enfant\" (rapporté par at-Tirmidhi et Ibn Majah). Le voyageur doit donc profiter de ce moment béni pour multiplier les supplications.",
  },
  {
    question:
      "Peut-on réciter la doua du voyageur en français ?",
    answer:
      "Il est tout à fait permis de faire des invocations en français ou dans toute autre langue, car Allah comprend toutes les langues. Cependant, il est recommandé d&apos;apprendre la formulation arabe originale telle que transmise par le Prophète (paix et salut sur lui) pour suivre la Sunna au plus près. On peut combiner les deux : réciter en arabe puis invoquer librement dans sa langue.",
  },
  {
    question:
      "Quelle doua dire en montant en voiture ?",
    answer:
      "En montant en voiture, on dit \"Bismillah\" (Au nom d&apos;Allah), puis une fois installé on récite : \"SubhanAllahi alladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila Rabbina lamunqalibun\" (Gloire à Celui qui a mis ceci à notre service, alors que nous n&apos;étions pas capables de le dominer). Cette invocation tirée de la sourate Az-Zukhruf (43:13-14) s&apos;applique à tout moyen de transport.",
  },
  {
    question:
      "Que dire quand on revient de voyage en islam ?",
    answer:
      "Au retour du voyage, le Prophète (paix et salut sur lui) disait : \"Ayibuna, ta&apos;ibuna, &apos;abiduna, li Rabbina hamidun\" (Nous voici de retour, repentants, adorateurs, louant notre Seigneur). Il répétait cette formule à chaque côte ou élévation rencontrée sur le chemin du retour, comme rapporté par al-Bukhari et Muslim.",
  },
  {
    question:
      "Quelle doua réciter pour confier sa famille avant un voyage ?",
    answer:
      "Avant de partir en voyage, il est recommandé de dire à ses proches : \"Astawdi&apos;ukumullaha alladhi la tadi&apos;u wada&apos;i&apos;uh\" (Je vous confie à Allah dont les dépôts ne se perdent jamais). Cette invocation est rapportée par Ahmad et Ibn Majah. De même, les proches qui restent peuvent dire au voyageur : \"Astawdi&apos;ullaha dinaka wa amanataka wa khawatima &apos;amalika\" (Je confie à Allah ta religion, ton dépôt et tes dernières actions).",
  },
];

export default function DouaVoyageurSafar() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/doua-voyageur-safar-islam/#article",
        headline:
          "Doua du voyageur en islam : les invocations authentiques du safar",
        description:
          "Toutes les doua du voyageur en islam : invocation en montant dans le véhicule, doua de voyage complète, doua au retour et pour confier sa famille.",
        image: "/images/doua-mains-ouvertes-rayons-dores.jpg",
        datePublished: "2026-03-09",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/doua-voyageur-safar-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/doua-voyageur-safar-islam/#breadcrumb",
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
            name: "Doua du voyageur",
            item: "https://www.islamreligion.fr/doua-voyageur-safar-islam",
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
          title="Doua du voyageur en islam : les invocations authentiques du safar"
          subtitle="Les invocations prophétiques pour le voyage, le retour et la protection de la famille, en arabe avec phonétique et traduction."
          imageSrc="/images/doua-mains-ouvertes-rayons-dores.jpg"
          imageAlt="Mains ouvertes en invocation avec rayons dorés pour la doua du voyageur en islam"
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
                <span className="text-foreground">Doua du voyageur</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le voyage (safar) occupe une place particulière en islam. Le
                  Prophète (paix et salut sur lui) a transmis des invocations
                  précises pour chaque étape du déplacement : en montant dans
                  le véhicule, pendant le trajet, au retour et même pour
                  confier sa famille avant le départ. Mieux encore, la{" "}
                  <strong>doua du voyageur</strong> fait partie des
                  invocations qui ne sont pas rejetées par Allah. Découvrez
                  toutes ces du&apos;as authentiques en arabe, avec leur
                  phonétique et leur traduction.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Le voyage en islam */}
              {/* ============================================ */}
              <section id="voyage-islam" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le voyage en islam et sa dimension spirituelle
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le voyage (as-safar) est bien plus qu&apos;un simple
                  déplacement physique dans la tradition islamique. Il
                  constitue une expérience spirituelle à part entière, un
                  moment où le croyant quitte le confort de son foyer pour
                  s&apos;en remettre pleinement à la protection d&apos;Allah.
                  Cette vulnérabilité du voyageur lui confère un statut
                  particulier dans la jurisprudence islamique : des
                  allègements dans la prière, la possibilité de rompre le
                  jeûne du Ramadan, et surtout une proximité accrue avec
                  Allah dans l&apos;invocation.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Coran mentionne le voyage à de nombreuses reprises,
                  tantôt comme une épreuve, tantôt comme une bénédiction.
                  Allah dit dans la sourate Al-Mulk (67:15) :
                  &laquo;&nbsp;C&apos;est Lui qui vous a rendu la terre
                  docile. Marchez donc dans ses sentiers et mangez de ce
                  qu&apos;Il fournit&nbsp;&raquo;. Ce verset invite le
                  croyant à parcourir la terre avec confiance, sachant que
                  chaque pas est sous la surveillance divine. Le voyage
                  devient ainsi un acte de tawakkul (confiance en Allah) et
                  une occasion de méditer sur la grandeur du Créateur.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a lui-même
                  beaucoup voyagé : de la hijra vers Médine aux expéditions
                  militaires, du pèlerinage aux visites des tribus arabes.
                  À chacun de ces voyages, il enseignait à ses compagnons
                  les invocations appropriées et les règles de conduite du
                  voyageur musulman. Ces enseignements nous sont parvenus à
                  travers des hadiths authentiques qui constituent un
                  véritable guide pratique pour{" "}
                  <Link
                    href="/priere-voyageur-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    la prière du voyageur
                  </Link>{" "}
                  et les invocations du safar.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un statut juridique spécial :</strong> le
                      voyageur bénéficie de facilités dans la prière
                      (raccourcissement et regroupement), le jeûne et les
                      ablutions, témoignant de la miséricorde d&apos;Allah
                      envers celui qui se déplace.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une école de patience :</strong> les
                      difficultés du voyage (fatigue, éloignement,
                      incertitudes) renforcent la patience (sabr) et la
                      gratitude (shukr) du croyant envers son Seigneur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Un moment d&apos;invocation privilégié :</strong>{" "}
                      le Prophète (paix et salut sur lui) a enseigné que la
                      doua du voyageur est parmi celles qui ne sont pas
                      rejetées, faisant du safar une occasion unique de
                      supplication.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Une occasion de contemplation :</strong> la
                      découverte de nouveaux paysages et de nouvelles
                      cultures rappelle au croyant l&apos;immensité de la
                      création divine et nourrit sa foi.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Voyageur musulman en invocation avant le départ"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <HadithCard
                  arabic="السَّفَرُ قِطْعَةٌ مِنَ الْعَذَابِ يَمْنَعُ أَحَدَكُمْ طَعَامَهُ وَشَرَابَهُ وَنَوْمَهُ فَإِذَا قَضَى نَهْمَتَهُ فَلْيُعَجِّلْ إِلَى أَهْلِهِ"
                  text="Le voyage est un morceau de châtiment : il prive l&apos;un d&apos;entre vous de sa nourriture, de sa boisson et de son sommeil. Lorsque l&apos;un d&apos;entre vous a terminé ce qu&apos;il avait à faire, qu&apos;il se hâte de rentrer auprès de sa famille."
                  source="Rapporté par al-Bukhari et Muslim, d&apos;après Abu Hurayra"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Doua en montant dans le véhicule */}
              {/* ============================================ */}
              <section id="doua-vehicule" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua en montant dans le véhicule
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La première invocation du voyageur se récite au moment de
                  monter dans le moyen de transport, que ce soit une voiture,
                  un avion, un train ou un bateau. Cette{" "}
                  <strong>doua du voyageur</strong> est tirée directement du
                  Coran, de la sourate Az-Zukhruf (43:13-14). Elle rappelle
                  au croyant que tout moyen de transport est un bienfait
                  d&apos;Allah et que l&apos;homme, par sa propre force,
                  serait incapable de dominer ces créatures ou ces machines.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn Omar (qu&apos;Allah soit satisfait de lui) rapporte que
                  le Prophète (paix et salut sur lui), lorsqu&apos;il montait
                  sur sa chamelle pour partir en voyage, prononçait trois
                  fois &laquo;&nbsp;Allahu Akbar&nbsp;&raquo; puis récitait
                  cette invocation. Ce geste simple mais profond transforme
                  chaque déplacement en un acte d&apos;adoration et de
                  reconnaissance envers le Créateur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;invocation coranique du transport (Az-Zukhruf 43:13-14)
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ
                    مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> SubhanAllahi alladhi
                    sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna
                    ila Rabbina lamunqalibun.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Gloire à Celui qui a mis ceci à notre
                    service, alors que nous n&apos;étions pas capables de le
                    dominer. Et c&apos;est vers notre Seigneur que nous
                    retournerons.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Sourate Az-Zukhruf, versets 13-14 — Rapporté par Muslim
                    (1342) et at-Tirmidhi (3446)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est remarquable par sa profondeur
                  théologique. En disant &laquo;&nbsp;SubhanAllah&nbsp;&raquo;
                  (Gloire à Allah), le voyageur reconnaît la perfection
                  divine. En affirmant &laquo;&nbsp;sakhkhara lana
                  hadha&nbsp;&raquo; (Il a mis ceci à notre service), il
                  exprime sa gratitude pour les moyens de transport
                  qu&apos;Allah a rendus accessibles à l&apos;homme. Enfin,
                  en concluant par &laquo;&nbsp;inna ila Rabbina
                  lamunqalibun&nbsp;&raquo; (nous retournerons à notre
                  Seigneur), il se rappelle que tout voyage terrestre
                  n&apos;est qu&apos;une étape du voyage ultime vers
                  l&apos;au-delà.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants expliquent que le mot
                  &laquo;&nbsp;muqrinin&nbsp;&raquo; signifie &laquo;&nbsp;capables
                  de maîtriser&nbsp;&raquo;. Sans la grâce d&apos;Allah,
                  l&apos;homme serait incapable de dompter un cheval, de
                  piloter un avion ou de conduire un véhicule. Cette prise
                  de conscience protège le croyant de l&apos;orgueil et
                  renforce son lien avec{" "}
                  <Link
                    href="/doua-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    la pratique de la doua en islam
                  </Link>
                  .
                </p>
              </section>

              <ArticleCTA
                variant="formation"
                title="Apprenez l&apos;arabe pour comprendre vos invocations"
                description="Maîtrisez la langue du Coran pour réciter vos du&apos;as avec compréhension et profondeur spirituelle."
                href="/apprendre-larabe"
              />

              {/* ============================================ */}
              {/* SECTION 3 : Doua de voyage complète */}
              {/* ============================================ */}
              <section id="doua-voyage-complete" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua de voyage complète
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Après avoir récité l&apos;invocation du transport, le
                  Prophète (paix et salut sur lui) enchaînait avec une
                  invocation plus complète qui couvre tous les aspects du
                  voyage. Ce hadith rapporté par Muslim d&apos;après
                  Abdullah ibn Omar décrit la séquence complète que le
                  Prophète suivait systématiquement avant chaque départ.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  La séquence complète du Prophète (paix et salut sur lui)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) commençait par dire
                  trois fois &laquo;&nbsp;Allahu Akbar&nbsp;&raquo; (Allah
                  est le plus Grand), puis il récitait l&apos;invocation du
                  transport (Az-Zukhruf 43:13-14), avant d&apos;ajouter
                  l&apos;invocation suivante :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ
                    وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى، اللَّهُمَّ
                    هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ،
                    اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ وَالْخَلِيفَةُ
                    فِي الْأَهْلِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ وَعْثَاءِ
                    السَّفَرِ وَكَآبَةِ الْمَنْظَرِ وَسُوءِ الْمُنْقَلَبِ فِي
                    الْمَالِ وَالْأَهْلِ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Allahumma inna nas&apos;aluka
                    fi safarina hadha al-birra wat-taqwa, wa minal-&apos;amali
                    ma tarda. Allahumma hawwin &apos;alayna safarana hadha
                    watw&apos;i &apos;anna bu&apos;dah. Allahumma Antas-sahibu
                    fis-safari wal-khalifatu fil-ahl. Allahumma inni
                    a&apos;udhu bika min wa&apos;tha&apos;is-safari wa
                    ka&apos;abatil-manzari wa su&apos;il-munqalabi fil-mali
                    wal-ahl.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;O Allah, nous Te demandons dans ce voyage la
                    piété, la crainte révérencielle et les actes dont Tu es
                    satisfait. O Allah, facilite-nous ce voyage et
                    rapproche-nous de sa distance. O Allah, Tu es le
                    Compagnon de voyage et le Remplaçant auprès de la
                    famille. O Allah, je cherche refuge auprès de Toi contre
                    les difficultés du voyage, la tristesse du retour et la
                    mauvaise issue concernant les biens et la
                    famille.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (1342), d&apos;après Abdullah ibn Omar
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une richesse exceptionnelle.
                  Elle se décompose en quatre demandes essentielles que tout
                  voyageur musulman devrait méditer :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&laquo;&nbsp;Al-birra wat-taqwa&nbsp;&raquo; :</strong>{" "}
                      demander la piété et la crainte d&apos;Allah pendant le
                      voyage, car l&apos;éloignement du foyer peut parfois
                      relâcher la vigilance spirituelle du croyant.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&laquo;&nbsp;Hawwin &apos;alayna&nbsp;&raquo; :</strong>{" "}
                      demander la facilité dans le voyage, que la distance
                      paraisse courte et que les obstacles soient levés. Une
                      demande qui rejoint les{" "}
                      <Link
                        href="/invocations-reussite-facilite"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        invocations pour la facilité en islam
                      </Link>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&laquo;&nbsp;As-sahibu fis-safari&nbsp;&raquo; :</strong>{" "}
                      reconnaître Allah comme le Compagnon du voyage et le
                      Protecteur de la famille restée au foyer. Le croyant
                      n&apos;est jamais seul car Allah est avec lui.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&laquo;&nbsp;A&apos;udhu bika&nbsp;&raquo; :</strong>{" "}
                      se réfugier auprès d&apos;Allah contre les difficultés
                      du voyage, la tristesse au retour (trouver ses biens
                      ou sa famille dans un mauvais état) et toute mauvaise
                      issue.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  Ibn al-Qayyim (rahimahullah) commente cette invocation en
                  soulignant que le Prophète (paix et salut sur lui) a
                  rassemblé dans cette seule du&apos;a tout ce dont le
                  voyageur a besoin : la protection spirituelle, la facilité
                  matérielle, la sécurité de la famille et la réussite du
                  retour. C&apos;est une invocation complète qui ne laisse
                  rien au hasard, comme l&apos;expliquent les savants dans
                  leurs commentaires des adhkar du voyage.
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Doua au retour du voyage */}
              {/* ============================================ */}
              <section id="doua-retour" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua au retour du voyage
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Le retour du voyage est également un moment codifié par la
                  Sunna. Le Prophète (paix et salut sur lui) ne se contentait
                  pas d&apos;invoquer au départ ; il avait aussi des
                  invocations spécifiques pour le chemin du retour. Ces
                  du&apos;as expriment la gratitude envers Allah pour la
                  protection accordée pendant le voyage et renouvellent
                  l&apos;engagement du croyant dans l&apos;adoration et le
                  repentir.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;invocation du retour
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque le Prophète (paix et salut sur lui) revenait de
                  voyage, il récitait la même invocation qu&apos;au départ
                  (les takbirat et la doua de voyage), puis il ajoutait les
                  paroles suivantes :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Ayibuna, ta&apos;ibuna,
                    &apos;abiduna, li Rabbina hamidun.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Nous voici de retour, repentants, adorateurs
                    de notre Seigneur et Le louant.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par al-Bukhari (1797) et Muslim (1342)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Anas ibn Malik (qu&apos;Allah soit satisfait de lui)
                  rapporte que le Prophète (paix et salut sur lui) répétait
                  cette formule à chaque élévation ou côte rencontrée sur le
                  chemin du retour. Ce geste de répétition traduit
                  l&apos;intensité de la joie et de la gratitude du voyageur
                  qui retrouve les siens sain et sauf. Il associe quatre
                  qualités essentielles du croyant de retour :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ayibun (de retour) :</strong> la reconnaissance
                      du bienfait d&apos;être revenu en sécurité, car tout
                      voyage comporte des risques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ta&apos;ibun (repentant) :</strong> le voyage
                      est aussi une occasion de{" "}
                      <Link
                        href="/repentir-sincere-islam-tawba"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        repentir sincère (tawba)
                      </Link>
                      , le croyant revient purifié et renouvelé dans sa foi.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>&apos;Abidun (adorateur) :</strong>{" "}
                      l&apos;engagement renouvelé dans l&apos;adoration
                      d&apos;Allah après le voyage, sans relâchement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Hamidun (louant Allah) :</strong> la louange
                      permanente pour tous les bienfaits reçus pendant le
                      voyage et le retour en sécurité.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;invocation en apercevant sa ville
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Il est également rapporté que le Prophète (paix et salut
                  sur lui), lorsqu&apos;il apercevait les murs de Médine au
                  retour d&apos;un voyage, accélérait le pas de sa monture
                  par amour pour sa ville. Ce comportement illustre
                  l&apos;attachement légitime du musulman à son foyer et à
                  sa communauté, tout en maintenant le lien avec Allah par
                  l&apos;invocation.
                </p>

                <HadithCard
                  arabic="صَدَقَ اللَّهُ وَعْدَهُ وَنَصَرَ عَبْدَهُ وَهَزَمَ الْأَحْزَابَ وَحْدَهُ"
                  text="Allah a tenu Sa promesse, a soutenu Son serviteur et a vaincu les coalisés Seul."
                  source="Rapporté par al-Bukhari (2995) et Muslim (1344), le Prophète disait cela en plus de la doua de retour"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Doua pour confier sa famille */}
              {/* ============================================ */}
              <section id="confier-famille" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Doua pour confier sa famille avant le départ
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;une des plus belles pratiques du voyageur musulman
                  est de confier sa famille et ses proches à Allah avant de
                  partir. Cette doua exprime la confiance absolue en la
                  protection divine et rassure les proches qui restent. Le
                  Prophète (paix et salut sur lui) a enseigné des formules
                  précises pour ce moment d&apos;adieu chargé d&apos;émotion.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;invocation du voyageur pour ses proches
                </h3>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    أَسْتَوْدِعُكُمُ اللَّهَ الَّذِي لَا تَضِيعُ وَدَائِعُهُ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astawdi&apos;ukumullaha
                    alladhi la tadi&apos;u wada&apos;i&apos;uh.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je vous confie à Allah dont les dépôts ne se
                    perdent jamais.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Ahmad et Ibn Majah, d&apos;après Abdullah ibn
                    Omar
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Cette invocation est d&apos;une beauté et d&apos;une
                  profondeur remarquables. Le mot
                  &laquo;&nbsp;wada&apos;i&apos;&nbsp;&raquo; (dépôts)
                  signifie que la famille confiée à Allah est comme un dépôt
                  sacré placé sous Sa garde. Et Allah, le Gardien parfait,
                  ne laisse jamais perdre ce qui Lui est confié. Cette
                  certitude doit accompagner le voyageur tout au long de son
                  déplacement et apaiser son coeur quant à la sécurité de
                  ceux qu&apos;il a laissés derrière lui.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  L&apos;invocation des proches pour le voyageur
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  De leur côté, les proches qui restent peuvent réciter
                  l&apos;invocation suivante pour le voyageur :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ
                    عَمَلِكَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> Astawdi&apos;ullaha dinaka
                    wa amanataka wa khawatima &apos;amalika.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je confie à Allah ta religion, ce qui
                    t&apos;est confié et tes dernières
                    actions.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par at-Tirmidhi (3443) et Abu Dawud (2600)
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam an-Nawawi (rahimahullah) explique que cette
                  invocation est particulièrement complète car elle confie à
                  Allah les trois choses les plus précieuses du voyageur : sa
                  religion (qu&apos;il puisse rester pieux pendant le
                  voyage), ses dépôts (ses biens et ses responsabilités) et
                  ses dernières actions (qu&apos;il termine son voyage sur
                  une bonne action). La mention des
                  &laquo;&nbsp;khawatim&nbsp;&raquo; (dernières actions) est
                  particulièrement poignante car elle rappelle que nul ne sait
                  s&apos;il reviendra de son voyage.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="/images/doua-mains-ouvertes-rayons-dores.jpg"
                    alt="Famille musulmane se disant au revoir avant un voyage avec invocations"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il est également recommandé au voyageur de demander aux
                  personnes pieuses de son entourage de faire des invocations
                  en sa faveur. Le Prophète (paix et salut sur lui) a dit à
                  Omar ibn al-Khattab (qu&apos;Allah soit satisfait de lui)
                  lorsque celui-ci l&apos;informa de son intention de faire
                  la &apos;umra : &laquo;&nbsp;Ne nous oublie pas dans tes
                  invocations, ô mon frère&nbsp;&raquo; (rapporté par Abu
                  Dawud et at-Tirmidhi). Cette recommandation montre
                  l&apos;importance de la solidarité dans la du&apos;a entre
                  les musulmans.
                </p>

                <ArticleCTA
                  variant="lire-aussi"
                  title="La prière du voyageur : raccourcissement et conditions"
                  description="Découvrez comment raccourcir et regrouper vos prières en voyage selon les quatre écoles juridiques."
                  href="/priere-voyageur-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : La doua du voyageur est exaucée */}
              {/* ============================================ */}
              <section id="doua-exaucee" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  La doua du voyageur est exaucée
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  L&apos;un des mérites les plus extraordinaires du voyage en
                  islam est que l&apos;invocation du voyageur fait partie des
                  du&apos;as qui ne sont pas rejetées par Allah. Cette
                  promesse prophétique fait du safar une occasion unique de
                  supplications que le musulman doit saisir pleinement.
                </p>

                <HadithCard
                  arabic="ثَلَاثُ دَعَوَاتٍ مُسْتَجَابَاتٌ لَا شَكَّ فِيهِنَّ: دَعْوَةُ الْمَظْلُومِ، وَدَعْوَةُ الْمُسَافِرِ، وَدَعْوَةُ الْوَالِدِ عَلَى وَلَدِهِ"
                  text="Trois invocations sont exaucées sans aucun doute : l&apos;invocation de l&apos;opprimé, l&apos;invocation du voyageur et l&apos;invocation du père pour son enfant."
                  source="Rapporté par at-Tirmidhi (1905) et Ibn Majah (3862), d&apos;après Abu Hurayra"
                />

                <p className="mt-6 leading-relaxed text-foreground">
                  Ce hadith place la doua du voyageur au même rang que
                  l&apos;invocation de l&apos;opprimé, dont la puissance est
                  unanimement reconnue par les savants. L&apos;imam
                  al-Mubarakfuri explique dans son commentaire de Sunan
                  at-Tirmidhi que le voyageur est en état de vulnérabilité,
                  d&apos;humilité et de besoin, ce qui rend son c&oelig;ur
                  plus réceptif et son invocation plus sincère. Pour en
                  savoir plus sur la puissance de l&apos;invocation de
                  l&apos;opprimé, consultez notre article sur{" "}
                  <Link
                    href="/doua-opprime-islam"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    la doua de l&apos;opprimé en islam
                  </Link>
                  .
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les savants ont déduit de ce hadith plusieurs enseignements
                  pratiques pour le voyageur musulman :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Multiplier les invocations :</strong> puisque
                      la du&apos;a du voyageur est exaucée, il convient de
                      profiter de chaque instant du voyage pour invoquer
                      Allah, pour soi-même, pour sa famille et pour
                      l&apos;ensemble des musulmans.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Invoquer avec conviction :</strong> le Prophète
                      (paix et salut sur lui) a enseigné d&apos;invoquer
                      avec la certitude d&apos;être exaucé, sans hésitation
                      ni doute dans le c&oelig;ur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Demander aux voyageurs d&apos;invoquer :</strong>{" "}
                      les compagnons avaient l&apos;habitude de demander à
                      celui qui partait en voyage de faire des du&apos;as en
                      leur faveur, profitant ainsi de ce statut béni.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas limiter ses demandes :</strong> le
                      voyageur peut invoquer pour toutes ses préoccupations,
                      qu&apos;elles soient matérielles, spirituelles,
                      familiales ou communautaires.
                    </span>
                  </li>
                </ul>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;imam Ibn Rajab al-Hanbali ajoute que la condition
                  pour que la doua du voyageur soit exaucée est la même que
                  pour toute invocation : la sincérité envers Allah, la
                  nourriture licite (halal) et la présence du c&oelig;ur au
                  moment de l&apos;invocation. Le voyage en lui-même ne
                  suffit pas si le c&oelig;ur est distrait ou si la
                  subsistance du voyageur provient de sources illicites,
                  comme l&apos;a rappelé le Prophète (paix et salut sur lui)
                  dans le célèbre hadith de l&apos;homme aux cheveux
                  ébouriffés et couvert de poussière du voyage (rapporté par
                  Muslim).
                </p>

                <HadithCard
                  text="Le Prophète (paix et salut sur lui) a mentionné l&apos;homme qui prolonge son voyage, les cheveux ébouriffés, couvert de poussière, levant les mains au ciel en disant : O Seigneur ! O Seigneur ! Alors que sa nourriture est illicite, sa boisson est illicite, ses vêtements sont illicites et qu&apos;il s&apos;est nourri d&apos;illicite. Comment serait-il exaucé ?"
                  source="Rapporté par Muslim (1015), d&apos;après Abu Hurayra"
                />

                <p className="mt-4 leading-relaxed text-foreground">
                  Ce hadith rappelle que même le statut privilégié du
                  voyageur ne dispense pas des conditions générales
                  d&apos;acceptation de la du&apos;a. Le voyageur doit
                  veiller à ce que sa nourriture, ses revenus et ses
                  vêtements soient licites (halal) pour que ses invocations
                  soient exaucées. Pour approfondir ce sujet, consultez
                  notre guide sur{" "}
                  <Link
                    href="/halal-haram-criteres"
                    className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    les critères du halal et du haram en islam
                  </Link>
                  .
                </p>
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Conseils pratiques */}
              {/* ============================================ */}
              <section id="conseils-pratiques" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conseils pratiques pour le voyageur musulman
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  Au-delà des invocations spécifiques, la Sunna du Prophète
                  (paix et salut sur lui) contient de nombreuses
                  recommandations pratiques pour le voyageur musulman. Ces
                  conseils, transmis depuis plus de quatorze siècles,
                  restent d&apos;une pertinence remarquable et permettent
                  de transformer chaque voyage en une expérience spirituelle
                  enrichissante.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Avant le départ
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prier la salat al-istikhara :</strong> avant
                      tout voyage important, il est recommandé de consulter
                      Allah par la{" "}
                      <Link
                        href="/istikhara-priere-consultation"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        prière de consultation (istikhara)
                      </Link>{" "}
                      pour s&apos;assurer que ce voyage est bénéfique.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rembourser ses dettes :</strong> le Prophète
                      (paix et salut sur lui) recommandait de régler ses
                      affaires avant de voyager, notamment les dettes et les
                      dépôts confiés par autrui.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Rédiger son testament :</strong> Ibn Omar
                      rapporte que le Prophète (paix et salut sur lui) a dit :
                      &laquo;&nbsp;Il n&apos;est pas permis à un musulman qui
                      possède quelque chose à léguer de passer deux nuits
                      sans avoir son testament écrit auprès de
                      lui&nbsp;&raquo; (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Faire ses adieux :</strong> saluer ses proches,
                      leur demander pardon et réciter les invocations
                      d&apos;adieu mentionnées plus haut.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Pendant le voyage
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Maintenir les prières :</strong> même en voyage,
                      la prière reste obligatoire. Le voyageur bénéficie du
                      raccourcissement (qasr) et du regroupement (jam&apos;)
                      des prières, comme détaillé dans notre article sur{" "}
                      <Link
                        href="/priere-voyageur-islam"
                        className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                      >
                        la prière du voyageur
                      </Link>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Dire &laquo;&nbsp;Allahu Akbar&nbsp;&raquo;
                      en montée :</strong> le Prophète (paix et salut sur lui)
                      et ses compagnons prononçaient le takbir lorsqu&apos;ils
                      montaient une côte et le tasbih (SubhanAllah)
                      lorsqu&apos;ils descendaient dans une vallée (rapporté
                      par al-Bukhari).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Voyager en groupe :</strong> le Prophète (paix
                      et salut sur lui) a dit : &laquo;&nbsp;Le cavalier seul
                      est un diable, les deux cavaliers sont deux diables, et
                      les trois sont un groupe de cavaliers&nbsp;&raquo;
                      (rapporté par at-Tirmidhi). Il est donc recommandé de
                      voyager à plusieurs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Désigner un responsable :</strong> lorsque
                      trois personnes ou plus voyagent ensemble, il est
                      recommandé de désigner un émir (responsable) du voyage
                      pour organiser les étapes et les décisions.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Doua en arrivant dans un nouveau lieu
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Lorsque le voyageur arrive dans un nouveau lieu, il est
                  recommandé de réciter cette invocation de protection :
                </p>

                <div className="mt-4 rounded-xl border border-secondary/20 bg-accent p-5">
                  <p
                    className="text-right font-arabic text-xl leading-loose text-primary"
                    dir="rtl"
                  >
                    أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا
                    خَلَقَ
                  </p>
                  <p className="mt-2 text-sm text-foreground-secondary">
                    <strong>Phonétique :</strong> A&apos;udhu bi kalimatillahi
                    at-tammati min sharri ma khalaq.
                  </p>
                  <p className="mt-2 text-foreground italic">
                    &laquo;&nbsp;Je cherche refuge auprès des paroles
                    parfaites d&apos;Allah contre le mal de ce qu&apos;Il a
                    créé.&nbsp;&raquo;
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    Rapporté par Muslim (2708), d&apos;après Khawla bint Hakim
                  </p>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et salut sur lui) a enseigné que celui
                  qui récite cette invocation en arrivant dans un lieu ne
                  sera pas atteint par un mal jusqu&apos;à ce qu&apos;il
                  quitte cet endroit. C&apos;est une protection complète
                  contre tout danger, qu&apos;il soit visible ou invisible,
                  que le voyageur descende dans un hôtel, campe en pleine
                  nature ou s&apos;installe chez un hôte.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-foreground">
                  Au retour
                </h3>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Se hâter de rentrer :</strong> comme le
                      rappelle le hadith cité plus haut, le Prophète (paix
                      et salut sur lui) recommandait de se hâter de rentrer
                      une fois ses affaires terminées, par amour pour sa
                      famille.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prier deux raka&apos;at à la mosquée :</strong>{" "}
                      Ka&apos;b ibn Malik rapporte que le Prophète (paix et
                      salut sur lui), lorsqu&apos;il revenait de voyage,
                      commençait par se rendre à la mosquée pour y prier
                      deux unités de prière avant de rentrer chez lui
                      (al-Bukhari et Muslim).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ne pas arriver de nuit sans prévenir :</strong>{" "}
                      le Prophète (paix et salut sur lui) déconseillait au
                      voyageur de rentrer chez lui de nuit sans avoir
                      prévenu sa famille (rapporté par al-Bukhari et Muslim),
                      afin de ne pas les surprendre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Offrir des cadeaux :</strong> il est
                      recommandé de rapporter des cadeaux (hadaya) à sa
                      famille et à ses proches, ce qui renforce les liens
                      d&apos;affection et de fraternité.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Les invocations pour la réussite et la facilité"
                  description="Découvrez d&apos;autres du&apos;as authentiques pour solliciter l&apos;aide d&apos;Allah dans tous les aspects de votre vie."
                  href="/invocations-reussite-facilite"
                />
              </section>

              {/* ============================================ */}
              {/* AffiliateForm */}
              {/* ============================================ */}
              <AffiliateForm
                title="Comprenez vos invocations en apprenant la langue arabe"
                description="Réciter vos du&apos;as en arabe avec compréhension transforme votre expérience spirituelle. Découvrez nos formations adaptées aux francophones."
                preselect="arabe"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
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
                    href="/doua-opprime-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de l&apos;opprimé
                  </Link>
                  <Link
                    href="/doua-examen-reussite-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua pour les examens
                  </Link>
                  <Link
                    href="/doua-rupture-jeune-iftar-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Doua de rupture du jeûne
                  </Link>
                  <Link
                    href="/invocations-reussite-facilite"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Invocations pour la réussite
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
                    href="/priere-voyageur-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Prière du voyageur
                  </Link>
                  <Link
                    href="/apprendre-larabe"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Apprendre l&apos;arabe
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
