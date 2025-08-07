import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda — Faik Erkan",
  description:
    "İş analizi, süreç optimizasyonu ve dijital dönüşüm alanlarında 15+ yıllık deneyim. Agile/Scrum, BPMN, paydaş yönetimi, SQL ve API testlerinde uzmanlık.",
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Hakkımda
          </h1>
          <p className="mt-4 text-zinc-300">
            İş analizi, süreç optimizasyonu ve dijital dönüşüm alanlarında 15 yılı
            aşkın deneyime sahip, sonuç odaklı bir İş Analistiyim. Agile/Scrum
            metodolojileriyle yürüttüğüm projelerde; gereksinim analizi,
            süreç haritalama (BPMN) ve paydaş yönetimi konularında uzmanlaştım.
            Operasyonel verimliliği bir yıl içinde %60’a varan oranlarda artıran
            somut çıktılar ürettim.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Uzmanlık Alanları</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300">
            <li>Gereksinim Toplama ve Analizi (Atölye, Mülakat)</li>
            <li>Fonksiyonel/Teknik Dokümantasyon (BRD, FRS)</li>
            <li>Kullanıcı Hikâyeleri ve Kabul Kriterleri</li>
            <li>Use Case Modelleme, GAP Analizi</li>
            <li>Süreç Haritalama (BPMN), İyileştirme ve Otomasyon</li>
            <li>UAT ve Regresyon Test Yönetimi</li>
            <li>Oracle SQL, PostgreSQL, API Testleri (SOAP/REST)</li>
            <li>Jira, Confluence, Power BI, Tableau</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Sektör Deneyimi</h2>
          <p className="text-zinc-300">
            Enerji (Doğal Gaz), Telekomünikasyon ve Teknoloji sektörlerinde CRM
            tasarımı, müşteri deneyimi optimizasyonu ve çağrı merkezi süreçleri
            üzerinde çalıştım.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Eğitim</h2>
          <ul className="text-zinc-300 space-y-2">
            <li>
              Yüksek Lisans — İş Zekâsı ve Veri Analitiği, Bakırçay Üniversitesi (2024)
              — Tez: Doğal Gaz 187 Acil İhbar Çağrılarının ML ile Değerlendirilmesi
            </li>
            <li>Lisans — İktisat, Anadolu Üniversitesi (2015)</li>
            <li>Ön Lisans — Halkla İlişkiler ve Tanıtım, Anadolu Üniversitesi (2010)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Sertifikalar</h2>
          <ul className="text-zinc-300 space-y-2">
            <li>Uluslararası İş Analizi Metodolojisi ve Teknikleri — BTK Akademi (2023)</li>
            <li>Miuul Data Scientist Bootcamp — Python, ML, CRM Analytics (2023)</li>
            <li>Google Digital Garage — Dijital Pazarlamanın Temelleri (2021)</li>
            <li>Usta Öğreticilik Belgesi — MEB (2022)</li>
          </ul>
        </section>
      </div>
    </section>
  );
}


