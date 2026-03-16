"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { levels } from "@/data/quizQuestions";

/* ─── Composant principal ─── */
export default function QuizGame() {
  const [currentLevel, setCurrentLevel] = useState(0); // 0 = sélection
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [showUnlockForm, setShowUnlockForm] = useState(false);
  const [consent, setConsent] = useState(false);

  const level = currentLevel > 0 ? levels[currentLevel - 1] : null;
  const question = level ? level.questions[currentQ] : null;
  const totalQuestions = level ? level.questions.length : 0;

  const handleAnswer = useCallback(
    (index: number) => {
      if (selected !== null || !question) return;
      setSelected(index);
      setShowExplanation(true);
      if (index === question.correctIndex) {
        setScore((s) => s + 1);
      }
    },
    [selected, question]
  );

  const handleNext = useCallback(() => {
    if (!level) return;
    if (currentQ + 1 < level.questions.length) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  }, [currentQ, level]);

  const handleStartLevel = useCallback((lvl: number) => {
    setCurrentLevel(lvl);
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  }, []);

  const handleBackToMenu = useCallback(() => {
    setCurrentLevel(0);
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  }, []);

  const handleUnlockSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, skipTag: true }),
      });
    } catch {
      // on débloque quand même
    }
    setEmailSubmitted(true);
    setEmailLoading(false);
    setUnlockedLevels([1, 2, 3]);
    setShowUnlockForm(false);
  };

  const scorePercent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const progressPercent =
    totalQuestions > 0
      ? Math.round(((currentQ + (selected !== null ? 1 : 0)) / totalQuestions) * 100)
      : 0;

  /* ─── Écran de résultat ─── */
  if (finished && level) {
    const perfect = score === totalQuestions;
    const good = scorePercent >= 70;

    return (
      <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:p-10">
        {/* Confetti / étoiles */}
        <div className="mb-6 text-center">
          <div className="mb-4 text-6xl">
            {perfect ? "🎉" : good ? "👏" : "💪"}
          </div>
          <h3 className="text-2xl font-bold text-primary lg:text-3xl">
            {perfect
              ? "Parfait, ma sha Allah !"
              : good
              ? "Très bien, barak Allahu fik !"
              : "Continue tes efforts !"}
          </h3>
          <p className="mt-3 text-lg text-foreground-secondary">
            Tu as obtenu{" "}
            <span className="font-bold text-secondary">
              {score}/{totalQuestions}
            </span>{" "}
            bonnes réponses ({scorePercent} %)
          </p>
        </div>

        {/* Barre de score */}
        <div className="mx-auto mb-8 max-w-md">
          <div className="h-4 overflow-hidden rounded-full bg-accent">
            <div
              className="h-full rounded-full bg-secondary transition-all duration-1000"
              style={{ width: `${scorePercent}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm text-foreground-secondary">
            <span>0 %</span>
            <span>100 %</span>
          </div>
        </div>

        {/* Image résultat */}
        <div className="relative mx-auto mb-8 aspect-video max-w-lg overflow-hidden rounded-xl">
          <Image
            src="/images/quizz-islam/enfant-resultat-quizz-islam.jpg"
            alt="Enfant content après avoir répondu au quizz islam"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>

        {/* Déblocage niveaux 2 et 3 */}
        {currentLevel === 1 && !emailSubmitted && !unlockedLevels.includes(2) && (
          <div className="mb-8 rounded-xl border-2 border-secondary/30 bg-secondary/5 p-6 text-center">
            <div className="mb-3 text-3xl">🔓</div>
            <h4 className="text-lg font-bold text-primary">
              Débloque les niveaux 2 et 3
            </h4>
            <p className="mt-2 text-sm text-foreground-secondary">
              Entre ton adresse email pour accéder aux quiz « Apprenti savant » et « Graine de savant » avec des questions plus avancées.
            </p>
            {!showUnlockForm ? (
              <button
                onClick={() => setShowUnlockForm(true)}
                className="mt-4 rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary-dark"
              >
                Débloquer les niveaux suivants
              </button>
            ) : (
              <form onSubmit={handleUnlockSubmit} className="mx-auto mt-4 max-w-sm space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Ton adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground-secondary/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
                />
                <label className="flex items-start gap-3 cursor-pointer text-left">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 rounded accent-secondary"
                  />
                  <span className="text-xs text-foreground-secondary">
                    J&apos;accepte de recevoir des informations par email. Désinscription possible à tout moment (RGPD).
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={emailLoading}
                  className="w-full rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition-colors hover:bg-secondary-dark disabled:opacity-60"
                >
                  {emailLoading ? "Envoi..." : "Débloquer maintenant"}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Boutons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => handleStartLevel(currentLevel)}
            className="rounded-lg border border-border px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-accent"
          >
            Recommencer ce niveau
          </button>
          <button
            onClick={handleBackToMenu}
            className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-light"
          >
            Retour aux niveaux
          </button>
        </div>
      </div>
    );
  }

  /* ─── Sélection de niveau ─── */
  if (currentLevel === 0) {
    return (
      <div className="space-y-4">
        {levels.map((lvl) => {
          const locked = !unlockedLevels.includes(lvl.id);
          return (
            <button
              key={lvl.id}
              onClick={() => !locked && handleStartLevel(lvl.id)}
              disabled={locked}
              className={`group w-full rounded-xl border p-5 text-left transition-all lg:p-6 ${
                locked
                  ? "cursor-not-allowed border-border bg-accent/50 opacity-60"
                  : "border-border bg-white shadow-sm hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${
                    locked ? "bg-accent" : "bg-secondary/10"
                  }`}
                >
                  {locked ? "🔒" : lvl.emoji}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-primary">
                      Niveau {lvl.id} — {lvl.title}
                    </h3>
                    {locked && (
                      <span className="rounded-full bg-foreground-secondary/10 px-2.5 py-0.5 text-xs font-medium text-foreground-secondary">
                        Verrouillé
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-foreground-secondary">
                    {lvl.description} • {lvl.questions.length} questions
                  </p>
                </div>
                {!locked && (
                  <svg
                    className="h-5 w-5 shrink-0 text-foreground-secondary transition-transform group-hover:translate-x-1 group-hover:text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                )}
              </div>
            </button>
          );
        })}

        {!unlockedLevels.includes(2) && !emailSubmitted && (
          <p className="text-center text-sm text-foreground-secondary">
            Termine le niveau 1 pour débloquer les niveaux suivants
          </p>
        )}
      </div>
    );
  }

  /* ─── Question en cours ─── */
  if (!question || !level) return null;

  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm lg:p-8">
      {/* En-tête : niveau + progression */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={handleBackToMenu}
          className="flex items-center gap-1.5 text-sm font-medium text-foreground-secondary transition-colors hover:text-primary"
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Niveaux
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground-secondary">
            {currentQ + 1}/{totalQuestions}
          </span>
          <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">
            {score} pt{score > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mb-8 h-2.5 overflow-hidden rounded-full bg-accent">
        <div
          className="h-full rounded-full bg-secondary transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <span className="mb-2 inline-block rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Question {currentQ + 1}
        </span>
        <h3 className="text-xl font-bold text-primary lg:text-2xl">
          {question.question}
        </h3>
      </div>

      {/* Options */}
      <div className="mb-6 space-y-3">
        {question.options.map((opt, i) => {
          let btnClass =
            "w-full rounded-xl border-2 px-5 py-4 text-left font-medium transition-all";

          if (selected === null) {
            btnClass +=
              " border-border text-foreground hover:border-secondary/40 hover:bg-secondary/5 cursor-pointer";
          } else if (i === question.correctIndex) {
            btnClass +=
              " border-green-500 bg-green-50 text-green-800";
          } else if (i === selected) {
            btnClass +=
              " border-red-400 bg-red-50 text-red-700";
          } else {
            btnClass += " border-border text-foreground-secondary opacity-50";
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              className={btnClass}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    selected === null
                      ? "bg-accent text-foreground-secondary"
                      : i === question.correctIndex
                      ? "bg-green-500 text-white"
                      : i === selected
                      ? "bg-red-400 text-white"
                      : "bg-accent text-foreground-secondary"
                  }`}
                >
                  {selected !== null && i === question.correctIndex
                    ? "✓"
                    : selected !== null && i === selected
                    ? "✗"
                    : String.fromCharCode(65 + i)}
                </span>
                {opt}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explication */}
      {showExplanation && (
        <div
          className={`mb-6 rounded-xl border-l-4 p-5 ${
            selected === question.correctIndex
              ? "border-green-500 bg-green-50"
              : "border-amber-500 bg-amber-50"
          }`}
        >
          <p className="mb-1 text-sm font-bold uppercase tracking-wide text-foreground-secondary">
            {selected === question.correctIndex
              ? "Bonne réponse !"
              : "Explication"}
          </p>
          <p className="text-sm leading-relaxed text-foreground">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Bouton suivant */}
      {selected !== null && (
        <button
          onClick={handleNext}
          className="w-full rounded-xl bg-secondary px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-secondary-dark sm:w-auto"
        >
          {currentQ + 1 < totalQuestions
            ? "Question suivante"
            : "Voir mon résultat"}
        </button>
      )}
    </div>
  );
}
