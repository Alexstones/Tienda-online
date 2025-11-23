<script lang="ts">
  let currentStep: 1 | 2 | 3 = 1;
  let selectedVibration: "CALM" | "SUCCESS" | "LOVE" | null = null;

  const results = {
    CALM: {
      color: "#0D3627",
      vibration: "CALM & CONNECTION",
      message:
        "Your soul is asking for softness. Slow down, breathe and choose pieces that anchor you into the present moment.",
      suggestion: "Jewelry with amethyst or smoky quartz."
    },
    SUCCESS: {
      color: "#B3914B",
      vibration: "SUCCESS & ABUNDANCE",
      message:
        "You are ready to move. Focus your energy, set clear intentions and choose treasures that remind you of your power.",
      suggestion: "Jewelry with citrine or sunstone."
    },
    LOVE: {
      color: "#6E1B3B",
      vibration: "LOVE & COMPASSION",
      message:
        "Your heart is open. Nourish self-love and allow yourself to be held by beauty, softness and kind rituals.",
      suggestion: "Jewelry with rose quartz or soft floral essences."
    }
  };

  function startTest() {
    currentStep = 2;
  }

  function selectOption(vibration: "CALM" | "SUCCESS" | "LOVE") {
    selectedVibration = vibration;
    currentStep = 3;
  }

  function resetTest() {
    currentStep = 1;
    selectedVibration = null;
  }
</script>

<main class="ritual-page">
  {#if currentStep === 1}
    <div class="ritual-card start">
      <span class="icon">🔮</span>
      <h1 class="title">What is vibing today?</h1>
      <p class="message">
        Take a moment to connect with your energy and discover the Ágappe treasure that resonates with you today.
      </p>
      <button on:click={startTest} class="btn-gold">Start</button>
    </div>
  {:else if currentStep === 2}
    <div class="ritual-card question">
      <h2 class="title-small">One simple question</h2>
      <p class="message">Which intention do you need to elevate today?</p>
      <div class="options-grid">
        <button on:click={() => selectOption("CALM")} class="btn-option btn-calm">CALM</button>
        <button on:click={() => selectOption("SUCCESS")} class="btn-option btn-success">SUCCESS</button>
        <button on:click={() => selectOption("LOVE")} class="btn-option btn-love">LOVE</button>
      </div>
      <button on:click={resetTest} class="btn-reset">Reset</button>
    </div>
  {:else if currentStep === 3 && selectedVibration}
    {@const result = results[selectedVibration]}
    <div class="ritual-card result" style={`--result-color:${result.color}`}>
      <span class="icon-result">✨</span>
      <h3 class="result-label">Your energy today</h3>
      <h2 class="result-vibration">{result.vibration}</h2>
      <p class="message-result">{result.message}</p>
      <div class="suggestion-box">
        <p>Ágappe suggestion:</p>
        <strong>{result.suggestion}</strong>
      </div>
      <a href="/shop" class="btn-gold">See pieces by intention</a>
      <button on:click={resetTest} class="btn-reset">Take the test again</button>
    </div>
  {/if}
</main>

<style>
  .ritual-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    text-align: center;
    background-color: #191716;
    padding: 4rem 1rem;
  }

  .ritual-card {
    max-width: 520px;
    background: #262220;
    color: #fff;
    padding: 3rem 2.4rem;
    border-radius: 20px;
    box-shadow: 0 20px 55px rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .title {
    font-family: var(--font-serif);
    font-size: 2.2rem;
    color: var(--gold-soft);
    margin-bottom: 1.4rem;
  }

  .title-small {
    font-family: var(--font-serif);
    font-size: 1.7rem;
    color: var(--gold-soft);
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1rem;
  }

  .message {
    font-size: 1.02rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    color: #dcd3cc;
  }

  .btn-gold {
    display: block;
    width: 100%;
    padding: 0.85rem 2rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.82rem;
    border: none;
    background: radial-gradient(circle at top left, var(--gold-soft), #c6a464);
    color: #241f17;
  }

  .btn-reset {
    display: inline-block;
    margin-top: 1.1rem;
    font-size: 0.9rem;
    background: none;
    color: #d0c4b8;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }

  .options-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .btn-option {
    padding: 0.9rem 1.8rem;
    border-radius: 999px;
    border: 2px solid;
    background: none;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }

  .btn-calm {
    border-color: #0d3627;
  }
  .btn-calm:hover {
    background-color: #0d3627;
  }

  .btn-success {
    border-color: #b3914b;
  }
  .btn-success:hover {
    background-color: #b3914b;
  }

  .btn-love {
    border-color: #6e1b3b;
  }
  .btn-love:hover {
    background-color: #6e1b3b;
  }

  .result {
    border-left: 5px solid var(--result-color);
    background: #201c1a;
  }

  .icon-result {
    font-size: 2.4rem;
    display: block;
    color: var(--gold-soft);
    margin-bottom: 0.6rem;
  }

  .result-label {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: #b5a89b;
  }

  .result-vibration {
    font-family: var(--font-serif);
    font-size: 2rem;
    color: var(--result-color);
    margin-bottom: 1rem;
  }

  .message-result {
    color: #e2d7cc;
    font-style: italic;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .suggestion-box {
    background-color: #2b2623;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    color: #ddd0c2;
  }

  .suggestion-box strong {
    color: var(--gold-soft);
    display: block;
    margin-top: 0.3rem;
    font-size: 1.05rem;
  }
</style>
