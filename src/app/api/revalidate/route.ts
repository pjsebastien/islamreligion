import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidatePath("/");
  revalidatePath("/reves-islam");
  revalidatePath("/sitemap.xml");
  return NextResponse.json({ revalidated: true, date: new Date().toISOString() });
}
