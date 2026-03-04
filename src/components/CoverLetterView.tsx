import type { CoverLetter } from "@/types";
import { Applicant, Recipient, Position, Subject, Content } from "@/components";

export interface CoverLetterViewProps {
  data: CoverLetter;
}

export default function CoverLetterView({ data }: CoverLetterViewProps) {
  return (
    <div className="cover-letter-container">
      <main className="main-content">
        <Applicant applicant={data.applicant} />
        <Recipient recipient={data.recipient} />
        <Position position={data.position} date={data.metadata.date} />
        <Subject position={data.position} />
        <Content content={data.content} />
      </main>
    </div>
  );
}
