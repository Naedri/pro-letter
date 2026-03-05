import type { CoverLetter } from "@/types";

export interface ContentProps {
  content: CoverLetter["content"];
  applicant: CoverLetter["applicant"];
}

export function Content({ content, applicant }: ContentProps) {
  const { opening, body, closing, signature } = content;
  const { website } = applicant;

  return (
    <section className="content">
      <div className="content__body">
        <p className="content__opening">{opening}</p>
        {body.map((paragraph, index) => (
          <p key={index} className="content__paragraph">
            {paragraph}
          </p>
        ))}
        <p className="content__closing">{closing}</p>
      </div>
      {signature && (
        <div className="content__signature">
          {website ? (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <span>{signature}</span>
            </a>
          ) : (
            <span>{signature}</span>
          )}
        </div>
      )}
    </section>
  );
}
