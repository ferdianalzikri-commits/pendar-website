---
name: pendar-website-development
description: Guidelines for developing the Pendar Sinergi Utama website using Astro, CSS/SCSS/Tailwind, and performance-oriented animation tools.
---

# Pendar Website Development Skill
This file defines how the coding agent should work on the Pendar website project: lightweight, performance-first, responsive, animation-conscious, and strict about not changing anything outside the requested scope.

## Project Context
The goal is to translate a custom website design for Pendar Sinergi Utama into a real, production-ready, lightweight, and high-performance website.

### Recommended Tech Stack
- **Framework**: Astro
- **Styling**: Vanilla CSS, SCSS, or Tailwind CSS (only if explicitly requested)
- **Animation**: GSAP ScrollTrigger (only where necessary)
- **Smooth Scrolling**: Lenis (only if needed/requested and does not harm performance)
- **JavaScript**: Minimal vanilla JS or lightweight modules (avoid heavy frontend frameworks unless explicitly requested)
- **Dependencies**: Keep external dependencies to an absolute minimum.

---

## Core Working Principles

### 1. Low Token Consumption
- Keep all responses concise and focused on execution.
- Do not explain basic concepts unless asked.
- Do not rewrite large files unless necessary. Show only the changed code or relevant file sections when possible.
- Avoid repeating previous context.
- Ask only essential, high-impact questions.

### 2. No Unnecessary Refactoring
- Do not refactor files, components, naming conventions, structure, layout, copy, or styling unless explicitly requested by the user.
- Do not attempt to "improve" things outside the current task scope.
- Do not replace working code just because there is another preferred approach.
- Preserve the current visual direction, layout, animation concept, and content hierarchy.
- Every change must be directly related to the user's specific request.

### 3. Performance-First Implementation
- Ensure smooth performance across desktop, tablet, and mobile, prioritizing stability on mid-range devices.
- Keep JavaScript footprint minimal.
- Avoid animations that cause layout shifts, excessive repaint, or high CPU/GPU usage.
- Prefer CSS transitions/animations over JavaScript animation where possible.
- Use GSAP ScrollTrigger only for sections that require scroll-based timeline animations.
- Avoid animating expensive properties (e.g., `width`, `height`, `top`, `left`, `filter`, `box-shadow`). Prefer GPU-accelerated properties (`transform` and `opacity`).
- Lazy-load images and heavy assets.
- Use optimized image formats (WebP, AVIF) and specify dimensions to prevent layout shifts.
- Respect user system settings such as `prefers-reduced-motion`.
- Pause or reduce animations when not visible in the viewport.
- Properly clean up animation/scroll instances when components mount/unmount.

### 4. Responsive Quality
- Deliver flawless layouts across:
  - **Desktop** (1200px+)
  - **Laptop** (1024px - 1199px)
  - **Tablet** (768px - 1023px)
  - **Mobile** (320px - 767px)
- Always check layout behavior at common breakpoints; mobile should never be an afterthought.
- Strictly avoid horizontal overflow (`overflow-x: hidden` should not be a lazy fix for bad layout design).
- Keep interactive elements (buttons, navigation link list, cards) fully tap-accessible on touch devices (minimum touch target of 44x44px).
- Simplify or disable animations on mobile to maintain usability and performance.

### 5. Astro Project Rules
- Organize pages and sections using modular Astro components. Keep them simple and avoid over-engineering.
- Use semantic HTML (e.g., `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Keep CSS scoped within components unless defining global tokens.
- Avoid unnecessary client-side hydration. Use `client:*` directives only when client-side interactivity is absolutely required. Static content must remain static.
- Isolate interactive behavior to small, vanilla JS scripts.
- Prefer Astro's native image optimization components (`<Image />` or `<Picture />`).

### 6. Animation Rules
- Use animations to support and enhance the design, not dominate it.
- Scroll-triggered product or feature sections may use GSAP ScrollTrigger.
- Use Lenis only if smooth scrolling is requested and verified not to degrade performance.
- Avoid nesting complex scroll animations.
- Do not break native scroll behaviors (e.g., scroll-snapping, keyboard navigation).
- Always include mobile fallbacks (simplified static state or basic transitions).
- Include cleanup logic if scripts can run or initialize multiple times (e.g., during SPA transitions).

### 7. Code Style
- Write clean, readable, and highly maintainable code.
- Use clear, descriptive file and component names.
- Avoid unnecessary abstractions or overly clever code. Keep structure accessible for a designer-developer workflow.
- Write comments only to clarify non-obvious hacks, formulas, or complex animation logic. Do not write comments for self-explanatory code.

### 8. Design Preservation
- Strictly follow the existing Pendar website design system (spacing, typography, color palettes, section rhythm, button styles, cards).
- Do not change content copy or icons unless asked.
- Use clear placeholders for missing assets and note them briefly to the user.

### 9. Accessibility (a11y) & Usability
- Use semantic HTML landmarks.
- Ensure all buttons and links are keyboard-navigable and have visible focus states.
- Maintain a high level of text contrast against backgrounds.
- Provide clean, easy-to-use navigation layouts on mobile (e.g., accessible drawer menus).
- Avoid trapping scroll or keyboard focus.
- Use descriptive `alt` text for meaningful images, and empty `alt=""` for decorative ones.

### 10. Energy-Efficient Behavior
- Avoid background polling, active loops, or constantly running JavaScript handlers.
- Pause animations when they are out of the viewport (e.g., using `IntersectionObserver`).
- Minimize event listeners and use passive listeners where appropriate (e.g., scroll, touch).
- Debounce or throttle resize and scroll handlers.
- Prefer browser-native behaviors (e.g., CSS smooth scrolling, native dialogs) before building custom JS solutions.
- Maintain a small initial bundle size.

### 11. When Editing Files
1. First inspect the relevant file.
2. Modify only the necessary parts.
3. Do not rewrite unrelated sections or modify global formatting unless requested.
4. Provide a brief explanation of changes.
5. Highlight any risks, assumptions, or areas requiring testing.

### 12. Before Adding a Dependency
- Clearly explain why the dependency is necessary.
- Verify if the same behavior can be achieved using vanilla CSS, standard Astro APIs, or lightweight native JavaScript.
- Obtain explicit user approval before installing large packages.

---

## Testing & Quality Checklist
Verify the following after making meaningful changes:
- [ ] **Desktop Layout**: Layout behaves correctly at standard desktop sizes.
- [ ] **Tablet Layout**: Breakpoints adapt cleanly; no text clipping.
- [ ] **Mobile Layout**: Responsive layout, legible text, and touch targets meet minimum sizes.
- [ ] **No Horizontal Scroll**: Scroll container is locked to vertical viewport.
- [ ] **Navigation Behavior**: Menus open/close properly and are keyboard navigable.
- [ ] **Scroll & Animation Performance**: Animation runs smoothly (60fps target) on mid-range devices.
- [ ] **Reduced Motion**: Fallbacks trigger correctly when `prefers-reduced-motion` is active.
- [ ] **Image Loading**: Media assets lazy-load and use modern formats (WebP/AVIF).
- [ ] **Console check**: No errors, warnings, or infinite loops in browser console.
