import type { CoverLetter } from "@/types";

export interface ContentProps {
  content: CoverLetter["content"];
}

export function Content({ content }: ContentProps) {
  const { opening, body, closing, signature } = content;

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

      {signature && <span className="content__signature">{signature}</span>}
    </section>
  );
}
