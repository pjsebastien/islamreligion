"use client";

import { useState } from "react";

export default function IndexButton({ url }: { url: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleClick() {
    setStatus("loading");
    try {
      const res = await fetch("/api/admin/index-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.submitted > 0) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return <span className="text-xs text-green-600">Soumis !</span>;
  }

  if (status === "error") {
    return <span className="text-xs text-red-600">Echec</span>;
  }

  return (
    <button
      onClick={handleClick}
      disabled={status === "loading"}
      className="rounded bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {status === "loading" ? "..." : "Indexer"}
    </button>
  );
}
