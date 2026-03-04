import { useParams } from "react-router-dom";
import { useMemo } from "react";
import type { CoverLetter } from "@/types";
import CoverLetterView from "@/components/CoverLetterView";

const modules = import.meta.glob("@/data/cover-letters/*.json", {
  eager: true
}) as Record<string, { default: CoverLetter }>;

export default function CoverLetterPage() {
  const { fileName } = useParams<{ fileName: string }>();

  const data = useMemo(() => {
    if (!fileName) return null;

    const match = Object.entries(modules).find(([path]) =>
      path.endsWith(`${fileName}.json`)
    );

    return match?.[1].default ?? null;
  }, [fileName]);

  if (!data) {
    return <div>Cover letter not found.</div>;
  }

  return <CoverLetterView data={data} />;
}
