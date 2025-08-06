# Docker'ı macOS'ta Harici Diske Kurma Kılavuzu

## Adım 1: Docker Desktop'u İndirme

1. [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/) sayfasından Docker'ı indirin
2. DMG dosyasını açın ve Docker.app'i Applications klasörüne sürükleyin

## Adım 2: Docker'ı İlk Kez Başlatma

1. Docker Desktop'u ilk kez başlatın
2. İlk kurulum sihirbazını tamamlayın
3. Docker tamamen başladıktan sonra kapatın

## Adım 3: Docker Verilerini Harici Diske Taşıma

### Terminal Komutları:

```bash
# 1. Docker'ın kapalı olduğundan emin olun
osascript -e 'quit app "Docker"'

# 2. Mevcut Docker verisini yedekleyin (isteğe bağlı)
cp -r ~/Library/Containers/com.docker.docker ~/Desktop/docker-backup

# 3. Harici diskte Docker için klasör oluşturun
mkdir -p /Volumes/HDD/Docker/Data

# 4. Mevcut Docker verisini harici diske taşıyın
mv ~/Library/Containers/com.docker.docker /Volumes/HDD/Docker/Data/

# 5. Sembolik link oluşturun
ln -s /Volumes/HDD/Docker/Data/com.docker.docker ~/Library/Containers/com.docker.docker
```

## Adım 4: Docker Desktop Ayarlarını Değiştirme

1. Docker Desktop'u tekrar başlatın
2. Docker Desktop → Preferences → Resources → Advanced gidin
3. Disk image location ayarını değiştirin:
   - "Disk image location" yanındaki "Browse" butonuna tıklayın
   - `/Volumes/HDD/Docker/` klasörünü seçin
   - "Apply & Restart" butonuna tıklayın

## Adım 5: Docker'ın Diğer Verilerini Taşıma

### Docker Images ve Containers için:

```bash
# Docker'ı durdurun
docker system prune -a --volumes  # DİKKAT: Bu tüm verileri siler!

# Yeni disk konumunu ayarlayın
mkdir -p /Volumes/HDD/Docker/docker-data

# Docker daemon.json dosyasını düzenleyin
cat > ~/.docker/daemon.json << EOF
{
  "data-root": "/Volumes/HDD/Docker/docker-data",
  "storage-driver": "overlay2"
}
EOF
```

## Adım 6: Otomatik Mount Script'i (İsteğe Bağlı)

Harici disk her bağlandığında Docker'ın otomatik çalışması için:

```bash
# LaunchAgent oluşturun
cat > ~/Library/LaunchAgents/com.docker.automount.plist << EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.docker.automount</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>-c</string>
        <string>if [ -d "/Volumes/HDD" ]; then open -a Docker; fi</string>
    </array>
    <key>StartInterval</key>
    <integer>30</integer>
</dict>
</plist>
EOF

# LaunchAgent'ı etkinleştirin
launchctl load ~/Library/LaunchAgents/com.docker.automount.plist
```

## Önemli Notlar:

1. **Performans**: Harici disk USB 3.0 veya daha hızlı olmalı
2. **Güvenilirlik**: Disk her zaman aynı isimle mount edilmeli (HDD)
3. **Yedekleme**: Önemli container'larınızı düzenli yedekleyin
4. **Disk Formatı**: macOS Extended (Journaled) veya APFS önerilir

## Sorun Giderme:

### Docker başlamıyorsa:
```bash
# Sembolik linki kontrol edin
ls -la ~/Library/Containers/ | grep docker

# Gerekirse yeniden oluşturun
rm ~/Library/Containers/com.docker.docker
ln -s /Volumes/HDD/Docker/Data/com.docker.docker ~/Library/Containers/com.docker.docker
```

### Disk space hatası alıyorsanız:
```bash
# Docker'ın kullandığı alanı kontrol edin
docker system df

# Gereksiz verileri temizleyin
docker system prune -a --volumes
```

## Alternatif Yöntem: Docker Machine

Eğer Docker Desktop yerine Docker Machine kullanmak isterseniz:

```bash
# Docker Machine kurulumu
brew install docker-machine

# VirtualBox ile VM oluşturma (disk konumu belirterek)
docker-machine create --driver virtualbox \
  --virtualbox-disk-size "50000" \
  --virtualbox-boot2docker-url "https://github.com/boot2docker/boot2docker/releases/download/v19.03.12/boot2docker.iso" \
  --virtualbox-hostonly-cidr "192.168.99.1/24" \
  --virtualbox-memory "4096" \
  --virtualbox-cpu-count "2" \
  --virtualbox-disk-path "/Volumes/HDD/Docker/VMs/" \
  default

# Docker environment'ı ayarlama
eval $(docker-machine env default)
```

Bu kılavuzu takip ederek Docker'ı harici diskinizde çalıştırabilirsiniz!