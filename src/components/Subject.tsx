import type { CoverLetter } from "@/types";

export interface SubjectProps {
  position: CoverLetter["position"];
}

export function Subject({ position }: SubjectProps) {
  return (
    <section className="subject">
      <p className="subject__text">
        Application for the position of{" "}
        <strong className="subject__highlight">{position.title}</strong>
        {position.reference && (
          <span className="subject__reference">
            {" "}
            – Ref: {position.reference}
          </span>
        )}
      </p>
    </section>
  );
}
