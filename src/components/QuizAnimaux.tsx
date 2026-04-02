"use client";

import { useState, useEffect, useCallback } from "react";
import { chapters } from "@/data/quizAnimauxCoran";

const STORAGE_KEY = "quiz-adam-unlocked";
const SCORES_KEY = "quiz-adam-scores";

type ChapterScores = Record<number, { score: number; total: number }>;

function loadScores(): ChapterScores {
  try {
    const raw = localStorage.getItem(SCORES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveScores(scores: ChapterScores) {
  localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
}

export default function QuizAnimaux() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [chapterScores, setChapterScores] = useState<ChapterScores>({});
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(STORAGE_KEY) === "1");
    setChapterScores(loadScores());
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          tagName: "quiz-adam",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Une erreur est survenue. Réessayez.");
        return;
      }
      localStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
    } catch {
      setError("Une erreur est survenue. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  const chapter = selectedChapter !== null ? chapters[selectedChapter] : null;
  const questions = chapter?.questions ?? [];
  const totalQ = questions.length;
  const question = chapter ? questions[currentQ] : null;

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
    if (currentQ + 1 < totalQ) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      // Save chapter score
      if (selectedChapter !== null) {
        const updated = {
          ...chapterScores,
          [selectedChapter]: { score: score + (selected === question?.correctIndex ? 1 : 0), total: totalQ },
        };
        // Recalculate — score state may not have updated yet for last question
        setChapterScores(updated);
        saveScores(updated);
      }
      setFinished(true);
    }
  }, [currentQ, totalQ, selectedChapter, chapterScores, score, selected, question]);

  const handleBackToChapters = () => {
    setSelectedChapter(null);
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  const handleReplay = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
  };

  // Global score
  const globalScore = Object.values(chapterScores).reduce((a, c) => a + c.score, 0);
  const globalTotal = Object.values(chapterScores).reduce((a, c) => a + c.total, 0);
  const completedCount = Object.keys(chapterScores).length;

  // Loading state
  if (unlocked === null) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-secondary border-t-transparent" />
      </div>
    );
  }

  // ─── EMAIL GATE ───
  if (!unlocked) {
    return (
      <div className="mx-auto max-w-lg px-2">
        <div
          className="overflow-hidden rounded-2xl shadow-xl"
          style={{
            background: "linear-gradient(135deg, #1A1A4E 0%, #2D2D7A 100%)",
          }}
        >
          <div className="px-5 py-8 sm:px-10">
            <div className="mb-6 text-center">
              <div className="flex flex-wrap justify-center gap-1 text-3xl sm:text-4xl">
                {chapters.map((ch) => (
                  <span key={ch.animal}>{ch.emoji}</span>
                ))}
              </div>
              <h3 className="mt-4 text-xl font-extrabold text-white sm:text-2xl">
                Quiz : Les Animaux du Coran
              </h3>
              <p className="mt-2 text-sm text-white/70">
                30 questions pour découvrir les animaux mentionnés dans le Coran
                et les leçons qu&apos;ils nous enseignent !
              </p>
              <span
                className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                style={{ background: "#FFD93D", color: "#1A1A4E" }}
              >
                6 — 12 ans
              </span>
            </div>

            <p className="mb-4 text-center text-sm text-white/60">
              Entre ton email pour accéder au quiz :
            </p>

            <form onSubmit={handleEmailSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Ton prénom (optionnel)"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                required
                placeholder="L'adresse email du parent *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3.5 text-base text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <label className="flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-5 w-5 shrink-0 rounded accent-white"
                />
                <span className="text-xs text-white/50">
                  J&apos;accepte de recevoir des ressources par email (RGPD).
                </span>
              </label>

              {error && (
                <p
                  className="rounded-lg p-3 text-sm text-white"
                  style={{ background: "#FF6B6B" }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl px-4 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #4ECDC4, #44B8B0)",
                }}
              >
                {loading ? "Chargement..." : "Accéder au quiz 🎮"}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-white/30">
              🔒 Aucun spam — désinscription en 1 clic
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ─── CHAPTER SELECTION ───
  if (selectedChapter === null) {
    return (
      <div className="mx-auto max-w-2xl px-2">
        <div className="mb-6 text-center">
          <h3 className="text-xl font-bold text-primary sm:text-2xl">
            Choisis un animal 🐾
          </h3>
          <p className="mt-1 text-sm text-foreground-secondary">
            10 animaux, 3 questions chacun — choisis ton aventure !
          </p>
        </div>

        {/* Global score banner */}
        {completedCount > 0 && (
          <div className="mb-6 rounded-2xl border border-secondary/30 bg-gradient-to-r from-secondary/10 to-accent p-4 text-center">
            <p className="text-sm font-semibold text-primary">
              🏅 Score global : {globalScore}/{globalTotal} ({completedCount}/{chapters.length} chapitres terminés)
            </p>
            <div className="mx-auto mt-2 h-3 w-full max-w-xs overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${globalTotal > 0 ? Math.round((globalScore / globalTotal) * 100) : 0}%`,
                  background: "linear-gradient(90deg, #4ECDC4, #6BCB77)",
                }}
              />
            </div>
          </div>
        )}

        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
          {chapters.map((ch, i) => {
            const done = chapterScores[i];
            return (
              <button
                key={ch.animal}
                type="button"
                onClick={() => setSelectedChapter(i)}
                className="flex items-center gap-3 rounded-2xl border-2 border-border bg-white p-4 text-left shadow-sm transition-all active:scale-[0.98] hover:-translate-y-0.5 hover:border-secondary hover:shadow-md sm:gap-4"
              >
                <span className="text-4xl sm:text-5xl">{ch.emoji}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold text-foreground sm:text-lg">
                    {ch.animal}
                  </p>
                  <p className="text-xs text-foreground-secondary sm:text-sm">
                    {ch.theme}
                  </p>
                  {done ? (
                    <p className="mt-1 text-xs font-semibold" style={{ color: done.score === done.total ? "#6BCB77" : "#FFB020" }}>
                      ✅ {done.score}/{done.total}
                    </p>
                  ) : (
                    <p className="mt-1 text-xs text-foreground-secondary/60">
                      3 questions
                    </p>
                  )}
                </div>
                <svg className="h-5 w-5 shrink-0 text-foreground-secondary/40" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ─── RESULTS SCREEN (per chapter) ───
  if (finished && chapter) {
    const finalScore = chapterScores[selectedChapter]?.score ?? score;
    const pct = Math.round((finalScore / totalQ) * 100);
    let emoji: string;
    let message: string;
    if (pct === 100) {
      emoji = "🏆";
      message = "Masha Allah ! Score parfait !";
    } else if (pct >= 66) {
      emoji = "🌟";
      message = "Bravo ! Tu connais bien cette histoire !";
    } else {
      emoji = "💪";
      message = "Continue, tu vas y arriver in sha Allah !";
    }

    return (
      <div className="mx-auto max-w-lg px-2">
        <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-lg sm:p-8">
          <div className="flex items-center justify-center gap-2">
            <span className="text-5xl sm:text-6xl">{chapter.emoji}</span>
            <span className="text-3xl sm:text-4xl">{emoji}</span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-primary sm:text-2xl">
            {chapter.animal}
          </h3>
          <p className="mt-1 text-lg font-semibold text-foreground">
            {finalScore}/{totalQ}
          </p>
          <div className="mx-auto mt-3 h-4 w-full max-w-xs overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${pct}%`,
                background:
                  pct === 100
                    ? "#6BCB77"
                    : pct >= 66
                      ? "#FFD93D"
                      : "#FF6B6B",
              }}
            />
          </div>
          <p className="mt-4 text-base text-foreground">{message}</p>

          {/* Global score reminder */}
          {completedCount > 1 && (
            <p className="mt-3 text-sm text-foreground-secondary">
              🏅 Score global : {globalScore}/{globalTotal}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleReplay}
              className="w-full rounded-xl px-6 py-3.5 text-base font-bold text-white shadow-md transition-all active:scale-[0.98] hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #4ECDC4, #44B8B0)",
              }}
            >
              Rejouer 🔄
            </button>
            <button
              onClick={handleBackToChapters}
              className="w-full rounded-xl border-2 border-border px-6 py-3.5 text-base font-bold text-foreground transition-all active:scale-[0.98] hover:border-secondary hover:text-primary"
            >
              ← Choisir un autre animal
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── QUIZ SCREEN ───
  if (!question || !chapter) return null;
  const progressPct = ((currentQ + 1) / totalQ) * 100;

  return (
    <div className="mx-auto max-w-lg px-2">
      {/* Back button */}
      <button
        type="button"
        onClick={handleBackToChapters}
        className="mb-4 flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-foreground-secondary transition-colors hover:bg-accent hover:text-primary"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Chapitres
      </button>

      {/* Chapter header */}
      <div className="mb-4 flex items-center gap-3 rounded-xl bg-accent px-4 py-3">
        <span className="text-3xl">{chapter.emoji}</span>
        <div>
          <p className="text-base font-bold text-primary">{chapter.animal}</p>
          <p className="text-xs text-foreground-secondary">{chapter.theme}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-2 flex items-center justify-between text-sm text-foreground-secondary">
        <span>
          Question {currentQ + 1}/{totalQ}
        </span>
        <span className="font-semibold text-primary">
          ⭐ {score}
        </span>
      </div>
      <div className="mb-6 h-3 overflow-hidden rounded-full bg-gray-100">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progressPct}%`,
            background: "linear-gradient(90deg, #4ECDC4, #6BCB77)",
          }}
        />
      </div>

      {/* Question card */}
      <div className="rounded-2xl border border-border bg-white p-5 shadow-md sm:p-6">
        <h3 className="mb-5 text-base font-bold leading-snug text-foreground sm:text-lg">
          {question.question}
        </h3>

        <div className="space-y-3">
          {question.options.map((opt, i) => {
            let style = "";
            if (selected !== null) {
              if (i === question.correctIndex) {
                style =
                  "border-2 border-green-500 bg-green-50 text-green-800";
              } else if (i === selected && i !== question.correctIndex) {
                style = "border-2 border-red-400 bg-red-50 text-red-700";
              } else {
                style = "border border-border bg-gray-50 text-gray-400";
              }
            } else {
              style =
                "border-2 border-border bg-white text-foreground hover:border-secondary hover:bg-accent active:scale-[0.98] cursor-pointer";
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left text-base font-medium transition-all sm:text-sm sm:py-3.5 ${style}`}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-7 sm:w-7 sm:text-xs"
                  style={{
                    background:
                      selected !== null && i === question.correctIndex
                        ? "#6BCB77"
                        : selected !== null && i === selected
                          ? "#FF6B6B"
                          : "#e5e7eb",
                    color:
                      selected !== null &&
                      (i === question.correctIndex || i === selected)
                        ? "white"
                        : "#6b7280",
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            className="mt-5 rounded-xl p-4 text-sm leading-relaxed sm:text-sm"
            style={{
              background:
                selected === question.correctIndex ? "#f0fdf4" : "#fef2f2",
              border: `1px solid ${selected === question.correctIndex ? "#bbf7d0" : "#fecaca"}`,
            }}
          >
            <p className="mb-1 text-base font-bold sm:text-sm">
              {selected === question.correctIndex
                ? "✅ Bonne réponse !"
                : `❌ La bonne réponse était : ${question.options[question.correctIndex]}`}
            </p>
            <p className="text-foreground-secondary">
              💡 {question.explanation}
            </p>
          </div>
        )}

        {/* Next button */}
        {showExplanation && (
          <button
            onClick={handleNext}
            className="mt-5 w-full rounded-xl py-4 text-base font-bold text-white shadow-md transition-all active:scale-[0.98] hover:scale-[1.02] sm:py-3 sm:text-sm"
            style={{
              background: "linear-gradient(135deg, #4ECDC4, #44B8B0)",
            }}
          >
            {currentQ + 1 < totalQ
              ? "Question suivante →"
              : "Voir mon résultat 🎉"}
          </button>
        )}
      </div>
    </div>
  );
}
