<script lang="ts">
    // Define la estructura de un testimonio
    interface Testimonial {
        quote: string;
        author: string;
        product?: string;
    }

    // Datos de ejemplo para los testimonios
    const testimonials: Testimonial[] = [
        {
            quote: "Desde que uso mi collar, siento una calma increíble. Es más que una joya, es un recordatorio de mi paz interior. Lujo con un propósito real.",
            author: "Sofía M.",
            product: "Collar Ámbar Solar"
        },
        {
            quote: "La vela de sándalo transformó mi espacio. El empaque era hermoso y la energía que irradia es pura magia.",
            author: "Ricardo G.",
            product: "Vela Esencia Divina"
        },
        {
            quote: "Las prendas son tan suaves y cómodas, que siento que me envuelvo en amor. El diseño es atemporal y consciente.",
            author: "Elena T.",
            product: "Prenda Lino Creadora"
        }
    ];
</script>

<section class="testimonial-container">
    <div class="header">
        <p class="subtitle">VOZ DE LA COMUNIDAD</p>
        <h2 class="title">Tesoros que Inspiran Transformación.</h2>
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
                    <p class="product">Producto: <span>{t.product}</span></p>
                {/if}
            </div>
        {/each}
    </div>
</section>

<style>
    /* Usamos los colores de tu paleta oscura/dorada para mantener el lujo */
    :global(:root) {
        --text-main: #333; /* Texto principal para esta sección clara */
        --gold-text: #E4C894; /* Dorado claro */
        --primary-deep: #581619; /* Vino/Rojo Oscuro */
        --font-serif: "Georgia", serif; 
    }

    .testimonial-container {
        padding: 6rem 2rem;
        background-color: #F8F7F5; /* Fondo claro o perla nacarado para contraste */
        color: var(--text-main);
    }

    .header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .subtitle {
        font-size: 0.9rem;
        letter-spacing: 0.1em;
        color: var(--primary-deep); /* Usa el color de tu marca */
        margin-bottom: 0.5rem;
        font-weight: 600;
    }

    .title {
        font-family: var(--font-serif);
        font-size: 2.5rem;
        color: var(--text-main);
    }

    .testimonials-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(1, 1fr); /* Una columna en móvil */
        gap: 2rem;
    }

    .testimonial-card {
        padding: 2.5rem;
        background-color: white; /* Tarjetas blancas o color crema */
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        position: relative;
    }

    .quote {
        font-family: var(--font-serif);
        font-style: italic;
        font-size: 1.15rem;
        line-height: 1.7;
        margin-bottom: 1.5rem;
        position: relative;
    }
    
    .quotation-mark {
        position: absolute;
        top: -20px;
        left: -10px;
        font-size: 4rem;
        color: var(--gold-text); /* El color dorado resalta la cita */
        line-height: 1;
        opacity: 0.8;
    }

    .author {
        font-weight: 700;
        color: var(--primary-deep);
        margin-top: 1rem;
    }
    
    .product {
        font-size: 0.9rem;
        color: #777;
    }
    .product span {
        font-weight: 600;
        color: var(--text-main);
    }

    /* Desktop layout */
    @media (min-width: 768px) {
        .testimonials-grid {
            grid-template-columns: repeat(3, 1fr); /* Tres columnas en desktop */
        }
        .title {
            font-size: 3rem;
        }
    }
</style>