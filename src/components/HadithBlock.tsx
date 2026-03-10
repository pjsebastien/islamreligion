interface HadithBlockProps {
  number?: number;
  title: string;
  narrator: string;
  arabic: string;
  translation: string;
  source: string;
  grade: "sahih" | "hasan" | "daif";
  explanation: string;
}

const gradeConfig = {
  sahih: { label: "Sahih (authentique)", className: "bg-green-100 text-green-800 border-green-300" },
  hasan: { label: "Hasan (bon)", className: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  daif: { label: "Da'if (faible)", className: "bg-red-100 text-red-800 border-red-300" },
};

export default function HadithBlock({
  number,
  title,
  narrator,
  arabic,
  translation,
  source,
  grade,
  explanation,
}: HadithBlockProps) {
  const { label: gradeLabel, className: gradeClassName } = gradeConfig[grade];

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-accent shadow-sm">
      {/* En-tete */}
      <div className="border-b border-border bg-primary/5 px-5 py-3 lg:px-6">
        <h3 className="text-base font-semibold text-primary lg:text-lg">
          {number != null && (
            <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
              {number}
            </span>
          )}
          {title}
        </h3>
        <p className="mt-1 text-sm text-foreground-secondary">
          Rapporte par <span className="font-medium text-foreground">{narrator}</span>
        </p>
      </div>

      {/* Texte arabe */}
      <div className="border-b border-border px-5 py-4 lg:px-6">
        <p className="text-right font-arabic text-xl leading-[2.2] text-primary lg:text-2xl" dir="rtl">
          {arabic}
        </p>
      </div>

      {/* Traduction */}
      <div className="border-b border-border px-5 py-4 lg:px-6">
        <p className="text-sm font-medium uppercase tracking-wide text-foreground-secondary">Traduction</p>
        <p className="mt-2 text-base leading-relaxed text-foreground italic lg:text-lg">
          &laquo;&nbsp;{translation}&nbsp;&raquo;
        </p>
      </div>

      {/* Source + Grade */}
      <div className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-3 lg:px-6">
        <span className="text-sm text-foreground-secondary">
          <span className="font-medium text-foreground">{source}</span>
        </span>
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${gradeClassName}`}>
          {gradeLabel}
        </span>
      </div>

      {/* Explication */}
      <div className="px-5 py-4 lg:px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-foreground-secondary">Explication</p>
        <p className="text-base leading-relaxed text-foreground">{explanation}</p>
      </div>
    </div>
  );
}
