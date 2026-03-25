import { NextResponse } from "next/server";

const API_BASE = "https://api.systeme.io/api";
const DEFAULT_TAG_ID = 1907225; // "formation-arabe"

async function findTagIdByName(
  name: string,
  headers: Record<string, string>
): Promise<number | null> {
  const res = await fetch(`${API_BASE}/tags?query=${encodeURIComponent(name)}`, {
    headers,
  });
  if (!res.ok) return null;
  const data = await res.json();
  const items = data.items || data;
  if (Array.isArray(items)) {
    const match = items.find(
      (t: { name: string }) => t.name.toLowerCase() === name.toLowerCase()
    );
    if (match) return match.id;
  }
  return null;
}

export async function POST(request: Request) {
  const { email, firstName, tagId, tagName, skipTag } = await request.json();

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
  const contactBody: Record<string, string> = { email };
  if (firstName) contactBody.firstName = firstName;

  const createRes = await fetch(`${API_BASE}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify(contactBody),
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

  // Step 2: Add the tag to the contact (sauf si skipTag)
  if (!skipTag) {
    let resolvedTagId = tagId || DEFAULT_TAG_ID;
    if (!tagId && tagName) {
      const found = await findTagIdByName(tagName, headers);
      if (found) resolvedTagId = found;
    }
    await fetch(`${API_BASE}/contacts/${contactId}/tags`, {
      method: "POST",
      headers,
      body: JSON.stringify({ tagId: resolvedTagId }),
    });
  }

  return NextResponse.json({ success: true });
}
