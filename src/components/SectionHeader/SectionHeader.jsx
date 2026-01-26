import "./sectionheader.css";

export default function SectionHeader({ eyebrow, title, align = "left" }) {
  return (
    <div className={`section-header align-${align}`}>
      <h2 className="section-eyebrow">{eyebrow}</h2>
      <h1 className="section-title">{title}</h1>
    </div>
  );
}
