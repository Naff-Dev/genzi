# Design Guidelines

Read this when entering Step 2 (Detect Product Context) and Steps 10-11 (Design Direction, Interaction).

## 1. Context-Aware Design

Never use one design template for every product type. Determine the product type first, then prioritize accordingly:

```text
Portfolio
    Priority: Identity, Typography, Projects, Case Studies,
    Personal credibility, Editorial composition.

SaaS / Web App
    Priority: Information hierarchy, Navigation, Data, Forms,
    State, Feedback, Efficiency.

E-commerce
    Priority: Product presentation, Pricing, Trust, Filtering,
    Purchase flow, Product information.

Internal Business Tool / Admin Panel
    Priority: Speed, Tables, Search, Filtering, Keyboard interaction,
    Status, Dense information.

Creative Website / Campaign Landing Page
    Priority: Art direction, Composition, Typography, Motion,
    Storytelling.

Transactional App (POS/Cashier, Booking, etc)
    Priority: Fast input, Clear numbers/prices, Minimal steps per
    transaction, Clear success/failure feedback, Error tolerance (easy
    to cancel/correct).
```

If a product doesn't fit any category above, decide the design priorities yourself based on the product's goal and who will use it. Never default to a generic landing-page pattern.

## 2. Anti-Slop Design Rule (HARD RULE)

Never produce a UI that feels like a generic AI template. Avoid the following by default, unless the user explicitly asks for this style:

```text
Generic AI landing page layout
Purple-to-blue "AI product" gradient
Excessive gradients
Glassmorphism everywhere
Everything wrapped in a card
Cards with excessive rounded corners
Floating decorative blobs with no meaning
Fake dashboard statistics
Random decorative icons
Icon grids with no function
Oversized glowing buttons
Excessive shadows
Excessive blur
Random pills/badges with no information
Generic SaaS sections (feature-feature-feature-CTA with no real context)
Generic testimonial blocks
Fake company logos
Decorative elements with no purpose
Excessive whitespace with no real hierarchy
Excessive animation
Generic AI-style illustrations
```

Instead, prioritize:

```text
Strong, intentional typography (font pairing, sizing, line-height)
Clear visual hierarchy (not every element carrying equal weight)
Intentional spacing, not framework defaults
A layout composition distinct to this product, not a generic template
Contextual visual language (per section 1 above)
Interaction that is genuinely useful
Real content structure (not lorem ipsum or excessive generic placeholders)
Information density appropriate to the product (SaaS/internal tools can be
    dense, portfolios can breathe)
Subtle, meaningful motion
```

The end result should feel like a product deliberately designed for its problem and its users, not template output.

## 3. Animation Rule

Animation is only allowed when it serves a function. Valid functions:

```text
Hover, focus, active state
Action feedback (submit, save, delete, error)
Navigation (page transition, menu open/close)
Scroll reveal (sparingly, not on every element)
Modal/dialog transition
Accordion, tabs
Image reveal
Loading state
Transitions between interactive component states
```

Animation must improve at least one of: feedback, continuity, hierarchy, navigation, or state awareness. Never add animation just because it's possible.

Avoid:

```text
Infinitely floating objects
Excessive particles
Heavy 3D with no functional need
Continuously animated backgrounds
Extreme parallax
Animation on nearly every element of the page
```

Prioritize lightweight technology in this order, reaching for the next option only when the previous one isn't enough:

```text
1. CSS transition
2. CSS animation
3. Transform & opacity
4. Native browser APIs (View Transitions, IntersectionObserver, etc)
5. requestAnimationFrame (only when frame-level control is truly needed)
6. Animation libraries (Framer Motion, GSAP, etc) - only when the
   animation need is genuinely complex and unreasonable to hand-roll
```

Never install a heavy animation library for a simple hover or fade.

## 4. Icon Rule

Icons are not primary decoration. Use an icon when it:

```text
Clarifies an action (search, edit, delete, download, filter, external link)
Aids navigation
Aids fast scanning
Represents a widely-recognized function
```

Avoid:

```text
Random icons with no purpose
An icon on every heading
Icon grids with no real function
Icons only to make the UI look busier
```

Icon-only interactive elements must have an accessibility label (e.g. `aria-label`) since there is no explanatory text.

## 5. Asset Rule

Order of operations before sourcing external assets:

```text
1. Inspect existing assets in the project (assets/, public/, etc folders)
2. Reuse an existing asset if it fits the need
3. Determine what asset is genuinely missing
4. Search for a suitable asset (web/image search if the tool is available)
5. Prefer legitimate, clearly-sourced options
6. Optimize the asset's size (compression, appropriate format)
7. Store it locally in the project when possible
```

When sourcing external assets:

```text
Never grab an image carelessly without checking fit and quality
Avoid hotlinking unless necessary
Pay attention to license
Optimize file size before using it
```

## 6. Content Rule

Never fabricate facts to fill the UI, including:

```text
Fake testimonials
Fake statistics
Fake revenue numbers
Fake customer counts
Fake company logos
Fake awards/achievements
Business claims the user never gave
```

If real information isn't available yet, use a placeholder that is visually/textually obvious as a placeholder, e.g. `"[Client Name]"`, `"Add testimonial here"`, `"$0"` labeled `"Data not yet available"`. Never write a placeholder that disguises itself as real data.
