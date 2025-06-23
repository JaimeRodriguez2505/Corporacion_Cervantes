// src/data/marcas.js

// 1. CREAMOS UNA FUNCIÓN AUXILIAR
// Esta función usa la característica especial de Vite para encontrar la ruta correcta
// de una imagen que está dentro de la carpeta /src.
const getLogoUrl = (name) => {
  // La ruta debe ser relativa desde ESTE archivo (marcas.js) hasta tus imágenes.
  return new URL(`/public/assets/marcas/${name}`, import.meta.url).href;
};

// 2. AHORA 'logoFile' CONTENDRÁ LA URL COMPLETA Y CORRECTA
export const marcasDB = [
  // --- Audio ---
  {
    id: 'd&b',
    name: 'd&b audiotechnik',
    logoFile: getLogoUrl('dyb.png'), // Usamos la función para obtener la URL
    category: 'audio',
  },
  {
    id: 'L-Acoustics',
    name: 'L-Acoustics',
    logoFile: getLogoUrl('la.png'),
    category: 'audio',
  },
  {
    id: 'Meyer Sound',
    name: 'Meyer Sound',
    logoFile: getLogoUrl('meyer.png'),
    category: 'audio',
  },
  {
    id: 'l-acoustics',
    name: 'L-Acoustics',
    logoFile: getLogoUrl('l-acoustics.svg'),
    category: 'audio',
  },

  // --- Iluminación ---
  {
    id: 'Claypaky',
    name: 'Professional Lighting',
    logoFile: getLogoUrl('clay.jpg'),
    category: 'lighting',
  },
  {
    id: 'Robe',
    name: 'Robe Lighting',
    logoFile: getLogoUrl('robe.png'),
    category: 'lighting',
  },
  {
    id: 'ma',
    name: 'MA Lighting',
    logoFile: getLogoUrl('ma.svg'),
    category: 'lighting',
  },
  {
    id: 'claypaky',
    name: 'Clay Paky',
    logoFile: getLogoUrl('claypaky.svg'),
    category: 'lighting',
  },

  // --- Video y Pantallas ---
  {
    id: 'barco',
    name: 'Barco',
    logoFile: getLogoUrl('barco.svg'),
    category: 'video',
  },
  {
    id: 'unilumin',
    name: 'Unilumin',
    logoFile: getLogoUrl('unilumin.svg'),
    category: 'video',
  },
  {
    id: 'disguise',
    name: 'Disguise',
    logoFile: getLogoUrl('disguise.svg'),
    category: 'video',
  },
];