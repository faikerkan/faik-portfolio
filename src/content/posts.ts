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
    title: "Gereksinim Toplamadan Kabul Kriterlerine",
    tag: "İş Analizi",
    date: "2025-01-15",
    excerpt:
      "Atölye çalışmaları ve mülakatlarla etkili gereksinim toplama; INVEST ve SMART ile ölçülebilir kabul kriterleri yazma yaklaşımı.",
    content:
      "Gereksinim toplama, doğru soruları doğru anda sorma sanatıyla başlar. Atölye ve birebir görüşmelerde, paydaş beklentilerini netleştirirken\n'neden' sorusunu merkeze koyarım. Elde edilen ham veriyi kullanıcı hikayelerine (As a / I want / So that) dönüştürür, INVEST ile incelerim. Kabul kriterleri için Given/When/Then formatını kullanmak; test edilebilir ve anlaşılır tanımlar üretmemi sağlar. Bu pratik, UAT aşamasında belirsizliği azaltır ve teslimat kalitesini yükseltir.",
  },
  {
    slug: "bpmn-ile-surec-tasarimi",
    title: "BPMN ile Süreç Tasarımında Pratik İpuçları",
    tag: "Süreç Yönetimi",
    date: "2025-01-22",
    excerpt:
      "As-Is ve To-Be modellemesinde sık yapılan hatalar ve operasyonel verimliliği artıran desenler.",
    content:
      "BPMN, tüm paydaşların aynı dili konuşmasını sağlar. As-Is akışında gerçeği yansıtmak kritik önemdedir; varsayımlardan kaçınırım. To-Be tasarımında darboğazları kaldırmak, bekleme ve geri dönüş döngülerini azaltmak için paralel akışlardan ve olay-temelli geçitlerden faydalanırım. Ölçülebilir KPI seti (SLA, ilk temas çözümü vb.) olmadan tasarım tamamlanmış sayılmaz.",
  },
  {
    slug: "oyunlastirma-ile-kpi-arttirma",
    title: "Çağrı Merkezi KPI’larını Oyunlaştırma ile Yükseltmek",
    tag: "Liderlik",
    date: "2025-02-01",
    excerpt:
      "Kingdoms of Arçelik projesinden öğrenimler: motivasyon, metrikler ve sürdürülebilir gelişim.",
    content:
      "Oyunlaştırma, doğru kurgulandığında davranış değişimini kalıcı hale getirir. KPI’ları (AHT, satış, müşteri memnuniyeti) avatar yetenekleri ve seviye sistemiyle ilişkilendirmek; temsilcilerin içsel motivasyonunu tetikler. Önemli olan rekabeti sağlıklı tutmak, bireysel gelişim yol haritalarıyla desteklemek ve geri bildirim kültürünü şeffaf kılmaktır.",
  },
];


