# Ka'Deem Lovelace — IT Portfolio

## Project overview

This repository contains my three-page Information Technology portfolio for KTLD EV 140. The project demonstrates semantic HTML, responsive CSS, accessibility improvements, Gestalt visual-design principles, JavaScript DOM interaction, accessible form validation, dynamic content, and an optional public-API fetch.

## Pages

- `index.html` — home page, career goals, skills, JavaScript interaction, and GitHub API bonus.
- `projects.html` — dynamically generated project cards, search/filter, and add/remove project functionality.
- `about.html` — background, career path, and accessible contact form with JavaScript validation.
- `style.css` — shared responsive and accessible visual design.
- `script.js` — shared JavaScript interactions and validation.

## Accessibility fixes

1. Added a descriptive `alt` attribute to the profile image so screen-reader users receive useful information instead of an unlabeled image.
2. Added a skip link and visible keyboard focus styles so keyboard users can bypass repeated navigation and identify the active control.
3. Added proper form labels, a `fieldset`, a `legend`, and programmatically associated error messages so the contact form is understandable to assistive technology.
4. Added visible DOM error messages instead of `alert()` and added `aria-invalid` when a field fails validation.
5. Added semantic navigation labeling and `aria-current="page"` to identify the current page.
6. Added `aria-live="polite"` regions for dynamic project/API/form status updates.
7. Reworked the color system so primary text and interactive elements use high-contrast combinations. Planned key ratios include #003366 on white (12.61:1), #222222 on white (15.91:1), and #d4af37 on #003366 (6.00:1), all above WCAG AA thresholds for normal text.
8. Added `prefers-reduced-motion` support so users who request reduced motion are not forced to receive smooth scrolling.

### WAVE verification

Run each final page through the WAVE Web Accessibility Evaluation Tool after publishing the updated repository. Record the exact WAVE results and date below before submission:

- `index.html`: WAVE errors: ______ ; contrast errors: ______ ; date checked: ______
- `projects.html`: WAVE errors: ______ ; contrast errors: ______ ; date checked: ______
- `about.html`: WAVE errors: ______ ; contrast errors: ______ ; date checked: ______

The final code was designed to address common issues such as missing image alternatives, weak keyboard focus, inaccessible form feedback, and insufficient contrast. The WAVE output should be documented from the actual final published pages rather than guessed.

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

## Milestone 2 reflection (150–200 words)

Working through the accessibility and visual-design updates changed the way I think about building a website. At first, I mainly focused on whether the pages looked organized and whether the navigation worked. The accessibility review showed me that a website can look good and still create problems for users who navigate with a keyboard or assistive technology. I learned that small details such as descriptive alternative text, visible focus indicators, correctly associated labels, and readable color contrast can make a large difference in usability. I also learned that error messages should be placed in the page where users can easily understand and correct the problem instead of relying on alerts. Applying Gestalt principles helped me become more intentional about spacing and consistency. Proximity makes it easier to understand which content belongs together, while similarity helps users recognize repeated components and their purpose. Overall, this process taught me to consider accessibility, visual hierarchy, and user experience at the same time instead of treating them as separate tasks.

## Testing checklist

- [ ] Run WAVE on all three final pages and record actual results above.
- [ ] Check all links.
- [ ] Test keyboard-only navigation with Tab, Shift+Tab, Enter, and Space.
- [ ] Test the contact form with every field empty.
- [ ] Test an invalid email such as `studentexample.com`.
- [ ] Correct each error and verify that the error disappears.
- [ ] Test project search and project add/remove controls.
- [ ] Test the GitHub API button with internet access.
- [ ] Check the browser console for errors.
- [ ] Test the layout at desktop, tablet, and mobile widths.
- [ ] Publish the repository and submit the public GitHub URL.

## Submission links

GitHub repository: https://github.com/klovla143/ktldev140-1

CodePen: paste the public URL here after creating the JavaScript Fundamentals Practice pen.

Gestalt critique PDF: include the generated PDF from this assignment.

