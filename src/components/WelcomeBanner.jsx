import React from 'react';
import { motion } from 'framer-motion';

const WelcomeBanner = ({ onAccept }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] md:w-auto z-50 p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm text-gray-300 text-center md:text-left">
          Bienvenido a Corporación Cervantes. Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestro uso de cookies.
        </p>
        <button 
          onClick={onAccept}
          className="bg-brand-blue text-white font-bold py-2 px-6 rounded-full hover:bg-sky-600 transition-colors duration-300 flex-shrink-0"
        >
          Aceptar
        </button>
      </div>
    </motion.div>
  );
};

export default WelcomeBanner;