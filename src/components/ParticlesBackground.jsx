import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Inicializa el motor de partículas
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: {
        value: '#0A0A0A', // Coincide con nuestro dark-bg
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#334155', // Un color sutil, como gris azulado
      },
      links: {
        color: '#475569', // Color de las líneas que unen las partículas
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesBackground;