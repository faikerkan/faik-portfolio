import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımda — Faik Erkan",
  description:
    "Çağrı Merkezi Yöneticisi. 15+ yıllık deneyim: ekip liderliği, CRM, müşteri deneyimi, eğitim & kalite, süreç iyileştirme ve veri odaklı yönetim.",
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
            Çağrı Merkezi yöneticisi olarak 15+ yıllık deneyimle; ekip liderliği, CRM
            sistemleri ve müşteri deneyimi optimizasyonu odağında çalışıyorum. Veri
            analitiği yüksek lisans derecemle, veriye dayalı stratejiler üretir;
            operasyonel verimlilik, erişilebilirlik ve memnuniyet metriklerini
            sürdürülebilir şekilde iyileştiririm.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Uzmanlık Alanları</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-300">
            <li>Ekip Liderliği ve Performans Yönetimi</li>
            <li>Müşteri Deneyimi (CX) ve Erişilebilirlik</li>
            <li>CRM Tasarımı ve Çağrı Akışı İyileştirme</li>
            <li>Eğitim ve Kalite Yönetimi (KPI, denetim)</li>
            <li>Süreç İyileştirme ve Operasyonel Verimlilik</li>
            <li>Veri Analizi ve Raporlama</li>
            <li>Yapay Zeka Destekli Çağrı/Metin Çözümleri</li>
            <li>Paydaş Yönetimi ve Kurumsal İletişim</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Öne Çıkan Sonuçlar</h2>
          <ul className="text-zinc-300 space-y-2">
            <li>
              187 Acil İhbar Hattı yeniden yapılandırması ile 6 ayda ~%20, 1 yıl sonunda
              toplam ~%60 operasyonel verimlilik artışı
            </li>
            <li>
              CRM (Carbon CRM) dönüşümü ile şikâyet çözüm süresi ve raporlama
              kalitesinde belirgin iyileşme
            </li>
            <li>
              Bilgi Bankası ile işe adaptasyon süresinde ~%40 kısalma, operasyonel hatada
              ~%25 azalma
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-medium">Deneyim</h2>
          <ul className="text-zinc-300 space-y-2">
            <li>İzmir Doğalgaz Dağıtım A.Ş. — Çağrı Merkezi Şefi (2020–2024)</li>
            <li>Su Bilgi Teknolojileri — İş Analizi Takım Lideri (2024–2025)</li>
            <li>Alonet BT (Arçelik) — Eğitim ve Kalite Yöneticisi (2017–2020)</li>
            <li>Turkcell Global Bilgi — OB/IB Müşteri Temsilcisi & Eğitim Uzmanı (2012–2016)</li>
          </ul>
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
          <h2 className="text-xl font-medium">Sertifikalar & Gönüllü Çalışmalar</h2>
          <ul className="text-zinc-300 space-y-2">
            <li>Miuul Data Scientist Bootcamp — Python, ML, CRM Analytics (2023)</li>
            <li>Uluslararası İş Analizi Metodolojisi ve Teknikleri — BTK Akademi (2023)</li>
            <li>Usta Öğreticilik Belgesi — MEB (2022)</li>
            <li>Google Digital Garage — Dijital Pazarlamanın Temelleri (2021)</li>
            <li>Öğretim Görevlisi — İzmir Ekonomi Üniversitesi (2019–2020)</li>
            <li>Mentor — Ege Üniversitesi İşletme Topluluğu (2023– )</li>
          </ul>
        </section>
      </div>
    </section>
  );
}


