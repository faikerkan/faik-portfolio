export type ProjectMetric = { name: string; value: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  impact?: string;
  coverVariant?: "a" | "b" | "c";
  metrics?: ProjectMetric[];
};

export const projects: Project[] = [
  {
    slug: "187-acil-ml",
    title: "187 Acil Çağrı Makine Öğrenmesi Projesi",
    description:
      "187 Acil ihbarlarının metne dönüştürülmesi ve ML/NLP ile aciliyet sınıflandırması. Müdahale süresi kısaldı, yönlendirme doğruluğu yükseldi.",
    tools: ["NLP", "ML", "Python", "SQL"],
    coverVariant: "a",
    metrics: [
      { name: "Operasyonel Verimlilik (6 ay)", value: "+%20" },
      { name: "Toplam İyileşme (1 yıl)", value: "+%60" },
    ],
  },
  {
    slug: "carbon-crm",
    title: "Carbon CRM",
    description:
      "BPMN ile süreç haritalama, temsilci akışları ve doğrulama adımlarıyla çağrı çözümünde hız ve doğruluk.",
    tools: ["BPMN", "Jira", "Confluence"],
    coverVariant: "b",
    metrics: [
      { name: "Çağrı Çözüm Süresi", value: "-%35" },
      { name: "Şikâyet Yönlendirme Doğruluğu", value: "+%40" },
    ],
  },
  {
    slug: "bilgi-bankasi",
    title: "Bilgi Bankası",
    description:
      "Yapay zekâ destekli arama ve mevzuat ile sohbet. İşe adaptasyon hızlanırken bilgi birliği sağlandı.",
    tools: ["Search", "Chatbot", "Knowledge Base"],
    coverVariant: "c",
    metrics: [
      { name: "Bilgiye Erişim Süresi", value: "-%50" },
      { name: "Personel Yetkinliği", value: "Artış" },
    ],
  },
  {
    slug: "kingdoms-of-arcelik",
    title: "Kingdoms of Arçelik (Oyunlaştırma)",
    description:
      "KPI odaklı oyunlaştırma kurgusu ile temsilci motivasyonunu ve hedef tutturmayı artıran program.",
    tools: ["Gamification", "KPI"],
    coverVariant: "b",
    metrics: [
      { name: "KPI Hedef Tutturma", value: "+%25" },
      { name: "Temsilci Motivasyonu", value: "Artış" },
    ],
  },
];


