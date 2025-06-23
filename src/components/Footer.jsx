import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importamos motion
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const { t } = useTranslation();

  return (
    // Convertimos el footer en un componente de motion
    <motion.footer 
        className="bg-black border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
    >
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* 2. REEMPLAZAMOS EL TEXTO POR LA IMAGEN DEL LOGO CON ANIMACIÓN */}
            <motion.img 
              src="/public/logo.png" // Misma ruta al logo
              alt="Corporación Cervantes Logo"
              className="h-12" // Un poco más grande para el footer
              whileHover={{ scale: 1.05,
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.7))' 
              }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-400 text-base">
              {t('home.subtitle')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navegación</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/nosotros" className="text-base text-gray-300 hover:text-white">{t('navbar.nosotros')}</Link></li>
                  <li><Link to="/servicios" className="text-base text-gray-300 hover:text-white">{t('navbar.servicios')}</Link></li>
                  <li><Link to="/portafolio" className="text-base text-gray-300 hover:text-white">{t('navbar.portafolio')}</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{t('contacto_page.direct_contact')}</h3>
                 <ul className="mt-4 space-y-4">
                  <li><Link to="/contacto" className="text-base text-gray-300 hover:text-white">{t('navbar.contacto')}</Link></li>
                  {/* Actualizamos con la nueva data de contacto */}
                  <li><a href="mailto:gloria@corporacioncervantes.com" className="text-base text-gray-300 hover:text-white">gloria@corporacioncervantes.com</a></li>
                  <li><a href="tel:+51997547440" className="text-base text-gray-300 hover:text-white">+51 997 547 440</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; {new Date().getFullYear()} Corporación Cervantes. Todos los derechos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;