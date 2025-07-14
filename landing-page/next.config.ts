import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración base (no tocar)
  output: 'standalone', // ✔️ Necesario para Vercel (no afecta desarrollo)
  pageExtensions: ['tsx', 'ts', 'page.tsx'], // ✔️ Mantener tus extensiones
  
  // Rewrites solo desarrollo (seguro)
  rewrites: process.env.NODE_ENV === 'development' ? async () => [
    { source: '/', destination: '/page' },
    { source: '/contacto', destination: '/formularioContacto' },
    { source: '/terminos', destination: '/Terminos' }
  ] : undefined,

  // Optimizaciones solo producción (seguras)
  ...(process.env.NODE_ENV === 'production' && {
    images: { unoptimized: true }, // ✔️ Mejor rendimiento en Vercel
    compress: true // ✔️ Compresión automática
  }),

  // Experimental (mantenemos solo lo tuyo)
  experimental: {
    externalDir: true // ✔️ Tu configuración original
  }
};

export default nextConfig;