<script>
  export let title = "Bienvenida, Creadora ✨";
  export let subtitle = "Ágappe — un universo de tesoros con alma.";
</script>

<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">{title}</h1>
    <p class="hero__subtitle">{subtitle}</p>

    <div class="hero__actions">
      <a href="/colecciones" class="btn btn--gold btn--shine">
        <span class="btn__inner"><span class="btn__text">✨ Descubrir Tesoros</span></span>
      </a>
      <a href="/ritual" class="btn btn--ghost btn--pulse">
        <span class="btn__inner"><span class="btn__text">🔮 ¿Qué vibra hoy?</span></span>
      </a>
    </div>
  </div>
</section>

<style>
  :root {
    --gold-1: #F6D365;
    --gold-2: #FDA085;
    --gold-3: #f8d49a;
    --gold-4: #e7b955;
    --primary: #b88a2a;
    --text-muted: #6b6b6b;
    --shadow-glow: 0 8px 24px rgba(248, 212, 154, .4), 0 2px 6px rgba(0,0,0,.12);
    --shadow-ghost: 0 6px 18px rgba(184,138,42,.25);
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 4rem 2rem;
    min-height: 70vh;
    background: linear-gradient(to bottom right, #fffdf8, #fdfaf4);
  }

  .hero__title {
    font-family: var(--font-serif, ui-serif, Georgia, serif);
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 700;
    color: #1b150a;
  }

  .hero__subtitle {
    margin-top: 1rem;
    color: var(--text-muted);
    font-size: 1.1rem;
  }

  .hero__actions {
    margin-top: 1.8rem;
    display: flex;
    gap: 1rem;
  }

  .btn {
    border-radius: 999px;
    padding: 0;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s ease;
  }

  .btn__inner {
    display: inline-block;
    padding: 0.85rem 1.6rem;
    border-radius: inherit;
    position: relative;
    overflow: hidden;
  }

  .btn__text {
    font-weight: 600;
    font-size: 1rem;
  }

  .btn--gold .btn__inner {
    background: linear-gradient(110deg, var(--gold-1), var(--gold-3) 35%, var(--gold-4) 70%, var(--gold-2) 100%);
    box-shadow: var(--shadow-glow);
    color: #2b1c05;
    background-size: 200% 200%;
    animation: goldShift 6s ease infinite;
  }

  @keyframes goldShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .btn--shine .btn__inner::before {
    content: "";
    position: absolute;
    top: 0; left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.1) 100%);
    transform: skewX(-25deg);
    transition: all 0.7s ease;
  }

  .btn--shine:hover .btn__inner::before {
    left: 125%;
  }

  .btn--ghost .btn__inner {
    border: 1.6px solid var(--primary);
    color: var(--primary);
    background: transparent;
    transition: all 0.3s ease;
  }

  .btn--ghost:hover .btn__inner {
    background: rgba(184,138,42,0.1);
    box-shadow: var(--shadow-ghost);
    color: #1a1204;
  }

  .btn--pulse:hover {
    animation: pulse 0.8s ease;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
</style>
