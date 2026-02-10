import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function ProductImageCarousel({ images, productName }) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

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

    const imageWidth = getImageWidth();
    if (!imageWidth) return;

    const containerWidth = container.offsetWidth;

    const scrollLeft = index * imageWidth + imageWidth / 2 - containerWidth / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;

      const imageWidth = getImageWidth();
      if (!imageWidth) return;

      // ✅ CENTER-BASED calculation
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      const index = Math.round((containerCenter - imageWidth / 2) / imageWidth);

      const clampedIndex = Math.max(0, Math.min(index, total - 1));

      setActiveIndex((prev) => (prev !== clampedIndex ? clampedIndex : prev));

      rafRef.current = null;
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="invisible-scrollbar"
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          marginBottom: "var(--space-md)",
        }}
      >
        {images.map((img, i) => (
          <img
            key={`${productName}-${i}`}
            src={img}
            alt={`${productName}-${i}`}
            loading="lazy"
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              borderRadius: "var(--space-sm)",
              scrollSnapAlign: "center",
              scrollSnapStop: "always",
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
            icon={faCircle}
            size="2xs"
            onClick={() => scrollToIndex(index)}
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
