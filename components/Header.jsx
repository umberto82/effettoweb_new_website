"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Progetti" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contatti" },
];

export default function Header() {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px 20px",
        pointerEvents: "none",
        background: "linear-gradient(#fff 0%, #eee0 100%)",
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ pointerEvents: "auto" }}
      >
        <Link
          href="/"
          onClick={() => setActive("/")}
          style={{ display: "flex", alignItems: "center" }}
          className="header-logo"
        >
          <Image
            src="/imgs/header/effettoweb_logo.png"
            alt="Effetto Web"
            width={140}
            height={28}
            priority
            style={{ height: "auto" }}
          />
        </Link>
      </motion.div>

      {/* Dynamic Island pill - desktop */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="header-pill"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 6px",
          borderRadius: 40,
          background: "rgba(230, 230, 230, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 0, 0, 0.06)",
          pointerEvents: "auto",
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            style={{
              padding: "8px 16px",
              borderRadius: 24,
              fontSize: 14,
              fontWeight: active === link.href ? 600 : 500,
              color: active === link.href ? "#0f0f1a" : "#888888",
              transition: "color 0.2s, font-weight 0.2s",
            }}
          >
            {link.label}
          </Link>
        ))}
      </motion.nav>

      {/* Right side: hamburger (mobile) + CTA (desktop) */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          pointerEvents: "auto",
        }}
      >
        {/* Hamburger - mobile only */}
        <button
          className="header-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            display: "none",
            width: 50,
            height: 50,
            borderRadius: 25,
            border: "none",
            background: "#e6e6e680",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            flexDirection: "column",
            gap: 4,
            padding: 0,
          }}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
            style={{
              display: "block",
              width: 16,
              height: 1,
              background: "#888",
              borderRadius: 1,
            }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            style={{
              display: "block",
              width: 16,
              height: 1,
              background: "#888",
              borderRadius: 1,
            }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
            style={{
              display: "block",
              width: 16,
              height: 1,
              background: "#888",
              borderRadius: 1,
            }}
          />
        </button>

        {/* CTA button - hidden on mobile */}
        <a href="/contact" className="header-cta" style={{ display: "inline-block" }}>
          <span
            style={{
              display: "inline-block",
              padding: "10px 22px",
              borderRadius: 24,
              background: "var(--btn-gradient)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              border: "1px solid #6366f1",
              boxShadow:
                "0 12px 40px rgba(0, 0, 0, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            Contattaci
          </span>
        </a>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                zIndex: 99,
                pointerEvents: "auto",
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="header-mobile-menu"
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 16,
                right: 16,
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderRadius: 24,
                border: "2px solid rgba(99, 102, 241, 0.35)",
                padding: "6px",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                pointerEvents: "auto",
                zIndex: 100,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "14px 24px",
                    borderRadius: 16,
                    fontSize: 16,
                    fontWeight: active === link.href ? 600 : 400,
                    color: active === link.href ? "#0f0f1a" : "#666",
                    transition: "background 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
