# naffdev-product-engineer

> **AI Agent Skill & Plugin - Full Professional Partner for Product Engineering, UX/UI Design, and Implementation.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Antigravity Skill](https://img.shields.io/badge/Antigravity-Skill%20%26%20Plugin-orange)](https://github.com/Naff-Dev/naffdev-product-engineer)
[![Gemini Ready](https://img.shields.io/badge/Gemini-Ready-blue)](https://github.com/Naff-Dev/naffdev-product-engineer)
[![Claude Plugin](https://img.shields.io/badge/Claude-Plugin%20Compatible-purple)](https://github.com/Naff-Dev/naffdev-product-engineer)
[![Cursor Ready](https://img.shields.io/badge/Cursor-Ready-blue)](https://github.com/Naff-Dev/naffdev-product-engineer)

---

## Gambaran Umum

**`naffdev-product-engineer`** adalah skill AI yang berfungsi sebagai **mitra profesional penuh** - bukan sekadar checklist. Skill ini berpikir, membuat keputusan, dan mengeksekusi seperti seorang senior engineer yang sekaligus merangkap sebagai art director.

Skill ini menggabungkan 5 peran sekaligus:

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
- **Motion Animation**: Framer Motion dan GSAP diizinkan dan didorong untuk animasi yang sesuai.
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
        - Color palette (specific HSL values)
        - Font pairing (specific font names)
        - Layout composition (custom per product, not a template)
        - Image strategy (Unsplash CDN, generate_image, or existing)
11. Define Interaction & Motion Plan
        - Hover animations per element type
        - Entrance animations (IntersectionObserver / Framer Motion)
        - Click/press feedback, form states
        - Technology choice: CSS / Framer Motion / GSAP
12. Define Technical Architecture
13. Define Acceptance Criteria (responsive criteria mandatory)
14. Implement
15. Verify (desktop AND mobile, all interactive states)
16. Self-review (references/review-checklist.md)
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

Skill ini memperlakukan kualitas desain sebagai **hard blocker** - sama pentingnya dengan responsivitas. Output yang gagal pada hal-hal berikut dianggap belum selesai:

```text
WAJIB ADA:
- Font nyata yang di-import (bukan Times New Roman / Arial / browser default)
- Warna primary yang saturated dan intentional (bukan gray-on-gray)
- Hover animation pada setiap button, card, link, dan nav item
- Entrance animation pada section/elemen utama
- Gambar nyata (Unsplash CDN atau generate_image) di section visual

DILARANG:
- Dark/hitam sebagai default tanpa alasan product-specific atau permintaan user
- Purple-to-blue gradient sebagai identitas utama (AI cliche)
- Interface yang sepenuhnya statis (zero hover states)
- Placeholder kotak berwarna solid menggantikan gambar
- Layout generic: hero besar + 3 kartu fitur + CTA = selalu
```

---

## Cara Penggunaan - Aktivasi via Prompt

### Prompt Aktivasi Penuh (Recommended)

Kirimkan prompt berikut ke agent untuk mengaktifkan skill secara eksplisit:

```
Use the naffdev-product-engineer skill. Read skills/naffdev-product-engineer/SKILL.md fully before doing anything. Follow the complete 18-step workflow: requirements classification, PRD generation, design direction with specific HSL colors and named fonts, interaction and animation plan, technical architecture, implementation, responsive verification on desktop and mobile, and self-review using references/review-checklist.md. Do not skip any step.
```

### Prompt Singkat (untuk task cepat)

```
Gunakan skill naffdev-product-engineer. Baca SKILL.md dulu, lalu ikuti workflownya untuk task ini.
```

### Prompt Khusus Desain Saja

```
Gunakan design-guidelines dari naffdev-product-engineer. Pastikan: warna primary saturated (bukan gray), font nyata dari Google Fonts, hover animation pada semua elemen interaktif, entrance animation pada section utama, dan gambar dari Unsplash CDN. Tidak boleh dark mode kecuali diminta.
```

### Prompt Khusus Verifikasi / Review

```
Jalankan self-review menggunakan references/review-checklist.md dari skill naffdev-product-engineer. Cek semua kategori: Product, Design (font nyata, warna, animasi), Interaction, Responsive (mobile + desktop), Code, Accessibility, dan Requirements.
```

---

## Instalasi

### Option 1: Antigravity / Gemini IDE

#### A. Global (tersedia di semua project)

```bash
# Windows PowerShell
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git "$HOME\.gemini\config\plugins\naffdev-product-engineer"

# macOS / Linux
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git ~/.gemini/config/plugins/naffdev-product-engineer
```

#### B. Per-Project (hanya untuk project tertentu)

```bash
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git .agents/plugins/naffdev-product-engineer
```

Setelah install, skill langsung aktif. Gunakan salah satu prompt di atas untuk memicunya.

---

### Option 2: Claude Code / Claude Desktop

```bash
claude plugin add Naff-Dev/naffdev-product-engineer
```

Atau clone ke direktori plugin lokal Claude, lalu gunakan prompt aktivasi di atas.

---

### Option 3: Cursor / Windsurf / Codex

```bash
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git .cursor/skills/naffdev-product-engineer
```

Masukkan isi `AGENTS.md` ke dalam `.cursorrules` Anda, atau sertakan prompt aktivasi di awal chat.

---

### Option 4: Copilot / GitHub Models

Salin isi `AGENTS.md` ke dalam system prompt atau `copilot-instructions.md` di `.github/` folder project Anda.

---

## Struktur Repository

```text
naffdev-product-engineer/
├── skills/
│   └── naffdev-product-engineer/
│       ├── SKILL.md                    <- Instruksi utama 18-step workflow
│       └── references/
│           ├── design-guidelines.md   <- Color, typography, animation, anti-slop
│           ├── prd-template.md        <- Template Micro PRD dan Full PRD
│           ├── review-checklist.md    <- Self-review checklist (3 hard blockers)
│           └── workspace-detection.md <- Stack detection & extend-vs-new matrix
├── .agents/
│   └── plugins/
│       └── naffdev-product-engineer/  <- Auto-detected by Antigravity/Gemini
│           ├── plugin.json
│           └── skills/ -> (mirrors skills/)
├── AGENTS.md                          <- Rules untuk semua agent + activation prompt
├── GEMINI.md                          <- Rules khusus Antigravity/Gemini
├── plugin.json
├── package.json
└── README.md
```

---

## Referensi Dokumentasi

1. [SKILL.md](skills/naffdev-product-engineer/SKILL.md) - Instruksi utama workflow lengkap
2. [design-guidelines.md](skills/naffdev-product-engineer/references/design-guidelines.md) - Color system, typography, animation playbook, asset rules
3. [prd-template.md](skills/naffdev-product-engineer/references/prd-template.md) - Template Micro PRD dan Full PRD
4. [review-checklist.md](skills/naffdev-product-engineer/references/review-checklist.md) - Self-review checklist dengan 3 hard blockers
5. [workspace-detection.md](skills/naffdev-product-engineer/references/workspace-detection.md) - Framework detection & stack decision matrix

---

## Contoh Prompt yang Akan Mengaktifkan Skill Ini

Agent akan otomatis menggunakan skill ini saat mendeteksi:

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



