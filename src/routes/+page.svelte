<script lang="ts">
  type Category = {
    id: number;
    name: string;
    description: string;
    image: string;
    href: string;
  };

  type Product = {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
  };

  const categories: Category[] = [
    {
      id: 1,
      name: "Jewelry",
      description: "Curated pieces with intention.",
      image: "/images/agape.jpeg",
      href: "/accessories" // luego puedes separar /jewelry si quieres
    },
    {
      id: 2,
      name: "Accessories",
      description: "Unique details that elevate your style.",
      image: "/images/agappeazul.jpeg",
      href: "/accessories"
    },
    {
      id: 3,
      name: "Beauty",
      description: "Self-care with elegance.",
      image: "/images/agappeguinda.jpeg",
      href: "/beauty"
    },
    {
      id: 4,
      name: "Clothing",
      description: "Timeless pieces for the modern woman.",
      image: "/images/agappelila.jpeg",
      href: "/shop"
    },
    {
      id: 5,
      name: "Home Decor",
      description: "Objects that bring soul into your space.",
      image: "/images/agape.jpeg",
      href: "/home-decor"
    }
  ];

  const selectedProducts: Product[] = [
    {
      id: 1,
      name: "Golden Pegasus Necklace",
      category: "Jewelry",
      price: "$1,250 MXN",
      image: "/images/agape.jpeg"
    },
    {
      id: 2,
      name: "Soft Emerald Silk Scarf",
      category: "Accessories",
      price: "$980 MXN",
      image: "/images/agappeazul.jpeg"
    },
    {
      id: 3,
      name: "Luminous Ritual Candle",
      category: "Beauty · Ritual",
      price: "$720 MXN",
      image: "/images/agappeguinda.jpeg"
    },
    {
      id: 4,
      name: "Curated Marble Tray",
      category: "Home Decor",
      price: "$1,650 MXN",
      image: "/images/agappelila.jpeg"
    }
  ];
</script>

<main class="home">

  <!-- HERO · editorial -->
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-media">
        <div class="hero-image">
          <img src="/images/agape.jpeg" alt="Ágappe editorial hero" loading="lazy" />
        </div>
      </div>

      <div class="hero-copy">
        <p class="hero-eyebrow">Ágappe · Curated treasures</p>
        <h1 class="hero-title">ÁGAPPE</h1>
        <p class="hero-subtitle">Elegance. Beauty. Intention.</p>

        <p class="hero-text">
          A universe of treasures curated to elevate your home, your energy and your personal style.  
          Few pieces, carefully chosen — each one designed to feel like a small ritual.
        </p>

        <div class="hero-actions">
          <a href="/shop" class="btn btn--gold">Shop Now</a>
          <a href="/curate" class="hero-link">Discover Ágappe Curate</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CATEGORIES with PHOTOS -->
  <section class="section section-categories">
    <div class="section-header">
      <p class="eyebrow">Discover by category</p>
      <p class="section-subtitle">
        Curated treasures for every ritual, moment and space.
      </p>
    </div>

    <div class="categories-grid">
      {#each categories as category}
        <a href={category.href} class="category-card surface">
          <div class="category-media">
            <img src={category.image} alt={category.name} loading="lazy" />
          </div>
          <div class="category-body">
            <p class="category-name">{category.name}</p>
            <p class="category-description">{category.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- SELECTED PIECES -->
  <section class="section section-selected">
    <div class="section-header">
      <p class="eyebrow">Selected Pieces</p>
      <p class="section-subtitle">
        Small drops of carefully chosen pieces — few, but deeply intentional.
      </p>
    </div>

    <div class="products-grid">
      {#each selectedProducts as product}
        <article class="product-card surface">
          <div class="product-media">
            <img src={product.image} alt={product.name} loading="lazy" />
          </div>
          <div class="product-body">
            <p class="product-category">{product.category}</p>
            <h3 class="product-name">{product.name}</h3>
            <p class="product-price">{product.price}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- EDITORIAL BLOCK -->
  <section class="section section-editorial">
    <div class="editorial-inner surface">
      <div class="editorial-copy">
        <p class="eyebrow">Editorial moment</p>
        <p class="editorial-quote">“Where elegance meets soul.”</p>
        <p class="editorial-text">
          Ágappe is not about volume — it is about presence.  
          Every collection is curated like a small gallery: calm, luminous and full of meaning.
        </p>
      </div>
      <div class="editorial-media">
        <img src="/images/agappeazul.jpeg" alt="Editorial Ágappe" loading="lazy" />
      </div>
    </div>
  </section>
</main>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4.5rem;
  }

  /* HERO */
  .hero {
    padding-bottom: 3.5rem;
  }

  .hero-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: 3rem;
    align-items: center;
  }

  .hero-media {
    position: relative;
  }

  .hero-image {
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 0 40px 90px rgba(0, 0, 0, 0.9);
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    max-height: 520px;
    object-fit: cover;
    transform: scale(1.02);
  }

  .hero-copy {
    color: var(--text-light);
  }

  .hero-eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    color: var(--color-gold-soft);
  }

  .hero-title {
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 4vw, 3.2rem);
    letter-spacing: 0.24em;
    text-transform: uppercase;
    margin: 0;
  }

  .hero-subtitle {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: var(--color-gold-soft);
  }

  .hero-text {
    margin-top: 1.4rem;
    font-size: 0.98rem;
    line-height: 1.9;
    color: var(--text-muted);
    max-width: 26rem;
  }

  .hero-actions {
    margin-top: 1.9rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem 1.4rem;
    align-items: center;
  }

  .hero-link {
    font-size: 0.9rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-gold-soft);
    position: relative;
    padding-bottom: 0.15rem;
  }

  .hero-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 1px;
    background: rgba(246, 221, 185, 0.7);
  }

  /* GENERIC SECTIONS */
  .section {
    padding-top: 2.5rem;
  }

  .section-header {
    text-align: left;
    margin-bottom: 1.8rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.8rem;
    color: var(--color-gold-soft);
    margin-bottom: 0.4rem;
  }

  .section-subtitle {
    font-size: 0.98rem;
    color: var(--text-muted);
    max-width: 30rem;
  }

  /* CATEGORIES GRID */
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 1.4rem;
  }

  .category-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    backdrop-filter: blur(20px);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .category-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.85);
    border-color: rgba(246, 221, 185, 0.55);
  }

  .category-media {
    height: 150px;
    overflow: hidden;
  }

  .category-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.03);
    transition: transform 0.5s ease;
  }

  .category-card:hover .category-media img {
    transform: scale(1.06);
  }

  .category-body {
    padding: 1.1rem 1.1rem 1.2rem;
  }

  .category-name {
    font-family: var(--font-serif);
    font-size: 1rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 0.35rem;
  }

  .category-description {
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  /* SELECTED PIECES */
  .section-selected {
    padding-top: 3rem;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 1.6rem;
  }

  .product-card {
    display: flex;
    flex-direction: column;
    border-radius: 22px;
    overflow: hidden;
    backdrop-filter: blur(18px);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 28px 80px rgba(0, 0, 0, 0.9);
    border-color: rgba(246, 221, 185, 0.55);
  }

  .product-media {
    height: 210px;
    overflow: hidden;
    background: radial-gradient(circle at top, rgba(246, 221, 185, 0.08), transparent 65%);
  }

  .product-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.02);
    transition: transform 0.5s ease;
  }

  .product-card:hover .product-media img {
    transform: scale(1.07);
  }

  .product-body {
    padding: 1.1rem 1.2rem 1.25rem;
  }

  .product-category {
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
  }

  .product-name {
    font-family: var(--font-serif);
    font-size: 1.02rem;
    margin: 0 0 0.35rem;
  }

  .product-price {
    font-size: 0.95rem;
    color: var(--color-gold-soft);
  }

  /* EDITORIAL BLOCK */
  .section-editorial {
    padding-top: 3.4rem;
  }

  .editorial-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.1fr);
    gap: 2.3rem;
    padding: 2.1rem 2.2rem;
    align-items: center;
  }

  .editorial-copy {
    max-width: 26rem;
  }

  .editorial-quote {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    margin-bottom: 0.9rem;
    color: var(--text-light);
  }

  .editorial-text {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--text-muted);
  }

  .editorial-media {
    border-radius: 24px;
    overflow: hidden;
  }

  .editorial-media img {
    width: 100%;
    height: 100%;
    max-height: 320px;
    object-fit: cover;
    transform: scale(1.03);
  }

  /* RESPONSIVE */
  @media (max-width: 980px) {
    .hero-inner {
      grid-template-columns: 1fr;
    }
    .hero-media {
      order: -1;
    }
    .editorial-inner {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .home {
      padding-inline: 1rem;
    }
    .hero-actions {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
