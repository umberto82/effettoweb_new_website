"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    number: "24/7",
    title: "Il tuo sito non dorme mai",
    description:
      "Mentre tu sei concentrato sul tuo lavoro, il sito continua a portarti nuovi clienti. Ogni ora, ogni giorno, senza fermarsi.",
  },
  {
    number: "3x",
    title: "Più visibilità, più contatti",
    description:
      "Essere online con un sito professionale e ottimizzato ti fa trovare da chi cerca esattamente quello che offri. I nostri clienti vedono fino al triplo delle richieste.",
  },
  {
    number: "0€",
    title: "Nessun costo nascosto",
    description:
      "Preventivo chiaro prima di iniziare. Sai esattamente quanto spendi e cosa ottieni. Nessuna sorpresa in fattura.",
  },
];

export default function BusinessValue() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      style={{
        width: 860,
        maxWidth: "100%",
        margin: "0 auto",
        padding: "100px 24px",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: 48 }}
      >
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "#0f0f1a",
            marginBottom: 8,
          }}
        >
          Cosa Ottieni Concretamente
        </h2>
        <p
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Non solo un bel sito. Risultati veri per il tuo business.
        </p>
      </motion.div>

      <div
        className="resp-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: "#fff",
              borderRadius: 32,
              border: "1px solid rgba(0, 0, 0, 0.06)",
              padding: "32px 28px",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: 40,
                fontWeight: 400,
                color: "#6366f1",
                display: "block",
                marginBottom: 12,
                lineHeight: 1,
              }}
            >
              {b.number}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: 20,
                fontWeight: 400,
                color: "#0f0f1a",
                marginBottom: 8,
              }}
            >
              {b.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-instrument-sans), sans-serif",
                fontSize: 14,
                lineHeight: 1.5,
                color: "#888888",
              }}
            >
              {b.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
