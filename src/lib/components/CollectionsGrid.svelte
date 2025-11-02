<script lang="ts">
	// Definimos un tipo para las colecciones (opcional, pero buena práctica)
	interface Collection {
		id: number;
		title: string;
		link: string;
		imageClass: string; // Clase CSS para el fondo/imagen del tile
		icon: string; // Ícono o símbolo
	}

	// Datos de tus colecciones/categorías
	const collections: Collection[] = [
		{ id: 1, title: 'Joyas', link: '/colecciones/joyas', imageClass: 'tile-joyas', icon: '★' },
		{ id: 2, title: 'Prendas', link: '/colecciones/prendas', imageClass: 'tile-prendas', icon: '✨' },
		{ id: 3, title: 'Accesorios & Regalos', link: '/colecciones/accesorios', imageClass: 'tile-accesorios', icon: '💎' },
		{ id: 4, title: 'Velas & Esencias', link: '/colecciones/velas', imageClass: 'tile-velas', icon: '🕯️' },
	];
</script>

<section class="collections-grid-container">
	<div class="collections-grid">
		{#each collections as collection}
			<a href={collection.link} class="collection-tile {collection.imageClass}">
				<span class="icon">{collection.icon}</span>
				<h3>{collection.title}</h3>
			</a>
		{/each}
	</div>
</section>

<style>
	/* Contenedor principal para la sección */
	.collections-grid-container {
		max-width: 1200px;
		margin: 3rem auto 0; /* Espacio después de la intro */
		padding: 0 1rem;
	}

	/* Estilos de la cuadrícula */
	.collections-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr); /* 2 columnas en móvil */
		gap: 1rem;
	}

	/* Estilos de cada tile/tarjeta de colección */
	.collection-tile {
		/* Para que el contenido esté centrado en la parte inferior (como en la imagen de referencia) */
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;

		/* Dimensiones y apariencia */
		min-height: 250px;
		padding: 1.5rem;
		border-radius: 12px;
		text-decoration: none;
		color: white; /* Color del texto sobre los fondos oscuros */
		transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
		background-size: cover;
		background-position: center;
		position: relative;
		overflow: hidden;
	}

	.collection-tile::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.25); /* Sombra oscura para mejor contraste del texto */
		z-index: 1;
	}
	
	.collection-tile > * {
		z-index: 2; /* Asegura que el texto esté sobre la capa de sombra */
	}

	.collection-tile:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	}

	.collection-tile h3 {
		font-family: var(--font-serif);
		font-size: 1.5rem;
		margin-top: 0.5rem;
	}

	.icon {
		font-size: 1.5rem;
		color: var(--primary); /* Asumiendo que el color principal es un dorado/amarillo */
	}

	/* Colores/Imágenes de fondo para cada tile */
	/* NOTA: Debes ajustar las URLs o colores de fondo para que coincidan con tus imágenes. */
	/* Asumiré que usarás colores planos o clases que definan el fondo. */
	
	.tile-joyas { background-color: #A32039; /* Un tono rojo oscuro */ } 
	.tile-prendas { background-color: #B5A875; /* Un tono dorado claro */ }
	.tile-accesorios { background-color: #4C0B6B; /* Un tono morado oscuro */ }
	.tile-velas { background-color: #E25822; /* Un tono naranja/terracota */ }
	
	/* Versión de escritorio - 4 columnas */
	@media (min-width: 768px) {
		.collections-grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 1.5rem;
		}
		
		.collection-tile {
			min-height: 300px;
		}
	}
</style>