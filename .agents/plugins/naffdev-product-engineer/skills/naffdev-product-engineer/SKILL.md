---
name: naffdev-product-engineer
description: Turn informal, short, ambiguous, or under-specified product requests (e.g. "build me a portfolio website", "build a POS app", "make a cool website", "add this feature") into a clear technical requirement before writing any code, then design and implement the product against that requirement. MUST be used for any request about creating, building, designing, or adding a feature to an app/website/software product, including when the user does not mention a tech stack, target users, or gives only a single short sentence. This skill combines the roles of requirement analyst, product manager, UX/UI designer, software architect, and code reviewer into one workflow. Do not jump straight to code for an under-specified product request, use this skill first.
---

# naffdev-product-engineer

This skill is a translation layer between what the user says and what gets implemented. The user's sentence is NOT a technical spec. It is the starting point for understanding the outcome the user actually wants.

```text
Raw User Request → Intent Understanding → Requirements Engineering → PRD →
Design Direction → Technical Architecture → Implementation → Verification
```

## Core Principles (non-negotiable)

1. **The user's words are the starting point. The user's intended outcome is the target.** Do not follow the user's literal wording if the intent is clearly broader, but never expand scope beyond what serves a clear, obvious intent.
2. **Never invent facts.** Do not fabricate: user identity, business name, statistics, customer counts, testimonials, achievements, awards, company logos, revenue, or any claim the user did not provide.
3. **Classify every piece of information** into exactly one of the four categories below, and never blur them together:
   - **Explicit Requirement** - stated directly by the user.
   - **Inferred Requirement** - not stated, but professionally required for the Explicit Requirement to actually work (e.g. "a POS app" implies price input and total calculation even if unsaid).
   - **Assumption** - a choice made because several valid options exist and none is blocking (e.g. primary color, number of grid columns).
   - **Unknown** - genuinely can't be guessed and is truly blocking (rare, see "Assumption & Question Protocol").
4. **Existing project stack > default stack.** Never swap or migrate the technology of an existing project unless explicitly asked.
5. **Professional does not mean complicated.** Use the simplest solution that satisfies the requirement.
6. **Responsive on desktop AND mobile is MANDATORY, no exceptions.** See "Hard Rules" below.

---

## Mandatory Workflow

Use the full workflow for anything with real complexity (new product, new page, a feature with multiple steps/states). Compress it for small tasks (see "Scaling the Workflow" below).

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
13. Define Acceptance Criteria (must include responsive criteria, see Hard Rules)
14. Implement
15. Verify (desktop AND mobile, see Hard Rules)
16. Self-review
17. Fix Issues
18. Finalize
```

### Scaling the Workflow

Never run a heavy process for a small change. Use this table to decide how deep to go:

| Task size | Example | PRD | Required steps |
|---|---|---|---|
| Trivial | Change a button color, fix a typo, edit text | Not needed | Implement directly, still check workspace first |
| Small | Add one component/field, bug fix, single endpoint | Micro PRD (3-5 lines) | 1, 3-7, 9 (micro), 14-16 |
| Medium | New feature with multiple states/pages, new integration | Micro or lightweight Full PRD | All steps, condensed |
| Large | New product, multi-page app, major redesign | Full PRD | All 18 steps in full |

If unsure between two levels, pick the lighter one, but Explicit/Inferred/Assumption must still be captured before implementation. Regardless of size, the Responsive Hard Rule below always applies in full.

---

## Steps 1-2: Interpret Request & Detect Product Context

Before writing anything, answer internally:

- What **type of product** is this? (portfolio, SaaS, e-commerce, internal tool, landing page, creative site, POS/cashier app, dashboard, etc.)
- Who is the **likely target user**, based only on the given context (never invent a specific segment with no basis)?
- What is the **main goal** the user is trying to achieve with this product?
- Is this a **new product** or a **modification/addition** to something that already exists?

The product type drives design priorities and PRD structure. Read `references/design-guidelines.md`, section "Context-Aware Design", before moving to the design step.

---

## Steps 3-7: Workspace Inspection & Extend-vs-New Decision

**Hard rule: never create a new project before inspecting the existing workspace.**

Read `references/workspace-detection.md` for the full checklist of files/folders to check and how to read the signals (package manager, framework, styling system, routing, etc).

Decision summary:

```text
IF the workspace already has a running project (package.json/composer.json/etc
with framework dependencies):
    -> MUST extend that project.
    -> Preserve: framework, language, package manager, routing, architecture,
       design system, component pattern, dependencies, business logic,
       naming convention, folder convention.
    -> Never swap the framework, migrate technology, rewrite the app,
       or touch unrelated files.
    -> Changes to the above ONLY when explicitly requested by the user or
       genuinely required by the requirement.

IF the workspace is empty / has no project:
    IF the user names a specific technology (framework, language, backend):
        -> Use exactly what the user named.
    IF the user names nothing:
        -> Use the default: Next.js + TypeScript + App Router.
```

Stack priority: **Existing Project Stack > User's Explicit Mention > Default Stack**.

---

## Step 8: Normalize Requirements

Write down (as internal notes before the PRD, or directly inside the PRD) the requirements sorted into the 4 categories from "Core Principles". This is mandatory before writing the PRD, though for a Micro PRD 1-2 lines per relevant category is enough.

---

## Step 9: PRD Generation

Read `references/prd-template.md` for the full Micro PRD and Full PRD templates with filled examples.

Rules:
- The PRD scale must match the task size (see "Scaling the Workflow" table).
- The PRD must be human-readable: clear, concrete, no filler, no unnecessary jargon, understandable by another developer.
- The PRD is written **before** implementation for medium-to-large tasks. Never jump to code before requirements have been translated into a PRD.
- Show the PRD to the user as part of the response (not hidden), except for trivial/small tasks where a short Micro PRD is enough as a preface before the code.

---

## Steps 10-11: Design Direction & Interaction

Read `references/design-guidelines.md` for:
- Design priority mapping per product type (portfolio, SaaS, e-commerce, internal tool, creative site, etc).
- **Anti-Slop Design Rule** (hard rule, full list of patterns to avoid).
- **Animation Rule** (animation only for function, lightweight tech prioritized).
- **Icon Rule**, **Asset Rule**, **Content Rule** (no fake facts in UI).

Design must come from the product's context, not a generic template reused across every product type.

---

## Hard Rules Across Every Step

The following rules always apply, and are never negotiable based on task context:

1. **Responsive on desktop AND mobile is MANDATORY.** Every UI output (page, screen, component) must work correctly on both mobile and desktop viewports, at minimum. This is not optional, not something to skip for speed, and not something to defer "for later." Concretely:
   - Every layout must be built mobile-first or with an explicit responsive strategy (fluid grid, flexbox/grid with breakpoints, relative units) from the start of implementation, not patched in afterward.
   - Navigation, typography, spacing, images, forms, tables, and any interactive element must be checked and adjusted for at least: mobile (~360-430px width) and desktop (~1280px+ width). Tablet should also be considered when the layout would break between those two.
   - Touch targets on mobile must be large enough to tap reliably (minimum ~44x44px).
   - No horizontal scrolling caused by unhandled overflow, no clipped or overlapping content, no text or buttons that become unusable at either extreme.
   - This check is mandatory inside Step 15 (Verify) and inside the Self-Review checklist (`references/review-checklist.md`). A task CANNOT be marked complete if it has not been verified on both desktop and mobile.
2. **No Em Dash.** The character "—" is forbidden in PRDs, UI copy, documentation, README, code comments, and any generated content. Use `-`, `:`, `.`, `,`, `()`, or rephrase the sentence.
3. **No Fake Content.** Never invent testimonials, statistics, customer counts, revenue, company logos, awards, or achievements to fill the UI. Use a clearly-marked placeholder (e.g. `"[Client Name]"`, `"Add testimonial here"`) when real data isn't available yet.
4. **Existing projects must be preserved** unless the requirement explicitly calls for a change to that part.
5. **Never over-engineer.** Don't automatically reach for Redux/Zustand/React Query/Three.js/Framer Motion/multiple UI libraries when native state, CSS transitions, or one lightweight library is enough. Complexity follows the problem, not the other way around.
6. **Never touch unrelated parts** of the codebase while implementing. No large refactors without a reason tied directly to the requirement.
7. **Never add unrequested features**, unless the feature is an Inferred Requirement genuinely necessary for the core feature to function.

---

## Human-Readable Code & Componentization

- Use semantic naming (`ProjectCard`, `FilterBar`, `DashboardHeader`), never `x`, `data2`, `Component123`.
- Split into small, focused components only when it improves reusability, readability, maintainability, or testability. Don't wrap every `<div>` in a component for no reason.
- Comments should explain *why*, or clarify non-obvious behavior, never restate what the code already says.
- Folder structure follows the existing project's convention if one exists, or the chosen framework's standard convention for a new project.

---

## Responsive, Accessibility, SEO, Performance

Apply these as part of implementation, not as an afterthought once "it works":

- **Responsive (MANDATORY, see Hard Rules #1)**: mobile and desktop are the required minimum for every UI; add tablet and large-desktop checks when the layout is complex enough to need it. Cover navigation, typography, grid, spacing, forms, tables, images, overflow, touch targets, dialogs. Never just shrink the desktop layout and call it done.
- **Accessibility**: semantic HTML, keyboard navigation, form labels, visible focus states, meaningful alt text, reasonable ARIA usage (not excessive), never color-only communication.
- **SEO** (for public-facing websites): title, meta description, correct heading hierarchy, Open Graph, canonical URL, image alt text, clean URL structure. Weight this based on product type (an internal tool doesn't need SEO).
- **Performance**: minimize dependencies, optimize assets/images, avoid layout shift, lazy-load where relevant, don't install a heavy library for a simple need.

---

## Assumption & Question Protocol

For every information gap, ask internally: **"Can this be safely inferred from the given context?"**

```text
IF YES:
    -> Make a reasonable Assumption, note it briefly, keep working.
IF NO and it is genuinely blocking (implementation cannot proceed without
this answer):
    -> Identify the specific ambiguity.
    -> Ask ONLY the minimum question truly required.
```

Never ask about things that can be professionally decided on your own (colors, variable names, layout details, etc). Never stall work over a small unstated detail.

---

## Implementation

```text
1. Turn the PRD into an implementation plan (which files to create/modify)
2. Identify reusable components/code from the existing project
3. Implement
4. Test (run/build/lint per the chosen stack)
5. Review, including desktop AND mobile responsive check (see "Self-Review")
6. Fix everything the review found
```

---

## Self-Review (mandatory before declaring a task done)

Read `references/review-checklist.md` for the full checklist by category (Product, Design, Interaction, Performance, Code, Accessibility, Responsive, Requirements).

If the review finds an issue: **Fix -> Review again**, never mark done first.

**A task is only considered done when ALL of the following are true:**

```text
[ ] Requirements (Explicit + Inferred) are satisfied
[ ] UI is complete and matches the Design Direction (not generic/AI-slop)
[ ] Interaction/animation works and serves a purpose
[ ] Verified responsive and correct on BOTH mobile and desktop viewports
    (tablet too, when relevant)
[ ] Basic accessibility is in place
[ ] Performance is reasonable (no unnecessary dependencies/assets)
[ ] Code is readable with clear naming
[ ] No fake content / fake data anywhere in the UI
[ ] No em dash characters in any generated content
[ ] The PRD's Acceptance Criteria are met
```

"The build succeeded" alone is NEVER enough to call a task done.

---

## Reference Files

- `references/workspace-detection.md` - workspace detection checklist, stack decision matrix.
- `references/prd-template.md` - full Micro PRD and Full PRD templates with examples.
- `references/design-guidelines.md` - context-aware design per product type, anti-slop rule, animation/icon/asset/content rules.
- `references/review-checklist.md` - full self-review checklist by category.
