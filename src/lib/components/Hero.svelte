<script>
  export let title = "ÁGAPPE";
  export let subtitle = "Elegance. Beauty. Intention.";
</script>

<section class="hero">
  <div class="hero-inner">
    <div class="copy">
      <p class="eyebrow">Curated treasures for the modern goddess</p>
      <h1>{title}</h1>
      <p class="subtitle">
        A boutique of treasures where every piece is selected with intention,
        elegance and soul — never by volume, always by curation.
      </p>

      <div class="actions">
        <a href="/shop" class="btn btn-primary">Shop now</a>
        <a href="/curate" class="btn btn-ghost">Explore Ágappe Curate</a>
      </div>
    </div>

    <figure class="visual" aria-hidden="true">
      <!-- usa un caballo elegante / editorial aquí -->
      <img src="/images/agape.jpeg" alt="" />
      <div class="halo"></div>
    </figure>
  </div>
</section>

<style>
  .hero {
    padding: clamp(3rem, 6vw, 4.5rem) 0 3rem;
  }

  .hero-inner {
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 3rem;
    align-items: center;
  }

  .copy h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 4vw, 3.6rem);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
    color: var(--wine);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.75rem;
    color: var(--petrol);
    margin-bottom: 0.6rem;
  }

  .subtitle {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 32rem;
    color: var(--text-main);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 1.8rem;
  }

  .btn {
    border-radius: 999px;
    padding: 0.7rem 1.6rem;
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    text-decoration: none;
    cursor: pointer;
  }

  .btn-primary {
    background: linear-gradient(120deg, var(--gold), var(--emerald));
    color: #432d1d;
    border: none;
    box-shadow: 0 10px 24px rgba(160, 123, 70, 0.35);
  }

  .btn-primary:hover {
    filter: brightness(1.05);
  }

  .btn-ghost {
    border: 1px solid var(--border-subtle);
    background: rgba(255, 255, 255, 0.85);
    color: var(--text-main);
  }

  .btn-ghost:hover {
    background: rgba(255, 255, 255, 1);
  }

  .visual {
    position: relative;
    border-radius: 999px;
    overflow: hidden;
    padding: 0.35rem;
    background: radial-gradient(circle at top, var(--gold-soft), var(--wine-soft));
  }

  .visual img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }

  .halo {
    position: absolute;
    inset: 12%;
    pointer-events: none;
    border-radius: inherit;
    box-shadow: 0 40px 80px rgba(122, 32, 53, 0.4);
  }

  @media (max-width: 860px) {
    .hero-inner {
      grid-template-columns: minmax(0, 1fr);
      gap: 2.3rem;
    }

    .visual {
      max-width: 360px;
      margin-inline: auto;
      order: -1;
    }
  }
</style>
