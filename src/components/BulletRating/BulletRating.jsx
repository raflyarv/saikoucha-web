import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function BulletRating({
  value = 0,
  max = 5,
  size = "xs",
  activeColor = "#111",
  inactiveColor = "#ddd",
}) {
  return (
    <div style={{ display: "flex", gap: "6px", margin: 0, padding: 0 }}>
      {Array.from({ length: max }).map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faCircle}
          size={size}
          color={index < value ? activeColor : inactiveColor}
        />
      ))}
    </div>
  );
}
