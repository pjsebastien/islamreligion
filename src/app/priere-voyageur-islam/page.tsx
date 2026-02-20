import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Prière du voyageur : raccourcissement et conditions en islam",
  description:
    "Tout savoir sur la prière du voyageur en islam : raccourcissement (qasr), regroupement (jam), conditions, distance, durée et avis des quatre écoles juridiques.",
  alternates: {
    canonical: "https://www.islamreligion.fr/priere-voyageur-islam",
  },
};

const tocItems = [
  { id: "fondements", label: "Fondements coraniques et prophétiques" },
  { id: "raccourcir", label: "Quelles prières raccourcir" },
  { id: "conditions", label: "Conditions du raccourcissement" },
  { id: "combiner", label: "Combiner les prières en voyage" },
  { id: "duree", label: "Durée du statut de voyageur" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Qu'est-ce que la prière du voyageur en islam ?",
    answer:
      "La prière du voyageur (salat al-musafir) est une concession accordée par Allah au musulman en déplacement. Elle permet de raccourcir les prières de quatre unités (raka'at) à deux unités, et de regrouper certaines prières entre elles. Cette facilité repose sur le Coran (sourate An-Nisa, verset 101) et sur la pratique constante du Prophète (paix et salut sur lui) lors de ses voyages.",
  },
  {
    question: "Quelles prières peut-on raccourcir en voyage ?",
    answer:
      "Seules les prières composées de quatre raka'at peuvent être raccourcies à deux : le Dhuhr, le 'Asr et le 'Isha. La prière du Fajr (deux raka'at) et celle du Maghrib (trois raka'at) restent inchangées, quel que soit le voyage. Les prières surérogatoires habituelles (rawatib) peuvent être délaissées en voyage, à l'exception de la prière du Witr et de la sounna du Fajr selon la majorité des savants.",
  },
  {
    question: "À partir de quelle distance peut-on raccourcir la prière ?",
    answer:
      "La majorité des savants (écoles malékite, shafi'ite et hanbalite) fixent la distance minimale à environ 80-84 kilomètres (quatre burud, soit seize farsakh). L'école hanafite retient une distance de trois jours de marche, soit environ 80 km également. Le voyage doit impliquer un déplacement réel hors de la zone habitée, et non un simple trajet en périphérie de la ville.",
  },
  {
    question: "Peut-on combiner les prières en voyage ?",
    answer:
      "Oui, le voyageur peut regrouper le Dhuhr avec le 'Asr, et le Maghrib avec le 'Isha. Ce regroupement peut se faire à l'heure de la première prière (jam' taqdim) ou à l'heure de la seconde (jam' ta'khir). Le Prophète (paix et salut sur lui) a pratiqué les deux formes lors de ses voyages, comme rapporté dans les recueils de Muslim et d'al-Bukhari.",
  },
  {
    question: "Combien de temps peut-on rester voyageur en islam ?",
    answer:
      "Si le voyageur a l'intention de rester quatre jours ou moins dans un lieu, il conserve le statut de voyageur et peut continuer à raccourcir ses prières selon la majorité des savants. Au-delà de cette durée, les écoles divergent : les Hanafites autorisent le raccourcissement jusqu'à quinze jours, les Shafi'ites et Malékites jusqu'à quatre jours, et les Hanbalites jusqu'à quatre jours également. En cas de séjour indéterminé (attente d'un besoin), certains savants autorisent le raccourcissement tant que l'intention de s'installer n'est pas prise.",
  },
  {
    question: "La prière du voyageur est-elle obligatoire ou recommandée ?",
    answer:
      "Les savants divergent sur ce point. L'école hanafite considère le raccourcissement comme obligatoire (wajib) pour le voyageur. Les écoles malékite, shafi'ite et hanbalite le considèrent comme une concession recommandée (sounna) mais non obligatoire : le voyageur peut prier quatre raka'at s'il le souhaite, bien que raccourcir soit meilleur conformément à la pratique prophétique.",
  },
  {
    question: "Peut-on prier normalement au lieu de raccourcir en voyage ?",
    answer:
      "Selon les écoles malékite, shafi'ite et hanbalite, oui, le voyageur peut choisir de prier la prière complète (quatre raka'at) car le raccourcissement est une facilité et non une obligation. En revanche, l'école hanafite considère que le voyageur doit obligatoirement raccourcir et que sa prière de quatre raka'at en voyage serait invalide s'il n'a pas accompli la position assise (tashahud) après la deuxième raka'a.",
  },
  {
    question: "Comment prier en voyage pendant le Ramadan ?",
    answer:
      "Le voyageur bénéficie d'une double concession : raccourcir la prière et rompre le jeûne du Ramadan. Il devra rattraper les jours non jeûnés après le Ramadan. Pour la prière, les règles du raccourcissement et du regroupement s'appliquent normalement. Le Prophète (paix et salut sur lui) a rompu le jeûne lors de ses voyages et a encouragé ses compagnons à en faire de même, comme rapporté par al-Bukhari et Muslim.",
  },
];

export default function PriereVoyageur() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/priere-voyageur-islam/#article",
        headline:
          "Prière du voyageur : raccourcissement et conditions en islam",
        description:
          "Tout savoir sur la prière du voyageur en islam : raccourcissement (qasr), regroupement (jam), conditions, distance, durée et avis des quatre écoles juridiques.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Priere-du-voyageur-raccourcissement-et-conditions-en-islam-1.jpg",
        datePublished: "2025-08-24",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/priere-voyageur-islam/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/priere-voyageur-islam/#breadcrumb",
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
            name: "Prière du voyageur",
            item: "https://www.islamreligion.fr/priere-voyageur-islam",
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
          title="Prière du voyageur : raccourcissement et conditions en islam"
          subtitle="Règles du qasr et du jam&apos; selon le Coran, la Sounna et les quatre écoles juridiques islamiques."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Priere-du-voyageur-raccourcissement-et-conditions-en-islam-1.jpg"
          imageAlt="Prière du voyageur, raccourcissement et conditions en islam"
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
                <span className="text-foreground">Prière du voyageur</span>
              </nav>

              {/* Résumé rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Le voyageur en islam bénéficie d&apos;une facilité divine
                  remarquable : raccourcir les prières de quatre raka&apos;at à
                  deux et regrouper certaines prières entre elles. Fondée sur le
                  Coran et la pratique prophétique, cette concession répond à
                  des conditions précises de distance, d&apos;intention et de
                  durée que les quatre écoles juridiques ont détaillées avec
                  soin.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Fondements coraniques et prophétiques */}
              {/* ============================================ */}
              <section id="fondements" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Fondements coraniques et prophétiques de la prière du voyageur
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La prière du voyageur, appelée salat al-musafir en arabe,
                  trouve son fondement premier dans le Coran. Allah dit dans la
                  sourate An-Nisa (verset 101) : &laquo; Lorsque vous parcourez
                  la terre, ce n&apos;est pas un péché pour vous de raccourcir
                  la prière &raquo;. Ce verset constitue la base juridique sur
                  laquelle s&apos;appuient l&apos;ensemble des savants
                  musulmans pour autoriser le raccourcissement de la prière
                  pendant le voyage.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et salut sur lui) a mis ce verset
                  en pratique de manière constante. &apos;Aisha (qu&apos;Allah
                  soit satisfait d&apos;elle) rapporte : &laquo; La prière a
                  d&apos;abord été prescrite à deux raka&apos;at. Puis la
                  prière du résident a été augmentée, tandis que la prière du
                  voyageur est restée telle quelle &raquo; (rapporté par
                  al-Bukhari et Muslim). Ce hadith souligne que le
                  raccourcissement n&apos;est pas une simple dérogation, mais
                  une forme originelle de la prière.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Ibn &apos;Umar (qu&apos;Allah soit satisfait de lui)
                  rapporte que le Prophète (paix et salut sur lui) ne priait
                  jamais plus de deux raka&apos;at lorsqu&apos;il était en
                  voyage, et Abu Bakr ainsi qu&apos;&apos;Umar faisaient de
                  même après lui (rapporté par al-Bukhari). Anas ibn Malik
                  confirme : &laquo; Nous sommes sortis de Médine avec le
                  Prophète (paix et salut sur lui) vers La Mecque, et il priait
                  deux raka&apos;at jusqu&apos;à notre retour &raquo; (rapporté
                  par al-Bukhari et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  La sagesse derrière cette concession (rukhsa) est multiple.
                  Le voyage implique fatigue, difficulté et contrainte de
                  temps. Allah, par Sa miséricorde, allège le fardeau du
                  croyant en déplacement afin que la prière reste un acte
                  accompli avec concentration et dévotion, plutôt qu&apos;une
                  charge pénible. Car{" "}
                  <Link href="/abandon-priere-islam-consequences" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">abandonner la prière</Link>{" "}
                  reste un péché majeur, même en voyage. Le Prophète (paix et salut sur lui) a dit :
                  &laquo; Allah aime que l&apos;on prenne Ses concessions,
                  comme Il déteste que l&apos;on commette Ses interdits &raquo;
                  (rapporté par Ahmad et Ibn Hibban).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Fondement coranique :</strong> sourate An-Nisa,
                      verset 101, autorisant explicitement le raccourcissement
                      en voyage.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratique prophétique constante :</strong> le
                      Prophète (paix et salut sur lui) a toujours raccourci ses
                      prières en voyage, sans exception rapportée.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Consensus des compagnons :</strong> Abu Bakr,
                      &apos;Umar, &apos;Uthman (dans ses premiers temps) et
                      &apos;Ali ont tous pratiqué le qasr.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Sagesse divine :</strong> alléger le fardeau du
                      croyant pour préserver la qualité de son adoration.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Priere-du-voyageur-raccourcissement-et-conditions-en-islam-1.jpg"
                    alt="Fondements coraniques de la prière du voyageur en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Quelles prières raccourcir */}
              {/* ============================================ */}
              <section id="raccourcir" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Quelles prières raccourcir et comment procéder
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le raccourcissement (qasr) ne concerne pas toutes les prières
                  quotidiennes. Seules les prières composées de quatre
                  raka&apos;at sont réduites à deux. Les prières dont le nombre
                  de raka&apos;at est inférieur à quatre restent inchangées, car
                  elles ne peuvent pas être davantage réduites sans altérer leur
                  structure fondamentale.
                </p>

                {/* Tableau des prières */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Prière
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Nombre normal
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          En voyage
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Note
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fajr (Sobh)
                        </td>
                        <td className="py-3 pr-4">
                          2 raka&apos;at
                        </td>
                        <td className="py-3 pr-4">
                          2 raka&apos;at
                        </td>
                        <td className="py-3">
                          Inchangée, déjà au minimum
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Dhuhr (Dohr)
                        </td>
                        <td className="py-3 pr-4">
                          4 raka&apos;at
                        </td>
                        <td className="py-3 pr-4">
                          2 raka&apos;at
                        </td>
                        <td className="py-3">
                          Raccourcie de moitié
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          &apos;Asr
                        </td>
                        <td className="py-3 pr-4">
                          4 raka&apos;at
                        </td>
                        <td className="py-3 pr-4">
                          2 raka&apos;at
                        </td>
                        <td className="py-3">
                          Raccourcie de moitié
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Maghrib
                        </td>
                        <td className="py-3 pr-4">
                          3 raka&apos;at
                        </td>
                        <td className="py-3 pr-4">
                          3 raka&apos;at
                        </td>
                        <td className="py-3">
                          Inchangée, nombre impair préservé
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          &apos;Isha
                        </td>
                        <td className="py-3 pr-4">
                          4 raka&apos;at
                        </td>
                        <td className="py-3 pr-4">
                          2 raka&apos;at
                        </td>
                        <td className="py-3">
                          Raccourcie de moitié
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour accomplir la prière raccourcie, le voyageur prie
                  exactement comme une prière normale de deux raka&apos;at. Il
                  commence par le takbir d&apos;ouverture (Allahu Akbar),
                  récite la Fatiha suivie d&apos;une sourate dans les deux
                  raka&apos;at, effectue les inclinaisons et prosternations
                  habituelles, puis s&apos;assoit pour le tashahud final et le
                  salam. La prière raccourcie ne diffère donc pas dans sa forme
                  d&apos;une prière de Fajr, à la différence qu&apos;elle
                  remplace une prière de quatre raka&apos;at.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Concernant les prières surérogatoires (rawatib), les
                  savants ont des avis différents. Ibn &apos;Umar rapporte que
                  le Prophète (paix et salut sur lui) ne priait pas de
                  surérogatoires avant ni après les prières obligatoires en
                  voyage, à l&apos;exception de la prière du Witr et de la
                  sounna du Fajr (rapporté par al-Bukhari et Muslim).
                  Néanmoins, d&apos;autres hadiths montrent que le Prophète
                  (paix et salut sur lui) priait parfois des prières
                  surérogatoires en voyage, comme la prière du Doha.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Intention du raccourcissement
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;école shafi&apos;ite exige que le voyageur ait
                        l&apos;intention spécifique de raccourcir la prière
                        avant le takbir d&apos;ouverture. Les Hanafites, eux,
                        considèrent que le raccourcissement est automatique dès
                        lors que les conditions du voyage sont remplies, sans
                        intention supplémentaire requise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Prière derrière un imam résident
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le voyageur prie derrière un imam résident qui
                        accomplit quatre raka&apos;at, il doit compléter la
                        prière à quatre raka&apos;at également, selon le
                        consensus des savants. Le Prophète (paix et salut sur
                        lui) a dit : &laquo; L&apos;imam n&apos;est désigné
                        que pour être suivi &raquo; (rapporté par al-Bukhari et
                        Muslim).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Le voyageur en tant qu&apos;imam
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Lorsque le voyageur dirige la prière, il prie deux
                        raka&apos;at et les résidents qui prient derrière lui
                        complètent seuls les deux raka&apos;at restantes après
                        le salam de l&apos;imam. &apos;Umar ibn al-Khattab
                        faisait ainsi à La Mecque lorsqu&apos;il dirigeait la
                        prière en tant que voyageur.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Priere-du-voyageur-raccourcissement-et-conditions-en-islam-1.jpg"
                    alt="Tableau des prières raccourcies en voyage selon l'islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Conditions pour le raccourcissement */}
              {/* ============================================ */}
              <section id="conditions" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Conditions pour bénéficier du raccourcissement de la prière
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le raccourcissement de la prière en voyage n&apos;est pas
                  laissé à la libre appréciation de chacun. Les juristes
                  musulmans ont défini un ensemble de conditions qui doivent
                  être réunies pour que le voyageur puisse légitimement
                  bénéficier de cette concession, conformément aux principes de la{" "}
                  <Link href="/jurisprudence-islamique-coran-sunna-ijma" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">jurisprudence islamique</Link>.
                  Ces conditions varient
                  légèrement d&apos;une école juridique à l&apos;autre, mais un
                  socle commun se dégage.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Distance minimale du voyage
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        La majorité des savants (écoles malékite, shafi&apos;ite
                        et hanbalite) fixent la distance minimale à environ
                        80-84 kilomètres, soit quatre burud ou seize farsakh.
                        Cette estimation remonte aux pratiques des compagnons
                        du Prophète (paix et salut sur lui). Ibn &apos;Abbas et
                        Ibn &apos;Umar raccourcissaient la prière pour un
                        voyage d&apos;une journée de marche environ. L&apos;école
                        hanafite retient quant à elle trois jours de marche à
                        allure modérée, mais la distance résultante est
                        comparable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Intention sincère de voyager
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le voyageur doit avoir une intention ferme de se rendre
                        à une destination précise. Celui qui erre sans
                        destination fixe ne bénéficie pas du raccourcissement
                        selon l&apos;école shafi&apos;ite. Toutefois,
                        l&apos;école hanbalite autorise le raccourcissement même
                        pour celui qui voyage sans destination précise, tant
                        qu&apos;il parcourt la distance requise.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Voyage licite (non interdit)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        L&apos;école malékite et l&apos;école shafi&apos;ite
                        conditionnent le raccourcissement à un voyage dont le
                        but est licite. Un voyage entrepris pour commettre un
                        péché (vol, brigandage) ne donne pas droit à la
                        concession selon ces deux écoles. L&apos;école hanafite
                        et l&apos;école hanbalite autorisent le
                        raccourcissement quel que soit le motif du voyage, car
                        la facilité est liée à la difficulté du déplacement et
                        non à sa finalité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Départ effectif de la ville
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le voyageur ne peut commencer à raccourcir ses prières
                        qu&apos;après avoir quitté les limites de sa ville ou
                        de son agglomération. Tant qu&apos;il se trouve dans sa
                        zone de résidence, il prie normalement. Les savants
                        s&apos;appuient sur la pratique du Prophète (paix et
                        salut sur lui) qui ne raccourcissait la prière
                        qu&apos;après avoir quitté Médine. Anas rapporte :
                        &laquo; J&apos;ai prié le Dhuhr quatre raka&apos;at
                        avec le Prophète (paix et salut sur lui) à Médine, et
                        le &apos;Asr deux raka&apos;at à Dhu al-Hulayfa
                        &raquo; (rapporté par al-Bukhari).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Ne pas suivre un imam résident
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le voyageur rejoint une prière en congrégation
                        dirigée par un imam résident, il doit compléter la
                        prière intégralement (quatre raka&apos;at), même
                        s&apos;il n&apos;a rejoint qu&apos;une seule
                        raka&apos;a. Le suivi de l&apos;imam prime sur le
                        statut de voyageur dans ce cas précis.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau comparatif des écoles */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Condition
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Hanafite
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Malékite
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Shafi&apos;ite / Hanbalite
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Distance minimale
                        </td>
                        <td className="py-3 pr-4">
                          3 jours de marche (~80 km)
                        </td>
                        <td className="py-3 pr-4">
                          4 burud (~80-84 km)
                        </td>
                        <td className="py-3">
                          4 burud (~80-84 km)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voyage licite requis
                        </td>
                        <td className="py-3 pr-4">
                          Non requis
                        </td>
                        <td className="py-3 pr-4">
                          Oui, requis
                        </td>
                        <td className="py-3">
                          Shafi&apos;ite : oui / Hanbalite : non
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Qasr obligatoire ?
                        </td>
                        <td className="py-3 pr-4">
                          Oui (wajib)
                        </td>
                        <td className="py-3 pr-4">
                          Recommandé (sounna)
                        </td>
                        <td className="py-3">
                          Recommandé (sounna)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Intention de qasr
                        </td>
                        <td className="py-3 pr-4">
                          Non requise
                        </td>
                        <td className="py-3 pr-4">
                          Non requise
                        </td>
                        <td className="py-3">
                          Shafi&apos;ite : requise / Hanbalite : non
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le voyageur peut également profiter de ses déplacements pour{" "}
                  <Link href="/istikhara-priere-consultation" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">accomplir la prière d&apos;istikhara</Link>{" "}
                  s&apos;il fait face à une décision importante lors de son voyage.
                  Il convient de noter que les adaptations liées aux ablutions
                  s&apos;appliquent également en voyage. Le voyageur peut
                  essuyer ses chaussettes en cuir (khuff) pendant trois jours
                  et trois nuits, au lieu d&apos;un jour et une nuit pour le
                  résident (rapporté par Muslim). De plus, en cas d&apos;absence
                  d&apos;eau, le tayammum (ablution sèche avec de la terre
                  propre) est autorisé, conformément à la sourate Al-Ma&apos;ida
                  (verset 6).
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Khuff (chaussettes en cuir) :</strong> essuyage
                      autorisé pendant 3 jours et 3 nuits pour le voyageur.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Tayammum :</strong> autorisé en l&apos;absence
                      d&apos;eau ou en cas de difficulté à y accéder.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Direction de la Qibla :</strong> le voyageur doit
                      faire de son mieux pour déterminer la direction de La
                      Mecque. En cas d&apos;incertitude, il s&apos;oriente vers
                      la direction la plus probable, et sa prière reste valide.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Applications modernes :</strong> les applications
                      de boussole Qibla, le GPS et les montres connectées
                      facilitent la détermination de la direction, mais ne
                      dispensent pas le voyageur de vérifier l&apos;exactitude
                      de l&apos;information.
                    </span>
                  </li>
                </ul>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Prier en islam : les fondements de l'excellence spirituelle"
                  description="Découvrez les piliers, conditions et subtilités de la prière quotidienne en islam."
                  href="/prier-islam-excellence-spirituelle"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Combiner les prières */}
              {/* ============================================ */}
              <section id="combiner" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Combiner les prières en voyage (al-jam&apos;)
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  En plus du raccourcissement, le voyageur peut regrouper
                  certaines prières entre elles. Cette pratique, appelée
                  al-jam&apos;, permet de prier deux salawat consécutives à
                  l&apos;heure de l&apos;une des deux. Le Prophète (paix et
                  salut sur lui) a regroupé ses prières lors de la bataille de
                  Tabuk et lors d&apos;autres voyages, comme rapporté par
                  Muslim.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Deux formes de regroupement sont reconnues par les savants :
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Jam&apos; taqdim : regroupement anticipé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le voyageur prie la deuxième prière à l&apos;heure de
                        la première. Par exemple, il prie le Dhuhr et le
                        &apos;Asr ensemble à l&apos;heure du Dhuhr, ou le
                        Maghrib et le &apos;Isha ensemble à l&apos;heure du
                        Maghrib. Cette forme est utile lorsque le voyageur sait
                        qu&apos;il sera en déplacement au moment de la deuxième
                        prière et qu&apos;il ne pourra pas s&apos;arrêter.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Jam&apos; ta&apos;khir : regroupement retardé
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le voyageur retarde la première prière pour la prier
                        avec la deuxième à l&apos;heure de celle-ci. Par
                        exemple, il retarde le Dhuhr pour le prier avec le
                        &apos;Asr à l&apos;heure du &apos;Asr. Cette forme est
                        pratique lorsque le voyageur est en route au moment de
                        la première prière mais prévoit de s&apos;arrêter à
                        l&apos;heure de la seconde.
                      </p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Combinaisons autorisées :</strong> Dhuhr +
                      &apos;Asr, Maghrib + &apos;Isha. Le Fajr ne se combine
                      avec aucune autre prière.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Ordre des prières :</strong> il faut respecter
                      l&apos;ordre chronologique (Dhuhr avant &apos;Asr,
                      Maghrib avant &apos;Isha), quel que soit le type de
                      regroupement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Enchaînement :</strong> selon l&apos;école
                      shafi&apos;ite, les deux prières doivent être priées de
                      manière successive, sans grande interruption entre elles.
                      L&apos;école hanbalite est plus souple sur ce point.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Intention :</strong> selon l&apos;école
                      shafi&apos;ite, l&apos;intention de regrouper doit être
                      formulée avant de commencer la première prière dans le cas
                      du jam&apos; taqdim.
                    </span>
                  </li>
                </ul>

                {/* Tableau récapitulatif du jam' */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Type de regroupement
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Prières concernées
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Moment
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Jam&apos; taqdim (anticipé)
                        </td>
                        <td className="py-3 pr-4">
                          Dhuhr + &apos;Asr
                        </td>
                        <td className="py-3">
                          À l&apos;heure du Dhuhr
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Jam&apos; taqdim (anticipé)
                        </td>
                        <td className="py-3 pr-4">
                          Maghrib + &apos;Isha
                        </td>
                        <td className="py-3">
                          À l&apos;heure du Maghrib
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Jam&apos; ta&apos;khir (retardé)
                        </td>
                        <td className="py-3 pr-4">
                          Dhuhr + &apos;Asr
                        </td>
                        <td className="py-3">
                          À l&apos;heure du &apos;Asr
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Jam&apos; ta&apos;khir (retardé)
                        </td>
                        <td className="py-3 pr-4">
                          Maghrib + &apos;Isha
                        </td>
                        <td className="py-3">
                          À l&apos;heure du &apos;Isha
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Il faut noter une divergence importante entre les écoles sur
                  la légitimité du jam&apos;. L&apos;école hanafite
                  n&apos;autorise pas le regroupement des prières en voyage,
                  sauf à &apos;Arafat et Muzdalifa pendant le pèlerinage.
                  Selon les Hanafites, les hadiths rapportant le jam&apos; du
                  Prophète (paix et salut sur lui) s&apos;expliquent par un
                  retardement de la première prière à la fin de son temps et un
                  accomplissement de la seconde au début de son temps, donnant
                  l&apos;apparence d&apos;un regroupement sans en être un
                  véritable. Les trois autres écoles (malékite, shafi&apos;ite,
                  hanbalite) autorisent le regroupement en voyage sur la base
                  des hadiths clairs rapportés par Muslim.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le voyageur peut cumuler le raccourcissement et le
                  regroupement. Ainsi, il peut prier le Dhuhr (2
                  raka&apos;at) et le &apos;Asr (2 raka&apos;at) ensemble à
                  l&apos;heure du Dhuhr ou du &apos;Asr, totalisant quatre
                  raka&apos;at au lieu de huit. De même, le Maghrib (3
                  raka&apos;at) et le &apos;Isha (2 raka&apos;at au lieu de
                  quatre) peuvent être priés ensemble, totalisant cinq
                  raka&apos;at au lieu de sept.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/08/Priere-du-voyageur-raccourcissement-et-conditions-en-islam-1.jpg"
                    alt="Regroupement des prières en voyage en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Durée du statut de voyageur */}
              {/* ============================================ */}
              <section id="duree" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Durée du statut de voyageur et cas particuliers
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;une des questions les plus fréquentes concerne la
                  durée pendant laquelle un musulman conserve le statut de
                  voyageur et peut continuer à raccourcir ses prières. La
                  réponse varie sensiblement selon les écoles juridiques, et
                  chaque situation mérite une analyse nuancée.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Séjour de courte durée (quatre jours ou moins)
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le voyageur prévoit de rester quatre jours ou moins
                        dans un lieu, il conserve son statut de voyageur selon
                        les écoles malékite, shafi&apos;ite et hanbalite. Le
                        décompte des jours commence au lendemain de
                        l&apos;arrivée (le jour d&apos;arrivée et le jour de
                        départ n&apos;étant pas comptés comme jours complets
                        selon certains savants).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Séjour prolongé selon l&apos;école hanafite
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les Hanafites fixent le seuil à quinze jours. Si le
                        voyageur prévoit de rester quinze jours ou plus dans un
                        lieu, il devient résident et doit prier la prière
                        complète. S&apos;il prévoit de rester moins de quinze
                        jours, il conserve le statut de voyageur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary">
                        Séjour à durée indéterminée
                      </h3>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Si le voyageur ne sait pas combien de temps il va
                        rester (par exemple, il attend la fin d&apos;une
                        affaire ou la guérison d&apos;un malade), la majorité
                        des savants lui permettent de continuer à raccourcir
                        ses prières tant qu&apos;il n&apos;a pas pris la
                        décision ferme de s&apos;installer. Ibn al-Qayyim
                        rapporte que le Prophète (paix et salut sur lui) est
                        resté à Tabuk vingt jours en raccourcissant la prière,
                        car il n&apos;avait pas l&apos;intention de
                        s&apos;établir.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau durées par école */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          École juridique
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Durée maximale de qasr
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Précision
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hanafite
                        </td>
                        <td className="py-3 pr-4">
                          Moins de 15 jours
                        </td>
                        <td className="py-3">
                          Au-delà de 15 jours d&apos;intention de séjour,
                          retour au statut de résident
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Malékite
                        </td>
                        <td className="py-3 pr-4">
                          4 jours (hors arrivée/départ)
                        </td>
                        <td className="py-3">
                          Au-delà, prière complète obligatoire
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Shafi&apos;ite
                        </td>
                        <td className="py-3 pr-4">
                          4 jours (hors arrivée/départ)
                        </td>
                        <td className="py-3">
                          18 prières maximum en qasr sur place
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Hanbalite
                        </td>
                        <td className="py-3 pr-4">
                          4 jours
                        </td>
                        <td className="py-3">
                          Possibilité étendue si durée indéterminée
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Afin de multiplier les{" "}
                  <Link href="/invocations-reussite-facilite" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">invocations propices à la réussite</Link>{" "}
                  durant le voyage, le croyant peut profiter des moments d&apos;attente
                  pour le dhikr et la récitation du Coran.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le cas du Ramadan en voyage mérite une attention
                  particulière. Le voyageur a le choix entre jeûner et rompre
                  son jeûne, conformément au verset coranique : &laquo;
                  Quiconque d&apos;entre vous est malade ou en voyage, qu&apos;il
                  jeûne un nombre égal d&apos;autres jours &raquo; (sourate
                  Al-Baqarah, verset 184). Le Prophète (paix et salut sur lui)
                  a parfois jeûné en voyage et parfois rompu le jeûne, les deux
                  options étant valides. Hamza ibn &apos;Amr al-Aslami a
                  demandé au Prophète (paix et salut sur lui) s&apos;il pouvait
                  jeûner en voyage, et le Prophète a répondu : &laquo; Si tu
                  veux, jeûne, et si tu veux, romps &raquo; (rapporté par
                  al-Bukhari et Muslim).
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les moyens de transport modernes ont soulevé de nouvelles
                  questions. Un voyage en avion de quelques heures couvrant
                  des milliers de kilomètres est-il comparable à un voyage de
                  plusieurs jours à dos de chameau ? Les savants contemporains
                  s&apos;accordent généralement à dire que le critère est la
                  distance et non la durée du trajet. Un vol de 500 km, même
                  s&apos;il ne dure qu&apos;une heure, donne droit au
                  raccourcissement de la prière, car la distance parcourue
                  dépasse largement le seuil requis.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  De même, les trajets en train à grande vitesse, en voiture
                  ou en bus obéissent au même principe : c&apos;est la distance
                  entre le point de départ et la destination qui détermine le
                  statut de voyageur, et non le moyen de transport utilisé ni
                  le temps nécessaire pour parcourir cette distance. Pour
                  distinguer ce qui est{" "}
                  <Link href="/halal-haram-criteres" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">licite et illicite en islam</Link>,
                  il est toujours recommandé de s&apos;appuyer sur les avis
                  des savants reconnus.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Trajet quotidien :</strong> celui qui fait un
                      trajet quotidien supérieur à 80 km (par exemple, pour le
                      travail) n&apos;est pas considéré comme voyageur par la
                      plupart des savants, car il revient chez lui chaque jour.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Escales multiples :</strong> si le voyageur fait
                      plusieurs escales, le raccourcissement s&apos;applique
                      tant qu&apos;il n&apos;a pas l&apos;intention de séjourner
                      plus que la durée autorisée dans un même lieu.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Retour au domicile :</strong> le statut de
                      voyageur cesse immédiatement dès que le musulman rentre
                      dans les limites de sa ville de résidence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Prière dans l&apos;avion :</strong> le voyageur
                      peut prier assis dans l&apos;avion s&apos;il ne peut pas
                      se lever, en se tournant vers la Qibla si possible.
                      Toutefois, s&apos;il peut attendre l&apos;atterrissage
                      sans que le temps de la prière ne s&apos;écoule, il est
                      préférable de prier debout à l&apos;arrivée.
                    </span>
                  </li>
                </ul>
              </section>

              {/* ============================================ */}
              {/* SECTION Profils : Selon la situation du voyageur */}
              {/* ============================================ */}
              <section className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Selon la situation du voyageur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Les règles de la prière du voyageur s&apos;appliquent de la
                  même manière à tous les musulmans, mais les situations
                  concrètes varient. Voici comment adapter ces règles selon
                  les contextes de voyage les plus courants.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Voyage d&apos;affaires
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le professionnel en déplacement bénéficie du
                      raccourcissement dès que la distance dépasse 80 km.
                      Lors de conférences ou réunions, le regroupement des
                      prières (jam&apos;) offre une flexibilité
                      appréciable. Si le séjour professionnel dépasse quatre
                      jours avec une intention ferme, il convient de prier
                      la prière complète selon la majorité des écoles. Le
                      mieux est de repérer à l&apos;avance les salles de
                      prière dans les aéroports et les hôtels.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Voyage touristique
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le touriste musulman raccourcit et regroupe ses prières
                      tant qu&apos;il se déplace d&apos;une ville à
                      l&apos;autre. S&apos;il s&apos;installe plus de quatre
                      jours dans un même lieu (selon la majorité), il prie
                      normalement. En cas de doute sur la durée du séjour, il
                      peut continuer à raccourcir tant qu&apos;il n&apos;a pas
                      pris la décision de rester. L&apos;utilisation
                      d&apos;applications de prière permet de suivre les
                      horaires locaux avec précision.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Étudiant à l&apos;étranger
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      L&apos;étudiant qui s&apos;installe pour une année
                      universitaire ou plus est considéré comme résident dans
                      sa ville d&apos;études selon la majorité des savants. Il
                      prie la prière complète dans sa ville d&apos;accueil.
                      Toutefois, lorsqu&apos;il se déplace pour les vacances
                      ou un stage à plus de 80 km, il retrouve le statut de
                      voyageur et peut raccourcir. Les déplacements entre sa
                      ville d&apos;études et sa ville d&apos;origine donnent
                      également droit au qasr pendant le trajet.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Cas particulier : le chauffeur routier
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Le chauffeur routier dont le métier implique des
                      déplacements constants fait l&apos;objet d&apos;une
                      discussion parmi les savants. Certains considèrent
                      qu&apos;il conserve le statut de voyageur tant
                      qu&apos;il est en route, car il n&apos;a pas de lieu
                      fixe de séjour en dehors de son domicile. D&apos;autres
                      estiment que le voyage étant devenu sa routine
                      quotidienne, il ne bénéficie pas du raccourcissement.
                      L&apos;avis prédominant est qu&apos;il raccourcit lors de
                      ses trajets, mais prie normalement dans les villes où
                      il fait des haltes prolongées.
                    </p>
                  </div>
                </div>
              </section>

              {/* ArticleCTA avant FAQ */}
              <ArticleCTA
                variant="lire-aussi"
                title="Sorcellerie en islam : protection et remèdes prophétiques"
                description="Les moyens de protection spirituelle enseignés par la tradition islamique."
                href="/sorcellerie-islam-protection"
              />

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Articles en lien avec la prière
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
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
                    Protection contre la sorcellerie
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
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </>
  );
}
