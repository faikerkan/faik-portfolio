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
    slug: "akilli-187",
    title: "Akıllı 187 — Acil Çağrı Analizi",
    description:
      "187 Acil ihbarlarının metne dönüştürülmesi ve NLP ile aciliyet sınıflandırması. Müdahale süresi kısaldı, yönlendirme doğruluğu yükseldi.",
    tools: ["NLP", "ML", "Python", "SQL"],
    impact:
      "Kritik çağrılara müdahale süresinde iyileşme; kalite ölçümlemesi otomatik hale geldi.",
    coverVariant: "a",
    metrics: [
      { name: "Müdahale Süresi", value: "Azalış (hedef: -%20)" },
      { name: "Yönlendirme Doğruluğu", value: "Artış (hedef: +%15)" },
    ],
  },
  {
    slug: "carbon-crm",
    title: "Carbon CRM — Müşteri Hizmetleri Dönüşümü",
    description:
      "BPMN ile süreç haritalama, temsilci akışları ve doğrulama adımlarıyla ilk temasta çözüm oranında artış.",
    tools: ["BPMN", "Jira", "Confluence"],
    impact:
      "%30 verimlilik artışı; doğru bilgi ve akışla CSAT ve FCR gelişimi.",
    coverVariant: "b",
    metrics: [
      { name: "Operasyonel Verimlilik", value: "+%30" },
      { name: "İlk Temasta Çözüm (FCR)", value: "Artış" },
    ],
  },
  {
    slug: "kurumsal-bilgi-bankasi",
    title: "Kurumsal Bilgi Bankası",
    description:
      "Yapay zeka destekli arama ve mevzuat ile sohbet. İşe adaptasyon hızlandı; bilgi birliği sağlandı.",
    tools: ["Search", "Chatbot", "Knowledge Base"],
    coverVariant: "c",
    metrics: [
      { name: "İşe Adaptasyon Süresi", value: "-%40" },
      { name: "Operasyonel Hata Oranı", value: "-%25" },
    ],
  },
];


