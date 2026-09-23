# Self-Review Checklist

Read this when entering Step 16 (Self-review), after implementation is done and before declaring the task complete to the user.

Run through every category below. If any item fails, fix it, then re-run that category (and any other category the fix might affect) before continuing.

```text
PRODUCT
[ ] The PRD's Problem Statement is genuinely solved by the implementation
[ ] Every main User Flow can be completed start to finish
[ ] Every Core Feature (Explicit + Inferred) actually works

DESIGN (hard blockers - same status as a broken build)
[ ] Design matches the product type's priorities (design-guidelines.md section 1)
[ ] No pattern from the Anti-Slop checklist appears (design-guidelines.md section 7)
[ ] Visual hierarchy is clear: important elements stand out, not everything equal weight
[ ] Layout has an intentional composition, not framework/template defaults
[ ] Color: a real, saturated primary color is present and defines the brand identity
    (NOT gray-on-gray, NOT purple-to-blue AI gradient as the only color)
[ ] Dark background was ONLY chosen if the product type genuinely requires it
    (code editor, media player, night tool) or the user explicitly asked.
    Otherwise: light mode is mandatory.
[ ] Typography: a real named font is loaded (not browser default Times/Arial/sans-serif)
[ ] Type scale is dramatic: headings are clearly larger and heavier than body text
[ ] Font pairing is intentional: display font contrasts the body font in style/weight
[ ] Real images are used (Unsplash CDN or generated) in visual sections, not color blocks

INTERACTION (hard blockers - same status as a broken build)
[ ] Every button has a hover animation (scale + color/shadow, NOT just color change alone)
[ ] Every card has a hover animation (translateY lift + shadow increase)
[ ] Every link has a hover animation (underline slide or color fade)
[ ] Entrance animations are present: key sections/elements animate in on scroll/load
[ ] Button click/press has micro-interaction (scale-down press, ~80-100ms)
[ ] Form submit shows loading state, then a visible success or error state
[ ] All states (loading, empty, error, success, disabled) are handled and visible
[ ] Feedback exists for all important actions (submit, delete, save, toggle)
[ ] Animations use correct timing per design-guidelines.md section 4.3
[ ] prefers-reduced-motion media query is present in the CSS

PERFORMANCE
[ ] No dependency was added without a genuine need
[ ] Images use Unsplash CDN params (?w=&q=&auto=format) or are optimized
[ ] Animations use appropriate technology per design-guidelines.md section 4.4
[ ] No disruptive layout shift while loading
[ ] Below-fold images use loading="lazy"

CODE
[ ] Code is readable by another developer without extra explanation
[ ] Naming is clear and consistent (not x, data2, Component123)
[ ] Components are split for a clear reason, not excessively or all crammed into one file
[ ] No hardcoded magic numbers or colors without a variable/token
[ ] No unused imports, no commented-out code blocks in final output
[ ] No over-engineering (heavy state management/libraries the feature's scale doesn't need)
[ ] No unrelated files/sections were changed

ACCESSIBILITY
[ ] Interactive elements are reachable by keyboard
[ ] Focus states are clearly visible
[ ] Form fields have properly associated labels
[ ] Semantic HTML is used (not <div> for everything)
[ ] Icon-only buttons have an accessibility label
[ ] Information is never conveyed by color alone
[ ] All images have meaningful alt text (not "image" or "photo")

RESPONSIVE (MANDATORY, checked on BOTH mobile and desktop, no exceptions)
[ ] Verified on a mobile viewport (~360-430px width): layout, navigation,
    typography, spacing, forms, images all correct
[ ] Verified on a desktop viewport (~1280px+ width): layout, navigation,
    typography, spacing, forms, images all correct
[ ] Verified on tablet width when the layout is complex enough to risk
    breaking between mobile and desktop
[ ] No horizontal scroll from unhandled overflow, no clipped or
    overlapping content at either extreme
[ ] Touch targets are large enough to tap reliably on mobile (~44x44px minimum)
[ ] If this item is not checked, the task CANNOT be marked done

REQUIREMENTS
[ ] Every Acceptance Criterion in the PRD is met
[ ] Every Assumption made is still consistent with the final implementation
[ ] No em dash character ("—") anywhere in code, comments, or generated content
[ ] No fake content/data anywhere in the UI
[ ] No lorem ipsum anywhere in the UI
```

"The build succeeded" or "no errors" alone is NEVER enough to call a task done.
There are THREE hard blockers - all must pass before the task is finished:
1. RESPONSIVE: verified on mobile and desktop
2. DESIGN: real font, real color, intentional layout, real images
3. INTERACTION: hover animations on all interactive elements, entrance animations present
Skipping any of these three means the task is not done.

