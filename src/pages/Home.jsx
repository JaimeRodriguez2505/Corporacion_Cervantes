import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../components/AnimatedPage';
import { FaArrowRight } from 'react-icons/fa6';
import WelcomeBanner from '../components/WelcomeBanner';

// --- Variantes para la animación letra por letra ---
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08, // Retraso entre cada letra
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Home = () => {
  const { t } = useTranslation();
  
  // Estado para el banner y para el video
  const [showBanner, setShowBanner] = useState(true);
  const [videoCanPlay, setVideoCanPlay] = useState(false);

  // Referencia al elemento <video> del DOM
  const videoRef = useRef(null);
  
  // Lógica para el texto rotativo
  const keywords = ["Audio Profesional", "Diseño de Iluminación", "Pantallas LED Gigantes", "Producción Técnica Integral"];
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000); // Cambia la palabra cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  // Efecto que reproduce el video cuando el estado 'videoCanPlay' cambia a true
  useEffect(() => {
    if (videoCanPlay && videoRef.current) {
      // Usamos una promesa para asegurarnos de que no haya errores si el video ya está sonando
      videoRef.current.play().catch(error => {
        console.log("El video no pudo reproducirse automáticamente:", error);
      });
    }
  }, [videoCanPlay]);

  const title = "Corporación Cervantes";

  // Función que se ejecuta al hacer clic en "Aceptar" en el banner
  const handleAccept = () => {
    setShowBanner(false);
    setVideoCanPlay(true);
  };

  return (
    <AnimatedPage>
      <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            ref={videoRef} // Conectamos la referencia al elemento
            src="/assets/videos/Cervantes.mp4" // Ruta al video en la carpeta 'public'
            loop
            muted // Muted es clave para que los navegadores permitan la reproducción
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.h1
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            {title.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          
          <div className="text-lg md:text-2xl max-w-3xl mx-auto font-light text-gray-300 h-16 flex items-center justify-center">
            <p className="mr-3">Potenciamos los espectáculos más grandes con:</p>
            <AnimatePresence mode="wait">
              <motion.span
                key={keywords[keywordIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-brand-blue font-bold"
              >
                {keywords[keywordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
            className="mt-8"
          >
            <Link to="/portafolio" className="group bg-brand-blue text-white font-bold py-4 px-8 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/20 inline-flex items-center gap-3">
              <span>Explora Nuestro Trabajo</span>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaArrowRight />
              </motion.div>
            </Link>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-sm text-gray-400 mt-6"
          >
            La productora de confianza para artistas como <span className="font-semibold text-gray-300">Romeo Santos, Sebastián Yatra</span> y <span className="font-semibold text-gray-300">José Madero.</span>
          </motion.p>
        </div>

        <AnimatePresence>
          {showBanner && <WelcomeBanner onAccept={handleAccept} />}
        </AnimatePresence>
      </section>
    </AnimatedPage>
  );
};

export default Home;