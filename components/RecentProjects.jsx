"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 17, title: "E-commerce Vinili", tag: "Shopify" },
  { id: 18, title: "", tag: "" },
  { id: 2, title: "Impresa di Manutenzione Piscine", tag: "Next.js" },
  { id: 13, title: "", tag: "" },
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

export default function RecentProjects() {
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
          Progetti Recenti
        </h2>
        <p
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Lanci reali, risultati concreti
        </p>
      </motion.div>

      <div
        className="resp-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "396px 396px",
          gap: 20,
          justifyContent: "center",
          marginBottom: 48,
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderRadius: 32,
              border: "1px solid rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
              cursor: "pointer",
              position: "relative",
              aspectRatio: "4/3",
              background: "var(--card-bg)",
              transition: "box-shadow 0.3s",
              boxShadow:
                hovered === i
                  ? "0 12px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)"
                  : "0 2px 12px rgba(0, 0, 0, 0.03)",
            }}
          >
            {/* PNG progetto */}
            <div
              style={{
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                src={`/imgs/carosello/${project.id}.png`}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="396px"
              />
            </div>

            {/* Overlay tag in basso */}
            {(project.tag || project.title) && (
              <motion.div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px 24px",
                  background:
                    "linear-gradient(transparent, rgba(0,0,0,0.4))",
                }}
              >
                {project.tag && (
                  <span
                    style={{
                      fontFamily: "var(--font-instrument-sans), sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.7)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {project.tag}
                  </span>
                )}
                {project.title && (
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-serif), serif",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#fff",
                      marginTop: project.tag ? 4 : 0,
                    }}
                  >
                    {project.title}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ textAlign: "center" }}
      >
        <a
          href="/works"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "14px 32px",
            borderRadius: 32,
            background: "var(--btn-gradient)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            border: "1px solid #6366f1",
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
          Esplora tutti i nostri lavori
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
