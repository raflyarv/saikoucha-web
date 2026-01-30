import "./App.css";
import ContactCard from "./components/ContactCard";
import ProductsCard from "./components/ProductsCard";
import ReviewCard from "./components/ReviewCard";
import SectionHeader from "./components/SectionHeader";

import { MapContainer, TileLayer, Marker, Popup, Pane } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import LanguageSwitcher from "./components/LanguageSwitcher";

import products from "./data/products.json";
import contacts from "./data/contacts.json";

function App() {
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

        <h2
          style={{
            color: "var(--color-text-inverse)",
            zIndex: 100,
            textShadow: `0 0 20px 0 rgba(0, 0, 0, 0.75);`,
          }}
        >
          Selamat Datang
        </h2>
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
        <SectionHeader eyebrow="About" title="Saikoucha" align="center" />
        <p>
          Based in Indonesia and connected to various cities in Japan, we're a
          team dedicated to sharing the true essence of Japanese matcha with the
          world. Our mission is simple; providing premium and authentic matcha
          to be accessible and understood by everyone.
        </p>
        <p>
          As global demand rises, we work directly with Japanese farmers and
          trusted partners to offer high-quality matcha at a fair price. More
          than just a supplier, we aim to educate, support, and build a
          community that values reliability and cultural connection.
        </p>
        <p>
          Whether you're discovering matcha or searching for a reliable partner,
          we're here to guide you every step of the way!
        </p>
      </section>

      <section className="container" id="products">
        <SectionHeader eyebrow="Our" title="Products" />

        {/* Nanti dijadiin style sendiri: Horizontal Scroll Container */}
        <div
          style={{
            width: "100%",
            display: "flex",
            overflow: "scroll",
            padding: "20px 5px",
            boxSizing: "border-box",
          }}
        >
          {products.map((matcha) => (
            <ProductsCard
              key={matcha.id}
              productName={matcha.matchaName}
              productDescription={matcha.shortDescription}
              productImages={matcha.productImages}
              grade={matcha.grade}
              umamiScore={matcha.umamiScore}
              bitternessScore={matcha.bitternessScore}
              colorDepthScore={matcha.colorDepth}
              weightGrams={matcha.weightGrams}
              weightOunces={matcha.weightOunce}
            />
          ))}
        </div>
      </section>

      <section
        style={{
          marginBottom: "100px",
          position: "relative",
        }}
        className="container map-container"
      >
        <SectionHeader eyebrow="Our" title="Location" />

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
              Get Direction
            </div>
          </a>
        </div>
      </section>

      <section className="section-dark full-width" id="contact-us">
        <SectionHeader eyebrow="Our" title="Global Partners" />

        {contacts.map((cp) => (
          <ContactCard key={cp.id} person={cp} />
        ))}
      </section>

      <section className="container" id="reviews">
        <SectionHeader eyebrow="What They Say" title="About NAMA" />

        <ReviewCard
          productName={"NAMA Matcha"}
          productSubName={"Yummerssssssss"}
          review={
            "Lorem ipsum dolor sit amet consectetur. Quis at ultricies facilisis consequat sit vulputate vel arcu non. Feugiat quis tortor urna"
          }
          starRating={3}
          userImg={"src/assets/profile-pic.png"}
          userName={"Maysilee Donner"}
        />
      </section>

      <section className="container" id="events">
        <SectionHeader eyebrow="A Glimpse" title="of Our Events" />

        <div
          style={{
            width: "300px",
            height: "375px",
            backgroundColor: "var(--color-primary)",
            borderRadius: "var(--space-md)",
          }}
        ></div>
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
            <a href="#about-us">
              <p> About Us </p>
            </a>

            <a href="#products">
              <p> Product </p>
            </a>

            <a href="#contact-us">
              <p> Contact Us </p>
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: "var(--space-md)",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faTiktok}
              size="md"
              color="var(--color-text-inverse)"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              color="var(--color-text-inverse)"
            />

            <FontAwesomeIcon
              icon={faWhatsapp}
              size="lg"
              color="var(--color-text-inverse)"
            />

            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              color="var(--color-text-inverse)"
            />
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
