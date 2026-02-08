import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const platformIcons = {
  tiktok: faTiktok,
  instagram: faInstagram,
  "main-whatsapp": faWhatsapp,
  "main-email": faEnvelope,
};

export default function SocialIcons({
  socials,
  size = "lg",
  color = "var(--color-text-inverse)",
}) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {socials.map(({ platform, link }) => {
        const icon = platformIcons[platform];
        if (!icon) return null; // skip unknown platforms

        // Determine if link is email or normal URL
        const href = platform === "main-email" ? `mailto:${link}` : link;

        return (
          <a
            key={platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: color }}
          >
            <FontAwesomeIcon icon={icon} size={size} />
          </a>
        );
      })}
    </div>
  );
}
