import BulletRating from "../BulletRating";

export default function ProductsCard({
  productName,
  productDescription,
  productImages,
  grade,
  umamiScore,
  bitternessScore,
  colorDepthScore,
  weightGrams,
  weightOunces,
}) {
  const getSavedCode = localStorage.getItem("language");

  return (
    <div
      style={{
        width: "100%",
      }}
      className="product-card"
    >
      <div
        style={{
          display: "flex",
          overflow: "scroll",
        }}
      >
        {productImages.map((img, i) => (
          <img
            key={`${productName}-${i}`}
            src={img}
            alt={`${productName}-${i}`}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              marginBottom: "var(--space-md)",
            }}
          />
        ))}
      </div>

      <div
        style={{
          paddingRight: "var(--space-lg)",
          paddingLeft: "var(--space-lg)",
        }}
      >
        <h2
          style={{
            textAlign: "left",
            margin: 0,
          }}
        >
          {productName.toUpperCase()}
        </h2>
        <h4
          style={{
            textAlign: "left",
            marginTop: "var(--space-sm)",
          }}
        >
          {productDescription}
        </h4>

        <h5
          style={{
            textAlign: "right",
            marginTop: "var(--space-sm)",
          }}
        >
          {" "}
          NET WT. {weightGrams}G / {weightOunces} OZ{" "}
        </h5>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            columnGap: "5px",
          }}
        >
          <div
            style={{
              height: "fit-content",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "space-between",
              margin: "0 0 var(--space-md) 0",
              padding: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              Grade
            </p>

            <p
              style={{
                padding: "3px 15px",
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text-inverse)",
                borderRadius: "20px",
                margin: 0,
              }}
            >
              {grade}
            </p>
          </div>

          <div
            style={{
              height: "fit-content",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 0,
              padding: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              Umami
            </p>
            <BulletRating value={umamiScore} max={5} />
          </div>
          <div
            style={{
              height: "fit-content",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 0,
              padding: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              Bitterness
            </p>
            <BulletRating value={bitternessScore} max={5} />
          </div>
          <div
            style={{
              height: "fit-content",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 0,
              padding: 0,
            }}
          >
            <p
              style={{
                margin: 0,
                padding: 0,
              }}
            >
              Color Depth
            </p>
            <BulletRating value={colorDepthScore} max={5} />
          </div>

          <div>
            <p
              style={{
                margin: "var(--space-md) 0 0 0",
                padding: 0,
                textAlign: "left",
                color: "var(--color-secondary)",
              }}
            >
              Flavor:{" "}
              <span
                style={{
                  textDecoration: "underline",
                }}
              >
                Seaweed, Chestnut, Kombucha{" "}
              </span>
            </p>
          </div>
        </div>

        <p
          style={{
            margin: "var(--space-md) 0 0 0",
          }}
        >
          {" "}
          Available on:{" "}
        </p>

        {getSavedCode === "id" ? (
          <a
            href="https://shopee.co.id/?gad_source=1&gad_campaignid=1558961180&gbraid=0AAAAADPpU83sZkCGHUFLgYUceY6vnCLP5&gclid=Cj0KCQiA-NHLBhDSARIsAIhe9X3Hymiy5a-QwyhyjyByJlZ-aqXa92bwqr_mX5lNTeHEfVe5cGHwkpIaAp2GEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  padding: "5px 15px",
                  backgroundColor: "var(--color-bg-soft)",
                  borderRadius: "10px",
                }}
              >
                <img
                  src="src\assets\socials\shopee.png"
                  alt="Shopee Icon"
                  width={32}
                  height={32}
                  style={{
                    objectFit: "cover",
                    margin: 0,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  {" "}
                  Shopee Official Store{" "}
                </p>
              </div>
            </div>
          </a>
        ) : (
          <a href="#contact-us">
            <p
              style={{
                margin: 0,
                textDecoration: "underline",
                color: "var(--color-primary)",
              }}
            >
              {" "}
              Contact Us{" "}
            </p>
          </a>
        )}
      </div>
    </div>
  );
}
