import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #071022 0%, #0b1230 55%, #071022 100%)",
          color: "#ffffff",
          padding: "64px",
          position: "relative",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -180,
            top: -180,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(20, 184, 166, 0.18)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -160,
            bottom: -160,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(45, 212, 191, 0.12)",
            filter: "blur(40px)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 840 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#2dd4bf",
                boxShadow: "0 0 0 8px rgba(45,212,191,0.12)",
              }}
            />
            <div style={{ fontSize: 20, letterSpacing: 4, textTransform: "uppercase", color: "#5eead4" }}>
              CORBO MED
            </div>
          </div>

          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05 }}>
            Perícias Médicas
            <br />
            com rigor técnico
          </div>

          <div style={{ fontSize: 26, lineHeight: 1.35, color: "rgba(226,232,240,0.9)" }}>
            Laudos e pareceres com linguagem clara e segurança profissional.
          </div>

          <div style={{ marginTop: 10, fontSize: 22, color: "rgba(148,163,184,1)" }}>
            Dr. Lucas Gabriel Corbo — Perito Médico
          </div>
        </div>
      </div>
    ),
    size
  );
}

