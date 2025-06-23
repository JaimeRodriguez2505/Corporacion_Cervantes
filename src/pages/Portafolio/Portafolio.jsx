import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../../components/AnimatedPage';
import { eventosDB } from '../../data/eventos'; 
import ParticlesBackground from '../../components/ParticlesBackground';

// --- Definimos las variantes de animación ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            // AQUÍ ESTÁ LA CORRECCIÓN: Cambiamos -0.01 por un valor válido.
            ease: [0.6, 0.05, 0.01, 0.99]
        }
    }
}


const EventCard = ({ evento }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage;

  return (
    <motion.div variants={cardVariants}>
      <Link to={`/portafolio/${evento.id}`}>
        <motion.div
          layoutId={`card-container-${evento.id}`}
          className="relative rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg shadow-black/30"
          whileHover={{ scale: 1.03, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img layoutId={`card-image-${evento.id}`} src={evento.coverImage} alt={evento.artista} className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <motion.h3 layoutId={`card-title-${evento.id}`} className="text-2xl font-bold">{evento.artista}</motion.h3>
            <motion.p layoutId={`card-lugar-${evento.id}`} className="text-gray-300">
              {evento.lugar[currentLang] || evento.lugar.es}
            </motion.p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};


const Portafolio = () => {
  const { t } = useTranslation();

  return (
    <AnimatedPage>
      <div className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden">
        <ParticlesBackground />
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-4 md:px-8">
            <motion.div 
                className="text-center max-w-4xl mx-auto mb-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                {t('portafolio_page.title')}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                {t('portafolio_page.subtitle')}
                </p>
            </motion.div>
          
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {eventosDB.map(evento => (
                    <EventCard key={evento.id} evento={evento} />
                ))}
            </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Portafolio;