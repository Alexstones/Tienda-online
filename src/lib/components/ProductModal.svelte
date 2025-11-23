<script lang="ts">
  export let product: {
    name: string;
    description: string;
    intent?: string;
    image: string;
  };

  export let onClose: () => void;
</script>

<div class="backdrop" on:click={onClose}></div>
<div class="modal">
  <button class="close" on:click={onClose} aria-label="Close modal">×</button>

  <div class="modal-grid">
    <div class="media">
      <img src={product.image} alt={product.name} loading="lazy" />
    </div>
    <div class="info">
      <h2>{product.name}</h2>
      <p class="description">{product.description}</p>
      {#if product.intent}
        <p class="intent">✨ Intention: {product.intent}</p>
      {/if}
      <button class="cta" type="button" on:click={onClose}>
        Add to my ritual
      </button>
    </div>
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 40;
  }

  .modal {
    position: fixed;
    inset: 50% auto auto 50%;
    transform: translate(-50%, -50%);
    background: #f4ede3;
    border-radius: 22px;
    padding: 1.8rem 1.7rem;
    max-width: 720px;
    width: 92%;
    box-shadow: 0 26px 70px rgba(0, 0, 0, 0.4);
    z-index: 50;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  .close {
    position: absolute;
    top: 0.9rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-muted);
  }

  .modal-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.2fr);
    gap: 1.6rem;
    align-items: center;
  }

  .media img {
    width: 100%;
    border-radius: 18px;
    object-fit: cover;
    aspect-ratio: 4 / 5;
  }

  .info h2 {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  .description {
    font-size: 0.96rem;
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 1rem;
  }

  .intent {
    margin-bottom: 1.2rem;
    font-style: italic;
    color: var(--wine);
  }

  .cta {
    padding: 0.8rem 1.8rem;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.8rem;
    background: radial-gradient(circle at top left, var(--gold-soft), #f3e7cf);
    color: #2a2318;
  }

  @media (max-width: 720px) {
    .modal-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
