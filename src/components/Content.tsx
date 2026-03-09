import type { CoverLetter } from "@/types";
import { letterStyle } from "@/utils";

export interface ContentProps {
  content: CoverLetter["content"];
  applicant: CoverLetter["applicant"];
}

export function Content({ content, applicant }: ContentProps) {
  const { opening, body, closing, signature } = content;
  const { website } = applicant;

  return (
    <div className="content">
      <div className="content__body flow">
        <p className="content__opening">{letterStyle(opening)}</p>
        {body.map((paragraph, index) => (
          <p
            key={index}
            className="content__paragraph"
            dangerouslySetInnerHTML={{ __html: letterStyle(paragraph) }}
          />
        ))}
        <p className="content__closing">{letterStyle(closing)}</p>
      </div>
      {signature && (
        <div className="content__signature">
          {website ? (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <span>{letterStyle(signature)}</span>
            </a>
          ) : (
            <span>{letterStyle(signature)}</span>
          )}
        </div>
      )}
    </div>
  );
}
