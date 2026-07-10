"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Cosa realizzate?",
    answer:
      "Siti web professionali, ecommerce, strategie di marketing digitale e brand identity. Dalla piccola impresa al progetto più complesso.",
  },
  {
    question: "Quanto tempo serve per avere il sito online?",
    answer:
      "Dipende dalla complessità. Un sito vetrina può essere online in 1-2 settimane. Un ecommerce richiede 3-6 settimane. Ti diamo sempre una stima precisa dopo aver parlato insieme.",
  },
  {
    question: "Quanto costa un sito web?",
    answer:
      "Ogni progetto ha esigenze diverse. Dopo una chiacchierata gratuita ti forniamo un preventivo chiaro, senza costi nascosti. Nessun vincolo.",
  },
  {
    question: "Posso gestire i contenuti in autonomia?",
    answer:
      "Sì, possiamo integrare un blog o un CMS che ti permette di pubblicare articoli, news e aggiornamenti in completa autonomia, senza bisogno di competenze tecniche.",
  },
  {
    question: "Lavorate solo a Padova?",
    answer:
      "Abbiamo base a Padova ma lavoriamo da remoto con aziende e professionisti in tutta Italia. Comunichiamo via email, telefono e videochiamate.",
  },
  {
    question: "Fornite supporto dopo il lancio?",
    answer:
      "Sì. L'assistenza post-lancio è un servizio a pagamento, disponibile in diversi pacchetti: dalla manutenzione base fino a piani completi con aggiornamenti, backup e ottimizzazioni continue. Scegli quello più adatto alle tue esigenze.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
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
          Domande Frequenti
        </h2>
        <p
          style={{
            color: "#888888",
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Tutto quello che devi sapere prima di iniziare
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
            style={{
              background: "#fff",
              borderRadius: 32,
              border: "1px solid rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
              cursor: "pointer",
            }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#0f0f1a",
                }}
              >
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  flexShrink: 0,
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#888888",
                  fontSize: 18,
                  fontWeight: 300,
                }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-instrument-sans), sans-serif",
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "#888888",
                      padding: "0 24px 18px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
