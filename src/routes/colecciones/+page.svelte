<script lang="ts">
  const title = "ÁGAPPE";
  const subtitle = "An infinite world of treasures.";
</script>

<main class="collections-landing-page">
  <section class="hero-dark-content">
    <div class="content">
      <h1 class="title-main">{title}</h1>
      <p class="subtitle-main">{subtitle}</p>

      <div class="nav-tiles">
        <a href="/colecciones/fashion-jewelry" class="nav-tile tile-red">
          <span class="icon">👗</span>
          <span class="text">Fashion &amp; Jewelry</span>
        </a>
        <a href="/colecciones/chests-gifts" class="nav-tile tile-gold">
          <span class="icon">🎁</span>
          <span class="text">Chests &amp; Gifts</span>
        </a>
        <a href="/colecciones/candles-fragrances" class="nav-tile tile-blue">
          <span class="icon">🕯️</span>
          <span class="text">Candles &amp; Fragrances</span>
        </a>
      </div>

      <div class="message-section">
        <h2>YOU ARE LIGHT. YOU ARE BEAUTY. YOU ARE POWER.</h2>
        <p>Each delivery is a treasure wrapped with intention.</p>
      </div>
    </div>
  </section>
</main>

<style>
  .collections-landing-page {
    --hero-background: #581619;
    --tile-red: #8b1a24;
    --tile-gold-bg: #a08051;
    --tile-blue-bg: #3e4a61;
    --gold-text: #e4c894;
    --text-light: #f0efef;

    min-height: calc(100vh - 80px);
    padding: 0;
    margin: 0;
  }

  .hero-dark-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 85vh;
    background-color: var(--hero-background);
    padding: 4rem 1.5rem;
    color: var(--text-light);
    overflow: hidden;
    border: 10px solid #501015;
  }

  .content {
    text-align: center;
    max-width: 960px;
    width: 100%;
  }

  .title-main {
    font-family: var(--font-serif);
    font-size: clamp(3rem, 4.8vw, 3.7rem);
    letter-spacing: 0.16em;
    color: var(--gold-text);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .subtitle-main {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .nav-tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 4.2rem;
  }

  .nav-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 130px;
    text-decoration: none;
    border-radius: 10px;
    padding: 1rem;
    color: var(--text-light);
    font-weight: 500;
    border: 2px solid var(--gold-text);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .nav-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }

  .icon {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--gold-text);
  }

  .text {
    font-size: 1rem;
    font-weight: 600;
  }

  .tile-red {
    background-color: var(--tile-red);
  }
  .tile-gold {
    background-color: var(--tile-gold-bg);
    color: #21160b;
  }
  .tile-blue {
    background-color: var(--tile-blue-bg);
  }

  .message-section h2 {
    font-family: var(--font-serif);
    font-size: clamp(3rem, 4.6vw, 4.2rem);
    letter-spacing: 0.16em;
    color: var(--gold-text);
    margin-bottom: 0.5rem;
  }

  .message-section p {
    font-size: 1rem;
    font-style: italic;
  }
</style>
