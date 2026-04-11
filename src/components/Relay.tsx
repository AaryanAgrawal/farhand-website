'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Wrench, Infinity } from 'lucide-react';

const steps = [
  { title: "Learns", desc: "your documentation", icon: <HelpCircle size={20} /> },
  { title: "Guides", desc: "technicians during repairs", icon: <Wrench size={20} /> },
  { title: "Improves", desc: "by text and voice debriefs", icon: <Infinity size={20} /> },
];

export default function Relay() {
  return (
    <section id="relay" className="section-padding" style={{ background: '#000' }}>
      <div className="container" style={{ textAlign: 'center' }}>

        {/* Solution Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1.5rem, 5vw, 3rem)',
            border: '1px solid var(--border-color)',
            borderRadius: '30px',
            maxWidth: '900px',
            margin: '0 auto clamp(3rem, 8vw, 5rem)',
          }}
        >
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--light-gray)', marginBottom: '1.5rem', fontWeight: 400, opacity: 0.9 }}>
            There&apos;s a better model
          </p>
          <h3 style={{ maxWidth: '750px', margin: '0 auto 1.5rem', fontWeight: 300, lineHeight: 1.45 }}>
            <strong>On-demand technicians guided by AI to service your machines like your own guys</strong>
          </h3>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--light-gray)', opacity: 0.8 }}>
            Every zip code in the US
          </p>
        </motion.div>

        {/* Farhand Relay Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: 'clamp(28px, 5vw, 34px)', marginBottom: '0.5rem', fontWeight: 300 }}>
            Farhand <strong>Relay</strong>&#8482;
          </h3>
          <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 400, color: 'var(--light-gray)', marginBottom: 'clamp(2rem, 6vw, 3rem)', opacity: 0.8 }}>
            <strong>Our AI platform that becomes your senior technician.</strong>
          </p>

          <div className="grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
                className="card-glass"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  minHeight: '160px',
                  textAlign: 'left',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid var(--accent-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-green)',
                  marginBottom: '1.5rem',
                }}>
                  {step.icon}
                </div>
                <p style={{ fontSize: 'clamp(20px, 3vw, 22px)', fontWeight: 500, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  {step.title}
                </p>
                <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--light-gray)', margin: 0, lineHeight: 1.5, opacity: 0.9 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
