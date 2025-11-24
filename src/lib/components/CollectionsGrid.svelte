<script lang="ts">
  interface Collection {
    id: number;
    title: string;
    label: string;
    link: string;
    className: string;
  }

  const collections: Collection[] = [
    {
      id: 1,
      title: "Jewelry",
      label: "Curated pieces with intention.",
      link: "/shop#jewelry",
      className: "tile-wine"
    },
    {
      id: 2,
      title: "Clothing",
      label: "Timeless pieces for the modern woman.",
      link: "/shop#clothing",
      className: "tile-gold"
    },
    {
      id: 3,
      title: "Accessories",
      label: "Unique details that elevate your style.",
      link: "/shop#accessories",
      className: "tile-purple"
    },
    {
      id: 4,
      title: "Candles & Essences",
      label: "Objects that bring soul into your space.",
      link: "/shop#rituals",
      className: "tile-terracotta"
    }
  ];
</script>

<section class="collections-section">
  <div class="inner">
    <header class="header">
      <p class="eyebrow">Discover by category</p>
      <p class="intro">
        Curated treasures for every ritual, moment and space.
      </p>
    </header>

    <div class="grid">
      {#each collections as c}
        <a href={c.link} class={"card " + c.className}>
          <div class="shine"></div>
          <div class="content">
            <p class="card-title">{c.title}</p>
            <p class="card-label">{c.label}</p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .collections-section {
    padding: 3.5rem 0 3rem;
    background: linear-gradient(
      180deg,
      #b32538 0,
      #b32538 40%,
      #a51e32 100%
    ); /* vino intenso */
  }

  .inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .header {
    color: #fff8f4;
    margin-bottom: 2rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.22em;
    font-size: 0.78rem;
    margin-bottom: 0.4rem;
  }

  .intro {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    letter-spacing: 0.12em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.1rem;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.6rem 1.4rem;
    min-height: 230px;
    border-radius: 22px;
    text-decoration: none;
    color: #fffdf8;
    overflow: hidden;
    box-shadow: 0 18px 40px rgba(46, 0, 10, 0.35);
  }

  .card::before {
    content: "✶";
    position: absolute;
    top: 1.1rem;
    left: 1.3rem;
    font-size: 1.2rem;
    opacity: 0.85;
  }

  .shine {
    position: absolute;
    inset: -30%;
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.35), transparent 60%);
    opacity: 0.9;
    mix-blend-mode: soft-light;
  }

  .content {
    position: relative;
  }

  .card-title {
    font-family: var(--font-serif);
    font-size: 1.2rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .card-label {
    font-size: 0.9rem;
    opacity: 0.92;
  }

  .card:hover {
    transform: translateY(-4px);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
    box-shadow: 0 24px 60px rgba(46, 0, 10, 0.45);
  }

  /* Gradients para cada tarjeta */
  .tile-wine {
    background: radial-gradient(circle at top left, #f2d3db 0, #7f2035 60%, #3f0b1a 100%);
  }

  .tile-gold {
    background: radial-gradient(circle at top left, #f4e0bb 0, #cfa667 55%, #8a5b27 100%);
  }

  .tile-purple {
    background: radial-gradient(circle at top left, #eed7f6 0, #6d327c 55%, #321238 100%);
  }

  .tile-terracotta {
    background: radial-gradient(circle at top left, #f4c7aa 0, #b7492f 55%, #5f1f10 100%);
  }

  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

