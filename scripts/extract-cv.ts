/* eslint-disable no-console */
import fs from "node:fs/promises";
import path from "node:path";
import pdf from "pdf-parse";

async function extract(filePath: string) {
  const buffer = await fs.readFile(filePath);
  const data = await pdf(buffer);
  return data.text;
}

async function main() {
  const root = path.resolve(__dirname, "..", "..");
  const cv1 = path.join(root, "FEG_Analist_2025.pdf");
  const cv2 = path.join(root, "Faik Erkan Gürşen_2025.pdf");

  const [t1, t2] = await Promise.all([extract(cv1), extract(cv2)]);

  const outDir = path.resolve(__dirname, "..", "cv-text");
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(path.join(outDir, "FEG_Analist_2025.txt"), t1, "utf8");
  await fs.writeFile(path.join(outDir, "Faik_Erkan_Gursen_2025.txt"), t2, "utf8");
  console.log("CV metinleri çıkarıldı:", outDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


