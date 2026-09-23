# Genzi

**Genzi adalah koentji.**

This repository contains the `genzi` skill and plugin for Antigravity, Gemini, Claude, Cursor, and other AI coding agents.

## Quick Reference

- **Skill Name**: `genzi`
- **Location**: `skills/genzi/SKILL.md`
- **Purpose**: Full professional AI partner - Product Manager + Art Director + Senior Engineer + Code Reviewer in one workflow. Turns informal requests into PRD, bold intentional design, motion animations, and responsive implementation.

## Skill Activation Prompts

### Quick Command
```
use Naff-Dev/genzi [task kamu]
```

### Universal Copy-Paste Prompt
```
Gunakan skill dari repo ini: https://github.com/Naff-Dev/genzi

Instruksi untuk Agent:
1. Ambil atau baca skill Genzi dari repo https://github.com/Naff-Dev/genzi
2. Baca file skills/genzi/SKILL.md secara penuh sebelum melakukan apapun.
3. Ikuti 18-step workflow yang ada di dalamnya secara lengkap: requirements classification, PRD generation, bold design direction (dengan HSL spesifik dan named fonts), interaction and animation plan, technical architecture, implementation, responsive verification on desktop and mobile, dan self-review menggunakan references/review-checklist.md.
4. Jangan skip langkah apapun.

Task: [tulis task kamu di sini]
```

## Core Rules for Agents

1. **User intent > literal words**: Understand the real outcome without inventing unstated facts.
2. **Never invent facts**: No fake metrics, fake reviews, fake client logos, or fabricated achievements.
3. **Classify information**: Always separate into Explicit Requirements, Inferred Requirements, Assumptions, and Unknowns.
4. **Preserve existing stacks**: Existing codebase framework and conventions outrank default stacks.
5. **Mandatory responsive design**: Desktop AND mobile viewports must be verified. This is a hard blocker.
6. **No em dash character**: Do not use the em-dash character in PRDs, copy, or code. Use "-", ":", or commas.
7. **Design is a hard blocker**: Real font (not browser default), real primary color (not gray-on-gray), hover animations on all interactive elements. Required outputs, not nice-to-haves.
8. **Real images required**: Use Unsplash CDN URLs or generate_image for visual products. No solid-color placeholder boxes.
9. **Motion animation is allowed and encouraged**: Framer Motion and GSAP are valid tools for React/Next.js projects.
10. **Bold and colorful by default**: Light mode is the default unless the product type or user explicitly requires dark. Purple-to-blue AI gradient is forbidden as a primary identity.
