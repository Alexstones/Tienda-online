<script>
  export let product;
  export let onClose;
</script>

<div class="backdrop" on:click={onClose}></div>
<div class="modal">
  <img src={product.image} alt={product.title} />
  <h2>{product.title}</h2>
  <p>{product.description}</p>
  <p class="intencion">✨ Intención: {product.intent}</p>
  <button class="btn btn--gold" on:click={onClose}>Cerrar</button>
</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
  }
  .modal {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 1.2rem;
    width: 90%;
    max-width: 480px;
    text-align: center;
  }
  .intencion {
    margin: 1rem 0;
    font-style: italic;
    color: var(--primary-deep);
  }
</style>
