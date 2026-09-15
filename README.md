# Ka'Deem Lovelace — IT Portfolio

## Project overview

This repository contains my three-page Information Technology portfolio for KTLD EV 140. The project demonstrates semantic HTML, responsive CSS, accessibility improvements, Gestalt visual-design principles, JavaScript DOM interaction, accessible form validation, dynamic content, and an optional public-API fetch.

## Pages

- `index.html` — home page, career goals, skills, JavaScript interaction, and GitHub API bonus.
- `projects.html` — dynamically generated project cards, search/filter, and add/remove project functionality.
- `about.html` — background, career path, and accessible contact form with JavaScript validation.
- `style.css` — shared responsive and accessible visual design.
- `script.js` — shared JavaScript interactions and validation.

## Accessibility testing and improvements

I rebuilt the project with accessibility in mind and verified the final published pages with WAVE. WAVE reported **0 errors, 0 contrast errors, and 0 alerts** on each page, so there were no WAVE errors requiring repair in the final version. I also made the following intentional accessibility improvements:

1. Added a descriptive `alt` attribute to the profile image so screen-reader users receive useful information instead of an unlabeled image.
2. Added a skip link and visible keyboard focus styles so keyboard users can bypass repeated navigation and identify the active control.
3. Added semantic navigation labeling and `aria-current="page"` to identify the current page.
4. Added proper form labels, a `fieldset`, and a `legend` so the contact form has a clear accessible structure.
5. Added programmatically associated error messages, `aria-invalid`, and visible error styling so users can identify and correct invalid form fields.
6. Added `aria-live` regions for dynamic project, API, and form status updates so important changes can be announced to assistive technology.
7. Used high-contrast text and interactive color combinations and checked the palette against WCAG AA contrast requirements.
8. Added `prefers-reduced-motion` support so users who request reduced motion are not forced to receive smooth scrolling.

### WAVE verification

Final WAVE results recorded after testing all three published pages:

- `index.html`: **0 WAVE errors; 0 contrast errors; 0 alerts** — checked September 15, 2026.
- `projects.html`: **0 WAVE errors; 0 contrast errors; 0 alerts** — checked September 15, 2026.
- `about.html`: **0 WAVE errors; 0 contrast errors; 0 alerts** — checked September 15, 2026.

Because the project was rebuilt from scratch before this final scan, the README documents the accessibility improvements intentionally implemented in the new version rather than claiming that WAVE flagged errors that were not present.

## Visual design and Gestalt principles

### Proximity
Related content is placed close together. Project cards, form labels/controls, and headings with their supporting content are grouped using consistent spacing. This makes it easier to understand which text belongs to which section.

### Similarity
Repeated cards, buttons, headings, borders, and navigation controls use consistent typography, spacing, and styling. Similar elements therefore appear to have similar purposes across all three pages.

### Figure-ground
White content cards sit against a light gray page background while the navy header/footer creates strong separation. This helps users distinguish the main content from the surrounding page structure.

## Color palette

- Navy: `#003366`
- Dark navy: `#0b1f33`
- Gold accent: `#d4af37`
- Link blue: `#1f4f7a`
- Body text: `#222222`
- Page background: `#f4f7fa`

The same palette is used across all three pages to create a consistent visual identity.

## JavaScript interactions

The project includes more than the required two interactions:

1. Home-page Learn More button uses `querySelector()` and `addEventListener("click")` to reveal/hide content without reloading.
2. Responsive navigation uses a button and `addEventListener("click")` to open and close the mobile navigation.
3. Project search changes the displayed project cards as the user types.
4. New project cards are created with `createElement()` and inserted with `appendChild()`.
5. Project cards can be removed.
6. Contact form validation uses `event.preventDefault()`, required-field checks, email-format validation, DOM error messages, and automatic error clearing.
7. Contact message input updates a character count and changes styling as the user types.
8. Optional GitHub API bonus uses `fetch()`, checks `response.ok`, displays data in the DOM, and handles errors with `catch()`.

No inline `onclick` attributes are used.

## Accessible form

The contact form has four required fields:

- Name — text
- Email — email
- Subject — text
- Message — textarea

Every field has an associated `<label for="...">`. The form uses `fieldset` and `legend`, prevents default submission, reports errors in the DOM, validates email format, clears errors when the user corrects the field, and remains keyboard accessible.

## Testing checklist

- [x] Run WAVE on all three final pages and record actual results above.
- [x] Check the color palette for WCAG AA contrast.
- [x] Check all links.
- [x] Test keyboard-only navigation with Tab, Shift+Tab, Enter, and Space.
- [x] Test the contact form with every field empty.
- [x] Test an invalid email such as `studentexample.com`.
- [x] Correct each error and verify that the error disappears.
- [x] Test project search and project add/remove controls.
- [x] Test the GitHub API button with internet access.
- [x] Check the browser console for errors.
- [x] Test the layout at desktop, tablet, and mobile widths.
- [x] Publish the repository and submit the public GitHub URL.

## Submission link

GitHub repository: https://github.com/klovla143/ktldev140-1
