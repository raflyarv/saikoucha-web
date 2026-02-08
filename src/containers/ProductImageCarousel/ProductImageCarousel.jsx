import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProductImageCarousel({ images, productName }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = images.length;

  const getImageWidth = () => {
    const container = containerRef.current;
    if (!container || !container.children.length) return 0;
    return container.children[0].offsetWidth;
  };

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const image = container.children[index];
    const containerWidth = container.offsetWidth;
    const imageWidth = image.offsetWidth;

    const scrollLeft = image.offsetLeft - containerWidth / 2 + imageWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const imageWidth = getImageWidth();
    const index = Math.round(container.scrollLeft / imageWidth);

    setActiveIndex(Math.max(0, Math.min(index, total - 1)));
  };

  return (
    <>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "scroll",
          marginBottom: "var(--space-md)",
          scrollSnapType: "x mandatory",
        }}
        className="invisible-scrollbar"
      >
        {images.map((img, i) => (
          <img
            key={`${productName}-${i}`}
            src={img}
            alt={`${productName}-${i}`}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              marginBottom: "var(--space-md)",
              borderRadius: "var(--space-sm)",
              scrollSnapAlign: "center",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "var(--space-sm)",
        }}
      >
        {images.map((_, index) => (
          <FontAwesomeIcon
            key={index}
            onClick={() => scrollToIndex(index)}
            icon={faCircle}
            size="2xs"
            style={{
              cursor: "pointer",
              color:
                activeIndex === index
                  ? "var(--color-primary)"
                  : "var(--color-bg-soft)",
            }}
          />
        ))}
      </div>
    </>
  );
}
