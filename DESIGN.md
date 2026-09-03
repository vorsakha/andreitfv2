---
name: Andrei Ferreira
description: A quiet, technical workbench for a full-stack engineer and tool builder.
colors:
  accent: '#315c8a'
  accent-soft: '#b8cbe0'
  canvas: '#f6f7f8'
  ink: '#20242a'
  body: '#4f5964'
  muted: '#626a73'
  faint: '#7a828b'
  rule: '#d6dadf'
typography:
  display:
    fontFamily: 'Geist, Arial, sans-serif'
    fontSize: 'clamp(2.85rem, 6.2vw, 5.4rem)'
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: '-0.04em'
  title:
    fontFamily: 'Newsreader, Georgia, serif'
    fontSize: 'clamp(1.5rem, 3vw, 1.85rem)'
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: '-0.018em'
  body:
    fontFamily: 'Geist, Arial, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: 'Geist Mono, monospace'
    fontSize: '0.7rem'
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: '0.11em'
rounded:
  control: '999px'
spacing:
  page-x: 'clamp(1.25rem, 5vw, 5rem)'
  section-y: 'clamp(4.5rem, 10vw, 8rem)'
  row-y: '1.5rem'
components:
  cv-link:
    textColor: '{colors.ink}'
    padding: '0'
    typography: '{typography.body}'
  text-link:
    textColor: '{colors.ink}'
    typography: '{typography.body}'
---

# Design System: Andrei Ferreira

## Overview

**Creative North Star: "The Workbench with a Thesis"**

The page feels like a careful engineer's notebook opened on a clean desk. Large, plain-spoken type establishes the thesis. Fine rules and compact labels organize evidence without turning the work into a gallery of cards.

The design is restrained but not neutral. A mineral-blue line begins tangled and resolves into three clear nodes, giving the page one memorable visual gesture. The system rejects generic portfolio templates, startup landing pages, AI workflow dashboards, developer terminal themes, and magazine layouts.

**Key Characteristics:**

- One asymmetric hero with generous empty space
- Flat sections separated by thin rules
- Concrete copy with employer and open-source work kept distinct
- One accent color used for the line motif, links, and small state changes
- Responsive layouts that become a direct single-column reading order on mobile

## Colors

The palette uses a cool-neutral canvas, charcoal type, and one mineral-blue accent.

### Primary

- **Mineral Blue:** The single accent for the line motif, small link details, selection, and focus. It should occupy less than ten percent of the page.

### Neutral

- **Canvas:** The full-page background. No white cards float above it.
- **Ink:** Headlines, primary copy, and the compact CV control.
- **Muted Graphite:** Supporting descriptions and dates.
- **Faint Graphite:** Labels and low-priority metadata.
- **Pencil Rule:** Section separators and navigation borders.

### Named Rules

**The One Mark Rule.** Mineral blue is the only accent. Never add a second saturated hue.

**The Open Canvas Rule.** Sections share one background. Group with spacing and rules, not panels.

## Typography

**Display Font:** Geist with Arial fallback
**Title Font:** Newsreader with Georgia fallback
**Body Font:** Geist with Arial fallback
**Label/Mono Font:** Geist Mono with a system monospace fallback

**Character:** The display voice is compact and conversational. Newsreader marks project and work titles without turning the page into a magazine layout. Monospace appears only in short labels, dates, and machine-facing links.

### Hierarchy

- **Display** (500, fluid, 0.98): Hero thesis only, with a maximum of 5.4rem and balanced wrapping.
- **Headline** (500, fluid, 1.08): Section and work titles.
- **Title** (500, fluid, 1.1): Project and work titles.
- **Body** (400, 1rem, 1.65): Supporting copy with a maximum line length of 68 characters.
- **Label** (500, 0.7rem, 0.11em): Short navigation, section labels, dates, and machine links.

### Named Rules

**The Plain Sentence Rule.** Headlines sound like Andrei speaking. No marketing fragments or inflated titles.

## Elevation

The system has no shadows. Depth comes from whitespace, type scale, and a strict reading order. Interactive states change color, underline position, or translate by one pixel.

### Named Rules

**The Flat Workbench Rule.** If an element needs a shadow to feel important, its hierarchy is wrong.

## Components

### Buttons

- **Shape:** Navigation stays typographic. There is no filled button.
- **Primary:** The CV link uses the same plain treatment as nearby navigation links.
- **Hover / Focus:** Text shifts to mineral blue on hover. Keyboard focus gets a clear two-pixel outline.
- **Secondary / Ghost:** Body links use a fine underline that shifts to mineral blue.

### Cards / Containers

- **Corner Style:** No card corners because there are no cards.
- **Background:** The page canvas remains continuous.
- **Shadow Strategy:** None.
- **Border:** One-pixel horizontal rules only.
- **Internal Padding:** Vertical rhythm replaces containers.

### Navigation

- **Style:** Name at left, three anchor links and one compact CV control at right. On mobile, the name and controls wrap without hiding links.
- **States:** Hover and focus use the accent. The current anchor receives an underline only when state is useful.

### Brand Mark

The compact mark isolates the resolved node network from the hero illustration. Use it for favicons, application icons, manifests, and social metadata. Keep the cool canvas behind the mineral-blue mark so its open nodes remain legible at small sizes.

### Resolving Line

A single abstract SVG line starts tangled at the hero's right edge and resolves into three nodes. It may draw once on first load. Reduced-motion users see the completed line immediately.

## Do's and Don'ts

### Do:

- **Do** keep the hero readable on a small laptop without requiring a scroll to understand the thesis.
- **Do** use the canvas, ink, rule, and mineral-blue tokens consistently.
- **Do** collapse asymmetric desktop layouts into a clean single column below 768px.
- **Do** keep employer work and personal open-source work clearly labeled.
- **Do** preserve visible focus and respect reduced motion.

### Don't:

- **Don't** use a generic portfolio template, startup landing page, AI workflow dashboard, developer terminal theme, or magazine layout.
- **Don't** add project-card grids, neon AI styling, gradients, glass panels, skill meters, oversized metrics, excessive animation, or ornamental technical diagrams.
- **Don't** add shadows, rounded content panels, gradient text, side-stripe accents, or repeated decorative badges.
- **Don't** use the old web2 and web3 positioning.
- **Don't** publish private infrastructure, unsupported claims, or inferred employer outcomes.
