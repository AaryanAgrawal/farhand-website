'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.2rem 0',
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', minHeight: '44px' }}>
          <img
            src="/logo-w-type-dark.png"
            alt="Farhand Logo"
            style={{ height: '28px', filter: 'invert(1)', objectFit: 'contain' }}
          />
        </Link>

        <motion.a
          href="#schedule"
          whileHover={{ opacity: 0.8 }}
          style={{
            color: 'var(--accent-green)',
            fontSize: '18px',
            fontWeight: 400,
            textDecoration: 'none',
            padding: '10px 20px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Schedule a Call
        </motion.a>
      </div>
    </motion.nav>
  );
}
