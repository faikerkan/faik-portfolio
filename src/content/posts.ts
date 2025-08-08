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

export type ExternalPost = {
  title: string;
  tag: string;
  url: string;
};

export const externalPosts: ExternalPost[] = [
  {
    title: "Çağrı Merkezi Datası ile RFM’i Ters Yüz Etmek",
    tag: "Çağrı Merkezi",
    url: "https://medium.com/@faikerkan/%C3%A7a%C4%9Fr%C4%B1-merkezi-datas%C4%B1-ile-rfmi-ters-y%C3%BCz-etmek-8cf908397ec8",
  },
  {
    title: "1-837-837: Bir Leblebinin Algoritması",
    tag: "Analiz",
    url: "https://medium.com/@faikerkan/1-837-837-bir-leblebinin-algoritmas%C4%B1-0091d247338e",
  },
  {
    title: "Çağrı Merkezi Sektöründe Odadaki Fil",
    tag: "Çağrı Merkezi",
    url: "https://medium.com/@faikerkan/%C3%A7a%C4%9Fr%C4%B1-merkezi-sekt%C3%B6r%C3%BCnde-odadaki-fil-b4ee3a5c69cd",
  },
  {
    title: "Beklenmedik İttifak: Veri Bilimi ve Çağrı Merkezi",
    tag: "Veri Bilimi",
    url: "https://medium.com/@faikerkan/beklenmedik-i%CC%87ttifak-veri-bilimi-ve-%C3%A7a%C4%9Fr%C4%B1-merkezi-7a1a81ac71fc",
  },
  {
    title: "Çağrı Merkezi Kaymağı: Outbound",
    tag: "Çağrı Merkezi",
    url: "https://medium.com/@faikerkan/%C3%A7a%C4%9Fr%C4%B1-merkezi-kayma%C4%9F%C4%B1-outbound-2d9b845c7a54",
  },
  {
    title: "Çağrı Merkezi: Eğitimcinin Eğitimi",
    tag: "Eğitim & Kalite",
    url: "https://medium.com/@faikerkan/%C3%A7a%C4%9Fr%C4%B1-merkezi-e%C4%9Fitimcinin-e%C4%9Fitim-7794942e7e5",
  },
  {
    title: "Çağrı Merkezi Bel Kemiği: Inbound",
    tag: "Çağrı Merkezi",
    url: "https://medium.com/@faikerkan/%C3%A7a%C4%9Fr%C4%B1-merkezi-bel-kemi%C4%9Fi-inbound-935962ccae93",
  },
  {
    title: "Çağrı Merkezi Nedir, Ne Değildir?",
    tag: "Çağrı Merkezi",
    url: "https://medium.com/@faikerkan/%C3%A7a%C4%9Fr%C4%B1-merkezi-nedir-ne-de%C4%9Fildir-97c6e92c1b1f",
  },
];


