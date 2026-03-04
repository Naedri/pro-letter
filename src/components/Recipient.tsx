import type { CoverLetter } from "@/types";

export interface RecipientProps {
  recipient: CoverLetter["recipient"];
}

export function Recipient({ recipient }: RecipientProps) {
  const { companyName, hiringManagerName, department, address } = recipient;

  return (
    <section className="recipient">
      <h3 className="recipient__company">{companyName}</h3>

      {hiringManagerName && (
        <div className="recipient__manager">{hiringManagerName}</div>
      )}

      {department && <div className="recipient__department">{department}</div>}

      {address && (
        <div className="recipient__address">
          {address.street && (
            <div className="recipient__address-line">{address.street}</div>
          )}
          {(address.postalCode || address.city) && (
            <div className="recipient__address-line">
              {address.postalCode} {address.city}
            </div>
          )}
          {address.country && (
            <div className="recipient__address-line">{address.country}</div>
          )}
        </div>
      )}
    </section>
  );
}
