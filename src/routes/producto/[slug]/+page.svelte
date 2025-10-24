<script>
  export let params;
  let product = {
    title: "Anillo Amanecer",
    description: "Joyas con intención. Despierta tu energía interior.",
    image: "/images/agappe.jpeg",
    intent: "Claridad"
  };
</script>

<article>
  <img src={product.image} alt={product.title} />
  <h1>{product.title}</h1>
  <p>{product.description}</p>
  <p class="intent">✨ Intención: {product.intent}</p>
  <button class="btn btn--gold">Añadir a mi ritual</button>
</article>

<style>
  article {
    max-width: 720px;
  }
  img {
    width: 100%;
    max-width: 420px;
    border-radius: 1rem;
  }
  h1 {
    font-family: var(--font-serif);
    margin-top: 1rem;
  }
  .intent {
    margin: 1rem 0;
    color: var(--primary-deep);
  }
</style>
