<script lang="ts">
  type CurateItem = {
    title: string;
    category: string;
    price: string;
    image: string;
  };

  type MiniCategory = {
    title: string;
    description: string;
    image: string;
  };

  const hero = {
    eyebrow: "Premium line · Curated treasures",
    title: "Ágappe Curate",
    subtitle: "Premium curated treasures selected with intention.",
    cta: "Explore Curate",
    image: "/images/agappeazul.jpeg"
  };

  const miniCategories: MiniCategory[] = [
    {
      title: "Curated Decor",
      description: "Pieces chosen for beauty and energy.",
      image: "/images/agappeguinda.jpeg"
    },
    {
      title: "Curated Jewelry",
      description: "Unique high-aesthetic treasures.",
      image: "/images/agappelila.jpeg"
    },
    {
      title: "Curated Accessories",
      description: "Select premium finds for everyday rituals.",
      image: "/images/agape.jpeg"
    }
  ];

  const curateItems: CurateItem[] = [
    {
      title: "Sculpted Marble Candle",
      category: "Home · Ritual",
      price: "$1,250 MXN",
      image: "/images/agappeguinda.jpeg"
    },
    {
      title: "Italian Ceramic Vase",
      category: "Curated Decor",
      price: "$2,100 MXN",
      image: "/images/agappeazul.jpeg"
    },
    {
      title: "Golden Pegasus Necklace I",
      category: "Curated Jewelry",
      price: "$1,480 MXN",
      image: "/images/agappelila.jpeg"
    },
    {
      title: "Stone Table Sculpture",
      category: "Art · Objects",
      price: "$3,400 MXN",
      image: "/images/agape.jpeg"
    }
  ];
</script>

<section class="curate">
  <!-- HERO PREMIUM -->
  <section class="curate-hero">
    <div class="curate-hero-inner">
      <div class="curate-hero-image">
        <img src={hero.image} alt="Ágappe Curate editorial hero" />
      </div>

      <div class="curate-hero-copy surface">
        <p class="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p class="subtitle">{hero.subtitle}</p>

        <p class="body">
          A refined selection of unique treasures chosen with elegance, soul and intention. Each drop is
          limited, curated slowly and designed to live as an object of quiet luxury.
        </p>

        <a href="#curate-grid" class="btn btn--gold">{hero.cta}</a>
      </div>
    </div>
  </section>

  <!-- MINI CATEGORIES PREMIUM -->
  <section class="mini-categories">
    <header class="mini-header">
      <h2>Curated categories</h2>
      <p>
        Three paths into the Ágappe Curate universe — decor, jewelry and accessories that have already lived,
        loved and been revived with new light.
      </p>
    </header>

    <div class="mini-grid">
      {#each miniCategories as cat}
        <article class="mini-card">
          <div class="mini-image">
            <img src={cat.image} alt={cat.title} />
          </div>
          <div class="mini-copy">
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- GRID CURATE -->
  <section id="curate-grid" class="curate-grid-section">
    <header class="grid-header">
      <div>
        <h2>Current selection</h2>
        <p>
          Limited pieces, available only for a brief moment in time. Once they leave, they rarely return in
          the same way.
        </p>
      </div>
    </header>

    <div class="curate-grid">
      {#each curateItems as item}
        <article class="curate-card">
          <div class="curate-image">
            <img src={item.image} alt={item.title} loading="lazy" />
          </div>
          <div class="curate-info">
            <p class="curate-category">{item.category}</p>
            <h3>{item.title}</h3>
            <p class="curate-price">{item.price}</p>
          </div>
        </article>
      {/each}
    </div>
  </section>

  <!-- CURATORIAL TEXT BLOCK -->
  <section class="curatorial">
    <div class="curatorial-inner surface">
      <div class="curatorial-copy">
        <h2>Ágappe Curate</h2>
        <p>
          Ágappe Curate is not a volume-based collection — it is a boutique of treasures. Each piece has lived
          a previous life, then is carefully restored, cleansed and energetically renewed before entering the
          universe of Ágappe.
        </p>
        <p>
          We select objects for their design, condition and vibration. Few pieces, deeply considered. The
          result is a gallery of quiet yet powerful statements for your space and your rituals.
        </p>
      </div>
      <div class="curatorial-image">
        <img src="/images/agappeazul.jpeg" alt="Curated Ágappe pieces" />
      </div>
    </div>
  </section>

  <!-- FINAL EDITORIAL IMAGE -->
  <section class="curate-editorial">
    <div class="curate-editorial-inner">
      <div class="editorial-photo">
        <img src="/images/agappeguinda.jpeg" alt="Premium Ágappe Curate editorial" />
      </div>
      <div class="editorial-text">
        <blockquote>
          “Premium pieces curated to elevate your space and your energy.”
        </blockquote>
        <p>
          Each object in Ágappe Curate is an heirloom in the making — chosen to move with you through the
          seasons of your life with beauty, soul and intention.
        </p>
      </div>
    </div>
  </section>
</section>

<style>
  .curate {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
  }

  /* HERO */
  .curate-hero {
    padding: 3rem 0 3.5rem;
  }

  .curate-hero-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: 2.8rem;
    align-items: center;
  }

  .curate-hero-image {
    border-radius: 26px;
    overflow: hidden;
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.72);
    background: radial-gradient(circle at top left, rgba(214, 176, 106, 0.5), transparent 60%);
  }

  .curate-hero-image img {
    width: 100%;
    height: 100%;
    max-height: 520px;
    object-fit: cover;
    transform: scale(1.03);
  }

  .curate-hero-copy {
    padding: 2.3rem 2.2rem;
    color: var(--text-light);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
    color: var(--color-gold-soft);
  }

  h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 4vw, 3.2rem);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .subtitle {
    font-size: 1.02rem;
    color: var(--color-gold-soft);
    margin-bottom: 1.5rem;
  }

  .body {
    font-size: 0.98rem;
    line-height: 1.9;
    margin-bottom: 2rem;
    color: rgba(249, 237, 221, 0.9);
  }

  /* MINI CATEGORIES */
  .mini-categories {
    padding: 0 0 3.5rem;
  }

  .mini-header {
    max-width: 600px;
    margin-bottom: 2rem;
  }

  .mini-header h2 {
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--text-light);
    margin-bottom: 0.7rem;
  }

  .mini-header p {
    font-size: 0.95rem;
    color: var(--text-muted);
  }

  .mini-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.8rem;
  }

  .mini-card {
    border-radius: 22px;
    overflow: hidden;
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.9));
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.78);
    border: 1px solid rgba(246, 221, 185, 0.26);
  }

  .mini-image {
    height: 190px;
    overflow: hidden;
  }

  .mini-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.04);
    transition: transform 0.4s ease;
  }

  .mini-card:hover img {
    transform: scale(1.1);
  }

  .mini-copy {
    padding: 1.3rem 1.4rem 1.4rem;
    color: var(--text-light);
  }

  .mini-copy h3 {
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    margin-bottom: 0.4rem;
    color: var(--color-gold-soft);
  }

  .mini-copy p {
    font-size: 0.9rem;
    color: rgba(246, 232, 214, 0.9);
  }

  /* CURATE GRID */
  .curate-grid-section {
    padding: 0 0 3.5rem;
  }

  .grid-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .grid-header h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--text-light);
    margin-bottom: 0.4rem;
  }

  .grid-header p {
    max-width: 28rem;
    font-size: 0.95rem;
    color: var(--text-muted);
  }

  .curate-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 2rem;
  }

  .curate-card {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .curate-image {
    aspect-ratio: 4 / 5;
    border-radius: 20px;
    overflow: hidden;
    background: #f5f3ee;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7);
  }

  .curate-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .curate-card:hover img {
    transform: scale(1.06);
  }

  .curate-info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    color: var(--text-light);
  }

  .curate-category {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--text-muted);
  }

  .curate-info h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  .curate-price {
    font-size: 0.9rem;
    color: var(--color-gold-soft);
  }

  /* CURATORIAL BLOCK */
  .curatorial {
    padding-bottom: 3.5rem;
  }

  .curatorial-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 2.4rem;
    align-items: center;
    padding: 2.1rem 2rem;
  }

  .curatorial-copy h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 0.7rem;
    color: var(--color-gold-soft);
  }

  .curatorial-copy p {
    font-size: 0.96rem;
    line-height: 1.8;
    color: rgba(249, 237, 221, 0.9);
    margin-bottom: 0.9rem;
  }

  .curatorial-image {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.7);
  }

  .curatorial-image img {
    width: 100%;
    height: 100%;
    max-height: 360px;
    object-fit: cover;
    transform: scale(1.04);
  }

  /* FINAL EDITORIAL */
  .curate-editorial {
    padding-bottom: 2.5rem;
  }

  .curate-editorial-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: center;
  }

  .editorial-photo {
    border-radius: 26px;
    overflow: hidden;
    box-shadow: 0 30px 88px rgba(0, 0, 0, 0.78);
  }

  .editorial-photo img {
    width: 100%;
    height: 100%;
    max-height: 420px;
    object-fit: cover;
    transform: scale(1.05);
  }

  .editorial-text blockquote {
    font-family: var(--font-serif);
    font-size: 1.9rem;
    color: var(--color-gold-soft);
    margin: 0 0 1.1rem;
  }

  .editorial-text p {
    font-size: 0.96rem;
    line-height: 1.8;
    color: var(--text-muted);
    max-width: 24rem;
  }

  @media (max-width: 900px) {
    .curate-hero-inner,
    .curatorial-inner,
    .curate-editorial-inner {
      grid-template-columns: 1fr;
    }

    .curate-hero-copy {
      padding: 2rem 1.7rem;
    }
  }
</style>
