import type { CoverLetter } from "@/types";

export interface ApplicantProps {
  applicant: CoverLetter["applicant"];
}

export function Applicant({ applicant }: ApplicantProps) {
  const { firstName, lastName, email, phone, address, title } = applicant;

  return (
    <section className="applicant">
      <h2 className="applicant__name">
        {firstName} {lastName.toUpperCase()}
      </h2>

      <ul className="applicant__position">
        {title && <li className="applicant__title">{title}</li>}
      </ul>

      <ul className="applicant__contact">
        {email && <li className="applicant__email">{email}</li>}
        {phone && <li className="applicant__phone">{phone}</li>}
      </ul>

      {address && (
        <ul className="applicant__address">
          {address.street && (
            <li className="applicant__address-item">{address.street}</li>
          )}
          {(address.postalCode || address.city) && (
            <li className="applicant__address-item">
              {[address.postalCode, address.city].join(" ")}
            </li>
          )}
          {address.country && (
            <li className="applicant__address-item">{address.country}</li>
          )}
        </ul>
      )}
    </section>
  );
}
