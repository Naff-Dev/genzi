# Design Guidelines

Read this when entering Step 2 (Detect Product Context) and Steps 10-11 (Design Direction, Interaction).

---

## 0. Design Philosophy (READ THIS FIRST)

The default output of most AI systems is: dark background, purple-to-blue gradient, white text, card grid, glassmorphism. That is not a design. That is a fallback.

**The directive here is the opposite:**

- Start from the product's personality, audience, and goal - not from a color that "feels safe."
- Be bold by default. Restraint is earned, not the starting point.
- A great frontend should feel like it was designed by a human who cared deeply about this specific product.
- If the design could belong to any other product, it is wrong.

**Reference visual benchmarks (study these before designing):**

```text
GAZU (fashion e-commerce)
    - Oversized editorial typography as layout element
    - Real photography, no illustrations
    - Near-black and off-white only, zero gradients
    - Clean categories as visual blocks, not card grids
    - Typography IS the hero, not a button or badge

Okaso (furniture/interior)
    - Full-bleed real product photo as hero background
    - Minimal text overlay, one clear CTA
    - Color comes from the product itself (orange sofa = brand warmth)
    - Small floating UI card for detail/variant - intentional, not decorative

Trekcave (adventure booking)
    - Clean white base, vivid orange accent for CTA only
    - Bold, heavy sans for headings - large, confident
    - Hero is image + text + stat card - asymmetric composition
    - Real photography of the destination, no illustrations

Vespa (product page)
    - Asymmetric editorial layout - text left, full product image right
    - White base, zero gradients, typography drives hierarchy
    - Small tags/labels as product specs, not decorative badges
    - Real product photography, no 3D renders or illustrations
```

**Default Mode: Colorful, Opinionated, Alive.**

Unless the product type or user explicitly demands neutral/minimal/dark:
- Use color actively. Not as accent. As identity.
- Use typography as a design element, not just a delivery mechanism.
- Use animation to make the interface feel real and responsive.

---

## 1. Context-Aware Design

Never use one design template for every product type. Determine the product type first, then prioritize accordingly:

```text
Portfolio / Personal Brand
    Personality-first. Pick a strong visual voice.
    Use editorial typography (display fonts, large type, tight tracking).
    Color: 1-2 vivid signature colors. Make them count.
    Layout: unconventional grid, asymmetric sections, strong whitespace rhythm.
    Motion: smooth scroll transitions, text reveal on enter.
    DO NOT default to dark/minimal. That is overdone.

SaaS / Web App
    Clarity over decoration, but clarity does not mean boring.
    Color: saturated primary + neutral system. Not gray-on-gray.
    Navigation: fast, clear, predictable. Never bury key actions.
    Data/forms: spacing discipline, strong input states, visible feedback.
    Motion: micro-interactions on every action (save, error, toggle), skeleton loaders.

E-commerce / Marketplace
    Product is hero. Typography and color serve the product.
    Color: neutral base + 1 vivid accent for CTA and trust signals.
    Trust: clear pricing, real reviews, real brand signals.
    Motion: image hover zoom, cart feedback animation, quantity update animation.
    Reference: GAZU, Vespa, Okaso examples above.

Internal Business Tool / Admin
    Dense but not chaotic. Speed above all.
    Color: low-saturation base, color only for status (error, warning, success).
    Typography: readable at small sizes, monospace for codes/IDs when useful.
    Motion: instant feedback, minimal animation (skeleton loaders acceptable).

Creative / Campaign / Landing Page
    This is where full expression is allowed and expected.
    Art direction: unconventional layout, bold color fields, strong type scale.
    Motion: scroll-driven animations, entrance effects, parallax (controlled).
    Color: anything. Own it. Make it memorable.
    Typography: expressive. Display fonts. Oversized headings are expected.

Transactional App (POS, Booking, Cashier)
    Speed and legibility over aesthetics, but still branded.
    Large tap targets, high contrast, minimal cognitive load per step.
    Color: saturated for action/CTA, desaturated for UI chrome.
    Motion: instant confirm/deny feedback, no decorative animation.
    Reference: Trekcave example above.
```

If a product doesn't fit any category above, decide the design priorities yourself based on the product's goal and who will use it. Never default to a generic landing-page pattern.

---

## 2. Color System (MANDATORY to follow)

### 2.1 Do NOT Default to Dark or Black

Dark mode is a valid choice ONLY when:
- The product type genuinely benefits from it (code editor, media player, night dashboard).
- The user explicitly requests it.
- The brand identity is defined by dark.

DO NOT pick dark because it "looks professional." That is the AI safety blanket. Reject it.

### 2.2 Color Selection Process

Before choosing colors, answer:
1. What emotion should this product evoke? (trust, energy, calm, boldness, playfulness)
2. Who uses this? (age, profession, context)
3. Is there an existing brand identity?

Then pick:

```text
Primary color: 1 vivid, saturated color that defines the brand.
    Do not default to blue unless the product is genuinely finance/health/trust.
    Consider: warm orange, electric green, vivid coral, deep violet, saturated
    teal, bold red, golden yellow, magenta - these are underused and distinctive.

Secondary color: complements or contrasts the primary.
    Analogous (nearby on wheel) for harmony.
    Complementary (opposite) for energy.

Neutral base:
    Light mode: white or off-white (e.g. #FAFAF8, #F5F4F0, warm cream).
    Dark mode (only if chosen): very dark, not pure black (#0D0D0D, #111118).
    Grays must be hue-shifted (tinted toward the primary), not pure RGB grays.

Accent: optional 3rd color for highlights, tags, badges only.
```

### 2.3 Palette Examples (starting points only, always adapt)

```text
High-energy (startup, creative, youth-facing):
    Primary:    hsl(22, 95%, 55%)    vivid orange
    Secondary:  hsl(340, 80%, 55%)   hot pink/magenta
    Background: hsl(30, 20%, 97%)    warm off-white
    Text:       hsl(20, 15%, 12%)    warm near-black

Trust-first (finance, legal, health):
    Primary:    hsl(214, 75%, 45%)   confident blue (not generic)
    Secondary:  hsl(160, 60%, 42%)   teal-green
    Background: hsl(210, 20%, 98%)   cool off-white
    Text:       hsl(215, 25%, 12%)   cool near-black

Creative / portfolio (artist, designer):
    Primary:    hsl(280, 85%, 55%)   vivid violet
    Secondary:  hsl(50, 90%, 55%)    golden yellow
    Background: hsl(0, 0%, 98%)      near-white
    Text:       hsl(0, 0%, 8%)       near-black

E-commerce / consumer:
    Primary:    hsl(15, 90%, 50%)    vivid red-orange
    Secondary:  hsl(35, 85%, 50%)    amber
    Background: hsl(0, 0%, 100%)     white
    Text:       hsl(0, 0%, 10%)      black

Editorial / fashion (GAZU style):
    Primary:    hsl(0, 0%, 8%)       near-black
    Accent:     hsl(0, 0%, 100%)     white
    Background: hsl(40, 10%, 96%)    warm off-white
    Note: color comes from the product photography, not from UI elements.
```

### 2.4 Gradient Rules

```text
ALLOWED:
- Gradient as a brand color field (hero background, section break).
- Gradient on a button when the brand is high-energy or creative.
- Subtle gradient overlay on images for text legibility only.
- Text gradient on one specific display heading only.

FORBIDDEN:
- Purple-to-blue gradient as the primary identity (generic AI look).
- Gradient on every card, button, section, and background simultaneously.
- Gradient as wallpaper with no other design intent.
- Multiple different gradients competing on the same page.
```

---

## 3. Typography System (MANDATORY to follow)

### 3.1 Always Load a Real Font

Never use the browser default (Times New Roman, Arial, or bare `sans-serif`). Always import from Google Fonts or use a defined system font stack.

### 3.2 Font Selection

```text
Display / Heading (pick one per project):
    Clash Display        geometric, bold, ultra-modern (editorial/fashion)
    Cabinet Grotesk      warm geometric, contemporary
    Satoshi              clean, confident sans
    Syne                 distinctive, editorial
    Space Grotesk        technical, sharp
    DM Serif Display     editorial serif, contrasts with sans
    Playfair Display     classic editorial serif
    Fraunces             expressive variable serif
    Outfit               clean, versatile
    Plus Jakarta Sans    geometric, professional

Body (readability priority):
    Inter                neutral, highly legible
    DM Sans              warm, modern
    Figtree              friendly, open
    General Sans         clean workhorse
    IBM Plex Sans        structured, technical

Pairing rule: CONTRAST the display and body fonts.
    Geometric sans display + humanist sans body.
    Serif display + geometric sans body.
    DO NOT pair two similar sans-serif fonts.
```

### 3.3 Type Scale (use clamp() for fluid scaling)

```text
Display / Hero:  clamp(3.5rem, 8vw, 9rem)   large, commanding (GAZU/Trekcave scale)
H1:              clamp(2rem, 4vw, 3.5rem)
H2:              clamp(1.5rem, 2.5vw, 2.25rem)
H3:              1.25rem to 1.5rem
Body:            1rem (16px base)
Small / Caption: 0.875rem
Label:           0.75rem, uppercase, tracked

Rules:
- Never use more than 3 font sizes within one section.
- Heading and body must have clearly different sizes.
- Display text: line-height 1.0-1.1, letter-spacing -0.03em (tight, editorial).
- Body text: line-height 1.55-1.70.
- Uppercase labels: letter-spacing +0.08em to +0.15em.
- Oversized display type used as LAYOUT element (like GAZU) is valid and encouraged.
```

### 3.4 Font Weight as Hierarchy

```text
900 / Black:    hero headings, display text only
700 / Bold:     H1, H2, CTA labels, key numbers
600 / SemiBold: H3, nav items, card titles
500 / Medium:   UI labels, subheadings
400 / Regular:  body text
300 / Light:    captions, metadata (use sparingly)
```

---

## 4. Animation and Motion (MANDATORY to implement)

### 4.1 Animate to Feel Real, Not to Impress

Every interactive element must respond visually. A static interface feels broken. Animation is not optional decoration - it is part of the product feeling alive.

**Motion animation (Framer Motion, GSAP, CSS custom) is encouraged for:**
- Page or section entrance effects
- Scroll-driven reveal animations
- Smooth route/tab transitions in SPAs
- Hero text character or word reveals
- Staggered list/card entrances
- Number count-up for stats
- Interactive hover states with physics (spring easing)

### 4.2 Required Animations (always implement these)

```text
HOVER STATES (every interactive element must have one):
    Buttons:    scale(1.02-1.04) + color shift + shadow lift, 150-200ms
    Cards:      translateY(-4px to -8px) + shadow increase, 200-250ms
    Links:      underline slide-in or color fade, 150ms
    Nav items:  background fill or underline, 150ms
    Icons:      small scale or color change, 200ms
    Product images (e-comm): zoom scale(1.05) on hover, 400ms ease-out
    Easing:     ease-out or cubic-bezier(0.25, 0.46, 0.45, 0.94)

ENTRANCE ANIMATIONS (elements entering viewport):
    Use IntersectionObserver + CSS class toggle, or Framer Motion whileInView.
    Pattern: opacity 0->1 + translateY(24-40px)->0
    Duration: 500-700ms, ease-out
    Stagger between items: 80-120ms delay per item
    Max stagger chain: 5-6 items at a time.

CLICK / PRESS FEEDBACK:
    Button click: scale(0.97) press, 80-100ms, then release
    Form submit:  loading state (spinner), then success or error state

FORM / ACTION FEEDBACK:
    Submit:  button goes into loading state, then success/error state
    Delete:  fade + height collapse, 200-300ms
    Toast:   slide in from edge, 250ms ease-out
    Toggle:  smooth state transition, 200ms

LOADING STATES:
    Skeleton loaders with shimmer animation for content areas.
    Spinner for point actions.
    Progress bar for multi-step operations.

NUMBER ANIMATIONS (for stats/dashboards):
    Count up from 0 when entering viewport.
    Duration: 800-1200ms, ease-out.

TEXT REVEAL (for hero/display text - portfolio, creative, landing pages):
    Word or line clip-path reveal: inset(100% 0 0 0) -> inset(0 0 0 0)
    Duration: 600-900ms per line, stagger lines by 80-120ms.
    OR: opacity + translateY per word, stagger 30-50ms per word.

SCROLL-DRIVEN (for creative/campaign/landing pages):
    Parallax on hero image: translateY at 0.3-0.5x scroll speed
    Section background color transition on scroll
    Sticky nav appearance on scroll (opacity + translateY)
```

### 4.3 Timing and Easing Reference

```text
Hover in/out:              100-200ms,  ease-out
Click/press micro:         80-150ms,   ease-in-out
UI expand/collapse:        200-300ms,  ease-out
Entrance animations:       500-800ms,  ease-out
Page transitions:          300-500ms,  ease-in-out
Text/word reveal:          600-900ms,  cubic-bezier(0.16, 1, 0.3, 1)
Scroll-driven:             continuous, linear or ease-out
Spring/physics hover:      400-600ms,  cubic-bezier(0.34, 1.56, 0.64, 1.0)

Preferred easings:
    ease-out (fast start, soft end):   cubic-bezier(0.0, 0.0, 0.2, 1.0)
    ease-in-out (symmetric):           cubic-bezier(0.4, 0.0, 0.2, 1.0)
    spring-like (slight overshoot):    cubic-bezier(0.34, 1.56, 0.64, 1.0)
    snappy:                            cubic-bezier(0.25, 0.46, 0.45, 0.94)
    expo-out (very snappy):            cubic-bezier(0.16, 1, 0.3, 1)
```

### 4.4 Technology Priority

```text
1. CSS transition           hover, focus, color, simple transform changes
2. CSS animation            repeating or multi-step keyframe sequences
3. IntersectionObserver + CSS class toggle   scroll-triggered entrances
4. Framer Motion (whileInView, motion.div, variants)
                            React/Next.js projects with complex entrance or
                            page transitions - USE THIS freely when the stack
                            supports it, do not avoid it out of fear of weight
5. GSAP + ScrollTrigger     advanced scroll-driven, timeline, pinned sections
                            use for HTML/vanilla JS or when Framer is unavailable
6. Web Animations API       JS-controlled precision animation without a library
7. requestAnimationFrame    canvas, SVG, true frame-level control
```

### 4.5 Forbidden Animation Patterns

```text
- Infinite floating blobs/circles/particles with no functional purpose
- Parallax on every single section simultaneously
- Heavy particle systems as pure backgrounds (tsParticles, Three.js for decoration)
- Animations that delay the user completing a task
- More than 4-5 animated elements competing simultaneously in the same viewport
- Animations that cannot be paused (violates prefers-reduced-motion)
- Durations longer than 2s on interactive/feedback elements
```

### 4.6 prefers-reduced-motion (MANDATORY)

```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 5. Asset Rule - Images from Browser CDN (PREFERRED)

For web projects that need real photography, always use browser-accessible CDN sources directly in `src` attributes. Do NOT skip images or use colored placeholders when real images improve the product.

### 5.1 Preferred Image Sources (use directly via URL, no download needed)

```text
UNSPLASH (high-quality, free, no attribution required for web):
    Base URL: https://images.unsplash.com/photo-{ID}?w=1200&q=80&auto=format&fit=crop
    Example:  https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80

PEXELS (free, high-quality):
    Images.pexels.com CDN - use the direct photo URL from their API/website

PICSUM (placeholder with real photos, good for prototyping):
    https://picsum.photos/seed/{keyword}/{width}/{height}
    Example: https://picsum.photos/seed/fashion/800/600

SPECIFIC CATEGORY SEARCHES on Unsplash:
    Fashion:     search "fashion editorial minimal"
    Interior:    search "interior minimal furniture"
    Food:        search "food photography minimal"
    Tech:        search "technology workspace"
    Nature:      search "landscape mountain trail"
    People:      search "portrait professional"
```

### 5.2 Image Usage Rules

```text
1. Always use a real photo when the section has a visual role (hero, product, feature).
2. Never use a solid-color rectangle as a "placeholder" in a final product.
3. Use object-fit: cover for full-bleed images. Always set width/height.
4. Add alt text that describes the image content, not "image" or "photo".
5. Use loading="lazy" on images below the fold.
6. Unsplash CDN supports query params: ?w=800&q=75&auto=format for optimization.
7. For product images the user hasn't provided: use generate_image tool to
   create a matching visual, or use a clearly marked placeholder.
```

### 5.3 When to Use generate_image Tool

```text
- Custom illustrations or graphics specific to the brand
- Product mockups not available via stock photography
- Unique hero visuals that don't exist on stock sites
- Brand-specific icons or decorative elements
```

---

## 6. Layout and Spacing

### 6.1 Spacing System (use these units, not arbitrary px)

```text
4px   - micro gap (icon to label)
8px   - small internal padding
12px  - small component padding
16px  - standard component padding, small gap
24px  - gap between related elements
32px  - gap between components
48px  - section internal spacing
64px  - between major sections
96px  - between page-level sections on desktop
128px - hero vertical padding
```

### 6.2 Layout Composition

```text
- Max content width: 1200-1440px, centered with margin: auto.
- CSS Grid for page-level layout. Flexbox for component-level.
- Never use fixed pixel heights on content containers (use min-height).
- Section backgrounds: use color variation. Alternate:
  off-white > tinted light brand > white > image-full > white.
- Grid asymmetry: 7:5 or 3:5 column split is more dynamic than 50:50.
- Full-bleed sections (no container width cap) for hero and feature images.
- Oversized typography used as layout element (not just text) is encouraged.
```

---

## 7. Anti-Slop Design Checklist (HARD RULE)

Never produce a UI that matches any of the following. Each item is a failure state:

```text
PALETTE FAILURES:
[ ] Purple-to-blue gradient as primary identity
[ ] Pure black (#000000) background with zero warmth or brand color
[ ] Gray-on-gray: no primary color present anywhere in the UI
[ ] Dark background when product type does not require it

TYPOGRAPHY FAILURES:
[ ] Default browser font (Times New Roman, Arial, bare sans-serif)
[ ] Every element approximately the same font size
[ ] Heading and body in the same weight
[ ] No display/heading font loaded

LAYOUT FAILURES:
[ ] Hero: centered heading + subtext + two buttons + logo strip = generic SaaS
[ ] Three equal-width feature cards always in a row
[ ] Every section is full-width text/image alternating, forever
[ ] Padding is framework/browser default, never intentionally set
[ ] All images are colored placeholder boxes

DECORATION FAILURES:
[ ] Glassmorphism on every card
[ ] Glowing buttons with multiple competing box-shadow layers
[ ] Floating decorative blobs with no informational purpose
[ ] Gradient overlay on every image for no reason

ANIMATION FAILURES:
[ ] Zero animations anywhere (static, dead interface)
[ ] Only one animation: a simple opacity fade on the hero
[ ] Hover states are identical for buttons, cards, links, and icons
[ ] No loading/success/error feedback on form submit

CONTENT FAILURES:
[ ] Colored rectangles instead of real images in a visual product
[ ] Lorem ipsum as placeholder text
[ ] Fake statistics the user never provided
[ ] Generic icon grid with 2-word labels as "features"
```

---

## 8. Icon Rule

Icons are not primary decoration. Use an icon when it:

```text
- Clarifies an action (search, edit, delete, download, filter, external link)
- Aids navigation
- Aids fast scanning of a list or table
- Represents a widely-recognized function
```

Avoid:
```text
- An icon on every heading
- Icon grids with no real function
- Icons only to make the UI look busier
```

Icon-only interactive elements must have an `aria-label`.

Recommended libraries: Lucide Icons, Phosphor Icons, Heroicons, Tabler Icons.

---

## 9. Content Rule

Never fabricate facts to fill the UI:

```text
- No fake testimonials
- No fake statistics or user counts
- No fake company logos
- No fake awards
- No business claims the user never gave
```

Use obvious placeholders: `"[Client Name]"`, `"Add testimonial here"`. Never disguise a placeholder as real data.

