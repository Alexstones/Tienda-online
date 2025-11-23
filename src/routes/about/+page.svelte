<script lang="ts">
  const title = "About Ágappe";
</script>

<main class="about-page">
  <section class="about-hero">
    <div class="copy">
      <h1>{title}</h1>
      <p class="subtitle">
        A universe of treasures curated with elegance, soul and intention.
      </p>
      <p class="lead">
        Ágappe selects pieces that elevate your home, your energy and your personal
        style. Every object carries beauty, spirit and modern femininity.
      </p>
    </div>
    <div class="visual">
      <img src="/images/about-hero.jpg" alt="About Ágappe" loading="lazy" />
    </div>
  </section>

  <section class="about-body">
    <article class="card">
      <h2>Essence</h2>
      <p>
        Ágappe is a space where luxury feels soulful. Every piece — whether jewelry,
        decor or clothing — is chosen not only for its aesthetic, but for the way it
        makes you feel: seen, elevated, present.
      </p>
    </article>

    <article class="card">
      <h2>Intention</h2>
      <p>
        We believe in conscious beauty. Fewer pieces, more meaning. Every collection
        is curated in small drops that honor energy, quality and timeless design.
      </p>
    </article>

    <article class="card">
      <h2>Lines</h2>
      <p>
        Ágappe holds two worlds: the main line of new, carefully selected pieces and
        Ágappe Curate — the premium curated line of treasures with a previous life,
        restored and energetically renewed.
      </p>
    </article>
  </section>
</main>

<style>
  .about-page {
    max-width: 1120px;
    margin: 0 auto;
  }

  .about-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 2.3rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  .copy h1 {
    font-family: var(--font-serif);
    font-size: 2.1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }

  .lead {
    font-size: 0.98rem;
    color: var(--text-muted);
    line-height: 1.7;
  }

  .visual img {
    width: 100%;
    border-radius: 22px;
    object-fit: cover;
    aspect-ratio: 4 / 3;
    box-shadow: 0 22px 55px rgba(0, 0, 0, 0.16);
  }

  .about-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.8rem;
  }

  .card {
    background: #f4ede3;
    border-radius: 18px;
    padding: 1.4rem 1.5rem;
    box-shadow: 0 16px 35px rgba(15, 10, 5, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.03);
  }

  .card h2 {
    font-family: var(--font-serif);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 0.6rem;
  }

  .card p {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.7;
  }

  @media (max-width: 860px) {
    .about-hero {
      grid-template-columns: 1fr;
    }
  }
</style>
