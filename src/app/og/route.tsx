import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 } as const;
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          backgroundColor: "#000000",
          color: "#ffffff",
          fontFamily: "Inter, Arial, Helvetica, sans-serif",
        }}
      >
        {/* Bauhaus esintili geometrik şekiller */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -80, left: -80, width: 280, height: 280, borderRadius: 140, background: "#111" }} />
          <div style={{ position: "absolute", bottom: -60, left: 40, width: 180, height: 180, background: "#0f0f0f" }} />
          <div style={{ position: "absolute", top: 80, right: 80, width: 120, height: 120, background: "#111" }} />
          <div style={{ position: "absolute", bottom: 40, right: 140, width: 260, height: 12, background: "#1a1a1a" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: -1,
              color: "#F4D03F",
              textShadow: "0 2px 0 #000",
            }}
          >
            Faik Erkan Gürşen
          </div>
          <div
            style={{
              fontSize: 32,
              opacity: 0.9,
              maxWidth: 1000,
            }}
          >
            Çağrı Merkezi & CX Lideri • Veri ve AI Uzmanı
          </div>
        </div>
      </div>
    ),
    size
  );
}


