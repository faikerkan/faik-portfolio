import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg,#000,#111)",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>Faik Erkan</div>
        <div style={{ fontSize: 28, marginTop: 8, opacity: 0.8 }}>
          İş Analisti • Takım Lideri • Motosiklet Kulübü Kurucusu
        </div>
      </div>
    ),
    size
  );
}


