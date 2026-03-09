import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
      <span className="text-6xl font-bold text-secondary">404</span>
      <h1 className="mt-4 text-2xl font-bold text-primary lg:text-3xl">
        Page introuvable
      </h1>
      <p className="mt-4 text-foreground-secondary">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-dark"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/reves-islam"
          className="rounded-lg border border-border px-6 py-3 text-base font-semibold text-primary transition-colors hover:bg-accent"
        >
          Rêves en islam
        </Link>
      </div>

      <div className="mt-12 w-full rounded-xl border border-border bg-white p-6">
        <h2 className="text-lg font-semibold text-primary">Pages populaires</h2>
        <ul className="mt-4 space-y-3 text-left">
          <li>
            <Link href="/apprendre-larabe" className="text-sm text-foreground-secondary hover:text-secondary">
              Apprendre l&apos;arabe
            </Link>
          </li>
          <li>
            <Link href="/apprendre-le-coran" className="text-sm text-foreground-secondary hover:text-secondary">
              Apprendre le Coran
            </Link>
          </li>
          <li>
            <Link href="/reves-islam" className="text-sm text-foreground-secondary hover:text-secondary">
              Interprétation des rêves en islam
            </Link>
          </li>
          <li>
            <Link href="/remede-arabe" className="text-sm text-foreground-secondary hover:text-secondary">
              Remèdes arabes
            </Link>
          </li>
          <li>
            <Link href="/fin-monde-islam-preparation" className="text-sm text-foreground-secondary hover:text-secondary">
              Fin des temps en islam
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
