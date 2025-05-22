import { source } from "@/lib/source";

import { getLLMText } from "./get-llm-text"; // le fichier que tu as montré

export async function getLLMFolder(slug: string): Promise<string> {
  const pages = source.getPages();

  const filteredPages = pages.filter((page) =>
    page.url.startsWith(`/docs/${slug}`)
  );

  const texts = await Promise.all(
    filteredPages.map(async (page) => {
      try {
        return await getLLMText(page);
      } catch (err) {
        console.error(`Error processing ${page.url}`, err);
        return null;
      }
    })
  );

  // Structure harmonisée avec getLLMText
  return `# ${slug}
URL: /docs/${slug}

${texts.filter(Boolean).join("\n\n---\n\n")}`;
}
