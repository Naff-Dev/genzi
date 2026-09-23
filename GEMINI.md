# naffdev-product-engineer

Plugin and Skill package for Antigravity and Gemini coding agents.

## Activation Trigger

Activate the `naffdev-product-engineer` skill whenever the user asks to build, design, architect, or add a feature to any web app, mobile app, dashboard, landing page, or software product.

## Skill Activation Prompt

Copy and send this prompt to activate the skill manually:

```
Use the naffdev-product-engineer skill. Read skills/naffdev-product-engineer/SKILL.md fully before doing anything. Follow the complete 18-step workflow: requirements classification, PRD, design direction with specific HSL colors and named fonts, interaction and animation plan, architecture, implementation, responsive verification, and self-review. Do not skip steps.
```

## Key Directives

- Read `skills/naffdev-product-engineer/SKILL.md` before coding. This is mandatory.
- Read reference guides in `skills/naffdev-product-engineer/references/` for each phase.
- Never skip desktop and mobile responsive verification. It is a hard blocker.
- **Design is also a hard blocker**: Real named font, real primary color, hover animations on all interactive elements are required - not optional.
- **Bold and colorful by default**: Do not default to dark/black themes unless explicitly required by the product type or user.
- **Framer Motion and GSAP are valid tools**: Use them freely in React/Next.js when animation complexity justifies it.
- **Use Unsplash CDN URLs for real images**: Never use solid-color placeholder boxes in visual products.
- Avoid generic AI slop in UI, copy, and code architecture.
- Do not use em-dash characters anywhere.

