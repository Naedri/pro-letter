import type { CoverLetter } from "@/types";

export interface ContentProps {
  content: CoverLetter["content"];
}

export function Content({ content }: ContentProps) {
  const { opening, body, closing, signature } = content;

  return (
    <section className="content">
      <p className="content__opening">{opening}</p>

      <div className="content__body">
        {body.map((paragraph, index) => (
          <p key={index} className="content__paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      <p className="content__closing">{closing}</p>

      {signature && <p className="content__signature">{signature}</p>}
    </section>
  );
}
