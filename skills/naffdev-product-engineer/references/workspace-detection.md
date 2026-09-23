# Workspace Detection & Stack Decision

Read this when entering Steps 3-7 (Inspect Workspace, Detect Existing Project, Decide Extend vs New).

## 1. Inspection Checklist

Check for the presence of the following files/folders at the project root (and one level down where relevant):

```text
Package manager / dependencies:
    package.json, package-lock.json, pnpm-lock.yaml, yarn.lock, bun.lockb
    composer.json, composer.lock
    requirements.txt, pyproject.toml
    Gemfile, Gemfile.lock
    go.mod

Framework config:
    next.config.*        -> Next.js
    vite.config.*         -> Vite (React/Vue/Svelte, check dependencies)
    astro.config.*        -> Astro
    nuxt.config.*         -> Nuxt
    svelte.config.*       -> SvelteKit
    angular.json           -> Angular
    artisan, routes/web.php -> Laravel
    application/config     -> CodeIgniter
    manage.py              -> Django
    app.py / wsgi.py       -> Flask

Language & tooling:
    tsconfig.json          -> TypeScript
    jsconfig.json          -> JavaScript with path aliases

Project structure:
    src/, app/, pages/, components/, lib/, public/, assets/
    routes/, controllers/, models/, views/
    styles/, css/, tailwind.config.*, postcss.config.*

Docs & environment:
    README.*
    .env.example, .env
```

## 2. Questions the Inspection Must Answer

```text
- Is there already a running project (not just an empty folder)?
- What framework is used?
- What language (JS/TS/PHP/Python/etc)?
- What package manager (npm/pnpm/yarn/bun/composer/pip)?
- What styling system (Tailwind, CSS Modules, styled-components, plain CSS, SCSS)?
- What component pattern is used (functional, class, atomic design, etc)?
- What routing approach (file-based, config-based, manual)?
- Is there already a design system/tokens (centralized colors, spacing, type)?
- Are there existing assets (images, icons, fonts) that can be reused?
- Is there existing business logic relevant to the new requirement?
- Is there an existing API integration?
- Is there an existing database/ORM integration?
```

These answers feed directly into the PRD's "Technical Architecture" section and determine the code patterns to follow during implementation.

## 3. Stack Decision Matrix

```text
A running project EXISTS
    -> MUST extend this project, whatever its stack is.
    -> Existing Project Stack outranks every other consideration.
    -> Forbidden: swapping the framework, migrating technology, major
       restructuring, rewriting the app, without an explicit user request.

NO project exists (empty workspace / only unrelated files)
    -> Did the user explicitly name a technology (framework/language/backend)?
        YES -> Use exactly what the user named.
               Example keyword -> stack mapping:
                 "use Express"      -> Express.js
                 "use Laravel"      -> Laravel
                 "use CodeIgniter"  -> CodeIgniter
                 "use Vue"          -> Vue (+ Vite unless stated otherwise)
                 "use Astro"        -> Astro
                 "use Django"       -> Django
                 "use Flask"        -> Flask
                 "use Nuxt"         -> Nuxt
                 "use Svelte"       -> SvelteKit
        NO  -> Use the default: Next.js + TypeScript + App Router.
```

## 4. Rules for Modifying an Existing Project

When extending an existing project, preserve the following unless the requirement explicitly calls for a change:

```text
Framework
Language
Package Manager
Routing pattern
Existing Architecture (folder structure, layering)
Design System (colors, typography, spacing already in use)
Component Pattern (how components are written and organized)
Dependencies (don't add a new dependency for something an existing one
    can already do)
Business Logic unrelated to the new requirement
Naming Convention
Folder Convention
```

If the new requirement genuinely needs a change to one of the above (for example, adding real state management because state complexity has meaningfully grown), make the smallest possible change and explain the reasoning in the PRD's "Technical Architecture" section.
