import type { CoverLetter } from "@/types";
import { Applicant, Recipient, Date, Subject, Content } from "@/components";

export interface CoverLetterViewProps {
  data: CoverLetter;
}

export default function CoverLetterView({ data }: CoverLetterViewProps) {
  return (
    <div className="cover-letter-container">
      <aside>
        <section className="aside-actor">
          <Applicant applicant={data.applicant} />
          <Recipient recipient={data.recipient} />
        </section>
        <Date address={data.applicant.address} date={data.metadata.date} />
      </aside>
      <main className="main-content">
        <Subject position={data.position} />
        <Content content={data.content} />
      </main>
    </div>
  );
}
