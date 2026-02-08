import "./App.css";
import ContactCard from "./components/ContactCard";
import ProductsCard from "./components/ProductsCard";
import ReviewCard from "./components/ReviewCard";
import SectionHeader from "./components/SectionHeader";
import SocialIcons from "./components/SocialIcons";
import SmoothScrollLink from "./components/SmoothScrollLink";

import { MapContainer, TileLayer, Marker, Popup, Pane } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import LanguageSwitcher from "./components/LanguageSwitcher";

import products from "./data/products.json";
import contacts from "./data/contacts.json";
import reviews from "./data/reviews.json";
import socials from "./data/socials.json";

import { useTranslation } from "react-i18next";
import ProductHorizontalNav from "./containers/ProductsHorizontalNav";
import WelcomeHeader from "./components/WelcomeHeader";

function App() {
  const { t } = useTranslation();

  const position = [-7.249093327915247, 112.7493446830677];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          paddingTop: "var(--space-sm)",
        }}
        className="full-width"
      >
        <div
          style={{
            width: "25%",
          }}
        ></div>

        <div
          style={{
            width: "50%",
          }}
        >
          <img
            src="src/assets/logo/original.jpg"
            width={120}
            height={65}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            width: "25%",
          }}
        >
          <LanguageSwitcher />
        </div>
      </nav>

      <section
        style={{
          position: "relative",
          justifyContent: "center",
          height: "100vh",
          marginTop: "-1rem",
        }}
        className="container"
      >
        <img
          src="src/assets/pictures/welcome-bg.png"
          width={"100%"}
          height={"100%"}
          alt="Welcome Background Image"
          style={{
            margin: "0 0 0 0",
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center bottom",
            zIndex: 0,
          }}
        />

        <WelcomeHeader />
      </section>

      <section
        style={{
          marginTop: "-15rem",
          padding: "150px var(--space-lg) 75px var(--space-lg)",
          backgroundImage: `url("src/assets/pictures/about-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="section-dark container"
        id="about-us"
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="src\assets\logo\white-transparent.png"
            alt="Saikoucha Logo"
            width={180}
            height={125}
            style={{
              objectFit: "cover",
              position: "absolute",
              opacity: "40%",
            }}
          />
        </div>
        <SectionHeader
          eyebrow={t("header.about.eyebrow")}
          title={t("header.about.title")}
          align="center"
        />
        <p>{t("content.about.paragraph.first")}</p>
        <p>{t("content.about.paragraph.second")}</p>
        <p>{t("content.about.paragraph.third")}</p>
      </section>

      <section className="container" id="products">
        <SectionHeader
          eyebrow={t("header.product.eyebrow")}
          title={t("header.product.title")}
        />

        {/* Nanti dijadiin style sendiri: Horizontal Scroll Container */}
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "20px 5px",
            boxSizing: "border-box",
          }}
        >
          <ProductHorizontalNav products={products} />
        </div>
      </section>

      <section
        style={{
          marginBottom: "100px",
          position: "relative",
        }}
        className="container map-container"
      >
        <SectionHeader
          eyebrow={t("header.location.eyebrow")}
          title={t("header.location.title")}
        />

        <MapContainer
          center={position}
          zoom={20}
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            zIndex: 1,
          }}
          scrollWheelZoom={false}
          dragging={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Pane name="top-pane" style={{ zIndex: 700 }}>
            <Marker position={position}>
              <Popup> Saikoucha Matcha Store </Popup>
            </Marker>
          </Pane>
        </MapContainer>

        <div
          style={{
            padding: "var(--space-md) var(--space-lg)",
            position: "absolute",
            bottom: "-40px",
            left: "50%",
            transform: "translateX(-50%)",

            width: "65%",
            backgroundColor: "white",
            borderRadius: "var(--space-md)",
            border: "1px solid var(--color-primary)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: "var(--space-sm)",
              margin: "0 0 var(--space-md) 0",
            }}
          >
            <h3
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              Saikoucha
            </h3>
            <h4
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              Jl. Kalianyar No.15-H, RT.004/RW.12, Kapasari, Kec. Genteng,
              Surabaya, Jawa Timur 60273, Indonesia
            </h4>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${position}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              style={{
                display: "flex",
                padding: "var(--space-sm) 0",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--color-primary)",
                color: "var(--color-text-inverse)",
                borderRadius: "20px",
              }}
            >
              {t("common.direction.text")}
            </div>
          </a>
        </div>
      </section>

      <section className="section-dark full-width" id="contact-us">
        <SectionHeader
          eyebrow={t("header.cp.eyebrow")}
          title={t("header.cp.title")}
        />

        {contacts.map((cp) => (
          <ContactCard key={cp.id} person={cp} />
        ))}
      </section>

      <section className="container" id="reviews">
        <SectionHeader
          eyebrow={t("header.review.eyebrow")}
          title={t("header.review.title")}
        />

        {reviews.map((review, i) => (
          <ReviewCard
            key={`review-${i}`}
            productName={review.productName}
            productSubName={review.productSubtitle}
            productImage={review.productImg}
            review={review.review}
            starRating={review.rating}
            userImg={review.reviewerImg}
            userName={review.reviewer}
          />
        ))}
      </section>

      <section className="full-width" id="events">
        <SectionHeader
          eyebrow={t("header.events.eyebrow")}
          title={t("header.events.title")}
        />

        <a
          href="https://www.instagram.com/saikoucha?igsh=MTBycjU4eTVyenpkMQ=="
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "relative",
            width: "90%",
            height: "450px",
            borderRadius: "var(--space-md)",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              zIndex: 3,
              backgroundColor: "var(--opacity-50-bg-primary)",
              color: "white",
              borderRadius: "var(--space-md)",
            }}
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
            <p
              style={{
                padding: 0,
                margin: 0,
                color: "var(--color-text-inverse)",
              }}
            >
              Check out our Instagram !
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              columnGap: "var(--space-sm)",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                rowGap: "var(--space-sm)",
                alignItems: "stretch",
                minHeight: 0,
              }}
            >
              <img
                alt="Photo 1"
                src="src/assets/pictures/single-product.jpg"
                style={{
                  width: "100%",
                  minHeight: 0,

                  flex: 1,
                  objectFit: "cover",
                  borderRadius: "var(--space-md) 0 0 0",
                }}
              />

              <img
                alt="Photo 2"
                src="src/assets/pictures/bazaar.jpg"
                style={{
                  width: "100%",
                  minHeight: 0,
                  flex: 1,
                  objectFit: "cover",
                  borderRadius: "0 0 0 var(--space-md)",
                }}
              />
            </div>
            <img
              alt="Photo 2"
              src="src/assets/pictures/showcase.jpg"
              width={"50%"}
              height={"100%"}
              style={{
                objectFit: "cover",
                borderRadius: "0 var(--space-md) var(--space-md) 0 ",
              }}
            />
          </div>
        </a>
      </section>

      <footer
        style={{
          padding: "var(--space-xl) 0",
          position: "absolute",
        }}
        className="section-dark full-width"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "var(--space-xl)",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "150px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "0 0 var(--space-sm) 0",
            }}
            className="footer-nav"
          >
            <SmoothScrollLink to="about-us">
              <p>{t("footer.about.text")}</p>
            </SmoothScrollLink>

            <SmoothScrollLink to="products">
              <p>{t("footer.product.text")}</p>
            </SmoothScrollLink>

            <SmoothScrollLink to="contact-us">
              <p>{t("footer.contact.text")}</p>
            </SmoothScrollLink>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "var(--space-md)",
              alignItems: "center",
            }}
          >
            <SocialIcons socials={socials} size="xl" />
          </div>

          <div>
            <img
              src="src/assets/logo/white-transparent.png"
              width="150px"
              height="75px"
              style={{
                objectFit: "contain",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                columnGap: "var(--space-sm)",
              }}
            >
              <FontAwesomeIcon icon={faCopyright} size="2xs" />
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: 14,
                }}
              >
                {" "}
                Saikoucha, 2026{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
