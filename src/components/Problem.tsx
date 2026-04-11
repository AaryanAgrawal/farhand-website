'use client';

import React from 'react';
import { motion } from 'framer-motion';

const problems = [
  "Travelling or regional technicians don't scale",
  "Outsourced service contracts are slow and expensive",
  "Only your senior guy knows some repairs",
];

export default function Problem() {
  return (
    <section className="section-padding" style={{ background: '#000' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            marginBottom: 'clamp(3rem, 10vw, 6rem)',
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          You&apos;ve built a next-gen machine. <br /> Don&apos;t run it on last-gen ops.
        </motion.h4>

        <div className="grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {problems.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-glass"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '160px',
              }}
            >
              <p style={{
                fontSize: 'clamp(18px, 2.5vw, 20px)',
                fontWeight: 500,
                color: 'var(--foreground)',
                margin: 0,
                lineHeight: 1.4,
              }}>
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
