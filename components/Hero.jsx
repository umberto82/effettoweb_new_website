"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const carouselImages = Array.from({ length: 23 }, (_, i) => i + 1);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const shuffled = shuffle(carouselImages);
const carouselCards = [...shuffled, ...shuffled];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "90px 0 0 0",
        overflow: "visible",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99, 102, 241, 0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "0 24px",
        }}
      >
      <motion.div
        style={{
          y,
          opacity,
          maxWidth: 960,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <motion.p
          className="hero-badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          Disponibili per Nuovi Progetti
        </motion.p>

        <motion.h1
          className="hero-title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(30px, 5vw, 56px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Online si decide tutto, noi ti mettiamo davanti
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 18,
            lineHeight: 1.6,
            marginBottom: 28,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Siti web, ecommerce e strategie digitali su misura — per farti
          conoscere, trovare nuovi clienti e far crescere il tuo fatturato.
        </motion.p>

        <motion.div
          className="hero-btn-wrapper"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href="/contact"
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
            Inizia il Tuo Progetto
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
        </motion.div>
      </motion.div>

      {/* Carousel dei progetti */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
        style={{
          marginTop: 0,
          width: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: 20,
            padding: "8px 0",
          }}
          animate={{
            x: [0, -9660],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 90,
              ease: "linear",
            },
          }}
        >
          {carouselCards.map((num, i) => (
            <div
              key={`${num}-${i}`}
              style={{
                flexShrink: 0,
                width: 400,
                height: 300,
                borderRadius: 32,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src={`/imgs/carosello/${num}.png`}
                alt={`Progetto ${num}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="400px"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
