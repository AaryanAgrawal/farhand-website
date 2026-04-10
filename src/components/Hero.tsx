'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#000'
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
          opacity: 0.35, 
          zIndex: 0
        }}
      >
        <source src="/Farhand website.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div style={{ zIndex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div style={{ y: y1, opacity }} transition={{ duration: 0.8 }}>
          <h1 style={{ marginBottom: '2rem', maxWidth: '1000px', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            Your field service partner
          </h1>
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            maxWidth: '900px',
            marginBottom: '3.5rem',
            textShadow: '0 4px 15px rgba(0,0,0,0.8)'
          }}
        >
          Our AI-guided technicians install & service your robots & machinery at your client sites.
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          Deploy smarter
        </motion.button>
      </div>

      {/* Subtle bottom gradient/shadow for blend */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '20vh',
        background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)',
        zIndex: 0
      }} />
    </section>
  );
}
