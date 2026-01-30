import "./contactcard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import { NATIONS } from "../../constant/nations";

export default function ContactCard({ person }) {
  const nation = NATIONS[person.nation];

  const chatLink = `https://wa.me/${person.phone}`;

  const email = person.email;
  const subject = "Product Inquiry";
  const body = "Hello,\nI would like to ask about your product.";

  const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="contact-container">
      <div
        style={{
          display: "flex",
          columnGap: "var(--space-md)",
        }}
      >
        <img
          src={nation.wikiFlag}
          width={55}
          height={40}
          style={{
            objectFit: "cover",
            borderRadius: "var(--space-sm)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
          className="contact-info"
        >
          <h4> {nation.label} </h4>
          <h3> {person.name} </h3>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href={chatLink}
          target="_blank"
          rel="nooponer noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "3px 15px",
              borderRadius: "var(--space-lg)",
              alignItems: "center",
              columnGap: "var(--space-sm)",
              backgroundColor: "var(--color-primary)",
            }}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="lg"
              color="var(--color-text-inverse)"
            />
            <p
              style={{
                color: "white",
                margin: 0,
              }}
            >
              Whatsapp
            </p>
          </div>
        </a>

        <a
          href={emailLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "3px 15px",
              borderRadius: "var(--space-lg)",
              alignItems: "center",
              columnGap: "var(--space-sm)",
              backgroundColor: "var(--color-btn-secondary)",
            }}
          >
            <FontAwesomeIcon
              icon={faAt}
              size="lg"
              color="var(--color-text-inverse)"
            />
            <p
              style={{
                color: "white",
                margin: 0,
              }}
            >
              Email
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
