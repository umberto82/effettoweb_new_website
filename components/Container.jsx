"use client";

import { forwardRef } from "react";

const Container = forwardRef(function Container(
  { children, style, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        maxWidth: "var(--content-width, 860px)",
        margin: "0 auto",
        padding: "0 24px",
        width: "100%",
        boxSizing: "border-box",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

export default Container;
