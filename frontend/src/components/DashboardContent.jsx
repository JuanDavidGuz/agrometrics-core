import { useParams, Navigate } from "react-router-dom";
import { dashboardData } from "../data/dashboardConfig";
import { useEffect, useState } from "react";

export default function DashboardContent() {
  const { tabId } = useParams();
  const data = dashboardData[tabId];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, [tabId]);

  if (!data) {
    return <Navigate to="/precios-diarios" replace />;
  }

  return (
    <main
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "40px 24px 60px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      {/* ─── Info Row ─── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginBottom: "28px",
          alignItems: "stretch",
        }}
        className="info-row"
      >
        {/* Title Card */}
        <div
          style={{
            background: "#1a3d2b",
            borderRadius: "12px",
            padding: "32px 36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "linear-gradient(90deg, #E07B2A, #f0c48a)",
            }}
          />
          <div>
            <span style={{ fontSize: "36px" }}>{data.icon}</span>
            <h3
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: "bold",
                color: "#FFFFFF",
                lineHeight: "1.2",
                marginTop: "16px",
                fontFamily: "'Georgia', serif",
              }}
            >
              {data.title}
            </h3>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px #4ade80",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "sans-serif",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {data.stat}
            </span>
          </div>
        </div>

        {/* Description Card */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "32px 36px",
            border: "1px solid rgba(0,0,0,0.07)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#E07B2A",
              fontFamily: "sans-serif",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            Descripción del tablero
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#3a3a3a",
              lineHeight: "1.7",
              fontFamily: "'Georgia', serif",
            }}
          >
            {data.description}
          </p>

          {/* Decorative quote mark */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              right: "24px",
              fontSize: "80px",
              color: "rgba(0,0,0,0.04)",
              fontFamily: "Georgia, serif",
              lineHeight: "1",
              userSelect: "none",
            }}
          >
            "
          </div>
        </div>
      </div>

      {/* ─── Power BI Iframe ─── */}
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow:
            "0 4px 40px rgba(26,61,43,0.12), 0 1px 8px rgba(0,0,0,0.06)",
          border: "1px solid rgba(0,0,0,0.07)",
          background: "#fff",
          position: "relative",
        }}
      >
        {/* Iframe top bar */}
        <div
          style={{
            background: "#f9f6f0",
            borderBottom: "1px solid rgba(0,0,0,0.07)",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
              <div
                key={i}
                style={{
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  background: c,
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontSize: "11px",
              color: "#888",
              fontFamily: "sans-serif",
              letterSpacing: "0.05em",
            }}
          >
            Power BI · {data.name}
          </span>
        </div>

        <div style={{ height: "620px", background: "#f5f5f5" }}>
          {data.powerBiUrl && !data.powerBiUrl.includes("AQUI_VA_TU_ENLACE") ? (
            <iframe
              title={data.title}
              width="100%"
              height="100%"
              src={data.powerBiUrl}
              frameBorder="0"
              allowFullScreen={true}
              style={{ display: "block" }}
            />
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                background:
                  "repeating-linear-gradient(45deg, #f5f0e8, #f5f0e8 10px, #f0ebe0 10px, #f0ebe0 20px)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "14px",
                  background: "#1a3d2b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                }}
              >
                {data.icon}
              </div>
              <p
                style={{
                  color: "#8a7a68",
                  fontFamily: "sans-serif",
                  fontSize: "14px",
                  textAlign: "center",
                }}
              >
                El enlace de Power BI no está configurado aún.
                <br />
                <span style={{ fontSize: "12px", opacity: 0.7 }}>
                  Reemplaza la URL en <code>dashboardConfig.js</code>
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .info-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
