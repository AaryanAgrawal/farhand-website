'use client';

import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  "Travelling or regional technicians don't scale",
  "Outsourced service contracts are slow and expensive",
  "Only your senior guy knows some repairs"
];

export default function Problem() {
  return (
    <section className="section-padding" style={{ background: 'var(--background)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 32px)', 
            marginBottom: '5rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            color: 'var(--foreground)',
            lineHeight: 1.3
          }}
        >
          You've built a next-gen machine. Don't run it on last-gen ops.
        </motion.h4>

        <div className="grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '160px'
              }}
            >
              <p style={{ 
                fontSize: '20px', 
                fontWeight: 500, 
                color: 'var(--foreground)',
                margin: 0
              }}>
                {problem}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
