import type { CoverLetter } from "@/types";

export interface PositionProps {
  position: CoverLetter["position"];
  date: string;
}

export function Position({ position, date }: PositionProps) {
  const { title, reference, location } = position;

  return (
    <section className="position">
      <div className="position__meta">
        <span className="position__date">{date}</span>
        {location && <span className="position__location">{location}</span>}
      </div>

      <h1 className="position__title">{title}</h1>

      {reference && <div className="position__reference">Ref: {reference}</div>}
    </section>
  );
}
