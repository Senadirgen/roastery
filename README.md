# ROASTERY. – Özel Kahve Koleksiyonu

ROASTERY, dünyanın farklı bölgelerinden özenle seçilmiş özel kahveleri tanıtmak amacıyla geliştirilmiş modern bir web projesidir. Minimalist tasarımı ve kullanıcı dostu arayüzüyle kahve çeşitlerini keşfetme ve inceleme imkânı sunar.

## Proje Özellikleri

- **Kahve Koleksiyonu:** Farklı ülkelerden ve bölgelerden 6 özel kahve çeşidini görüntüleme.
- **Canlı Arama:** Kahveleri isimlerine, yetiştirildikleri bölgelere veya aroma notalarına göre arama.
- **Dinamik Detay Sayfaları:** Her kahve için kendine ait detay sayfası.
- **Kahve Bilgileri:** Kahvelerin menşei, kavrum seviyesi, aroma notaları, fiyatı ve açıklamalarını görüntüleme.
- **Responsive Tasarım:** Bilgisayar, tablet ve mobil cihazlarla uyumlu arayüz.
- **Sepet Sistemi:** Kahveleri farklı gramaj seçenekleriyle sepete ekleme.
- **Yerel Veri Yönetimi:** Kahve bilgilerini harici bir veritabanı kullanmadan JSON dosyasında saklama.

## Kullanılan Teknolojiler

- Next.js (App Router)
- React
- JavaScript
- Tailwind CSS
- JSON
- Local Storage

## Proje Klasör Yapısı

```text
roastery/
├── app/
│   ├── coffees/
│   │   └── [id]/
│   │       └── page.js
│   ├── cart/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── CartLink.js
│   ├── CoffeeCard.js
│   ├── CoffeeDetailClient.js
│   ├── CoffeeSearch.js
│   └── EmptyState.js
├── data/
│   └── coffees.json
├── public/
├── package.json
└── README.md
```

## Kurulum ve Çalıştırma

### Gereksinimler

- Node.js
- npm

### 1. Projeyi bilgisayarınıza indirin

```bash
git clone GITHUB_REPOSITORY_LINK
```

### 2. Proje klasörüne girin

```bash
cd roastery
```

### 3. Gerekli paketleri yükleyin

```bash
npm install
```

### 4. Projeyi çalıştırın

```bash
npm run dev
```

Tarayıcınızdan aşağıdaki adrese giderek projeyi görüntüleyebilirsiniz:

http://localhost:3000

## Veri Yapısı

Kahve bilgileri proje içerisindeki `data/coffees.json` dosyasında tutulmaktadır.

Her kahve kaydı aşağıdaki alanları içerir:

- `id`: Kahveye ait benzersiz kimlik.
- `name`: Kahvenin adı.
- `origin`: Kahvenin yetiştirildiği bölge.
- `roastLevel`: Kavrum seviyesi.
- `tastingNotes`: Aroma notaları.
- `price`: Kahvenin fiyatı.
- `imageUrl`: Kahve görselinin bağlantısı.
- `description`: Kahvenin açıklaması.

## Üretim Sürümü

Projenin üretim sürümünü oluşturmak için:

```bash
npm run build
```

Üretim sürümünü başlatmak için:

```bash
npm run start
```

## Proje Hakkında

ROASTERY, frontend geliştirme çalışması kapsamında hazırlanmıştır.