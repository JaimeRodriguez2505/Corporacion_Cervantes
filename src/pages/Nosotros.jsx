import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import CountUp from 'react-countup';
// 1. Importamos el fondo de partículas que ya creamos
import ParticlesBackground from '../components/ParticlesBackground';

// 2. CORRECCIÓN IMPORTANTE: La ruta ahora apunta a la carpeta `public`
const nosotrosImg = '/assets/staff.jpg';

// --- Variantes de Animación para un look profesional ---

const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }
    }
}

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const statCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const philosophyTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
}

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
}

// Componente para las tarjetas de estadísticas con animación
const StatCard = ({ end, suffix, title }) => (
  <motion.div 
    variants={statCardVariants}
    className="bg-gray-900/50 border border-white/10 p-6 rounded-xl text-center backdrop-blur-sm"
  >
    <span className="text-5xl font-extrabold text-brand-blue">
      <CountUp end={end} duration={3} enableScrollSpy scrollSpyOnce />
      {suffix}
    </span>
    <p className="text-gray-400 mt-2">{title}</p>
  </motion.div>
);

const Nosotros = () => {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      {/* El div principal ahora es relativo para contener el fondo de partículas */}
      <div className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden">
        <ParticlesBackground />
        
        {/* El contenido se pone en un div con z-index para que esté por encima del fondo */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
            
            {/* 3. Encabezado con efecto Glassmorphism y animación de entrada */}
            <motion.div 
                className="text-center max-w-4xl mx-auto mb-20 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                {t('nosotros_page.title')}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                {t('nosotros_page.subtitle')}
                </p>
            </motion.div>

            {/* 4. Contenedor de estadísticas con animación en cascada */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={statsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <StatCard end={20} suffix="+" title={t('nosotros_page.stat1_title')} />
                <StatCard end={500} suffix="+" title={t('nosotros_page.stat2_title')} />
                <StatCard end={80} suffix="+" title={t('nosotros_page.stat3_title')} />
            </motion.div>

            {/* 5. Sección de filosofía con animación para texto e imagen */}
            <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                    className="order-2 md:order-1"
                    variants={philosophyTextVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">{t('nosotros_page.section_title')}</h2>
                    <p className="text-gray-300 leading-relaxed">
                        {t('nosotros_page.philosophy')}
                    </p>
                </motion.div>
                <motion.div 
                    className="order-1 md:order-2"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="p-2 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                        <img src={nosotrosImg} alt="Equipo de Corporación Cervantes" className="rounded-lg shadow-2xl" />
                    </div>
                </motion.div>
            </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Nosotros;