import { NextResponse } from "next/server";

const API_BASE = "https://api.systeme.io/api";
const DEFAULT_TAG_ID = 1907225; // "formation-arabe"

async function findTagIdByName(
  name: string,
  headers: Record<string, string>
): Promise<number | null> {
  try {
    const res = await fetch(
      `${API_BASE}/tags?query=${encodeURIComponent(name)}`,
      { headers }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const items = data.items || data;
    if (Array.isArray(items)) {
      const match = items.find(
        (t: { name: string }) => t.name.toLowerCase() === name.toLowerCase()
      );
      if (match) return match.id;
    }
  } catch (e) {
    console.error("findTagIdByName error:", e);
  }
  return null;
}

export async function POST(request: Request) {
  try {
    const { email, firstName, tagId, tagName, skipTag } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const apiKey = process.env.SYSTEMEIO_API_KEY;
    if (!apiKey) {
      console.error("SYSTEMEIO_API_KEY is not set");
      return NextResponse.json(
        { error: "Configuration serveur manquante" },
        { status: 500 }
      );
    }

    const headers: Record<string, string> = {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    };

    // Step 1: Create the contact
    const contactBody: Record<string, string> = { email };
    if (firstName) contactBody.firstName = firstName;

    console.log("Creating contact:", email);

    const createRes = await fetch(`${API_BASE}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify(contactBody),
    });

    const createText = await createRes.text();
    console.log("Create response:", createRes.status, createText);

    let contactId: number | null = null;

    if (createRes.ok) {
      const data = JSON.parse(createText);
      contactId = data.id;
    } else if (createRes.status === 422) {
      // Could be "already exists" or a validation error
      let errorData;
      try {
        errorData = JSON.parse(createText);
      } catch {
        errorData = null;
      }

      // Check if it's a validation error on the email field (not "already exists")
      const isEmailValidationError =
        errorData?.violations?.some(
          (v: { propertyPath?: string; message?: string }) =>
            v.propertyPath === "email"
        );
      const isAlreadyExists =
        createText.includes("existe déjà") ||
        createText.includes("already exists") ||
        createText.includes("duplicate");

      if (isEmailValidationError && !isAlreadyExists) {
        return NextResponse.json(
          { error: "Adresse email invalide" },
          { status: 422 }
        );
      }

      // Contact already exists — look up by email
      console.log("Contact may already exist, searching...");
      const searchRes = await fetch(
        `${API_BASE}/contacts?email=${encodeURIComponent(email)}`,
        { headers }
      );
      if (searchRes.ok) {
        const searchData = await searchRes.json();
        console.log("Search result:", JSON.stringify(searchData));
        const items = searchData.items || searchData;
        if (Array.isArray(items) && items.length > 0) {
          contactId = items[0].id;
        }
      } else {
        console.error("Search failed:", searchRes.status);
      }
    } else {
      // Other error (401, 403, 500, etc.)
      console.error(
        "Systeme.io unexpected error:",
        createRes.status,
        createText
      );
      return NextResponse.json(
        { error: `Erreur Systeme.io (${createRes.status})` },
        { status: 502 }
      );
    }

    if (!contactId) {
      return NextResponse.json(
        { error: "Impossible de créer ou trouver le contact" },
        { status: 500 }
      );
    }

    // Step 2: Add the tag to the contact (unless skipTag)
    if (!skipTag) {
      let resolvedTagId = tagId || DEFAULT_TAG_ID;
      if (!tagId && tagName) {
        const found = await findTagIdByName(tagName, headers);
        if (found) resolvedTagId = found;
      }
      const tagRes = await fetch(
        `${API_BASE}/contacts/${contactId}/tags`,
        {
          method: "POST",
          headers,
          body: JSON.stringify({ tagId: resolvedTagId }),
        }
      );
      console.log("Tag response:", tagRes.status);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
