import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faQuoteLeft,
  faQuoteRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import StarRating from "../StarRating";

export default function ReviewCard({
  productName,
  productSubName,
  productImage,
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
        padding: "0 0 var(--space-xl) 0",
      }}
    >
      {productImage !== "" && !productImage ? (
        <img
          src="/assets/matcha/nama/product_placement.jpg"
          loading="lazy"
          width={"100%"}
          height={280}
          style={{
            objectFit: "cover",
            borderRadius: "var(--space-md) var(--space-md) 0 0",
          }}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 280,
            backgroundColor: "var(--color-secondary)",
            borderRadius: "var(--space-md) var(--space-md) 0 0",
          }}
        >
          <FontAwesomeIcon icon={faImage} color="white" size="xl" />
        </div>
      )}

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
              margin: "-25px 0 0 5px",
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
              margin: "0 10px -20px 0",
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
        {userImg !== "" && !userImg ? (
          <img
            src={userImg}
            alt={`${userName}-profile-pic`}
            width={24}
            height={24}
            loading="lazy"
            style={{
              objectFit: "cover",
              borderRadius: "100%",
            }}
          />
        ) : (
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: "white",
              borderRadius: "100%",
            }}
          >
            <FontAwesomeIcon
              icon={faUser}
              color="var(--color-primary)"
              size="xs"
            />
          </div>
        )}

        <p> {userName} </p>
      </div>
    </div>
  );
}
