# Genzi

> **Genzi adalah koentji. Full Professional AI Partner for Product Engineering, UX/UI Design, and Implementation.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Antigravity Skill](https://img.shields.io/badge/Antigravity-Skill%20%26%20Plugin-orange)](https://github.com/Naff-Dev/genzi)
[![Gemini Ready](https://img.shields.io/badge/Gemini-Ready-blue)](https://github.com/Naff-Dev/genzi)
[![Claude Plugin](https://img.shields.io/badge/Claude-Plugin%20Compatible-purple)](https://github.com/Naff-Dev/genzi)
[![Cursor Ready](https://img.shields.io/badge/Cursor-Ready-blue)](https://github.com/Naff-Dev/genzi)

---

## Genzi adalah koentji.

**Genzi** adalah skill AI yang berfungsi sebagai **mitra profesional penuh** - bukan sekadar checklist. Genzi berpikir, membuat keputusan, dan mengeksekusi seperti seorang senior engineer yang sekaligus merangkap sebagai art director.

Genzi menggabungkan 5 peran sekaligus:

| Peran | Fungsi |
|---|---|
| **Product Manager** | Menerjemahkan permintaan ambigu jadi requirement yang jelas. Mendefinisikan scope. |
| **UX Designer** | Memikirkan user flow, state, feedback, dan cognitive load sebelum coding. |
| **Art Director** | Membuat keputusan visual yang bold dan intentional. Tidak pernah default ke estetika generik. |
| **Senior Frontend Engineer** | Menulis kode yang bersih, performant, accessible, dan responsif. |
| **Code Reviewer** | Melakukan self-review ketat sebelum mendeklarasikan task selesai. |

```text
Raw Request -> Intent -> Requirements -> PRD -> Design Direction ->
Animation Plan -> Architecture -> Implementation -> Verification -> Finalize
```

---

## Fitur Utama

- **Requirements Translation**: Klasifikasi kebutuhan menjadi 4 kategori (Explicit, Inferred, Assumption, Unknown).
- **Context-Aware PRD**: PRD yang disesuaikan dengan skala tugas (Micro PRD hingga Full PRD).
- **Workspace & Stack Detection**: Selalu memeriksa project yang ada, tidak pernah menimpa stack existing.
- **Bold Design by Default**: Warna saturated, font editorial nyata, layout asimetris - bukan template AI generik.
- **Real Typography**: Font pairing spesifik (Clash Display, Space Grotesk, Inter, dll) - bukan browser default.
- **Real Images**: Menggunakan Unsplash CDN URL langsung atau `generate_image` - tidak ada kotak berwarna.
- **Motion Animation**: Framer Motion dan GSAP diizinkan dan didorong untuk animasi yang kompleks.
- **Mandatory Hover & Entrance Animations**: Setiap button, card, dan link harus punya animasi.
- **Mandatory Responsive**: Desktop (~1280px+) dan Mobile (~360px) diverifikasi - hard blocker.
- **Zero Fake Facts**: Tidak ada statistik palsu, logo klien palsu, atau klaim yang tidak diberikan user.
- **Multi-Agent Compatible**: Antigravity, Gemini, Claude Code, Cursor, Codex, Copilot.

---

## 18-Step Workflow

```text
1.  Interpret User Request
2.  Detect Product / Task Context
3.  Inspect Workspace
4.  Detect Existing Project
5.  Detect Existing Technology Stack
6.  Detect Existing Structure / Assets / Components / Design System
7.  Decide: Extend Existing vs Create New
8.  Normalize Requirements (Explicit / Inferred / Assumption / Unknown)
9.  Generate PRD (Micro or Full)
10. Define Design Direction
        - Color palette (specific HSL values, NOT "blue" or "orange")
        - Font pairing (specific font names: Space Grotesk, Inter, etc)
        - Layout composition (custom per product, NOT a template)
        - Image strategy (Unsplash CDN, generate_image, or existing)
11. Define Interaction & Motion Plan
        - Hover animations per element type (button, card, link, nav)
        - Entrance animations (IntersectionObserver / Framer Motion whileInView)
        - Click/press feedback, form states (loading, success, error)
        - Technology: CSS / Framer Motion / GSAP
12. Define Technical Architecture
13. Define Acceptance Criteria (responsive criteria mandatory)
14. Implement
15. Verify (desktop AND mobile, all interactive states)
16. Self-review (references/review-checklist.md - 3 hard blockers)
17. Fix ALL issues found
18. Finalize (no TODOs, no fake content, no lorem ipsum)
```

### Workflow Scaling

| Task Size | Contoh | Tipe PRD | Langkah Wajib |
|---|---|---|---|
| **Trivial** | Ganti warna tombol, perbaiki typo | Tidak perlu PRD | Cek workspace, langsung implementasi |
| **Small** | Tambah 1 komponen, perbaiki bug | Micro PRD (3-5 baris) | Langkah 1, 3-7, 9, 14-16 |
| **Medium** | Fitur baru multi-state, integrasi baru | Micro / Full PRD ringkas | Semua langkah (kondensasi) |
| **Large** | Produk baru, aplikasi multi-halaman | Full PRD lengkap | Semua 18 langkah secara penuh |

---

## Design Quality Hard Rules

Genzi memperlakukan kualitas desain sebagai **hard blocker** - sama pentingnya dengan responsivitas. Output yang gagal di bawah ini dianggap **belum selesai**:

```text
WAJIB ADA:
- Font nyata yang di-import (bukan Times New Roman / Arial / browser default)
- Warna primary yang saturated dan intentional (bukan gray-on-gray)
- Hover animation pada setiap button, card, link, dan nav item
- Entrance animation pada section/elemen utama (scroll-triggered)
- Gambar nyata (Unsplash CDN atau generate_image) di section visual

DILARANG:
- Dark/hitam sebagai default tanpa alasan product-specific atau permintaan user
- Purple-to-blue gradient sebagai identitas utama (AI cliche)
- Interface yang sepenuhnya statis (zero hover states)
- Placeholder kotak berwarna solid menggantikan gambar
- Layout generic: centered hero + 3 equal feature cards + CTA (always)
```

---

## Cara Menggunakan & Aktivasi via Prompt

Kamu **tidak wajib install manual**! Cukup copy prompt di bawah ini lalu **paste langsung ke AI coding agent kamu** (Antigravity, Cursor, Claude Code, Windsurf, Copilot, ChatGPT, dll). Agent akan otomatis mengambil dan menjalankan skill Genzi dari repository ini:

### ⚡ Format Cepat (Quick Command)

```text
use Naff-Dev/genzi [tulis kebutuhan / task kamu di sini]
```

**Contoh:**
```text
use Naff-Dev/genzi buatkan landing page untuk aplikasi food delivery lokal, target ibu rumah tangga kota tier 2
```
```text
use Naff-Dev/genzi build a POS cashier app with daily sales report and inventory tracking
```
```text
use Naff-Dev/genzi redesign dashboard ini agar lebih visual, bold, dan responsive
```

---

### 🚀 Universal Prompt (Paste ke Sembarang Agent / Chat)

> **Copy prompt ini, isi bagian `Task:`, lalu paste ke chat agent kamu:**

```text
Gunakan skill dari repo ini: https://github.com/Naff-Dev/genzi

Instruksi untuk Agent:
1. Ambil atau baca skill Genzi dari https://github.com/Naff-Dev/genzi
2. Baca file skills/genzi/SKILL.md secara penuh sebelum melakukan coding apapun.
3. Ikuti 18-step workflow yang ada di dalamnya secara lengkap tanpa skip (Requirements Classification, PRD, Bold & Intentional Design dengan HSL spesifik & named fonts, Motion Animation, Architecture, Desktop + Mobile Responsive Verification, dan Self-Review).
4. Baca referensi pendukung di skills/genzi/references/ sesuai fase yang sedang dikerjakan.

Task: [Tulis kebutuhan aplikasi / website / fitur yang mau kamu buat di sini]
```

---

### 🎯 Mode Khusus (Desain Saja / Review Saja)

- **Hanya Desain & Visual Direction:**
  ```text
  use Naff-Dev/genzi design-only: [deskripsi produk atau fitur]
  ```
- **Review Hasil Kode & Desain (Anti-Slop Audit):**
  ```text
  use Naff-Dev/genzi review: audit project ini menggunakan checklist skills/genzi/references/review-checklist.md
  ```

---

## Instalasi Permanen (Opsional)

Jika ingin Genzi selalu aktif di semua sesi tanpa perlu menuliskan URL repo:

### Option 1: Antigravity / Gemini IDE

#### A. Global (tersedia di semua project)

```bash
# Windows PowerShell
git clone https://github.com/Naff-Dev/genzi.git "$HOME\.gemini\config\plugins\genzi"

# macOS / Linux
git clone https://github.com/Naff-Dev/genzi.git ~/.gemini/config/plugins/genzi
```

#### B. Per-Project (hanya untuk project tertentu)

```bash
git clone https://github.com/Naff-Dev/genzi.git .agents/plugins/genzi
```

Setelah install, skill langsung aktif. Gunakan salah satu prompt di atas untuk memicunya.

---

### Option 2: Claude Code / Claude Desktop

```bash
claude plugin add Naff-Dev/genzi
```

Atau clone ke direktori plugin lokal Claude, lalu gunakan prompt aktivasi di atas.

---

### Option 3: Cursor / Windsurf / Codex

```bash
git clone https://github.com/Naff-Dev/genzi.git .cursor/skills/genzi
```

Masukkan isi `AGENTS.md` ke dalam `.cursorrules` Anda, atau sertakan prompt aktivasi di awal chat.

---

### Option 4: Copilot / GitHub Models

Salin isi `AGENTS.md` ke dalam system prompt atau `copilot-instructions.md` di `.github/` folder project Anda.

---

## Struktur Repository

```text
genzi/
├── skills/
│   └── genzi/
│       ├── SKILL.md                    <- Instruksi utama 18-step workflow
│       └── references/
│           ├── design-guidelines.md   <- Color, typography, animation, anti-slop
│           ├── prd-template.md        <- Template Micro PRD dan Full PRD
│           ├── review-checklist.md    <- Self-review (3 hard blockers)
│           └── workspace-detection.md <- Stack detection & extend-vs-new matrix
├── .agents/
│   └── plugins/
│       └── genzi/                     <- Auto-detected by Antigravity/Gemini
│           ├── plugin.json
│           └── skills/genzi/          <- Mirror dari skills/genzi/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── .cursor-plugin/
│   └── plugin.json
├── AGENTS.md                          <- Rules untuk semua agent + activation prompt
├── GEMINI.md                          <- Rules khusus Antigravity/Gemini
├── plugin.json
├── package.json
└── README.md
```

---

## Referensi Dokumentasi

1. [SKILL.md](skills/genzi/SKILL.md) - Instruksi utama workflow lengkap
2. [design-guidelines.md](skills/genzi/references/design-guidelines.md) - Color system, typography, animation playbook, asset rules, anti-slop checklist
3. [prd-template.md](skills/genzi/references/prd-template.md) - Template Micro PRD dan Full PRD
4. [review-checklist.md](skills/genzi/references/review-checklist.md) - Self-review dengan 3 hard blockers
5. [workspace-detection.md](skills/genzi/references/workspace-detection.md) - Framework detection & stack decision matrix

---

## Contoh Trigger Prompts

Genzi akan otomatis aktif saat mendeteksi:

- *"Buatkan landing page untuk startup SaaS saya"*
- *"Bikin website portfolio developer yang modern"*
- *"Tolong buatkan aplikasi kasir POS"*
- *"Tambahkan fitur export PDF pada laporan"*
- *"Redesign halaman dashboard ini biar lebih bagus"*
- *"Make a booking app for a travel agency"*
- *"Build a product page for my e-commerce"*

---

## Validasi

```bash
npm run validate
```

---

## Lisensi

Distribusi di bawah lisensi [MIT](LICENSE). Hak Cipta (c) 2026 **naffdev**.
