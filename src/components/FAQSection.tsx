'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  includeSchema?: boolean;
  maxWidth?: string;
}

const ease = [0.19, 1, 0.22, 1] as const;

export default function FAQSection({
  title = 'Frequently asked questions',
  subtitle,
  faqs,
  includeSchema = true,
  maxWidth = '800px',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section
      className="section-padding"
      style={{ background: '#000', position: 'relative' }}
    >
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className="container" style={{ maxWidth }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          viewport={{ once: true, margin: '-100px' }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 4rem)' }}
        >
          <h3 style={{ marginBottom: subtitle ? '1rem' : 0, fontWeight: 400 }}>
            {title}
          </h3>
          {subtitle && (
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: 'var(--light-gray)',
                opacity: 0.8,
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6, ease }}
                viewport={{ once: true }}
                style={{
                  borderBottom: '1px solid var(--border-color)',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 0',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--foreground)',
                    fontSize: 'clamp(17px, 2vw, 20px)',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    minHeight: '44px',
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span style={{ flex: 1, paddingRight: '1rem' }}>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      color: 'var(--accent-green)',
                      fontSize: '24px',
                      fontWeight: 300,
                      lineHeight: 1,
                      flexShrink: 0,
                    }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          color: 'var(--light-gray)',
                          lineHeight: 1.6,
                          margin: 0,
                          paddingBottom: '1.5rem',
                          paddingRight: '3rem',
                          opacity: 0.9,
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
