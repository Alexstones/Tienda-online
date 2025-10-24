// tailwind.config.cjs

module.exports = {
  // ... otras configuraciones
  theme: {
    extend: {
      colors: {
        // Paleta base etérea
        'agappe-lila': '#EFEAFF', // Fondo barra lateral
        'agappe-beige': '#FFFBF5', // Fondo principal
        'agappe-cuarzo': '#FBECEF', // Acento Rosa Cuarzo
        'agappe-menta': '#E7F9F5', // Acento Verde Suave
        
        // Acentos vibrantes / metálicos (simulando Foil/Mate)
        'agappe-dorado': '#C8A362', // Dorado Mate/Foil para iconos y texto principal
        'agappe-esmeralda': '#3D8C79', // Esmeralda para métricas
        'agappe-burgundy': '#7B3948', // Burgundy para métricas
        'agappe-noche': '#1C2E4A', // Azul Noche para texto oscuro
      },
      fontFamily: {
        // Usa una fuente elegante. Ej: Playfair Display para títulos, Inter para cuerpo.
        'serif-elegant': ['Playfair Display', 'serif'],
        'sans-soft': ['Inter', 'sans-serif'],
      },
    },
  },
  // ...
}