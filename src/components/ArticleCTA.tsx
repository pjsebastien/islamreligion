import Link from "next/link";

interface ArticleCTAProps {
  variant: "lire-aussi" | "page-mere" | "formation";
  title: string;
  description?: string;
  href: string;
  linkText?: string;
}

export default function ArticleCTA({
  variant,
  title,
  description,
  href,
  linkText,
}: ArticleCTAProps) {
  if (variant === "lire-aussi") {
    return (
      <div className="my-8 rounded-xl border border-secondary/20 bg-accent p-5 transition-colors hover:border-secondary/40">
        <div className="flex items-start gap-3">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
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
          <div>
            <p className="text-sm font-semibold text-primary">Lire aussi</p>
            <Link
              href={href}
              className="mt-1 block text-base font-medium text-foreground underline decoration-secondary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-secondary"
            >
              {title}
            </Link>
            {description && (
              <p className="mt-1 text-sm text-foreground-secondary">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "page-mere") {
    return (
      <div className="my-8 rounded-xl bg-primary-dark p-6">
        <div className="flex items-center gap-3">
          <svg
            className="h-6 w-6 shrink-0 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-white/70">{title}</p>
            <Link
              href={href}
              className="mt-1 inline-flex items-center gap-1.5 text-base font-semibold text-secondary transition-colors hover:text-secondary-light"
            >
              {linkText || "Voir la page complète"}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // variant === "formation"
  return (
    <div className="my-8 rounded-xl border border-secondary/30 bg-gradient-to-br from-accent to-white p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
          <svg
            className="h-5 w-5 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-primary">{title}</p>
          {description && (
            <p className="mt-1 text-sm leading-relaxed text-foreground-secondary">
              {description}
            </p>
          )}
          <Link
            href={href}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-secondary-light hover:shadow-md"
          >
            {linkText || "En savoir plus"}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
