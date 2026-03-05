import type { CoverLetter } from "@/types";

export interface RecipientProps {
  recipient: CoverLetter["recipient"];
}

export function Recipient({ recipient }: RecipientProps) {
  const { companyName, hiringManagerName, department, address, title } =
    recipient;

  return (
    <div className="recipient stack">
      <h2 className="recipient__company">{companyName.toUpperCase()}</h2>
      {department && <h3 className="recipient__department">{department}</h3>}

      {hiringManagerName && (
        <h3 className="recipient__manager">{hiringManagerName}</h3>
      )}

      <ul className="recipient__position">
        {title && <li className="recipient__title">{title}</li>}
      </ul>

      {address && (
        <ul className="recipient__address">
          {address.street && (
            <li className="recipient__address-item">{address.street}</li>
          )}
          {(address.postalCode || address.city) && (
            <li className="recipient__address-item">
              {[address.postalCode, address.city].join(" ")}
            </li>
          )}
          {address.country && (
            <li className="recipient__address-item">{address.country}</li>
          )}
        </ul>
      )}
    </div>
  );
}
