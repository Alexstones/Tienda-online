<script>
  export let title = "Bienvenida, Creadora ✨";
  export let subtitle = "Ágappe — un universo de tesoros con alma.";
</script>

<section class="hero bg-esmeralda-soft">
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
  .hero{
    position: relative;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding: clamp(3rem, 6vw, 5rem) 1.5rem;
    min-height: 68vh;
    overflow:hidden;
  }
  /* halo suave dorado */
  .hero::after{
    content:"";
    position:absolute; inset:-20% -10% auto auto;
    width:45vmax; height:45vmax; border-radius:50%;
    background: radial-gradient(circle at 50% 50%,
      color-mix(in srgb, var(--color-oro), transparent 70%) 0%,
      transparent 65%);
    filter: blur(30px);
    pointer-events:none;
  }
  .hero__content{
    width:min(100%, 940px);
    margin-inline:auto;
  }
  .hero__title{
    font-family:"Playfair Display", Georgia, serif;
    font-size: clamp(2.6rem, 6vw, 4rem);
    font-weight: 700;
    letter-spacing:.2px;
    color:#fff;
  }
  .hero__subtitle{
    margin-top: .9rem;
    font-size: clamp(1rem, 1.8vw, 1.2rem);
    color: var(--color-oro);
  }
  .hero__actions{
    margin-top: 1.6rem;
    display:flex; gap:.9rem; flex-wrap: wrap;
  }

  .btn { border-radius: 999px; padding:0; }
  .btn__inner{ display:inline-block; padding:.9rem 1.6rem; border-radius:inherit; position:relative; overflow:hidden; }
  .btn__text{ font-weight:600; font-size:1rem; }

  /* brillo de pasada */
  .btn--shine .btn__inner::before{
    content:""; position:absolute; top:0; left:-75%;
    width:50%; height:100%;
    background: linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.1) 100%);
    transform: skewX(-25deg); transition: left .7s ease;
  }
  .btn--shine:hover .btn__inner::before{ left: 125%; }

  .btn--pulse:hover{ animation:pulse .8s ease; }
  @keyframes pulse{ 0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)} }
</style>
