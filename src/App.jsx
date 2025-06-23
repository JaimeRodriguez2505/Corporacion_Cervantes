import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis'
import { AnimatePresence } from 'framer-motion';


// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Portafolio from './pages/Portafolio/Portafolio';
import Evento from './pages/Portafolio/Evento';
import Contacto from './pages/Contacto';

function App() {
  const location = useLocation();

  // Configuración de Scroll Suave (Lenis)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/portafolio/:eventoId" element={<Evento />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;