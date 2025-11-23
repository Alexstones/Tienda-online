<script lang="ts">
  export let product: {
    name: string;
    category: string;
    price: string;
    image: string;
  };
</script>

<article class="product-card">
  <div class="product-image">
    <img src={product.image} alt={product.name} loading="lazy" />
  </div>
  <div class="product-info">
    <p class="category">{product.category}</p>
    <h3>{product.name}</h3>
    <p class="price">{product.price}</p>
  </div>
</article>

<style>
  .product-card {
    background: #f4ede3;
    border-radius: 20px;
    padding: 1rem;
    box-shadow: 0 16px 38px rgba(15, 10, 5, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  .product-image {
    border-radius: 16px;
    overflow: hidden;
    background: #e8e0d5;
  }

  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 5;
    transform: scale(1.02);
    transition: transform 0.45s ease;
  }

  .product-card:hover .product-image img {
    transform: scale(1.06);
  }

  .category {
    font-size: 0.8rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }

  .price {
    font-size: 0.95rem;
    color: var(--wine);
  }
</style>
