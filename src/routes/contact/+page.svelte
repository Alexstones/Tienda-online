<script lang="ts">
  const email = "hello@agappe.example";
</script>

<main class="contact-page">
  <section class="contact-card">
    <h1>Contact</h1>
    <p class="subtitle">
      For questions, orders or collaborations, we would love to hear from you.
    </p>

    <div class="contact-block">
      <p class="label">Email</p>
      <a class="value" href={`mailto:${email}`}>{email}</a>
    </div>

    <div class="contact-block">
      <p class="label">Social</p>
      <p class="value">
        Instagram · TikTok · Pinterest<br />
        <span class="hint">(@ your handles here)</span>
      </p>
    </div>
  </section>
</main>

<style>
  .contact-page {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .contact-card {
    width: 100%;
    background: #f4ede3;
    border-radius: 22px;
    padding: 2.3rem 2rem;
    box-shadow: 0 18px 45px rgba(15, 10, 5, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.03);
  }

  h1 {
    font-family: var(--font-serif);
    font-size: 1.9rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 0.7rem;
  }

  .subtitle {
    font-size: 0.98rem;
    color: var(--text-muted);
    margin-bottom: 1.8rem;
  }

  .contact-block {
    margin-bottom: 1.4rem;
  }

  .label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--text-muted);
    margin-bottom: 0.2rem;
  }

  .value {
    font-size: 1rem;
    color: var(--text-main);
    text-decoration: none;
  }

  .value:hover {
    color: var(--emerald);
  }

  .hint {
    font-size: 0.9rem;
    color: var(--text-muted);
  }
</style>
