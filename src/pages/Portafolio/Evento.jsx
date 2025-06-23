import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// 1. SOLUCIÓN AL ERROR: Importamos el hook que faltaba.
import { useTranslation } from 'react-i18next';

// 2. MEJORA DE DISEÑO: Importamos el nuevo efecto para la galería.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import AnimatedPage from '../../components/AnimatedPage';
import { eventosDB } from '../../data/eventos';

const Evento = () => {
  const { eventoId } = useParams();
  // Ahora esta línea funcionará sin problemas.
  const { t, i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage;
  
  const evento = eventosDB.find(e => e.id === eventoId);

  if (!evento) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        <h1 className="text-3xl">Evento no encontrado.</h1>
        <Link to="/portafolio" className="ml-4 text-brand-blue underline">Volver al Portafolio</Link>
      </div>
    );
  }

  const techDetails = [
    { title: t('evento_page.audio'), content: evento.implementacion.audio[currentLang] },
    { title: t('evento_page.lighting'), content: evento.implementacion.iluminacion[currentLang] },
    { title: t('evento_page.video'), content: evento.implementacion.video[currentLang] },
    { title: t('evento_page.logistics'), content: evento.implementacion.logistica[currentLang] },
  ];

  // 3. MEJORA DE DISEÑO: Variantes para animar la entrada del contenido.
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatedPage>
      <div className="text-white min-h-screen bg-dark-bg">
        {/* El encabezado se mantiene similar, es una base sólida */}
        <div className="relative h-[60vh]">
           <motion.img layoutId={`card-image-${evento.id}`} src={evento.coverImage} alt={evento.artista} className="absolute w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-black/50 to-transparent"></div>
           <div className="relative h-full flex flex-col justify-end max-w-screen-xl mx-auto px-8 pb-16">
              <motion.h1 layoutId={`card-title-${evento.id}`} className="text-4xl md:text-7xl font-black">{evento.artista}</motion.h1>
              <motion.p layoutId={`card-lugar-${evento.id}`} className="text-lg md:text-xl text-gray-300">{evento.lugar[currentLang]}</motion.p>
           </div>
        </div>

        {/* Aplicamos las variantes de animación al contenedor principal del contenido */}
        <motion.div 
            className="max-w-screen-xl mx-auto px-8 my-16"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold mb-4 text-brand-blue">{t('evento_page.project_description')}</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">{evento.descripcion[currentLang]}</p>
                    
                    <h3 className="text-3xl font-bold mt-12 mb-6 text-brand-blue">{t('evento_page.event_gallery')}</h3>
                    
                    {/* 4. MEJORA DE DISEÑO: Galería con efecto Coverflow */}
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="w-full rounded-lg"
                    >
                        {evento.galeria.map((img, index) => (
                            <SwiperSlide key={index} style={{ width: '70%', aspectRatio: '16/9' }}>
                                <img src={img} alt={`Galería ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="lg:col-span-1">
                    {/* 5. MEJORA DE DISEÑO: Ficha técnica con Glassmorphism */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sticky top-28">
                        <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">{t('evento_page.tech_sheet')}</h3>
                        <div className="space-y-6">
                            {techDetails.map(detail => (
                                <div key={detail.title}>
                                    <h4 className="font-semibold text-brand-blue">{detail.title}</h4>
                                    <p className="text-gray-300 text-sm mt-1">{detail.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </AnimatedPage>
  );
};

export default Evento;