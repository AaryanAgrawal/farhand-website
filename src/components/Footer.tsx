'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="section-padding" style={{ paddingBottom: '3rem', background: 'var(--background)' }}>
      <div className="container">
        
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ textAlign: 'center', marginBottom: '8rem' }}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 28px)', marginBottom: '4rem', lineHeight: 1.4 }}>
            You don't need a field support team. <br/>
            You need field service <span className="text-accent">done.</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '12px', fontFamily: 'var(--font-inter)', fontWeight: 500, color: '#888', marginBottom: '0.5rem' }}>
                  Email
                </p>
                <p style={{ fontSize: '18px', color: 'var(--light-gray)', margin: 0, lineHeight: 1.5 }}>
                  aaryan@farhand.live<br/>
                  (857) 498-9778
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: '#000',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  alignSelf: 'center',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#000')}
              >
                Schedule a call
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '2rem',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <p style={{ fontSize: '16px', color: 'var(--light-gray)', marginBottom: '1rem' }}>
              Your field support partner
            </p>
            <a href="#" style={{ fontSize: '16px', color: 'var(--light-gray)', textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.3)' }}>
              Terms & Privacy
            </a>
          </div>

          <p style={{ fontSize: '18px', color: 'var(--light-gray)', textAlign: 'right', margin: 0 }}>
            Designed by SF-based roboticists<br/>
            For robots out in the field
          </p>
        </div>

      </div>
    </footer>
  );
}
