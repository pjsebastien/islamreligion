"use client";

import { useState, useMemo } from "react";
import type { UrlIndexingStatus } from "@/lib/googleIndexing";
import IndexButton from "./IndexButton";

const CATEGORY_LABELS: Record<string, string> = {
  principal: "Pages principales",
  "doua-adoration": "Doua - Adoration",
  "doua-quotidien": "Doua - Quotidien",
  "doua-occasions": "Doua - Occasions",
  "doua-epreuves": "Doua - Epreuves",
  "doua-protection": "Doua - Protection",
  animaux: "Reves - Animaux",
  actions: "Reves - Actions",
  objets: "Reves - Objets",
  nourriture: "Reves - Nourriture",
  lieux: "Reves - Lieux",
  personnes: "Reves - Personnes",
  nature: "Reves - Nature",
  spirituel: "Reves - Spirituel",
  reves: "Reves (hors schedule)",
  remedes: "Remedes arabes",
  autres: "Autres articles",
};

type SortKey = "slug" | "category" | "notifyTime" | "indexed";
type SortDir = "asc" | "desc";
type FilterStatus = "all" | "notified" | "not-notified";

interface IndexedCache {
  [url: string]: { indexed: boolean | null; loading: boolean; verdict?: string; lastCrawl?: string };
}

export default function IndexTable({ data }: { data: UrlIndexingStatus[] }) {
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState("all");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [sortKey, setSortKey] = useState<SortKey>("slug");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [indexedCache, setIndexedCache] = useState<IndexedCache>({});
  const [bulkChecking, setBulkChecking] = useState(false);
  const [bulkProgress, setBulkProgress] = useState(0);
  const [bulkTotal, setBulkTotal] = useState(0);

  const categories = useMemo(() => {
    const cats = new Set(data.map((d) => d.category));
    return Array.from(cats).sort();
  }, [data]);

  const filtered = useMemo(() => {
    let items = data;

    if (search) {
      const q = search.toLowerCase();
      items = items.filter((s) => s.slug.toLowerCase().includes(q));
    }

    if (filterCat !== "all") {
      items = items.filter((s) => s.category === filterCat);
    }

    if (filterStatus === "notified") {
      items = items.filter((s) => s.notifyTime);
    } else if (filterStatus === "not-notified") {
      items = items.filter((s) => !s.notifyTime);
    }

    items = [...items].sort((a, b) => {
      let cmp = 0;
      if (sortKey === "slug") cmp = a.slug.localeCompare(b.slug);
      else if (sortKey === "category") cmp = a.category.localeCompare(b.category);
      else if (sortKey === "notifyTime") {
        const ta = a.notifyTime ?? "";
        const tb = b.notifyTime ?? "";
        cmp = ta.localeCompare(tb);
      } else if (sortKey === "indexed") {
        const ia = indexedCache[a.url]?.indexed;
        const ib = indexedCache[b.url]?.indexed;
        cmp = (ia === null || ia === undefined ? -1 : ia ? 1 : 0) -
              (ib === null || ib === undefined ? -1 : ib ? 1 : 0);
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return items;
  }, [data, search, filterCat, filterStatus, sortKey, sortDir, indexedCache]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  async function checkIndexed(url: string) {
    setIndexedCache((prev) => ({ ...prev, [url]: { indexed: null, loading: true } }));
    try {
      const res = await fetch("/api/admin/check-indexed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const json = await res.json();
      setIndexedCache((prev) => ({
        ...prev,
        [url]: {
          indexed: json.indexed ?? false,
          loading: false,
          verdict: json.verdict,
          lastCrawl: json.lastCrawlTime,
        },
      }));
    } catch {
      setIndexedCache((prev) => ({ ...prev, [url]: { indexed: null, loading: false } }));
    }
  }

  async function checkAllIndexed() {
    setBulkChecking(true);
    setBulkProgress(0);
    setBulkTotal(data.length);

    for (let i = 0; i < data.length; i++) {
      const s = data[i];
      if (indexedCache[s.url] && !indexedCache[s.url].loading) {
        setBulkProgress(i + 1);
        continue;
      }
      try {
        const res = await fetch("/api/admin/check-indexed", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: s.url }),
        });
        const json = await res.json();
        setIndexedCache((prev) => ({
          ...prev,
          [s.url]: {
            indexed: json.indexed ?? false,
            loading: false,
            verdict: json.verdict,
            lastCrawl: json.lastCrawlTime,
          },
        }));
      } catch {
        setIndexedCache((prev) => ({
          ...prev,
          [s.url]: { indexed: null, loading: false },
        }));
      }
      setBulkProgress(i + 1);
    }

    setBulkChecking(false);
  }

  const sortArrow = (key: SortKey) =>
    sortKey === key ? (sortDir === "asc" ? " ↑" : " ↓") : "";

  const checkedCount = Object.values(indexedCache).filter((c) => !c.loading).length;
  const indexedCount = Object.values(indexedCache).filter((c) => c.indexed === true).length;

  return (
    <div>
      {/* Bouton verification globale */}
      <div className="mb-4 rounded-lg border bg-purple-50 p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={checkAllIndexed}
            disabled={bulkChecking}
            className="rounded bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 disabled:opacity-50"
          >
            {bulkChecking ? "Verification en cours..." : "Verifier toutes les pages"}
          </button>
          {checkedCount > 0 && (
            <span className="text-sm text-purple-700">
              {indexedCount} indexees / {checkedCount} verifiees
            </span>
          )}
        </div>
        {bulkChecking && (
          <div className="mt-3">
            <div className="mb-1 flex justify-between text-xs text-purple-600">
              <span>Progression</span>
              <span>{bulkProgress} / {bulkTotal}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-purple-200">
              <div
                className="h-full rounded-full bg-purple-600 transition-all duration-300"
                style={{ width: `${(bulkProgress / bulkTotal) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Filtres */}
      <div className="mb-4 flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Rechercher un slug..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border px-3 py-1.5 text-sm"
        />
        <select
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
          className="rounded border px-3 py-1.5 text-sm"
        >
          <option value="all">Toutes categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {CATEGORY_LABELS[c] ?? c}
            </option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as FilterStatus)}
          className="rounded border px-3 py-1.5 text-sm"
        >
          <option value="all">Tous statuts</option>
          <option value="notified">Notifiees</option>
          <option value="not-notified">Non notifiees</option>
        </select>
        <span className="self-center text-sm text-gray-500">
          {filtered.length} / {data.length} pages
        </span>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto rounded-lg border shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b bg-gray-50">
            <tr>
              <th
                className="cursor-pointer px-4 py-2 font-medium hover:text-blue-600"
                onClick={() => toggleSort("slug")}
              >
                Page{sortArrow("slug")}
              </th>
              <th
                className="cursor-pointer px-4 py-2 font-medium hover:text-blue-600"
                onClick={() => toggleSort("category")}
              >
                Categorie{sortArrow("category")}
              </th>
              <th
                className="cursor-pointer px-4 py-2 font-medium hover:text-blue-600"
                onClick={() => toggleSort("notifyTime")}
              >
                Notification{sortArrow("notifyTime")}
              </th>
              <th className="px-4 py-2 font-medium">
                Indexe Google
              </th>
              <th className="px-4 py-2 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((s) => {
              const cached = indexedCache[s.url];
              return (
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
                  <td className="px-4 py-2 text-xs">
                    {CATEGORY_LABELS[s.category] ?? s.category}
                  </td>
                  <td className="px-4 py-2">
                    {s.notifyTime ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        {new Date(s.notifyTime).toLocaleString("fr-FR", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                        {s.error ?? "Non notifie"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {cached ? (
                      cached.loading ? (
                        <span className="text-xs text-gray-400">...</span>
                      ) : cached.indexed ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          Indexe
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
                          {cached.verdict ?? "Non indexe"}
                        </span>
                      )
                    ) : (
                      <button
                        onClick={() => checkIndexed(s.url)}
                        className="rounded bg-gray-200 px-2 py-0.5 text-xs hover:bg-gray-300"
                      >
                        Verifier
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {!s.notifyTime && <IndexButton url={s.url} />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
