import type { CoverLetter } from "@/types";

const modules = import.meta.glob("@/data/cover-letters/*.json", {
  eager: true
}) as Record<string, { default: CoverLetter }>;

export function getCoverLetter(name: string): CoverLetter | null {
  const match = Object.entries(modules).find(([path]) =>
    path.endsWith(`${name}.json`)
  );

  return match?.[1].default ?? null;
}
