# PRD Template (Micro & Full)

Read this when entering Step 9 (Generate PRD). Choose Micro PRD or Full PRD per the "Scaling the Workflow" table in SKILL.md.

Writing rules for both PRD types:
- No em dash character ("—"). Use `-`, `:`, `.`, `,`, or plain sentences.
- Never include invented data (statistics, testimonials, customer names, etc).
- Tag requirements with their category when it needs clarifying: Explicit / Inferred / Assumption.
- Clear, concrete language, no filler.
- Responsive behavior on mobile AND desktop must always be part of the requirements/acceptance criteria, even in a Micro PRD, since it is a mandatory hard rule.

---

## Micro PRD (for small-to-medium tasks)

Use this short format, 5-10 lines is enough:

```text
Goal         : [what this change/feature is meant to achieve]
Requirements : [bullet list, tag (Explicit)/(Inferred)/(Assumption) when it needs clarifying]
Scope        : [files/components/pages affected]
Out of scope : [what is intentionally not being done, if relevant]
Acceptance   : [1-3 concrete criteria that mark the task done, including a
                mobile + desktop check]
```

Example (for "add a search feature to the product list page"):

```text
Goal         : User can search products by name without reloading the page.
Requirements :
  - Search input above the product list (Explicit)
  - Real-time filtering while typing, with debounce (Inferred, to avoid
    hurting performance)
  - "No products found" message when the result is empty (Inferred)
Scope        : ProductList component, add a new SearchBar component.
Acceptance   :
  - Typing a product name filters the list by substring match
  - Empty results show a clear message
  - No regression to the existing category filter
  - Search bar and results are usable and correctly laid out on both
    mobile and desktop
```

---

## Full PRD (for large tasks/new products)

Use the following 21 sections. Keep each section short and concrete, no need to pad it if the information is simple. A section irrelevant to this product type can say "Not relevant for this product" with a brief reason.

```text
1.  Product Overview
    One or two paragraph summary: what the product is, who it's for,
    its main goal.

2.  Problem Statement
    The real problem being solved, based on what the user said, not an
    assumed problem the user never mentioned.

3.  Product Goal
    The end result the user/business wants to achieve.

4.  Target Users
    Based on what the user provided. If not stated, write a reasonable
    generic profile for this product type and tag it (Assumption).

5.  User Needs
    Concrete needs the target user has from this product.

6.  Core Features
    List of main features, ordered by priority. Tag each
    (Explicit)/(Inferred).

7.  Page / Screen Structure
    List of pages/screens and what each one does.

8.  User Flows
    Step-by-step flow for the main usage scenarios.

9.  Functional Requirements
    What the system must be able to do, written as verifiable bullet
    points.

10. Non-Functional Requirements
    Performance, basic security, scalability appropriate to the
    product (don't over-scope this for a small product).

11. Design Direction
    See references/design-guidelines.md. State the design priorities
    for this product type and the visual direction (typography, palette,
    composition) without falling into generic AI patterns.

12. Responsive Behavior (MANDATORY)
    Explicit behavior on mobile and desktop (and tablet if relevant) for
    every major element: navigation, layout, typography, forms, images,
    tables. This section can never be skipped or marked "not applicable".

13. Interaction & Animation
    Animations/transitions that serve a function (hover, feedback, page
    transition, etc), never decoration without purpose.

14. Accessibility
    Minimum accessibility needs: semantic HTML, keyboard nav, labels,
    contrast, alt text.

15. SEO
    Only for public-facing products. Write "Not relevant" for an
    internal tool.

16. Technical Architecture
    The stack in use (from workspace-detection), folder structure,
    component pattern, state management (only if actually needed),
    required integrations.

17. Data Requirements
    What data needs to be stored/fetched, where it comes from (user
    input, API, database), basic schema if relevant.

18. Asset Requirements
    Images/icons/fonts needed, which already exist in the project,
    which need to be found or created.

19. Edge Cases
    Uncommon conditions that must be handled: empty input, errors, slow
    loading, data not found, etc.

20. Acceptance Criteria
    Concrete, verifiable criteria that mark this feature/product as done
    and correct. Must explicitly include a mobile + desktop responsive
    check.

21. Assumptions
    List of every Assumption made while writing this PRD, so the user
    can correct any that are wrong.
```

After the PRD is written, move on to Steps 10-13 in SKILL.md (Design Direction, Interaction, Technical Architecture, Acceptance Criteria) before starting implementation.
