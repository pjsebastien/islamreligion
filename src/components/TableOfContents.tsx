"use client";

import { useState } from "react";

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="my-8 rounded-xl border border-border bg-white p-6 lg:sticky lg:top-24"
      aria-label="Sommaire"
    >
      {/* Header + toggle mobile */}
      <button
        type="button"
        className="flex w-full items-center justify-between lg:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-bold text-primary">Sommaire</h2>
        <svg
          className={`h-5 w-5 text-foreground-secondary transition-transform lg:hidden ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Liste */}
      <ol
        className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 lg:max-h-none lg:opacity-100 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
        }`}
      >
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-3 rounded-lg px-3 py-2 text-sm text-foreground-secondary transition-colors hover:bg-accent hover:text-primary"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-primary">
                {index + 1}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
