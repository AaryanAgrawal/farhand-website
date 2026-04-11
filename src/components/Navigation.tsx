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
        padding: '1.5rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
            padding: '16px 24px',
          }}
        >
          Schedule a Call
        </motion.a>
      </div>
    </motion.nav>
  );
}
