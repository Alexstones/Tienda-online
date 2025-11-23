<script lang="ts">
  export let title = "ÁGAPPE";
  export let subtitle = "Curated treasures for the modern goddess.";
  export let image = "/images/hero-main.jpg";
</script>

<section class="hero">
  <div class="hero-media">
    <img src={image} alt={title} loading="eager" />
  </div>
  <div class="hero-content">
    <h1>{title}</h1>
    <p class="subtitle">{subtitle}</p>

    <div class="actions">
      <a href="/shop" class="btn-primary">Shop now</a>
      <a href="/curate" class="btn-ghost">Explore Curate</a>
    </div>
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: center;
    min-height: 60vh;
  }

  .hero-media img {
    width: 100%;
    border-radius: 24px;
    object-fit: cover;
    aspect-ratio: 4 / 3;
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.22);
  }

  .hero-content h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 4vw, 3.3rem);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
  }

  .subtitle {
    font-size: 1.05rem;
    color: var(--text-muted);
    margin-bottom: 1.8rem;
  }

  .actions {
    display: flex;
    gap: 0.9rem;
    flex-wrap: wrap;
  }

  .btn-primary,
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.85rem 1.8rem;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.8rem;
    text-decoration: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  .btn-primary {
    background: radial-gradient(circle at top left, var(--gold-soft), #f3e7cf);
    color: #2a2318;
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.17);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 48px rgba(0, 0, 0, 0.22);
  }

  .btn-ghost {
    background: transparent;
    color: var(--emerald);
  }

  .btn-ghost:hover {
    background: #efe6d8;
  }

  @media (max-width: 860px) {
    .hero {
      grid-template-columns: 1fr;
    }

    .hero-media {
      order: -1;
    }
  }
</style>
