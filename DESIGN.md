# Design direction

## Style prompt

A restrained academic personal homepage closely following the information architecture of lucas-pj.github.io: white canvas, sticky top navigation, a compact profile sidebar, and a long-form reading column. The refresh should feel cleaner and more deliberate, not like a product landing page or a generic portfolio template.

## Colors

- Canvas: `#F7F8FA`
- Surface: `#FFFFFF`
- Primary text: `#172033`
- Secondary text: `#667085`
- Academic accent: `#6B2F5F`
- Graph accent: `#2E7D74`
- Border: `#D9DEE8`

## Typography

- Chinese and UI text: system sans-serif stack with Microsoft YaHei and common CJK fallbacks.
- English publication and project titles: Georgia/Times serif stack.

## Motion

- Build the final static layout first; animation only reveals existing positions.
- Use short entrance sequences (0.25-0.6s), varied easing, and under 500ms total stagger.
- Animate only opacity and transforms; do not animate layout dimensions.
- Run once on load or first intersection and respect `prefers-reduced-motion`.

## What not to do

- No dark tech theme, neon glow, gradient text, or oversized decorative graphics.
- No full-screen hero, autoplay media, WebGL, or infinite ambient animation.
- No dense equal-sized card grid that turns the page into a generic portfolio.
- No remote font dependency, analytics, cookies, or contact form.
