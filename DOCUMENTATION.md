# Noor Sprouts SPA Documentation

## Overview
This project is a modern, colorful, kid-friendly Single Page Application (SPA) landing page for **Noor Sprouts**, built for a children's educational platform.

The application is built with:
- `HTML5` for semantic structure
- `CSS3` (no frameworks) for visual design and responsive layout
- `Vanilla JavaScript` for SPA navigation and interactivity

No external libraries or build tools are used.

## Project Files
- `index.html` - Contains all SPA sections and semantic page structure
- `styles.css` - Full design system, layout, responsiveness, animations, and components
- `script.js` - SPA section switching, active nav states, mobile menu logic, form validation
- `regestration.html` - this page ment to be for login and signin form
- `logo.png` - Brand/logo image used in navigation, hero, and footer

## SPA Sections
All sections live in one HTML file and are toggled through JavaScript (no page reload):

1. `#home` (default visible)
2. `#about`
3. `#courses`
4. `#blog`
5. `#contact`

The class `.app-section.active` controls which section is currently displayed.

## Navigation Behavior
The navbar includes:
- Logo (`/logo.png`)
- Links: Home, About, Courses, Blog, Contact
- CTA regestration link: `Get Started`
- Mobile hamburger toggle

When a nav item is clicked:
- The correct section is shown using JS
- Other sections are hidden
- The active nav link is highlighted
- URL hash updates without reloading
- View scrolls smoothly to the top of the active section

## Home Section Content
The Home area contains:
- Hero block with logo, title, subtitle, and `Start Learning` CTA
- Features cards:
  - Quran Learning
  - Arabic Basics
  - Fun Activities
- About preview with `Learn More`
- Testimonials cards
- Final CTA block with `Join Now`

## About Section
Includes mission, vision, and parent-focused explanation of platform goals and values.

## Courses Section
Displays a responsive course card grid with:
- Image placeholder
- Title
- Description
- Action button

## Blog Section
Displays blog preview cards with:
- Image placeholder
- Title
- Short excerpt
- `Read More` button

## Contact Section
Includes a contact form with:
- Name
- Email
- Message

Validation is handled in `script.js`:
- Name must be at least 2 characters
- Email must match a valid email pattern
- Message must be at least 10 characters

If valid, a success message is shown and the form resets.

## Design System
The design uses CSS variables in `:root` (inside `styles.css`) for color, spacing, radius, and shadows.

Primary visual style:
- Soft bright palette (yellow, green, blue, white)
- Rounded corners and soft card shadows
- Smooth button/card hover transitions
- Playful but clean modern layout
- Mobile-first responsive behavior

## Icon library
- Font Awesome

## Animations
Implemented animations include:
- Section fade transition when switching SPA sections
- Fade-in reveal on visible content elements
- Interactive hover feedback for cards, links, and buttons

Reveal effects use `IntersectionObserver` on `.fade-in` elements.

## Responsive Behavior
Layout is mobile-first and scales up with media queries:
- `min-width: 760px`:
  - Desktop nav replaces hamburger menu
  - Grids expand to multi-column layouts
- `min-width: 1024px`:
  - Courses and blog sections use wider multi-column grids

## Accessibility Notes
Current accessibility-friendly features include:
- Semantic tags (`header`, `main`, `section`, `nav`, `footer`, `form`)
- `alt` text for images
- `aria-label` and `aria-controls` for navigation controls
- `aria-live` for form success feedback
- Keyboard-focus compatible controls

## How to Run
1. Keep all files in the same project folder.
2. Open `index.html` in any modern browser.

No installation, npm packages, or server setup is required.

## Customization Guide

### Update Text
Edit content directly in `index.html` for headings, descriptions, testimonials, cards, and button labels.

### Update Theme Colors
Edit CSS variables in `styles.css` under `:root`.

### Add New SPA Section
1. Add a new `<section id="new-id" class="app-section" data-section>...</section>` in `index.html`
2. Add matching nav items with `data-nav="new-id"`
3. Add `"new-id"` to the `sectionIds` array in `script.js`

### Update Form Rules
Adjust checks in `validateContactForm()` inside `script.js`.

## Future Enhancements
- Replace placeholder blocks with real course/blog images
- Connect buttons to real backend or enrollment flow
- Persist last visited section in local storage
- Add multilingual support (e.g., English/Arabic toggle)
- Add SEO metadata and social sharing tags

###Note: to make the photos work just add `/noor_sprouts` before any of the src 
## License
This documentation is for project usage, maintenance, and customization.
