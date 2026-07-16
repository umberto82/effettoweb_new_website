"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem("cookie-choice");
    if (!choice) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-choice", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-choice", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        maxWidth: 500,
        width: "calc(100% - 40px)",
        background: "#fff",
        borderRadius: 20,
        border: "1px solid rgba(0,0,0,0.08)",
        padding: "20px 24px",
        zIndex: 9999,
        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-instrument-sans), sans-serif",
          fontSize: 13,
          lineHeight: 1.5,
          color: "#666",
          margin: "0 0 16px 0",
        }}
      >
        Utilizziamo solo cookie tecnici necessari al funzionamento del sito.
        Per maggiori informazioni, consulta la nostra{" "}
        <Link
          href="/privacy"
          style={{ color: "#6366f1", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
        .
      </p>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onClick={reject}
          style={{
            flex: 1,
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 13,
            fontWeight: 500,
            padding: "10px 0",
            borderRadius: 12,
            background: "rgba(0,0,0,0.05)",
            color: "#666",
            border: "1px solid rgba(0,0,0,0.08)",
            cursor: "pointer",
          }}
        >
          Solo Necessari
        </button>
        <button
          onClick={accept}
          style={{
            flex: 1,
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 13,
            fontWeight: 600,
            padding: "10px 0",
            borderRadius: 12,
            background: "var(--btn-gradient)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Accetta Tutti
        </button>
      </div>
    </div>
  );
}
