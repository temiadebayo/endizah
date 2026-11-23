import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { previewSecret } from "@/sanity/env";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "/";

  if (!previewSecret || secret !== previewSecret) {
    return new Response("Invalid preview secret.", { status: 401 });
  }

  const dm = await draftMode();
  dm.enable();

  const safePath = slug.startsWith("/") ? slug : "/";
  redirect(safePath);
}
