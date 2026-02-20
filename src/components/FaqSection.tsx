"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  id?: string;
}

export default function FaqSection({ items, id = "faq" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold text-primary lg:text-3xl">
        Questions fréquentes
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-sm"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 text-base font-semibold text-foreground lg:text-lg">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ${
                openIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-border px-6 py-5">
                <p className="text-base leading-relaxed text-foreground-secondary">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
