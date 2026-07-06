"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Siti Web",
    description:
      "Siti professionali su misura, veloci e ottimizzati per convertire visitatori in clienti.",
    img1: "/imgs/cosa-facciamo/web_design.png",
    img2: "/imgs/cosa-facciamo/web_design2.png",
  },
  {
    title: "E-commerce",
    description:
      "Negozi online performanti con checkout fluido, gestione prodotti e integrazione pagamenti.",
    img1: "/imgs/cosa-facciamo/ecommerce.png",
    img2: "/imgs/cosa-facciamo/ecommerce2.png",
  },
  {
    title: "Marketing Digitale",
    description:
      "Strategie SEO, ADS e social per aumentare la visibilità e portare traffico qualificato.",
    img1: "/imgs/cosa-facciamo/marketing1.png",
    img2: "/imgs/cosa-facciamo/marketing2.png",
  },
  {
    title: "Manutenzione & Supporto",
    description:
      "Pacchetti di manutenzione su misura per aggiornamenti, sicurezza, backup e assistenza continuativa.",
    img1: "/imgs/cosa-facciamo/manutenzione1.png",
    img2: "/imgs/cosa-facciamo/manutenzione2.png",
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

export default function WhatWeDo() {
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      style={{
        width: 960,
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
        style={{ textAlign: "center", marginBottom: 56 }}
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
          Cosa Facciamo
        </h2>
        <p
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Qualità su misura, senza scorciatoie
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
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: "#fff",
              borderRadius: 32,
              border: "1px solid rgba(0, 0, 0, 0.06)",
              padding: "32px 28px 28px",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "box-shadow 0.3s",
              boxShadow:
                hovered === i
                  ? "0 12px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)"
                  : "0 2px 12px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* Due PNG sovrapposte - triangolo in alto */}
            <div
              style={{
                position: "relative",
                width: 180,
                height: 90,
                marginBottom: 10,
                zIndex: 1,
              }}
            >
              {/* PNG 1 - sinistra */}
              <motion.div
                animate={{
                  rotate: hovered === i ? 12 : -12,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 90,
                  height: 68,
                  borderRadius: 8,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.06))",
                  border: "1.5px solid rgba(99, 102, 241, 0.25)",
                }}
              >
                {service.img1 ? (
                  <Image
                    src={service.img1}
                    alt=""
                    width={90}
                    height={68}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#6366f1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    PNG 1
                  </span>
                )}
              </motion.div>

              {/* PNG 2 - destra */}
              <motion.div
                animate={{
                  rotate: hovered === i ? -12 : 12,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 90,
                  height: 68,
                  borderRadius: 8,
                  overflow: "hidden",
                  background:
                    "linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.04))",
                  border: "1.5px solid rgba(99, 102, 241, 0.25)",
                }}
              >
                {service.img2 ? (
                  <Image
                    src={service.img2}
                    alt=""
                    width={90}
                    height={68}
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#6366f1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    PNG 2
                  </span>
                )}
              </motion.div>
            </div>

            {/* Testo */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#0f0f1a",
                  marginBottom: 18,
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: "#888888",
                }}
              >
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
