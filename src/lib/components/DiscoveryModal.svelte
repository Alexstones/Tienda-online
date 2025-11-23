<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch("close");
  }
</script>

<div class="modal-backdrop" on:click={closeModal}>
  <div class="modal-content" on:click|stopPropagation>
    <button class="close-btn" type="button" on:click={closeModal}>×</button>

    <section class="hero-dark-content">
      <div class="content">
        <h1 class="title-main">ÁGAPPE</h1>
        <p class="subtitle-main">An infinite world of treasures.</p>

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
  </div>
</div>

<style>
  /* Variables locales para este modal */
  .modal-backdrop {
    --hero-background: #581619;
    --tile-red: #8b1a24;
    --tile-gold-bg: #a08051;
    --tile-blue-bg: #3e4a61;
    --gold-text: #e4c894;
    --text-light: #f4f2f0;
    --font-serif-local: var(--font-serif, "Georgia", serif);

    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(2px);
  }

  .modal-content {
    position: relative;
    background-color: var(--hero-background);
    border-radius: 24px;
    box-shadow: 0 18px 55px rgba(0, 0, 0, 0.82);
    max-width: 960px;
    width: 94%;
    max-height: 88vh;
    overflow-y: auto;
    padding: 0;
  }

  .close-btn {
    position: absolute;
    top: 14px;
    right: 16px;
    background: transparent;
    border: none;
    font-size: 2rem;
    color: var(--gold-text);
    cursor: pointer;
    z-index: 2;
    line-height: 1;
  }

  .hero-dark-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.5rem 1.75rem 3rem;
    color: var(--text-light);
  }

  .content {
    text-align: center;
    max-width: 720px;
    width: 100%;
    margin-inline: auto;
  }

  .title-main {
    font-family: var(--font-serif-local);
    font-size: clamp(2.6rem, 4vw, 3.2rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-text);
    margin-bottom: 0.5rem;
  }

  .subtitle-main {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    color: rgba(244, 242, 240, 0.9);
  }

  .nav-tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.4rem;
    margin-bottom: 3.5rem;
  }

  .nav-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 190px;
    height: 120px;
    text-decoration: none;
    border-radius: 14px;
    padding: 1rem;
    color: var(--text-light);
    font-weight: 500;
    border: 1px solid rgba(228, 200, 148, 0.7);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .nav-tile:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
    border-color: rgba(228, 200, 148, 1);
  }

  .icon {
    font-size: 1.7rem;
    margin-bottom: 0.4rem;
    color: var(--gold-text);
  }

  .text {
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .tile-red {
    background-color: var(--tile-red);
  }
  .tile-gold {
    background-color: var(--tile-gold-bg);
    color: #20160c;
  }
  .tile-blue {
    background-color: var(--tile-blue-bg);
  }

  .message-section h2 {
    font-family: var(--font-serif-local);
    font-size: clamp(2rem, 3.4vw, 3rem);
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-text);
    margin-bottom: 0.6rem;
  }

  .message-section p {
    font-size: 0.95rem;
    font-style: italic;
    color: rgba(244, 242, 240, 0.9);
  }

  @media (min-width: 1024px) {
    .hero-dark-content {
      padding: 4rem 3.5rem 3.5rem;
    }
  }
</style>
