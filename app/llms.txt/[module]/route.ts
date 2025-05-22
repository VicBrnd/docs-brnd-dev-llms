import { NextRequest } from "next/server";

import { getLLMText } from "@/lib/get-llm-text";
import { source } from "@/lib/source";

export const revalidate = false;

type Params = Promise<{ module: string }>;

export async function GET(_req: NextRequest, { params }: { params: Params }) {
  const prefix = `/docs/${(await params).module}`;
  const scan = source
    .getPages()
    .filter((page) => page.url === prefix || page.url.startsWith(prefix + "/"))
    .sort((a, b) => a.url.localeCompare(b.url))
    .map(getLLMText);

  const scanned = await Promise.all(scan);

  return new Response(scanned.join("\n\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
