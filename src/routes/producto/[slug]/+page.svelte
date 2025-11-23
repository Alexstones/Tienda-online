<script lang="ts">
  export let params: { slug: string };

  const product = {
    name: "Golden Dawn Ring",
    description:
      "A softly sculpted ring that catches the light in every movement — a reminder of new beginnings and gentle strength.",
    image: "/images/product-ring.jpg",
    intent: "Clarity"
  };
</script>

<main class="product-page">
  <article class="product">
    <div class="media">
      <img src={product.image} alt={product.name} loading="eager" />
    </div>
    <div class="info">
      <p class="eyebrow">Ágappe · Curated jewelry</p>
      <h1>{product.name}</h1>
      <p class="description">{product.description}</p>
      <p class="intent">✨ Intention: {product.intent}</p>
      <button class="cta" type="button">Add to my ritual</button>
    </div>
  </article>
</main>

<style>
  .product-page {
    max-width: 960px;
    margin: 0 auto;
  }

  .product {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.2fr);
    gap: 2.4rem;
    align-items: center;
  }

  .media img {
    width: 100%;
    max-width: 420px;
    border-radius: 20px;
    object-fit: cover;
    aspect-ratio: 4 / 5;
    box-shadow: 0 22px 55px rgba(0, 0, 0, 0.2);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 0.6rem;
  }

  h1 {
    font-family: var(--font-serif);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 0.98rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .intent {
    margin: 1rem 0 1.4rem;
    color: var(--wine);
    font-style: italic;
  }

  .cta {
    padding: 0.85rem 1.9rem;
    border-radius: 999px;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.8rem;
    cursor: pointer;
    background: radial-gradient(circle at top left, var(--gold-soft), #f3e7cf);
    color: #2a2318;
  }

  @media (max-width: 860px) {
    .product {
      grid-template-columns: 1fr;
    }
  }
</style>
