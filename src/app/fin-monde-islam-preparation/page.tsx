import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import TableOfContents from "@/components/TableOfContents";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title:
    "Rêver de la fin du monde en islam : signes spirituels et préparation à l'au-delà",
  description:
    "Que signifie rêver de la fin du monde en islam ? Interprétation selon le Coran, les hadiths et Ibn Sirin. Signes eschatologiques, du'as de protection et conseils spirituels.",
  alternates: {
    canonical: "https://www.islamreligion.fr/fin-monde-islam-preparation",
  },
};

const tocItems = [
  { id: "interpretation", label: "Interprétation selon la tradition" },
  { id: "signes", label: "Signes eschatologiques" },
  { id: "dajjal", label: "Le Dajjal et les epreuves" },
  { id: "scenarios", label: "Selon le scenario du reve" },
  { id: "apres-reve", label: "Que faire apres ce reve" },
  { id: "preparation", label: "Preparation ethique et sereine" },
  { id: "profils", label: "Selon la situation du reveur" },
  { id: "faq", label: "Questions frequentes" },
];

const faqItems = [
  {
    question:
      "Rêver de la fin du monde en islam, est-ce un mauvais signe ?",
    answer:
      "Non, pas systématiquement. Selon la tradition islamique, un rêve de fin du monde peut relever de trois catégories : la vision véridique (ru'ya) envoyée par Allah, le rêve perturbateur (hulm) inspiré par Shaytan, ou le reflet des pensées personnelles (hadith an-nafs). Un tel rêve invite avant tout à l'introspection, au repentir et au renforcement de la foi. Les savants recommandent de ne pas paniquer et d'analyser le contexte du rêve avant d'en tirer des conclusions.",
  },
  {
    question:
      "Que signifie rêver de la fin du monde par le feu en islam ?",
    answer:
      "Le feu dans un rêve eschatologique symbolise souvent un avertissement spirituel. Il peut représenter la fitna (tentation ou épreuve), un rappel de la nécessité du repentir ou une alerte sur des comportements à corriger. Selon Ibn Sirin, le feu destructeur en rêve appelle le rêveur à purifier ses actes et à se rapprocher d'Allah par la prière et l'aumône.",
  },
  {
    question:
      "Que signifie rêver de la fin du monde par l'eau en islam ?",
    answer:
      "L'eau dans un rêve de fin du monde peut symboliser un bouleversement émotionnel profond ou une purification intérieure. Si l'eau est un déluge destructeur, cela évoque un appel au changement radical. Si le rêveur survit au déluge, cela peut indiquer qu'Allah le protège et qu'il traversera les épreuves avec succès, à condition de maintenir sa foi.",
  },
  {
    question:
      "Quelle du'a réciter après avoir rêvé de la fin du monde ?",
    answer:
      "Le Prophète (paix et bénédictions sur lui) a enseigné plusieurs gestes après un mauvais rêve : souffler légèrement trois fois sur la gauche, dire \"A'udhu billahi min ash-shaytani r-rajim\" (je cherche refuge auprès d'Allah contre Satan le lapidé), changer de côté pour se rendormir et ne pas raconter le rêve. On peut aussi réciter Ayat al-Kursi (verset du Trône, sourate Al-Baqarah 2:255) et les trois dernières sourates du Coran.",
  },
  {
    question:
      "Les rêves de fin du monde sont-ils liés aux signes de l'Heure ?",
    answer:
      "Pas nécessairement. Un rêve de fin du monde n'est pas une prophétie sur l'imminence de l'Heure. Le Prophète (paix et bénédictions sur lui) a rappelé que seul Allah connaît le moment de l'Heure (Coran 7:187). Ce type de rêve reflète le plus souvent des préoccupations intérieures, un rappel de la fragilité de la vie ou un appel à se préparer spirituellement pour l'au-delà.",
  },
  {
    question:
      "Que dit Ibn Sirin sur les rêves de fin du monde ?",
    answer:
      "Ibn Sirin, pionnier de l'interprétation des rêves en islam, enseigne que les rêves apocalyptiques doivent être analysés selon leur contexte. Un tremblement de terre symbolise un bouleversement dans la vie du rêveur. Un ciel qui s'effondre peut indiquer la perte d'une figure d'autorité. Les étoiles qui tombent représentent la disparition de repères. Pour Ibn Sirin, chaque élément du rêve porte un message personnel avant d'avoir une portée eschatologique.",
  },
  {
    question:
      "Rêver de survivre à la fin du monde, quelle signification en islam ?",
    answer:
      "Survivre à la fin du monde dans un rêve est un signe très positif. Cela peut indiquer la solidité de la foi du rêveur, la protection divine ou la capacité à surmonter de grandes épreuves. Les savants y voient un encouragement à persévérer dans la piété et un rappel que la confiance en Allah (tawakkul) est la meilleure arme face aux tribulations de ce monde.",
  },
  {
    question:
      "Rêver du Jour du Jugement dernier, est-ce différent de rêver de la fin du monde ?",
    answer:
      "Oui, il y a une nuance. Rêver de la fin du monde (destruction, catastrophes) renvoie souvent à des bouleversements personnels ou à un appel au repentir. Rêver du Jour du Jugement (Yawm al-Qiyamah) avec la balance des actes, le Sirat ou la reddition des comptes renvoie plus directement à l'état spirituel du rêveur et à la nécessité de préparer ses bonnes actions pour l'au-delà.",
  },
];

export default function FinMondeIslamPreparation() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id":
          "https://www.islamreligion.fr/fin-monde-islam-preparation/#article",
        headline:
          "Rêver de la fin du monde en islam : signes spirituels et préparation à l'au-delà",
        description:
          "Que signifie rêver de la fin du monde en islam ? Interprétation selon le Coran, les hadiths et Ibn Sirin. Signes eschatologiques, du'as de protection et conseils spirituels.",
        image:
          "https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-la-fin-du-monde-islam-signes-spirituels-et-preparation-a-lau-dela.jpg",
        datePublished: "2025-09-10",
        inLanguage: "fr-FR",
        isPartOf: { "@id": "https://www.islamreligion.fr/#website" },
        mainEntityOfPage: {
          "@id":
            "https://www.islamreligion.fr/fin-monde-islam-preparation/#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://www.islamreligion.fr/fin-monde-islam-preparation/#breadcrumb",
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
            name: "Rêves en islam",
            item: "https://www.islamreligion.fr/reves-islam",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Fin du monde",
            item: "https://www.islamreligion.fr/fin-monde-islam-preparation",
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
          title="Rêver de la fin du monde en islam : signes spirituels et préparation à l'au-delà"
          subtitle="Interprétation des rêves eschatologiques selon le Coran, les hadiths authentiques et les savants musulmans. Du'as de protection et conseils pour apaiser le coeur."
          imageSrc="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-la-fin-du-monde-islam-signes-spirituels-et-preparation-a-lau-dela.jpg"
          imageAlt="Rêver de la fin du monde en islam, signes spirituels et préparation à l'au-delà"
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
                <Link href="/reves-islam" className="hover:text-primary">
                  Rêves en islam
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">Fin du monde</span>
              </nav>

              {/* Resume rapide */}
              <div className="mb-10 rounded-xl border border-secondary/20 bg-accent p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                  En résumé
                </p>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  Rêver de la fin du monde en islam suscite souvent de
                  l&apos;inquiétude, mais ce type de rêve n&apos;annonce pas
                  nécessairement un malheur. Selon la tradition islamique, il
                  peut s&apos;agir d&apos;une vision véridique (ru&apos;ya),
                  d&apos;un rêve perturbateur (hulm) ou d&apos;un reflet de
                  vos pensées (hadith an-nafs). Le Coran et les hadiths
                  offrent des clés précises pour interpréter ces songes et
                  les transformer en opportunité de rapprochement avec Allah.
                </p>
              </div>

              {/* ============================================ */}
              {/* SECTION 1 : Interpretation selon la tradition */}
              {/* ============================================ */}
              <section id="interpretation" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  L&apos;interprétation des rêves de fin du monde selon la
                  tradition islamique
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground">
                  La science de l&apos;interprétation des rêves (ta&apos;bir
                  ar-ru&apos;ya) occupe une place centrale dans la
                  spiritualité musulmane. Le Prophète Muhammad (paix et
                  bénédictions sur lui) a enseigné que les rêves se
                  répartissent en trois catégories distinctes, chacune
                  portant un sens différent pour le rêveur.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les trois types de rêves en islam
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  D&apos;après un hadith rapporté par Abu Hurayra (qu&apos;Allah
                  l&apos;agrée) et consigné par al-Bukhari et Muslim, le
                  Prophète (paix et bénédictions sur lui) a dit :{" "}
                  <em>
                    &quot;Le rêve est de trois sortes : la vision véridique
                    qui est une bonne nouvelle d&apos;Allah, le rêve qui
                    attriste et qui vient du diable, et ce que la personne se
                    dit à elle-même.&quot;
                  </em>
                </p>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      1. Ru&apos;ya (vision véridique)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Un rêve lumineux et clair, envoyé par Allah. Il peut
                      contenir un message de guidance, un avertissement
                      bienveillant ou une bonne nouvelle. Ce type de rêve
                      représente la quarante-sixième partie de la prophétie,
                      selon le hadith rapporté par al-Bukhari.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      2. Hulm (rêve perturbateur)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Un rêve troublant, angoissant ou effrayant, inspiré
                      par Shaytan pour semer la peur et le doute dans le
                      coeur du croyant. Ce type de rêve ne doit pas être
                      raconté et ne porte aucune signification prophétique.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      3. Hadith an-nafs (reflet de l&apos;âme)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Un rêve qui découle des préoccupations quotidiennes,
                      des peurs ou des pensées récurrentes du rêveur. Si
                      vous avez récemment lu ou entendu parler de la fin du
                      monde, votre subconscient peut reproduire ces images
                      durant le sommeil.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Ce rêve n&apos;est pas forcément un mauvais présage
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Un rêve de fin du monde peut sembler terrifiant, mais la
                  tradition islamique invite à la nuance. Si le rêve
                  s&apos;accompagne d&apos;un sentiment de paix, de lumière
                  ou de sérénité, il peut s&apos;agir d&apos;un rappel
                  bienveillant d&apos;Allah pour renforcer la foi et se
                  préparer à l&apos;au-delà. Le contexte émotionnel du rêve
                  est un indicateur fondamental pour son interprétation.
                </p>

                {/* Tableau scenarios */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Scénario du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification islamique
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Conseil
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fin du monde paisible
                        </td>
                        <td className="py-3 pr-4">
                          Rappel de la fragilité de la vie, appel au
                          repentir serein
                        </td>
                        <td className="py-3">
                          Remercier Allah, augmenter les bonnes actions
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fin du monde terrifiante
                        </td>
                        <td className="py-3 pr-4">
                          Possiblement un hulm (rêve de Shaytan), peur
                          intérieure amplifiée
                        </td>
                        <td className="py-3">
                          Souffler 3 fois à gauche, chercher refuge en
                          Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Survivre à la destruction
                        </td>
                        <td className="py-3 pr-4">
                          Signe de foi solide, protection divine, tawakkul
                        </td>
                        <td className="py-3">
                          Persévérer dans la piété et la confiance en Allah
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Voir le Jour du Jugement
                        </td>
                        <td className="py-3 pr-4">
                          Invitation à préparer ses actes pour la reddition
                          des comptes
                        </td>
                        <td className="py-3">
                          Multiplier les bonnes oeuvres, demander pardon
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Fin du monde récurrente
                        </td>
                        <td className="py-3 pr-4">
                          Préoccupation intérieure, stress ou anxiété
                          latente
                        </td>
                        <td className="py-3">
                          Prières apaisantes, consultation d&apos;un savant
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Quelle que soit la nature du rêve, la réponse islamique
                  reste la même : se tourner vers Allah avec humilité,
                  renforcer sa pratique religieuse et accueillir le message
                  du rêve comme une occasion de progression spirituelle.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-la-fin-du-monde-islam-signes-spirituels-et-preparation-a-lau-dela-1.jpg"
                    alt="Interprétation du rêve de fin du monde en islam selon la tradition prophétique"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 2 : Signes eschatologiques */}
              {/* ============================================ */}
              <section id="signes" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Les signes eschatologiques dans le Coran et les hadiths
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Pour comprendre pleinement un rêve de fin du monde, il est
                  nécessaire de connaître ce que le Coran et la Sunna
                  enseignent sur l&apos;eschatologie islamique. Plusieurs
                  sourates décrivent avec précision les événements de
                  l&apos;Heure (as-Sa&apos;ah) et du Jour de la
                  Résurrection (Yawm al-Qiyamah).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les sourates clés sur la fin des temps
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Sourate Al-Qiyamah (75) - La Résurrection
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;L&apos;homme pense-t-il que Nous ne
                      rassemblerons jamais ses os ? Mais si ! Nous sommes
                      capables de reconstituer ses phalanges.&quot; (75:3-4)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Cette sourate affirme la réalité de la résurrection et
                      rappelle la puissance absolue d&apos;Allah sur la
                      création et la recréation.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Sourate Az-Zalzalah (99) - Le tremblement de terre
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;Quand la terre tremblera de son tremblement, et
                      que la terre fera sortir ses fardeaux, et que
                      l&apos;homme dira : Qu&apos;a-t-elle ? Ce jour-là,
                      elle racontera son histoire.&quot; (99:1-4)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Cette sourate décrit le séisme cosmique qui précédera
                      la reddition des comptes, moment ou chaque atome de
                      bien et de mal sera pesé.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Sourate At-Takwir (81) - L&apos;obscurcissement
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;Quand le soleil sera obscurci, et que les étoiles
                      perdront leur éclat, et que les montagnes seront mises
                      en marche...&quot; (81:1-3)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      At-Takwir décrit le bouleversement cosmique total,
                      l&apos;effondrement de l&apos;ordre naturel tel que
                      nous le connaissons.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Sourate Al-Infitar (82) - La rupture du ciel
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;Quand le ciel se rompra, et que les étoiles se
                      disperseront, et que les mers déborderont...&quot;
                      (82:1-3)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Al-Infitar souligne que ce jour-là, chaque âme saura
                      ce qu&apos;elle a fait de bien et de mal, sans
                      possibilité de fuite.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les signes majeurs de l&apos;Heure
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Les hadiths authentiques rapportent plusieurs{" "}
                  <Link href="/signes-fin-monde-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">signes majeurs de la fin du monde en islam</Link>{" "}
                  qui précéderont la fin du monde. Ces signes ne
                  sont pas un sujet de terreur, mais d&apos;enseignement :
                  ils rappellent au croyant la nécessité de se préparer
                  spirituellement et d&apos;agir avec droiture.
                </p>

                {/* Tableau signes */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signe de l&apos;Heure
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Message clé
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Préparation recommandée
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          L&apos;apparition du Dajjal
                        </td>
                        <td className="py-3 pr-4">
                          Fitna suprême, distinction entre vérité et
                          mensonge
                        </td>
                        <td className="py-3">
                          Lire sourate Al-Kahf, renforcer la foi
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le retour de &apos;Issa (Jésus)
                        </td>
                        <td className="py-3 pr-4">
                          Victoire de la vérité, rétablissement de la
                          justice
                        </td>
                        <td className="py-3">
                          Vivre selon la justice et la droiture
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Gog et Magog (Ya&apos;juj wa Ma&apos;juj)
                        </td>
                        <td className="py-3 pr-4">
                          Corruption généralisée, épreuve de masse
                        </td>
                        <td className="py-3">
                          Du&apos;a de protection, solidarité communautaire
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Le lever du soleil à l&apos;Ouest
                        </td>
                        <td className="py-3 pr-4">
                          Fermeture de la porte du repentir
                        </td>
                        <td className="py-3">
                          Se repentir maintenant, sans attendre
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          La fumée (ad-Dukhan)
                        </td>
                        <td className="py-3 pr-4">
                          Épreuve universelle touchant croyants et
                          mécréants
                        </td>
                        <td className="py-3">
                          Renforcement de la prière et du dhikr
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a dit :{" "}
                  <em>
                    &quot;Si l&apos;Heure arrive et que l&apos;un d&apos;entre
                    vous a dans sa main un plant, s&apos;il peut le planter
                    avant qu&apos;elle ne se dresse, qu&apos;il le
                    plante.&quot;
                  </em>{" "}
                  (Rapporté par Ahmad et al-Bukhari dans al-Adab al-Mufrad.)
                  Ce hadith illustre l&apos;attitude positive que
                  l&apos;islam promeut face à la fin des temps : continuer à
                  agir, à construire et à faire le bien, peu importe la
                  proximité de l&apos;Heure.
                </p>

                <ArticleCTA
                  variant="page-mere"
                  title="Pour comprendre les fondements de l'interprétation des rêves"
                  href="/reves-islam"
                  linkText="Voir les 3 types de rêves en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 3 : Le Dajjal et les epreuves */}
              {/* ============================================ */}
              <section id="dajjal" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Le Dajjal et la pédagogie prophétique face aux épreuves
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Parmi les signes majeurs de l&apos;Heure,{" "}
                  <Link href="/dajjal-signes-islam" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">le Dajjal (l&apos;Antéchrist)</Link>{" "}
                  occupe une place centrale dans les
                  enseignements du Prophète (paix et bénédictions sur lui).
                  Si un rêve de fin du monde met en scène une figure
                  trompeuse ou un faux sauveur, comprendre la pédagogie
                  prophétique autour du Dajjal aide à décrypter ce message
                  onirique.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Distinguer la vérité du mensonge
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a décrit le
                  Dajjal comme la plus grande épreuve (fitna) que
                  l&apos;humanité ait jamais connue. Il a dit :{" "}
                  <em>
                    &quot;Il n&apos;y a aucun prophète qui n&apos;ait mis
                    en garde sa communauté contre le borgne menteur.&quot;
                  </em>{" "}
                  (Rapporté par al-Bukhari et Muslim.) Cette mise en garde
                  répétée à travers les âges souligne l&apos;importance de
                  la vigilance spirituelle.
                </p>

                <ul className="mt-6 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Renforcer sa connaissance du Coran</strong> :
                      le croyant qui connaît les versets d&apos;Allah est
                      mieux armé pour reconnaître la vérité et rejeter la
                      tromperie.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>Pratiquer le discernement</strong> : le
                      Prophète (paix et bénédictions sur lui) a enseigné
                      que le Dajjal inversera le bien et le mal. Ce qui
                      paraîtra bénéfique sera en réalité nuisible, et
                      inversement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      <strong>S&apos;attacher à la communauté</strong> :
                      l&apos;isolement affaiblit la foi. Rester uni à la
                      communauté musulmane (jama&apos;ah) est une protection
                      contre les épreuves.
                    </span>
                  </li>
                </ul>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La sourate Al-Kahf comme bouclier spirituel
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le Prophète (paix et bénédictions sur lui) a recommandé de
                  lire les dix premiers versets de la sourate Al-Kahf (18)
                  comme protection contre la fitna du Dajjal. Il a dit :{" "}
                  <em>
                    &quot;Celui qui mémorise les dix premiers versets de la
                    sourate Al-Kahf sera protégé contre le Dajjal.&quot;
                  </em>{" "}
                  (Rapporté par Muslim.) Cette sourate contient quatre
                  récits exemplaires (les gens de la caverne, le propriétaire
                  des deux jardins, Musa et Al-Khidr, Dhul-Qarnayn) qui
                  enseignent la patience, la sagesse et la confiance en
                  Allah face aux épreuves.
                </p>

                <p className="mt-4 leading-relaxed text-foreground">
                  Pour celui qui rêve de la fin du monde et ressent de
                  l&apos;angoisse, la lecture régulière de cette sourate,
                  notamment le vendredi, offre un apaisement du coeur et
                  une protection spirituelle renforcée. Ce rituel
                  hebdomadaire constitue un ancrage dans la foi qui dépasse
                  le cadre du rêve.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  La résilience de la foi face aux tribulations
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;enseignement prophétique sur{" "}
                  <Link href="/signes-mineurs-actuels" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">les signes annonciateurs de l&apos;Heure</Link>{" "}
                  n&apos;a jamais pour but de terroriser le
                  croyant, mais de le préparer. Le Prophète (paix et
                  bénédictions sur lui) a dit :{" "}
                  <em>
                    &quot;L&apos;affaire du croyant est étonnante : tout
                    est un bien pour lui. Si un bonheur lui advient, il
                    remercie et c&apos;est un bien pour lui. Si un malheur
                    le touche, il patiente et c&apos;est un bien pour
                    lui.&quot;
                  </em>{" "}
                  (Rapporté par Muslim.) Cette vision positive constitue le
                  fondement de l&apos;approche islamique face aux rêves
                  apocalyptiques.
                </p>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-la-fin-du-monde-islam-signes-spirituels-et-preparation-a-lau-dela-2.jpg"
                    alt="Le Dajjal et les épreuves de la fin des temps en islam, protection par la foi"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver d'un mort en islam : messages de l'au-delà et invocations conseillées"
                  description="Un autre rêve fréquent qui interroge sur l'au-delà et la relation avec les défunts."
                  href="/rever-mort-islam-messages"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 4 : Interpretation selon le scenario */}
              {/* ============================================ */}
              <section id="scenarios" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Interprétation selon le scénario du rêve
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Chaque rêve de fin du monde porte une symbolique
                  particulière selon la nature de la catastrophe observée.
                  Les savants musulmans, à commencer par Ibn Sirin,
                  insistent sur l&apos;importance d&apos;analyser chaque
                  détail du songe pour en extraire le sens le plus juste.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Par le feu
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver de la fin du monde par le feu évoque la purification
                  et l&apos;avertissement. Le feu, dans le Coran, est à la
                  fois un châtiment pour les mécréants et une épreuve pour
                  les croyants. Ce rêve peut signaler un comportement à
                  corriger, une colère intérieure non résolue ou un appel
                  pressant au repentir (tawbah). Les savants recommandent
                  de répondre par l&apos;aumône (sadaqah), car le Prophète
                  (paix et bénédictions sur lui) a dit :{" "}
                  <em>
                    &quot;L&apos;aumône éteint le péché comme l&apos;eau
                    éteint le feu.&quot;
                  </em>{" "}
                  (Rapporté par at-Tirmidhi.)
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Par l&apos;eau (déluge)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  L&apos;eau dans un rêve apocalyptique renvoie au récit
                  coranique du déluge de Nuh (Noé), paix sur lui. La
                  sourate Hud (11:40-44) décrit comment Allah a sauvé les
                  croyants dans l&apos;arche tandis que les mécréants
                  étaient engloutis. Si vous rêvez d&apos;un déluge
                  destructeur, cela peut symboliser un bouleversement
                  émotionnel profond. Si vous survivez au déluge, c&apos;est
                  un signe de foi solide et de protection divine.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Par un tremblement de terre
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Le tremblement de terre dans un rêve eschatologique est
                  directement lié à la sourate Az-Zalzalah (99). Selon Ibn
                  Sirin, il symbolise un bouleversement imminent dans la
                  vie du rêveur : changement de situation, remise en
                  question profonde ou perte de repères habituels. Ce
                  rêve appelle à ancrer sa vie dans{" "}
                  <Link href="/prier-islam-excellence-spirituelle" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">la prière</Link>{" "}
                  et la recherche de stabilité auprès d&apos;Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Survivre à la fin du monde
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver de survivre à la destruction est l&apos;un des
                  scénarios les plus positifs. Il indique la solidité de
                  la foi, la capacité à traverser les épreuves et la
                  protection divine (hifzh). Ce rêve encourage le croyant
                  à persévérer dans la piété et à renforcer son tawakkul
                  (confiance en Allah).
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Voir le Jour du Jugement (Yawm al-Qiyamah)
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Rêver de la scène du Jugement dernier, avec la balance
                  des actes (al-Mizan), le pont Sirat ou la reddition des
                  comptes, est une invitation directe à évaluer ses propres
                  actions. Ce rêve pousse à se demander : &quot;Si je
                  devais rendre des comptes maintenant, quels seraient mes
                  actes les plus lourds sur la balance ?&quot; C&apos;est
                  un appel à multiplier les bonnes oeuvres et à demander
                  pardon pour les manquements.
                </p>

                {/* Tableau elements du reve */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Élément du rêve
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Signification
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Outil de protection
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Feu dévastateur
                        </td>
                        <td className="py-3 pr-4">
                          Purification, appel au repentir, colère à
                          canaliser
                        </td>
                        <td className="py-3">
                          Sadaqah, istighfar (demande de pardon)
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Déluge / inondation
                        </td>
                        <td className="py-3 pr-4">
                          Bouleversement émotionnel, renouveau possible
                        </td>
                        <td className="py-3">
                          Prière de nuit (qiyam al-layl), dhikr
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tremblement de terre
                        </td>
                        <td className="py-3 pr-4">
                          Changement majeur, perte de repères
                        </td>
                        <td className="py-3">
                          Sourate Az-Zalzalah, ancrage dans la salat
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Ciel qui s&apos;effondre
                        </td>
                        <td className="py-3 pr-4">
                          Perte d&apos;une figure d&apos;autorité,
                          vacillement des certitudes
                        </td>
                        <td className="py-3">
                          Du&apos;a de raffermissement du coeur
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Étoiles qui tombent
                        </td>
                        <td className="py-3 pr-4">
                          Disparition de repères spirituels ou moraux
                        </td>
                        <td className="py-3">
                          Renforcer les liens avec les savants
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Balance des actes visible
                        </td>
                        <td className="py-3 pr-4">
                          Invitation à préparer sa reddition des comptes
                        </td>
                        <td className="py-3">
                          Multiplier les bonnes oeuvres, se repentir
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ============================================ */}
              {/* SECTION 5 : Que faire apres ce reve */}
              {/* ============================================ */}
              <section id="apres-reve" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Que faire après un rêve de fin du monde en islam
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le Prophète Muhammad (paix et bénédictions sur lui) a
                  transmis des instructions précises sur la conduite à
                  adopter après un rêve perturbant. Ces gestes prophétiques,
                  simples mais puissants, apportent un apaisement immédiat
                  et renforcent la connexion avec Allah.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Les gestes prophétiques après un mauvais rêve
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  D&apos;après le hadith rapporté par Abu Qatadah
                  (qu&apos;Allah l&apos;agrée) et consigné par al-Bukhari
                  et Muslim, le Prophète (paix et bénédictions sur lui) a
                  enseigné quatre gestes protecteurs :
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Souffler légèrement trois fois sur la gauche
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Ce geste symbolique repousse l&apos;influence de
                        Shaytan. Il s&apos;agit d&apos;un souffle léger,
                        sans cracher, effectué sur le côté gauche au réveil.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Chercher refuge auprès d&apos;Allah
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Réciter trois fois :{" "}
                        <em>
                          &quot;A&apos;udhu billahi min ash-shaytani
                          r-rajim&quot;
                        </em>{" "}
                        (Je cherche refuge auprès d&apos;Allah contre Satan
                        le lapidé). Cette formule protectrice chasse
                        l&apos;angoisse inspirée par Shaytan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Changer de côté pour se rendormir
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a
                        recommandé de changer de position dans le lit.
                        Ce geste simple marque une rupture symbolique avec
                        le rêve perturbant et favorise un sommeil plus
                        serein.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Ne pas raconter le rêve
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a
                        interdit de raconter un mauvais rêve, sauf à une
                        personne de confiance ou un savant. Raconter un
                        hulm amplifie son effet et peut provoquer de
                        l&apos;anxiété supplémentaire.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Du&apos;as de protection recommandées
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Ayat al-Kursi (sourate Al-Baqarah, 2:255)
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;Allah ! Point de divinité à part Lui, le Vivant,
                      Celui qui subsiste par lui-même. Ni somnolence ni
                      sommeil ne Le saisissent...&quot;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Le Prophète (paix et bénédictions sur lui) a dit que
                      celui qui récite ce verset avant de dormir sera
                      protégé par un ange toute la nuit. (Rapporté par
                      al-Bukhari.)
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Les trois dernières sourates (Al-Ikhlas, Al-Falaq,
                      An-Nas)
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      Souffler dans ses paumes après les avoir récitées
                      et passer les mains sur le corps, en commençant par
                      la tête et le visage. Le Prophète (paix et
                      bénédictions sur lui) pratiquait ce rituel chaque
                      nuit avant de dormir. (Rapporté par al-Bukhari et
                      Muslim.)
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-5">
                    <p className="font-semibold text-primary">
                      Du&apos;a de refuge contre le mal des rêves
                    </p>
                    <p className="mt-1 text-sm italic text-foreground-secondary">
                      &quot;Allahumma inni a&apos;udhu bika min
                      &apos;adhabin nar wa min &apos;adhabil qabr wa min
                      fitnatil mahya wal mamat wa min sharri fitnatil
                      masihid-Dajjal&quot;
                    </p>
                    <p className="mt-1 text-sm text-foreground-secondary">
                      (Ô Allah, je cherche refuge auprès de Toi contre le
                      châtiment du feu, le châtiment de la tombe, les
                      épreuves de la vie et de la mort, et le mal de la
                      fitna du Dajjal.) Rapporté par al-Bukhari et Muslim.
                    </p>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Quand s&apos;inquiéter et quand être en paix
                </h3>

                <p className="mt-4 leading-relaxed text-foreground">
                  Si le rêve de fin du monde survient une seule fois et que
                  vous parvenez à retrouver la sérénité après les gestes
                  prophétiques, il n&apos;y a pas lieu de s&apos;alarmer.
                  En revanche, si ce type de rêve se répète fréquemment,
                  s&apos;accompagne d&apos;anxiété persistante ou perturbe
                  votre quotidien, il est recommandé de :
                </p>

                <ul className="mt-4 space-y-3 text-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Consulter un imam ou un savant compétent pour
                      l&apos;interprétation du rêve.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Vérifier les causes contextuelles : stress, anxiété,
                      consommation excessive de contenus eschatologiques.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Renforcer les rituels du coucher : wudu
                      (ablutions), adhkar du soir, lecture du Coran.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>
                      Ne pas hésiter à solliciter un accompagnement si
                      l&apos;anxiété affecte la santé mentale.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 overflow-hidden rounded-xl">
                  <Image
                    src="https://www.blog.islamreligion.fr/wp-content/uploads/2025/09/Rever-de-la-fin-du-monde-islam-signes-spirituels-et-preparation-a-lau-dela-3.jpg"
                    alt="Du'as de protection et gestes prophétiques après un rêve de fin du monde en islam"
                    width={1200}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>

                <ArticleCTA
                  variant="lire-aussi"
                  title="Rêver de tuer quelqu'un en islam : signification et repentir"
                  description="Un rêve perturbant qui interroge la conscience et appelle au discernement spirituel."
                  href="/signification-reve-tuer-islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 6 : Preparation ethique et sereine */}
              {/* ============================================ */}
              <section id="preparation" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Agir face à la fin du monde : préparation éthique et
                  sereine
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  L&apos;islam ne demande pas au croyant de vivre dans la
                  terreur de la fin des temps, mais de transformer cette
                  conscience en actions positives. Un rêve de fin du monde
                  peut devenir le point de départ d&apos;un renouveau
                  spirituel et éthique concret. Le Prophète (paix et
                  bénédictions sur lui) a enseigné que la meilleure
                  préparation à l&apos;Heure est de multiplier les bonnes
                  oeuvres.
                </p>

                <h3 className="mt-8 text-xl font-semibold text-primary">
                  Actions concrètes pour renforcer sa foi
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        La prière régulière (salat)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Les cinq prières quotidiennes sont le pilier de la
                        vie du musulman. Allah dit dans le Coran :{" "}
                        <em>
                          &quot;La prière préserve de la turpitude et du
                          blâmable.&quot;
                        </em>{" "}
                        (29:45). Après un rêve perturbant, s&apos;ancrer
                        dans la prière apporte stabilité et sérénité.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        L&apos;aumône (sadaqah et zakat)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a dit :{" "}
                        <em>
                          &quot;L&apos;aumône éteint le péché comme
                          l&apos;eau éteint le feu.&quot;
                        </em>{" "}
                        (at-Tirmidhi.) Donner pour la cause d&apos;Allah
                        purifie le coeur et protège contre les épreuves.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        La solidarité communautaire
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a comparé
                        la communauté des croyants à un seul corps :{" "}
                        <em>
                          &quot;Quand un membre souffre, tout le corps
                          répond par l&apos;insomnie et la fièvre.&quot;
                        </em>{" "}
                        (Rapporté par al-Bukhari et Muslim.) L&apos;entraide
                        et la solidarité sont les meilleures réponses
                        collectives face à l&apos;incertitude.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      4
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        Le repentir sincère (tawbah)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Allah dit dans le Coran :{" "}
                        <em>
                          &quot;Dis : Ô Mes serviteurs qui avez commis des
                          excès à votre propre détriment, ne désespérez pas
                          de la miséricorde d&apos;Allah. Car Allah
                          pardonne tous les péchés. Oui, c&apos;est Lui le
                          Pardonneur, le Très Miséricordieux.&quot;
                        </em>{" "}
                        (39:53).{" "}
                        <Link href="/repentir-sincere-islam-tawba" className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary">Le repentir sincère</Link>{" "}
                        est toujours accessible et
                        constitue la meilleure réponse face à la peur de
                        la fin.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                      5
                    </span>
                    <div>
                      <h4 className="font-semibold text-primary">
                        La recherche du savoir (&apos;ilm)
                      </h4>
                      <p className="mt-1 leading-relaxed text-foreground-secondary">
                        Le Prophète (paix et bénédictions sur lui) a dit :{" "}
                        <em>
                          &quot;La recherche du savoir est une obligation
                          pour tout musulman.&quot;
                        </em>{" "}
                        (Rapporté par Ibn Majah.) Comprendre l&apos;eschatologie
                        islamique à travers des sources fiables dissipe les
                        peurs infondées et renforce la foi. Pour approfondir
                        sa connaissance,{" "}
                        <Link
                          href="/apprendre-le-coran"
                          className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                        >
                          apprendre le Coran
                        </Link>{" "}
                        est un premier pas bénéfique.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tableau actions */}
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b-2 border-primary/10">
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Action
                        </th>
                        <th className="py-3 pr-4 font-semibold text-primary">
                          Bénéfice individuel
                        </th>
                        <th className="py-3 font-semibold text-primary">
                          Impact communautaire
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Prière régulière
                        </td>
                        <td className="py-3 pr-4">
                          Sérénité, ancrage spirituel, protection
                        </td>
                        <td className="py-3">
                          Cohésion lors des prières en groupe
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Aumône (sadaqah)
                        </td>
                        <td className="py-3 pr-4">
                          Purification du coeur, expiation des péchés
                        </td>
                        <td className="py-3">
                          Soutien aux démunis, solidarité
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Repentir (tawbah)
                        </td>
                        <td className="py-3 pr-4">
                          Renouveau intérieur, allègement des péchés
                        </td>
                        <td className="py-3">
                          Réconciliation, pardon entre individus
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Lecture du Coran
                        </td>
                        <td className="py-3 pr-4">
                          Apaisement, compréhension des signes divins
                        </td>
                        <td className="py-3">
                          Transmission du savoir, éducation
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Solidarité et entraide
                        </td>
                        <td className="py-3 pr-4">
                          Sentiment d&apos;appartenance, force morale
                        </td>
                        <td className="py-3">
                          Résilience collective, tissu social renforcé
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-6 leading-relaxed text-foreground">
                  Le croyant qui agit avec droiture et confiance en Allah
                  n&apos;a rien à craindre de la fin des temps. Le Coran
                  rappelle :{" "}
                  <em>
                    &quot;En vérité, les alliés d&apos;Allah ne seront
                    nullement affectés par la peur et ne seront point
                    affligés.&quot;
                  </em>{" "}
                  (10:62). Cette promesse divine constitue le fondement de
                  la sérénité face à l&apos;inconnu.
                </p>

                <ArticleCTA
                  variant="page-mere"
                  title="Découvrez les protections spirituelles en islam"
                  href="/sorcellerie-islam-protection"
                  linkText="Protection et remèdes en islam"
                />
              </section>

              {/* ============================================ */}
              {/* SECTION 7 : Selon la situation du reveur */}
              {/* ============================================ */}
              <section id="profils" className="mt-16 scroll-mt-24">
                <h2 className="text-2xl font-bold text-primary lg:text-3xl">
                  Signification selon la situation du rêveur
                </h2>

                <p className="mt-6 leading-relaxed text-foreground">
                  La tradition islamique enseigne que l&apos;interprétation
                  d&apos;un rêve varie selon la situation personnelle du
                  rêveur. Un même songe de fin du monde ne porte pas le
                  même message selon l&apos;âge, le statut familial ou les
                  circonstances de vie de la personne qui le fait.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme mariée
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Rêver de la fin du monde peut refléter une
                      préoccupation pour la famille et le foyer. Ce rêve
                      invite à renforcer la prière commune au sein du
                      couple, à éduquer les enfants dans la foi et à
                      consolider les liens familiaux par le dhikr et les
                      actes de bienfaisance partagés.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme célibataire
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut symboliser une phase de transition
                      intérieure, un questionnement sur le sens de la vie
                      ou un appel à se rapprocher d&apos;Allah avant
                      d&apos;entreprendre de nouveaux projets. Il invite à
                      renforcer la prière individuelle et à chercher
                      la guidance divine par l&apos;istikhara.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour une femme enceinte
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      La grossesse amplifie naturellement les émotions et
                      les rêves. Un rêve de fin du monde pendant cette
                      période peut traduire une inquiétude pour
                      l&apos;avenir de l&apos;enfant. C&apos;est un rappel
                      de confier la protection du bébé à Allah et de
                      multiplier les du&apos;as pour sa santé et sa
                      droiture.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-white p-6">
                    <h3 className="text-lg font-semibold text-primary">
                      Pour un homme
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                      Ce rêve peut refléter une pression liée aux
                      responsabilités, une remise en question
                      professionnelle ou un appel à recentrer ses
                      priorités sur l&apos;au-delà. Il invite à réévaluer
                      ses actes quotidiens et à renforcer son rôle de
                      protecteur spirituel au sein de la famille.
                    </p>
                  </div>
                </div>
              </section>

              {/* ============================================ */}
              {/* FAQ */}
              {/* ============================================ */}
              <FaqSection items={faqItems} id="faq" />

              {/* Navigation interne */}
              <section className="mt-12 rounded-xl bg-background-alt p-6">
                <h2 className="text-lg font-bold text-primary">
                  Interprétations de rêves similaires
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/reves-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Tous les rêves en islam
                  </Link>
                  <Link
                    href="/rever-mort-islam-messages"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver d&apos;un mort en islam
                  </Link>
                  <Link
                    href="/signification-reve-tuer-islam"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Rêver de tuer en islam
                  </Link>
                  <Link
                    href="/sorcellerie-islam-protection"
                    className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/30 hover:text-primary"
                  >
                    Sorcellerie en islam
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
