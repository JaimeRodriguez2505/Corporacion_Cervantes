import React from 'react';
import { motion } from 'framer-motion';
import { FaCookieBite } from 'react-icons/fa6'; // Un ícono para darle estilo

const WelcomeBanner = ({ onAccept, onReject }) => {
  return (
    // Contenedor del fondo oscurecido (Overlay)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      {/* Contenedor del Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="bg-gray-900/80 border border-white/10 rounded-2xl p-8 max-w-md w-[90%] text-center shadow-2xl"
      >
        <div className="flex justify-center mb-4">
          <FaCookieBite className="text-brand-blue text-4xl" />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Bienvenido</h3>
        
        <p className="text-gray-300 mb-6">
          Para una experiencia inmersiva, este sitio utiliza video de fondo. ¿Nos permites activarlo?
        </p>
        
        <div className="flex justify-center gap-4">
          <button 
            onClick={onReject}
            className="px-6 py-2 rounded-full text-white bg-transparent border border-gray-600 hover:bg-gray-700 transition-colors duration-300"
          >
            Rechazar
          </button>
          <button 
            onClick={onAccept}
            className="px-6 py-2 rounded-full text-white font-bold bg-brand-blue hover:bg-sky-600 transition-colors duration-300"
          >
            Aceptar y Activar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeBanner;