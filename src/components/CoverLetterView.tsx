import type { CoverLetter } from "@/types";
import { Applicant, Recipient, Date, Subject, Content } from "@/components";

export interface CoverLetterViewProps {
  data: CoverLetter;
}

export default function CoverLetterView({ data }: CoverLetterViewProps) {
  return (
    <div className="cover-letter-container flow">
      <header className="header-actor">
        <Applicant applicant={data.applicant} />
        <Recipient recipient={data.recipient} />
      </header>
      <Date address={data.applicant.address} date={data.metadata.date} />
      <Subject position={data.position} />
      <main className="main-content">
        <Content content={data.content} applicant={data.applicant} />
      </main>
    </div>
  );
}
