import type { CoverLetter } from "@/types";
import { useTranslation } from "react-i18next";

export interface PositionProps {
  address: CoverLetter["applicant"]["address"];
  date: string;
}

export function Date({ address, date }: PositionProps) {
  const { t } = useTranslation();

  return (
    <div className="date">
      <span className="date__content">
        {address && address.city
          ? t("date.contentCity", { city: address.city, date })
          : t("date.content", { date })}
      </span>
    </div>
  );
}
