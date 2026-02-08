import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

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
      {Array.from({ length: max }).map((_, index) => {
        // Determine which icon to show
        const starValue = index + 1;
        let icon = faStar; // default full star
        let color = inactiveColor;

        if (value >= starValue) {
          // full star
          icon = faStar;
          color = activeColor;
        } else if (value + 0.5 >= starValue) {
          // half star
          icon = faStarHalfAlt;
          color = activeColor;
        } else {
          // empty star
          icon = faStar;
          color = inactiveColor;
        }

        return (
          <FontAwesomeIcon key={index} icon={icon} size={size} color={color} />
        );
      })}
    </div>
  );
}
