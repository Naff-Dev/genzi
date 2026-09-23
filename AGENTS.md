# naffdev-product-engineer

This repository contains the `naffdev-product-engineer` skill and plugin for Antigravity, Gemini, Claude, Cursor, and other AI coding agents.

## Quick Reference

- **Skill Name**: `naffdev-product-engineer`
- **Location**: `skills/naffdev-product-engineer/SKILL.md`
- **Purpose**: Translates informal, short, or ambiguous product requests into formal PRDs, bold and intentional UX/UI design, clean architectures, and fully responsive implementations. Acts as Product Manager + Art Director + Senior Engineer + Code Reviewer in one workflow.

## Skill Activation Prompt

Copy and send this prompt to activate the skill manually in any agent:

```
Use the naffdev-product-engineer skill. Read skills/naffdev-product-engineer/SKILL.md fully before doing anything. Then follow its complete 18-step workflow including: requirements classification, PRD generation, design direction (with specific colors and fonts), interaction and animation plan, technical architecture, implementation, responsive verification on desktop and mobile, and self-review using references/review-checklist.md. Do not skip any step.
```

## Core Rules for Agents

1. **User intent > literal words**: Understand the real outcome without inventing unstated facts.
2. **Never invent facts**: No fake metrics, fake reviews, fake client logos, or fabricated achievements.
3. **Classify information**: Always separate into Explicit Requirements, Inferred Requirements, Assumptions, and Unknowns.
4. **Preserve existing stacks**: Existing codebase framework and conventions outrank default stacks.
5. **Mandatory responsive design**: Desktop AND mobile viewports must be verified. This is a hard blocker.
6. **No em dash character**: Do not use the em-dash character in PRDs, copy, or code. Use "-", ":", or commas.
7. **Design is a hard blocker**: Real font (not browser default), real primary color (not gray-on-gray), hover animations on all interactive elements. These are required outputs, not nice-to-haves.
8. **Real images required**: Use Unsplash CDN URLs or generate_image for visual products. No solid-color placeholder boxes.
9. **Motion animation is allowed and encouraged**: Framer Motion and GSAP are valid tools for React/Next.js projects. Use them when the complexity justifies it.
10. **Bold and colorful by default**: Light mode is the default unless the product type or user explicitly requires dark. Purple-to-blue AI gradient is forbidden as a primary identity.

