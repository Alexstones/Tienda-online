<script lang="ts">
  import Hero from "../lib/components/Hero.svelte";
  import CollectionsGrid from "../lib/components/CollectionsGrid.svelte";
</script>

<main class="home">
  <Hero />

  <section class="intro">
    <div class="inner surface">
      <h2>More than a shop — a curated universe.</h2>
      <p>
        Ágappe is a boutique of treasures where every piece is selected one by
        one. New, delicate and feminine pieces that carry beauty, spirit and
        intention.
      </p>
      <p>
        We don’t sell by volume. We curate with soul. Each object is chosen for
        how it makes you feel: seen, elevated, present.
      </p>
    </div>
  </section>

  <CollectionsGrid />

  <section class="editorial">
    <div class="inner editorial-inner">
      <figure class="editorial-image" aria-hidden="true">
        <img src="/images/agappeazul.jpeg" alt="" />
      </figure>
      <div class="editorial-copy">
        <p class="eyebrow">Editorial moment</p>
        <blockquote>
          “Where elegance meets soul.”
        </blockquote>
        <p>
          Every Ágappe drop is a small collection of treasures — few, but
          exceptional. Pieces that elevate your home, your rituals and your
          everyday energy.
        </p>
      </div>
    </div>
  </section>
</main>

<style>
  .home {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .surface {
    background: rgba(255, 255, 255, 0.85);
    border-radius: var(--radius-lg);
    box-shadow: 0 18px 45px rgba(84, 56, 34, 0.12);
    border: 1px solid var(--border-subtle);
  }

  .intro {
    padding: 2.6rem 0 3.2rem;
  }

  .intro .inner {
    padding: 2rem 1.8rem;
    text-align: center;
  }

  .intro h2 {
    font-family: var(--font-serif);
    font-size: 1.9rem;
    color: var(--petrol);
    margin-bottom: 0.9rem;
  }

  .intro p {
    color: var(--text-muted);
    margin-bottom: 0.7rem;
    line-height: 1.7;
  }

  .editorial {
    padding: 3.4rem 0 0;
  }

  .editorial-inner {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 2.6rem;
    align-items: center;
  }

  .editorial-image {
    border-radius: 26px;
    overflow: hidden;
    position: relative;
  }

  .editorial-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: saturate(1.1);
  }

  .editorial-copy .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.78rem;
    color: var(--wine);
    margin-bottom: 0.5rem;
  }

  blockquote {
    font-family: var(--font-serif);
    font-size: 1.7rem;
    margin-bottom: 0.8rem;
    color: var(--wine);
  }

  .editorial-copy p {
    color: var(--text-muted);
    line-height: 1.7;
  }

  @media (max-width: 860px) {
    .editorial-inner {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>
