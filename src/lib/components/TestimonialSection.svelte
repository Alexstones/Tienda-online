<script lang="ts">
  interface Testimonial {
    quote: string;
    author: string;
    product?: string;
  }

  const testimonials: Testimonial[] = [
    {
      quote:
        "Since I started wearing my Ágappe necklace, I feel a calm confidence. It’s more than jewelry — it’s a soft reminder of my inner light.",
      author: "Sofia M.",
      product: "Golden Dawn Necklace"
    },
    {
      quote:
        "The candle transformed my space. The scent is gentle but powerful, and the packaging felt like unwrapping a small ritual.",
      author: "Ricardo G.",
      product: "Luminous Essence Candle"
    },
    {
      quote:
        "The fabrics, the fit, the details — every piece feels like it was chosen just for me. Elegant, comfortable and intentional.",
      author: "Elena T.",
      product: "Celestial Linen Dress"
    }
  ];
</script>

<section class="testimonial-container">
  <div class="header">
    <p class="subtitle">COMMUNITY VOICES</p>
    <h2 class="title">Treasures that inspire transformation.</h2>
  </div>

  <div class="testimonials-grid">
    {#each testimonials as t}
      <div class="testimonial-card">
        <blockquote class="quote">
          <span class="quotation-mark">“</span>
          {t.quote}
        </blockquote>
        <p class="author">— {t.author}</p>
        {#if t.product}
          <p class="product">
            Featured piece: <span>{t.product}</span>
          </p>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  .testimonial-container {
    padding: 4.5rem 2rem;
    background-color: #f5efe6;
    color: var(--text-main);
  }

  .header {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  .subtitle {
    font-size: 0.9rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--wine);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .title {
    font-family: var(--font-serif);
    font-size: 2.2rem;
  }

  .testimonials-grid {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  .testimonial-card {
    padding: 2.3rem 2.2rem;
    background-color: #fff4e6;
    border-radius: 18px;
    box-shadow: 0 16px 35px rgba(15, 10, 5, 0.08);
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.03);
  }

  .quote {
    font-family: var(--font-serif);
    font-style: italic;
    font-size: 1.08rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    position: relative;
  }

  .quotation-mark {
    position: absolute;
    top: -22px;
    left: -8px;
    font-size: 3.5rem;
    color: var(--gold);
    line-height: 1;
    opacity: 0.7;
  }

  .author {
    font-weight: 700;
    color: var(--emerald);
    margin-top: 0.7rem;
  }

  .product {
    font-size: 0.9rem;
    color: var(--text-muted);
  }

  .product span {
    font-weight: 600;
    color: var(--text-main);
  }

  @media (min-width: 768px) {
    .testimonials-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .title {
      font-size: 2.6rem;
    }
  }
</style>
