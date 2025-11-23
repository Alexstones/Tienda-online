<script lang="ts">
  // Aquí después puedes conectar tu data real.
</script>

<section class="shop-page">
  <header class="shop-hero">
    <div>
      <p class="eyebrow">Ágappe · Boutique de tesoros</p>
      <h1>Tienda principal</h1>
      <p class="subtitle">
        Piezas nuevas, delicadas y femeninas, seleccionadas una por una para
        acompañar tu estilo, tu casa y tus rituales diarios.
      </p>
    </div>
  </header>

  <section class="shop-grid-placeholder">
    <div class="placeholder-card">
      <h2>Ropa &amp; accesorios</h2>
      <p>
        Aquí irán las colecciones principales de prendas, bolsos y accesorios
        que representen la esencia de Ágappe.
      </p>
    </div>
    <div class="placeholder-card">
      <h2>Home &amp; decor</h2>
      <p>
        Objetos para casa, mesa y espacios que quieras elevar con detalles
        suaves, luminosos y con intención.
      </p>
    </div>
    <div class="placeholder-card">
      <h2>Rituales &amp; belleza</h2>
      <p>
        Velas, fragancias, skincare y elementos que cuidan energía, piel y
        momentos íntimos.
      </p>
    </div>
  </section>
</section>

<style>
  .shop-page {
    max-width: 1120px;
    margin: 0 auto;
  }

  .shop-hero {
    margin-bottom: 3rem;
  }

  .shop-hero h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.2rem, 3.6vw, 3rem);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    color: var(--primary-deep);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.75rem;
    margin-bottom: 0.6rem;
    color: var(--text-muted);
  }

  .subtitle {
    font-size: 1.05rem;
    max-width: 34rem;
    line-height: 1.7;
    color: var(--text-main);
  }

  .shop-grid-placeholder {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.8rem;
  }

  .placeholder-card {
    padding: 1.6rem 1.7rem;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 16px 35px rgba(15, 10, 5, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.02);
  }

  .placeholder-card h2 {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 0.7rem;
  }

  .placeholder-card p {
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-muted);
  }
</style>
