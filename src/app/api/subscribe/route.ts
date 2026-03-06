import { NextResponse } from "next/server";

const API_BASE = "https://api.systeme.io/api";
const TAG_ID = 1907225; // "formation-arabe"

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email requis" }, { status: 400 });
  }

  const apiKey = process.env.SYSTEMEIO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Configuration serveur manquante" },
      { status: 500 }
    );
  }

  const headers = {
    "X-API-Key": apiKey,
    "Content-Type": "application/json",
  };

  // Step 1: Create the contact
  const createRes = await fetch(`${API_BASE}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  });

  let contactId: number | null = null;

  if (createRes.ok) {
    const data = await createRes.json();
    contactId = data.id;
  } else if (createRes.status === 422) {
    // Contact already exists — look up by email
    const searchRes = await fetch(
      `${API_BASE}/contacts?email=${encodeURIComponent(email)}`,
      { headers }
    );
    if (searchRes.ok) {
      const searchData = await searchRes.json();
      const items = searchData.items || searchData;
      if (Array.isArray(items) && items.length > 0) {
        contactId = items[0].id;
      }
    }
  }

  if (!contactId) {
    return NextResponse.json(
      { error: "Impossible de créer ou trouver le contact" },
      { status: 500 }
    );
  }

  // Step 2: Add the tag to the contact
  await fetch(`${API_BASE}/contacts/${contactId}/tags`, {
    method: "POST",
    headers,
    body: JSON.stringify({ tagId: TAG_ID }),
  });

  return NextResponse.json({ success: true });
}
