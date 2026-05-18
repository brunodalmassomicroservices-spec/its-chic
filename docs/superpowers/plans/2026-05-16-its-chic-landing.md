# Its Chic Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static responsive landing page for Its Chic Brasil that presents moda, acessorios e semi-joias and drives visitors to Instagram `@itschicbr`.

**Architecture:** Use a dependency-free static site so the page can open directly in a browser and later be hosted anywhere. Split structure, styling, and interaction into focused files: `index.html`, `styles.css`, and `script.js`. Use placeholder visuals shaped like product imagery until logo and product photos are available.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, browser-based manual verification, git.

---

## File Structure

- Create: `index.html`
  - Owns semantic page structure, visible copy, CTAs, sections, and accessibility labels.
- Create: `styles.css`
  - Owns responsive layout, brand palette, typography, buttons, cards, placeholder product visuals, and mobile behavior.
- Create: `script.js`
  - Owns small progressive enhancements: current year injection and CTA click tracking in the console.
- Create: `assets/.gitkeep`
  - Keeps an assets directory ready for future logo and product photos.
- Modify: `.gitignore`
  - Keep `.superpowers/` ignored and add common local noise if needed.
- Test manually:
  - Open `index.html` in a browser.
  - Verify desktop and mobile layouts.
  - Verify Instagram links point to `https://www.instagram.com/itschicbr/`.

### Task 1: Static Page Skeleton

**Files:**
- Create: `index.html`
- Modify: `.gitignore`
- Create: `assets/.gitkeep`

- [ ] **Step 1: Create the static page skeleton**

Create `index.html` with the full semantic section structure and real copy:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Moda, acessorios e semi-joias da Its Chic Brasil. Conheca novidades e pecas para elevar seu look no Instagram @itschicbr.">
    <title>Its Chic Brasil | Moda, Acessorios e Semi-joias</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Ir para o inicio">
        <span class="brand-mark" aria-hidden="true">IC</span>
        <span>Its Chic Brasil</span>
      </a>
      <nav class="site-nav" aria-label="Navegacao principal">
        <a href="#moda">Moda</a>
        <a href="#acessorios">Acessorios</a>
        <a href="#semijoias">Semi-joias</a>
        <a href="#destaques">Destaques</a>
      </nav>
      <a class="header-cta" href="https://www.instagram.com/itschicbr/" target="_blank" rel="noopener" aria-label="Abrir Instagram da Its Chic Brasil">
        @itschicbr
      </a>
    </header>

    <main id="inicio">
      <section class="hero section-shell" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Curadoria premium acessivel</p>
          <h1 id="hero-title">Moda, acessorios e semi-joias para elevar seu look</h1>
          <p class="hero-text">
            Pecas femininas, acessorios delicados e semi-joias escolhidas para deixar o dia a dia mais chic sem perder a leveza.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="https://www.instagram.com/itschicbr/" target="_blank" rel="noopener">
              Ver novidades no Instagram
            </a>
            <span class="handle">@itschicbr</span>
          </div>
        </div>
        <div class="hero-gallery" aria-label="Previa visual de produtos Its Chic Brasil">
          <div class="product-tile tile-large tile-gold" role="img" aria-label="Pulseiras douradas delicadas"></div>
          <div class="product-tile tile-pink" role="img" aria-label="Anel com detalhe colorido"></div>
          <div class="product-tile tile-soft" role="img" aria-label="Colar delicado para look feminino"></div>
          <div class="product-tile tile-warm" role="img" aria-label="Brincos e aneis dourados"></div>
        </div>
      </section>

      <section class="benefits" aria-label="Beneficios da Its Chic Brasil">
        <article>
          <strong>Novidades no Instagram</strong>
          <span>Acompanhe lancamentos, reposicoes e combinacoes.</span>
        </article>
        <article>
          <strong>Curadoria feminina</strong>
          <span>Pecas pensadas para compor looks do dia a dia.</span>
        </article>
        <article>
          <strong>Premium acessivel</strong>
          <span>Brilho, acabamento e presenca sem exagero.</span>
        </article>
      </section>

      <section class="section-shell categories" aria-labelledby="categories-title">
        <div class="section-heading">
          <p class="eyebrow">Escolha seu detalhe</p>
          <h2 id="categories-title">Categorias para completar seu estilo</h2>
          <p>Encontre pecas para montar producoes leves, femininas e cheias de presenca.</p>
        </div>
        <div class="category-grid">
          <a id="moda" class="category-card" href="https://www.instagram.com/itschicbr/" target="_blank" rel="noopener">
            <span>Moda</span>
            <strong>Pecas femininas</strong>
            <small>Looks versateis para rotina, trabalho e momentos especiais.</small>
          </a>
          <a id="acessorios" class="category-card" href="https://www.instagram.com/itschicbr/" target="_blank" rel="noopener">
            <span>Acessorios</span>
            <strong>Brilho na medida</strong>
            <small>Pecas delicadas para valorizar o visual.</small>
          </a>
          <a id="semijoias" class="category-card" href="https://www.instagram.com/itschicbr/" target="_blank" rel="noopener">
            <span>Semi-joias</span>
            <strong>Dourados delicados</strong>
            <small>Acabamento bonito e presenca para usar todos os dias.</small>
          </a>
          <a class="category-card" href="https://www.instagram.com/itschicbr/" target="_blank" rel="noopener">
            <span>Bolsas e acessorios</span>
            <strong>Composicao completa</strong>
            <small>Detalhes que deixam o look pronto em poucos minutos.</small>
          </a>
        </div>
      </section>

      <section id="destaques" class="section-shell highlights" aria-labelledby="highlights-title">
        <div class="section-heading compact">
          <p class="eyebrow">Vitrine</p>
          <h2 id="highlights-title">Destaques da semana</h2>
          <p>Uma selecao inspirada no feed para mostrar a variedade da marca enquanto as fotos finais nao chegam.</p>
        </div>
        <div class="highlight-grid">
          <article class="highlight-card"><div class="visual tile-gold"></div><h3>Pulseiras delicadas</h3><p>Para combinar com relogio, aneis e looks claros.</p></article>
          <article class="highlight-card"><div class="visual tile-pink"></div><h3>Aneis marcantes</h3><p>Detalhes coloridos com acabamento dourado.</p></article>
          <article class="highlight-card"><div class="visual tile-soft"></div><h3>Colares femininos</h3><p>Pecas leves para elevar basicos do dia a dia.</p></article>
          <article class="highlight-card"><div class="visual tile-warm"></div><h3>Brincos e composicoes</h3><p>Escolhas faceis para completar o visual.</p></article>
        </div>
      </section>

      <section class="social-proof section-shell" aria-labelledby="social-title">
        <div>
          <p class="eyebrow">Siga a vitrine</p>
          <h2 id="social-title">Acompanhe lancamentos direto pelo Instagram</h2>
        </div>
        <p>
          A Its Chic Brasil usa o perfil <strong>@itschicbr</strong> como vitrine principal para novidades, reposicoes, combinacoes e inspiracoes de looks.
        </p>
      </section>

      <section class="final-cta section-shell" aria-labelledby="final-title">
        <p class="eyebrow">Seu proximo detalhe favorito</p>
        <h2 id="final-title">Veja as novidades e escolha sua proxima peca chic</h2>
        <a class="button primary" href="https://www.instagram.com/itschicbr/" target="_blank" rel="noopener">
          Ir para o Instagram
        </a>
      </section>
    </main>

    <footer class="site-footer">
      <span>Its Chic Brasil</span>
      <span>Moda, acessorios e semi-joias</span>
      <span id="current-year"></span>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Keep future asset folder tracked**

Create `assets/.gitkeep` as an empty file.

- [ ] **Step 3: Ensure `.gitignore` keeps local helper output out**

Set `.gitignore` to:

```gitignore
.superpowers/
node_modules/
dist/
*.log
```

- [ ] **Step 4: Verify the HTML file exists**

Run: `Test-Path -LiteralPath 'C:\desenvolvimento\its-chic\index.html'`

Expected: `True`

- [ ] **Step 5: Commit**

Run:

```bash
git add .gitignore index.html assets/.gitkeep
git commit -m "feat: add landing page structure"
```

Expected: commit succeeds.

### Task 2: Brand Styling And Responsive Layout

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Add full page styling**

Create `styles.css`:

```css
:root {
  --pink: #e85d82;
  --pink-soft: #fff6f8;
  --pink-muted: #f5c7d2;
  --gold: #c89545;
  --gold-soft: #f4e1c1;
  --ink: #241b1d;
  --text: #67565a;
  --line: #f0dce1;
  --white: #ffffff;
  --shadow: 0 18px 48px rgba(105, 69, 76, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--pink-soft);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 16px clamp(18px, 4vw, 56px);
  background: rgba(255, 249, 248, 0.92);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 50%;
  color: var(--white);
  background: linear-gradient(135deg, var(--pink), #f38ca6);
  font-size: 13px;
  letter-spacing: 0;
}

.site-nav {
  display: flex;
  gap: 20px;
  color: var(--text);
  font-size: 14px;
}

.site-nav a,
.header-cta {
  transition: color 160ms ease, transform 160ms ease;
}

.site-nav a:hover,
.header-cta:hover {
  color: var(--pink);
  transform: translateY(-1px);
}

.header-cta {
  color: var(--pink);
  font-weight: 800;
}

.section-shell {
  width: min(1120px, calc(100% - 36px));
  margin: 0 auto;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.98fr);
  gap: clamp(28px, 5vw, 62px);
  align-items: center;
  padding: clamp(54px, 8vw, 96px) 0 52px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--pink);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 700;
  line-height: 1.04;
}

h1 {
  max-width: 660px;
  font-size: clamp(42px, 7vw, 78px);
}

h2 {
  font-size: clamp(30px, 4vw, 48px);
}

.hero-text,
.section-heading p,
.social-proof p {
  color: var(--text);
  font-size: 17px;
}

.hero-text {
  max-width: 590px;
  margin: 20px 0 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 13px 18px;
  font-weight: 800;
}

.button.primary {
  color: var(--white);
  background: var(--pink);
  box-shadow: 0 12px 28px rgba(232, 93, 130, 0.28);
}

.handle {
  color: var(--text);
  font-weight: 800;
}

.hero-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.product-tile,
.visual {
  min-height: 160px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.tile-large {
  min-height: 220px;
}

.hero-gallery .product-tile:nth-child(2),
.hero-gallery .product-tile:nth-child(4) {
  transform: translateY(34px);
}

.tile-gold {
  background: radial-gradient(circle at 70% 20%, #fff 0 14%, transparent 15%), linear-gradient(135deg, #f7ebe4, var(--gold));
}

.tile-pink {
  background: radial-gradient(circle at 28% 25%, #fff 0 12%, transparent 13%), linear-gradient(135deg, var(--pink-muted), #fff 58%, var(--gold-soft));
}

.tile-soft {
  background: radial-gradient(circle at 52% 42%, #fff 0 16%, transparent 17%), linear-gradient(135deg, #fff, #ead3d8);
}

.tile-warm {
  background: radial-gradient(circle at 28% 62%, #fff 0 10%, transparent 11%), linear-gradient(135deg, #f2ddd4, #9f6845);
}

.benefits {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--white);
}

.benefits article {
  padding: 22px clamp(18px, 4vw, 48px);
  border-right: 1px solid var(--line);
}

.benefits article:last-child {
  border-right: 0;
}

.benefits strong,
.benefits span {
  display: block;
}

.benefits span {
  margin-top: 4px;
  color: var(--text);
}

.categories,
.highlights,
.social-proof,
.final-cta {
  padding: 74px 0;
}

.section-heading {
  max-width: 680px;
  margin-bottom: 28px;
}

.section-heading.compact {
  display: flex;
  max-width: none;
  align-items: end;
  justify-content: space-between;
  gap: 28px;
}

.category-grid,
.highlight-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.category-card,
.highlight-card {
  min-height: 190px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 20px;
  background: var(--white);
  box-shadow: var(--shadow);
}

.category-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.category-card span {
  color: var(--pink);
  font-size: 13px;
  font-weight: 800;
}

.category-card strong,
.highlight-card h3 {
  margin: 0;
  font-size: 21px;
}

.category-card small,
.highlight-card p {
  color: var(--text);
  font-size: 14px;
}

.highlight-card .visual {
  min-height: 170px;
  margin-bottom: 16px;
  box-shadow: none;
}

.social-proof {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 42px;
  align-items: center;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.final-cta {
  text-align: center;
}

.final-cta .button {
  margin-top: 24px;
}

.site-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  padding: 26px;
  color: var(--text);
  background: var(--white);
  border-top: 1px solid var(--line);
  font-size: 14px;
}

@media (max-width: 900px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .site-nav {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 4px;
  }

  .hero,
  .social-proof {
    grid-template-columns: 1fr;
  }

  .benefits,
  .category-grid,
  .highlight-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .section-shell {
    width: min(100% - 28px, 1120px);
  }

  .hero {
    padding-top: 42px;
  }

  .hero-gallery {
    gap: 10px;
  }

  .product-tile,
  .visual {
    min-height: 128px;
  }

  .tile-large {
    min-height: 172px;
  }

  .benefits,
  .category-grid,
  .highlight-grid {
    grid-template-columns: 1fr;
  }

  .benefits article {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .benefits article:last-child {
    border-bottom: 0;
  }

  .section-heading.compact {
    display: block;
  }
}
```

- [ ] **Step 2: Open the page directly**

Run: `Start-Process 'C:\desenvolvimento\its-chic\index.html'`

Expected: browser opens the page.

- [ ] **Step 3: Visually verify desktop layout**

Check that:

- Header stays readable.
- Hero text and gallery do not overlap.
- CTA is visible above the fold.
- Cards have consistent spacing and modest radius.

- [ ] **Step 4: Commit**

Run:

```bash
git add styles.css
git commit -m "feat: style landing page"
```

Expected: commit succeeds.

### Task 3: Small JavaScript Enhancement

**Files:**
- Create: `script.js`

- [ ] **Step 1: Add progressive enhancement script**

Create `script.js`:

```js
const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

document.querySelectorAll('a[href*="instagram.com/itschicbr"]').forEach((link) => {
  link.addEventListener("click", () => {
    console.info("Its Chic CTA clicked:", link.textContent.trim());
  });
});
```

- [ ] **Step 2: Verify the script is loaded**

Open `index.html`, then check the footer.

Expected: the footer includes the current year.

- [ ] **Step 3: Verify CTA logging**

Open browser devtools, click an Instagram CTA.

Expected: console shows `Its Chic CTA clicked:` followed by the CTA text.

- [ ] **Step 4: Commit**

Run:

```bash
git add script.js index.html
git commit -m "feat: add landing page enhancements"
```

Expected: commit succeeds.

### Task 4: Verification And Polish

**Files:**
- Modify if needed: `index.html`
- Modify if needed: `styles.css`
- Modify if needed: `script.js`

- [ ] **Step 1: Verify all Instagram links**

Run this browser console snippet on the opened page:

```js
[...document.querySelectorAll("a")].map((a) => a.href)
```

Expected: all external CTAs point to `https://www.instagram.com/itschicbr/`; internal nav links point to page sections.

- [ ] **Step 2: Verify accessibility basics**

Inspect the HTML and confirm:

- There is one `h1`.
- Major sections have `h2` headings.
- Product placeholder visuals have accessible labels or adjacent text.
- CTA links have clear visible text.

- [ ] **Step 3: Verify mobile layout**

Use a mobile viewport around `390px` wide.

Expected:

- Header content wraps without overlap.
- Hero text remains readable.
- CTA button fits its container.
- Product/category grids collapse cleanly.

- [ ] **Step 4: Fix any layout issue with targeted CSS only**

If text overflows on mobile, add this rule to the relevant selector:

```css
overflow-wrap: anywhere;
```

If cards feel cramped on mobile, reduce section padding inside the existing `@media (max-width: 620px)` block:

```css
.categories,
.highlights,
.social-proof,
.final-cta {
  padding: 54px 0;
}
```

- [ ] **Step 5: Commit verification fixes**

Run:

```bash
git add index.html styles.css script.js
git commit -m "fix: polish responsive landing page"
```

Expected: commit succeeds if fixes were needed. If no fixes were needed, skip this commit.

### Task 5: Final Review

**Files:**
- Read: `docs/superpowers/specs/2026-05-16-its-chic-brasil-landing-design.md`
- Read: `index.html`
- Read: `styles.css`
- Read: `script.js`

- [ ] **Step 1: Compare implementation against the design spec**

Confirm the implementation includes:

- Header with brand, nav, and Instagram handle.
- Hero with promise, supporting copy, CTA, and product-style mosaic.
- Benefits strip.
- Category cards for Moda, Acessorios, Semi-joias, and Bolsas/Acessorios.
- Highlights/vitrine section.
- Social proof section referencing Instagram without fake testimonials.
- Final CTA.
- Responsive behavior.

- [ ] **Step 2: Check git status**

Run: `git status --short`

Expected: no uncommitted changes unless a deliberate final tweak remains.

- [ ] **Step 3: Record final local opening path**

Use this path for review:

```text
C:\desenvolvimento\its-chic\index.html
```

Expected: opening this file displays the landing page without a dev server.





