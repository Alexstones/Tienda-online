<script>
  export let product;
</script>

<article class="product-card">
  <div class="product-image">
    <img src={product.image} alt={product.title} />
  </div>
  <h3>{product.title}</h3>
  <p class="tag">{product.category}</p>
  <button class="btn btn--gold">Ver</button>
</article>

<style>
  .product-card {
    background: var(--card-bg);
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    padding: 1rem;
    text-align: center;
    transition: all 0.3s ease;
  }
  .product-card:hover {
    transform: translateY(-6px);
  }
  .product-image {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in oklab, var(--accent) 20%, var(--card-bg) 80%);
    border-radius: 0.8rem;
    margin-bottom: 1rem;
  }
  img { max-height: 160px; object-fit: contain; }
  .tag {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 0.6rem;
  }
</style>

