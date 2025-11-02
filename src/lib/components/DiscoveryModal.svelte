<script>
    import { createEventDispatcher } from 'svelte';

    // Para emitir un evento que le diga a la página que cierre el modal
    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('close');
    }
</script>

<div class="modal-backdrop" on:click={closeModal}>
    <div class="modal-content" on:click|stopPropagation>
        
        <button class="close-btn" on:click={closeModal}>×</button>

        <section class="hero-dark-content">
            <div class="content">
                <h1 class="title-main">ÁGAPPE</h1>
                <p class="subtitle-main">An infinite world of treasures.</p>
                
                <div class="nav-tiles">
                    <a href="/colecciones/fashion-jewelry" class="nav-tile tile-red">
                        <span class="icon">👗</span>
                        <span class="text">Fashion & Jewelry</span>
                    </a>
                    <a href="/colecciones/chests-gifts" class="nav-tile tile-gold">
                        <span class="icon">🎁</span>
                        <span class="text">Chests & Gifts</span>
                    </a>
                    <a href="/colecciones/candles-fragrances" class="nav-tile tile-blue">
                        <span class="icon">🕯️</span>
                        <span class="text">Candles & Fragrances</span>
                    </a>
                </div>

                <div class="message-section">
                    <h2>YOU ARE LIGHT. YOU ARE BEAUTY. YOU ARE POWER.</h2>
                    <p>Each delivery is a treasure wrapped with intention.</p>
                </div>
            </div>
        </section>
        
    </div>
</div>

<style>
    /* --- VARIABLES (Asegúrate de que estas coincidan con tu tema global) --- */
    :global(:root) {
        --hero-background: #581619; /* Rojo oscuro / Vino */
        --tile-red: #8B1A24; 
        --tile-gold-bg: #A08051; 
        --tile-blue-bg: #3E4A61;
        --gold-text: #E4C894; /* Dorado claro para texto principal */
        --text-light: #F0EFEF; /* Texto blanco/claro */
        --font-serif: "Georgia", serif; /* Reemplaza con tu font-serif real */
    }
    
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.9); /* Fondo negro semi-transparente */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000; /* Asegura que esté por encima de todo */
        backdrop-filter: blur(2px);
    }
    
    .modal-content {
        position: relative;
        /* El modal-content será el contenedor de tu diseño oscuro */
        background-color: var(--hero-background);
        border: 10px solid #501015;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        max-width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        transition: transform 0.3s ease-out;
    }

    .close-btn {
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 2rem;
        color: var(--gold-text);
        cursor: pointer;
        z-index: 1002;
    }

    /* --- ESTILOS COPIADOS DE TU DISEÑO OSCURO (AJUSTADOS) --- */
    .hero-dark-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 4rem 1rem;
        color: var(--text-light);
        min-width: 300px;
    }
    
    .content {
        text-align: center;
        max-width: 1000px;
        width: 100%;
    }
    
    .title-main { font-family: var(--font-serif); font-size: 3rem; letter-spacing: 0.1em; color: var(--gold-text); margin-bottom: 0.5rem; }
    .subtitle-main { font-size: 1.2rem; margin-bottom: 3rem; }
    
    .nav-tiles { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; margin-bottom: 5rem; }
    
    .nav-tile {
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        width: 200px; height: 130px; text-decoration: none; border-radius: 8px; padding: 1rem;
        color: var(--text-light); font-weight: 500; transition: transform 0.3s, box-shadow 0.3s;
        border: 2px solid var(--gold-text); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
    
    .nav-tile:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5); }
    
    .icon { font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--gold-text); }
    .text { font-size: 1rem; font-weight: 600; }
    
    .tile-red { background-color: var(--tile-red); }
    .tile-gold { background-color: var(--tile-gold-bg); color: black; }
    .tile-blue { background-color: var(--tile-blue-bg); }
    
    .message-section h2 { font-family: var(--font-serif); font-size: 3rem; letter-spacing: 0.1em; color: var(--gold-text); margin-bottom: 0.5rem; }
    .message-section p { font-size: 1rem; font-style: italic; }

    @media (min-width: 1024px) {
		.title-main { font-size: 4rem; }
		.message-section h2 { font-size: 4.5rem; }
	}
</style>