// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import BulletRating from "./components/BulletRating";
import ContactCard from "./components/ContactCard";
import ProductsCard from "./components/ProductsCard";
import ReviewCard from "./components/ReviewCard";
import SectionHeader from "./components/SectionHeader";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <section>
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

      <section>
        <SectionHeader eyebrow="Our" title="Location" />
      </section>

      <section
        style={{
          width: "100%",
          backgroundColor: "var(--color-primary)",
        }}
      >
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
      </section>
    </>
  );
}

export default App;
