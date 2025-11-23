<script lang="ts">
  type ShopBlock = {
    title: string;
    description: string;
  };

  const blocks: ShopBlock[] = [
    {
      title: "Jewelry & Accessories",
      description:
        "Necklaces, rings and details that hold intention, designed to move with your everyday rituals."
    },
    {
      title: "Home & Decor",
      description:
        "Objects for table, shelves and spaces that invite light, presence and beauty into your home."
    },
    {
      title: "Rituals & Beauty",
      description:
        "Candles, fragrances and self-care pieces that support your energetic and physical glow."
    }
  ];
</script>

<section class="shop-page">
  <header class="shop-hero">
    <p class="eyebrow">Ágappe · Curated treasures</p>
    <h1>Main shop</h1>
    <p class="subtitle">
      New, delicate and feminine pieces, each chosen one by one to accompany your style, your home
      and your daily rituals.
    </p>
  </header>

  <section class="shop-grid-placeholder">
    {#each blocks as block}
      <div class="placeholder-card">
        <h2>{block.title}</h2>
        <p>{block.description}</p>
      </div>
    {/each}
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
    font-size: clamp(2.1rem, 3.6vw, 3rem);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.9rem;
    color: var(--emerald);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
    color: var(--text-muted);
  }

  .subtitle {
    font-size: 1.02rem;
    max-width: 34rem;
    line-height: 1.7;
    color: var(--text-muted);
  }

  .shop-grid-placeholder {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.8rem;
  }

  .placeholder-card {
    padding: 1.7rem 1.8rem;
    border-radius: 20px;
    background: #f4ede3;
    box-shadow: 0 16px 35px rgba(15, 10, 5, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.03);
  }

  .placeholder-card h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 0.7rem;
  }

  .placeholder-card p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-muted);
  }
</style>
