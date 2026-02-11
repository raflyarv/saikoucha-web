import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

import i18n from "i18next";

const languages = [
  {
    code: "en",
    label: "English",
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
  },
  {
    code: "id",
    label: "Indonesia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/500px-Flag_of_Indonesia.svg.png",
  },
  {
    code: "jp",
    label: "日本語",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/500px-Flag_of_Japan.svg.png",
  },
];

export default function LanguageSwitcher() {
  const savedCode = localStorage.getItem("language");
  const selectedIndex = languages.findIndex((lang) => lang.code === savedCode);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    languages[selectedIndex] ?? languages[0],
  );
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!selected.code) return;

    localStorage.setItem("language", selected.code);
    i18n.changeLanguage(selected.code);
  }, [selected]);

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-end",
        position: "relative",
      }}
      ref={ref}
    >
      <button
        style={{
          backgroundColor: "transparent",
          border: 0,

          display: "flex",
          alignItems: "center",
          columnGap: "var(--space-sm)",
        }}
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src={selected.flag}
          alt={selected.label}
          width={35}
          height={25}
          style={{
            objectFit: "cover",
            borderRadius: "5px",
            boxShadow: "1px 1px 10px -2px rgba(0,0,0,0.4)",
          }}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          color="var(--color-primary)"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 180ms ease",
          }}
        />
      </button>

      <ul
        style={{
          display: "flex",
          position: "absolute",
          top: "100%",
          left: "auto",
          right: 0,

          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "var(--space-md) var(--space-lg)",
          backgroundColor: "white",
          boxSizing: "border-box",
          borderRadius: "var(--space-sm)",
          rowGap: "var(--space-sm)",

          opacity: open ? 1 : 0,
          transform: open
            ? "translateY(0) scale(1)"
            : "translateY(-8px) scale(0.98)",

          pointerEvents: open ? "auto" : "none",

          transition: "opacity 140ms ease, transform 180ms ease",
          transformOrigin: "top right",
        }}
      >
        {languages.map((lang) => (
          <li
            style={{
              display: "flex",
              columnGap: "var(--space-md)",
            }}
            key={lang.code}
            onClick={() => {
              setSelected(lang);
              setOpen(false);
            }}
          >
            <img
              src={lang.flag}
              alt={lang.label}
              width={30}
              height={20}
              style={{
                objectFit: "cover",
                borderRadius: "5px",
                boxShadow: "1px 1px 10px -1px rgba(0,0,0,0.4)",
              }}
            />
            <span>
              <p
                style={{
                  margin: 0,
                  color: "var(--color-primary)",
                }}
              >
                {" "}
                {lang.label}{" "}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
