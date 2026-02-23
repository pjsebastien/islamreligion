"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://formspree.io/f/xeelparo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `[Contact] ${formData.subject || "Message depuis le site"}`,
          type: "contact",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-secondary/30 bg-accent px-6 py-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
          <svg
            className="h-7 w-7 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary">Message envoyé</h3>
        <p className="mt-2 text-foreground-secondary">
          Merci pour votre message. Nous vous répondrons dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-secondary/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="votre@email.fr"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-secondary/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Sujet
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
        >
          <option value="">Choisissez un sujet</option>
          <option value="Question sur un article">Question sur un article</option>
          <option value="Signaler une erreur">Signaler une erreur</option>
          <option value="Suggestion de sujet">Suggestion de sujet</option>
          <option value="Partenariat">Partenariat</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Votre message..."
          value={formData.message}
          onChange={handleChange}
          className="mt-1 w-full resize-y rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-secondary/50 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement
          à contact@islamreligion.fr.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-60"
      >
        {loading ? (
          "Envoi en cours..."
        ) : (
          <>
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
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}
