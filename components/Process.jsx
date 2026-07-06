"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    step: "Step 1",
    title: "Raccontaci il tuo progetto",
    description:
      "Parlaci della tua idea, dei tuoi obiettivi e di cosa vuoi ottenere. Ti ascoltiamo e ti guidiamo.",
  },
  {
    step: "Step 2",
    title: "Progettiamo e sviluppiamo",
    description:
      "Creiamo il design e sviluppiamo il tuo sito o ecommerce. Ti aggiorniamo a ogni step.",
  },
  {
    step: "Step 3",
    title: "Lanciamo e cresci",
    description:
      "Mettiamo online, testiamo e ottimizziamo. Restiamo al tuo fianco per farti crescere.",
  },
];

export default function Process() {
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
      {/* Top card - titolo + mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="resp-flex"
        style={{
          display: "flex",
          alignItems: "center",
          background: "#fff",
          borderRadius: 32,
          border: "1px solid rgba(0, 0, 0, 0.06)",
          overflow: "hidden",
          marginBottom: 32,
        }}
      >
        <div style={{ flex: 1, padding: "24px 32px" }}>
          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0f0f1a",
              marginBottom: 8,
            }}
          >
            Come Lavoriamo
          </h2>
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            Semplice, veloce, senza sorprese. Tre step per portare la tua
            azienda online.
          </p>
        </div>
        <div
          style={{
            flexShrink: 0,
            width: 200,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Image
            src="/imgs/process/mockup.png"
            alt="Process"
            width={130}
            height={230}
            style={{
              height: "auto",
              maxWidth: "100%",
            }}
          />
        </div>
      </motion.div>

      {/* Steps cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              background: "#fff",
              borderRadius: 32,
              border: "1px solid rgba(0, 0, 0, 0.05)",
              padding: "28px 32px",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                fontFamily: "var(--font-instrument-serif), serif",
                fontSize: 20,
                fontWeight: 400,
                color: "#0f0f1a",
                alignSelf: "center",
                marginRight: 20,
              }}
            >
              {s.step}
            </span>
            <span
              style={{
                flexShrink: 0,
                width: 1,
                alignSelf: "stretch",
                background: "rgba(0, 0, 0, 0.08)",
                marginRight: 24,
              }}
            />
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#0f0f1a",
                  marginBottom: 4,
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "#888888",
                }}
              >
                {s.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
