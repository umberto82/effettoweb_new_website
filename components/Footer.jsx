"use client";

export default function Footer() {
  return (
    <footer
      style={{
        width: 860,
        maxWidth: "100%",
        margin: "0 auto",
        padding: "32px 24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-instrument-sans), sans-serif",
          fontSize: 14,
          color: "#888888",
        }}
      >
        &copy; 2026 EffettoWeb. All rights reserved.
      </p>

      <div style={{ display: "flex", gap: 20 }}>
        <a
          href="/contatti"
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 14,
            color: "#888888",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0f0f1a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
        >
          Contatti
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 14,
            color: "#888888",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0f0f1a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
        >
          LinkedIn
        </a>
        <a
          href="/privacy"
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 14,
            color: "#888888",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0f0f1a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
        >
          Privacy
        </a>
      </div>
    </footer>
  );
}
