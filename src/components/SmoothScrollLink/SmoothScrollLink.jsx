export default function SmoothScrollLink({
  to, // ID of the target element
  children, // link text or JSX
  offset = 80, // default offset for header in px
  className = "", // optional styling
}) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(to);
    if (!el) return;

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={className}
      style={{
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}
