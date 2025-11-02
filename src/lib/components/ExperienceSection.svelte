<script>
	// Aquí puedes definir props si la sección necesitara datos dinámicos.
	// Por ahora, usaremos texto y contenido estático según tu diseño.
</script>

<section class="experience-section">
	<div class="content-wrapper">
		<div class="text-content">
			<p class="subtitle">EXPERIENCIA ÁGAPPE</p>
			<h1>Eres luz. Eres belleza. Eres poder.</h1>
			<p class="description">
				ÁGAPPE nace como un espacio de sanación para descubrir tu divino <span style="font-style: italic;">ser</span>. 
				Aquí encuentras tesoros que brillan con tu propia luz.
			</p>
			</div>
		
		<div class="visual-content">
			<div class="visual-placeholder red-tile">
				<img src="/images/agappeazul.jpeg" alt="Caja Ágappe roja" />
			</div>
			<div class="visual-placeholder green-tile">
				<img src="/images/agappeguinda.jpeg" alt="Caja Ágappe verde" />
			</div>
			<div class="visual-placeholder gold-tile">
				<img src="/images/agappelila.jpeg" alt="Caja Ágappe dorada" />
			</div>
		</div>
	</div>

	<div class="cta-bottom">
		<p>Únete a nuestra comunidad y comparte tu tesoro ÁGAPPE.</p>
		</div>
</section>

<style>
	/* Los colores de fondo y texto deben coincidir con tu tema (variables CSS) */
	.experience-section {
		background-color: var(--primary-dark-red); /* Un color rojo oscuro/vino para el fondo */
		color: white; /* Texto blanco para contraste */
		padding-top: 4rem; 
	}
	
	.content-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		flex-direction: column; /* Apilado en móvil */
		align-items: center;
		gap: 2rem;
	}

	.text-content {
		max-width: 500px;
		text-align: center;
	}

	.subtitle {
		font-family: var(--font-serif);
		font-size: 0.9rem;
		letter-spacing: 0.15em;
		margin-bottom: 0.5rem;
		color: var(--primary-light-gold); /* Color dorado claro */
	}

	.text-content h1 {
		font-family: var(--font-serif); /* Fuente elegante para títulos */
		font-size: 2.5rem;
		line-height: 1.2;
		margin-bottom: 1.5rem;
		color: white;
	}

	.description {
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	/* Contenido Visual (los pequeños cuadros) */
	.visual-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.5rem;
		max-width: 300px; /* Asegura que no sea demasiado ancho */
	}
	
	.visual-placeholder {
		/* Puedes usar esto para estilizar las cajas si no usas imágenes reales */
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1 / 1.4; /* Relación de aspecto vertical */
		border-radius: 4px;
		overflow: hidden;
	}
	
	.visual-placeholder img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Estilos para el texto de abajo */
	.cta-bottom {
		background-color: var(--primary-deep-green); /* El color verde oscuro de tu Hero */
		padding: 1.5rem 1rem;
		text-align: center;
		font-weight: 500;
		margin-top: 4rem; /* Separa del contenido superior */
	}
	
	.cta-bottom p {
		max-width: 900px;
		margin: 0 auto;
		font-size: 1.1rem;
	}


	/* Desktop Styles */
	@media (min-width: 768px) {
		.content-wrapper {
			flex-direction: row; /* Uno al lado del otro en escritorio */
			justify-content: space-between;
			align-items: flex-start;
			padding: 4rem 1rem;
		}

		.text-content {
			text-align: left;
			max-width: 50%;
			padding-right: 2rem;
		}

		.description {
			margin-left: 0;
			margin-right: 0;
		}
		
		.visual-content {
			/* Mover la posición de las cajas para que se parezcan más al diseño */
			max-width: 450px;
			align-self: center;
			/* Se puede usar grid-area o posicionamiento absoluto si se busca el efecto de superposición exacto */
		}
	}
</style>