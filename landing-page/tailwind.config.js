module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Ruta a tus archivos en /app
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Ruta a componentes
  ],
  theme: {
    extend: {}, // Extiende colores/fuentes aquí si necesitas
  },
  plugins: [], // Añade plugins como @tailwindcss/forms si los usas
}