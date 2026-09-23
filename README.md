# naffdev-product-engineer

> **AI Agent Skill & Plugin for Product Engineering, Requirements Translation, UX/UI Design, and Full-Stack Implementation.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Antigravity Skill](https://img.shields.io/badge/Antigravity-Skill%20%26%20Plugin-orange)](https://github.com/Naff-Dev/naffdev-product-engineer)
[![Claude Plugin](https://img.shields.io/badge/Claude-Plugin%20Compatible-purple)](https://github.com/Naff-Dev/naffdev-product-engineer)
[![Cursor Ready](https://img.shields.io/badge/Cursor-Ready-blue)](https://github.com/Naff-Dev/naffdev-product-engineer)

---

## 🎯 Overview / Gambaran Umum

**`naffdev-product-engineer`** adalah translation layer antara apa yang diucapkan oleh user dan apa yang diimplementasikan oleh AI coding agent. Permintaan user seperti *"buatkan website portfolio"*, *"buat aplikasi kasir POS"*, atau *"bikin website keren"* sering kali singkat, ambigu, dan belum menjadi spesifikasi teknis yang lengkap.

Skill ini menggabungkan peran **Requirements Analyst, Product Manager, UX/UI Designer, Software Architect, dan Code Reviewer** ke dalam satu alur kerja terstruktur. Agent tidak akan langsung melompat menulis kode serampangan, melainkan menganalisis kebutuhan, membuat PRD (Product Requirement Document), menentukan arah desain anti-slop, memeriksa stack workspace yang ada, memastikan responsivitas desktop dan mobile, serta melakukan self-review ketat sebelum menyelesaikan tugas.

```text
Raw User Request → Intent Understanding → Requirements Engineering → PRD →
Design Direction → Technical Architecture → Implementation → Verification
```

---

## 🌟 Key Capabilities / Fitur Utama

- **Intent & Requirements Translation**: Mengklasifikasikan kebutuhan menjadi 4 kategori tegas (Explicit, Inferred, Assumption, Unknown).
- **Context-Aware PRD Generation**: Menghasilkan PRD yang disesuaikan dengan skala tugas (Micro PRD untuk tugas kecil, Full PRD untuk produk baru).
- **Workspace & Stack Detection**: Selalu memeriksa project dan stack yang sudah ada (Next.js, Vite, Laravel, Astro, dll) dan memprioritaskan konsistensi kode yang ada.
- **Anti-Slop Design Principles**: Mencegah layout template generik AI, warna tidak harmonis, font standar kaku, dan animasi berlebihan.
- **Mandatory Mobile & Desktop Responsive**: Memastikan UI responsif dan teruji di mobile (~360-430px) maupun desktop (1280px+).
- **Zero Fake Facts**: Melarang pembuatan data statistik palsu, logo klien palsu, atau klaim yang tidak diberikan oleh user.
- **Multi-Agent Compatibility**: Siap digunakan di Antigravity, Gemini, Claude Code, Cursor, Codex, dan Copilot.

---

## 🔄 18-Step Workflow

```text
1.  Interpret User Request
2.  Detect Product / Task Context
3.  Inspect Workspace
4.  Detect Existing Project
5.  Detect Existing Technology Stack
6.  Detect Existing Structure / Assets / Components
7.  Decide: Extend Existing vs Create New
8.  Normalize Requirements (Explicit / Inferred / Assumption / Unknown)
9.  Generate PRD (Micro or Full)
10. Define Design Direction (context-aware, anti-slop)
11. Define Interaction / Animation
12. Define Technical Architecture
13. Define Acceptance Criteria (including responsive criteria)
14. Implement
15. Verify (desktop AND mobile)
16. Self-review
17. Fix Issues
18. Finalize
```

### Workflow Scaling

| Task Size | Contoh | Tipe PRD | Langkah Wajib |
|---|---|---|---|
| **Trivial** | Ganti warna tombol, perbaiki typo, edit teks | Tidak perlu PRD | Cek workspace, langsung implementasi |
| **Small** | Tambah 1 komponen/field, perbaiki bug, 1 endpoint | Micro PRD (3-5 baris) | Langkah 1, 3-7, 9 (micro), 14-16 |
| **Medium** | Fitur baru dengan multi-state/halaman, integrasi baru | Micro / Full PRD ringkas | Semua langkah (kondensasi) |
| **Large** | Produk baru, aplikasi multi-halaman, perombakan besar | Full PRD lengkap | Semua 18 langkah secara penuh |

---

## 📁 Repository Structure

```text
naffdev-product-engineer/
├── .agents/
│   └── plugins/
│       └── naffdev-product-engineer/
│           ├── plugin.json
│           └── skills/
│               └── naffdev-product-engineer/
│                   ├── SKILL.md
│                   └── references/
│                       ├── design-guidelines.md
│                       ├── prd-template.md
│                       ├── review-checklist.md
│                       └── workspace-detection.md
├── .claude-plugin/
│   ├── marketplace.json
│   └── plugin.json
├── .cursor-plugin/
│   └── plugin.json
├── .github/
│   └── workflows/
│       └── validate-skill.yml
├── skills/
│   └── naffdev-product-engineer/
│       ├── SKILL.md
│       └── references/
│           ├── design-guidelines.md
│           ├── prd-template.md
│           ├── review-checklist.md
│           └── workspace-detection.md
├── scripts/
│   └── validate.js
├── .gitignore
├── AGENTS.md
├── GEMINI.md
├── LICENSE
├── package.json
├── plugin.json
└── README.md
```

---

## 🚀 Installation & Setup / Cara Pemasangan

### Option 1: Antigravity / Gemini IDE

#### A. Global Installation (Tersedia untuk semua project di komputer)
Clone repository ini ke dalam folder konfigurasi global Antigravity:

```bash
# Windows PowerShell
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git "$HOME\.gemini\config\plugins\naffdev-product-engineer"

# macOS / Linux
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git ~/.gemini/config/plugins/naffdev-product-engineer
```

#### B. Project-Specific Installation (Hanya untuk project tertentu)
Clone ke dalam folder `.agents/plugins/` di root project Anda:

```bash
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git .agents/plugins/naffdev-product-engineer
```

---

### Option 2: Claude Code / Claude Desktop

Gunakan format Claude plugin langsung dari repository:

```bash
# Tambahkan plugin melalui Claude CLI
claude plugin add Naff-Dev/naffdev-product-engineer
```

Atau letakkan di direktori plugin lokal Claude.

---

### Option 3: Cursor / Windsurf / Codex

Clone repository ini ke folder `.cursorrules` atau masukkan folder `skills/` ke root workspace Anda:

```bash
git clone https://github.com/Naff-Dev/naffdev-product-engineer.git .cursor/skills/naffdev-product-engineer
```

---

## 📖 Reference Documentation

Skill ini menyertakan panduan referensi terperinci yang dibaca secara on-demand oleh agent:

1. [Workspace Detection & Stack Decision](skills/naffdev-product-engineer/references/workspace-detection.md): Matriks deteksi framework, package manager, dan aturan extend vs new project.
2. [PRD Template Guide](skills/naffdev-product-engineer/references/prd-template.md): Template lengkap Micro PRD dan Full PRD beserta contoh praktis.
3. [Design Guidelines & Anti-Slop](skills/naffdev-product-engineer/references/design-guidelines.md): Panduan arah desain per tipe produk, aturan animasi, tipografi, dan larangan pola template generik.
4. [Review Checklist](skills/naffdev-product-engineer/references/review-checklist.md): Daftar periksa mandiri sebelum menyelesaikan task (responsivitas, performa, aksesibilitas, fungsionalitas).

---

## 💡 Example Trigger Prompts

Agent akan otomatis mengaktifkan skill ini saat mendeteksi prompt seperti:

- *"Buatkan landing page untuk produk SaaS B2B saya"*
- *"Bikin website portofolio developer yang modern dan clean"*
- *"Tolong buatkan aplikasi kasir POS sederhana"*
- *"Tambahkan fitur export PDF pada laporan transaksi"*
- *"Make a cool dashboard for monitoring IoT sensors"*

---

## 🧪 Validation & Testing

Repository ini dilengkapi skrip validasi otomatis untuk memverifikasi integritas manifest dan referensi markdown:

```bash
npm run validate
```

---

## 📄 License

Distribusi di bawah lisensi [MIT](LICENSE). Hak Cipta (c) 2026 **naffdev**.
