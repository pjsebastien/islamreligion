import type { Metadata } from "next";
import {
  getAllIndexingStatuses,
  getTodaysNewArticles,
} from "@/lib/googleIndexing";
import IndexTable from "./IndexTable";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Suivi des indexations Google",
  robots: "noindex, nofollow",
};

export default async function AdminIndexingPage() {
  let statuses = await getAllIndexingStatuses().catch(() => []);
  const todaysUrls = getTodaysNewArticles();
  const total = statuses.length;
  const notified = statuses.filter((s) => s.notifyTime).length;
  const notNotified = total - notified;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-bold">Suivi des indexations Google</h1>
      <p className="mb-6 text-sm text-gray-500">
        Statut de toutes les pages du site via l&apos;API Google Indexing
      </p>

      {/* Compteurs */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
          <p className="text-3xl font-bold">{total}</p>
          <p className="text-sm text-gray-500">Total pages</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center shadow-sm">
          <p className="text-3xl font-bold text-green-700">{notified}</p>
          <p className="text-sm text-green-600">Notifiees</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center shadow-sm">
          <p className="text-3xl font-bold text-red-700">{notNotified}</p>
          <p className="text-sm text-red-600">Non notifiees</p>
        </div>
      </div>

      {/* Cron du jour */}
      <div className="mb-6 rounded-lg border bg-blue-50 p-4">
        <h2 className="mb-2 font-semibold text-blue-800">
          Cron du jour ({new Date().toISOString().slice(0, 10)})
        </h2>
        {todaysUrls.length === 0 ? (
          <p className="text-sm text-blue-600">Aucun article programme pour aujourd&apos;hui.</p>
        ) : (
          <ul className="space-y-1">
            {todaysUrls.map((url) => (
              <li key={url} className="text-sm">
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                  {url.replace("https://www.islamreligion.fr", "")}
                </a>
                <span className="ml-2 text-xs text-blue-500">→ soumis au cron 6h UTC</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tableau interactif */}
      <IndexTable data={statuses} />

      <p className="mt-4 text-xs text-gray-400">
        Page generee le{" "}
        {new Date().toLocaleString("fr-FR", {
          dateStyle: "long",
          timeStyle: "short",
        })}
        {" — "}Rafraichir pour mettre a jour.
      </p>
    </main>
  );
}
