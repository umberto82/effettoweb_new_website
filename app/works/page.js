"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";

const realOrder = [27, 22, 28, 24, 25, 21, 31];
const demoOrder = [26, 23, 20, 32];

const projectsData = [
  {
    id: "ecommerce-vinili",
    img: 27,
    mobileImg: "/imgs/lavori/lavori-mobile/vinili.png",
    title: "E-commerce Vinili",
    tag: "Shopify",
    description:
      "Negozio online per la vendita di vinili nuovi e usati. Design pulito con focus sulla ricerca e la navigazione per genere musicale.",
    features: [
      "Carrello integrato",
      "Pagamenti online",
      "Ricerca avanzata",
      "Catalogo prodotti",
      "SEO ottimizzato",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "manutenzione-piscine",
    img: 22,
    mobileImg: "/imgs/lavori/lavori-mobile/manutenzione-piscine.png",
    title: "Impresa di Manutenzione Piscine",
    tag: "Next.js + WordPress",
    description:
      "Sito web realizzato interamente in codice con Next.js, integrato con WordPress come CMS headless per la gestione autonoma del blog. Il cliente può creare, modificare e pubblicare articoli in autonomia dal backend WordPress, mentre il frontend Next.js garantisce velocità e performance elevate.",
    features: [
      "CMS headless WordPress",
      "Blog gestibile in autonomia",
      "Codice scritto a mano",
      "Next.js + React",
      "Velocità e performance",
      "SEO ottimizzato",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "avvocato-zasso",
    img: 28,
    mobileImg: "/imgs/lavori/lavori-mobile/studio-legale-zasso.png",
    title: "Studio Legale Zasso",
    tag: "WordPress",
    description:
      "Sito vetrina realizzato per lo studio dell'avvocato Corrado Zasso di Belluno. Design elegante e professionale per comunicare prestigio e affidabilità. Sviluppato con WordPress e Elementor, con SEO di base e attività di marketing per una iniziativa collaterale dello studio.",
    features: [
      "WordPress + Elementor",
      "SEO di base",
      "Marketing digitale",
      "Design professionale",
      "Responsive",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "oasi-dolce-vita",
    img: 24,
    mobileImg: "/imgs/lavori/lavori-mobile/oasi-dolce-vita.png",
    title: "Oasi Dolce Vita",
    tag: "Next.js",
    description:
      "Sito per una casa vacanze con informazioni turistiche su luoghi e ristoranti nei dintorni. Realizzato interamente in Next.js con sistema di prenotazioni sviluppato a mano, pagamento integrato e pannello admin per la gestione delle prenotazioni e sincronizzazione con Booking.com e Airbnb.",
    features: [
      "Sistema prenotazioni",
      "Pagamento integrato",
      "Pannello admin",
      "Sync Booking & Airbnb",
      "Next.js full-stack",
      "Turismo & ristoranti",
      "Canva",
      "Photoshop",
    ],
    screenshots: [29, 30],
    screenshotLabels: [
      "Sistema prenotazione / pagamento integrato",
      "Gestionale admin",
    ],
  },
  {
    id: "palestra-demo",
    img: 26,
    mobileImg: "/imgs/lavori/lavori-mobile/gym-demo.png",
    title: "Palestra FitZone",
    tag: "Progetto Demo",
    description:
      "Progetto dimostrativo per una palestra. Realizzato per mostrare come possiamo creare siti sia con WordPress che in codice Next.js. Design moderno con sezioni corsi, orari, istruttori e modulo contatti. Un esempio concreto delle nostre capacità su entrambe le piattaforme.",
    features: [
      "WordPress / Next.js",
      "Sezione corsi",
      "Orari e istruttori",
      "Modulo contatti",
      "Design moderno",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "arti-marziali-demo",
    img: 20,
    mobileImg: "/imgs/lavori/lavori-mobile/arti-marziali-demo.png",
    title: "Dojo Arti Marziali",
    tag: "Progetto Demo",
    description:
      "Progetto dimostrativo per una palestra di arti marziali. Design dinamico con sezioni dedicate ai diversi stili, orari dei corsi, scheda istruttori e modulo contatti. Un esempio di come possiamo creare siti tematici e d'impatto.",
    features: [
      "Sezione stili marziali",
      "Orari corsi",
      "Istruttori",
      "Modulo contatti",
      "Design dinamico",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "dentista-demo",
    img: 23,
    mobileImg: "/imgs/lavori/lavori-mobile/studio-dentistico-demo.png",
    title: "Studio Dentistico",
    tag: "Progetto Demo",
    description:
      "Progetto dimostrativo per uno studio dentistico. Design pulito e professionale con sezioni dedicate ai trattamenti, presentazione dello staff e modulo prenotazione visite.",
    features: [
      "Sezione trattamenti",
      "Staff medico",
      "Prenotazione visite",
      "Design professionale",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "longebility",
    img: 25,
    mobileImg: "/imgs/lavori/lavori-mobile/longebility.png",
    title: "Longebility",
    tag: "WordPress + PHP",
    description:
      "Sito vetrina per il progetto Longebility di Enzo Parianotti, dedicato alla longevità dopo i 50 anni. Realizzato in WordPress con Elementor e potenziato con pagine custom in PHP scritto a mano. Elemento distintivo: un tempio interattivo della longevità composto da cupola, colonne, basamento e terreno, ognuno animato all'hover e cliccabile per accedere alla sezione di approfondimento.",
    features: [
      "WordPress + Elementor",
      "Pagine custom in PHP",
      "Tempio interattivo animato",
      "Hover e click animati",
      "Codice scritto a mano",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "frame-serramenti",
    img: 21,
    mobileImg: "/imgs/lavori/lavori-mobile/frame-serramenti.png",
    title: "Frame Serramenti",
    tag: "WordPress",
    description:
      "Sito vetrina realizzato per un'azienda specializzata in serramenti. Design elegante e professionale pensato per comunicare prestigio e affidabilità. Realizzato in WordPress con gallery prodotti, sezione azienda e modulo contatti.",
    features: [
      "WordPress",
      "Gallery prodotti",
      "Design prestige",
      "Sezione azienda",
      "Modulo contatti",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "studio-legale-aurelia",
    img: 31,
    mobileImg: "/imgs/lavori/lavori-mobile/studio-legale-aurelia.png",
    title: "Studio Legale Aurelia",
    tag: "WordPress",
    description:
      "Sito vetrina realizzato per lo Studio Legale Aurelia. Design sobrio e professionale per comunicare competenza e affidabilità. Sviluppato interamente in WordPress, con aree dedicate alle aree di pratica, presentazione del team e modulo contatti.",
    features: [
      "WordPress nativo",
      "Aree di pratica",
      "Team dello studio",
      "Modulo contatti",
      "Design professionale",
      "SEO di base",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
  {
    id: "avvocato-demo",
    img: 32,
    mobileImg: "/imgs/lavori/lavori-mobile/avvocato-demo.png",
    title: "Studio Legale Demo",
    tag: "Progetto Demo",
    description:
      "Progetto dimostrativo per uno studio legale. Realizzabile sia in React/Next.js che in WordPress, a seconda delle esigenze del cliente. Dimostra la nostra flessibilità nella scelta della piattaforma più adatta al progetto.",
    features: [
      "React / Next.js",
      "WordPress",
      "Flessibilità tecnologica",
      "Design professionale",
      "Canva",
      "Photoshop",
    ],
    screenshots: [],
  },
];

const realProjects = realOrder.map(
  (imgNum) => projectsData.find((p) => p.img === imgNum) || projectsData[0]
);

const demoProjects = demoOrder.map(
  (imgNum) => projectsData.find((p) => p.img === imgNum) || projectsData[0]
);

function ProjectCard({ project, index, isExpanded, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: isExpanded ? 0 : -4 }}
      onClick={onClick}
      style={{
        borderRadius: 42,
        border: "1px solid rgba(255, 255, 255, 0.08)",
        overflow: "hidden",
        background: "#111",
        cursor: "pointer",
        transition: "box-shadow 0.3s",
        boxShadow: isExpanded
          ? "0 12px 40px rgba(0, 0, 0, 0.15)"
          : "0 2px 12px rgba(0, 0, 0, 0.03)",
      }}
    >
      {project.mobileImg && (
        <Image
          src={project.mobileImg}
          alt={project.title}
          width={1200}
          height={2200}
          className="mobile-project-img"
          style={{ width: "100%", height: "auto", display: "none", padding: "28px 0 0 0" }}
          sizes="100vw"
        />
      )}
      <Image
        src={`/imgs/lavori/${project.img}.png`}
        alt={project.title}
        width={1200}
        height={2200}
        className="desktop-project-img"
        style={{ width: "100%", height: "auto", maxHeight: 500, display: "block", objectFit: "contain", padding: "28px 0 0 0" }}
        sizes="(max-width: 768px) 100vw, 1152px"
      />

      <HoverOverlay />

      <div
        style={{
          padding: "24px 24px 28px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 11,
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {project.tag}
        </span>
        <p
          style={{
            fontFamily: "var(--font-instrument-serif), serif",
            fontSize: 18,
            fontWeight: 400,
            color: "#fff",
            marginTop: 4,
          }}
        >
          {project.title}
        </p>
      </div>

      {/* Detail inline */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "0 48px 40px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: 24,
                  maxWidth: 600,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {project.features.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontFamily: "var(--font-instrument-sans), sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(255, 255, 255, 0.7)",
                      background: "rgba(255, 255, 255, 0.08)",
                      padding: "8px 16px",
                      borderRadius: 10,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {project.screenshots && project.screenshots.length > 0 && (
                <div
                  className="screenshot-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${Math.min(project.screenshots.length, 4)}, 1fr)`,
                    gap: 12,
                    marginTop: 40,
                  }}
                >
                  {project.screenshots.map((s, j) => (
                    <div key={j}>
                      {project.screenshotLabels && project.screenshotLabels[j] && (
                        <p
                          style={{
                            fontFamily: "var(--font-instrument-sans), sans-serif",
                            fontSize: 13,
                            fontWeight: 500,
                            color: "rgba(255, 255, 255, 0.5)",
                            textAlign: "center",
                            marginBottom: 8,
                          }}
                        >
                          {project.screenshotLabels[j]}
                        </p>
                      )}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: j * 0.05 }}
                        style={{
                          borderRadius: 20,
                          overflow: "hidden",
                          aspectRatio: "4/3",
                          position: "relative",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Image
                          src={`/imgs/lavori/${s}.png`}
                          alt={`Screenshot ${j + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="500px"
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function HoverOverlay() {
  return (
    <div
      className="hover-overlay"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        opacity: 0,
        transition: "opacity 0.3s",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-instrument-sans), sans-serif",
          fontSize: 15,
          fontWeight: 500,
          color: "#fff",
        }}
      >
        Scopri il progetto
      </span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 5v10M6 11l4 4 4-4"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Works() {
  const [expanded, setExpanded] = useState(null);
  const sectionRef = useRef(null);

  return (
    <>
      <Header />
      <section
        className="works-hero"
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "120px auto 0",
          padding: "60px 24px 0",
          boxSizing: "border-box",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { label: "Lavori" },
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
            Progetti Recenti
          </h1>
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Progetti reali e demo per potenziali clienti.
          </p>
        </motion.div>
      </section>

      {/* CSS per hover overlay */}
      <style>{`
        .hover-overlay:hover {
          opacity: 1 !important;
        }
        .project-card:hover .hover-overlay {
          opacity: 1 !important;
        }
      `}</style>

      <div
        ref={sectionRef}
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "40px 24px 80px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {realProjects.map((project, i) => (
            <div key={project.id}
              className="project-card"
              style={{ position: "relative" }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector(".hover-overlay");
                if (overlay) overlay.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector(".hover-overlay");
                if (overlay) overlay.style.opacity = "0";
              }}
            >
              <ProjectCard
                project={project}
                index={i}
                isExpanded={expanded === i}
                onClick={() => setExpanded(expanded === i ? null : i)}
              />
            </div>
          ))}
        </div>

        {/* Sezione Demo */}
        <div className="demo-section" style={{ marginTop: 150 }}>
          <h2
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400,
              color: "#0f0f1a",
              marginBottom: 4,
              textAlign: "center",
            }}
          >
            Progetti Demo
          </h2>
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 14,
              fontWeight: 400,
              marginBottom: 60,
              textAlign: "center",
            }}
          >
            Realizzati per presentazioni a potenziali clienti
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {demoProjects.map((project, i) => {
              const idx = realProjects.length + i;
              return (
                <div key={project.id}
                  className="project-card"
                  style={{ position: "relative" }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector(".hover-overlay");
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector(".hover-overlay");
                    if (overlay) overlay.style.opacity = "0";
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={idx}
                    isExpanded={expanded === idx}
                    onClick={() => setExpanded(expanded === idx ? null : idx)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
