<script lang="ts">
  type CurateItem = {
    title: string;
    category: string;
    price: string;
    image: string;
  };

  const curateItems: CurateItem[] = [
    {
      title: "Marble sculpted candle",
      category: "Home · Ritual",
      price: "$1,250 MXN",
      image: "/images/agappeblilla.jpeg"
    },
    {
      title: "Italian ceramic vase",
      category: "Home Decor",
      price: "$2,100 MXN",
      image: "/images/agappeazul.jpeg"
    },
    {
      title: "Ágappe gold necklace I",
      category: "Jewelry",
      price: "$980 MXN",
      image: "/images/agappeguinda.jpeg"
    },
    {
      title: "Stone table sculpture",
      category: "Art · Objects",
      price: "$3,400 MXN",
      image: "/images/agape.jpeg"
    }
  ];
</script>

<section class="curate-page">
  <header class="hero">
    <div class="hero-text">
      <p class="eyebrow">Premium line · Curated treasures</p>
      <h1>Ágappe Curate</h1>
      <p class="subtitle">
        A refined selection of unique treasures chosen with elegance, soul and
        intention. Small drops of pieces that exist in very limited numbers.
      </p>
    </div>

    <div class="hero-note">
      <p>
        Ágappe Curate is not another brand — it is the premium line of Ágappe.
        Every object has a previous story, restored and energetically renewed so
        it can live a second life with you.
      </p>
    </div>
  </header>

  <section class="grid-section">
    <div class="grid-header">
      <h2>Current selection</h2>
      <p>
        Curated, small and intentional. When a Curate piece leaves, it rarely
        returns in the same way.
      </p>
    </div>

    <div class="items-grid">
      {#each curateItems as item}
        <article class="item-card">
          <div class="image-wrapper">
            <img src={item.image} alt={item.title} loading="lazy" />
          </div>

          <div class="item-info">
            <p class="item-category">{item.category}</p>
            <h3>{item.title}</h3>
            <p class="item-price">{item.price}</p>
            <button class="item-button" type="button">
              View piece
            </button>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="note-section">
    <div class="note-block">
      <h2>Curated, not crowded</h2>
      <p>
        Curate is built around the idea of “nothing is wasted, everything is
        transformed”. Each launch holds only a few pieces — chosen for their
        design, quality and energy.
      </p>
    </div>
    <div class="note-block">
      <h2>Soft, luminous palette</h2>
      <p>
        The same Ágappe colors, translated into softer, quieter tones: light,
        natural and gallery-like. Think daylight, marble, linen and gentle
        shadows.
      </p>
    </div>
  </section>
</section>

<style>
  .curate-page {
    max-width: 1120px;
    margin: 0 auto;
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 2.2fr) minmax(0, 1.5fr);
    gap: 3rem;
    margin-bottom: 3.3rem;
  }

  .hero-text h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 4vw, 3.3rem);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--petrol);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
    color: var(--text-muted);
  }

  .subtitle {
    font-size: 1.02rem;
    line-height: 1.7;
    max-width: 32rem;
    color: var(--text-main);
  }

  .hero-note {
    align-self: flex-end;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-muted);
    border-left: 1px solid var(--border-subtle);
    padding-left: 1.5rem;
  }

  .grid-section {
    border-top: 1px solid var(--border-subtle);
    padding-top: 2.4rem;
  }

  .grid-header {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: flex-end;
    margin-bottom: 2rem;
  }

  .grid-header h2 {
    font-size: 1.1rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .grid-header p {
    max-width: 26rem;
    font-size: 0.95rem;
    color: var(--text-muted);
  }

  .items-grid {
    display: grid;
    gap: 2.3rem;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  .item-card {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .image-wrapper {
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 20px;
    background: #f6f1ea;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.45s ease;
  }

  .item-card:hover .image-wrapper img {
    transform: scale(1.04);
  }

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .item-category {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--text-muted);
  }

  .item-info h3 {
    font-size: 1.02rem;
    font-weight: 500;
  }

  .item-price {
    font-size: 0.95rem;
    color: var(--emerald);
  }

  .item-button {
    margin-top: 0.6rem;
    align-self: flex-start;
    border-radius: 999px;
    border: 1px solid var(--border-subtle);
    padding: 0.4rem 1rem;
    font-size: 0.78rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    background: rgba(255, 255, 255, 0.9);
    cursor: pointer;
  }

  .item-button:hover {
    border-color: var(--emerald);
  }

  .note-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-top: 3.4rem;
    padding-top: 2.3rem;
    border-top: 1px solid var(--border-subtle);
  }

  .note-block h2 {
    font-size: 1rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .note-block p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-muted);
  }

  @media (max-width: 768px) {
    .hero {
      grid-template-columns: minmax(0, 1fr);
      gap: 2rem;
    }

    .hero-note {
      border-left: none;
      border-top: 1px solid var(--border-subtle);
      padding-left: 0;
      padding-top: 1.1rem;
      margin-top: 0.5rem;
    }

    .grid-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
