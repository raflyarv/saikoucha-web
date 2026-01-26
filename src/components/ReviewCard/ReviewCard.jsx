import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import StarRating from "../StarRating";

export default function ReviewCard({
  productName,
  productSubName,
  review,
  starRating,
  userImg,
  userName,
}) {
  return (
    <div
      style={{
        width: "290px",
        minHeight: "480px",
        backgroundColor: "var(--color-primary)",
        borderRadius: "var(--space-md)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 0 var(--space-md) 0",
      }}
    >
      <img
        src="src/assets/matcha/nama/product_placement.jpg"
        width={"100%"}
        height={280}
        style={{
          objectFit: "cover",
          borderRadius: "var(--space-md) var(--space-md) 0 0",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 var(--space-md)",
          alignItems: "center",
          margin: "0 0 var(--space-md) 0",
        }}
        className="primary-section"
      >
        <StarRating value={starRating} max={5} />
        <h3> {productName} </h3>
        <h5> {productSubName} </h5>

        <div
          style={{
            display: "flex",
            position: "relative",
            margin: "var(--space-md) 0 0 0",
          }}
        >
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="md"
            color="var(--color-text-inverse)"
            style={{
              position: "absolute",
              margin: "-10px 0 0 5px",
              opacity: "50%",
            }}
          />
          <p>{review}</p>
          <FontAwesomeIcon
            icon={faQuoteRight}
            size="md"
            color="var(--color-text-inverse)"
            style={{
              position: "absolute",
              margin: "0 10px -10px 0",
              right: "0",
              bottom: "0",
              opacity: "50%",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: "var(--space-sm)",
        }}
        className="primary-section"
      >
        <img
          src={userImg}
          width={24}
          height={24}
          style={{
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />

        <p> {userName} </p>
      </div>
    </div>
  );
}
