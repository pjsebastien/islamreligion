import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos d'IslamReligion.fr",
  description:
    "Découvrez la mission, les valeurs et l'équipe derrière IslamReligion.fr. Un site dédié à la compréhension authentique de l'islam, ses enseignements et sa spiritualité.",
  alternates: {
    canonical: "https://www.islamreligion.fr/a-propos",
  },
};

export default function APropos() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos d'IslamReligion.fr",
    description:
      "Découvrez la mission, les valeurs et l'équipe derrière IslamReligion.fr.",
    url: "https://www.islamreligion.fr/a-propos",
    mainEntity: {
      "@type": "Organization",
      name: "IslamReligion.fr",
      url: "https://www.islamreligion.fr",
      description:
        "Site francophone dédié à la compréhension authentique de l'islam.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Fil d'Ariane */}
        <nav
          className="mb-8 text-sm text-foreground-secondary"
          aria-label="Fil d&apos;Ariane"
        >
          <Link href="/" className="hover:text-primary">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">À propos</span>
        </nav>

        {/* Hero */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
            <Image
              src="/images/favicon-islam.ico"
              alt="Logo IslamReligion"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-primary lg:text-4xl">
            À propos d&apos;Islam<span className="text-secondary">Religion</span>.fr
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground-secondary">
            Un espace francophone dédié à la compréhension authentique de
            l&apos;islam, accessible à tous.
          </p>
        </div>

        {/* ============================================ */}
        {/* NOTRE MISSION */}
        {/* ============================================ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">Notre mission</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-foreground">
            <p>
              IslamReligion.fr est né d&apos;un constat simple : trouver des
              informations fiables et accessibles sur l&apos;islam en français
              reste un défi pour beaucoup. Entre les sources superficielles, les
              interprétations approximatives et les contenus polémiques, il
              manquait un espace de référence qui allie rigueur, clarté et
              respect.
            </p>
            <p>
              Notre mission est de proposer un contenu de qualité sur les
              différentes dimensions de l&apos;islam : la foi, la pratique
              quotidienne, la spiritualité, la médecine prophétique,
              l&apos;interprétation des rêves, l&apos;apprentissage du Coran et
              de la langue arabe. Chaque article est rédigé avec soin, en
              s&apos;appuyant sur les sources authentiques (Coran, Sunna et
              avis des savants reconnus).
            </p>
            <p>
              Nous ne prétendons pas remplacer les savants ni les
              professionnels de santé. Notre rôle est de rendre accessible un
              savoir souvent dispersé, en le présentant de manière structurée,
              compréhensible et contextualisée pour le lecteur francophone.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* NOS VALEURS */}
        {/* ============================================ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">Nos valeurs</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-primary">
                Authenticité
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                Chaque information est vérifiée et sourcée. Nous citons les
                hadiths avec leurs chaînes de transmission, référençons les
                avis des savants et distinguons clairement les opinions des
                certitudes.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <svg
                  className="h-5 w-5 text-secondary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-primary">
                Accessibilité
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                Nos articles sont rédigés dans un français clair et accessible,
                sans jargon inutile. Que vous soyez musulman pratiquant,
                nouveau converti ou simplement curieux, vous trouverez des
                réponses à vos questions.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-primary">Respect</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                L&apos;islam est un sujet sensible. Nous traitons chaque thème
                avec bienveillance, sans jugement ni polémique. Notre ton est
                informatif, respectueux et neutre, fidèle à la tradition de
                sagesse islamique.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <svg
                  className="h-5 w-5 text-secondary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-primary">Rigueur</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                Nos articles sur la médecine prophétique rappellent toujours
                la nécessité de consulter un professionnel de santé. Nous ne
                substituons jamais les remèdes traditionnels à la médecine
                moderne, mais les présentons comme complémentaires.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* NOS THÉMATIQUES */}
        {/* ============================================ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">
            Nos thématiques
          </h2>
          <p className="mt-4 leading-relaxed text-foreground-secondary">
            IslamReligion.fr couvre un large éventail de sujets pour
            accompagner le musulman francophone dans sa pratique et sa
            compréhension de l&apos;islam.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <span className="mt-0.5 text-2xl">🕌</span>
              <div>
                <h3 className="font-semibold text-primary">
                  <Link
                    href="/apprendre-le-coran"
                    className="underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Apprentissage du Coran et de l&apos;arabe
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  Méthodes, ressources et conseils pour apprendre le Coran et
                  la langue arabe, quel que soit votre niveau.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <span className="mt-0.5 text-2xl">🌙</span>
              <div>
                <h3 className="font-semibold text-primary">
                  <Link
                    href="/reves-islam"
                    className="underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Interprétation des rêves en islam
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  Plus de 20 articles détaillés sur la symbolique des rêves
                  dans la tradition islamique, avec les avis des savants et
                  les références aux textes authentiques.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <span className="mt-0.5 text-2xl">🌿</span>
              <div>
                <h3 className="font-semibold text-primary">
                  <Link
                    href="/remede-arabe"
                    className="underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Remèdes arabes et médecine prophétique
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  Nigelle, miel, hijama, talbina : les remèdes naturels issus
                  de la Sunna, présentés avec rigueur et toujours accompagnés
                  d&apos;un rappel sur la nécessité du suivi médical.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <span className="mt-0.5 text-2xl">📖</span>
              <div>
                <h3 className="font-semibold text-primary">
                  Pratique religieuse et spiritualité
                </h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  Prière, jeûne, repentir, invocations, mariage, jurisprudence
                  islamique : des articles approfondis pour accompagner la
                  pratique au quotidien.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-5">
              <span className="mt-0.5 text-2xl">⏳</span>
              <div>
                <h3 className="font-semibold text-primary">
                  <Link
                    href="/fin-monde-islam-preparation"
                    className="underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
                  >
                    Eschatologie islamique
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-foreground-secondary">
                  Les signes de la fin des temps, le Dajjal, le retour de
                  Jésus (Issa), Gog et Magog : les croyances eschatologiques
                  expliquées à la lumière du Coran et de la Sunna.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* NOTRE APPROCHE */}
        {/* ============================================ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">Notre approche</h2>
          <div className="mt-6 space-y-4 leading-relaxed text-foreground">
            <p>
              Chaque article publié sur IslamReligion.fr suit une méthodologie
              rigoureuse. Nous commençons par une recherche approfondie dans
              les sources islamiques authentiques : le Coran, les recueils de
              hadiths reconnus (Bukhari, Muslim, Abu Dawud, at-Tirmidhi, etc.)
              et les ouvrages des savants classiques comme Ibn al-Qayyim,
              an-Nawawi ou Ibn Taymiyya.
            </p>
            <p>
              Pour les articles liés à la médecine prophétique, nous croisons
              systématiquement les enseignements traditionnels avec les données
              de la recherche scientifique moderne. Cette double lecture permet
              de situer les remèdes prophétiques dans un cadre rationnel, tout
              en respectant leur dimension spirituelle.
            </p>
            <p>
              Nous veillons à présenter les différents avis des savants lorsque
              des divergences existent, sans imposer une école de pensée
              particulière. Notre objectif est d&apos;informer, pas de
              trancher les débats théologiques.
            </p>
          </div>
        </section>

        {/* ============================================ */}
        {/* NOUS CONTACTER */}
        {/* ============================================ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-primary">Nous contacter</h2>
          <div className="mt-6 rounded-xl border border-border bg-white p-6">
            <p className="leading-relaxed text-foreground">
              Vous avez une question, une suggestion ou vous souhaitez
              signaler une erreur dans l&apos;un de nos articles ? N&apos;hésitez
              pas à nous écrire. Nous lisons chaque message et nous efforçons
              de répondre dans les meilleurs délais.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <a
                href="mailto:contact@islamreligion.fr"
                className="font-medium text-primary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary"
              >
                contact@islamreligion.fr
              </a>
            </div>
          </div>
        </section>

        {/* Retour accueil */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
    </>
  );
}
