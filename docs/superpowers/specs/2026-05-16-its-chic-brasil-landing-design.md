# Its Chic Brasil Landing Page Design

## Context

Its Chic Brasil needs an initial landing page for moda, acessorios e semi-joias. The brand already exists on Instagram as `@itschicbr`. The available reference is a screenshot of the Instagram profile, showing a pink circular logo, gold accessories, light product photos, and accessible social-commerce language.

The chosen direction is **colecao premium acessivel**: the page should feel polished and trustworthy, but still easy to approach and clearly connected to Instagram.

## Goals

- Present Its Chic Brasil as a quality/premium-accessible brand for fashion, accessories, semi-jewelry, bags, and related style items.
- Drive visitors to Instagram as the primary conversion path.
- Communicate quickly what the brand sells and why the visitor should follow or shop.
- Work well as a landing destination from Instagram bio links, paid traffic, shared links, and QR codes.

## Non-Goals

- No checkout, cart, or payment flow in the first version.
- No CMS/admin area in the first version.
- No deep product catalog with filters in the first version.
- No dependency on final logo or product photo files. The page should support replacing placeholders later.

## Audience

The page is aimed at women looking for everyday pieces that make an outfit feel more polished: accessories, semi-jewelry, bags, and fashion items. The tone should be warm, direct, feminine, and commercial without feeling cheap or overly promotional.

## Visual Direction

The page should use a light, refined palette inspired by the Instagram reference:

- Soft pink as the primary brand accent and CTA color.
- Warm gold accents for accessories, semi-joias, and highlight details.
- Light blush, white, and soft neutral backgrounds.
- Dark warm text for contrast and readability.

The visual language should balance premium and social commerce. It should avoid an overly luxury/editorial tone that feels distant, and avoid a discount-heavy look that weakens perceived quality.

Typography should pair an elegant serif-style display heading with clean sans-serif body text. Corners should be modest, spacing should feel generous, and cards should stay simple.

## Page Structure

1. **Header**
   - Brand name: `It's Chic Brasil`.
   - Short navigation anchors: Moda, Acessorios, Semi-joias, Destaques.
   - Instagram handle or CTA link to `@itschicbr`.

2. **Hero**
   - Main headline: a clear promise around elevating the look with moda, acessorios e semi-joias.
   - Supporting copy: premium-accessible curation for everyday style.
   - Primary CTA: open Instagram profile.
   - Secondary signal: show `@itschicbr` visibly.
   - Visual area: product-photo-style mosaic using placeholders at first, replaceable later.

3. **Benefits Strip**
   - Three concise benefits:
     - Novidades no Instagram.
     - Curadoria feminina.
     - Premium acessivel.

4. **Categories**
   - Cards for Moda, Acessorios, Semi-joias, and Bolsas/Acessorios.
   - Each card should be scannable and direct users toward Instagram rather than opening complex category pages.

5. **Highlights / Vitrine**
   - A feed-inspired product grid using placeholder visuals initially.
   - Designed so real product photos can replace placeholders later.
   - Copy should mention launches, restocks, and pieces to complete the look.

6. **Social Proof**
   - Lightweight trust section referencing the Instagram presence.
   - Avoid fabricating testimonials.
   - If no testimonials are available, use factual proof such as the Instagram handle and community framing.

7. **Final CTA**
   - Reinforce the promise and point visitors to Instagram.
   - CTA text should be direct, such as `Ver novidades no Instagram`.

## Content Draft

Suggested hero headline:

> Moda, acessorios e semi-joias para elevar seu look

Suggested supporting copy:

> Pecas femininas, acessorios delicados e semi-joias escolhidas para deixar o dia a dia mais chic sem perder a leveza.

Suggested CTA:

> Ver novidades no Instagram

Suggested benefit copy:

- `Novidades no Instagram`: acompanhe lancamentos, reposicoes e combinacoes.
- `Curadoria feminina`: pecas pensadas para compor looks do dia a dia.
- `Premium acessivel`: brilho, acabamento e presenca sem exagero.

## Interaction Design

The primary action is always Instagram. All CTAs should link to `https://www.instagram.com/itschicbr/`. Internal navigation can scroll to sections on the same page.

There should be no forms in the first version. This keeps the page simple and prevents the need for backend handling, validation, spam protection, or storage.

## Technical Approach

The first implementation can be a static responsive landing page. If a project scaffold is created, prefer a simple modern frontend stack with reusable sections:

- Header component.
- Hero component.
- Benefits component.
- Categories component.
- Highlights grid component.
- Social proof component.
- Final CTA component.

Product images and logo should be represented by replaceable assets. Until real files are available, use polished placeholders that match the brand colors and proportions.

## Data Flow

There is no dynamic data source in version one.

- Static content is defined in the page/components.
- CTA links point to `https://www.instagram.com/itschicbr/`.
- Placeholder visual data can be stored in a small local array if using a component framework.
- Future real images can replace placeholder assets without changing page structure.

## Error Handling

Because the first version is static, error handling is mostly defensive UI:

- External Instagram links should open reliably and include accessible labels.
- Images should have useful `alt` text.
- Missing real images should degrade to branded placeholders.
- The layout should remain readable on small screens even if text wraps.

## Accessibility

- Use semantic sections and headings.
- Ensure color contrast for text and CTA buttons.
- Provide descriptive `alt` text for product and brand images.
- Make CTAs keyboard-accessible.
- Avoid text embedded in images when the same content should be readable by assistive technology.

## Responsive Behavior

Desktop should use a two-column hero with text and visual mosaic. Mobile should stack the hero text above the visual area, keep the CTA prominent, and reduce navigation to a compact header.

Product/category grids should collapse cleanly:

- Four columns on large desktop.
- Two columns on tablet.
- One or two columns on mobile depending on available width.

## Testing Plan

The implementation should be verified with:

- Desktop viewport check.
- Mobile viewport check.
- CTA link validation for Instagram.
- Visual check for text overflow and layout overlap.
- Accessibility spot check for headings, link names, and image alt text.

## Open Items

- Final logo file is not available yet.
- Final product photos are not available yet.
- Placeholder visuals should be replaced when final logo and product photos become available.
