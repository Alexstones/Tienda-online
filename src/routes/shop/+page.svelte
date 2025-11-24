<section class="shop-page">
  <header class="shop-hero">
    <p class="eyebrow">Ágappe · Curated treasures</p>
    <h1>Main shop</h1>
    <p class="subtitle">
      New, delicate and feminine pieces chosen one by one to live with your
      everyday rituals, your home and your personal style.
    </p>
  </header>

  <section class="shop-grid">
    <article class="card">
      <h2>Jewelry & Accessories</h2>
      <p>
        Necklaces, rings and details that hold intention and move with your
        everyday energy.
      </p>
    </article>
    <article class="card">
      <h2>Home & Decor</h2>
      <p>
        Objects for table, shelves and spaces that invite light, presence and
        beauty into your home.
      </p>
    </article>
    <article class="card">
      <h2>Rituals & Beauty</h2>
      <p>
        Candles, fragrances and self-care pieces that support your energetic and
        physical glow.
      </p>
    </article>
  </section>
</section>

<style>
  .shop-page {
    max-width: 1120px;
    margin: 0 auto;
  }

  .shop-hero {
    margin-bottom: 3rem;
  }

  .shop-hero h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 3.6vw, 3rem);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--wine);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
    color: var(--text-muted);
  }

  .subtitle {
    font-size: 1.05rem;
    max-width: 34rem;
    line-height: 1.7;
    color: var(--text-main);
  }

  .shop-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.8rem;
  }

  .card {
    padding: 1.7rem 1.8rem;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 16px 35px rgba(15, 10, 5, 0.06);
    border: 1px solid var(--border-subtle);
  }

  .card h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 0.7rem;
    color: var(--petrol);
  }

  .card p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-muted);
  }
</style>
