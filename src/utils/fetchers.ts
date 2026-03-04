import type { CoverLetter } from "@/types";

const modules = import.meta.glob("@/data/cover-letters/*.json", {
  eager: true
}) as Record<string, { default: CoverLetter }>;

/**
 * Get a cover letter by filename (without .json)
 */
export function getCoverLetter(name: string): CoverLetter | null {
  const match = Object.entries(modules).find(([path]) =>
    path.endsWith(`${name}.json`)
  );
  return match?.[1].default ?? null;
}

/**
 * Optional: get list of all filenames (for navigation)
 */
export function getAllCoverLetterNames(): string[] {
  return Object.keys(modules).map((path) =>
    path.split("/").pop()!.replace(".json", "")
  );
}
