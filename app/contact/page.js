"use client";

import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <div style={{ flex: 1 }}>
      <section
        className="works-hero"
        style={{
          width: 860,
          maxWidth: "100%",
          margin: "130px auto 0",
          padding: "24px 24px",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { label: "Contatti" },
            ]}
          />
          <h1
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
            Parliamo del Tuo Progetto
          </h1>
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Raccontaci la tua idea. Ti rispondiamo in 24 ore.
          </p>
        </motion.div>

        <ContactForm />
      </section>
      </div>
      <Footer />
    </>
  );
}
