import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ParticlesBackground from '../components/ParticlesBackground';
// AQUÍ ESTÁ LA CORRECCIÓN: Añadimos FaPhone y FaEnvelope a la importación
import { FaEnvelope, FaPhone, FaGlobe, FaTruckMoving, FaUsers } from 'react-icons/fa6';

// --- Variantes de Animación ---
const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }
    }
};

const contentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const mapVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

const Contacto = () => {
  const { t } = useTranslation();
  
  const [selectedLocation, setSelectedLocation] = useState('arequipa');

  // RECUERDA: Reemplaza las URLs con las tuyas de Google Maps
  const locations = {
    arequipa: {
      name: 'Sede Arequipa (Principal)',
      address: 'Variante de Uchumayo Km 3.5, Cerro Colorado, Arequipa',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15317.07225492655!2d-71.5779627!3d-16.4278051!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a1309334c97%3A0x66a64225a5879fc9!2sCorporacion%20Cervantes%20E.I.R.L.!5e0!3m2!1ses-419!2spe!4v1719165842137!5m2!1ses-419!2spe' 
    },
    lima: {
      name: 'Sede Lima',
      address: 'Av. El Derby 254, Santiago de Surco, Lima', // Dirección de ejemplo
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.584109405232!2d-77.01955368518645!3d-12.141549991404118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b80614563661%3A0x9525350994626353!2sJockey%20Plaza!5e0!3m2!1ses-419!2spe!4v1719165901570!5m2!1ses-419!2spe'
    }
  };

  const activeLocation = locations[selectedLocation];

  return (
    <AnimatedPage>
      <div className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden">
        <ParticlesBackground />
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:px-8">
            <motion.div 
                className="text-center max-w-4xl mx-auto mb-12"
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-white">Hablemos de tu Proyecto</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                  Estamos listos para convertir tu visión en un evento espectacular.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 mt-16">
              {/* --- COLUMNA DE INFORMACIÓN Y DATOS CLAVE --- */}
              <motion.div variants={contentVariants} initial="hidden" animate="visible">
                <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
                <div className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                    {/* SEGUNDA CORRECCIÓN: Usamos el ícono de sobre para el email */}
                    <InfoItem icon={<FaEnvelope />} label="Email Principal" value="gloria@corporacioncervantes.com" href="mailto:gloria@corporacioncervantes.com" />
                    <InfoItem icon={<FaPhone />} label="Teléfono" value="997 547 440" href="tel:+51997547440" />
                    
                    <div className="border-t border-white/10 my-6"></div>

                    <InfoItem icon={<FaGlobe />} label="Alcance" value="Conciertos y eventos corporativos a nivel nacional e internacional." />
                    <InfoItem icon={<FaTruckMoving />} label="Logística Propia" value="Flota de camiones, trailers y semitrailers para cualquier requerimiento." />
                    <InfoItem icon={<FaUsers />} label="Nuestro Equipo" value="Staff de profesionales con amplia y reconocida trayectoria en el rubro." />
                </div>
              </motion.div>

              {/* --- COLUMNA DE MAPAS DINÁMICOS --- */}
              <motion.div variants={mapVariants} initial="hidden" animate="visible">
                <h2 className="text-3xl font-bold text-white mb-6">Nuestras Sedes</h2>
                
                <div className="flex bg-white/5 border border-white/10 rounded-full p-1 mb-4">
                  <button onClick={() => setSelectedLocation('arequipa')} className={`w-1/2 py-2 rounded-full transition-colors duration-300 ${selectedLocation === 'arequipa' ? 'bg-brand-blue' : 'hover:bg-white/10'}`}>Arequipa</button>
                  <button onClick={() => setSelectedLocation('lima')} className={`w-1/2 py-2 rounded-full transition-colors duration-300 ${selectedLocation === 'lima' ? 'bg-brand-blue' : 'hover:bg-white/10'}`}>Lima</button>
                </div>
                
                <div className="bg-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedLocation}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <iframe 
                        src={activeLocation.mapUrl}
                        width="100%" 
                        height="350" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      ></iframe>
                      <div className="p-4 text-white">
                        <h3 className="font-bold">{activeLocation.name}</h3>
                        <p className="text-gray-300">{activeLocation.address}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

// Componente auxiliar para no repetir código
const InfoItem = ({ icon, label, value, href }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 mt-1 text-brand-blue">
            {React.cloneElement(icon, { size: 20 })}
        </div>
        <div className="ml-4">
            <h4 className="text-sm font-semibold text-gray-400">{label}</h4>
            {href ? (
                <a href={href} className="text-lg text-white hover:text-brand-blue transition-colors">{value}</a>
            ) : (
                <p className="text-lg text-white">{value}</p>
            )}
        </div>
    </div>
);

export default Contacto;