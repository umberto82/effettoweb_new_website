import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Breadcrumb from "../../../components/Breadcrumb";
import { getAllPosts, getPostBySlug } from "../../../lib/blog";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Header />
      <section
        className="works-hero"
        style={{
          width: 860,
          maxWidth: "100%",
          margin: "130px auto 0",
          padding: "24px 24px 80px",
          boxSizing: "border-box",
        }}
      >
        <Breadcrumb
          items={[
            { href: "/", label: "Home" },
            { href: "/blog", label: "Blog" },
          ]}
        />

        <div style={{ textAlign: "center" }}>
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
            {post.title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-instrument-sans), sans-serif",
              fontSize: 14,
              color: "#888888",
              marginBottom: 32,
            }}
          >
            {new Date(post.date).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {post.cover && (
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: 24,
              overflow: "hidden",
              marginBottom: 40,
              border: "1px solid rgba(0, 0, 0, 0.06)",
            }}
          >
            <Image
              src={post.cover}
              alt={post.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 860px) 100vw, 860px"
              unoptimized
            />
          </div>
        )}

        <div
          className="blog-content"
          style={{
            fontFamily: "var(--font-instrument-sans), sans-serif",
            fontSize: 16,
            lineHeight: 1.8,
            color: "#333",
          }}
        >
          <ReactMarkdown
            components={{
              h2: (props) => (
                <h2
                  style={{
                    fontFamily: "var(--font-instrument-serif), serif",
                    fontSize: 24,
                    fontWeight: 400,
                    color: "#0f0f1a",
                    marginTop: 40,
                    marginBottom: 16,
                  }}
                  {...props}
                />
              ),
              h3: (props) => (
                <h3
                  style={{
                    fontFamily: "var(--font-instrument-sans), sans-serif",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#0f0f1a",
                    marginTop: 32,
                    marginBottom: 12,
                  }}
                  {...props}
                />
              ),
              p: (props) => (
                <p
                  style={{ marginBottom: 16, color: "#555" }}
                  {...props}
                />
              ),
              ul: (props) => (
                <ul style={{ marginBottom: 16, paddingLeft: 24 }} {...props} />
              ),
              ol: (props) => (
                <ol style={{ marginBottom: 16, paddingLeft: 24 }} {...props} />
              ),
              li: (props) => (
                <li style={{ marginBottom: 4 }} {...props} />
              ),
              code: (props) => {
                const { className } = props;
                const isBlock = className;
                if (isBlock) {
                  return (
                    <pre
                      style={{
                        background: "#1e1e2e",
                        color: "#cdd6f4",
                        padding: "20px 24px",
                        borderRadius: 16,
                        overflow: "auto",
                        fontSize: 14,
                        lineHeight: 1.6,
                        marginBottom: 24,
                      }}
                    >
                      <code {...props} />
                    </pre>
                  );
                }
                return (
                  <code
                    style={{
                      background: "rgba(0,0,0,0.06)",
                      padding: "2px 6px",
                      borderRadius: 4,
                      fontSize: 14,
                    }}
                    {...props}
                  />
                );
              },
              strong: (props) => (
                <strong style={{ color: "#0f0f1a" }} {...props} />
              ),
              a: (props) => (
                <a
                  style={{ color: "#6366f1", textDecoration: "underline" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </section>
      <Footer />
    </>
  );
}
