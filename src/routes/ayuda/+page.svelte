<script lang="ts">
    // Define el tipo de dato para las preguntas frecuentes
    interface FAQItem {
        question: string;
        answer: string;
    }

    // Estado para controlar qué respuesta está abierta
    let openIndex: number | null = null;

    // Función para alternar la visibilidad
    function toggleFAQ(index: number) {
        openIndex = openIndex === index ? null : index;
    }

    // Lista de Preguntas Frecuentes
    const faqs: FAQItem[] = [
        {
            question: "¿Cuánto tiempo tarda mi pedido en llegar?",
            answer: "Los pedidos se procesan en 24 horas. El tiempo de envío estándar dentro de México es de 3 a 5 días hábiles. Recibirás un correo con tu número de seguimiento tan pronto como se envíe."
        },
        {
            question: "¿Cuál es la política de devolución de joyas y prendas?",
            answer: "Aceptamos devoluciones dentro de los 30 días posteriores a la recepción, siempre que el artículo no haya sido usado y conserve su empaque original. Por razones de higiene, las prendas deben tener todas las etiquetas puestas."
        },
        {
            question: "¿Cómo cuido mis tesoros para mantener su energía?",
            answer: "Recomendamos limpiar tus joyas con un paño suave y seco. Para la energía, puedes dejarlas bajo la luz de la luna llena o usar nuestro 'Spray de Limpieza ÁGAPPE' (disponible en la sección de Esencias) para purificar los minerales."
        },
        {
            question: "¿Puedo personalizar un pedido o joya?",
            answer: "Sí, ofrecemos servicios de personalización para anillos y collares. Por favor, contáctanos a través del formulario de contacto especificando 'Pedido Personalizado' y te responderemos en 48 horas para discutir tu diseño único."
        }
    ];
</script>

<main class="faq-page">
    <div class="faq-header">
        <h1>Preguntas Frecuentes</h1>
        <p>Encuentra respuestas rápidas sobre tu pedido, envíos y el cuidado energético de tus tesoros.</p>
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
                    <span class="icon">{openIndex === index ? '−' : '+'}</span>
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
    /* Usaremos los colores de tu paleta oscura/dorada para mantener el lujo */
    :global(:root) {
        --text-main: #333; /* Texto principal para esta sección clara */
        --primary-deep: #581619; /* Vino/Rojo Oscuro */
        --text-muted: #6c757d;
        --font-serif: "Georgia", serif; 
    }
    
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
        font-size: 3rem;
        color: var(--primary-deep);
        margin-bottom: 0.5rem;
    }

    .faq-header p {
        color: var(--text-muted);
    }

    .faq-list {
        border-top: 1px solid #ccc;
    }

    .faq-item {
        border-bottom: 1px solid #eee;
    }

    .question-button {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0;
        text-align: left;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        background: none;
        border: none;
        color: var(--text-main);
        transition: color 0.2s;
    }

    .question-button:hover {
        color: var(--primary-deep);
    }

    .icon {
        font-size: 1.5rem;
        margin-left: 1rem;
    }

    .answer-content {
        padding: 0 0 1.5rem 0;
        color: var(--text-muted);
        max-width: 90%;
    }
</style>