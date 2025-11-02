<script lang="ts">
    // --- ESTADO Y LÓGICA DEL TEST INTERACTIVO ---
    let currentStep = 1; // 1: Inicio, 2: Pregunta, 3: Resultado
    let selectedVibration: 'CALMA' | 'ÉXITO' | 'AMOR' | null = null;

    // Datos del resultado, con colores y sugerencias para ÁGAPPE
    const results = {
        CALMA: {
            color: '#0D3627', // Un verde oscuro y terroso (para el borde del resultado)
            vibration: "CALMA Y CONEXIÓN",
            message: "Tu alma pide un respiro. Busca la serenidad en los pequeños rituales. Tu energía se centrará en el presente.",
            suggestion: "Joyería con Amatista o Cuarzo Ahumado."
        },
        ÉXITO: {
            color: '#B3914B', // Dorado profundo
            vibration: "ÉXITO Y ABUNDANCIA",
            message: "Estás lista para manifestar tus mayores deseos. Focaliza tu energía para atraer la prosperidad y el coraje.",
            suggestion: "Joyería con Citrino o Piedra del Sol."
        },
        AMOR: {
            color: '#6E1B3B', // Un rojo vino/magia (similar a tu Hero oscuro)
            vibration: "AMOR Y COMPASIÓN",
            message: "Tu corazón está abierto. Conéctate con el amor propio y comparte tu luz. El universo te lo devolverá multiplicado.",
            suggestion: "Joyería con Cuarzo Rosa o Esencias Florales."
        },
    };

    // Función que inicia el test y avanza al paso de preguntas
    function startTest() {
        currentStep = 2;
    }

    // Función que selecciona una opción y avanza al resultado
    function selectOption(vibration: 'CALMA' | 'ÉXITO' | 'AMOR') {
        selectedVibration = vibration;
        currentStep = 3;
    }
    
    // Función para reiniciar
    function resetTest() {
        currentStep = 1;
        selectedVibration = null;
    }
</script>

<main class="ritual-page">

    {#if currentStep === 1}
        <div class="ritual-card start-screen">
            <span class="icon">🔮</span>
            <h1 class="title">¿Qué Vibra Hoy?</h1>
            <p class="message">Un momento para conectar con tu energía actual y descubrir el tesoro ÁGAPPE ideal para ti.</p>
            <button on:click={startTest} class="btn btn--gold">Iniciar Conexión</button>
        </div>

    {:else if currentStep === 2}
        <div class="ritual-card question-screen">
            <h2 class="title-small">Pregunta Única:</h2>
            <p class="message">¿Cuál de estas intenciones necesitas elevar hoy?</p>
            
            <div class="options-grid">
                <button on:click={() => selectOption('CALMA')} class="btn btn--option btn--calma">CALMA</button>
                <button on:click={() => selectOption('ÉXITO')} class="btn btn--option btn--exito">ÉXITO</button>
                <button on:click={() => selectOption('AMOR')} class="btn btn--option btn--amor">AMOR</button>
            </div>
            <button on:click={resetTest} class="btn btn--ghost-small">Reiniciar</button>
        </div>

    {:else if currentStep === 3 && selectedVibration}
        {@const result = results[selectedVibration]}
        <div class="ritual-card result-screen" style="--result-color: {result.color};">
            <span class="icon-result">✨</span>
            <h3 class="result-label">Tu Energía de Hoy es:</h3>
            <h2 class="result-vibration">{result.vibration}</h2>
            <p class="message-result">{result.message}</p>
            
            <div class="suggestion-box">
                <p>Nuestra sugerencia ÁGAPPE:</p>
                <strong>{result.suggestion}</strong>
            </div>

            <a href="/colecciones" class="btn btn--gold">Ver Colecciones por Intención</a>
            <button on:click={resetTest} class="btn btn--ghost-small">Hacer el Test de Nuevo</button>
        </div>
    {/if}

</main>

<style>
    /* --- VARIABLES DE ESTILO --- */
    :global(:root) {
        --gold-text: #E4C894; 
        --font-serif: "Georgia", serif; 
    }
    
    /* Estilos generales de la página */
    .ritual-page {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        text-align: center;
        background-color: #1a1a1a; /* Fondo muy oscuro para el contraste de lujo */
        padding: 4rem 1rem;
    }

    .ritual-card {
        max-width: 500px;
        background: #252525;
        color: white;
        padding: 3rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .title {
        font-family: var(--font-serif);
        font-size: 2.5rem;
        color: var(--gold-text);
        margin-bottom: 1.5rem;
    }
    
    .title-small {
        font-family: var(--font-serif);
        font-size: 1.8rem;
        color: var(--gold-text);
        margin-bottom: 1rem;
    }

    .icon {
        font-size: 3rem;
        display: block;
        margin-bottom: 1rem;
    }
    
    .message {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        color: #ccc;
    }
    
    /* Estilos de botones generales */
    .btn {
        display: block;
        width: 100%;
        padding: 0.8rem 2rem;
        border-radius: 999px;
        text-decoration: none;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s, opacity 0.2s;
        margin-bottom: 1rem;
        text-align: center;
    }

    .btn--gold {
        background: linear-gradient(135deg, var(--gold-text), #c7a76c);
        color: #1a1a1a;
        border: none;
    }
    .btn--gold:hover {
        transform: translateY(-2px);
        opacity: 0.9;
    }
    
    .btn--ghost-small {
        display: inline-block;
        width: auto;
        font-size: 0.9rem;
        background: none;
        color: #ccc;
        border: none;
        text-decoration: underline;
        margin-top: 1rem;
        cursor: pointer;
    }

    /* Estilos de opciones de pregunta */
    .options-grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .btn--option {
        background: none;
        border: 2px solid;
        color: white;
        font-size: 1.1rem;
    }
    
    /* Colores únicos para cada opción */
    .btn--calma { border-color: #0D3627; }
    .btn--calma:hover { background-color: #0D3627; }
    
    .btn--exito { border-color: #B3914B; }
    .btn--exito:hover { background-color: #B3914B; }
    
    .btn--amor { border-color: #6E1B3B; }
    .btn--amor:hover { background-color: #6E1B3B; }
    
    /* Estilos de la pantalla de resultado */
    .result-screen {
        border-left: 5px solid var(--result-color); /* Borde con color de resultado */
        background: #181818;
    }

    .icon-result {
        font-size: 2.5rem;
        display: block;
        color: var(--gold-text);
        margin-bottom: 0.5rem;
    }
    
    .result-label {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #aaa;
    }
    
    .result-vibration {
        font-family: var(--font-serif);
        font-size: 2.2rem;
        color: var(--result-color);
        margin-bottom: 1rem;
    }
    
    .message-result {
        color: #eee;
        font-style: italic;
        margin-bottom: 2rem;
    }
    
    .suggestion-box {
        background-color: #2c2c2c;
        padding: 1rem;
        border-radius: 6px;
        margin-bottom: 2rem;
        color: #ddd;
    }
    
    .suggestion-box strong {
        color: var(--gold-text);
        display: block;
        margin-top: 0.3rem;
        font-size: 1.1rem;
    }
</style>