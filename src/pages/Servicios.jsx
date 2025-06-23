import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import AnimatedPage from '../components/AnimatedPage';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaMicrophoneLines, FaLightbulb, FaDesktop, FaRulerCombined, FaTruck, FaCirclePlay } from 'react-icons/fa6';
import { marcasDB } from '/src/data/marcas.js';

// --- Variantes de Animación ---
const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }
    }
};

// --- Componentes Internos de la Página ---

const ServiceCard = ({ icon, title, description, brands, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center backdrop-blur-sm group relative overflow-hidden h-full"
    >
      <div className="absolute top-0 left-0 w-full h-full border-2 border-brand-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-95 group-hover:scale-100"></div>
      
      <div className="relative z-10 flex flex-col flex-grow">
        <div className="bg-brand-blue/10 p-4 rounded-full mb-6 inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed flex-grow">{description}</p>
        <div className="border-t border-white/10 w-full pt-4 mt-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Marcas Destacadas</h4>
            <div className="flex justify-center items-center gap-4 grayscale opacity-60">
                {brands.slice(0, 3).map(brand => (
                    <img key={brand.id} src={brand.logoFile} alt={brand.name} className="h-4" />
                ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProcesoCard = ({ icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="text-center"
    >
        <div className="bg-white/5 border border-white/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
    </motion.div>
);


// --- Componente Principal de la Página ---

const Servicios = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaMicrophoneLines size={32} className="text-brand-blue" />,
      title: t('servicios_page.audio_title'),
      description: t('servicios_page.audio_desc'),
      brands: marcasDB.filter(m => m.category === 'audio')
    },
    {
      icon: <FaLightbulb size={32} className="text-brand-blue" />,
      title: t('servicios_page.lighting_title'),
      description: t('servicios_page.lighting_desc'),
      brands: marcasDB.filter(m => m.category === 'lighting')
    },
    {
      icon: <FaDesktop size={32} className="text-brand-blue" />,
      title: t('servicios_page.video_title'),
      description: t('servicios_page.video_desc'),
      brands: marcasDB.filter(m => m.category === 'video')
    }
  ];

  return (
    <AnimatedPage>
      <div className="relative w-full pt-32 pb-20 overflow-hidden bg-dark-bg">
        <ParticlesBackground />
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
            <motion.div 
                className="text-center max-w-4xl mx-auto mb-20 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                {t('servicios_page.title')}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                {t('servicios_page.subtitle')}
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} index={index} {...service} />
                ))}
            </div>
        </div>

        <div className="w-full mt-24 py-16 bg-black/20">
            <h2 className="text-center text-3xl font-bold text-white mb-2">Marcas de Prestigio Mundial</h2>
            <p className="text-center text-gray-400 mb-10">Solo trabajamos con lo mejor para garantizar resultados impecables.</p>
            <Marquee gradient={true} gradientColor="#0A0A0A" gradientWidth={100} speed={40}>
                {marcasDB.map(brand => (
                    <div key={brand.id} className="mx-12">
                        <img src={brand.logoFile} alt={brand.name} className="h-8 grayscale hover:grayscale-0 transition-all duration-300" />
                    </div>
                ))}
            </Marquee>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8 mt-24">
            <h2 className="text-center text-3xl font-bold text-white mb-16">De la Visión a la Realidad: Nuestro Proceso</h2>
            <div className="grid md:grid-cols-3 gap-12">
                <ProcesoCard 
                    index={0}
                    icon={<FaRulerCombined size={40} className="text-brand-blue" />}
                    title="1. Diseño y Planificación"
                    description="Analizamos tus necesidades para diseñar una solución técnica a medida, utilizando software de predicción y visualización 3D."
                />
                <ProcesoCard 
                    index={1}
                    icon={<FaTruck size={40} className="text-brand-blue" />}
                    title="2. Implementación y Montaje"
                    description="Nuestro equipo logístico y técnico certificado se encarga del transporte y montaje con precisión milimétrica y los más altos estándares de seguridad."
                />
                 <ProcesoCard 
                    index={2}
                    icon={<FaCirclePlay size={40} className="text-brand-blue" />}
                    title="3. Ejecución y Soporte"
                    description="Durante el evento, nuestros operadores expertos aseguran un show impecable y están listos para solucionar cualquier eventualidad al instante."
                />
            </div>
        </div>
        
        <div className="relative z-10 max-w-screen-md mx-auto mt-24 text-center">
            <h2 className="text-4xl font-extrabold text-white">¿Listo para crear algo inolvidable?</h2>
            <p className="text-xl text-gray-300 mt-4">Nuestro equipo está listo para convertir tu visión en un evento espectacular. Hablemos.</p>
            <Link to="/contacto">
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-brand-blue text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg shadow-sky-500/20"
                >
                    Cotiza tu Proyecto
                </motion.button>
            </Link>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Servicios;