<script lang="ts">
  import Hero from "../lib/components/Hero.svelte";
  import CollectionsGrid from "../lib/components/CollectionsGrid.svelte";
  import ExperienceSection from "../lib/components/ExperienceSection.svelte"; 
  
  // 1. IMPORTACIÓN CLAVE: Importamos la nueva sección de testimonios
  import TestimonialSection from "../lib/components/TestimonialSection.svelte";
  
  // Quitamos toda la lógica y variables del modal (isModalOpen, openModal, closeModal)
</script>

<main class="home">
  <Hero
    title="ÁGAPPE"
    subtitle="Tesoros con alma · Energía · Belleza consciente"
    image="/images/agape.jpeg"
  />

  <section class="intro">
    <div class="text">
      <h2>Un universo de tesoros con alma</h2>
      <p>
        Ágappe une energía, lujo y propósito a través de piezas que inspiran conexión, belleza y transformación.
        Cada joya, cada objeto, cada prenda es un recordatorio de nuestra propia luz interior.
      </p>

      <p>
        Más que una marca, somos un portal de energía. Todo lo que creamos vibra con intención, amor y propósito.
      </p>

      <a href="/colecciones" class="btn btn--gold">Explorar Colecciones</a>
    </div>
  </section>

  <CollectionsGrid />
  
  <ExperienceSection />
  
    <TestimonialSection />
  
</main>

<style>
  .home {
    display: flex;
    flex-direction: column;
    /* Ajusta el gap si el ExperienceSection tiene margen superior/inferior ya definido */
    gap: 0; 
    padding-bottom: 0; /* Lo quito si el ExperienceSection tiene su propio padding/margin */
  }

  .intro {
    max-width: 900px;
    margin: 3rem auto; /* Ajusto el margen para que no se pegue al grid */
    text-align: center;
    color: var(--text-main);
  }

  .intro h2 {
    font-family: var(--font-serif);
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-deep);
  }

  .intro p {
    color: var(--text-muted);
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }

  .btn {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
  }
  .btn--gold {
    background: linear-gradient(135deg, var(--primary), var(--primary-deep));
    color: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
  .btn--gold:hover {
    opacity: 0.9;
  }
</style>