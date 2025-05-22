import { getLLMFolder } from "@/lib/get-llm-folder";

// cached forever
export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ module: string }> }
) {
  const { module } = await params;
  const scanned = await getLLMFolder(module);
  return new Response(scanned);
}
