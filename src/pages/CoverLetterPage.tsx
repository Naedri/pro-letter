import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CoverLetter } from "@/types";
import CoverLetterView from "@/components/CoverLetterView";

export default function CoverLetterPage() {
  const { fileName } = useParams<{ fileName: string }>();
  const [data, setData] = useState<CoverLetter | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const module = await import(`@/data/cover-letters/${fileName}.json`);
        setData(module.default);
      } catch (error) {
        console.error("Cover letter not found:", error);
      }
    }

    load();
  }, [fileName]);

  if (!data) return <div>Loading...</div>;

  return <CoverLetterView data={data} />;
}
