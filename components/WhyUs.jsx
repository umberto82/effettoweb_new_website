"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const whyUsItems = [
  {
    title: "Effetto Web",
    items: [
      "Partiamo subito, anche oggi",
      "Tempi di consegna rapidi",
      "Prezzo fisso, nessuna sorpresa",
  "Revisioni fino al risultato desiderato",
  "Puoi mettere in pausa quando vuoi",
    ],
    isPositive: true,
  },
  {
    title: "Altre Agenzie",
    items: [
      "Liste d'attesa di settimane",
      "Ritardi continui sulle scadenze",
      "Costi nascosti e fatture a sorpresa",
      "Modifiche limitate o a pagamento",
      "Contratti vincolanti di 12 mesi",
    ],
    isPositive: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function WhyUs() {
  const [hovered, setHovered] = useState(null);
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
          Perché Sceglierci
        </h2>
        <p
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Niente freelancer da gestire, niente agenzie costose
        </p>
      </motion.div>

      <div
        className="resp-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        {whyUsItems.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: card.isPositive ? "#fff" : "#fafafa",
              borderRadius: 32,
              border: card.isPositive
                ? "1px solid rgba(0, 0, 0, 0.06)"
                : "1px solid rgba(0, 0, 0, 0.04)",
              padding: "24px 28px 20px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "box-shadow 0.3s",
              boxShadow:
                hovered === i
                  ? "0 12px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)"
                  : "0 2px 12px rgba(0, 0, 0, 0.03)",
              opacity: card.isPositive ? 1 : 0.65,
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: 22,
                fontWeight: 400,
                color: "#0f0f1a",
                marginBottom: 16,
                textAlign: "center",
                opacity: card.isPositive ? 1 : 0.5,
              }}
            >
              {card.title}
            </h3>
            {card.items.map((item, j) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "10px 0",
                  borderBottom:
                    j < card.items.length - 1
                      ? card.isPositive
                        ? "1px solid rgba(0, 0, 0, 0.05)"
                        : "1px solid rgba(0, 0, 0, 0.04)"
                      : "none",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    background: card.isPositive
                      ? "linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.08))"
                      : "rgba(0, 0, 0, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.isPositive ? (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 6l3 3 5-6"
                        stroke="#6366f1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 2l6 6M8 2l-6 6"
                        stroke="#bbb"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-instrument-sans), sans-serif",
                    fontSize: 15,
                    lineHeight: 1.4,
                    color: card.isPositive ? "#0f0f1a" : "#aaa",
                    textDecoration: card.isPositive
                      ? "none"
                      : "line-through",
                    textDecorationColor: card.isPositive
                      ? "transparent"
                      : "rgba(0,0,0,0.15)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
