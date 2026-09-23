# Self-Review Checklist

Read this when entering Step 16 (Self-review), after implementation is done and before declaring the task complete to the user.

Run through every category below. If any item fails, fix it, then re-run that category (and any other category the fix might affect) before continuing.

```text
PRODUCT
[ ] The PRD's Problem Statement is genuinely solved by the implementation
[ ] Every main User Flow can be completed start to finish
[ ] Every Core Feature (Explicit + Inferred) actually works

DESIGN
[ ] Design matches the product type's priorities (design-guidelines.md
    section 1)
[ ] No pattern from the Anti-Slop list appears (design-guidelines.md
    section 2)
[ ] Visual hierarchy is clear: important elements stand out
[ ] Layout has an intentional composition, not framework defaults

INTERACTION
[ ] Every animation has a stated function (not just decoration)
[ ] All states (loading, empty, error, success, disabled) are handled and
    clearly visible to the user
[ ] Feedback exists for important actions (submit, delete, save, etc)

PERFORMANCE
[ ] No dependency was added without a genuine need
[ ] Images/assets are properly optimized
[ ] Animations use lightweight techniques per design-guidelines.md
    section 3's priority order
[ ] No disruptive layout shift while loading

CODE
[ ] Code is readable by another developer without extra explanation
[ ] Naming is clear and consistent (not x, data2, Component123)
[ ] Components are split for a clear reason, not excessively or all
    crammed into one huge file
[ ] No over-engineering (heavy state management/libraries the feature's
    scale doesn't need)
[ ] No unrelated files/sections were changed

ACCESSIBILITY
[ ] Interactive elements are reachable by keyboard
[ ] Focus states are clearly visible
[ ] Form fields have properly associated labels
[ ] Semantic HTML is used (not <div> for everything)
[ ] Icon-only buttons have an accessibility label
[ ] Information is never conveyed by color alone

RESPONSIVE (MANDATORY, checked on BOTH mobile and desktop, no exceptions)
[ ] Verified on a mobile viewport (~360-430px width): layout, navigation,
    typography, spacing, forms, images all correct
[ ] Verified on a desktop viewport (~1280px+ width): layout, navigation,
    typography, spacing, forms, images all correct
[ ] Verified on tablet width when the layout is complex enough to risk
    breaking between mobile and desktop
[ ] No horizontal scroll from unhandled overflow, no clipped or
    overlapping content at either extreme
[ ] Touch targets are large enough to tap reliably on mobile (~44x44px
    minimum)
[ ] If this item is not checked, the task CANNOT be marked done

REQUIREMENTS
[ ] Every Acceptance Criterion in the PRD is met
[ ] Every Assumption made is still consistent with the final
    implementation (adjust if an assumption turned out to no longer apply)
[ ] No em dash character ("—") anywhere in code, comments, or generated
    content
[ ] No fake content/data anywhere in the UI
```

"The build succeeded" or "no errors" alone is NEVER enough to call a task done. Every category above must pass, and the Responsive category is a hard blocker: skipping the mobile or desktop check means the task is not finished.
