<script lang="ts">
  interface Collection {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
  }

  const collections: Collection[] = [
    {
      id: 1,
      title: "Jewelry",
      description: "Curated pieces with intention.",
      link: "/shop#jewelry",
      image: "/images/cat-jewelry.jpg"
    },
    {
      id: 2,
      title: "Accessories",
      description: "Unique details that elevate your style.",
      link: "/shop#accessories",
      image: "/images/cat-accessories.jpg"
    },
    {
      id: 3,
      title: "Beauty",
      description: "Self-care with elegance.",
      link: "/shop#beauty",
      image: "/images/cat-beauty.jpg"
    },
    {
      id: 4,
      title: "Home Decor",
      description: "Objects that bring soul into your space.",
      link: "/shop#home-decor",
      image: "/images/cat-home.jpg"
    }
  ];
</script>

<section class="collections-grid-container">
  <header class="header">
    <h2>Shop by category</h2>
    <p>Discover treasures that match your ritual, mood and space.</p>
  </header>

  <div class="collections-grid">
    {#each collections as collection}
      <a href={collection.link} class="collection-tile">
        <figure class="image-wrap">
          <img src={collection.image} alt={collection.title} loading="lazy" />
        </figure>
        <div class="tile-info">
          <h3>{collection.title}</h3>
          <p>{collection.description}</p>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .collections-grid-container {
    max-width: 1180px;
    margin: 0 auto;
  }

  .header {
    margin-bottom: 1.8rem;
  }

  .header h2 {
    font-family: var(--font-serif);
    font-size: 1.35rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .header p {
    color: var(--text-muted);
    font-size: 0.96rem;
  }

  .collections-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.7rem;
  }

  .collection-tile {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .image-wrap {
    border-radius: 20px;
    overflow: hidden;
    background: #e7dfd4;
  }

  .image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 5;
    transform: scale(1.02);
    transition: transform 0.5s ease;
  }

  .collection-tile:hover .image-wrap img {
    transform: scale(1.06);
  }

  .tile-info h3 {
    font-size: 1.02rem;
    font-weight: 600;
    margin-bottom: 0.15rem;
  }

  .tile-info p {
    font-size: 0.94rem;
    color: var(--text-muted);
  }
</style>
