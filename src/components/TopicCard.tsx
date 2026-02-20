import Link from "next/link";

interface TopicCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function TopicCard({ title, description, href, icon }: TopicCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg"
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-secondary/10 group-hover:text-secondary">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-primary transition-colors group-hover:text-secondary">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
        {description}
      </p>
    </Link>
  );
}
