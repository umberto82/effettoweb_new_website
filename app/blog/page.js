import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import { getAllPosts } from "../../lib/blog";

export const metadata = {
  title: "Blog Sviluppo Web | Guide e Tutorial",
  description:
    "Blog per sviluppatori con guide pratiche su Next.js, React, WordPress, Node.js e tecnologie web. Tutorial, consigli e best practice per sviluppatori.",
  openGraph: {
    title: "Blog Sviluppo Web - EffettoWeb",
    description:
      "Guide e tutorial su sviluppo web, Next.js, WordPress, Node.js e tecnologie moderne.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <section
        className="works-hero"
        style={{
          width: 860,
          maxWidth: "100%",
          margin: "130px auto 0",
          padding: "24px 24px 48px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { label: "Blog" },
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
            Blog
          </h1>
          <p
            style={{
              color: "#888888",
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Guide, tutorial e approfondimenti sul mondo dello sviluppo web
          </p>
        </div>
      </section>

      <div
        style={{
          width: 860,
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 24px 80px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="blog-card"
            style={{
              display: "flex",
              gap: 24,
              background: "#fff",
              borderRadius: 24,
              border: "1px solid rgba(0, 0, 0, 0.06)",
              overflow: "hidden",
              transition: "box-shadow 0.3s",
            }}
          >
            {post.cover && (
              <div
                style={{
                  flexShrink: 0,
                  width: 200,
                  position: "relative",
                  minHeight: 140,
                }}
              >
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="200px"
                  unoptimized
                />
              </div>
            )}
            <div style={{ padding: "24px 24px 24px 0", flex: 1 }}>
              <p
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: 13,
                  color: "#888888",
                  marginBottom: 6,
                }}
              >
                {new Date(post.date).toLocaleDateString("it-IT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-instrument-serif), serif",
                  fontSize: 20,
                  fontWeight: 400,
                  color: "#0f0f1a",
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-instrument-sans), sans-serif",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "#888888",
                }}
              >
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}
