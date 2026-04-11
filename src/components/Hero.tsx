'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -60]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
          zIndex: 0,
        }}
      >
        <source src="/Farhand website.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="container" style={{ zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div style={{ y: y1, opacity }} transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}>
          <h1 style={{
            marginBottom: '1.5rem',
            maxWidth: '1000px',
            textShadow: '0 4px 30px rgba(0,0,0,0.9)',
            fontWeight: 400,
          }}>
            Your field service partner
          </h1>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          style={{
            maxWidth: '850px',
            marginBottom: '3rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.8)',
            color: 'var(--light-gray)',
            fontWeight: 400,
          }}
        >
          Our AI-guided technicians install & service your robots & machinery at your client sites.
        </motion.h2>

        <motion.a
          href="#schedule"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary"
        >
          Deploy smarter
        </motion.a>
      </div>
    </section>
  );
}
