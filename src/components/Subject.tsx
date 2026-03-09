import type { CoverLetter } from "@/types";
import { letterStyle } from "@/utils";
import { Trans, useTranslation } from "react-i18next";

export interface SubjectProps {
  position: CoverLetter["position"];
}

export function Subject({ position }: SubjectProps) {
  const { t } = useTranslation();
  return (
    <div className="subject">
      <label className="subject__prefix">{t("subject.prefix")}</label>

      <h1 className="subject__main">
        <Trans
          i18nKey="subject.content"
          values={{
            title: letterStyle(position.title),
            reference: position.reference
          }}
          components={{
            ref: (
              <a
                href={position.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            )
          }}
        />
      </h1>
    </div>
  );
}
