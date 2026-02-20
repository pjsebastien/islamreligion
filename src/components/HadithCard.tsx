interface HadithCardProps {
  arabic?: string;
  text: string;
  source: string;
}

export default function HadithCard({ arabic, text, source }: HadithCardProps) {
  return (
    <blockquote className="my-8 rounded-xl border-l-4 border-secondary bg-accent px-6 py-5 lg:px-8 lg:py-6">
      {arabic && (
        <p className="mb-4 text-right font-arabic text-xl leading-loose text-primary lg:text-2xl" dir="rtl">
          {arabic}
        </p>
      )}
      <p className="text-base leading-relaxed text-foreground italic lg:text-lg">
        &laquo;&nbsp;{text}&nbsp;&raquo;
      </p>
      <cite className="mt-3 block text-sm font-medium text-foreground-secondary not-italic">
        — {source}
      </cite>
    </blockquote>
  );
}
