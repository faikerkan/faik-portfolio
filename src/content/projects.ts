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
      "Acil ihbar ses kayıtlarının metne dönüştürülmesi ve NLP ile 'acil' / 'acil değil' sınıflandırması. Müdahale süresi kısaldı, yönlendirme doğruluğu arttı.",
    tools: ["NLP", "ML", "Python", "SQL"],
    impact:
      "Kritik çağrılara müdahale süresinde iyileşme; kalite ölçümlemesi otomatik hale geldi.",
    coverVariant: "a",
    metrics: [
      { name: "Müdahale Süresi", value: "Düşüş" },
      { name: "Yönlendirme Doğruluğu", value: "Artış" },
    ],
  },
  {
    slug: "carbon-crm",
    title: "Carbon CRM — Müşteri Hizmetleri Dönüşümü",
    description:
      "BPMN ile süreç haritalama, kullanıcı personaları ve yeni CRM akışlarının tasarımı. Şikayet çözüm süresi ve raporlama kalitesi iyileşti.",
    tools: ["BPMN", "Jira", "Confluence"],
    impact:
      "%30 verimlilik artışı; raporlamada doğruluk ve görünürlük yükseldi.",
    coverVariant: "b",
    metrics: [
      { name: "Operasyonel Verimlilik", value: "+%30" },
      { name: "Şikayet Çözüm Süresi", value: "Düşüş" },
    ],
  },
  {
    slug: "kurumsal-bilgi-bankasi",
    title: "Kurumsal Bilgi Bankası",
    description:
      "Yapay zeka destekli arama ve mevzuat ile sohbet özelliği olan merkezi bilgi yönetim sistemi. İşe adaptasyon %40 hızlandı; hata oranları %25 azaldı.",
    tools: ["Search", "Chatbot", "Knowledge Base"],
    coverVariant: "c",
    metrics: [
      { name: "İşe Adaptasyon Süresi", value: "-%40" },
      { name: "Operasyonel Hata Oranı", value: "-%25" },
    ],
  },
];


