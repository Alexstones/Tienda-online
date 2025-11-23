<script lang="ts">
  const hero = {
    eyebrow: "Ágappe · Curated details",
    title: "Accessories",
    subtitle: "Unique details that elevate your style.",
    image: "/images/agappelila.jpeg"
  };
</script>

<main class="page">
  <section class="hero-local">
    <div class="hero-inner">
      <div class="hero-image">
        <img src={hero.image} alt="Accessories editorial" />
      </div>
      <div class="hero-copy surface">
        <p class="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.title}</h1>
        <p class="subtitle">{hero.subtitle}</p>
        <p class="body">
          Scarves, bags and small treasures that finish every look with intention.  
          This is the space for refined, modern and playful details.
        </p>
      </div>
    </div>
  </section>

  <section class="coming">
    <div class="coming-card surface">
      <h2>Curated accessories coming soon</h2>
      <p>
        This collection will hold carefully selected pieces — few but exceptional.  
        You can already connect the layout here to your future products.
      </p>
    </div>
  </section>
</main>

<style>
  .page {
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4rem;
  }

  .hero-local {
    padding-bottom: 3rem;
  }

  .hero-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
    gap: 2.4rem;
    align-items: center;
  }

  .hero-image {
    border-radius: 26px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8);
  }

  .hero-image img {
    width: 100%;
    height: 100%;
    max-height: 480px;
    object-fit: cover;
    transform: scale(1.03);
  }

  .hero-copy {
    padding: 2.2rem 2rem;
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
    font-size: clamp(2.1rem, 3.2vw, 2.7rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--color-gold-soft);
    margin-bottom: 1.4rem;
  }

  .body {
    font-size: 0.95rem;
    line-height: 1.8;
    color: rgba(249, 237, 221, 0.9);
  }

  .coming {
    padding-top: 0.5rem;
  }

  .coming-card {
    padding: 1.8rem 1.9rem;
  }

  .coming-card h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    margin-bottom: 0.8rem;
    color: var(--color-gold-soft);
  }

  .coming-card p {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.8;
  }

  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr;
    }
    .hero-copy {
      padding: 1.9rem 1.6rem;
    }
  }
</style>
