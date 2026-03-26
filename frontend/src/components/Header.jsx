import { NavLink } from "react-router-dom";
import { dashboardData } from "../data/dashboardConfig";

export default function Header() {
  return (
    <header className="w-full">
      {/* ─── Hero Banner ─── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1a3d2b 0%, #2d6a4f 60%, #3a8a5f 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative geometric shapes */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-40px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "30%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "0",
            width: "6px",
            height: "100%",
            background: "#E07B2A",
          }}
        />

        <div
          className="max-w-7xl mx-auto px-8 md:px-12 py-10 md:py-14"
          style={{ position: "relative" }}
        >
          {/* Label chip */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(224,123,42,0.2)",
              border: "1px solid rgba(224,123,42,0.5)",
              borderRadius: "20px",
              padding: "4px 14px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#E07B2A",
                display: "inline-block",
              }}
            />
            <span
              style={{
                color: "#f0c48a",
                fontSize: "11px",
                fontFamily: "'Georgia', serif",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Fedepapa · Sistema de Información
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: "bold",
              color: "#FFFFFF",
              lineHeight: "1.15",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.02em",
            }}
          >
            Tableros de información
          </h1>
          <h2
            style={{
              fontSize: "clamp(13px, 2vw, 17px)",
              color: "rgba(255,255,255,0.65)",
              marginTop: "8px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
              fontWeight: "300",
            }}
          >
            Del sector papero en Colombia
          </h2>
        </div>
      </div>

      {/* ─── Navigation Cards ─── */}
      <div style={{ background: "#1a3d2b", borderBottom: "3px solid #E07B2A" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
            }}
            className="nav-grid"
          >
            {Object.entries(dashboardData).map(([path, data], index) => (
              <NavLink
                key={path}
                to={`/${path}`}
                style={({ isActive }) => ({
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px 20px",
                  borderRight:
                    index < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  background: isActive
                    ? "rgba(224,123,42,0.15)"
                    : "transparent",
                  borderBottom: isActive
                    ? "3px solid #E07B2A"
                    : "3px solid transparent",
                  marginBottom: "-3px",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                  position: "relative",
                  cursor: "pointer",
                })}
                className="nav-tab"
              >
                {({ isActive }) => (
                  <>
                    <span style={{ fontSize: "20px", marginBottom: "6px" }}>
                      {data.icon}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: isActive ? "700" : "500",
                        color: isActive ? "#f0c48a" : "rgba(255,255,255,0.75)",
                        fontFamily: "sans-serif",
                        lineHeight: "1.3",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {data.name}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        color: isActive
                          ? "rgba(240,196,138,0.7)"
                          : "rgba(255,255,255,0.35)",
                        marginTop: "3px",
                        fontFamily: "sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {data.stat}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .nav-tab:hover {
          background: rgba(255,255,255,0.06) !important;
        }
        @media (max-width: 640px) {
          .nav-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </header>
  );
}
