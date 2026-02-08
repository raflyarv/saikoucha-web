import { useState, useEffect } from "react";

export default function WelcomeHeader() {
  const messages = ["Selamat Datang", "Welcome", "いらっしゃいませ"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // true = visible

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        // change text after fade out
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFade(true); // fade in
      }, 500); // match CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      style={{
        color: "var(--color-text-inverse)",
        zIndex: 100,
        textShadow: "0 0 20px 0 rgba(0, 0, 0, 0.75)",
        transition: "opacity 0.5s ease",
        opacity: fade ? 1 : 0,
      }}
    >
      {messages[currentIndex]}
    </h2>
  );
}
