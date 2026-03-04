import type { CoverLetter } from "@/types";

export interface RecipientProps {
  recipient: CoverLetter["recipient"];
}

export function Recipient({ recipient }: RecipientProps) {
  const { companyName, hiringManagerName, department, address, title } =
    recipient;

  return (
    <section className="recipient">
      <h1 className="recipient__company">{companyName.toUpperCase()}</h1>

      {hiringManagerName && (
        <h2 className="recipient__manager">{hiringManagerName}</h2>
      )}

      <ul className="recipient__position">
        {title && <li className="recipient__title">{title}</li>}
        {department && <li className="recipient__department">{department}</li>}
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
    </section>
  );
}
