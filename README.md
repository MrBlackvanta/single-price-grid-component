# Frontend Mentor - Single Price Grid Component solution

This is a solution to the [Single Price Grid Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Known accessibility limitations](#known-accessibility-limitations)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### Screenshot

![](./public/screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/MrBlackvanta/single-price-grid-component)
- Live Site URL: [Netlify](https://vanta-single-price-grid-component.netlify.app)

## Known accessibility limitations

Two color-contrast ratios in the rendered UI fall below WCAG 2.1 AA, and both are intentional — they match the Figma design spec exactly rather than deviating from it.

- **"Sign Up" button.** White text (`#ffffff`) on the bright-yellow background (`hsl(71, 73%, 54%)`) yields a contrast ratio of ~1.83:1, below the 4.5:1 required for normal-size body text under WCAG AA.
- **"per month" label.** White text at 50% opacity on the cyan card background drops the effective contrast ratio below the 4.5:1 AA threshold for supplementary text.

Both values come from the Figma spec for this challenge. In a real product I'd raise these with design before shipping; for this Frontend Mentor build, fidelity to the provided design takes precedence. The price itself (`$29.00`) and the "per month" context are both announced by screen readers regardless, so the issue is sighted low-vision users only.

### Built with

- React 19 + Vite 8
- TypeScript
- Tailwind CSS v4
- Mobile-first

- **`focus-visible` `ring-offset` matches the background**, not the ring.
- **Extract `@utility` presets only for patterns used ≥ 2×.** Single-use utilities are just indirection.

## Author

- UpWork - [Abdelrhman Abdelaal](https://upwork.com/freelancers/~01f0a9479696b61f49)
- Frontend Mentor - [@MrBlackvanta](https://www.frontendmentor.io/profile/MrBlackvanta)
- LinkedIn - [@abdelrhman-vanta](https://www.linkedin.com/in/abdelrhman-vanta/)
