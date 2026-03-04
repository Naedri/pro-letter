import { Applicant, Content, Position, Recipient, Subject } from "@/components";
import type { CoverLetter } from "@/types";

export interface AppProps {
  data: CoverLetter;
}

export default function App({ data }: AppProps) {
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
