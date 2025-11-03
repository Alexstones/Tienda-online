<script lang="ts">
  import Hero from "../lib/components/Hero.svelte";
  import CollectionsGrid from "../lib/components/CollectionsGrid.svelte";
  import ExperienceSection from "../lib/components/ExperienceSection.svelte";
  import TestimonialSection from "../lib/components/TestimonialSection.svelte";
</script>

<main class="home">
  <Hero
    title="ÁGAPPE"
    subtitle="Tesoros con alma · Energía · Belleza consciente"
    image="/images/agape.jpeg"
  />

  <!-- Intro en crema (descanso visual) -->
  <section class="intro bg-crema">
    <div class="text surface">
      <h2>Un universo de tesoros con alma</h2>
      <p>
        Ágappe une energía, lujo y propósito a través de piezas que inspiran conexión, belleza y transformación.
        Cada joya, cada objeto, cada prenda es un recordatorio de nuestra propia luz interior.
      </p>
      <p>
        Más que una marca, somos un portal de energía. Todo lo que creamos vibra con intención, amor y propósito.
      </p>

      <a href="/colecciones" class="btn btn--gold gold-foil">
        <span class="btn__inner"><span class="btn__text">Explorar Colecciones</span></span>
      </a>
    </div>
  </section>

  <!-- Sección vibrante en rubí -->
  <section class="section section--rubi bg-rubi">
    <CollectionsGrid />
  </section>

  <!-- Experiencia en esmeralda profundo con halo -->
  <section class="section section--esmeralda bg-esmeralda-soft">
    <ExperienceSection />
  </section>

  <!-- Testimonios en crema para legibilidad -->
  <section class="section bg-crema">
    <TestimonialSection />
  </section>
</main>

<style>
  .home{
    display:flex; flex-direction:column; gap:0; padding-bottom:0;
  }

  .intro{
    padding: 4rem 1rem;
  }
  .intro .text{
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    padding: clamp(1.2rem, 2.5vw, 2rem);
    border-radius: var(--radius-lg);
  }
  .intro h2{
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(1.8rem, 3.6vw, 2.2rem);
    margin-bottom: 1rem;
    color: var(--color-rubi);
  }
  .intro p{
    color: var(--text-muted);
    margin-bottom: 1.05rem;
    line-height: 1.65;
  }

  .section{
    padding: clamp(3rem, 5vw, 5rem) 1rem;
  }

  /* Rubí: deja aire arriba/abajo y contrasta tarjetas internas */
  .section--rubi :global(.card){
    background: color-mix(in srgb, #fff, var(--color-rubi) 6%);
    color:#fff;
    border: 1px solid color-mix(in srgb, var(--color-rubi), #fff 75%);
  }

  /* Esmeralda: usa blanco para texto dentro si hace falta */
  .section--esmeralda :global(h2), 
  .section--esmeralda :global(p), 
  .section--esmeralda :global(li) { color:#fff; }

  /* Botón base para este archivo */
  .btn { margin-top: 1rem; }
</style>
