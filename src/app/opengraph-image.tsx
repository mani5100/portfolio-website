import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abdul Rehman | AI Engineer & Published Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* Background glow blobs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Monospace logo */}
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: "22px",
              fontWeight: 700,
              color: "#818cf8",
              marginBottom: "32px",
              letterSpacing: "-0.5px",
              border: "1px solid rgba(99,102,241,0.3)",
              padding: "6px 18px",
              borderRadius: "8px",
              background: "rgba(99,102,241,0.08)",
            }}
          >
            AR.
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "74px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              color: "#f1f5f9",
              marginBottom: "16px",
            }}
          >
            Abdul Rehman
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#818cf8",
              marginBottom: "44px",
              letterSpacing: "0.2px",
            }}
          >
            AI Engineer &amp; Published Researcher
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {[
              { value: "6", label: "Publications" },
              { value: "3.90", label: "GPA · 2nd in class" },
              { value: "IEEE · Wiley · Springer", label: "Publishers" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "14px 24px",
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.22)",
                  borderRadius: "12px",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: i === 2 ? "16px" : "26px",
                    fontWeight: 700,
                    color: "#a5b4fc",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#94a3b8",
                    fontWeight: 400,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              marginTop: "40px",
              fontSize: "16px",
              color: "rgba(148,163,184,0.6)",
              fontFamily: "ui-monospace, monospace",
              letterSpacing: "0.5px",
            }}
          >
            abdulrehmanshoukat.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
