import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../components/AnimatedPage';
import { FaArrowRight } from 'react-icons/fa6';
import WelcomeBanner from '../components/WelcomeBanner';

// --- Variantes de animación (sin cambios) ---
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.04, // Un poco más rápido para que se sienta bien en móvil
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
  
  const [showBanner, setShowBanner] = useState(true);
  const [videoCanPlay, setVideoCanPlay] = useState(false);
  const videoRef = useRef(null);
  
  const keywords = ["Audio Profesional", "Diseño de Iluminación", "Pantallas LED", "Producción Integral"];
  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoCanPlay && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("El video no pudo reproducirse automáticamente:", error);
      });
    }
  }, [videoCanPlay]);

  // 1. EL TÍTULO AHORA ES UN ARRAY DE PALABRAS
  const titleWords = ["Corporación", "Cervantes"];

  const handleAccept = () => {
    setShowBanner(false);
    setVideoCanPlay(true);
  };
  const handleReject = () => {
    setShowBanner(false);
    // Opcional: puedes decidir no hacer nada o mostrar una imagen estática si rechaza
  };

  return (
    <AnimatedPage>
      <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/ddqtaorwz/video/upload/v1750712042/Cervantes_s1gxam.mp4"
            loop
            muted
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
            // 2. TAMAÑOS DE TEXTO RESPONSIVOS
            // text-4xl: por defecto (móvil muy pequeño)
            // sm:text-5xl: para móviles un poco más grandes
            // md:text-7xl: para tablets
            // lg:text-8xl: para escritorios
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4"
          >
            {/* 3. LÓGICA MEJORADA: Se mapea por palabra y luego por letra */}
            {titleWords.map((word, wordIndex) => (
              <span key={word} className="whitespace-nowrap inline-block mr-4">
                {word.split("").map((char, charIndex) => (
                  <motion.span key={char + "-" + charIndex} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
          
          {/* 4. SUBTÍTULO AHORA RESPONSIVO */}
          <div className="text-lg md:text-xl max-w-3xl mx-auto font-light text-gray-300 h-20 md:h-16 flex flex-col sm:flex-row items-center justify-center">
            <p className="sm:mr-3 whitespace-nowrap">Potenciamos shows con:</p>
            <AnimatePresence mode="wait">
              <motion.span
                key={keywords[keywordIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-brand-blue font-bold text-xl md:text-2xl"
              >
                {keywords[keywordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.div /* ... (Botón sin cambios) ... */>
            <Link to="/portafolio" className="group bg-brand-blue text-white font-bold py-4 px-8 rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-sky-500/20 inline-flex items-center gap-3">
              <span>Explora Nuestro Trabajo</span>
              <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}> <FaArrowRight /> </motion.div>
            </Link>
          </motion.div>

          <motion.p /* ... (Prueba Social sin cambios) ... */>
            La productora de confianza para artistas como <span className="font-semibold text-gray-300">Romeo Santos, Sebastián Yatra</span> y <span className="font-semibold text-gray-300">José Madero.</span>
          </motion.p>
        </div>

        <AnimatePresence>
          {showBanner && <WelcomeBanner onAccept={handleAccept} onReject={handleReject} />}
        </AnimatePresence>
      </section>
    </AnimatedPage>
  );
};

export default Home;