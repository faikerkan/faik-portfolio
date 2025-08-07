export type Post = {
  slug: string;
  title: string;
  tag: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "gereksinimden-kabul-kriterlerine",
    title: "Çağrı Merkezinde Gereksinimden Kabul Kriterlerine",
    tag: "Çağrı Merkezi",
    date: "2025-01-15",
    excerpt:
      "Atölye ve saha gözlemiyle gereksinimleri toplarken, kabul kriterlerini FCR, AHT ve CSAT gibi KPI’lara bağlamak.",
    content:
      "Gereksinim toplama, çağrı merkezi özelinde saha gözlemi ve temsilci görüşmeleriyle güçlenir. ‘Neden’ sorusu, gerçek ihtiyacı ortaya çıkarır. Kabul kriterlerini Given/When/Then formatında yazarken FCR, AHT ve CSAT gibi KPI’larla ilişkilendirmek; ölçülebilirlik sağlar ve UAT’te belirsizliği azaltır.",
  },
  {
    slug: "bpmn-ile-surec-tasarimi",
    title: "BPMN ile Çağrı Akışlarını Tasarlamak",
    tag: "Çağrı Merkezi",
    date: "2025-01-22",
    excerpt:
      "As-Is çağrı akışlarını gerçek verilerle çıkarmak ve To-Be’de darboğazları kaldıran desenler.",
    content:
      "BPMN, temsilci deneyimini görünür kılar. As-Is akışında varsayım yerine veri kullanmak gerekir. To-Be aşamasında bekleme ve geri dönüş döngülerini azaltmak için doğru geçit tiplerini kullanmak; AHT ve FCR’a doğrudan etki eder. Ölçülebilir KPI seti olmadan tasarım tamamlanmış sayılmaz.",
  },
  {
    slug: "oyunlastirma-ile-kpi-arttirma",
    title: "Oyunlaştırma ile KPI’ları Yükseltmek",
    tag: "Eğitim & Kalite",
    date: "2025-02-01",
    excerpt:
      "Kingdoms of Arçelik deneyimi: motivasyon kurgusu, doğru metrikler ve sürdürülebilir gelişim.",
    content:
      "Oyunlaştırma, doğru metriklerle desteklendiğinde davranış değişimini kalıcı kılar. AHT, satış ve CSAT gibi göstergeleri avatar/seviye sistemiyle ilişkilendirmek; içsel motivasyonu artırır. Rekabet sağlıklı tutulmalı; bireysel gelişim planları ve şeffaf geri bildirim kültürüyle desteklenmelidir.",
  },
];


