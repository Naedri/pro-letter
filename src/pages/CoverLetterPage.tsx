import { useParams } from "react-router-dom";
import CoverLetterView from "@/components/CoverLetterView";
import { getCoverLetter } from "@/utils";

export default function CoverLetterPage() {
  const { fileName } = useParams<{ fileName: string }>();
  if (!fileName) return <div>Invalid URL</div>;

  const data = fileName ? getCoverLetter(fileName) : null;
  if (!data) return <div>Cover letter not found.</div>;

  return <CoverLetterView data={data} />;
}
