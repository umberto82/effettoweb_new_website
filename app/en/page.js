"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const projects = [17, 2, 28, 24];

export default function EnPage() {
  return (
    <>
      <Header />
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "120px 24px 80px",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ maxWidth: 860, textAlign: "center" }}
        >
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 14,
              marginBottom: 24,
            }}
          >
            Italian Web Agency — Based in Padova, Working Worldwide
          </p>
          <h1
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "clamp(36px, 6vw, 62px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#0f0f1a",
              marginBottom: 20,
            }}
          >
            We Build Websites & E-commerce
            <br />
            for Your Business
          </h1>
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              marginBottom: 36,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Professional websites, online stores, and digital strategies
            tailored for companies and professionals. Based in Italy, working
            remotely with clients across Europe and beyond.
          </p>
          <a
            href="/contatti"
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
                "0 12px 40px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12)",
              transition: "filter 0.2s, box-shadow 0.2s",
            }}
          >
            Get a Free Quote
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

      <section
        style={{
          width: 860,
          maxWidth: "100%",
          margin: "0 auto",
          padding: "60px 24px 100px",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: "#0f0f1a",
              marginBottom: 8,
            }}
          >
            Recent Work
          </h2>
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 16,
            }}
          >
            Real projects for real clients
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
          {projects.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                borderRadius: 32,
                overflow: "hidden",
                aspectRatio: "4/3",
                position: "relative",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src={`/imgs/carosello/${id}.png`}
                alt={`Project ${id}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="396px"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section
        style={{
          width: 860,
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 24px 100px",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 400,
            color: "#0f0f1a",
            marginBottom: 16,
          }}
        >
          How We Work
        </h2>
        <p
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 16,
            marginBottom: 48,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We work remotely with clients worldwide. Communication via email,
          Slack, and video calls. You get a dedicated developer who speaks
          your language.
        </p>

        <div
          className="resp-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {[
            { step: "01", title: "Discovery", desc: "We listen to your needs and define goals together." },
            { step: "02", title: "Build", desc: "Design and development. Updates at every step." },
            { step: "03", title: "Launch", desc: "Your site goes live. We stay for support." },
          ].map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: 32,
                border: "1px solid rgba(0,0,0,0.06)",
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: 20,
                  color: "#6366f1",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                {s.step}
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
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <a
          href="/contatti"
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
              "0 12px 40px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12)",
            marginTop: 48,
          }}
        >
          Let&apos;s Work Together
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
      </section>

      <Footer />
    </>
  );
}
