# Noor Sprouts Website Documentation

## Overview
This project is a modern, responsive landing page for **Noor Sprouts**, a kids educational platform focused on fun Islamic learning.

The website is built with:
- `HTML` for structure
- `CSS` for styling and responsive layout
- `JavaScript` for small interactive effects (scroll reveal animation)

## Project Files
- `index.html` - Main page structure and all website sections
- `style.css` - All styling, colors, layout, spacing, responsiveness, hover states
- `script.js` - Scroll reveal animation logic
- `logo.png` - Brand logo used in navbar, hero, and footer

## Website Sections
The landing page includes:
1. **Navbar**
   - Brand logo and name
   - "Get Started" button
2. **Hero Section**
   - Centered logo
   - Main headline: `Learn, Grow & Shine 🌟`
   - Subtitle and CTA button
3. **Features Section**
   - Quran Learning
   - Arabic Basics
   - Fun Activities
4. **About Section**
   - Short platform description for parents
5. **Testimonials Section**
   - Parent feedback cards
6. **Call-To-Action Section**
   - Encourages user sign-up with `Join Now` button
7. **Footer**
   - Brand
   - Quick links
   - Social links

## Design System
The UI style is playful and child-friendly with:
- Bright soft colors (`yellow`, `green`, `blue`, `white`)
- Rounded corners
- Soft shadows
- Smooth hover and reveal transitions
- Mobile-first responsive layout

Main color variables are defined in `style.css` under:
- `--yellow`
- `--green`
- `--blue`
- `--white`
- `--ink`
- `--muted`
- `--bg`

## How to Run the Website
1. Keep all project files in the same folder.
2. Open `index.html` in any browser.

No build tools or dependencies are required.

## Customization Guide

### 1) Change Logo
- Replace `logo.png` with your new file (same name), or
- Update image paths in `index.html` where `src="logo.png"` appears.

### 2) Change Text Content
- Open `index.html`
- Edit headings, paragraphs, button labels, testimonial text as needed

### 3) Change Colors
- Open `style.css`
- Update the color values in `:root`

### 4) Add / Remove Feature Cards
- In `index.html`, locate the Features section (`feature-grid`)
- Duplicate or remove a `<article class="card feature-card reveal"> ... </article>`

### 5) Update Links
- In footer and navbar buttons, replace `href="#"` with real URLs/pages.

## Responsive Behavior
- The layout is optimized for mobile screens first.
- At wider screens (`min-width: 700px`), feature and testimonial cards switch to multi-column grid layout.

## Accessibility Notes
The page includes:
- Semantic HTML sections (`header`, `main`, `section`, `footer`, `nav`)
- `alt` text for logo images
- `aria-label` attributes for better screen reader support
- Focus styles for buttons

## JavaScript Behavior
`script.js` uses `IntersectionObserver` to animate elements with class `.reveal` when they enter the viewport.

If you want to disable reveal animations:
- Remove `reveal` classes from `index.html`, or
- Remove/comment the code in `script.js`.

## Suggested Next Improvements
- Add real destination links for navbar/footer actions
- Connect CTA buttons to signup page
- Add a contact form section
- Add SEO meta tags (description, Open Graph)
- Optimize `logo.png` size for faster loading

## License
This documentation is provided for project use and customization.
