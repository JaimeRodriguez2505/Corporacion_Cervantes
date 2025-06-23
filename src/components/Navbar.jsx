import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher'; 
import logoCervantes from '../assets/cervantes2.png';

const NavLinkItem = ({ to, children, onClick }) => (
  <li>
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block py-2 px-3 rounded md:p-0 transition-colors duration-300 text-lg md:text-sm ${
          isActive
            ? 'text-white bg-brand-blue md:bg-transparent md:text-brand-blue'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:hover:text-white'
        }`
      }
    >
      {children}
    </NavLink>
  </li>
);

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black/30 backdrop-blur-lg fixed w-full z-50 top-0 start-0 border-b border-gray-800 h-20 flex items-center">
      <div className="max-w-screen-2xl w-full flex items-center justify-between mx-auto px-4">
        
        <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
          <motion.img 
            src={logoCervantes} 
            alt="Corporación Cervantes Logo"
            className="h-64 -mb-44 -ml-6 -mt-8"
            whileHover={{ 
                scale: 1.05,
                filter: 'drop-shadow(0 0 8px rgba(255, 191, 0, 0.6))'
            }}
            transition={{ duration: 0.3 }}
          />
        </Link>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
            <div className={`hidden md:flex items-center space-x-8`}>
                <ul className="flex items-center space-x-8 list-none">
                    <NavLinkItem to="/nosotros" onClick={closeMenu}>{t('navbar.nosotros')}</NavLinkItem>
                    <NavLinkItem to="/servicios" onClick={closeMenu}>{t('navbar.servicios')}</NavLinkItem>
                    <NavLinkItem to="/portafolio" onClick={closeMenu}>{t('navbar.portafolio')}</NavLinkItem>
                    <NavLinkItem to="/contacto" onClick={closeMenu}>{t('navbar.contacto')}</NavLinkItem>
                </ul>
            </div>
            <Link to="/contacto" className="text-white bg-brand-blue hover:bg-sky-600 focus:ring-4 focus:ring-sky-800 font-medium rounded-full text-sm px-4 py-2 sm:px-5 sm:py-2.5 text-center hidden md:block" onClick={closeMenu}>
                {t('navbar.cotizar')}
            </Link>
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600" aria-controls="navbar-mobile-menu" aria-expanded={isOpen}>
                <span className="sr-only">Abrir menú</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/></svg>
            </button>
        </div>
      </div>
      
      {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t border-gray-800">
              <ul className="flex flex-col items-center p-4 space-y-4 list-none">
                  <NavLinkItem to="/nosotros" onClick={closeMenu}>{t('navbar.nosotros')}</NavLinkItem>
                  <NavLinkItem to="/servicios" onClick={closeMenu}>{t('navbar.servicios')}</NavLinkItem>
                  <NavLinkItem to="/portafolio" onClick={closeMenu}>{t('navbar.portafolio')}</NavLinkItem>
                  <NavLinkItem to="/contacto" onClick={closeMenu}>{t('navbar.contacto')}</NavLinkItem>
                  <li>
                    <Link to="/contacto" className="text-white bg-brand-blue hover:bg-sky-600 font-medium rounded-full text-sm px-10 py-2.5 text-center" onClick={closeMenu}>
                        {t('navbar.cotizar')}
                    </Link>
                  </li>
              </ul>
          </div>
      )}
    </nav>
  );
};

// AQUÍ ESTÁ LA LÍNEA QUE FALTABA
export default Navbar;