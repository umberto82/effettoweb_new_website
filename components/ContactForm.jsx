"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "100%",
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <input
        type="text"
        placeholder="Il tuo nome"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={{
          fontFamily: "var(--font-instrument-sans), sans-serif",
          fontSize: 15,
          padding: "14px 18px",
          borderRadius: 16,
          border: "1px solid rgba(0, 0, 0, 0.08)",
          background: "#fff",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)")
        }
      />
      <input
        type="email"
        placeholder="La tua email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={{
          fontFamily: "var(--font-instrument-sans), sans-serif",
          fontSize: 15,
          padding: "14px 18px",
          borderRadius: 16,
          border: "1px solid rgba(0, 0, 0, 0.08)",
          background: "#fff",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)")
        }
      />
      <textarea
        placeholder="Come possiamo aiutarti?"
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        style={{
          fontFamily: "var(--font-instrument-sans), sans-serif",
          fontSize: 15,
          padding: "14px 18px",
          borderRadius: 16,
          border: "1px solid rgba(0, 0, 0, 0.08)",
          background: "#fff",
          outline: "none",
          resize: "vertical",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)")
        }
      />
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          padding: "14px 32px",
          borderRadius: 32,
          background: "var(--btn-gradient)",
          color: "#fff",
          fontSize: 15,
          fontWeight: 600,
          border: "1px solid #6366f1",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
          boxShadow:
            "0 12px 40px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.1)",
          transition: "filter 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "brightness(0.85)";
          e.currentTarget.style.boxShadow = "none";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "brightness(1)";
          e.currentTarget.style.boxShadow =
            "0 12px 40px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.1)";
        }}
      >
        {status === "sending" ? (
          "Invio in corso..."
        ) : (
          <>
            Invia messaggio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        )}
      </button>
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 14,
            color: "#6366f1",
            textAlign: "center",
          }}
        >
          Messaggio inviato! Ti risponderemo al più presto.
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 14,
            color: "#dc2626",
            textAlign: "center",
          }}
        >
          Errore. Riprova o scrivici direttamente a umberto@effettoweb.com
        </motion.p>
      )}
    </form>
  );
}
