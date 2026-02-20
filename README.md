# 💰 Kayy Finance - Personal Finance Tracker

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwind-css)

**Kayy Finance** adalah aplikasi web pelacak keuangan pribadi yang modern dan minimalis. Aplikasi ini membantu kamu mengelola pemasukan, pengeluaran, target tabungan, dan analisis keuangan dalam satu tempat.

---

## ✨ Fitur Utama

### 🏠 Dashboard Utama
- **Total Balance** - Lihat saldo wallet secara real-time
- **Budget Tracker** - Monitor pengeluaran bulanan dengan progress bar
- **Riwayat Transaksi** - Catat semua pemasukan dan pengeluaran

### 💸 Manajemen Transaksi
- Tambah transaksi **Income** (Pemasukan)
- Tambah transaksi **Expense** (Pengeluaran)
- Kategori otomatis untuk pengeluaran (Makanan, Transport, Belanja, dll)
- Catatan/deskripsi untuk setiap transaksi
- Hapus transaksi yang tidak diperlukan

### 🎯 Target Tabungan (Wishlist)
- Buat target keuangan/impiannmu
- Progress tracking untuk setiap target
- Update dan hapus target

### 📊 Analisis Keuangan
- Visualisasi pengeluaran per kategori
- Statistik income vs expense
- Insight untuk pengelolaan keuangan lebih baik

### 👤 Profil Pengguna
- Informasi akun
- Pengaturan aplikasi

---

## 🛠️ Tech Stack

| Teknologi | Deskripsi |
|-----------|-----------|
| **Next.js 14** | React Framework untuk performa optimal |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Styling modern dan responsif |
| **Framer Motion** | Animasi smooth untuk UX lebih baik |
| **Lucide React** | Icon library yang ringan |
| **SQLite/PostgreSQL** | Database untuk penyimpanan data |

---

## 🚀 Instalasi & Menjalankan

### Prasyarat
- Node.js 18+ 
- npm / yarn / pnpm

### Langkah Instalasi

```bash
# 1. Clone repository ini
git clone https://github.com/username/kayy-finance.git

# 2. Masuk ke folder project
cd kayy-finance

# 3. Install dependencies
npm install

# 4. Setup environment variables
cp .env.example .env.local
# Edit .env.local sesuai konfigurasi database kamu

# 5. Jalankan development server
npm run dev

# 6. Buka browser
http://localhost:3000
