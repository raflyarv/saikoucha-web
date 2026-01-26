import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating({
  value = 0,
  max = 5,
  size = "md",
  activeColor = "var(--color-text-inverse)",
  inactiveColor = "#ffffff6d",
}) {
  return (
    <div
      style={{ display: "flex", gap: "0", margin: "-5px 0 10px 0", padding: 0 }}
    >
      {Array.from({ length: max }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          size={size}
          color={index < value ? activeColor : inactiveColor}
        />
      ))}
    </div>
  );
}
