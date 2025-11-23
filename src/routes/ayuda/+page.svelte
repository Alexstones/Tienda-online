<script lang="ts">
  interface FAQItem {
    question: string;
    answer: string;
  }

  let openIndex: number | null = null;

  function toggleFAQ(index: number) {
    openIndex = openIndex === index ? null : index;
  }

  const faqs: FAQItem[] = [
    {
      question: "How long will my order take to arrive?",
      answer:
        "Orders are processed within 24 hours. Standard shipping within Mexico takes 3–5 business days. You will receive a tracking number as soon as your order is dispatched."
    },
    {
      question: "What is the return policy for jewelry and clothing?",
      answer:
        "Returns are accepted within 30 days of delivery, as long as the piece has not been worn and keeps its original packaging. Clothing must include all tags for hygienic reasons."
    },
    {
      question: "How do I care for my treasures and their energy?",
      answer:
        "We recommend cleaning your jewelry with a soft, dry cloth. To care for the energy, you can place your pieces under the full moon or use a cleansing mist to refresh their vibration."
    },
    {
      question: "Can I customize a piece or create a special order?",
      answer:
        "Yes. We offer customization for selected rings, necklaces and curated pieces. Please reach out through the contact page using the subject line “Custom Order” and we will get back to you within 48 hours."
    }
  ];
</script>

<main class="faq-page">
  <div class="faq-header">
    <h1>Frequently Asked Questions</h1>
    <p>
      Quick answers about orders, shipping, returns and how to care for your Ágappe treasures.
    </p>
  </div>

  <section class="faq-list">
    {#each faqs as item, index}
      <div class="faq-item">
        <button
          class="question-button"
          on:click={() => toggleFAQ(index)}
          aria-expanded={openIndex === index}
          aria-controls={`answer-${index}`}
        >
          {item.question}
          <span class="icon">{openIndex === index ? "−" : "+"}</span>
        </button>

        {#if openIndex === index}
          <div id={`answer-${index}`} class="answer-content">
            <p>{item.answer}</p>
          </div>
        {/if}
      </div>
    {/each}
  </section>
</main>

<style>
  .faq-page {
    max-width: 900px;
    margin: 0 auto;
    padding: 4rem 1rem;
  }

  .faq-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .faq-header h1 {
    font-family: var(--font-serif);
    font-size: 2.3rem;
    color: var(--emerald);
    margin-bottom: 0.6rem;
  }

  .faq-header p {
    color: var(--text-muted);
  }

  .faq-list {
    border-top: 1px solid #d6cfc2;
  }

  .faq-item {
    border-bottom: 1px solid #e2dace;
  }

  .question-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.4rem 0;
    text-align: left;
    font-size: 1.02rem;
    font-weight: 600;
    cursor: pointer;
    background: none;
    border: none;
    color: var(--text-main);
    transition: color 0.2s;
  }

  .question-button:hover {
    color: var(--emerald);
  }

  .icon {
    font-size: 1.4rem;
    margin-left: 1rem;
  }

  .answer-content {
    padding: 0 0 1.4rem 0;
    color: var(--text-muted);
    max-width: 90%;
  }
</style>
