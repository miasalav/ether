'use client';

import { useEffect } from 'react';

const CursorTrail = () => {
  useEffect(() => {
    const trailContainer = document.createElement('div');
    Object.assign(trailContainer.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: '9999',
    });
    document.body.appendChild(trailContainer);

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement('img');
      particle.src = '/stars.png'; // ⚠️ Make sure this file exists in /public
      Object.assign(particle.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '12px',
        height: '12px',
        transform: 'translate(-50%, -50%) scale(1)',
        opacity: '1',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        pointerEvents: 'none',
      });

      trailContainer.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'translate(-50%, -50%) scale(1.8)';
      });

      setTimeout(() => {
        trailContainer.removeChild(particle);
      }, 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
    };

    let lastTime = 0;

  const throttledMouseMove = (e: MouseEvent) => {
    const now = Date.now();
    if (now - lastTime > 100) { // adjust this value to control frequency (e.g., 50 = fewer)
      createParticle(e.clientX, e.clientY);
      lastTime = now;
    }
  };

  document.addEventListener('mousemove', throttledMouseMove);

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      document.body.removeChild(trailContainer);
    };
  }, []);

  return null;
};

export default CursorTrail;
