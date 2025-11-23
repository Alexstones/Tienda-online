<script lang="ts">
  // static content for now
</script>

<section class="experience-section">
  <div class="content-wrapper">
    <div class="text-content">
      <p class="subtitle">ÁGAPPE EXPERIENCE</p>
      <h1>You are light. You are beauty. You are power.</h1>
      <p class="description">
        Ágappe is a space to reconnect with your divine self — through treasures
        that hold intention, energy and elegance. Each piece is a reminder of
        the light you already carry.
      </p>
    </div>

    <div class="visual-content">
      <div class="visual-placeholder">
        <img src="/images/exp-1.jpg" alt="Ágappe box and treasures" loading="lazy" />
      </div>
      <div class="visual-placeholder">
        <img src="/images/exp-2.jpg" alt="Curated details and textures" loading="lazy" />
      </div>
      <div class="visual-placeholder">
        <img src="/images/exp-3.jpg" alt="Soft fabrics and light" loading="lazy" />
      </div>
    </div>
  </div>

  <div class="cta-bottom">
    <p>
      Join the Ágappe universe and share your treasure moments with us.
    </p>
  </div>
</section>

<style>
  .experience-section {
    background-color: var(--wine-soft);
    color: #fff;
    padding-top: 4rem;
  }

  .content-wrapper {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  .text-content {
    max-width: 520px;
    text-align: center;
  }

  .subtitle {
    font-family: var(--font-serif);
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    margin-bottom: 0.4rem;
    text-transform: uppercase;
    color: var(--gold-soft);
  }

  .text-content h1 {
    font-family: var(--font-serif);
    font-size: 2.3rem;
    line-height: 1.2;
    margin-bottom: 1.3rem;
  }

  .description {
    font-size: 0.98rem;
    line-height: 1.7;
    opacity: 0.93;
  }

  .visual-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.7rem;
    max-width: 340px;
  }

  .visual-placeholder {
    border-radius: 10px;
    overflow: hidden;
  }

  .visual-placeholder img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 3 / 4;
  }

  .cta-bottom {
    background-color: var(--emerald);
    padding: 1.5rem 1rem;
    text-align: center;
    margin-top: 3.5rem;
  }

  .cta-bottom p {
    max-width: 880px;
    margin: 0 auto;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    .content-wrapper {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 4rem 1rem;
    }

    .text-content {
      text-align: left;
      max-width: 50%;
      padding-right: 2rem;
    }

    .visual-content {
      max-width: 420px;
    }
  }
</style>
