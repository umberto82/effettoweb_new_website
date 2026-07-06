import Link from "next/link";

export default function Breadcrumb({ items }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 16,
        fontFamily: "var(--font-instrument-sans), sans-serif",
        fontSize: 13,
      }}
    >
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {i > 0 && <span style={{ color: "#ccc" }}>/</span>}
          {item.href ? (
            <Link
              href={item.href}
              style={{ color: "#888888", transition: "color 0.2s" }}
            >
              {item.label}
            </Link>
          ) : (
            <span style={{ color: "#0f0f1a", fontWeight: 500 }}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
