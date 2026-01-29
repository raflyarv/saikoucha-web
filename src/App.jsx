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

function App() {
  const position = [-6.217389635973831, 106.8027775337806];

  return (
    <>
      <nav
        style={{
          position: "sticky",
          width: "100%",
          height: "65px",
        }}
      >
        <div></div>

        <div></div>
      </nav>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img
          src="src/assets/pictures/welcome-bg.png"
          width={"100%"}
          height={"100%"}
          alt="Welcome Background Image"
          style={{
            margin: "-15px 0 0 0",
            position: "absolute",
            objectFit: "cover",
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
          margin: "-180px 0 0 0",
          padding: "150px var(--space-md) 75px var(--space-md)",
          backgroundImage: `url("src/assets/pictures/about-bg.png")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="section-dark"
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

      <section>
        <SectionHeader eyebrow="Our" title="Products" />

        <ProductsCard
          productName="Nama"
          productDescription="Premium Grade Matcha From Kagoshima & Miyazaki"
          productImage="src\assets\matcha\nama\product.png"
          umamiScore={2}
          bitternessScore={4}
          colorDepthScore={3}
          weightGrams={30}
          weightOunces={1.03}
        />
      </section>

      <section
        style={{
          margin: "0 0 100px 0",
          position: "relative",
        }}
      >
        <SectionHeader eyebrow="Our" title="Location" />

        <MapContainer
          center={position}
          zoom={15}
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            zIndex: 1,
          }}
          scrollWheelZoom={false}
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

            width: "60%",
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
              Saikoucha Tea Bar
            </h3>
            <h4
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              Jalan Lorem Ipsum No. 18 Kav. XXII
            </h4>
          </div>

          <a
            href="https://maps.app.goo.gl/nCjNFtHe8LSdJXy88"
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

      <section className="section-dark">
        <SectionHeader eyebrow="Our" title="Global Partners" />

        <ContactCard />
      </section>

      <section>
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

      <section>
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
          margin: "0 0 0 0",
          height: "400px",
        }}
        className="section-dark"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "var(--space-md)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 0 var(--space-md) 0",
            }}
          >
            <p> About Us </p>
            <p> Product </p>
            <p> Contact Us </p>
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
        </div>
      </footer>
    </>
  );
}

export default App;
