<script>
  export let title = "Bienvenida, Creadora ✨";
  export let subtitle = "Ágappe — un universo de tesoros con alma.";
</script>

<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">{title}</h1>
    <p class="hero__subtitle">{subtitle}</p>
    <div class="hero__actions">
      <a href="/colecciones" class="btn btn--gold">Descubrir Tesoros</a>
      <a href="/ritual" class="btn btn--ghost">¿Qué vibra hoy?</a>
    </div>
  </div>

  <div class="hero__watermark" aria-hidden="true">
    <img src="/images/agappe.jpeg" alt="Logo Ágappe" />
  </div>
</section>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 2rem;
    position: relative;
  }
  .hero__title {
    font-family: var(--font-serif);
    font-size: 2.8rem;
  }
  .hero__subtitle {
    margin-top: 1rem;
    color: var(--text-muted);
  }
  .btn {
    padding: 0.6rem 1.4rem;
    border-radius: 999px;
    font-weight: 500;
    margin-right: 0.8rem;
    transition: all 0.3s ease;
  }
  .btn--gold {
    @apply gold-foil;
  }
  .btn--ghost {
    border: 1px solid var(--primary);
    color: var(--primary);
  }
  .btn--gold:hover, .btn--ghost:hover {
    transform: translateY(-2px);
  }
  .hero__watermark img {
    width: 320px;
    opacity: 0.1;
  }
</style>
