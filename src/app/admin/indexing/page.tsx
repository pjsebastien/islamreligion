import type { Metadata } from "next";
import {
  getAllIndexingStatuses,
  getTodaysNewArticles,
  type UrlIndexingStatus,
} from "@/lib/googleIndexing";
import IndexButton from "./IndexButton";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Suivi des indexations Google",
  robots: "noindex, nofollow",
};

export default async function AdminIndexingPage() {
  let statuses: UrlIndexingStatus[] = [];
  let authError = "";

  try {
    statuses = await getAllIndexingStatuses();
  } catch (e) {
    authError = e instanceof Error ? e.message : String(e);
  }

  const todaysUrls = getTodaysNewArticles();
  const total = statuses.length;
  const indexed = statuses.filter((s) => s.notifyTime).length;
  const notIndexed = statuses.filter((s) => !s.notifyTime).length;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-2xl font-bold">Suivi des indexations Google</h1>
      <p className="mb-6 text-sm text-gray-500">
        Statut des notifications via l&apos;API Google Indexing
      </p>

      {authError && (
        <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800">
          <strong>Erreur :</strong> {authError}
        </div>
      )}

      {/* Compteurs */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4 text-center shadow-sm">
          <p className="text-3xl font-bold">{total}</p>
          <p className="text-sm text-gray-500">Total publies</p>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center shadow-sm">
          <p className="text-3xl font-bold text-green-700">{indexed}</p>
          <p className="text-sm text-green-600">Notifies a Google</p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center shadow-sm">
          <p className="text-3xl font-bold text-red-700">{notIndexed}</p>
          <p className="text-sm text-red-600">Non notifies</p>
        </div>
      </div>

      {/* Articles soumis aujourd'hui via le cron */}
      <div className="mb-8 rounded-lg border bg-blue-50 p-4">
        <h2 className="mb-2 font-semibold text-blue-800">
          Articles programmes aujourd&apos;hui ({new Date().toISOString().slice(0, 10)})
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
                <span className="ml-2 text-xs text-blue-500">
                  → soumis au prochain cron (6h UTC)
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tableau des statuts */}
      <div className="overflow-x-auto rounded-lg border shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Publication</th>
              <th className="px-4 py-3 font-medium">Statut</th>
              <th className="px-4 py-3 font-medium">Derniere notification</th>
              <th className="px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {statuses.map((s) => (
              <tr key={s.slug} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-mono text-xs">
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    /{s.slug}
                  </a>
                </td>
                <td className="px-4 py-2 text-xs">{s.publishDate}</td>
                <td className="px-4 py-2">
                  {s.notifyTime ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Notifie
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      {s.error ?? "Non notifie"}
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 text-xs text-gray-500">
                  {s.notifyTime
                    ? new Date(s.notifyTime).toLocaleString("fr-FR", {
                        dateStyle: "short",
                        timeStyle: "short",
                      })
                    : "-"}
                </td>
                <td className="px-4 py-2">
                  {!s.notifyTime && <IndexButton url={s.url} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
