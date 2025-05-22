import Link from "next/link";

import { source } from "@/lib/source";
export default function LlmsTxtIndexPage() {
  // Extraire tous les modules uniques à partir des URLs des pages docs
  const modules = Array.from(
    new Set(
      source
        .getPages()
        .map((page) => page.url.split("/")[2]) // /docs/[module]/...
        .filter((mod) => !!mod)
    )
  );

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Index
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            Index of all the modules in the llms.txt project.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          {modules.map((mod) => (
            <Link key={mod} href={`/llms.txt/${mod}`} className="group flex">
              <h3 className="text-lg font-semibold">{mod}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
