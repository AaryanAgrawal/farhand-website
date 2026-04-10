'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.5rem 0',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(0,0,0,0.4)'
      }}
    >
      <div className="container flex-between">
        {/* Empty left block for balance if logo is center, or use as logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo-w-type-dark.png" alt="Farhand Logo" style={{ height: '32px', filter: 'invert(1)' }} />
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <motion.a
            href="mailto:aaryan@farhand.live"
            whileHover={{ opacity: 0.8 }}
            style={{
              color: 'var(--accent-green)',
              fontSize: '18px',
              fontFamily: 'var(--font-sans)',
              textDecoration: 'none'
            }}
          >
            Schedule a Call
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
