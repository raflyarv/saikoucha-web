import { useRef, useState } from "react";
import ProductsCard from "../../components/ProductsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductHorizontalNav({ products }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const total = products.length;

  const getCardWidth = () => {
    const container = containerRef.current;
    if (!container || !container.children.length) return 0;
    return container.children[0].offsetWidth + 16; // include gap
  };

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.children[index];
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;

    const scrollLeft = card.offsetLeft - containerWidth / 2 + cardWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const next = () => {
    const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleScroll = () => {
    const container = containerRef.current;

    if (!container) return;

    const cardWidth = getCardWidth();
    const index = Math.round(container.scrollLeft / cardWidth);

    setActiveIndex(Math.max(0, Math.min(index, total - 1)));
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <FontAwesomeIcon
        onClick={prev}
        style={{
          position: "absolute",
          left: -20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "var(--color-primary)",
          borderRadius: 100,
          padding: "var(--space-md) 14px",
        }}
        icon={faChevronLeft}
        size="sm"
        color="white"
      />

      <FontAwesomeIcon
        onClick={next}
        style={{
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          backgroundColor: "var(--color-primary)",
          borderRadius: 100,
          padding: "var(--space-md) 14px",
        }}
        icon={faChevronRight}
        size="sm"
        color="white"
      />

      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          width: "100%",
          alignItems: "stretch",
          display: "flex",
          gap: "16px",
          overflowX: "auto", // important
          padding: "30px 56px",
          boxSizing: "border-box",
          scrollSnapType: "x mandatory",
        }}
        className="invisible-scrollbar"
      >
        {products.map((matcha) => (
          <div
            key={matcha.id}
            style={{
              scrollSnapAlign: "center",
            }}
          >
            <ProductsCard
              productName={matcha.matchaName}
              productDescription={matcha.shortDescription}
              productImages={matcha.productImages}
              grade={matcha.grade}
              umamiScore={matcha.umamiScore}
              bitternessScore={matcha.bitternessScore}
              colorDepthScore={matcha.colorDepth}
              weightGrams={matcha.weightGrams}
              weightOunces={matcha.weightOunce}
              flavors={matcha.flavor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
