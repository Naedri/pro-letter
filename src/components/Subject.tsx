import type { CoverLetter } from "@/types";
import { useTranslation } from "react-i18next";

export interface SubjectProps {
  position: CoverLetter["position"];
}

export function Subject({ position }: SubjectProps) {
  const { t } = useTranslation();
  return (
    <div className="subject">
      <label className="subject__prefix">{t("subject.prefix")}</label>
      <p className="subject__main-content">
        {t("subject.content", {
          title: position.title,
          reference: position.reference
        })}
      </p>
    </div>
  );
}
