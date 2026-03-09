import type { CoverLetter } from "@/types";
import { letterStyle } from "@/utils";
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
          ? t("date.contentCity", { city: letterStyle(address.city), date })
          : t("date.content", { date })}
      </span>
    </div>
  );
}
