import type { CoverLetter } from "@/types";

export interface ApplicantProps {
  applicant: CoverLetter["applicant"];
}

export function Applicant({ applicant }: ApplicantProps) {
  const { firstName, lastName, email, phone, address, linkedIn, website } =
    applicant;

  return (
    <section className="applicant">
      <h2 className="applicant__name">
        {firstName} {lastName}
      </h2>

      <div className="applicant__contact">
        <div className="applicant__email">{email}</div>
        {phone && <div className="applicant__phone">{phone}</div>}
      </div>

      {address && (
        <div className="applicant__address">
          {address.street && (
            <div className="applicant__address-line">{address.street}</div>
          )}
          {(address.postalCode || address.city) && (
            <div className="applicant__address-line">
              {address.postalCode} {address.city}
            </div>
          )}
          {address.country && (
            <div className="applicant__address-line">{address.country}</div>
          )}
        </div>
      )}

      <div className="applicant__links">
        {linkedIn && (
          <a
            href={linkedIn}
            className="applicant__link applicant__link--linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        )}
        {website && (
          <a
            href={website}
            className="applicant__link applicant__link--website"
            target="_blank"
            rel="noreferrer"
          >
            Website
          </a>
        )}
      </div>
    </section>
  );
}
