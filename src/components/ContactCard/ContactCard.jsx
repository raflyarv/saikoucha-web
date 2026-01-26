import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function ContactCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "250px",
        minHeight: "150px",
        rowGap: "var(--space-lg)",
        padding: "0 var(--space-md)",
        borderRadius: "var(--space-md)",
        backgroundColor: "var(--color-bg-accent)",
      }}
    >
      <div
        style={{
          display: "flex",
          columnGap: "var(--space-md)",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/500px-Flag_of_Japan.svg.png"
          width={55}
          height={40}
          style={{
            objectFit: "cover",
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
          <h4> Japan </h4>
          <h3> Koichi Okada </h3>
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
